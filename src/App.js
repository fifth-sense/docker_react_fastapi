import React from 'react'
import './App.css';
import UserInput from './components/userInput';

function App() {
  return (
    <>
      <div className = 'mainView'>
        <h1 className='subHeadingStyle '>To-Do App</h1>
        <UserInput />
      </div>
    </>
  );
}

export default App;
