function calcularAdicao(){
  var valor1  = parseFloat(document.getElementById('v1').value);
  var valor2  = parseFloat(document.getElementById('v2').value);

  var adicao = valor1+valor2;

  document.getElementById('resultado').innerHTML="O resultado é: "+adicao;
  document.getElementById('resultado').style.color="green";
  document.getElementById('v1').style.border="solid 1px black";
  document.getElementById('v2').style.border="solid 1px black";
}

function validar(){
  if (document.getElementById('v1').value=="" || document.getElementById('v2').value=="") {
    document.getElementById('resultado').innerHTML="Preencha os campos!";
    document.getElementById('resultado').style.color="red";
    if (document.getElementById('v1').value=="" && document.getElementById('v2').value=="") {
      document.getElementById('v1').style.border="solid 1px red";
      document.getElementById('v2').style.border="solid 1px red";
    }else if (document.getElementById('v1').value=="") {
      document.getElementById('v1').style.border="solid 1px red";
    }else {
      document.getElementById('v2').style.border="solid 1px red";
    }
  }else {
    calcularAdicao();
  }
}
