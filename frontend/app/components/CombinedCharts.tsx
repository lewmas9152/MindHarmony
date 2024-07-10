import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import styles from '../sass/CombinedCharts.module.scss';

const CombinedCharts: React.FC = () => {
    const moodData = [
        { name: 'Monday', moodScore: 3, energyLevel: 4, motivation: 5 },
        { name: 'Tuesday', moodScore: 2, energyLevel: 3, motivation: 4 },
        { name: 'Wednesday', moodScore: 4, energyLevel: 3, motivation: 4 },
        { name: 'Thursday', moodScore: 5, energyLevel: 4, motivation: 5 },
        { name: 'Friday', moodScore: 3, energyLevel: 5, motivation: 4 },
        { name: 'Saturday', moodScore: 4, energyLevel: 5, motivation: 3 },
        { name: 'Sunday', moodScore: 5, energyLevel: 4, motivation: 4 }
    ];

    const stressData = [
        { name: 'Monday', stressLevel: 2 },
        { name: 'Tuesday', stressLevel: 3 },
        { name: 'Wednesday', stressLevel: 5 },
        { name: 'Thursday', stressLevel: 4 },
        { name: 'Friday', stressLevel: 6 },
        { name: 'Saturday', stressLevel: 4 },
        { name: 'Sunday', stressLevel: 5 }
    ];

    const supportGroupData = [
        { name: 'Monday', session1: 3, session2: 5, session3: 2 },
        { name: 'Tuesday', session1: 2, session2: 4, session3: 3 },
        { name: 'Wednesday', session1: 4, session2: 3, session3: 5 },
        { name: 'Thursday', session1: 5, session2: 2, session3: 4 },
        { name: 'Friday', session1: 3, session2: 4, session3: 6 },
        { name: 'Saturday', session1: 4, session2: 5, session3: 4 },
        { name: 'Sunday', session1: 5, session2: 4, session3: 6 }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.chartWrapper}>
                <h2>Mood Tracking</h2>
                <BarChart width={400} height={300} data={moodData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="moodScore" stackId="a" fill="#8884d8" />
                    <Bar dataKey="energyLevel" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className={styles.chartWrapper}>
                <h2>Stress Levels</h2>
                <BarChart width={400} height={300} data={stressData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stressLevel" fill="#8884d8" />
                </BarChart>
            </div>
            <div className={styles.chartWrapper}>
                <h2>Support Group Interaction</h2>
                <AreaChart width={400} height={300} data={supportGroupData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="session1" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="session2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="session3" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default CombinedCharts;
