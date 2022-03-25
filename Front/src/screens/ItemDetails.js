import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
  status
} from '../features/meli/meliSlice';
import './ItemDetail.css';
import { SearchBox } from './SearchBox';

export function ItemDetails() {
  const stat = useSelector(status);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("Preparando");
    dispatch(getItem(id)); 
    console.log("Searching: " + id);
    
  }, [id]);

  const item = useSelector(selectItem);
  console.log(item);
  item ? console.log(item.item.title) : console.log("Nothing");

  const title = item ? item.item.title : "Nothing"; 
  var body="Something";
  if( item ) {
    console.log(item.item);
    body = <>
          <SearchBox></SearchBox>
          <div className='productDetailContainer'>
              <div className='productsCategories'>
                Electronica, Audio y Video > iPod > Reproductores > iPod Touch > 32 GB
              </div>
              <div className='itemInfo'>
                <div className='divPicture'>
                  <img className='Picture' src={item.item.picture}></img>

                </div>
                <div className='divInfo'>
                  <div className='divCondition'>
                    {item.item.condition == 'new' ? "Nuevo - " : "Usado - " } 
                    {item.item.sold_quantity} Vendidos
                  </div>
                  <div className='divTitle'>{item.item.title}</div> 
                  <div className='divAmount'>
                    { item.item.price.currency == 'ARS' ? "$" : 'USD'}
                    { item.item.price.amount.toLocaleString('es-AR')} {/*Aca deberia ir un servicio que muestre el cambio de moneda */}
                    <div>{ ( "0" + item.item.decimals ).slice(-2)}</div>
                  </div>
                  <div className='containerBtn'>
                    <button className='buyBtn' value='Comprar'>Comprar</button>
                  </div>
                </div>
              </div>
              <div className='descriptionContainer'>
                  <div className='divDescTittle'>Descripcion del producto</div>
                  <div className='divDescription'>
                    { item.item.description}
                  </div>
              </div>
            </div>
          </>
  }
  else
    body = <div>Id de producto incorrecto.</div>
  return (
    body 
  );
}

