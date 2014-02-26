define(['jquery','underscore', 'backbone','collections/releaseCollection','views/releaseListView'],
		function ($, _, Backbone, releaseCollection, releaseListView) {
	    
	ReleaseView =  Backbone.View.extend({
		limit : 10,
		currentIndex : 0,
		el:$('body'),
		singleReleaseTemplate : _.template($('#single-release-template').html()),
		releaseEditTemplate :  _.template($('#release-edit-template').html()),
		els:{
			table_data : '#releases',
			btnShowMore : 'a#show_more',
			sRelease : '#s-release',
			row : '.row'
		},
		events:{
			'click a#show_more' : 'showMore',
			'click .row' : 'showRelease',
			'click .btnEditRelease' : 'editRelease',
			'click .btnCancel' : 'cancelEdit',
			'click .btnSaveRelease' : 'saveRelease'
				
		},
	        initialize: function () {
	        	self = this;
	        	this.collection = new releaseCollection();
	        	this.collection.fetch({
	        		data: {
	    		        'order_by': 'release_id'
	    		      },
	    		      success: function()
	    		      {
	    		    	  self.render();
	    		      }
	        	});
	        	
	        },
	        render : function(){
	        	this.$el.find(this.els.row).remove();
	        	releases = this.collection.models[0].attributes.releases;
	        	_.each(releases.slice(this.currentIndex,(this.currentIndex + this.limit)), function(data) {
	    			this.$el.find(this.els.table_data).append(new releaseListView({
	    				id : 'release_' + data.releaseId,
	    				model : data
	    			}).render().el);
	    		}, this);	
	    		return this;
	        },
	        showMore : function(){
	        	this.currentIndex = this.currentIndex + this.limit; 
	        	if(this.currentIndex >= this.collection.models.length){
	        		this.$el.find(this.els.btnShowMore).hide();
	        	}
	        	this.render();
	        },
	        renderSingleRelease : function(release_id, action){
	        	var singleRelease = {"release_id" : release_id};
	        	singleReleaseC = this.collection.where({release_id : release_id});
	        	singleRelease.release_name = singleReleaseC[0].get('release_name');
	        	singleRelease.release_date = singleReleaseC[0].get('release_date');
	        	singleRelease.genre_id = singleReleaseC[0].get('genre_id');
	        	singleRelease.upc = singleReleaseC[0].get('upc');
	        	if(action == "editRelease"){
	        		this.$el.find(this.els.sRelease).html(this.releaseEditTemplate(singleRelease));
	        	}else{
	        		this.$el.find(this.els.sRelease).html(this.singleReleaseTemplate(singleRelease));
	        	}
	        },
	        editRelease:function(e){
	        	this.renderSingleRelease(e.target.id, "editRelease");
	        },
	        showRelease : function (e){
	        	this.renderSingleRelease(e.target.id, "showRelease");
	        },
	        cancelEdit: function (e) {
	        	this.renderSingleRelease(e.target.id, "showRelease");
	        },  
	        saveRelease : function(e){
	        	this.renderSingleRelease(e.target.id, "showRelease");
	        }
	    });
	return ReleaseView;
});