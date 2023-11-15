var currentStage = "cover";
params.ggbBase64 = ggb_D_12A_1_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    let api = applet.getAppletObject();
    api.unregisterObjectClickListener("buttonRoll10");
    api.unregisterObjectClickListener("buttonRoll1000");
    api.unregisterObjectClickListener("buttonReset");
    api.unregisterObjectClickListener("buttonRandom");
    api.unregisterObjectClickListener("buttonRandomDiceSet");
    api.unregisterObjectUpdateListener("numThrows");
    api.unregisterObjectUpdateListener("checkDrag");
    api.unregisterObjectUpdateListener("stepMean1");
    api.unregisterObjectUpdateListener("stepMean2");
    api.unregisterObjectUpdateListener("stepVar1");
    api.unregisterObjectUpdateListener("stepVar2");
    api.unregisterObjectUpdateListener("showDiceSet");
}
var initA1 = false;
var initA2 = false;
var A2_investigation1_init = false;
var A1_operation3_clickedRandom = false;
var A1_observation4_indexRecord = 1;
var listNumRoll= [10, 50, 100, 500, 1000];
var listA1Obs1Record = [false, false, false, false, false];
var listA1Obs3Record = [false, false, false, false, false];
var listA1Obs4Record = [false, false, false];
var listA2Obs3Record = [false, false, false, false, false];
var listA2Inv4Record = [false, false, false];

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", prereguisite);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
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

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S02</dt><dd>能認識離散型隨機變數，並理解其機率分布的意義。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>。</dd><dt>活動二</dt><dd>。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S03</dt><dd>能理解離散型隨機變數的期望值之意義</dd><dt>S04</dt><dd>能理解離散型隨機變數的變異數與標準差之意義。</dd></dl>',
            heightAuto: false
        });
    };
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-12甲-1(1) 活動1：探討隨機變數期望值的意涵");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_12A_1_1_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("D-12甲-1(1) 活動2：探討隨機變數變異數的意涵");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_D_12A_1_1_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_operation1_link() {
    removeListener();
    if (!initA1) {
        Swal.fire({html: '<div style="text-align:left;">現在有一個特殊的六面骰子，六個面的數字皆分別為 1 ~ 6 的整數，數字可重複。現在，試著擲骰子，透過實驗數據來推測骰子的樣貌吧！</div>'}); 
        initA1 = true;
    };
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectClickListener("buttonRoll10", A1_operation1_preCheck);
}

