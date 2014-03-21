define(['collections/baseCollection'],function (BaseCollection) {
	var ConversationCollection = BaseCollection.extend({
//	    model : ReleaseModel,
	    initialize : function() {
	    	this.url = this.apiBaseUrl + "message";
	    }
	});
	return ConversationCollection;
});