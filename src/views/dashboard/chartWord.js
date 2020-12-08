import React, { lazy } from "react";
import { CChart } from "@coreui/react-chartjs";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { CContainer } from "@coreui/react";

class ChartWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Thời gian học gõ",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Tốc độ gõ",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 400,
          type: "line",
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
            "2020-08-11T00:00:00.000Z",
            "2020-08-12T01:30:00.000Z",
            "2020-08-12T02:30:00.000Z",
            "2020-08-13T03:30:00.000Z",
            "2020-08-13T04:30:00.000Z",
            "2020-08-14T05:30:00.000Z",
            "2020-08-14T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  render() {
    return (
      <CContainer fluid>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={400}
        />
      </CContainer>
    );
  }
}

export default ChartWord;
