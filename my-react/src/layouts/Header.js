import React, { Component } from 'react';
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import Email from '../images/email.webp';
import LinkedInDark from '../images/linkedincopy.png';
import GithubDark from '../images/githubcopy.png';
import EmailDark from '../images/emailcopy.webp';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

    const Header = () => {

      const [isAtTop, setIsAtTop] = useState(true);

      useEffect(() => {
        function handleScroll() {
          if (window.scrollY === 0) {
            setIsAtTop(true);
          } else {
            setIsAtTop(false);
          }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      });
      return (
        <header className='header-dark'>
          {/* <h4 className='logo-header'><p style={{display: 'inline', color: 'darkgrey'}}>&lt;</p><p style={{display: 'inline', color: '#80beff'}}>taylorcourchaine</p><p style={{display: 'inline', color: 'darkgrey'}}>/&gt;</p></h4> */}

          <nav className='header-nav'>
              <a href='/about' className='nav-item nav-center-align'>about me</a>
              <a href='/resume' className='nav-item nav-center-align'>resume</a>
              <a href='/contact' className='nav-item nav-center-align'>contact</a>
              <Link to='mailto:tcour10@hotmail.com'><img className='nav-item nav-right-align' src={isAtTop ? Email: EmailDark} height={25} width={25} style={{ top: '2px' }} alt="email"/></Link>
              <Link to='https://www.linkedin.com/in/taylor-courchaine1/'><img className='nav-item nav-right-align' src={isAtTop ? LinkedIn: LinkedInDark} height={25} width={25} alt="linkedin"/></Link>
              <Link to='https://github.com/TaylorC1085'><img className='nav-item nav-right-align' src={isAtTop ? Github: GithubDark} height={25} width={25} alt="github"/></Link>
          </nav>
        </header>
      );
    };

export default Header;