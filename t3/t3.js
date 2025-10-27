'use strict';
`
Browser name and version. (e.g. Google Chrome, 114)
(Operating system name.)
Screen width and height.
Available screen space for the browser.
Current date and time. Use Finnish localization
1. helmikuuta 2056 as date format
Hours and minutes for time - Place each item within its own <p element, for example.
- save the web page as t3.html and JS as t3.js to t3 folder - 5p
`


let info = {
  "Browser" : navigator.userAgent,
  "Cookies enabled" : navigator.cookieEnabled,
  "Language" : navigator.language,
  "Screen width" : screen.width,
  "Screen height" : screen.height,
  "Browser window width" : window.innerWidth,
  "Browser window height" : window.innerHeight,

  "Local date and time" : new Date().toLocaleString("fi-FI"),
  "Time" : new Date().getHours()+":"+new Date().getMinutes(),

}

let target = document.getElementById("target");
for (let key in info ) {
  let newLine = document.createElement("div");
  newLine.innerHTML = key.toString()+`: `+ info[key]+`<br>`;
  target.appendChild(newLine);
}

