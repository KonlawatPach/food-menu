export const foodlist = async () => await fetch("https://script.google.com/macros/s/AKfycbylVa4kUOn9hxK4eariEg_7FtlLHtd8J3k93xNxq5PhhPH66Au8Ta8BOtqtuvZrSt6R-g/exec")
.then(function(response) {
    return response.json();
}).then( function(myJson:{name: string, picture: string, type: string, normal: number, extra: number, description: string}[]) {
    return myJson;
});