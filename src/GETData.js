import React from 'react';
import $ from 'jquery';
import ProgressBar from './ProgressBar.js';
class GETData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data : ['dataSetting.db', 'formSetting.db', 'schema.json', 'MNG_DAILY_PLANNING_G4.db', 'MNG_DAILY_PLANNING.db'],
			url : "https://ci.rtworkspace.com/services/webFormManifest?formID=MNG_DAILY_PLANNING_G4"
		}
		this.getDataAJAX = this.getDataAJAX.bind(this);
	}
	componentDidMount()
	{
		this.getDataAJAX();
		$('#known').hide();
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
					$('#known').show();
					console.log('ajax before send stage');
					$('.progress').trigger('start');
				},
				success : function(data, status)
				{
					// _this.setState(() => ({
					// 	data : []
					// }));
					// for ( var key in data )
					// {
 				// 		if (Array.isArray(data[key]))
 				// 		{
 				// 			data[key].forEach( function(element) {
					// 			for (var key in element)
					// 			{
					// 				if (key === 'filename')
					// 				{
					// 					_this.setState(state => ({
					// 						data : [...state.data, element[key]]
					// 					}));
					// 				}
					// 			}
 				// 			});
 				// 		}
					// }
				},
				complete : function()
				{
					console.log('the ajax completed');
					$('.progress').trigger('stop');
				},
				dataType : 'json'
			});
		});



	}
	render()
	{
		let returned = [];
		this.state.data.forEach( function(element, index) {
			returned.push(
				<li key = {index}>
					{element}
					<ProgressBar />
				</li>
				);
		});
		return(
			<div>
  					<button type="button" className="btn btn-primary" id = 'get'>Perform GET
  					</button>
  					<ul id = 'known'>List of filename:
  						{returned}
  					</ul>
			</div>
			);
	}
}
export default GETData;