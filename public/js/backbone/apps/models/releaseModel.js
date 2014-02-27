define(['backbone'],function (Backbone) {
var ReleaseModel = Backbone.Model.extend({
	defaults:{
			releaseId :'0',
		},
		sync: function(method, model, options) 
	    {
			if ( method === 'delete' ) {
		        if ( options.data ) {
		            // properly formats data for back-end to parse
		            //options.data = JSON.stringify(options.data);
		        }
		        // transform all delete requests to application/json
		        options.contentType = 'application/json';
		    }
			console.log(options);
	        options.url = "http://localhost/restapi-backbone/api/release";
	        return Backbone.sync.apply(this, arguments);
		},
		initialize: function () {
	        if(this.get('release_id') === "0") this.set('release_id', this.cid);
	    },
		build_param : function(method)
		{
			alert(method+" Called !!");
			switch(method)
			{
				case "delete":
					return "?test/";
				case "update":
					return "?test/";
				case "create":
					return "?test/";
			}		
		}
	});
return ReleaseModel;
});