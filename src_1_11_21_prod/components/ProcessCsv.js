import React from 'react';
function ProcessCsv(props) {
  console.log('process')

  const { details, dta } = props
  let high = false

  for (let d of dta) {
    if (details.includes("+" + d.Prefix)) {
      high = true
      break;
    }
    else {
      // do nothing 
    }
  }

  if (high) { return <p>High Risk: Yes</p>; }

  else { return <p>High Risk: No</p>; }

}

export default ProcessCsv