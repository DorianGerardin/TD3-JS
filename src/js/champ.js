class Champ {

	constructor(xP,xT,proba) {
		this.carte = Array(20); 
		for (var i = 0; i < this.carte.length; i++) {
			this.carte[i] = Array(20);
			for (var j = 0; j < this.carte[i].length; j++) {
				let number = Math.random();
				if (number < proba) {
					this.carte[i][j] = 1;
				}
				else {
					this.carte[i][j] = 0;
				}
			}
		}
		//pas de mines a proximité du perso
		if (xP != 1) {
			this.carte[19][xP - 2] = 0;
			this.carte[18][xP - 2] = 0;
		}

		if (xP != 20) {
			this.carte[19][xP] = 0;
			this.carte[18][xP] = 0;
		}
		
		this.carte[18][xP - 1] = 0;

		//pas de mines a proximité du tresor
		if (xT != 1) {
			this.carte[0][xT - 2] = 0;
			this.carte[1][xT - 2] = 0;
		}

		if (xT != 20) {
			this.carte[0][xT] = 0;
			this.carte[1][xT] = 0;
		}
		
		this.carte[1][xT - 1] = 0;

		this.balise_div = document.getElementById("carte");

	}

	afficher() {

		for (var i = 0; i < this.carte.length; i++) {
			for (var j = 0; j < this.carte[i].length; j++) { 
				let croix = document.createElement("img");
				croix.setAttribute("src", 'img/croix.png');
				croix.style.top = 51 + 20 * i + "px";
				croix.style.left = 51 + 20 * j + "px";
				if (this.carte[i][j] == 1) {
					croix.setAttribute("class", 'visible');
				} else {
					croix.setAttribute("class", 'cachee');
				}
				this.balise_div.appendChild(croix);
			}
		}
	}

	cacher() {

		for (var i = 399; i >= 0; i--) {
			this.balise_div.removeChild(this.balise_div.children[i]);
		}
	}
}
