import React from 'react'
import img1 from '../img/billionphotos-1656913.jpg'
import img2 from '../img/billionphotos-1669933.jpg'
import img3 from '../img/billionphotos-3671911.jpg'
import { Link } from 'react-router-dom'

export const Whyus = () => {
  return (
    <>
        <section>
            <div className="midtext">
                <h2>Why Us</h2>
                <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="boxflx">
                <div className="boxflx1">
                    <div className="box1img">
                        <img src= {img1}/>
                        <h2>Trainings</h2>
                        <h3>Sample text. Click to select the text box. Click again or double click to start editing the
                            text.</h3>
                        <a className="morelink" href="##">Learn More</a>
                    </div>
                </div>
                <div className="boxflx2">
                    <div className="box2img">
                        <img src={img2}/>
                        <h2>Our Gym</h2>
                        <h3>Sample text. Click to select the text box. Click again or double click to start editing the
                            text.</h3>
                        <a className="morelink2" href="##">Learn More</a>
                    </div>
                </div>
                <div className="boxflx3">
                    <div className="box3img">
                        <img src={img3}/>
                        <h2>Coach Care</h2>
                        <h3>Sample text. Click to select the text box. Click again or double click to start editing the
                            text.</h3>
                        <Link className="morelink3" to="#">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
 
    
    </>
  )
}
