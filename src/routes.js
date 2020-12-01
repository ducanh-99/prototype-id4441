
import React from 'react';


const learn = React.lazy(()=> import('./views/learn/Learn'));
const learnWord = React.lazy(()=> import('./views/learn/LearnWord'));
const Fight = React.lazy(() => import("./views/fight/Fight"));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  // fight
  { path: "/fight", exact: true, name: "Thi Đấu", component: Fight },
  // learn
  { path: '/learn', exact: true, name: 'Learn', component: learn },
  { path: '/learn/word', exact: true, name: 'Learn Word', component: learnWord },
];

export default routes;
