import React from 'react';
// import $ from 'jquery';
class ShoppingCart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isEmpty : this.props.cart.length === 0 ? true : false,
            cart : this.props.cart           //an array of products (objects) in cart
            // isEmpty : false,
            // cart : [{"image":"iPhone11maxpro","name":"iPhone 11 Max Pro","price":"1700","code":"ip11","quantity":"4"},{"image":"Kindle","name":"Amazon Kindle Paper White 201x","price":"100","code":"kpw","quantity":"3"}]
        }
    }
    componentDidUpdate(prevProp)
    {
        if (prevProp.cart !== this.props.cart)
        {
            this.setState(()=>({
                isEmpty : this.props.cart.length === 0 ? true : false,
                cart : this.props.cart 
            }))
        }
    }
    render()
    {
        let returned = [];
        if (!this.state.isEmpty)
        {
            this.state.cart.forEach(function(element,index) {
                let imgPath = require("./product-images/" + element['image'] + ".jpg");
                returned.push(
                    <div className = 'container' key = {index}>
                        <img src = {imgPath} alt = {element['image']} width = "auto" height = "200px"></img>
                        <p>Tên sản phẩm: {element['name']}</p>
                        <p>Giá: {element['price']}USD</p>
                        <p>Số lượng: {element['quantity']}</p>
                        <span>Tổng tiền:
                            <input className = 'total' disabled value = {element['quantity'] * element['price']}></input> 
                        </span>
                    </div>
                );
            });

        }
        else
        {
            returned = 'Giỏ hàng của bạn hiện tại đang trống.';
        }
        return(
            <div>
                <h1><b>Giỏ hàng của bạn</b></h1>
                <div>
                {returned}
                </div>
            </div>
        );
    }
}
export default ShoppingCart;