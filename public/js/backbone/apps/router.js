define(['jquery','backbone','apps/views/releaseView','apps/views/trackView'], 
    function($,Backbone, ReleaseView,TrackView){	
	var Router = Backbone.Router.extend({		
        routes: {
            ""   : "releasedata",
            "release"	 : "releasedata",
            "track"	 : "trackdata"
        },
        el:$('body'),
        els : {
        	results : '#results'
        },
        releasedata : function () {
        	new ReleaseView();
        },
        trackdata : function(){
        	new TrackView();
        }
    });
return Router;
});