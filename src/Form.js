import React from 'react';
import DataCheckBox from './DataCheckBox';
import DataRadioBox from './DataRadioBox';
import SubmitButton from './SubmitButton';
import './Form.css';
import WorkingAbility from './WorkingAbility.js';
import ContactAndID from './ContactAndID.js';
import AddressAndEducation from './AddressAndEducation.js';
import PictureAndName from './PictureAndName.js';
import GenderAndDob from './GenderAndDob.js';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				picture : '',
				fullName : '',
				gender : '',
				dob : '',
				email : '',
				phone : '',
				userID : '',
		};
	}
	render(){
			console.log(this.state);
			//this.getDataSource(this.state.address, 'city');
			return(
				<form>
					<div className = 'jumbotron text-left'>
						<h1>Phiếu ứng tuyển việc làm</h1>
					</div>
					<div className = 'container'>
						<PictureAndName />
						<GenderAndDob />
						<AddressAndEducation />
						<ContactAndID />
						<WorkingAbility />
						<DataCheckBox />
						<DataRadioBox />
					</div>
					<SubmitButton/>
				</form>
				);
 	}
}
export default Form;