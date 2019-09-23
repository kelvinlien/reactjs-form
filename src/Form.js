import React from 'react';
import DataCheckBox from './DataCheckBox';
import DataRadioBox from './DataRadioBox';
import SubmitButton from './SubmitButton';
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
			},

			maxDate : new Date()
			}
			this.getMaxDateFormat = this.getMaxDateFormat.bind(this);

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
			console.log('format: ' + format);
			return format;
 	}
		render(){
			console.log('date time: ' + this.state.maxDate.toLocaleDateString());
			return(
				<form>
					<h1>Phiếu ứng tuyển việc làm</h1>
					<div className = 'form-group row'>
						<div className = 'col-xs-6'>
							<span>Ảnh
								<input className="form-control" value={this.state.picture} type = 'file' id='userPic'/>
							</span>
						</div>
						<div className = 'col-xs-6'>
							<input placeholder="Họ tên" className='form-control' type='text' value={this.state.fullName}/>
						</div>
					</div>
					<div >
						<span className = 'btn-group btn-group-xs' >
							<button type="button" className="btn btn-light" size value = 'nam'>Nam</button>
							<button type="button" className="btn btn-light" value = 'nu'>Nữ</button>
						</span>
						<span>
							<label>
							Ngày sinh
							</label>
							<input type = 'date' className='dob' value = {this.state.dob} max = {this.getMaxDateFormat()} />
						</span>
					</div>
					<div>Email</div>
					<input type = 'email' className = 'form-control' value = {this.state.email}/>
					<small id="emailHelp" className="form-text text-muted">RTA sẽ gửi 1 email thông tin tài khoản ứng viên đến địa chỉ email bạn đã cung cấp ở đây. Vì vậy, bạn vui lòng sử dụng email thật khi đăng ký.</small>
					<div>Điện thoại</div>
					<input type = 'tel' className = 'form-control' value = {this.state.phone}/>
					<small id="emailHelp" className="form-text text-muted">Vui lòng cung cấp SĐT thật vì bộ phận Tuyển dụng RTA sẽ liên hệ PV qua SĐT này.</small>
					<div>CMND/CCCD/Hộ chiếu</div>
					<input type = 'number' className = 'form-control' value = {this.state.userID}/>
					<small id="emailHelp" className="form-text text-muted">Thông tin này sẽ được dùng làm tên đăng nhập (username) tài khoản ứng viên RTA.</small>
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
						<textarea placeholder="Ghi chú thêm chỉ dẫn về địa chỉ" cols = '50' rows = '3' className = 'form-control'/>
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
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'chuatn'>Chưa tốt nghiệp</button>
							<button type="button" className="btn btn-light" value = 'datn'>Đã tốt nghiệp</button>
						</div>
					<div>Thời gian làm việc</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'ft'>Có thể làm full-time</button>
							<button type="button" className="btn btn-light" value = 'pt'>Có thể làm part-time</button>
						</div>
					<div>Địa điểm làm việc</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'home'>Chỉ có thể làm việc tại nhà</button>
							<button type="button" className="btn btn-light" value = 'hcm'>Có thể làm việc tại Chi nhánh RTA HCM</button>
							<button type='button' className='btn btn-light' value ='hn'>Có thể làm việc tại Chi nhánh RTA HAN</button>
						</div>
					<div>Khả năng đi công tác xa?</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'y'>Có thể đi công tác xa</button>
							<button type="button" className="btn btn-light" value = 'n'>Không thể đi công tác xa</button>
						</div>
						<div>Khả năng làm việc online</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'online'>Có thể làm việc online</button>
							<button type="button" className="btn btn-light" value = 'offline'>Không thể làm việc online</button>
						</div>
					<div>Khả năng làm việc tại thực địa</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'yfield-work'>Có thể làm việc tại thực địa</button>
							<button type="button" className="btn btn-light" value = 'nfield-work'>Không thể làm việc tại thực địa</button>
						</div>
					<div>Phương tiện di chuyển chủ yếu</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'bicycle'>Xe đạp</button>
							<button type="button" className="btn btn-light" value = 'bike'>Xe máy</button>
							<button type="button" className="btn btn-light" size value = 'bus'>Xe buýt</button>
							<button type="button" className="btn btn-light" value = 'grab'>Xe ôm</button>
							<button type="button" className="btn btn-light" size value = 'walk'>Đi bộ</button>
							<button type="button" className="btn btn-light" value = 'no-transport'>Không có nhu cầu di chuyển</button>
						</div>
					<div>Mức độ sử dụng thành thạo smartphone/tablet</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'no_fluency'>Không biết</button>
							<button type="button" className="btn btn-light" value = 'normal_fluency'>Bình thường</button>
							<button type="button" className="btn btn-light" value = 'high_fluency'>Rất thành thạo</button>
						</div>
					<div>Smartphone/tablet sử dụng nhiều nhất</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" size value = 'android'>Android</button>
							<button type="button" className="btn btn-light" value = 'ios'>iOS</button>
							<button type="button" className="btn btn-light" size value = 'wp'>Windows Phone (WP)</button>
							<button type="button" className="btn btn-light" value = 'no_os'>Chưa dùng</button>
						</div>
					<DataCheckBox/>
					<DataRadioBox/>
					<SubmitButton/>
				</form>
				);
 	}
}
export default Form;