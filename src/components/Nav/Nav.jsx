import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {

  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          LOGO
          <ul className="nav navbar-nav navbar-right">
            <li> <Link to="/"> Catalogue</Link></li>
            <li> <Link to="/checkout"> Checkout</Link></li>
            <li> <Link to="/order"> Order</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )

}

export default Nav;
