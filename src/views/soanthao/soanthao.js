import { CButton, CContainer, CTextarea } from "@coreui/react";
import React from "react";
import Keyboard from "../learn/keyboard";

function SoanThao() {
  return (
    <>
      <div>
        <CContainer>
          <CButton color="info" style={{marginRight:"15px"}}>Tạo mới</CButton>
          <CButton color="primary">Lưu văn bản</CButton>
        </CContainer>
        <br />
        <Keyboard soanthao={true} />
      </div>
    </>
  );
}

export default SoanThao;
