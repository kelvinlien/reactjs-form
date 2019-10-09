import React from 'react';
class ProgressBar extends React.Component
{
	// constructor(props)
	// {
	// 	super(props);
	// 	this.state = {
	// 		progress : 50
	// 	}
	// }
	render()
	{
		let style = {
			width : this.props.progress + "%"
		}
		return(
			<div class="progress">
  				<div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style = {style}>
    				<span class="sr-only">70% Complete</span>
  				</div>
			</div>
		);
	}
}
export default ProgressBar;