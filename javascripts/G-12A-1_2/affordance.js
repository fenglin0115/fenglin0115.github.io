var currentStage = "cover";
params.ggbBase64 = ggb_G_12A_1_2_cover;
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

var initA1op1 = false;
var initA1op2 = false;
var initA1op5 = false;
var initA2op1 = false;
var initA2op2 = false;
var initA2op3 = false;

function showA1() {
	showLoading();
	$("#navbarDropdown").text("活動1");
	$("#navbarDropdown").val("活動1");
	$(".outlines").hide();
	$("#outlineA1").show();
	$(".title > span ").html("G-12甲-1(2) 活動1：橢圓的繪製與定義");
	params.id = "ggbApplet01";
	params.ggbBase64 = ggb_G_12A_1_2_A1_operation1;

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

	if (!initA1op1) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">在平面上到定點 ' +
				katex.renderToString("O", { throwOnError: false }) +
				" 的距離等於定長 " +
				katex.renderToString("r", { throwOnError: false }) +
				" 的點，其所形成的軌跡就是以定點 " +
				katex.renderToString("O", { throwOnError: false }) +
				" 為圓心，定長 " +
				katex.renderToString("r", { throwOnError: false }) +
				" 為半徑的圓。<br>而生活中有另一個跟圓很類似的圖形稱為橢圓，以下我們就來探討橢圓的繪製與性質。</div>",
		});
		$("#A1_operation1_link").click();
		initA1op1 = true;
	}
}

function showA2() {
	$("#load-wrapper").addClass("d-flex");
	$("#load-wrapper").show();
	$("#navbarDropdown").text("活動2");
	$("#navbarDropdown").val("活動2");
	$(".outlines").hide();
	$("#outlineA2").show();
	$(".title > span ").html("G-12A-1(2) 活動2：橢圓的標準式與圖形的關係");
	params.id = "ggbApplet02";
	params.ggbBase64 = ggb_G_12A_1_2_A2_operation1;

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

	if (!initA2op1) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">我們知道橢圓的定義為：平面上相異兩點 ' +
				katex.renderToString("F_1", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("2", { throwOnError: false }) +
				"，所有滿足" +
				katex.renderToString("PF_1+PF_2=2a", { throwOnError: false }) +
				" 的點 " +
				katex.renderToString("P", { throwOnError: false }) +
				" 所形成的軌跡圖形即為橢圓。接下來我們從定義來探討橢圓的標準式。</div>",
		});
		$("#A2_operation1_link").click();
		initA2op1 = true;
	}
}

//活動一實驗操作一
function A1_operation1() {
	currentStage = "A1_operation1";
	loadApplet("ggbApplet01_operation1", ggb_G_12A_1_2_A1_operation1);
}

function A1_operation1_link() {
	removeListener();
}

//活動一觀察記錄一
function A1_observation1() {
	currentStage = "A1_observation1";
	loadApplet("ggbApplet01_operation1", ggb_G_12A_1_2_A1_operation1);
}

function A1_observation1_link() {
	removeListener();
}

//活動一實驗操作二
function A1_operation2() {
	currentStage = "A1_operation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);

	if (!initA1op2) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">我們繪製圓常用的工具為圓規，工匠要繪製大範圍的圓，其原理跟圓規一樣。而繪製橢圓採用的橢圓規其步驟為：<br><strong>步驟1：</strong>在紙上標出相異兩點 ' +
				katex.renderToString("F_1", { throwOnError: false }) +
				" 和 " +
				katex.renderToString("F_2", { throwOnError: false }) +
				"。<br><strong>步驟2：</strong>取一條定長的細繩(長度大於" +
				katex.renderToString("F_1", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("F_2", { throwOnError: false }) +
				" 的距離)並將繩兩端分別固定在紙上 " +
				katex.renderToString("F_1", { throwOnError: false }) +
				"、" +
				katex.renderToString("F_2", { throwOnError: false }) +
				"兩點。<br><strong>步驟3：</strong>用筆尖把繩子拉緊，並且慢慢移動筆尖，繪製一條首尾相接的封閉曲線。<br>這樣的圖形就是橢圓，而為什麼這樣的圖形就是符合橢圓的定義，以下我們就來探索一下：</div>",
		});
		// $("#A1_operation2_link").click();
		initA1op2 = true;
	}
}

