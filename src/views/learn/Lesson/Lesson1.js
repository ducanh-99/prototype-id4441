import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CImg,
  CLink,
} from "@coreui/react";
import React, { Component } from "react";
import CIcon from "@coreui/icons-react";

class Lesson1 extends Component {
  render() {
    return (
      <CContainer>
        <CCard>
          <CCardHeader>
            {" "}
            <h5 style={{ color: "#321fdb" }}>
              Bài học 1: Giới thiệu bàn phím tốc ký
            </h5>
          </CCardHeader>
          <CCardBody>
            <h2 style={{ textAlign: "center" }}>
              {" "}
              1. Bàn phím gõ tốc ký (Steno){" "}
            </h2>

            <ul>
              <p>Bàn phím gõ tốc ký tiếng Việt gồm 22 phím + 1 phím dài </p>
              <li>
                <p>
                  4 phím đặc biệt (S, T, H, N), nhãn trùng nhau nhưng vai trò
                  khác nhau
                </p>
              </li>
              <li>
                <p>1 phím dài để chuyển chế độ gõ số</p>
              </li>
            </ul>
            <CImg
              style={{ alignSelf: "center" }}
              src="images/keyboard.png"
            ></CImg>
          </CCardBody>
          <CCardFooter>
            <CLink to="/learn/keys">
              <CButton color="warning"> Quay lại danh sách học</CButton>
            </CLink>
            <div className="card-header-actions">
              <CLink to="/learn/keys/lessonKeys2">
                <CButton color="primary">
                  Bài học tiếp theo
                  <CIcon size={"xl"} name={"cil-arrow-right"} />
                </CButton>
              </CLink>
            </div>
          </CCardFooter>
        </CCard>
      </CContainer>
    );
  }
}

export default Lesson1;
