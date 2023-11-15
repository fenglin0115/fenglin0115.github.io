var currentStage = "cover";
params.ggbBase64 = ggb_F_12B_5_cover;

params.appletOnLoad = function (api) {
	function start() {
		$("#load-wrapper").addClass("d-flex");
		$("#load-wrapper").show();
		$(".header_wrapper").show();
		$(".title").show();
		$(".title > span ").html(
			"F-12乙-5 活動1：常數函數的圖形下面積與其定積分之關聯"
		);
		$(".ggbSetting").removeAttr("style");
		$(".worksheets").show();
		showA1();
	}

	function prereguisite() {
		Swal.fire({
			html: '<dl style="text-align:left;"><dt>F-12乙-5-S03</dt><dd>能認識微積分基本定理並求出多項式函數的定積分。</dd></dl>',
			heightAuto: false,
		});
	}
	function goal() {
		Swal.fire({
			html: '<div style="text-align:left;">透過學具操作，讓學生體驗定積分與多項式函數圖形下面積的關係。</div>',
			heightAuto: false,
		});
	}
	function bigidea() {
		Swal.fire({
			html: '<dl style="text-align:left;"><dt>F-12乙-5-S05</dt><dd>能認識定積分與函數圖形下面積的關係。</dd></dl>',
			heightAuto: false,
		});
	}
	function backLists() {
		location.href = "./index.html";
	}

	api.registerObjectClickListener("pic5", start);
	api.registerObjectClickListener("pic2", prereguisite);
	api.registerObjectClickListener("pic3", goal);
	api.registerObjectClickListener("pic4", bigidea);
	api.registerObjectClickListener("pic6", backLists);
};

var applet = new GGBApplet(params, true);
applet.setHTML5Codebase("GeoGebra/HTML5/5.0/web3d/");
window.addEventListener("load", function () {
	applet.inject("ggb-element");
});

function showA1() {
	var initA1 = false;
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html(
		"F-12乙-5 活動1：一次函數的圖形下面積與其定積分之關聯"
	);
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_F_12B_5_A1;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
		function ggbMode1() {
			api.setValue("mode2", false);
		}
		function ggbMode2() {
			api.setValue("mode2", true);
		}
		function removeListener() {
			// api.unregisterObjectUpdateListener("numTree2");
			// api.unregisterObjectUpdateListener("numTree3");
			// api.unregisterObjectUpdateListener("numInRegion2");
			// api.unregisterObjectUpdateListener("numInRegion3");
		}

		// A1_operation1
		$("#A1_operation1_link").click(function () {
			// removeListener();
			currentStage = "A1_operation1";
			ggbMode1();
		});
		if (!initA1) {
			$("#A1_operation1_link").click();
			initA1 = true;
		}
		$("#A1_operation1_next").click(function () {
			$("#A1_observation1_link").click();
		});

		// A1_observation1
		$("#A1_observation1_link").click(function () {
			currentStage = "A1_observation1";
		});
		$("#A1_observation1_next").click(function () {
			$("#A1_investigation1_link").click();
		});

		// A1_investigation1
		$("#A1_investigation1_link").click(function () {
			currentStage = "A1_investigation1";
		});
		$("#A1_investigation1_next").click(function () {
			$("#A1_investigation2_link").click();
		});

		// A1_investigation2
		$("#A1_investigation2_link").click(function () {
			currentStage = "A1_investigation2";
		});
		$("#A1_investigation2_next").click(function () {
			$("#A1_operation2_link").click();
		});

		// A1_operation2
		$("#A1_operation2_link").click(function () {
			// removeListener();
			currentStage = "A1_operation2";
			ggbMode2();
		});
		$("#A1_operation2_next").click(function () {
			$("#A1_observation2_link").click();
		});

		// A1_observation2
		$("#A1_observation2_link").click(function () {
			currentStage = "A1_observation2";
		});
		$("#A1_observation2_next").click(function () {
			$("#A1_investigation3_link").click();
		});

		// A1_investigation3
		$("#A1_investigation3_link").click(function () {
			currentStage = "A1_investigation3";
		});
		$("#A1_investigation3_next").click(function () {
			showA2();
		});
	};

	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	showWorksheetsContents("A1_operation1_link");
	currentStage = "A1_operation1";
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}

