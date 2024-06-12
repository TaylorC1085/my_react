import React, { Component } from 'react'
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import Email from '../images/email.webp'
import '../styles/header.css'

export default class Header extends Component {
  render() {
    return (
        <>
            <header>
                <img className='header-img' src={Github} height={75} width={75}  alt="linkedin2"/>
                <nav className='header-nav'>
                    <a href='' className='nav-item nav-center-align'>about me</a>
                    <a href='' className='nav-item nav-center-align'>experience</a>
                    <a href='' className='nav-item nav-center-align'>contact</a>
                    <img className='nav-item nav-right-align' src={Email} height={25} width={25} style={{ top: '1px' }} alt="email"/>
                    <img className='nav-item nav-right-align' src={LinkedIn} height={25} width={25} alt="linkedin"/>
                    <img className='nav-item nav-right-align' src={Github} height={25} width={25} alt="github"/>
                </nav>
            </header>
        </>
    )
  }
}
