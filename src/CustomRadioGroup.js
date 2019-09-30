import React from 'react';
import RadioInput from './RadioInput.js';
class CustomRadioInput extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		let i;
		let returned = [];
		for ( i = 0; i < this.props.ids.length; i++)
		{
			returned.push(
				<div className = "custom-control custom-radio" key = {this.props.ids[i]}>
				<RadioInput id = {this.props.ids[i]} name = {this.props.name} inputClass = 'custom-control-input' onClick = {this.props.onClick} labelClass = 'custom-control-label' innerHtml = {this.props.innerHtmls[i]} key = {this.props.ids[i]} />
				</div>
				);
		}
		return(
			<>
				{returned}
			</>
			);
	}
}
export default CustomRadioInput;