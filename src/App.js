import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import CarouselContainer from './Carousel.js';
import AboutME from './Card.js';
const App = () =>{

return(
<>
        



<div className="container-fluid one" id="home">
        
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        
        <a className="navbar-brand " href="#home"><i></i><strong>PortFolio</strong></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#links" style={{borderColor:"black"}}><span className="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse justify-content-end" id="links">

        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#home"> Home    </a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#about"> About   </a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#exp"> Projects   </a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#skill"> Skills   </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#con"> Contact   </a>
                </li>
        </ul>
        </div>
    </nav>
    
    <section className="bg1">
        <div className="innertxt container">
            <div className="card innercard card00">
                <div className="card-body">
                  <img className="card-img-top img1" src="https://joeschmoe.io/api/v1/joe" alt="Card"/>
                  
                  <h3 className="card-text"><strong><br/>Hi, I am Ajoe</strong></h3>
                  <p className="card-text">Front-End Developer</p>
                  <a href="#con" className="btn btn-primary">Contact Me <i className="fa fa-paper-plane"></i></a>
                </div>
                
            </div>
            
        </div>
        
    </section>
    
</div>


<div className="container mt-5 about" id="about">
    <div className="blobbg d-none d-md-block">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
        <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
    </div>
    <h1 className="about00"><br/><strong>About ME</strong><br/><br/></h1>
    <AboutME/>
    
    
</div>






<div className="container exp" id="exp">
    <h1  style={{textAlign:"center"}}><br/><strong>PROJECTS</strong><br/><br/></h1>
    
    <div className="blob02 d-none d-sm-block">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop className="expblob01" offset="0%"></stop>
                <stop className="expblob02" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path id="blob" d="M440.5,276Q411,302,392.5,321Q374,340,385,395.5Q396,451,357,454.5Q318,458,284,444.5Q250,431,225.5,415Q201,399,157,419Q113,439,117,391.5Q121,344,79.5,331.5Q38,319,68.5,284.5Q99,250,69,215.5Q39,181,46,144Q53,107,103,112Q153,117,173.5,97Q194,77,222,60.5Q250,44,280.5,53Q311,62,333.5,83Q356,104,371,127.5Q386,151,424,166Q462,181,466,215.5Q470,250,440.5,276Z" fill="url(#gradient)"></path>
          </svg>
    </div>
    
    <CarouselContainer/>
    </div>
    



<div className="container skills" id="skill">
    <h1 style={{color:"white",letterSpacing: "3px"}}><br/><strong>SKILLS</strong><br/><br/></h1>    
    <div className="items">
    <li>

        HTML5<span className="bar"><span className="html"></span></span>

    </li>

    <li>
        CSS<span className="bar"><span className="css"></span></span>

    </li>

    <li>
        BootStrap<span className="bar"><span className="bootstrap"></span></span>

    </li>

    <li>
        JavaScript<span className="bar"><span className="javascript"></span></span>

    </li>

    
    <li>
        Reactjs<span className="bar"><span className="react"></span></span>

    </li>

    <li>
        ML<span className="bar"><span className="ml"></span></span>

    </li>
    </div>
</div>
{/* <!--page skills--> */}

{/* <!--page contact--> */}

    <div className="container-fluid contact align-center" id="con">
        <h3> <strong>Contact Me:</strong>  </h3>
        <p>E-mail: abc@g**il.com</p>
        <p>Contact No.: 1234*****00</p>
       <div className="ico01"></div> 
        <a href="https://in.linkedin.com/"><i className="ico fa fa-facebook" style={{color: "blue"}}></i></a>
        <a href="https://www.facebook.com/"><i className="ico fa fa-linkedin" style={{color: "lightseagreen"}}></i></a>
        
        <a href="https://mail.google.com/"><i className="ico fa fa-at" style={{color: "green"}}></i></a>
        <a href="https://github.com/"><i className="ico fa fa-github" style={{color: "violet"}}></i></a>
    </div>

</>
  
        ) ;
  
  };
  
  export default App;
  