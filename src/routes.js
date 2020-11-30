import React from "react";

const Fight = React.lazy(() => import("./views/fight/Fight"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/fight", exact: true, name: "Thi Đấu", component: Fight },
];

export default routes;
