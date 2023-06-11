
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contacto").addEventListener('submit', validarFormulario); 
    });
    
    function validarFormulario(evento) {
    
        evento.preventDefault();
        let name = document.getElementById('nombre').value;
        if(name.length == 0) {
        alert('Escriba su nombre');
        return;
        }
        let lastname = document.getElementById('apellido').value;
        if(lastname.length == 0) {
        alert('Escriba su apellido');
        return;
        }
        let email = document.getElementById('correo').value;
        if(email.length == 0) {
            alert('Escriba su  email');
            return;
        }
        let message = document.getElementById('mensaje').value;
        if (message.length == 0 ) {
        alert('Escriba su mensaje');
        return;
        }
        this.submit();
    }