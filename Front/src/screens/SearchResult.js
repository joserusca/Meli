import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  
  searchItems,
  searchResult
} from '../features/meli/meliSlice';

export function SearchResult() {
  const dispatch = useDispatch();
  dispatch(searchItems("iphone"));
  const result = useSelector(searchResult);
  result ? console.log(result) : console.log("Nothing searched");

  //const title = item ? item.item.title : "Nothing"; 

  return (
    <div>
      Search Result
      {  }
    </div>
  );
}

