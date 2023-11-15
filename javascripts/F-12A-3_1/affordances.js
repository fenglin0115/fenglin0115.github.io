var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_3_1_cover;
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
	api.unregisterObjectUpdateListener('check')
}

//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("F-12A-3(1)導數的意義與切線的斜率");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_F_12A_3_1_A1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//A1順序
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
		hintalert('O', '恭喜你完成所有活動');//下一個活動
	});
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
});
//操作
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_F_12A_3_1_A1);
}
function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('check', A1_operation1_check)
	api.setFixed('Af', false)
	api.setFixed('Ag', false)
	api.setFixed('Ah', false)
}
function A1_operation1_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue('check')
	if (check == 1) {
		hintalert('O', '恭喜完成實驗操作')
		sweetalert(1, 'ope', 1)
		removeListener()
	}
}

//觀察1
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_F_12A_3_1_A1);
}
function funcselect() {
	let api = applet.getAppletObject();
	if (api.getValue('blf') == 1) {
		$('#selectfunction_f').removeClass("d-none");
	} else {
		$('#selectfunction_f').addClass("d-none");
	}
	if (api.getValue('blg') == 1) {
		$('#selectfunction_g').removeClass("d-none");
	} else {
		$('#selectfunction_g').addClass("d-none");
	}
	if (api.getValue('blh') == 1) {
		$('#selectfunction_h').removeClass("d-none");
	} else {
		$('#selectfunction_h').addClass("d-none");
	}
}
function A1_observation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	funcselect();
	api.registerObjectUpdateListener('textfuncselect', funcselect)
	api.evalCommand('RunClickScript(btnsetA)')
	api.setFixed('Af', true)
	api.setFixed('Ag', true)
	api.setFixed('Ah', true)
}
function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let currentfunc =
		!$("#selectfunction_f").hasClass("d-none") ? 'f'
			: !$("#selectfunction_g").hasClass("d-none") ? 'g'
				: !$("#selectfunction_h").hasClass("d-none") ? 'h'
					: 'X'
	console.log(currentfunc)



	let A1_obs1_1 = $('input[name=A1_observation1_input1]:checked').val();
	let A1_obs1_2 = $('input[name=A1_observation1_input2]:checked').val();
	let A1_obs1_3 =
		[$('#A1_observation1_input3_1').val(),
		$('#A1_observation1_input3_2').val(),
		$('#A1_observation1_input3_3').val(),
		$('#A1_observation1_input3_4').val(),
		$('#A1_observation1_input3_5').val(),
		$('#A1_observation1_input4_1').val(),
		$('#A1_observation1_input4_2').val(),
		$('#A1_observation1_input4_3').val(),
		$('#A1_observation1_input4_4').val(),
		$('#A1_observation1_input4_5').val()]
	let A1_obs1_4 =
		[$('#A1_observation1_input5_1').val(),
		$('#A1_observation1_input5_2').val(),
		$('#A1_observation1_input5_3').val(),
		$('#A1_observation1_input5_4').val(),
		$('#A1_observation1_input6_1').val(),
		$('#A1_observation1_input6_2').val(),
		$('#A1_observation1_input6_3').val(),
		$('#A1_observation1_input6_4').val()]
	console.log(A1_obs1_3)
	console.log(A1_obs1_4)
	//依據現在選擇的函數進行檢查
	switch (currentfunc) {
		case 'f':
			A1_obs1_check1 = A1_obs1_1 == 4
			A1_obs1_check2 = A1_obs1_2 == 2
			A1_obs1_check3 =
				JSON.stringify(A1_obs1_3)
				== JSON.stringify(['3', '3', '3', '2', '1', '1', '1', '1', '1', '2'])
			A1_obs1_check4 =
				JSON.stringify(A1_obs1_4)
				== JSON.stringify(['2', '2', '2', '1', '2', '2', '2', '2'])
			break;
		case 'g':
			A1_obs1_check1 = A1_obs1_1 == 2
			A1_obs1_check2 = A1_obs1_2 == 3
			A1_obs1_check3 =
				JSON.stringify(A1_obs1_3)
				== JSON.stringify(['2', '2', '1', '1', '2', '2', '3', '3', '3', '3'])
			A1_obs1_check4 =
				JSON.stringify(A1_obs1_4)
				== JSON.stringify(['3', '3', '3', '3', '3', '3', '3', '3'])
			break;
		case 'h':
			A1_obs1_check1 = A1_obs1_1 == 3
			A1_obs1_check2 = A1_obs1_2 == 1
			A1_obs1_check3 =
				JSON.stringify(A1_obs1_3)
				== JSON.stringify(['1', '1', '2', '3', '3', '3', '2', '2', '1', '1'])
			A1_obs1_check4 =
				JSON.stringify(A1_obs1_4)
				== JSON.stringify(['1', '1', '1', '2', '1', '1', '1', '1'])
			break;
		case 'X':
			hintalert('X', '你沒有選擇函數喔！')
			break;
		default:
			break;
	}
	// console.log(A1_obs1_check1)
	// console.log(A1_obs1_check2)
	// console.log(A1_obs1_check3)
	// console.log(A1_obs1_check4)

	//甜蜜警告回饋
	if (A1_obs1_check1 && A1_obs1_check2 && A1_obs1_check3 && A1_obs1_check4) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 1)
	} else if (!A1_obs1_check1) {
		hintalert('X', '1')
	} else if (!A1_obs1_check2) {
		hintalert('X', '2')
	} else if (!A1_obs1_check3) {
		hintalert('X', '第一個表格填寫有錯喔!')
	} else if (!A1_obs1_check4) {
		hintalert('X', '第二個表格填寫有錯喔!')
	}
}
function setpointB(a) {
	let api = applet.getAppletObject();
	switch (a) {
		case 1:
			api.evalCommand('SetValue(Bf,(0,f(0)))')
			api.evalCommand('SetValue(Bg,(0,g(0)))')
			api.evalCommand('SetValue(Bh,(0,h(0)))')
			break;
		case 2:
			api.evalCommand('SetValue(Bf,(0.5,f(0.5)))')
			api.evalCommand('SetValue(Bg,(0.5,g(0.5)))')
			api.evalCommand('SetValue(Bh,(0.5,h(0.5)))')
			break;
		case 3:
			api.evalCommand('SetValue(Bf,(1,f(1)))')
			api.evalCommand('SetValue(Bg,(1,g(1)))')
			api.evalCommand('SetValue(Bh,(1,h(1)))')
			break;
		case 4:
			api.evalCommand('SetValue(Bf,(1.5,f(1.5)))')
			api.evalCommand('SetValue(Bg,(1.5,g(1.5)))')
			api.evalCommand('SetValue(Bh,(1.5,h(1.5)))')
			break;
		case 5:
			api.evalCommand('SetValue(Bf,(1.75,f(1.75)))')
			api.evalCommand('SetValue(Bg,(1.75,g(1.75)))')
			api.evalCommand('SetValue(Bh,(1.75,h(1.75)))')
			break;
		case 6:
			api.evalCommand('SetValue(Bf,(3,f(3)))')
			api.evalCommand('SetValue(Bg,(3,g(3)))')
			api.evalCommand('SetValue(Bh,(3,h(3)))')
			break;
		case 7:
			api.evalCommand('SetValue(Bf,(2.5,f(2.5)))')
			api.evalCommand('SetValue(Bg,(2.5,g(2.5)))')
			api.evalCommand('SetValue(Bh,(2.5,h(2.5)))')
			break;
		case 8:
			api.evalCommand('SetValue(Bf,(2.25,f(2.25)))')
			api.evalCommand('SetValue(Bg,(2.25,g(2.25)))')
			api.evalCommand('SetValue(Bh,(2.25,h(2.25)))')
			break;
		case 9:
			api.evalCommand('SetValue(Bf,(2.125,f(2.125)))')
			api.evalCommand('SetValue(Bg,(2.125,g(2.125)))')
			api.evalCommand('SetValue(Bh,(2.125,h(2.125)))')
			break;

		default:
			break;
	}
}
$(document).ready(function () {
	$("#A1_observation1_btn1").click(() => {
		setpointB(1)
	});
	$("#A1_observation1_btn2").click(() => {
		setpointB(2)
	});
	$("#A1_observation1_btn3").click(() => {
		setpointB(3)
	});
	$("#A1_observation1_btn4").click(() => {
		setpointB(4)
	});
	$("#A1_observation1_btn5").click(() => {
		setpointB(5)
	});
	$("#A1_observation1_btn6").click(() => {
		setpointB(6)
	});
	$("#A1_observation1_btn7").click(() => {
		setpointB(7)
	});
	$("#A1_observation1_btn8").click(() => {
		setpointB(8)
	});
	$("#A1_observation1_btn9").click(() => {
		setpointB(9)
	});
});

