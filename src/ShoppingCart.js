import React from 'react';
import $ from 'jquery';
class ShoppingCart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isEmpty : true,
            cart : []           //an array of products (objects) in cart
        }
    }
    componentDidMount()
    {
        let _this = this;
        $('#updateCartBtn').on('click', function(){
            $.get({
                url : _this.props.url,
                data : {
                    'req' : 'update'
                },
                success : function(response)
                {
                    if (response !== '[]')
                    {
                        response = JSON.parse(response);
                        console.log(response);
                        _this.setState(()=>({
                            isEmpty : false,
                            cart : response
                        }));
                    }
                }
            })
        })
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
                <h1><b>Your cart</b></h1>
                <button type = 'button' id = 'updateCartBtn'>Update cart</button>
                <div>
                {returned}
                </div>
            </div>
        );
    }
}
export default ShoppingCart;