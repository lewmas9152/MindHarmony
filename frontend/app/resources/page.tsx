"use client"
import React, { useState, useEffect } from 'react'
import Sidenav from '../components/sideNav'
import { useRouter } from 'next/navigation';
import "../sass/Resources.scss"
import Image from 'next/image'
import styles from '../sass/RippleButton.module.scss';
import MoodTracker from '../components/mood-tracker'
import Lottie from 'lottie-react';
import playAnimationData from '../lottie/lotie1.json';

// Import images
import articleImage1 from '../images/article1.jpg'
import articleImage2 from '../images/article2.jpg'
import articleImage3 from '../images/article3.jpg'
import articleImage4 from '../images/article4.jpg'
import articleImage5 from '../images/article5.jpg'
import articleImage6 from '../images/article6.jpg'
import videoThumbnail1 from '../images/video1.jpg'
import videoThumbnail2 from '../images/video2.jpg'
import videoThumbnail3 from '../images/video3.jpg'
import videoThumbnail4 from '../images/video4.jpg'
import toolBackground1 from '../images/tool1.jpg'
import toolBackground2 from '../images/tool2.jpg'
import toolBackground3 from '../images/tool3.jpg'
import toolBackground4 from '../images/tool4.jpg'
import toolBackground5 from '../images/tool5.jpg'
import toolBackground6 from '../images/tool6.jpg'

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, children }) => {
  return (
    <button className={`${styles.rippleButton} ${styles.jumpButton}`} onClick={onClick}>
      <div className={styles.lottieContainer}>
        <Lottie animationData={playAnimationData} loop={true} />
      </div>
      {children}
    </button>
  );
};

