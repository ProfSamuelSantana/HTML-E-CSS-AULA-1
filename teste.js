let sections = document.querySelectorAll('main section');
let currentIndex = 0;

function showSlide(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= sections.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Mostra o primeiro slide
showSlide(currentIndex);

// Define um intervalo para trocar de slide a cada 3 segundos (3000 milissegundos)
setInterval(nextSlide, 5000);
