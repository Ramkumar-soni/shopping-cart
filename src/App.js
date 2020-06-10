import React from 'react';
import ReactDOM from 'react-dom';  
import { Router, browserHistory } from 'react-router';
import { Route, Link, BrowserRouter,Redirect} from 'react-router-dom' 
// import logo from './logo.svg';
import './App.css';
import "semantic-ui-css/semantic.min.css"; 
import Router1 from './components/router'
import Contact from './components/contact'
import About from './components/About'
import Choose1 from './components/choose1'
import Choose3 from './components/choose3'
import Choose2 from './components/choose2'
import Choose4 from './components/user-detail'
import Parent from './components/parent'
import Child1 from './components/child1'
import Vehicles from './components/vehical'
import ToggleBox from './components/Toggle'
import App1 from './components/main'
import { Provider } from 'react-redux'
import {createStore } from 'redux'
import Reducer from './components/reducer'
import Redux from './components/redux'
// import Evaii from './components/Evaii'

 function App() {
  const store = createStore(Reducer);
  return ( 
    <div className="App">
      {/* <ToggleBox title="Show Vehicles">
				<Vehicles />
			</ToggleBox> */}
      {/* <Provider store={store}> */}
        {/* <Redux /> */}
        {/* <App /> */}
      {/* <Choose1 title="Show Vehicles"/> */}
        {/* </Provider> */}
        {/* <App1 /> */}
        
        <Provider store={store}>
        {/* <Evaii /> */}
      {/* <Choose1 /> */}
         <Router history={browserHistory}>  
        <div> 
       <Route exact path="/" component={Choose1} />
       <Route path="/contact" component={Choose2} />
       {/* <Route path="/contact1" component={Choose3} /> */}
       <Route path="/contact2" component={Choose4} />
       <Redirect to="/"/>
       </div>
       </Router>
      </Provider>
      {/* <Choose2 />
      <Choose3 /> */}
      {/* <Choose4 /> */}
      {/* <Parent /> */}
      {/* <Router />
      <Contact />
      <About /> */}
      {/* <Choose1 /> */}
      {/* <Choose2 />
      <Choose3 />
      <Choose4 /> */}
      
        {/* <Router>  
        <div> */}
      {/* <h1>React Router Example</h1>   */}
      {/* <ul>  
        <li>  
          <Link to="/" style={{color:'red'}} >Home</Link>  
        </li>  
        <li>  
          <Link to="/About" style={{color:'red'}}>About</Link>  
        </li>  
        <li>  
          <Link to="/contact" style={{color:'green'}}>Contact</Link>  
        </li>
        <li>  
          <Link to="/service" style={{color:'green'}}>Service</Link>  
        </li>  
      </ul>   */}
       {/* <Route exact path="/" component={Choose1} /> 
      <Route path="/About" component={Choose2} /> 
      <Route path="/contact" component={Choose3} />
      <Route path="/Service" component={Choose4} /> 
      <Redirect to="/"/> 
    </div>  
  </Router>  */}
  
   {/* <Router> 
  <div> 
      <h1>React Router Example</h1>  
      <ul>
        <li><Link to="/" >Router</Link></li>
        <li><Link to="/About" >About</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>

      <Route  path="/" component={Router1} /> 
      <Route path="/contact" component={Contact} />  
      <Route path="/About" component={About} />  
    </div>  
  </Router>   */}
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ram Soni
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
