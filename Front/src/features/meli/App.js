import React from 'react';
import { SearchBox } from './screens/SearchBox';
import { ItemDetails } from './screens/ItemDetails';
import { SearchResult } from './screens/SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
} from '../features/meli/meliSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  item ? console.log(item.item.title) : console.log("Nothing");

  let body;
  if(window.location.pathname.startsWith('/items/')) {
    console.log(window.location.pathname);
    const regular = "\/items\/(.*)$";
    const match = window.location.pathname.match(regular);
    console.log(match[1]);
    dispatch(getItem(match));
    body = <ItemDetails/>
  }
  else if(window.location.pathname.startsWith('/items?search=')) {
    const regular = "\/items\?search=(.*)$";
    const match = window.location.pathname.match(regular);
    console.log(match);
    body = <SearchResult/>
  }    
  else 
    body = <></>
  return (
    <div className="App">
      
        <SearchBox></SearchBox>

      <div className='App-body'>        
        {
          body
        }
        {/* {
          window.location.pathname
        }
        {
          window.localStorage.searchParams
        } */}
      </div>
    </div>
  );
}

export default App;
