$(function() {
	/*로그인 버튼*/
	$(".login_wrap a").click(function() {
		$("#login_f").animate({ top: "20px" }, 500);
		return false;
	});
	$(".login_close_btn").click(function() {
		$("#login_f").animate({ top: "-500px" }, 500);
		return false;
	});

	$("#user_id, #user_pw")
		.focus(function() {
			$(this).prev().css("display", "none");
		})
		.blur(function() {
			if (!$(this).val())
				$(this).prev().css("display", "initial");
		});

	/*zoom 버튼*/
	var scale;
	$("#zoom a").click(function() {
		switch ($("#zoom a").index(this)) {
			case 0: scale += 0.1; break;
			case 1: scale = 1; break;
			case 2: scale -= 0.1; break;
		}
		$("body").css("zoom", scale);
	});

	/*프린트 버튼*/
	$(".print_btn").click(function() {
		window.print();
		return false;
	});

	/*검색 창 안내 가이드*/
	$("#keyword")
		.focus(function() {
			$(this).css("background-position", "0 -500px");
		})
		.blur(function() {
			if (!$(this).val())
				$(this).css("background-position", "initial");
		});

	/*GNB메뉴*/
	var beforeEl;
	$("#gnb>li>a").on("mouseover focus", function() {
		$("#gnb ul:visible").slideUp("fast");
		if (beforeEl) {
			beforeEl.children("img").attr(
				"src",
				beforeEl.children("img").attr("src").replace("over.gif", "out.gif")
			);
		}

		$("img", this).attr(
			"src",
			$("img", this).attr("src").replace("out.gif", "over.gif")
		);
		$(this).next().stop().slideDown("normal");
		beforeEl = $(this);
	});

	$("#gnb").on("mouseleave blur", function() {
		$("#gnb ul:visible").slideUp("fast");
		if (beforeEl) {
			beforeEl.children("img").attr(
				"src",
				beforeEl.children("img").attr("src").replace("over.gif", "out.gif")
			);
		}
	});

	/*전체메뉴 열고 닫기*/
	$("#total_btn a").click(function() {
		let imgSrc = $("img", this).attr("src");
		let isOpened = imgSrc.includes("over.gif");
		if (isOpened) {
			$("#total_menu").slideUp("normal");
			$("img", this).attr("src", imgSrc.replace("over.gif", "out.gif"));
		} else {
			$("#total_menu").slideDown("normal");
			$("img", this).attr("src", imgSrc.replace("out.gif", "over.gif"));
		}
	});

	/*날짜 표기*/
	var date = new Date();
	$("#date_wrap .year").text(date.getFullYear());
	$("#date_wrap .month").text(date.getMonth() + 1);
	$("#date_wrap .date").text(date.getDate());

	/*관련 사이트 이동*/
	$("#rel_f").submit(function() {
		var link = $("select", this).val();
		window.open(link);
		return false;
	});

	/*퀵메뉴*/
	var defaultTop = parseInt($("#quick_menu").css("top"));
	$(window).scroll(function() {
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({
			top: scv + defaultTop + "px"
		}, 700);
	});
});