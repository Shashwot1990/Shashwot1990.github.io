// Create a new map centered on the continental US
var map = L.map('map').setView([38, -95], 4);

// === BASEMAP ===
// You can switch to any of these basemaps:
// 1. Esri Dark Gray
// var basemapUrl = 'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';
// 2. USGS Imagery Topo
// var basemapUrl = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}';
// 3. OpenStreetMap (default)
var basemapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var basemap = L.tileLayer(basemapUrl, {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// === WEATHER RADAR LAYER ===
var radarUrl = 'https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi';
var radarDisplayOptions = {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'Radar: Iowa State University Mesonet'
};
var radar = L.tileLayer.wms(radarUrl, radarDisplayOptions).addTo(map);

// === WEATHER ALERTS GEOJSON ===
var weatherAlertsUrl = 'https://api.weather.gov/alerts/active?region_type=land';

$.getJSON(weatherAlertsUrl, function(data) {
  L.geoJSON(data, {
    // Set dynamic styling based on severity
    style: function(feature) {
      var alertColor = 'orange';
      if (feature.properties.severity === 'Severe') alertColor = 'red';
      if (feature.properties.severity === 'Extreme') alertColor = 'purple';
      if (feature.properties.severity === 'Minor') alertColor = 'yellow';
      return { color: alertColor };
    },
    // Add popups with alert info
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.headline);
    }
  }).addTo(map);
});
