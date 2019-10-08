import React from 'react';
import './App.css';
import Header from './header/header.js';
import LeftPanel from './leftPanel/leftPanel';
import ContentBox from './contentBox/contentBox'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <body>
        <div className='leftSide'>
          <LeftPanel/>
        </div>
        <div className='content'>
          <ContentBox/>
        </div>
      </body>
    </div>
  );
}

export default App;
