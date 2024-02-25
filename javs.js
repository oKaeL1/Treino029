"use strict"
const send=document.querySelector("#enviar")
send.addEventListener("click", enviar)
const tabela=document.querySelector("div table")
function enviar(){
   let quantidadeDeLinhas= tabela.rows.length
   let row=tabela.insertRow(quantidadeDeLinhas)
    let amortiza;
let emprestimoTotal=document.querySelector("#emprestimo").value
const jurosTotal=document.querySelector("#juros").value

let mesesReal=document.querySelector("#meses").value
let prestaçãoTotal=((1+jurosTotal/100)**mesesReal), prestaçãoProva=(((1+jurosTotal/100)**mesesReal)-1)
prestaçãoTotal=emprestimoTotal*(prestaçãoTotal*(jurosTotal/100)/prestaçãoProva)

let emprestimoProv=Number(emprestimoTotal)
let mesesFake=1
for(let jurosReal=Number(jurosTotal)/100;mesesFake<=mesesReal;mesesFake++){
    console.log(emprestimoProv)
    let indi=0
    row=tabela.insertRow(quantidadeDeLinhas)
    let mesesVisi=row.insertCell(indi)
    let emprestimoVisi= row.insertCell(indi)
    let amortizaVisi=row.insertCell(indi)
    let jurosVisi=row.insertCell(indi)
    let prestacaoVisi=row.insertCell(indi)
    mesesVisi.textContent=mesesFake+"°"
    emprestimoVisi.textContent="R$ "+emprestimoProv.toFixed(2)
    prestacaoVisi.textContent="R$ "+prestaçãoTotal.toFixed(2)
indi++
    
jurosReal=jurosTotal/100
jurosReal*=emprestimoProv

amortiza=prestaçãoTotal-jurosReal
emprestimoProv=emprestimoProv-amortiza
amortizaVisi.textContent="R$ "+amortiza.toFixed(2)
jurosVisi.textContent="R$"+jurosReal.toFixed(2)

}


}