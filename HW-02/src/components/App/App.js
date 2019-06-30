import React from 'react';
import Reader from '../Reader/Raeder';
import Movies from '../Movies/Movies';
import Dashboard from '../Dashboard/Dashboard';
import publications from '../Reader/publications.json';

const App = () => (
  <>
    <Reader items={publications} />
    <Movies />
    <Dashboard />
  </>
);

export default App;
