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

 function App() {
  const store = createStore(Reducer);
  return ( 
    <div className="App">    
        <Provider store={store}>
      {/* <Choose1 /> */}
         <Router history={browserHistory}>  
        <div> 
       <Route exact path="/" component={Choose1} />
       <Route path="/contact" component={Choose2} />
       <Route path="/contact2" component={Choose4} />
       <Redirect to="/"/>
       </div>
       </Router>
      </Provider>

    </div>
  );
}

export default App;
