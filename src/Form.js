import React from 'react';
import DataCheckBox from './DataCheckBox';
import DataRadioBox from './DataRadioBox';
import SubmitButton from './SubmitButton';
import Select from 'react-select';
import './Form.css';
import RadioInputGroup from './RadioInputGroup.js';
import RadioInput from './RadioInput.js';
import WorkingAbility from './WorkingAbility.js';
import ContactAndID from './ContactAndID.js';
import FormControlInput from './FormControlInput.js';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newUser : {
				picture : '',
				fullName : '',
				gender : '',
				dob : '',
				email : '',
				phone : '',
				userID : '',
				city : '',
				district : '',
				ward : '',
				road : '',
				major : '',
				college : ''
			},
			setAddress : 0,
			address : {
				'Tp.Hồ Chí Minh' : {
					'Quận 1' : ['Phường Bến Nghé', 'Phường Bến Thành'],
					'Quận 12' : ['Phường Tân Chánh Hiệp', 'Phường Tân Thới Hiệp', 'Phường Hiệp Thành']
				},
				'Tp.Cần Thơ' : {
					'Quận Ninh Kiều' : ['Phường Hưng Lợi', 'Phường An Cư'],
					'Quận Thốt Nốt' : ['Phường Thốt Nốt', 'Phường Thuận Hưng'],
					'Huyện Vĩnh Thạnh' : ['Xã Thạnh An', 'Xã Thạnh Lộc', 'Xã Thạnh Lợi']
				}
			},
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
			],


			maxDate : new Date()
			}
			this.getMaxDateFormat = this.getMaxDateFormat.bind(this);
			this.loadSelectOptions = this.loadSelectOptions.bind(this);
			this.checkAddressFormat = this.checkAddressFormat.bind(this);
			this.saveToState = this.saveToState.bind(this);
			}
 	getMaxDateFormat(){
		let dt = this.state.maxDate;
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
 		if (b == 'city' || b == 'district' || b =='ward')
 		{
 			if(b == 'city' && ((this.state.newUser.district === '' && this.state.setAddress === 0) || (this.state.setAddress >0)))
 			{
 				this.setState(prevState =>({
 					newUser : {
 						...prevState.newUser,
 						city : val,
 						district : '',
 						ward : ''
 					},
 					setAddress : prevState.setAddress + 1
 				}));
 			}
 			else if(b == 'district' && ((this.state.newUser.ward === '' && this.state.setAddress === 0)|| (this.state.setAddress > 0)))
 			{
 				this.setState(prevState =>({
 					newUser : {
 						...prevState.newUser,
 						district : val,
 						ward : ''
 					}
 				}));
 			}
 			else if(b== 'ward' && this.state.newUser.ward !== val)
 			{
 				this.setState(prevState => ({
 					newUser : {
 						...prevState.newUser,
 						ward : val
 					}
 				}));
 			}
 		}
 		else if ( b == 'college' || b == 'major')
 		{
 			((b == 'college')? this.setState(prevState => ({
 				newUser : {
 					...prevState.newUser,
 					college : val
 				}
 			})) : this.setState(prevState => ({
 				newUser : {
 					...prevState.newUser,
 					major : val
 				}
 			})));
 		}
 		else
 		{
 			console.log(this.state.newUser);
 			console.log(val + typeof(val));
 			console.log(b + typeof(b));
 			console.log('something went wrong');
 		}
 	}
 	saveToState(e){ //get the value onChange and setState accordingly.
 		let name = e.target.name;
 		let val = e.target.value;
 		this.setState(prevState=>({
 			newUser : {
 				...prevState.newUser,
 				[name] : val
 			}
 		}));
 	}

		render(){
			console.log(this.state.newUser);
			//this.getDataSource(this.state.address, 'city');
			return(
				<form>
					<div className = 'jumbotron text-left'>
						<h1>Phiếu ứng tuyển việc làm</h1>
					</div>
					<div className = 'container'>
						<div className = 'row'>
							<div className = 'col-lg-4'>
						    	<div className="input-group mb-3">
      								<div className="input-group-prepend">
        								<span className="input-group-text fa fa-camera"/>
     							 	</div>
      								<input type="file" className="form-control" placeholder="Username" id="userPic" name = 'picture' onChange = {e => this.saveToState(e)}/>
    							</div>
    						</div>
							<div className = 'col-lg-8'>
								<input placeholder="Họ tên" className='form-control' type='text' name = 'fullName' onChange = {e => this.saveToState(e)}/>
							</div>
						</div>
						<div className = 'row'>
							<div className = 'col'>
								<RadioInputGroup values = {['male', 'female']} name = 'gender' ids = {['male', 'female']} innerHtmls = {['Nam', 'Nữ']} onChange = {e => this.saveToState(e)}/>
							</div>
							<div className = 'col'>
								<label>
								Ngày sinh
								</label>
								<input type = 'date' className='form-control' max = {this.getMaxDateFormat()} name = 'dob' onChange = {e => this.saveToState(e)}/>
							</div>
						</div>
						<ContactAndID onChange = {e => this.saveToState(e)}/>
						<div className = 'text-center'>Địa chỉ liên hệ</div>
						<div className = 'row'>
							<div className = 'col'>
								<div className = 'text-center'>Tỉnh/TP</div>
								{this.loadSelectOptions(this.state.address, 'city')}
							</div>
							<div className = 'col'>
								<div className = 'text-center'>Quận/Huyện</div>
								{(this.state.newUser.city !=='')? this.loadSelectOptions(this.state.address[this.state.newUser.city], 'district') : this.loadSelectOptions({},'')}
							</div>
						</div>
						<div className = 'row'>
							<div className = 'col'>
								<div className = 'text-center'>Phường/Xã</div>
								{(this.state.newUser.city !=='' && this.state.newUser.district !== '')? this.loadSelectOptions(this.state.address[this.state.newUser.city][this.state.newUser.district], 'ward') : this.loadSelectOptions({},'')}
							</div>
							<div className = 'col'>
								<div className = 'text-center'>Số nhà - Đường</div>
								<input type = 'text' className = 'form-control' name ='road' onChange = {e => this.saveToState(e)} />
							</div>
						</div>
						<div>
							<textarea placeholder="Ghi chú thêm chỉ dẫn về địa chỉ" cols = '50' rows = '3' className = 'form-control' name = 'address-more-info' onChange = {e => this.saveToState(e)}/>
						</div>
						<div className = 'text-center'>Học vấn</div>
						<div className = 'row'>
							<div className = 'col'>
								{this.loadSelectOptions(this.state.majors,'major')}
							</div>
							<div className = 'col'>
								{this.loadSelectOptions(this.state.colleges, 'college')}
							</div>
						</div>
						<WorkingAbility onChange = {e => this.saveToState(e)}/>
						<DataCheckBox/>
						<DataRadioBox/>
					</div>
					<SubmitButton/>
				</form>
				);
 	}
}
export default Form;
//Input: an array of values, an array of ids, an array of innerHtmls, an onClick, a inputClass, a labelClass, a name