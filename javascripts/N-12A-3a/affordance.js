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
function removeListener() {
	let api = applet.getAppletObject();
	api.unregisterObjectUpdateListener('P')
	api.unregisterObjectUpdateListener('check')
}

//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("N-12A-3 活動：直角坐標化為極坐標");
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

	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
});

//操作
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener('P', A1_operation1_check)
}

function A1_operation1_check() {
	let api = applet.getAppletObject();
	let checkx = api.getXcoord('P')
	let checky = api.getYcoord('P')
	//建立監聽函式
	if (checkx == -3 && checky == 3) {
		hintalert('I', 'ope')
		sweetalert(1, 'ope', 1)
		removeListener();
		$('#A1_ope1_guide1').removeClass('d-none');
		$('#A1_operation1_shorten').click();
	}
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
	let A1_obs1_1 = $('#A1_observation1_input1').val();
	let A1_obs1_2 = $('#A1_observation1_input2').val();
	let A1_obs1_3 = $('#A1_observation1_input3').val();
	console.log(A1_obs1_1)
	console.log(A1_obs1_2)
	console.log(A1_obs1_3)

	//甜蜜警告
	if (
		A1_obs1_1 == 1 &&
		A1_obs1_2 == 3 &&
		A1_obs1_3 == 2
	) {
		hintalert('O', 'obs')
		sweetalert(1, 'obs', 1)
	} else if (A1_obs1_1 != 1) {
		hintalert('X', '表格填寫好像有錯喔')
	} else if (A1_obs1_2 != 3) {
		hintalert('X', '表格填寫好像有錯喔')
	} else if (A1_obs1_3 != 2) {
		hintalert('X', '表格填寫好像有錯喔')
	} else {
		hintalert('I', '')
	}


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
	let A1_inv1_input1_1 = $('#A1_investigation1_input1_1').val();
	let A1_inv1_input1_2 = $('#A1_investigation1_input1_2').val();
	let A1_inv1_input1_3 = $('#A1_investigation1_input1_3').val();
	let A1_inv1_input1_4 = $('#A1_investigation1_input1_4').val();
	let A1_inv1_input2_1 = $('#A1_investigation1_input2_1').val();
	let A1_inv1_input2_2 = $('#A1_investigation1_input2_2').val();
	let A1_inv1_input2_3 = $('#A1_investigation1_input2_3').val();
	let A1_inv1_input2_4 = $('#A1_investigation1_input2_4').val();
	let A1_inv1_input3_1 = $('#A1_investigation1_input3_1').val();
	let A1_inv1_input3_2 = $('#A1_investigation1_input3_2').val();
	let A1_inv1_input3_3 = $('#A1_investigation1_input3_3').val();
	let A1_inv1_input3_4 = $('#A1_investigation1_input3_4').val();
	let A1_inv1_input4_1 = $('#A1_investigation1_input4_1').val();
	let A1_inv1_input4_2 = $('#A1_investigation1_input4_2').val();
	let A1_inv1_input4_3 = $('#A1_investigation1_input4_3').val();
	let A1_inv1_input4_4 = $('#A1_investigation1_input4_4').val();
	console.log(A1_inv1_input1_1)
	console.log(A1_inv1_input1_2)
	console.log(A1_inv1_input1_3)
	console.log(A1_inv1_input1_4)
	let A1_inv1_ans1 =
		A1_inv1_input1_1 == 3 &&
		A1_inv1_input1_2 == 3 &&
		A1_inv1_input1_3 == 3 &&
		A1_inv1_input1_4 == 3 
	let A1_inv1_ans2 =
		A1_inv1_input2_1 == 1 &&
		A1_inv1_input2_2 == 2 &&
		A1_inv1_input2_3 == 3 &&
		A1_inv1_input2_4 == 4 
	let A1_inv1_ans3 =
		A1_inv1_input3_1 == 1 &&
		A1_inv1_input3_2 == 3 &&
		A1_inv1_input3_3 == 3 &&
		A1_inv1_input3_4 == 1 
	let A1_inv1_ans4 =
		A1_inv1_input4_1 == 1 &&
		A1_inv1_input4_2 == 1 &&
		A1_inv1_input4_3 == 3 &&
		A1_inv1_input4_4 == 3
	let A1_inv1_input5 = $('input[name=A1_investigation1_input5]:checked').val();
	let A1_inv1_input6 = $('input[name=A1_investigation1_input6]:checked').val();


	if (
		A1_inv1_ans1 && A1_inv1_ans2 && A1_inv1_ans3 && A1_inv1_ans4
		&& A1_inv1_input5 == 3 && A1_inv1_input6 == 4
	) {
		hintalert('O', 'inv')
		sweetalert(1, 'inv', 1)
	} else if (!A1_inv1_ans1 || !A1_inv1_ans2 || !A1_inv1_ans3 || !A1_inv1_ans4) {
		hintalert('X', '表格填寫有錯誤的地方喔')
	} else if (A1_inv1_input5 != 3) {
		hintalert('X', '2')
	} else if (A1_inv1_input6 != 4) {
		hintalert('X', '3')
	}

}



