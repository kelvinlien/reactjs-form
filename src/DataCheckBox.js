import React from 'react';
import './DataCheckBox.css';
class DataCheckBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			experienced : false,
			experiences : 0,
			none_checkstate : false
		}
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
		if(id !== 'none')
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
					this.setState(state => ({
						experienced : false
					}));
				}
				this.setState(state => ({
				experiences : state.experiences += -1
 				}));
			}
			if(this.state.none_checkstate === true)
			{
				this.setState(state => ({
					experienced : false
				}));
			}
		}
		else
		{
			if(isChecked)
			{
				this.setState(state => ({
					experienced : false,
					none_checkstate : true
				}));
			}
			else
			{
				if(this.state.experiences === 0)
				{
					this.setState(state => ({
						experienced : false,
						none_checkstate : false
					}));
				}
				else
				{
					this.setState(state =>({
						experienced : true,
						none_checkstate : false
					}));
				}
			}
		}
	}

	render(){
		return(
		<div id='DataCheckBox'>
			<label htmlFor ='DataCheckBox'>Kinh nghiệm về dữ liệu</label>
			<div>
				<input type = 'checkbox' className = 'interviewer' id = 'interviewer' onChange={e => this.changeHandler(e)}/>
				<label htmlFor = 'interviewer'>Đã từng làm điều tra viên/phỏng vấn viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'supervisor' id='supervisor' onChange={e => this.changeHandler(e)}/>
				<label htmlFor='supervisor'>Đã từng làm giám sát viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'tester' id ='tester' onChange={e => this.changeHandler(e)}/>
				<label htmlFor='tester'>Đã từng kiểm thử (test) bảng hỏi, góp ý/đề xuất điều chỉnh nội dung bảng hỏi giấy</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'statistic' id='statistic' onChange={e => this.changeHandler(e)}/>
				<label htmlFor='statistic'>Đã từng nhập liệu sử dụng các phần mềm thống kê (Excel/SPSS/Stata/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'analytic' id='analytic' onChange={e => this.changeHandler(e)}/>
				<label htmlFor='analytic'>Đã từng phân tích dữ liệu sử dụng các công cụ phân tích (Excel/Stata/R/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'none' id='none' onChange={e => this.changeHandler(e)}/>
				<label htmlFor='none'>Chưa có kinh nghiệm nào.</label>
			</div>
			{this.state.experiences > 0 && this.state.none_checkstate === true &&
				<div className = 'choose-again'>Lựa chọn có mâu thuẫn. Vui lòng chọn lại!</div>
			}
			{this.state.experienced === true  &&
				<label className = 'more-info' htmlFor ='more-info'>Mô tả thêm về kinh nghiệm, kỹ năng liên quan đến dữ liệu.</label>
			}
			{this.state.experienced === true &&
			<div>
				<textarea className = 'more-info' rows = '4' cols = '60' id = 'more-info' />
			</div>
			}

		</div>
		);
	}
}export default DataCheckBox;