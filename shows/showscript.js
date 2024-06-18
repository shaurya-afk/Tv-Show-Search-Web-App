function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const showTitle = getQueryParam('title');
const showDesc = getQueryParam('description');
const dp = getQueryParam("imgDp");
const genre = getQueryParam("genre");
const lang = getQueryParam("lang");
const ofsite = getQueryParam("ofsite");
const sitename = getQueryParam("sitename");

if (showTitle) {
	document.title = decodeURIComponent(showTitle);
	document.getElementById("showTitle").innerHTML = decodeURIComponent(showTitle);
}
if(showDesc){
	document.querySelector(".about").innerHTML = decodeURIComponent(showDesc);
}
if(dp){
	document.querySelector("#dp").src = decodeURIComponent(dp);
	document.body.style.backgroundImage = `url(${decodeURIComponent(dp)})`;
}
if(genre){
	document.querySelector(".genre").textContent = decodeURIComponent(genre);
}
if(lang){
	document.querySelector(".lang").textContent = decodeURIComponent(lang);
}
if(ofsite){
	document.querySelector(".ofc_site").href = decodeURIComponent(ofsite);
}
if(sitename){
	document.querySelector(".ofc_site").textContent = decodeURIComponent(sitename);
}