function A1_operation1_preCheck() {
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("numThrows", A1_operation1_check);
}
function A1_operation1_check() {
    let api =applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    if (numThrows == 10) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
            // A1_observation1_record();
        })
        removeListener();
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_observation1_link() {
    removeListener();
    A1_observation1_hideAllIcon();
    A1_observation1_showIcon();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectUpdateListener("numThrows", A1_observation1_showIcon);
}
function A1_observation1_hideAllIcon() {
    $("#A1_observation1_icon1").hide();
    $("#A1_observation1_icon2").hide();
    $("#A1_observation1_icon3").hide();
    $("#A1_observation1_icon4").hide();
    $("#A1_observation1_icon5").hide();
}
// listNumRoll= [10, 50, 100, 500, 1000];
// listA1Obs1Record = [false, false, false, false, false];
function A1_observation1_showIcon() {
    let api = applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numThrows == numRoll) {
        let indexObs = listNumRoll.indexOf(numRoll)+1;
        $("#A1_observation1_icon"+indexObs).show();
        $("#A1_observation1_icon"+indexObs).click(A1_observation1_record);
    }
}
function A1_observation1_record() {
    A1_observation1_hideAllIcon();
    let api = applet.getAppletObject();
    let numRoll = api.getValue("numRoll");
    let indexObs = listNumRoll.indexOf(numRoll)+1;
    let resultR1 = numRound(api.getListValue("listResultR", 1), 2);
    let resultR2 = numRound(api.getListValue("listResultR", 2), 2);
    let resultR3 = numRound(api.getListValue("listResultR", 3), 2);
    let resultR4 = numRound(api.getListValue("listResultR", 4), 2);
    let resultR5 = numRound(api.getListValue("listResultR", 5), 2);
    let resultR6 = numRound(api.getListValue("listResultR", 6), 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: '投擲 ' + numRoll + ' 次的相對次數已記錄！'}).then((result) => {
        $("#A1_observation1_record" + indexObs + "_1").html(katex.renderToString(""+ resultR1, { throwOnError: false }));
        $("#A1_observation1_record" + indexObs + "_2").html(katex.renderToString(""+ resultR2, { throwOnError: false }));
        $("#A1_observation1_record" + indexObs + "_3").html(katex.renderToString(""+ resultR3, { throwOnError: false }));
        $("#A1_observation1_record" + indexObs + "_4").html(katex.renderToString(""+ resultR4, { throwOnError: false }));
        $("#A1_observation1_record" + indexObs + "_5").html(katex.renderToString(""+ resultR5, { throwOnError: false }));
        $("#A1_observation1_record" + indexObs + "_6").html(katex.renderToString(""+ resultR6, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_1").html(katex.renderToString(""+ resultR1, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_2").html(katex.renderToString(""+ resultR2, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_3").html(katex.renderToString(""+ resultR3, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_4").html(katex.renderToString(""+ resultR4, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_5").html(katex.renderToString(""+ resultR5, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs + "_6").html(katex.renderToString(""+ resultR6, { throwOnError: false }));
    })
    listA1Obs1Record[indexObs-1] = true;
}

function A1_observation1_check() {
    // let api = applet.getAppletObject();
    if (listA1Obs1Record.equals([true, true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_investigation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation1_check() {
    let A1_investigation1_input1_usrans1 = $("#A1_investigation1_input1_option1").prop("checked");
    let A1_investigation1_input1_usrans2 = $("#A1_investigation1_input1_option2").prop("checked");
    let A1_investigation1_input1_usrans3 = $("#A1_investigation1_input1_option3").prop("checked");
    let A1_investigation1_input1_usrans4 = $("#A1_investigation1_input1_option4").prop("checked");
    let A1_investigation1_input1_usrans5 = $("#A1_investigation1_input1_option5").prop("checked");
    let A1_investigation1_input1_usrans6 = $("#A1_investigation1_input1_option6").prop("checked");
    let A1_investigation1_input2_1_usrans = $("#A1_investigation1_input2_1").val();
    let A1_investigation1_input2_2_usrans = $("#A1_investigation1_input2_2").val();
    let A1_investigation1_input2_3_usrans = $("#A1_investigation1_input2_3").val();
    let A1_investigation1_input2_4_usrans = $("#A1_investigation1_input2_4").val();
    let A1_investigation1_input2_5_usrans = $("#A1_investigation1_input2_5").val();
    let A1_investigation1_input2_6_usrans = $("#A1_investigation1_input2_6").val();
    // console.log(A1_investigation1_input2_1_usrans);
    if( A1_investigation1_input1_usrans1 == false &&
        A1_investigation1_input1_usrans2 == false &&
        A1_investigation1_input1_usrans3 == false &&
        A1_investigation1_input1_usrans4 == true &&
        A1_investigation1_input1_usrans5 == true &&
        A1_investigation1_input1_usrans6 == true &&
        A1_investigation1_input2_1_usrans != "" &&
        A1_investigation1_input2_2_usrans != "" &&
        A1_investigation1_input2_3_usrans != "" &&
        A1_investigation1_input2_4_usrans != "" &&
        A1_investigation1_input2_5_usrans != "" &&
        A1_investigation1_input2_6_usrans != "" 
        ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_explain").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
            $("#A1_operation2_input2_1_usrans").html(katex.renderToString(""+ A1_investigation1_input2_1_usrans), { throwOnError: false });
            $("#A1_operation2_input2_2_usrans").html(katex.renderToString(""+ A1_investigation1_input2_2_usrans), { throwOnError: false });
            $("#A1_operation2_input2_3_usrans").html(katex.renderToString(""+ A1_investigation1_input2_3_usrans), { throwOnError: false });
            $("#A1_operation2_input2_4_usrans").html(katex.renderToString(""+ A1_investigation1_input2_4_usrans), { throwOnError: false });
            $("#A1_operation2_input2_5_usrans").html(katex.renderToString(""+ A1_investigation1_input2_5_usrans), { throwOnError: false });
            $("#A1_operation2_input2_6_usrans").html(katex.renderToString(""+ A1_investigation1_input2_6_usrans), { throwOnError: false });
        })
        removeListener();
    } else if (
        A1_investigation1_input1_usrans1 != false ||
        A1_investigation1_input1_usrans2 != false ||
        A1_investigation1_input1_usrans3 != false ||
        A1_investigation1_input1_usrans4 != true ||
        A1_investigation1_input1_usrans5 != true ||
        A1_investigation1_input1_usrans6 != true ){
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再仔細觀察投擲結果圖表！'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再仔細檢查第 2 題是否有填寫完整！'})
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
    api.registerObjectUpdateListener("showDiceSet", A1_operation2_check);

}

function A1_operation2_check() {
    let api =applet.getAppletObject();
    let showDiceSet = api.getValue("showDiceSet");
    if (showDiceSet) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_observation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation2_check() {
    // let api = applet.getAppletObject();
    let A1_observation2_input1_1_usrans = $('#A1_observation2_input1_1').val();
    let A1_observation2_input1_2_usrans = $('#A1_observation2_input1_2').val();
    let A1_observation2_input1_3_usrans = $('#A1_observation2_input1_3').val();
    let A1_observation2_input1_4_usrans = $('#A1_observation2_input1_4').val();
    let A1_observation2_input1_5_usrans = $('#A1_observation2_input1_5').val();
    let A1_observation2_input1_6_usrans = $('#A1_observation2_input1_6').val();
    let A1_observation2_input2_usrans = $('#A1_observation2_input2').val();
    if (A1_observation2_input1_1_usrans == 1 && 
        A1_observation2_input1_2_usrans == 2 &&
        A1_observation2_input1_3_usrans == 3 &&
        A1_observation2_input1_4_usrans == 0 &&
        A1_observation2_input1_5_usrans == 0 &&
        A1_observation2_input1_6_usrans == 0 &&
        A1_observation2_input2_usrans == 14  ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
        removeListener();
    } else if (A1_observation2_input2_usrans != 14) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '期望值算錯囉！再試試看！'});
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_investigation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 3){api.setValue("mode", 3)};
}

function A1_investigation2_check() {
    let A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    let A1_investigation2_input2_usrans = $("#A1_investigation2_input2").val();
    // console.log(A1_investigation2_input1_usrans);
    if (typeof(A1_investigation2_input1_usrans) != "undefined" && 
        A1_investigation2_input2_usrans != ""  ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '記得回答問題並寫下想法喔！'})
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}
function A1_observation3_link() {
    removeListener();
    A1_observation3_hideAllIcon();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 3){api.setValue("mode", 3)};
    api.registerObjectClickListener("buttonReset", A1_observation3_preCheck);
}
function A1_observation3_preCheck() {
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("numThrows", A1_observation3_showIcon);
}
function A1_observation3_hideAllIcon() {
    $("#A1_observation3_icon1").hide();
    $("#A1_observation3_icon2").hide();
    $("#A1_observation3_icon3").hide();
    $("#A1_observation3_icon4").hide();
    $("#A1_observation3_icon5").hide();
}
// listNumRoll= [10, 50, 100, 500, 1000];
// listA1Obs3Record = [false, false, false, false, false];
function A1_observation3_showIcon() {
    let api = applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numThrows == numRoll) {
        let indexObs = listNumRoll.indexOf(numRoll)+1;
        $("#A1_observation3_icon"+indexObs).show();
        $("#A1_observation3_icon"+indexObs).click(A1_observation3_record);
    }
}
function A1_observation3_record() {
    A1_observation3_hideAllIcon();
    let api = applet.getAppletObject();
    let numRoll = api.getValue("numRoll");
    let expY = numRound(api.getValue("expY"), 2);
    let indexObs = listNumRoll.indexOf(numRoll)+1;
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: '投擲 ' + numRoll + ' 次的點數期望值已記錄！'}).then((result) => {
        $("#A1_observation3_record" + indexObs).html(katex.renderToString(""+ expY, { throwOnError: false }));
        $("#A1_investigation3_record" + indexObs).html(katex.renderToString(""+ expY, { throwOnError: false }));
    })
    listA1Obs3Record[indexObs-1] = true;
}

