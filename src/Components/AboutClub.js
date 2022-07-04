import React from 'react'
import image1 from "../img/billionphotos-1891336-min.png"
export const AboutClub = () => {
  return (
    <>
    <section>
        {/* <div className="main_con"> */}
            <div className="about_flx">
                <div className="abimg">
                    <img src={image1}/>
                </div>
                <div className="ab_text">
                    <h2>About Club</h2>
                    <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum
                        ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non
                        curabitur. Magna fringilla urna porttitor rhoncus.</p>
                    <button className="stbtn">Start Now</button>
                </div>
            </div>
        {/* </div> */}
    </section>
    
    </>
  )
}
