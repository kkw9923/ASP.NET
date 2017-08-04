function getPeople() {
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/people";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        var resp = JSON.parse(xhr.responseText);
        showPeople(resp.list);
    }
    xhr.send(null);
}

function showPeople(dest) {
    var tableContent = "<tr class=orderTitle><td><b><font color=white>Image</b></font></td><td><b><font color=white>Name</font></b></td><td><b><font color=white>Position</font></b></td><td><b><font color=white>V-card</font></b></td><td><b><font color=white>E-mail</font></b></td><td><b><font color=white>Phone Number</font></b></td></tr>\n";
    for (var i = 0; i < dest.length; ++i) {
        var record = dest[i];
        var name = record.firstname + " " + record.lastname;
        var upi = record.profileUrl[1];
        var imageId = record.imageId;
        var extn = "tel:+64&#x20;9&#x20;373&#x20;7999ext-"+ record.extn;
        var vcardUrl = "https://unidirectory.auckland.ac.nz/people/vcard/"+ upi;
        if (imageId == undefined) {
            var imageUrl = "No Image Available";
        }
        else{
            var imageUrl = "<img src=" +"https://unidirectory.auckland.ac.nz/people/imageraw/" + upi + "/" + imageId + "/small>";
        }
        if (record.extn == undefined) {
            var extn = "tel:+64&#x20;9&#x20;373&#x20;7999";
        }


        tableContent += "<tr class='orderEven'>";

        tableContent += "<td>" + imageUrl + "</td><td>" + name + "</td><td>" + record.jobtitles + "</td><td><center><a href=" + vcardUrl + "><font size=10>&#9990;</font></a></center></td><td><center><a href=mailto:" + record.emailAddresses[0] + "><font size=15>&#x2709;</font></center></td><td class='lasttd'><a href="+ extn + "><font size=7>&#x260e;</font></a></center></td></tr>\n";
    }
    document.getElementById("showPeople").innerHTML = tableContent;
}

