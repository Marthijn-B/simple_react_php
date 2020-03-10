import React from 'react';
import './App.css';

// Components
import TopHeader from './components/top-header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
        <Main />
      </header>
    </div>
  );
}

export default App;
