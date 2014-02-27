define(['collections/baseCollection','models/releaseModel'],function (BaseCollection, ReleaseModel) {
	var ReleaseCollection = BaseCollection.extend({
	    model : ReleaseModel,
	    initialize : function() {
	    	this.url = this.apiBaseUrl + "release";
	    }
	});
	return ReleaseCollection;
});