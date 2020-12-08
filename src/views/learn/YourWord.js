import React, { useState } from "react";
import $ from 'jquery'
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
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

function onchangeSelect() {
  $('#vnInput').on('change', function(){
    console.log("hihi", $('#vnInput').val())
    $('#stenoOutput').val($('#vnInput').val());
  })
}
const Modal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <CContainer>
      <CButton onClick={toggle} color="info">
        {props.text}
      </CButton>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>Thêm mới từ của bạn</CModalHeader>
        <CModalBody>
          <CRow>
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
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={toggle}>Thêm</CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Hủy
          </CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  );
};
const fields = [
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
            {/* <CButton color="primary" style={{ marginLeft: "10px" }} onClick="">
              Thêm từ của bạn
            </CButton> */}
            <CRow>
              <Modal text="Thêm từ của bạn"></Modal>
              <CButton color="success" style={{ marginLeft: "10px" }}>
                Luyện các từ đã chọn
              </CButton>
              <CButton color="danger" style={{ marginLeft: "10px" }}>
                Xóa các từ đã chọn
              </CButton>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              fields={fields}
              items={data}
              pagination
              hover
              tableFilter
              scopedSlots={{
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
