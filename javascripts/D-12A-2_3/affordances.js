var currentStage = "cover";
params.ggbBase64 = ggb_D_12A_2_3_cover;

params.appletOnLoad = function (api) {
	function start() {
		$("#load-wrapper").addClass("d-flex");
		$("#load-wrapper").show();
		$(".header_wrapper").show();
		$(".title").show();
		$(".title > span ").html("D-12A-2_3 活動1：二項分布下的假設檢定-進行假設並討論雙尾拒絕域下的假設檢定");
		$(".ggbSetting").removeAttr("style");
		$(".worksheets").show();
		showA1();
	}

	function prereguisite() {
		Swal.fire({
			html: '<dl style="text-align:left;"><dt>F-12乙-5-S03</dt><dd>能認識二項分布做假設檢定。</dd></dl><dl style="text-align:left;"><dt>F-12乙-5-S05</dt><dd>能運用二項分布做假設檢定。</dd></dl>',
			heightAuto: false,
		});
	}

	function backLists() {
		location.href = "./index.html";
	}

	api.registerObjectClickListener("pic5", start);
	api.registerObjectClickListener("pic2", prereguisite);
	// api.registerObjectClickListener("pic3", goal);
	// api.registerObjectClickListener("pic4", bigidea);
	api.registerObjectClickListener("pic6", backLists);
};

var applet = new GGBApplet(params, true);
applet.setHTML5Codebase("GeoGebra/HTML5/5.0/web3d/");
window.addEventListener("load", function () {
	applet.inject("ggb-element");
});

//common
function ggbOnInit() {
	$("#load-wrapper").removeClass("d-flex");
	$("#load-wrapper").hide();
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
			// case "活動3":
			// 	showA3();
			// 	break;
			// case "活動4":
			// 	showA4();
			// 	break;
			// case "活動5":
			// 	showA5();
			// 	break;
			// default:
			// 	break;
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
	$(".title > span ").html("D-12A-2_3 活動1：二項分布下的假設檢定-進行假設並討論雙尾拒絕域下的假設檢定");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_D_12A_2_3_A1;

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
	currentStage = "A1_operation1";
}

function showA2() {
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("D-12A-2_3 活動2：二項分布下的假設檢定-進行假設並討論單尾拒絕域下的假設檢定");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_D_12A_2_3_A1;
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
	currentStage = "A2_operation1";
}


$(document).ready(function () {
	showManipulativesCover();
	$(".operation, .observation, .investigation").hide();
	selectActivity();

	// 以下處理next和confirm按鈕
	var section_list = [
		"A1_operation1",
		"A1_observation1",
		"A1_observation2",
		"A1_observation3",
		"A1_observation4",
		"A1_investigation1",
		"A1_investigation2",
		"A1_operation2",
		"A1_observation5",
		"A1_observation6",
		"A1_investigation3",

		"A2_operation1",
		"A2_observation1",
		"A2_investigation1",
		"A2_operation2",
		"A2_observation2",
		"A2_observation3",
		"A2_investigation2",
		// "A2_investigation3",
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
		default:
			if (!activity[id]["complete"]){
				text = generateCongratsWord(id);
				testResult = true;
				activity[id]["complete"] = true;	
			}
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
