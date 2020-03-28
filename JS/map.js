function loadMap() {
  var mymap = L.map('mapid').setView([47.310750, 5.068530], 1.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoiam9ybGNrIiwiYSI6ImNrNWwxd2hseTBpb2Yza3FrajByc3I0YzAifQ.DplE4lQVvqt6ny25oFoJpw'
}).addTo(mymap);

var marker = L.marker([49.997186, 8.279144]).addTo(mymap);
marker.bindPopup("<b>Mayence</b><br>University of Applied Sciences"); /*.openPopup()*/

var marker2 = L.marker([52.827272, -6.936063]).addTo(mymap);
marker2.bindPopup("<b>Carlow</b><br>Institute of Technology Carlow");

var marker3 = L.marker([53.277555, -9.010650]).addTo(mymap);
marker3.bindPopup("<b>Galway</b><br>Mayo Institute of Technology");

var marker4 = L.marker([-34.900194, -57.931821]).addTo(mymap);
marker4.bindPopup("<b>La Plata</b><br>Universidad Nacional de la Plata");

var marker5 = L.marker([48.419029, -71.052642]).addTo(mymap);
marker5.bindPopup("<b>Chicoutimi</b><br>Université du Québec");

var marker6 = L.marker([45.297793, -73.268845]).addTo(mymap);
marker6.bindPopup("<b>Saint-Jean-sur-Richelieu</b><br>CEGEP");

var marker7 = L.marker([37.886272, 127.737761]).addTo(mymap);
marker7.bindPopup("<b>Chuncheon</b><br>Hallym University");

var marker8 = L.marker([37.540797, 127.079332]).addTo(mymap);
marker8.bindPopup("<b>Seoul</b><br>Konkuk University");

var marker9 = L.marker([37.321615, 127.126740]).addTo(mymap);
marker9.bindPopup("<b>Yongin</b><br>Dankook University");

var marker10 = L.marker([12.916948, 77.619408]).addTo(mymap);
marker10.bindPopup("<b>Bangalore</b><br>Alliance University");

var marker11 = L.marker([4.383645, 100.971439]).addTo(mymap);
marker11.bindPopup("<b>Petronas</b><br>Université technologique de Petronas");

var marker12 = L.marker([13.729872, 100.778310]).addTo(mymap);
marker12.bindPopup("<b>Bangkok</b><br>King Mongkut's institute of technology Ladkabang");

var marker13 = L.marker([13.711948, 100.581809]).addTo(mymap);
marker13.bindPopup("<b>Bangkok</b><br>University of Bangkok");

var marker14 = L.marker([16.073806, 108.149909]).addTo(mymap);
marker14.bindPopup("<b>Danang</b><br>Danang University of technology");
}

window.onload = loadMap;