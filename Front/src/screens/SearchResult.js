import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  
  status,
  searchItems,
  searchResult,
} from '../features/meli/meliSlice';
import ProductCard from '../components/ProductCard';
import { SearchBox } from './SearchBox';
import './SearchResult.css';


export function SearchResult() {
  const stat = useSelector(status);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  useEffect(() => {
    console.log(query);
    console.log("Preparando");
    if(stat==='idle')
      dispatch(searchItems(query)); 
    console.log("Searching: " + query);    
  }, [query]);

  const result = useSelector(searchResult);
  const total = result ? result.items.length : 0; 
  const items = result ? result.items : [];

  return (
    <>
      <SearchBox/>
      <div className='productsResults'>
        <div className='productsCategories'>
        { "Electronica, Audio y Video > iPod > Reproductores > iPod Touch > 32 GB" }
        </div>
        <div className='productsContainer'>
        { items.map( item => <ProductCard key={item.id} id={item.id} item={item}/> ) }
        </div>
      </div>
    </>
  );
}


