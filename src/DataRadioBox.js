import React from 'react';
import CustomRadioGroup from './CustomRadioGroup.js';
class DataRadioBox extends React.Component{
	constructor(props){
		super(props);
		this.state = 
		{
		checked : false,
		sp_checkstate : false,
		tele_checkstate : false
		};
		this.dataSet = {
		ids : ['internrtlab', 'internrtst', 'webdev', 'android', 'telephonist', 'customerSp', 'technicalSp'],
		name : 'position',
		innerHtmls : ['Thực tập sinh rtLab', 'Thực tập sinh rtSolution', 'Web developer', 'Android developer', 'Điện thoại viên', 'Hỗ trợ khách hàng', 'Hỗ trợ kỹ thuật']
		};
		this.clickHandler = this.clickHandler.bind(this);
	}
	debugger()
	{
		console.log('checked: ' + this.state.checked);
		console.log('sp_checkstate: '+ this.state.sp_checkstate);
		console.log('tele_checkstate: '+this.state.tele_checkstate);
	}
	clickHandler(e){
		let name = e.target.name;
		let id = e.target.id;
		this.setState(state =>({
			checked : true,
			[name] : id
		}));
		if(id === 'customerSp' || id === 'technicalSp')
		{
			this.setState(() =>({
				sp_checkstate : true,
				tele_checkstate : false
			}));
		}
		else if (id === 'telephonist')
		{
			this.setState(()=>({
				sp_checkstate : false,
				tele_checkstate : true
			}));
		}
		else
		{
			this.setState(()=>({
				sp_checkstate : false,
				tele_checkstate : false
			}));
		}
	}
	render(){
		console.log(this.state);
		return(
		<div id='DataRadioBox'>
			<label htmlFor='DataRadioBox'>Vị trí ứng tuyển</label>
			<CustomRadioGroup ids = {this.dataSet.ids} name = {this.dataSet.name} onClick={e => this.clickHandler(e)} innerHtmls = {this.dataSet.innerHtmls}/>
			<label htmlFor = 'project-select'>Dự án muốn tham gia</label>
			{this.state.checked === true && this.state.tele_checkstate === false &&
			<div id = 'project-select' className = "custom-control custom-radio">
				<input type = 'radio' id='project' name='project' className = 'custom-control-input'/>
				<label className = 'custom-control-label' htmlFor='project'>R&D Phát triển sản phẩm {this.state.sp_checkstate === true && '& Hỗ trợ khách hàng'}</label>
			</div>
			}
			{this.state.tele_checkstate === true &&
			<div id = 'project-select' className = "custom-control custom-radio">
				<input type = 'radio' id='project' name='project' className = 'custom-control-input'/>
				<label className = 'custom-control-label' htmlFor='project'>Khảo sát đời sống Công nhân May Better Work Research VietNam</label>
			</div>
			}

		</div>
		);
	}
}
export default DataRadioBox;