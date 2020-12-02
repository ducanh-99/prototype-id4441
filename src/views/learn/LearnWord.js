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
  CWidgetBrand,
  CSelect
} from "@coreui/react";
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
      <CContainer>
      <CCol sm="2">
          <CContainer >
OA
          </CContainer>
        </CCol>
      </CContainer>
      </CRow>
    </CContainer>
  );
}
export default LearnWord