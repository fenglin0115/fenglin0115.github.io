
var currentStage = "cover";
params.ggbBase64 = ggb_G_12A_1_1_cover;
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
function removeListener() {
	let api = applet.getAppletObject();
	api.unregisterObjectUpdateListener('ope1')
	api.unregisterObjectUpdateListener('check')
	api.unregisterObjectUpdateListener('check1')
	api.unregisterObjectUpdateListener('check2')
	api.unregisterObjectUpdateListener('check3')
}

//
function envset() {
	// console.log(currentStage)
	let api = applet.getAppletObject();
	switch (currentStage) {
		case 'A1_operation2':
		case 'A1_investigation3':
		case 'A2_operation2':
		case 'A2_investigation3':
			api.setFixed('F', false, false)
			api.setFixed('L', false, false)
			api.setValue('showc', true)
			api.setValue('blP', false)
			break;
		case 'A1_observation1':
		case 'A2_observation1':
			api.setValue('c',1)
		default:
			api.setFixed('F', false, true)
			api.setFixed('L', false, true)
			api.setValue('showc', false)
			break;
	}
}

//SHOW活動A1
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("G-12A-1(1a) 活動1：拋物線的標準式(開口上下型)");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_12A_1_1_A1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動1
$(document).ready(function () {
	$("#A1_operation1_link").click(function () {
		A1_operation1();
		envset()
	});
	$("#A1_operation1_next").click(function () {
		$("#A1_observation1_link").click();
	});
	$("#A1_observation1_link").click(function () {
		A1_observation1();
		envset()
	});
	$("#A1_observation1_confirm").click(function () {
		A1_observation1_check();
	});
	$("#A1_observation1_next").click(function () {
		$("#A1_investigation1_link").click();
	});
	$("#A1_investigation1_link").click(function () {
		A1_investigation1();
		envset()
	});
	$("#A1_investigation1_confirm").click(function () {
		A1_investigation1_check();
	});
	$("#A1_investigation1_next").click(function () {
		$("#A1_investigation2_link").click();
	});
	$("#A1_investigation2_link").click(function () {
		A1_investigation2();
		envset()
	});
	$("#A1_investigation2_confirm").click(function () {
		A1_investigation2_check();
	});
	$("#A1_investigation2_next").click(function () {
		$("#A1_operation2_link").click()
	});
	$("#A1_operation2_link").click(function () {
		A1_operation2();
		envset()
	});
	$("#A1_operation2_next").click(function () {
		$("#A1_investigation3_link").click();
	});
	$("#A1_investigation3_link").click(function () {
		A1_investigation3();
		envset()
	});
	$("#A1_investigation3_confirm").click(function () {
		A1_investigation3_check();
	});
	$("#A1_investigation3_next").click(function () {
		showA2()//下一個活動
	});
});
//操作1
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_operation1_link() {
	removeListener();
	hintalert('I', '我們來根據拋物線上的點滿足的條件，<br>「到準線L及線外一點F點等距」，<br>來推導出拋物線的方程式(標準式)吧。')
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation1_check)
}
function A1_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(1, 'ope', 1)
		removeListener()
	}
}
//觀察1
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_observation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	console.log(currentStage)
}
function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	A1_obs1_1 = $('input[name=A1_observation1_input1]:checked').val()
	A1_obs1_2 = $('input[name=A1_observation1_input2]:checked').val()
	A1_obs1_3 = $('input[name=A1_observation1_input3]:checked').val()
	A1_obs1_4 = $('input[name=A1_observation1_input4]:checked').val()
	//甜蜜警告
	if (A1_obs1_1 == 1 && A1_obs1_2 == 2 && A1_obs1_3 == 1 && A1_obs1_4 == 2) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 1)
	} else if (A1_obs1_1 != 1) {
		hintalert('X', '1')
	} else if (A1_obs1_2 != 2) {
		hintalert('X', '2')
	} else if (A1_obs1_3 != 1) {
		hintalert('X', '3')
	} else if (A1_obs1_4 != 2) {
		hintalert('X', '4')
	} else {
		hintalert('X', '')
	}
}
//探索1
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_investigation1_link() {
	removeListener();
}
function A1_investigation1_check() {
	let api = applet.getAppletObject();
	//檢查問題探索學習單
	A1_inv1_1 = $('input[name=A1_investigation1_input1]:checked').val()
	//甜蜜警告
	if (A1_inv1_1 == 1) {
		hintalert('O', '展開後所整理的結果其實就是<b>拋物線的標準式</b>喔！<br>恭喜完成問題探索', true)
		sweetalert(1, 'inv', 1)
		api.setValue('showtxtf', 1)
	} else {
		hintalert('X', 'X')
	}
}
//探索2
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_investigation2_link() {
	removeListener();
}
function A1_investigation2_check() {
	//檢查觀察紀錄學習單
	A1_inv2_1 = $('input[name=A1_investigation2_input1]:checked').val()
	A1_inv2_2 = $('input[name=A1_investigation2_input2]:checked').val()
	A1_inv2_3 = $('input[name=A1_investigation2_input3]:checked').val()
	A1_inv2_4 = $('input[name=A1_investigation2_input4]:checked').val()
	//甜蜜警告
	if (A1_inv2_1 == 2 && A1_inv2_2 == 1 && A1_inv2_3 == 2 && A1_inv2_4 == 2) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 2)
	} else if (A1_inv2_1 != 2) {
		hintalert('X', '1')
	} else if (A1_inv2_2 != 1) {
		hintalert('X', '2')
	} else if (A1_inv2_3 != 2) {
		hintalert('X', '3')
	} else if (A1_inv2_4 != 2) {
		hintalert('X', '4')
	} else {
		hintalert('X', '')
	}
}
//操作
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}

