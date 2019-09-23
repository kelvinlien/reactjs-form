import React from 'react';
class DataRadioBox extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<form id='DataRadioBox'>
			<label htmlFor='DataRadioBox'>Vị trí ứng tuyển</label>
			<div>
  				<input type="radio" id="internrtlab" name='position'/>
  				<label htmlFor="internrtlab">Thực tập sinh rtLab</label>
			</div>

			<div>
  				<input type="radio" id="internrtst" name='position'/>
  				<label htmlFor="internrtst">Thực tập sinh rtST</label>
			</div>

			<div>
  				<input type="radio" id="webdev" name = 'position'/>
  				<label htmlFor="webdev">Web developer</label>
			</div>
			<div>
				<input type = 'radio' id='android' name = 'position'/>
				<label htmlFor='android'>Android developer</label>
			</div>
			<label htmlFor = 'project-select'>Dự án muốn tham gia</label>
			<div id = 'project-select'>
				<input type = 'radio' id='project' name='project'/>
				<label htmlFor='project'>R&D Phát triển sản phẩm</label>
			</div>

		</form>
		)
	}
}
export default DataRadioBox;