var currentStage = "cover";
params.ggbBase64 = ggb_N_12A_3_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
	applet.inject('ggb-element');
});

function coverUtility() {
	let api = applet.getAppletObject();
	api.registerObjectClickListener("pic5", start);
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

//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("N-12A-3 活動1：");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_N_12A_3_A1;
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
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
}

function A1_operation1_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//觀察
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
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
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_investigation1_link() {
	removeListener();
}

function A1_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}



//操作
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
}

function A1_operation2_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//觀察
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_observation2_link() {
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
		$('#A1_obs2_lbl1_1').html($('#A1_observation2_input1_1').html())
		$('#A1_obs2_lbl2_1').html($('#A1_observation2_input2_1').html())
		$('#A1_obs2_lbl1_2').html($('#A1_observation2_input1_2').html())
		$('#A1_obs2_lbl2_2').html($('#A1_observation2_input2_2').html())
		$('#A1_obs2_lbl1_3').html($('#A1_observation2_input1_3').html())
		$('#A1_obs2_lbl2_3').html($('#A1_observation2_input2_3').html())
	});
}


function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	console.log($('#A1_observation2_input1_1').html())
	//甜蜜警告
}

//探索
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_investigation2_link() {
	removeListener();
}

function A1_investigation2_check() {
	//檢查問題探索學習單

	//甜蜜警告
}


//連結各個按鈕與函示
$(document).ready(function () {
	$("#A1_operation1_link").click(function () {
		A1_operation1();
	});
	$("#A1_operation1_next").click(function () {
		$("#A1_observation1_link").click();
	});
	$("#A1_observation1_link").click(function () {
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
		$("#A1_operation2_link").click();//下一個活動
	});
	$("#A1_operation2_link").click(function () {
		A1_operation2();
	});
	$("#A1_operation2_next").click(function () {
		$("#A1_observation2_link").click();
	});
	$("#A1_observation2_link").click(function () {
		A1_observation2();
	});
	$("#A1_observation2_confirm").click(function () {
		A1_observation2_check();
	});
	$("#A1_observation2_next").click(function () {
		$("#A1_investigation2_link").click();
	});
	$("#A1_investigation2_link").click(function () {
		A1_investigation2();
	});
	$("#A1_investigation2_confirm").click(function () {
		A1_investigation2_check();
	});
	$("#A1_investigation2_next").click(function () {
		hintalert('O','恭喜你完成活動')
	});
});
