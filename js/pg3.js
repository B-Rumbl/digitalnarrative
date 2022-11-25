document.getElementById("txt1").style.visibility = "hidden"
document.getElementById("orb000").addEventListener("click", textreveal);
function textreveal() {
    document.getElementById("txt1").style.visibility = "visible"
}


document.getElementById("txt2").style.visibility = "hidden"
document.getElementById("orb001").addEventListener("click", textrevealtwo);
function textrevealtwo() {
    document.getElementById("txt2").style.visibility = "visible"
}

document.getElementById("txt3").style.visibility = "hidden"
document.getElementById("orb002").addEventListener("click", textrevealthree);
function textrevealthree() {
    document.getElementById("txt3").style.visibility = "visible"
}

document.getElementById("txt4").style.visibility = "hidden"
document.getElementById("orb000a").addEventListener("click", textrevealfour);
function textrevealfour() {
    document.getElementById("txt4").style.visibility = "visible"
}


document.getElementById("txt5").style.visibility = "hidden"
document.getElementById("orb001a").addEventListener("click", textrevealfive);
function textrevealfive() {
    document.getElementById("txt5").style.visibility = "visible"
}


document.getElementById("txt6").style.visibility = "hidden"
document.getElementById("orb002a").addEventListener("click", textrevealsix);
function textrevealsix() {
    document.getElementById("txt6").style.visibility = "visible"
}

document.getElementById("txt7").style.visibility = "hidden"
document.getElementById("orb003").addEventListener("click", textreveal7);
function textreveal7() {
    document.getElementById("txt7").style.visibility = "visible"
}
document.getElementById("txt8").style.visibility = "hidden"
document.getElementById("orb004").addEventListener("click", textreveal8);
function textreveal8() {
    document.getElementById("txt8").style.visibility = "visible"
}

document.getElementById("txt9").style.visibility = "hidden"
document.getElementById("orb005").addEventListener("click", textrevealnine);
function textrevealnine() {
    document.getElementById("txt9").style.visibility = "visible"
}

document.getElementById("txt10").style.visibility = "hidden"
document.getElementById("orb003a").addEventListener("click", textrevealten);
function textrevealten() {
    document.getElementById("txt10").style.visibility = "visible"
}
document.getElementById("txt11").style.visibility = "hidden"
document.getElementById("orb004a").addEventListener("click", textrevealeleven);
function textrevealeleven() {
    document.getElementById("txt11").style.visibility = "visible"
}
document.getElementById("txt12").style.visibility = "hidden"
document.getElementById("orb005a").addEventListener("click", textrevealtwelve);
function textrevealtwelve() {
    document.getElementById("txt12").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible"
}

document.getElementById("next").addEventListener("click", pg4Select);
function pg4Select(){
    window.location.href = "page004.html"
}

