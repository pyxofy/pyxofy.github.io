/* Change home page body css element from home-template to post-template */
document.getElementsByTagName("body")[0].setAttribute("class", "post-template");

/* Replace text */
String.replace(/Powered by Ghost/gi, '');