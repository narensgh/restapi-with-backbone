define(['jquery', 'backbone','models/trackModel'],function ($, Backbone, trackModel) {
var trackCollection = Backbone.Collection.extend({
        model : trackModel,
        url: 'http://local.narendra.dev.com/backbone/example-7/index.php?action=get',
});
return trackCollection;
});