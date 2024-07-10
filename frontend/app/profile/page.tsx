import React from 'react';
import Image from 'next/image';
import styles from '../sass/Profile.module.scss';
import User1 from "../images/head-shot-portrait-happy-african-260nw-1541223032.webp";
import therapist1 from "../images/user1.jpg";
import therapist2 from "../images/user2.jpg";
import therapist3 from "../images/user3.jpg";
import downloadIcon from "../images/doc1.jpg";

const MentalHealthProfile: React.FC = () => {
  const mentalHealthHistory = [
    {
      dateOfVisit: '02/06/24',
      condition: 'Anxiety',
      severity: 'Moderate',
      totalSessions: 5,
      status: 'Ongoing Treatment',
      notes: 'path/to/notes1.pdf'
    },
    {
      dateOfVisit: '01/05/24',
      condition: 'Depression',
      severity: 'Mild',
      totalSessions: 3,
      status: 'Improving',
      notes: 'path/to/notes2.pdf'
    }
  ];

  return (
    <div className=" max-w-screen-2xl main-container">
      <div className={styles.profileContainer}>
        <div className={styles.personalDetails}>
          <div className={styles.person}>
            <div className={styles.bg}></div>
            <div className={styles.profilePic}>
              <Image
                src={User1}
                alt="User Avatar"
                width={80}
                height={80}
                quality={100}
                className={styles.avatar}
              />
            </div>
            <div className={styles.personName}>
              <h1>Sarah Johnson</h1>
            </div>
            <div className={styles.personEmail}>
              <p>sarah.johnson@example.com</p>
            </div>
            <div className={styles.edit}>
              <button>Edit Profile</button>
            </div>
          </div>
          <div className={styles.privateDetails}>
            <div className={styles.details}>
              <div className={styles.row1}>
                <div className={styles.detail}>
                  <h3>Age</h3>
                  <p>28</p>
                </div>
                <div className={styles.detail}>
                  <h3>Gender</h3>
                  <p>Female</p>
                </div>
                <div className={styles.detail}>
                  <h3>Occupation</h3>
                  <p>Teacher</p>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.detail}>
                  <h3>Therapy Start Date</h3>
                  <p>01/01/2024</p>
                </div>
                <div className={styles.detail}>
                  <h3>Primary Concern</h3>
                  <p>Anxiety</p>
                </div>
                <div className={styles.detail}>
                  <h3>Treatment Approach</h3>
                  <p>CBT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.otherDetails}>
          <div className={styles.mentalHealthStats}>
            <h2>Mental Health Stats</h2>
            <div className={styles.detail}>
              <h3>Mood Tracker</h3>
              <p>Generally Positive</p>
            </div>
            <div className={styles.detail}>
              <h3>Anxiety Level</h3>
              <p>Moderate (6/10)</p>
            </div>
            <div className={styles.detail}>
              <h3>Sleep Quality</h3>
              <p>Improving (7/10)</p>
            </div>
            <div className={styles.detail}>
              <h3>Stress Level</h3>
              <p>Manageable (5/10)</p>
            </div>
            <div className={styles.detail}>
              <h3>Mindfulness Practice</h3>
              <p>3 times/week</p>
            </div>
          </div>
          <div className={styles.therapists}>
            <h2>My Therapists</h2>
            <div className={styles.therapist}>
              <Image
                src={therapist1}
                alt="Dr. Emily Brown"
                width={60}
                height={60}
                className={styles.therapistPhoto}
              />
              <div className={styles.therapistInfo}>
                <h3>Dr. Emily Brown</h3>
                <p>Psychologist</p>
              </div>
              <button className={styles.contactButton}>Contact</button>
            </div>
            <div className={styles.therapist}>
              <Image
                src={therapist2}
                alt="Dr. Michael Lee"
                width={60}
                height={60}
                className={styles.therapistPhoto}
              />
              <div className={styles.therapistInfo}>
                <h3>Dr. Michael Lee</h3>
                <p>Psychologist</p>
              </div>
              <button className={styles.contactButton}>Contact</button>
            </div>
            <div className={styles.therapist}>
              <Image
                src={therapist3}
                alt="Dr. Sophia Garcia"
                width={60}
                height={60}
                className={styles.therapistPhoto}
              />
              <div className={styles.therapistInfo}>
                <h3>Dr. Sophia Garcia</h3>
                <p>Psychologist</p>
              </div>
              <button className={styles.contactButton}>Contact</button>
            </div>
          </div>
        </div>
        <div className={styles.mentalHealthHistory}>
          <h2>Mental Health History</h2>
          {mentalHealthHistory.map((item, index) => (
            <div key={index} className={styles.historyItem}>
              <div className={styles.historyContent}>
                <div className={styles.historyDetail}>
                  <h3>Date of Visit</h3>
                  <p>{item.dateOfVisit}</p>
                </div>
                <div className={styles.historyDetail}>
                  <h3>Condition</h3>
                  <p>{item.condition}</p>
                </div>
                <div className={styles.historyDetail}>
                  <h3>Severity</h3>
                  <p>{item.severity}</p>
                </div>
                <div className={styles.historyDetail}>
                  <h3>Total Sessions</h3>
                  <p>{item.totalSessions}</p>
                </div>
                <div className={styles.historyDetail}>
                  <h3>Status</h3>
                  <p>{item.status}</p>
                </div>
                <div className={styles.historyDetail}>
                  <h3>Notes</h3>
                  <a href={item.notes} download>
                    <Image
                      src={downloadIcon}
                      alt="Download"
                      width={20}
                      height={20}
                      className={styles.downloadIcon}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthProfile;