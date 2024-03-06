// document.write("hola");



const mainColor = "blue";
const navBoton = document.querySelector(".header__boton");
const nav = document.querySelector(".nav");
// const inicio = document.querySelector(".inicio");
// const contactanos = document.querySelector(".contacto");
// const nosotros = document.querySelector(".nosotros");
// const portafolio = document.querySelector(".portafolio");
// const pestañaInicio = document.querySelector(".pestaña-Inicio");
// const saberMas = document.querySelector(".saber__mas");
let navSeleccionado = true;

const article = document.querySelector(".nav__article");




navBoton.addEventListener("click", ()=>{

	if (navSeleccionado) {
		nav.style.display = "flex";	
		nav.style.animationName = "abrir";
		nav.style.animationDuration = "0.7s";
		nav.style.animationFillMode = "forwards";
		navSeleccionado = false;
	}
	else {
		nav.style.animationName = "cerrar";
		nav.style.animationDuration = "0.7s";
		nav.style.animationFillMode = "forwards";
		// nav.style.display = "none";
		navSeleccionado = true;
	}

})


const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_la64rub';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});