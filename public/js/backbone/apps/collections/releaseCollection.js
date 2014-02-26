define(['jquery', 'backbone','models/releaseModel'],function ($, Backbone, releaseModel) {
var ReleaseCollection = Backbone.Collection.extend({
        model : releaseModel,
        url: 'http://localhost/restapi-backbone/api/release',
});
return ReleaseCollection;
});