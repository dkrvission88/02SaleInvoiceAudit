import React, { useState } from 'react'
import "./unpaidvoice.css"
import Inout from './Popup/Inout'


// import inout from "./Popup/inout.css"
// import Online from './Popup/Online'
// import Cash from './Popup/Cash'

function UnpaidInvoice() {

    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {

        setPayment(true);

    }

    return (
        <>


            {/* <div className="main">

                <div className="left">

                    <div className="search-box">
                        <div className="row">
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            <input type="text" id="input-box" placeholder="search here" autocomplete="off"></input>

                        </div>

                    </div>
                    <div className="unpaid">
                        <h1>.........</h1>
                    </div>

                    <div className="btn_create">
                        <button type='submit' className='createi'>Create Invoice</button>
                    </div>

                </div>



                <div className="right">
                    <div className="card1">
                        <div className="edit_delete">
                            <ul>
                                <li> <button type='submit ' className='edit'>Edit</button></li>


                                <li> <button type='submit ' className='delete'>Delete</button></li>


                            </ul>


                        </div>

                        <div className="pic">
                            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'></img>
                        </div>
                        <div className="nam">
                            <h5>Arjun Srivastav</h5>
                            <h6>+91-123456782</h6>
                        </div>
                        <div className="invoice_no">
                            <table>
                                <tr>
                                    <th>Invoice no</th>
                                    <th>1</th>
                                </tr>
                                <tr>
                                    <td>Invoice Date</td>
                                    <td>4 th May 2023</td>

                                </tr>
                                <tr>
                                    <td>Due Date</td>
                                    <td>4 th May 2023</td>
                                </tr>


                            </table>
                        </div>
                    </div>

                    <div className="tshirt">
                        <div className="pro">
                            <h5>T-Shirt</h5>
                            <p>Product</p>
                        </div>
                        <div className="rupee">
                            <h5> &#8377 419</h5>
                        </div>
                    </div>

                    <div className="price_break">
                        <p>Price Break up</p>

                        <div className="sale_price">
                            <table>
                                <tr>
                                    <th>Sale</th>
                                    <th>&#8377 499</th>
                                </tr>
                                <tr>
                                    <td>Discount(20%) </td>
                                    <td>&#8377 99</td>

                                </tr>
                                <tr>
                                    <td>IGST @ 5%</td>
                                    <td>&#8377 19.96</td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    <div className="status">
                        <h3>..........</h3>

                    </div>
                    <div className="rsp">
                        <div className="reminder">
                            <i class="fa-solid fa-phone"></i>
                            <label >Reminder</label>
                        </div>
                        <div className="sms">
                            <i class="fa-solid fa-comment"></i>

                            <label>SMS Reminder</label>
                        </div>
                        <div className="pay">
                            <span class="material-symbols-outlined">
                                currency_rupee
                            </span>

                            <label>Pay</label>
                        </div>


                    </div>

                    <div className="invoice_payment">
                        <div className="view_invoice">
                            <button type='submit' className='vi'>View</button>
                        </div>
                        <div className="add_payment"  >
                            <button type='submit' className='add'>Add Payment</button>
                        </div>
                    </div>


                </div>



            </div> */}


            <div className="main" >


                <div className="left">
                    <div className="headsale"><p>Sale Invoice</p> <hr/></div>

                    <div className="search-box">
                        <div className="row">
                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            <input type="text" id="input-box" placeholder="" autocomplete="off"></input>

                        </div>

                    </div>
                    <span className="pur">Invoice #1</span>
                    <div className="unpaid">
                        <div className="1st">
                            <div className="A"><h4>A</h4>
                                <div className="ped"> <h5>Arjun Shrivastav  <div className="pp">Unpaid</div> </h5>  <p>5th may 2023</p> </div>
                            </div>

                            <button type='edit' className='ee'>Edit  <span class="material-symbols-outlined">
                                edit_document
                            </span></button> </div>

                        <div className="R"> <p> &#8377; 419</p></div>
                    </div>


                      {/* Green Container */}


                      <span className="purv2">Purchase #1</span>
                    <div className="unpaidv2">
                        <div className="1st">
                            <div className="Av2"><h4>A</h4>
                                <div className="ped"> <h5>Arjun Shrivastav  <div className="ppv2">Paid</div> </h5>  <p>5th may 2023</p> </div>
                            </div>

                            <button type='edit' className='ee'>Edit  <span class="material-symbols-outlined">
                                edit_document
                            </span></button> </div>

                        <div className="R"> <p> &#8377; 419</p></div>
                    </div>

                    {/* Green container end */}











                    <div className="btn_create">
                        <button type='submit' className='createi'>Create Invoice</button>
                    </div>

                </div>

                <div className="right">

                    <div className="card2">

                        <div className="edit-delete">
                            <button type='edit' className='btn-edit'>Edit <span class="material-symbols-outlined">
                                edit_document
                            </span></button>
                            <button type='delete' className='btn-edit'>delete <span class="material-symbols-outlined">
                                delete
                            </span></button>
                        </div>


                        <div className="product">
                            <div className="pic">
                                <img style={{ width: "40px", height: "40px" }} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'></img>
                                <div className="nam">
                                    <p>Arjun Srivastav <p>+91-123456782</p></p>

                                </div>
                            </div>

                            <div className="invoice_no">
                                <table>
                                    <tr>
                                        <th>Invoice no</th>
                                        <th>1</th>
                                    </tr>
                                    <tr>
                                        <td>Invoice Date</td>
                                        <td>4 th May 2023</td>

                                    </tr>
                                    <tr>
                                        <td>Due Date</td>
                                        <td>4 th May 2023</td>
                                    </tr>


                                </table>
                            </div>
                        </div>
                    </div>


                    <div className="tshirt">
                        <div className="T">
                            <h4>T</h4>  <div className="pro">
                                <h5>T-Shirt</h5>
                                <p>Product</p>
                            </div>
                           
                        </div>
                        <div className="rupee">
                                <h5> &#8377; 419</h5>
                            </div>

                    </div>


                    <div className="price_break">
                        <p>Price Break up</p>

                        <div className="sale_price">
                            <table>
                                <tr>
                                    <th>Sale</th>
                                    <th>&#8377; 499</th>
                                </tr>
                                <tr>
                                    <td>Discount(20%) </td>
                                    <td>&#8377; 99</td>

                                </tr>
                                <tr>
                                    <td>IGST @ 5%</td>
                                    <td>&#8377; 19.96</td>
                                </tr>



                            </table>
                        </div>


                    </div>


                    <div className="cl">
                        <tr className='undercl'>
                            <td>Total Selling Price</td>
                            <td> &#8377; 419.16</td>
                        </tr>
                    </div>




                    <div className="ccc">
                        <div className="status">
                            <div className="paid">
                                <h5>Status <div className="pi">Unpaid</div> </h5>
                            </div>
                            <div className="got"> You will get </div>
                            <div className="cash"> &#8377; 419</div>
                            {/* {<Inout></Inout>} */}

                        </div>
                        <span className="pdue">Payment Due date - <h6 style={{ color: "red", fontSize: "10px", fontWeight: "normal" }} > 5 days ago </h6> Change</span>
                    </div>


                    {/* Green container start */}

                    <div className="ccc">
                        <div className="status">
                            <div className="paid">
                                <h5>Status <div className="piv2">Paid</div> </h5>
                            </div>
                            <div className="got"> You Got  <div className="cash000">&#8377; 419</div></div>
                            
                            <div className="cashv2">Payment-<p>Cash</p></div>

                        </div>
                        {/* <span className="pdue">Payment Due date - <h6 style={{ color: "red", fontSize: "10px", fontWeight: "normal" }} > 5 days ago </h6> Change</span> */}
                    </div>


                    {/* Green container end */}


                  






                    <div className="rsp">
                        <div className="reminder">
                            <i className="fa-solid fa-phone"></i><br />
                            <label >Reminder</label>
                        </div>
                        <div className="sms">
                            <i className="fa-solid fa-comment"></i><br />

                            <label>SMS Reminder</label>
                        </div>
                        <div className="pay">
                            <span className="material-symbols-outlined">
                                currency_rupee
                            </span><br />

                            <label>Pay</label>
                        </div>


                    </div>

                    <div className="invoice_payment">

                        <button type='submit' className='vi'>View</button>


                        <button type='submit' className='add' onClick={Mymodel}>Add Payment</button>

                        {payment && <Inout band={band} />}

                        {/* onClick={() => setPayment(true)}     Mymodel={Mymodel} */}

                    </div>




                </div>
            </div>








        </>
    )
}

// Payment In Payment out popup

// function Inout({band}) {

//     const [onlined, setOnlined] = useState(false)
//     const [cashed, setCashed] = useState(false)

//     const cashout = () => setOnlined(false)

//     const paymentHandler = () => setCashed(false)
//     return (
//       <>
//       <div className="model-wrapper3" onClick={band} ></div>
//         <div className="main0">


//             <button type='submit' className='in' onClick={setOnlined(true)} >Payment In</button>


//              {
//               onlined && <Online cashout={cashout} />
//             }
//             <button type='submit' className='out' onClick={setCashed(true)}>Payment out</button>
//             {
//               cashed && <Cash paymentHandler={paymentHandler} />
//             } 

//         </div>



//       </>
//     )
//   }


export default UnpaidInvoice