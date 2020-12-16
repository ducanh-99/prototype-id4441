import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CImg,
  CInput,
  CLabel,
  CLink,
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
      <CModal show={modal} onClose={toggle} size="xl">
        <CModalHeader closeButton>Đánh giá: Gõ từ sau bằng tốc ký</CModalHeader>
        <CModalBody style={{ textAlign: "center" }}>
          <CRow>
            <CCol sm="3">
              <CountdownTime time="10"></CountdownTime>
            </CCol>
            <CCol>
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
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      index: 0,
      finish: false,
    };
  }

  toggle = () => {
    this.setState((state) => ({
      finish: !state.finish,
    }));
    this.refresh()
  };

  refresh = () => {
    this.setState((state) => ({
      value: 0,
    }));
    this.setState((state) => ({
      index: 0,
    }));
  }

  onChangeParent = () => {
    console.log("parent")
    let index = this.state.index;
    index += 1;
    this.setState({ index });
    let value = this.state.value;
    value += 25;
    this.setState({ value });
    console.log(value);

    if (value === 100) {
      this.toggle();
    }
  };

  render() {
    return (
      <>
        <CModal show={this.state.finish}>
          <CModalHeader>Đánh giá bài học của bạn</CModalHeader>
          <CModalBody>
            <CRow>
              <CCol sm="8">
                <h6> Độ chính xác: </h6>
                <h6> Thời gian: </h6>
                <h6> Tốc độ: </h6>
              </CCol>
              <CCol sm="4">
                <h6>94%</h6>
                <h6>0:20s</h6>
                <h6>45 từ/phút</h6>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CLink to="/learn/keys">
              <CButton color="primary">Bài giảng tiếp theo</CButton>{" "}
            </CLink>
            <CButton color="secondary" onClick={this.toggle}>
              Học lại
            </CButton>
          </CModalFooter>
        </CModal>
        <CRow>
          <CCol sm="1">
            <StopWatch></StopWatch>
          </CCol>
          <CCol sm="11">
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol sm="12">
                    {" "}
                    <h5 style={{ color: "#321fdb" }}>
                      Bài 2: Học các phím tay trái P2: Bài học sẽ học các phím:
                      S, T, K, P, R, H
                    </h5>
                    <br />
                    <CContainer>
                      <CProgress value={this.state.value} />
                    </CContainer>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CCardTitle>
                  <div className="card-header-actions">
                    <CButton color="primary" onClick={this.onChangeParent}>
                      bỏ qua
                    </CButton>
                  </div>
                </CCardTitle>

                {/* <h2 style={{ textAlign: "center" }}> S </h2> */}
                {/* <CAlert
                  id="alertWord"
                  color="info"
                  style={{ textAlign: "center", marginInline: "0px" }}
                >
                  <h2 style={{ textAlign: "center" }} steno="s" qwerty="q">
                    {" "}
                    {key[3].steno}{" "}
                  </h2>
                </CAlert> */}
                <CRow>
                  <CCol sm="6">
                    <CCard>
                      <CCardHeader>Phím gõ tốc ký</CCardHeader>
                      <CCardBody>
                        <CAlert
                          id="alertWord"
                          color="info"
                          style={{ textAlign: "center", marginInline: "0px" }}
                        >
                          <h2 style={{ textAlign: "center" }}>
                            {key[this.state.index].steno}
                          </h2>
                        </CAlert>
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol sm="6">
                    <CCard>
                      <CCardHeader>Phím qwerty tương ứng</CCardHeader>
                      <CCardBody>
                        <CAlert
                          id="alertWord"
                          color="info"
                          style={{ textAlign: "center", marginInline: "0px" }}
                        >
                          <h2 style={{ textAlign: "center" }}>
                            {key[this.state.index].qwerty}
                          </h2>
                        </CAlert>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
                <br />
                {/* <CInput
              id="word" 
              onKeyPress={function changeWord() {
                $("#word").on("keydown", function () {
                  console.log("pressssss");
                  $("#alertWord").css({color: "info"});
                });
              }}
            ></CInput> */}
                <KeyboardSteno
                  onChangeParent={this.onChangeParent}
                ></KeyboardSteno>
              </CCardBody>
              <CCardFooter>
                {/* <CButton color="primary"> Kết thúc bài học</CButton> */}
                {/* <Modal></Modal> */}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default LessonLeys2;
