/**
 * 
 */

define(['jquery', 'backbone'],function ($, Backbone) {
	var BaseCollection = Backbone.Collection.extend({
	        apiBaseUrl: 'http://localhost/chaplin-api/api/',
	});
	return BaseCollection;
});