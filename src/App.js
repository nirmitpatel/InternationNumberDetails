
import React, {useState, useEffect} from 'react';
import ReturnDetails from './components/ReturnDetails';
//import useNumberDetails from './components/useNumberDetails';
import * as d3 from 'd3';
import data from "./BandwidthHighRiskBlock.csv";
import lite from "./lite.csv";
import background from "./background-globe-animated.svg"
import "./App.css";

function App(){
  
  const [phone, setPhone]= useState('')
  const [phoneDetails, setPhoneDetails] = useState([])
  const [highRiskData, setHighRiskData] = useState([])
  const [liteData, setLiteData] = useState([])

  useEffect(()=> {
    d3.csv(data).then(function(dta) {
         
      setHighRiskData(dta)
     
  })
  },[])

  useEffect(()=> {
    d3.csv(lite).then(function(liteDta) {
         
      setLiteData(liteDta)
     
  })
  },[])
  
  const handleInput = (e) => {
    e.preventDefault()
    setPhone(e.target.value)
    //console.log(phone)
  }
const toggleButtonState = async(e) => {
  if(phoneDetails){setPhoneDetails([])}
  e.preventDefault()
  fetch('http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number=' + phone + '&country_code=&format=1')
  .then(response => response.json())
  .then((data) => {
    
    setPhoneDetails(phoneDetails => [...phoneDetails, data])
     console.log('in the toggle fetch')
  }
  )
};
var rootStyle = {
  backgroundImage: `url(${background})`,
  color : 'white',
  height: '100vh',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundPosition: 'center',
  fontFamily: 'Overpass,sans-serif',
  textAlign: 'left',
  //alignItems: 'left',
}

  return (
    <div style={rootStyle}>
      <center>
        <div>
          <h1>Number Info</h1>
          <div>
              <h5>Enter Phone Number: </h5>
              <input className = "InputBox" value = {phone} onChange = {(e) => handleInput(e)} /> 
              <button className = "ClickMeButton" onClick={(e) => toggleButtonState(e)}> View Info! </button>
          </div>
        </div>
        <div>
          <br></br>
        </div>
        <div>
          <ReturnDetails  csv = {highRiskData} phoneDetails = {phoneDetails} liteCsv = {liteData}/> 
        </div>
      </center>
    </div>
  );
  
}

export default App;