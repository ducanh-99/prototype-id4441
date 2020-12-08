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
} from "@coreui/react";

import Keyboard from "react-virtual-keyboard";

function Rank() {
  return (
    <>
      <CContainer>
        <CCard>
          <CCardBody>
            <Keyboard
              name="keyboard"
              options={{
                type: "input",
                layout: "qwerty",
                alwaysOpen: true,
                usePreview: false,
                useWheel: false,
                stickyShift: false,
                appendLocally: true,
                color: "light",
                updateOnChange: true,
                initialFocus: true,
                display: {
                  accept: "Submit",
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CContainer>
    </>
  );
}

export default Rank;
