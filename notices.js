function getNotices() {
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/notices";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept", "application/json;charset=UTF-8");
    xhr.onload = function () {
        var resp = JSON.parse(xhr.responseText);
        showNotices(resp);
    }
    xhr.send(null);
}


function showNotices(dest) {
    var tableContent = "<tr class=orderTitle></tr>\n";
    for (var i = 0; i < dest.length; ++i) {
        var record = dest[i];

        var title = record.titleField;
        var desc = record.descriptionField;
        var link = record.linkField;

        var info = "<b>"+ title + "</b><br><br>" + desc + " <a href=" + link + ">...Further information</a>";

        if (i & 1 == 1) { // odd row
            tableContent += "<tr class='orderOdd'>";
        }
        else { // even row
            tableContent += "<tr class='orderEven'>";
        }
        tableContent += "<td>" + info + "</td></tr>\n";
    }
    document.getElementById("showNotices").innerHTML = tableContent;
}