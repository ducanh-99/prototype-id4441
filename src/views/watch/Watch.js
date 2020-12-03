import React, { Component } from 'react';
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
    CTabPane
} from "@coreui/react";
import Search from './Search';
class Watch extends Component {
    render() {
        return (
            <div>
                <CTabs activeTab="first">
                    <CNav variant="tabs">
                        <CNavItem>
                            <CNavLink data-tab="first">
                                Âm đầu
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="main">
                                Âm chính
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="last">
                                Âm cuối
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink data-tab="other">
                                Số và cách xóa
                            </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="first">
                            <CRow>
                                <CCol sm={12}>
                                    <CCarousel >
                                        <CCarouselIndicators />
                                        <CCarouselInner>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 1</p>
                                                <img className="d-block w-100" src={"images/amdau0.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 2</p>
                                                <img className="d-block w-100" src={"images/amdau1.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 3</p>
                                                <img className="d-block w-100" src={"images/amdau2.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 4</p>
                                                <img className="d-block w-100" src={"images/amdau3.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 5</p>
                                                <img className="d-block w-100" src={"images/amdau4.png"} alt="slide 4" />
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev" />
                                        <CCarouselControl direction="next" />
                                    </CCarousel>
                                </CCol>
                            </CRow>
                        </CTabPane>
                        <CTabPane data-tab="main">
                            <CRow>
                                <CCol sm={12}>
                                    <CCarousel >
                                        <CCarouselIndicators />
                                        <CCarouselInner>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 1</p>
                                                <img className="d-block w-100" src={"images/amchinh0.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 2</p>
                                                <img className="d-block w-100" src={"images/amchinh1.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 3</p>
                                                <img className="d-block w-100" src={"images/amchinh2.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 4</p>
                                                <img className="d-block w-100" src={"images/amchinh3.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 5</p>
                                                <img className="d-block w-100" src={"images/amchinh4.png"} alt="slide 4" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 6</p>
                                                <img className="d-block w-100" src={"images/amchinh5.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 7</p>
                                                <img className="d-block w-100" src={"images/amchinh6.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 8</p>
                                                <img className="d-block w-100" src={"images/amchinh7.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 9</p>
                                                <img className="d-block w-100" src={"images/amchinh8.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 10</p>
                                                <img className="d-block w-100" src={"images/amchinh9.png"} alt="slide 4" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 11</p>
                                                <img className="d-block w-100" src={"images/amchinh10.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 12</p>
                                                <img className="d-block w-100" src={"images/amchinh11.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 13</p>
                                                <img className="d-block w-100" src={"images/amchinh12.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 14</p>
                                                <img className="d-block w-100" src={"images/amchinh13.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 15</p>
                                                <img className="d-block w-100" src={"images/amchinh14.png"} alt="slide 4" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 16</p>
                                                <img className="d-block w-100" src={"images/amchinh15.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 17</p>
                                                <img className="d-block w-100" src={"images/amchinh16.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 18</p>
                                                <img className="d-block w-100" src={"images/amchinh17.png"} alt="slide 2" />
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev" />
                                        <CCarouselControl direction="next" />
                                    </CCarousel>
                                </CCol>
                            </CRow>
                        </CTabPane>
                        <CTabPane data-tab="last">
                            <CRow>
                                <CCol sm={12}>
                                    <CCarousel >
                                        <CCarouselIndicators />
                                        <CCarouselInner>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 1</p>
                                                <img className="d-block w-100" src={"images/amcuoi0.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 2</p>
                                                <img className="d-block w-100" src={"images/amcuoi1.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 3</p>
                                                <img className="d-block w-100" src={"images/amcuoi2.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 4</p>
                                                <img className="d-block w-100" src={"images/amcuoi3.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 5</p>
                                                <img className="d-block w-100" src={"images/amcuoi4.png"} alt="slide 4" />
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev" />
                                        <CCarouselControl direction="next" />
                                    </CCarousel>
                                </CCol>
                            </CRow>
                        </CTabPane>
                        <CTabPane data-tab="other">
                            <CRow>
                                <CCol sm={12}>
                                    <CCarousel >
                                        <CCarouselIndicators />
                                        <CCarouselInner>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 1</p>
                                                <img className="d-block w-100" src={"images/so0.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 2</p>
                                                <img className="d-block w-100" src={"images/so1.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <p style={{ textAlign: "center", color: "BLACK" }}> Slide 3</p>
                                                <img className="d-block w-100" src={"images/xoa.png"} alt="slide 2" />
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev" />
                                        <CCarouselControl direction="next" />
                                    </CCarousel>
                                </CCol>
                            </CRow>
                        </CTabPane>
                    </CTabContent>
                </CTabs>

            </div>
        );
    }
}

export default Watch;