//操作
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet02", ggb_N_12A_3_A2);
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
	//建立監聽函式
	if(check==1){
		hintalert('O','ope')
		sweetalert(1,'ope',2)
		$('#A1_ope2_guide').removeClass('d-none');
		removeListener()
	}
}

//觀察
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A1_observation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('inv',0)
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
		$('#A1_obs2_lbl1_1').html($('#A1_observation2_input1_1').html())
		$('#A1_obs2_lbl2_1').html($('#A1_observation2_input2_1').html())
		$('#A1_obs2_lbl1_2').html($('#A1_observation2_input1_2').html())
		$('#A1_obs2_lbl2_2').html($('#A1_observation2_input2_2').html())
		$('#A1_obs2_lbl1_3').html($('#A1_observation2_input1_3').html())
		$('#A1_obs2_lbl2_3').html($('#A1_observation2_input2_3').html())
		$('#A1_obs2_lbl1_4').html($('#A1_observation2_input1_4').html())
		$('#A1_obs2_lbl2_4').html($('#A1_observation2_input2_4').html())
	});
}


function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	// console.log($('#A1_observation2_input1_1').html())
	let A1_obs2_input1_1 = $('#A1_observation2_input1_1').val();
	let A1_obs2_input1_2 = $('#A1_observation2_input1_2').val();
	let A1_obs2_input1_3 = $('#A1_observation2_input1_3').val();
	let A1_obs2_input1_4 = $('#A1_observation2_input1_4').val();
	let A1_obs2_input2_1 = $('#A1_observation2_input2_1').val();
	let A1_obs2_input2_2 = $('#A1_observation2_input2_2').val();
	let A1_obs2_input2_3 = $('#A1_observation2_input2_3').val();
	let A1_obs2_input2_4 = $('#A1_observation2_input2_4').val();

	//甜蜜警告
	if(
		A1_obs2_input1_1 == 1&&
		A1_obs2_input1_2 == 2&&
		A1_obs2_input1_3 == 2&&
		A1_obs2_input1_4 == 3&&
		A1_obs2_input2_1 == 3&&
		A1_obs2_input2_2 == 1&&
		A1_obs2_input2_3 == 2&&
		A1_obs2_input2_4 == 3
		){
			hintalert('O','obs')
			sweetalert(1,'obs',2)
		}else {
			hintalert('X','table')
		}

}

//探索
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A1_investigation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('inv',1)
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
		$('#A1_inv2_lbl1_1').html($('#A1_investigation2_input1_1').html())
		$('#A1_inv2_lbl1_2').html($('#A1_investigation2_input1_2').html())
		$('#A1_inv2_lbl3_1').html($('#A1_investigation2_input3_1').html())
		$('#A1_inv2_lbl3_2').html($('#A1_investigation2_input3_2').html())
	});
}

function A1_investigation2_check() {
	//檢查問題探索學習單
	let A1_inv2_input1_1 = $('#A1_investigation2_input1_1').val();
	let A1_inv2_input1_2 = $('#A1_investigation2_input1_2').val();
	let A1_inv2_input2_1 = $('#A1_investigation2_input2_1').val();
	let A1_inv2_input2_2 = $('#A1_investigation2_input2_2').val();
	let A1_inv2_input3_1 = $('#A1_investigation2_input3_1').val();
	let A1_inv2_input3_2 = $('#A1_investigation2_input3_2').val();
	console.log(A1_inv2_input1_1);
	console.log(A1_inv2_input1_2);
	console.log(A1_inv2_input2_1);
	console.log(A1_inv2_input2_2);
	console.log(A1_inv2_input3_1);
	console.log(A1_inv2_input3_2);
	//甜蜜警告
	if(
		A1_inv2_input1_1 == 3
		&&A1_inv2_input1_2 == 2
		&&A1_inv2_input2_1 == 3
		&&A1_inv2_input2_2 == 1
		&&A1_inv2_input3_1 == 2
		&&A1_inv2_input3_2 == 1
		){
			hintalert('O','inv')
			sweetalert(1,'inv',2)
	}else{
		hintalert('X','表格填寫有錯喔!再檢查一下')
	}
}


//連結各個按鈕與函示
$(document).ready(function () {
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
		hintalert('O','恭喜你完成所有活動囉');//下一個活動
		$('#A1_investigation2_next').addClass('d-none');
		$('#N-12A-3a_fin').removeClass('d-none');
	});
	$("#N-12A-3a_fin").click(function () {
		hintalert('I','前往下一支學具')
		location.href = "./N-12A-3b.html";
	});
});
