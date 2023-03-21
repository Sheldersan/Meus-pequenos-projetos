function somar() {
    let n1 = parseFloat( document.getElementById("n1").value);
    let n2 = parseFloat( document.getElementById("n2").value);
    let resultado = n1 / n2;
    document.getElementById("resultado").innerHTML = "O resultado da soma é: " + resultado;
    
}

function multiplicar() {
    let n3 = parseFloat( documnet.getElementById("n3").value);
    let n4 = parseFloat( document.getElementById("n4").value);
    let res = n3 * n4;
    documnet.getElementById("res").innerHTML =  res;
}


