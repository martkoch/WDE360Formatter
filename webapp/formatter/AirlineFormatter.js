sap.ui.define([], function() {

    return {
        availability: function(nSeatsMax, nSeatsOcc) {
            
            var nFreeSeats = nSeatsMax - nSeatsOcc;
            if(nFreeSeats >= 30) {
                return "sap-icon://message-success";
            } else {
                return "sap-icon://message-warning";
            }
            
        }  
    };
});