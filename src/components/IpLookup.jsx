import React, { useState } from 'react';
import background from "../background-globe-animated.svg";
import * as ReactBootStrap from 'react-bootstrap';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import './IpLookup.css'
import ReturnIpDetails from './ReturnIpDetails';

function IpLookup() {
  const [ipAddress, setIp] = useState('')
  const [ipDetails, setIpDetails] = useState([])
  const [ipLoading, setIpLoading] = useState(true)

  const handleIPInput = (e) => {
    e.preventDefault()
    setIp(e.target.value)
  }

  const toggleIpButtonState = async (e) => {
    // check if IP is valid 
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
      if (ipDetails) { setIpDetails([]) }
      e.preventDefault()
      setIpLoading(false);
      await fetch('https://zftiarq6sj.execute-api.us-east-2.amazonaws.com/test/iplookup?ip=' + ipAddress)
        .then(async response => response.json())
        .then((data) => {
          setIpDetails(ipDetails => [...ipDetails, data])
        }
        )
      setIpLoading(true);
    }
    else {
      alert('Invalid IP')
    }
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
        <RemoveScrollBar />
        <div>
          <p />
          <h2>IP Search</h2>
          <div>
            <h5>Enter IP Address: </h5>
            <input className="InputBox" value={ipAddress} onChange={(e) => handleIPInput(e)} placeholder="XXX.XXX.XXX.XXX" />
            <button className="ClickMeButton" onClick={(e) => toggleIpButtonState(e)}> View Info! </button>
          </div>
          <div>
            <br></br>
          </div>
          <div>
            {ipLoading ? <ReturnIpDetails ipDetails={ipDetails} /> :
              <ReactBootStrap.Spinner animation="border" variant="info" />}
          </div>
        </div>
      </center>
    </div>
  );
}

export default IpLookup;