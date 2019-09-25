import React from 'react';
import DataCheckBox from './DataCheckBox';
import DataRadioBox from './DataRadioBox';
import SubmitButton from './SubmitButton';
import Select from 'react-select';
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
				ward : ''
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


			maxDate : new Date()
			}
			this.getMaxDateFormat = this.getMaxDateFormat.bind(this);
			this.loadSelectOptions = this.loadSelectOptions.bind(this);
			this.checkAddressFormat = this.checkAddressFormat.bind(this);

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
 			console.log('wards incoming');
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
	 	let c = this.state.newUser.district;
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
 		else
 		{
 			console.log(this.state.newUser);
 			console.log(val + typeof(val));
 			console.log('something went wrong');
 		}
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
							<div className = 'col-lg-3'>
						    	<div className="input-group mb-3">
      								<div className="input-group-prepend">
        								<span className="input-group-text fa fa-camera"/>
     							 	</div>
      								<input type="file" className="form-control" placeholder="Username" id="userPic" value = {this.state.newUser.picture}/>
    							</div>
    						</div>
							<div className = 'col-lg-9'>
								<input placeholder="Họ tên" className='form-control' type='text' value={this.state.newUser.fullName}/>
							</div>
						</div>
						<div className = 'row'>
							<div className = 'col'>
								<div className = 'btn-group btn-group-lg' >
									<button type="button" className="btn btn-light" value = 'nam'>Nam</button>
									<button type="button" className="btn btn-light" value = 'nu'>Nữ</button>
								</div>
							</div>
							<div className = 'col'>
								<label>
								Ngày sinh
								</label>
								<input type = 'date' className='form-control' value = {this.state.dob} max = {this.getMaxDateFormat()} />
							</div>
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
								<input type = 'text' className = 'form-control' />
							</div>
						</div>
						<div>
							<textarea placeholder="Ghi chú thêm chỉ dẫn về địa chỉ" cols = '50' rows = '3' className = 'form-control'/>
						</div>
						<div className = 'text-center'>Học vấn</div>
						<div className = 'row'>
							<div className = 'col'>
								<select className = 'custom-select'>
									<option value = 'tn'>Thanh nhạc</option>
									<option value = 'khmt'>Khoa học máy tính</option>
									<option value = 'ktpm'>Kỹ thuật phần mềm</option>
								</select>
							</div>
							<div className = 'col'>
								<select className = 'custom-select'>
									<option value = 'uit'>Đại học Công nghệ thông tin - ĐHQG TPHCM</option>
									<option value = 'bku'>Đại học Bách Khoa TPHCM</option>
									<option value = 'nvhcm'>Nhạc Viện TPHCM</option>
								</select>
							</div>
						</div>
						<div>Kinh nghiệm </div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'chuatn'>Chưa tốt nghiệp</button>
							<button type="button" className="btn btn-light" value = 'datn'>Đã tốt nghiệp</button>
						</div>
						<div>Thời gian làm việc</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'ft'>Có thể làm full-time</button>
							<button type="button" className="btn btn-light" value = 'pt'>Có thể làm part-time</button>
						</div>
						<div>Địa điểm làm việc</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'home'>Chỉ có thể làm việc tại nhà</button>
							<button type="button" className="btn btn-light" value = 'hcm'>Có thể làm việc tại Chi nhánh RTA HCM</button>
							<button type='button' className='btn btn-light' value ='hn'>Có thể làm việc tại Chi nhánh RTA HAN</button>
						</div>
						<div>Khả năng đi công tác xa?</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'y'>Có thể đi công tác xa</button>
							<button type="button" className="btn btn-light" value = 'n'>Không thể đi công tác xa</button>
						</div>
						<div>Khả năng làm việc online</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'online'>Có thể làm việc online</button>
							<button type="button" className="btn btn-light" value = 'offline'>Không thể làm việc online</button>
						</div>
						<div>Khả năng làm việc tại thực địa</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'yfield-work'>Có thể làm việc tại thực địa</button>
							<button type="button" className="btn btn-light" value = 'nfield-work'>Không thể làm việc tại thực địa</button>
						</div>
						<div>Phương tiện di chuyển chủ yếu</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'bicycle'>Xe đạp</button>
							<button type="button" className="btn btn-light" value = 'bike'>Xe máy</button>
							<button type="button" className="btn btn-light" value = 'bus'>Xe buýt</button>
							<button type="button" className="btn btn-light" value = 'grab'>Xe ôm</button>
							<button type="button" className="btn btn-light" value = 'walk'>Đi bộ</button>
							<button type="button" className="btn btn-light" value = 'no-transport'>Không có nhu cầu di chuyển</button>
						</div>
						<div>Mức độ sử dụng thành thạo smartphone/tablet</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'no_fluency'>Không biết</button>
							<button type="button" className="btn btn-light" value = 'normal_fluency'>Bình thường</button>
							<button type="button" className="btn btn-light" value = 'high_fluency'>Rất thành thạo</button>
						</div>
						<div>Smartphone/tablet sử dụng nhiều nhất</div>
						<div className = 'btn-group btn-group-xs'>
							<button type="button" className="btn btn-light" value = 'android'>Android</button>
							<button type="button" className="btn btn-light" value = 'ios'>iOS</button>
							<button type="button" className="btn btn-light" value = 'wp'>Windows Phone (WP)</button>
							<button type="button" className="btn btn-light" value = 'no_os'>Chưa dùng</button>
						</div>
						<DataCheckBox/>
						<DataRadioBox/>
						<SubmitButton/>
					</div>
				</form>
				);
 	}
}
export default Form;