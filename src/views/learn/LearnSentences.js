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
  CProgress,
  CWidgetSimple,
  CAlert
} from "@coreui/react";
import { icons } from "src/assets/icons";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import CIcon from "@coreui/icons-react";
function LearnSentences() {
  return (
    <CContainer fluid>
      <CCard>
        <CCardHeader>
          <CLink to="/learn/your_word">
            <CButton color="info">Từ của bạn</CButton>
          </CLink>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="8">
              <CCard>
                <CCardBody>
                  <CCardBody>
                    <CRow>
                      <CCol sm="5">
                        <CWidgetSimple text="OA"></CWidgetSimple>
                      </CCol>
                      <CCol sm="5">
                        <CWidgetSimple text="-C"></CWidgetSimple>
                      </CCol>
                      <CCol sm="2">
                        <CRow>
                        <CButton color="success">
                        {/* <CIcon size={"sm"} name={"cil-addthis"} /> */}
                          Thêm</CButton>
                        </CRow>
                        <CRow style={{marginTop: '0.5em'}}>
                        <CButton color="warning">Tiếp</CButton>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CCardBody>
                  <CAlert color="success">Chính xác</CAlert>
                  <CInput />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm="4">
              <CCard>
                <CCardBody>
                  <CLabel>Tỷ lệ gõ đúng</CLabel>
                  <CProgress
                    animated
                    striped
                    showValue
                    color="success"
                    value={80}
                    className="mb-1 bg-white"
                  />
                  <br />
                  <CLabel> Thời gian còn lại</CLabel>
                  <CProgress
                    animated
                    striped
                    showValue
                    color="warning"
                    value={65}
                    className="mb-1 bg-white"
                  />
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
export default LearnSentences;
