let irrelevante = 5;
//let coins = 100;
//alert (`voce tem R$${100} reais`)
//alert("o ingresso para a cadeira superior esá no valor de R$5 reais a unidade, a inferior R$3 e a pista R$1.")

function comprar() {
    let cadeiras = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if (qtd <=0){
        alert("Insira apenas valores positivos");
        return;
    }

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
    if (qtd > qtdPista) {
        alert('Compra não efetuada');
        
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        //coins = coins - qtd 
        alert('Compra efetuada com sucesso!');
       //alert (`Voce tem R$${coins}`)
        
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Compra não efetuada');
        
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        //coins = coins - qtd * 5;
        alert('Compra efetuada com sucesso!');
        //alert (`Voce tem R$${coins}`)
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior ) {
        alert('Compra não efetuada');
        
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        //coins = coins - qtd * 3;
        alert('Compra efetuada com sucesso!');
        //alert (`Voce tem R$${coins}`)
    }
}

