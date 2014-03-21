define(['jquery', 'backbone','handlebars', 'collections/friendCollection', "text!tpl/message/messageForm.html"],
		function ($, Backbone, Handlebars, FriendCollection, Template) {
	MessageFormView =  Backbone.View.extend({
		el:$('body'),
		
		messageFormContainer: $('#message-form-container'),
		template: Handlebars.compile(Template),
		initialize: function(){
			this.messageFormContainer.html(this.template);
		}
	});
	return MessageFormView;
});