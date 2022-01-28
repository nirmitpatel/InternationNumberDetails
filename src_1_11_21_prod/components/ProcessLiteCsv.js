import React from 'react';

function ProcessLiteCsv(props) {
  console.log('ProcessLiteCsv')

  const { number, csvFile } = props
  let high = false

  for (let d of csvFile) {
    if (number.includes("+" + d.Prefix)) {
      console.log('ProcessLiteCsv if: ' + d.Prefix + " Country: " + d.Country)
      high = true
      break;
    }
    else {
      // do nothing
    }
  }

  if (high) { return <p>INTL Lite Blocked: Yes</p>; }

  else { return <p>INTL Lite Blocked: No</p>; }

}

export default ProcessLiteCsv