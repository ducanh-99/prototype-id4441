import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  // CChart,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CContainer
} from '@coreui/react'
const ChartWord = React.lazy(() => import("./chartWord"));
const ChartSpeed = React.lazy(() => import("./chartSpeed"));
const ChartRating = React.lazy(() => import("./chartRating"));



const Dashboard = () => {
  return (
    <CContainer fluid>
      <CRow>
        <CCol sm="4">
          <CRow>
            <CCol sm="12">
            <CButton color="danger" style={{ margin: "10px", width: "200px" }}>
                Số lượng từ
              </CButton>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
            <CButton color="danger" style={{ margin: "10px", width: "200px" }}>
                Tốc độ
              </CButton>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="12">
            <CButton color="danger" style={{ margin: "10px", width: "200px" }}>
                Độ chính xác
              </CButton>
            </CCol>
          </CRow>
        </CCol>
        <CCol sm="8">
          <CRow>
            <ChartWord />
            <ChartSpeed />
            <ChartRating />
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Dashboard
