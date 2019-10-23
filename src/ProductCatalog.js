import React from 'react';
import $ from 'jquery';
import ShoppingCart from './ShoppingCart.js';
class ProductCatalog extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            // image : ['iPhone11maxpro', 'Kindle'],
            image : [],
            // $.get(
            //     {
            //         url : 'http://localhost/shopping-cart/index.php',
            //         data : {
            //             'data' : 'image'
            //         },
            //         success : function(response)
            //         {
            //             console.log('inside success function');
            //             return response;
            //         }
            //     }
            // ),
            name : [],
            price : [],
            code : [],
            quantity : [],
            dataLoaded : false
        };
    }
    componentDidMount()
    {
        let _this = this;
        $.get(
            {
                url : 'http://localhost/shopping-cart/index.php',
                data : {
                    'data' : ['image','name','price','code',]
                },
                success : function(response)
                {
                    response = JSON.parse(response);
                    for(var key in response)
                    {
                        let object = response[key];
                        for(var key1 in object)     
                        {
                            console.log(key1);
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
            }
        );
    }

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
                        <button className = 'buybtn' code = {_this.state.code[index]}>Buy</button>
                    </div>
                );
            
            });
            $('.buybtn').on('click', function(){
                let id = $(this).attr('code');
                let val = $('#'+ id).val() == '' ? '0' : $('#'+ id).val();
                console.log(val);
            })
        }
        return(
            <form method = 'POST' action = 'http://localhost/shopping-cart/index.php'>
                <title>Simple shopping cart</title>
                <h1>
                    <b>Product catalog</b>
                </h1>
                {returned}
                {/* <button type = 'button' id ='test'>Alert</button>
                <button id = 'submit' type = 'submit' className="btn btn-primary btn-lg">Toi gio hang</button> */}
                <ShoppingCart />
            </form>
        );
    }
}
export default ProductCatalog;