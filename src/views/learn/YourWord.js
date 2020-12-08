import React from "react";

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
  CDataTable,
  CInputCheckbox,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const fields = [
  {
    key: "select",
    label: "",
    _style: { width: "2%" },
  },
  { key: "key", label: "STT" },
  { key: "word", label: "Danh sách từ câu", _style: { width: "70%" } },
  {
    key: "action",
    label: "Hành động",
    sorter: false,
    filter: false,
    _style: { width: "20%" },
  },
];

const data = [
  { key: 1, word: "Cộng hòa" },
  { key: 2, word: "Xã Hội" },
  { key: 3, word: "Chủ nghĩa" },
  { key: 4, word: "Việt Nam" },
  { key: 5, word: "Độc lập" },
  { key: 6, word: "Tự do" },
  { key: 7, word: "Hạnh phúc" },
  { key: 8, word: "Dân chủ" },
  { key: 9, word: "Bình đẳng" },
  { key: 10, word: "" },
  { key: 11, word: "Cộng hòa" },
];

function YourWord() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>
            <CButton color="primary" style={{ marginLeft: "10px" }}>
              Xem quy tắc
            </CButton>
            <CButton color="success" style={{ marginLeft: "10px" }}>
              Luyện các từ đã chọn
            </CButton>
            <CButton color="danger" style={{ marginLeft: "10px" }}>
              Xóa các từ đã chọn
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              fields={fields}
              items={data}
              pagination
              hover
              tableFilter
              scopedSlots={{
                select: (item) => (
                  <input type="checkbox" />
                  // <CInputCheckbox name="checkbox1" value="option1" />
                ),
                action: (item) => (
                  <td className="py-2">
                    <CButton color="primary">
                      <CIcon name="cil-list" />
                    </CButton>
                    <CButton color="success">
                      <CIcon name="cil-pencil" />
                    </CButton>
                    <CButton color="danger">
                      <CIcon name="cil-trash" />
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
}

export default YourWord;
