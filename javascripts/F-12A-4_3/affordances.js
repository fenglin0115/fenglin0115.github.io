// import { loadggb } from "../commonfunc";

var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_4_3_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
	applet.inject('ggb-element');
});

function coverUtility() {
	let api = applet.getAppletObject();
	api.registerObjectClickListener("pic5", start);
	api.registerObjectClickListener("pic6", backLists);
	api.registerObjectClickListener("pic3", goal);
	api.registerObjectClickListener("pic4", bigidea);
	api.registerObjectClickListener("pic6", backLists);

	function start() {
		showLoading();
		$(".header_wrapper").show();
		$(".title").show();
		$(".ggbSetting").removeAttr("style");
		$(".worksheets").show();
		showA1();
	}

	function backLists() {
		location.href = "./index.html";
	}
}


//移除監聽
function removeListener() { }
var init1 = true;
var init2 = true;

//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("F-12甲-4(3) 活動1：");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_F_12A_4_3_A1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});

}

//操作

function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_F_12A_4_3_A1);
}

function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	if (init1) {
		Swal.fire({ html: '<div>我們之前學過三次函數的圖形，讓我們來複習一下，將函數的解與圖形在x軸交點相結合，看看如何能用導函數來協助求三次函數的(近似)解。</div>' });
		init1 = false;
	}
}

function A1_operation1_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

function A1_operation2() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_F_12A_4_3_A1);
}

function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	if (init1) {
		// Swal.fire({ html: '<div>我們之前學過三次函數的圖形，讓我們來複習一下，將函數的解與圖形在x軸交點相結合，看看如何能用導函數來協助求三次函數的(近似)解。</div>' });
		init1 = false;
	}
}

function A1_operation2_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//觀察
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_F_12A_4_3_A1);
}

function A1_observation1_link() {
	removeListener();
}

function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單

	//甜蜜警告
}

//探索
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_F_12A_4_3_A1);
}

function A1_investigation1_link() {
	removeListener();
}

function A1_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}




//SHOW活動
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("F-12甲-5 活動2：");
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_F_12A_4_3_A2;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A2_operation1";
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}

//操作
function A2_operation1() {
	currentStage = "A2_operation1";
	loadApplet("ggbApplet02", ggb_F_12A_4_3_A2);
}

function A2_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	if (init2) {

		// Swal.fire({ html: '<div>我們的目的是以「黎曼和」來估計函數f在區間[a,b]上的曲線下面積</div>' });
		init1 = false;

	}
}

function A2_operation1_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}


//操作
function A2_operation2() {
	currentStage = "A2_operation2";
	loadApplet("ggbApplet02", ggb_F_12A_4_3_A2);
}

function A2_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	if (init2) {

		// Swal.fire({ html: '<div>我們的目的是以「黎曼和」來估計函數f在區間[a,b]上的曲線下面積</div>' });
		init1 = false;

	}
}

function A2_operation2_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//觀察
function A2_observation1() {
	currentStage = "A2_observation1";
	loadApplet("ggbApplet02", ggb_F_12A_4_3_A2);
}

function A2_observation1_link() {
	removeListener();
}

function A2_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單

	//甜蜜警告
}

//探索
function A2_investigation1() {
	currentStage = "A2_investigation1";
	loadApplet("ggbApplet02", ggb_F_12A_4_3_A2);
}

function A2_investigation1_link() {
	removeListener();
}

function A2_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}

//SHOW活動
function showA3() {
	showLoading();
	$("#navbarDropdown").text("活動3");
	$("#navbarDropdown").val("活動3");
	$(".outlines").hide();
	$("#outlineA3").show();
	$(".title > span ").html("F-12甲-4(3) 活動3：");
	params.id = "ggbApplet03";
	params.ggbBase64 = ggb_F_12A_4_3_A3;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A3_observation1";
	showWorksheetsContents("A3_observation1_link");
	$(".outline").click(function() {
			showWorksheetsContents(this.id);
	});
}

