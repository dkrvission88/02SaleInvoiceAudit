import React from 'react'
import "./share.css"

function Share({ closeeModal }) {
    const what = () => {

    }
    const email = () => {

    }
    const other = () => {

    }




    return (
        <>


        <div className="model-wrapper1" onClick={closeeModal} ></div>
            <div className="share" >
                {/* <div className="eshare">
                <p>Share invoice via</p><br/>
                </div> */}
                <div className="whats" onClick={what} >
                    <span className="material-symbols-outlined">
                        whatshot
                    </span><br />

                    <button type='submit' className='m'>Whatsapp(PDF)</button>
                </div>
                <div className="mail" onClick={email} >
                    <span className="material-symbols-outlined">
                        mail
                    </span><br />

                    <button type='submit' className='m'>Email</button>
                </div>
                <div className="other" onClick={other}>


                    {/* <FontAwesomeIcon icon="fa-light fa-snowflake" /> */}
                    <span className="material-symbols-outlined">
                        other_houses
                    </span><br />

                    <button type='submit' className='m'>Others apps</button>
                </div>
            </div>
            {/* <button onClick={closeeModal}><span class="material-symbols-outlined">
                disabled_by_default
            </span></button> */}






        </>
    )
}

export default Share