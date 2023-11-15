// import { hintalert,sweetalert } from "../commonfunc.js";

var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_2_cover;
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
	api.unregisterObjectUpdateListener("btncheck")
}
//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("F-12甲-2 活動1：連續函數");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_F_12A_2_A1_1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動一
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
		$("#A1_operation3_link").click();//下一個活動
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
		$("#A1_investigation3_link").click();
	});
	$("#A1_investigation3_link").click(function () {
		A1_investigation3();
	});
	$("#A1_investigation3_confirm").click(function () {
		A1_investigation3_check();
	});
	$("#A1_investigation3_next").click(function () {
		$("#A1_operation4_link").click();//下一個活動
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
		$("#A1_investigation4_link").click();
	});
	$("#A1_investigation4_link").click(function () {
		A1_investigation4();
	});
	$("#A1_investigation4_confirm").click(function () {
		A1_investigation4_check();
	});
	$("#A1_investigation4_next").click(function () {
		showA2();
	});
});
//操作  
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_F_12A_2_A1_1);
}
function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation1_check)
}
function A1_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', '恭喜完成實驗操作')
		sweetalert(1, 'ope', 1)
		removeListener()
	}
}
//活動一設定A
$(document).ready(function () {
	$("#A1_observation1_btn1").click(function () {
		A1_obs1_btn(1);
	});
	$("#A1_observation1_btn2").click(function () {
		A1_obs1_btn(2);
	});
	$("#A1_observation1_btn3").click(function () {
		A1_obs1_btn(3);
	});
	$("#A1_observation1_btn4").click(function () {
		A1_obs1_btn(4);
	});
	$("#A1_observation1_btn5").click(function () {
		A1_obs1_btn(5);
	});
	$("#A1_observation1_btn6").click(function () {
		A1_obs1_btn(6);
	});
});
function A1_obs1_btn(btn) {
	let api = applet.getAppletObject();
	switch (btn) {
		case 1:
			api.setCoords('A', -0.1, 0)
			break;
		case 2:
			api.setCoords('A', -0.01, 0)
			break;
		case 3:
			api.setCoords('A', -0.001, 0)
			break;
		case 4:
			api.setCoords('A', 0.1, 0)
			break;
		case 5:
			api.setCoords('A', 0.01, 0)
			break;
		case 6:
			api.setCoords('A', 0.001, 0)
			break;

		default:
			break;
	}
}
//觀察1
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_F_12A_2_A1_1);
}
function A1_observation1_link() {
	removeListener();
	//下拉窗格設計
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}
function A1_observation1_check() {
	let api = applet.getAppletObject();
	let A1_obs1_1 = $("#A1_observation1_input1").val()
	let A1_obs1_2 = $("#A1_observation1_input2").val()
	let A1_obs1_3 = $("#A1_observation1_input3").val()
	let A1_obs1_4 = $("#A1_observation1_input4").val()
	let A1_obs1_5 = $("#A1_observation1_input5").val()
	let A1_obs1_6 = $("#A1_observation1_input6").val()
	let A1_obs1_7 = $("#A1_observation1_input7").val()
	let A1_obs1_8 = $("#A1_observation1_input8").val()
	let A1_obs1_9 = $("#A1_observation1_input9").val()
	let A1_obs1_10 = $("#A1_observation1_input10").val()
	let A1_obs1_11 = $("#A1_observation1_input11").val()
	let A1_obs1_12 = $("#A1_observation1_input12").val()
	//檢查觀察紀錄學習單
	let ans1_1 = A1_obs1_1 == 3 && A1_obs1_2 == 3 && A1_obs1_3 == 3
	let ans1_2 = A1_obs1_4 == 3 && A1_obs1_5 == 3 && A1_obs1_6 == 3
	let ans2 = A1_obs1_7 == 2 && A1_obs1_8 == 2
	let ans3 = A1_obs1_9 == 2 && A1_obs1_10 == 2
	let ans4 = A1_obs1_11 == 3 && A1_obs1_12 == 3
	//甜蜜警告
	if (ans1_1 && ans1_2 && ans2 && ans3 && ans4) {
		hintalert('O', '恭喜完成觀察紀錄')
		sweetalert(1, 'obs', 1)
	} else if (!(ans1_1 && ans1_2)) {
		hintalert('X', '表格填寫錯誤喔!再檢查一下')
	} else if (!ans2) {
		hintalert('X', '第二題好像不對喔!再檢查一下')
	} else if (!ans3) {
		hintalert('X', '第三題好像不對喔!再檢查一下')
	} else if (!ans4) {
		hintalert('X', '第四題好像不對喔!再檢查一下')
	} else {
		hintalert('I')
	}
	console.log(ans1_1, ans1_2, ans2, ans3, ans4)
}
//探索1
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_F_12A_2_A1_1);
}
function A1_investigation1_link() {
	removeListener();
}
function A1_investigation1_check() {
	let api = applet.getAppletObject();
	//檢查問題探索學習單
	let A1_inv1_input1_1 = $('#A1_investigation1_input1_option1').prop("checked");
	let A1_inv1_input1_2 = $('#A1_investigation1_input1_option2').prop("checked");
	let A1_inv1_input1_3 = $('#A1_investigation1_input1_option3').prop("checked");
	let A1_inv1_input1_4 = $('#A1_investigation1_input1_option4').prop("checked");
	let A1_inv1_input2 = $('input[name=A1_investigation1_input2]:checked').val();
	let A1_inv1_input3 = $('input[name=A1_investigation1_input3]:checked').val();
	//甜蜜警告
	let ans1 = A1_inv1_input1_1 && A1_inv1_input1_2 && A1_inv1_input1_3 && A1_inv1_input1_4
	let ans2 = A1_inv1_input2 == 1
	let ans3 = A1_inv1_input3 == 3

	if (ans1 && ans2 && ans3) {
		hintalert('O', '恭喜完成問題探索')
		sweetalert(1, 'inv', 1)
	} else if (!ans2) {
		hintalert('X', '第一題好像不對喔')
	} else if (!ans3) {
		hintalert('X', '第二題好像不對喔')
	} else if (!ans1) {
		hintalert('X', '第三題好像不對喔')
	} else {
		hintalert('X', '')
	}
}
//操作2
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet02", ggb_F_12A_2_A1_2);
}
function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation2_check)
}
function A1_operation2_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', '恭喜完成實驗操作')
		sweetalert(1, 'ope', 2)
		removeListener()
	}
}
$(document).ready(function () {
	$("#A1_observation2_btn1").click(function () {
		A1_obs1_btn(1);
	});
	$("#A1_observation2_btn2").click(function () {
		A1_obs1_btn(2);
	});
	$("#A1_observation2_btn3").click(function () {
		A1_obs1_btn(3);
	});
	$("#A1_observation2_btn4").click(function () {
		A1_obs1_btn(4);
	});
	$("#A1_observation2_btn5").click(function () {
		A1_obs1_btn(5);
	});
	$("#A1_observation2_btn6").click(function () {
		A1_obs1_btn(6);
	});
});
//觀察2
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet02", ggb_F_12A_2_A1_2);
}
function A1_observation2_link() {
	removeListener();
	//下拉窗格設計
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}
function A1_observation2_check() {
	let api = applet.getAppletObject();
	let A1_obs2_1 = $("#A1_observation2_input1").val()
	let A1_obs2_2 = $("#A1_observation2_input2").val()
	let A1_obs2_3 = $("#A1_observation2_input3").val()
	let A1_obs2_4 = $("#A1_observation2_input4").val()
	let A1_obs2_5 = $("#A1_observation2_input5").val()
	let A1_obs2_6 = $("#A1_observation2_input6").val()
	let A1_obs2_7 = $("#A1_observation2_input7").val()
	let A1_obs2_8 = $("#A1_observation2_input8").val()
	let A1_obs2_9 = $("#A1_observation2_input9").val()
	//檢查觀察紀錄學習單
	let ans1_1 = A1_obs2_1 == 3 && A1_obs2_2 == 3 && A1_obs2_3 == 3
	let ans1_2 = A1_obs2_4 == 3 && A1_obs2_5 == 3 && A1_obs2_6 == 3
	let ans2 = A1_obs2_7 == 2 && A1_obs2_8 == 2
	let ans3 = A1_obs2_9 == 2
	//甜蜜警告
	if (ans1_1 && ans1_2 && ans2 && ans3) {
		hintalert('O', '恭喜完成觀察紀錄')
		sweetalert(1, 'obs', 2)
	} else if (!(ans1_1 && ans1_2)) {
		hintalert('X', '表格填寫錯誤喔!再檢查一下')
	} else if (!ans2) {
		hintalert('X', '第二題好像不對喔!再檢查一下')
	} else if (!ans3) {
		hintalert('X', '第三題好像不對喔!再檢查一下')
	} else {
		hintalert('I')
	}
}
//探索2
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet02", ggb_F_12A_2_A1_2);
}
function A1_investigation2_link() {
	removeListener();
}
function A1_investigation2_check() {
	let A1_inv2_input1 = $('input[name=A1_investigation2_input1]:checked').val();
	let A1_inv2_input2 = $('input[name=A1_investigation2_input2]:checked').val();
	let A1_inv2_input3_1 = $('#A1_investigation2_input3_option1').prop("checked");
	let A1_inv2_input3_2 = $('#A1_investigation2_input3_option2').prop("checked");
	let A1_inv2_input3_3 = $('#A1_investigation2_input3_option3').prop("checked");
	let A1_inv2_input3_4 = $('#A1_investigation2_input3_option4').prop("checked");
	let A1_inv2_input3 = A1_inv2_input3_1 && A1_inv2_input3_2 && A1_inv2_input3_3 && A1_inv2_input3_4

	//檢查問題探索學習單
	if (A1_inv2_input1 == 1
		&& A1_inv2_input2 == 3
		&& A1_inv2_input3) {
		hintalert("O", '恭喜完成問題探索')
		sweetalert(1, 'inv', 2)
	} else if (A1_inv2_input1 != 1) {
		hintalert('X', '函數上所有地方的左極限都會等於右極限！')
	} else if (A1_inv2_input2 != 3) {
		hintalert('X', '第二題答案錯喔！')
	} else if (!A1_inv2_input3) {
		hintalert('X', '想想看有會有不連續地方嗎？')
	} else {
		hintalert('I', '')
	}
	//甜蜜警告
}
//操作3
function A1_operation3() {
	currentStage = "A1_operation3";
	loadApplet("ggbApplet03", ggb_F_12A_2_A1_3);
}
function A1_operation3_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation3_check)
}
function A1_operation3_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue('check')
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(1, 'ope', 3)
		removeListener()
	}
}
//觀察3
function A1_observation3() {
	currentStage = "A1_observation3";
	loadApplet("ggbApplet03", ggb_F_12A_2_A1_3);
}
function A1_observation3_link() {
	removeListener();
}
function A1_observation3_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs3_1 = $('input[name=A1_observation3_input1]:checked').val()
	let A1_obs3_2 = $('input[name=A1_observation3_input2]:checked').val()
	let A1_obs3_3 = $('input[name=A1_observation3_input3]:checked').val()
	let A1_obs3_4 = $('input[name=A1_observation3_input4]:checked').val()
	//甜蜜警告
	if (A1_obs3_1 == 3 &&
		A1_obs3_2 == 3 &&
		A1_obs3_3 == 1 &&
		A1_obs3_4 == 2) {
		hintalert("O", 'obs')
		sweetalert(1, 'obs', 3)
	} else if (A1_obs3_1 != 3) {
		hintalert('X', '第一題答案有錯喔，再仔細計算一次')
	} else if (A1_obs3_2 != 3) {
		hintalert('X', '第二題答案有錯喔，再仔細計算一次')
	} else if (A1_obs3_3 != 1) {
		hintalert('X', '第三題答案有錯喔，再仔細計算一次')
	} else if (A1_obs3_4 != 2) {
		hintalert('X', '左極限和右極限在-1應該不相等喔')
	} else {
		hintalert('I', '')
	}
}
//obs3按鈕
$(document).ready(function () {
	$('#A1_obs3_btn1').click(() => {
		let api = applet.getAppletObject();
		api.setCoords('A', -1, 0)
	})
})
//探索3
function A1_investigation3() {
	currentStage = "A1_investigation3";
	loadApplet("ggbApplet03", ggb_F_12A_2_A1_3);
}
function A1_investigation3_link() {
	removeListener();
}
function A1_investigation3_check() {
	//檢查問題探索學習單
	let A1_inv3_1 = $('input[name=A1_investigation3_input1]:checked').val()
	let A1_inv3_2 = $('input[name=A1_investigation3_input2]:checked').val()
	//甜蜜警告
	if (A1_inv3_1 == 2 && A1_inv3_2 == 2) {
		hintalert("O", 'inv')
		sweetalert(1, 'inv', 3)
	} else if (A1_inv3_1 != 2) {
		hintalert('X', '函數在-1時，左右極限有相等嗎？')
	} else if (A1_inv3_2 != 2) {
		hintalert('X', '函數有連續嗎？')
	} else {
		hintalert('I', '')
	}
}

