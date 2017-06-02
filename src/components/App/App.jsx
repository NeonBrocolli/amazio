import React, {Component} from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Checkout from '../Checkout/Checkout';
import Order from '../Order/Order';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: null,
      description: '',
      SKU: null
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Catalogue />
        <Checkout />
        <Order />
      </div>
    )
  }
}

export default App;
