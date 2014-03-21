define(['jquery', 'backbone','handlebars', 'collections/message/conversationCollection', "text!tpl/message/conversation.html"],
		function ($, Backbone, Handlebars, ConversationCollection, Template) {
	ConversationView =  Backbone.View.extend({
		params : {},
		el:$('body'),
		conversation: $('#conversation-container'),
		template: Handlebars.compile(Template),
		initialize: function(){
			this.params = {};
        	this.collection = new ConversationCollection();
        	this.render();
		},
		render : function(){
			this.params.userId = 2;
			var self = this;
			this.collection.fetch({
    			async: false,
    			data: self.params 
			});
        	var conversations = this.collection.models[0].attributes.messages;
        	this.conversation.html(this.template({conversations: conversations}));
            return this;
        },
	});
	return ConversationView;
});