//操作4
function A1_operation4() {
	currentStage = "A1_operation4";
	loadApplet("ggbApplet04", ggb_F_12A_2_A1_4);
}
function A1_operation4_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation4_check)
}
function A1_operation4_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(1, 'ope', 4)
		removeListener()
	}
}
//觀察4
function A1_observation4() {
	currentStage = "A1_observation4";
	loadApplet("ggbApplet04", ggb_F_12A_2_A1_4);
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
	//甜蜜警告
	if (A1_obs4_1 == 3 && A1_obs4_2 == 3 && A1_obs4_3 == 2) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 4)
	} else if (A1_obs4_1 != 3) {
		hintalert('X', '再算一次函數在-1時的左極限')
	} else if (A1_obs4_2 != 3) {
		hintalert('X', '再算一次函數在-1時的右極限')
	} else if (A1_obs4_3 != 2) {
		hintalert('X', 'k為多少的時候，函數會連續呢？')
	} else {
		hintalert('I', '')
	}
}
//探索4
function A1_investigation4() {
	currentStage = "A1_investigation4";
	loadApplet("ggbApplet04", ggb_F_12A_2_A1_4);
}
function A1_investigation4_link() {
	removeListener();
}
function A1_investigation4_check() {
	//檢查問題探索學習單
	let A1_inv4_1 = $('#A1_investigation4_input1_option1').prop("checked");
	let A1_inv4_2 = $('#A1_investigation4_input1_option2').prop("checked");
	let A1_inv4_3 = $('#A1_investigation4_input1_option3').prop("checked");
	let A1_inv4_4 = $('#A1_investigation4_input1_option4').prop("checked");
	let A1_inv4_5 = $('#A1_investigation4_input1_option5').prop("checked");
	let A1_inv4_6 = $('#A1_investigation4_input1_option6').prop("checked");

	//甜蜜警告
	if (A1_inv4_1 && A1_inv4_2 && A1_inv4_3 && A1_inv4_4 && !A1_inv4_5 && !A1_inv4_6) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 4)
	} else {
		hintalert('X', '好像不對喔！仔細想想哪些是連續的')
	}

}

