import React from 'react'
import "./cash.css"

function Cash({ paymentHandler }) {
  return (
    <>
      <div className="model-wrapper5" onClick={paymentHandler}></div>

      
        <div className="mainin00">
          <div className="rupeepa"> <input type='number' name='input' placeholder="&#8377;" ></input> </div>
          <div className="detailpa"><input type='text' name='input' placeholder='Enter details'></input></div>
          <div className="modema">
            <p>Payment mode
              <button type='submit' className='btn_cashka'>Cash</button>
              <button type='submit' className='btn_onlineka'>Online</button>
              <input type='date' className='ind'></input></p>

          </div>
          <div className="smsse">
            <input type="checkbox" id="check" name="sms"></input>
            <label for="sms"> Send SMS To Party</label>
          </div>
          <div className="saveda">
            <button type='submit' className='btn_saveda'>Save</button>
          </div>
        </div>
      




    </>
  )
}

export default Cash