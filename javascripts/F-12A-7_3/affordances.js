// import { hintalert, sweetalert } from "../commonfunc.js";

var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_7_3_cover;
params.enableShiftDragZoom = true;
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
function removeListener() {
	let api = applet.getAppletObject();
	api.unregisterObjectUpdateListener("check")
	api.unregisterObjectUpdateListener("check1")
	api.unregisterObjectUpdateListener("check2")
	api.unregisterObjectUpdateListener("check3")
	api.unregisterObjectUpdateListener("check4")
	api.unregisterObjectUpdateListener("btncheck")
}


//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("F-12甲-7(3) 球體的體積公式");
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_F_12A_7_3_A1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}

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
		$("#A1_operation2_link").click();
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
		$("#A1_investigation1_link").click();
	});
	$("#A1_investigation1_link").click(function () {
		A1_investigation1();
	});
	$("#A1_investigation1_confirm").click(function () {
		A1_investigation1_check();
	});
	$("#A1_investigation1_next").click(function () {
		$("#A1_operation3_link").click();
	});
	$("#A1_operation3_link").click(function () {
		A1_operation3();
	});
	$("#A1_operation3_next").click(function () {
		$("#A1_observation3_link").click();
	});
	$("#A1_observation3_link").click(function () {
		A1_observation3();
	});
	$("#A1_observation3_confirm").click(function () {
		A1_observation3_check();
	});
	$("#A1_observation3_next").click(function () {
		$("#A1_operation4_link").click();
	});
	$("#A1_operation4_link").click(function () {
		A1_operation4();
	});
	$("#A1_operation4_next").click(function () {
		$("#A1_observation4_link").click();
	});
	$("#A1_observation4_link").click(function () {
		A1_observation4();
	});
	$("#A1_observation4_confirm").click(function () {
		A1_observation4_check();
	});
	$("#A1_observation4_next").click(function () {
		$("#A1_investigation2_link").click();
	});
	$("#A1_investigation2_link").click(function () {
		A1_investigation2();
	});
	$("#A1_investigation2_confirm").click(function () {
		A1_investigation2_check();
	});
	$("#A1_investigation2_next").click(function () {
		hintalert("O", '恭喜你完成所有活動囉！')//下一個活動
	});
})
//操作1
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	hintalert("I", '學會如何求旋轉體的體積後，我們來看生活中常見的球體，例如籃球、排球等，同學覺得這些球體可以歸類為旋轉體嗎？<br>它是用什麼形狀繞轉x軸得到的呢？<br>我們又該如何計算它的體積呢？', 'true')
	api.registerObjectUpdateListener('check1', A1_operation1_check)
}
function A1_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check1')
	//建立監聽函式
	if (check == 1) {
		hintalert("O", 'ope')
		sweetalert(1, 'ope', 1)
		removeListener()
	}
}
//觀察1
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_observation1_link() {
	removeListener();
}
function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs1 = $('#A1_observation1_textarea1').val()
	if (A1_obs1 != "") {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 1)
	} else {
		hintalert('I', '記錄下你的想法吧！')
	}
	//甜蜜警告
}

//操作2
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check2', A1_operation2_check)
}
function A1_operation2_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check2')
	//建立監聽函式
	if (check == 1) {
		hintalert("O", 'ope')
		sweetalert(1, 'ope', 2)
		removeListener()
	}
}
//觀察2
$(document).ready(function () {
	let api = applet.getAppletObject();

});
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_observation2_link() {
	removeListener();
}
function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs2_1 = $('input[name=A1_observation2_input1]:checked').val();
	let A1_obs2_2 = $('input[name=A1_observation2_input2]:checked').val();
	//甜蜜警告
	if (A1_obs2_1 == 4 && A1_obs2_2 == 3) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 2)
	} else if (A1_obs2_1 != 4) {
		hintalert('X', '第一題答案好像不對喔')
	} else if (A1_obs2_2 != 3) {
		hintalert('X', '2')
	} else {

	}
}
//探索1
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_investigation1_link() {
	removeListener();
}
function A1_investigation1_check() {
	//檢查問題探索學習單
	let A1_inv1_1 = $('input[name=A1_investigation1_input1]:checked').val();
	// console.log(inputname(2,3,1,1))
	console.log(A1_inv1_1)
	//甜蜜警告
	if (A1_inv1_1 == 1) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 1)

	} else if (A1_inv1_1 == 2) {
		hintalert('X', '其實球體就是一種旋轉體喔！')
	} else {
		hintalert('I', '')
	}
}

