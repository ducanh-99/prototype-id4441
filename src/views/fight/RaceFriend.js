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
} from "@coreui/react";


const KeyboardSteno = React.lazy(() => import("../learn/keyboard"));
const Player = () => {
  return (
    <>
      <CRow>
        <CCol sm="10">
          <CButton color="warning">player</CButton>
          <br />
          <CProgress
            animated
            striped
            color="info"
            value={50}
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
  var started = true;

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
      <CContainer>
        <CCard>
          <CCardHeader></CCardHeader>
          <CCardBody>
            <Player />
            <Player />
            <Player />
            <Player />
          </CCardBody>
          <CCardFooter style={{ height: "50px" }}>
            <div>{text_span}</div>
          </CCardFooter>
        </CCard>
      </CContainer>
      <KeyboardSteno _input={input_keyboard} />
    </>
  );
}

export default Race;
