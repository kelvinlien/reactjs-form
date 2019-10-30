import React from 'react';
import $ from 'jquery';
import ShoppingCart from './ShoppingCart.js';
class ProductCatalog extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            image : [],
            name : [],
            price : [],
            code : [],
            quantity : [],
            dataLoaded : false,
            url : 'http://localhost/shopping-cart/index.php',
            cart : []
        };
    }
    componentDidMount()
    {
        let _this = this;
        $.get(
            {
                url : _this.state.url,
                data : {
                    'req' : 'init'
                },
                success : function(response)
                {
                    console.log(response);
                    if (response !== '[]')
                    {
                        response = JSON.parse(response);
                        for(var key in response)
                        {
                            let object = response[key];
                            for(var key1 in object)     
                            {
                                var newVal = _this.state[key1];
                                newVal.push(object[key1]);
                                _this.setState(()=>({
                                    key1 : newVal
                                }));
                            }
                        }
                        _this.setState(()=>({
                            dataLoaded : true
                        }));
                    }

                },
                complete : function()       //add an event handler for rendered buttons.
                {
                    $('.buybtn').on('click', function(){
                        let id = $(this).attr('code');
                        let val = $('#'+ id).val() === '' ? '0' : $('#'+ id).val();
                        $.post({            //perform POST to update the product's quantity.
                            url : _this.state.url,
                            data : {
                                [id] : val,
                                'req' : 'update'
                            },
                            success : function(response)
                            {
                                console.log(response);
                                //alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công!");
                                if (response !== '[]')
                                {
                                    response = JSON.parse(response);
                                    console.log(response);
                                    _this.setState(()=>({
                                        cart : response
                                    }));
                                }
                                
                            }
                        })
                    });
                }
            }
        );
    };

    render()
    {
        let returned = [];
        if (this.state.dataLoaded)
        {
            let _this = this;
            this.state.image.forEach(function(element, index) {
                let imgPath = require("./product-images/" + element + ".jpg");
                returned.push(
                    <div className = 'container' key = {index}>
                        <img src = {imgPath} alt = {element} width = "auto" height = "200px"></img>
                        <p>{_this.state.name[index]}</p>
                        <p>{_this.state.price[index]}USD</p>
                        <input type = "number" className = 'quantity' id = {_this.state.code[index]} name = {_this.state.code[index]} image = {element} price = {_this.state.price[index]} ></input>
                        <button type = 'button' className = 'buybtn' code = {_this.state.code[index]}>Buy</button>
                    </div>
                );
            
            });
        }
        return(
            <form method = 'POST' action = {this.state.url}>
                <title>Giỏ hàng siêu đơn giản</title>
                <h1>
                    <b>Catalog sản phẩm</b>
                </h1>
                {returned}
                {/* <button type = 'button' id ='test'>Alert</button>
                <button id = 'submit' type = 'submit' className="btn btn-primary btn-lg">Toi gio hang</button> */}
                <ShoppingCart url = {this.state.url} cart = {this.state.cart}/>
            </form>
        );
    }
}
export default ProductCatalog;