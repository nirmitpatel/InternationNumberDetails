import React from 'react';
import ProcessCsv from './ProcessCsv';
import ProcessLiteCsv from './ProcessLiteCsv';
import "../App.css";


function ReturnDetails(props) {

    const { csv, intlPhoneDetails, liteCsv } = props
    var rootStyle = {
        background: '#b3ecfb',
        color: '#000000',
        overflow: 'hidden',
        width: '400px',
        fontFamily: 'Overpass,sans-serif',
        fontWeight: 'bold',
        textAlign: 'left',
        alignItems: 'left',
        borderRadius: '20px',
        padding: '15px 0px 0px 25px'
    }

    return (
        <div key="index">

            {intlPhoneDetails ? intlPhoneDetails.map((intlPhoneDetail) => (

                <div className="card" key="index2" style={rootStyle}>
                    <div className="card-body">
                        <p className="card-text">Number: {intlPhoneDetail.number}</p>
                        <p className="card-text">Local format: {intlPhoneDetail.local_format}</p>
                        <p className="card-text">International format: {intlPhoneDetail.international_format}</p>
                        <p className="card-text">Country prefix: {intlPhoneDetail.country_prefix}</p>
                        <p className="card-text">Country code: {intlPhoneDetail.country_code}</p>
                        <p className="card-text">Country name: {intlPhoneDetail.country_name}</p>
                        <p className="card-text">Location: {intlPhoneDetail.location}</p>
                        <p className="card-text">Carrier: {intlPhoneDetail.carrier}</p>
                        <p className="card-text">Line type: {intlPhoneDetail.line_type}</p>
                        <div>
                            <ProcessCsv details={intlPhoneDetail.international_format.toString()} dta={csv} />
                        </div>
                        <div>
                            <ProcessLiteCsv number={intlPhoneDetail.international_format.toString()} csvFile={liteCsv} />
                        </div>
                    </div>
                </div>
            )) : console.log('no map')}
        </div>
    )
}



export default ReturnDetails