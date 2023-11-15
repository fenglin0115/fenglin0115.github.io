var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_6_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase("GeoGebra/HTML5/5.0/web3d/");
window.addEventListener("load", function () {
	applet.inject("ggb-element");
});

function coverUtility() {
	var api = applet.getAppletObject();
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

function removeListener() {
	var api = applet.getAppletObject();
}

var initA1 = false;
var initA2 = false;

function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html(
		`F-12甲-6 活動1：${katex.renderToString("y=0.1x^2", {
			throwOnError: false,
		})} 的黎曼和`
	);
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_F_12A_6_A1;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
	};
	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	currentStage = "A1_operation1";
	showWorksheetsContents("A1_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});

	if (!initA1) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">我們來看看： ' +
				katex.renderToString("y=0.1x^2", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("x", { throwOnError: false }) +
				" 軸、" +
				katex.renderToString("x=a", { throwOnError: false }) +
				"及" +
				katex.renderToString("x=b", { throwOnError: false }) +
				"所圍成的區域面積有哪些特徵吧！</div>",
		});
		$("#A1_operation1_link").click();
		initA1 = true;
	}
}

function showA2() {
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html(`F-12甲-6 活動2：${katex.renderToString("y=0.03x^2", {
		throwOnError: false,
	})}的黎曼和與定積分`);
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_F_12A_6_A2;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
	};
	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	currentStage = "A2_operation1";
	showWorksheetsContents("A2_operation1_link");
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});

	if (!initA2) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">我們來看看： ' +
				katex.renderToString("y=0.03x^2", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("x", { throwOnError: false }) +
				" 軸、" +
				katex.renderToString("x=a", { throwOnError: false }) +
				"及" +
				katex.renderToString("x=b", { throwOnError: false }) +
				"所圍成的區域面積有哪些特徵吧！</div>",
		});
		$("#A2_operation1_link").click();
		initA2 = true;
	}
}

var current_answer = "";
function showWorksheetsContents(x) {
	$(".operation, .observation, .investigation").hide();
	currentStage = x.replace("_link", ""); //紀錄現在狀態

	switch (x) {
		default:
			break;
	}
	$(`#${currentStage}`).fadeIn();
}

function selectActivity() {
	$("#activitySelected").on("click", "li a", function () {
		$("#navbarDropdown").text($(this).text());
		$("#navbarDropdown").val($(this).text());
		switch ($(this).text()) {
			case "活動1":
				showA1();
				break;
			case "活動2":
				showA2();
				break;
		}
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
		"A1_operation2",
		"A1_observation2",
		"A1_investigation2",
		"A1_operation3",
		"A1_observation3",
		"A1_investigation3",

		"A2_operation1",
		"A2_observation1",
		"A2_investigation1",
		"A2_operation2",
		"A2_observation2",
		"A2_investigation2",
	];

	section_list.forEach((id, index) => {
		$("#" + id + "_next").click(() => {
			$("#" + section_list[index + 1] + "_link").click();
			if (index < section_list.length - 1) {
				if (id[1] != section_list[index + 1][1]) {
					switch (section_list[index + 1][1]) {
						case "2":
							showA2();
							break;
						default:
							break;
					}
				}
			}
		});
		$("#" + id + "_confirm").click(() => {
			checkdone(currentStage);
		});
	});
	// 以下處理dropdown-menu
	$(".worksheets .dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index());
	});
});

var updateData = {
	geogebraData: {},
	activity: {},
	target: null,
};