//SHOW活動
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("F-12甲-2 活動2：介質定理");
	params.id = "ggbApplet03";
	params.ggbBase64 = ggb_F_12A_2_A2_1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A2_operation1";
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動2順序
$(document).ready(function () {
	$("#A2_operation1_link").click(function () {
		A2_operation1();
	});
	$("#A2_operation1_next").click(function () {
		$("#A2_observation1_link").click();
	});
	$("#A2_observation1_link").click(function () {
		A2_observation1();
	});
	$("#A2_observation1_confirm").click(function () {
		A2_observation1_check();
	});
	$("#A2_observation1_next").click(function () {
		$("#A2_operation2_link").click();
	});
	$("#A2_operation2_link").click(function () {
		A2_operation2();
	});
	$("#A2_operation2_next").click(function () {
		$("#A2_observation2_link").click();
	});
	$("#A2_observation2_link").click(function () {
		A2_observation2();
	});
	$("#A2_observation2_confirm").click(function () {
		A2_observation2_check();
	});
	$("#A2_observation2_next").click(function () {
		$("#A2_investigation1_link").click();
	});
	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
	});
	$("#A2_investigation1_confirm").click(function () {
		A2_investigation1_check();
	});
	$("#A2_investigation1_next").click(function () {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜你完成活動' }).then((result) => {
		})
	});
});

