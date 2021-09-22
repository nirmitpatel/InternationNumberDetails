import React from 'react';
import "../App.css";

function ReturnDetails(props) {

    const { localPhoneDetails } = props
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
        padding: '15px 0px 15px 25px'
    }

    return (
        <div key="index">

            {localPhoneDetails ? localPhoneDetails.map((localPhoneDetail) => (
                
                <div className="card" key="index2" style={rootStyle}>
                    <div className="card-body">
                        {
                            (
                                localPhoneDetail.hasOwnProperty ('message') ?
                                    <p className="card-text" style={{ 'color': 'red', 'paddingRight': '10px'}}>ERROR: {localPhoneDetail.message}</p> :
                                    <>
                                        <p className="card-text">E164 Number: {localPhoneDetail.result[0]["E.164 Format"]}</p>
                                        <p className="card-text">Formatted Number: {localPhoneDetail.result[0].Formatted}</p>
                                        <p className="card-text">Country name: {localPhoneDetail.result[0].Country}</p>
                                        <p className="card-text">Line type: {localPhoneDetail.result[0]["Line Type"]}</p>
                                        <p className="card-text">Carrier: {localPhoneDetail.result[0]["Line Provider"]}</p>
                                    </>
                            )
                        }
                    </div>
                </div> )
            ) : console.log('no map')}
        </div>
    )
}



export default ReturnDetails