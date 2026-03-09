const mapDiv = document.getElementById("map");

if (mapDiv) {
  const lat = parseFloat(mapDiv.dataset.lat);
  const lng = parseFloat(mapDiv.dataset.lng);
  const title = mapDiv.dataset.title;
  const location = mapDiv.dataset.location;

  if (!isNaN(lat) && !isNaN(lng)) {
    const map = L.map("map").setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`<b>${location}</b><br>Exact Location provided after booking`)
      .openPopup();
  }
}
