var currentStage = "cover";
params.ggbBase64 = ggb_JDM_IEEA_02_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
	applet.inject('ggb-element');
});
params.width = 1065

//環境建立-更改獨立探索文字
document.title = '獨立探索實驗活動：當圓形遇上三角形'
$(".navbar-brand").text("獨立探索實驗活動")
$(".navbar-brand").removeAttr('href')




function coverUtility() {
	let api = applet.getAppletObject();
	api.registerObjectClickListener("pic5", start); ``
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
		params.width = 960;
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
var init1 = true;
var init2 = true;

//工具列顯示
function showToolBar() {
	switch (currentStage) {
		// case "A1_operation6":
		// case "A1_operation7":
		case "A4_operation1":
		case "A4_operation2":
		case "A4_operation3":
		case "A4_operation5":
		case "A4_observation1":
		case "A4_observation2":
		case "A4_investigation1":
			// case "A2_operation3":
			// case "A2_operation4":
			// case "A2_observation3":
			// case "A2_investigation3":
			params.showToolBar = true;
			break;
		default:
			params.showToolBar = false;
	}
}
/**
 * 
 * @param {活動} activity 
 * @param {類型} type 
 * @param {階段} section 
 */
function sweetalert(activity, type, section) {
	switch (type) {
		case 'ope':
			type = 'operation'
			break;
		case 'obs':
			type = 'observation'
			break;
		case 'inv':
			type = 'investigation'
			break;
		default:
			break;
	}
	//答對後調整內容
	$("#A" + activity + "_" + type + section + "_confirm").hide();
	$("#A" + activity + "_" + type + section + "_done").css({ "opacity": "1" });
	$("#A" + activity + "_" + type + section + "_next").removeClass("d-none");
	$("#A" + activity + "_" + type + section + "_link img").css({ "opacity": "1" });

}

/**
 * 
 * @param {提示類型} type 
 * @param {提示文字} text 
 * @param {確認按鈕} confirmYN 
 * @param {持續時間} time 
 */
function hintalert(type, text,confirmYN = false,time = 8000) {
	switch (type) {
		case 'O':
			type = 'success'
			break;
		case 'X':
			type = 'error'
			break;
		case 'Q':
			type = 'question'
			break
		case 'I':
			type = 'info'
			break
		default:
			console.log('沒有輸入是否正確')
			break;
	}
	if (text == '') {
		text = '好像還沒作答喔！'
	}
	swal.fire({
		icon: type,
		showConfirmButton: confirmYN,
		allowOutsideClick: !confirmYN,
		timer: time,
		html: '<div>' + text + '</div>'
	})
}

/**
 * 
 * @param {這個活動是幾} i 
 * @param {第幾個小活動} j 
 * @param {ope:實驗操作,obs:觀察記錄,inv:問題探索} k 
 */
function envset(i, j, k) {
	var api = applet.getAppletObject();
	api.setValue('ope', 0);
	api.setValue('obs', 0);
	api.setValue('inv', 0);
	api.setValue(k, 1);
	// console.log("tp2")

}
//
//SHOW活動
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("活動1：圓形城鎮藏寶圖");
	params.id = "ggbApplet001";
	params.ggbBase64 = ggb_JDM_IEEA_02_A1_com;
	currentStage = "A1_operation6";
	showToolBar()
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A1_operation6_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});

}
//操作 圓規
function A1_operation6() {
	currentStage = "A1_operation6";
	showToolBar();
	loadApplet("ggbApplet001", ggb_JDM_IEEA_02_A1_com);
}
function A1_operation6_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener("check", A1_operation6_check);
}
function A1_operation6_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
	let check = api.getValue("check");
	// console.log(check);
	if (check == 1) {
		removeListener();
		//答對後調整內容
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜你獲得圓規工具' }).then((result) => {
			$("#A1_operation6_done").css({ "opacity": "1" });
			$("#A1_operation6_next").removeClass("d-none");
			$("#A1_operation6_link img").css({ "opacity": "1" });
		})
		$("#A1_operation6_shorten").click()
	}
}
//操作1
function A1_operation1() {
	currentStage = "A1_operation1";
	showToolBar();
	loadApplet("ggbApplet01", ggb_JDM_IEEA_02_A1_1);
}
// katex.renderToString("xy", { throwOnError: false})
function A1_operation1_link() {
	let api = applet.getAppletObject();
	removeListener();
	api.registerObjectUpdateListener("check", A1_operation1_check)
	envset(1, 1, 'ope');

	//註冊監聽物件
	Swal.fire({
		html: '<div align="left">身為考古冒險隊長的你發現了全新的藏寶圖，<br>' +
			'地圖上寫道有個「圓形」的城鎮，<br>' +
			'在<strong style="color:red ">「圓形城鎮中央」</strong>埋藏了巨大的寶藏，<br>' +
			'趕緊在地圖上標示出寶藏的位置，帶領團隊出發尋寶吧</div>',
		position: 'center-end',
		imageUrl: './images/content/JDM-IEEA-02/ope1_pic.png',
		imageWidth: 300,
		allowOutsideClick: false
	});
	// if (init1) {
	// 	init1 = false
	// }
}
function A1_operation1_check() {
	var api = applet.getAppletObject();
	//建立監聽函式
	let ope1 = api.getValue("check")
	// console.log(ope1)
	if (ope1 == 1) {
		$("#A1_operation1_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			$("#A1_operation1_done").css({ "opacity": "1" });
			$("#A1_operation1_next").removeClass("d-none");
			$("#A1_operation1_link img").css({ "opacity": "1" });
		})
	}
}
function A1_setvalue1(btn) {
	var api = applet.getAppletObject();
	switch (btn) {
		case 1:
			api.evalCommand("SetValue(O,G)")
			console.log("SetValue(O,G)")
			break;
		case 2:
			api.evalCommand("SetValue(O,F)")
			break;
		case 3:
			api.evalCommand("SetValue(O,H)")
			break;
		case 4:
			api.evalCommand("SetValue(P,towerP2)")
			break;
		default:
			break;
	}
}
$(document).ready(function () {
	$("#A1_operation1_set1").click(function () {
		console.log("btn1 click")
		A1_setvalue1(1);
	});
	$("#A1_operation1_set2").click(function () {
		console.log("btn2 click")
		A1_setvalue1(2);
	});
	$("#A1_operation1_set3").click(function () {
		console.log("btn3 click")
		A1_setvalue1(3);
	});
	$("#A1_operation1_set4").click(function () {
		console.log("btn4 click")
		A1_setvalue1(4);
	});
});
//觀察1
function A1_observation1() {
	currentStage = "A1_observation1";
	showToolBar();
	loadApplet("ggbApplet01", ggb_JDM_IEEA_02_A1_1);
}
function A1_observation1_link() {
	removeListener();
	envset(1, 1, 'ope');//為了延續ope設定
}
function A1_observation1_check() {
	let A1_obs1_1 = $('input[name=A1_observation1_input1]:checked').val();
	let A1_obs1_2 = $('input[name=A1_observation1_input2]:checked').val();
	let A1_obs1_3 = $('input[name=A1_observation1_input3]:checked').val();
	//檢查觀察紀錄學習單

	//甜蜜警告
	if (A1_obs1_1 == 1) {
		hintalert('X', "<div>以A點為圓心所畫的圓有同時通過四座塔嗎？<br>A點到四座塔的距離有相同嗎？</div>")
	} else if (A1_obs1_3 == 1) {
		hintalert('X', "<div>以C點為圓心所畫的圓有同時通過四座塔嗎？<br>C點到四座塔的距離有相同嗎？</div>")
	} else if (A1_obs1_2 == 2) {
		hintalert('X', "<div>以B點為圓心所畫的圓有同時通過四座塔嗎？<br>B點到四座塔的距離有相同嗎？</div>")
	} else if (
		A1_obs1_1 == 2 &&
		A1_obs1_2 == 1 &&
		A1_obs1_3 == 2
	) {
		hintalert('O', '恭喜完成觀察記錄')
		sweetalert(1, 'obs', 1)
	} else {
		hintalert('X', '好像有些題目沒有作答喔')
	}
}
//探索1
function A1_investigation1() {
	currentStage = "A1_investigation1";
	showToolBar();
	loadApplet("ggbApplet01", ggb_JDM_IEEA_02_A1_1);
	// envset(1, 1, 'inv');
}
function A1_investigation1_link() {
	removeListener();
}
function A1_investigation1_check() {
	//檢查問題探索學習單
	let inv1_input1_1 = $('#A1_investigation1_input1_option1').prop("checked");
	let inv1_input1_2 = $('#A1_investigation1_input1_option2').prop("checked");
	let inv1_input2_1 = $('#A1_investigation1_input2_option1').prop("checked");
	let inv1_input2_2 = $('#A1_investigation1_input2_option2').prop("checked");
	
	let qdisplay = 2
	if ($('#A1_inv1_li2').hasClass('d-none')) {
		qdisplay = 1
	} 
	// console.log(inv1_input1_1)
	// console.log(inv1_input1_1==1)
	switch (qdisplay) {
		case 1:
			if (inv1_input1_1) {
				$('#A1_inv1_li2').removeClass('d-none')
				$('input[name = A1_investigation1_input1]').attr('disabled', true)
			} else if (inv1_input1_2) {
				hintalert('X', '想想看我們畫圓的時候有沒有改變圓心到圓上的距離呢？')
			} else {
				hintalert('I', '')
			}
			break;
		case 2:
			if (inv1_input2_1) {
				hintalert('X', '圓上一點到圓心的距離稱為半徑喔！')
			} else if (inv1_input2_2) {
				hintalert('O', '恭喜完成問題探索')
				$('input[name = A1_investigation1_input2]').attr('disabled', true)
				sweetalert(1, 'inv', 1)
			} else {
				hintalert('I', '')
			}
			break
		default:
			break;
	}
}