function A1_observation3_check() {
    // let api = applet.getAppletObject();
    if (listA1Obs3Record.equals([true, true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_investigation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 3){api.setValue("mode", 3)};
}

function A1_investigation3_check() {
    let A1_investigation3_input1_usrans = $('input[name=A1_investigation3_input1]:checked').val();
    let A1_investigation3_input2_usrans = $('#A1_investigation3_input2').val();
    if (A1_investigation3_input1_usrans == 1 &&
        A1_investigation3_input2_usrans != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A1_investigation3_confirm").hide();
            $("#A1_investigation3_done").css({"opacity": "1"});
            $("#A1_investigation3_next").removeClass("d-none");
            $("#A1_investigation3_link img").css({"opacity": "1"});
        })
        removeListener();
    } else if (A1_investigation3_input1_usrans != 1) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '投擲次數越多時，'+katex.renderToString("E(Y)", { throwOnError: false })+' 與 '+katex.renderToString("E(X)", { throwOnError: false })+' 的值是接近？還是相差很大？'})
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '記得寫下想法喔！'})
    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}
// A1_operation3_clickedRandom = false;
function A1_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 4){api.setValue("mode", 4)};
    api.setValue("showButtonDiceSet", false);
    api.setValue("showDiceSet", false);
    api.registerObjectClickListener("buttonRandomDiceSet", () => {A1_operation3_clickedRandom = true;});
    api.registerObjectClickListener("buttonRoll1000", A1_operation3_preCheck);
}
function A1_operation3_preCheck() {
    let api = applet.getAppletObject();
    if (A1_operation3_clickedRandom) {
        api.registerObjectUpdateListener("numThrows", A1_operation3_check);
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '記得按下「隨機配置點數」按鈕喔！'})
    }
}
function A1_operation3_check() {
    let api =applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numRoll == 1000 && numThrows == numRoll) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_observation4_link() {
    removeListener();
    A1_observation4_hideAllIcon();
    A1_observation4_showIcon();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 4){api.setValue("mode", 4)};
    api.setValue("showButtonDiceSet", false);
    api.setValue("showDiceSet", false);
    api.registerObjectUpdateListener("numThrows", A1_observation4_showIcon);
}
function A1_observation4_hideAllIcon() {
    $("#A1_observation4_icon1").hide();
    $("#A1_observation4_icon2").hide();
    $("#A1_observation4_icon3").hide();
}
// A1_observation4_indexRecord = 1;
// listA1Obs4Record = [false, false, false];
function A1_observation4_showIcon() {
    let api = applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numRoll == 1000 && numThrows == numRoll) {
        $("#A1_observation4_icon"+A1_observation4_indexRecord).show();
        $("#A1_observation4_icon"+A1_observation4_indexRecord).click(A1_observation4_record);
    }
}
function A1_observation4_record() {
    A1_observation4_hideAllIcon();
    let api = applet.getAppletObject();
    let expY = numRound(api.getValue("expY"), 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: '試驗 ' + A1_observation4_indexRecord + ' 的出現點數期望值已記錄！'}).then((result) => {
        $("#A1_observation4_record" + A1_observation4_indexRecord).html(katex.renderToString(""+ expY, { throwOnError: false }));
        $("#A1_investigation4_record" + A1_observation4_indexRecord).html(katex.renderToString(""+ expY, { throwOnError: false }));
        A1_observation4_indexRecord = A1_observation4_indexRecord + 1;
    })
    listA1Obs4Record[A1_observation4_indexRecord-1] = true;
}
function A1_observation4_check() {
    let api = applet.getAppletObject();
    let expX = numRound(api.getValue("expX"), 2);
    if (listA1Obs4Record.equals([true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A1_observation4_confirm").hide();
            $("#A1_observation4_done").css({"opacity": "1"});
            $("#A1_observation4_next").removeClass("d-none");
            $("#A1_observation4_link img").css({"opacity": "1"});
            $("#A1_investigation4_input1_option1").next().html(katex.renderToString("" + (expX-1), { throwOnError: false }));
            $("#A1_investigation4_input1_option2").next().html(katex.renderToString("" + (expX), { throwOnError: false }));
            $("#A1_investigation4_input1_option3").next().html(katex.renderToString("" + (expX+1), { throwOnError: false }));
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A1_investigation4() {
    currentStage = "A1_investigation4";
    loadApplet("ggbApplet01", ggb_D_12A_1_1_A1);
}

function A1_investigation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 4){api.setValue("mode", 4)};
    api.setValue("showButtonDiceSet", true);
    api.setValue("showDiceSet", false);
}

function A1_investigation4_check() {
    let A1_investigation4_input1_usrans = $('input[name=A1_investigation4_input1]:checked').val();
    if( A1_investigation4_input1_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4'}).then((result) => {
            $("#A1_investigation4_confirm").hide();
            $("#A1_investigation4_done").css({"opacity": "1"});
            $("#A1_investigation4_next").removeClass("d-none");
            $("#A1_investigation4_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請再仔細觀察數據！'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02_1", ggb_D_12A_1_1_A2_1);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectUpdateListener("checkDrag", A2_operation1_check);
}

function A2_operation1_check() {
    let api =applet.getAppletObject();
    let checkDrag = api.getValue("checkDrag");
    if (checkDrag) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A2_operation1_done").css({"opacity": "1"});
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02_1pic", ggb_D_12A_1_1_A2_1pic);
}

function A2_investigation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1 && !A2_investigation1_init){api.setValue("mode", 1)};
    if(api.getValue("mode") != 2 && A2_investigation1_init){api.setValue("mode", 2)};
    $("#A2_investigation1_preConfirm").click(A2_investigation1_preCheck);
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation1_preCheck() {
    let api = applet.getAppletObject();
    let A2_investigation1_input1_1_usrans = $('#A2_investigation1_input1_1').val();
    let A2_investigation1_input1_2_usrans = $('#A2_investigation1_input1_2').val();
    let A2_investigation1_input1_3_usrans = $('#A2_investigation1_input1_3').val();
    console.log(A2_investigation1_input1_1_usrans);
    if( A2_investigation1_input1_1_usrans == 3 &&
        A2_investigation1_input1_2_usrans == 3 &&
        A2_investigation1_input1_3_usrans == 3 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '答對了！'}).then((result) => {
            $("#A2_investigation1_preConfirm").addClass("d-none");
            $("#A2_investigation1_confirm").removeClass("d-none");
            $("#A2_investigation1_li2").removeClass("d-none");
            $("#A2_investigation1_li3").removeClass("d-none");
            $("#A2_investigation1_input1_1").attr("disabled", "readonly");
            $("#A2_investigation1_input1_2").attr("disabled", "readonly");
            $("#A2_investigation1_input1_3").attr("disabled", "readonly");
            api.setValue("mode", 2);
            removeListener();
            A2_investigation1_init = true;
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細計算後再回答'})
    }
}
function A2_investigation1_check() {
    let A2_investigation1_input2_usrans = $('#A2_investigation1_input2').val();
    let A2_investigation1_input3_usrans = $('#A2_investigation1_input3').val();
    if( A2_investigation1_input2_usrans == 1 &&
        A2_investigation1_input3_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_explain").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察長條圖後再回答'})
    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_operation2_link() {
    removeListener();
    if (!initA2) {
        Swal.fire({html: '<div style="text-align:left;">接下來我們以 1 號骰子為例，來看看統計學家如何用數字表示隨機變數的「離散程度」。</div>'}); 
        initA2 = true;
    };
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectUpdateListener("stepMean1", A2_operation2_check);
}

function A2_operation2_check() {
    let api = applet.getAppletObject();
    let stepMean1 = api.getValue("stepMean1");
    if (stepMean1 == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A2_operation2_done").css({"opacity": "1"});
            $("#A2_operation2_next").removeClass("d-none");
            $("#A2_operation2_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_observation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
}

function A2_observation1_check() {
    // let api = applet.getAppletObject();
    let A2_observation1_input1_usrans = $('#A2_observation1_input1').val();
    if (A2_observation1_input1_usrans == 3 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
            $("#A2_investigation2_result1").html(A2_observation1_input1_usrans);
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察後再試著回答！'})
    }
}

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
    api.registerObjectUpdateListener("stepMean2", A2_operation3_check);
}

function A2_operation3_check() {
    let api = applet.getAppletObject();
    let stepMean2 = api.getValue("stepMean2");
    if (stepMean2 == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A2_operation3_done").css({"opacity": "1"});
            $("#A2_operation3_next").removeClass("d-none");
            $("#A2_operation3_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_observation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
}

function A2_observation2_check() {
    // let api = applet.getAppletObject();
    let A2_observation2_input1_usrans = $('#A2_observation2_input1').val();
    if (A2_observation2_input1_usrans == 3 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
            $("#A2_investigation2_result2").html(A2_observation2_input1_usrans);
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_investigation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
}

function A2_investigation2_check() {
    let A2_investigation2_input1_usrans = $('input[name=A2_investigation2_input1]:checked').val();
    let A2_investigation2_input2_usrans = $('input[name=A2_investigation2_input2]:checked').val();
    if( A2_investigation2_input1_usrans == 1 &&
        A2_investigation2_input2_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_explain").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
        removeListener();
    } else if (
        A2_investigation2_input1_usrans != 1 ) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '結果真的不相等嗎？'})
    }else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細觀察兩種算法！'})
    }
}

function A2_operation4() {
    currentStage = "A2_operation4";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_operation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 3){api.setValue("mode", 3)};
    api.registerObjectUpdateListener("stepVar1", A2_operation4_check);
}

function A2_operation4_check() {
    let api = applet.getAppletObject();
    let stepVar1 = api.getValue("stepVar1");
    if (stepVar1 == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
            $("#A2_operation4_done").css({"opacity": "1"});
            $("#A2_operation4_next").removeClass("d-none");
            $("#A2_operation4_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_operation5() {
    currentStage = "A2_operation5";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
}

function A2_operation5_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 4){api.setValue("mode", 4)};
    api.registerObjectUpdateListener("stepVar2", A2_operation5_check);
}

function A2_operation5_check() {
    let api = applet.getAppletObject();
    let stepVar2 = api.getValue("stepVar2");
    if (stepVar2 == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作5'}).then((result) => {
            $("#A2_operation5_done").css({"opacity": "1"});
            $("#A2_operation5_next").removeClass("d-none");
            $("#A2_operation5_link img").css({"opacity": "1"});
            $("#A2_operation5_explanation").removeClass("d-none");
        })
        removeListener();
    }
}

function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02_1pic", ggb_D_12A_1_1_A2_1pic);
}

