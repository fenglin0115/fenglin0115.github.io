
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


/**
 * 
 * @param {這個活動是幾} i 
 * @param {第幾個小活動} j 
 * @param {ope:實驗操作,obs:觀察記錄,inv:問題探索} k 
 */
function envset(i, j, k) {
	let api = applet.getAppletObject();
	switch (i) {
		//活動一
		case 1:
			api.setValue('a', 0)
			switch (j) {
				//小活動一
				case 1:
					console.log("小活動1")
					switch (k) {
						case 'obs':
							break;
						default:
							break;
					}
					break;
				//小活動2
				case 2:
					console.log("小活動2")
					switch (k) {
						case 'ope':
							api.evalCommand('RunClickScript(button2)')
							break
						case 'obs':
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
			break;
		//A2	
		case 2:
			api.setValue('ope1', 0)
			api.setValue('inv1', 0)
			api.setValue('ope2', 0)
			api.setValue('ope3', 0)
			api.setFixed('P', false, true)
			api.setFixed("P'", false, false)
			switch (j) {
				case 1://小活動1
					switch (k) {
						case 'ope':
							api.setValue('ope1', 1)
							break
						case 'inv'://A2_inv1
							api.setValue('inv1', 1)
							break;

						default:
							break;
					}
					break;
				case 2:
					switch (k) {
						case 'ope':
							api.setValue('ope2', 1)
							api.setFixed('P', false, false)
							break;
						default:
							break;
					}
					break
				case 3://小活動3
					api.setValue('ope3', 1)
					api.setFixed('P', false, false)
					api.setFixed("P'", false, true)
					break;
				default:
					break;
			}
			break
		default:
			break;
	}

}
//移除監聽
function removeListener() {
	let api = applet.getAppletObject();
	api.unregisterObjectUpdateListener('ope1')
	api.unregisterObjectUpdateListener('check1')
	api.unregisterObjectUpdateListener('check2')
	api.unregisterObjectUpdateListener('check3')
	api.unregisterObjectUpdateListener('check4')
}

//SHOW活動1
function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("G-12A-1(1) 活動1：至定點與一定線等距的點軌跡");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_12A_1_1_A1;
	currentStage = "A1_operation1";
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//ope1
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	//註冊監聽物件 
	api.registerObjectUpdateListener("ope1", A1_operation1_check)
	// Swal.fire({
	// 	html: '我們知道到兩定點等距的點軌跡為中垂線，<br>' +
	// 		'到兩相交直線等距的點軌跡為角平分線，<br>' +
	// 		'那到一定線及線外一點等距的點其軌跡方程式為何呢？<br>' +
	// 		'我們一起來看看吧！！'
	// });
	hintalert('I', '我們知道到兩定點等距的點軌跡為中垂線，<br>' +
		'到兩相交直線等距的點軌跡為角平分線，<br>' +
		'那到一定線及線外一點等距的點其軌跡方程式為何呢？<br>' +
		'我們一起來看看吧！！', true)
}
function A1_operation1_check() {
	let api = applet.getAppletObject();
	let ope1 = api.getValue('ope1')
	//建立監聽函式
	if (ope1 == 1) {
		$("#A1_operation1_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
			$("#A1_operation1_done").css({ "opacity": "1" });
			$("#A1_operation1_next").removeClass("d-none");
			$("#A1_operation1_link img").css({ "opacity": "1" });
		})
		removeListener();
	}
}
//obs1
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_observation1_link() {
	removeListener();

}
function A1_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs1_1 = $('input[name=A1_observation1_input1]:checked').val();
	let A1_obs1_2 = $('input[name=A1_observation1_input2]:checked').val();
	let A1_obs1_3 = $('input[name=A1_observation1_input3]:checked').val();
	//甜蜜警告
	if (
		A1_obs1_1 == 1 &&
		A1_obs1_2 == 3 &&
		A1_obs1_3 == 1
	) {
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
//操作2
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	envset(1, 2, 'ope')
	//註冊監聽物件
	api.registerObjectUpdateListener('ope1', A1_operation2_check)
}
function A1_operation2_check() {
	let api = applet.getAppletObject();
	let ope2 = api.getValue('ope1')
	let a = api.getValue('a')
	//建立監聽函式
	if (ope2 == 1 && a == 1) {
		$("#A1_operation2_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
			$("#A1_operation2_done").css({ "opacity": "1" });
			$("#A1_operation2_next").removeClass("d-none");
			$("#A1_operation2_link img").css({ "opacity": "1" });
		})
		removeListener();
	}
}
//觀察2
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_1_A1);
}
function A1_observation2_link() {
	removeListener();
}
function A1_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A1_obs2_1 = $('input[name=A1_observation2_input1]:checked').val();
	let A1_obs2_2 = $('input[name=A1_observation2_input2]:checked').val();
	let A1_obs2_3 = $('input[name=A1_observation2_input3]:checked').val();
	//甜蜜警告
	if (
		A1_obs2_1 == 2
	) {
		hintalert('O', '你猜的沒有錯就是拋物線！' +
			'恭喜完成觀察記錄2')
		sweetalert(1, 'obs', 2)
		//顯示軌跡按鈕
		api.setVisible('show', 1)
		api.setValue('show', 1)

	} else if (A1_obs2_1 != undefined) {
		Swal.fire({
			icon: 'success',
			// showConfirmButton: false,
			html: '其實是拋物線喔！' +
				'恭喜完成觀察記錄2<br>'
		}).then((result) => {
			//答對後調整內容
			$("#A1_observation2_confirm").hide();
			$("#A1_observation2_done").css({ "opacity": "1" });
			$("#A1_observation2_next").removeClass("d-none");
			$("#A1_observation2_link img").css({ "opacity": "1" });

			//顯示軌跡按鈕
			api.setVisible('show', 1)
			api.setValue('show', 1)

		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '你沒有作答喔! 請再想想看' })
	}
}

