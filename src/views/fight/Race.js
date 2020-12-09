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
  CTextarea,
} from "@coreui/react";
// import Keyboard from "react-virtual-keyboard";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KeyboardSteno = React.lazy(() => import("../learn/keyboard"));

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
          <CCardBody>
            <Player />
            <Player />
            <Player />
            <Player />
            <br />
          </CCardBody>

          <CCardFooter style={{ height: "100px" }}>
            <CTextarea />
          </CCardFooter>
        </CCard>
      </CContainer>
      <KeyboardSteno></KeyboardSteno>
    </>
  );
}

export default Race;
