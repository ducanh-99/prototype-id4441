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
  CLink,
  CCardText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import React, { Component, useState } from "react";
import $ from "jquery";
import swal from "sweetalert";
const StopWatch = React.lazy(() => import("../Lesson/StopWatch"));
const CountdownTime = React.lazy(() => import("./CountdownTime"));
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
function onchangeSelect() {
  $("#vnInput").on("change", function () {
    $("#stenoOutput").val($("#vnInput").val());
    sweetAlert();
  });
}
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
class PracticeKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 50,
      index: 0,
      value: 0,
      finish: false,
    };
    this.timer = null;
    this.handleTime = this.handleTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  // componentWillReceiveProps({time}) {
  //   this.setState({...this.state,time})
  // }
  handleTime(event) {
    if (event.key === "Enter") {
      console.log("Hello");
      this.setState({
        time: parseInt($("#time").val()),
      });
      console.log(this.state.time);
      // this.forceUpdate();
    }
  }
  handleChange(event) {
    this.setState({
      time: $("#time").val(),
    });
    // console.log("Hello")
  }

  componentDidMount() {
    // setInterval after component did mount
    this.timer = setInterval(this.incrementNumber, 1000);
  }

  componentWillUnmount() {
    // clearInterval when component is going to unmount
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  onChangeParent = () => {
    this.setState((state) => ({
      index: state.index + 1,
    }));
    this.setState((state) => ({
      value: state.value + 10,
    }));
    if (this.state.value >= 100) {
      this.toggle();
    }
  };

  toggle = () => {
    this.setState((state) => ({
      finish: !state.finish,
    }));
  };
  render() {
    return (
      <CContainer>
        <CModal show={this.state.finish}>
          <CModalHeader>Đánh giá bài luyện tập của bạn</CModalHeader>
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
            <br />
            <h5 style={{ textAlign: "center" }}>
              Chúc mừng bạn đã hoàn thành bài luyện tập
              <br />
              <CContainer style={{ alignItems: "center" }}>
                <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
                <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
                <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
                <CIcon size={"xl"} name={"cil-star"} className="text-warning" />
                <CIcon size={"xl"} name={"cil-star"} />
              </CContainer>
            </h5>
          </CModalBody>
          <CModalFooter>
              <CButton color="primary">Bài luyện tập tiếp theo</CButton>{" "}
            <CButton color="secondary" onClick={this.toggle}>
              Luyện tập lại
            </CButton>
          </CModalFooter>
        </CModal>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol sm="2">
                <CButton href="" color="info">
                  Bài trước
                </CButton>
              </CCol>
              <CCol sm="8" style={{ textAlign: "center" }}>
                {" "}
                <h5 style={{ color: "#321fdb" }}>
                  Bài 2: Luyện tập các phím: S, T, K, P, R, H
                </h5>
              </CCol>
              <CCol sm="2" style={{ textAlign: "end" }}>
                <CButton href="" color="info">
                  Bài tiếp
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            {/* <h2 style={{ textAlign: "center" }}> S </h2> */}
            <CContainer>
              <CProgress value={this.state.value} />
            </CContainer>
            <br />
            <CAlert
              id="alertWord"
              color="info"
              style={{ textAlign: "center", marginInline: "0px" }}
            >
              <h2 style={{ textAlign: "center" }} steno="s" qwerty="q">
                {" "}
                {key[this.state.index].steno}{" "}
              </h2>
            </CAlert>
            <CContainer>
              <CRow>
                <CCol sm="3">
                  {/* <StopWatch></StopWatch> */}
                  <input
                    id="time"
                    type="text"
                    value={this.state.time}
                    onChange={this.handleChange}
                    onKeyDown={this.handleTime}
                  />
                  <CountdownTime time={this.state.time}></CountdownTime>
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
            <KeyboardSteno onChangeParent={this.onChangeParent}></KeyboardSteno>
          </CCardBody>
        </CCard>
      </CContainer>
    );
  }
}

export default PracticeKeys;