function A1_operation2_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 4);
}

//活動一觀察紀錄二
function A1_observation2() {
	currentStage = "A1_observation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_observation2_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 4);
}

//活動一問題探索一
function A1_investigation1() {
	currentStage = "A1_investigation1";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_investigation1_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 4);
}

//活動一實驗操作三
function A1_operation3() {
	currentStage = "A1_operation3";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_operation3_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 1);
}

//活動一觀察記錄三
function A1_observation3() {
	currentStage = "A1_observation3";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_observation3_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 1);
}

//活動一問題探索二
function A1_investigation2() {
	currentStage = "A1_investigation2";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
	var api = applet.getAppletObject();
	api.setValue("index", 2);
}

function A1_investigation2_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 1);
}

//活動一實驗操作四
function A1_operation4() {
	currentStage = "A1_operation4";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_operation4_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 2);
}

//活動一觀察記錄四
function A1_observation4() {
	currentStage = "A1_observation4";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_observation4_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 2);
	$("#A1_observation4_input1")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString(">", { throwOnError: false }));
	$("#A1_observation4_input1")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("=", { throwOnError: false }));
	$("#A1_observation4_input1")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("<", { throwOnError: false }));
	$("#A1_observation4_input2")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString(">", { throwOnError: false }));
	$("#A1_observation4_input2")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("=", { throwOnError: false }));
	$("#A1_observation4_input2")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("<", { throwOnError: false }));
}

//活動一實驗操作五
function A1_operation5() {
	currentStage = "A1_operation5";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);

	if (!initA1op5) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;"><strong>橢圓的定義</strong>：<br>設 ' +
				katex.renderToString("F_1", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("F_2", { throwOnError: false }) +
				" 為平面上的兩相異定點，且定值 " +
				katex.renderToString("2a", { throwOnError: false }) +
				" 滿足<br>" +
				katex.renderToString("2a> \\overline{F_1F_2}", {
					throwOnError: false,
				}) +
				"。平面上所有滿足" +
				katex.renderToString("\\overline{PF_1}+\\overline{PF_2}=2a", {
					throwOnError: false,
				}) +
				"  的點 " +
				katex.renderToString("P", { throwOnError: false }) +
				" 所形成的圖形稱為橢圓，而定點 " +
				katex.renderToString("F_1", { throwOnError: false }) +
				" 與 " +
				katex.renderToString("F_2", { throwOnError: false }) +
				" 稱為此橢圓的焦點。</div>",
		});
		// $("#A1_operation5_link").click();
		initA1op5 = true;
	}
}

function A1_operation5_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 3);
}

//活動一觀察記錄五
function A1_observation5() {
	currentStage = "A1_observation5";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_observation5_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 3);
}

//活動一問題探索三
function A1_investigation3() {
	currentStage = "A1_investigation3";
	loadApplet("ggbApplet01", ggb_G_12A_1_2_A1);
}

function A1_investigation3_link() {
	removeListener();
	var api = applet.getAppletObject();
	api.setValue("index", 3);
}

//活動二實驗操作一
function A2_operation1() {
	currentStage = "A2_operation1";
	loadApplet("ggbApplet02_operation1", ggb_G_12A_1_2_A2_operation1);
}

function A2_operation1_link() {
	removeListener();
}

//活動二觀察記錄一
function A2_observation1() {
	currentStage = "A2_observation1";
	loadApplet("ggbApplet02_operation1", ggb_G_12A_1_2_A2_operation1);
}

function A2_observation1_link() {
	removeListener();
}

