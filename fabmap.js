
document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.getElementById("mapContainer");
    const mapFrame = document.getElementById("mapFrame");
    const openMap = document.getElementById("openMap");
    const closeMap = document.getElementById("closeMap");

    function toggleMap(event) {
        event.preventDefault(); // Mencegah reload halaman

        if (mapContainer.style.display === "flex") {
            mapContainer.style.display = "none";
            mapFrame.src = ""; // Kosongkan iframe agar tidak terus loading
        } else {
            mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.439852537368!2d112.6168127741419!3d-7.997119579335254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ef2dc90b3e89%3A0xf1e4c76c6bf5f6b5!2sBandungrejosari%2C%20Kec.%20Sukun%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1706898561234";
            mapContainer.style.display = "flex";
        }
    }

    openMap.addEventListener("click", toggleMap);
    closeMap.addEventListener("click", toggleMap);
});
