import React from 'react'
import { Header } from './Header'

export const Home = () => {
  return (
    <>
     <div className="banimg">
         <Header/>
        <h1>Life is Motion</h1>
        <h2>Gyms, Day Spas, Trainers</h2>
        <p>In this day in age, keeping fit has become one of the top activities for someone to do in their free time. A
            popular way to stay in shape is by going to the gym, with multiple different types of workouts you can do,
            from weight lifting to light cardio.</p>
        <button className="btn">Read More</button>
    </div>
    </>
  )
}
