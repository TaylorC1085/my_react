import React, { Component } from 'react'
import Header from '../layouts/Header'
import React, { Component } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default class Home extends Component {
  render() {
    
    return (
        <>
        <Header />
        
        <h1>Taylor Courchaine</h1>
        <button>About Me</button>
        <Footer />
        </>
    )
  }
}
