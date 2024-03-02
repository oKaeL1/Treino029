"use strict"

const send=document.querySelector("#enviar")
send.addEventListener("click", enviar)
const tabela=document.querySelector("div table")
const tcorpo=document.querySelector("div table tbody")
const selectTabela=document.querySelector("select#selecionarTabela")
let isPrice;
let isSAC;
function trocarTabela(tabelaValor){
switch(tabelaValor){
    case "1":  isPrice=true
    isSAC=false
    break
    case "2":
         isSAC=true
         isPrice=false
    break
    default:isSAC,isPrice=false
}
}

function enviar(){
    let emprestimoTotal=document.querySelector("#emprestimo").value
const jurosTotal=document.querySelector("#juros").value

let mesesReal=document.querySelector("#meses").value
if(mesesReal<=0 || mesesReal.length==0 || jurosTotal.length==0 || jurosTotal<=0 || emprestimoTotal<=0 || emprestimoTotal.length==0){
    const popUp=document.createElement("dialog")
    const corpo=document.body
    corpo.appendChild(popUp)
   popUp.showModal()
popUp.textContent="Por favor insira valores válidos"
const fechar=document.createElement("button")
fechar.style.cssText="display:block;margin:auto;"
fechar.textContent="Fechar"
fechar.onclick=()=>{popUp.remove()}

popUp.appendChild(fechar)
}

const jurosReal=jurosTotal/100
    if(isPrice){
    while(tabela.rows.length>1){
        tabela.deleteRow(1)
    }
    

let prestaçãoTotalPrice=((1+jurosTotal/100)**mesesReal), prestaçãoProva=(((1+jurosTotal/100)**mesesReal)-1)
prestaçãoTotalPrice=emprestimoTotal*(prestaçãoTotalPrice*(jurosTotal/100)/prestaçãoProva)

let emprestimoProv=Number(emprestimoTotal)
for(let i=1;i<=mesesReal;i++){
    const juros = emprestimoProv * jurosReal;
    const amortizacao = prestaçãoTotalPrice - juros;

    const linha = `
        <tr>
            <td>${i}</td>
            <td>R$ ${emprestimoProv.toFixed(2)}</td>
            <td>R$ ${prestaçãoTotalPrice.toFixed(2)}</td>
            <td>R$ ${juros.toFixed(2)}</td>
            <td>R$ ${amortizacao.toFixed(2)}</td>
        </tr>
    `;

    tcorpo.insertAdjacentHTML("beforeend", linha);
    emprestimoProv -= amortizacao;
}

    } else if(isSAC){
        while(tabela.rows.length>1){
            tabela.deleteRow(1)
        }
        let emprestimoTotalSac=Number(emprestimoTotal)
for(let mesVisi=1; mesVisi<=mesesReal; mesVisi++){

let jurosSac=(jurosTotal*emprestimoTotalSac)/100
let amortizaSac=emprestimoTotal/mesesReal
let prestaçãoTotalSac=amortizaSac+jurosSac

const tabelaSac=`
<tr>
<td>${mesVisi}°</td>
<td>R$ ${emprestimoTotalSac.toFixed(2)}</td>
<td>R$ ${prestaçãoTotalSac.toFixed(2)}</td>
<td>R$ ${jurosSac.toFixed(2)}</td>
<td>R$ ${amortizaSac.toFixed(2)}</td>
</tr>
`
emprestimoTotalSac-=amortizaSac
tcorpo.insertAdjacentHTML("beforeend", tabelaSac)
}


    }
}
