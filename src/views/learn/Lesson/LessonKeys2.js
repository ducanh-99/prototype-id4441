import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CImg,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { Component, useState } from "react";
import $ from "jquery";
import swal from "sweetalert";
const StopWatch = React.lazy(() => import("./StopWatch"));
const KeyboardSteno = React.lazy(() => import("../keyboard"));
function onchangeSelect() {
  $("#vnInput").on("change", function () {
    $("#stenoOutput").val($("#vnInput").val());
    sweetAlert();
  });
}
function sweetAlert() {
  $("#add").on("click", function () {
    let text = $("#vnInput option:selected").text();
    swal({
      title: "Thành công!",
      text: "Bạn đã thêm từ '" + text + "' vào danh mục Từ của bạn",
      icon: "success",
    });
  });
}
const Modal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <CContainer>
      <CButton onClick={toggle} color="info">
        Kết thúc bài học
      </CButton>
      <CModal show={modal} onClose={toggle} size="lg">
        <CModalHeader closeButton>Đánh giá: Gõ từ sau bằng tốc ký</CModalHeader>
        <CModalBody style={{ textAlign: "center" }}>
          {/* <CRow>
            <CCol sm="5">
              <CLabel>Từ tiếng Việt muốn thêm</CLabel>
              <CSelect id="vnInput" onChange={onchangeSelect()}>
                <option>Chọn từ tiếng Việt</option>
                <option value="H-U">hoa</option>
                <option value="ST*-YN">xuân</option>
                <option value="SP-EWG">dương</option>
              </CSelect>
            </CCol>
            <CCol sm="5">
              <CLabel>Từ tốc ký tương ứng</CLabel>
              <CInput disabled="true" id="stenoOutput"></CInput>
            </CCol>
          </CRow> */}
          <CRow style={{ textAlign: "center" }}>
            <CCardTitle>hoa</CCardTitle>
            <CInput></CInput>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" id="add" onClick={(toggle, sweetAlert)}>
            Thêm
          </CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Hủy
          </CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  );
};
class LessonLeys2 extends Component {
  render() {
    return (
      <CContainer>
        <CCard>
          <CCardHeader>
            {" "}
            <h5 style={{ color: "#321fdb" }}>
              Bài 2: Học các phím tay trái P2
            </h5>
          </CCardHeader>
          <CCardBody>
            <h2 style={{ textAlign: "center" }}>
              {" "}
              2. Học các phím tay trái P2{" "}
            </h2>
            <CContainer>
              <StopWatch></StopWatch>
            </CContainer>
            <KeyboardSteno></KeyboardSteno>
          </CCardBody>
          <CCardFooter>
            {/* <CButton color="primary"> Kết thúc bài học</CButton> */}
            <Modal></Modal>
          </CCardFooter>
        </CCard>
      </CContainer>
    );
  }
}

export default LessonLeys2;
