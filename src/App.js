import React from 'react';
import './App.css';
import Home from '../src/pages/Home'
import Rooms from '../src/pages/Rooms'
import SingleRoom from '../src/pages/SingleRoom'
import Error from '../src/pages/Error'
import NavBar from '../src/components/NavBar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/rooms" component={Rooms}/>
        <Route path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
