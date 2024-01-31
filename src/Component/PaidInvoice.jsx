import React from 'react'
import paidInvoice from './paidInvoice.css'
function PaidInvoice() {
  return (
    <>

      <div className="main">


        <div className="left">

          <div className="search-box">
            <div className="row">
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
              <input type="text" id="input-box" placeholder="" autocomplete="off"></input>

            </div>

          </div>
          <span className="pur">Purchase #1</span>
          <div className="unpaid">
            <div className="1st"> <div className="A"><h4>A</h4></div> <br /> <button type='edit' className='ee'>Edit  <span class="material-symbols-outlined">
              edit_document
            </span></button> </div>
            <div className="ped"> <h5>Arjun Shrivastav  <div className="pp">Paid</div> </h5> <br /> 5th may 2023 </div>
            <div className="R"> <p>419</p></div>
          </div>

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
              </div>
              <div className="nam">
                <p>Arjun Srivastav <br />+91-123456782</p>

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
              <h1>T</h1>
            </div>
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
          <div className="cl2">
          <tr className='undercl2'>
                  <td>Total Selling Price</td>
                  <td>419.16</td>
                </tr>
          </div>



          <div className="status">
            <div className="paid">
              <h5>Status <div className="pi">Paid</div> </h5>
            </div>
            <div className="got"> You Got <br />419</div>
            <div className="cash">Payment-Cash</div>
          </div>

          <div className="invoice_payment">

            <button type='submit' className='vi'>View</button>


            <button type='submit' className='add'>Add Payment</button>

          </div>




        </div>
      </div>

    </>
  )
}

export default PaidInvoice