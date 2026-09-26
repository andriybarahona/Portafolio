// Esperamos a que todo el contenido de la página cargue
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtenemos el formulario por su ID
    const formulario = document.getElementById('formulario-contacto');

    // Agregamos un evento para cuando el usuario intente enviarlo
    formulario.addEventListener('submit', function(evento) {
        
        // Evitamos que la página se recargue (comportamiento por defecto)
        evento.preventDefault();

        // Obtenemos el nombre ingresado para personalizar el mensaje
        const nombreUsuario = document.getElementById('nombre').value;

        // Mostramos una alerta (aquí podrías agregar lógica real de envío en el futuro)
        alert(`¡Gracias por tu mensaje, ${nombreUsuario}! Me pondré en contacto contigo pronto.`);

        // Limpiamos los campos del formulario
        formulario.reset();
    });

});