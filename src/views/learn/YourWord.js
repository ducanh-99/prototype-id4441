import React, { useState, useEffect } from "react";
import $ from "jquery";
import swal from "sweetalert";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
  CRow,
  CCol,
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
import { element } from "prop-types";

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

var data = [
  { key: 1, word: "đẹp", steno: "TPN-ETK" },
  { key: 2, word: "trai", steno: "TR-AJ" },
  { key: 3, word: "rất", steno: "R-S*WNT" },
];

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

function YourWord() {
  const [word, setWord] = useState(data);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    
  });

  const update_key = () => {
    let word_temp = word;
    word_temp.forEach((element, index) => {
      word_temp[index].key = index + 1;
    });
  };

  const deleteSelectedWord = () => {
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
          swal(
            "Thành công!",
            "Bạn đã xóa các từ đã chọn trong danh mục Từ của bạn!",
            "success"
          );
          selected.forEach((element) => {
            let word_temp = word;
            word_temp.splice(element - 1, 1);
            setWord(word_temp);
            update_key();
          });
          setSelected([]);
          break;
      }
    });
    return;
  };

  const deleteWord = (event) => {
    let text = event.target.value;
    let key = event.target.id;
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
          swal(
            "Thành công!",
            "Bạn đã xóa từ '" + text + "' trong danh mục Từ của bạn!",
            "success"
          );
          let word_temp = word;
          word_temp.splice(key, 1);
          console.log(word_temp);
          setWord(word_temp);
          console.log(word);
          update_key();
          break;
      }
    });
    // });
  };

  const ClickCheckBox = (event) => {
    let test = selected;
    console.log(test);
    if (test === undefined) {
      selected = [];
    }
    test.push(event.target.value);
    setSelected(test);
    console.log(selected);
  };
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
                <CButton
                  color="danger"
                  style={{ marginLeft: "10px" }}
                  onClick={deleteSelectedWord}
                >
                  Xóa các từ đã chọn
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              fields={fields}
              items={word}
              pagination
              hover
              tableFilter
              scopedSlots={{
                select: (item) => (
                  <td>
                    <input
                      type="checkbox"
                      style={{ display: "flex" }}
                      onClick={ClickCheckBox}
                      value={item.key}
                    />
                  </td>
                ),
                action: (item) => (
                  <td className="py-2">
                    <CButton
                      color="danger"
                      id={item.key}
                      value={item.word}
                      onClick={deleteWord}
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
