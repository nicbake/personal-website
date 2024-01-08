import * as React from 'react';

import linkedin from "../images/linkedin_logo.png"
import github from "../images/github_logo.png"
import resume from "../images/resume.png"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul className="horizontal-list">
            <li>
                <a class="social-link" href="https://github.com/nicbake">
                    <img src={github} alt='github logo' height='40px' width='40px'/>
                </a>
            </li>
            <li>
                <a class="social-link" href="https://www.linkedin.com/in/nic-b-baker/">
                    <img src={linkedin} alt='linkedin page' height='40px' width='40px'/>
                </a>
            </li>
            <li>
                <a class="social-link" href={resume}>
                    <img src={resume} alt='Resume' height='40px' width='40px'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar