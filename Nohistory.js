
// Saat halaman dimuat, cek apakah user kembali dengan tombol back
window.addEventListener('pageshow', function (event) {
    if (event.persisted || performance.getEntriesByType("navigation")[0]?.type === "back_forward") {
        const backTo = sessionStorage.getItem('fromPage') || 'index.html';
        window.location.replace(backTo);
    }
});

// Menyimpan halaman asal saat halaman dimuat
window.onload = function() {
    if (document.referrer.includes("kue.html")) {
        sessionStorage.setItem('fromPage', 'kue.html');
    } else {
        sessionStorage.setItem('fromPage', 'index.html');
    }
};