function A2_investigation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation3_check() {
    let A2_investigation3_input1_1_usrans = $('#A2_investigation3_input1_1').val();
    let A2_investigation3_input1_2_usrans = $('#A2_investigation3_input1_2').val();
    let A2_investigation3_input1_3_usrans = $('#A2_investigation3_input1_3').val();
    let A2_investigation3_input1_4_usrans = $('#A2_investigation3_input1_4').val();
    let A2_investigation3_input2_1_usrans = $('#A2_investigation3_input2_1').val();
    let A2_investigation3_input2_2_usrans = $('#A2_investigation3_input2_2').val();
    let A2_investigation3_input2_3_usrans = $('#A2_investigation3_input2_3').val();
    let A2_investigation3_input3_usrans = $('#A2_investigation3_input3').val();
    if( A2_investigation3_input1_1_usrans == 2 &&
        A2_investigation3_input1_2_usrans == 0 &&
        A2_investigation3_input1_3_usrans == 1 &&
        A2_investigation3_input1_4_usrans != "" &&
        A2_investigation3_input2_1_usrans == 1 &&
        A2_investigation3_input2_2_usrans == 0 &&
        A2_investigation3_input2_3_usrans == 2 &&
        A2_investigation3_input3_usrans != "" ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_done").css({"opacity": "1"});
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({"opacity": "1"});
        })
        removeListener();
    } else if (
        A2_investigation3_input1_1_usrans != 2 ||
        A2_investigation3_input1_2_usrans != 0 ||
        A2_investigation3_input1_3_usrans != 1 
        ) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察圖形後再回答'})
    } else if (
        A2_investigation3_input2_1_usrans != 1 ||
        A2_investigation3_input2_2_usrans != 0 ||
        A2_investigation3_input2_3_usrans != 2
    ) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 再檢查一下自己的算式'})
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請試著寫下自己的想法喔!'})
    }
}

