import React from 'react';
class DataCheckBox extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<form>
			<h1>Kinh nghiệm về dữ liệu</h1>
			<div>
				<input type = 'checkbox' className = 'interviewer'/>
				<label>Đã từng làm điều tra viên/phỏng vấn viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'supervisor'/>
				<label>Đã từng làm giám sát viên.</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'tester'/>
				<label>Đã từng kiểm thử (test) bảng hỏi, góp ý/đề xuất điều chỉnh nội dung bảng hỏi giấy</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'statistic'/>
				<label>Đã từng nhập liệu sử dụng các phần mềm thống kê (Excel/SPSS/Stata/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'analytic'/>
				<label>Đã từng phân tích dữ liệu sử dụng các công cụ phân tích (Excel/Stata/R/…)</label>
			</div>
			<div>
				<input type = 'checkbox' className = 'none'/>
				<label>Chưa có kinh nghiệm nào.</label>
			</div>
				<label>Mô tả thêm về kinh nghiệm, kỹ năng liên quan đến dữ liệu.</label>
			<div>
				<textarea className = 'more-info' rows = '4' cols = '60'/>
			</div>


		</form>
		);
	}
}export default DataCheckBox;