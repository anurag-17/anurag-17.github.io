import React from 'react'

export const Footer = () => {
  return (
   <>
   
   <footer className="red_fo">
      
            <div className="news">
                <h2>Join our newsletter </h2>
                <input type="text" placeholder="Enter Your Valid E-Mail Address"/>
                <button className="noti">Notify me</button>
            </div>
            <div className="follow">
                <h2>Follow Us</h2>
            </div>
        
    </footer>
    <footer className="red_fo2">
        <div className="footer_txt">
            <p>Sample text. Click to select the text box.
                <br />Click again or double click to
                 <br />start editing the
                text.
                </p>
        </div>
        <div className="rese">
            <p>© 2022 Paradise Fitness and Health Pvt Ltd. All Rights Reserved.</p>
        </div>
    </footer>

   
   </>
  )
}
