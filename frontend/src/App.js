import React from 'react';
import Header from './components/Header';

function App () {
  return (
    <>
      <Header title='Homepage'>
        <ul>
          <li>Name</li>
          <li>Age</li>
        </ul>
      </Header>
      <Header title='Projects'>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </Header>
    </>
  );
}

export default App;