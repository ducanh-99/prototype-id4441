import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CRow,
  CCol,
  CFooter,
  CProgressBar,
  CProgress,
  CButton,
  CInput,
  CLink,
  CCardText,
  CLabel,
  CImg,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CTooltip,
} from "@coreui/react";

const KeyboardSteno = React.lazy(() => import("../learn/keyboard"));
const Player = (props) => {
  const [value, setData] = useState(props.value);
  return (
    <>
      <CRow>
        <CCol sm="10">
          <CLabel>{props.name} </CLabel>
          <CImg
            src={require("../../image/car.png")}
            width="50px"
            height="20px"
          />
          <CProgress
            animated
            striped
            color="info"
            value={value}
            className="mb-1 bg-white"
          />
        </CCol>
        <CCol sm="2">
          <div style={{ marginTop: "15px" }}>45 từ/phút</div>
        </CCol>
      </CRow>
    </>
  );
};

function Race(props) {
  const text = "Cộng hòa xã hội Việt Nam, độc lập tự do Hạnh phúc";
  const [inputText, setInputText] = useState("");
  const [current_index, setCurrentIndex] = useState(0);
  const [objectText, setObjectText] = useState(
    Object.assign({}, text.split(" "))
  );
  const [data, setData] = useState(1);
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [player3, setPlayer3] = useState(1);
  const [modal, setModal] = useState(false);
  const [invite, setInvite] = useState(true);

  const toggle = () => {
    setModal(!modal);
  };
  const toggleInvite = () => {
    setInvite(!invite);
  };
  const changeValue = () => {
    let data_t = 100 / 12 + data;
    let player1_t = 100 / 20 + player1;
    let player2_t = 100 / 15 + player2;
    let player3_t = 100 / 18 + player3;
    setData(data_t);
    setPlayer1(player1_t);
    setPlayer2(player2_t);
    setPlayer3(player3_t);
  };

  const onChangeParent = () => {
    changeValue();
    // if (value.slice(-1) == " ") {
    let index = current_index;
    setCurrentIndex(++index);
    // }
    if (current_index == 12) {
      toggle();
    }
  };

  useEffect(() => {});

  const input_keyboard = (value) => {
    setInputText(value);

    if (value.slice(-1) == " ") {
      let index = current_index;
      setCurrentIndex(++index);
    }
  };

  const text_span = Object.keys(objectText).map((items, key) => {
    let _color = "black";
    if (current_index > key) {
      _color = "green";
    }
    // if(current_index )
    let style = {
      color: _color,
    };
    return <span style={style}>{objectText[key] + " "} </span>;
  });

  return (
    <>
      {/*  */}
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>Kết quả</CModalHeader>
        <CModalBody>
          <CRow>
            <CCol sm="8">
              <h6> Vị trí</h6>
              <h6> Độ chính xác: </h6>
              <h6> Thời gian: </h6>
              <h6> Tốc độ: </h6>
            </CCol>
            <CCol sm="4">
              <h6> Thứ nhất </h6>
              <h6>94%</h6>
              <h6>0:20s</h6>
              <h6>45 từ/phút</h6>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={toggle}>
            Đua lại
          </CButton>{" "}
          <CLink to="/fight">
            <CButton color="secondary" onClick={toggle}>
              Về trang chủ
            </CButton>
          </CLink>
        </CModalFooter>
      </CModal>
      <CContainer>
        <CCard>
          <CCardHeader></CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="10">
                <CLabel>Bạn </CLabel>
                <CImg
                  src={require("../../image/car.png")}
                  width="50px"
                  height="20px"
                  style={{ marginLeft: data * 9 }}
                />
                <CProgress
                  animated
                  striped
                  color="warning"
                  value={data}
                  className="mb-1 bg-white"
                />
              </CCol>
              <CCol sm="2">
                <div style={{ marginTop: "15px" }}>45 từ/phút</div>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="10">
                <CLabel>Duong </CLabel>
                <CImg
                  src={require("../../image/car.png")}
                  width="50px"
                  height="20px"
                  style={{ marginLeft: player1 * 9 }}
                />
                <CProgress
                  animated
                  striped
                  color="info"
                  value={player1}
                  className="mb-1 bg-white"
                />
              </CCol>
              <CCol sm="2">
                <div style={{ marginTop: "15px" }}>45 từ/phút</div>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="10">
                <CLabel>Name </CLabel>
                <CImg
                  src={require("../../image/car.png")}
                  width="50px"
                  height="20px"
                  style={{ marginLeft: player2 * 9 }}
                />
                <CProgress
                  animated
                  striped
                  color="info"
                  value={player2}
                  className="mb-1 bg-white"
                />
              </CCol>
              <CCol sm="2">
                <div style={{ marginTop: "15px" }}>45 từ/phút</div>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="10">
                <CLabel>Manh </CLabel>
                <CImg
                  src={require("../../image/car.png")}
                  width="50px"
                  height="20px"
                  style={{ marginLeft: player3 * 9 }}
                />
                <CProgress
                  animated
                  striped
                  color="info"
                  value={player3}
                  className="mb-1 bg-white"
                />
              </CCol>
              <CCol sm="2">
                <div style={{ marginTop: "15px" }}>45 từ/phút</div>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter style={{ height: "50px" }}>
            <div>{text_span}</div>
          </CCardFooter>
        </CCard>
      </CContainer>
      <KeyboardSteno _input={input_keyboard} onChangeParent={onChangeParent} />
    </>
  );
}

export default Race;
