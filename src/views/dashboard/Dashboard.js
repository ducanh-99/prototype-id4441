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
  CWidgetProgress,
  CCardText,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import Chart from "react-apexcharts";
import YourSoccer from "../fight/YourSoccer";
const ChartWord = React.lazy(() => import("./chartWord"));
const ChartSpeed = React.lazy(() => import("./chartSpeed"));
const ChartRating = React.lazy(() => import("./chartRating"));
const Step = React.lazy(() => import("./step"));

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
      <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
      <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
      <CIcon size={"xl"} name={"cil-star"} arn />
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

const CardWidget = (props) => {
  return (
    <CCard
      accentColor={props.color}
      style={{ height: "150px", alignItems: "center" }}
    >
      <CCardBody style={{ textAlign: "center" }}>
        <CCardText>{props.header}</CCardText>
        <h1>
          {props.content}{" "}
          {props.custom == undefined ? (
            <CIcon style={{ color: "green" }} name={props.cil} />
          ) : (
            ""
          )}
        </h1>
        <h6 style={{ color: "red" }}>{props.custom}</h6>
      </CCardBody>
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
      <>
        <CRow>
          <CCol xs="12" sm="6" lg="3">
            {/* <CWidgetProgress
              color="success"
              header="Bài học"
              text="20/40 bài"
              // footer="Lorem ipsum dolor sit amet enim."
            /> */}
            {/* <CCard
              accentColor="success"
              style={{ height: "150px", alignItems: "center" }}
            >
              <CCardBody style={{ textAlign: "center" }}>
                <CCardText>Số bài đã học trong ngày</CCardText>
                <h1>10 bài</h1>
              </CCardBody>
            </CCard> */}
            <CardWidget
              color="success"
              header="Số bài đã học trong ngày"
              content="10 bài"
              cil="cil-arrow-top"
            />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CardWidget
              color="info"
              header="Tốc độ gõ trung bình trong ngày"
              content="47 từ/phút"
              cil="cil-arrow-top"
            />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CardWidget
              color="warning"
              header="Số lượng từ tốc ký gõ trong ngày"
              content="2048 từ"
              cil="cil-arrow-top"
            />
          </CCol>
          <CCol xs="12" sm="6" lg="3">
            <CardWidget
              color="danger"
              header="Thời gian sử dụng trong ngày"
              content="2 tiếng"
              custom="Bạn nên nghỉ ngơi sớm"
            />
          </CCol>
        </CRow>
        <CContainer fluid>
          <CCard>
            <CCardHeader>
              <CCardTitle>Lộ trình học tập</CCardTitle>
            </CCardHeader>
            <CCardBody>
              <Step />
            </CCardBody>
          </CCard>
          <CRow>
            <CCol sm="8">
              <CCard>
                <CCardHeader>
                  <CCardTitle>Tần suất và tốc độ gõ</CCardTitle>
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
              {/* <CCard>
                <CCardHeader>
                  <CCardTitle>Đánh giá quá trình học gõ tốc ký</CCardTitle>
                </CCardHeader>

                <CCardBody>
                  <LearnResult></LearnResult>
                  <LearnResult></LearnResult>
                  <LearnResult></LearnResult>
                  <LearnResult></LearnResult>
                </CCardBody>
              </CCard> */}
              <CCard>
                <CCardHeader>
                  <CCardTitle>Điểm của bạn trong Thi đấu gõ tốc ký</CCardTitle>
                </CCardHeader>

                <CCardBody>
                  {/* <LearnResult></LearnResult>
                <LearnResult></LearnResult>
                <LearnResult></LearnResult>
                <LearnResult></LearnResult> */}
                  {/* <ChartRating/> */}
                  {/* <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="area"
                  height={400}
                /> */}
                  {/* <ChartWord></ChartWord> */}
                  <YourSoccer />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="4">
              {/* <ChartWord />
              <ChartSpeed />
              <ChartRating /> */}
              <CCard>
                <CCardHeader>
                  <CCardTitle color="success">
                    Các bài đã học gần đây
                  </CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <LessonShort
                    text="Bài 1: Học các phím tay trái"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 2: Học các phím tay phải"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 2: Học các phím tay phải 2"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 4: Học các gõ âm"
                    linkLearn=""
                    linkPractice=""
                  />
                  <CContainer>
                    <CLink>Xem thêm</CLink>
                  </CContainer>
                </CCardBody>
                <CCardFooter></CCardFooter>
              </CCard>
              <CCard>
                <CCardHeader>
                  <CCardTitle>Các bài học tiếp theo</CCardTitle>
                </CCardHeader>
                <CCardBody>
                  <LessonShort
                    text="Bài 1: Học các gõ âm chính"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 2: Học quy tắc xóa"
                    linkLearn=""
                    linkPractice=""
                  />
                  <LessonShort
                    text="Bài 1: Học quy tắc gõ số"
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
      </>
    );
  }
}

export default Dashboard;
