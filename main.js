// var boxA = document.getElementById('box-a');
// var boxB = document.getElementById('box-b');
// var boxC = document.getElementById('box-c');
// var boxD = document.getElementById('box-d');

function openTab(evt, tabName){
    var i, tabbox, tabbtn;

    tabbox = document.getElementsByClassName('info-box');
    for( i = 0; i < tabbox.length; i++){
        tabbox[i].style.display = "none";
    }

    tabbtn = document.getElementsByClassName('info-btn');
    for( i = 0; i < tabbtn.length; i++){
        tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}