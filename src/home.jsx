import React, { Component } from 'react';
import VerticalTabs from './navbar.jsx';
import './styles/home.scss';

class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {

      activeTab: 0

    }

    this._labels = ['Home', 'News', 'Projects', 'Publications', 'Talks',  'Teaching', 'Honors', 'Miscellany']
  }

  handleTabChange = (evt, newValue) => {
    this.setState((prevState) => {

      return { activeTab: newValue }
    })
  };


  render() {

    return (

      <div className='home'>


        <div className="nabvar">
          <VerticalTabs activeTab={this.state.activeTab} labels = {this._labels} handleChange={this.handleTabChange} />
        </div>

        <div className='text'>


          {(() => {

            switch (this.state.activeTab) {

              case 0:

                return (

                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat inventore numquam vero saepe voluptatem deleniti pariatur nobis ducimus impedit, quod nesciunt eveniet fugit error aliquid ut laboriosam itaque expedita?</p>

                );

              case 1:
                return (

                  <p> Tab 2</p>

                );

              case 2:

                return (
                  <p> Tab 3</p>
                );

              default:

                return (<p> Tab 1</p>);

            }
          })()}


        </div>

      </div>

    );

  }

}

export default Home;
