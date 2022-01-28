//import  {useState, useEffect} from 'react';

export default function useNumberDetails() {


  async function getPhoneDetails(phone, setPhoneDetails, phoneDetails) {



    fetch('http://apilayer.net/api/validate?access_key=1fcc33e69f7fee637d15338c111fe68f&number=' + phone + '&country_code=&format=1')
      .then(response => response.json())
      .then((data) => {

        setPhoneDetails(phoneDetails => [...phoneDetails, data])
        console.log('in the toggle fetch')
      }
      )
  }
  return [getPhoneDetails]
}