

function getGuestbook() {
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/htmlcomments";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        showGuestbook(xhr.responseText);
    }
    xhr.send(null);
}

function postGuestbook(guestComment) {
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/comment?name=" + guestComment.name.value;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        window.location.reload();
        showGuestbook(xhr.responseText);
    }

    xhr.open("POST", uri, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(guestComment.comment.value));

    return false;
}

function showGuestbook(comments) {
    var tableContent = "<tr class='orderTitle'></tr>\n";

    tableContent += "<td>" + comments + "</td></tr>\n";
    document.getElementById("showGuestbook").innerHTML = tableContent;
}

