define(['models/baseModel'],function (BaseModel) {
var ReleaseModel = BaseModel.extend({
	defaults:{
			releaseId : '0',
			releaseName : ''
		},
		sync: function(method, model, options) 
	    {
			alert(method);
	        options.url = this.apiBaseUrl + "release?"+ this.buildParam();
	        Backbone.sync.apply(this, arguments);
		},
		buildParam : function()
		{
			var response = {};
			 _.extend(response, {"id" : this.get("releaseId")});
			 return $.param(response);
		}
	});
return ReleaseModel;
});