"use client"
import React, { useState } from 'react'
import Sidenav from '../components/sideNav'
import "../sass/Resources.scss"
import Vector from "../images/vector.jpg"
import Image from 'next/image'
import styles from '../sass/RippleButton.module.scss';
import MoodTracker from '../components/mood-tracker'
import Lottie from 'lottie-react';
import playAnimationData from '../lottie/lotie1.json';

const AnimatedButton = ({ onClick, children }) => {
  return (
    <button className={`${styles.rippleButton} ${styles.jumpButton}`} onClick={onClick}>
      <div className={styles.lottieContainer}>
        <Lottie animationData={playAnimationData} loop={true} />
      </div>
      {children}
    </button>
  );
};

const Resources = () => {
  const [moodTrackerVisible, setMoodTrackerVisible] = useState(false);

  const toggleMoodTracker = () => {
    setMoodTrackerVisible(!moodTrackerVisible);
  };

  return (
    <main className='container'>
      <div className="content-container">
        <div className="sidebar">
          <Sidenav />
        </div>
        <div className="content">
          <h1>Mental Health Resources and stress reducing activities</h1>
          
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
              <div className="article">
                <Image src={Vector} alt="Article 1" width={200} height={150} />
                <h3>Understanding Anxiety</h3>
                <p>Learn about the causes and symptoms of anxiety...</p>
                <button className={styles.rippleButton}>Read More</button>
              </div>
              <div className="article">
                <Image src={Vector} alt="Article 2" width={200} height={150} />
                <h3>Stress Management Techniques</h3>
                <p>Discover effective ways to manage daily stress...</p>
                <button className={styles.rippleButton}>Read More</button>
              </div>
              <div className="article">
                <Image src={Vector} alt="Article 3" width={200} height={150} />
                <h3>The Power of Positive Thinking</h3>
                <p>Explore how positive thinking can improve your mental health...</p>
                <button className={styles.rippleButton}>Read More</button>
              </div>
              <div className="article">
                <Image src={Vector} alt="Article 4" width={200} height={150} />
                <h3>Building Healthy Relationships</h3>
                <p>Tips for fostering strong, supportive relationships...</p>
                <button className={styles.rippleButton}>Read More</button>
              </div>
            </div>
          </section>
          
          <section className='videos'>
            <h2>Helpful Videos</h2>
            <div className="videos-container">
              <div className="video">
                <div className="video-thumbnail">
                  <Image src={Vector} alt="Video 1" width={300} height={200} />
                </div>
                <h3>Guided Meditation for Beginners</h3>
              </div>
              <div className="video">
                <div className="video-thumbnail">
                  <Image src={Vector} alt="Video 2" width={300} height={200} />
                </div>
                <h3>Understanding Depression</h3>
              </div>
              <div className="video">
                <div className="video-thumbnail">
                  <Image src={Vector} alt="Video 3" width={300} height={200} />
                </div>
                <h3>Coping with Panic Attacks</h3>
              </div>
              <div className="video">
                <div className="video-thumbnail">
                  <Image src={Vector} alt="Video 4" width={300} height={200} />
                </div>
                <h3>Improving Self-Esteem</h3>
              </div>
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
              <div className="mindfulness">
                <div className="overlay"></div>
                <div className="tool-content">
                  <h3>Mindfulness and meditation</h3>
                  <p>
                    Mindfulness is a practice of being fully present and aware of one's thoughts, feelings, and sensations without judgment. Practicing mindfulness can help reduce stress and improve focus.
                  </p>
                  <button className={styles.rippleButton}>Start</button>
                </div>
              </div>
              <div className="cbt">
                <div className="overlay"></div>
                <div className="tool-content">
                  <h3>Cognitive-behavioral therapy (CBT)</h3>
                  <p>
                    CBT is a structured approach to help people manage their thoughts, emotions, and behaviors. It involves identifying and changing negative thought patterns, promoting self-awareness, and developing coping strategies.
                  </p>
                  <button className={styles.rippleButton}>Start</button>
                </div>
              </div>
              <div className="mindful-eating">
                <div className="overlay"></div>
                <div className="tool-content">
                  <h3>Mindful eating</h3>
                  <p>
                    Mindful eating is a practice of focusing on the taste, smell, and texture of food without judgment. It can help reduce stress and promote a healthy diet.
                  </p>
                  <button className={styles.rippleButton}>Start</button>
                </div>
              </div>
              <div className="self-care">
                <div className="overlay"></div>
                <div className="tool-content">
                  <h3>Self-care routines</h3>
                  <p>
                    Self-care routines include exercise, a balanced diet, sleep, and relaxation techniques. These practices can help reduce stress and improve overall well-being.
                  </p>
                  <button className={styles.rippleButton}>Start</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Resources;