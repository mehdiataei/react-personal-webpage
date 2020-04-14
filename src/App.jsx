import React, { Component } from "react";
import Home from './components/home.jsx';
import { Redirect } from "react-router-dom";
import VerticalTabs from './navbar.jsx';

import './styles/router.scss';


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class App extends Component {
	constructor(props) {

		super(props);
		this.state = {

			activeTab: 0,
			redirect: null

		}

		this._labels = ['Home', 'News', 'Projects', 'Publications', 'Talks', 'Teaching', 'Honors', 'Miscellany']
	}

	handleTabChange = (evt, newValue) => {
		this.setState((prevState) => {

			return { activeTab: newValue }
		})
	};

	render() {


		return (

			<Router>

				<div className="router">

					<div className="nabvar">
						<VerticalTabs activeTab={this.state.activeTab} labels={this._labels} handleChange={this.handleTabChange} />
					</div>


					<div>

						{(() => {

							switch (this.state.activeTab) {

								case 0:

									return <Redirect to='/' />


								case 1:
									return <Redirect to='/news' />


								case 2:

									return <Redirect to='/projects' />


								case 3:

									return <Redirect to='/publications' />

								default:

									return <Redirect to='/' />

							}
						})()}

						<Switch>
							<Route path="/news">
								news
							</Route>
							<Route path="/projects">
								project
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