const Resources: React.FC = () => {
  const [moodTrackerVisible, setMoodTrackerVisible] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState<string>('');
  const [journalEntries, setJournalEntries] = useState<string[]>([]);
  const [showJournal, setShowJournal] = useState<boolean>(false);

  useEffect(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setJournalEntries(JSON.parse(savedEntries));
    }
  }, []);

  const toggleMoodTracker = () => {
    setMoodTrackerVisible(!moodTrackerVisible);
  };

  const toggleVideo = (videoId: number) => {
    setActiveVideo(activeVideo === videoId ? null : videoId);
  };

  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(e.target.value);
  };

  const saveJournalEntry = () => {
    if (journalEntry.trim()) {
      const newEntries = [...journalEntries, journalEntry];
      setJournalEntries(newEntries);
      localStorage.setItem('journalEntries', JSON.stringify(newEntries));
      setJournalEntry('');
    }
  };
  
  const router = useRouter();
  const navigateToChat = () => {
    router.push('/chat');
  };
  
  const articles = [
    { image: articleImage1, title: "Understanding Anxiety", description: "Learn about the causes and symptoms of anxiety..." },
    { image: articleImage2, title: "Stress Management Techniques", description: "Discover effective ways to manage daily stress..." },
    { image: articleImage3, title: "The Power of Positive Thinking", description: "Explore how positive thinking can improve your mental health..." },
    { image: articleImage4, title: "Building Healthy Relationships", description: "Tips for fostering strong, supportive relationships..." },
    { image: articleImage5, title: "Overcoming Depression", description: "Strategies for managing and overcoming depression..." },
    { image: articleImage6, title: "Mindfulness in Daily Life", description: "Incorporating mindfulness practices into your routine..." },
  ];

  const videos = [
    { id: 1, thumbnail: videoThumbnail1, title: "Guided Meditation for Beginners" },
    { id: 2, thumbnail: videoThumbnail2, title: "Understanding Depression" },
    { id: 3, thumbnail: videoThumbnail3, title: "Coping with Panic Attacks" },
    { id: 4, thumbnail: videoThumbnail4, title: "Improving Self-Esteem" },
  ];

  const tools = [
    { background: toolBackground1, title: "Mindfulness and Meditation", description: "Practice being fully present and aware of your thoughts and feelings." },
    { background: toolBackground2, title: "Cognitive-Behavioral Therapy (CBT)", description: "Learn techniques to manage thoughts, emotions, and behaviors." },
    { background: toolBackground3, title: "Mindful Eating", description: "Develop a healthier relationship with food and eating habits." },
    { background: toolBackground4, title: "Self-Care Routines", description: "Create and maintain healthy self-care practices for overall well-being." },
    { background: toolBackground5, title: "Stress Reduction Techniques", description: "Explore various methods to reduce and manage stress in your life." },
    { background: toolBackground6, title: "Sleep Hygiene", description: "Improve your sleep quality and establish healthy sleep patterns." },
  ];

  return (
    <main className='container'>
      <div className="content-container">
        <div className="sidebar">
          <Sidenav />
        </div>
        <div className="content">
          <h1>Mental Health Resources and Stress Reducing Activities</h1>
          
          <section className='mood-tracker-anger-management'>
            <h2>Mood Tracker</h2>
            <AnimatedButton onClick={toggleMoodTracker}>
              Track your mood now!
            </AnimatedButton>
            {moodTrackerVisible && (
              <div className="mood-tracker">
                <MoodTracker />
                <p>Understanding your emotions is the first step towards better mental health. Use this tool daily to track your mood and identify patterns.</p>
              </div>
            )}
          </section>
          
          <section className='mental-health-articles'>
            <h2>Mental Health Articles</h2>
            <div className="articles-container">
              {articles.map((article, index) => (
                <div className="article" key={index}>
                  <Image src={article.image} alt={`Article ${index + 1}`} width={200} height={150} />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <button className={styles.rippleButton}>Read More</button>
                </div>
              ))}
            </div>
          </section>
          
          <section className='videos'>
            <h2>Helpful Videos</h2>
            <div className="videos-container">
              {videos.map((video) => (
                <div className="video" key={video.id}>
                  <div className="video-thumbnail">
                    <Image 
                      src={video.thumbnail} 
                      alt={`Video ${video.id}`} 
                      width={200}
                      height={150}
                      layout="responsive"
                    />
                    <button className={styles.rippleButton} onClick={() => toggleVideo(video.id)}>
                      {activeVideo === video.id ? 'Pause' : 'Play'}
                    </button>
                  </div>
                  <h3>{video.title}</h3>
                  {activeVideo === video.id && (
                    <video 
                      controls 
                      width="100%" 
                      height="auto" 
                      autoPlay
                      onError={(e) => console.error("Video error:", e.currentTarget.error)}
                    >
                      <source src="../videos/vid1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          <section className='stress-reduction-tools'>
            <h2>Stress Reduction Tools</h2>
            <div className="breathing-timer">
              <h3>Breathing Exercise</h3>
              <div className="timer">5:00</div>
              <button className={styles.rippleButton}>Start Timer</button>
            </div>
          </section>
          
          <section className='stress-management-container'>
            <h2>Stress Management</h2>
            <div className="tools">
              {tools.map((tool, index) => (
                <div className="tool" key={index}>
                  <div className="tool-background" style={{backgroundImage: `url(${tool.background.src})`}}></div>
                  <div className="overlay"></div>
                  <div className="tool-content">
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                    <button className={styles.rippleButton}>Start</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='journal'>
            <h2>Daily Journal</h2>
            <p>Reflect on your thoughts and feelings by maintaining a daily journal.</p>
            <button className={styles.rippleButton} onClick={() => setShowJournal(!showJournal)}>
              {showJournal ? 'Close Journal' : 'Open Journal'}
            </button>
            {showJournal && (
              <div className="journal-container">
                <textarea
                  value={journalEntry}
                  onChange={handleJournalChange}
                  placeholder="Write your thoughts here..."
                  rows={5}
                />
                <button className={styles.rippleButton} onClick={saveJournalEntry}>Save Entry</button>
                <div className="journal-entries">
                  <h3>Previous Entries</h3>
                  {journalEntries.map((entry, index) => (
                    <div key={index} className="journal-entry">
                      <p>{entry}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className='support-groups'>
            <h2>Support Groups</h2>
            <p>Connect with others who are going through similar experiences.</p>
            <button className={styles.rippleButton} onClick={navigateToChat}>Join Chat</button>
          </section>

          <section className='crisis-helpline'>
            <h2>Crisis Helpline</h2>
            <p>If you're in crisis, don't hesitate to reach out for immediate support.</p>
            <button className={styles.rippleButton}>Call Now</button>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Resources;