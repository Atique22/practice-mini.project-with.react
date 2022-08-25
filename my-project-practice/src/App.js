import './App.css';
import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import Blogs from './components/Blogs';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/>
        <Blogs/> */}
        <Home/>
      </div>
    )
  }
}