//SHOW活動2
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("活動2：通過一點的圓");
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_JDM_IEEA_02_A2;
	currentStage = "A2_operation1";
	showToolBar()
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動二流程
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
		$("#A2_investigation1_link").click();
	});
	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
	});
	$("#A2_investigation1_confirm").click(function () {
		A2_investigation1_check();
	});
	$("#A2_investigation1_next").click(function () {
		showA3()//下一個活動
	});
});

//A2操作
function A2_operation1() {
	currentStage = "A2_operation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
}
function A2_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	api.registerObjectUpdateListener("check", A2_operation1_check);
	Swal.fire({
		html: '<div align="left">你帶著冒險隊到了地圖上的位置，<br>卻沒看見圓形城鎮的遺跡，<br>' +
			'只發現了一座<strong>曾經位於圓形城牆上的<span style="color: blue">「樓塔」<img src="" alt=""></span></strong>。<br>' +
			'試著找出原本的<br><strong>「城鎮中心(圓心)」與「圓形城墻位置(圓周)」</strong>，<br>定位出寶藏可能的位置吧！</div>',
		position: 'center-end',
		imageUrl: './images/content/JDM-IEEA-02/A1_ope2_pic.png',
		imageWidth: 300,
		allowOutsideClick: false
	});
}
function A2_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue("check")
	//建立監聽函式
	if (check == 3) {
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			$("#A2_operation1_done").css({ "opacity": "1" });
			$("#A2_operation1_next").removeClass("d-none");
			$("#A2_operation1_link img").css({ "opacity": "1" });
		})
		removeListener();
		api.evalCommand('RunClickScript(clc)')
	}
}
//A2觀察1
function A2_observation1() {
	currentStage = "A2_observation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
}
function A2_observation1_link() {
	removeListener();

}
function A2_observation1_check() {
	let A2_obs_input1 = $('input[name=A2_observation1_input1]:checked').val();
	let A2_obs_input2 = $('input[name=A2_observation1_input2]:checked').val();
	let A2_obs_input3 = $('input[name=A2_observation1_input3]:checked').val();
	//檢查觀察紀錄學習單
	let qdisplay = 3
	if (A2_obs_input3 == undefined) {
		qdisplay = 2
		if (A2_obs_input2 == undefined) {
			qdisplay = 1
		}
	}
	switch (qdisplay) {
		case 1:
			if (A2_obs_input1 == 1) {
				hintalert('O', '沒錯！所畫出的圓形城牆都有通過T點')
				$('#A2_obs1_li2').removeClass('d-none')
				$('input[name = A2_observation1_input1]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的紅色虛線有沒有都通過T點呢？')
			}
			break;
		case 2:
			if (A2_obs_input2 == 2) {
				hintalert('O', '的確很多地方都有可能是符合條件的')
				$('#A2_obs1_li3').removeClass('d-none')
				$('input[name = A2_observation1_input2]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的紅色圈圈位置都相同嗎？')
			}
			break
		case 3:
			if (A2_obs_input3 == 2) {
				hintalert('O', '沒錯，我們可以畫出很多不同大小的圓都通過T點<br>恭喜完成觀察紀錄')
				sweetalert(2, 'obs', 1)
				$('input[name = A2_observation1_input3]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的虛線圓形城牆大小都相同嗎？')
			}
			break
		default:
			break;
	}
	//甜蜜警告
	// if (
	// 	A2_obs_input1 == 1 &&
	// 	A2_obs_input2 == 2 &&
	// 	A2_obs_input3 == 2
	// ) {
	// 	Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄' }).then((result) => {
	// 		//答對後調整內容
	// 		$("#A2_observation1_confirm").hide();
	// 		$("#A2_observation1_done").css({ "opacity": "1" });
	// 		$("#A2_observation1_next").removeClass("d-none");
	// 		$("#A2_observation1_link img").css({ "opacity": "1" });
	// 	})
	// } else {
	// 	Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	// }
}
//A2探索
function A2_investigation1() {
	currentStage = "A2_investigation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
}
function A2_investigation1_link() {
	removeListener();
}
function A2_investigation1_check() {
	let A2_inv1_input1 = $('input[name=A2_investigation1_input1]:checked').val();
	// let A2_inv1_input2 = $('input[name=A2_investigation1_input2]:checked').val();
	let A2_inv1_input3 = $('input[name=A2_investigation1_input3]:checked').val();
	let A2_inv1_input4_1 = $('#A2_investigation1_input4_option1').prop("checked");
	let A2_inv1_input4_2 = $('#A2_investigation1_input4_option2').prop("checked");
	let A2_inv1_input4_3 = $('#A2_investigation1_input4_option3').prop("checked");
	let A2_inv1_input4
		= A2_inv1_input4_1 ||
		A2_inv1_input4_2 ||
		A2_inv1_input4_3;

	// console.log(A2_inv1_input1)
	// console.log(A2_inv1_input3)
	// console.log(A2_inv1_input4)
	// 檢查問題探索學習單
	//階段判斷
	let qdisplay = 3
	if (!A2_inv1_input4) {
		qdisplay = 2
		if (A2_inv1_input3 == undefined) {
			qdisplay = 1

		}
	}
	console.log(qdisplay)
	switch (qdisplay) {
		case 1:
			console.log("1 start")
			if (A2_inv1_input1 == 1 || A2_inv1_input1 == 2) {
				hintalert('X', '我們剛剛至少畫了三個通過T點的圓對吧？')
			} else if (A2_inv1_input1 == 3) {
				hintalert('X', '除了剛剛所畫的三個，我們應該還可以畫更多！')
			} else if (A2_inv1_input1 == 4) {
				hintalert('O', '沒錯！我們可以畫出很多通過T點的圓')
				$('#A2_inv1_li2').removeClass('d-none')
				$('input[name = A2_investigation1_input1]').attr('disabled', true)
			} else {
				hintalert('X', "")
			}
			break;
		case 2:
			if (A2_inv1_input3 == 1) {
				hintalert('X', '如果可以的話，我們就不會挖不到寶藏了')
			} else if (A2_inv1_input3 == 2) {
				hintalert('Q', '那我們應該怎麼更確切的找到寶藏位置呢？')
				$('#A2_inv1_li3').removeClass('d-none')
				$('input[name = A2_investigation1_input2]').attr('disabled', true)
				qdisplay += 1
			}
			break
		case 3:
			console.log(A2_inv1_input4)
			if (A2_inv1_input4) {
				hintalert('O', '「確切的距離」與「更多的條件」<br>的確可以讓我們更精準地找到圓心<br>當然！努力不懈也是一個好方法！',true)
				sweetalert(2, 'inv', 1)
			}
			break;
		default:
			hintalert('X', '')
			console.log('走到default了')
			break;
	}
}

