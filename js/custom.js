/* Change home page body css element from home-template to post-template */
document.getElementsByTagName("body")[0].setAttribute("class", "post-template");

/* Delete Text 1 */
function deleteText1() {
	let str = document.getElementsByClassName("main")[0];
	let x = str.getElementsByTagName("a");
	for (var i = 0; i < x.length; i++) {
		var res = x[i].innerHTML.replace(/Powered by Ghost/gi, "");
		x[i].innerHTML = res;
	}
}

window.addEventListener("load", deleteText1);