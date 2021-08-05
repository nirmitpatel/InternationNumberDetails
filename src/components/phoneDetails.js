import React from 'react'

const PhoneDetails = ({ phoneDetails }) => {
    return (
        // <input type="text" className="form-control" ref={(c) => this.PhoneDetails = c} name="title" />
        <div key="index">
            <center><h1>Number Info</h1></center>
            {phoneDetails.map((phoneDetail) => (
            <div class="card">
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
                </div>
            </div>
            ))}
        </div>

    
    // <pre>
    //     {JSON.stringify(phoneDetails, null, 2)}
    // </pre>
    )
};

export default PhoneDetails