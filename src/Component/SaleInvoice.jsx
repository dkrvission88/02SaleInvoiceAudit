import React, { useState } from 'react'
import "./saleInvoice.css"
import More from './More'
import Share from './Share'

function SaleInvoice() {

    const [modal, setModal] = useState(false)
    const [emodal, setMeodal] = useState(false)

    const closeModal = () => setModal(false)
    const closeeModal = () => setMeodal(false)



    return (
        <>

            <div className="main">

                <div className="left"></div>



                <div className="uend">

                    <button type='submit' className='btn_share' onClick={() => setMeodal(true)}>Share Invoice</button>
                    {
                        emodal && <Share closeeModal={closeeModal} />
                    }


                    <button type='submit' className='btn_more' onClick={() => setModal(true)} >More Option</button>
                    {
                        modal && <More closeModal={closeModal} />
                    }

                </div>




            </div>

        </>
    )
}

export default SaleInvoice