import React from 'react';
import equal from 'fast-deep-equal';
class ProgressBar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			progress : this.props.progress
		}
	}

	shouldComponentUpdate(nextProps){
    	return nextProps.progress !== this.state.progress;
	}
	
	componentDidUpdate(prevProps) {
    		this.setState(() => ({
    			progress : this.props.progress
    		}));
	} 

	render()
	{
		console.log('this got rendered');
		let style = {
			width : this.props.progress + "%"
		}
		return(
			<div className="progress" id = 'progress'>
  				<div className="progress-bar" role="progressbar" aria-valuenow={this.props.progress} aria-valuemin="0" aria-valuemax="100" style = {style}>
    				<span className="sr-only">{this.props.progress}% Complete</span>
  				</div>
			</div>
		);
	}
}
export default ProgressBar;