//SHOW活動3
function showA3() {
	showLoading();
	$("#navbarDropdown").text("活動3");
	$("#navbarDropdown").val("活動3");
	$(".outlines").hide();
	$("#outlineA3").show();
	$(".title > span ").html("活動3：通過兩點的圓形");
	params.id = "ggbApplet03";
	params.ggbBase64 = ggb_JDM_IEEA_02_A3;
	currentStage = "A3_operation1";
	showToolBar();
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A3_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動3流程
$(document).ready(function () {
	$("#A3_operation1_link").click(function () {
		A3_operation1();
	});
	$("#A3_operation1_next").click(function () {
		$("#A3_observation1_link").click();
	});
	$("#A3_observation1_link").click(function () {
		A3_observation1();
	});
	$("#A3_observation1_confirm").click(function () {
		A3_observation1_check();
	});
	$("#A3_observation1_next").click(function () {
		$("#A3_observation2_link").click();
	});
	$("#A3_observation2_link").click(function () {
		A3_observation2();
	});
	$("#A3_observation2_confirm").click(function () {
		A3_observation2_check();
	});
	$("#A3_observation2_next").click(function () {
		$("#A3_investigation1_link").click();
	});
	$("#A3_investigation1_link").click(function () {
		A3_investigation1();
	});
	$("#A3_investigation1_confirm").click(function () {
		A3_investigation1_check();
	});
	$("#A3_investigation1_next").click(function () {
		showA4()//下一個活動
	});
});
//操作3
function A3_operation1() {
	currentStage = "A3_operation1";
	showToolBar();
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
	let api = applet.getAppletObject();
}
function A3_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	envset(1, 1, 'ope')
	Swal.fire({
		html: '<div align="left">隊員傳來消息！！在樹叢中發現了<strong>另一座</strong>曾經位於圓形城牆上的<strong><span style="color: blue">「樓塔」<img src="" alt=""></span></strong>。<br>' +
			'我們現在有辦法利用兩座樓塔遺跡，<br>找出原本的<strong>「城鎮中心」與「圓形城墻位置」</strong>嗎？<br>' +
			'定位出寶藏可能的位置吧！</div>',
		position: 'center-end',
		imageUrl: './images/content/JDM-IEEA-02/found_pic.png',
		imageWidth: 200,
		allowOutsideClick: false
	});
	//註冊監聽物件
	api.registerObjectUpdateListener("check", A3_operation1_check)
}
function A3_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue("check")
	//建立監聽函式
	if (check == 5) {
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			$("#A3_operation1_done").css({ "opacity": "1" });
			$("#A3_operation1_next").removeClass("d-none");
			$("#A3_operation1_link img").css({ "opacity": "1" });
		})
		api.evalCommand('RunClickScript(clc)')
		api.evalCommand('If(step==4,RunClickScript(btnagain))')
	}
}
//觀查1
function A3_observation1() {
	currentStage = "A3_observation1";
	showToolBar();
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
	let api = applet.getAppletObject();
}
function A3_observation1_link() {
	removeListener();
	envset(3, 1, 'obs')
	showToolBar()
	let api = applet.getAppletObject();
	api.setPointStyle('obsP1', 0)
	api.setPointStyle('obsP2', 0)
	api.setPointStyle('obsP3', 0)
	api.setPointStyle('obsP4', 0)
	api.setColor('obsP1', 0, 0, 0)
	api.setColor('obsP2', 0, 0, 0)
	api.setColor('obsP3', 0, 0, 0)
	api.setColor('obsP4', 0, 0, 0)
	// console.log("tp1")
}
function A3_observation1_check() {
	let A3_obs1_input1 = $('input[name=A3_observation1_input1]:checked').val();
	let A3_obs1_input2 = $('input[name=A3_observation1_input2]:checked').val();
	let A3_obs1_input3 = $('input[name=A3_observation1_input3]:checked').val();
	let A3_obs1_input4 = $('input[name=A3_observation1_input4]:checked').val();
	let A3_obs1_input5 = $('input[name=A3_observation1_input5]:checked').val();
	let A3_obs1_input6 = $('input[name=A3_observation1_input6]:checked').val();
	let A3_obs1_input7 = $('input[name=A3_observation1_input7]:checked').val();
	let A3_obs1_input8 = $('input[name=A3_observation1_input8]:checked').val();
	//檢查觀察紀錄學習單
	let qdisplay = 4
	if (A3_obs1_input8 == undefined && A3_obs1_input7 == undefined) {
		qdisplay = 3
		if (A3_obs1_input6 == undefined && A3_obs1_input5 == undefined) {
			qdisplay = 2
			if (A3_obs1_input4 == undefined && A3_obs1_input3 == undefined) {
				qdisplay = 1
			}
		}
	}
	switch (qdisplay) {
		case 1:
			if (A3_obs1_input1 == 2 && A3_obs1_input2 == 2) {
				hintalert('O', 'A點到兩座塔的距離不同，沒有辦法挖到寶藏')
				$('#A3_obs1_li2').removeClass('d-none')
				$('input[name = A2_investigation1_input1]').attr('disabled', true)
			} else if (A3_obs1_input1 == 1) {
				hintalert('X', 'A點到兩座塔的距離有相同嗎？')
			} else if (A3_obs1_input1 == 2 && A3_obs1_input2 == 1) {
				hintalert('X', '如果A點到兩座塔的距離不相同，<br>A點會有機會挖到寶藏嗎？<br>(以A點為圓心可以畫出通過T1、T2點的圓嗎)')
			} else {
				hintalert('Q', '')
			}
			break;
		case 2:
			if (A3_obs1_input3 == 1 && A3_obs1_input4 == 1) {
				hintalert('O', 'B點到兩座塔的距離相同，有機會挖到寶藏')
				$('#A3_obs1_li3').removeClass('d-none')
				$('input[name = A2_investigation1_input1]').attr('disabled', true)
			} else if (A3_obs1_input3 == 2) {
				hintalert('X', 'B點到兩座塔的距離有相同嗎？')
			} else if (A3_obs1_input3 == 1 && A3_obs1_input4 == 2) {
				hintalert('X', '如果B點到兩座塔的距離相同，<br>以B點為圓心所畫的圓會同時通過T1、T2點的圓嗎')
			} else {
				hintalert('Q', '')
			}
			break;
		case 3:
			if (A3_obs1_input5 == 1 && A3_obs1_input6 == 1) {
				hintalert('O', 'C點到兩座塔的距離相同，有機會挖到寶藏')
				$('#A3_obs1_li4').removeClass('d-none')
				$('input[name = A2_investigation1_input1]').attr('disabled', true)
			} else if (A3_obs1_input5 == 2) {
				hintalert('X', 'C點到兩座塔的距離有相同嗎？')
			} else if (A3_obs1_input5 == 1 && A3_obs1_input6 == 2) {
				hintalert('X', '如果C點到兩座塔的距離相同，<br>以C點為圓心所畫的圓會同時通過T1、T2點的圓嗎')
			} else {
				hintalert('Q', '')
			}
			break;
		case 4:
			if (A3_obs1_input7 == 2 && A3_obs1_input8 == 2) {
				hintalert('O', 'D點到兩座塔的距離不同，沒有辦法挖到寶藏')
				sweetalert(3, 'obs', 1)
				api.evalCommand('If(step==4,RunClickScript(btnagain))')
			} else if (A3_obs1_input7 == 1) {
				hintalert('X', 'D點到兩座塔的距離有相同嗎？')
			} else if (A3_obs1_input7 == 2 && A3_obs1_input8 == 1) {
				hintalert('X', '如果D點到兩座塔的距離不相同，<br>D點會有機會挖到寶藏嗎？(以D點為圓心可以畫出通過T1、T2點的圓嗎)')
			} else {
				hintalert('Q', '')
			}
			break;
		default:
			break;
	}

}
function A3_setvalue1(btn) {
	var api = applet.getAppletObject();
	switch (btn) {
		case 1:
			api.evalCommand("SetValue(S,obsP1)")
			// console.log("SetValue(S,G)")
			break;
		case 2:
			api.evalCommand("SetValue(S,obsP2)")
			break;
		case 3:
			api.evalCommand("SetValue(S,obsP3)")
			break;
		case 4:
			api.evalCommand("SetValue(S,obsP4)")
			break;
		default:
			break;
	}
}
$(document).ready(function () {
	$("#A3_observation1_setvalue1").click(function () {
		A3_setvalue1(1);
	})
	$("#A3_observation1_setvalue2").click(function () {
		A3_setvalue1(2);
	})
	$("#A3_observation1_setvalue3").click(function () {
		A3_setvalue1(3);
	})
	$("#A3_observation1_setvalue4").click(function () {
		A3_setvalue1(4);
	})
});
//觀察2
function A3_observation2() {
	currentStage = "A3_observation2";
	showToolBar();
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
	let api = applet.getAppletObject();
}
function A3_observation2_link() {
	removeListener();
	envset(3, 2, 'obs')
	// console.log("tp1")
	let api = applet.getAppletObject();
	api.setPointStyle('obsP1', 1)
	api.setPointStyle('obsP2', 2)
	api.setPointStyle('obsP3', 2)
	api.setPointStyle('obsP4', 1)
	api.setColor('obsP1', 255, 0, 0)
	api.setColor('obsP2', 255, 0, 0)
	api.setColor('obsP3', 255, 0, 0)
	api.setColor('obsP4', 255, 0, 0)
}
function A3_observation2_check() {
	let A3_obs2_input1 = $('input[name=A3_observation2_input1]:checked').val();
	let A3_obs2_input2 = $('input[name=A3_observation2_input2]:checked').val();
	let A3_obs2_input3 = $('input[name=A3_observation2_input3]:checked').val();
	//檢查觀察紀錄學習單
	//甜蜜警告

	let qdisplay = 3
	if (A3_obs2_input3 == undefined) {
		qdisplay = 2
		if (A3_obs2_input2 == undefined) {
			qdisplay = 1
		}
	}
	switch (qdisplay) {
		case 1:
			if (A3_obs2_input1 == 1) {
				hintalert('O', '沒錯！所畫出的圓形城牆都有通過T1、T2')
				$('#A3_obs2_li2').removeClass('d-none')
				$('input[name = A3_observation2_input1]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的紅色虛線有沒有都通過T1、T2點呢？')
			}
			break;
		case 2:
			if (A3_obs2_input2 == 2) {
				hintalert('O', '的確很多地方都有可能是符合條件的')
				$('#A3_obs2_li3').removeClass('d-none')
				$('input[name = A3_observation2_input2]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的紅色圈圈位置都相同嗎？')
			}
			break
		case 3:
			if (A3_obs2_input3 == 2) {
				hintalert('O', '沒錯，我們可以畫出很多不同大小的圓都通過T1、T2點<br>恭喜完成觀察紀錄')
				sweetalert(3, 'obs', 2)
				$('input[name = A3_observation2_input3]').attr('disabled', true)
			} else {
				hintalert('X', '檢查一下畫面中的虛線圓形城牆大小都相同嗎？')
			}
			break
		default:
			break;
	}
}
//探索1
function A3_investigation1() {
	currentStage = "A3_investigation1";
	// params.showToolBar = true;
	showToolBar();
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
	let api = applet.getAppletObject();
}
function A3_investigation1_link() {
	removeListener();
	envset(3, 1, 'inv')
}
function A3_investigation1_check() {
	let A3_inv1_input1 = $('input[name=A3_investigation1_input1]:checked').val();
	let A3_inv1_input2 = $('input[name=A3_investigation1_input2]:checked').val();
	let A3_inv1_input3 = $('input[name=A3_investigation1_input3]:checked').val();
	let A3_inv1_input4 = $('input[name=A3_investigation1_input4]:checked').val();
	let A3_inv1_input5_1 = $('#A3_investigation1_input5_option1').prop("checked");
	let A3_inv1_input5_2 = $('#A3_investigation1_input5_option2').prop("checked");
	let A3_inv1_input5_3 = $('#A3_investigation1_input5_option3').prop("checked");
	let A3_inv1_input5_4 = $('#A3_investigation1_input5_option4').prop("checked");
	let A3_inv1_input6 = $('input[name=A3_investigation1_input6]:checked').val();//這是第2題，因為是後來新增的
	let A3_inv1_input5 = //5未作答
		!A3_inv1_input5_1 &&
		!A3_inv1_input5_2 &&
		!A3_inv1_input5_3 &&
		!A3_inv1_input5_4

	let qdisplay = 6
	if (A3_inv1_input5) {
		qdisplay = 5
		if (A3_inv1_input4 == undefined) {
			qdisplay = 4
			if (A3_inv1_input3 == undefined) {
				qdisplay = 3
				if (A3_inv1_input2 == undefined) {
					qdisplay = 2
					if (A3_inv1_input6 == undefined) {
						qdisplay = 1
					}
				}
			}
		}
	}
	switch (qdisplay) {
		case 1:
			if (A3_inv1_input1 == 1 || A3_inv1_input1 == 2 || A3_inv1_input1 == 3) {
				hintalert('X', '我們剛剛至少畫了五個通過T1、T2點的圓對吧？')
			} else if (A3_inv1_input1 == 4) {
				hintalert('O', '沒錯！我們可以畫出很多通過T1、T2的圓')
				$('#A3_inv1_li2').removeClass('d-none')
				$('input[name = A3_investigation1_input1]').attr('disabled', true)
			} else {
				hintalert('X', "")
			}
			break;
		case 2:
			if (A3_inv1_input6 == 2 || A3_inv1_input6 == 3) {
				hintalert('X', "落在同一個圓上的兩點T1、T2，<br>到圓心的距離應該要相同才對")
			} else if (A3_inv1_input6 == 1) {
				hintalert('O', '我們用同一個半徑畫圓，距離當然相同囉！')
				$('#A3_inv1_li3').removeClass('d-none')
				$('input[name = A3_investigation1_input6]').attr('disabled', true)
			} else {
				hintalert('I', '')
			}

			break;
		case 3:
			if (A3_inv1_input2 == 2) {
				hintalert('X', "其實是有最小的圓喔！")
			} else if (A3_inv1_input2 == 1) {
				hintalert('O', '那最小圓的圓心會在哪裡呢？')
				$('#A3_inv1_li4').removeClass('d-none')
				$('input[name = A3_investigation1_input2]').attr('disabled', true)
			} else {
				hintalert('I', '')
			}

			break;
		case 4:

			if (A3_inv1_input3 == 3) {
				hintalert('X', '以C為圓心，有可能畫出同時通過T1、T2兩點的圓嗎？')
			} else if (A3_inv1_input3 == 4) {
				hintalert('X', '以D為圓心，有可能畫出同時通過T1、T2兩點的圓嗎？')
			} else if (A3_inv1_input3 == 5) {
				hintalert('X', '以E為圓心，有可能畫出同時通過T1、T2兩點的圓嗎？')
			} else if (A3_inv1_input3 == 1 || A3_inv1_input3 == 6) {
				hintalert('X', '圓心好像還可以距離T1、T2更近一點')
			} else if (A3_inv1_input3 == 2) {
				hintalert('O', '沒錯，最小的圓應該就是以' + 'T1、T2的連線段作為直徑的圓了！<br>',true)
				$('#A3_inv1_li5').removeClass('d-none')
				$('input[name = A3_investigation1_input3]').attr('disabled', true)
			}
			break;
		case 5:
			if (A3_inv1_input4 == 1) {
				swal.fire({
					icon: 'success',
					showConfirmButton: true,
					allowOutsideClick: false,
					html: '<div>' + '沒錯！我們記得到兩點等距離的線都會落在「中垂線」上' + '</div>'
				})
				$('#A3_inv1_li6').removeClass('d-none')
				$('input[name = A3_investigation1_input4]').attr('disabled', true)
			} else {
				hintalert('X', '能畫出同時通過T1、T2圓的圓心，<br>他到T1、T2的距離也應該要相同才對，<br>蒐集所有到T1、T2等距離的點會是什麼圖形呢？',true)
			}
			break;
		case 6:
			if (
				!A3_inv1_input5
			) {
				
				$('input[name = A3_investigation1_input5]').attr('disabled', true)
				Swal.fire({
					icon: 'success',
					html: "<div>恭喜完成問題探索<br>" +
						"沒錯！不論是「確切的半徑長」<br>或是「更多會通過的樓塔」，<br>我們都好像需要更多條件。 <br>" +
						"但是，<strong>中垂線</strong>一定可以幫助到我們！</div>",
					imageUrl: './images/content/JDM-IEEA-02/perpendicular.png',
					imageWidth: 400,
					position: 'center-end',
					allowOutsideClick: false
				}).then((result) => {
					//答對後調整內容
					$("#A3_investigation1_confirm").hide();
					$("#A3_investigation1_done").css({ "opacity": "1" });
					$("#A3_investigation1_next").removeClass("d-none");
					$("#A3_investigation1_link img").css({ "opacity": "1" });
				})
			}
			break;
		default:
			break;
	}


}

