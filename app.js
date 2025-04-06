let cidades = [
    {"id": 1, "cidades": "Belo Horizonte", "estado": "MG", "populacao": 2.416.339},
    {"id": 2, "cidades": "São Paulo", "estado": "SP", "populacao": 11.895.578},
    {"id": 3, "cidades": "Rio de Janeiro", "estado": "RJ", "populacao": 6.729.894},
    {"id": 4, "cidades": "Curitiba", "estado": "PR", "populacao": 1.829.225},
    {"id": 5, "cidades": "Fortaleza", "estado": "CE", "populacao: 2.574.412}
]

document.getElementById('btnMudaFundo').addEventListener('click', mudaFundo)
function mudaFundo() {
    let cor = document.getElementById ('corFundo').value /*erro confirguração cor , pode ser as aspas*/
document.body.style.backgroundColor = cor
}

document.getElementById('btnCarregaDados').addEventListener('click', carregaDados)
function carregaDados() {
   let ulCidades = document.getElementById('ulCidades'); /*erro confirguração cor , pode ser as aspas*/
   strTextoHTML  = '';

   for (let i = 0; i < cidades.length; i++) {
   let cidade = cidades[i];
    strTextoHTML  += `<li>${cidade.cidade} - ${cidade.estado}</li>`/*erro confirguração cor , pode ser as aspas*/
   }

   ulCidades.innerHTML = strTextoHTML; 
}
