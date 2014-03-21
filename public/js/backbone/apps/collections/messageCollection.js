define(['collections/baseCollection'],function (BaseCollection) {
	var MessageCollection = BaseCollection.extend({
//	    model : ReleaseModel,
	    initialize : function() {
	    	this.url = this.apiBaseUrl + "message";
	    }
	});
	return MessageCollection;
});