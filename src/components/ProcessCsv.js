import React from 'react';
//import * as d3 from 'd3';
//import data from "../test.csv";
   
    function ProcessCsv(props) {
       console.log('process')

       const {details, dta} = props
       let high = false
     
         for (let d of dta) {
             //console.log(dta)
             //console.log(d)
             if (details.includes("+" + d.Prefix)) {
                high = true
                break;
             }
             else {
               //console.log('csv')
             }
         }

        if(high) {return   <p>High Risk: Yes</p>;    }

        else{return <p>High Risk: No</p>;  }
    
        }

 export default ProcessCsv