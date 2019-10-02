import React from 'react';
import RadioInputGroup from './RadioInputGroup.js';
class GenderAndDob extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			gender : '',
			dob : ''
		};
		this.maxDate = new Date();
		this.saveToState = this.saveToState.bind(this);
		this.getMaxDateFormat = this.getMaxDateFormat.bind(this);
	} 	
	saveToState(e){ //get the value onChange and setState accordingly.
 		let name = e.target.name;
 		let val = e.target.value;
 		this.setState(()=>({
 				[name] : val
 		}));
 	}
 	getMaxDateFormat(){
		let dt = this.maxDate;
  		let mm = dt.getMonth() + 1;
  		let dd = dt.getDate();
  		let yyyy = dt.getFullYear();
  		 if(dd<10){
        	dd='0'+dd
    	} 
    	if(mm<10){
        	mm='0'+mm
    	} 
  			let format = yyyy + '-' + mm + '-' + dd
			return format;
 	}
	render()
	{
		console.log(this.state);
		return(		
			<div className = 'row'>
				<div className = 'col'>
					<RadioInputGroup values = {['male', 'female']} name = 'gender' ids = {['male', 'female']} innerHtmls = {['Nam', 'Nữ']} onChange = {e => this.saveToState(e)}/>
				</div>
				<div className = 'col'>
					<label>Ngày sinh</label>
					<input type = 'date' className='form-control' max = {this.getMaxDateFormat()} name = 'dob' onChange = {e => this.saveToState(e)}/>
				</div>
			</div>
			);
	}
}
export default GenderAndDob;
