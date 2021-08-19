
import React, {useState, useEffect} from 'react';
import ReturnDetails from './components/ReturnDetails';
//import useNumberDetails from './components/useNumberDetails';
import * as d3 from 'd3';
import data from "./BandwidthHighRiskBlock.csv";


function App(){

  const [phone, setPhone]= useState()
  const [phoneDetails, setPhoneDetails] = useState([])
  const [csvData, setCsvData] = useState([])

  useEffect(()=> {
    d3.csv(data).then(function(dta) {
         
      setCsvData(dta)
     
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


  return (
    
    <div>
      <p>Phone Number: </p><input value = {phone} onChange = {(e) => handleInput(e)} />
      <button onClick={(e) => toggleButtonState(e)}> Click me </button>
      
        <ReturnDetails  csv = {csvData} phoneDetails = {phoneDetails} /> 
    </div>
  );
  
}

// ReactDOM.render(<App />, document.getElementById('container'));

export default App;