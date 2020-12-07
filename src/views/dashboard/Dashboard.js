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
import ApexCharts from "apexcharts";
import ApexChart from "./chart";
import ReactApexChart from "apexcharts";
import Chart from "react-apexcharts";
const ChartWord = React.lazy(() => import("./chartWord"));
const ChartSpeed = React.lazy(() => import("./chartSpeed"));
const ChartRating = React.lazy(() => import("./chartRating"));
const Progress = (props) => {
  return (
    <CProgress
      value={props.text}
      showValue
      className="mb-1 bg-grey"
      color={props.progress}
      style={{ width: "100%", margin: "auto" }}
    />
  );
};
const LearnResult = () => {
  return (
    // <CCard>
    //   <CCardHeader>
    //     <CCardTitle></CCardTitle>
    //   </CCardHeader>
    //   <CCardBody>
    //     <CRow>
    //     <Progress></Progress>
    //     <Star></Star>
    //     </CRow>

    //   </CCardBody>
    //   <CCardFooter></CCardFooter>
    // </CCard>
    <CContainer>
      <CRow>
        <CCol sm="4">
          <CCardTitle>Học gõ phím</CCardTitle>
        </CCol>
        <CCol sm="4">
          <Progress text="20" progress="success" />
        </CCol>
        <CCol sm="4">
          <Star></Star>
        </CCol>
      </CRow>
    </CContainer>
  );
};
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
        <CRow>
          <CCol sm="8">
            <CCard>
              <CCardHeader>
                <CCardTitle>Đánh giá kết quả học gõ tốc ký</CCardTitle>
              </CCardHeader>

              <CCardBody>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="area"
                  height={400}
                />
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>
                <CCardTitle>Đánh giá quá trình học gõ tốc ký</CCardTitle>
              </CCardHeader>

              <CCardBody>
                <LearnResult></LearnResult>
                <LearnResult></LearnResult>
                <LearnResult></LearnResult>
                <LearnResult></LearnResult>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="4">
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
          </CCol>
        </CRow>
      </CContainer>
    );
  }
}

export default Dashboard;
