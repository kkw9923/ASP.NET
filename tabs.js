var currentTab = "";
function showTabA() {
    if (currentTab != "TabA") {
        currentTab = "TabA";
        showNoTabs();
        document.getElementById("TabA").style.backgroundColor = "#0d335d";
        document.getElementById("SectionA").style.display = "inline";
    }
}

function showTabB() {
    if (currentTab != "TabB") {
        currentTab = "TabB";
        showNoTabs();
        document.getElementById("TabB").style.backgroundColor = "#0d335d";
        document.getElementById("SectionB").style.display = "inline";
    }
}

function showTabC() {
    if (currentTab != "TabC") {
        currentTab = "TabC";
        showNoTabs();
        document.getElementById("TabC").style.backgroundColor = "#0d335d";
        document.getElementById("SectionC").style.display = "inline";

    }
}

function showTabD() {
    if (currentTab != "TabD") {
        currentTab = "TabD";
        showNoTabs();
        document.getElementById("TabD").style.backgroundColor = "#0d335d";
        document.getElementById("SectionD").style.display = "inline";

    }
}

function showTabE() {
    if (currentTab != "TabE") {
        currentTab = "TabE";
        showNoTabs();
        document.getElementById("TabE").style.backgroundColor = "#0d335d";
        document.getElementById("SectionE").style.display = "inline";

    }
}

function showTabF() {
    if (currentTab != "TabF") {
        currentTab = "TabF";
        showNoTabs();
        document.getElementById("SectionF").style.display = "inline";
    }
}


function showNoTabs() {
    document.getElementById("TabA").style.backgroundColor = "transparent";
    document.getElementById("TabB").style.backgroundColor = "transparent";
    document.getElementById("TabC").style.backgroundColor = "transparent";
    document.getElementById("TabD").style.backgroundColor = "transparent";
    document.getElementById("TabE").style.backgroundColor = "transparent";
    //document.getElementById("TabF").style.backgroundColor = "transparent";


    document.getElementById("SectionA").style.display = "none";
    document.getElementById("SectionB").style.display = "none";
    document.getElementById("SectionC").style.display = "none";
    document.getElementById("SectionD").style.display = "none";
    document.getElementById("SectionE").style.display = "none";
    document.getElementById("SectionF").style.display = "none";
}

window.onload = function () {
    showTabF();
}

