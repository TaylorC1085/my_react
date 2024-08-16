import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
  render() {
    
    return (
        <>
        <Header />
        <div className='contact-container'>
          <h1 className='contact-heading'>Contact me!</h1>
          <form action="https://formsubmit.co/tcour10@hotmail.com" className='contact-form' id="messageForm" method="POST">
            <div className='form-container'>
              <label className='contact-name'>Name:
                <input type='text' name='name' required></input>
              </label>
              <label className='contact-email'>Email:
                <input type='email' name='email' required></input>
              </label>
              <label className='contact-phone'>Phone:
                <input type='phone' name='phone'></input>
              </label>
              
            </div>
            <label className='contact-text'>Message:
                <textarea className='contact-text-box' form="messageForm"></textarea> 
              </label>
            <button type="submit" className='contact-button'>
              <span className='submit-text'>Submit</span>
            </button>
          </form>
        </div>
        <Footer />
        </>
    )
  }
}