//操作
function A3_operation1() {
	currentStage = "A3_operation1";
	loadApplet("ggbApplet03", ggb_F_12A_4_3_A3);
}

function A3_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
 //註冊監聽物件
}

function A3_operation1_check() {
	let api =applet.getAppletObject();
	
	//建立監聽函式
}

//觀察
function A3_observation1() {
	currentStage = "A3_observation1";
	loadApplet("ggbApplet03", ggb_F_12A_4_3_A3);
}

function A3_observation1_link() {
	removeListener();
}

function A3_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單

	//甜蜜警告
}

//探索
function A3_investigation1() {
	currentStage = "A3_investigation1";
	loadApplet("ggbApplet03", ggb_F_12A_4_3_A3);
}

function A3_investigation1_link() {
	removeListener();
}

function A3_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}

//探索
function A3_investigation2() {
	currentStage = "A3_investigation2";
	loadApplet("ggbApplet03", ggb_F_12A_4_3_A3);
}

function A3_investigation2_link() {
	removeListener();
}

function A3_investigation2_check() {
	//檢查問題探索學習單

	//甜蜜警告
}


//連結各個按鈕與函示
$(document).ready(function () {
	$("#A1_operation1_link").click(function () {
		// loadggb(1,1,1,1,ggb_F_12A_4_3_A1);
		A1_operation1();
	});
	$("#A1_operation1_next").click(function () {
		$("#A1_operation2_link").click();
	});
	$("#A1_operation2_link").click(function () {
		// loadggb(1,1,1,1,ggb_F_12A_4_3_A1);
		A1_operation2();
	});
	$("#A1_operation2_next").click(function () {
		$("#A1_observation1_link").click();
	});


	$("#A1_observation1_link").click(function () {
		// loadggb(1,2,1,1,ggb_F_12A_4_3_A1)
		A1_observation1();
	});
	$("#A1_observation1_confirm").click(function () {
		A1_observation1_check();
	});
	$("#A1_observation1_next").click(function () {
		$("#A1_investigation1_link").click();
	});
	$("#A1_investigation1_link").click(function () {
		A1_investigation1();
	});
	$("#A1_investigation1_confirm").click(function () {
		A1_investigation1_check();
	});
	$("#A1_investigation1_next").click(function () {
		showA2();//下一個活動
	});
	
	$("#A2_operation1_link").click(function () {
		A2_operation1();
	});
	$("#A2_operation1_next").click(function () {
		$("#A2_operation2_link").click();
	});
	$("#A2_operation2_link").click(function () {
		A2_operation2();
	});
	$("#A2_operation2_next").click(function () {
		$("#A2_observation1_link").click();
	});
	$("#A2_observation1_link").click(function () {
		A2_observation1();
	});
	$("#A2_observation1_confirm").click(function () {
		A2_observation1_check();
	});
	$("#A2_observation1_next").click(function () {
		$("#A2_investigation1_link").click();
	});
	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
	});
	$("#A2_investigation1_confirm").click(function () {
		A2_investigation1_check();
	});
	$("#A2_investigation1_next").click(function () {
		showA3()		;//下一個活動
	});

	$("#A3_observation1_link").click(function () {
		A3_observation1();
	});
	$("#A3_observation1_confirm").click(function () {
		A3_observation1_check();
	});
	$("#A3_observation1_next").click(function () {
		$("#A3_operation1_link").click();
	});
	$("#A3_operation1_link").click(function () {
		A3_operation1();
	});
	$("#A3_operation1_next").click(function () {
		$("#A3_investigation1_link").click();
	});
	
	$("#A3_investigation1_link").click(function () {
		A3_investigation1();
	});
	$("#A3_investigation1_confirm").click(function () {
		A3_investigation1_check();
	});
	$("#A3_investigation1_next").click(function () {
		$("#A3_investigation2_link").click();
	});
	$("#A3_investigation2_link").click(function () {
		A3_investigation2();
	});
	$("#A3_investigation2_confirm").click(function () {
		A3_investigation2_check();
	});
	$("#A3_investigation2_next").click(function () {
	});
});