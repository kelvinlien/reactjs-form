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
import AlertAJAXTest from './AlertAJAXTest.js';
import ProgressBar from './ProgressBar.js';
//action = 'http://localhost/react/index.php' method = 'post'
import $ from 'jquery';
// export for others scripts to use

import GETData from './GETData.js';

class Form extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		$('#submit').click(function(){
			$('form').attr('action', 'http://localhost/react/index.php').attr('method', 'post').submit();
	});
		$("#alert").click(function(){
			var name = $("#fullName").val();
			$.post({
				url : "http://localhost/react/test.php",
				data : {"name" : name},
				success : function(data){
					if (name !== '')
					{					
						alert(data);
						$('#submit').click();
					}
					else
					{
						alert("Please tell me your name.");
					}
				}
			});
		});

}
	render(){
			return(
				<form >
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
						<GETData />
						<ProgressBar/>
						<AlertAJAXTest />
					</div>
					<SubmitButton/>
				</form>
				);
 	}
}
export default Form;