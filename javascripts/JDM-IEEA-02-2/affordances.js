var currentStage = "cover";
params.ggbBase64 = ggb_JDM_IEEA_02_cover;
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
}
var init1 = true;
var init2 = true;

//工具列顯示
// function showToolBar() {
// 	switch (currentStage) {
// 		// case "A1_operation6":
// 		case "A1_operation7":
// 		case "A1_operation4":
// 		case "A1_observation4":
// 		case "A1_investigation4":
// 		case "A2_operation3":
// 		case "A2_operation4":
// 		case "A2_observation3":
// 		case "A2_investigation3":
// 			params.showToolBar = true;
// 			break;
// 		default:
// 			params.showToolBar = false;
// 	}
// }


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
	switch (i) {
		case 1://A1外心
			switch (k) {//活動類型
				case "ope":
					switch (j) {
						case 3:
							// api.setLabelVisible("towerP1", 0);
							// api.setLabelVisible("towerP2", 0);
							break;
						default:
							break;
					}
					break;
				case "obs":

					break;
				case "inv":

					break;
				default:
					break;
			}
			break;
		case 2://A2內心
			switch (k) {//活動類型
				case 'ope':

					break;
				case 'obs':

					break
				case 'inv':


					break;
				default:
					break;
			}
			break;

		default:
			break;
	}
}

//SHOW活動1
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("活動1：三角形的心(二)");
	params.id = "ggbApplet21";
	params.ggbBase64 = ggb_JDM_IEEA_02_A1;
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
	showToolBar();
	loadApplet("ggbApplet21", ggb_JDM_IEEA_02_A1);
}
function A1_operation1_link() {
	removeListener();
	//註冊監聽物件
	Swal.fire({
		html: '<div align = "left">我們接下來有一個小遊戲，想要在三角形裡面填塞一顆圓形的氣球，氣球愈大就會愈高分，但是只要氣球一碰到三角形的邊長氣球就會破掉，想想看怎麼樣才能獲得高分吧！	</div>'
	});
}
function A1_operation1_check() {

	//建立監聽函式
}
// 觀察
function A1_observation1() {
	currentStage = "A1_observation1";
	showToolBar();
	loadApplet("ggbApplet21", ggb_JDM_IEEA_02_A1);
}
function A1_observation1_link() {
	removeListener();
}
function A1_observation1_check() {

	//檢查觀察紀錄學習單

	//甜蜜警告
}
//探索
function A1_investigation1() {
	currentStage = "A1_investigation1";
	showToolBar();
	loadApplet("ggbApplet21", ggb_JDM_IEEA_02_A1);
}
function A1_investigation1_link() {
	removeListener();
}
function A1_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}

//SHOW活動2
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("活動2：");
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_JDM_IEEA_02_A2;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A2_operation1";
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
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
//操作1
function A2_operation1() {
	currentStage = "A2_operation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
	let api = applet.getAppletObject();
	// api.setValue("inv", 0);
}
function A2_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.registerObjectUpdateListener('check', A2_operation1_check)
	//註冊監聽物件
	// Swal.fire({
	// 	html: '<div align="left"></div>'
	// });
}
function A2_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 3) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			//答對後調整內容
			$("#A2_operation1_confirm").hide();
			$("#A2_operation1_done").css({ "opacity": "1" });
			$("#A2_operation1_next").removeClass("d-none");
			$("#A2_operation1_link img").css({ "opacity": "1" });
		})
		removeListener()
	}
}
//觀察1
function A2_observation1() {
	currentStage = "A2_observation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
	let api = applet.getAppletObject();
}
function A2_observation1_link() {
	removeListener();
}
function A2_observation1_check() {
	//檢查觀察紀錄學習單
	let A2_obs1_1 = $('input[name=A2_observation1_input1]:checked').val();
	let A2_obs1_2 = $('input[name=A2_observation1_input2]:checked').val();
	let A2_obs1_3 = $('input[name=A2_observation1_input3]:checked').val();
	//甜蜜警告
	if (A2_obs1_1 == 2 && A2_obs1_2 == 2) {
		//答對跳出視窗
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄' }).then((result) => {
			//答對後調整內容
			$("#A2_observation1_confirm").hide();
			$("#A2_observation1_done").css({ "opacity": "1" });
			$("#A2_observation1_next").removeClass("d-none");
			$("#A2_observation1_link img").css({ "opacity": "1" });
		})
	} else {
		//答錯跳出視窗
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}
//探索1
function A2_investigation1() {
	currentStage = "A2_investigation1";
	showToolBar();
	loadApplet("ggbApplet02", ggb_JDM_IEEA_02_A2);
	let api = applet.getAppletObject();
	api.setValue("inv", 1);
}
function A2_investigation1_link() {
	removeListener();
}
function A2_investigation1_check() {
	//檢查觀察紀錄學習單
	let A2_inv1_1 = $('input[name=A2_investigation1_input1]:checked').val();
	let A2_inv1_2 = $('input[name=A2_investigation1_input2]:checked').val();
	let A2_inv1_3 = $('input[name=A2_investigation1_input3]:checked').val();
	//甜蜜警告
	if (A2_inv1_1 == 4) {
		//答對跳出視窗
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索' }).then((result) => {
			//答對後調整內容
			$("#A2_investigation1_confirm").hide();
			$("#A2_investigation1_done").css({ "opacity": "1" });
			$("#A2_investigation1_next").removeClass("d-none");
			$("#A2_investigation1_link img").css({ "opacity": "1" });
		})
	} else {
		//答錯跳出視窗
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}

