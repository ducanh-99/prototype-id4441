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

const HighSoccer = React.lazy(() => import("./HighSoccer"));
const HallofFame = React.lazy(() => import("./HallofFame"));
const YourSoccer = React.lazy(() => import("./YourSoccer"));

function Fight() {
  const [select, SetSelect] = React.useState(1);
  return (
    <>
      <CRow>
        <CCol sm="6">
          <CCard accentColor="success">
            <CCardBody>
              <CLabel>Đối đầu với các đối thủ trực tuyến</CLabel>
              <br />
              <CLink to="/fight/race">
                <CButton
                  color="success"
                  style={{ marginTop: "10px" }}
                  size="lg"
                >
                  Tham gia một cuộc đua Tốc ký
                </CButton>
              </CLink>
            </CCardBody>
          </CCard>
          <CRow>
            <CCol sm="6">
              <CCard accentColor="primary">
                <CCardBody>
                  <CLabel>Tự cải thiện kỹ năng tốc ký của bạn</CLabel>
                  <CLink to="/fight/practice">
                    <CButton color="primary" size="lg">
                      Thực hành
                    </CButton>
                  </CLink>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="6">
              <CCard accentColor="warning">
                <CCardBody>
                  <CLabel>Mời mọi người tham gia cuộc đua riêng </CLabel>
                  <CLink to="/fight/race_friend">
                    <CButton color="warning" size="lg">
                      Đua với bạn bè
                    </CButton>
                  </CLink>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="6">
          <CCard>
            <CCardHeader>
              <CButton
                color="primary"
                style={{ marginRight: "10px" }}
                onClick={() => SetSelect(1)}
              >
                Điểm cao mới nhất
              </CButton>
              <CButton
                color="primary"
                style={{ marginRight: "10px" }}
                onClick={() => SetSelect(2)}
              >
                Điểm của bạn
              </CButton>
              <CButton
                color="primary"
                style={{ marginRight: "10px" }}
                onClick={() => SetSelect(3)}
              >
                Hall of Fame
              </CButton>
              {/* <CButton color="primary">Thi đấu</CButton> */}
            </CCardHeader>
            <CCardBody>
              {select === 1 ? (
                <HighSoccer />
              ) : select === 2 ? (
                <YourSoccer />
              ) : (
                <HallofFame />
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default Fight;
