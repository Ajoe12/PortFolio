import React from 'react';

import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const AboutME = () => {
  return (
    <div className="container card-deck">
        <div className="card01 am">
            
             <br/><i className="fa fa-code aboutico01" ></i>
             <br/>
            <h4 className="card-title text-center mt-4"><strong>Love To Code</strong></h4>
            <p className="card-text text-center">Designed asm Websites</p>

        </div>
        <div className="card01 am">
            
            <br/><i className="fa fa-graduation-cap aboutico02" ></i>
            <br/>
            <h4 className="card-title text-center mt-4"><strong>Fast Learner</strong></h4>
            <p className="card-text text-center">Earned various Certificates</p>

        </div>
        <div className="card01 am">
            <br/><i className="fa fa-bug text-center aboutico03"></i>
             <br/>

            <h4 className="card-title text-center mt-4"><strong>Problem Solver</strong></h4>
            <p className="card-text text-center">Solved a lot of problems</p>

        </div>
    </div>

  )
}

export default AboutME;