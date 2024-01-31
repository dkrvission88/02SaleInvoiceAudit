import React, { useState } from 'react'
import "./inout.css"
import Online from './Online'
import Cash from './Cash'

function Inout({ band }) {
  

  const [onlined, setOnlined] = useState(false)
  const [cashed, setCashed] = useState(false)

  const cashout = () => setOnlined(true)
  const cashoutnot = () => setOnlined(false)

  const paymentHandler = () => setCashed(true)
  const paymentHandlerclose = () => setCashed(false)
  return (
    <>
      <div className="model-wrapper3" onClick={band}>

      

      </div>

     

      <div className="odi">
        <button type='submit' className='inner1' onClick={cashout} >Payment In</button><br/>
       { onlined && <Online cashoutnot={cashoutnot} />}


       
        <button type='submit' className='outer1' onClick={paymentHandler}>Payment out</button>


        {
            cashed && <Cash paymentHandlerclose={paymentHandlerclose} />
            
          }



        

      </div>



    </>
  )
}

export default Inout