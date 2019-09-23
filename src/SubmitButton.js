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
		<input type ='submit' id='submit' className = "btn btn-success" onClick = {e => this.submitHandler(e)} value = 'HOÀN THÀNH & GỬI'/>
		)
	}
}
export default SubmitButton;