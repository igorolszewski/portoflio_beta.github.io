
var string = "Część, Jestem Igor. Z wykształcenia jestem inż. architektem. W wolnym czasie w ramach pasji staram się rozwijać w zakresie front-endu, programowania w JavaScript. Poniżej możesz zaznajomić się z moimi projektami, które wykonuję w ramach samodoskonalenia się i drobnych zleceń. Serdecznie pozdrawiam."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();