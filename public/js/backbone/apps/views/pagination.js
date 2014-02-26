var Pagination_view = Backbone.View.extend({
	_total_record : 0,
	_total_pages : 1,
	els : {
		range : "#range"
	},
	template : _.template($("#paginationTemplate").html()),
	initialize : function() {
		this._total_record = this.collection.length;
	},

	get_pages : function() {
		this._total_pages = Math.ceil(this._total_record / this.collection._per_page);
	},
	create_links : function(value) {
		var link = "<a id="+ value +" class='page_nav' href='javascript: void(" + value + ")'>" + value	+ "</a>";
		return link;
	},
	render : function() {
		page_range = this.render_pagination();
		this.$el.html(this.template(page_range));
		return this;
	},
	render_pagination : function() {
		this.get_pages();
		var links = "";
		for ( var i = 1; i <= parseInt(this._total_pages); i++) {
			links += this.create_links(i);
		}
		return links;
	},
});