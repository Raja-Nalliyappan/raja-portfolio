import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import { NavLink } from 'react-router-dom';
import download from '../assets/download.png'
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css"

export const Navbar =()=>{

    return(
        <div>
            <header>
                <div className='main-header'>
                    <nav className="navbar-card">
                        <ul className="nav-list">

                            {/* Navbar Active Color Change */}
                            {/* <li><NavLink to="/home" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Home</NavLink></li> */}
                            {/* <li><NavLink to="#/experience" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Experience</NavLink></li> */}
                            {/* <li><NavLink to="/projects" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Projects</NavLink></li> */}
                            {/* <li><NavLink to="/skills" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Skills</NavLink></li> */}

                            <li><HashLink smooth to="#">Home</HashLink></li>
                            <li><HashLink smooth to="/#experience">Experience</HashLink></li>   
                            <li><HashLink smooth to="/#projects">Projects</HashLink></li>  
                            <li><HashLink smooth to="/#skills">Skills</HashLink></li>                      
                        </ul>
                    </nav>
                    <nav className="navbar-img">
                        <ul className="nav-bar-img-list">
                            {/* <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={instagramIcon} alt="instagram" width="35" height="35"/></a></li> */}
                            <li><a href="https://www.linkedin.com/in/raja-nalliyappan-22a131174/" target='_blank' rel='oopener noreferrer'><img src={linkedinIcon} alt="linkedin" width="35" height="35"/></a></li>
                            <li><a href="https://github.com/Raja-Nalliyappan" target='_blank' rel='oopener noreferrer'><img src={githubIcon} alt="" width="35" height="35"/></a></li>
                            <li><a href="https://wa.me/9626945746?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20work." target='_blank' rel='oopener noreferrer'><img src={whatsappIcon} alt="" width="31" height="31" style={{marginBottom:"2px"}}/></a></li>
                        </ul>
                     </nav>
                </div>
            </header>
        </div>
    )
}
