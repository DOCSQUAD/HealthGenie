sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Stats", {
		onInit: function () {
			this.model = new sap.ui.model.json.JSONModel("data/activities.json");
			this.getView().setModel(this.model, "model3");
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