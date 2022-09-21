function input(x){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero+x;
}

function result(x) {
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = eval(result);
}

function limpa() {
    document.getElementById("resultado").innerHTML = "";
}

function apaga() {
    var pre = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = pre.substring(0, pre.length-1);
}