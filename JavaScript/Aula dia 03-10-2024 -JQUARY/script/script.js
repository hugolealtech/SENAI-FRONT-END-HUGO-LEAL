console.log($('#caixa'));
$('#caixa').text('Texto');
$('#caixa').html('<h1>MANEIRO</h1>');


$('#teste1').on('click',function(){

    alert('Funcionou');

});

$('#teste2').on('click',function(){
    $('#caixa').css('width','300px');
    $('#caixa').css('backgroundColor','red')
});



$('#teste3').on('click',function(){

   if($('#caixa').hasClass('primeiroEstado')){
    $('#caixa').addClass('segundoEstado');
    $('#caixa').removeClass('primeiroEstado');
    
   }else{
    $('#caixa').toggleClass('segundoEstado','primeiroEstado');// toggle é o mesmo que replace

   }
   
});

$('#teste4').on('click',function(){

    // $('#caixa').slideToggle(500)
    // $('#caixa').hide(500)
    $('#caixa').fadeOut(500)

});

$('#teste5').on('click',function(){

   
    $('#caixa').show(500)
    // $('#caixa').fadeIn(500)

});
