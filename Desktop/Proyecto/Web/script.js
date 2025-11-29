// Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // Selecciona todas las alertas de mensajes
    const alerts = document.querySelectorAll('.alert');
    
    if (alerts.length > 0) {
        alerts.forEach(function(alert) {
            // Espera 5 segundos
            setTimeout(function() {
                // Añade un efecto de "fade out"
                alert.style.opacity = '0';
                
                // Espera a que termine el fade out para quitarlo del DOM
                setTimeout(function() {
                    alert.style.display = 'none';
                }, 500); // 500ms = 0.5s (la duración de la transición en el CSS)
                
            }, 5000); // 5000ms = 5 segundos
        });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.product-carousel');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    if (!carousel || !leftArrow || !rightArrow) {
        return;
    }

    const scrollAmount = 330; 

    rightArrow.addEventListener('click', function() {
        carousel.scrollBy({
            left: scrollAmount, 
            behavior: 'smooth' 
        });
    });

    leftArrow.addEventListener('click', function() {
        carousel.scrollBy({
            left: -scrollAmount, 
            behavior: 'smooth'
        });
    });
});