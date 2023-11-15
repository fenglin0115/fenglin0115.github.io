var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_3_1_cover;
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

//common
function showManipulativesCover() {
	$(".header_wrapper").hide();
	$(".title").hide();
	$(".worksheets").hide();
	$(".ggbSetting").css({
		width: "calc(100vw - 1.2rem)",
		"max-width": "calc((100vmin - 1.2rem) / 10 * 16)",
		margin: "0 auto",
	});
}

//common
var current_section = "";
var current_answer = "";
function showWorksheetsContents(x) {
	$(".operation, .observation, .investigation").hide();
	current_section = x.replace("_link", ""); //紀錄現在狀態
	switch (current_section) {
		case "A1_operation1":
			loadApplet("ggbAppletA1_1", ggb_G_11A_3_1_A1_1);
			break;
		case "A1_operation2":
			loadApplet("ggbAppletA1_2", ggb_G_11A_3_1_A1_2);
			break;
		case "A1_observation1":
			loadApplet("ggbAppletA1_2", ggb_G_11A_3_1_A1_2);
			break;
		case "A1_investigation1":
			loadApplet("ggbAppletA1_2", ggb_G_11A_3_1_A1_2);
			break;
		case "A1_operation3":
			loadApplet("ggbAppletA1_3", ggb_G_11A_3_1_A1_3);
			break;
		case "A1_operation4":
			loadApplet("ggbAppletA1_4", ggb_G_11A_3_1_A1_4);
			break;
		case "A1_observation2":
			loadApplet("ggbAppletA1_4", ggb_G_11A_3_1_A1_4);
			break;
		case "A1_investigation2":
			loadApplet("ggbAppletA1_4", ggb_G_11A_3_1_A1_4);
			break;
		case "A2_operation1":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_1);
			break;
		case "A2_observation1":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_1);
			break;
		case "A2_investigation1":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_1);
			break;
		case "A2_operation2":
			loadApplet("ggbAppletA2_2", ggb_G_11A_3_1_A2_2);
			break;
		case "A2_operation3":
			loadApplet("ggbAppletA2_3", ggb_G_11A_3_1_A2_3);
			break;
		case "A2_observation2":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_3);
			break;
		case "A2_investigation2":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_3);
			break;
		case "A2_operation4":
			loadApplet("ggbAppletA2_4", ggb_G_11A_3_1_A2_4);
			break;
		case "A2_observation3":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_4);
			break;
		case "A2_investigation3":
			loadApplet("ggbAppletA2_1", ggb_G_11A_3_1_A2_4);
			break;
	}
	$(`#${current_section}`).fadeIn();
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
			default:
				break;
		}
	});
}

function showA1() {
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("G-11A-3_1 活動1：空間向量坐標");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_11A_3_1_A1_1;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
	};
	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	$(".operation, .observation, .investigation").hide();
	$("#A1_operation1").show();
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
	current_section = "A1_operation1";
}
function showA2() {
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("G-11A-3_1 活動2：空間向量加減法與係數積");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_11A_3_1_A2_1;
	params.appletOnLoad = function (api) {
		api.registerClientListener("clientListener");
	};
	applet = new GGBApplet(params, true);
	applet.inject("ggb-element");
	$(".operation, .observation, .investigation").hide();
	$("#A2_operation1").show();
	$(".outline").click(function () {
		showWorksheetsContents(this.id);
	});
	current_section = "A2_operation1";
}

