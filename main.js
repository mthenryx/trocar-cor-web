"use strict"

const botaoTrocarCor = document.getElementById("botao-trocar-cor")
const botaoVerde = document.getElementById("botao-verde")
const botaoVermelho = document.getElementById("botao-vermelho")

botaoTrocarCor.addEventListener("click", trocarCor)
botaoVerde.addEventListener("click", trocarParaCorVerde)
botaoVermelho.addEventListener("click", trocarParaCorVermelho)

function trocarCor() {
    const corUsuario = document.getElementById("cor-usuario").value

    if (corUsuario == "vermelho") {
        document.documentElement.style.setProperty("--color-bg", "red")
    } else if (corUsuario == "azul") {
        document.documentElement.style.setProperty("--color-bg", "blue")
    } else if (corUsuario == "amarelo") {
        document.documentElement.style.setProperty("--color-bg", "yellow")
    } else if (corUsuario == "cinza") {
        document.documentElement.style.setProperty("--color-bg", "grey")
    } else {
        document.documentElement.style.setProperty("--color-bg", corUsuario)
    }
}

function trocarParaCorVerde() {
    document.documentElement.style.setProperty("--color-bg", "green")
}

function trocarParaCorVermelho() {
    document.documentElement.style.setProperty("--color-bg", "red")
}
