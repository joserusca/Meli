import React from 'react';
import { SearchBox } from './screens/SearchBox';
import { ItemDetails } from './screens/ItemDetails';
import { SearchResult } from './screens/SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
  status
} from './features/meli/meliSlice';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  // const item = useSelector(selectItem);
  // item ? console.log(item.item.title) : console.log("Nothing");
  const stat = useSelector(status);

  let body;
  // if(window.location.pathname.startsWith('/items/')) {
  //   console.log(window.location.pathname);
  //   const regular = "/items/(.*)$";
  //   const match = window.location.pathname.match(regular);
  //   console.log(" -> " + match[1]);
  //   console.log(" ==== " + item);
  //   //console.log(" => " + item ? item.item.id : "Nothing");
  //   if(item === null || item.item.id!==match[1])
  //   {  
  //       console.log("Buscando item.");
  //       dispatch(getItem(match[1]));
  //   }
  //   //MLA1114508271
  //   //dispatch(getItem('MLA1114508271'));
  //   body = <ItemDetails/>
  // }
  // else if(window.location.pathname.startsWith('/items?search=')) {
  //   const regular = "\/items\?search=(.*)$";
  //   const match = window.location.pathname.match(regular);
  //   console.log(match);
  //   body = <SearchResult/>
  // }    
  // else 
  //   body = <></>
  body = <SearchResult/>;
  return (
    <div className="App">
        Status API: {stat}
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
