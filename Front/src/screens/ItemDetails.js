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
    if(stat==='idle')
      dispatch(getItem(id)); 
    console.log("Searching: " + id);
    
  }, [id]);

  const item = useSelector(selectItem);
  var body="";
  if( stat === 'idle') 
    if(item && !item.hasOwnProperty('error')) {
      console.log(item.item);
      body =          
            <>
                <div className='productsCategories'>
                { "Electronica, Audio y Video > iPod > Reproductores > iPod Touch > 32 GB" }
                </div>
                <div className='itemInfo'>
                  <div className='divPanel'>
                    <div className='divPicture'>
                      <img className='Picture' alt={item.item.picture} src={item.item.picture}></img>
                    </div>
                    <div className='descriptionContainer'>
                      <div className='divDescTittle'>Descripcion del producto</div>
                      <div className='divDescription'>
                        { item.item.description}
                      </div>
                    </div>
                  </div>
                  <div className='divInfo'>
                    <div className='divCondition'>
                      {item.item.condition == 'new' ? "Nuevo - " : "Usado - " } 
                      {item.item.sold_quantity} Vendidos
                    </div>
                    <div className='divTitle'>{item.item.title}</div> 
                    <div className='divAmount'>
                      { item.item.price.currency == 'ARS' ? "$ " : 'USD '}
                      { item.item.price.amount.toLocaleString('es-AR')} {/*Aca deberia ir un servicio que muestre el cambio de moneda */}
                      <font style={{fontSize: '25px', verticalAlign: 'super'}}>{ ( "0" + item.item.price.decimals ).slice(-2)}</font>
                    </div>
                    <div className='containerBtn'>
                      <button className='buyBtn' value='Comprar'>Comprar</button>
                    </div>
                  </div>
                </div>
              </>            
    }
    else
      body = <div>Id de producto incorrecto.</div>
  return (
    <>
          <SearchBox></SearchBox>
          <div className='productDetailContainer'>
            { stat !== 'idle'? "Cargando" : "" } 
            {body}
          </div>
    </>   
  );
}

