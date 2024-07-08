"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import NotificationIcon from "../images/notification.svg";
import ReminderIcon from "../images/reminder.svg";
import SearchIcon from "../images/search.svg";
import UserProfile from "../images/head-shot-portrait-happy-african-260nw-1541223032.webp";
import styles from '../sass/Header.module.scss';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showReminders, setShowReminders] = useState(false);
  const notifications = [
    "New appointment scheduled",
    "Therapist sent a message",
    "Mental health tip of the day",
    "Group session reminder",
    "Weekly progress report",
  ];
  const reminders = [
    "Take a deep breath and relax",
    "Stay hydrated",
    "Practice gratitude",
    "Attend your therapy session",
    "Complete your daily exercises",
    "Journal your thoughts",
  ];

  return (
    <div className={styles.header}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search anything here.." />
        <div className={styles.searchIcon}>
          <Image
            src={SearchIcon}
            alt="Search Icon"
            width={30}
            height={30}
            quality={100}
          />
        </div>
      </div>
      <div className={styles.notifications} onClick={() => setShowNotifications(!showNotifications)}>
        <div className={styles.notificationIcon}>
          <Image
            src={NotificationIcon}
            alt="Notification Icon"
            width={40}
            height={40}
            quality={100}
          />
          <div className={styles.notificationCount}>{notifications.length}</div>
        </div>
        {showNotifications && (
          <div className={styles.notificationPopup}>
            {notifications.map((notification, index) => (
              <p key={index}>{notification}</p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.reminders} onClick={() => setShowReminders(!showReminders)}>
        <div className={styles.reminderIcon}>
          <Image
            src={ReminderIcon}
            alt="Reminder Icon"
            width={40}
            height={40}
            quality={100}
          />
          <div className={styles.reminderCount}>{reminders.length}</div>
        </div>
        {showReminders && (
          <div className={styles.reminderPopup}>
            {reminders.map((reminder, index) => (
              <p key={index}>{reminder}</p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.userProfile}>
        <div className={styles.userImage}>
          <Image
            src={UserProfile}
            alt="User Profile"
            width={60}
            height={60}
            quality={100}
          />
        </div>
        <div className={styles.userName}>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