//活動2
function showA2() {
	showLoading();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("G-12A-1(1) 活動2：給定準線及焦點，做出拋物線");
	params.id = "ggbApplet02";
	currentStage = "A2_operation1";
	params.ggbBase64 = ggb_G_12A_1_1_A2;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
	console.log('func showA2')
}
$(document).ready(function () {
	//活動2
	$("#A2_operation1_link").click(function () {
		console.log('A2 ope1 link click')
		A2_operation1();
	});
	$("#A2_operation1_next").click(function () {
		$("#A2_investigation1_link").click();
	});
	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
	});
	$("#A2_investigation1_confirm").click(function () {
		A2_investigation1_check();
	});
	$("#A2_investigation1_next").click(function () {
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
		$("#A2_investigation2_link").click();
	});
	$("#A2_investigation2_link").click(function () {
		A2_investigation2();
	});
	$("#A2_investigation2_confirm").click(function () {
		A2_investigation2_check();
	});
	$("#A2_investigation2_next").click(function () {
		$("#A2_operation3_link").click();
	});
	$("#A2_operation3_link").click(function () {
		A2_operation3();
	});
	$("#A2_operation3_next").click(function () {
		$("#A2_observation2_link").click();
	});
	$("#A2_observation2_link").click(function () {
		A2_observation2();
	});
	$("#A2_observation2_confirm").click(function () {
		A2_observation2_check();
	});
	$("#A2_observation2_next").click(function () {
		$("#A2_investigation3_link").click();
	});
	$("#A2_investigation3_link").click(function () {
		A2_investigation3();
	});
	$("#A2_investigation3_confirm").click(function () {
		A2_investigation3_check();
	});
	$("#A2_investigation3_next").click(function () {
		showA3();
	});
});
//操作1
function A2_operation1() {
	currentStage = "A2_operation1";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_operation1_link() {
	console.log('A2 ope1 link')
	// console.trace()
	removeListener();
	let api = applet.getAppletObject();
	Swal.fire({
		html:
			'<div align = "left">我們把定線L稱為拋物線的準線，<br>' +
			'定點F稱為拋物線的焦點。<br>' +
			'我們來實際找到「到一定線及線外一點等距」的點軌跡(P點軌跡)。</div>'
	});
	//註冊監聽物件
	api.registerObjectUpdateListener('check1', A2_operation1_check)
}
function A2_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check1')
	//建立監聽函式
	if (check == 1) {
		$("#A2_operation1_confirm").removeClass("d-none");
		removeListener();
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
			$("#A2_operation1_done").css({ "opacity": "1" });
			$("#A2_operation1_next").removeClass("d-none");
			$("#A2_operation1_link img").css({ "opacity": "1" });
		})
		removeListener();
	}
}
//探索1
function A2_investigation1() {
	currentStage = "A2_investigation1";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_investigation1_link() {
	removeListener();
	envset(2, 1, 'inv')
}
function A2_investigation1_check() {
	//檢查問題探索學習單
	let A2_inv1_1 = $('input[name=A2_investigation1_input1]:checked').val()
	//甜蜜警告
	if (
		A2_inv1_1 == 3
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
			//答對後調整內容
			$("#A2_investigation1_confirm").hide();
			$("#A2_investigation1_done").css({ "opacity": "1" });
			$("#A2_investigation1_next").removeClass("d-none");
			$("#A2_investigation1_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}
//操作2
function A2_operation2() {
	currentStage = "A2_operation2";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	envset(2, 2, 'ope')
	api.evalCommand('RunClickScript(reset)')
	//註冊監聽物件
	api.registerObjectUpdateListener('check1', A2_operation2_check)

	console.log(api.getValue('check1'))
}
function A2_operation2_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check1')
	console.log('check1')
	//建立監聽函式
	if (check == 1) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
			$("#A2_operation2_done").css({ "opacity": "1" });
			$("#A2_operation2_next").removeClass("d-none");
			$("#A2_operation2_link img").css({ "opacity": "1" });
		})
		removeListener();
	}
}
//觀察1
function A2_observation1() {
	currentStage = "A2_observation1";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_observation1_link() {
	removeListener();
}
function A2_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A2_obs1_1 = $('input[name=A2_observation1_input1]:checked').val()
	//甜蜜警告
	if (
		A2_obs1_1 == 3
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
			//答對後調整內容
			$("#A2_observation1_confirm").hide();
			$("#A2_observation1_done").css({ "opacity": "1" });
			$("#A2_observation1_next").removeClass("d-none");
			$("#A2_observation1_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}
//探索2
function A2_investigation2() {
	currentStage = "A2_investigation2";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_investigation2_link() {
	removeListener();
}
function A2_investigation2_check() {
	//檢查問題探索學習單
	let A2_inv2_1 = $('input[name=A2_investigation2_input1]:checked').val()
	let A2_inv2_2 = $('input[name=A2_investigation2_input2]:checked').val()
	//甜蜜警告
	if (
		A2_inv2_1 == 1 &&
		A2_inv2_2 == 2
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
			//答對後調整內容
			$("#A2_investigation2_confirm").hide();
			$("#A2_investigation2_done").css({ "opacity": "1" });
			$("#A2_investigation2_next").removeClass("d-none");
			$("#A2_investigation2_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}
//操作3
function A2_operation3() {
	currentStage = "A2_operation3";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_operation3_link() {
	removeListener();
	let api = applet.getAppletObject();
	envset(2, 3, 'ope')
	api.evalCommand('RunClickScript(button2)')
	//註冊監聽物件
	api.registerObjectUpdateListener('check2', A2_operation3_check)

}
function A2_operation3_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check2')
	// console.log('check1')
	//建立監聽函式
	if (check == 1) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3' }).then((result) => {
			$("#A2_operation3_done").css({ "opacity": "1" });
			$("#A2_operation3_next").removeClass("d-none");
			$("#A2_operation3_link img").css({ "opacity": "1" });
		})
		removeListener();
	}
}
//觀察2
function A2_observation2() {
	currentStage = "A2_observation2";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_observation2_link() {
	removeListener();
	envset(2, 3, 'obs')
}
function A2_observation2_check() {
	let A2_obs2_input1 = $('input[name=A2_observation2_input1]:checked').val();

	//檢查觀察紀錄學習單
	//甜蜜警告
	if (
		A2_obs2_input1 == 2
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
			//答對後調整內容
			$("#A2_observation2_confirm").hide();
			$("#A2_observation2_done").css({ "opacity": "1" });
			$("#A2_observation2_next").removeClass("d-none");
			$("#A2_observation2_link img").css({ "opacity": "1" });
		})
	} else if (A2_obs2_input1 == 3) {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '雖然長得很像，但其實不是雙曲線喔' })
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}
//探索3
function A2_investigation3() {
	currentStage = "A2_investigation3";
	loadApplet("ggbApplet02", ggb_G_12A_1_1_A2);
}
function A2_investigation3_link() {
	removeListener();
	envset(2, 3, 'inv')
}
function A2_investigation3_check() {
	let A2_inv3_input1 = $('input[name=A2_investigation3_input1]:checked').val();
	//甜蜜警告
	if (
		A2_inv3_input1 == 2
	) {
		Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
			//答對後調整內容
			$("#A2_investigation3_confirm").hide();
			$("#A2_investigation3_done").css({ "opacity": "1" });
			$("#A2_investigation3_next").removeClass("d-none");
			$("#A2_investigation3_link img").css({ "opacity": "1" });
		})
	} else {
		Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
	}
}

