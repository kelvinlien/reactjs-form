import React from 'react';
import $ from 'jquery';
class ProductCatalog extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            image : ['iPhone11maxpro', 'Kindle'],
            name : ['iPhone 11 Max Pro', 'Amazon Kindle Paper White 201x'],
            price : ['1700', '100'],
            code : ['ip11','kpw']
        };
    }
    componentDidMount()
    {
        $('.addbtn').on('click', function(){    //onClick event for every addbtn
        $.post(
            {
                url : "http://localhost/shopping-cart/index.php",
                data : {
                    image : $('#' + $(this).attr("code")).attr('image'),
                    name : $('#' + $(this).attr("code")).attr('name'),
                    price : $('#' + $(this).attr("code")).attr('price'),
                    quantity : $('#' + $(this).attr("code")).val()
                }
            }
        )
        });
    }
    render()
    {
        let returned = [];
        let _this = this;
        this.state.image.forEach(function(element, index) {
            let imgPath = require("./product-images/" + element + ".jpg");
            console.log(imgPath);
            returned.push(
                <div className = 'container' key = {index}>
                    <img src = {imgPath} alt = {element} width = "auto" height = "200px"></img>
                    <p>{_this.state.name[index]}</p>
                    <p>{_this.state.price[index]}USD</p>
                    <input type = "number" className = 'quantity' id = {_this.state.code[index]} name = {_this.state.name[index]} image = {element} price = {_this.state.price[index]} ></input>
                    <button type = 'button' className = 'addbtn' code = {_this.state.code[index]}>Mua</button>
                </div>
            );
            
        });
        return(
            <form method = "post" action = "http://localhost/shopping-cart/index.php">
                <title>Simple shopping cart</title>
                <h1>
                    <b>Product catalog</b>
                </h1>
                {returned}
                <button type = 'submit' className="btn btn-primary btn-lg">Toi gio hang</button>
            </form>
        );
    }
}
export default ProductCatalog;