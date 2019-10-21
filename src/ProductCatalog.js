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
            code : ['ip11','kpw'],
            quantity : [0, 0]
        };
    }

    // componentDidMount()
    // {
    //     $('#test').on('click', function(){
    //         $.post({
    //             url : 'http://localhost/react/test.php',
    //             data : {
    //                 'bar' : 1
    //             },
    //             success : function(response)
    //             {
    //                 alert(response);
    //             }
    //         })
    //     });
    // }
    // componentDidMount()
    // {
    //     let _this = this;
    //     $('.addbtn').on('click', function(){    //onClick event for every addbtn
    //         let updatedQuantity = _this.state.quantity;
    //         updatedQuantity[$(this).data('key')] += parseInt($('#' + $(this).attr('code')).val());
    //         console.log($(this).data('key'));
    //         console.log(updatedQuantity);
    //         _this.setState(() => ({
    //                 quantity : updatedQuantity
    //             })
    //         );
    //     });
    //     $('#submit').on('click', function(){
    //         $.post(
    //             {
    //                 type : 'POST',
    //                 url : "http://localhost/shopping-cart/index.php",
    //                 data : {
    //                     image : $('#' + $(this).attr("code")).attr('image'),
    //                     name : $('#' + $(this).attr("code")).attr('name'),
    //                     price : $('#' + $(this).attr("code")).attr('price'),
    //                     quantity : _this.state.quantity[$(this).attr('key')]
    //                 }
    //             }
	// 		);
    //         window.location.href='http://localhost/shopping-cart/index.php';
    //     });
	// }
	
	//uncomment the code above and add this button above the </div> in returned.push()
	//<button type = 'button' className = 'addbtn' code = {_this.state.code[index]} data-key = {index}>Mua</button>

    render()
    {
        let returned = [];
        let _this = this;
        this.state.image.forEach(function(element, index) {
            let imgPath = require("./product-images/" + element + ".jpg");
            returned.push(
                <div className = 'container' key = {index}>
                    <img src = {imgPath} alt = {element} width = "auto" height = "200px"></img>
                    <p>{_this.state.name[index]}</p>
                    <p>{_this.state.price[index]}USD</p>
                    <input type = "number" className = 'quantity' id = {_this.state.code[index]} name = {_this.state.code[index]} image = {element} price = {_this.state.price[index]} ></input>
                </div>
            );
            
        });
        return(
            <form method = 'POST' action = 'http://localhost/shopping-cart/index.php'>
                <title>Simple shopping cart</title>
                <h1>
                    <b>Product catalog</b>
                </h1>
                {returned}
                {/* <button type = 'button' id ='test'>Alert</button> */}
                <button id = 'submit' type = 'submit' className="btn btn-primary btn-lg">Toi gio hang</button>
            </form>
        );
    }
}
export default ProductCatalog;