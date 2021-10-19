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
  const [localLoading, setLocalLoading] = useState(true)
  const [intlLoading, setIntlLoading] = useState(true)

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
    if (/\D/g.test(e.target.value)) {
      e.target.value = e.target.value.replace(/\D/g, '');
    }
    setLocalPhone(e.target.value)
  }
  const handleIntlInput = (e) => {
    e.preventDefault()
    if (/\D/g.test(e.target.value)) {
      e.target.value = e.target.value.replace(/\D/g, '');
    }
    setIntlPhone(e.target.value)
  }
  const toggleIntlButtonState = async (e) => {
    if (intlPhoneDetails) { setIntlPhoneDetails([]) }
    e.preventDefault()
    setIntlLoading(false);
    await fetch('https://karh5qw55m.execute-api.us-east-2.amazonaws.com/test/intlnumlookup?phone=' + intlPhone)
      .then(async response => response.json())
      .then((data) => {
        setIntlPhoneDetails(intlPhoneDetails => [...intlPhoneDetails, data])
      }
    )
    setIntlLoading(true);
  };
  const toggleLocalButtonState = async (e) => {

    if (localPhoneDetails) { setLocalPhoneDetails([]) }
    e.preventDefault()
    setLocalLoading(false);
    await fetch('https://0xi9lxezba.execute-api.us-east-2.amazonaws.com/test/tnlookup?number=' + localPhone)
      .then(async response => response.json())
      .then((data) => {
        setLocalPhoneDetails(localPhoneDetails => [...localPhoneDetails, data])
      }
      )
    setLocalLoading(true);
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
        <h1>Number Lookup Tool</h1>
        <SplitPane split='vertical' minSize='50%' defaultSize='50%'>
          <div>
            {/* <h2 className="localTitle">Local Number Search</h2> */}
            <h2>Local Number Search</h2>
            <div>
              <h5>Enter Local Phone Number: </h5>
              <input id = "local" className="InputBox" value={localPhone} onChange={(e) => handleLocalInput(e)} placeholder="1XXXXXXXXXX" />
              <button className="ClickMeButton" onClick={(e) => toggleLocalButtonState(e)}> View Info! </button>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              {localLoading ? <ReturnLocalDetails localPhoneDetails={localPhoneDetails} /> :
                <ReactBootStrap.Spinner animation="border" variant="info" />}
            </div>
          </div>
          <div>
            {/* <h2 className="intlTitle">International Number Search</h2> */}
            <h2>International Number Search</h2>
            <div>
              <h5>Enter International Phone Number: </h5>
              <input className="InputBox" value={intlPhone} onChange={(e) => handleIntlInput(e)} placeholder="44XXXXXXXXX" />
              <button className="ClickMeButton" onClick={(e) => toggleIntlButtonState(e)}> View Info! </button>
            </div>
            <div>
              <br></br>
            </div>
            <div>
              {intlLoading ? <ReturnDetails csv={highRiskData} intlPhoneDetails={intlPhoneDetails} liteCsv={liteData} /> :
                <ReactBootStrap.Spinner animation="border" variant="info" />}
            </div>
          </div>
        </SplitPane></center>
    </div>

  );

}

export default App;