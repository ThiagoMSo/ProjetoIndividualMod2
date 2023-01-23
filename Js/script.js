$(document).ready(function() {
  // Mostra/esconde campo de incremento com base na cifra selecionada

  // Evento "change" para o campo de seleção de tipo de cifra
  $( "#cipher-type" ).on("change", function () {
    // Se o tipo de cifra selecionado for "cifra de César"
    if ($(this).val() === "caesar") {
      // Exibe o campo de incremento
      $("#increment").show();
    } else {
      // Oculta o campo de incremento
      $("#increment").hide();
    }
  });

  // Evento "change" para os campos de opção de ação
  $('input[name="action"]').on("change", function () {
    // Se a opção selecionada for "codificar"
    if ($(this).val() === "encode") {
      // Altera o texto do botão para "Codificar Mensagem!"
      $("button").text("Codificar Mensagem!");
    } else {
      // Altera o texto do botão para "Decodificar Mensagem!"
      $("button").text("Decodificar Mensagem!");
    }
  });
   // Evento "click" para o botão
   $("button").on("click", function () {
    // Obtém o texto digitado no campo de mensagem
    var message = $("#message").val();
    // Obtém a opção selecionada de ação (codificar ou decodificar)
    var action = $('input[name="action"]:checked').val();
    // Obtém o tipo de cifra selecionado
    var cipher = $("#cipher-type").val();
    // Se o tipo de cifra selecionado for "cifra de César"
    if (cipher === "caesar") {
      // Obtém o valor do incremento
      var increment = $("#increment").val();
      // Verifica se a opção selecionada é "codificar"
      if (action === "encode") {
        // Codifica a mensagem usando a cifra de César
        var encodedMessage = encodeCaesarCipher(message, increment);
        // Exibe a mensagem codificada no campo de resultado
        $("#result").val(encodedMessage);
      } else {
        // Decodifica a mensagem usando a cifra de César
        var decodedMessage = decodeCaesarCipher(message, increment);
        // Exibe a mensagem decodificada no campo de resultado
        $("#result").val(decodedMessage);
      }
    } else {
      // Se o tipo de cifra selecionado for "base64"
      // Verifica se a opção selecionada é "codificar"
      if (action === "encode") {
        // Codifica a mensagem usando o base64
        var encodedMessage = btoa(message);
        // Exibe a mensagem codificada no campo de resultado
        $("#result").val(encodedMessage);
      } else {
        // Decodifica a mensagem usando o base64
        var decodedMessage = atob(message);
        // Exibe a mensagem decodificada no campo de resultado
        $("#result").val(decodedMessage);
      }
    }
  });
});
// Função para codificar a mensagem usando a cifra de César
function encodeCaesarCipher(text, increment) {

}
// Função para decodificar a mensagem usando a cifra de César
function decodeCaesarCipher(text, increment) {

}