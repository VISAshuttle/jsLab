$(function() {
	/*터치 슬라이드 비쥬얼 영역*/
	window.mySwipe = $('#mySwipe').Swipe({
		startSlide: 0, // 초기 노출 인덱스
		auto: 3000, // 자동이동 시간
		continuous: true, // 반복여부
		disableScroll: true, // 스크롤바
		stopPropagation: true, // 하위 요소에 이벤트 전달을 차단
		callback: function(i, d) {
			let prevImg = $(".touch_bullet img[src*='on.png']");
			prevImg.attr("src", prevImg.attr("src").replace("on.png", "off.png"));
			
			let currentImg = $(".touch_bullet img").eq(i);
			currentImg.attr("src", currentImg.attr("src").replace("off.png", "on.png"));
		},
		transitionEnd: function(i, d) {
			
		}
	}).data('Swipe');

	$(".touch_left_btn").click(  () => mySwipe.prev() );
	$(".touch_right_btn").click( () => mySwipe.next() );

	/*비쥬얼 이전, 다음 버튼*/


	/*롤링 버튼 배너*/


	/*탭메뉴*/


	/* 베스트북 슬라이더 */


	/*팝업 연동*/


});