define(['collections/baseCollection'],function (BaseCollection) {
	var FriendCollection = BaseCollection.extend({
//	    model : ReleaseModel,
	    initialize : function() {
	    	this.url = this.apiBaseUrl + "user";
	    }
	});
	return FriendCollection;
});