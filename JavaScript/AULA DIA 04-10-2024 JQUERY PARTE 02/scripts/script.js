$('#teste1').on('click',function(){

    $("#caixa").animate({width: '10px', height: '100px'});

});

$('#teste2').on('click',function(){

    $('#caixa').animate({borderRadius: '100%'}).animate({width:'300px'});

});

$('#teste3').on('click',function(){

    //{primeira chave: css}, {segunda chave: configuração da animação}

    $('#caixa').animate({rotate: '360deg'},{duration: 3000, complete: () =>{alert('RODEI');/*  zera os parâmetros => */ $('#caixa').css('rotate','0deg')} });


});

$('#teste4').on('click', function existo(){

    let = teste = ['item1', 'item2', 'item3','legal'];

    // console.log(teste.indexOf('legal'));
    console.log(teste.includes('item2'))

    if(teste.indexOf('item2'/*inputPesquisar exemplo*/) == -1){
        alert('Não encontrei');
    }else{
            alert(`Encontrei!`)

    };

});

// existo();