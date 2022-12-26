// [중요] 이벤트 호출시 인라인 이벤트에서 넘겨주는 매개변수값을 인지
// 슬라이드 인덱스 초기 변수값 설정 = 1
var slideIndex = 1;
// 실제 수동 슬라이드 동작 함수 호출
// 초기값 1로 시작 = 첫번째 이미지가 로딩시 화면에 나오도록 하기 위하여
showSlide(slideIndex);



// 슬라이드 좌우이미지 클릭시 EventListener | 매개변수 -1, 1
function plusSilde(num){
    // 이벤트 발생시 showSlide()구현 함수에 변동된 매개변수값 넘겨줌, 함수 호출
    showSlide(slideIndex += num);
}
// DotDotDot 클릭시 EventListener | 매개변수 1, 2, 3
function currentSlides(num){
    // 이벤트 발생시 showSlide()구현 함수에 변동된 매개변수값 넘겨줌, 함수 호출
    showSlide(slideIndex = num);
}

// 실제 수동 슬라이드 동작 함수
function showSlide(num){
    var i;
    var slide = $('.slide');
    var dot = $('.dot');
    // 콘솔창 출력 .slide갯수 | 슬라이드 갯수 : ??
    console.log("슬라이드 갯수 :" + slide.length);

    /* 1. 좌우 화살표 클리시 수동 슬라이드 구현 */
    // 1-1 매개변수값이 슬라이드 박스 갯수(여기서는 3)보다 크면 slideIndex변수값을 초기값 1로 설정
    if(num > slide.length){
        slideIndex = 1;
    }
    // 1-2 매개변수값dl  0이하면 slideIndex변수값을 슬라이드 박스 갯수로 세팅
    // 단일 if 구현 
    if(num < 1){
        slideIndex = slide.length;
    }
    // 2. 수동 슬라이드 구현
    // 2-1. 모든 슬라이드 이미지 박스 가림
    for(i = 0; i<slide.length ;i++){
        $('.slide').eq(i).hide();
    }
    // 맨 처음 이미지 나오도록 코딩
    $('.slide').eq(slideIndex -1).show();
    
    // 3. Dot 컬러바꾸기 구현
    $('.dot').eq(slideIndex-1).css({backgroundColor:'#2497b2'})
    $('.dot').eq(slideIndex-2).css({backgroundColor:'#ccc'})
    $('.dot').eq(slideIndex-3).css({backgroundColor:'#ccc'})
}