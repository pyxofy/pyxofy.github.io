/* Change home page body css element from home-template to post-template */
document.getElementsByTagName("body")[0].setAttribute("class", "post-template");

/* Delete Text 1 */
function deleteText1() {
	let str = document.getElementsByClassName("post-template")[0];
	let x = str.getElementsByTagName("a");
	for (let i = 0; i < x.length; i++) {
		let res = x[i].innerHTML.replace(/Powered by Ghost/gi, "");
		x[i].innerHTML = res;
	}
    let str1 = document.getElementsByClassName("post-template")[0];
    let y = str1.getElementsByTagName("span");
    for (let i = 0; i < y.length; i++) {
		let res1 = y[i].innerHTML.replace(/Publish with Ghost/gi, "");
		y[i].innerHTML = res1;
	}
}

window.addEventListener("load", deleteText1);