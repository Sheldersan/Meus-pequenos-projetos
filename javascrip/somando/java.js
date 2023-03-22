function multiplicar() {
    let n1 = parseFloat( document.getElementById("n1").value);
    let n2 = parseFloat( document.getElementById("n2").value);
    let resultado = n1 + n2;
    document.getElementById("resultado").innerHTML = "O resultado da soma é: " + resultado;
    
}

function somar() {
    let n3 = parseFloat( document.getElementById("n3").value);
    let n4 = parseFloat( document.getElementById("n4").value);
    let res = n3 * n4;
    document.getElementById("res").innerHTML = res;
}
function verificaridade(){
    var idade = parseFloat(document.getElementById("idade").value)

    if (idade >=18) {
        document.getElementById('res-idade').innerHTML = 'Você é maior de idade.' ;
    } else {
        document.getElementById('res-idade').innerHTML = 'Você é menor de idade.'
    }
}






