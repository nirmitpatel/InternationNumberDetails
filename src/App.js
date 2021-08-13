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

import React, {Component} from 'react';
import PhoneDetails from './components/phoneDetails';
let phoneNumber;

function fetchAPI(param) {
  var url = 'http://apilayer.net/api/validate?access_key=799b6b058858fbf11920dbc603e34094&number=' + param + '&country_code=&format=1';
  console.log(url);
  return fetch (url);
}

export class App extends Component{
  constructor() {
    super();
    this.state = {
      phoneDetails: [],
      phone: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleButtonState = this.toggleButtonState.bind(this);
  }
 
  /*
  handleChange ({target}) {
    this.setState({
      [target.name] : target.value
    });
  }
  */

  handleChange (e) {
    this.setState({phone: e.target.value});
  }

  toggleButtonState = () => {
    console.log("state phone: " + this.state.phone);
    phoneNumber = this.state.phone;
    console.log("phoneNumber: " + phoneNumber);
    //let selectedWord = "17754127163";
          //   d3.csv(data).then(function(data) {
          //     console.log(data)
          //   }).catch(function(err) {
          //     throw err;
          // })
    fetchAPI(phoneNumber)
    .then(response => response.json())
    .then((data) => {
      const arr = [data];
       this.setState({ phoneDetails: arr })
    }
    )
    // .then(result => {
    //   this.setState({ result });
    // });
  };
    render() {
      return (
        <div>
          <p>Phone Number: </p><input type='text' onChange = {this.handleChange}/>
          <button onClick={this.toggleButtonState}> Click me </button>
          <PhoneDetails phoneDetails={this.state.phoneDetails} /> 
        </div>
      );
    }
}

// ReactDOM.render(<App />, document.getElementById('container'));

export default App;