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
} from "@coreui/react";
import { icons } from "src/assets/icons";
function LearnSound() {
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
            <CContainer>OA</CContainer>
          </CCol>
        </CContainer>
      </CRow>
    </CContainer>
  );
}
export default LearnSound;
