import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
    </BrowserRouter>
  );
}

export default App;
