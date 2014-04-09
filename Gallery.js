/**
 * Created by galmaor on 06/04/14.
 */

picsec = document.getElementById("picturesSection");
var newimg1 = document.createElement("img");
newimg1.setAttribute("src", "http://www.fontplay.com/freephotos/seventeen/fpx041611-19.jpg");
if (newimg1.width >= newimg1.height) {
    newimg1.setAttribute("class", "pic wide");
}
else {
    newimg1.setAttribute("class", "pic tall");
}
var newimg2 = document.createElement("img");
newimg2.setAttribute("src", "http://www.fontplay.com/freephotos/seventeen/fpx012211-01.jpg");
if (newimg2.width >= newimg2.height) {
    newimg2.setAttribute("class", "pic wide");
}
else {
    newimg2.setAttribute("class", "pic tall");
}
var cntnr1 = document.createElement("div");
cntnr1.setAttribute("class", "piccontainer");
cntnr1.appendChild(newimg1);
picsec.appendChild(cntnr1);
var cntnr2 = document.createElement("div");
cntnr2.setAttribute("class", "piccontainer");
cntnr2.appendChild(newimg2);
picsec.appendChild(cntnr2);