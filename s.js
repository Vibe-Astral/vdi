
/* ponto de partida*/
function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    /* condiçoes de recebimento de dados caso estejam incompletos ou com erros*/
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else { /* caso esteja certo */
        var fsex = document.getElementsByName("radt")
        var idade = ano - Number(fano.value)
        var genero = ""
        /* Set imagem via js */
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        /* condiçoes de imagem */
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "bebeh.png")
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "jovenh.png")
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute("src", "homemA.png")
            } else {
                img.setAttribute("src", "homemI.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "bebem.png")
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute("src", "jovenm.png")
            } else if (idade >= 21 && idade < 50) {
                img.setAttribute("src", "mulherA.png")
            } else {
                img.setAttribute("src", "mulheri.png")
            }
        }
        /* codigo final de implementaçao de resultado */
        res.style.textAlign = "center"
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}