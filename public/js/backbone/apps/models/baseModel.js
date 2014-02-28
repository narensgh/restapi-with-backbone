/**
 * 
 */
define(['backbone'],function (Backbone) {
	var BaseModel = Backbone.Model.extend({
		 apiBaseUrl: 'http://localhost/restapi-backbone/api/',
	});
	return BaseModel;
});