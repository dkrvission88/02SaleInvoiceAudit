import React from 'react'
import "./more.css"


function More({closeModal}) {











    const print = () => {
        window.print()
    }

    const dub = () => {


    }

    const down = () => {

    }
    return (
        <>

        <div className="modal-wrapper2" onClick={closeModal} ></div>



            

            <div className="moreO" >

                <div className="dublicate" onClick={dub} >
                    <span className="material-symbols-outlined">
                        file_copy
                    </span><br />

                    <button type='submit' className='m'>Dublicate</button>
                </div>
                <div className="print" onClick={print}>
                    <span class="material-symbols-outlined">
                        print
                    </span><br />

                    <button type='submit' className='m'>Print</button>
                </div>
                <div className="download" onClick={down} >


                    <span className="material-symbols-outlined">
                        download
                    </span><br />

                    <button type='submit' className='m' >Download as pdf</button>
                </div>
            </div>












        </>
    )
}

export default More