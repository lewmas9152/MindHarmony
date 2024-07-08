import React from 'react'
import Sidenav from '../components/sideNav'
import "../sass/Resources.scss"

export default function page() {
  return (
    <main className='container'>
      
        <div className="content-container">
            
            <div className="sidebar">
                <Sidenav />
            </div>
            <div className="content">
            <h1>
            Mental Health Resources and stress reducing activities 
        </h1>
        <section className='stress-management-container'>
            <h2>Stress Management</h2>
            <div className="tools">
                <div className="mindfulness">
                    <h3>Mindfulness and meditation</h3>
                    <p>
                    Mindfulness is a practice of being fully present and aware of one's thoughts, feelings, and sensations without judgment. Practicing mindfulness can help reduce stress and improve focus.
                    </p>
                </div>
                <div className="cbt">
                    <h3>Cognitive-behavioral therapy (CBT)</h3>
                    <p>
                    CBT is a structured approach to help people manage their thoughts, emotions, and behaviors. It involves identifying and changing negative thought patterns, promoting self-awareness, and developing coping strategies.
                    </p>
                </div>
                <div className="mindful-eating">
                    <h3>Mindful eating</h3>
                    <p>
                    Mindful eating is a practice of focusing on the taste, smell, and texture of food without judgment. It can help reduce stress and promote a healthy diet.
                    </p>
                </div>
                <div className="self-care">
                    <h3>Self-care routines</h3>
                    <p>
                    Self-care routines include exercise, a balanced diet, sleep, and relaxation techniques. These practices can help reduce stress and improve overall well-being.
                    </p>
                </div>
            </div>
        </section>
        </div>
        </div>
    </main>
  )
}
