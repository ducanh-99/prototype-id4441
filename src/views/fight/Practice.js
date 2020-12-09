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
            <br />
            <CCardBody>Cộng hòa xã hội chủ nghĩa việt nam</CCardBody>
          </CCardBody>

          <CCardFooter style={{ height: "50px" }}></CCardFooter>
        </CCard>
      </CContainer>
      <KeyboardSteno />
    </>
  );
}

export default Race;
