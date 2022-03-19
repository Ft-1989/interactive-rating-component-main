$(document).ready(function(){

    let btts = document.getElementsByClassName('btt');
    let value;

    $('.btt').click(function(){
        for(var i = 0; i < btts.length; i++){
            $(btts[i]).removeClass('clicked');
        }
       $(this).addClass('clicked');
       value = Array.from(btts).indexOf(this) + 1;
    });

    $('.submit').click(function(){
        $('.card1').css('display', 'none');
        $('.card2').css('display', 'block');
        document.querySelector('.d1 span').innerHTML = value;
    });

});