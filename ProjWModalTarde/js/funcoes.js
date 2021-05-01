function abrirCalculadora(){
  document.getElementById('cortina').style.backgroundColor="rgba(0, 0, 0, 0.7)";
  document.getElementById('modal').style.marginTop="80px";
}

function fecharCalculadora(){
  document.getElementById('cortina').style.backgroundColor="rgba(0, 0, 0, 0)";
  document.getElementById('modal').style.marginTop="-500px";
}

function calcular(){
  var valor1=parseFloat(document.getElementById('v1').value);
  var valor2=parseFloat(document.getElementById('v2').value);
  var operacao=document.getElementById('operacao').value;
  var resultado;

  switch (operacao) {
    case "+":
        resultado=valor1+valor2;
      break;
    case "-":
        resultado=valor1-valor2;
        break;
    case "*":
        resultado=valor1*valor2;
        break;
    case "/":
        resultado=valor1/valor2;
        break;
    case "%":
        resultado=valor1%valor2;
        break;
    case "pow":
        resultado=Math.pow(valor1, valor2);
        break;
    default:
    resultado=Math.pow(valor1, 1/valor2);
  }

  document.getElementById('resultado').innerHTML="Resultado do cálculo: "+resultado;
  document.getElementById('resultado').style.color="green";
  document.getElementById('v1').style.border="solid 0.5px black";
  document.getElementById('v2').style.border="solid 0.5px black";
}

function validar(){
  if (document.getElementById('v1').value=="" || document.getElementById('v2').value=="") {
    document.getElementById('resultado').style.color="red";
    if (document.getElementById('v1').value=="" && document.getElementById('v2').value=="") {
      document.getElementById('v1').style.border="solid 0.5px red";
      document.getElementById('v2').style.border="solid 0.5px red";
      document.getElementById('resultado').innerHTML="Preencha os campos!";
    }else if (document.getElementById('v1').value="") {
      document.getElementById('v1').style.border="solid 0.5px red";
      document.getElementById('resultado').innerHTML="Preencha o valor  1!";
      document.getElementById('v2').style.border="solid 0.5px black";
    }else {
      document.getElementById('v2').style.border="solid 0.5px red";
      document.getElementById('resultado').innerHTML="Preencha o valor  2!";
      document.getElementById('v1').style.border="solid 0.5px black";
    }
  }else {
    calcular();
  }
}
