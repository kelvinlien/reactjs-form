import React from 'react';
import CustomCheckboxGroup from './CustomCheckboxGroup.js';
class DataCheckBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			experienced : false,
			experiences : 0,
			none_checkstate : false,
			data_experience : []
		};
		this.dataSet = {
				ids : ['interviewer', 'supervisor', 'tester', 'statistic', 'analytic', 'none-exp'],
				name : 'data_experience',
				innerHtmls : ['Đã từng làm điều tra viên/phỏng vấn viên', 'Đã từng làm giám sát viên', 'Đã từng kiểm thử (test) bảng hỏi, góp ý/đề xuất điều chỉnh nội dung bảng hỏi giấy', 'Đã từng nhập liệu sử dụng các phần mềm thống kê (Excel/SPSS/Stata/…)', 'Đã từng phân tích dữ liệu sử dụng các công cụ phân tích (Excel/Stata/R/…)', 'Chưa có kinh nghiệm nào']
	};
		this.changeHandler = this.changeHandler.bind(this);
	}
	debugger()
	{
		console.log(this.state.experienced);
		console.log(this.state.experiences);
	}
	changeHandler(e){
		let isChecked = e.target.checked;
		let id = e.target.id;
		if(id !== 'none-exp')
		{
			if(isChecked)
			{
				this.setState((state)=>({
					experienced : true,
					experiences : state.experiences += 1
				}));
			}
			else
			{
				if(this.state.experiences === 1)
				{
					this.setState(() => ({
						experienced : false
					}));
				}
				this.setState(state => ({
				experiences : state.experiences += -1
 				}));
			}
			if(this.state.none_checkstate === true)
			{
				this.setState(() => ({
					experienced : false
				}));
			}
		}
		else
		{
			if(isChecked)
			{
				this.setState(() => ({
					experienced : false,
					none_checkstate : true
				}));
			}
			else
			{
				if(this.state.experiences === 0)
				{
					this.setState(() => ({
						experienced : false,
						none_checkstate : false
					}));
				}
				else
				{
					this.setState(() =>({
						experienced : true,
						none_checkstate : false
					}));
				}
			}
		}
		let name = e.target.name;
 		let val = e.target.value;
 		let checked = e.target.checked;
 		let arr = this.state.data_experience;
 		if (checked)
 		{
 			arr.push(id);
 		}
 		else
 		{
 			let index = arr.indexOf(id);
 			if(index > -1)
 			{
 				arr.splice(index, 1);
 			}
 		}
 		this.setState(()=>({
 		data_experience : arr
 		}));
	}
	render(){
		return(
		<div id='DataCheckBox'>
			<label htmlFor ='DataCheckBox'>Kinh nghiệm về dữ liệu</label>
			<CustomCheckboxGroup ids = {this.dataSet.ids} name = {this.dataSet.name} onClick= {e => this.changeHandler(e)} innerHtmls = {this.dataSet.innerHtmls} />

			{this.state.experiences > 0 && this.state.none_checkstate === true &&
				<div className="alert alert-danger" role="alert" >Lựa chọn có mâu thuẫn. Vui lòng chọn lại!</div>
			}
			{this.state.experienced === true  &&
				<label className = 'more-info' htmlFor ='more-info'>Mô tả thêm về kinh nghiệm, kỹ năng liên quan đến dữ liệu.</label>
			}
			{this.state.experienced === true &&
			<div>
				<textarea className = 'form-control' rows = '4' cols = '60' id = 'more-info' />
			</div>
			}

		</div>
		);
	}
}export default DataCheckBox;