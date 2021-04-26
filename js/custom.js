/* Change home page body css element from home-template to post-template */
document.getElementsByTagName("body")[0].setAttribute("class", "post-template");

/* Delete Text 1 */
function deleteText1() {
	let str = document.getElementsByClassName("post-template")[0];
	let x = str.getElementsByTagName("a");
	for (var i = 0; i < x.length; i++) {
		var res = x[i].innerHTML.replace(/Powered by Ghost/gi, "");
		x[i].innerHTML = res;
	}
    let y = str.getElementsByTagName("span");
    for (var i = 0; i < y.length; i++) {
		var res = y[i].innerHTML.replace(/Publish with Ghost/gi, "");
		y[i].innerHTML = res;
	}
}

window.addEventListener("load", deleteText1);