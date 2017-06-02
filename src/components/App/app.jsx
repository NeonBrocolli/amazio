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
			items: [{
				name: 'Chocopie',
				price: 1.50,
				description: 'Korean chocolate snack',
				SKU: 123123
			},
			{
				name: 'Cap',
				price: 2.50,
				description: "Christian's cap",
				SKU: 111111
			},
			{
				name: 'Underwear',
				price: .50,
				description: "Justin's underwear",
				SKU: 222222
			}],
			search: ""
		}
	}

	filterItems = () => {
		return this.state.items.filter(i => i.name.toLowerCase().includes(this.state.search));
	}

	handleSearchChange = (value) => {
		this.setState({search: value.toLowerCase()});
	}

	render() {
		return (
			<div>
				<Nav />
        <div className="container App-container">
          <Switch>
            <Route exact path="/" render={() => 
							<Catalogue handleSearchChange={this.handleSearchChange} filterItems={this.filterItems()} />
						} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order" componen={Order} />
          </Switch>
        </div>
			</div>
		)
	}

}

export default App;