function clientListener(object) {
	if (updateData["geogebraData"]["applet"] !== applet.getParameters().id) {
		updateData["geogebraData"] = {
			applet: applet.getParameters().id,
		};
	}
	updateData.target = object[1];
	if (
		(object[1] == "") |
		(applet.getAppletObject().getObjectType(object[1]) == "text")
	) {
		//pass
	} else if (!isNaN(applet.getAppletObject().getValue(object[1]))) {
		updateData["geogebraData"][object[1]] = applet
			.getAppletObject()
			.getValue(object[1]);
	}
	// We don't need this data at this activity
	// else if (!isNaN(applet.getAppletObject().getXcoord(object[1]))) {
	// 	updateData["geogebraData"][object[1]] = [
	// 		applet.getAppletObject().getXcoord(object[1]),
	// 		applet.getAppletObject().getYcoord(object[1]),
	// 	];
	// }
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
	const target = updateData.target;
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
			if (data.k >= 6) {
				activity[id].k = true;
			}

			if (target == "buttonB1") activity[id].buttonB1 = true;

			if (target == "buttonB2") activity[id].buttonB2 = true;

			if (target == "buttonB3") activity[id].buttonB3 = true;

			if (target == "button1") activity[id].button1 = true;

			if (
				activity[id].k &&
				activity[id].buttonB1 &&
				activity[id].buttonB2 &&
				activity[id].buttonB3 &&
				activity[id].button1
			) {
				activity[id]["complete"] = true;
			}
			break;
		case "A1_observation1":
			if (
				userinput[0].value == "" ||
				userinput[1].value == "" ||
				userinput[2].value == "" ||
				userinput[3].value == "" ||
				userinput[4].value == "" ||
				userinput[5].value == "" ||
				userinput[6].value == "" ||
				userinput[7].value == "" ||
				userinput[8].value == "" ||
				userinput[9].value == "" ||
				userinput[10].value == "" ||
				userinput[11].value == "" ||
				userinput[12].value == "" ||
				userinput[13].value == "" ||
				userinput[14].value == "" ||
				userinput[15].value == "" ||
				userinput[16].value == "" ||
				userinput[17].value == ""
			) {
				text = "請把每一格面積確實填上哦！";
				break;
			}
			if (
				userdropdown[0].value != "1" ||
				userdropdown[1].value != "2" ||
				userdropdown[2].value != "0"
			) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}
			activity[id]["complete"] = true;
			break;
		case "A1_investigation1":
			if (!userinput[2].checked || !userinput[5].checked) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}
			activity[id]["complete"] = true;
			break;
		case "A1_operation2":
			if (data.n == 5) {
				activity[id].n5 = true;
			}

			if (data.n == 10) {
				activity[id].n10 = true;
			}

			if (data.n == 20) {
				activity[id].n20 = true;
			}

			if (activity[id].n5 && activity[id].n10 && activity[id].n20) {
				activity[id]["complete"] = true;
			}
			break;
		case "A1_observation2":
			if (
				userinput[0].value == "" ||
				userinput[1].value == "" ||
				userinput[2].value == "" ||
				userinput[3].value == "" ||
				userinput[4].value == "" ||
				userinput[5].value == "" ||
				userinput[6].value == "" ||
				userinput[7].value == "" ||
				userinput[8].value == ""
			) {
				text = "請把每一格面積確實填上哦！";
				break;
			}
			if (
				userdropdown[0].value != "1" ||
				userdropdown[1].value != "2" ||
				userdropdown[2].value != "0"
			) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}
			activity[id]["complete"] = true;
			break;
		case "A1_investigation2":
			if (!userinput[2].checked) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			if (!usertextarea[0].value) {
				text = "請留下你的想法哦！";
				break;
			}
			activity[id]["complete"] = true;
			break;
		case "A1_operation3":
			if (data.n == 100) {
				activity[id].n100 = true;
			}

			if (activity[id].n100) {
				activity[id]["complete"] = true;
			}
			break;
		case "A1_observation3":
			if (
				userinput[0].value == "" ||
				userinput[1].value == "" ||
				userinput[2].value == "" ||
				userinput[3].value == "" ||
				userinput[4].value == "" ||
				userinput[5].value == "" ||
				userinput[6].value == "" ||
				userinput[7].value == "" ||
				userinput[8].value == "" ||
				userinput[9].value == "" ||
				userinput[10].value == "" ||
				userinput[11].value == "" ||
				userinput[12].value == "" ||
				userinput[13].value == "" ||
				userinput[14].value == "" 
			){
				text = "請把每一格面積確實填上哦！";
				break;
			}
			if (
				!userinput[16].checked ||
				!userinput[18].checked ||
				!userinput[23].checked
			) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			activity[id]["complete"] = true;
			break;
		case "A1_investigation3":
			if (!userinput[0].checked ||
				!userinput[6].checked ||
				!userinput[10].checked) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			activity[id]["complete"] = true;
			break;
		case "A2_operation1":
			if (data.n >= 100) {
				activity[id].n100 = true;
			}

			if (activity[id].n100) {
				activity[id]["complete"] = true;
			}
			break;
		case "A2_observation1":
			if (
				userinput[0].value == "" ||
				userinput[1].value == "" ||
				userinput[2].value == "" ||
				userinput[3].value == "" ||
				userinput[4].value == "" ||
				userinput[5].value == ""
			){
				text = "請把每一格值確實填上哦！";
				break;
			}
			if (
				userinput[1].value != "9.72"
			) {
				text = "定積分答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			activity[id]["complete"] = true;
			break;
		case "A2_investigation1":
			if (!userinput[2].checked) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			activity[id]["complete"] = true;
			break;
		case "A2_operation2":
			if (target == "a") {
				activity[id].a = true;
			}

			if (data.n == 10 &&
				activity[id].a && 
				applet.getAppletObject().getXcoord("a") < 0) {
				activity[id]["complete"] = true;
			}
			break;
		case "A2_observation2":
			if (
				userinput[0].value == "" ||
				userinput[1].value == "" ||
				userinput[2].value == "" ||
				userinput[3].value == "" 
			){
				text = "請把每一格值確實填上哦！";
				break;
			}
			if (
				userinput[0].value != "9.72" ||
				userinput[1].value != "9.71" ||
				userinput[2].value != "9.6" ||
				userinput[3].value != "9.11"
			) {
				text = "定積分答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			activity[id]["complete"] = true;
			break;
		case "A2_investigation2":
			if (!userinput[1].checked) {
				text = "答案不對喔! 請再想想看哪裡做錯了";
				break;
			}

			if (!usertextarea[0].value) {
				text = "請留下你的想法哦！";
				break;
			}
			activity[id]["complete"] = true;
			break;
		default:
			if (!activity[id]["complete"]) {
				activity[id]["complete"] = true;
			}
			break;
	}

	if (activity[id]["complete"]) {
		text = generateCongratsWord(id);
		testResult = true;
	}

	if (testResult) {
		$("#" + id + "_confirm").addClass("d-none");
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

function generateCongratsWord(id) {
	if (!id) return;

	try {
		let type;
		let index;

		Object.keys(SectionType).forEach((_type) => {
			if (id.indexOf(_type) == -1) return;
			type = _type;
			index = id.split(_type)[1];
		});

		let msg = `恭喜完成${SectionType[type]}${index}`;
		return msg;
	} catch (error) {
		return;
	}
}

const SectionType = {
	operation: "實驗操作",
	observation: "觀察記錄",
	investigation: "問題探索",
};