//SHOW活動4
function showA4() {
	showLoading();
	$("#navbarDropdown").text("活動4");
	$("#navbarDropdown").val("活動4");
	$(".outlines").hide();
	$("#outlineA4").show();
	$(".title > span ").html("獨立探索活動 活動4：通過三點的圓形");
	params.id = "ggbApplet45";
	params.ggbBase64 = ggb_JDM_IEEA_02_A4_tool;
	currentStage = "A4_operation5";
	showToolBar()
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A4_operation5_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//活動4流程
$(document).ready(function () {
	$("#A4_operation5_link").click(function () {
		A4_operation5();
	});
	$("#A4_operation5_next").click(function () {
		$("#A4_observation2_link").click();
	});
	$("#A4_observation2_link").click(function () {
		A4_observation2();
	});
	$("#A4_observation2_confirm").click(function () {
		A4_observation2_check();
	});
	$("#A4_observation2_next").click(function () {
		$("#A4_operation1_link").click();
	});
	$("#A4_operation1_link").click(function () {
		A4_operation1();
	});
	$("#A4_operation1_next").click(function () {
		$("#A4_observation1_link").click();
	});
	$("#A4_observation1_link").click(function () {
		A4_observation1();
	});
	$("#A4_observation1_confirm").click(function () {
		A4_observation1_check();
	});
	$("#A4_observation1_next").click(function () {
		$("#A4_investigation1_link").click();
	});
	$("#A4_investigation1_link").click(function () {
		A4_investigation1();
	});
	$("#A4_investigation1_confirm").click(function () {
		A4_investigation1_check();
	});
	$("#A4_investigation1_next").click(function () {
		showA5();
		params.showToolBar = false;
	});

	//下面廢除中

});
//操作
function A4_operation5() {
	currentStage = "A4_operation5";
	showToolBar()
	loadApplet("ggbApplet45", ggb_JDM_IEEA_02_A4_tool);
}

function A4_operation5_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
	// api.registerObjectClickListener('btncheck',api.reset())
	Swal.fire({
		html:
			'<div align="left">我們剛剛發現<strong>寶藏的地點一定在樓塔連線段的<font style = "color:red">中垂線</font>上</strong>，<br>' +
			'因為落在中垂線上的點，' +
			'「到線段兩端點等距離」。<br>' +
			'所以在接下去之前我們先來認識我們的「中垂線工具」吧！</div>',
		imageUrl: './images/content/JDM-IEEA-02/perpendicular.png',
		imageWidth: 400,
		position: 'center-end',
		allowOutsideClick: false
	});
	showToolBar()
	envset(4, 5, 'ope')
}
function A4_operation5_check() {
	let api = applet.getAppletObject();
	//建立監聽函式
}
//觀察2-中垂線的觀察紀錄
function A4_observation2() {
	currentStage = "A4_observation2";
	showToolBar();
	loadApplet("ggbApplet45", ggb_JDM_IEEA_02_A4_tool);
}
function A4_observation2_link() {
	removeListener();
	showToolBar();
	console.log('envset 4 5 obs')
	envset(4, 5, 'obs')
}
function A4_observation2_check() {
	let api = applet.getAppletObject();
	envset(4, 5, 'obs')
	let A4_obs2_input1_1 = $('#A4_observation2_input1_option1').prop("checked");
	let A4_obs2_input1_2 = $('#A4_observation2_input1_option2').prop("checked");
	let A4_obs2_input1_3 = $('#A4_observation2_input1_option3').prop("checked");
	let A4_obs2_input1_4 = $('#A4_observation2_input1_option4').prop("checked");
	let A4_obs2_input2_1 = $('#A4_observation2_input2_option1').prop("checked");
	let A4_obs2_input2_2 = $('#A4_observation2_input2_option2').prop("checked");
	let A4_obs2_input2_3 = $('#A4_observation2_input2_option3').prop("checked");
	let A4_obs2_input2_4 = $('#A4_observation2_input2_option4').prop("checked");
	let A4_obs2_input3_1 = $('#A4_observation2_input3_option1').prop("checked");
	let A4_obs2_input3_2 = $('#A4_observation2_input3_option2').prop("checked");
	let A4_obs2_input3_3 = $('#A4_observation2_input3_option3').prop("checked");
	let A4_obs2_input3_4 = $('#A4_observation2_input3_option4').prop("checked");

	let cA4_obs2_input1 = !A4_obs2_input1_1 && A4_obs2_input1_2 && A4_obs2_input1_3 && !A4_obs2_input1_4
	let cA4_obs2_input2 = !A4_obs2_input2_1 && !A4_obs2_input2_2 && A4_obs2_input2_3 && A4_obs2_input2_4
	let cA4_obs2_input3 = !A4_obs2_input3_1 && !A4_obs2_input3_2 && A4_obs2_input3_3 && !A4_obs2_input3_4
	let A4_obs2_input2 = A4_obs2_input2_1 || A4_obs2_input2_2 || A4_obs2_input2_3 || A4_obs2_input2_4
	let A4_obs2_input3 = A4_obs2_input3_1 || A4_obs2_input3_2 || A4_obs2_input3_3 || A4_obs2_input3_4
	//建立監聽函式
	let qdisplay = 3
	if ($('#A4_obs2_li3').hasClass('d-none')) {
		qdisplay = 2
	}
	if ($('#A4_obs2_li2').hasClass('d-none')) {
		qdisplay = 1
	}
	switch (qdisplay) {
		case 1:
			if (A4_obs2_input1_1) {
				hintalert('X', 'P點有在中垂線上嗎？')
			} else if (A4_obs2_input1_4) {
				hintalert('X', 'S點有在中垂線上嗎？')
			} else if (!A4_obs2_input1_2) {
				hintalert('X', 'Q點沒有在中垂線上嗎？')
			} else if (!A4_obs2_input1_3) {
				hintalert('X', 'R點沒有在中垂線上嗎？')
			} else if (cA4_obs2_input1) {
				hintalert('O', '沒錯！Q、R都落在中垂線上')
				$('#A4_obs2_li2').removeClass('d-none')
				$('input[name = A4_observation2_input1]').attr('disabled', true)
			} else {
				hintalert("I", '')
			}
			break;
		case 2:
			if (A4_obs2_input2_1) {
				hintalert('X', 'P點有在中垂線上嗎？')
			} else if (A4_obs2_input2_2) {
				hintalert('X', 'Q點有在中垂線上嗎？')
			} else if (!A4_obs2_input2_3) {
				hintalert('X', 'R點沒有在中垂線上嗎？')
			} else if (!A4_obs2_input2_4) {
				hintalert('X', 'S點沒有在中垂線上嗎？')
			} else if (cA4_obs2_input2) {
				hintalert('O', '沒錯！R、S都落在中垂線上')
				$('#A4_obs2_li3').removeClass('d-none')
				$('input[name = A4_observation2_input2]').attr('disabled', true)
			} else {
				hintalert('I', '')
			}
			break;
		case 3:
			if (A4_obs2_input3_1) {
				hintalert('X', 'P點有在中垂線上嗎？')
			} else if (A4_obs2_input3_2) {
				hintalert('X', 'Q點有在中垂線上嗎？')
			} else if (!A4_obs2_input3_3) {
				hintalert('X', 'R點沒有在中垂線上嗎？')
			} else if (A4_obs2_input3_4) {
				hintalert('X', 'S點有在中垂線上嗎？')
			} else if (cA4_obs2_input3) {
				hintalert('O', '沒錯！R都落在中垂線上<br>而且R同時落三條中垂線上！<br>這會是個巧合嗎？')
				sweetalert(4, 'obs', 2)
			} else {
				hintalert('I', '')
			}
			break;
		default:
			break;
	}

}
//操作1
function A4_operation1() {
	currentStage = "A4_operation1";
	showToolBar();
	loadApplet("ggbApplet41", ggb_JDM_IEEA_02_A4_1);
}
function A4_operation1_link() {
	removeListener();
	envset(4, 1, 'ope')
	Swal.fire({
		html: '<div align="left">接獲消息，剛剛隊員又再發現了<strong>第三座</strong>曾經位於圓形城牆上的<strong><span style="color: blue">「樓塔」<img src="" alt=""></span></strong>。<br>' +
			'這樣子我們有辦法找出原本的<strong>「城鎮中心」與「圓形城墻位置」</strong>嗎？<br>' +
			'帶著新工具，趕緊試著定位出寶藏所在的位置吧！</div>',
		position: 'center-end',
		imageUrl: './images/content/JDM-IEEA-02/found_pic.png',
		imageWidth: 200,
		allowOutsideClick: false
	});
	//註冊監聽物件
	let api = applet.getAppletObject();
	api.registerObjectUpdateListener("check", A4_operation1_check)

	api.setVisible('picS', true)
	api.setLabelVisible('S', false)
	api.setLabelVisible('towerP1', true)
	api.setLabelVisible('towerP2', true)
}
function A4_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue("check")
	//建立監聽函式
	if (check == 1) {
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			$("#A4_operation1_done").css({ "opacity": "1" });
			$("#A4_operation1_next").removeClass("d-none");
			$("#A4_operation1_link img").css({ "opacity": "1" });
		})
		$("#A4_operation1_shorten").click()
	}
}
//觀察1
function A4_observation1() {
	currentStage = "A4_observation1";
	showToolBar();
	loadApplet("ggbApplet41", ggb_JDM_IEEA_02_A4_1);
}
function A4_observation1_link() {
	removeListener();
	envset(4, 1, 'obs')
	let api = applet.getAppletObject();
	api.setVisible('picS', false)
	api.setLabelVisible('S', true)
}
function A4_observation1_check() {
	let api = applet.getAppletObject();
	let A4_obs1_input1 = $('input[name=A4_observation1_input1]:checked').val();
	let A4_obs1_input2 = $('input[name=A4_observation1_input2]:checked').val();
	let A4_obs1_input3 = $('input[name=A4_observation1_input3]:checked').val();
	let A4_obs1_input4 = $('input[name=A4_observation1_input4]:checked').val();
	let A4_obs1_input5 = $('input[name=A4_observation1_input5]:checked').val();
	let A4_obs1_input6 = $('input[name=A4_observation1_input6]:checked').val();
	//建立監聽函式
	let qdisplay = 6
	if ($('#A4_obs1_li6').hasClass('d-none')) {
		qdisplay = 5
	}
	if ($('#A4_obs1_li5').hasClass('d-none')) {
		qdisplay = 4
	}
	if ($('#A4_obs1_li4').hasClass('d-none')) {
		qdisplay = 3
	}
	if ($('#A4_obs1_li3').hasClass('d-none')) {
		qdisplay = 2
	}
	if ($('#A4_obs1_li2').hasClass('d-none')) {
		qdisplay = 1
	}
	switch (qdisplay) {
		case 1:
			if (A4_obs1_input1 == 2) {
				hintalert('X', '觀察一下P點有沒有在中垂線上')
			} else if (A4_obs1_input1 == 1) {
				hintalert('O', '沒錯！P點落在中垂線上')
				$('#A4_obs1_li2').removeClass('d-none')
				$('input[name = A4_observation1_input1]').attr('disabled', true)
			} else {
				hintalert('x', '')
			}
			break;
		case 2:
			if (A4_obs1_input2 == 2 || A4_obs1_input2 == 3) {
				hintalert('X', '想想看中垂線的性質')
			} else if (A4_obs1_input2 == 1) {
				hintalert('O', '沒錯！中垂線上的P到A、B兩點等距離')
				$('#A4_obs1_li3').removeClass('d-none')
				$('input[name = A4_observation1_input2]').attr('disabled', true)
			} else {
				hintalert('x', '')
			}
			break
		case 3:
			if (A4_obs1_input3 == 2) {
				hintalert('X', '觀察一下P點有沒有在中垂線上')
			} else if (A4_obs1_input3 == 1) {
				hintalert('O', '沒錯！P點落在中垂線上')
				$('#A4_obs1_li4').removeClass('d-none')
				$('input[name = A4_observation1_input3]').attr('disabled', true)
			} else {
				hintalert('x', '')
			}
			break;
		case 4:
			if (A4_obs1_input4 == 1 || A4_obs1_input4 == 3) {
				hintalert('X', '想想看中垂線的性質')
			} else if (A4_obs1_input4 == 2) {
				hintalert('O', '沒錯！中垂線上的P到B、C兩點等距離')
				$('#A4_obs1_li5').removeClass('d-none')
				$('input[name = A4_observation1_input4]').attr('disabled', true)
			} else {
				hintalert('x', '')
			}
			break
		case 5:
			if (A4_obs1_input5 == 2) {
				swal.fire({
					icon: 'error',
					showConfirmButton: false,
					timer: 3000,
					html: '<div>根據上面的兩個等式，再想想看</div>'
				})
			} else if (A4_obs1_input5 == 1) {
				hintalert('O', '沒錯！是相等的')
				$('#A4_obs1_li6').removeClass('d-none')
				$('input[name = A4_observation1_input5]').attr('disabled', true)
			} else {
				hintalert('x', '')
			}
			break;

		case 6:
			if (A4_obs1_input6 == 2) {
				swal.fire({
					icon: 'error',
					showConfirmButton: false,
					timer: 3000,
					html: '<div>P到A、C兩點等距離，想想看中垂線的性質</div>'
				})
			} else if (A4_obs1_input6 == 1) {
				swal.fire({
					icon: 'success',
					showConfirmButton: true,
					allowOutsideClick: false,
					html: '<div>沒錯！因為P到A、C等距離，所以會落在' + '中垂線上。<br>所以我們知道<strong>三角形兩邊中垂線的交點，<br>會落在第三邊中垂線上</strong><br>恭喜完成觀察記錄	</div>'
				})
				sweetalert(4, 'obs', 1)
			} else {
				hintalert('x', '')
			}
			break;
		default:
			hintalert('X', "")
			break;
	}

}
//探索1
function A4_investigation1() {
	currentStage = "A4_investigation1";
	showToolBar();
	loadApplet("ggbApplet41", ggb_JDM_IEEA_02_A4_1);
}
function A4_investigation1_link() {
	removeListener();
	envset(4, 1, 'inv')
	let api = applet.getAppletObject();
	api.setVisible('picS', false)
	api.setLabelVisible('S', true)
}
function A4_investigation1_check() {
	let A4_inv1_input1_1 = $('#A4_investigation1_input1_option1').prop("checked");
	let A4_inv1_input1_2 = $('#A4_investigation1_input1_option2').prop("checked");
	let A4_inv1_input1_3 = $('#A4_investigation1_input1_option3').prop("checked");
	let A4_inv1_input1_4 = $('#A4_investigation1_input1_option4').prop("checked");
	let A4_inv1_input2 = $('input[name=A4_investigation1_input2]:checked').val();
	let A4_inv1_input3 = $('input[name=A4_investigation1_input3]:checked').val();
	//檢查觀察紀錄學習單
	let qdisplay = 2
	if ($('#A4_inv1_li2').hasClass('d-none')) {
		qdisplay = 1
		console.log(qdisplay)
	}
	switch (qdisplay) {
		case 1:
			if (!A4_inv1_input1_1 || !A4_inv1_input1_2 || !A4_inv1_input1_3) {
				hintalert('X', '剛剛我們了解到，第三邊的中垂線也一定會通過另外兩邊的中垂線交點<br>這樣我們可不可以少畫一邊呢？')
			} else if (!A4_inv1_input1_4) {
				hintalert('X', '第三條中垂線一定會和另外兩條中垂線交於同一點，雖然畫兩條中垂線就足夠了，但畫三條中垂線也沒有關係啦')
			} else if (A4_inv1_input1_1 &&
				A4_inv1_input1_2 &&
				A4_inv1_input1_3 &&
				A4_inv1_input1_4) {
				hintalert('O', '沒錯！我們可以只畫兩條中垂線，就找到圓心的位置！')
				$('#A4_inv1_li2').removeClass('d-none')
				$('input[name = A4_investigation1_input1]').attr('disabled', true)
			}
			break;
		case 2:
			if (A4_inv1_input2 == 1) {
				hintalert('Q', '想想觀察紀錄，三條中垂線一定會交於一點喔')
			} else if (A4_inv1_input2 == 2) {
				
				$('input[name = A4_investigation1_input2]').attr('disabled', true)
				hintalert('O', '沒錯！以後我們只要畫兩條中垂線就可以找到圓心的位置了！！<br>不過圓心的位置一定會在三角形的裡面嗎？',true)
				sweetalert(4, 'inv', 1)
			} else {
				hintalert("I", '')
			}
		default:
			break;
	}

}


