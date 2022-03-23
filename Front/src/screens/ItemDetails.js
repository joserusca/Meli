import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
} from '../features/meli/meliSlice';

export function ItemDetails() {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  item ? console.log(item.item.title) : console.log("Nothing");

  const title = item ? item.item.title : "Nothing"; 

  return (
    <div>
      Item Details
      { title }
    </div>
  );
}

