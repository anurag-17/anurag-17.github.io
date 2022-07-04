import React from 'react'
import img1 from "../img/youngwomen.jpg"
import img2 from "../img/strongman.jpg"
import img3 from "../img/tradmil.jpg"

export const Fitness = () => {
  return (
    <>
     <section>
        {/* <div className="main_con"> */}
            <div className="gal_flx">
                <div className="img_gal">
                    <img src={img1}/>
                    <h2>Gym and Fitness</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>
                    <button className="btn2">Read More</button>
                </div>
                <div className="img_gal2">
                    <div className="right_flx">
                        <img src={img2}/>
                    </div>
                    <div className="right_2">
                        <img src={img3}/>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </section>
    
    </>
  )
}
