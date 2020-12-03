// import { CCard } from "@coreui/react";
import { func } from "prop-types"
import React from "react"
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CCardText,
  CCardSubtitle,
  CCardTitle,
  CRow,
  CCol,
  CInput,
  CLabel,
  CButton,
  CCarousel,
  CCarouselCaption,
  CCarouselInner,
  CCarouselIndicators,
  CCarouselItem,
  CCarouselControl,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CProgress,
  CWidgetBrand,
  CSelect,
  CBadge,
  CAlert,
  CFormText,
  CSwitch
} from "@coreui/react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { icons } from "src/assets/icons";
function LearnWord() {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="2">
          <CButton color="info">Từ của bạn</CButton>
        </CCol>
        <CCol sm="4">
          <CSelect>
            <option>Học từ bất kỳ</option>
            <option>Học từ âm chính</option>
            <option>Học từ âm chính + âm cuối</option>
            <option>Học từ âm đầu + âm chính</option>
            <option>Học từ âm đầu + âm chính + âm cuối</option>
          </CSelect>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="8">
          <CContainer style={{ marginTop: '2em' }}>
            OA
            </CContainer>
        </CCol>
        <CCol sm="4">
          <CRow>
            <CContainer style={{ marginTop: '2em' }}>
              <CRow>Tỉ lệ gõ đúng</CRow>

              <CProgress
                animated
                striped
                showValue
                color="success"
                value={80}
                className="mb-1 bg-white"
              />
            </CContainer>
          </CRow>
          <CRow>
            <CContainer style={{ marginTop: '2em' }}>
              <CRow>Thời gian còn lại</CRow>

              <CProgress
                animated
                striped
                showValue
                color="warning"
                value={65}
                className="mb-1 bg-white"
              />
            </CContainer>
          </CRow>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="1"></CCol>
        <CCol sm="6">
          <CAlert color="success">
            Chính xác
        </CAlert>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="1"></CCol>
        <CCol sm="6">
          <CInput></CInput>
        </CCol>
        <CCol sm="4" style={{ marginTop: '0.5em'},{textAlign: "right"}}>
          <CSwitch shape="pill" color="success"></CSwitch>
          <CLabel style={{ marginBottom: '1em'}}>Hiển thị gợi ý</CLabel>
        </CCol>
      </CRow>
      <Keyboard />
    </CContainer>
  );
}
export default LearnWord