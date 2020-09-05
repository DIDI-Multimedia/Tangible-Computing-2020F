console.log('script.js')


function openNav() {

	console.log('open nav')
	document.getElementById("mySidebar").style.width = "30vw";
	document.getElementById("main").style.marginLeft = "30vw";
	$( "a" ).show();

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {

	console.log('close nav')
	document.getElementById("mySidebar").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
$( "a" ).hide();

}





let elements = [

'<a href="00_home.html" id ="content"> 00 Tangible Computing </a>',
'<a href="week_01.html" id ="content"> 01 Intro to Web </a>',
'<a href="week_01.html" id ="content"> P1 Messing with Time </a>'

]

for (var i = 0; i < elements.length; i++){

	$("#mySidebar").append(elements[i]);

}

/*

'<a href="Chapter_One.html" id ="content"> Project One </a>',

    <a href="Chapter_Two.html" id ="content"> Project Two </a>

    <a href="week_02.html" id ="content"> Week 02 - Functions </a>
    <a href="week_03.html" id ="content"> Week 03 - Algorithms </a>
    <a href="week_04.html" id ="content"> Week 04 - Coupling </a>
    <a href="week_05.html" id ="content"> Week 05 - Spky Szn </a>
    <a href="week_05_5.html" id ="content"> Week 05.5 - Patterns </a>
    <a href="week_06.html" id ="content"> Week 06 - Hyperspace </a>
    <a href="week_07.html" id ="content"> Week 07 - Refactoring </a>
   <a href="week_08.html" id ="content"> Week 08 - Mid-Term </a>
    <a href="week_09.html" id ="content"> Week 09 - APIs </a>
    <a href="week_10.html" id ="content"> Week 10 - Bots </a>
    <a href="week_11.html" id ="content"> Week 11 - Hardware </a>
    <a href="students.html" id ="content"> Ghosts and Ghouls </a>

*/
