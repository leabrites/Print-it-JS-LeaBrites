const slides =  [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
function changeslide() {
	document.getElementById("banner").src="assets/images/slideshow/slide2.jpg";
}

const dots = document.getElementById("dots");
console.log(dots);

const arrow_left = document.getElementById("arrow_left");
console.log(arrow_left);

const arrow_right = document.getElementById("arrow_right");
console.log(arrow_right);

//recuperer le src de l'image et extraire le nom du fichier

const banner_img = document.getElementById("banner-img");
var filename =  banner_img.src.replace(/^.*[\\\/]/, '');
console.log(filename);

for(let i=0;i<slides.length;i++)
{
	const dot = document.createElement("div");
	dot.className="dot";
	dots.appendChild(dot);
	console.log(dots);
	if(filename==slides[i].image){
		dot.classList.add("dot_selected");
	}
}
arrow_left.addEventListener("click", () => {
	console.log("clique a gauche")
	let image_suivante = 0;
	let alldot = document.getElementsByClassName("dot");
	for(let i=0;i<slides.length;i++)
	{
		if(filename==slides[0].image){
			image_suivante= slides.length -1;
			banner_img.src="./assets/images/slideshow/"+slides[image_suivante].image;
			alldot[image_suivante].classList.add("dot_selected");
			alldot[0].classList.remove("dot_selected");
		}else if(filename==slides[i].image){
			image_suivante= i-1;
			banner_img.src="./assets/images/slideshow/"+slides[image_suivante].image;
			alldot[image_suivante].classList.add("dot_selected");
			alldot[i].classList.remove("dot_selected");
		}
	 }
  });


  arrow_right.addEventListener("click", () => {
	console.log("clique a droite")
	let image_suivante = 1;
	let alldot = document.getElementsByClassName("dot");
	for(let i=1;i<slides.length;i--)
	{
		if(filename==slides[1].image){
			image_suivante= slides.length +1;
			banner_img.src="./assets/images/slideshow/"+slides[image_suivante].image;
			alldot[image_suivante].classList.add("dot_selected");
			alldot[1].classList.remove("dot_selected");
		}else if(filename==slides[i].image){
			image_suivante= i+1;
			banner_img.src="./assets/images/slideshow/"+slides[image_suivante].image;
			alldot[image_suivante].classList.add("dot_selected");
			alldot[i].classList.remove("dot_selected");
		}
	 }
  });

 