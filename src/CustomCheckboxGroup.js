import React from 'react';
import CheckboxInput from './CheckboxInput.js';
class CustomCheckboxGroup extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		let returned = [];
		let i;
		for ( i = 0; i < this.props.ids.length; i++)
		{
			returned.push(
				<div className = "custom-control custom-checkbox" key = {this.props.ids[i]}>
				<CheckboxInput id = {this.props.ids[i]} name = {this.props.name} inputClass = 'custom-control-input' onClick = {this.props.onClick} labelClass = 'custom-control-label' innerHtml = {this.props.innerHtmls[i]} key = {this.props.ids[i]}/>
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
export default CustomCheckboxGroup;