//活動二實驗操作二
function A2_operation2() {
	currentStage = "A2_operation2";
	loadApplet("ggbApplet02_operation2", ggb_G_12A_1_2_A2_operation2);

	if (!initA2op2) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">圓心為原點，半徑為 ' +
				katex.renderToString("r", { throwOnError: false }) +
				" 的圓方程式 " +
				katex.renderToString("x^2+y^2=r^2", { throwOnError: false }) +
				"，可改記為" +
				katex.renderToString("\\dfrac{x^2}{r^2}+\\dfrac{y^2}{r^2}=1", {
					throwOnError: false,
				}) +
				"，如果我們將圓上的任意動點 " +
				katex.renderToString("C(x,y)", { throwOnError: false }) +
				"，分別將其對 " +
				katex.renderToString("x", { throwOnError: false }) +
				" 軸、" +
				katex.renderToString("y", { throwOnError: false }) +
				" 軸方向，縮小不同比例得到的新動點 " +
				katex.renderToString("P(x',y')", { throwOnError: false }) +
				"，則動點 " +
				katex.renderToString("P", { throwOnError: false }) +
				" 的軌跡是一個橢圓。</div>",
		});
		// $("#A2_operation2_link").click();
		initA2op2 = true;
	}
}

function A2_operation2_link() {
	removeListener();
}

//活動二觀察記錄二
function A2_observation2() {
	currentStage = "A2_observation2";
	loadApplet("ggbApplet02_operation2", ggb_G_12A_1_2_A2_operation2);
}

function A2_observation2_link() {
	removeListener();
	$("#A2_observation2_input1")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(0,0)", { throwOnError: false }));
	$("#A2_observation2_input1")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(3,0)", { throwOnError: false }));
	$("#A2_observation2_input1")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(-3,0)", { throwOnError: false }));
	$("#A2_observation2_input2")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(3,0)", { throwOnError: false }));
	$("#A2_observation2_input2")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-3,0)", { throwOnError: false }));
	$("#A2_observation2_input2")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,3)", { throwOnError: false }));
	$("#A2_observation2_input2")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-3)", { throwOnError: false }));
	$("#A2_observation2_input3")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(3,0)", { throwOnError: false }));
	$("#A2_observation2_input3")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-3,0)", { throwOnError: false }));
	$("#A2_observation2_input3")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,3)", { throwOnError: false }));
	$("#A2_observation2_input3")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-3)", { throwOnError: false }));
	$("#A2_observation2_input4")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(5,0)", { throwOnError: false }));
	$("#A2_observation2_input4")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-5,0)", { throwOnError: false }));
	$("#A2_observation2_input4")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,5)", { throwOnError: false }));
	$("#A2_observation2_input4")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-5)", { throwOnError: false }));
	$("#A2_observation2_input5")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(5,0)", { throwOnError: false }));
	$("#A2_observation2_input5")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-5,0)", { throwOnError: false }));
	$("#A2_observation2_input5")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,5)", { throwOnError: false }));
	$("#A2_observation2_input5")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-5)", { throwOnError: false }));
	$("#A2_observation2_input7")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(4,0)", { throwOnError: false }));
	$("#A2_observation2_input7")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-4,0)", { throwOnError: false }));
	$("#A2_observation2_input7")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,4)", { throwOnError: false }));
	$("#A2_observation2_input7")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-4)", { throwOnError: false }));
	$("#A2_observation2_input8")
		.next()
		.find("a")
		.eq(0)
		.html(katex.renderToString("(4,0)", { throwOnError: false }));
	$("#A2_observation2_input8")
		.next()
		.find("a")
		.eq(1)
		.html(katex.renderToString("(-4,0)", { throwOnError: false }));
	$("#A2_observation2_input8")
		.next()
		.find("a")
		.eq(2)
		.html(katex.renderToString("(0,4)", { throwOnError: false }));
	$("#A2_observation2_input8")
		.next()
		.find("a")
		.eq(3)
		.html(katex.renderToString("(0,-4)", { throwOnError: false }));
}

