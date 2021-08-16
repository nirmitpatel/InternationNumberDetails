import React, {useState} from 'react';
import * as d3 from 'd3';
//import data from "../BandwidthHighRiskBlock.csv";
import data from "../test.csv";


const PhoneDetails = ({ phoneDetails }) => {
    const [test, setTest] = useState('Ehh')
    const [count, setCount] = useState(0)

    function ProcessCsv(props) {
        //var test = "High";
        // d3.csv(data).then(function(data) {
        //     data.some(function(d) {  
        //         //console.log("+" + d.Prefix);
        //         if (props.number.includes("17754")) {
        //             break;
        //         }
        //         else {
        //             test = "None";
        //         }
        //     });
        // });
        d3.csv(data).then(function(data) {
            setCount(count + 1)
            for (let d of data) {
                if (props.number.includes("+" + d.Prefix)) {
                    console.log("inside if");
                    setTest("High");
                    break;
                }
                else {
                    //console.log("inside else");
                    setTest("None");
                    //console.log("inside else, test = " + test);
                }
                //console.log("outside if/else, test = " + test);
            }
            console.log("inside for, test = " + test);
            //test3 = test;
        });
        console.log("outside loop, test3 = " + test);
        if (test === "High") {
            console.log("inside if2,  test = " + test);
            return <p>Bandwidth High Risk if: {test + " " + count}</p>;
        }
        else {
            console.log("inside else2,  test = " + test);
            return <p>Bandwidth High Risk else: {test + " " + count}</p>;
        }
    }
    return (
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
                {/* <p class="card-text">Bandwidth High Risk Prefix: {processCsv(phoneDetail.international_format)}</p> */}
                {/* <div> {processCsv(phoneDetail.international_format)} </div> */}
                <div> <ProcessCsv number={phoneDetail.international_format.toString()}/> </div>
                </div>
            </div>
            ))}
        </div>
    )
};

export default PhoneDetails