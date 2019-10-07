import React from 'react';
import Select from 'react-select';
class AddressSelectGroup extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			city : '',
			district : '',
			ward : '',
			road : '',
			address_more_info : ''
		};
		this.setAddress = 0;
		this.dataSet = {
			'Tp.Hồ Chí Minh' : {
				'Quận 1' : ['Phường Bến Nghé', 'Phường Bến Thành'],
				'Quận 12' : ['Phường Tân Chánh Hiệp', 'Phường Tân Thới Hiệp', 'Phường Hiệp Thành']
			},
			'Tp.Cần Thơ' : {
				'Quận Ninh Kiều' : ['Phường Hưng Lợi', 'Phường An Cư'],
				'Quận Thốt Nốt' : ['Phường Thốt Nốt', 'Phường Thuận Hưng'],
				'Huyện Vĩnh Thạnh' : ['Xã Thạnh An', 'Xã Thạnh Lộc', 'Xã Thạnh Lợi']
			}
		};
		this.loadSelectOptions = this.loadSelectOptions.bind(this);
		this.checkAddressFormat = this.checkAddressFormat.bind(this);
		this.saveToState = this.saveToState.bind(this);
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
 			if(b === 'city' && ((this.state.district === '' && this.setAddress === 0) || (this.setAddress >0)))
 			{
 				this.setState(() =>({
 						city : val,
 						district : '',
 						ward : ''
 					}));
 				this.setAddress += 1;
 			}
 			else if(b === 'district' && ((this.state.ward === '' && this.setAddress === 0)|| (this.setAddress > 0)))
 			{
 				this.setState(() =>({
 						district : val,
 						ward : ''
 				}));
 			}
 			else if(b=== 'ward' && this.state.ward !== val)
 			{
 				this.setState(() => ({
 						ward : val
 				}));
 			}
 			else
 			{
 				console.log(val + typeof(val));
 				console.log(b + typeof(b));
 				console.log('something went wrong');
 			}
 		}
 	saveToState(e){ //get the value onChange and setState accordingly.
 		let name = e.target.name;
 		let val = e.target.value;
 		this.setState(()=>({
 				[name] : val
 		}));
 	}
	render()
	{
		console.log(this.state);
		return(
			<>
				<div className = 'text-center'>Địa chỉ liên hệ</div>
				<div className = 'row'>
					<div className = 'col'>
						<div className = 'text-center'>Tỉnh/TP</div>
						{this.loadSelectOptions(this.dataSet, 'city')}
					</div>
					<div className = 'col'>
						<div className = 'text-center'>Quận/Huyện</div>
						{(this.state.city !=='')? this.loadSelectOptions(this.dataSet[this.state.city], 'district') : this.loadSelectOptions({},'')}						
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col'>
						<div className = 'text-center'>Phường/Xã</div>
						{(this.state.city !=='' && this.state.district !== '')? this.loadSelectOptions(this.dataSet[this.state.city][this.state.district], 'ward') : this.loadSelectOptions({},'')}
					</div>
					<div className = 'col'>
						<div className = 'text-center'>Số nhà - Đường</div>
						<input type = 'text' className = 'form-control' name ='road' onChange = {this.saveToState} value={this.state.road}/>
					</div>
				</div>
				<div>
					<textarea cols = '50' rows = '3' placeholder = 'Ghi chú thêm chỉ dẫn về địa chỉ' className = 'form-control' name = 'address_more_info' onChange = {this.saveToState} value = {this.state.address_more_info}/>
				</div>
			</>
			);
	}
}
export default AddressSelectGroup;