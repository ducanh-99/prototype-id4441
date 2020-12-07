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
const ChartWord = React.lazy(() => import("./chartWord"));
const ChartSpeed = React.lazy(() => import("./chartSpeed"));
const ChartRating = React.lazy(() => import("./chartRating"));

// const timeChart = ()=>{
//   return(
//
// );
// }
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

const Dashboard = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="8">
          <CRow>
            <CCard>
              <CCardHeader></CCardHeader>
              <CCardTitle></CCardTitle>
              <CCardFooter></CCardFooter>
            </CCard>
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
};

export default Dashboard;
