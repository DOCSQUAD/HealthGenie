sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	'sap/ui/model/json/JSONModel'
], function (Controller, History, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Rewards", {
		onInit: function () {
			var oModel = new JSONModel({
					Badge1 : "<h2><pre>Getting Started</pre></h2>",
					Badge2 : "<h2><pre>   Early Riser</pre></h2>",
					Badge3 : "<h2><pre>   Solid Week</pre></h2>",
					Badge4 : "<h2><pre>  5-Mile Ride</pre></h2>",
					Badge5 : "<h2><pre>   5K Run</pre></h2>",
					Badge6 : "<h2><pre> Double Duty</pre></h2>",
					Badge7 : "<h2><pre>   100K Ultra</pre></h2>",
					Badge8 : "<h2><pre>    On Fire</pre></h2>",
					Badge9 : "<h2><pre>  Zen Master</pre></h2>",
					Badge10 : "<h2><pre>    Marathon</pre></h2>",
					Badge11 : "<h2><pre>   Intense 150</pre></h2>",
					Badge12 : "<h2><pre>   GOOOAAALLL!</pre></h2>",
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
		_getDialog: function () {
			var oView = this.getView();
			var oDialog = oView.byId("dialog2");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "successhealth.SuccessHealth01.view.SaveHRA", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}
			//debugger;
			return oDialog;
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onAct: function () {
			this.getRouter().navTo("HealthGoals");
		},
		onClose: function () {
			this.getRouter().navTo("Home");
		},
		onSave: function () {
			MessageToast.show("Dialog opened");
			this._getDialog().open();
			MessageToast.show("Dialog opened");
		},

		closeDialog: function () {
			this._getDialog().close();
			MessageToast.show("Dialog closed");

		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/ );
			}
		}
	});
});