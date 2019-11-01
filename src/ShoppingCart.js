import React from 'react';
// import $ from 'jquery';
class ShoppingCart extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            isEmpty : this.props.cart.length === 0 ? true : false,
            cart : this.props.cart           //an array of products (objects) in cart
        }
        this.text = {
            quantity : '',
            subtotal : '',
            total : '',
            cartTitle : '',
            cartEmptyStatus : '',
            productName : '',
            price : ''
        }
        this.loadText = this.loadText.bind(this);
        this.loadText();
    }
    loadText()
    {
        let langJSON = require('./language/' + (this.props.language === 'en' ? 'En':'Vi') + '.json');        //condition to import the right language json.
        // let langJSON = require('./language/En.json');
        for (let key in this.text)
        {
            this.text[key] = langJSON[key];
        }
    }
    componentDidUpdate(prevProp)
    {
        if (prevProp.cart !== this.props.cart || prevProp.language !== this.props.language)
        {
            this.loadText();
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
            let _this = this;
            let sum = 0;
            this.state.cart.forEach(function(element,index) {
                sum += element['quantity'] * element['price'];
                let imgPath = require("./product-images/" + element['image'] + ".jpg");
                returned.push(
                    <div className = 'col' key = {index + 1}>
                        <img src = {imgPath} alt = {element['image']} width = "auto" height = "200px"></img>
                        <p>{_this.text.productName}: {element['name']}</p>
                        <p>{_this.text.price}: {element['price']}USD</p>
                        <p>{_this.text.quantity}: {element['quantity']}</p>
                        <p>{_this.text.subtotal}:
                            <input className = 'total' disabled value = {element['quantity'] * element['price']}></input> 
                        </p>
                    </div>
                );
            });
            returned.push(
                <div className = 'sum' key = {0}>
                    <p>{this.text.total}: {sum}USD</p>
                </div>
            );

        }
        else
        {
            returned = this.text.cartEmptyStatus;
        }
        return(
            <div>
                <h1 className = 'form-control'>
                    <b>{this.text.cartTitle}</b>
                </h1>
                <div>
                {returned}
                </div>
            </div>
        );
    }
}
export default ShoppingCart;