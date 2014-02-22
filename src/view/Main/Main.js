define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/text!./Main.html",

	// Require
	"todomva/module/InfoPanel/InfoPanel",
	"todomva/module/Todo/Todo",
	"todomva/module/Footer/Footer"
], function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){
	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
		// Template Properties
		templateString: template,

		// Template Parts
		_infoPanel: null,
		_todo: null,
		_footer: null
	});
});