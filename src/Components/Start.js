import React from 'react'
import img1 from "../img/pexels-mikhail-nilov-6740044.jpg"

export const Start = () => {
  return (
    <>
    
    <section>
            <div className="trainerbox">
                <div className="redbox">
                </div>
                <div className="text">
                    <p>Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum
                        ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non
                        curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel
                        risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla
                        facilisi. Tincidunt dui ut ornare lectus sit.</p>
                    <button className="train_btn">START NOW</button>
                </div>
                <div className="tr_img">
                    <img src={img1}/>
                </div>
            </div>
           
        </section>

    </>
  )
}
