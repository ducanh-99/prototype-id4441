import React from "react";
import { CDataTable } from "@coreui/react";

const usersData = [
  { id: 1, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
  { id: 2, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
  { id: 3, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
  { id: 4, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
  { id: 5, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
  { id: 6, speed: "49 từ/phút", acc: "95%", pts: "17", when: "2 phut truoc" },
];

const fields = [
  { key: "id", label: "id", _style: { width: "5%" } },
  { key: "speed", label: "tốc độ", _style: { width: "30%" } },

  { key: "acc", label: "chính xác", _style: { width: "25%" } },
  { key: "pts", label: "số từ gõ", _style: { width: "25%" } },
  { key: "when", label: "cách đây", _style: { width: "25%" } },
];

function YourSoccer() {
  return (
    <>
      <CDataTable items={usersData} fields={fields} />
    </>
  );
}

export default YourSoccer;
