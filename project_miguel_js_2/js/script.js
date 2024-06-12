var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();


  verificacao();

});



function verificacao() {


  let numero_inteiro = Number(document.getElementById("numero_inteiro").value);

  let resultado = Number(document.getElementById("resultado").value);

  if (numero_inteiro >= 10 && numero_inteiro <= 20) {
    resultado = `O numero ${numero_inteiro} está entre 10 e 20`
  } else {
    resultado = `O numero ${numero_inteiro} não está entre 10 e 20`;
}

  document.getElementById("resultado").value = resultado;


}
