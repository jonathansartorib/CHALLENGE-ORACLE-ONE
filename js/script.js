var input = document.getElementById('input');
var output = document.getElementById('output');


var codificar = document.getElementById('codificar');
    codificar.onclick = codifica;

var decodificar = document.getElementById('decodificar');
    decodificar.onclick = decodifica;

var copiar = document.getElementById('copiar');
    copiar.onclick = copia;
    

function cod(){
    
    var entrada = input.value;

    if(entrada != ""){
        var transforma = entrada.replace(/e/g,"enter");
            transforma =  transforma.replace(/i/g,"imes");
            transforma =  transforma.replace(/a/g,"ai");
            transforma =  transforma.replace(/o/g,"ober");
            transforma =  transforma.replace(/u/g,"ufat");
    } else {
        alert("Nenhuma mensagem foi digitada!")
    }  
    
    return transforma;
}  

function decod(){
    
    var entrada = input.value;

    if(entrada != ""){
        var transforma =  entrada.replace(/enter/g,"e");
        transforma =  transforma.replace(/imes/g,"i");
        transforma =  transforma.replace(/ai/g,"a");
        transforma =  transforma.replace(/ober/g,"o");
        transforma =  transforma.replace(/ufat/g,"u");
    } else {
        alert("Nenhuma mensagem foi digitada!")
    }
    
    return transforma;
}  
       
function codifica(input) {
    output.innerHTML = cod();
    output.style.background="white";
}

function decodifica(input) {
    output.innerHTML = decod();
    output.style.background="white";
}

function copia() {
    output.select();
    document.execCommand('copy');
    output.blur();
    alert("mensagem copiada");
    showInput = document.getElementById('input-div-result');
    navigator.clipboard.writeText(showInput.textContent);
}

