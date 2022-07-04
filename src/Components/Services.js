import React from 'react'
import img1 from "../img/01-state-of-the-art-equipment.png"
import img2 from "../img/02-group-classes.png"
import img3 from "../img/03-personal-trainers.png"
import img4 from "../img/04-spa-services.png"
import img5 from "../img/05-childcare.png"
import img6 from "../img/06-aquatic-pool.png"
import { Footer } from './Footer'
import { Header } from './Header'



export const Services = () => {
  return (
  <>
<div className="ser_ban">
  <Header/>
<h1 class="serv_ban_head">Our Service</h1>

    </div>

<div class="serv_text">
        <h2>With Powerhouse Gyms all over the world, each facility offers <br/>services unique to the area & needs of its
            members.</h2>
        <p>Below are some of the services & features found at Powerhouse Gyms worldwide. For services available in your
            area, please visit our locations page to find your gym’s unique offerings.</p>
</div>

<div class="main_con">
        <section>
            <div class="service_fla">
                <div class="s1">
                    <img src={img1}/>
                    <div class="tex">
                        <h2>State-of-the-Art Equipment</h2>
                        <p>Each Powerhouse facility offers <br/>high quality cardio & strength equipment.</p>
                    </div>
                </div>
                <div class="s1">
                    <img src={img2}/>
                    <div class="tex">
                        <h2>Group Classes</h2>
                        <p>We offer classes for yoga, spin, Zumba, Circuit Training, MX4 and more.</p>
                    </div>
                </div>
                <div class="s1">
                    <img src={img3}/>
                    <div class="tex">
                        <h2>Personal Trainers</h2>
                        <p>Each Powerhouse facility offers <br/>high quality cardio & strength equipment.</p>
                    </div>
                </div>
            </div>
            <div class="service_fla">
                <div class="s1">
                    <img src={img4}/>
                    <div class="tex">
                        <h2>Spa Services</h2>
                        <p>Relax after an intense workout with any one of our spa services..</p>
                    </div>
                </div>
                <div class="s1">
                    <img src={img5}/>
                    <div class="tex">
                        <h2>Childcare</h2>
                        <p>Enjoy your workout knowing your children are safe & nearby.</p>
                    </div>
                </div>
                <div class="s1">
                    <img src={img6}/>
                    <div class="tex">
                        <h2>Aquatic Pool</h2>
                        <p>Get your cardio on in another way, by swimming laps in the pool.</p>
                    </div>
                </div>
            </div>
           
    
            
        </section>
  </div>
{/* <div className="abo_footer">
<h2>Our GYM</h2>
            <address>506 Morya Estate, Opposite Infiniti Mall, <br/>New Link Road, Andheri West, Mumbai – 400 053<br/>
                Phone: +9122 6678 7970<br/>
                Email: info@wavesgym.com</address>

</div>
<div class="rese">
            <p>© 2022 Paradise Fitness and Health Pvt Ltd. All Rights Reserved.</p>
        </div> */}
        <Footer/>
        


  </>
  )
}
