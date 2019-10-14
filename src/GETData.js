import React from 'react';
import $ from 'jquery';
import ProgressBar from './ProgressBar.js';
class GETData extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			data : [],
			// data : ['dataSetting.db', 'formSetting.db', 'schema.json', 'MNG_DAILY_PLANNING_G4.db', 'MNG_DAILY_PLANNING.db'],
			url : "https://ci.rtworkspace.com/services/webFormManifest?formID=JICA_NE_POST_PCT_RP_TRAINING_G4"
		}
		this.getDataAJAX = this.getDataAJAX.bind(this);
	}
	componentDidMount()
	{
		this.getDataAJAX();
		$('#filename').hide();
	}
	getDataAJAX()
	{
		let _this = this;
		$('#get').click(function(){
			$.ajax({
				type : 'GET',
				url : _this.state.url,
				success : function(data, status, xhr)
				{
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

										if (element[key] === 'dataSetting.db')
										{
											$.post({
												url : 'https://ci.rtworkspace.com/webapp/webform/handleDatasetting',
												data : {
													formID : 'JICA_NE_POST_PCT_RP_TRAINING_G4',
													username : 'rta_kynguyen',
													filename: 'resources/familyMedia/JICA_NE_POST_PCT_RP_TRAINING/dataSetting.db',
													downloadLink : 'https://ci.rtworkspace.com/cpms/resourceCenterV2/getConverted?code=zHSA4ye6t6'
												},
												success : function()
												{
													$.post({
														url : 'https://ci.rtworkspace.com/webapp/webform/handleDownload',
														data : {
															formID : 'JICA_NE_POST_PCT_RP_TRAINING_G4',
															mediaType: 'data',
															username : 'rta_kynguyen',
															filename: 'resources/familyMedia/JICA_NE_POST_PCT_RP_TRAINING/idlist.db',
															downloadLink : 'https://ci.rtworkspace.com/api/dm/getData?token=your_token_here&dm_name=pct_list&max_order=0&format=sqlite&mode=download'
														},
														success : function(data, status, xhr){
															alert(data);
														}

													});
												}
											});
										}
									}
								}
 							});
 						}
					}

					$('#filename').show();
					$('.progress').trigger('start');

				},
				error : function()
				{
					alert('Something went wrong. Please check your internet connection and try again.');
				},
				complete : function()
				{
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
  					<ul id = 'filename'>List of filename:
  						{returned}
  					</ul>
			</div>
			);
	}
}
export default GETData;