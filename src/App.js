import React from 'react';
import './App.css';
import MVC from './MVC.js'
import Slanted from './Slanted.js'
import Service from './Services2.js'
import Navigation from './Navigation.js'
import Products from './Products.js'
import Contactus from './Contactus.js'
import HeaderImage from './Slideshow.js'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
  <div className="team-area">
    	
     <p className="team-title"> Our Team</p>

    <div className="image-area">
    
   
    <div className="img-wrapper">
    <img src ={require('./alpha-male.jpg')}/>
   
    <h2> 
      Samuel
      <p>CEO</p>
    </h2>

      
    </div>

    <div className="img-wrapper">
    <img src ={require('./alpha-male.jpg')}/>
    <h2> 
      Meron
      <p>Marketing manager</p>
    </h2>
   </div>

   <div className="img-wrapper">
    <img src ={require('./alpha-male.jpg')}/>
    <h2> 
    Samuel
      <p>COO</p>
    </h2>
   </div>

   <div className="img-wrapper">
    <img src ={require('./alpha-male.jpg')}/>
    <h2> 
      Samuel 
      <p>CTO</p>
    </h2>
    <hr/>
   </div>
    </div>
   
    </div>

  );
}

class Main extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <Route exact path="/Navigation" component={Navigation}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/AboutUs" component={MVC}/>
        <Route exact path="/Team" component={App}/>
        <Route exact path="/Product" component={Products}/>
        <Route exact path="/ContactUs" component={Contactus}/>
        {/* <Route exact path="/" component={Navigation}/> */}
      </div>
      </Router>
    )
  }
}

class Call extends React.Component{
  render(){
    return(
      <div>
     
      <Navigation/>
      <Service />
      <Products/>
      <MVC />
      <Slanted />
      <App />
      <Contactus />
        </div>
    );    
  }
}

export default Call;

