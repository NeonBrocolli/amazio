import React, { Component } from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Checkout from '../Checkout/Checkout';
import Order from '../Order/Order';
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: null,
      description: '',
      SKU: 0
    }
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="container">
          <Catalogue />
          <Checkout />
          <Order />
        </div>
      </div>
    )
  }
}

export default App;
