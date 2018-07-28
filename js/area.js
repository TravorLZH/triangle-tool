/**
 * @file	area.js
 * @brief	Functions for calculating area of an triangle
 * @author	Travor Liu	<travor_lzh@outlook.com>
 */

function area(base,height){
	return base*height/2;
}

function area_heron(a,b,c){
	var p=(a+b+c)/2;
	var square=p*(p-a)*(p-b)*(p-c);
	return Math.sqrt(square);
}