//操作3
function A1_operation3() {
	currentStage = "A1_operation3";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_operation3_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.registerObjectUpdateListener('check3', A1_operation3_check)
	//註冊監聽物件
}
function A1_operation3_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check3')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(1, 'ope', 3)
		removeListener()
	}
}
//觀察3
function A1_observation3() {
	currentStage = "A1_observation3";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}

function A1_observation3_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.evalCommand('RunClickScript(viewYZ)')
}

function A1_observation3_check() {
	let api = applet.getAppletObject();
	// api.evalCommand('RunClickScript(viewYZ)')
	//檢查觀察紀錄學習單
	let A1_obs3_1 = $('input[name=A1_observation3_input1]:checked').val();
	let A1_obs3_2 = $('input[name=A1_observation3_input2]:checked').val();

	if (A1_obs3_1 == 1 && A1_obs3_2 == 2) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 3)
	} else if (A1_obs3_1 != 1) {
		hintalert('X', '1')
		api.evalCommand('RunClickScript(viewYZ)')
	} else if (A1_obs3_2 != 2) {
		hintalert('X', '2')
		api.evalCommand('RunClickScript(viewDE)')
	} else {

	}
}
//操作4
function A1_operation4() {
	currentStage = "A1_operation4";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_operation4_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check3', A1_operation4_check)
	api.evalCommand('RunClickScript(button1)')
}
function A1_operation4_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check3')
	//建立監聽函式
	if (check == 1) {
		hintalert("O", 'ope')
		sweetalert(1, 'ope', 4)
		removeListener()
	}
}
//觀察4
function A1_observation4() {
	currentStage = "A1_observation4";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}
function A1_observation4_link() {
	removeListener();
}
function A1_observation4_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs4_1 = $('input[name=A1_observation4_input1]:checked').val();
	let A1_obs4_2 = $('input[name=A1_observation4_input2]:checked').val();
	let A1_obs4_3 = $('input[name=A1_observation4_input3]:checked').val();
	let A1_obs4_4 = $('input[name=A1_observation4_input4]:checked').val();

	//甜蜜警告
	if (A1_obs4_1 == 1 && A1_obs4_2 == 1 && A1_obs4_3 == 2 && A1_obs4_4 == 1) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 4)
	} else if (A1_obs4_1 != 1) {
		hintalert('X', '1')
	} else if (A1_obs4_2 != 1) {
		hintalert('X', '2')
	} else if (A1_obs4_3 != 2) {
		hintalert('X', '3')
	} else if (A1_obs4_4 != 1) {
		hintalert('X', '4')
	} else {
		hintalert('I', '')
	}
}

//探索
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet02", ggb_F_12A_7_3_A1);
}

function A1_investigation2_link() {
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
	removeListener();
}

function A1_investigation2_check() {
	//檢查問題探索學習單	
	let A1_inv2_1 = $('input[name=A1_investigation2_input1]:checked').val();
	let A1_inv2_2_1 = $('#A1_investigation2_input2_1').val();
	let A1_inv2_2_2 = $('#A1_investigation2_input2_2').val();
	let A1_inv2_2_3 = $('#A1_investigation2_input2_3').val();
	let A1_inv2_3 = $('input[name=A1_investigation2_input3]:checked').val();

	if ($('#A1_inv4_ol2').hasClass('d-none')) {
		if (A1_inv2_1 == 2) {
			hintalert('O', '答對了')
			$('#A1_inv4_ol2').removeClass('d-none');
		} else {
			hintalert('X', '1')
		}
	} else {
		if (A1_inv2_2_1 != 1) {
			hintalert('X','第二題有錯喔！積分的下限應該從哪裡開始呢？')
		} else if (A1_inv2_2_2 != 3) {
			hintalert('X','第二題有錯喔！積分的上限應該到哪裡結束呢？')
		} else if (A1_inv2_2_3 != 2) {
			hintalert('X','第二題有錯喔！截面的面積是什麼呢？')
		} else if (A1_inv2_3 != 2) {
			hintalert('X', '3')
		} else if (A1_inv2_2_1 == 1 && A1_inv2_2_2 == 3 && A1_inv2_2_3 == 2 && A1_inv2_3 == 2) {
			hintalert('O', 'inv')
			sweetalert(1, 'inv', 2)
		}else{
			hintalert('I','')
		}
	}

	//甜蜜警告
}
