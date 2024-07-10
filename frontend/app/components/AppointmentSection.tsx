import React, { useState } from 'react';
import Image from 'next/image';
import AppointmentIcon from '../images/appointment.svg';
import ProgressIcon from '../images/progress (2).svg';
import MentalHealth from '../images/brain.svg';
import TherapyIcon from '../images/therapy.svg';
import CountUp from 'react-countup';
import styles from '../sass/AppointmentSection.module.scss';
import DocRaj from "../images/raj.jpg";
import DocBrown from "../images/doc1.jpg";
import DocJohnson from "../images/user3.jpg";
import DocWilson from "../images/wilson.jpg";
import DocWilliams from "../images/user1.jpg";
import DocKapoor from "../images/kapoor.jpg";
import DocAnderson from "../images/doc2.jpg";
import Thomas from '../images/dp.jpg';
interface Doctor {
  image: string;
  name: string;
  role: string;
}

interface Appointment {
  id: number;
  type: string;
  doctor: Doctor;
  date: string;
  time: string;
  hospital: string;
  condition: string;
}

const AppointmentSection: React.FC = () => {
  const [showUpcoming, setShowUpcoming] = useState(true); 
  const appointments: Appointment[] = [
    {
      id: 1,
      type: 'Upcoming',
      doctor: {
        image: DocRaj,
        name: 'Dr. Smith',
        role: 'Psychiatrist',
      },
      date: '2024-07-10',
      time: '10:00 AM',
      hospital: 'City Hospital',
      condition: 'Regular checkup',
    },
    {
      id: 2,
      type: 'Missed',
      doctor: {
        image: DocBrown,
        name: 'Dr. Brown',
        role: 'Therapist',
      },
      date: '2024-07-05',
      time: '02:30 PM',
      hospital: 'Medical Center',
      condition: 'Follow-up appointment',
    },
    {
      id: 3,
      type: 'Upcoming',
      doctor: {
        image: DocJohnson,
        name: 'Dr. Johnson',
        role: 'Psychologist',
      },
      date: '2024-07-15',
      time: '11:30 AM',
      hospital: 'General Hospital',
      condition: 'Initial consultation',
    },
    {
      id: 4,
      type: 'Missed',
      doctor: {
        image: DocWilson,
        name: 'Dr. Wilson',
        role: 'Counselor',
      },
      date: '2024-07-08',
      time: '09:00 AM',
      hospital: 'Healthcare Center',
      condition: 'Therapy session',
    },
    {
      id: 5,
      type: 'Upcoming',
      doctor: {
        image: DocWilliams,
        name: 'Dr. Williams',
        role: 'Psychiatrist',
      },
      date: '2024-07-12',
      time: '12:00 PM',
      hospital: 'Community Hospital',
      condition: 'Regular checkup',
    },
    {
      id: 6,
      type: 'Missed',
      doctor: {
        image: DocKapoor,
        name: 'Dr. Kapoor',
        role: 'Therapist',
      },
      date: '2024-07-07',
      time: '03:00 PM',
      hospital: 'Medical Center',
      condition: 'Follow-up appointment',
    },
    {
      id: 7,
      type: 'Upcoming',
      doctor: {
        image: DocAnderson,
        name: 'Dr. Anderson',
        role: 'Psychologist',
      },
      date: '2024-07-17',
      time: '10:30 AM',
      hospital: 'General Hospital',
      condition: 'Initial consultation',
    },
    {
      id: 8,
      type: 'Missed',
      doctor: {
        image: Thomas,
        name: 'Dr. Thomas',
        role: 'Counselor',
      },
      date: '2024-07-09',
      time: '10:00 AM',
      hospital: 'Healthcare Center',
      condition: 'Therapy session',
    }
  ];

  return (
    <div className={styles.appointmentSection}>
      <div className={styles.toggleButtons}>
        <button
          className={showUpcoming ? styles.active : ''}
          onClick={() => setShowUpcoming(true)}
        >
          Upcoming Appointments
        </button>
        <button
          className={!showUpcoming ? styles.active : ''}
          onClick={() => setShowUpcoming(false)}
        >
          Missed Appointments
        </button>
      </div>

      <div className={styles.appointmentsList}>
        {appointments
          .filter((appointment) =>
            showUpcoming ? appointment.type === 'Upcoming' : appointment.type === 'Missed'
          )
          .map((appointment) => (
            <div className={styles.appointmentRow} key={appointment.id}>
              <div className={styles.doctorInfo}>
                <div className={styles.doctorImage}>
                  <Image
                    src={appointment.doctor.image}
                    alt={appointment.doctor.name}
                    width={60}
                    height={60}
                    quality={100}
                  />
                </div>
                <div className={styles.doctorDetails}>
                  <p>{appointment.doctor.name}</p>
                  <p>{appointment.doctor.role}</p>
                </div>
              </div>
              <div className={styles.appointmentDetails}>
                <p>
                  <strong>Date:</strong> {appointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Hospital:</strong> {appointment.hospital}
                </p>
                <p>
                  <strong>Condition:</strong> {appointment.condition}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppointmentSection;
