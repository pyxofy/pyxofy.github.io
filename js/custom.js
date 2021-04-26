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
}

/* Delete Text 2 */
function deleteText2() {
	let str = document.getElementsByClassName("post-template")[0];
	let x = str.getElementsByTagName("span");
	for (let i = 0; i < x.length; i++) {
		let res = x[i].innerHTML.replace(/Publish with Ghost/gi, "");
		x[i].innerHTML = res;
	}
}

/* Replace Text */
function replaceText() {
	let str = document.getElementsByClassName("post-template")[0];
	let x = str.getElementsByTagName("h2");
	for (let i = 0; i < x.length; i++) {
		let res = x[i].innerHTML.replace(/Sign up for more like this./gi, "最新記事をいち早くニュースレターでお届けします。");
		x[i].innerHTML = res;
	}
}

window.addEventListener("load", deleteText1);
window.addEventListener("load", replaceText);
window.addEventListener("load", deleteText2);