//探索
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_F_12A_3_1_A1);
}
function A1_investigation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setFixed('Af', false)
	api.setFixed('Ag', false)
	api.setFixed('Ah', false)
}
function A1_investigation1_check() {
	//檢查問題探索學習單
	let A1_inv1_input1 = $('input[name=A1_investigation1_input1]:checked').val();
	let A1_inv1_input2 = $('input[name=A1_investigation1_input2]:checked').val();
	let A1_inv1_input3 = $('input[name=A1_investigation1_input3]:checked').val();
	//甜蜜警告
	if (A1_inv1_input1 == 1
		&& A1_inv1_input2 == 1
		&& A1_inv1_input3 == 1) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 1)
	} else if (A1_inv1_input1 == 2) {
		hintalert('X', 1)
	} else if (A1_inv1_input2 == 2) {
		hintalert('X', 2)
	} else if (A1_inv1_input3 == 2) {
		hintalert('X', 3)
	} else {
		hintalert('I', '')
	}
}

//操作2
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet02", ggb_F_12A_3_1_A2);
}
function A1_operation2_link() {
	removeListener();	
	let api = applet.getAppletObject();
	api.setValue('inv',0)
	//註冊監聽物件
	api.registerObjectUpdateListener('check',A1_operation2_check)
}
function A1_operation2_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	// console.log(api.getValue('check1'))
	// console.log(api.getValue('check2'))
	// console.log(api.getValue('check3'))
	//建立監聽函式
	if(check==1){
		hintalert('O','ope')
		sweetalert(1,'ope',2)
		removeListener()
	}
}
//觀察2
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet02", ggb_F_12A_3_1_A2);
}
function A1_observation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('inv',0)
}
function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs2_input1_1 =
		JSON.stringify([
			$('#A1_observation2_input1_1').val(),
			$('#A1_observation2_input1_2').val(),
			$('#A1_observation2_input1_3').val(),
			$('#A1_observation2_input1_4').val(),
			$('#A1_observation2_input1_5').val()
		])
		== JSON.stringify(['3', '2', '2', '2', '1'])
	let A1_obs2_input1_2
		= $('input[name=A1_observation2_input1_6]:checked').val() == 1

	let A1_obs2_input2_1 =
		JSON.stringify([
			$('#A1_observation2_input2_1').val(),
			$('#A1_observation2_input2_2').val(),
			$('#A1_observation2_input2_3').val(),
			$('#A1_observation2_input2_4').val(),
			$('#A1_observation2_input2_5').val()
		])
		== JSON.stringify(['1', '1', '3', '3', '3'])

	let A1_obs2_input2_2 =
		$('input[name=A1_observation2_input2_6]:checked').val() == 1

	let A1_obs2_input3_1 =
		JSON.stringify([
			$('#A1_observation2_input3_1').val(),
			$('#A1_observation2_input3_2').val(),
			$('#A1_observation2_input3_3').val(),
			$('#A1_observation2_input3_4').val(),
			$('#A1_observation2_input3_5').val()
		])
		== JSON.stringify(['1', '3', '3', '3', '1'])

	let A1_obs2_input3_2
		= $('input[name=A1_observation2_input3_6]:checked').val() == 2

	//甜蜜警告
	if (!A1_obs2_input1_1) {
		hintalert('X', '第一格表格填寫有錯喔')
	} else if (!A1_obs2_input1_2) {
		hintalert('X', '第一題的P點軌跡應該是直線喔')
	} else if (!A1_obs2_input2_1) {
		hintalert('X', '第二格表格填寫有錯喔')
	} else if (!A1_obs2_input2_2) {
		hintalert('X', '第二題的P點軌跡應該是直線喔')
	} else if (!A1_obs2_input3_1) {
		hintalert('X', '第三格表格填寫有錯喔')
	} else if (!A1_obs2_input3_2) {
		hintalert('X', '第三題的P點軌跡應該是拋物線喔')
	} else if (A1_obs2_input1_1
		&& A1_obs2_input1_2
		&& A1_obs2_input2_1
		&& A1_obs2_input2_2
		&& A1_obs2_input3_1
		&& A1_obs2_input3_2
		) {
			hintalert('O','obs')
			sweetalert(1,'obs',2)
	}

}
function setpointA(a) {
	let api = applet.getAppletObject();
	switch (a) {
		case 1:
			api.evalCommand('SetValue(Af,(-2,f(-2)))')
			api.evalCommand('SetValue(Ag,(-2,g(-2)))')
			api.evalCommand('SetValue(Ah,(-2,h(-2)))')
			break;
		case 2:
			api.evalCommand('SetValue(Af,(-1,f(-1)))')
			api.evalCommand('SetValue(Ag,(-1,g(-1)))')
			api.evalCommand('SetValue(Ah,(-1,h(-1)))')
			break;
		case 3:
			api.evalCommand('SetValue(Af,(0,f(0)))')
			api.evalCommand('SetValue(Ag,(0,g(0)))')
			api.evalCommand('SetValue(Ah,(0,h(0)))')
			break;
		case 4:
			api.evalCommand('SetValue(Af,(1,f(1)))')
			api.evalCommand('SetValue(Ag,(1,g(1)))')
			api.evalCommand('SetValue(Ah,(1,h(1)))')
			break;
		case 5:
			api.evalCommand('SetValue(Af,(2,f(2)))')
			api.evalCommand('SetValue(Ag,(2,g(2)))')
			api.evalCommand('SetValue(Ah,(2,h(2)))')
			break;
		case 6:
			api.evalCommand('SetValue(Af,(3,f(3)))')
			api.evalCommand('SetValue(Ag,(3,g(3)))')
			api.evalCommand('SetValue(Ah,(3,h(3)))')
			break;
		default:
			break;
	}
}
$(document).ready(function () {
	$("#A1_obs2_btn1").click(() => {
		setpointA(1)
	});
	$("#A1_obs2_btn2").click(() => {
		setpointA(2)
	});
	$("#A1_obs2_btn3").click(() => {
		setpointA(3)
	});
	$("#A1_obs2_btn4").click(() => {
		setpointA(4)
	});
	$("#A1_obs2_btn5").click(() => {
		setpointA(5)
	});
	$("#A1_obs2_btn6").click(() => {
		setpointA(2)
	});
	$("#A1_obs2_btn7").click(() => {
		setpointA(3)
	});
	$("#A1_obs2_btn8").click(() => {
		setpointA(4)
	});
	$("#A1_obs2_btn9").click(() => {
		setpointA(5)
	});
	$("#A1_obs2_btn10").click(() => {
		setpointA(6)
	});
	$("#A1_obs2_btn11").click(() => {
		setpointA(2)
	});
	$("#A1_obs2_btn12").click(() => {
		setpointA(3)
	});
	$("#A1_obs2_btn13").click(() => {
		setpointA(4)
	});
	$("#A1_obs2_btn14").click(() => {
		setpointA(5)
	});
	$("#A1_obs2_btn15").click(() => {
		setpointA(6)
	});
});

