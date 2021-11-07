import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div data-testid='app-container' className='App'>
      <Homepage />
    </div>
  );
}

export default App;