function A2_operation6() {
    currentStage = "A2_operation6";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
}

function A2_operation6_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectClickListener("buttonRandom", A2_operation6_preCheck);
}

function A2_operation6_preCheck() {
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("numThrows", A2_operation6_check);
}
function A2_operation6_check() {
    let api = applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numRoll == 10 && numThrows == numRoll) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作6'}).then((result) => {
            $("#A2_operation6_done").css({"opacity": "1"});
            $("#A2_operation6_next").removeClass("d-none");
            $("#A2_operation6_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
}

function A2_observation3_link() {
    removeListener();
    A2_observation3_hideAllIcon();
    A2_observation3_showIcon();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 1){api.setValue("mode", 1)};
    api.registerObjectUpdateListener("numThrows", A2_observation3_showIcon);
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A2_observation3_hideAllIcon() {
    $("#A2_observation3_icon1").hide();
    $("#A2_observation3_icon2").hide();
    $("#A2_observation3_icon3").hide();
    $("#A2_observation3_icon4").hide();
    $("#A2_observation3_icon5").hide();
}
// listNumRoll= [10, 50, 100, 500, 1000];
// listA2Obs3Record = [false, false, false, false, false];
function A2_observation3_showIcon() {
    let api = applet.getAppletObject();
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numThrows == numRoll) {
        let indexObs = listNumRoll.indexOf(numRoll)+1;
        $("#A2_observation3_icon"+indexObs).show();
        $("#A2_observation3_icon"+indexObs).click(A2_observation3_record);
    }
}
function A2_observation3_record() {
    A2_observation3_hideAllIcon();
    let api = applet.getAppletObject();
    let numRoll = api.getValue("numRoll");
    let stdY = api.getValue("stdY");
    let indexObs = listNumRoll.indexOf(numRoll)+1;
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: '投擲 ' + numRoll + ' 次的點數標準差已記錄！'}).then((result) => {
        $("#A2_observation3_record" + indexObs).html(katex.renderToString(""+ stdY, { throwOnError: false }));
    })
    listA2Obs3Record[indexObs-1] = true;
}
function A2_observation3_check() {
    // let api = applet.getAppletObject();
    // let numDice = api.getValue("numDice");
    let A2_observation3_input1 = $('#A2_observation3_input1').val();
    // console.log(A2_observation3_input1);
    if (listA2Obs3Record.equals([true, true, true, true, true]) && 
    A2_observation3_input1 != "" ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A2_observation3_confirm").hide();
            $("#A2_observation3_done").css({"opacity": "1"});
            $("#A2_observation3_next").removeClass("d-none");
            $("#A2_observation3_link img").css({"opacity": "1"});
            let numDice = (parseInt(A2_observation3_input1)+1);
            $("#A2_operation7_usrans").html(katex.renderToString(""+numDice, { throwOnError: false }));
        })
        removeListener();
    } else if (!listA2Obs3Record.equals([true, true, true, true, true])) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '猜猜看是幾號骰子吧！'})
    }
}

