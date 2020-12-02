import React from "react";

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CRow,
  CCol,
  CInput,
  CLabel,
  CButton,
  CLink,
} from "@coreui/react";

const Charts = React.lazy(() => import("./Charts"));

function Fight() {
  return (
    <>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader></CCardHeader>
            <CCardBody>
              <CLabel>Mời nhập tên</CLabel>
              <CInput />
              <CLink to="/race">
                <CButton
                  color="primary"
                  style={{ marginTop: "10px" }}
                  size="lg"
                >
                  Tham gia
                </CButton>
              </CLink>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <CButton color="primary" style={{ marginRight: "10px" }}>
                Điểm cao mới nhất
              </CButton>
              <CButton color="primary" style={{ marginRight: "10px" }}>
                Điểm của bạn
              </CButton>
              <CButton color="primary" style={{ marginRight: "10px" }}>
                Hall of Fame
              </CButton>
              <CButton color="primary">Thi đấu</CButton>
            </CCardHeader>
            <CCardBody>
              <Charts />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Fight;
