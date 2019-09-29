import React from 'react';
import FormControlInput from './FormControlInput.js';
class ContactANDID extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			dataSet : {
				contents : ['Email', 'Điện thoại', 'CMND/CCCD/Hộ chiếu'],
				types : ['email', 'tel', 'number'],
				names : ['email', 'phone', 'userID'],
				ids : ['emailHelp', 'telHelp', 'IDHelp'],
				innerHtmls : ['RTA sẽ gửi 1 email thông tin tài khoản ứng viên đến địa chỉ email bạn đã cung cấp ở đây. Vì vậy, bạn vui lòng sử dụng email thật khi đăng ký.', 'Vui lòng cung cấp SĐT thật vì bộ phận Tuyển dụng RTA sẽ liên hệ PV qua SĐT này.', 'Thông tin này sẽ được dùng làm tên đăng nhập (username) tài khoản ứng viên RTA.']
			}
		}
	}
	render()
	{
		let returned = [];
		let i;
		for ( i = 0 ; i < this.state.dataSet.types.length; i++)
		{
			returned.push(<FormControlInput content = {this.state.dataSet.contents[i]} type = {this.state.dataSet.types[i]} name = {this.state.dataSet.names[i]} onChange = {this.props.onChange} id = {this.state.dataSet.ids[i]} innerHtml = {this.state.dataSet.innerHtmls[i]}/>)
		}
		return(
			<>
			{returned}
			</>
			);
	}
}
export default ContactANDID;