function A2_operation7() {
    currentStage = "A2_operation7";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
}

function A2_operation7_link() {
    removeListener();
    let api = applet.getAppletObject();
    if(api.getValue("mode") != 2){api.setValue("mode", 2)};
    api.registerObjectUpdateListener("showDiceSet", A2_operation7_check);
}

function A2_operation7_check() {
    let api = applet.getAppletObject();
    let showDiceSet = api.getValue("showDiceSet");
    if (showDiceSet) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作7'}).then((result) => {
            $("#A2_operation7_done").css({"opacity": "1"});
            $("#A2_operation7_next").removeClass("d-none");
            $("#A2_operation7_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_investigation4() {
    currentStage = "A2_investigation4";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
}

function A2_investigation4_link() {
    removeListener();
    A2_investigation4_hideAllIcon();
    let api = applet.getAppletObject();
    let numDice = api.getValue("numDice");
    if(api.getValue("mode") != 3){api.setValue("mode", 3)};
    api.registerObjectUpdateListener("numThrows", A2_investigation4_showIcon);
}

function A2_investigation4_hideAllIcon() {
    $("#A2_investigation4_icon1").hide();
    $("#A2_investigation4_icon2").hide();
    $("#A2_investigation4_icon3").hide();
}
function A2_investigation4_showIcon() {
    let api = applet.getAppletObject();
    let numDice = api.getValue("numDice");
    let numThrows = api.getValue("numThrows");
    let numRoll = api.getValue("numRoll");
    if (numRoll == 1000 && numThrows == numRoll) {
        $("#A2_investigation4_icon"+numDice).show();
        $("#A2_investigation4_icon"+numDice).click(A2_investigation4_record);
    }
}
// listA2Inv4Record = [false, false, false];
function A2_investigation4_record() {
    A2_investigation4_hideAllIcon();
    let api = applet.getAppletObject();
    let stdY = api.getValue("stdY");
    let numDice = api.getValue("numDice");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: numDice + ' 號骰子的投擲結果標準差已記錄！'}).then((result) => {
        $("#A2_investigation4_record" + numDice).html(katex.renderToString(""+stdY, { throwOnError: false }));
    })
    listA2Inv4Record[numDice-1] = true;
}
function A2_investigation4_check() {
    if(listA2Inv4Record.equals([true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4'}).then((result) => {
            $("#A2_investigation4_confirm").hide();
            $("#A2_investigation4_done").css({"opacity": "1"});
            $("#A2_investigation4_next").removeClass("d-none");
            $("#A2_investigation4_explain").removeClass("d-none");
            $("#A2_investigation4_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

$(document).ready(function() {
    //A1
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });
    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
    });
    $("#A1_observation1_link").click(function() {
        A1_observation1();
    });
    $("#A1_observation1_confirm").click(function() {
        A1_observation1_check();
    });
    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });
    $("#A1_investigation1_next").click(function() {
        $("#A1_operation2_link").click();
    });
    $("#A1_operation2_link").click(function() {
        A1_operation2();
    });
    $("#A1_operation2_next").click(function() {
        $("#A1_observation2_link").click();
    });
    $("#A1_observation2_link").click(function() {
        A1_observation2();
    });
    $("#A1_observation2_confirm").click(function() {
        A1_observation2_check();
    });
    $("#A1_observation2_next").click(function() {
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function() {
        $("#A1_observation3_link").click();
    });
    $("#A1_observation3_link").click(function() {
        A1_observation3();
    });
    $("#A1_observation3_confirm").click(function() {
        A1_observation3_check();
    });
    $("#A1_observation3_next").click(function() {
        $("#A1_investigation3_link").click();
    });
    $("#A1_investigation3_link").click(function() {
        A1_investigation3();
    });
    $("#A1_investigation3_confirm").click(function() {
        A1_investigation3_check();
    });
    $("#A1_investigation3_next").click(function() {
        $("#A1_operation3_link").click();
    });
    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });
    $("#A1_operation3_next").click(function() {
        $("#A1_observation4_link").click();
    });
    $("#A1_observation4_link").click(function() {
        A1_observation4();
    });
    $("#A1_observation4_confirm").click(function() {
        A1_observation4_check();
    });
    $("#A1_observation4_next").click(function() {
        $("#A1_investigation4_link").click();
    });
    $("#A1_investigation4_link").click(function() {
        A1_investigation4();
    });
    $("#A1_investigation4_confirm").click(function() {
        A1_investigation4_check();
    });
    $("#A1_investigation4_next").click(function() {
        showA2();
    });

    //A2
    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });
    $("#A2_operation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });
    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });
    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_check();
    });
    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();
    });
    $("#A2_operation2_link").click(function() {
        A2_operation2();
    });
    $("#A2_operation2_next").click(function() {
        $("#A2_observation1_link").click();
    });
    $("#A2_observation1_link").click(function() {
        A2_observation1();
    });
    $("#A2_observation1_confirm").click(function() {
        A2_observation1_check();
    });
    $("#A2_observation1_next").click(function() {
        $("#A2_operation3_link").click();
    });
    $("#A2_operation3_link").click(function() {
        A2_operation3();
    });
    $("#A2_operation3_next").click(function() {
        $("#A2_observation2_link").click();
    });
    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });
    $("#A2_observation2_confirm").click(function() {
        A2_observation2_check();
    });
    $("#A2_observation2_next").click(function() {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function() {
        $("#A2_operation4_link").click();
    });
    $("#A2_operation4_link").click(function() {
        A2_operation4();
    });
    $("#A2_operation4_next").click(function() {
        $("#A2_operation5_link").click();
    });
    $("#A2_operation5_link").click(function() {
        A2_operation5();
    });
    $("#A2_operation5_next").click(function() {
        $("#A2_investigation3_link").click();
    });
    $("#A2_investigation3_link").click(function() {
        A2_investigation3();
    });
    $("#A2_investigation3_confirm").click(function() {
        A2_investigation3_check();
    });
    $("#A2_investigation3_next").click(function() {
        $("#A2_operation6_link").click();
    });
    $("#A2_operation6_link").click(function() {
        A2_operation6();
    });
    $("#A2_operation6_next").click(function() {
        $("#A2_observation3_link").click();
    });
    $("#A2_observation3_link").click(function() {
        A2_observation3();
    });
    $("#A2_observation3_confirm").click(function() {
        A2_observation3_check();
    });
    $("#A2_observation3_next").click(function() {
        $("#A2_operation7_link").click();
    });
    $("#A2_operation7_link").click(function() {
        A2_operation7();
    });
    $("#A2_operation7_next").click(function() {
        $("#A2_investigation4_link").click();
    });
    $("#A2_investigation4_link").click(function() {
        A2_investigation4();
    });
    $("#A2_investigation4_confirm").click(function() {
        A2_investigation4_check();
    });
    $("#A2_investigation4_next").click(function() {
        ;
    });
    

});

// 待改進項目
// A1 ggb buttonShowDiceSet 寬度問題