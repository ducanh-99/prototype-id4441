import React, { useState } from "react";
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
  CHeader,
  CDataTable,
  CBadge,
  CCollapse,
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    name: "Nguyễn Đức Anh",
    mssv: "20172956",
    role: "Trưởng nhóm",
    status: "Pending",
  },
  {
    id: 1,
    name: "Hoa Xuân Dương",
    registered: "2018/01/01",
    mssv: "20173068",
    role: "Member",
    status: "Active",
  },
  {
    id: 2,
    name: "Lương Tiến Mạnh",
    mssv: "20173254",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 3,
    name: "Đỗ Hoàng Nam",
    mssv: "20173270",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 4,
    name: "Phạm Văn Hậu",
    mssv: "20173101",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
];

function Contact() {
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", label: "Tên", _style: { width: "20%" } },
    // "registered",
    { key: "mssv", label: "MSSV", _style: { width: "10%" } },
    { key: "role", label: "Vai trò", _style: { width: "10%" } },
    { key: "status", label: "Đóng góp" },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };
  return (
    <>
      <CContainer>
        <CCard>
          <CCardHeader>Thông tin nhóm phát triển</CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              //   columnFilter
              //   tableFilter
              //   footer
              //   itemsPerPageSelect
              //   itemsPerPage={5}
              //   hover
              //   sorter
              //   pagination
              scopedSlots={{
                show_details: (item, index) => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(index);
                        }}
                      >
                        {details.includes(index) ? "Hide" : "Show"}
                      </CButton>
                    </td>
                  );
                },
                details: (item, index) => {
                  return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h4>{item.username}</h4>
                        <p className="text-muted">
                          User since: {item.registered}
                        </p>
                        <CButton size="sm" color="info">
                          User Settings
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
}

export default Contact;
