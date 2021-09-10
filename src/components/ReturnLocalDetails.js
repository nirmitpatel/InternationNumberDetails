import React from 'react';


function ReturnDetails(props) {

    const { localPhoneDetails } = props
    var rootStyle = {
        background: "rgba(255, 255, 242, .9)",
        color: '#AC3B61',
        overflow: 'hidden',
        width: '400px',
        fontFamily: 'Overpass,sans-serif',
        textAlign: 'left',
        alignItems: 'left'
    }

    return (
        <div key="index">

            {localPhoneDetails ? localPhoneDetails.map((localPhoneDetail) => (
                <div className="card" key="index2" style={rootStyle}>
                    <div className="card-body">
                        <p className="card-text">E164 Number: {localPhoneDetail.result[0]["E.164 Format"]}</p>
                        <p className="card-text">Formatted Number: {localPhoneDetail.result[0].Formatted}</p>
                        <p className="card-text">Country name: {localPhoneDetail.result[0].Country}</p>
                        <p className="card-text">Line type: {localPhoneDetail.result[0]["Line Type"]}</p>
                        <p className="card-text">Carrier: {localPhoneDetail.result[0]["Line Provider"]}</p>
                    </div>
                </div>
            )) : console.log('no map')}
        </div>
    )
}



export default ReturnDetails