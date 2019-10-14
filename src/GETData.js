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
			dataSetting : [],
			url : ["https://ci.rtworkspace.com/services/webFormManifest?formID=JICA_NE_POST_PCT_RP_TRAINING_G4", 'https://ci.rtworkspace.com/webapp/webform/handleDatasetting', 'https://ci.rtworkspace.com/webapp/webform/handleDownload'],
			formID : '',
			mediaType: 'data',
			username : 'rta_kynguyen',
			filename : 'resources/familyMedia/JICA_NE_POST_PCT_RP_TRAINING/'
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
			$.ajax({							//perform GET the first link, save formID to state, throw error if something went wrong.
				type : 'GET',
				url : _this.state.url[0],
				success : function(data)
				{
					let id = data['formID'];
					_this.setState(() => ({
						data : [],
						formID : id
					}));
					let key;
					for ( key in data )			//loop through response data
					{
 						if (Array.isArray(data[key]))		//array of files or media
 						{
 							data[key].forEach( function(element) {
 								let ele;
								for (ele in element)
								{
									if (ele === 'filename')		//save filename to state.data
									{
										_this.setState(state => ({
											data : [...state.data, element[ele]]
										}));

										if (element[ele] === 'dataSetting.db')		//catch the db file we need
										{
											$.post({						//perform POST to second link, pass the filename and downloadLink of the db file
												url : _this.state.url[1] ,
												data : {
													formID : _this.state.formID,
													username : _this.state.username,
													filename: _this.state.filename + element['filename'],
													downloadLink : element['downloadLink']
												},
												success : function(data)
												{
													_this.setState(() => ({		//init state.dataSetting
														dataSetting : []
													}));
													let key;
													for (key in data)			
													{
														if (Array.isArray(data[key]))		//array of files or media
														{
															data[key].forEach( function(element) {
																let ele;
																for (ele in element)
																{
																	if (ele === 'filename')
																	{
																		_this.setState(state => ({		//save to state.dataSetting
																			dataSetting : [...state.dataSetting, element[ele]]
																		}));
																		$('#filename').show();		//show the List of filename
																		$('.progress').trigger('start');		//start the progress bar
																		$.ajax({		//perform POST to the third link, pass filename and downloadLink.
																			method : 'post',
																			url : _this.state.url[2],
																			data : {
																				formID : _this.state.formID,
																				mediaType: _this.state.mediaType,
																				username : _this.state.username,
																				filename: _this.state.filename + element['filename'],
																				downloadLink : element['downloadLink']
																			}

																		});
																	}
																}
															});
														}
													}
												},
												complete : function (){
													$('.progress').trigger('stop');			//stop the progress bar
												},
												dataType : 'json'		//make sure we can loop through response and use bracket notation on it
											});
										}
									}
									break;
								}
 							});
 						}
					}

				},
				error : function()
				{
					alert('Something went wrong. Please check your internet connection and try again.');
				},
				dataType : 'json'
			});
		});



	}
	render()
	{
		let returned = [];
		this.state.dataSetting.forEach( function(element, index) {
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