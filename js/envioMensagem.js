function enviarMensagem(e) {
  e.preventDefault();
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
    let urlApi = "https://api.whatsapp.com/send?phone=5521971392698&amp;text=";

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
//<a data-v-11cdc410="" href="https://api.whatsapp.com/send?phone=+5521991408871&amp;text=Olá,%20estou%20com%20dúvida%20na%20oferta%20Principal%20do%20produto%20Saúde Emocional - Pacote Diamante" target="_blank" class="float"><i data-v-11cdc410="" class="fa fa-whatsapp my-float"></i></a>
