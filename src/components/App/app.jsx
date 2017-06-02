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
			item: {name: '',
			price: null,
			description: '',
			SKU: null}
		}
	}

	render() {
		return (
			<div>
				<Nav />
                <div className="container App-container">
                    <Switch>
                        <Route exact path="/" component={Catalogue} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/order" componen={Order} />
                    </Switch>
                </div>
			</div>
		)
	}

}

export default App;