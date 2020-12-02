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
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="first">
                            <CRow>
                                <CCol sm={12}>
                                    <CCarousel >
                                        <CCarouselIndicators />
                                        <CCarouselInner>
                                            <CCarouselItem>
                                                <img src={"images/amdau0.png"} alt="slide 0" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <img src={"images/amdau1.png"} alt="slide 1" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <img src={"images/amdau2.png"} alt="slide 2" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <img src={"images/amdau3.png"} alt="slide 3" />
                                            </CCarouselItem>
                                            <CCarouselItem>
                                                <img src={"images/amdau4.png"} alt="slide 4" />
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev" />
                                        <CCarouselControl direction="next" />
                                    </CCarousel>
                                </CCol>
                            </CRow>
                        </CTabPane>
                        <CTabPane data-tab="main">
                            Âm chính
        </CTabPane>
                        <CTabPane data-tab="last">
                            Âm cuối
        </CTabPane>
                    </CTabContent>
                </CTabs>

            </div>
        );
    }
}

export default Watch;