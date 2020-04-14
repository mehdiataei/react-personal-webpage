import React, { Component } from 'react';
import '../styles/home.scss'
class Home extends Component {


  render() {

    return (

      <div className='home'>


        <div className="description">

          <p>I'm a PhD candidate in Department of Mechanical and Industrial Engineering at University of Toronto.
                            I also a <a href="vectorinstitude.ai">Vector Institute</a> postgraduate affiliate.</p>

          <p>My research interests are computational physics, applied mathematics, and machine learning.
                I recently focused on the application of machine learning models in computational physics. Highlights include:</p>

          <ul>

            <li>
              Developed a machine learning model for data-driven Piecewise Linear Interface Construction, which is up to 243 times faster than conventional models.


                <li>
                  Developed LBFOAM, the first open-source software for the simulation of foaming based on the Lattice Boltzmann Method, which incorporates all physical aspects of foaming phenomena.
                  
                </li>

              <li>
                  Developed a semantic instance segmentation model that replaces the flood-fill algorithm for bubble detection in the Lattice Boltzmann models.
                  Developed a numerical model for pressure and diffusion driven bubble growth to understand the effect of variation of viscosity on bubble growth and deformation 
                </li>
            </li>
          </ul>

          <p>

            My advisors are Markus Bussmann and Chul B Park. My M.Sc. advisor was Alidad Amirfazli at York University, where I worked mostly on mathematical modeling of interfacial bridges. I got B.Eng. degree from Sharif University of Technology.

          </p>

        </div>

        <div>
          <img className="my-image" src={process.env.PUBLIC_URL + '/img/me.jpg'} />

        </div>
      </div>
    );

  }
}

export default Home;
