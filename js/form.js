var form = document.getElementById("form-contact");

var otroInput = document.getElementsByName("conocido");

var inputOtro = document.createElement("input");
inputOtro.setAttribute("id", "otro");
inputOtro.setAttribute("type", "text");
inputOtro.setAttribute("name", "otro");
inputOtro.setAttribute("required", "");

for (var i = 0; i < otroInput.length; i++){
	otroInput[i].addEventListener('click', function(event){
		if (this.value == 'otro'){
			this.parentNode.appendChild(inputOtro);
		}else{
			if (document.getElementById("otro")) {
				this.parentNode.removeChild(inputOtro);
			}
		}
	});
}

/*contador palabras*/
$(document).ready(function(){
    $('#mensaje').keyup(function(){
        $(this).val(limitar_palabras($(this).val(),150));
    });
     
});
function limitar_palabras(texto, limite){
    var palabras = texto.split(/\b[\s,\.\-:;]*/,limite);
    texto=palabras.join(" ");

    return texto;
   
}

/*$('#mensaje').keyup(function(){
     var palabras = $(this).val().split(/\b[\s,\.\-:;]*//*).lenght;
     $('#contador').text('Has escrito en total '+ palabras +' palabras');
});*/
/*validar numero formulario*/
$("#form-contact").submit(function () {  
    if(isNaN($("#numero").val())) {  
        alert("El teléfono solo debe contener números");  
         return false;
    }else if ($("#numero").val().length < 1) {  
        alert("El teléfono es obligatorio");  
        return false;
    }else if ($("#numero").val().length < 9) {  
        alert("El teléfono debe tener 9 caracteres. Ej. 689675543");  
        return false;
   }
}); 
/*fin validar numero formulario*/


form.addEventListener("submit", function(event){

var inputNombre = document.getElementById("nombre");

var otroSelectInput = {
        "conocido": document.getElementById("concido"),
        "linkedin": document.getElementById("linkedin"),
        "web": document.getElementById("web"),
        "otro": document.getElementById("otro")
    };

var emailInput = document.getElementById("email");


if(otroSelectInput.otro.checkValidity() == false) {
        alert("Selecciona como me has conocido");
        event.preventDefault();
        return false;
    }

    if(document.getElementById("otro")) {
        if(document.getElementById("otro").checkValidity() == false){
            alert("Escribe como me has conocido");
            document.getElementById("otro").focus();
            event.preventDefault();
            return false;
        }
    }

if(inputNombre.checkValidity() == false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

if(email.checkValidity() == false) {
        alert("Escribe tus email correcto");
        email.focus();
        event.preventDefault();
        return false;
    }


event.preventDefault();

    setTimeout(function(){
        sendNotification("Formulario recibido", "En breve tendrás respuesta");
    })
});