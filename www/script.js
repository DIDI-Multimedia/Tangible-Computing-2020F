console.log('script.js')


function openNav() {

	console.log('open nav')
	document.getElementById("mySidebar").style.width = "30vw";
	document.getElementById("main").style.marginLeft = "30vw";
        // document.getElementById("main").style.width = "60vw";
	$( "a" ).show();

}

/* Set the width of the sidebar to 0 and the left margin of the page disabled to 0 */
function closeNav() {

	console.log('close nav')
	document.getElementById("mySidebar").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
    $( "a" ).hide();

}





let elements = [
'        <a><b> Topics </b></a>',
            // '<br>',
'<a href="00_home.html" class ="active"> 00 Tangible Computing </a>',
'<a href="01.html" class ="active"> 01 Intro to Web </a>',
'<a href="02.html" class ="active"> 02 Functional Programming </a>',
'<a href="03.html" class ="disabled"> 03 Software Clocks </a>',
'<a href="04.html" class ="disabled"> 04 Pixel Aesthetics </a>',
'<a href="05.html" class ="disabled"> 05 Computer Typography </a>',
'<a href="06.html" class ="disabled"> 06 3D Internet </a>',
'<a href="07.html" class ="disabled"> 07 Mixed Reality </a>',
'<a href="08.html" class ="disabled"> 08 Connected Devices </a>',
'<a href="09.html" class ="disabled"> 09 API Data </a>',
'<a href="10.html" class ="disabled"> 10 Coding Secrets </a>',
'<br>',
'<a class="disabled"> <b> Projects </b> </a>',
        
'<a href="p1.html" class ="active"> P1 Messing with Time </a>',
'<a href=".html" class ="disabled"> P2 Enchanted Objects </a>',
'<br>',
'<a href="students.html"><b> Student Work </b></a>',
        
]

for (var i = 0; i < elements.length; i++){

	$("#mySidebar").append(elements[i]);

}

/*

'<a href="Chapter_One.html" class ="disabled"> Project One </a>',

    <a href="Chapter_Two.html" class ="disabled"> Project Two </a>

    <a href="week_02.html" class ="disabled"> Week 02 - Functions </a>
    <a href="week_03.html" class ="disabled"> Week 03 - Algorithms </a>
    <a href="week_04.html" class ="disabled"> Week 04 - Coupling </a>
    <a href="week_05.html" class ="disabled"> Week 05 - Spky Szn </a>
    <a href="week_05_5.html" class ="disabled"> Week 05.5 - Patterns </a>
    <a href="week_06.html" class ="disabled"> Week 06 - Hyperspace </a>
    <a href="week_07.html" class ="disabled"> Week 07 - Refactoring </a>
   <a href="week_08.html" class ="disabled"> Week 08 - Mid-Term </a>
    <a href="week_09.html" class ="disabled"> Week 09 - APIs </a>
    <a href="week_10.html" class ="disabled"> Week 10 - Bots </a>
    <a href="week_11.html" class ="disabled"> Week 11 - Hardware </a>
    <a href="students.html" class ="disabled"> Ghosts and Ghouls </a>

*/
