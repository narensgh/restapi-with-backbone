define(['jquery','backbone','apps/views/message/friendView', 'apps/views/message/messageFormView', 'apps/views/message/ConversationView'], 
    function($,Backbone, FriendView, MessageFormView, ConversationView){	
	var Router = Backbone.Router.extend({		
        routes: {
         /*   ""   : "releasedata",
            "release"	 : "releasedata",
            "track"	 : "trackdata"*/
        	""   : "index"
        },
        el:$('body'),
        els : {
        	results : '#results'
        },
        
        index: function(){
        	new FriendView();
        	new MessageFormView();
        	new ConversationView();
        }
        
        /*releasedata : function () {
        	new ReleaseView();
        },
        trackdata : function(){
        	new TrackView();
        }*/
    });
return Router;
});