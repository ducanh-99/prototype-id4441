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
} from "@coreui/react";

const Player = () => {
  return (
    <>
      <CButton color="warning">player</CButton>
      <CProgress
        animated
        striped
        showValue
        color="info"
        value={50}
        className="mb-1 bg-white"
      />
    </>
  );
};

function Race() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardBody style={{ height: "400px" }}>
            <Player style={{ height: "10px" }} />
            <Player />
            <Player />
            <Player />
          </CCardBody>
          <CCardFooter style={{ height: "50px" }}>How it's going</CCardFooter>
        </CCard>
      </CContainer>
      <CRow>
        <CCol sm="8">
          <CCard>
            <CCardBody style={{ height: "300px" }}></CCardBody>
          </CCard>
        </CCol>
        <CCol sm="4">
          <CCard>
            <CCardBody style={{ height: "300px" }}></CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Race;
