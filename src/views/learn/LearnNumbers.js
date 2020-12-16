import React, { useState } from "react";

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CCardText,
  CLink,
  CCardTitle,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
  CProgress,
} from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";

const pie = {
  labels: ["Hoàn thành", "Chưa hoàn thành"],
  datasets: [
    {
      data: [200, 100],
      backgroundColor: ["#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
    },
  ],
};

const Progress = (props) => {
  return (
    <CProgress
      value={props.text}
      showValue
      className="mb-1 bg-white"
      color={props.progress}
      style={{ width: "60%", margin: "auto" }}
    />
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
const Lesson = (props) => {
  return (
    <CCard className="text-black bg-secondary" style={{ textAlign: "center" }}>
      <CCardHeader>
        <CCardTitle>{props.text}</CCardTitle>
        {props.progress == "0" ? (
          ""
        ) : props.progress == "100" ? (
          <Progress text={props.progress} progress="success" />
        ) : (
          <Progress text={props.progress} progress="warning" />
        )}
        {/* <Progress /> */}
        <Star />
        <CCardTitle>Thời gian học: 00:10:00</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton
          color={props.progress == 0 ? "danger" : "primary"}
          href={props.link}
        >
          {props.progress == 0 ? "Vào học ngay" : "Học lại"}
        </CButton>
      </CCardBody>
    </CCard>
  );
};
const Nav = () => {
  return (
    <CTabs activeTab="learn">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink data-tab="learn">Bài học</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink data-tab="purpose">Giới thiệu</CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="learn">
          <br />
          <CRow>
            <CCol sm="4">
              <Lesson
                text="Bài 0: Giới thiệu các gõ số"
                progress="100"
                link="/#/learn/keys/lesson1"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 1: Thực hành quy tắc gõ số"
                progress="40"
                link="/#/learn/keys/lesson1"
              />
            </CCol>
          </CRow>
        </CTabPane>
        <CTabPane data-tab="purpose"></CTabPane>
      </CTabContent>
    </CTabs>
  );
};

function LearnNumbers() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol sm="8">
                <CCardTitle>Học gõ phím tốc ký</CCardTitle>
                <h5>
                  Học gõ phím tốc ký giúp bạn làm quen với bàn phím tốc ký tiếng
                  Việt để có thể gõ được tốc ký Tiếng Việt
                </h5>
                <br />
                <CRow>
                  <CCol sm="4">
                    <CCardText>
                      <i class="cis-timer"></i>- Thời gian học tập:
                    </CCardText>
                    <CCardText>- Số lượng bài học </CCardText>
                  </CCol>
                  <CCol sm="4">
                    <h6>20 phút</h6>
                    <CCardText>2 bài học</CCardText>
                  </CCol>
                </CRow>
              </CCol>
              <CCol sm="4">
                <CChart
                  type="pie"
                  datasets={pie.datasets}
                  labels={pie.labels}
                />
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <Nav />
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
}

export default LearnNumbers;