function showA2() {
	var initA2 = false;
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html(
		"F-12B-5 活動2：二次函數的圖形下面積與其定積分之關聯。"
	);
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_F_12B_5_A2;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
		function ggbMode1() {
			// api.evalCommand("RunClickScript(viewPan)");
			api.setValue("modeAb", false);
			api.setValue("mode3", false);
		}
		function ggbMode2() {
			// api.evalCommand("RunClickScript(viewPan)");
			api.setValue("modeAb", true);
			api.setValue("mode3", false);
		}
		function ggbMode3() {
			api.setValue("modeAb", true);
			api.setValue("mode3", true);
		}
		// function removeListener() {
		//     api.unregisterObjectUpdateListener("numTree3");
		//     api.unregisterObjectUpdateListener("numTree4");
		//     api.unregisterObjectUpdateListener("numRecord");
		// }

		// A2_operation1
		$("#A2_operation1_link").click(function () {
			// removeListener();
			currentStage = "A2_operation1";
			ggbMode1();
		});
		if (!initA2) {
			$("#A2_operation1_link").click();
			initA2 = true;
		}
		$("#A2_operation1_next").click(function () {
			$("#A2_observation1_link").click();
		});

		// A2_observation1
		$("#A2_observation1_link").click(function () {
			currentStage = "A2_observation1";
		});
		$("#A2_observation1_next").click(function () {
			$("#A2_investigation1_link").click();
		});

		// A2_investigation1
		$("#A2_investigation1_link").click(function () {
			currentStage = "A2_investigation1";
		});
		$("#A2_investigation1_next").click(function () {
			$("#A2_investigation2_link").click();
		});

		// A2_investigation2
		$("#A2_investigation2_link").click(function () {
			currentStage = "A2_investigation2";
		});
		$("#A2_investigation2_next").click(function () {
			$("#A2_operation2_link").click();
		});

		// A2_operation2
		$("#A2_operation2_link").click(function () {
			// removeListener();
			currentStage = "A2_operation2";
			ggbMode2();
		});
		$("#A2_operation2_next").click(function () {
			$("#A2_observation2_link").click();
		});

		// A2_observation2
		$("#A2_observation2_link").click(function () {
			currentStage = "A2_observation2";
		});
		$("#A2_observation2_next").click(function () {
			$("#A2_investigation3_link").click();
		});

		// A2_investigation3
		$("#A2_investigation3_link").click(function () {
			currentStage = "A2_investigation3";
		});
		$("#A2_investigation3_next").click(function () {});
	};
	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	$(".operation, .observation, .investigation").hide();
	$("#A2_operation1").show();
	currentStage = "A2_operation1";
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
}

$(document).ready(function () {
	showManipulativesCover();
	$(".operation, .observation, .investigation").hide();
	selectActivity();
	// 以下處理next和confirm按鈕
	var section_list = [
		"A1_operation1",
		"A1_observation1",
		"A1_investigation1",
		"A1_investigation2",
		"A1_operation2",
		"A1_observation2",
		"A1_investigation3",

		"A2_operation1",
		"A2_observation1",
		"A2_investigation1",
		"A2_investigation2",
		"A2_operation2",
		"A2_observation2",
		"A2_investigation3",
	];

	$(".dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index());
	});

	section_list.forEach((id, index) => {
		$("#" + id + "_confirm").click(() => {
			checkdone(currentStage);
		});
	});
});

var updateData = {
	geogebraData: {},
	activity: {},
};

function clientListener(object) {
	if (updateData["geogebraData"]["applet"] !== applet.getParameters().id) {
		updateData["geogebraData"] = {
			applet: applet.getParameters().id,
		};
	}
	geogebraClickTarget = object[1];
	if (
		(object[1] == "") |
		(applet.getAppletObject().getObjectType(object[1]) == "text")
	) {
		//pass
	} else if (!isNaN(applet.getAppletObject().getValue(object[1]))) {
		updateData["geogebraData"][object[1]] = applet
			.getAppletObject()
			.getValue(object[1]);
	} else if (!isNaN(applet.getAppletObject().getXcoord(object[1]))) {
		updateData["geogebraData"][object[1]] = [
			applet.getAppletObject().getXcoord(object[1]),
			applet.getAppletObject().getYcoord(object[1]),
		];
	}

	if (
		($("#" + currentStage + "_done").css("opacity") != 1) &
		($("#" + currentStage + "_confirm").length == 0)
	) {
		checkdone(currentStage);
	}
}

