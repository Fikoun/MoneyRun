var ktx = FIK.platno(1000, 500,true);
var canvas = FIK.Gp;

var backB = new Image();
backB.src = "Back_top.png";

var backG = new Image();
backG.src = "Back_bot.png";

var hracIMG = new Image();
hracIMG.src = "hrac.png";

var blokImg = new Image();
blokImg.src = "blok.png";

var moneyImg = new Image();
moneyImg.src = "money.png";


var keysDown =  new Array();
addEventListener("keydown", function (e) {keysDown[e.keyCode] = true;});
addEventListener("keyup", function (e) {delete keysDown[e.keyCode];});

var skore = 0;

function loop() {	
		hrac.pohyb();
		
		ktx.fillStyle = "white";
		ktx.fillRect(0, 0, canvas.width, canvas.height);
		ktx.drawImage(moneyImg, 5, 2, 60, 20);
		ktx.font = "20px Verdana";
		ktx.fillStyle = "black";
		zem.render();
		ktx.fillText(""+ skore, 70, 20);
		for (var i = 0; i < bloky.length; i++) {
				bloky[i].move();
				bloky[i].colise();
				bloky[i].render();
		}
		hrac.render();

	requestAnimationFrame(loop);
}

hrac = {
	x: 10,
	y: 40,
	skok: 0,
	uzemen: false,

	pohyb: function () {
		if (this.y >= 345) {
			this.y = 345;
			this.uzemen = true;
		}
		this.y += 6;
		if (32 in keysDown && this.uzemen == true) 
		{
			if (this.skok == 38) {
				this.skok = 0;
				this.uzemen = false;
			}else{
				this.y -= 15;
				this.skok++;
			}
		}
		else {
			this.skok = 0;
			this.uzemen = false;
		}

		return;
	},

	render: function() {
		ktx.drawImage(hracIMG, 50, this.y, 90, 90);
		//ktx.fillStyle = "black";
		//ktx.fillRect(50, this.y, 90, 90);

		return;
	}
};

var bloky = new Array;
var blok = function() {

	this.x =  1000;
	this.jAdd = true;
	this.clone = false;
	this.money = true;
	this.moneyY = 200;
	this.pridalS = true;


	this.render = function() {
		ktx.drawImage(blokImg, this.x, 280, 93, 150);
		if (this.money) {
			ktx.drawImage(moneyImg, this.x+ 10, this.moneyY, 70, 27);
		}
		
		return;
	};

	this.move = function() {
		if (this.x < 400 && this.clone == false) {
			bloky[bloky.length] = new blok();
			this.clone = true;
		}
		if ( !(this.x < (-100)) ) {
			this.x -= 5;
		}

		return;
	};

	this.colise = function() {
		if (120+hrac.x > this.x && hrac.x < this.x+73 && hrac.y > 200) {
			end();	
		}
		else if (50+hrac.x > this.x && hrac.x < this.x+60 && hrac.y > 400) {
			end();
		}
		if (120+hrac.x > this.x && hrac.x < this.x+60) {
			if (this.moneyY > 0)
				this.moneyY -= 10;
			else
				this.money = false;	
				if (this.pridalS)
					skore++;
					this.pridalS= false;		
		}

		return;
	}

};
bloky[0] = new blok();

var zem = {
	px: 0,
	dx: 500,
	r: 5,

	render: function () {
		
		this.prvni();
		this.druhej();

		if (this.px <= -499) {this.px = 501}
		if (this.dx <= -499) {this.dx = 501}
		this.px -= this.r;
		this.dx -= this.r;

		return;
	},

	prvni: function () {
		ktx.drawImage(backB, this.px, 440, 1000, 60);
		ktx.drawImage(backG, this.px, 420, 1000, 20);
	},

	druhej: function () {
		ktx.drawImage(backB, this.dx, 440, 1000, 60);
		ktx.drawImage(backG, this.dx, 420, 1000, 20);
	}
};

function end() {
	location.reload();

}

loop();
























































