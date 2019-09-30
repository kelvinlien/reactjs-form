import React from 'react';
class PictureAndName extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			picture : '',
			fullName : ''
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
		return(		
			<div className = 'row'>
				<div className = 'col-lg-4'>
			    	<div className="input-group mb-3">
    					<div className="input-group-prepend">
        					<span className="input-group-text fa fa-camera"/>
    				 	</div>
      					<input type="file" className="form-control" placeholder="Username" id="userPic" name = 'picture' onChange = {e => this.saveToState(e)} value = {this.state.picture}/>
    				</div>
   				</div>
				<div className = 'col-lg-8'>
					<input placeholder="Họ tên" className='form-control' type='text' name = 'fullName' onChange = {e => this.saveToState(e)} value = {this.state.fullName}/>
				</div>
			</div>
			);
	}
}
export default PictureAndName;
