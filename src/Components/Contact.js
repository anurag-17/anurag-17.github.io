import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Contact = () => {
  return (
<>

<div className="con_ban">
  <Header/>
<h1 className="con_ban_head">CONTACT US</h1>
</div>
<div className="con_tex">
        <h2>Fill out the form below and someone will get in touch with you as soon as possible. <br/>Please note, membership
            issues are not handled through our website. <br/>Contact the location your membership is through.</h2>
 </div>

 <div className="contact_box">
        <div className="con_fom">
            <label className="con_lb" for="name">Location</label><br/>
            <input className="con_in" type="text" placeholder="Not Applicable"/><br/>
            <label for="name">First Name </label><br/>
            <input type="text" placeholder="First Name"/><br/>
            <label for="name">Last name </label><br/>
            <input type="text" placeholder="Last Name "/><br/>
            <label for="name">Email Address* </label><br/>
            <input type="text" placeholder="Email Address"/><br/>
            <label for="name">Phone No* </label><br/>
            <input type="text" placeholder="Phone No "/><br/>
            <button className="con_sub">SUBMIT HERE</button>
        </div>
    </div>

    <Footer/>

</>
 
  )
}
