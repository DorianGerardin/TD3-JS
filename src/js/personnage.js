class Personnage extends Element {

	constructor(x) {
		super(x, 20, "personnage");
		this.score = 200;
	}

	initialiser(x) {
		super.initialiser(x, 20, "img/personnage.png");
		this.score = 200;
	}

	mouvement(dx,dy) {
		if (this.coordX + dx <= 20 && this.coordX + dx > 0) {
			this.coordX += dx;
		}
		if (this.coordY + dy > 0 && this.coordY + dy <= 20) {
			this.coordY += dy;
		}
		super.placer();
		this.score -= 10;
	}

	indiquer_situation(C) {
		let nbMinesProx = this.nbProxMines(C);
		let affichage = document.getElementById("affichage");
		affichage.innerHTML = nbMinesProx + " mines à proximité";
		let message = document.getElementById("message");
		message.innerHTML = "Score : " + this.score;

		if (nbMinesProx == 0) {
			super.setSrc("img/personnage.png");
		}
		else {
			super.setSrc("img/personnage2.png");
		}
	}

	trouve(T) {
		return (this.coordY == T.coordY && this.coordX == T.coordX);
	}

	explose(C) {
		return (C.carte[this.coordY - 1][this.coordX - 1] == 1);
	}

	nbProxMines(C) {
		let cpt = 0;
		if (this.coordX != 1 && this.coordY != 1) {
			if (C.carte[this.coordY-2][this.coordX - 2] == 1) {
				cpt++;
			}
		}
		if (this.coordY != 1) {
			if (C.carte[this.coordY-2][this.coordX - 1] == 1) {
				cpt++;
			}
		}
		if (this.coordX != 20 && this.coordY != 1) {
			if (C.carte[this.coordY-2][this.coordX] == 1) {
				cpt++;
			}
		}
		if (this.coordX != 20) {
			if (C.carte[this.coordY-1][this.coordX] == 1) {
				cpt++;
			}
		}
		if (this.coordX != 20 && this.coordY != 20) {
			if (C.carte[this.coordY][this.coordX] == 1) {
				cpt++;
			}
		}
		if (this.coordY != 20) {
			if (C.carte[this.coordY][this.coordX - 1] == 1) {
				cpt++;
			}
		}
		if (this.coordX != 1 && this.coordY != 20) {
			if (C.carte[this.coordY][this.coordX - 2] == 1) {
				cpt++;
			}
		}
		if (this.coordX != 1) {
			if (C.carte[this.coordY - 1][this.coordX - 2] == 1) {
				cpt++;
			}
		}
		

		return cpt;
	}


}
