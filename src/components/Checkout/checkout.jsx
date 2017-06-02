import React from 'react';
import './Checkout.css'

const Checkout = (props) => {
  return (
    <div className='row-responsive'>
      <div className='col-sm-7'>
      <table className='table table-hover table-striped'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.checkoutItems.map(e => {
            return (
            <td>{e.name}</td>
            <td>{e.price}</td>
            )
          })
        }
        </tbody>
      </table>
      </div>
        <div className='col-sm-5'>
          <header className="text-center text-size">Order Summary</header>
          <ul>
          <div>
            <li>Subtotal</li>
            <li>Tax</li>
          </div>
            <br/>
            <li>Total</li>
          </ul>
          <button className="btn btn-default">Checkout</button>
        </div>
    </div>
  )
}

export default Checkout;
