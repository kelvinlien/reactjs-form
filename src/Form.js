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
						<input className="UserPic" value={this.state.picture} type = 'file' id='userPic'/>
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
					<div>Email</div>
					<input type = 'email' className = 'email' />
					<div>Điện thoại</div>
					<input type = 'tel' className = 'phone' />
				</form>
				);
	}
}
export default Form;