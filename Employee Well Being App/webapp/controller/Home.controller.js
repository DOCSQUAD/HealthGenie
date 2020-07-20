sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("successhealth.SuccessHealth01.controller.Home", {
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onNavToHRA: function (oEvent) {
			this.getRouter().navTo("HRA");
		},
		onNavToHealthGoals: function (oEvent) {
			this.getRouter().navTo("HealthGoals");
		},
		onNavToBurnCalories : function (oEvent) {
			this.getRouter().navTo("BurnCalories");
		},
		onNavToHealthReports : function (oEvent) {
			this.getRouter().navTo("HealthReports");
		},
		onNavToRanking : function (oEvent) {
			this.getRouter().navTo("Ranking");
		},
		onNavToMyProfile : function (oEvent) {
			this.getRouter().navTo("MyProfile");
		},
		onNavToDiscussion: function (oEvent) {
			this.getRouter().navTo("Discussion");
		},
		onNavToGainNutrition: function (oEvent) {
			this.getRouter().navTo("GainNutrition");
		},
		onAvatarPress: function( oEvent) {
			this.getRouter().navTo("MyProfile");
		},
		onNavToStats: function (oEvent) {
            this.getRouter().navTo("Stats");
        },
        onNavToRewards: function (oEvent) {
            this.getRouter().navTo("Rewards");
        },
        onNavToChallenges: function (oEvent) {
            this.getRouter().navTo("Challenges");
        },
        onNavToGoals: function (oEvent) {
            this.getRouter().navTo("Goals");
        }
	});
});