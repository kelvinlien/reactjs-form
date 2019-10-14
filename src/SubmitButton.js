import React from 'react';
class SubmitButton extends React.Component{
	render(){
		return(
		<div className = 'jumbotron text-center'>
			<input type ='submit' id='submit' className = "btn btn-success"  value = 'HOÀN THÀNH & GỬI'/>
		</div>
		)
	}
}
export default SubmitButton;