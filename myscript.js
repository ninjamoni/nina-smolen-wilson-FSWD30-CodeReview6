//Bulduing a constructor class for the data
class Cds {
	constructor(title, author, genre, publisher, img, rating) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.img = img;
		this.rating = rating //0; //or rating
	}
}


//Filling data for the constructor class Cds
var newCds = [
new Cds("Diamond Life", "Sade", "Smooth Soul", "Epic", "img/sade-diamond-life.jpg", 5),
new Cds("Dylan", "Bob Dylan", "Rock", "Columbia", "img/Bob_Dylan__Dylan.jpg", 4),
new Cds("Trodin on", "Gentleman", "Reggae, Dancehall", "Four Music, Columbia", "img/trodinon_gentleman.jpg", 5),
];

//creating a new variable to show data in HTML
var allCds = document.getElementById("CD");

//Looping to create allCds Colums and data

for (var i=0; i < newCds.length; i++) {
	allCds.innerHTML += 
	'<div class="columsCds col-md-4 col-sm-12" id="' + i +'">' + 
		'<div class="pic"><img class="imgCds rounded" src="' + newCds[i].img + '">' + 
		'</div>' + 
		'<div class="details my-3 bg-light"><b>Title</b>: ' + newCds[i].title 
					 + ' <br><b>Author</b>: ' + newCds[i].author 
					 + ' <br><b>Genre</b>: ' + newCds[i].genre 
					 + ' <br><b>Publisher</b>: ' + newCds[i].publisher 
					 + ' <br> ' 
					 + 
		'</div>' + 
		'<div class="ratandstars"><div class="rating"><button id="add" class="btnrating" value=""><b>Rating</b>:</button>' + 
		'</div>' + '<div class="stars" id="rating"><span> ★</span><span>★</span><span>★</span><span>★</span><span>★ </span>' + '<b>' + newCds[i].rating + '</b>' + '</div></div>' 
	'</div>';
}



class Books {
	constructor(title, author, genre, publisher, img, rating) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.img = img;
		this.rating = rating; //0; //or rating
	}
}


//Filling data for the constructor class Books
var newBooks = [
new Books("Woodwalkers", "Katja Brandis", "Belletristik", "Bild", "img/woodwalkers.jpg", 5),
new Books("Foundation", "Isaac Asimov", "Fantasy Science Fiction", "Heyne", "img/fondation-asimov.jpg", 3),
new Books("31 Songs", "Nick Hornby", "Non-Fiction", "Penguin Books", "img/Hornby_31Songs.jpg", 4),
];

  
 

//creating a new variable to show data in HTML
var allBooks = document.getElementById("BOOK");

//Looping to create allBooks Colums and data

for (var i=0; i < newBooks.length; i++) {
	allBooks.innerHTML += 
	'<div class="columsBooks col-md-4 col-sm-12" id="' + i +'">' + 
		'<div class="pic"><img class="imgBooks rounded" src="' + newBooks[i].img + '">' + 
		'</div>' + 
		'<div class="details my-3 bg-light outline-dark"><b>Title</b>: ' + newBooks[i].title 
					 + ' <b><br>Author</b>: ' + newBooks[i].author 
					 + ' <b><br>Genre</b>: ' + newBooks[i].genre 
					 + ' <b><br>Publisher</b>: ' + newBooks[i].publisher 
					 + ' <br> ' 
					 + 
		'</div>' + 
		'<div class="ratandstars"><div class="rating"><button id="add" class="btnrating" value=""><b>Rating</b>:</button>' + 
		'</div>' + '<div class="stars" id="sarat"><span>   ★</span><span>★</span><span>★</span><span>★</span><span>★ </span>' + '<b>' + newBooks[i].rating +'</b>' + '</div></div>' 
	'</div>';
}



//Bulduing a constructor class for the data
class Dvds {
	constructor(title, author, genre, publisher, img, rating) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.img = img;
		this.rating = rating //0; //or rating
	}
}


//Filling data for the constructor class Dvds
var newDvds = [
new Dvds("City lights", "Charlie Chaplin", "Romantic Comedy", "United Artists", "img/citylights_image.jpg", 4),
new Dvds("Lawrence of Arabia", "T.E.Lawrence", "Historical Drama", "Columbia Pictures", "img/Lawrence_of_arabia.jpg", 3),
new Dvds("Live and Become", "Radu Mihăileanu", "Drama", "menemshafilms u.a.", "img/LiveAndBecome.jpg", 5),
];


//creating a new variable to show data in HTML
var allDvds = document.getElementById("DVD");

//Looping to create allDvds Colums and data

for (var i=0; i < newDvds.length; i++) {
	allDvds.innerHTML += 
	'<div class="columsDvd col-md-4 col-sm-12" id="' + i +'">' + 
		'<div class="pic"><img Class="imgDvds rounded" src="' + newDvds[i].img + '">' + 
		'</div>' + 
		'<div class="details my-3 bg-light outline-dark"><b>Title</b>: ' + newDvds[i].title 
					 + ' <br><b>Author</b>: ' + newDvds[i].author 
					 + ' <br><b>Genre</b>: ' + newDvds[i].genre 
					 + ' <br><b>Publisher</b>: ' + newDvds[i].publisher 
					 + ' <br> ' 
					 + 
		'</div>' + 
		'<div class="ratandstars"><div class="rating"><button id="add" class="btnrating" value=""><b>Rating</b>:</button>' + 
		'</div>' + '<div class="stars" id="rating"><span>   ★</span><span>★</span><span>★</span><span>★</span><span>★ </span>' + '<b>' + newDvds[i].rating + '</b>' + '</div></div>' 
	'</div>';
}


//Bulduing a constructor class for the data
class Comics {
	constructor(title, author, genre, publisher, img, rating) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.img = img;
		this.rating = rating //0; //or rating
	}
}


//Filling data for the constructor class Comis
var newComics = [
new Comics("Jessica Jones (2015) Nr.1", "Brian Michael Bendis", "Comic", "Marvel, Dan Buckley", "img/JessicaJonesComic.jpg", 3),
new Comics("Superman REBIRTH Nr2", "P. Tomasi, P. Gleason u.a.", "Comic", "DC", "img/Superman.jpg", 4),
new Comics("X-Men:Blue(2017) Nr. 19", "Cullen Bunn, R.B. Silva", "Comic", "Marvel", "img/Comic_X-men.jpg", 4),
];

//creating a new variable to show data in HTML
var allComics = document.getElementById("COMIC");

//Looping to create allComics Colums and data

for (var i=0; i < newComics.length; i++) {
	allComics.innerHTML += 
	'<div class="columsComics col-md-4 col-sm-12" id="' + i +'">' + 
		'<div class="pic"><img class="imgComics rounded" src="' + newComics[i].img + '">' + 
		'</div>' + 
		'<div class="details my-3 bg-light outline-dark"><b>Title</b>: ' + newComics[i].title 
					 + ' <br><b>Author</b>: ' + newComics[i].author 
					 + ' <br><b>Genre</b>: ' + newComics[i].genre 
					 + ' <br><b>Publisher</b>: ' + newComics[i].publisher 
					 + ' <br> ' 
					 + 
		'</div>' + 
		'<div class="ratandstars"><div class="rating"><button id="add" class="btnrating" value=""><b>Rating:</b></button>' + 
		'</div>' + '<div class="stars" id="rating"><span>   ★</span><span>★</span><span>★</span><span>★</span><span>★ </span>' + '<b>' + newComics[i].rating + '</b>'  + '</div></div>' 
	'</div>';
}
