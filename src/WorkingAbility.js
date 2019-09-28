import React from 'react';
import RadioInputGroup from './RadioInputGroup.js';
import RadioInput from './RadioInput.js';
class WorkingAbility extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			dataSet : {
				values : [['yes', 'no'], ['ft', 'pt'], ['home', 'rtahcm', 'rtahn'], ['yes', 'no'], ['onl', 'off'], ['fw-yes', 'fw-no'], ['bicycle', 'bike', 'bus', 'grab', 'walk', 'no-need'], ['none', 'normal', 'very'], ['android', 'iOS', 'wp', 'none'] ],
				ids : [['graduated', 'under-grad'],['ft', 'pt'],['home', 'rtahcm', 'rtahn'], ['ft-yes', 'ft-no'], ['onl', 'off'], ['fw-yes', 'fw-no'], ['bicycle', 'bike', 'bus', 'grab', 'walk', 'no-need'], ['spf-none', 'normal', 'very'], ['spos-android', 'spos-iOS', 'spos-wp', 'spos-none']],
				names : ['graduate', 'working-time', 'working-place', 'field-trip', 'working-online', 'field-work', 'transportation', 'sp-os', 'sp-fluency'],
				innerHtmls : [['Đã tốt nghiệp', 'Chưa tốt nghiệp'], ['Full-time', 'Part-time'], ['Chỉ có thể làm việc tại nhà', 'Có thể làm việc tại Chi nhánh RTA HCM', 'Có thể làm việc tại Chi nhánh RTA HAN'], ['Có thể đi công tác xa', 'Không thể đi công tác xa'], ['Có thể làm việc online', 'Không thể làm việc online'], ['Có thể làm việc tại thực địa', 'Không thể làm việc tại thực địa'], ['Xe đạp', 'xe máy', 'Xe buýt', 'Xe ôm', 'Đi bộ', 'Không có nhu cầu di chuyển'], ['Không biết', 'Bình thường', 'Rất thành thạo'], ['Android', 'iOS', 'Windows Phone (WP)', 'Chưa dùng'] ],
				contents : ['Kinh nghiệm', 'Thời gian làm việc', 'Địa điểm làm việc', 'Khả năng đi công tác xa', 'Khả năng làm việc online', 'Khả năng làm việc tại thực địa', 'Phương tiện di chuyển chủ yếu', 'Mức độ sử dụng thành thạo smartphone/tablet', 'Smartphone/tablet sử dụng nhiều nhất']
			}
		}
	}
	render()
	{
		let returned = [];
		let i;
		let lim = this.state.dataSet.names.length;
		for(i = 0; i < lim; i++)
		{
			returned.push(<RadioInputGroup values = {this.state.dataSet.values[i]} ids = {this.state.dataSet.ids[i]} name = {this.state.dataSet.names[i]} innerHtmls = {this.state.dataSet.innerHtmls[i]} content = {this.state.dataSet.contents[i]} onChange = {this.props.onChange}/>);
		}
		return(
			<>
			{returned}
			</>
			);
	}
}
export default WorkingAbility;