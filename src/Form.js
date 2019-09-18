import React from 'react';
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
				userID : ''
			}

			}

			}
		render(){
			return(
				<form>
				<h1>Phiếu ứng tuyển việc làm</h1>
				<span>Ảnh
				<button className="UserPic" value={this.state.picture}>
				<i class="fas fa-camera"></i>
				</button>
				</span>
				<input placeholder="Họ tên" className='fullname' type='text'/>
				<div>
				<span>
				<select className='gender' value={this.state.gender}>
					<option value = '0'>Nam</option>
					<option value = '1'>Nữ</option>
				</select>
				<label>
				Ngày sinh
				</label>
				<input type = 'date' className='dob' />
				</span>
				</div>
				</form>
				)
	}
}
export default Form;