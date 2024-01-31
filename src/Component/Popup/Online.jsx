import React from 'react'
import "./online.css"

// import Sms from './Sms'

function Online({ cashoutnot }) {




  // const [smssent,setSmssent]=useState(false)
  // const sented=()=> setSmssent(false)

  return (
    <>

      <div className="model-wrapper4" onClick={cashoutnot} ></div>


      <div className="mainin">
        <div className="rupee"> <input type='number' name='input' placeholder='&#8377;'></input> </div>
        <div className="detail"><input type='text' name='input' placeholder='Enter details'></input></div>
        <div className="mode">
          <p>Payment mode
            
            <button type='submit' className='btn_cash'>Cash</button>
            <button type='submit' className='btn_online'>Online</button>
            
            <input type='date' className='ind'></input></p>

        </div>
        <div className="message1">
          <input type='checkbox' className='checks'></input>
          {/* {smssent  && <Sms sented={sented}/>  } */}

          {/* onClick={setSmssent(true)} */}
          <label > Send SMS To Party</label>
        </div>
        <div className="save">
          <button type='submit' className='btn_save'>Save</button>
        </div>
      </div>





    </>
  )
}

export default Online