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
      data: [300, 100],
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
        {props.progress === "0" ? (
          ""
        ) : props.progress === "100" ? (
          <Progress text={props.progress} progress="success" />
        ) : (
          <Progress text={props.progress} progress="warning" />
        )}
        <Star />
        <CCardTitle>Thời gian: 00:10:00</CCardTitle>
      </CCardHeader>
      <CCardBody>
        <CButton color={props.progress === 0 ? "danger" : "primary"} href={props.link}>
          {props.progress === 0 ? "Vào học ngay" : "Học lại"}
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
          <CNavLink data-tab="purpose">Mục đích</CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="learn">
          <br />
          <CRow>
            <CCol sm="4">
              <Lesson
                text="Bài 1: Luyện gõ phím"
                progress="40"
                link="/#/practice/key"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 2: Luyện gõ âm"
                progress="40"
                link="/#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 3: Luyện gõ từ"
                progress="100"
                link="/#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 4: Luyện gõ câu"
                progress="0"
                link="/#/learn/sound"
              />
            </CCol>
            
          </CRow>
        </CTabPane>
        <CTabPane data-tab="purpose">456</CTabPane>
      </CTabContent>
    </CTabs>
  );
};

function Practice() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>Luyện tập gõ tốc ký</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="8">
                <CCardTitle>Luyện tập gõ tốc ký</CCardTitle>
                <CCardText>
                Luyện tập gõ tốc ký giúp bạn gõ tốc ký tiếng Việt thành thạo hơn, cải thiện về độ chính xác, tốc độ gõ
                </CCardText>
                <CRow>
                  <CCol sm="4">
                    <CCardText>
                      <i class="cis-timer"></i>- Thời gian luyện tập:
                    </CCardText>
                    <CCardText>- Số lượng bài luyện tập </CCardText>
                  </CCol>
                  <CCol sm="4">
                    <CCardText>20 giờ</CCardText>
                    <CCardText>4 bài học</CCardText>
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
          </CCardBody>
          <CCardFooter>
            <Nav />
          </CCardFooter>
        </CCard>
      </CContainer>
    </>
  );
}

export default Practice;
