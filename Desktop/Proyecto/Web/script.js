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