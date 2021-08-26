import React from 'react';
import ProcessCsv from './ProcessCsv';
import ProcessLiteCsv from './ProcessLiteCsv';


   function ReturnDetails(props)  {

        const { csv, phoneDetails, liteCsv } = props
        var rootStyle = {
            //backgroundImage: `url(${background})`,
            //background: "#fffff2",
            background: "rgba(255, 255, 242, .9)",
            color : '#AC3B61',
            //height: '100vh',
            //backgroundSize: 'cover',
            overflow: 'hidden',
            width: '400px',
            fontFamily: 'Overpass,sans-serif',
            textAlign: 'left',
            alignItems: 'left'
          }
    
         return (
            <div key="index">
                
                { phoneDetails ? phoneDetails.map((phoneDetail) => (
                
                <div className="card" key="index2" style={rootStyle}>
                    <div className="card-body">
                        <p className="card-text">Number: {phoneDetail.number}</p>
                        <p className="card-text">Local format: {phoneDetail.local_format}</p>
                        <p className="card-text">International format: {phoneDetail.international_format}</p>
                        <p className="card-text">Country prefix: {phoneDetail.country_prefix}</p>
                        <p className="card-text">Country code: {phoneDetail.country_code}</p>
                        <p className="card-text">Country name: {phoneDetail.country_name}</p>
                        <p className="card-text">Location: {phoneDetail.location}</p>
                        <p className="card-text">Carrier: {phoneDetail.carrier}</p>
                        <p className="card-text">Line type: {phoneDetail.line_type}</p>
                        <div>
                            <ProcessCsv details = {phoneDetail.international_format.toString()} dta = {csv} /> 
                        </div> 
                        <div>
                            <ProcessLiteCsv number = {phoneDetail.international_format.toString()} csvFile = {liteCsv} /> 
                        </div> 
                    </div>
                </div> 
                )) : console.log('no map')}
        </div>
                )
                }
               


export default ReturnDetails