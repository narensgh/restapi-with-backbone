define(['backbone'],function (Backbone) {
var ReleaseModel = Backbone.Model.extend({
	defaults:{
			release_id :'0',
			release_name : 'test release'
		}
	});
return ReleaseModel;
});