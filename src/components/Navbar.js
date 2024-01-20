import * as React from 'react';

import linkedin from "../images/linkedin_logo.png"
import github from "../images/github_logo.png"
import resume from "../images/resume.png"
import logo from "../images/logo.png"

import './navbar.css';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Resume</Link>
            <Link className='desktopMenuListItem'>Projects</Link>
        </div>
    </div>
  )
}

export default Navbar