//操作1
function A2_operation1() {
	currentStage = "A2_operation1";
	loadApplet("ggbApplet03", ggb_F_12A_2_A2_1);
}
function A2_operation1_link() {
	removeListener();
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
		$("#A2_operation1_shorten").click()
	}
}

//觀察1
function A2_observation1() {
	currentStage = "A2_observation1";
	loadApplet("ggbApplet03", ggb_F_12A_2_A2_1);
}
function A2_observation1_link() {
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}
function A2_observation1_check() {
	let api = applet.getAppletObject();
	let A2_obs1_1 = $('input[name=A2_observation1_input1]:checked').val();
	let A2_obs1_2 = $('input[name=A2_observation1_input2]:checked').val();
	let A2_obs1_3 = $('#A2_observation1_input3').val();
	let A2_obs1_4 = $('#A2_observation1_input4').val();
	//檢查觀察紀錄學習單
	if (A2_obs1_1 == 2 &&
		A2_obs1_2 == 1 &&
		A2_obs1_3 == 3 &&
		A2_obs1_4 == 2) {
		hintalert('O', 'obs')
		sweetalert(2, 'obs', 1)
	} else if (A2_obs1_1 != 2) {
		hintalert('X', '第一題不對喔！再觀察看看c可能的範圍')
	} else if (A2_obs1_2 != 1) {
		hintalert('X', '第二題不對喔！再仔細觀察看看')
	} else if (A2_obs1_3 != 3) {
		hintalert('X', '第三題不對喔！再仔細觀察看看c的最大值')
	} else if (A2_obs1_4 != 2) {
		hintalert('X', '第三題不對喔！再仔細觀察看看c的最小值')
	} else {
		hintalert('I', '')
	}
}

