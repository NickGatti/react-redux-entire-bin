import React from 'react'

const CartItem = ({item}) => {
    return (
        <div className="collection-item" >
            <div className="row" >
                <div className="col s8" >{item.product.name}</div>
                <div className="col s3" >{item.product.priceInCents / 100 }</div>
                <div className="col s2" >{item.quantity}</div>
            </div>
            {}
        </div>
    )
}

export default CartItem