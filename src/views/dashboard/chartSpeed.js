import React, { lazy } from 'react'
import {CChart} from '@coreui/react-chartjs'


const bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

const options = {
    // tooltips: {
    //   enabled: false,
    //   custom: customTooltips
    // },
    maintainAspectRatio: false
}

function ChartSpeed(){
  return (
      <div className="col-md-12">
      <h4>Tốc độ</h4>
      <div className="chart-wrapper">
        <CChart style={{ height: "500px" }} type="bar" datasets={bar.datasets} options={options} labels="months"/>
      </div>
      <hr />
    </div>
  )
}

export default ChartSpeed;
