import './App.css';
import React from 'react'
// import NavBar from './Components/SidebarData'
import SideBar from './Components/Sidebar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

// import HomepageContent from './Components/HomepageContent.js'

function App() {
  return (

    <>
      <div className="fullContent">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
            <span></span>
            <br />
            <span></span>
        </div>
      </div>
      
      <SideBar />
      
    </>
    
  )
}



export default App;
