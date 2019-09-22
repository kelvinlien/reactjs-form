import React from 'react';
import './DataCheckBox.css';
class DataCheckBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			experienced : false,
			experiences : 0
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.getExperiences = this.getExperiences.bind(this);
	}
	debugger()
	{
		console.log(this.state.experienced);
		console.log(this.state.experiences);
	}
	getExperiences()
	{
		return this.state.experiences;
	}
	changeHandler(e){
		let isChecked = e.target.checked;
		console.log('checked state: '+ isChecked);
		if (isChecked)
		{
			this.setState((state)=>({
				experienced: true,
				experiences : state.experiences += 1
			}));
		}
		else
		{
			this.setState(state => ({
				experienced : true,
				experiences : state.experiences += -1
 			}));
			if(this.getExperiences() === 0)
			{
				this.setState(state => ({
					experienced : false
				}));
			}
		}
		this.debugger();
	}
	render(){
		return(
		<form id='DataCheckBox'>
			<label for ='DataCheckBox'>Kinh nghiệm về dữ liệu</label>
			<div>
				<input type = 'checkbox' className = 'interviewer' id = 'interviewer' onChange={e => this.changeHandler(e)}/>
				<label for = 'interviewer'>Đã từng làm điều tra viên/phỏng vấn viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'supervisor' id='supervisor' onChange={e => this.changeHandler(e)}/>
				<label for='supervisor'>Đã từng làm giám sát viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'tester' id ='tester'/>
				<label for='tester'>Đã từng kiểm thử (test) bảng hỏi, góp ý/đề xuất điều chỉnh nội dung bảng hỏi giấy</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'statistic' id='statistic'/>
				<label for='statistic'>Đã từng nhập liệu sử dụng các phần mềm thống kê (Excel/SPSS/Stata/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'analytic' id='analytic'/>
				<label for='analytic'>Đã từng phân tích dữ liệu sử dụng các công cụ phân tích (Excel/Stata/R/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'none' id='none'/>
				<label for='none'>Chưa có kinh nghiệm nào.</label>
			</div>
				<label className = 'more-info' for ='more-info'>Mô tả thêm về kinh nghiệm, kỹ năng liên quan đến dữ liệu.</label>
			<div>
				<textarea className = 'more-info' rows = '4' cols = '60' id = 'more-info' />
			</div>


		</form>
		);
	}
}export default DataCheckBox;