
import React from 'react';
import ListSentences from './views/learn/ListSentences';


const learn = React.lazy(()=> import('./views/learn/Learn'));
const yourWord = React.lazy (() => import('./views/learn/YourWord'))

const learnWord = React.lazy(()=> import('./views/learn/LearnWord'));
const learnSentences = React.lazy(()=> import('./views/learn/LearnSentences'));
const learnSound = React.lazy(()=> import('./views/learn/LearnSound'));
const learnKeys = React.lazy(()=> import('./views/learn/LearnKeys'));

const listKeys = React.lazy(() => import('./views/learn/ListKeys'))

const listWords = React.lazy(() => import('./views/learn/ListWords'));
const listSounds = React.lazy(() => import('./views/learn/ListSounds'));
const listSentences = React.lazy(() => import('./views/learn/ListSentences'));
const practice = React.lazy(() => import('./views/learn/Practice'));
const practiceKeys = React.lazy(() => import('./views/learn/Practice/PracticeKeys'));

const lesson1 = React.lazy(() => import('./views/learn/Lesson/Lesson1'));
const lessonKeys2 = React.lazy(() => import('./views/learn/Lesson/LessonKeys2'));
const keyboard = React.lazy(() => import('./views/learn/keyboard'));
const KeyboardSteno = React.lazy(() => import('./views/learn/keyboard_steno'));

const Fight = React.lazy(() => import("./views/fight/Fight"));
const Race = React.lazy(() => import("./views/fight/Race"));
const Practice = React.lazy(() => import("./views/fight/Practice"));
const RaceFriend = React.lazy(() => import("./views/fight/RaceFriend"));
const Rank = React.lazy(() => import("./views/fight/Rank"));

const Watch = React.lazy(() => import("./views/watch/Watch"));
const Home = React.lazy(() => import("./views/dashboard/Dashboard"));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Trang chủ', component: Home },
  // fight
  { path: "/fight", exact: true, name: "Thi Đấu", component: Fight },
  { path: "/fight/race", exact: true, name: "Cuộc đua", component: Race },
  { path: "/fight/rank", exact: true, name: "Xếp hạng", component: Rank },
  { path: "/fight/race_friend", exact: true, name: "Thi đấu với bạn", component: RaceFriend },
  { path: "/fight/practice", exact: true, name: "Tự luyện tập", component: Practice },

  // learn
  { path: '/learn', exact: true, name: 'Học', component: learn },
  { path: '/practice', exact: true, name: 'Luyện tập', component: practice },
  { path: '/learn/your_word', exact: true, name: 'Từ của bạn', component: yourWord },
  { path: '/watch', exact: true, name: 'Xem quy tắc gõ', component: Watch },
  { path: '/keyboard', exact: true, name: 'Ban phim', component: keyboard },
  { path: '/keyboardsteno', exact: true, name: 'Ban phim', component: KeyboardSteno },
  { path: '/learn/word', exact: true, name: 'Học gõ từ', component: listWords},
  { path: '/learn/sentences', exact: true, name: 'Học gõ câu', component: listSentences },
  { path: '/learn/sound', exact: true, name: 'Học gõ âm', component: listSounds },
  { path: '/learn/keys', exact: true, name: 'Học gõ phím', component: listKeys },

  { path: '/learn/keys/lesson1', exact: true, name: 'Bài 1', component: lesson1 },
  { path: '/learn/keys/lessonKeys2', exact: true, name: 'Bài học phím 2', component: lessonKeys2 },
  { path: '/learn/word/lessonWord1', exact: true, name: 'Bài học từ 1', component: learnWord },
  //practice
  { path: '/practice/key', exact: true, name: 'Bài luyện tập phím', component: practiceKeys },
];

export default routes;
