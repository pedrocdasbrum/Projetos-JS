function calculadora(){
  var valor1;
  var valor2;
  var soma;
  var subtracao;
  var multiplicacao;
  var divisao;
  var potencia;
  var restoDivisao;
  var raiz;

  valor1 = parseInt(window.prompt("Informe um valor: "));
  valor2 = parseInt(window.prompt("Informe um outro valor: "));

  soma = valor1+valor2;
  subtracao = valor1-valor2;
  multiplicacao = valor1*valor2;
  divisao = valor1/valor2;
  potencia = valor1**valor2;
  restoDivisao = valor1%valor2;
  raiz = Math.pow(valor1,(1/valor2));

  window.alert("Resultado da adição entre "+valor1+" e "+valor2+" é: "+soma+"\n"+
  "Resultado da subtração entre "+valor1+" e "+valor2+" é: "+subtracao+"\n"+
  "Resultado da multiplicação entre "+valor1+" e "+valor2+" é: "+multiplicacao+"\n"+
  "Resultado da divisão entre "+valor1+" e "+valor2+" é: "+divisao+"\n"+
  "Resultado da potenciação entre "+valor1+" e "+valor2+" é: "+potencia+"\n"+
  "Resultado do restante da divisão entre "+valor1+" e "+valor2+" é: "+restoDivisao+"\n"+
  "Resultado da radiciação entre "+valor1+" e "+valor2+" é: "+raiz);
}

function funcionario(){
  var nomeFuncionario;
  var valorHora;
  var cargaHorariaBase;
  var salarioBruto;

  nomeFuncionario = window.prompt("Informe o nome do funcionário: ");
  valorHora = parseFloat(window.prompt("Informe o valor por hora trabalhada: "));
  cargaHorariaBase = parseFloat(window.prompt("Informe a carga horária base: "));

  salarioBruto = valorHora*cargaHorariaBase;

  window.alert("Nome do funcionário: "+nomeFuncionario+"\n"+
                "Valor por hora trabalhada: "+valorHora+"\n"+
                "Carga horária base: "+cargaHorariaBase+"\n"+
                "Salário bruto: "+salarioBruto);
}

function aluno(){
  var nomeDoAluno;
  var n1;
  var n2;
  var media;
  var resultado;

  nomeDoAluno = window.prompt("Informe o nome do aluno: ");
  n1 = parseFloat(window.prompt("Informe a n1 do aluno(a) "+nomeDoAluno+": "));
  n2 = parseFloat(window.prompt("Informe a n2 do aluno(a) "+nomeDoAluno+": "));
  media = (n1+n2)/2;
  if (media>=7) {
    resultado = "Aprovado";
  }else {
    resultado = "Reprovado";
  }

  window.alert("Dados do aluno\n"+
                "Nome: "+nomeDoAluno+"\n"+
                "N1: "+n1+"\n"+
                "N2: "+n2+"\n"+
                "Média: "+media+"\n"+
                "Resultado: "+resultado);
}

function trocaTroca(){
  var valor1;
  var valor2;
  var valor3;
  var a;
  var b;
  var c;

  valor1 = parseInt(window.prompt("Informe um valor a: "));
  valor2 = parseInt(window.prompt("Informe um valor b: "));
  valor3 = parseInt(window.prompt("Informe um valor c: "));

  a = valor1;
  b = valor2;
  c = valor3;

  window.alert("Valor a: "+b+"\n"+
                "Valor b: "+c+"\n"+
                "Valor c: "+a);
}

function peso(){
  var peso;
  var engordar15;
  var emagrecer20;

  peso = parseFloat(window.prompt("Informe um peso: "));

  engordar15 = peso*1.15;
  emagrecer20 = peso*0.8;

  window.alert("Peso se engordar 15%: "+engordar15+"Kg"+"\n"+
                "Peso se emagrecer 20%: "+emagrecer20+"Kg");
}

function bhaskara(){
  var a;
  var b;
  var c;
  var delta;
  var x1;
  var x2;

  a = parseInt(window.prompt("Digite um valor a: "));
  b = parseInt(window.prompt("Digite um valor b: "));
  c = parseInt(window.prompt("Digite um valor c: "));

  delta = (Math.pow(b,2))-4*a*c;

  window.alert("Valor de delta: "+delta+"\n");

  if (delta<0) {
    window.alert("Para delta negativo não existem raizes reais");
  }else {
    window.alert("Para delta positivo, raízes diferentes");

    x1 = (-b+Math.sqrt(delta))/(2*a);
    x2 = (-b-Math.sqrt(delta))/(2*a);

    window.alert("x1 = "+x1+"\n"+
                  "x2 = "+x2);
  }
}

function maisOuMenos(){
  var valor;

  valor = parseInt(window.prompt("Digite um número real qualquer: "));

  if (valor>0) {
    window.alert("Número positivo!");
  }else {
    window.alert("Número negativo!");
  }
}

function parOuImpar(){
  var valor;
  var verificacao;

  valor = parseInt(window.prompt("Digite um número inteiro qualquer: "));

  verificacao = valor%2;

  if (verificacao==0) {
    window.alert("Número par!");
  }else {
    window.alert("Número ímpar!");
  }
}
