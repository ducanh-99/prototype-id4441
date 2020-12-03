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
  CForm,
  CAlert,
  CInputGroup,
  CInputGroupAppend,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
const dictionary = {
  mạnh: "RH NA K",
  nam: "PR A T",
  anh: "A K",
  hậu: "H N*W JG",
  dương: "SP EW G",
};
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      result: "",
      showResult: false,
    };
  }
  getResult = (event) => {
    let keyword = this.state.keyword;
    switch (event.target.id) {
      case "keyword":
        keyword = event.target.value;
        break;
    }
    this.setState({
      keyword: keyword,
    });
    console.log(this.state.keyword);
  };
  search = () => {
    console.log(this.state.keyword);
    this.setState({
      showResult: true,
    });
  };
  onCloseButton = () => {};
  render() {
    return (
      <div>
        <CForm inline>
          <CInputGroup>
            <CInput
              class="mr-sm-2"
              placeholder="Nhập từ muốn tìm kiếm ..."
              size="sm"
              id="keyword"
              onChange={this.getResult}
            />
          </CInputGroup>

          <CButton
            color="primary"
            size="sm"
            // class="my-2 my-sm-0"
            type="submit"
            onClick={this.search}
          >
            <CIcon name={"cil-magnifying-glass"} size="sm" />
            Tìm kiếm
          </CButton>
        </CForm>
        {this.state.showResult ? (
          <CAlert
            color="info"
            onClick={() => {
              this.setState({
                showResult: false,
              });
            }}
            closeButton
          >
            Từ mà bạn muốn tìm được gõ bằng cách: -
            {dictionary[this.state.keyword]}
          </CAlert>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
