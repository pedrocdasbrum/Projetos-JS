function abrirMenu(){
  document.getElementById('menuzinho_lista').style.marginRight="0%";
  document.getElementById('menuzinho_lista').style.height="100%";
}

function fecharMenu(){
  document.getElementById('menuzinho_lista').style.marginRight="-500%";
  document.getElementById('menuzinho_lista').style.height="0%";
}

function abrirFormulario(){
  document.getElementById('abrir').style.zIndex="1";
  document.getElementById('cortina').style.backgroundColor="rgba(30, 0, 0, .8)";
  document.getElementById('cortina').style.zIndex="3";
  document.getElementById('contato_2').style.marginTop="80px";
}

function fecharFormulario(){
  document.getElementById('abrir').style.zIndex="2";
  document.getElementById('cortina').style.backgroundColor="rgba(0, 0, 0, 0)";
  document.getElementById('cortina').style.zIndex="1";
  document.getElementById('contato_2').style.marginTop="-500px";
}

function enviar(){
  var nome=document.getElementById('nome').value;
  var telefone=parseInt(document.getElementById('telefone').value);
  var email=document.getElementById('email').value;
  var mensagem=document.getElementById('mensagem').value;

  window.alert("Mensagem enviada com sucesso!");
}

function validar(){
  if (document.getElementById('nome').value=="" || document.getElementById('telefone').value=="" || document.getElementById('email').value=="" || document.getElementById('mensagem').value=="") {
    window.alert("Preencha os campos!");
    document.getElementById('nome').style.color="black";
    document.getElementById('telefone').style.color="black";
    document.getElementById('email').style.color="black";
    document.getElementById('mensagem').style.color="black";
    if (document.getElementById('nome').value=="" && document.getElementById('telefone').value=="" && document.getElementById('email').value=="" && document.getElementById('mensagem').value=="") {
      document.getElementById('nome').style.border="solid 1px red";
      document.getElementById('telefone').style.border="solid 1px red";
      document.getElementById('email').style.border="solid 1px red";
      document.getElementById('mensagem').style.border="solid 1px red";
    }else if (document.getElementById('nome').value=="") {
      document.getElementById('nome').style.border="solid 1px red";
    }else if (document.getElementById('telefone').value=="") {
      document.getElementById('telefone').style.border="solid 1px red";
    }else if ((document.getElementById('email').value=="")) {
      document.getElementById('email').style.border="solid 1px red";
    }else {
      document.getElementById('mensagem').style.border="solid 1px red";
    }
  }else {
    enviar();
  }
}

function apagar(){
  if(document.getElementById('nome').value!="" || document.getElementById('telefone').value!="" || document.getElementById('email').value!="" || document.getElementById('mensagem').value!="") {
    document.getElementById('nome').value="";
    document.getElementById('telefone').value="";
    document.getElementById('email').value="";
    document.getElementById('mensagem').value="";
  }
}
