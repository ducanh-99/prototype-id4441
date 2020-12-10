import {
  CAlert,
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
  CProgress,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { Component, useState } from "react";
import $ from "jquery";
import swal from "sweetalert";
import CountdownTime from "../Practice/CountdownTime";
import Keyboard from "../keyboard";
const StopWatch = React.lazy(() => import("./StopWatch"));
const KeyboardSteno = React.lazy(() => import("../keyboard"));
const keySteno = ["S", "T", "K", "P", "R", "H"];
const keyQwerty = ["q", "a", "w", "s", "e", "d"];
const key = [
  {
    steno: "S",
    qwerty: "q",
  },
  {
    steno: "T",
    qwerty: "a",
  },
  {
    steno: "K",
    qwerty: "w",
  },
  {
    steno: "P",
    qwerty: "s",
  },
  {
    steno: "R",
    qwerty: "e",
  },
  {
    steno: "H",
    qwerty: "d",
  },
];
// function onchangeSelect() {
//   $("#vnInput").on("change", function () {
//     $("#stenoOutput").val($("#vnInput").val());
//     sweetAlert();
//   });
// }
const Progress = (props) => {
  return (
    <CProgress
      value={props.text}
      showValue
      className="mb-1 bg-grey"
      color={props.progress}
      style={{ width: "100%", margin: "auto" }}
    />
  );
};
function sweetAlert() {
    swal({
      title: "Thành công!",
      text: "Điểm của bạn: 50\nThời gian: 10s\n Tốc độ gõ: 10 từ/phút ",
      icon: "success",
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
      <CModal show={modal} onClose={toggle} size="xl" >
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
          {/* <CRow style={{ textAlign: "center" }}>
            <CCardTitle>hoa</CCardTitle>
          </CRow> */}
          <CRow>
            <CCol sm="3">
              <CountdownTime time="10"></CountdownTime>
            </CCol>
            <CCol >
              <CAlert color="primary">P</CAlert>
            </CCol>
          </CRow>

          <CCol>
            {/* <CInput></CInput>
             */}
             <Keyboard></Keyboard>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" id="add" onClick={(toggle, sweetAlert)}>
            Nộp bài
          </CButton>{" "}
          {/* <CButton color="secondary" onClick={toggle}>
            Hủy
          </CButton> */}
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
            <CRow>
              <CCol sm="10">
                {" "}
                <h5 style={{ color: "#321fdb" }}>
                  Bài 2: Học các phím tay trái P2: Bài học sẽ học các phím: S,
                  T, K, P, R, H
                </h5>
              </CCol>
              <CCol sm="2">
                <Modal></Modal>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            {/* <h2 style={{ textAlign: "center" }}> S </h2> */}
            <CAlert
              id="alertWord"
              color="info"
              style={{ textAlign: "center", marginInline: "0px" }}
            >
              <h2 style={{ textAlign: "center" }} steno="s" qwerty="q">
                {" "}
                {key[3].steno}{" "}
              </h2>
            </CAlert>
            <CContainer>
              <CRow>
                <CCol sm="3">
                  <StopWatch></StopWatch>
                </CCol>
                <CCol sm="6"></CCol>
                <CCol sm="2">
                  <CCard>
                    <CCardBody>
                      {/* <CLabel>Số lần gõ: 4</CLabel>
                      <CLabel>Số lần gõ đúng: 8</CLabel> */}
                      <CLabel>Độ chính xác:</CLabel>
                      <Progress text="50" progress="warning"></Progress>
                    </CCardBody>
                  </CCard>
                  {/* <h4 style={{ textAlign: "center" }}></h4> */}
                </CCol>
              </CRow>
            </CContainer>
            {/* <CInput
              id="word" 
              onKeyPress={function changeWord() {
                $("#word").on("keydown", function () {
                  console.log("pressssss");
                  $("#alertWord").css({color: "info"});
                });
              }}
            ></CInput> */}
            <KeyboardSteno></KeyboardSteno>
          </CCardBody>
          <CCardFooter>
            {/* <CButton color="primary"> Kết thúc bài học</CButton> */}
            {/* <Modal></Modal> */}
          </CCardFooter>
        </CCard>
      </CContainer>
    );
  }
}

export default LessonLeys2;
