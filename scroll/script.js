

const scroll1 = document.getElementById('scroll-container');
const wrapper = document.getElementById('wrapper');
const viewport = document.getElementById('viewport');


let isViewportScaled = false;
let isPointerDown = false;
let scrollTimeout;


scroll1.addEventListener('scroll', (e) => {


	if(!isViewportScaled) {
		viewport.style.setProperty('height', '55vw')
		viewport.style.setProperty('width', '55vw')

		isViewportScaled = true;
	}

	if(scrollTimeout) clearTimeout(scrollTimeout)


	scrollTimeout = setTimeout(() => {

		viewport.style.setProperty('height', '50vw');
		viewport.style.setProperty('width', '50vw');

		isViewportScaled = false;

		// console.log('cleared')
	}, 100)

	wrapper.style.setProperty('left', (scroll1.scrollLeft * -1) + 'px') 
	
})


const three = document.getElementById('three');
const scrollSection = document.querySelector('#scroll')
let style = getComputedStyle(scrollSection)
let topStyle = parseInt(style.top);
let currentScroll;
let animationID;
let counter = 0;

let previousStyle = style

three.addEventListener('click', (e) => {

	let newtop = scrollSection.getBoundingClientRect()

	currentScroll = window.scrollY 
	console.log(currentScroll)

	scrollSection.style.setProperty('top', newtop.top + "px")
	window.scrollTo(0,0)

	setTimeout(()=> {

		scrollSection.style.setProperty('top', '0px')
	}, 25)

	setTimeout(() => {
		viewport.style.setProperty('transition', 'all 1s')
		viewport.style.setProperty('height', '75vw')
		viewport.style.setProperty('width', '75vw')
	}, 250)
	

	window.location.hash = "div3"

	// tick();
})
window.dispatchEvent(new Event('hashchange'));
console.log(window.location.hash)


window.addEventListener('hashchange', () => {

	if(window.location.hash === "") {

		scrollSection.style.removeProperty('transition')
		scrollSection.style.setProperty('top', topStyle + "px");
		window.scrollTo(0, currentScroll)
		viewport.style.setProperty('height', '50vw');
		viewport.style.setProperty('width', '50vw');
		console.log('home'); 
	}
	console.log(previousStyle.top)

})

// const tick = () => {

// 	topStyle = (parseInt(topStyle) - 1) + "px"

// 	// scrollSection.style.setProperty('top', tempTop);

// 	console.log(topStyle)

// 	animationID = window.requestAnimationFrame(tick);

// 	if(topStyle === 0) cancelAnimationFrame(animationID);
// }

