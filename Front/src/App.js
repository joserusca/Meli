import React from 'react';
import { SearchBox } from './screens/SearchBox';
import { ItemDetails } from './screens/ItemDetails';
import { SearchResult } from './screens/SearchResult';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">      
      <Router>        
        <div className='App-body'>
          <Routes>          
            <Route exact path="/" element={<SearchBox/>}/> 
            <Route path="items" element={<SearchResult/>}></Route>
            <Route path="items/:id" element={<ItemDetails/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
