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
					<input placeholder="Họ tên" className='fullname' type='text' value={this.state.fullName}/>
					<div>
						<span>
							<select className='gender' value={this.state.gender}>
								<option value = '0'>Nam</option>
								<option value = '1'>Nữ</option>
							</select>
							<label>
							Ngày sinh
							</label>
							<input type = 'date' className='dob' value = {this.state.dob} max = '2019-09-18' />
						</span>
					</div>
					<div>Email</div>
					<input type = 'email' className = 'email' value = {this.state.email}/>
					<div>Điện thoại</div>
					<input type = 'tel' className = 'phone' value = {this.state.phone}/>
					<div>CMND/CCCD/Hộ chiếu</div>
					<input type = 'number' className = 'userID' value = {this.state.userID}/>
					<div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Địa chỉ liên hệ</div>
					<div>Tỉnh/TP &emsp; &emsp; &emsp; &emsp; &emsp; Quận/Huyện</div>
					<span>
						<select className='city'>
							<option value = 'hcm'>Tp.Hồ Chí Minh</option>
							<option value = 'hn'>Tp.Hà Nội</option>
							<option value = 'ct'>Tp.Cần Thơ</option>
						</select>
						<span>&emsp;&emsp;&emsp;</span>
						<select className='district' >
							<option value = 'q1'>Quận 1</option>
							<option value = 'q12'>Quận 12</option>
							<option value = 'q3'>Quận 3</option>
						</select>
					</span>
					<div>Phường/Xã &emsp;&emsp;&emsp;&emsp;&emsp; Số nhà - Đường </div>
					<span>
						<select className = 'ward'>
							<option value = 'dk'>Phường Đa Kao</option>
							<option value = 'tch'>Phường Tân Chánh Hiệp</option>
						</select>
						<input type = 'text' className = 'street' />
					</span>
					<div>
						<textarea placeholder="Ghi chú thêm chỉ dẫn về địa chỉ" cols = '50' rows = '3' />
					</div>
					<div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Học vấn</div>
					<span>
						<select className = 'major'>
							<option value = 'tn'>Thanh nhạc</option>
							<option value = 'khmt'>Khoa học máy tính</option>
							<option value = 'ktpm'>Kỹ thuật phần mềm</option>
						</select>
						<select className = 'college'>
							<option value = 'uit'>Đại học Công nghệ thông tin - ĐHQG TPHCM</option>
							<option value = 'bku'>Đại học Bách Khoa TPHCM</option>
							<option value = 'nvhcm'>Nhạc Viện TPHCM</option>
						</select>
					</span>

				</form>
				);
	}
}
export default Form;