// import { CCard } from "@coreui/react";
import { func } from "prop-types";
import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CRow,
  CCol,
  CButton,
  CSelect,
  CLink,
  CInput,
  CLabel,
  CCallout,
  CWidgetSimple,
  CAlert,
} from "@coreui/react";
import { icons } from "src/assets/icons";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
function LearnKeys() {
  return (
    <CContainer fluid>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="8">
              {/* <CCard> */}
              {/* <CCardBody> */}
              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <CLabel>Phím cần gõ</CLabel>
                    <CWidgetSimple text="OA"></CWidgetSimple>
                  </CCol>
                  <CCol sm="5">
                    <CLabel>Phím tốc ký tương ứng</CLabel>
                    <CWidgetSimple text="-C"></CWidgetSimple>
                  </CCol>
                  <CCol sm="2">
                    <CButton color="info">Tiếp</CButton>
                    <br />
                    <CButton color="info">Thêm mới từ của bạn</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
              <CAlert color="success">Chính xác</CAlert>
              <CInput />
              <br />
              {/* </CCardBody> */}
              {/* </CCard> */}
            </CCol>
            <CCol sm="4">
              <CCard>
                <CCardBody>
                  <CLabel>Tỷ lệ gõ đúng</CLabel>
                  <CCallout color="info" className={"bg-white"}>
                    <strong className="h4">45%</strong>
                  </CCallout>
                  <br />
                  <CLabel> Thời gian còn lại</CLabel>
                  <CCallout color="info" className={"bg-white"}>
                    <strong className="h4">00:20</strong>
                  </CCallout>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
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
                <CCardBody style={{ height: "300px" }}></CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  );
}
export default LearnKeys;
