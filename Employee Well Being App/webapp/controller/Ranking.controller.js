sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function (Controller, MessageToast, History) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Ranking", {
		
		onInit: function(){
			this.model = new sap.ui.model.json.JSONModel("data/ranking.json");
			this.getView().setModel(this.model, "model1");
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
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