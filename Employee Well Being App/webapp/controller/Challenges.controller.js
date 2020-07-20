sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Challenges", {
		onNavBack: function (oEvent) {
			// var oHistory, sPreviousHash;

			// oHistory = History.getInstance();
			// sPreviousHash = oHistory.getPreviousHash();

			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
				this.getRouter().navTo("Home", {}, true /*no history*/ );
			// }
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onpressDanceFitness: function() {
			MessageToast.show("You have enrolled successfully");
			this.byId("tiles").setVisible(true);
			// MessageToast.show("Dialog opened");
		}
	});
});