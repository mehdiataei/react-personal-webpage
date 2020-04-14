import React, { Component } from "react";
import Home from './components/home.jsx';
import News from './components/news.jsx';
import Projects from './components/projects.jsx';
import Publications from './components/publications.jsx';
import Talks from './components/talks.jsx';
import Teaching from './components/teaching.jsx';
import Honors from './components/honors.jsx';
import Miscellany from './components/miscellany.jsx';
import { Redirect } from "react-router-dom";
import VerticalTabs from './navbar.jsx';

import './styles/App.scss';

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

				<div className="app">

					<div>
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
								case 4:

									return <Redirect to='/talks' />
								case 5:

									return <Redirect to='/teaching' />
								case 6:

									return <Redirect to='/honors' />
								case 7:

									return <Redirect to='/miscellany' />

								default:

									return <Redirect to='/' />

							}
						})()}

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