//活動3
//SHOW活動
function showA3() {
	showLoading();
	$("#navbarDropdown").text("活動3");
	$("#navbarDropdown").val("活動3");
	$(".outlines").hide();
	$("#outlineA3").show();
	$(".title > span ").html("G-12A-1(1) 活動3：拋物線的要素(對稱軸、頂點、焦距、正焦弦)");
	params.id = "ggbApplet03";
	params.ggbBase64 = ggb_G_12A_1_1_A3;
	applet = new GGBApplet(params, true);
	applet.inject('ggb-element');
	currentStage = "A3_operation1";
	showWorksheetsContents("A3_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}
//操作1
function A3_operation1() {
	currentStage = "A3_operation1";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_operation1_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('step', 1)
	hintalert('I', '給定拋物線的焦點F及準線L，<br>我們就可以做出拋物線。<br>在拋物線中會有一些名詞，<br>我們一起來認識吧。')
	//註冊監聽物件
	api.registerObjectUpdateListener('check1', A3_operation1_check)
}
function A3_operation1_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check1')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(3, 'ope', 1)
		removeListener()
	}
}
//觀察1
function A3_observation1() {
	currentStage = "A3_observation1";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_observation1_link() {
	let api = applet.getAppletObject();
	api.setValue('step', 1)
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}
function A3_observation1_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A3_obs1_input1 = $('#A3_observation1_input1').val();
	let A3_obs1_input2 = $('#A3_observation1_input2').val();
	if (A3_obs1_input1 == 2 && A3_obs1_input2 == 2) {
		hintalert('O', 'obs')
		sweetalert(3, 'obs', 1)
	} else if (A3_obs1_input1 != 2) {
		hintalert('X', '1')
	} else if (A3_obs1_input2 != 2) {
		hintalert('X', '2')
	} else {
		hintalert('I', '')
	}
}
//操作2
function A3_operation2() {
	currentStage = "A3_operation2";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_operation2_link() {
	removeListener();
	let api = applet.getAppletObject();
	hintalert('I', '拋物線上與準線距離最近的點稱為拋物線的頂點，請移動拋物線上的點來找到頂點')
	//註冊監聽物件
	api.registerObjectUpdateListener('check2', A3_operation2_check)
	api.setValue('step', 2)
}
function A3_operation2_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check2')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(3, 'ope', 2)
		removeListener()
		api.setValue('bl2', 1)
	}
}
//觀察2
function A3_observation2() {
	currentStage = "A3_observation2";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_observation2_link() {
	let api = applet.getAppletObject();
	api.setValue('step', 2)
	removeListener();
}
function A3_observation2_check() {
	let api = applet.getAppletObject();
	//檢查觀察紀錄學習單
	let A3_obs2_1 = $('input[name = A3_observation2_input1]:checked').val()
	let A3_obs2_2 = $('input[name = A3_observation2_input2]:checked').val()
	//甜蜜警告
	if(A3_obs2_1==3&&A3_obs2_2==3){
		hintalert('O','obs')
		sweetalert(3,'obs',2)
	}else if(A3_obs2_1!=3){
		hintalert('X','1')
	}else if(A3_obs2_2!=3){
		hintalert('X','2')
	}else{
		hintalert('I','')
	}
}

//探索1
function A3_investigation1() {
	currentStage = "A3_investigation1";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_investigation1_link() {
	let api = applet.getAppletObject();
	api.setValue('step', 2)
	removeListener();
}
function A3_investigation1_check() {
	//檢查問題探索學習單
	let A3_inv1_1 = $('input[name=A3_investigation1_input1]:checked').val();
	//甜蜜警告
	if (A3_inv1_1 == 2) {
		hintalert('O', 'inv')
		sweetalert(3, 'inv', 1)
	} else {
		hintalert('X', 'X')
	}
}

//操作3
function A3_operation3() {
	currentStage = "A3_operation3";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}

function A3_operation3_link() {
	removeListener();
	let api = applet.getAppletObject();
	api.setValue('step', 3)
	//註冊監聽物件
	api.registerObjectUpdateListener('check3', A3_operation3_check)
}
function A3_operation3_check() {
	let api = applet.getAppletObject();
	let check = api.getValue('check3')
	//建立監聽函式
	if (check == 1) {
		hintalert('O', 'ope')
		sweetalert(3, 'ope', 3)
		removeListener()
		api.setValue('bl3', 1)
	}
}
//探索
function A3_investigation2() {
	currentStage = "A3_investigation2";
	loadApplet("ggbApplet03", ggb_G_12A_1_1_A3);
}
function A3_investigation2_link() {
	let api = applet.getAppletObject();
	api.setValue('step', 3)
	removeListener();
	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index() + 1);
	});
}

function A3_investigation2_check() {
	let A3_inv2_1 = $('input[name=A3_investigation2_input1]:checked').val();
	//甜蜜警告
	if (A3_inv2_1 == 3) {
		hintalert('O', 'obs')
		sweetalert(3, 'inv', 2)
	} else {
		hintalert('X', 'X')
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
		showA2();
	});



	//活動三

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
		$("#A3_operation2_link").click();
	});
	$("#A3_operation2_link").click(function () {
		A3_operation2();
	});
	$("#A3_operation2_next").click(function () {
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
		$("#A3_operation3_link").click();
	});
	$("#A3_operation3_link").click(function () {
		A3_operation3();
	});
	$("#A3_operation3_next").click(function () {
		$("#A3_investigation2_link").click();
	});
	$("#A3_investigation2_link").click(function () {
		A3_investigation2();
	});
	$("#A3_investigation2_confirm").click(function () {
		A3_investigation2_check();
	});
	$("#A3_investigation2_next").click(function () {
		hintalert('O', '恭喜你完成所有活動囉！')
	});


});

