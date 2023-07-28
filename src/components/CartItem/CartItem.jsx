import React from 'react';
import propTypes from 'prop-types';
import {BsCartX} from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({data}) {

  const {tumbnail, title, price} = data;

  return ( 
    <section className="cart_item">
      <img src={tumbnail}
        alt="imamge product"
        className="cart_item_image"
      />
      <div className="cart_item_content">
        <h3 className="cart_item_title">{title}</h3>
        <h3 className="cart_item_price">{formatCurrency(price)}</h3>

        <button type="button"
          className="button_remove_item"
        >
          <BsCartX/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object({}),
}.isRequired;
