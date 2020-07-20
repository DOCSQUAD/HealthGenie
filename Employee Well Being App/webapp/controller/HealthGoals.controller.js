sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel'
], function (Controller, MessageToast, History, JSONModel) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.HealthGoals", {
		onInit: function(){
			var oModel = new JSONModel({
					// Weight : "<h1><pre>    Gain Weight</pre></h1>" +
					// 		"<pre>         Gain 5kg weight</pre>",
					// Workout : "<h1><pre>     Workout</pre></h1>" +
					// 		"<pre> Run/Ride for 30 minutes everyday</pre>",
					// Calories : "<h1><pre>   Burn Calories</pre></h1>" +
					// 		"<pre>     Burn 500K Calories everyday</pre>",
					// Water : "<h1><pre>   Drink Water</pre></h1>" +
					// 		"<pre>   Drink 10 glasses water everyday</pre>",
					// Fruits : "<h1><pre>      Fruits</pre></h1>" +
					// 		"<pre>        Eat a fruit everyday</pre>",
					// Sleep : "<h1><pre>       Sleep</pre></h1>" +
					// 		"<pre>         Sleep for 7-9 hours</pre>",
					// Meditate : "<h1><pre>   Meditate</pre></h1>" +
					// 		"<pre> Meditate/Yoga for 15 minutes</pre>",
					// Hobbies : "<h1><pre>     Hobbies</pre></h1>" +
					// 		"<pre>    Read a chapter of a book</pre>",
					// Hobbies1 : "<h1><pre>     Hobbies</pre></h1>" +
					// 		"<pre>Learn to play a musical instrument</pre>",
					Weight : "<h1><pre>    Gain Weight</pre></h1>",
					Workout : "<h1><pre>     Workout</pre></h1>",
					Calories : "<h1><pre>   Burn Calories</pre></h1>",
					Water : "<h1><pre>   Drink Water</pre></h1>",
					Fruits : "<h1><pre>      Fruits</pre></h1>",
					Sleep : "<h1><pre>       Sleep</pre></h1>",
					Meditate : "<h1><pre>   Meditate</pre></h1>",
					Hobbies : "<h1><pre>     Hobbies</pre></h1>",
					Hobbies1 : "<h1><pre>     Hobbies</pre></h1>",
					HTML : "<h3>subheader</h3>" +
					"<p>link: <a href=\"//www.sap.com\" style=\"color:green; font-weight:600;\">link to sap.com</a> - links open in a new window.</p>" +
					"<p>paragraph: <strong>strong</strong> and <em>emphasized</em>.</p>" +
					"<p>list:</p>" +
					"<ul><li>list item 1</li><li>list item 2<ul><li>sub item 1</li><li>sub item 2</li></ul></li></ul>" +
					"<p>pre:</p><pre>abc    def    ghi</pre>" +
					"<p>code: <code>var el = document.getElementById(\"myId\");</code></p>" +
					"<p>cite: <cite>a reference to a source</cite></p>" +
					"<dl><dt>definition:</dt><dd>definition list of terms and descriptions</dd>"
				});
				
				this.getView().setModel(oModel);
		},
		onSave: function () {
			// MessageToast.show("Dialog opened");
			this._getDialog1().open();
			// MessageToast.show("Dialog opened");
		},
		_getDialog1: function () {
			var oView = this.getView();
			var oDialog = oView.byId("dialog3");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "successhealth.SuccessHealth01.view.saveGoal", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}
			//debugger;
			return oDialog;
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onAct: function() {
			this.getRouter().navTo("HealthGoals");
		},
		onClose: function() {
			this.getRouter().navTo("Home");
		},
		_getDialog: function () {
			var oView = this.getView();
			var oDialog = oView.byId("dialog1");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "successhealth.SuccessHealth01.view.addGoal", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}
			//debugger;
			return oDialog;
		},

		onAdd: function () {
			// MessageToast.show("Dialog opened");
			this._getDialog().open();
			// MessageToast.show("Dialog opened");
		},

		closeDialog: function () {
			this._getDialog().close();
			// MessageToast.show("Dialog closed");

		},
			onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/);
			}
		}
	});

});