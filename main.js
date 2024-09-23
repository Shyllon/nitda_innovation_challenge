// Create the map and set its view to Plateau State's coordinates
var map = L.map('map').setView([9.2182, 9.5174], 8);  // Coordinates for Plateau State

// Add a tile layer from OpenStreetMap (Leaflet uses this by default)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Placeholder marker for testing
L.marker([9.2182, 9.5174]).addTo(map)
    .bindPopup('Plateau State Health Facility')
    .openPopup();
