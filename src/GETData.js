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
				xhr: function()
  				{
  					console.log('enter xhr function');
  					var xhr = new window.XMLHttpRequest();
    				//Download progress
    				xhr.addEventListener("progress", function(evt){
    					console.log('this is evt.loaded value: ' + evt.loaded);
    					let contentLength;
      					if (evt.lengthComputable) { //this condition is not executed
      						contentLength = evt.total;
      					}
      					else {
    						contentLength = parseInt(evt.target.getResponseHeader('x-decompressed-content-length'), 10);
    					}
        				var percentComplete = evt.loaded / contentLength; //evt.total = 0
        				//Do something with download progress
        				console.log('this is evt.total value: ' + contentLength);
        				console.log(percentComplete);
      					console.log('download phrase');
    				}, false);
    				return xhr;
  				},
				type : 'GET',
				url : _this.state.url,
				success : function(data, status)
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
									}
								}
 							});
 						}
					}
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