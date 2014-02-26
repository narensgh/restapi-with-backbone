define(['jquery','underscore', 'backbone'],function ($, _, Backbone) {
var trackListView = Backbone.View.extend({
	tagName: "tr",
    className: 'row',
    template: _.template($("#tracks-template").html()),

    render: function() {
   	 	this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
});
return trackListView;
});