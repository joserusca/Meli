import React from 'react';
import { SearchBox } from './screens/SearchBox';
import { ItemDetails } from './screens/ItemDetails';
import { SearchResult } from './screens/SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {
  getItem,
  searchItems,
  selectItem,
} from './features/meli/meliSlice';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  // const item = useSelector(selectItem);
  // item ? console.log(item.item.title) : console.log("Nothing");


  return (
    // <div className="App">
      
    //     <SearchBox></SearchBox>

    //   <div className='App-body'>        
    //     {
    //       body
    //     }
    //     {/* {
    //       window.location.pathname
    //     }
    //     {
    //       window.localStorage.searchParams
    //     } */}
    //   </div>
    // </div>
    <div className="App">
      <SearchBox></SearchBox>
      <Router>
        <Routes>
          <Route exact path="/" element={<SearchBox/>}/> 
          <Route path="/items" element={<SearchResult/>}>
            <Route path="/items/:id" element={<ItemDetails/>}/>
          </Route>
          </Routes>
      </Router>
    </div>


  );
}

export default App;
