import React from 'react';
class ShoppingCart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isEmpty : true
        }
    }
    render()
    {
        return(
            <div>
                <h1><b>Your cart</b></h1>
                <button type = 'button' id = 'updateCartBtn'>Update cart</button>
                <p>
                    {this.state.isEmpty == true ? 'Your cart is currently empty.' : 'Loading...'}
                </p>
            </div>
        );
    }
}
export default ShoppingCart;