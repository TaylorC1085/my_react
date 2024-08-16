import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import TC from '../images/tc2.jpg';
import Linked from '../images/linkedincustom.png';
import Github from '../images/githubcustom.png';
import Mail from '../images/emailcustom.png';
import PythonLogo from '../images/python.png';
import ReactLogo from '../images/react.png';
import JSLogo from '../images/js-logo.png';
import HTMLLogo from '../images/html.png';
import CSSLogo from '../images/css.png';
import GithubLogo from '../images/githubtext.png';
import JiraLogo from '../images/jira.png';
import AboutImage from '../images/about.jpeg';
import Background from '../layouts/Background';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    
    return (
        <>
          <Header />
          <div className='home-section'>
            <div className='intro-wrapper'>
              <h6 className='intro-home-title-small'>Hi, I'm</h6>
              <h1 className='intro-home-title-large'>Taylor<br></br>Courchaine.</h1>
              <h6 className='intro-home-title-small role'>
                Front-End Developer
              </h6>
              <hr className='home-section-line'></hr>
              <div className='link-wrapper'>
                <Link to='mailto:tcour10@hotmail.com'><button type='button' className='button-img email'><img src={Mail} alt='email'></img></button></Link>
                <Link to='https://www.linkedin.com/in/taylor-courchaine1/'><button type='button' className='button-img linkedin'><img src={Linked} alt='linkedin'></img></button></Link>
                <Link to='https://github.com/TaylorC1085'><button type='button' className='button-img github'><img src={Github} alt='github'></img></button></Link>
              </div>
              
              {/* <Link to='/about'>
                <p className='btn-about'>About Me</p>
              </Link> */}
              
            </div>
            {/* <img className='portrait' src={TC} alt="me" height={570} width={700}></img> */}
            
          </div>

          <div className='homepage-skills-wrapper'>
            <h1 className='homepage-skills-title'>My skills</h1>
            <div className='homepage-skills-content'>
              <img src={JSLogo} class="homepage-skills-image js-logo"  alt=''></img>
              <img src={ReactLogo} class="homepage-skills-image react-logo" alt=''></img>
              <img src={PythonLogo} class="homepage-skills-image python-logo" alt=''></img> 
              <img src={HTMLLogo} class="homepage-skills-image html-logo"  alt=''></img> 
              <img src={CSSLogo} class="homepage-skills-image css-logo"  alt=''></img>
              <img src={GithubLogo} class="homepage-skills-image github-logo"  alt=''></img>
            </div>
          </div>

          <div className='homepage-about-wrapper'>
            <h1 className='large-about'>About Me</h1>
            <hr className='about-line'></hr>
            <div className='about-text'>
              <p className='text-section-one'>I'm Taylor Courchaine, currently based in Winnipeg, MB. With a background in Business Information Technology from Red River College,
                I have honed my skills in front-end development using JavaScript, jQuery, and CSS, as well as back-end integration with JSON and Git.
                At Bold Commerce, I resolve code issues, enhance user experiences, and streamline workflows using tools like Jira and Zendesk.
              </p>
              
            </div>
          </div>
          
     
          <Footer />
        </>
    )
  }
}