function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check3', A1_operation2_check)
}
function A1_operation2_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue('check3')
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(1, 'ope', 2)
		removeListener()
	}
}
//探索3
function A1_investigation3() {
	currentStage = "A1_investigation3";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_investigation3_link() {
	removeListener();
}
function A1_investigation3_check() {
	//檢查觀察紀錄學習單
	A1_inv3_1 = $('input[name=A1_investigation3_input1]:checked').val()
	A1_inv3_2 = $('input[name=A1_investigation3_input2]:checked').val()
	A1_inv3_3 = $('input[name=A1_investigation3_input3]:checked').val()
	A1_inv3_4 = $('input[name=A1_investigation3_input4]:checked').val()
	A1_inv3_5 = $('input[name=A1_investigation3_input5]:checked').val()
	//甜蜜警告
	if (A1_inv3_1 == 1 &&
		A1_inv3_2 == 2 &&
		A1_inv3_3 == 1 &&
		A1_inv3_4 == 1 &&
		A1_inv3_5 == 2) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 3)
	} else if (A1_inv3_1 != 1) {
		hintalert('X', '1')
	} else if (A1_inv3_2 != 2) {
		hintalert('X', '2')
	} else if (A1_inv3_3 != 1) {
		hintalert('X', '3')
	} else if (A1_inv3_4 != 1) {
		hintalert('X', '4')
	} else if (A1_inv3_4 != 2) {
		hintalert('X', '5')
	} else {
		hintalert('X', '')
	}
}


//SHOW活動A2
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("G-12A-1(1) 活動2：拋物線的標準式(開口左右型)");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_12A_1_1_A2;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A2_operation1";
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動1
$(document).ready(function () {
	$("#A2_operation1_link").click(function () {
		A2_operation1();
		envset()
	});
	$("#A2_operation1_next").click(function () {
		$("#A2_observation1_link").click();
	});
	$("#A2_observation1_link").click(function () {
		A2_observation1();
		envset()
	});
	$("#A2_observation1_confirm").click(function () {
		A2_observation1_check();
	});
	$("#A2_observation1_next").click(function () {
		$("#A2_investigation1_link").click();
	});
	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
		envset()
	});
	$("#A2_investigation1_confirm").click(function () {
		A2_investigation1_check();
	});
	$("#A2_investigation1_next").click(function () {
		$("#A2_investigation2_link").click();
	});
	$("#A2_investigation2_link").click(function () {
		A2_investigation2();
		envset()
	});
	$("#A2_investigation2_confirm").click(function () {
		A2_investigation2_check();
	});
	$("#A2_investigation2_next").click(function () {
		$("#A2_operation2_link").click()
	});
	$("#A2_operation2_link").click(function () {
		A2_operation2();
		envset()
	});
	$("#A2_operation2_next").click(function () {
		$("#A2_investigation3_link").click();
	});
	$("#A2_investigation3_link").click(function () {
		A2_investigation3();
		envset()
	});
	$("#A2_investigation3_confirm").click(function () {
		A2_investigation3_check();
	});
	$("#A2_investigation3_next").click(function () {
		hintalert('O',"恭喜你完成所有活動囉!")
	});
});


