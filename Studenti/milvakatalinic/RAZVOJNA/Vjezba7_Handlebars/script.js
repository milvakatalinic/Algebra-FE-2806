
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
	const data 		= JSON.parse(xhr.response);
	const source   	= document.getElementById("hb-template").innerHTML;
	const template 	= Handlebars.compile(source);
	const context 	= { pokemon: data.pokemon_species.slice(0, 20) };
	const html     	= template(context);
	
	document.getElementById('hb-result').innerHTML = html;
}

xhr.onload = function() {
	fillList();
}

xhr.send();








//const source = document.getElementById("hb-template").innerHTML; //source je u kontekstu handlebara i odnosi se na table u index datoteci
//const destination = document.getElementById("hb-result");//izlaz za handlebar
//const template = Handlebars.compile(source);

//async function getPokemons() {
 //   const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");
 //   const data = await response.json();
 //   return data.pokemon_species.slice(0,20); //nacin da dobijemo prvih 20 pokemona od 87

//}
//function fillList(pokemons){

 //   const context = {pokemon: pokemons};
 //   const html = template(context);
//    destination.innerHTML = html;
//
//}
//getPokemons().then(pkmns => {
 //   fillList(pkmns)
//});