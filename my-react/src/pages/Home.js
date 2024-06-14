import React, { Component } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import TC from '../images/tc.png';
import Background from '../layouts/Background';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    
    return (
        <>
          <Header />
          <div className='home-section'>
            <div className='intro-wrapper'>
              <h1>Taylor Courchaine</h1>
              <p>bvfbb  uhfiuh uiurgurhgu ihruigh uhur ghurgh uigh uhgu 
                <br></br> 
                hguhrg iuhru huh uh iuhgirh uierhg uhrgiuhg uirgui uhuirgh uh
                <br></br> 
                hguhrg iuhru huh uh iuhgirh uierhg uhrgiuhg uirgui uhuirgh uh
              </p>
              <Link to='/about'>
                <button>About Me</button>
              </Link>
              
            </div>
            <img className='portrait' src={TC} alt="me" height={400} width={300}></img>
            
            {/* <div class="background-elements">
              <p style={{position: "absolute", left: "64%", bottom: "36%", fontSize: "18px"}}>&lt;html&gt;</p>
              <p style={{ position: 'absolute', left: '60%', bottom: '33%', fontSize: "18px" }}>height:110px;</p>
              <p style={{ position: 'absolute', left: '62%', bottom: '30%', fontSize: "19px" }}>JavaScript</p>
              <p style={{ position: 'absolute', left: '63%', bottom: '24%', fontSize: "18px"  }}>Python</p>
              <p style={{ position: 'absolute', left: '61%', bottom: '27%', fontSize: "23px"  }}>CSS3</p>
              <p style={{ position: 'absolute', left: '64%', bottom: '27%', fontSize: "18px"  }}>HTML5</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>jQuery</p>
              <p style={{ color: 'rgb(0, 128, 255)', position: 'absolute', left: '61%', bottom: '21%', fontSize: "18px"  }}>color:#0080ff;</p>

              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;h1&gt;</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;span&gt;</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;p&gt;</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;header&gt;</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;body&gt;</p>
              <p style={{ position: 'absolute', left: '66%', bottom: '33%', fontSize: "18px"  }}>&lt;img&gt;</p>

            </div> */}
            {/* <Background/> */}
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
          
     
          <Footer />
        </>
    )
  }
}
