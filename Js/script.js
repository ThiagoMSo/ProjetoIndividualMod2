$(document).ready(function() {
  $("#incremento-cesar").hide();
  $("#cifra").change(function() {
    if ($(this).val() === "cesar") {
      $("#incremento-cesar").show();
    } else {
      $("#incremento-cesar").hide();
    }
  });

// Função para dar o resultado em cifra de cesar
function cifraDeCesar(mensagem, incremento) {
    if (incremento > 25) {
        incremento = incremento % 26;
    }
    var resultado = "";
    for (var i = 0; i < mensagem.length; i++) {
        var c = mensagem.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            resultado += String.fromCharCode((c - 65 + incremento) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            resultado += String.fromCharCode((c - 97 + incremento) % 26 + 97);
        } else {
            resultado += mensagem[i];
        }
    }
    return resultado;
}
      // configuração de descodificação
  function decifraDeCesar(mensagem, incremento) {
    if (incremento > 25) {
      incremento = incremento % 26;
    }
    var resultado = "";
    for (var i = 0; i < mensagem.length; i++) {
      var c = mensagem.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        resultado += String.fromCharCode((c - 90 - incremento) % 26 + 90);
      } else if (c >= 97 && c <= 122) {
        resultado += String.fromCharCode((c - 122 - incremento) % 26 + 122);
      } else {
        resultado += mensagem[i];
      }
    }
    return resultado;
  }
      // configuração do Botão para mudar texto
      $("#botao-codificar-decodificar").click(function() {
      var codificarDecodificar = $('input[name="codificar-decodificar"]:checked').val();
      if (codificarDecodificar === "codificar") {
      $(this).text("Codificar Mensagem");
      } else {
      $(this).text("Decodificar Mensagem");
      }
    // Codifica e descodifica a mensagem no display
      $("#botao-codificar-decodificar").click(function() {
        var mensagem = $("#mensagem").val();
        var cifra = $("#cifra").val();
        var incremento = $("#incremento").val();
        var codificarDecodificar = $('input[name="codificar-decodificar"]:checked').val();
      
        if (cifra === "cesar") {
          if (codificarDecodificar === "codificar") {
            var resultado = cifraDeCesar(mensagem, incremento);
          } else {
            var resultado = decifraDeCesar(mensagem, incremento);
          }
        } else {
          if (codificarDecodificar === "codificar") {
            var resultado = btoa(mensagem);
          } else {
            var resultado = atob(mensagem);
          }
        }
      
        $("#resultado").val(resultado);
      });
    });
    });