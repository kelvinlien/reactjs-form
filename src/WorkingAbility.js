import React from 'react';
import RadioInputGroup from './RadioInputGroup.js';
class WorkingAbility extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			graduate : '',
			working_time : '',
			working_place : '',
			field_trip : '',
			working_online : '',
			field_work : '',
			transportation : '',
			sp_fluency : '',
			sp_os : ''
		};
		this.dataSet = {
				values : [['yes', 'no'], ['ft', 'pt'], ['home', 'rtahcm', 'rtahn'], ['yes', 'no'], ['onl', 'off'], ['fw_yes', 'fw_no'], ['bicycle', 'bike', 'bus', 'grab', 'walk', 'no-need'], ['none', 'normal', 'very'], ['android', 'iOS', 'wp', 'none'] ],
				ids : [['graduated', 'under_grad'],['ft', 'pt'],['home', 'rtahcm', 'rtahn'], ['ft_yes', 'ft_no'], ['onl', 'off'], ['fw_yes', 'fw_no'], ['bicycle', 'bike', 'bus', 'grab', 'walk', 'no_need'], ['spf_none', 'normal', 'very'], ['spos_android', 'spos_iOS', 'spos_wp', 'spos_none']],
				names : ['graduate', 'working_time', 'working_place', 'field_trip', 'working_online', 'field_work', 'transportation', 'sp_fluency', 'sp_os'],
				innerHtmls : [['Đã tốt nghiệp', 'Chưa tốt nghiệp'], ['Full-time', 'Part-time'], ['Chỉ có thể làm việc tại nhà', 'Có thể làm việc tại Chi nhánh RTA HCM', 'Có thể làm việc tại Chi nhánh RTA HAN'], ['Có thể đi công tác xa', 'Không thể đi công tác xa'], ['Có thể làm việc online', 'Không thể làm việc online'], ['Có thể làm việc tại thực địa', 'Không thể làm việc tại thực địa'], ['Xe đạp', 'Xe máy', 'Xe buýt', 'Xe ôm', 'Đi bộ', 'Không có nhu cầu di chuyển'], ['Không biết', 'Bình thường', 'Rất thành thạo'], ['Android', 'iOS', 'Windows Phone (WP)', 'Chưa dùng'] ],
				contents : ['Kinh nghiệm', 'Thời gian làm việc', 'Địa điểm làm việc', 'Khả năng đi công tác xa', 'Khả năng làm việc online', 'Khả năng làm việc tại thực địa', 'Phương tiện di chuyển chủ yếu', 'Mức độ sử dụng thành thạo smartphone/tablet', 'Smartphone/tablet sử dụng nhiều nhất']
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
		let lim = this.dataSet.names.length;
		for(i = 0; i < lim; i++)
		{
			returned.push(<RadioInputGroup values = {this.dataSet.values[i]} ids = {this.dataSet.ids[i]} name = {this.dataSet.names[i]} innerHtmls = {this.dataSet.innerHtmls[i]} content = {this.dataSet.contents[i]} onChange = {e => this.saveToState(e)} key = {this.dataSet.ids[i]}/>);
		}
		return(
			<>
			{returned}
			</>
			);
	}
}
export default WorkingAbility;