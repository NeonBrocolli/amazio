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
            <td>ITEM1</td>
            <td>$5</td>
            <td>10</td>
          </tr>
          <tr>
            <td>ITEM2</td>
            <td>$44</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Item3</td>
            <td>$2</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      </div>
        <div className='col-sm-5'>
          <header className="text-center">Order Summary</header>
          <ul>
            <li>Subtotal</li>
            <li>Tax</li>
            <li>Total</li>
          </ul>
          <button className="btn btn-default">Checkout</button>
        </div>
    </div>
  )
}

export default Checkout;