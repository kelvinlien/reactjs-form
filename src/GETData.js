import React from 'react';
import $ from 'jquery';
class GETData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data : [],
			url : "https://ci.rtworkspace.com/services/webFormManifest?formID=MNG_DAILY_PLANNING_G4"
		}
		this.getDataAJAX = this.getDataAJAX.bind(this);
		this.randomProgress = this.randomProgress.bind(this);
	}
	componentDidMount()
	{
		this.getDataAJAX();
	}
	getDataAJAX()
	{
		let _this = this;
		$('#get').click(function(){
			$.ajax({
				type : 'GET',
				url : _this.state.url,
				beforeSend : function()
				{
					$('#PB').attr('progress', 0);
					// _this.timerID = window.setInterval(() => _this.randomProgress(), 10);
					_this.randomProgress();
					console.log('before send message');
					console.log($('#PB').attr('progress'));
				},
				success : function(data, status)
				{
					// clearInterval(_this.timerID);
					// $('#PB').attr('progress', '100');
					_this.setState(() => ({
						data : []
					}));
					for ( var key in data )
					{
 						if (Array.isArray(data[key]))
 						{
 							data[key].forEach( function(element) {
								for (var key in element)
								{
									if (key === 'filename')
									{
										_this.setState(state => ({
											data : [...state.data, element[key]]
										}));
									}
								}
 							});
 						}
					}
				},
				complete : function()
				{
					// clearInterval(_this.timerID);
					$('#PB').attr('progress', '100');
				},
				dataType : 'json'
			});
		});



	}
	randomProgress()
	{
		while ($('#PB').attr('progress') <= 90) //check if the current progress is lower or equal to 90, modify it by adding a random number between 0 and 10.
		{
			let current = $('#PB').attr('progress');
			$('#PB').attr('progress', current + Math.random() * 10 );
			console.log(current);
		}
	}
	render()
	{
		let returned = [];
		this.state.data.forEach( function(element, index) {
			returned.push(
				<li key = {index}>
					{element}
				</li>
				);
		});
		return(
			<div>
  					<button type="button" className="btn btn-primary" id = 'get'>Perform GET
  					</button>
  					<ul>List of filename:
  						{returned}
  					</ul>
			</div>
			);
	}
}
export default GETData;