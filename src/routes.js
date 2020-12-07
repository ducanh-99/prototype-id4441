
import React from 'react';
import ListSentences from './views/learn/ListSentences';


const learn = React.lazy(()=> import('./views/learn/Learn'));
const yourWord = React.lazy (() => import('./views/learn/YourWord'))

const learnWord = React.lazy(()=> import('./views/learn/LearnWord'));
const learnSentences = React.lazy(()=> import('./views/learn/LearnSentences'));
const learnSound = React.lazy(()=> import('./views/learn/LearnSound'));
const learnKeys = React.lazy(()=> import('./views/learn/LearnKeys'));

const listKeys = React.lazy(() => import('./views/learn/ListKeys'));
const listWords = React.lazy(() => import('./views/learn/ListWords'));
const listSounds = React.lazy(() => import('./views/learn/ListSounds'));
const listSentences = React.lazy(() => import('./views/learn/ListSentences'));
const practice = React.lazy(() => import('./views/learn/Practice'));


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
  { path: "/fight/rank", exact: true, name: "xep hang", component: Rank },
  // learn
  { path: '/learn', exact: true, name: 'Học', component: learn },
  { path: '/practice', exact: true, name: 'Luyện tập', component: practice },
  { path: '/learn/your_word', exact: true, name: 'Từ của bạn', component: yourWord },
  { path: '/watch', exact: true, name: 'Xem quy tắc gõ', component: Watch },

  { path: '/learn/word', exact: true, name: 'Học gõ từ', component: listWords},
  { path: '/learn/sentences', exact: true, name: 'Học gõ câu', component: listSentences },
  { path: '/learn/sound', exact: true, name: 'Học gõ âm', component: listSounds },
  { path: '/learn/keys', exact: true, name: 'Học gõ phím', component: listKeys },
];

export default routes;
