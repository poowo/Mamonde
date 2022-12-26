$('.gnb li').mouseenter(function(){
    $(this).children('div').stop().slideDown();
});
$('.gnb li').mouseleave(function(){
    $(this).find('div:visible').stop().slideUp();
});