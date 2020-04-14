import React, { Component } from "react";
import Home from './components/home.jsx';
import News from './components/news.jsx';
import Projects from './components/projects.jsx';
import Publications from './components/publications.jsx';
import Talks from './components/talks.jsx';
import Teaching from './components/teaching.jsx';
import Honors from './components/honors.jsx';
import Miscellany from './components/miscellany.jsx';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import ResponsiveNavbar from "./components/common/responsive-navbar.jsx";

class App extends Component {
	constructor(props) {

		super(props);
		this.state = {

			activeTab: 0,
			redirect: null

		}

		this._tabs = [
			{
				name: 'Home',
				link: '/'

			},
			{
				name: 'News',
				link: '/news'

			},
			{
				name: 'Projects',
				link: '/projects'

			},
			{
				name: 'Publications',
				link: '/publications'

			},
			{
				name: 'Talks',
				link: '/talks'

			},
			{
				name: 'Teaching',
				link: '/teaching'

			},
			{
				name: 'Honors',
				link: '/honors'

			},
			{
				name: 'Miscellany',
				link: '/miscellany'

			}
		]
	}


	handleTabChange = (evt, newValue) => {
		this.setState((prevState) => {

			return { activeTab: newValue }
		})
	};

	render() {


		return (

			<Router>

				<div className="app">

					<div>

						<ResponsiveNavbar tabs={this._tabs} />

					</div>

					<div>

						<Switch>
							<Route path="/news">
								<News />
							</Route>
							<Route path="/projects">
								<Projects />
							</Route>
							<Route path="/publications">
								<Publications />
							</Route>
							<Route path="/talks">
								<Talks />
							</Route>
							<Route path="/teaching">
								<Teaching />
							</Route>
							<Route path="/honors">
								<Honors />
							</Route>
							<Route path="/miscellany">
								<Miscellany />
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
