import React from 'react';
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='row-responsive'>
      <div className='col-sm-7'>
      <table className='table table-striped-hover'>
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
        <div className='col-sm-5'>
          <header className="text-center">Order Summary</header>
          <tr>
            <td>Subtotal</td>
            <td>Tax</td>
          </tr>
          <tr>
            <td>Total</td>
          </tr>
          <button>Checkout</button>
        </div>
    </div>
  )
}

export default Checkout;
