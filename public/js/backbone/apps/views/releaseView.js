define(['jquery','underscore', 'backbone','collections/releaseCollection','views/releaseListView'],
		function ($, _, Backbone, releaseCollection, releaseListView) {
	    
	ReleaseView =  Backbone.View.extend({
		limit : 10,
		params : null,
		releaseCollection : null,
		currentIndex : 0,
		el:$('body'),
		singleReleaseTemplate : _.template($('#single-release-template').html()),
		releaseEditTemplate :  _.template($('#release-edit-template').html()),
		els:{
			table_data : '#releases',
			btnShowMore : 'a#show_more',
			sRelease : '#s-release',
			row : '.row',
		},
		events:{
			'click a#show_more' : 'showMore',
			'click .row' : 'getRelease',
			'click .btnEditRelease' : 'editRelease',
			'click .btnCancel' : 'cancelEdit',
			'click .btnSaveRelease' : 'saveRelease',
			'click #release' : 'reloadRecord',
			'click .deleteRelease' : 'deleteRelease',
		},
        initialize: function () {
        	this.params = {};
        	this.collection = new releaseCollection();
        	this.fetchRecord();        	
        },
        fetchRecord : function() {
        	self = this;
        	console.log(this.params);
        	this.collection.fetch({
        		data : self.params,
    		      success: function(){
    		    	  self.render();
    		      }
        	});
        	this.params = {};
        },
        reloadRecord : function (){
        	this.fetchRecord();
        },
        render : function(){
        	this.$el.find(this.els.row).remove();
        	releases = this.collection.models;
        	_.each(releases.slice(this.currentIndex,(this.currentIndex + this.limit)), function(data) {
        		data = data.toJSON();
    			this.$el.find(this.els.table_data).append(new releaseListView({
    				id : 'release_' + data.releaseId,
    				model : data
    			}).render().el);
    		}, this);	
    		return this;
        },
        getRelease : function (e){
        	this.params.id = e.target.id;
        	this.fetchRecord();
        },
        showMore : function(){
        	this.currentIndex = this.currentIndex + this.limit; 
        	if(this.currentIndex >= this.collection.models[0].length){
        		this.$el.find(this.els.btnShowMore).hide();
        	}
        	this.render();
        },
        deleteRelease : function(e){
        	release = {'releaseId' : Number(e.target.id)};
        	var deletedRelease = this.collection.where(release)[0];
             var flag = confirm('Are you sure you want to delete Genre details?');
             if(flag){
                 this.collection.remove(deletedRelease);
                 this.destroyRelease(deletedRelease);
                 this.render();
             }
        },
        destroyRelease: function (target) {
            if(target.get('releaseId')!=0){
            	target.set('id',target.get('releaseId'));
            }
            deleteParams = {};
            deleteParams.id = Number(target.get('releaseId'));
            target.destroy({
            	data : deleteParams
            });
        },
        editRelease:function(e){
        	this.renderSingleRelease(e.target.id, "editRelease");
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