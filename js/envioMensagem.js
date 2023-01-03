function enviarMensagem() {
  var nome = document.querySelector("#nome").value;
  nome = window.encodeURIComponent(nome);

  var cidadeBairro = document.querySelector("#cidadeBairro").value;
  cidadeBairro = window.encodeURIComponent(cidadeBairro);

  var celular = document.querySelector("#celular").value;
  celular = celular.replace(/\D/g, "");

  var mensagem = document.querySelector("#mensagem").value;
  mensagem = window.encodeURIComponent(mensagem);
  if (nome === "" || nome.length < 5) {
    alert("É obrigatório informar o seu Nome");
    nome.focus();
  } else {
    let urlApi = "https://api.whatsapp.com/send?phone=5524988512465&text=";

    window.open(
      urlApi +
        "Nome:%20" +
        nome +
        "%0d%0a" +
        "Cidade:%20" +
        cidadeBairro +
        "%0d%0a" +
        "Telefone:%20" +
        celular +
        "%0d%0a" +
        "Mensagem:%20" +
        mensagem,
      "_blank"
    );
  }

  //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}