//操作
function A2_operation2() {
	currentStage = "A2_operation2";
	loadApplet("ggbApplet04", ggb_F_12A_2_A2_2);
}
function A2_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A2_operation2_check)
}
function A2_operation2_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(2, 'ope', 2)
		removeListener()
		$("#A2_operation2_shorten").click()
	}
}

//觀察
function A2_observation2() {
	currentStage = "A2_observation2";
	loadApplet("ggbApplet04", ggb_F_12A_2_A2_2);
}
function A2_observation2_link() {
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}
function A2_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A2_obs2_1 = $('input[name=A2_observation2_input1]:checked').val();
	let A2_obs2_2 = $('input[name=A2_observation2_input2]:checked').val();
	let A2_obs2_3 = $('#A2_observation2_input3').val();
	let A2_obs2_4 = $('#A2_observation2_input4').val();
	let A2_obs2_5 = $('#A2_observation2_input5').val();
	let A2_obs2_6 = $('#A2_observation2_input6').val();
	//甜蜜警告
	if (
		A2_obs2_1 == 2 &&
		A2_obs2_2 == 4 &&
		A2_obs2_3 == 2 &&
		A2_obs2_4 == 3 &&
		A2_obs2_5 == 2 &&
		A2_obs2_6 == 3) {
		hintalert('O', 'obs')
		sweetalert(2, 'obs', 2)
	} else if (A2_obs2_1 != 2) {
		hintalert('X', '第一題不對喔！再仔細觀察看看')
	} else if (A2_obs2_2 != 4) {
		hintalert('X', '第二題不對喔！再仔細觀察看看')
	} else if (A2_obs2_3 != 2) {
		hintalert('X', '第三題不對喔！再仔細觀察看看最少會有幾個')
	} else if (A2_obs2_4 != 3) {
		hintalert('X', '第三題不對喔！再仔細觀察看看最多會有幾個')
	} else if (A2_obs2_5 != 2) {
		hintalert('X', '第四題不對喔！再仔細觀察看看c的最小值')
	} else if (A2_obs2_6 != 3) {
		hintalert('X', '第四題不對喔！再仔細觀察看看c的最大值')
	} else {
		hintalert('I', '')
	}
}

//探索
function A2_investigation1() {
	currentStage = "A2_investigation1";
	loadApplet("ggbApplet05", ggb_F_12A_2_A2_3);
}

function A2_investigation1_link() {
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}

