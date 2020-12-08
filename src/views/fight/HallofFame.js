import React from "react";
import { CDataTable } from "@coreui/react";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    speed: "204wpm",
    best: "300 từ/phút",
    time: "53 minutes",
  },
  {
    id: 2,
    name: "John Doe",
    speed: "189 wpm",
    best: "300 từ/phút",
    time: "53 minutes",
  },
  {
    id: 3,
    name: "John Doe",
    speed: "189 wpm",
    best: "300 từ/phút",
    time: "53 minutes",
  },
];

const fields = [
  { key: "id", _style: { width: "10%" } },
  { key: "name", label: "Tên", _style: { width: "30%" } },
  { key: "best", label: "tốt nhất", _style: { width: "20%" } },
  { key: "speed", label: "gần đây", _style: { width: "20%" } },
  { key: "time", label: "cách đây", _style: { width: "20%" } },
];

function HallofFame() {
  return (
    <>
      <CDataTable items={usersData} fields={fields} />
    </>
  );
}

export default HallofFame;
