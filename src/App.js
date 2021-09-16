import React, { useState, useEffect } from 'react';
import ReturnDetails from './components/ReturnDetails';
import ReturnLocalDetails from './components/ReturnLocalDetails';
import * as d3 from 'd3';
import data from "./BandwidthHighRiskBlock.csv";
import lite from "./lite.csv";
import background from "./background-globe-animated.svg"
import "./App.css";
import SplitPane from 'react-split-pane'
import * as ReactBootStrap from 'react-bootstrap';

function App() {

  const [localPhone, setLocalPhone] = useState('')
  const [localPhoneDetails, setLocalPhoneDetails] = useState([])
  const [highRiskData, setHighRiskData] = useState([])
  const [liteData, setLiteData] = useState([])
  const [intlPhone, setIntlPhone] = useState('')
  const [intlPhoneDetails, setIntlPhoneDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    d3.csv(data).then(function (dta) {

      setHighRiskData(dta)

    })
  }, [])

  useEffect(() => {
    d3.csv(lite).then(function (liteDta) {

      setLiteData(liteDta)

    })
  }, [])

  const handleLocalInput = (e) => {
    e.preventDefault()
    setLocalPhone(e.target.value)
  }
  const handleIntlInput = (e) => {
    e.preventDefault()
    setIntlPhone(e.target.value)
  }
  const toggleIntlButtonState = async (e) => {
    if (intlPhoneDetails) { setIntlPhoneDetails([]) }
    e.preventDefault()
    fetch('http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number=' + intlPhone + '&country_code=&format=1')
      .then(response => response.json())
      .then((data) => {

        setIntlPhoneDetails(intlPhoneDetails => [...intlPhoneDetails, data])
        console.log('in the toggle fetch')
      }
      )
  };
  const toggleLocalButtonState = async (e) => {

    if (localPhoneDetails) { setLocalPhoneDetails([]) }
    e.preventDefault()
    setLoading(false);
    await fetch('https://0xi9lxezba.execute-api.us-east-2.amazonaws.com/test/tnlookup?number=' + localPhone)
      .then(async response => response.json())
      .then((data) => {
        console.log('before data')
        console.log(data)
        console.log('in data of toggleIntlButtonState')
        setLocalPhoneDetails(localPhoneDetails => [...localPhoneDetails, data])
        console.log('this from app.js: ' + localPhoneDetails)
      }
      )
    setLoading(true);
  };
  var rootStyle = {
    backgroundImage: `url(${background})`,
    color: 'white',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    backgroundPosition: 'center',
    fontFamily: 'Overpass,sans-serif',
    textAlign: 'left'
  }

  return (
    <div className='App' style={rootStyle}>
      <center>
        <h1>Number Info Tool</h1>
        <SplitPane split='vertical' minSize='50%' defaultSize='50%'>
          <div>
            <h3>Local Number Search</h3>
            <div>
              <h5>Enter Local Phone Number: </h5>
              <input className="InputBox" value={localPhone} onChange={(e) => handleLocalInput(e)} />
              <button className="ClickMeButton" onClick={(e) => toggleLocalButtonState(e)}> View Info! </button>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              {loading ? <ReturnLocalDetails localPhoneDetails={localPhoneDetails} /> :
                <ReactBootStrap.Spinner animation="border" variant="info" />
              }
            </div>
          </div>
          <div>
            <h3>International Number Search</h3>
            <div>
              <h5>Enter International Phone Number: </h5>
              <input className="InputBox" value={intlPhone} onChange={(e) => handleIntlInput(e)} />
              <button className="ClickMeButton" onClick={(e) => toggleIntlButtonState(e)}> View Info! </button>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              <ReturnDetails csv={highRiskData} intlPhoneDetails={intlPhoneDetails} liteCsv={liteData} />
            </div>
          </div>
        </SplitPane></center>
    </div>

  );

}

export default App;