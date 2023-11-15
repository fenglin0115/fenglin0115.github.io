var currentStage = "cover";
params.ggbBase64 = ggb_SDL_FES_cover;

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
	api.unregisterObjectUpdateListener("ope1");
}

/**
 * 
 * @param {這個活動是幾} i 
 * @param {第幾個小活動} j 
 * @param {ope:實驗操作,obs:觀察記錄,inv:問題探索} k 
 */
function envset(i, j, k) {
	var api = applet.getAppletObject();
	api.setTrace("P", 0);
	api.setVisible("Q", 0);
	api.setFixed("A", false, true);
	api.setFixed("B", false, true);
	api.setFixed("Q", false, true);
	api.setValue("mina", -3);
	api.setValue("maxa", 3);
	api.setValue("minb", -3);
	api.setValue("maxb", 3);
	switch (j) {
		case 1:
			console.log("小活動1")
			api.setVisible("bl1", 0);
			api.setVisible("Q", 1);
			switch (k) {
				case 'obs':
					console.log("obs1 set")
					api.setFixed("Q", false, false);
					api.setCoords('A', -1, 3);
					api.setCoords('B', 3, 2);
					api.setFixed("A", false, false);
					api.setFixed("B", false, false);
					break;
				default:
					break;
			}
			break;
		case 2:
			console.log("小活動2")
			api.setVisible("bl1", 1);
			api.setCoords('Q', -10, -10.1);
			switch (k) {
				case 'obs':
					api.setTrace("P", 1);
					api.setCoords('A', -1, 3);
					api.setCoords('B', 3, 2);
					api.setFixed("A", false, false);
					api.setFixed("B", false, false);

					break
				case 'inv':

					break;
				default:
					break;
			}
			break;
		default:
			console.log("沒有設置到環境")
			break;
	}

}


//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("自主學習節 線性組合");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_SDL_FES_A1;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
	console.log("showA1")
}

function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_SDL_FES_A1);
	envset(1, 1, "ope");
}

function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener("ope1", A1_operation1_check);
	console.log("讀取OPE1中0.0.0.0")


}

function A1_operation1_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let ope1 = api.getValue("ope1");
	if (ope1 == 1) {
		$("#A1_operation1_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
			$("#A1_operation1_done").css({ "opacity": "1" });
			$("#A1_operation1_next").removeClass("d-none");
			$("#A1_operation1_link img").css({ "opacity": "1" });
		})
	}
}

function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_SDL_FES_A1);
	envset(1, 1, 'obs');
}

function A1_observation1_link() {
	removeListener();

}

function A1_obs_setvalue(atv, a) {
	var api = applet.getAppletObject();
	switch (atv) {
		case 1:
			switch (a) {
				case 1:
					api.setCoords("Q", 5, 7);
					break;
				case 2:
					api.setCoords("Q", -4, 1);
					break;
				case 3:
					api.setCoords("Q", 0.6, 2.6);
					break;
				case 4:
					api.setCoords("Q", 1.8, 2.3);
					break;
			}
			break;
		case 2:
			api.evalCommand("Pan(0,0)");
			switch (a) {
				case 1:
					api.setValue("mina", 0);
					api.setValue("maxa", 1);
					api.setValue("minb", 0);
					api.setValue("maxb", 1);
					break;
				case 2:
					api.setValue("mina", -1);
					api.setValue("maxa", 1);
					api.setValue("minb", 0);
					api.setValue("maxb", 1.5);
					break;
				case 3:
					api.setValue("mina", -1);
					api.setValue("maxa", 2);
					api.setValue("minb", 0);
					api.setValue("maxb", 0.5);
					break;
				case 4:
					api.setValue("mina", 1);
					api.setValue("maxa", 1);
					api.setValue("minb", 0);
					api.setValue("maxb", 0.5);
					break;
			}
			break;
		default:
			break;
	}
}

function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let obs1_input1_1 = $('#A1_observation1_input1_1').val();
	let obs1_input1_2 = $('#A1_observation1_input1_2').val();
	let obs1_input2_1 = $('#A1_observation1_input2_1').val();
	let obs1_input2_2 = $('#A1_observation1_input2_2').val();
	let obs1_input3_1 = $('#A1_observation1_input3_1').val();
	let obs1_input3_2 = $('#A1_observation1_input3_2').val();
	let obs1_input4_1 = $('#A1_observation1_input4_1').val();
	let obs1_input4_2 = $('#A1_observation1_input4_2').val();
	// console.log(obs1_input1_1);

	let obs1_input1 = obs1_input1_1 == 1 && obs1_input1_2 == 2;
	let obs1_input2 = obs1_input2_1 == 1 && obs1_input2_2 == 1;
	let obs1_input3 = obs1_input3_1 == 3 && obs1_input3_2 == 4;
	let obs1_input4 = obs1_input4_1 == 4 && obs1_input4_2 == 3;

	console.log(obs1_input1)
	console.log(obs1_input2)
	console.log(obs1_input3)
	console.log(obs1_input4)

	//甜蜜警告
	if (obs1_input1 && obs1_input2 && obs1_input3 && obs1_input4) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
			//答對後調整內容
			$("#A1_observation1_confirm").hide();
			$("#A1_observation1_done").css({ "opacity": "1" });
			$("#A1_observation1_next").removeClass("d-none");
			$("#A1_observation1_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

	}
}

