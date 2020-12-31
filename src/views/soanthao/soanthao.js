import {
  CButton,
  CContainer,
  CTextarea,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import React from "react";
import Keyboard from "../learn/keyboard";

function SoanThao() {
  return (
    <>
      <div>
        <CContainer>
          <CButton color="info" style={{ marginRight: "15px" }}>
            Tạo mới
          </CButton>
          <CDropdown className="mt-2">
            <CDropdownToggle caret color="primary">
              Lưu tài liệu
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Lưu dưới dạng PDF</CDropdownItem>
              <CDropdownItem divider />
              {/* <CDropdownItem disabled>Action Disabled</CDropdownItem> */}
              <CDropdownItem>Lưu dưới dạng .doc</CDropdownItem>
              <CDropdownItem divider />
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
        <br />
        <Keyboard soanthao={true} />
      </div>
    </>
  );
}

export default SoanThao;
