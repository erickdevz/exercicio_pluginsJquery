$(document).ready(function(){
    $('#telefone').mask("(00) 00000-0000")

    $('#cpf').mask("000.000.000-00")

    $('#cep').mask("00000-000")

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Digite um email válido',
            telefone: 'Digite um telefone válido',
            cpf: 'Digite cpf válido',
            cep: 'Digite um cep válido'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }    
    }) 
})