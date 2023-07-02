$(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    speed: 650,
    arrows: false,
    dots: true,
});

$(document).ready(function() {
    $(".mail").click(function(e) {
        alert("문의 시, 반드시 회원 'E-Mail' 또는 '휴대폰 번호'를 기재해주셔야 처리가 가능합니다.");
    });
});