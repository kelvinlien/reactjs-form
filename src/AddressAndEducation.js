import React from 'react';
import AddressSelectGroup from './AddressSelectGroup.js';
import EducationSelectGroup from './EducationSelectGroup.js';
class AddressAndEducation extends React.Component
{
//This class is created to contain the similarities between AddressSelectGroup and EducationSelectGroup, pass to each as props and call both.
//Not yet finish.
	constructor(props)
	{
		super(props);
	}
 	render()
 	{
 		return(
 			<>
 				<AddressSelectGroup />
 				<EducationSelectGroup />
 			</>
 			);
 	}
}
export default AddressAndEducation;