class Locations {
	city: string;
	zipCode: string;
	address: string;
	img: string;

	constructor(city, zipCode, address, img){
		this.city = city;
		this.zipCode = zipCode;
		this.address = address;
		this.img = img;
	}

	display(){

	}

}

class Restaurant extends Locations {
	phone: string;
	type: string;
	website: string;

	constructor(city, zipCode, address, img, phone, type, website){
		super(city, zipCode, address, img);
		this.phone = phone;
		this.type = type;
		this.website =website;
	}

	display(){

	}

}

class Events extends Locations {
	eventDate: string;
	eventTime: string;
	ticketPrice: string;

	constructor(city, zipCode, address, img, eventDate, eventTime, ticketPrice){
		super(city, zipCode, address, img);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice =ticketPrice;
	}

	display(){

	}

}


