// Manipulacion del DOM
//CONSUMO DE LA APPI
url = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap'
console.log(url);

window.onload = () =>{


fetch(url)
.then(res => res.json)
.then(data =>{
maps(data);
console.log(data)
});

}