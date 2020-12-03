
import React from 'react';


const learn = React.lazy(()=> import('./views/learn/Learn'));
const yourWord = React.lazy (() => import('./views/learn/YourWord'))

const learnWord = React.lazy(()=> import('./views/learn/LearnWord'));
const learnSentences = React.lazy(()=> import('./views/learn/LearnSentences'));
const learnSound = React.lazy(()=> import('./views/learn/LearnSound'));
const learnKeys = React.lazy(()=> import('./views/learn/LearnKeys'));


const Fight = React.lazy(() => import("./views/fight/Fight"));
const Race = React.lazy(() => import("./views/fight/Race"));
const Rank = React.lazy(() => import("./views/fight/Rank"));

const Watch = React.lazy(() => import("./views/watch/Watch"));
const Home = React.lazy(() => import("./views/dashboard/Dashboard"));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Trang chủ', component: Home },
  // fight
  { path: "/fight", exact: true, name: "Thi Đấu", component: Fight },
  { path: "/race", exact: true, name: "Cuoc dua", component: Race },
  { path: "/race", exact: true, name: "xep hang", component: Rank },
  // learn
  { path: '/learn', exact: true, name: 'Học', component: learn },
  { path: '/learn/your_word', exact: true, name: 'Từ của bạn', component: yourWord },
  { path: '/watch', exact: true, name: 'Xem quy tắc gõ', component: Watch },

  { path: '/learn/word', exact: true, name: 'Học gõ từ', component: learnWord },
  { path: '/learn/sentences', exact: true, name: 'Học gõ câu', component: learnSentences },
  { path: '/learn/sound', exact: true, name: 'Học gõ âm', component: learnSound },
  { path: '/learn/keys', exact: true, name: 'Học gõ phím', component: learnKeys },
];

export default routes;
