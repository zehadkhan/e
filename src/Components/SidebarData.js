import React from 'react'
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import '../App.css';
import ProjectCom from '../pages/ProjectCom'
import Contact from '../pages/Contact'
import HomepageContent from '../Components/HomepageContent'
import SocialButton from './SocialButton'
import HomeIcon from '@material-ui/icons/Home';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
// import EmailIcon from '@material-ui/icons/Email';
import EmailIcon from '@material-ui/icons/Email';
// import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import SearchIcon from '@material-ui/icons/Search';

// import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

// export default SidebarData


export default function SidebarData() {
  return (
    <Router>

          <ul className="SidebarList">

            <li className="row" id="">
              <Link exact to="/">  <HomeIcon/ >  </Link>
            </li>


            <li className="row" id="">
              <Link to="#">  <Brightness4Icon/ > </Link>
            </li>

            <li className="row" id="">
              <Link to="/contact">  <EmailIcon/ > </Link>
            </li>

            {/* <li className="row" id="">
              <Link to="/Contact">  <ImportContactsIcon/ > </Link>
            </li> */}

            <li className="row" id="">
              <Link to="/ProjectCom">  <PhotoLibraryIcon/ > </Link>
            </li>


            {/* <li className="row" >
              <Link to="/projects">
              <SearchIcon/ >
              </Link>
            </li> */}

            
            <li className="row" >
              <Link to="/github"> <GitHubIcon/ > </Link>
            </li>
            
            {/* <li className="row">
              <Link to="/about">A</Link>
            </li> */}

            <li>
              <div className="social-menu"> <SocialButton /> </div>
            </li>
          </ul>
          
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        
      
      <div className="output">
        <Switch>

            {/* <Route path="/about">
              <about />
              About
            </Route> */}
            
            {/* <Route path="/github">
              <GitHubIcon />
              Github
            </Route> */}

            {/* <Route path="/ProjectCom">
              <ProjectCom />
              search
            </Route> */}

            <Route path="/projects">
              <projects />
              MyProjects
            </Route>

            {/* <Route path="/contact">
              
              Contact
            </Route> */}

            <Route path="/contact">
              <Contact />
              {/* Mail */}
            </Route>

            <Route path="/ProjectCom">
              <ProjectCom />
            </Route>

            <Route path="#">
              <ui />
            </Route>
            
            <Route path="/">
              <HomepageContent />
              {/* <Home /> */}
            </Route>


        </Switch>
      </div>
      
    </Router>

    
  );
}


