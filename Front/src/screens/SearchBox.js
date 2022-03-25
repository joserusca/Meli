import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBox.css'

export function SearchBox() {
  const [ text, setText ] = useState('');
  const navigate = useNavigate();


  const handlerChange = value => {
      setText(value.target.value);
  }

  const submit = () => {
    navigate("/items?q=" + text);
  }

  const pressEnter = (event) => {
      if (event.key === 'Enter') {
        submit();
      }
  }

  return (
    <header className="App-header">
      <div className='centerColumn'>
        <div className='App-logo' onClick={() => navigate("/")}>
            <img src='/assets/Logo_ML.png'></img>
        </div>
        <input 
                placeholder='Nunca dejes de buscar' 
                className='Search-input' 
                type="text" 
                value={text.value}
                onChange={handlerChange.bind(this)}
                onKeyDown={ pressEnter }
        ></input>
        <button  className='App-magnifying' onClick={ submit }>
            <img src='/assets/ic_Search.png'></img>
        </button >
        </div>
    </header>
  );
}

