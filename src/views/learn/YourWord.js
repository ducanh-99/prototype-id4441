import React, { useState } from "react";
import $ from "jquery";
import swal from "sweetalert";

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
function deleteWord(item) {
  // console.log(item);
  // $("[id*='table']").on("click", function () {
    // $("#table"+).on("click", function () {
    let text = "đẹp";
    swal({
      title: "Cảnh báo!",
      text: "Bạn muốn xóa từ '" + text + "' trong danh mục Từ của bạn?",
      icon: "warning",
      buttons: {
        cancel: "Hủy",
        catch: {
          text: "Xóa",
          value: "catch",
        },
      },
    }).then((value) => {
      switch (value) {
        case "catch":
          swal("Thành công!", "Bạn đã xóa từ '" + text + "' trong danh mục Từ của bạn!", "success");
          break;
      }
    });
  // });
}
function deleteSelectedWord(){
  swal({
    title: "Cảnh báo!",
    text: "Bạn muốn xóa các từ đã chọn trong danh mục Từ của bạn?",
    icon: "warning",
    buttons: {
      cancel: "Hủy",
      catch: {
        text: "Xóa",
        value: "catch",
      },
    },
  }).then((value) => {
    switch (value) {
      case "catch":
        swal("Thành công!", "Bạn đã xóa các từ đã chọn trong danh mục Từ của bạn!", "success");
        break;
    }
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
const fields = [
  {
    key: "select",
    label: "",
    _style: { width: "2%" },
  },
  { key: "key", label: "STT" },
  { key: "word", label: "Từ của bạn", _style: { width: "40%" } },
  { key: "steno", label: "Tốc ký", _style: { width: "30%" } },
  {
    key: "action",
    label: "Hành động",
    sorter: false,
    filter: false,
    _style: { width: "20%" },
  },
];

const data = [
  { key: 1, word: "đẹp", steno: "TPN-ETK" },
  { key: 2, word: "trai", steno: "TR-AJ" },
  { key: 3, word: "rất", steno: "R-S*WNT" },
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
              <CCol sm="2">
                <Modal text="Thêm từ của bạn"></Modal>
              </CCol>
              <CCol sm="6">
                <CButton color="success" style={{ marginLeft: "10px" }}>
                  Luyện các từ đã chọn
                </CButton>
                <CButton color="danger" style={{ marginLeft: "10px" }} onClick={deleteSelectedWord}>
                  Xóa các từ đã chọn
                </CButton>
              </CCol>
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
                select: (item) => (
                  <td>
                    <input type="checkbox" style={{ display: "flex" }} />
                  </td>
                  // <CInputCheckbox name="checkbox1" value="option1" />
                ),
                action: (item) => (
                  <td className="py-2">
                    {/* <CButton color="primary">
                      <CIcon name="cil-list" />
                    </CButton>
                    <CButton color="success" >
                      <CIcon name="cil-pencil" />
                    </CButton> */}
                    <CButton
                      color="danger"
                      id={"table" + item.key}
                      onClick={deleteWord()}
                    >
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
