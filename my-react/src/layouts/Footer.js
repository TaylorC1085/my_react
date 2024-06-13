import React, { Component } from 'react'
import LinkedIn from '../images/linkedin.png'
import Github from '../images/github.png'
import Email from '../images/email.webp'
import '../styles/main.css'

export default class Footer extends Component {
  render() {
    return (
        <>
            <figure className="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <p><i class="arrow up"></i></p>
            </figure>
            <footer>
                <nav className='footer-nav'>
                    <p className='footer-text'>© 2024 Taylor Courchaine</p>
                    
                    <a href='' className='footer-nav-item footer-nav-center-align'>about me</a>
                    <a href='' className='footer-nav-item footer-nav-center-align'>experience</a>
                    <a href='' className='footer-nav-item footer-nav-center-align'>contact</a>
                </nav>
            </footer>
        </>
    )
  }
}

