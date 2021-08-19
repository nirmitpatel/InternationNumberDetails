/*
import React, {Component} from 'react';
import PhoneDetails from './components/phoneDetails';


class App extends Component {
  state = {
    phoneDetails: []
  }
  //state = { name: '' };

  componentDidMount() {
    fetch('http://apilayer.net/api/validate?access_key=799b6b058858fbf11920dbc603e34094&number=919898042011&country_code=&format=1')
    .then(res => res.json())
    .then((data) => {
      const arr = [data];
       this.setState({ phoneDetails: arr })
    }
    )
    .catch(console.log)
  }

  render () {
    return (
      // <div>
      //           Enter your name: <input type="text" value=   {this.state.name} onChange={e => this.setState({ name:e.target.value })} />
      //           <div>Hi {this.state.name}!</div>
                <PhoneDetails phoneDetails={this.state.phoneDetails} /> 
      //</div>
    );
  }
}

export default App;
//-----------------------------------------------------------------------------------------------
*/

/*
import React, {Component} from 'react';

let phoneNumber;

export class App extends Component{
  constructor() {
    super();
    this.state = {
      phone: '',
      countryPrefix: ''
    }
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    phoneNumber = this.state.phone;
    const accessKey = '799b6b058858fbf11920dbc603e34094';
      fetch('http://apilayer.net/api/validate?access_key=799b6b058858fbf11920dbc603e34094&number=17754127163&country_code=&format=1')
      .then(response => response.json())
      // .then(data => this.setState({
      //   countryPrefix: data['country_prefix']
      //   }) )
      .then ((response) => {
        console.log(response);
      })
      //.catch(error => console.log('failed to fetch', error));
    this.setState({phone: e.target.value});
  }
  componentDidMount() {
  
  }

  render() {
    return(
    <div>
      <p>Phone Number: </p><input type='text' onChange={this.handlechange}/>
      <h1> Your phone number is {this.state.phone} and countryPrefix is {this.state.countryPrefix}</h1>
    </div>);
  }
}
  export default App;
*/


// import React, {Component} from 'react';
// import PhoneDetails from './components/phoneDetails';
// let phoneNumber;

// function fetchAPI(param) {
//   var url = 'http://apilayer.net/api/validate?access_key=799b6b058858fbf11920dbc603e34094&number=' + param + '&country_code=&format=1';
//   console.log(url);
//   return fetch (url);
// }

// export class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       phoneDetails: [],
//       phone: null,
//       countNum: 0
//     }
//     //this.handleChange = this.handleChange.bind(this);
//     //this.toggleButtonState = this.toggleButtonState.bind(this);
//   }
 
//   /*
//   handleChange ({target}) {
//     this.setState({
//       [target.name] : target.value
//     });
//   }
//   */

//   /*
//   handleChange (e) {
//     this.setState({phone: e.target.value});
//   }
// */

//  handleChange = (e) => {
//   e.preventDefault()
//   this.setState({phone: e.target.value});
// }

//   toggleButtonState = (e) => {
//     e.preventDefault()
//     console.log("state phone: " + this.state.phone);
//     phoneNumber = this.state.phone;
//     console.log("phoneNumber: " + phoneNumber);
//     //this.state.countNum = this.state.countNum + 1;
//     fetchAPI(phoneNumber)
//     .then(response => response.json())
//     .then((data) => {
//       const arr = [data];
//        this.setState({ phoneDetails: arr })
//     }
//     )
//     // .then(result => {
//     //   this.setState({ result });
//     // });
//   };
//   render() {
//     return (
//       this.state.countNum = this.state.countNum + 1,
//       <div>
//         <p>Phone Number: </p><input type='text' onChange = {this.handleChange}/>
//         <button onClick={this.toggleButtonState}> Click me </button>
//         <PhoneDetails phoneDetails={this.state.phoneDetails} /> 
//         <p>Count: {this.state.countNum}</p>
//       </div>
//     );
//   }
// }

// // ReactDOM.render(<App />, document.getElementById('container'));

// export default App;

import React, {useState} from 'react';
import PhoneDetails from './components/phoneDetails';


function App(){
  
  const [phoneDetails, setPhoneDetails] = useState([])
  const [phone, setPhone]= useState()
  const [countNum, setNum] = useState(0)
  //const valueRef = React.useRef();
  
const toggleButtonState = async(e) => {
  e.preventDefault()
 
  setNum(countNum + 1)
  console.log(countNum)
  await fetch('http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number=' + phone + '&country_code=&format=1')
  .then(response => response.json())
  .then((data) => {
    
    setPhoneDetails(phoneDetails => [...phoneDetails, data])
     console.log('in the toggle fetch')
  }
  )
  
};


  return (
    
    <div>
      <p>Phone Number: </p><input onChange = {(e) => setPhone(e.target.value)} />
      <button onClick={toggleButtonState}> Click me </button>
      <PhoneDetails phoneDetails={phoneDetails} /> 
      <p>Count: {countNum}</p>
    </div>
  );
  
}

export default App;