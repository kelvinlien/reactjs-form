import React from 'react';
import Select from 'react-select';
class EducationSelectGroup extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			major : '',
			college : ''
		};
		this.dataSet = {
			majors : [
				'Thanh nhạc',
				'Khoa học máy tính',
				'Toán - Tin',
				'Kỹ thuật phần mềm',
				'Hệ thống thông tin',
				'Cơ điện tử'
			],
			colleges : [
				'Đại học Bách Khoa TPHCM',
				'Đại học Khoa học Tự nhiên TPHCM',
				'Đại học Công nghệ thông tin - ĐHQG TPHCM',
				'Nhạc viện TPHCM',
				'Đại học Công nghiệp TPHCM'
			]
		};
	this.loadSelectOptions = this.loadSelectOptions.bind(this);
	this.checkAddressFormat = this.checkAddressFormat.bind(this);
	}
	loadSelectOptions(a, b){//load the select options according to the prior choice in the address hierarchy. Input a is an object or array of addresses to load into select options, b is the position of that selection in the address hierarchy.
 		let options = [];
 		if (Array.isArray(a))
 		{
 			a.forEach( function(element, index) {
 				let obj = {value : element, label : element, id : b};
 				options.push(obj);
 			});
 		}
 		else
 		{
 			for(let key in a)
 			{
 				let obj = {value : key, label : key, id : b};
 				options.push(obj);
 			}
 		}
 		return <Select options = {options} onChange = {(selectedOption) => this.checkAddressFormat(selectedOption)}/>
 	}
 	checkAddressFormat(selectedOption){//onChange function, setState and assign address value for newUser.
 		let val = selectedOption.value;
 		let b = selectedOption.id;
 		if ( b === 'college' || b === 'major')
 		{
 			((b === 'college')? this.setState(() => ({
 					college : val
 			})) : this.setState(() => ({
 					major : val
 			})));
 		}
 		else
 		{
 			console.log(val + typeof(val));
 			console.log(b + typeof(b));
 			console.log('something went wrong');
 		}
 	}
	render()
	{
		console.log(this.state);
		return(
			<>
				<div className = 'text-center'>Học vấn</div>
				<div className = 'row'>
					<div className = 'col'>
						{this.loadSelectOptions(this.dataSet.majors,'major')}
					</div>
					<div className = 'col'>
						{this.loadSelectOptions(this.dataSet.colleges, 'college')}
					</div>
				</div>
			</>
			);
	}
}
export default EducationSelectGroup;