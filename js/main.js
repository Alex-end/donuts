function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});

////////////////////////////////
////////////////////////////////
////////////////////////////////
let body = document.querySelector('body');
let search = document.querySelector('.search');
search.addEventListener('click', function(e){
	e.stopPropagation();
	this.classList.add('search-active');
})
body.addEventListener('click', function(){
	search.classList.remove('search-active');
})
////////////////////////////////
////////////////////////////////
////////////////////////////////
let menuBurger = document.querySelector('.menu__burger');
let menuBody = document.querySelector('.menu__body');

menuBurger.addEventListener('click', function(e){
	e.stopPropagation();
	menuBurger.classList.toggle('active');
	menuBody.classList.toggle('active');
	body.classList.toggle('block');
})





////////////////////////////////
////////////////////////////////
////////////////////////////////

document.querySelectorAll('.tab__trigger').forEach((item) =>
	item.addEventListener('click',function(e){
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#','');
		document.querySelectorAll('.tab__trigger').forEach((child) =>
			child.classList.remove('tab__trigger--active')
			);
		document.querySelectorAll('.tabs__content').forEach((child) =>
			child.classList.remove('tab__content--active')
			);
		item.classList.add('tab__trigger--active');
		document.getElementById(id).classList.add('tab__content--active');
	})
	);
////////////////////////////////
////////////////////////////////
////////////////////////////////
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 46.460123, lng: 30.5717051 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}