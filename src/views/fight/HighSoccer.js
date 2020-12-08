import React from "react";
import { CDataTable } from "@coreui/react";

const usersData = [
  { id: 1, name: "John Doe", speed: "204wpm", time: "53 minutes" },
  { id: 2, name: "John Doe", speed: "189 wpm", time: "53 minutes" },
  { id: 3, name: "John Doe", speed: "189 wpm", time: "53 minutes" },
  { id: 4, name: "John Doe", speed: "189 wpm", time: "53 minutes" },
  { id: 5, name: "John Doe", speed: "189 wpm", time: "53 minutes" },
];

const fields = [
  { key: "id",  _style: { width: "10%" } },
  { key: "name",label:"Tên" , _style: { width: "40%" } },

  { key: "speed",label:"tốc độ" , _style: { width: "25%" } },
  { key: "time",label: "cách đây" , _style: { width: "25%" } },
];

function Charts() {
  return (
    <>
      <CDataTable items={usersData} fields={fields} />
    </>
  );
}

export default Charts;
