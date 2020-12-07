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
        <CButton color={props.progress == 0 ? "danger" : "primary"} href={props.link}>
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
          <CNavLink data-tab="purpose">Mục đích</CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane data-tab="learn">
          <br />
          <CRow>
<<<<<<< HEAD
            <CCol sm="6">
              <CCard
                className="text-black bg-secondary  "
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>Bài học thứ 1: Giới thiệu </CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary" href="/#/learn/keys/lesson1">Học ngay</CButton>
                </CCardBody>
              </CCard>
              <CCard
                className="text-black bg-secondary"
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>Bài học thứ 3: các phím N,H,S,U, O</CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary">Học ngay</CButton>
                </CCardBody>
              </CCard>
              <CCard
                className="text-black bg-secondary"
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>Bài học thứ 5: các phím J,N,G,T,K</CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary">Học ngay</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="6">
              <CCard
                className="text-black bg-secondary  "
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>Bài học thứ 2: các phím S,T,K,P,R,H</CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary" href="/#/learn/keys/lesson1">Học ngay</CButton>
                </CCardBody>
              </CCard>
              <CCard
                className="text-black bg-secondary"
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>Bài học thứ 4: các phím E ,A,*,W,I,Y</CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary">Học ngay</CButton>
                </CCardBody>
              </CCard>
              <CCard
                className="text-black bg-secondary"
                style={{ textAlign: "center" }}
              >
                <CCardHeader>
                  <CCardText>
                    Bài học thứ 6: các phím ghi nhớ trật tự các phím
                  </CCardText>
                  <Progress />
                </CCardHeader>
                <CCardBody>
                  <CButton color="primary">Học ngay</CButton>
                </CCardBody>
              </CCard>

=======
            <CCol sm="4">
              <Lesson
                text="Bài 1: Học các phím tay trái"
                progress="40"
                link="/learn/word#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 2: Học các phím tay trái P2"
                progress="40"
                link="/learn/word#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 3: Học các phím tay phải"
                progress="100"
                link="/learn/word#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 4: Học các phím tay phải P2"
                progress="0"
                link="/learn/word#/learn/sound"
              />
            </CCol>
            <CCol sm="4">
              <Lesson
                text="Bài 5: Học trật tự các phím"
                progress="0"
                link="/learn/word#/learn/sound"
              />
>>>>>>> a295b384f2b449427241647d84b3feb42e807735
            </CCol>
          </CRow>
        </CTabPane>
        <CTabPane data-tab="purpose">456</CTabPane>
      </CTabContent>
    </CTabs>
  );
};

function ListKeys() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>Học gõ phím</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="8">
                <CCardTitle>Học gõ phím tốc ký</CCardTitle>
                <CCardText>
                  Học gõ phím tốc ký giúp bạn làm quen với bàn phím tốc ký tiếng
                  Việt để có thể gõ được tốc ký Tiếng Việt
                </CCardText>
                <CRow>
                  <CCol sm="4">
                    <CCardText>
                      <i class="cis-timer"></i>- Thời gian học tập:
                    </CCardText>
                    <CCardText>- Số lượng bài học </CCardText>
                  </CCol>
                  <CCol sm="4">
                    <CCardText>10 giờ</CCardText>
                    <CCardText>5 bài học</CCardText>
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

export default ListKeys;
