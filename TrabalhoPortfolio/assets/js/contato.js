$(document).ready(function () {

    $("#contato-form").submit(function (e) {
        e.preventDefault();

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();

        alert("Olá "+ nome + " sua mensagem foi enviada com sucesso.");
    })
});
