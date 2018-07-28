/**
 * @file	index.js
 * @brief	Handlers of the index page
 * @author	Travor Liu	<travor_lzh@outlook.com>
 */

function do_normal(){
	var base=parseInt(document.getElementById("base").value);
	var height=parseInt(document.getElementById("height").value);
	result=document.getElementById("normalResult")
	result.innerText=area(base,height);
}

function do_heron(){
	var a=parseInt(document.getElementById("sideA").value);
	var b=parseInt(document.getElementById("sideB").value);
	var c=parseInt(document.getElementById("sideC").value);
	result=document.getElementById("heronResult");
	result.innerText=area_heron(a,b,c);
}
