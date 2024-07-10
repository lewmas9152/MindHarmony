"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NotificationIcon from "../images/notification.svg";
import ReminderIcon from "../images/reminder.svg";
import SearchIcon from "../images/search.svg";
import UserProfile from "../images/head-shot-portrait-happy-african-260nw-1541223032.webp";
import styles from '../sass/Header.module.scss';

interface NotificationItem {
  message: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

interface ReminderItem {
  message: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

interface UserMenuItem {
  label: string;
  icon: string;
  action?: () => void;
}

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showReminders, setShowReminders] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();

  const notifications: NotificationItem[] = [
    { message: "New appointment scheduled", timestamp: "2024-07-08 10:00", priority: 'high' },
    { message: "Therapist sent a message", timestamp: "2024-07-08 09:30", priority: 'medium' },
    { message: "Mental health tip of the day", timestamp: "2024-07-08 08:00", priority: 'low' },
    { message: "Group session reminder", timestamp: "2024-07-08 14:00", priority: 'high' },
    { message: "Weekly progress report", timestamp: "2024-07-07 18:00", priority: 'medium' },
  ];

  const reminders: ReminderItem[] = [
    { message: "Take a deep breath and relax", timestamp: "2024-07-08 11:00", priority: 'low' },
    { message: "Stay hydrated", timestamp: "2024-07-08 12:00", priority: 'medium' },
    { message: "Practice gratitude", timestamp: "2024-07-08 13:00", priority: 'low' },
    { message: "Attend your therapy session", timestamp: "2024-07-08 15:00", priority: 'high' },
    { message: "Complete your daily exercises", timestamp: "2024-07-08 17:00", priority: 'medium' },
    { message: "Journal your thoughts", timestamp: "2024-07-08 20:00", priority: 'low' },
  ];

  const userMenuItems: UserMenuItem[] = [
    { 
      label: 'Profile', 
      icon: '👤',
      action: () => {
        router.push('/profile');
        setShowUserMenu(false);
      }
    },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Help', icon: '❓' },
    { label: 'Logout', icon: '🚪' },
  ];

  const getPriorityColor = (priority: 'high' | 'medium' | 'low'): string => {
    switch (priority) {
      case 'high': return styles.highPriority;
      case 'medium': return styles.mediumPriority;
      case 'low': return styles.lowPriority;
      default: return '';
    }
  };

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
      <div 
        className={styles.notifications} 
        onClick={() => setShowNotifications(!showNotifications)}
        title="Notifications"
      >
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
              <div key={index} className={`${styles.notificationItem} ${getPriorityColor(notification.priority)}`}>
                <p className={styles.message}>{notification.message}</p>
                <p className={styles.timestamp}>{notification.timestamp}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div 
        className={styles.reminders} 
        onClick={() => setShowReminders(!showReminders)}
        title="Reminders"
      >
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
              <div key={index} className={`${styles.reminderItem} ${getPriorityColor(reminder.priority)}`}>
                <p className={styles.message}>{reminder.message}</p>
                <p className={styles.timestamp}>{reminder.timestamp}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.userProfile}>
        <div 
          className={styles.userImageWrapper} 
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <div className={styles.userImage}>
            <Image
              src={UserProfile}
              alt="User Profile"
              width={60}
              height={60}
              quality={100}
            />
          </div>
          <div className={styles.userStatus}></div>
        </div>
        <div className={styles.userName}>
          <p>John Doe</p>
        </div>
        {showUserMenu && (
          <div className={styles.userMenu}>
            {userMenuItems.map((item, index) => (
              <div 
                key={index} 
                className={styles.userMenuItem}
                onClick={item.action}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;