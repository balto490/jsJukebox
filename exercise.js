$(document).ready(function(){

//Mario Anamations

//Click Shell

$("#shell").click(function(){
	$("#shell").animate({
		left: "-200px"
	},3000, function(){
		logoAppear(); 
		marioAppear();
		textAppear();
		textBoxAppear();
		pipeAppear();
		cloudAppear();
	});
	$("h1").fadeOut(1000);
})


var logoAppear = function(){
	$("#mariologo").animate({
		width: "500px"
	},2000);
}

var marioAppear = function(){
	$("#mariostand").animate({
		left: "50px"
	},2000);
}

var textAppear = function(){
	$("#textbox").animate({
		left: "450px"
	},2000);
}

var textBoxAppear = function(){
	$("#textboximg").animate({
		left: "150px"
	},2000);
}

var pipeAppear = function(){
	$("#pipe").show()
	$("#pipe").animate({
		bottom: "-10px"
	},2000);
}

var cloudAppear = function(){
	$("#cloud").fadeIn(2000);
}

//Click Mario

$("#mariostand").click(function(){
	appearAudioBox();
 	appearMarioMusic();
 	dissappearTextBox();
 	dissappearText();
 	plantDown();
});
	
var appearMarioMusic = function(){
	$("#mariomusic").fadeIn(1000);
}

var appearAudioBox = function(){
	$("#audiobox").fadeIn(2000)
}

var dissappearTextBox = function(){
	$("#textboximg").fadeOut(2000)
}

var dissappearText = function(){
	$("#textbox").fadeOut(2000)
}

// var plantAppear = function(){
// 	$("#plant").show()
// 	$("#plant").animate({
// 		bottom: "190px"
// 	},2000);
// }

var plantDown = function(){
	$("#plant").show()
	$("#plant").animate({
		bottom: "-280px"
	},3000, plantUp);
}
var plantUp = function(){
	$("#plant").animate({
		bottom: "190px"
	},3000, plantDown);
}


});

// $("#playpause").click(function(){
// 	plantDown();
// });


document.addEventListener("DOMContentLoaded", function() {


//Jukebox Functions

var number = 0;
var random = 0;
var songDisplay = "";

function jukebox(menu){
	
	this.menu = menu; 
		
		this.addsongs = function(songs) {
		menu.push(songs);

	}

console.log(menu);

//Song Forward Function

this.loadsong = function(){ //{document.addEventListener("DOMContentLoaded", function() {

document.querySelector("#next").addEventListener("click",function(){
	var obj = menu[number];
	
	for(var prop in obj){
		if(prop == "filename"){
			document.getElementById("aud").src = obj[prop];
		}
	}

		number += 1;

//Song Forward Title

	for(var prop in obj){
	
	if(prop == "title") {

	songDisplay += obj[prop];
		
		document.getElementById("songinfo").innerHTML = songDisplay;
	}
};

//Song Forward Artist
	for(var prop in obj){

	if(prop == "artist") {

	songDisplay += " - " + obj[prop];

		document.getElementById("songinfo").innerHTML = songDisplay;
	}
	}
	
	songDisplay = "";
});
};	
console.log('working');

	//Song Back Function

this.previousSong = function(){ //{document.addEventListener("DOMContentLoaded", function() {

document.querySelector("#previous").addEventListener("click",function(){
	var obj = menu[number];
	
	for(var prop in obj){
		if(prop == "filename"){
			document.getElementById("aud").src = obj[prop];
		}
	}

		number -= 1;

	//Song Forward Title

	for(var prop in obj){
	
	if(prop == "title") {

	songDisplay += obj[prop];
		
		document.getElementById("songinfo").innerHTML = songDisplay;
	}
};

	//Song Forward Artist

	for(var prop in obj){

	if(prop == "artist") {

	songDisplay += " - " + obj[prop];

		document.getElementById("songinfo").innerHTML = songDisplay;
	}
	}
	
	songDisplay = "";
});
};	

this.shuffle = function() {

document.querySelector("#shuffle").addEventListener("click",function(){
	random = (Math.floor((Math.random() * menu.length) + 1) -1);

	var obj = menu[random];
	
	for(var prop in obj){
		if(prop == "filename"){
			document.getElementById("aud").src = obj[prop];
		}
	}

	for(var prop in obj){
	
	if(prop == "title") {

	songDisplay += obj[prop];
		
		document.getElementById("songinfo").innerHTML = songDisplay;
	}
};

//Song Shuffle Artist

	for(var prop in obj){

	if(prop == "artist") {

	songDisplay += " - " + obj[prop];

		document.getElementById("songinfo").innerHTML = songDisplay;
	}
}
	
	songDisplay = "";
});

};

};

function song(title , artist , filename) {

	this.title = title;
	this.artist = artist;
	this.filename = filename;

};

var bob = new song("Could You Be Loved" , "Bob Marley" , "audiofiles/could_you_be_loved.mp3");
var elton = new song("Daniel" , "Elton John" , "audiofiles/daniel.mp3");
var frank = new song("Fly Me to the Moon" , "Frank Sinatra" , "audiofiles/fly_me_to_the_moon.mp3");
var stevie = new song("Isn't She Lovely" , "Stevie Wonder" , "audiofiles/isnt_she_lovely.mp3")
var james = new song("The Boss" , "James Brown" , "audiofiles/the_boss.mp3");


//PlayPause Button

var count = 0

document.querySelector("#playpause").addEventListener("click", function() {
	var myAudio = document.getElementById("aud");

	if(count == 0) {
		myAudio.play();
		
		count += 1;
	} else {
		myAudio.pause();

		count -= 1; 
	}
});

var playlist = new jukebox([]);

playlist.addsongs(bob);
playlist.addsongs(elton);
playlist.addsongs(frank);
playlist.addsongs(stevie);
playlist.addsongs(james);

// console.log(playlist.menu);
playlist.loadsong();
playlist.previousSong();
playlist.shuffle();

});

















