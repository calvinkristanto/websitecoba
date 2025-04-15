
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const namaMakanan = document.getElementById('namaMakanan');
  
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
  
      // Ambil teks dari figcaption pada slide yang aktif
      const caption = slides[index].querySelector('figcaption');
      if (caption) {
        namaMakanan.textContent = caption.textContent;
      }
    }
  
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    // Auto slide setiap 5 detik
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);
  
    // Inisialisasi awal
    showSlide(currentSlide);