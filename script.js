// Mendapatkan elemen dengan kelas 'reveal'
const revealElements = document.querySelectorAll('.reveal');

function checkScroll() {
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Jika elemen berada di dalam viewport
        if (elementPosition < windowHeight * 0.8) { 
            element.classList.add('reveal-visible'); // Menambahkan kelas untuk menampilkan elemen
        }
    });
}

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', checkScroll);

// Panggil fungsi saat halaman pertama kali dimuat untuk memeriksa elemen-elemen yang sudah terlihat
checkScroll();
