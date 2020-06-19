var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var id = 0;
    var mainRow = document.getElementById("mainRow");
    var mainRowAsc = document.getElementById("mainRow2");
    if (mainRow) {
        Render(mainRow);
    }
    function Render(theNode) {
        var toRender = [];
        var Locations = /** @class */ (function () {
            function Locations(name, city, zipCode, address, img, created) {
                this.name = "";
                this.name = name;
                this.city = city;
                this.zipCode = zipCode;
                this.address = address;
                this.img = img;
                this.created = created;
            }
            Locations.prototype.display = function () {
                theNode.innerHTML += "\n\n\t\t<div class=\"col mb-4\" id=\"" + id + "\">\n\n\t\t    <div class=\"card loc text-center\">\n\n\t\t    \t<div class=\"card-above\">\n\t\t       \t \t<h5 class=\"card-title\">" + this.name + "</h5>\n\t\t      \t</div>\n\t\t\t\t<div class=\"imgContainer\">\n\t\t      \t<img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n\t\t      \t</div>\n\t\t      \t<div class=\"card-body\">\n\t\t       \t \t<h6 class=\"card-title\"><i class='fas fa-map-marker-alt' style='font-size:24px'></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n\t\t        \t<p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n\t\t      \t</div>\n\t\t      \t<div class=\"card-footer\">\n      \t\t\t\t<small class=\"text-muted\">&#128356;Created:<br> " + this.created + "</small>\n   \t\t\t \t</div>\n\t\t    </div>\n\t\t</div>\n\n\t\t";
                id++;
            };
            return Locations;
        }());
        var Restaurant = /** @class */ (function (_super) {
            __extends(Restaurant, _super);
            function Restaurant(name, city, zipCode, address, img, created, phone, type, website) {
                var _this = _super.call(this, name, city, zipCode, address, img, created) || this;
                _this.phone = phone;
                _this.type = type;
                _this.website = website;
                return _this;
            }
            Restaurant.prototype.display = function () {
                theNode.innerHTML += "\n\t\t\t\t<div class=\"col mb-4\" id=\"" + id + "\">\n\t\t    <div class=\"card res text-center\">\n\t\t    \t<div class=\"card-above restaurant\">\n\t\t       \t \t<h5 class=\"card-title\">" + this.name + "</h5>\n\t\t      \t</div>\n\t\t\t\t<div class=\"imgContainer\">\n\t\t      \t<img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n\t\t      \t</div>\n\t\t      \t<div class=\"card-body\">\n\t\t       \t \t<h6 class=\"card-title\"><i class='fas fa-map-marker-alt' style='font-size:24px'></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n\t\t        \t<p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n\t\t        \t<p class=\"card-text typeOf\">" + this.type + "</p>\n\t\t        \t<p class=\"card-text phone\">&#128383; " + this.phone + "</p>\n\t\t        \t<button class=\"container-fluid restaurant\"><a class=\"text-light\" href=\"http://" + this.website + "\">www." + this.website + "</a></button>\n\t\t      \t</div>\n\t\t      \t<div class=\"card-footer\">\n      \t\t\t\t<small class=\"text-muted\">&#128356;Created:<br> " + this.created + "</small>\n   \t\t\t \t</div>\n\t\t    </div>\n\t\t</div>\n\t\t";
                id++;
            };
            return Restaurant;
        }(Locations));
        var Events = /** @class */ (function (_super) {
            __extends(Events, _super);
            function Events(name, city, zipCode, address, img, created, eventDate, eventTime, ticketPrice) {
                var _this = _super.call(this, name, city, zipCode, address, img, created) || this;
                _this.eventDate = eventDate;
                _this.eventTime = eventTime;
                _this.ticketPrice = ticketPrice;
                return _this;
            }
            Events.prototype.display = function () {
                theNode.innerHTML += "\n\t\t\t\t<div class=\"col mb-4\" id=\"" + id + "\">\n\t\t    <div class=\"card eve text-center\">\n\t\t    \t<div class=\"card-above event\">\n\t\t       \t \t<h5 class=\"card-title\">" + this.name + "</h5>\n\t\t      \t</div>\n\t\t\t\t<div class=\"imgContainer\">\n\t\t      \t<img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n\t\t      \t</div>\n\t\t      \t<div class=\"card-body\">\n\t\t       \t \t<h6 class=\"card-title\"><i class='fas fa-map-marker-alt' style='font-size:24px'></i>&nbsp;&nbsp;&nbsp;" + this.address + "</h6>\n\t\t        \t<p class=\"card-text\">" + this.zipCode + ", " + this.city + "</p>\n\t\t        \t<p class=\"card-text dateE\">Date: " + this.eventDate + "</p>\n\t\t        \t<p class=\"card-text timeE\">Time: " + this.eventTime + "</p>\n\t\t        \t<p class=\"card-text\">Price: &euro;" + this.ticketPrice + "</p>\n\t\t        \t\n\t\t      \t</div>\n\t\t      \t<div class=\"card-footer\">\n      \t\t\t\t<small class=\"text-muted\">&#128356;Created:<br> " + this.created + "</small>\n   \t\t\t \t</div>\n\t\t    </div>\n\t\t</div>\n\t\t";
                id++;
            };
            return Events;
        }(Locations));
        if (mainRow) {
            toRender.push(new Locations("CodeFactory", "Vienna", 1050, "Kettenbrückengasse 23/2/12", "img/img1.jpg", "24.05.2020 12:45"));
            toRender.push(new Locations("Hundertwasser House", "Vienna", 1030, "Kegelgasse 36-38", "img/img2.jpg", "05.05.2020 12:35"));
            toRender.push(new Locations("Belvedere", "Vienna", 1030, "Schloss Belvedere", "img/img3.jpg", "13.02.2020 08:45"));
            toRender.push(new Locations("Schönbrunn Palace", "Vienna", 1130, "Schloß Schönbrunn", "img/img4.jpg", "08.05.2020 12:22"));
            toRender.push(new Restaurant("Restaurant ON", "Vienna", 1050, "Wehrgasse 8", "img/restaurant1.jpg", "09.03.2020 11:12", "01 5854900", "Chinese", "restaurant-on.at"));
            toRender.push(new Restaurant("Noble Savage", "Vienna", 1010, "Salzgries 15", "img/restaurant2.jpg", "11.03.2020 15:17", "01 5854900", "Normal", "noblesavage.at"));
            toRender.push(new Restaurant("Taco Tante", "Vienna", 1010, "Johannesgasse 12", "img/restaurant3.jpg", "15.04.2020 08:19", "0664 88430196", "Mexican", "tacotante.at"));
            toRender.push(new Restaurant("To Ellinikon", "Vienna", 1030, "Am Heumarkt 5", "img/restaurant4.jpg", "15.01.2020 09:59", "0664 88430196", "Greek", "restaurant-ellinikon.at"));
            toRender.push(new Events("Techno Dampfer", "Vienna", 1190, "Relegasse 1", "img/event1.jpg", "13.04.2020 06:19", "30. August 2020", "17:30 Uhr – 22:30 Uhr", "5,00"));
            toRender.push(new Events("V.O.I.C.E", "Vienna", 1110, "Absberggasse 27", "img/event2.jpg", "13.04.2020 07:19", "11. Oktober 2020", "19:00 Uhr – 21:00 Uhr", "16,00"));
            toRender.push(new Events("Spiritsfestival 2020", "Vienna", 1110, "Heldenplatz 1", "img/event3.jpg", "15.03.2020 06:17", "19. Oktober 2020", "19:00 Uhr – 21:00 Uhr", "25,00"));
            toRender.push(new Events("WeAreDevelopers", "Vienna", 1110, "Landstrasse 8", "img/event4.jpg", "11.04.2020 22:55", "05. Oktober 2020", "11:00 Uhr – 15:00 Uhr", "5,00"));
        }
        if (mainRowAsc) {
            var toRender = JSON.parse(localStorage.getItem("toRender"));
            console.log("to render: " + toRender);
            var array1 = [];
            for (var i = 0; i < toRender.length; i++) {
                //from DD/MM/YY to MM/DD/YY
                var roughTime = toRender[i].created;
                var roughArray = roughTime.split(".");
                var temp = roughArray[0];
                roughArray[0] = roughArray[1];
                roughArray[1] = temp;
                roughTime = roughArray[0] + "." + roughArray[1] + "." + roughArray[2];
                var date = new Date(roughTime);
                console.log(date);
                array1.push({ i: i, date: date });
            }
            array1.sort(function (a, b) { return a.date - b.date; });
            console.log("array1: " + array1);
            console.log("to render: " + toRender);
            for (var i = 0; i < toRender.length; i++) {
                console.log("array1: " + array1[i]["i"]);
                console.log("toRender: " + toRender[i]);
                toRender[5].display();
            }
        }
        console.log("to render: " + toRender);
        for (var i = 0; i < toRender.length; i++) {
            toRender[i].display();
        }
        localStorage.setItem("toRender", JSON.stringify(toRender));
    } //ends the big function
    if (mainRowAsc) {
        Render(mainRowAsc);
    }
    /*
    for(let j=0; j<array1.length; j++){
        array1[j]["i"]=j;
    }
    
    let map = new Map();
    
    //let ascArray: Array<string> = [];
    
    for(let i=0; i<toRender.length; i++){
    //from DD/MM/YY to MM/DD/YY
        let roughTime = toRender[i].created;
        let roughArray = roughTime.split(".");
        let temp = roughArray[0];
        roughArray[0] = roughArray[1];
        roughArray[1] = temp;
        roughTime = `${roughArray[0]}.${roughArray[1]}.${roughArray[2]}`;
    
        let date = new Date(roughTime);
        console.log(date);
    
            map.set(i, date);
    }
    console.log(map);
    
    
    
    
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
});
