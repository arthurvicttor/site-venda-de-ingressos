document.getElementById('qtd').value = 0;


function comprar(){
    //recuperando valores
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0){
        alert('Por favor, digite uma quantidade válida')
        return
    }

    if(tipoIngresso.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

    function comprarPista(quantidade) {
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        
        if (quantidade > qtdPista) {
            alert('Quantidade indisponivel para o tipo Pista');
        } else {
            qtdPista = qtdPista - quantidade;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso');
        }
    }

    function comprarSuperior(quantidade) {
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

        if (quantidade > qtdSuperior) {
            alert('Quantidade indisponivel para o tipo Superior');
        } else {
            qtdSuperior = qtdSuperior - quantidade;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso');
        }
    }

    function comprarInferior(quantidade) {
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

        if (quantidade > qtdInferior) {
            alert('Quantidade indisponivel para o tipo Inferior');
        } else {
            qtdInferior = qtdInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso');
        }
    }
    

}