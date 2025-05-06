const forBase = document.getElementById("forBase")
const desBase = document.getElementById("desBase")
const conBase = document.getElementById("conBase")
const intBase = document.getElementById("intBase")
const sabBase = document.getElementById("sabBase")
const carBase = document.getElementById("carBase")

const forD20 = document.getElementById("forD20")
const desD20 = document.getElementById("desD20")
const conD20 = document.getElementById("conD20")
const intD20 = document.getElementById("intD20")
const sabD20 = document.getElementById("sabD20")
const carD20 = document.getElementById("carD20")

const forMod = document.getElementById("forMod")
const desMod = document.getElementById("desMod")
const conMod = document.getElementById("conMod")
const intMod = document.getElementById("intMod")
const sabMod = document.getElementById("sabMod")
const carMod = document.getElementById("carMod")

const forTotal = document.getElementById("forTotal")
const desTotal = document.getElementById("desTotal")
const conTotal = document.getElementById("conTotal")
const intTotal = document.getElementById("intTotal")
const sabTotal = document.getElementById("sabTotal")
const carTotal = document.getElementById("carTotal")

function gerarNumerosAleatorio() {
    let array_numeros_aletorios = []

    for (let i = 0; i < 6; i++) {
        array_numeros_aletorios[i] = Math.floor(20 * Math.random() + 1)
    }
    return array_numeros_aletorios
}

function camposD20() {
    numeros_d20 = gerarNumerosAleatorio()

    forD20.value = numeros_d20[0]
    desD20.value = numeros_d20[1]
    conD20.value = numeros_d20[2]
    intD20.value = numeros_d20[3]
    sabD20.value = numeros_d20[4]
    carD20.value = numeros_d20[5]
    modificador(numeros_d20)
}

function modificador(numeros_aletorios) {
    numeros_d20 = numeros_aletorios

    let mod = []

    for (let i = 0; i < 6; i++) {
        valor = numeros_d20[i]

        if (valor > 15) {
            mod[i] = Math.round(1 + (valor / 1.2))
        } else if (valor > 7) {
            mod[i] = (0 + (valor / 1.2)).toFixed(0)
        } else {
            mod[i] = Math.round(-1 + (valor / 1.2))
        }

    }
    forMod.value = mod[0]
    desMod.value = mod[1]
    conMod.value = mod[2]
    intMod.value = mod[3]
    sabMod.value = mod[4]
    carMod.value = mod[5]}
    function calcular() {
        forTotal.value = Number(forBase.value) + Number(forMod.value)
        desTotal.value = Number(desBase.value) + Number(desMod.value)
        conTotal.value = Number(conBase.value) + Number(conMod.value)
        intTotal.value = Number(intBase.value) + Number(intMod.value)
        sabTotal.value = Number(sabBase.value) + Number(forMod.value)
        carTotal.value = Number(carBase.value) + Number(forMod.value)
    }

    function recarregarPagina() {
        window.location.reload(true)
    }

    let bntCalular = document.getElementById("calcular")
    let bntDado = document.getElementById("dado")
    let resetar = document.getElementById("resetar")

    bntCalular.addEventListener("click", calcular)
    resetar.addEventListener("click", recarregarPagina)
    bntDado.addEventListener("click", camposD20) 