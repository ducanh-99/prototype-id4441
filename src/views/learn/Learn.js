import CIcon from "@coreui/icons-react";
import { func } from "prop-types";
import React, { Component } from "react";
// import { cifAU } from '@coreui/icons';
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CCardText,
  CLink,
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
} from "@coreui/react";
function Learn() {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="4">
          <CCard className="text-black bg-secondary">
            <CCardHeader>Học gõ phím</CCardHeader>
            <CCardBody>
              <CCardTitle>Học gõ phím tốc ký</CCardTitle>
              <CCardText>
                Học gõ phím tốc ký giúp bạn làm quen với bàn phím tốc ký tiếng
                Việt để có thể gõ thành thạo
              </CCardText>
            </CCardBody>
            <CCardFooter className="text-black bg-secondary">
              <CLink to="/learn/keys">Bắt đầu vào học</CLink>
              <CIcon size={"xl"} name={"cil-arrow-right"} />
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol sm="4">
          <CCard className="bg-info">
            <CCardHeader>Học gõ âm</CCardHeader>
            <CCardBody>
              <CCardTitle>Học gõ âm tốc ký</CCardTitle>
              <CCardText>
                Học gõ âm tiếng Việt tốc ký giúp bạn làm quen với các âm tiếng
                Việt trong khi gõ tốc ký
              </CCardText>
            </CCardBody>
            <CCardFooter className="bg-info">
              <CLink to="/learn/sound" className="text-white">
                Bắt đầu vào học
                <CIcon size={"xl"} name={"cil-arrow-right"} />
              </CLink>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol sm="4">
          <CCard className="bg-primary">
            <CCardHeader>Từ của bạn</CCardHeader>
            <CCardBody>
              <CCardTitle>Từ của bạn</CCardTitle>
              <CCardText>
                Nơi lưu giữ các âm, các từ, các câu để bạn có thể học, luyện
                tập.
              </CCardText>
            </CCardBody>
            <CCardFooter className="bg-primary">
              <CLink to="/learn/your_word" color="white" className="text-white">
                Bắt đầu vào học
                <CIcon size={"xl"} name={"cil-arrow-right"} />
              </CLink>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="4">
          <CCard className="bg-warning">
            <CCardHeader>Học gõ từ</CCardHeader>
            <CCardBody>
              <CCardTitle>Học gõ các từ</CCardTitle>
              <CCardText>
                Học gõ các từ tiếng Việt giúp bạn học các quy tắc để tốc ký
                tiếng Việt
              </CCardText>
            </CCardBody>
            <CCardFooter className="bg-warning">
              <CLink to="/learn/word" className="text-white">
                Bắt đầu vào học
                <CIcon size={"xl"} name={"cil-arrow-right"} />
              </CLink>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol sm="4">
          <CCard className="bg-success">
            <CCardHeader>Học gõ câu</CCardHeader>
            <CCardBody>
              <CCardTitle>Học gõ câu</CCardTitle>
              <CCardText>
                Học gõ câu tiếng Việt tốc ký giúp bạn luyện tập gõ tốc ký để
                tăng tốc độ
              </CCardText>
            </CCardBody>
            <CCardFooter className="bg-success">
              <CLink to="/learn/sentences" className="text-white">
                Bắt đầu vào học
                <CIcon size={"xl"} name={"cil-arrow-right"} />
              </CLink>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
}
export default Learn;
