import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  
  status,
  searchItems,
  searchResult,
  getItem
} from '../features/meli/meliSlice';
import ProductCard from '../components/ProductCard';
import './SearchResult.css';

export function SearchResult() {
  const stat = useSelector(status);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  //dispatch(getItem('MLA1114508271'));
  useEffect(() => {

    //dispatch(productActions.setActiveProduct(productId));
    //dispatch(meliSlice.actions.setActiveProduct(id));
    
    console.log(query);
    console.log("Preparando");
    dispatch(searchItems(query)); 
    console.log("Searching: " + query);
    
  }, [query]);

  const result = useSelector(searchResult);
  //console.log("Resultados useSelector: " + result);
  //console.log(result ? result.items : "Nothing searched");

  const total = result ? result.items.length : 0; 
  const items = result ? result.items : [];
  console.log(items);
  return (
    <div className='productsResults'>
      <div className='productsCategories'>

        Category 1 > Category 1.1 > Category 1.1.3
      </div>
      <div className='productsContainer'>
      { items.map( item => <ProductCard key={item.id} item={item}/> ) }
      </div>
    </div>
  );
}


