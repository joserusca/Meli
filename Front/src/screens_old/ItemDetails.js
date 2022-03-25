import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getItem,
  selectItem,
} from '../features/meli/meliSlice';
import './ItemDetail.css';
//import './App.css';

export function ItemDetails() {
  
  const item = useSelector(selectItem);
  item ? console.log(item.item.title) : console.log("Nothing");

  const title = item ? item.item.title : "Nothing"; 
  var body;
  if( item ) {
    console.log(item.item);
    body = <div className='container'>
              {/* Item Details
              { title } */}
              <div>
                Detalles Categorias
              </div>
              <div className='itemInfo'>
                <div className='divPicture'>
                  <img className='Picture' src={item.item.picture}></img>

                </div>
                <div className='divInfo'>
                  <div className='divCondition'>
                  {item.item.condition == 'new' ? "Nuevo" : "Usado" }
                  {item.item.sold_quantity} Vendidos
                  </div>
                  <div className='divTitle'>{item.item.title}</div> 
                  <div className='divAmount'>
                    { item.item.price.currency == 'ARS' ? "$" : 'USD'}
                    { item.item.price.amount} {/*Aca deberia ir un servicio que muestre el cambio de moneda */}
                  </div>
                  <button className='buyBtn' value='Comprar'>Comprar</button>
                </div>
              </div>
              <div className='descriptionContainer'>
                  <div className='divDescTittle'>Descripcion del producto</div>
                  <div className='divDescription'>
                    { item.item.description}
                  </div>
              </div>
            </div>
  }
  else
    body = <div>Nothing to Show</div>
  return (
    body
  );
}

