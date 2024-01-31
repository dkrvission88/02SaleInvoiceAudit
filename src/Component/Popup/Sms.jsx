import React from 'react'

import './sms.css'

function Sms() {
  return (
    <>

    <div className="MainSms">

        <div className="smsCotainer">
            <div className="headsms">
            <h1>Payment Reminder</h1>
            <p>A SMS will be sent from  Audeet to Customer With  following message.  </p>
            </div>
            <div className="paragraph">
            <p>Sir/Madam</p>
            <p>You payment of Rs 419 is pending at Krinvi Trends</p><br/>
            <p>Thank You,</p>
            <p>Audeet</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Sms