$(document).ready(function () {
	showManipulativesCover();
	$(".operation, .observation, .investigation").hide();
	selectActivity();

	// 以下處理next和confirm按鈕
	var section_list = [
		"A1_operation1",
		"A1_operation2",
		// "A1_operation3",
		"A1_observation1",
		"A1_investigation1",
		"A1_operation4",
		"A1_observation2",
		"A1_investigation2",

		"A2_operation1",
		"A2_observation1",
		"A2_investigation1",
		// "A2_operation2",
		"A2_operation3",
		"A2_observation2",
		"A2_investigation2",
		"A2_operation4",
		"A2_observation3",
		"A2_investigation3",
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
						case "3":
							showA3();
							break;
						default:
							break;
					}
				}
			}
		});
		$("#" + id + "_confirm").click(() => {
			checkdone(current_section);
		});
	});
	// 以下處理dropdown-menu
	$(".worksheets .dropdown-menu li a").click(function () {
		$(this).parent().parent().prev().html($(this).html());
		$(this).parent().parent().prev().val($(this).parent().index());
	});

	// 以下處理互動性按鈕
	// $("#A3_observation2_table_btn").click(() => {
	//   if (updateData.geogebraData.P == undefined) {
	//     text = "請先將平均拉到原點(0, 0)!";
	//     icon = "error";
	//   } else {
	//     if (
	//       (updateData.geogebraData.P[0] == 0) &
	//       (updateData.geogebraData.P[1] == 0)
	//     ) {
	//       $("#A3_observation2_table_btn").addClass("d-none");
	//       updateData.activity["A3_observation2"] = { complete: true };
	//       $("#A3_observation2_table")
	//         .find("tr")
	//         .eq(1)
	//         .children()
	//         .each((i, e) => {
	//           if (i != 0) {
	//             e.innerHTML =
	//               Math.round(
	//                 applet.getAppletObject().getListValue("Bl9x", i) * 10
	//               ) / 10;
	//           }
	//         });
	//       $("#A3_observation2_table")
	//         .find("tr")
	//         .eq(2)
	//         .children()
	//         .each((i, e) => {
	//           if (i != 0) {
	//             e.innerHTML =
	//               Math.round(
	//                 applet.getAppletObject().getListValue("Bl9y", i) * 10
	//               ) / 10;
	//           }
	//         });
	//       $("#A3_observation2 li").removeClass("d-none");
	//       $("#A3_observation2_confirm").removeClass("d-none");
	//       text = "完成數據紀錄，請繼續回答後續問題。";
	//       icon = "success";
	//     } else {
	//       text = "請先將平均拉到原點(0, 0)!";
	//       icon = "error";
	//     }
	//   }
	//   Swal.fire({
	//     icon: icon,
	//     showConfirmButton: false,
	//     timer: 3000,
	//     html: text,
	//   });
	// });
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
	console.log(object)
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
	if (
		($("#" + current_section + "_done").css("opacity") != 1) &
		($("#" + current_section + "_confirm").length == 0)
	) {
		checkdone(current_section);
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
		// case "A1_operation1":
		// 	if (target == "viewXY")
		// 		activity[id].viewXY = true;
		// 	if (activity[id].viewXY) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_operation2":
		// 	if (target == "P" ||
		// 		target == "Q" ||
		// 		target == "R" ||
		// 		target == "S" ||
		// 		target == "T" 
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_investigation1":
		// 	if (!usertextarea[0].value)
		// 	{
		// 		text = "請記得留下你的想法！";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A1_operation3":
		// 	if (target == "viewDE")
		// 		activity[id].viewDE = true;
		// 	if (target == "α")
		// 		activity[id].a = true;

		// 	if (activity[id].viewDE && activity[id].a) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_investigation2":
		// 	if (!userinput[3].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A1_operation4":
		// 	if (
		// 		data.α > 6.28
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_operation5":
		// 	if (target == "button3")
		// 		activity[id].button3 = true;
		// 	if (data.X && (data.X != -7))
		// 		activity[id].X = true;
		// 	if (
		// 		activity[id].button3 &&
		// 		activity[id].X
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_observation1":
		// 	if (!userinput[1].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A1_operation6":
		// 	if (
		// 		data.k>0.1
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A1_observation2":
		// 	if (!userinput[0].checked ||
		// 		!userinput[3].checked ||
		// 		!userinput[4].checked ||
		// 		!userinput[6].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A1_investigation3":
		// 	if (!userinput[1].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;

		// case "A2_operation1":
		// 	if (target == "button1")
		// 		activity[id].button1 = true;

		// 	if (activity[id].button1) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A2_observation1":
		// 	if (!usertextarea[0].value)
		// 	{
		// 		text = "請記得留下你的想法！";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A2_investigation1":
		// 	if (!userinput[1].checked ||
		// 		!userinput[3].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A2_operation2":
		// 	if (target == "viewXY")
		// 		activity[id].viewXY = true;
		// 	if (target == "button2")
		// 		activity[id].button2 = true;
		// 	if (target == "button3")
		// 		activity[id].button3 = true;

		// 	if (
		// 		activity[id].viewXY &&
		// 		activity[id].button2 &&
		// 		activity[id].button3
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A2_observation2":
		// 	if (!usertextarea[0].value)
		// 	{
		// 		text = "請記得留下你的想法！";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;

		// case "A2_operation3":
		// 	if (target == "viewXY")
		// 		activity[id].viewXY = true;
		// 	if (data.α < 0.2)
		// 		activity[id].α = true;
		// 	if (
		// 		activity[id].α &&
		// 		data.α < 0.2
		// 	) {
		// 		activity[id]["complete"] = true;
		// 	}
		// 	break;
		// case "A2_observation3":
		// 	if (!userinput[0].checked ||
		// 		!userinput[5].checked ||
		// 		!userinput[6].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A2_investigation2":
		// 	if (!userinput[0].checked ||
		// 		!userinput[2].checked ||
		// 		!userinput[4].checked ||
		// 		!userinput[6].checked ||
		// 		!userinput[10].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;
		// case "A2_investigation3":
		// 	if (!userinput[2].checked)
		// 	{
		// 		text = "答案不對喔! 請再想想看哪裡做錯了";
		// 		break;
		// 	}
		// 	activity[id]["complete"] = true;
		// 	break;		
		default:
			if (!activity[id]["complete"]) {
				text = generateCongratsWord(id);
				testResult = true;
				activity[id]["complete"] = true;
			}
			break;
	}

	if (activity[id]["complete"]) {
		text = generateCongratsWord(id);
		testResult = true;
	}

	if (testResult) {
		$("#" + id + "_confirm").css({ display: "none" });
		$("#" + id + "_done").css({ opacity: "1" });
		$("#" + id + "_next").css({ display: "inline-block" });
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
			if (id.indexOf(_type) == -1)
				return
			type = _type;
			index = id.split(_type)[1];
		});

		let msg = `恭喜完成${SectionType[type]}${index}`;
		return msg;
	} catch (error) {
		return
	}
}

const SectionType = {
	operation: "實驗操作",
	observation: "觀察記錄",
	investigation: "問題探索",
};