//SHOW活動
function showA3() {
	showLoading();
	$("#navbarDropdown").text("活動3");
	$("#navbarDropdown").val("活動3");
	$(".outlines").hide();
	$("#outlineA3").show();
	$(".title > span ").html("活動3：");
	params.id = "ggbApplet03";
	params.ggbBase64 = ggb_JDM_IEEA_02_A3;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A3_operation1";
	showWorksheetsContents("A3_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
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
			//下一個活動
	});
});
//操作
function A3_operation1() {
	currentStage = "A3_operation1";
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
}
function A3_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.registerObjectUpdateListener('check', A3_operation1_check)
	envset(3,1,'ope')
	//引言？
}
function A3_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check')
	//建立監聽函式
	if (check == 3) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作' }).then((result) => {
			//答對後調整內容
			$("#A3_operation1_confirm").hide();
			$("#A3_operation1_done").css({ "opacity": "1" });
			$("#A3_operation1_next").removeClass("d-none");
			$("#A3_operation1_link img").css({ "opacity": "1" });
		})
		removeListener()
	}
}

//觀察
function A3_observation1() {
	currentStage = "A3_observation1";
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
}

function A3_observation1_link() {
	removeListener();
	envset(3,1,'obs')
}
function A3_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單

	//甜蜜警告
}
//觀察
function A3_observation2() {
	currentStage = "A3_observation2";
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
}

function A3_observation2_link() {
	removeListener();
	envset(3,2,'obs')
}
function A3_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單

	//甜蜜警告
}
//探索
function A3_investigation1() {
	currentStage = "A3_investigation1";
	loadApplet("ggbApplet03", ggb_JDM_IEEA_02_A3);
}

function A3_investigation1_link() {
	removeListener();
	envset(3,1,'inv')
}
function A3_investigation1_check() {
	//檢查問題探索學習單

	//甜蜜警告
}


















//操作
function A2_operation4() {
	currentStage = "A2_operation4";
	showToolBar();
	loadApplet("ggbApplet24", ggb_JDM_IEEA_02_A2_tool);
}

function A2_operation4_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
}

function A2_operation4_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

function A2_operation5() {
	currentStage = "A2_operation5";
	showToolBar();
	loadApplet("ggbApplet004", ggb_JDM_IEEA_02_A2_tool2);
}

function A2_operation5_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件
}

function A2_operation5_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//操作
function A2_operation3() {
	currentStage = "A2_operation3";
	showToolBar();
	loadApplet("ggbApplet23", ggb_JDM_IEEA_02_A2_3);
}

function A2_operation3_link() {
	removeListener();

	//註冊監聽物件
}

function A2_operation3_check() {
	let api = applet.getAppletObject();

	//建立監聽函式
}

//觀察
function A2_observation3() {
	currentStage = "A2_observation3";
	showToolBar();

	loadApplet("ggbApplet23", ggb_JDM_IEEA_02_A2_3);
}

function A2_observation3_link() {
	removeListener();
}

function A2_observation3_check() {

	//檢查觀察紀錄學習單

	//甜蜜警告
}

//探索
function A2_investigation3() {
	currentStage = "A2_investigation3";
	showToolBar();

	loadApplet("ggbApplet23", ggb_JDM_IEEA_02_A2_3);
}

function A2_investigation3_link() {
	removeListener();
}

function A2_investigation3_check() {
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
		showA2()//下一個操作2
	});


});