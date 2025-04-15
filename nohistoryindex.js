window.onload = function() {
    const currentPage = window.location.href;

    // Cek apakah halaman yang dimuat adalah 'index.html'
    if (currentPage.includes('index.html')) {
        sessionStorage.removeItem('fromPage'); // Menghapus riwayat halaman asal jika berada di index
    } else {
        // Menyimpan halaman asal selain index
        sessionStorage.setItem('fromPage', currentPage);
    }
};