//活動二觀察記錄三
function A2_observation3() {
	currentStage = "A2_observation3";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_observation3_link() {
	removeListener();
	// $("#A2_observation3_input1")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(0,0)", { throwOnError: false }));
	// $("#A2_observation3_input1")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(0,4)", { throwOnError: false }));
	// $("#A2_observation3_input1")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(0,-4)", { throwOnError: false }));
	// $("#A2_observation3_input2")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(4,0)", { throwOnError: false }));
	// $("#A2_observation3_input2")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-4,0)", { throwOnError: false }));
	// $("#A2_observation3_input2")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(0,4)", { throwOnError: false }));
	// $("#A2_observation3_input2")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(0,-4)", { throwOnError: false }));
	// $("#A2_observation3_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(4,0)", { throwOnError: false }));
	// $("#A2_observation3_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-4,0)", { throwOnError: false }));
	// $("#A2_observation3_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(0,4)", { throwOnError: false }));
	// $("#A2_observation3_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(0,-4)", { throwOnError: false }));
	// $("#A2_observation3_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(0,5)", { throwOnError: false }));
	// $("#A2_observation3_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(0,-5)", { throwOnError: false }));
	// $("#A2_observation3_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(5,0)", { throwOnError: false }));
	// $("#A2_observation3_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(-5,0)", { throwOnError: false }));
	// $("#A2_observation3_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(0,5)", { throwOnError: false }));
	// $("#A2_observation3_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(0,-5)", { throwOnError: false }));
	// $("#A2_observation3_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(5,0)", { throwOnError: false }));
	// $("#A2_observation3_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(-5,0)", { throwOnError: false }));
	// $("#A2_observation3_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(0,3)", { throwOnError: false }));
	// $("#A2_observation3_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(0,-3)", { throwOnError: false }));
	// $("#A2_observation3_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(3,0)", { throwOnError: false }));
	// $("#A2_observation3_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(-3,0)", { throwOnError: false }));
	// $("#A2_observation3_input8")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(0,3)", { throwOnError: false }));
	// $("#A2_observation3_input8")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(0,-3)", { throwOnError: false }));
	// $("#A2_observation3_input8")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(3,0)", { throwOnError: false }));
	// $("#A2_observation3_input8")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(-3,0)", { throwOnError: false }));
}

//活動二問題探索一
function A2_investigation1() {
	currentStage = "A2_investigation1";
	loadApplet("ggbApplet02_operation1", ggb_G_12A_1_2_A2_operation1);
}

function A2_investigation1_link() {
	removeListener();
}

//活動二實驗操作三
function A2_operation3() {
	currentStage = "A2_operation3";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);

	if (!initA2op3) {
		Swal.fire({
			html:
				'<div style="text-align: left; font-size: 16px; line-height: 2;">我們將方程式 ' +
				katex.renderToString("\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1", {
					throwOnError: false,
				}) +
				" 或 " +
				katex.renderToString("\\dfrac{x^2}{b^2}+\\dfrac{y^2}{a^2}=1", {
					throwOnError: false,
				}) +
				" 統稱為橢圓的標準式。此時橢圓的兩焦點為 " +
				katex.renderToString("F(\\pm c,0)", { throwOnError: false }) +
				" 或 " +
				katex.renderToString("F(0,\\pm c)", { throwOnError: false }) +
				" ，長軸長為 " +
				katex.renderToString("2a(a>c>0)", { throwOnError: false }) +
				" ，短軸長為 " +
				katex.renderToString("2b", { throwOnError: false }) +
				" ，且透過活動一我們可以得到 " +
				katex.renderToString("a^2=b^2+c^2", { throwOnError: false }) +
				"  這樣的恆等式。</div>",
		});
		// $("#A2_operation2_link").click();
		initA2op3 = true;
	}
}

function A2_operation3_link() {
	removeListener();
}