function checkdone(id) {
	const data = updateData.geogebraData;
	const activity = updateData.activity;
	let icon = "error";
	let text = "";
	let testResult = false;
	const userselect = $("#" + id + " select");
	const userinput = $("#" + id + " input");
	const userdropdown = $("#" + id + " .dropdown-toggle");
	const usertextarea = $("#" + id + " textarea");
	if (activity[id] == undefined) {
		activity[id] = {};
	}

	switch (id) {
		case "A1_operation1":
			if ((typeof data.P == "object") & (typeof data.Q == "object")) {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}

				if ((data.P[0] == 0) & (data.e == 1))
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作1";
				testResult = true;
			}
			break;

		case "A1_observation1":
			if (
				(userinput[0].value == "4.5") &
				(userinput[1].value == "8") &
				(userinput[2].value == "12.5") &
				(userinput[3].value == "18") &
				(userinput[4].value == "4.5") &
				(userinput[5].value == "8") &
				(userinput[6].value == "12.5") &
				(userinput[7].value == "18")
			) {
				text = "恭喜完成觀察記錄1";
				testResult = true;
			} else {
				text = "請寫下你的觀察！";
			}
			break;

		case "A1_investigation1":
			if (
				userinput[0].checked &
				userinput[3].checked &
				userinput[6].checked
			) {
				text = "恭喜完成問題探索1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A1_investigation2":
			if (
				userinput[0].checked &
				userinput[3].checked &
				userinput[6].checked
			) {
				text = "恭喜完成問題探索2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A1_operation2":
			if ((typeof data.P == "object") & (typeof data.Q == "object")) {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}
				if ((data.P[0] != 0) & (data.m == 1))
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作2";
				testResult = true;
			}

			break;

		case "A1_observation2":
			if (
				(userinput[0].value == "8") &
				(userinput[1].value == "6") &
				(userinput[2].value == "16") &
				(userinput[3].value == "8") &
				(userinput[4].value == "6") &
				(userinput[5].value == "16") &
				(userinput[6].value == "8") &
				(userinput[7].value == "6") &
				(userinput[8].value == "16")
			) {
				text = "恭喜完成觀察記錄2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}

			break;

		case "A1_investigation3":
			if (
				userinput[1].checked &
				userinput[4].checked &
				userinput[7].checked
			) {
				text = "恭喜完成問題探索3";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation1":
			if ((typeof data.P == "object") & (typeof data.Q == "object")) {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}

				if ((data.P[0] == 0) & (data.e == 1))
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作1";
				testResult = true;
			}
			break;

		case "A2_observation1":
			if (
				(userinput[0].value == "9") &
				(userinput[1].value == "72") &
				(userinput[2].value == "9") &
				(userinput[3].value == "72")
			) {
				text = "恭喜完成觀察記錄1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation1":
			if (
				userinput[0].checked &
				userinput[3].checked &
				userinput[7].checked
			) {
				text = "恭喜完成問題探索1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation2":
			if (
				userinput[0].checked &
				userinput[3].checked &
				userinput[7].checked
			) {
				text = "恭喜完成問題探索2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation2":
			if ((typeof data.P == "object") & (typeof data.Q == "object")) {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}
				if ((data.P[0] != 0) & (data.m == 1))
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作2";
				testResult = true;
			}
			break;

		case "A2_observation2":
			if (
				(userdropdown[0].value == "2") &
				(userdropdown[1].value == "1") &
				(userdropdown[2].value == "0") &
				(userdropdown[3].value == "2") &
				(userdropdown[4].value == "1") &
				(userdropdown[5].value == "0") &
				(userdropdown[6].value == "2") &
				(userdropdown[7].value == "1") &
				(userdropdown[8].value == "0")
			) {
				text = "恭喜完成觀察記錄2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation3":
			if (
				userinput[1].checked &
				userinput[4].checked &
				userinput[7].checked
			) {
				text = "恭喜完成問題探索3";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		default:
			break;
	}
	if (testResult) {
		$("#" + id + "_confirm").css({ display: "none" });
		$("#" + id + "_done").css({ opacity: "1" });
		$("#" + id + "_next").removeClass("d-none");
		$("#" + id + "_link img").css({ opacity: "1" });
		Swal.fire({
			icon: "success",
			showConfirmButton: false,
			timer: 3000,
			html: text,
		});
	} else if (text !== "") {
		Swal.fire({
			icon: icon,
			showConfirmButton: false,
			timer: 3000,
			html: text,
		});
	}
}
