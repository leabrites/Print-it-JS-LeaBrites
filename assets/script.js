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


const dots = document.getElementById("dots");
console.log(dots);

const arrow_left = document.getElementById("arrow_left");
console.log(arrow_left);

const arrow_right = document.getElementById("arrow_right");
console.log(arrow_right);

for(let i=0;i<slides.length;i++)
{
	const dot = document.createElement("div");
	dot.className="dot";
	dots.appendChild(dot);
	console.log(dots);
}
arrow_left.addEventListener("click", () => {
	console.log("clique a gauche")
  });

  arrow_right.addEventListener("click", () => {
	console.log("clique a droite")
  });

 