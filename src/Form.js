import React from 'react';
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newUser : {
				picture : '',
				fullName : '',
				gender : '',
				dob : '',
				email : '',
				phone : '',
				userID : ''
			},
			genderOptions : ['male', 'female']

			}

			}
		render(){
			return(
				<form>
				<span>Picture
				<button className="UserPic"/>
				Name of the user
				</span>
				<input />
				</form>
				)
	}
}
export default Form;