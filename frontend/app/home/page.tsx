"use client";
import React, { useState, useEffect } from 'react';
import Sidenav from '../components/sideNav';
import Header from '../components/Header';
import "../sass/Home.scss";
import AppointmentIcon from "../images/appointment.svg";
import ProgressIcon from "../images/progress (2).svg";
import MentalHealth from '../images/brain.svg';
import TherapyIcon from "../images/therapy.svg";
import CountUp from 'react-countup';
import AppointmentSection from '../components/AppointmentSection';
import MentalExercisesProgress from '../components/MentalExercisesProgress';
import CombinedCharts from '../components/CombinedCharts';
import Image from 'next/image';

const HomePage = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Morning");
    } else if (hours < 18) {
      setGreeting("Afternoon");
    } else {
      setGreeting("Evening");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="side-bar">
        <Sidenav />
      </div>
      <div className="content-container">
        <div className="content">
          <Header />
          <div className="welcome-message">
            <div className="image-welcome">
              <iframe src="https://lottie.host/embed/78f7a603-9cc6-4213-8698-a595c5ca7005/fENvQNEzhn.json"></iframe>
            </div>
            <div className="message">
              <h1>Good {greeting} John Doe!</h1>
              <p>Welcome to your dashboard. Here, you can manage your appointments, view your notifications, and keep track of your progress.</p>
            </div>
          </div>

          <div className="info-container">
            <div className="appoint-container">
              <div className="img-cont">
                <Image
                  src={AppointmentIcon}
                  alt="Reminder Icon"
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className="content">
                <h2>Appointments</h2>
                <p><CountUp end={200} duration={5} /></p>
              </div>
            </div>
            <div className="progress">
              <div className="img-cont">
                <Image
                  src={ProgressIcon}
                  alt="Notification Icon"
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className="content">
                <h2>Progress</h2>
                <p><CountUp end={85} duration={5} suffix="%" /></p>
              </div>
            </div>
            <div className="therapy-sessions">
              <div className="img-cont">
                <Image
                  src={TherapyIcon}
                  alt="Reminder Icon"
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className="content">
                <h2>Therapy</h2>
                <p><CountUp end={15} duration={2} /></p>
              </div>
            </div>
            <div className="mental-exercises">
              <div className="img-cont">
                <Image
                  src={MentalHealth}
                  alt="Reminder Icon"
                  width={60}
                  height={60}
                  quality={100}
                />
              </div>
              <div className="content">
                <h2>Mental</h2>
                <p><CountUp end={40} duration={3} /></p>
              </div>
            </div>
          </div>
          <div className="charts-container">
            <CombinedCharts />
          </div>
          <div className="user-mental-data">
            <div className="appointments-container">
              <AppointmentSection />
            </div>
            <div className="my-mental-exercises-progress">
              <MentalExercisesProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
