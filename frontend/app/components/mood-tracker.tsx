import React, { useState } from 'react';
import styles from '../sass/MoodTracker.module.scss';

type Mood = '😊' | '😐' | '😢' | '😠' | '😰';

const questions = [
  "How do you feel about your day overall?",
  "How was your sleep last night?",
  "How's your energy level right now?",
  "How do you feel about your social interactions today?",
  "How do you feel about your productivity today?"
];

const moodDescriptions: Record<Mood, string> = {
  '😊': 'Happy',
  '😐': 'Neutral',
  '😢': 'Sad',
  '😠': 'Angry',
  '😰': 'Anxious'
};

const MoodTracker: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [moodResults, setMoodResults] = useState<Mood[]>([]);

  const handleMoodSelection = (mood: Mood) => {
    setMoodResults([...moodResults, mood]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetTracker = () => {
    setCurrentQuestion(0);
    setMoodResults([]);
  };

  const calculateOverallMood = (): Mood => {
    const moodCounts = moodResults.reduce((acc, mood) => {
      acc[mood] = (acc[mood] || 0) + 1;
      return acc;
    }, {} as Record<Mood, number>);

    return Object.entries(moodCounts).reduce((a, b) => 
      moodCounts[a[0] as Mood] > moodCounts[b[0] as Mood] ? a : b
    )[0] as Mood;
  };

  if (moodResults.length === questions.length) {
    const overallMood = calculateOverallMood();
    return (
      <div className={styles.moodTracker}>
        <h2 className={styles.title}>Your Mood Summary</h2>
        <div className={styles.summary}>
          <div className={styles.overallMood}>
            <span className={styles.emoji}>{overallMood}</span>
            <p>Your overall mood: {moodDescriptions[overallMood]}</p>
          </div>
          <div className={styles.moodBreakdown}>
            {questions.map((question, index) => (
              <div key={index} className={styles.moodItem}>
                <span className={styles.emoji}>{moodResults[index]}</span>
                <p>{question}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={resetTracker} className={styles.resetButton}>
          Track Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.moodTracker}>
      <h2 className={styles.title}>Mood Tracker</h2>
      <div className={styles.questionContainer}>
        <p className={styles.question}>{questions[currentQuestion]}</p>
        <div className={styles.moodOptions}>
          {(Object.keys(moodDescriptions) as Mood[]).map((mood) => (
            <button
              key={mood}
              onClick={() => handleMoodSelection(mood)}
              className={styles.moodButton}
            >
              <span className={styles.emoji}>{mood}</span>
              <span className={styles.moodDescription}>{moodDescriptions[mood]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.progress}>
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
};

export default MoodTracker;