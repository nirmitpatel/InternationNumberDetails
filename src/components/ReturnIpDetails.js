import React from 'react';
import "../App.css";


function ReturnIpDetails(props) {

    const { ipDetails } = props
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

            {ipDetails ? ipDetails.map((ipDetail) => (

                <div className="card" key="index2" style={rootStyle}>
                    <div className="card-body">
                        {(
                            ipDetail.hasOwnProperty('reason') ?
                                <p className="card-text" style={{ 'color': 'red', 'paddingRight': '10px' }}>ERROR: IP Lookup Error! {ipDetail.reason} <p /> </p> :
                                <>
                                    <p className="card-text">IP: {ipDetail.ip}</p>
                                    <p className="card-text">City: {ipDetail.city}</p>
                                    <p className="card-text">Region: {ipDetail.region}</p>
                                    <p className="card-text">Region Code: {ipDetail.region_code}</p>
                                    <p className="card-text">Country Code: {ipDetail.country_code}</p>
                                    <p className="card-text">Country Name: {ipDetail.country_name}</p>
                                    <p className="card-text">Postal: {ipDetail.postal}</p>
                                    <p className="card-text">Timezone: {ipDetail.timezone}</p>
                                    <p className="card-text">Organization: {ipDetail.org}</p>
                                    <p />
                                </>
                        )}
                    </div>
                </div>
            )) : console.log('no map')}
        </div>
    )
}



export default ReturnIpDetails