/**
 * 
 */

define(['jquery', 'backbone'],function ($, Backbone) {
	var BaseCollection = Backbone.Collection.extend({
	        apiBaseUrl: 'http://localhost/restapi-backbone/api/',
	});
	return BaseCollection;
});