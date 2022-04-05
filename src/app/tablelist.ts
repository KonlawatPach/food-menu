export const tablelist = async () => await fetch("https://script.google.com/macros/s/AKfycbx08MwBf9CdAtW1Qnae4PZMB2jsV9Lu2prb__10qLBRmCXAEDPOuByArckXXz4WO2A8/exec")
    .then(function(response) {
        return response.json();
    }).then( function(myJson:{number: number, status: string, type: string}[]) {
        return myJson;
    });