//探索
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_SDL_FES_A1);
	envset(1, 1, 'inv');
}

function A1_investigation1_link() {
	removeListener();
}

function A1_investigation1_check() {
	//檢查問題探索學習單
	let api = applet.getAppletObject();
	let inv1_input1_1 = $('#A1_investigation1_input1_option1').prop("checked");
	let inv1_input1_2 = $('#A1_investigation1_input1_option2').prop("checked");
	let inv1_input1_3 = $('#A1_investigation1_input1_option3').prop("checked");
	let inv1_input1_4 = $('#A1_investigation1_input1_option4').prop("checked");
	let inv1_input1_5 = $('#A1_investigation1_input1_option5').prop("checked");

	let inv1_input1
		= !inv1_input1_1 && !inv1_input1_2 && inv1_input1_3 && inv1_input1_4 && inv1_input1_5;

	let inv1_input2 = $('input[name=A1_investigation1_input2]:checked').val();
	let inv1_input3 = $('input[name=A1_investigation1_input3]:checked').val();
	let inv1_input4 = $('input[name=A1_investigation1_input4]:checked').val();

	console.log(inv1_input2)
	console.log(inv1_input3)
	console.log(inv1_input4)

	let inv_input234 =
		inv1_input2 == 2 &&
		inv1_input3 == 1 &&
		inv1_input4 == 3

	if (inv1_input1 && inv_input234) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
			//答對後調整內容
			$("#A1_investigation1_confirm").hide();
			$("#A1_investigation1_done").css({ "opacity": "1" });
			$("#A1_investigation1_next").removeClass("d-none");
			$("#A1_investigation1_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
	// console.log(inv1_input1_1);
	// console.log(inv1_input1_2);
	// console.log(inv1_txt1);
	// console.log(inv1_txt2);
	//甜蜜警告
}


//觀察
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet01", ggb_SDL_FES_A1);
	envset(1, 2, "obs");
}

function A1_observation2_link() {
	removeListener();
}

function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單	
	let obs2_input1 = $('input[name=A1_observation2_input1]:checked').val();
	let obs2_input2 = $('input[name=A1_observation2_input2]:checked').val();
	let obs2_input3 = $('input[name=A1_observation2_input3]:checked').val();
	let obs2_input4 = $('input[name=A1_observation2_input4]:checked').val();
	let obs2_input5 = $('input[name=A1_observation2_input5]:checked').val();

	console.log(obs2_input1);
	console.log(obs2_input2);
	console.log(obs2_input3);
	console.log(obs2_input4);
	//甜蜜警告
	if (
		obs2_input1 == 2 &&
		obs2_input2 == 4 &&
		obs2_input3 == 3 &&
		obs2_input4 == 1 &&
		obs2_input5 == 2
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察紀錄2' }).then((result) => {
			//答對後調整內容
			$("#A1_observation2_confirm").hide();
			$("#A1_observation2_done").css({ "opacity": "1" });
			$("#A1_observation2_next").removeClass("d-none");
			$("#A1_observation2_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}

//探索
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet01", ggb_SDL_FES_A1);
	envset(1, 2, "inv")
}

function A1_investigation2_link() {
	removeListener();
}

function A1_investigation2_check() {
	//檢查問題探索學習單
	let api = applet.getAppletObject();
	let inv2_input1 = $('input[name=A1_investigation2_input1]:checked').val();
	// console.log(inv2_txt1)

	//甜蜜警告
	if (inv2_input1 == 2) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
			//答對後調整內容
			$("#A1_investigation2_confirm").hide();
			$("#A1_investigation2_done").css({ "opacity": "1" });
			$("#A1_investigation2_next").removeClass("d-none");
			$("#A1_investigation2_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}



//連結各個按鈕與函示
$(document).ready(function () {
	//活動1
	$("#A1_operation1_link").click(function () {
		A1_operation1();
	});
	$("#A1_operation1_next").click(function () {
		$("#A1_observation1_link").click();
	});
	$("#A1_observation1_link").click(function () {
		A1_observation1();
	});

	// 操作一設置
	$("#A1_observation1_setbtn1").click(function () {
		console.log("btn1 click")
		A1_obs_setvalue(1, 1);
	});
	$("#A1_observation1_setbtn2").click(function () {
		console.log("btn2 click")
		A1_obs_setvalue(1, 2);
	});
	$("#A1_observation1_setbtn3").click(function () {
		console.log("btn3 click")
		A1_obs_setvalue(1, 3);
	});
	$("#A1_observation1_setbtn4").click(function () {
		console.log("btn4 click")
		A1_obs_setvalue(1, 4);
	});
	$("#A1_observation2_setbtn1").click(function () {
		console.log("2btn1 click")
		A1_obs_setvalue(2, 1);
	});
	$("#A1_observation2_setbtn2").click(function () {
		console.log("2btn2 click")
		A1_obs_setvalue(2, 2);
	});
	$("#A1_observation2_setbtn3").click(function () {
		console.log("2btn3 click")
		A1_obs_setvalue(2, 3);
	});
	$("#A1_observation2_setbtn4").click(function () {
		console.log("2btn4 click")
		A1_obs_setvalue(2, 4);
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
		console.log('btnA1inv1 click get')
	});
	$("#A1_investigation1_next").click(function () {
		$("#A1_observation2_link").click();//下一個活動
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
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '完成活動！' })
	});


	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
});

