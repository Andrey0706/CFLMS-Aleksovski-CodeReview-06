$(document).ready(function(){

let id: number = 0;

var mainRow= document.getElementById("mainRow");
var mainRowAsc= document.getElementById("mainRow2");
var mainRowDesc= document.getElementById("mainRowDesc");

if(mainRow){
Render(mainRow);
}
if(mainRowAsc){
Render(mainRowAsc);
}
if(mainRowDesc){
Render(mainRowDesc);
}

function Render(theNode){
var toRender : Array<any> = [];

class Locations {
	name: string ="";
	city: string;
	zipCode: number;
	address: string;
	img: string;
	created: string;
	

	constructor(name, city, zipCode, address, img, created){
		this.name = name;
		this.city = city;
		this.zipCode = zipCode;
		this.address = address;
		this.img = img;
		this.created = created;
	}

	
	display(){
		theNode.innerHTML += `
			<div class="col mb-4" id="${id}">
			    <div class="card loc text-center">
			        <div class="card-above">
			            <h5 class="card-title">${this.name}</h5>
			        </div>
			        <div class="imgContainer d-none d-md-block">
			            <img src="${this.img}" class="card-img-top" alt="..." />
			        </div>
			        <div class="card-body">
			            <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
			            <p class="card-text">${this.zipCode}, ${this.city}</p>
			        </div>
			        <div class="card-footer">
			            <small class="text-muted">
			                &#128356;Created:<br />
			                ${this.created}
			            </small>
			        </div>
			    </div>
			</div>
		`;
		id++;
	}

}

class Restaurant extends Locations {
	phone: string;
	type: string;
	website: string;

	constructor(name, city, zipCode, address, img, created, phone, type, website){
		super(name, city, zipCode, address, img, created);
		this.phone = phone;
		this.type = type;
		this.website =website;
	}

	display(){
		theNode.innerHTML += `
				<div class="col mb-4" id="${id}">
				    <div class="card res text-center">
				        <div class="card-above restaurant">
				            <h5 class="card-title">${this.name}</h5>
				        </div>
				        <div class="imgContainer d-none d-md-block">
				            <img src="${this.img}" class="card-img-top" alt="..." />
				        </div>
				        <div class="card-body">
				            <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
				            <p class="card-text">${this.zipCode}, ${this.city}</p>
				            <p class="card-text typeOf">Type: ${this.type}</p>
				            <p class="card-text phone">&#128383; ${this.phone}</p>
				            <button class="container-fluid restaurant"><a class="text-light" href="http://${this.website}">www.${this.website}</a></button>
				        </div>
				        <div class="card-footer">
				            <small class="text-muted">
				                &#128356;Created:<br />
				                ${this.created}
				            </small>
				        </div>
				    </div>
				</div>
		`;
		id++;
	}

}

class Events extends Locations {
	eventDate: string;
	eventTime: string;
	ticketPrice: string;

	constructor(name, city, zipCode, address, img, created, eventDate, eventTime, ticketPrice){
		super(name, city, zipCode, address, img, created);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
	}

	display(){
		theNode.innerHTML += `
			<div class="col mb-4" id="${id}">
			    <div class="card eve text-center">
			        <div class="card-above event">
			            <h5 class="card-title">${this.name}</h5>
			        </div>
			        <div class="imgContainer d-none d-md-block">
			            <img src="${this.img}" class="card-img-top" alt="..." />
			        </div>
			        <div class="card-body">
			            <h6 class="card-title"><i class="fas fa-map-marker-alt" style="font-size: 24px;"></i>&nbsp;&nbsp;&nbsp;${this.address}</h6>
			            <p class="card-text">${this.zipCode}, ${this.city}</p>
			            <p class="card-text dateE">Date: ${this.eventDate}</p>
			            <p class="card-text timeE">Time: ${this.eventTime}</p>
			            <p class="card-text">Price: &euro;${this.ticketPrice}</p>
			        </div>
			        <div class="card-footer">
			            <small class="text-muted">
			                &#128356;Created:<br />
			                ${this.created}
			            </small>
			        </div>
			    </div>
			</div>
		`;
		id++;
	}

}

if(mainRow){
toRender.push(new Locations("CodeFactory", "Vienna", 1050, "Kettenbrückengasse 23/2/12", "img/img1.jpg", "24.05.2020 12:45"));
toRender.push(new Locations("Hundertwasser House", "Vienna", 1030, "Kegelgasse 36-38", "img/img2.jpg", "05.05.2020 12:35"));
toRender.push(new Locations("Belvedere", "Vienna", 1030, "Schloss Belvedere", "img/img3.jpg", "13.02.2020 08:45"));
toRender.push(new Locations("Schönbrunn Palace", "Vienna", 1130, "Schloß Schönbrunn", "img/img4.jpg", "08.05.2020 12:22"));
toRender.push(new Restaurant("Restaurant ON", "Vienna", 1050, "Wehrgasse 8", "img/restaurant1.jpg", "09.03.2020 11:12", "01 5854900", "Chinese", "restaurant-on.at"));
toRender.push(new Restaurant("Noble Savage", "Vienna", 1010, "Salzgries 15", "img/restaurant2.jpg", "11.03.2020 15:17", "01 5854900", "Vienneese", "noblesavage.at"));
toRender.push(new Restaurant("Taco Tante", "Vienna", 1010, "Johannesgasse 12", "img/restaurant3.jpg", "15.04.2020 08:19", "0664 88430196", "Mexican", "tacotante.at"));
toRender.push(new Restaurant("To Ellinikon", "Vienna", 1030, "Am Heumarkt 5", "img/restaurant4.jpg", "15.01.2020 09:59", "0664 88430196", "Greek", "restaurant-ellinikon.at"));
toRender.push(new Events("Techno Dampfer", "Vienna", 1190, "Relegasse 1", "img/event1.jpg", "13.04.2020 06:19", "30. August 2020", "17:30 Uhr – 22:30 Uhr", "5,00"));
toRender.push(new Events("V.O.I.C.E", "Vienna", 1110, "Absberggasse 27", "img/event2.jpg", "13.04.2020 07:19", "11. Oktober 2020", "19:00 Uhr – 21:00 Uhr", "16,00"));
toRender.push(new Events("Spiritsfestival 2020", "Vienna", 1110, "Heldenplatz 1", "img/event3.jpg", "15.03.2020 06:17", "19. Oktober 2020", "19:00 Uhr – 21:00 Uhr", "25,00"));
toRender.push(new Events("WeAreDevelopers", "Vienna", 1110, "Landstrasse 8", "img/event4.jpg", "11.04.2020 22:55", "05. Oktober 2020", "11:00 Uhr – 15:00 Uhr", "5,00"));
}

if(mainRow){
for(let i=0; i< toRender.length; i++){
		toRender[i].display();
}
}

				if(mainRowAsc){
					var toRender: Array<any> = JSON.parse(localStorage.getItem("toRender"));

					let array1 = [];
					let array2 = [];
					//from DD/MM/YY to MM/DD/YY
					for(let i=0; i<toRender.length; i++){
						let roughTime = toRender[i].created;
						let roughArray = roughTime.split(".");
						let temp = roughArray[0];
						roughArray[0] = roughArray[1];
						roughArray[1] = temp;
						roughTime = `${roughArray[0]}.${roughArray[1]}.${roughArray[2]}`;
						let date = new Date(roughTime);
						array1.push({i, date});
					}

				 	array1.sort((a, b) => a.date - b.date);

					 for(let i=0; i<toRender.length; i++){
					 	if(toRender[i].hasOwnProperty("ticketPrice")){
					 		let test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
					 		array2.push(test2);
					 	} else if(toRender[i].hasOwnProperty("website")){
					 		let test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
					 		array2.push(test2);
					 	} else {
					 		let test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created);
					 		array2.push(test2);
					 		}
						}

					  for(let i=0; i<array2.length; i++){
					  	console.log("array1: " + array1[i]["i"]);
					  	array2[array1[i]["i"]].display();
					  	console.log("toRender: " + toRender[i]);
						}
				}

				if(mainRowDesc){
					var toRender: Array<any> = JSON.parse(localStorage.getItem("toRender"));

					let array1 = [];
					let array2 = [];
					//from DD/MM/YY to MM/DD/YY
					for(let i=0; i<toRender.length; i++){
						let roughTime = toRender[i].created;
						let roughArray = roughTime.split(".");
						let temp = roughArray[0];
						roughArray[0] = roughArray[1];
						roughArray[1] = temp;
						roughTime = `${roughArray[0]}.${roughArray[1]}.${roughArray[2]}`;
						let date = new Date(roughTime);
						array1.push({i, date});
					}

				 	array1.sort((a, b) => a.date - b.date);

				 	for(let i=0; i<toRender.length; i++){
					 	if(toRender[i].hasOwnProperty("ticketPrice")){
					 		let test2 = new Events(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].eventDate, toRender[i].eventTime, toRender[i].ticketPrice);
					 		array2.push(test2);
					 	} else if(toRender[i].hasOwnProperty("website")){
					 		let test2 = new Restaurant(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created, toRender[i].phone, toRender[i].type, toRender[i].website);
					 		array2.push(test2);
					 	} else {
					 		let test2 = new Locations(toRender[i].name, toRender[i].city, toRender[i].zipCode, toRender[i].address, `../${toRender[i].img}`, toRender[i].created);
					 		array2.push(test2);
					 		}
				 		}

					  for(let i=array2.length-1; i>=0; i--){
					  	console.log("array1: " + array1[i]["i"]);
					  	array2[array1[i]["i"]].display();
					  	console.log("toRender: " + toRender[i]);
						}
					}


localStorage.setItem("toRender", JSON.stringify(toRender));


// Search function (Case Sensitive)
if(window.location.href.indexOf('?search=')>0){
	console.log(window.location.href);
	let wholeQuery = window.location.search;
	let splitIt = wholeQuery.split("=");
	let myQuery = splitIt[1];
	let allCardAbove = $(".card-above");

	for(let i=0; i<allCardAbove.length; i++){
		let theTextInside = allCardAbove[i].childNodes[1].innerHTML;
		console.log("theTextInside" + theTextInside);
		let isItPresent = theTextInside.includes(myQuery);
		console.log("isItPresent" + isItPresent);
		if(!isItPresent){
			document.getElementById(`${i}`).style.display = "none";
		}
	}

}


} //ends the big function


}) //ends on.ready

/*

	//today : object = new Date();
	//date: string;
	//time: string;
	//dateTime: string;
	//minutes: string;

	showDate(){
		this.date= (this.today).getFullYear()+'-'+((this.today).getMonth()+1)+'-'+(this.today).getDate();
		this.minutes =(this.today).getMinutes()
		//make minutes double digit if its single digit by adding 0 before it
		if(parseInt(this.minutes)<10){
			this.minutes = "0" + this.minutes;
		}

		this.time= (this.today).getHours() + ":" + (this.today).getMinutes() + ":" + (this.today).getSeconds();
		this.dateTime= (this.date)+' '+(this.time);

	return this.dateTime;
	}

	*/

/*$("#submitBtn").on("click", function(){
	let searchQery = (<HTMLInputElement>document.getElementById("theSearch")).value;
	console.log("search:" + toRender);

	let allCardAbove = $(".card-above");
	console.log("allCardAbove:" + allCardAbove);

	console.log(window.location);



})
*/