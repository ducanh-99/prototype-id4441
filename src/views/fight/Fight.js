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
  CDataTable
} from "@coreui/react";

const Charts = React.lazy(() => import('./Charts'))

function Fight() {
  return (
    <>
      <CRow>
        <CCol sm="6">
          <CCard>
            <CCardHeader></CCardHeader>
            <CCardBody>
              <CLabel>
                Mời nhập tên
              </CLabel>
              <CInput />
              <CButton color="primary">
                Tham gia
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
            <CButton color="primary">
                Điểm cao mới nhất
              </CButton>
              <CButton color="primary">
                Điểm của bạn
              </CButton>
              <CButton color="primary">
                Hall of Fame 
              </CButton>
              <CButton color="primary">
                Thi đấu
              </CButton>
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
