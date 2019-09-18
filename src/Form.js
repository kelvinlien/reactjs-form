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
					<div>Kinh nghiệm </div>
					<select className = 'graduated'>
						<option value = 'ctn'>Chưa tốt nghiệp</option>
						<option value = 'dtn'>Đã tốt nghiệp</option>
					</select>
					<div>Thời gian làm việc</div>
					<select className = 'working-time'>
						<option value = 'ft'>Có thể làm full-time</option>
						<option value = 'pt'>Có thể làm part-time</option>
					</select>
					<div>Địa điểm làm việc</div>
					<select className = 'workplace'>
						<option value = 'home'>Chỉ có thể làm việc tại nhà</option>
						<option value = 'hcm'>Có thể làm việc tại Chi nhánh RTA HCM</option>
						<option value = 'hn'>Có thể làm việc tại Chi nhánh RTA HAN</option>
					</select>
					<div>Khả năng đi công tác xa?</div>
					<select className = 'travel'>
						<option value = 'y'>Có thể đi công tác xa</option>
						<option value = 'n'>Không thể đi công tác xa</option>
					</select>
					<div>Khả năng làm việc online</div>
					<select className = 'online'>
						<option value = 'y'>Có thể làm việc online</option>
						<option value = 'n'>Không thể làm việc online</option>
					</select>
					<div>Khả năng làm việc tại thực địa</div>
					<select className = 'field-work'>
						<option value = 'y'>Có thể làm việc tại thực địa</option>
						<option value = 'n'>Không thể làm việc tại thực địa</option>
					</select>
					<div>Phương tiện di chuyển chủ yếu</div>
					<select className = 'transport'>
						<option value = 'bicycle'>Xe đạp</option>
						<option value = 'bike'>Xe máy</option>
						<option value = 'bus'>Xe buýt</option>
						<option value = 'grab'>Xe ôm</option>
						<option value = 'walk'>Đi bộ</option>
						<option value = 'no-need'>Không có nhu cầu di chuyển</option>
					</select>
					<div>Mức độ sử dụng thành thạo smartphone/tablet</div>
					<select className = 'sm-fluency'>
						<option value = 'no'>Không biết</option>
						<option value = 'normal'>Bình thường</option>
						<option value = 'very'>Rất thành thạo</option>
					</select>
					<div>Smartphone/tablet sử dụng nhiều nhất</div>
					<select className = 'sm-os'>
						<option value = 'android'>Android</option>
						<option value = 'iOS'>iOS</option>
						<option value = 'WP'>Windows Phone (WP)</option>
						<option value = 'no'>Chưa dùng</option>
					</select>
				</form>
				);
	}
}
export default Form;