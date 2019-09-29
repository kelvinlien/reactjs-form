import React from 'react';
class FormControlInput extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(
			<>
				<div>{this.props.content}</div>
				<input type = {this.props.type} className = 'form-control' name = {this.props.name} onChange = {this.props.onChange}/>
				<small id = {this.props.id} className="form-text text-muted">{this.props.innerHtml}</small> 
			</>
			);
	}
}
export default FormControlInput;