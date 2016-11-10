sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"com/sap/training/formatter/AirlineFormatter",
	"sap/ui/model/Filter"
], function(Controller, JSONModel, Device, AirlineFormatter, Filter) {
	"use strict";

	return Controller.extend("com.sap.training.controller.Main", {
        
        fr: AirlineFormatter,
        onInit: function() {
            var oModel = new JSONModel();
            oModel.loadData("data/data.json");
            this.getView().setModel(oModel);
            
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            this.getView().setModel(oDeviceModel, "device");
        },
        
        carrName: function(sCarrId) {
            var sName = "";
            switch(sCarrId) {
                case "AH": 
                    sName = "Lufthansa";
                    break;
                case "AZ": 
                    sName = "Alitalia";
                    break;
                case "JL":
                    sName = "Japan Airlines";
                    break;
                default: 
                    sName = sCarrId;
            }
            
            return sName;
        },
        
        onAirlineChange: function(oControlEvent) {
            var oItem = oControlEvent.getParameter("selectedItem");
            var sKey = oItem.getKey();
            
            var oFilter = new Filter("carrId", sap.ui.model.FilterOperator.EQ, sKey);
            var aFilter = [];
            
            if(sKey.trim().length > 0) {
                aFilter.push(oFilter);
            }
            
            var oFlightTable = this.getView().byId("idFlightTable");
            oFlightTable.getBinding("items").filter(aFilter);
            
            
            //console.log(sKey);
        }
	});
});