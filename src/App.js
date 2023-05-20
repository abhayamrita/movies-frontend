/*
 File Name: App.js
 Description: THe File is used for routing the component's
 Author: Abhay
*/

import './App.css';
import Movies from './Components/Movies/Movies';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Movies /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
