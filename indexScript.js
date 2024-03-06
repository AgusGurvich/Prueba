
//Seteamos los elementos que vamos a utilizar

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

// article.style.zIndex = "20";

// pestañaInicio.style.backgroundColor = "black";

// pestañaInicio.style.cssText = 'z-index: 1';

// pestañaInicio.style.zIndex = "1";


// const cierre = async function cerrar() {
// 	await nav.style.animationName = "cerrar";
// 	await	nav.style.animationDuration = "0.7s";
// 	await 	nav.style.animationFillMode = "forwards";

// }

// saberMas.addEventListener("mouseover", ()=>{
// 	saberMas.style.backgroundColor = "blue";
// })

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

// function botones(boton) {

// 		let clase = ".pestaña-" + boton.textContent;
// 		let pestaña = document.querySelector(clase);

// 	boton.addEventListener("mouseover", ()=>{
// 		pestaña.style.display = "flex";
// 		article.style.zIndex = "25";
// 		boton.style.cssText = '	border-bottom: 4px solid var(--main);';
// 		boton.style.color = mainColor;
// 	})
// 	boton.addEventListener("mouseout", ()=>{
// 		boton.style.color = "black";
// 		article.style.zIndex = "2";
// 		pestaña.style.display = "none";
// 		boton.style.cssText = '	border: none';

// 	})

// 	pestaña.addEventListener("mouseover", ()=>{
// 		pestaña.style.display = "flex";
// 		article.style.zIndex = "25";
// 		boton.style.cssText = '	border-bottom: 4px solid var(--main);';
// 		boton.style.color = mainColor;
// 	})

// 	pestaña.addEventListener("mouseout", ()=>{
// 		article.style.zIndex = "2";	
// 		pestaña.style.display = "none";
// 		boton.style.cssText = '	border: none';
// 		boton.style.color = "black";
// 	})
// }

// botones(portafolio);
// botones(nosotros);
// botones(contactanos);
// botones(inicio);