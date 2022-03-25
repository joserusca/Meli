import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard(props) {
    const item = props.item;
    const navigate = useNavigate();
    const showProduct = () => {
        navigate("/items/" + props.id);
      }

    return (
    <div className='productPadding'>
        <div className='productContainer' onClick={ showProduct }>
            <div className='productImgContainer'>
                <img className='productImg' src={item.picture}></img>
            </div>
            <div className='productDetail'>
                <div className="productCurrency">{ item.price.currency === 'ARS'? "$": "USD" } { item.price.amount.toLocaleString('es-AR') }</div>            
                <div className="productLocation">Capital Federal</div>
                <div className="productTitle">{ item.title}</div>
                <div className="productCondition">{ item.condition.localeCompare('new') == 0 ? 'Nuevo' : 'Usado' }</div>                
            </div>        
        </div>
    </div>
    )
  }

  export default ProductCard;