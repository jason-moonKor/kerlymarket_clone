// 전체카테고리를 클릭했을때 나오는 토글버튼기능
const category = document.querySelector(".category");
const menu = document.querySelector(".btn_menu");

category.addEventListener("click", () => {
	if (menu.style.display === "none") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
});

// 맨위로 가기 버튼기능
const backToTop = () => {
	// Scroll | button show/hide
	window.addEventListener("scroll", () => {
		if (document.querySelector("html").scrollTop > 100) {
			document.getElementById("go-top").style.display = "block";
		} else {
			document.getElementById("go-top").style.display = "none";
		}
	});
	// back to top
	document.getElementById("go-top").addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
};
backToTop();

// 제이쿼리를 사용해서 페이지 첫화면에 로딩바 노출후 2초후에 fadeOut
$(function () {
	$(".open_page, .loader").delay(2000).fadeOut();
});
