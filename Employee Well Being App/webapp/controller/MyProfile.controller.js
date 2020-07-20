sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel'
], function (Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.MyProfile", {
		onInit: function () {
			var oData = {
				"SelectedProduct": "HT-1001",
				"ProductCollection": [{
					"ProductId": "HT-1000",
					"Name": "Notebook Basic 15"
				}, {
					"ProductId": "HT-1001",
					"Name": "Notebook Basic 17"
				}, {
					"ProductId": "HT-1002",
					"Name": "Notebook Basic 18"
				}, {
					"ProductId": "HT-1003",
					"Name": "Notebook Basic 19"
				}, {
					"ProductId": "HT-1007",
					"Name": "ITelO Vault"
				}, {
					"ProductId": "HT-1010",
					"Name": "Notebook Professional 15"
				}, {
					"ProductId": "HT-1011",
					"Name": "Notebook Professional 17"
				}, {
					"ProductId": "HT-1020",
					"Name": "ITelO Vault Net"
				}, {
					"ProductId": "HT-1021",
					"Name": "ITelO Vault SAT"
				}, {
					"ProductId": "HT-1022",
					"Name": "Comfort Easy"
				}, {
					"ProductId": "HT-1023",
					"Name": "Comfort Senior"
				}],
				"Editable": true,
				"Enabled": true
			};

			// set explored app's demo model on this sample
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onEdit: function (oEvent) {
			this.byId("ProfileEdit").setVisible(true);
			this.byId("ProfileDisplay").setVisible(false);
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			this.byId("ProfileEdit").setVisible(false);
			this.byId("ProfileDisplay").setVisible(true);
			
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