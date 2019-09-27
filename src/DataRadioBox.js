import React from 'react';
class DataRadioBox extends React.Component{
	constructor(props){
		super(props);
		this.state = 
		{
		checked : false,
		sp_checkstate : false,
		tele_checkstate : false
		}
		this.clickHandler = this.clickHandler.bind(this);
	}
	debugger()
	{
		console.log('checked: ' + this.state.checked);
		console.log('sp_checkstate: '+ this.state.sp_checkstate);
		console.log('tele_checkstate: '+this.state.tele_checkstate);
	}
	clickHandler(e){
		this.setState(state =>({
			checked : true
		}));
		let id = e.target.id;
		//console.log('id: '+id);
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
		//this.debugger();
		return(
		<div id='DataRadioBox'>
			<label htmlFor='DataRadioBox'>Vị trí ứng tuyển</label>
			<div className = "custom-control custom-radio" name = 'position'>
  				<input type="radio" id="internrtlab" name='position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/ >
  				<label className = 'custom-control-label' htmlFor="internrtlab">Thực tập sinh rtLab</label>
			</div>

			<div className = "custom-control custom-radio">
  				<input type="radio" id="internrtst" name='position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
  				<label className = 'custom-control-label' htmlFor="internrtst">Thực tập sinh rtST</label>
			</div>

			<div className = "custom-control custom-radio">
  				<input type="radio" id="webdev" name = 'position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
  				<label className = 'custom-control-label' htmlFor="webdev">Web developer</label>
			</div>
			<div className = "custom-control custom-radio">
				<input type = 'radio' id='android' name = 'position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
				<label className = 'custom-control-label' htmlFor='android'>Android developer</label>
			</div>
			<div className = "custom-control custom-radio">
				<input type = 'radio' id='telephonist' name = 'position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
				<label className = 'custom-control-label' htmlFor='telephonist'>Điện thoại viên</label>
			</div>
			<div className = "custom-control custom-radio">
				<input type = 'radio' id='customerSp' name = 'position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
				<label className = 'custom-control-label' htmlFor='customerSp'>Hỗ trợ khác hàng</label>
			</div>
			<div className = "custom-control custom-radio">
				<input type = 'radio' id='technicalSp' name = 'position' className = 'custom-control-input' onClick={e => this.clickHandler(e)}/>
				<label className = 'custom-control-label' htmlFor='technicalSp'>Hỗ trợ kỹ thuật</label>
			</div>
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