import React from 'react';

import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
  return (
    <section className="cart">
      <div className="cart_items">
        <CartItem/>
      </div>
      <div className="cart_resume">
        
      </div>
    </section>
  );

}

export default Cart;
