import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CRow,
  CCol,
  CInput,
  CLabel,
  CButton,
  CCarousel,
  CCarouselCaption,
  CCarouselInner,
  CCarouselIndicators,
  CCarouselItem,
  CCarouselControl,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CDataTable,
} from "@coreui/react";
import Search from "./Search";
import CIcon from "@coreui/icons-react";
import swal from "sweetalert";

const fields = [
  {
    key: "select",
    label: "",
    _style: { width: "2%" },
  },
  { key: "key", label: "STT" },
  { key: "word", label: "Danh sách các từ", _style: { width: "40%" } },
  { key: "steno", label: "Tốc ký", _style: { width: "30%" } },
  {
    key: "action",
    label: "Hành động",
    sorter: false,
    filter: false,
    _style: { width: "20%" },
  },
];
function sweetAlert() {
  let text = "đẹp";
  swal({
    title: "Thành công!",
    text: "Bạn đã thêm từ '" + text + "' vào danh mục Từ của bạn",
    icon: "success",
  });
}
function download() {
  swal({
    title: "Thành công!",
    text: "Bạn đã tải xuống thành công bộ từ điển",
    icon: "success",
  });
}
const data = [
  { key: 1, word: "đẹp", steno: "TPN-ETK" },
  { key: 2, word: "trai", steno: "TR-AJ" },
  { key: 3, word: "rất", steno: "R-S*WNT" },
];
class Watch extends Component {
  render() {
    return (
      <div>
        <CCard>
          <CCardHeader>
            <CButton onClick={download} color="info">
              Tải xuống bộ từ điển
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
                select: (item) => <td></td>,
                action: (item) => (
                  <td className="py-2">
                    <CButton
                      color="success"
                      onClick={sweetAlert}
                      title="Thêm vào từ của bạn"
                    >
                      <CIcon name="cil-star" />
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default Watch;
