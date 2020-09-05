/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {

	console.log('open nav')
	document.getElementById("mySidebar").style.width = "30vw";
	document.getElementById("main").style.marginLeft = "30vw";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {

	console.log('close nav')
	document.getElementById("mySidebar").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";

}

