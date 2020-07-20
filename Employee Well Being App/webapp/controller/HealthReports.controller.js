sap.ui.define(["sap/ui/core/mvc/Controller",
"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";
	return Controller.extend("successhealth.SuccessHealth01.controller.HealthReports", {

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Home", {}, true /*no history*/ );
			}
		},
		onNavToHealthGoals: function (oEvent) {
			this.getRouter().navTo("Goals");
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onInit: function () {
			// var oVizFrame = this.getView().byId("idcolumn");
			// // var oVizFrame1 = this.getView().byId("idcolumn1");
			// var oModel = new sap.ui.model.json.JSONModel();
			// var data = {
			// 	'Steps': [{
			// 		"Day": "Mon",
			// 		"Value": "1586"
			// 	}, {
			// 		"Day": "Tue",
			// 		"Value": "5311"
			// 	}, {
			// 		"Day": "Wed",
			// 		"Value": "915"
			// 	}, {
			// 		"Day": "Thur",
			// 		"Value": "109"
			// 	}, {
			// 		"Day": "Fri",
			// 		"Value": "127"
			// 	}, {
			// 		"Day": "Sat",
			// 		"Value": "1270"
			// 	}, {
			// 		"Day": "Sun",
			// 		"Value": "2275"
			// 	}],
			// 	'WellnessScore': [{
			// 		"Factors": "Cardiac",
			// 		"Value": "24"
			// 	}, {
			// 		"Factors": "Cancer",
			// 		"Value": "15"
			// 	}, {
			// 		"Factors": "Alcohol",
			// 		"Value": "58"
			// 	}, {
			// 		"Factors": "Stress",
			// 		"Value": "90"
			// 	}, {
			// 		"Factors": "Sleep",
			// 		"Value": "60"
			// 	}, {
			// 		"Factors": "Nutrition",
			// 		"Value": "54"
			// 	}, {
			// 		"Factors": "Diabetes",
			// 		"Value": "32"
			// 	}]
			// };
			// oModel.setData(data);
			// var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			// 	dimensions: [{
			// 		name: 'Day',
			// 		value: "{Day}"
			// 	}],

			// 	measures: [{
			// 		name: 'Steps',
			// 		value: '{Value}'
			// 	}],

			// 	data: {
			// 		path: "/Steps"
			// 	}
			// });
			// oVizFrame.setDataset(oDataset);
			// oVizFrame.setModel(oModel);
			// oVizFrame.setVizType('line');
			// oVizFrame.setVizProperties({
			// 	plotArea: {
			// 		colorPalette: d3.scale.category20().range()
			// 	},
			// 	title: {
			// 		text: "Steps Taken"
			// 	}
			// });

			// var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "valueAxis",
			// 		'type': "Measure",
			// 		'values': ["Steps"]
			// 	}),
			// 	feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "categoryAxis",
			// 		'type': "Dimension",
			// 		'values': ["Day"]
			// 	});
			// oVizFrame.addFeed(feedValueAxis);
			// oVizFrame.addFeed(feedCategoryAxis);
			//Graph 2 for calories intake

			// var oDataset1 = new sap.viz.ui5.data.FlattenedDataset({
			// 	dimensions: [{
			// 		name: 'Factors',
			// 		value: "{factors}"
			// 	}],

			// 	measures: [{
			// 		name: 'Score',
			// 		value: '{score}'
			// 	}],

			// 	data: {
			// 		path: "/WellnessScore"
			// 	}
			// });
			// oVizFrame1.setDataset(oDataset1);
			// oVizFrame1.setModel(oModel);
			// oVizFrame1.setVizType('column');
			// oVizFrame1.setVizProperties({
			// 	plotArea: {
			// 		colorPalette: d3.scale.category20().range()
			// 	},
			// 	title: {
			// 		text: "Wellness Score"
			// 	}
			// });

			// var feedValueAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "valueAxis",
			// 		'type': "Measure",
			// 		'values': ["Score"]
			// 	}),
			// 	feedCategoryAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "categoryAxis",
			// 		'type': "Dimension",
			// 		'values': ["Factors"]
			// 	});
			// oVizFrame1.addFeed(feedValueAxis1);
			// oVizFrame1.addFeed(feedCategoryAxis1);

		}

	});
});