import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  searchItems,
  selectItem,
  searchResult,
} from '../features/meli/meliSlice';

export function SearchBox() {
  const [ text, setText ] = useState('');
  const dispatch = useDispatch();
  // const item = useSelector(selectItem);
  // item ? console.log(item.item.title) : console.log("Nothing");

  const handlerChange = value => {
      setText(value.target.value);
      console.log(value.target.value);
  }

  const submit = () => {
    dispatch(searchItems(text)); console.log("Searching: " + text) 
  }

  const pressEnter = (event) => {
      if (event.key === 'Enter') {
        console.log('do validate')
      }
  }

  return (
    <header className="App-header">
        <div className='App-logo'>
            <img src='/assets/Logo_ML.png'></img>
        </div>
        <input 
                placeholder='Nunca dejes de buscar' 
                className='Search-input' 
                type="text" 
                value={text.value}
                onChange={handlerChange.bind(this)}
                onKeyDown={ submit }
        ></input>
        <button  className='App-magnifying' onClick={ submit }>
            <img src='/assets/ic_Search.png'></img>
        </button >
    </header>
  );
}

