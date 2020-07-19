(function() {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("arq.GRC_ARQ_OVPFinal.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("arq.GRC_ARQ_OVPFinal.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());