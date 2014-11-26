$('#btn-menu').click(function(){

$('.nav-main').slideToggle();



});


$('.panel-content').hide();

$('.panel-title').click(function(){

//$('.panel-content').slideToggle();


$(this).next().slideToggle();
});