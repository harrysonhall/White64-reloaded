const SVG_fullService_letters = document.querySelectorAll('.full-service-text');

let SVG_fullService_startTime = parseInt(getComputedStyle(document.body).getPropertyValue('--animation-fullService-stroke-startTime'));

console.log(SVG_fullService_startTime)

for(const letter of SVG_fullService_letters) {

	
	let animationDelay = SVG_fullService_startTime + "s";
	
	letter.style.setProperty('animation-delay', animationDelay);

	SVG_fullService_startTime += 0.02;
}