function A2_investigation1_check() {
	let api = applet.getAppletObject();
	//檢查問題探索學習單
	let qdisplay = 5
	//甜蜜警告
	if ($('#A2_inv1_5').hasClass('d-none')) { qdisplay = 4 }
	if ($('#A2_inv1_4').hasClass('d-none')) { qdisplay = 3 }
	if ($('#A2_inv1_3').hasClass('d-none')) { qdisplay = 2 }
	if ($('#A2_inv1_2').hasClass('d-none')) { qdisplay = 1 }
	console.log(qdisplay)
	let A2_inv1_1 = $('input[name=A2_investigation1_input1]:checked').val();
	console.log(A2_inv1_1)
	let A2_inv1_2_1 = $('#A2_investigation1_input2_option1').prop("checked");
	let A2_inv1_2_2 = $('#A2_investigation1_input2_option2').prop("checked");
	let A2_inv1_2_3 = $('#A2_investigation1_input2_option3').prop("checked");
	let A2_inv1_2 = A2_inv1_2_1 && A2_inv1_2_2 && !A2_inv1_2_3
	let A2_inv1_3_1 = $('#A2_investigation1_input3_option1').prop("checked");
	let A2_inv1_3_2 = $('#A2_investigation1_input3_option2').prop("checked");
	let A2_inv1_3_3 = $('#A2_investigation1_input3_option3').prop("checked");
	let A2_inv1_3 = !A2_inv1_3_1 && !A2_inv1_3_2 && A2_inv1_3_3
	let A2_inv1_4_ = $('input[name=A2_investigation1_input4]:checked').val();
	let A2_inv1_5 = $('#A2_investigation1_input5').val();
	let A2_inv1_6 = $('#A2_investigation1_input6').val();
	let A2_inv1_7 = $('input[name=A2_investigation1_input7]:checked').val();
	let A2_inv1_4 =
		A2_inv1_4_ == 1 &&
		A2_inv1_5 == 2 &&
		A2_inv1_6 == 2 &&
		A2_inv1_7 == 1

	let A2_inv1_8_1 = $('#A2_investigation1_input8_option1').prop("checked");
	let A2_inv1_8_2 = $('#A2_investigation1_input8_option2').prop("checked");
	let A2_inv1_8_3 = $('#A2_investigation1_input8_option3').prop("checked");
	let A2_inv1_8_4 = $('#A2_investigation1_input8_option4').prop("checked");
	let A2_inv1_8_5 = $('#A2_investigation1_input8_option5').prop("checked");
	let A2_inv1_8_6 = $('#A2_investigation1_input8_option6').prop("checked");
	let A2_inv1_8 =
		!A2_inv1_8_1 && A2_inv1_8_2 &&
		!A2_inv1_8_3 && A2_inv1_8_4 &&
		!A2_inv1_8_5 && !A2_inv1_8_6


	switch (qdisplay) {
		case 1:
			if (A2_inv1_1 == 1) {
				api.setValue('n', 2)
				api.setValue('step', 2)

				$('#A2_inv1_' + (qdisplay + 1).toString()).removeClass('d-none');
				hintalert("O", '答對了！', false, 1000)
			} else {
				hintalert('X', '第1題答案有錯喔')
			}
			break;
		case 2:
			if (A2_inv1_2) {
				api.setValue('n', 3)
				api.setValue('step', 3)
				hintalert("O", '答對了！', false, 1000)
				$('#A2_inv1_' + (qdisplay + 1).toString()).removeClass('d-none');
			} else {
				hintalert('X', '第2題答案有錯喔')
			}
			break;
		case 3:
			if (A2_inv1_3) {
				api.setValue('n', 4)
				api.setValue('step', 4)
				hintalert("O", '答對了！', false, 1000)
				$('#A2_inv1_' + (qdisplay + 1).toString()).removeClass('d-none');

			} else {
				hintalert('X', '第3題答案有錯喔')
			}
			break;
		case 4:
			if (A2_inv1_4) {
				api.setValue('n', 5)
				api.setValue('step', 5)
				hintalert("O", '答對了！', false, 1000)

				$('#A2_inv1_' + (qdisplay + 1).toString()).removeClass('d-none');
			} else if (A2_inv1_4_==2) {
				hintalert('X','f(x)是連續函數喔')
			} else if (A2_inv1_5!=2||A2_inv1_6!=2) {
				hintalert('X','函數值計算有錯喔')
			} else {
				hintalert('X', '第4題答案有錯喔')
			}
			break;
		case 5:
			if (A2_inv1_8) {
				api.setValue('fin', true)
				hintalert('O', 'inv')
				sweetalert(2, 'inv', 1)
			} else {
				hintalert('X', '想想看函數值的正負有變化的時候，圖形會不會通過y=0')
			}
			break;
		default:
			break;
	}

}


//連結各個按鈕與函示

