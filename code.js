onEvent("Verde", "click", function( ) {
  setProperty("Tela", "background-color", "green");
});
onEvent("Voltar", "click", function( ) {
  setProperty("Tela", "background-color", "white");
});
onEvent("Apresentação", "click", function( ) {
  setText("TextoApresentação", "Olá, seja bem-vindo ao meu app da aula 01 Introdução ao JavaScript!");
});
