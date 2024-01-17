$(document).ready(function(){
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

	function addStripes() {
		$('table tr').removeClass('striped');
		$('table tr:nth-child(even)').addClass('striped');
	}

	function afterRender(){
  	$('[data-toggle="popover"]').popover();
		$('table th').css('color', 'darkBlue');

		addStripes();

		setTimeout(function() {
			// selektiraj sve table td a elemente koji sadrže p
			const hideElements = $("table td a:contains('p')").filter(function(){
				// selekciji filtriraj sve elemente selekcije koji imaju 'p' na prvom mjestu 
				return this.innerHTML.indexOf('p') == 0;
			});
			// kreni prema gore, pronađi najbliži element koji odgovara zadanom css selektoru
			// i obriši ga
			hideElements.closest('tr').remove();
			addStripes();
			$('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length);
		}, 2000);
	}

	function fillList() {
		const data 		= JSON.parse(xhr.response);
		const source   	= document.getElementById("hb-template").innerHTML;
		const template 	= Handlebars.compile(source);
		const context 	= { pokemon: data.pokemon_species.slice(0, 20), tableClass: 'table' };
		const html     	= template(context);
	
		document.getElementById('hb-result').innerHTML = html;

		afterRender();
	}

	xhr.onload = function() {
		fillList();
	};

	xhr.send();
});





//$(dokument).ready(function(){
//const source = document.getElementById("hb-template").innerHTML; //source je u kontekstu handlebara i odnosi se na table u index datoteci
//const destination = document.getElementById("hb-result");//izlaz za handlebar
//const template = Handlebars.compile(source);

//function addStripes() {
//	$('table tr').removeClass('striped');
// $('table tr:nth-child(even)').addClass('striped');
	
//}

//async function getPokemons() {
 //   const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow");
 //   const data = await response.json();
 //   return data.pokemon_species.slice(0,20); //nacin da dobijemo prvih 20 pokemona od 87

//}
//function fillList(pokemons){

 //   const context = {pokemon: pokemons, tableClass: 'table'};
 //   const html = template(context);
//    destination.innerHTML = html;
//    $('[data-toggle="popover"]').popover();
//	  addStripes();
//}
//getPokemons().then(pkmns => {
 //   fillList(pkmns)
//});

//});