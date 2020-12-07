import React, { lazy } from 'react'
import {CChart} from '@coreui/react-chartjs'
import ApexCharts from 'apexcharts'


const bar = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

const options = {
    // tooltips: {
    //   enabled: false,
    //   custom: customTooltips
    // },
    maintainAspectRatio: false
}
function ChartWord(){
    return (
        // <div className="col-md-12">
        // <h4>Số lượng từ</h4>
        // <div className="chart-wrapper">
          <ApexCharts style={{ height: "500px" }} type="area" series={bar.series}  options={bar.options}/>
      //   </div>
      //   <hr />
      // </div>
    )
}

export default ChartWord;
