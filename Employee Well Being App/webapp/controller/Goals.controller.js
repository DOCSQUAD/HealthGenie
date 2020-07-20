sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function (Controller, MessageToast, History) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Goals", {

		onInit: function () {

		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavToHealthGoals: function (oEvent) {
			this.getRouter().navTo("HealthGoals");
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