//活動二觀察記錄四
function A2_observation4() {
	currentStage = "A2_observation4";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_observation4_link() {
	removeListener();
	// $("#A2_observation4_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(2,1)", { throwOnError: false }));
	// $("#A2_observation4_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(2,-1)", { throwOnError: false }));
	// $("#A2_observation4_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(-2,1)", { throwOnError: false }));
	// $("#A2_observation4_input3")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(-2,-1)", { throwOnError: false }));
	// $("#A2_observation4_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(5,-1)", { throwOnError: false }));
	// $("#A2_observation4_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-1,-1)", { throwOnError: false }));
	// $("#A2_observation4_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,2)", { throwOnError: false }));
	// $("#A2_observation4_input4")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-4)", { throwOnError: false }));
	// $("#A2_observation4_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(5,-1)", { throwOnError: false }));
	// $("#A2_observation4_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-1,-1)", { throwOnError: false }));
	// $("#A2_observation4_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,2)", { throwOnError: false }));
	// $("#A2_observation4_input5")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-4)", { throwOnError: false }));
	// $("#A2_observation4_input6")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(7,-1)", { throwOnError: false }));
	// $("#A2_observation4_input6")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-3,-1)", { throwOnError: false }));
	// $("#A2_observation4_input6")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,4)", { throwOnError: false }));
	// $("#A2_observation4_input6")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-6)", { throwOnError: false }));
	// $("#A2_observation4_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(7,-1)", { throwOnError: false }));
	// $("#A2_observation4_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-3,-1)", { throwOnError: false }));
	// $("#A2_observation4_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,4)", { throwOnError: false }));
	// $("#A2_observation4_input7")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-6)", { throwOnError: false }));
	// $("#A2_observation4_input9")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(6,-1)", { throwOnError: false }));
	// $("#A2_observation4_input9")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-2,-1)", { throwOnError: false }));
	// $("#A2_observation4_input9")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,3)", { throwOnError: false }));
	// $("#A2_observation4_input9")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-5)", { throwOnError: false }));
	// $("#A2_observation4_input10")
	// 	.next()
	// 	.find("a")
	// 	.eq(0)
	// 	.html(katex.renderToString("(6,-1)", { throwOnError: false }));
	// $("#A2_observation4_input10")
	// 	.next()
	// 	.find("a")
	// 	.eq(1)
	// 	.html(katex.renderToString("(-2,-1)", { throwOnError: false }));
	// $("#A2_observation4_input10")
	// 	.next()
	// 	.find("a")
	// 	.eq(2)
	// 	.html(katex.renderToString("(2,3)", { throwOnError: false }));
	// $("#A2_observation4_input10")
	// 	.next()
	// 	.find("a")
	// 	.eq(3)
	// 	.html(katex.renderToString("(2,-5)", { throwOnError: false }));
}

//活動二問題探索二
function A2_investigation2() {
	currentStage = "A2_investigation2";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_investigation2_link() {
	removeListener();
}

//活動二實驗操作四
function A2_operation4() {
	currentStage = "A2_operation4";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_operation4_link() {
	removeListener();
}

//活動二觀察記錄五
function A2_observation5() {
	currentStage = "A2_observation4";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_observation4_link() {
	removeListener();
}

//活動二問題探索三
function A2_investigation3() {
	currentStage = "A2_investigation3";
	loadApplet("ggbApplet02_operation3", ggb_G_12A_1_2_A2_operation3);
}

function A2_investigation3_link() {
	removeListener();
}

//流程控制
$(document).ready(function () {
	//活動一
	$("#A1_operation1_link").click(function () {
		A1_operation1();
	});
	$("#A1_operation1_next").click(function () {
		$("#A1_observation1_link").click();
	});

	$("#A1_observation1_link").click(function () {
		A1_observation1();
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
	$("#A1_observation2_next").click(function () {
		$("#A1_investigation1_link").click();
	});

	$("#A1_investigation1_link").click(function () {
		A1_investigation1();
	});
	$("#A1_investigation1_next").click(function () {
		$("#A1_operation3_link").click();
	});

	$("#A1_operation3_link").click(function () {
		A1_operation3();
	});
	$("#A1_operation3_next").click(function () {
		$("#A1_observation3_link").click();
	});

	$("#A1_observation3_link").click(function () {
		A1_observation3();
	});
	$("#A1_observation3_next").click(function () {
		$("#A1_investigation2_link").click();
	});

	$("#A1_investigation2_link").click(function () {
		A1_investigation2();
	});
	$("#A1_investigation2_next").click(function () {
		$("#A1_operation4_link").click();
	});

	$("#A1_operation4_link").click(function () {
		A1_operation4();
	});
	$("#A1_operation4_next").click(function () {
		$("#A1_observation4_link").click();
	});

	$("#A1_observation4_link").click(function () {
		A1_observation4();
	});
	$("#A1_observation4_next").click(function () {
		$("#A1_operation5_link").click();
	});

	$("#A1_operation5_link").click(function () {
		A1_operation5();
	});
	$("#A1_operation5_next").click(function () {
		$("#A1_observation5_link").click();
	});

	$("#A1_observation5_link").click(function () {
		A1_observation5();
	});
	$("#A1_observation5_next").click(function () {
		$("#A1_investigation3_link").click();
	});

	$("#A1_investigation3_link").click(function () {
		A1_investigation3();
	});
	$("#A1_investigation3_next").click(function () {
		showA2();
	});

	//活動二
	$("#A2_operation1_link").click(function () {
		A2_operation1();
	});
	$("#A2_operation1_next").click(function () {
		$("#A2_observation1_link").click();
	});

	$("#A2_observation1_link").click(function () {
		A2_observation1();
	});
	$("#A2_observation1_next").click(function () {
		$("#A2_investigation1_link").click();
	});

	$("#A2_investigation1_link").click(function () {
		A2_investigation1();
	});
	$("#A2_investigation1_next").click(function () {
		$("#A2_operation2_link").click();
	});

	$("#A2_operation2_link").click(function () {
		A2_operation2();
	});
	$("#A2_operation2_next").click(function () {
		$("#A2_observation2_link").click();
	});

	$("#A2_observation2_link").click(function () {
		A2_observation2();
	});
	$("#A2_observation2_next").click(function () {
		$("#A2_operation3_link").click();
	});

	$("#A2_operation3_link").click(function () {
		A2_operation3();
	});
	$("#A2_operation3_next").click(function () {
		$("#A2_observation3_link").click();
	});

	$("#A2_observation3_link").click(function () {
		A2_observation3();
	});
	$("#A2_observation3_next").click(function () {
		$("#A2_observation4_link").click();
	});

	$("#A2_observation4_link").click(function () {
		A2_observation4();
	});
	$("#A2_observation4_next").click(function () {
		$("#A2_investigation2_link").click();
	});

	$("#A2_investigation2_link").click(function () {
		A2_investigation2();
	});
	$("#A2_investigation2_next").click(function () {
		$("#A2_operation4_link").click();
	});

	$("#A2_operation4_link").click(function () {
		A2_operation4();
	});
	$("#A2_operation4_next").click(function () {
		$("#A2_observation5_link").click();
	});

	$("#A2_observation5_link").click(function () {
		A2_observation5();
	});
	$("#A2_observation5_next").click(function () {
		$("#A2_investigation3_link").click();
	});

	$("#A2_investigation3_link").click(function () {
		A2_investigation3();
	});
	$("#A2_investigation3_next").click(function () {
		// $("#A2_observation3_link").click();
	});

	// 以下處理next和confirm按鈕
	var section_list = [
		"A1_operation1",
		"A1_observation1",
		"A1_operation2",
		"A1_observation2",
		"A1_investigation1",
		"A1_operation3",
		"A1_observation3",
		"A1_investigation2",
		"A1_observation4",
		"A1_observation5",
		"A1_investigation3",
		// "A1_investigation5",

		"A2_operation1",
		"A2_observation1",
		"A2_investigation1",
		"A2_observation2",
		"A2_operation2",
		"A2_observation3",
		"A2_observation4",
		"A2_investigation2",
		"A2_operation4",
		"A2_observation5",
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
			if (!isNaN(data.α) && !isNaN(data.β)) {
				if (typeof data.button1 == "object")
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作1";
				testResult = true;
			}

			break;

		case "A1_observation1":
			if (usertextarea[0].value != "") {
				text = "恭喜完成觀察記錄1";
				testResult = true;
			} else {
				text = "請寫下你的觀察！";
			}

			break;

		case "A1_operation2":
			if (
				!isNaN(data.circle1_n) &&
				!isNaN(data.circle2_n) &&
				!isNaN(data.C4)
			) {
				activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作2";
				testResult = true;
			}

			break;

		case "A1_observation2":
			if (
				(userdropdown[0].value == "1") &
				(userdropdown[1].value == "3") &
				(userdropdown[2].value == "2") &
				(userdropdown[3].value == "4") &
				(userdropdown[4].value == "0") &
				(userdropdown[5].value == "3") &
				(userdropdown[6].value == "1") &
				(userdropdown[7].value == "2") &
				(userdropdown[8].value == "0") &
				(userdropdown[9].value == "4") &
				(userdropdown[10].value == "4") &
				(userdropdown[11].value == "4") &
				(userdropdown[12].value == "4") &
				(userdropdown[13].value == "4") &
				(userdropdown[14].value == "4")
			) {
				text = "恭喜完成觀察記錄2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}

			break;

		case "A1_investigation1":
			if (userinput[0].checked & userinput[4].checked) {
				text = "恭喜完成問題探索1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}

			break;

		case "A1_operation3":
			if (typeof data.PP == "object") {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}

				if (activity[id].time.getTime() + 3000 > new Date().getTime())
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作3";
				testResult = true;
			}
			break;
		case "A1_observation3":
			if ((userinput[0].value == "10") & userinput[1].checked) {
				text = "恭喜完成觀察記錄3";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了！";
			}
			break;

		case "A1_investigation2":
			if (
				userinput[0].checked &
				userinput[2].checked &
				userinput[4].checked
			) {
				text = "恭喜完成問題探索2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A1_operation4":
			if (data.F_2[0] == -4 && data.F_2[1] == 0 && !isNaN(data.v)) {
				activity[id]["complete"] = true;
			}
			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作4";
				testResult = true;
			}
			break;

		case "A1_observation4":
			if (
				(userdropdown[0].value == "1") &
				(userdropdown[1].value == "1") &
				(userinput[0].value != "")
			) {
				if (
					userinput[0].value.indexOf("圓") != -1 ||
					userinput[0].value.indexOf("ircle") != -1
				) {
					text = "恭喜完成觀察記錄4";
					testResult = true;
				}
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A1_operation5":
			if (
				!isNaN(data.ft) &&
				!isNaN(data.l) &&
				!isNaN(data.o) &&
				!isNaN(data.p)
			) {
				activity[id]["complete"] = true;
			}
			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作5";
				testResult = true;
			}
			break;

		case "A1_observation5":
			if (
				(userinput[0].value == "8") &
				(userinput[1].value == "10") &
				(userinput[2].value == "6") &
				userinput[3].checked &
				userinput[5].checked &
				userinput[7].checked
			) {
				text = "恭喜完成觀察記錄5";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A1_investigation3":
			if (
				userinput[1].checked &
				userinput[4].checked &
				userinput[6].checked
			) {
				text = "恭喜完成問題探索3";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation1":
			if (typeof data.P == "object") {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}

				if (activity[id].time.getTime() + 3000 > new Date().getTime())
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作1";
				testResult = true;
			}
			break;

		case "A2_observation1":
			if (
				userinput[0].checked &
				userinput[7].checked &
				userinput[8].checked
			) {
				text = "恭喜完成觀察記錄1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation1":
			if (
				userinput[3].checked &
				userinput[5].checked &
				userinput[10].checked &
				userinput[15].checked
			) {
				text = "恭喜完成問題探索1";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation2":
			if (!isNaN(data.a) & !isNaN(data.b) & !isNaN(data.e)) {
				if (!activity[id].time) {
					activity[id].time = new Date();
					break;
				}

				if (activity[id].time.getTime() + 3000 > new Date().getTime())
					activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作2";
				testResult = true;
			}
			break;

		case "A2_observation2":
			if (
				!userinput[0].checked &
				userinput[1].checked &
				userinput[2].checked &
				!userinput[3].checked &
				userinput[4].checked &
				userinput[7].checked &
				!userinput[9].checked &
				userinput[10].checked &
				userinput[11].checked &
				!userinput[12].checked &
				userinput[14].checked &
				userinput[17].checked &
				userinput[20].checked
			) {
				text = "恭喜完成觀察記錄2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation3":
			if (data.n == "9") {
				activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作3";
				testResult = true;
			}
			break;

		case "A2_observation3":
			if (
				(userdropdown[0].value == "0") &
				((userdropdown[1].value == "0") &
					(userdropdown[2].value == "1") ||
					(userdropdown[1].value == "1") &
						(userdropdown[2].value == "0")) &
				((userdropdown[3].value == "2") &
					(userdropdown[4].value == "3") ||
					(userdropdown[3].value == "3") &
						(userdropdown[4].value == "2")) &
				(userinput[0].value == "10") &
				((userdropdown[5].value == "0") &
					(userdropdown[6].value == "1") ||
					(userdropdown[5].value == "1") &
						(userdropdown[6].value == "0")) &
				(userinput[1].value == "8") &
				(userdropdown[7].value == "4")
			) {
				text = "恭喜完成觀察記錄3";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;
		case "A2_observation4":
			if (
				(userdropdown[0].value == "0") &
				((userdropdown[1].value == "2") &
					(userdropdown[2].value == "3") ||
					(userdropdown[1].value == "3") &
						(userdropdown[2].value == "2")) &
				((userdropdown[3].value == "0") &
					(userdropdown[4].value == "1") ||
					(userdropdown[3].value == "1") &
						(userdropdown[4].value == "0")) &
				(userinput[0].value == "10") &
				((userdropdown[5].value == "2") &
					(userdropdown[6].value == "3") ||
					(userdropdown[5].value == "3") &
						(userdropdown[6].value == "2")) &
				(userinput[1].value == "6") &
				(userdropdown[7].value == "3")
			) {
				text = "恭喜完成觀察記錄4";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation2":
			if (
				userinput[0].checked &
				!userinput[1].checked &
				!userinput[2].checked &
				userinput[3].checked &
				!userinput[4].checked &
				userinput[5].checked &
				userinput[6].checked &
				!userinput[7].checked &
				!userinput[8].checked &
				userinput[9].checked &
				userinput[10].checked &
				!userinput[11].checked &
				userinput[12].checked &
				!userinput[13].checked &
				!userinput[14].checked &
				userinput[15].checked &
				userinput[16].checked
			) {
				text = "恭喜完成問題探索2";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_operation4":
			if (
				(typeof data.button1 == "object") &
				(typeof data.button2 == "object") &
				(typeof data.button3 == "object") &
				(typeof data.button4 == "object") &
				(typeof data.button5 == "object")
			) {
				activity[id]["complete"] = true;
			}

			if (activity[id]["complete"] == true) {
				text = "恭喜完成實驗操作4";
				testResult = true;
			}
			break;

		case "A2_observation5":
			if (
				!userinput[0].checked &
				userinput[1].checked &
				userinput[2].checked &
				!userinput[3].checked &
				(userdropdown[0].value == "1") &
				((userdropdown[1].value == "0") &
					(userdropdown[2].value == "1") ||
					(userdropdown[1].value == "1") &
						(userdropdown[2].value == "0")) &
				((userdropdown[3].value == "0") &
					(userdropdown[4].value == "1") ||
					(userdropdown[3].value == "1") &
						(userdropdown[4].value == "0")) &
				(userinput[4].value == "10") &
				((userdropdown[5].value == "2") &
					(userdropdown[6].value == "3") ||
					(userdropdown[5].value == "3") &
						(userdropdown[6].value == "2")) &
				(userinput[5].value == "8") &
				(userdropdown[7].value == "4")
			) {
				text = "恭喜完成觀察記錄4";
				testResult = true;
			} else {
				text = "答案不對喔! 請再想想看哪裡做錯了";
			}
			break;

		case "A2_investigation3":
			if (
				userinput[0].checked &
				!userinput[1].checked &
				!userinput[2].checked &
				userinput[3].checked &
				userinput[4].checked &
				userinput[7].checked ) {
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
