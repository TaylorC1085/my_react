import React, { Component } from 'react';
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import Email from '../images/email.webp';
import '../styles/main.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <>
            <header>
                <img className='header-img' src={Github} height={75} width={75}  alt="linkedin2"/>
                <nav className='header-nav'>
                    <a href='/about' className='nav-item nav-center-align'>about me</a>
                    <a href='' className='nav-item nav-center-align'>resume</a>
                    <a href='/contact' className='nav-item nav-center-align'>contact</a>
                    <Link to='mailto:tcour10@hotmail.com'><img className='nav-item nav-right-align' src={Email} height={25} width={25} style={{ top: '1px' }} alt="email"/></Link>
                    <Link to='https://www.linkedin.com/in/taylor-courchaine1/'><img className='nav-item nav-right-align' src={LinkedIn} height={25} width={25} alt="linkedin"/></Link>
                    <Link to='https://github.com/TaylorC1085'><img className='nav-item nav-right-align' src={Github} height={25} width={25} alt="github"/></Link>
                </nav>
            </header>
        </>
    )
  }
}
