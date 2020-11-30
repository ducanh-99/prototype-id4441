import React from 'react';
import Learn from './views/learn/Learn';


const learn = React.lazy(()=> import('./views/learn/Learn'));
const learnWord = React.lazy(()=> import('./views/learn/LearnWord'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/learn', exact: true, name: 'Learn', component: learn },
  { path: '/learn/word', exact: true, name: 'Learn Word', component: learnWord },
];

export default routes;
