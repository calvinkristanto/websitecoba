// Inisialisasi peta
var map = L.map('map').setView([-8.0038908,112.6049093], 15);

// Tambahkan layer peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Data lokasi (nama lokasi, latitude, longitude)
var locations = [
    ["LOCATION 1", -8.001043, 112.611261],
    ["LOCATION 2", -8.003432, 112.612656],
    ["LOCATION 3", -8.001562, 112.612733],
    ["LOCATION 4", -8.000981, 112.612184],
    ["LOCATION 5", -8.001600, 112.612452]
];

// Tambahkan marker ke peta
for (var i = 0; i < locations.length; i++) {
    var marker = L.marker([locations[i][1], locations[i][2]])
        .bindPopup("<b>" + locations[i][0] + "</b>")
        .addTo(map);
}
