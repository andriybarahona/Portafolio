
document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('formulario-contacto');


    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();


        const nombreUsuario = document.getElementById('nombre').value;

        alert(`¡Gracias por tu mensaje, ${nombreUsuario}! Me pondré en contacto contigo pronto.`);

      
        formulario.reset();
    });

});