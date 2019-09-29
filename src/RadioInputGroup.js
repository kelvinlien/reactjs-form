import React from 'react';
import RadioInput from './RadioInput';
class RadioInputGroup extends React.Component
//Input: an array of values, an array of ids, an array of innerHtmls, an onClick, a inputClass, a labelClass, a name
//Usage: for radio section under education part and above data-experience part (radio-toolbar)
{
	constructor(props)
	{
		super(props);
		this.dummyFunction = this.dummyFunction.bind(this);
	}
	dummyFunction()
 	{
 		//doing nothing
 	}
	render() 
	{
		let i;
		let returned = [];
		for ( i = 0; i < this.props.values.length; i++)
		{
			returned.push(<RadioInput value = {this.props.values[i]} id = {this.props.ids[i]} innerHtml = {this.props.innerHtmls[i]} onClick = {this.dummyFunction} inputClass = '' labelClass = '' name = {this.props.name}/>);
		}
		return(
			<>
			{
				this.props.content !== '' &&
				<div>{this.props.content}</div>
			}
				<div className = 'radio-toolbar' name = {this.props.name} onChange = {this.props.onChange}>
					{returned}
				</div>
			</>
			);
	}


}
export default RadioInputGroup;