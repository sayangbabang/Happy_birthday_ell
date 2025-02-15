onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', function() {
    let audio = document.getElementById('birthdaySong');
    
    setTimeout(() => {
        audio.play().catch(error => console.log("Autoplay diblokir, butuh interaksi pengguna: " + error));
    }, 2000); // Delay 2 detik untuk memberi waktu pada browser
    
    // Jika autoplay masih diblokir, mulai setelah pengguna berinteraksi dengan halaman
    document.body.addEventListener('click', () => {
        audio.play();
    });
});