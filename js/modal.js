$(document).ready(function(){
    $('#open').click(function(){
        $('.modal').toggle('slow')
    });
    $('.modal').click(function(){
        $(this).css({display:"none"})
    });

});
