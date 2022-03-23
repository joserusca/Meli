import React from 'react';
import { SearchBox } from './screens/SearchBox';
import { ItemDetails } from './screens/ItemDetails';
import { SearchResult } from './screens/SearchResult';
import './App.css';


function App() {
  let body
  if(window.location.pathname.startsWith('/items/'))
    body = <ItemDetails/>
  else if(window.location.pathname.startsWith('/items'))
    body = <SearchResult/>
  else 
    body = <></>
  return (
    <div className="App">
      
        <SearchBox></SearchBox>

      <body className='App-body'>        
        {
          body
        }
        {/* {
          window.location.pathname
        }
        {
          window.localStorage.searchParams
        } */}
      </body>
    </div>
  );
}

export default App;
