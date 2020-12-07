import React, { lazy } from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  // CChart,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CContainer,
  CCardTitle,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ApexCharts from 'apexcharts'
import ApexChart from "./chart";
import ReactApexChart from 'apexcharts';
import Chart from 'react-apexcharts';
const ChartWord = React.lazy(() => import("./chartWord"));
const ChartSpeed = React.lazy(() => import("./chartSpeed"));
const ChartRating = React.lazy(() => import("./chartRating"));

const TimeChart = () => {
  return (
    <div id="chart">
    </div>
  );
}
const Star = (props) => {
  return (
    <CRow style={{ textAlign: "center" }}>
      <CCardTitle style={{ marginRight: "10px" }}>Điểm số: </CCardTitle>
      <CIcon size={"xl"} name={"cil-star"} />
      <CIcon size={"xl"} name={"cil-star"} />
      <CIcon size={"xl"} name={"cil-star"} />
      <CIcon size={"xl"} name={"cil-star"} />
      <CIcon size={"xl"} name={"cil-star"} />
    </CRow>
  );
};
const LessonShort = (props) => {
  return (
    <CCard style={{ marginLeft: "15px" }}>
      {/* <CCardHeader>{props.text}</CCardHeader> */}
      <CCardTitle>{props.text}</CCardTitle>
      <CCardTitle style={{ marginLeft: "15px" }}>
        <Star />
      </CCardTitle>
      <CRow style={{ marginLeft: "15px" }}>
        <CButton
          color="primary"
          style={{ margin: "15px" }}
          href={props.linkLearn}
        >
          Học
        </CButton>
        <CButton
          color="success"
          style={{ margin: "15px" }}
          href={props.linkPractice}
        >
          Luyện tập
        </CButton>
      </CRow>
      {/* <CCardFooter></CCardFooter> */}
    </CCard>
  );
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },


    };
  }
  render() {
    return (
      <CContainer fluid>
        <CRow>
          <CCol sm="8">
            <CRow>
              <CCard>
                <CCardHeader></CCardHeader>
                <CCardTitle></CCardTitle>
                <CCardBody>
                  {/* <ChartWord/> */}
                </CCardBody>
                <CCardFooter></CCardFooter>
              </CCard>
            </CRow>
            <CRow>
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
            </CRow>
          </CCol>
          <CCol sm="4">
            <CRow>
              {/* <ChartWord />
              <ChartSpeed />
              <ChartRating /> */}
              <CCard>
                <CCardHeader>
                  <CCardTitle>Các bài đã học gần đây</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <LessonShort
                    text="Bài 1: Học các phím tay trái"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 1: Học các phím tay trái"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 1: Học các phím tay trái"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 1: Học các phím tay trái"
                    linkLearn=""
                    linkPractice=""
                  />
                  <CContainer>
                    <CLink>Xem thêm</CLink>
                  </CContainer>
                </CCardBody>
                <CCardFooter></CCardFooter>
              </CCard>
            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    );
  }

};

export default Dashboard;