//好像沒有了
//探索2
function A4_investigation2() {
	currentStage = "A4_investigation2";
	showToolBar();
	// loadApplet("ggbApplet41", ggb_JDM_IEEA_02_A4_1);
}
function A4_investigation2_link() {
	removeListener();
}
function A4_investigation2_check() {
	let A4_inv2_input1_1 = $('#A4_investigation2_input1_option1').prop("checked");
	let A4_inv2_input1_2 = $('#A4_investigation2_input1_option2').prop("checked");
	let A4_inv2_input1_3 = $('#A4_investigation2_input1_option3').prop("checked");
	let A4_inv2_input2_1 = $('#A4_investigation2_input2_option1').prop("checked");
	let A4_inv2_input2_2 = $('#A4_investigation2_input2_option2').prop("checked");
	let A4_inv2_input2_3 = $('#A4_investigation2_input2_option3').prop("checked");

	//檢查觀察紀錄學習單
	let A4_inv2_input2 = !A4_inv2_input2_1 && !A4_inv2_input2_2 && !A4_inv2_input2_3

	//甜蜜警告
	if (
		A4_inv2_input1_1 &&
		A4_inv2_input1_2 &&
		A4_inv2_input1_3 &&
		!A4_inv2_input2
	) {
		Swal.fire({
			icon: 'success',
			text: '恭喜完成問題探索4，圓心的位置究竟和什麼有關係，讓我們繼續往下看吧！'
		}).then((result) => {
			//答對後調整內容
			$("#A4_investigation2_confirm").hide();
			$("#A4_investigation2_done").css({ "opacity": "1" });
			$("#A4_investigation2_next").removeClass("d-none");
			$("#A4_investigation2_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}//檢查問題探索學習單
}

//SHOW活動5
function showA5() {
	showLoading();
	$("#navbarDropdown").text("活動5");
	$("#navbarDropdown").val("活動5");
	$(".outlines").hide();
	$("#outlineA5").show();
	$(".title > span ").html("獨立探索活動 活動5：圓心在哪裡呢？");
	params.id = "ggbApplet05";
	params.ggbBase64 = ggb_JDM_IEEA_02_A5;
	currentStage = "A5_operation1";
	showToolBar()
	applet = new GGBApplet(params, true);
	showWorksheetsContents("A5_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
	applet.inject('ggb-element');
}
//活動5流程
$(document).ready(function () {
	$("#A5_operation1_link").click(function () {
		A5_operation1();
	});
	$("#A5_operation1_next").click(function () {
		$("#A5_observation1_link").click();
	});
	$("#A5_observation1_link").click(function () {
		A5_observation1();
	});
	$("#A5_observation1_confirm").click(function () {
		A5_observation1_check();
	});
	$("#A5_observation1_next").click(function () {
		$("#A5_investigation1_link").click();
	});
	$("#A5_investigation1_link").click(function () {
		A5_investigation1();
	});
	$("#A5_investigation1_confirm").click(function () {
		A5_investigation1_check();
	});
	$("#A5_investigation1_next").click(function () {
		Swal.fire({
			icon: 'success',
			showConfirmButton: false,
			timer: 3000,
			text: '恭喜你！你已經完成所有活動囉~超棒的！'
		}).then((result) => {
			//答對後調整內容
		})
	});
});
//操作
function A5_operation1() {
	currentStage = "A5_operation1";
	showToolBar();
	loadApplet("ggbApplet05", ggb_JDM_IEEA_02_A5);
	showToolBar()
}
function A5_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	envset(5, 1, 'ope')
	//註冊監聽物件
	api.registerObjectUpdateListener("check", A5_operation1_check)
	api.registerObjectClickListener("btncheck", A5_operation1_check)

	Swal.fire({
		html: '<div align="left">我們接下來探索看看圓心的位置與三角形之間到底有什麼關係吧！</div>',
		position: 'center-end',
		// imageUrl: './images/content/JDM-IEEA-02/A1_ope2_pic.png',
		// imageWidth: 300,
		allowOutsideClick: false
	}
	)
	showToolBar()
}
function A5_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue("check")
	//建立監聽函式
	if (check == 1) {
		$("#A1_operation1_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			$("#A5_operation1_done").css({ "opacity": "1" });
			$("#A5_operation1_next").removeClass("d-none");
			$("#A5_operation1_link img").css({ "opacity": "1" });
		})
	}
}
//觀察
function A5_observation1() {
	currentStage = "A5_observation1";
	showToolBar();
	loadApplet("ggbApplet05", ggb_JDM_IEEA_02_A5);
}
function A5_observation1_link() {
	removeListener();
	envset(5, 1, 'obs')
}
function A5_observation1_check() {

	let api = applet.getAppletObject();
	// let A5_obs1_input1 = $('input[name=A5_observation1_input1]:checked').val();
	let A5_obs1_input1_1 = $('#A5_observation1_input1_option1').prop("checked");
	let A5_obs1_input1_2 = $('#A5_observation1_input1_option2').prop("checked");
	let A5_obs1_input1_3 = $('#A5_observation1_input1_option3').prop("checked");
	let A5_obs1_input1_4 = $('#A5_observation1_input1_option4').prop("checked");
	let A5_obs1_input1_5 = $('#A5_observation1_input1_option5').prop("checked");
	let A5_obs1_input2 = $('input[name=A5_observation1_input2]:checked').val();
	let A5_obs1_input3 = $('input[name=A5_observation1_input3]:checked').val();
	let A5_obs1_input4 = $('input[name=A5_observation1_input4]:checked').val();
	let A5_obs1_input5 = $('input[name=A5_observation1_input5]:checked').val();
	let A5_obs1_input6 = $('input[name=A5_observation1_input6]:checked').val();
	let A5_obs1_input7 = $('input[name=A5_observation1_input7]:checked').val();
	//建立監聽函式

	let A5_obs1_input1 = A5_obs1_input1_1 && A5_obs1_input1_2 && A5_obs1_input1_3 && A5_obs1_input1_4 && A5_obs1_input1_5

	let qdisplay = 3
	if ($('#A5_obs1_li3').hasClass('d-none')) {
		qdisplay = 2
	}
	if ($('#A5_obs1_li2').hasClass('d-none')) {
		qdisplay = 1
	}
	console.log(qdisplay)
	switch (qdisplay) {
		case 1:
			if (!A5_obs1_input1_1) {
				hintalert('X', 'O不會在三角形內部嗎？')
				api.evalCommand("SetValue(A,(1,1))")
			} else if (!A5_obs1_input1_2) {
				hintalert('X', 'O不會在AB邊上嗎？')
				api.evalCommand("SetValue(A,C+(0,3))")
			} else if (!A5_obs1_input1_3) {
				hintalert('X', 'O不會在BC邊上嗎？')
				api.evalCommand("SetValue(A,(1.04,0.65))")
			} else if (!A5_obs1_input1_4) {
				hintalert('X', 'O不會在AC邊上嗎？')
				api.evalCommand("SetValue(A,B+(0,3))")
			} else if (!A5_obs1_input1_5) {
				hintalert('X', 'O不會在三角形外部嗎？')
				api.evalCommand("SetValue(A,B+C+(0,1))")
			} else if (A5_obs1_input1) {
				hintalert('O', '看起來好像什麼地方都有可能！<br>那你有發現是根據什麼改變的嗎？')
				$('#A5_obs1_li2').removeClass('d-none')
				$('input[name = A5_observation1_input1]').attr('disabled', true)
			}
			break;
		case 2:
			if (A5_obs1_input2 == 1 &&
				A5_obs1_input3 == 1 &&
				A5_obs1_input4 == 1) {
				hintalert('O', 'O在內部的時候，三角形的內角看起來都會是銳角')
				$('#A5_obs1_li3').removeClass('d-none')
				$('input[name = A5_observation1_input2]').attr('disabled', true)
				$('input[name = A5_observation1_input3]').attr('disabled', true)
				$('input[name = A5_observation1_input4]').attr('disabled', true)
			} else {
				hintalert('X', '有角度記錄錯誤喔，檢查看看<br>小於90度的是銳角、大於90度的是鈍角')
				api.evalCommand("SetValue(A,(1,1))")
			}
			break
		case 3:
			if (A5_obs1_input5 == 1 &&
				A5_obs1_input6 == 1 &&
				A5_obs1_input7 == 2) {
				hintalert('O', 'O在邊上時候，三角形的其中一個內角看起來會是直角<br>恭喜完成觀察紀錄')
				sweetalert(5, 'obs', 1)
				$('input[name = A5_observation1_input5]').attr('disabled', true)
				$('input[name = A5_observation1_input6]').attr('disabled', true)
				$('input[name = A5_observation1_input7]').attr('disabled', true)
			} else {
				hintalert('X', '有角度記錄錯誤喔，檢查看看')
				api.evalCommand("SetValue(A,C+(0,3))")
			}
		default:
			break;
	}
}
//探索
function A5_investigation1() {
	currentStage = "A5_investigation1";
	showToolBar();
	loadApplet("ggbApplet05", ggb_JDM_IEEA_02_A5);
}
function A5_investigation1_link() {
	removeListener();
}
function A5_investigation1_check() {
	let A5_inv1_input1 = $('input[name=A5_investigation1_input1]:checked').val();
	let A5_inv1_input2 = $('input[name=A5_investigation1_input2]:checked').val();
	let A5_inv1_input3 = $('input[name=A5_investigation1_input3]:checked').val();
	// let A5_inv1_input4 = $('input[name=A5_investigation1_input4]:checked').val();
	let A5_inv1_input5 = $('input[name=A5_investigation1_input5]:checked').val();
	//建立監聽函式

	let qdisplay = 4
	if ($('#A5_inv1_li4').hasClass('d-none')) {
		qdisplay = 3
	}
	if ($('#A5_inv1_li3').hasClass('d-none')) {
		qdisplay = 2
	}
	if ($('#A5_inv1_li2').hasClass('d-none')) {
		qdisplay = 1
	}
	switch (qdisplay) {
		case 1:
			if (A5_inv1_input1 == 1) {
				hintalert('O', '銳角三角形時，圓心會在內部')
				$('#A5_inv1_li2').removeClass('d-none')
				$('input[name = A5_investigation1_input1]').attr('disabled', true)
			} else if (A5_inv1_input1 == undefined) {
				hintalert('I', '')
			} else {
				hintalert('X', '好像不對喔！再觀察一下')
			}
			break;
		case 2:
			if (A5_inv1_input2 == 2) {
				hintalert('O', '直角三角形時，圓心會在邊上')
				$('#A5_inv1_li3').removeClass('d-none')
				$('input[name = A5_investigation1_input2]').attr('disabled', true)
			} else if (A5_inv1_input2 == undefined) {
				hintalert('I', '')
			} else {
				hintalert('X', '好像不對喔！再觀察一下')
			}
			break;
		case 3:
			if (A5_inv1_input3 == 3) {
				hintalert('O', '鈍角三角形時，圓心會在外部<br>原來位置是和三角形的內角大小有關',true)
				$('#A5_inv1_li4').removeClass('d-none')
				$('input[name = A5_investigation1_input3]').attr('disabled', true)
			} else if (A5_inv1_input3 == undefined) {
				hintalert('I', '')
			} else {
				hintalert('X', '好像不對喔！再觀察一下')
			}
			break;
		case 4:
			if (A5_inv1_input5 == 1) {
				hintalert('I', '取得不錯！但是在數學上我們把它命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else if (A5_inv1_input5 == 2) {
				hintalert('I', '取得不錯！但是在數學上我們把它命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else if (A5_inv1_input5 == 3) {
				hintalert('O', '真是不錯！！在數學上我們就是命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else if (A5_inv1_input5 == 4) {
				hintalert('I', '取得不錯！不過「內心」在數學中其實另有其人，我們馬上也會遇到的。<br>在數學上我們把這個圓心命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else if (A5_inv1_input5 == 5) {
				hintalert('I', '取得不錯！不過「重心」在數學中其實另有其人，我們馬上也會遇到的。<br>在數學上我們把這個圓心命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else if (A5_inv1_input5 == 6) {
				hintalert('I', '取得不錯！不過「垂心」在數學中其實另有其人，我們馬上也會遇到的。<br>在數學上我們把這個圓心命名為<strong>「外心」</strong>，<br>也就是外接圓的圓心喔！',true)
				sweetalert(5, 'inv', 1)
			} else {
				hintalert('I', '')
				break
			}
		default:
		$('input[name = A5_investigation1_input5]').attr('disabled', true)
			break;
	}

}

//連結各個按鈕與函示
$(document).ready(function () {
	$("#A1_operation6_link").click(function () {
		A1_operation6();
	});
	$("#A1_operation6_next").click(function () {
		$("#A1_operation1_link").click();
	});
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
		showA2();//下一個操作2
	});

});