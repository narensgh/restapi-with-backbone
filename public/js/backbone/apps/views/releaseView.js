define(['jquery','underscore', 'backbone','collections/releaseCollection','views/releaseListView'],
		function ($, _, Backbone, releaseCollection, releaseListView) {
	ReleaseView =  Backbone.View.extend({
		limit : 10,
		params : null,
		releaseCollection : null,
		currentIndex : 0,
		el:$('body'),
		singleReleaseTemplate : _.template($('#single-release-template').html()),
		editReleaseTemplate :  _.template($('#release-edit-template').html()),
		els:{
			table_data : '#releases',
			btnShowMore : 'a#show_more',
			sRelease : '#s-release',
			row : '.row',
			editContainer: ".edit-container",
		},
		events:{
			'click a#show_more' : 'showMore',
			'click .getRelease' : 'getRelease',
			'click .deleteRelease' : 'deleteRelease',
			'click .editRelease' : 'editRelease',
			'click .btnCancel' : 'cancelEdit',
			'click .saveEditedRelease' : 'saveEditedRelease',
			'click #release' : 'reloadRecord',
			
		},
        initialize: function () {
        	this.params = {};
        	this.collection = new releaseCollection();
        	this.fetchRecord();        	
        },
        fetchRecord : function(e) {
        	self = this;
        	this.collection.fetch({
        		async : false,
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
        	releaseId = e.target.id.split('_')[1];
        	this.params.id = releaseId;
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
        	releaseId = e.target.id.split('_')[1];
        	release = {'releaseId' : Number(releaseId)};
        	var deletedRelease = this.collection.where(release)[0];
             var flag = confirm('Are you sure you want to delete Genre details?');
             if(flag){
                 this.collection.remove(deletedRelease);
                 this.destroyRelease(deletedRelease);
             }
        },
        destroyRelease: function (target) {
        	self = this;
            if(target.get('releaseId')!=0){
            	target.set('id',target.get('releaseId'));
            }
            target.destroy({
            	success: function (status, data) {   
            		self.render();
                },
                error: function(model, xhr, options){
                },
            	wait : true
            });
        },
        editRelease:function(e){
        	release = {};
        	releaseId = Number(e.target.id.split('_')[1]);
        	release.releaseId = releaseId;
        	release.releaseName = this.collection.where({'releaseId' : release.releaseId})[0].get("releaseName");
        	release.upc = this.collection.where({'releaseId' : release.releaseId})[0].get("upc");
        	release.genreId = this.collection.where({'releaseId' : release.releaseId})[0].get("genreId");
        	console.log(release);
        	this.$el.find("#release_"+releaseId).attr("class", "edit-container").html(this.editReleaseTemplate(release));
        },
        saveEditedRelease: function (e) {
            e.preventDefault();
            var edited = this.collection.where({'releaseId' : this.$el.find(this.els.editContainer).attr('id').split('_')[1]})[0],
            newrelease = $(this.els.editrelease).val(),
            newupc = $(this.els.editupc).val(),
            newrelease_id = this.$el.find(this.els.editContainer).attr('id').split('_')[1];
            edited.set({id: this.$el.find(this.els.editContainer).attr('id').split('_')[1], release_name: $.trim(newrelease), upc: newupc, release_id : newrelease_id});
            this.saveRelease(edited);
            this.cancel_edit();
        },
        save_edited: function (e) {
            e.preventDefault();
            var edited = this.collection.where({release_id: this.$el.find(this.els.editContainer).attr('id').split('_')[1]})[0],
            newrelease = $(this.els.editrelease).val(),
            newupc = $(this.els.editupc).val(),
            newrelease_id = this.$el.find(this.els.editContainer).attr('id').split('_')[1];
            edited.set({id: this.$el.find(this.els.editContainer).attr('id').split('_')[1], release_name: $.trim(newrelease), upc: newupc, release_id : newrelease_id});
            this.save_release(edited);
            this.cancel_edit();
        },
        save_release: function (newRelease) {  
    		var that=this;
        	newRelease.save(newRelease,{
                    success: function(model, response, options){
    					//that.finish_save(newRelease,response);
                    	if(response!=1){
                    		newRelease.set("release_id", String(response));
                    	}
                    	that.render();
                    },
                    error: function(model, xhr, options){
                        xhr.fault = {"networkError": 'We\'re sorry, a network error occured when trying to save this genre.'};
                    },
                    wait: true
                });		
        },
    	finish_save:function(newRelease,response){
    		if(response!=1){
                    		newRelease.set("release_id", String(response));
                    	}
    	  this.render();
    	},
        cancel_edit: function () {
            this.$el.find(this.els.editContainer).remove();
            this.render();
        },
        add_release_event : function(e){
        	e.preventDefault();
        	newReleaseName = $(this.els.releasename_add).val();
        	newUpc = $(this.els.upc_add).val();
        	 var addedrelease = new Release_model({
                 release_name : $.trim(newReleaseName),
                 upc : $.trim(newUpc)
             });   
        	 this.collection.add(addedrelease);  
        	 this.save_release(addedrelease);       
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