export const foodlist = async () => await fetch("https://script.google.com/macros/s/AKfycbwBlF1WMuMpbGOuI8d5TawOq2flf_wkIGPuiQMUCb5HeZVlGjCyxY2YNjrdbU1_ppNC/exec")
.then(function(response) {
    return response.json();
}).then( function(myJson:{name: string, picture: string, type: string, normal: number, extra: number, description: string}[]) {
    return myJson;
});