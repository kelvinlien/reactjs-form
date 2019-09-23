import React from 'react';
class SubmitButton extends React.Component{
	constructor(props)
	{
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
	}
	submitHandler(e){
		e.preventDefault();
	}
	render(){
		return(
		<input type ='submit' id='submit' className = 'submit' onClick = {e => this.submitHandler(e)} value = 'HOÀNH THÀNH & GỬI'/>
		)
	}
}
export default SubmitButton;