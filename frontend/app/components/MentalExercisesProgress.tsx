import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../sass/MentalExercisesProgress.module.scss';

interface Exercise {
  id: number;
  name: string;
  description: string;
  progress: number;
  color: string;
}

const MentalExercisesProgress: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: 1,
      name: 'Breathing Exercise',
      description: 'Focus on your breath and relax.',
      progress: 70,
      color: '#3e98c7',
    },
    {
      id: 2,
      name: 'Mindfulness Meditation',
      description: 'Stay in the moment and observe your thoughts.',
      progress: 45,
      color: '#f54ea2',
    },
    {
      id: 3,
      name: 'Progressive Muscle Relaxation',
      description: 'Relax your muscles step by step.',
      progress: 80,
      color: '#5dd39e',
    },
    {
      id: 5,
      name: 'Yoga',
      description: 'Perform gentle yoga stretches.',
      progress: 50,
      color: '#ff5722',
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setExercises((prevExercises) =>
        prevExercises.map((exercise) => ({
          ...exercise,
          progress: (exercise.progress + 10) % 100,
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mentalExercisesProgress}>
      <h2>My Mental Exercises Progress</h2>
      <p className='mb-5 text-white special-p'>View your progress and track your mental exercises here.</p>
      <div className={styles.exercisesList}>
        {exercises.map((exercise) => (
          <div className={styles.exerciseItem} key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <div className={styles.circularProgress}>
              <CircularProgressbar
                value={exercise.progress}
                text={`${exercise.progress}%`}
                styles={buildStyles({
                  pathColor: exercise.color,
                  textColor: '#fff',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentalExercisesProgress;
