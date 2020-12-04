import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../actions/cartActions';

function CartScreen(props) {

const cart = useSelector(state => state.cart);

const {cartItems} = cart;

    const paintId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (paintId) {
          dispatch(addToCart(paintId, qty));
        }
      }, []);

    return <div className="cart">
        <div className="cart-lsit">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart

                    </h3>
                    <div>
                        Price
                </div>
                </li>
                {
                    cartItems.length === 0 ?
                        <div>
                            Cart is empty
                            </div>
                        :
                        cartItems.map(item =>
                            <div>
                                <img scr={item.images} alt="paint" />
                                <div className="cart-name">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        Qty:
                                <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    {item.price}
                                </div>
                            </div>


                        )
                }


            </ul>

        </div>
        <div className="cart-action">

        </div>
        Cart Screen
    </div>
}
export default CartScreen