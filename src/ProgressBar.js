import React from 'react';
import equal from 'fast-deep-equal';
import $ from 'jquery';
class ProgressBar extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			progress : 0
		};
		this.startTheBar = this.startTheBar.bind(this);
		this.stopTheBar = this.stopTheBar.bind(this);
		this.makeProgress = this.makeProgress.bind(this);
	}

	startTheBar()
	{
		console.log('start the bar');
		this.timerID = setInterval(this.makeProgress, 50);
	}

	stopTheBar()
	{
		console.log('stop the bar');
		clearInterval(this.timerID);
		this.setState (() => ({
			progress : 100
		}));
	}

	makeProgress()
	{
		if(this.state.progress <= 90)
		{
			this.setState( prevState => ({
				progress : prevState.progress + (Math.random() * 10)
			}));
		}
	}

	componentDidMount()
	{
		$('#progress').on("start", this.startTheBar).on("stop", this.stopTheBar);
	}

	render()
	{
		console.log('progress bar got rendered');
		let style = {
			width : this.state.progress + "%"
		}
		return(
			<div className="progress" id = 'progress' >
  				<div className="progress-bar" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style = {style}>
    				<span className="sr-only">{this.state.progress}% Complete</span>
  				</div>
			</div>
		);
	}
}
export default ProgressBar;