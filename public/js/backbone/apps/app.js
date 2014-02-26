require.config({
    baseUrl: 'js/backbone/libs',
    paths: {
    	collections : '../apps/collections',
    	views : '../apps/views',
    	models : '../apps/models',
    	apps: '../apps',
        tpl: '../tpl'
    },
    map: {
        '*': {
            'app/models/employee': 'app/models/memory/employee'
        }
    },
    shim: {
        'backbone': {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'apps/router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});