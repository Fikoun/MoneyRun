var FIK = {

		Gp: document.createElement('canvas'),
		platno: function(wid, heig, border){
				this.Gp.width = wid; this.Gp.height = heig;
				if (border) {this.Gp.style.border = "1px solid";}
				var kont = this.Gp.getContext('2d');
				document.body.appendChild(this.Gp);
				return kont;
		},

		element: function(el ,text, idKam){
				var nEl = document.createElement(el);
				if (text) {nEl.innerText = text;}
				if (idKam) {
					var oEl = document.getElementById(idKam);
					oEl.appendChild(nEl); 
				}
				else {
					document.body.appendChild(nEl);
				}	
		}

};