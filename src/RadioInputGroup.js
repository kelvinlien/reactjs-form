import React from 'react';
import RadioInput from './RadioInput';
class RadioInputGroup extends React.Component
//Input: a number of how many Radio Input should be created, an array of values, an array of ids, an array of innerHtmls, an onClick, a inputClass, a labelClass, a name
//Usage: for radio section under education part and above data-experience part (radio-toolbar)
{
	// constructor(props)
	// {
	// 	super(props);
	// 	this.state = {
	// 		number : this.props.number //seed data to control how many Radio Input should be returned
	// 	};
	// }
	render() 
	{
		let i;
		let returned = [];
		for ( i = 0; i < this.props.number; i++)
		{
			returned.push(<RadioInput value = {this.props.values[i]} id = {this.props.ids[i]} innerHtml = {this.props.innerHtmls[i]} onClick = {this.props.onClick} inputClass = '' labelClass = '' name = {this.props.name}/>);
		}
		return(
			<div className = 'radio-toolbar' name = {this.props.name} onChange = {this.props.onChange}>
			{returned}
			</div>
			);
	}


}
export default RadioInputGroup;