//探索2
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet02", ggb_F_12A_3_1_A2);
}
function A1_investigation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('inv',1)
}
function A1_investigation2_check() {
	//檢查問題探索學習單	
	let A1_inv2_input1 = $('input[name=A1_investigation2_input1]:checked').val();
	let A1_inv2_input2 = $('input[name=A1_investigation2_input2]:checked').val();
	let A1_inv2_input3 = $('input[name=A1_investigation2_input3]:checked').val();
	let A1_inv2_input4 = $('input[name=A1_investigation2_input4]:checked').val();
	let A1_inv2_input5 = $('input[name=A1_investigation2_input5]:checked').val();
	let A1_inv2_input6 = $('input[name=A1_investigation2_input6]:checked').val();

	//甜蜜警告
	if (A1_inv2_input1 != 2) {
		hintalert('X', '1')
	} else if (A1_inv2_input2 != 1) {
		hintalert('X', '1')
	} else if (A1_inv2_input3 != 2) {
		hintalert('X', '2')
	} else if (A1_inv2_input4 != 1) {
		hintalert('X', '2')
	} else if (A1_inv2_input5 != 2) {
		hintalert('X', '3')
	} else if (A1_inv2_input6 != 2) {
		hintalert('X', '3')
	} else if (
		A1_inv2_input1 == 2
		&& A1_inv2_input2 == 1
		&& A1_inv2_input3 == 2
		&& A1_inv2_input4 == 1
		&& A1_inv2_input5 == 2
		&& A1_inv2_input6 == 2
	) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 2)
	} else {
		hintalert('I', '')
	}
}