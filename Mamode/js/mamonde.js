$(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        pause: 4000,
        auto: true,
        pager: true,
    });
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    });
    $('.top_sub p img').click(function(){
        $('aside').hide();
    });
});