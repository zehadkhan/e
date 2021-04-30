import React from 'react'
import '../App.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
// import GitHubIcon from '@material-ui/icons/GitHub';
function SocialButton() {
   return (
      <div className="social-btns">
         <ul className="social-btn-ul">
            <li><a className="fb-fb" href="https://fb.com/zehadkhan0" ><FacebookIcon /></a></li>
            <li><a href="https://twitter.com/zehadkhan0/" ><TwitterIcon /></a></li>
            <li><a href="https://www.instagram.com/__zehad__/" ><InstagramIcon /></a></li>
            {/* <li><a href="https://github.com/zehadkhan/" ><GitHubIcon /></a></li> */}
         </ul>
      </div>
   )
}

export default SocialButton
