import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
  searchResult,
} from '../features/meli/meliSlice';

export function SearchBox() {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  item ? console.log(item.item.title) : console.log("Nothing");
  return (
    <header className="App-header">
        <div className='App-logo'>
            <img src='/assets/Logo_ML.png'></img>
        </div>
        <input placeholder='Nunca dejes de buscar' className='Search-input' type="text"></input>
        <button  className='App-magnifying' onClick={ () => {dispatch(getItem(1)); console.log(1000) }}>
            <img src='/assets/ic_Search.png'></img>
        </button >
        Aca va el item.
        {          
          //item.item.title 
        }
    </header>
  );
}

