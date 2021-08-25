//import React, {useState, useCallback} from 'react';
import React from 'react';
import ProcessCsv from './ProcessCsv';
//import background from "../ReactBackground.gif"



   function ReturnDetails(props)  {

   
        
        const { csv, phoneDetails} = props
        var rootStyle = {
            //backgroundImage: `url(${background})`,
            background: "#fffff2",
            color : '#AC3B61',
            //height: '100vh',
            //backgroundSize: 'cover',
            overflow: 'hidden',
            width: '400px',
            fontFamily: 'Overpass,sans-serif',
            textAlign: 'left',
            alignItems: 'left',
          }
    
         return (
            <div key="index">
                
                { phoneDetails ? phoneDetails.map((phoneDetail) => (
                
                <div className="card" style={rootStyle}>
                    <div class="card-body">
                    <p class="card-text">Number: {phoneDetail.number}</p>
                    <p class="card-text">Local format: {phoneDetail.local_format}</p>
                    <p class="card-text">International format: {phoneDetail.international_format}</p>
                    <p class="card-text">Country prefix: {phoneDetail.country_prefix}</p>
                    <p class="card-text">Country code: {phoneDetail.country_code}</p>
                    <p class="card-text">Country name: {phoneDetail.country_name}</p>
                    <p class="card-text">Location: {phoneDetail.location}</p>
                    <p class="card-text">Carrier: {phoneDetail.carrier}</p>
                    <p class="card-text">Line type: {phoneDetail.line_type}</p>
                    
                     <div><ProcessCsv details = {phoneDetail.international_format.toString()} dta = {csv} /> </div> 
                   
                    </div>
                </div> 
                )) : console.log('no map')}
        </div>
                )
                }
               


export default ReturnDetails