function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var radt = document.getElementsByName("radt")
        var idade = ano  - Number(fano.value)
        
    }




}