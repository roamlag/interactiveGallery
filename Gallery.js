/**
 * Created by galmaor on 06/04/14.
 */

function addPic(parent, picUrl) {
    var thePic = document.createElement("img");
    thePic.setAttribute("src", picUrl);
    thePic.onload = function () {
        if (thePic.width >= thePic.height) {
            thePic.setAttribute("class", "pic wide");
        }
        else {
            thePic.setAttribute("class", "pic tall");
        }
    }
    var container = document.createElement("div");
    container.setAttribute("class", "piccontainer");
    container.appendChild(thePic);
    parent.appendChild(container);
}

function eventDispatcher(element, eventType) {
    var dispatcher = {};
    dispatcher.register = function (filterClass, f) {
        if (f === undefined) {
            f = filterClass;
            filterClass = undefined;
        }
        var g = function (e) {
            if (filterClass === undefined) {
                f(e);
                return;
            }
            if (!e.target.classList.contains(filterClass)) return;
            f(e);
        }
        element.addEventListener(eventType, g);
        return this;
    }
    return dispatcher;
}

function makeVisible(element) {
    element.style.visibility = "visible";
}
function hide(element) {
    element.style.visibility = "hidden";
}

var addDialog = document.getElementById("addPicDialogBox");
//makeVisible(addDialog);
var addButton = document.getElementById("addNewPhoto");
var urlCancelButton = document.getElementById("cancelUrlAdd");
eventDispatcher(addButton, "click").register(function () {
    makeVisible(addDialog);
});
eventDispatcher(urlCancelButton, "click").register(function () {
    hide(addDialog);
});


picsec = document.getElementById("picturesSection");
addPic(picsec, "http://www.fontplay.com/freephotos/seventeen/fpx041611-19.jpg");
addPic(picsec, "http://www.fontplay.com/freephotos/seventeen/fpx012211-01.jpg");
