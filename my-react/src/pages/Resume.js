import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ResumePDF from '../images/resume2024.pdf';
import { Link } from 'react-router-dom';


export default class Resume extends Component {
  render() {
    
    return (
        <>
        <Header />
        <div className='page-contents'>
          <div className='image-wrapper'>
            <object data={ResumePDF} type="application/pdf" width="100%" height="100%">
              <p><a href="http://africau.edu/images/default/sample.pdf"></a></p>
          </object>
          </div>
          <div className="btnDiv">
            <button id="downloadBtn" value="download">Download</button>
          </div>
        </div>
        <Footer />
        </>
    )
  }
}
