const imgGaleria = document.querySelectorAll(".img-galeria");
const articuloUno = document.querySelector(".article__primero");
const body = document.querySelector("#body");
const header = document.querySelector(".header");
const barras = document.querySelector(".fa-bars");
const nav = document.querySelector(".contenedor");
let abierto = true;
nav.style.display = "none";
barras.addEventListener("click", ()=>{
	if(abierto){
	
		nav.style.cssText = "display: flex; flex-wrap: wrap; flex-direction: row; align-items: stretch; justify-content: center; animation-name: navAparecer; animation-duration: .5s; animation-fill-mode: forwards;";
		abierto = false;
		console.log(abierto);
	}
	else{
		nav.style.display = "none";
	
		abierto = true;
		console.log(abierto);

	}

	})

// for(img of imgGaleria){
// 	img.style.cssText = "border: 1px solid red";
// 	img.addEventListener("mouseover", ()=>{
// 		img.style.cssText = " transition: all 1s; width: 15%;";

// 	})
// }

imgGaleria[0].addEventListener("mouseover", ()=>{
	imgGaleria[0].style.cssText = " transition: all 1s; width: 15%; position: normal; z-index: 15";
})

imgGaleria[0].addEventListener("mouseout", ()=>{
	imgGaleria[0].style.cssText = " transition: all 1s; width: 10%; position: normal; z-index: 15";
})
imgGaleria[1].addEventListener("mouseover", ()=>{
	imgGaleria[1].style.cssText = " transition: all 1s; width: 15%; position: normal; z-index: 15";
})

imgGaleria[1].addEventListener("mouseout", ()=>{
	imgGaleria[1].style.cssText = " transition: all 1s; width: 10%; position: normal; z-index: 15";
})
imgGaleria[2].addEventListener("mouseover", ()=>{
	imgGaleria[2].style.cssText = " transition: all 1s; width: 15%; position: normal;  z-index: 15";
})

imgGaleria[2].addEventListener("mouseout", ()=>{
	imgGaleria[2].style.cssText = " transition: all 1s; width: 10%;  position: normal; z-index: 15";
})
imgGaleria[3].addEventListener("mouseover", ()=>{
	imgGaleria[3].style.cssText = " transition: all 1s; width: 15%; position: normal;  z-index: 15";
})

imgGaleria[3].addEventListener("mouseout", ()=>{
	imgGaleria[3].style.cssText = " transition: all 1s; width: 10%; position: normal;  z-index: 15";
})
imgGaleria[4].addEventListener("mouseover", ()=>{
	imgGaleria[4].style.cssText = " transition: all 1s; width: 15%;  position: normal; z-index: 15";
})

imgGaleria[4].addEventListener("mouseout", ()=>{
	imgGaleria[4].style.cssText = " transition: all 1s; width: 10%;  position: normal; z-index: 15";
})
imgGaleria[5].addEventListener("mouseover", ()=>{
	imgGaleria[5].style.cssText = " transition: all 1s; width: 15%;  position: normal; z-index: 15";
})

imgGaleria[5].addEventListener("mouseout", ()=>{
	imgGaleria[5].style.cssText = " transition: all 1s; width: 10%;  position: normal; z-index: 15";
})
imgGaleria[6].addEventListener("mouseover", ()=>{
	imgGaleria[6].style.cssText = " transition: all 1s; width: 15%;  position: normal; z-index: 15";
})

imgGaleria[6].addEventListener("mouseout", ()=>{
	imgGaleria[6].style.cssText = " transition: all 1s; width: 10%; position: normal;  z-index: 15";
})
imgGaleria[7].addEventListener("mouseover", ()=>{
	imgGaleria[7].style.cssText = " transition: all 1s; width: 15%; position: normal;  z-index: 15";
})

imgGaleria[7].addEventListener("mouseout", ()=>{
	imgGaleria[7].style.cssText = " transition: all 1s; width: 10%; position: normal;  z-index: 15";
})
imgGaleria[8].addEventListener("mouseover", ()=>{
	imgGaleria[8].style.cssText = " transition: all 1s; width: 15%; position: normal;  z-index: 15";
})

imgGaleria[8].addEventListener("mouseout", ()=>{
	imgGaleria[8].style.cssText = " transition: all 1s; width: 10%; position: normal;  z-index: 15";
})
imgGaleria[9].addEventListener("mouseover", ()=>{
	imgGaleria[9].style.cssText = " transition: all 1s; width: 15%; position: normal;  z-index: 15";
})

imgGaleria[9].addEventListener("mouseout", ()=>{
	imgGaleria[9].style.cssText = " transition: all 1s; width: 10%; position: normal;  z-index: 15";
})


const verificar = (entries) => {
	const entrySegundo = entries[0];
	

	if(entrySegundo.isIntersecting){
		header.style.cssText = " transition: all .8s; opacity: .8;"
		console.log("se ve");
	}
	else{
		header.style.cssText = " transition: all 500ms ;opacity: 0;"
		console.log("no se ve");
	}
	
}

console.log(body);

const opciones = {
	rootMargin: "-5px"  
}

const observer = new IntersectionObserver(verificar, opciones);




observer.observe(body);