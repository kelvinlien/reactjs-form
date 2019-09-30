import React from 'react';
import FormControlInput from './FormControlInput.js';
class ContactANDID extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			email : '',
			phone : '',
			number : ''
		}
		this.dataSet = {
				contents : ['Email', 'Điện thoại', 'CMND/CCCD/Hộ chiếu'],
				types : ['email', 'tel', 'number'],
				names : ['email', 'phone', 'userID'],
				ids : ['emailHelp', 'telHelp', 'IDHelp'],
				innerHtmls : ['RTA sẽ gửi 1 email thông tin tài khoản ứng viên đến địa chỉ email bạn đã cung cấp ở đây. Vì vậy, bạn vui lòng sử dụng email thật khi đăng ký.', 'Vui lòng cung cấp SĐT thật vì bộ phận Tuyển dụng RTA sẽ liên hệ PV qua SĐT này.', 'Thông tin này sẽ được dùng làm tên đăng nhập (username) tài khoản ứng viên RTA.']
			};
		this.saveToState = this.saveToState.bind(this);
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
		let returned = [];
		let i;
		for ( i = 0 ; i < this.dataSet.types.length; i++)
		{
			returned.push(<FormControlInput content = {this.dataSet.contents[i]} type = {this.dataSet.types[i]} name = {this.dataSet.names[i]} onChange = {e => this.saveToState(e)} id = {this.dataSet.ids[i]} innerHtml = {this.dataSet.innerHtmls[i]} key = {this.dataSet.ids[i]}/>)
		}
		return(
			<>
			{returned}
			</>
			);
	}
}
export default ContactANDID;