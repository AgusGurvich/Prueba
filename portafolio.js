const objetosArchivados = document.querySelectorAll(".archivado");
const objetosPlantillas = document.querySelectorAll(".plantilla");
const objetosActuales = document.querySelectorAll(".actual");
const objetosTodos = document.querySelectorAll(".article__object");



const mainColor = "blue";
const navBoton = document.querySelector(".header__boton");
const nav = document.querySelector(".nav");


let navSeleccionado = true;

const article = document.querySelector(".nav__article");


// Para el NAV

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
		navSeleccionado = true;
	}
})


// Para el Selector

const selector =  document.querySelector(".article__selector");
const todos = document.querySelector(".Todos");
const actuales = document.querySelector(".Actuales");
const archivados = document.querySelector(".Archivados");
const plantillas = document.querySelector(".Plantillas");


todos.addEventListener("mouseover", ()=>{
	todos.style.cssText = ' transition: all .2s; border-bottom: 4px solid var(--main); color: var(--main); '
	actuales.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	archivados.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	plantillas.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '

	for(objeto of objetosTodos){
	// objeto.style.backgroundColor = "red";

	
	objeto.style.display = "flex";	
		objeto.style.animationName = "aparecerObjetos";
	objeto.style.animationDuration = "1s";
}
})


archivados.addEventListener("mouseover", ()=>{
	archivados.style.cssText = ' transition: all .2s; border-bottom: 4px solid var(--main); color: var(--main); '
	actuales.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	todos.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	plantillas.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '

	for(objeto of objetosTodos){
	objeto.style.display = "none";
}

		for(objeto of objetosArchivados){
	// objeto.style.backgroundColor = "red";
		
	objeto.style.display = "flex";	
	objeto.style.animationName = "aparecerObjetos";
	objeto.style.animationDuration = "1s";
}

for(objeto of objetosActuales){
	// objeto.style.backgroundColor = "green";
			objeto.style.display = "none";	
}

for(objeto of objetosPlantillas){
	// objeto.style.backgroundColor = "gray";	
	objeto.style.display = "none";	
}
})



actuales.addEventListener("mouseover", ()=>{
	actuales.style.cssText = ' transition: all .2s; border-bottom: 4px solid var(--main); color: var(--main); '
	todos.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	archivados.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	plantillas.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '


// 	for(objeto of objetosTodos){
// 	objeto.style.display = "none";
// }

		for(objeto of objetosArchivados){
	// objeto.style.backgroundColor = "red";
	objeto.style.display = "none";	
}

for(objeto of objetosActuales){
	// objeto.style.backgroundColor = "green";
		objeto.style.display = "none";
			objeto.style.display = "flex";	
		objeto.style.animationName = "aparecerObjetos";
	objeto.style.animationDuration = "1s";
}

for(objeto of objetosPlantillas){
	// objeto.style.backgroundColor = "gray";	
	objeto.style.display = "none";	
}

})


plantillas.addEventListener("mouseover", ()=>{
	plantillas.style.cssText = ' transition: all .2s; border-bottom: 4px solid var(--main); color: var(--main); '
	actuales.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	archivados.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '
	todos.style.cssText = ' transition: all .2s; border-bottom: 1px solid #eee; color: #666; '

// 	for(objeto of objetosTodos){
// 	objeto.style.display = "none";
// }

		for(objeto of objetosArchivados){
	objeto.style.display = "none";	
}

for(objeto of objetosActuales){
	// objeto.style.backgroundColor = "green";
			objeto.style.display = "none";	
}

for(objeto of objetosPlantillas){
	// objeto.style.backgroundColor = "gray";
		objeto.style.display = "none";	
	objeto.style.display = "flex";	
	objeto.style.animationName = "aparecerObjetos";
	objeto.style.animationDuration = "1s";
}

})

console.log(objetosArchivados);
