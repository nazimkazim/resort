import React from 'react';
//import './App.css';
import Home from '../src/pages/Home'
import Rooms from '../src/pages/Rooms'
import SingleRoom from '../src/pages/SingleRoom'
//import Error from '../src/pages/Error'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route path="/" component={Home}/>
      <Route path="/rooms" component={Rooms}/>
      <Route path="/single-room" component={SingleRoom}/>
    </div>
  );
}

export default App;
