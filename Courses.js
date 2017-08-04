function getCourses() {
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/courses";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function () {
        var resp = JSON.parse(xhr.responseText);
        showCourses(resp.courses.coursePaperSection);
    }
    xhr.send(null);
}

function showCourses(dest) {
    var tableContent = "<tr class=orderTitle><td><b><font color=white>Course Name</font></b></td><td><b><font color=white>Points</font></b></td><td><b><font color=white>Title</font></b></td><td><b><font color=white>Description</font></b></td><td><b><font color=white>Prerequisites & Restrictions</font></b></td></tr>\n";
    for (var i = 0; i < dest.length; ++i) {
        var record = dest[i];

        courseA = record.subject.courseA;
        points = record.subject.points;

        if (record.title == null) {
            var title = "";
        } else {
            var title = record.title;
        }
        if (record.description == null) {
            var desc = "";
        } else {
            var desc = record.description;
        }
        if (record.prerequisite != null) {
            if (record.prerequisite.length > 5) {
                var prereq = record.prerequisite;

            }
            else if (record.prerequisite.length <= 2) {
                var prereq = record.prerequisite[0] + "<br>" + record.prerequisite[1] + "<br>";
            } else {
                var prereq = record.prerequisite[0] + "<br>" + record.prerequisite[1] + "<br>" + record.prerequisite[2];
            }
        } else {
            var prereq = "No Prerequisite.";
        }


        tableContent += "<tr class='orderEven'>";

        tableContent += "<td>" + courseA + "</td><td>" + points + "</td><td>" + title + "</td><td>" + desc + "</td><td>" + prereq + "</td></tr>\n";
    }
    document.getElementById("showCourses").innerHTML = tableContent;
}

