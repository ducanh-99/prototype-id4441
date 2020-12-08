import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CRow,
  CCol,
  CFooter,
  CProgressBar,
  CProgress,
  CButton,
  CInput,
  CLink,
} from "@coreui/react";
// import Keyboard from "react-virtual-keyboard";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const Player = () => {
  return (
    <>
      <CRow>
        <CCol sm="10">
          <CButton color="warning">player</CButton>
          <br />
          <CProgress
            animated
            striped
            color="info"
            value={50}
            className="mb-1 bg-white"
          />
        </CCol>
        <CCol sm="2">
          <div style={{ marginTop: "15px" }}>45 từ/phút</div>
        </CCol>
      </CRow>
    </>
  );
};

function Race() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardBody style={{ height: "400px" }}>
            <Player />
            <Player />
            <Player />
            <Player />
            <br />
            <CCardBody>Cộng hòa xã hội chủ nghĩa việt nam</CCardBody>
          </CCardBody>

          <CCardFooter style={{ height: "50px" }}>
            <CInput />
          </CCardFooter>
        </CCard>
      </CContainer>
      <CRow>
        <CCol sm="8">
          <CCard>
            <CCardBody style={{ height: "300px" }}>
              <Keyboard />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="4">
          <CCard>
            <CCardBody style={{ height: "300px" }}>
              <CLink to="/fight/rank">Hoàn thành</CLink>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Race;