//操作1
function A2_operation1() {
	currentStage = "A2_operation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}
function A2_operation1_link() {
	removeListener();
	hintalert('I', '我們來根據拋物線上的點滿足的條件，<br>「到準線L及線外一點F點等距」，<br>來推導出拋物線的方程式(標準式)吧。')
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A2_operation1_check)
}
function A2_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(2, 'ope', 1)
		removeListener()
	}
}
//觀察1
function A2_observation1() {
	currentStage = "A2_observation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}
function A2_observation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	console.log(currentStage)
}
function A2_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	A2_obs1_1 = $('input[name=A2_observation1_input1]:checked').val()
	A2_obs1_2 = $('input[name=A2_observation1_input2]:checked').val()
	A2_obs1_3 = $('input[name=A2_observation1_input3]:checked').val()
	A2_obs1_4 = $('input[name=A2_observation1_input4]:checked').val()
	//甜蜜警告
	if (A2_obs1_1 == 1 && A2_obs1_2 == 2 && A2_obs1_3 == 4 && A2_obs1_4 == 2) {
		hintalert('O', 'obs')
		sweetalert(2, 'obs', 1)
	} else if (A2_obs1_1 != 1) {
		hintalert('X', '1')
	} else if (A2_obs1_2 != 2) {
		hintalert('X', '2')
	} else if (A2_obs1_3 != 4) {
		hintalert('X', '3')
	} else if (A2_obs1_4 != 2) {
		hintalert('X', '4')
	} else {
		hintalert('X', '')
	}
}
//探索1
function A2_investigation1() {
	currentStage = "A2_investigation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}
function A2_investigation1_link() {
	removeListener();
}
function A2_investigation1_check() {
	let api = applet.getAppletObject();
	//檢查問題探索學習單
	A2_inv1_1 = $('input[name=A2_investigation1_input1]:checked').val()
	//甜蜜警告
	if (A2_inv1_1 == 1) {
		hintalert('O', '展開後所整理的結果其實就是<b>拋物線的標準式</b>喔！<br>恭喜完成問題探索', true)
		sweetalert(2, 'inv', 1)
		api.setValue('showtxtf', 1)
	} else {
		hintalert('X', 'X')
	}
}
//探索2
function A2_investigation2() {
	currentStage = "A2_investigation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}
function A2_investigation2_link() {
	removeListener();
}
function A2_investigation2_check() {
	//檢查觀察紀錄學習單
	A2_inv2_1 = $('input[name=A2_investigation2_input1]:checked').val()
	A2_inv2_2 = $('input[name=A2_investigation2_input2]:checked').val()
	A2_inv2_3 = $('input[name=A2_investigation2_input3]:checked').val()
	A2_inv2_4 = $('input[name=A2_investigation2_input4]:checked').val()
	//甜蜜警告
	if (A2_inv2_1 == 2 && A2_inv2_2 == 1 && A2_inv2_3 == 2 && A2_inv2_4 == 3) {
		hintalert('O', 'inv')
		sweetalert(2, 'inv', 2)
	} else if (A2_inv2_1 != 2) {
		hintalert('X', '1')
	} else if (A2_inv2_2 != 1) {
		hintalert('X', '2')
	} else if (A2_inv2_3 != 2) {
		hintalert('X', '3')
	} else if (A2_inv2_4 != 3) {
		hintalert('X', '4')
	} else {
		hintalert('X', '')
	}
}
//操作
function A2_operation2() {
	currentStage = "A2_operation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}

function A2_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check3', A2_operation2_check)
}
function A2_operation2_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue('check3')
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(2, 'ope', 2)
		removeListener()
	}
}
//探索3
function A2_investigation3() {
	currentStage = "A2_investigation3";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A2);
}
function A2_investigation3_link() {
	removeListener();
}
function A2_investigation3_check() {
	//檢查觀察紀錄學習單
	A2_inv3_1 = $('input[name=A2_investigation3_input1]:checked').val()
	A2_inv3_2 = $('input[name=A2_investigation3_input2]:checked').val()
	A2_inv3_3 = $('input[name=A2_investigation3_input3]:checked').val()
	A2_inv3_4 = $('input[name=A2_investigation3_input4]:checked').val()
	A2_inv3_5 = $('input[name=A2_investigation3_input5]:checked').val()
	//甜蜜警告
	if (A2_inv3_1 == 1 &&
		A2_inv3_2 == 2 &&
		A2_inv3_3 == 1 &&
		A2_inv3_4 == 4 &&
		A2_inv3_5 == 3) {
		hintalert('O', 'inv')
		sweetalert(2, 'inv', 3)
	} else if (A2_inv3_1 != 1) {
		hintalert('X', '1')
	} else if (A2_inv3_2 != 2) {
		hintalert('X', '2')
	} else if (A2_inv3_3 != 1) {
		hintalert('X', '3')
	} else if (A2_inv3_4 != 4) {
		hintalert('X', '4')
	} else if (A2_inv3_4 != 3) {
		hintalert('X', '5')
	} else {
		hintalert('X', '')
	}
}
