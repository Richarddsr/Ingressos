let irrelevante = 5;
let coins = 100;
//alert (`voce tem R$${100} reais`)
//alert("o ingresso para a cadeira superior esá no valor de R$5 reais a unidade, a inferior R$3 e a pista R$1.")

function comprar() {
    let cadeiras = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (cadeiras.value == 'pista') {
        comprarPista(qtd);
    }

    if (cadeiras.value == 'superior'){
        comprarSuperior(qtd);
    }

    if (cadeiras.value == 'inferior'){
        comprarInferior(qtd);
} 
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista || qtd <= 0)  {
        alert('Compra não efetuada');
        insuficiente(coins);
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        coins = coins - qtd 
        alert('Compra efetuada com sucesso!');
       //alert (`Voce tem R$${coins}`)
        
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior || qtd <= 0) {
        alert('Compra não efetuada');
        insuficiente(qtd);
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        coins = coins - qtd * 5;
        alert('Compra efetuada com sucesso!');
        //alert (`Voce tem R$${coins}`)
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior || qtd <= 0) {
        alert('Compra não efetuada');
        insuficiente(qtd);
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        coins = coins - qtd * 3;
        alert('Compra efetuada com sucesso!');
        //alert (`Voce tem R$${coins}`)
    }
}

function insuficiente(qtd) {
    alert ("Adicione somente valores positivos.")
}
