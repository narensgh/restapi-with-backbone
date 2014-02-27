define(['jquery','underscore', 'backbone'],function ($, _, Backbone) {
	var releaseListView = Backbone.View.extend({
		tagName: "tr",
	    className: 'row',
	    template: _.template($("#releases-template").html()),
	
	    render: function() {
	   	 	this.$el.html(this.template(this.model));
	        return this;
	    },
	});
	return releaseListView;
});