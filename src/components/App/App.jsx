import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Catalogue from '../Catalogue/Catalogue';
import Checkout from '../Checkout/Checkout';
import Order from '../Order/Order';
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
      {
      name: 'Blep',
      price: 5,
      description: 'It sucks',
      SKU: 1231
      },
      {
      name: 'Blepo',
      price: 2,
      description: 'Fsho',
      SKU: 1122
      },
      {
      name: 'Hanzo',
      price: 10,
      description: 'main',
      SKU: 3333
      }]}
  }

  checkoutItems = () ={
    return this.state.items;
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container App-container">
          <Switch>
            <Route exact path="/" render={() =>
              <Catalogue item={this.state.item} />
            } />
            <Route path="/checkout" render={
              <Checkout item={this.state.item} checkoutItems={this.state.items} />
            } />
            <Route path="/order" componen={Order} />
          </Switch>
        </div>
      </div>
    )
  }

}

export default App;
