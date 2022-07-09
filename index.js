var mathNumber1 = Math.floor((Math.random() * 6 ) + 1 );

if (mathNumber1 === 1) {
    document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if (mathNumber1 === 2) {
    document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
}else if (mathNumber1 === 3) {
    document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
}else if (mathNumber1 === 4) {
    document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
}else if (mathNumber1 === 5) {
    document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
}else {
    document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}


var mathNumber2 = Math.floor((Math.random() * 6 ) + 1 );

if (mathNumber2 === 1) {
    document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (mathNumber2 === 2) {
    document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
}else if (mathNumber2 === 3) {
    document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
}else if (mathNumber2 === 4) {
    document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}else if (mathNumber2 === 5) {
    document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}else {
    document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}

if ( mathNumber1 > mathNumber2) {
    document.querySelector("h1").innerHTML = "&#128074; PLAYER 1 WINS";
} else if ( mathNumber1 < mathNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS &#128074;";
}else {
    document.querySelector("h1").innerHTML = " &#128074; DRAW &#128074;";
}

const btn = document.querySelector('.btn');

const refreshPage = () => {
  location.reload();
}

btn.addEventListener('click', refreshPage)