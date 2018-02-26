import React from 'react'
import CartItems from './CartItems'

const ShoppingCart = (props) => {
    return (
        <CartItems items={props.items}/>
    )
}

export default ShoppingCart