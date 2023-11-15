var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_5_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});

function removeListener() { 
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("e");
    api.unregisterObjectUpdateListener("i");
    api.unregisterObjectUpdateListener("o");
    api.unregisterObjectUpdateListener("kk");
    api.unregisterObjectUpdateListener("n");
}
var initA1 = false;
var initA2 = false;
var listN= [5, 10, 15, 20];
var listA1Obs1Record = [false, false, false, false];
var listA1Obs2Record = [false, false, false, false];
var listA2Obs1Record = [false, false, false, false];

function coverUtility() {
    let api = applet.getAppletObject();
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
            html: '<div style="text-align:left;">數列的極限</div>',
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
            html: '<dl style="text-align:left;"><dt>S02</dt><dd>能認識並理解函數圖形下的面積：上和</dd><dt>S03</dt><dd>能認識並理解函數圖形下的面積：下和</dd></dl>',
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
    $(".title > span ").html("F-12甲-5 活動1：以上和、下和來估計曲線圖形下的面積");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_F_12A_5_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });

}
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-12甲-5 活動2：以黎曼和來估計曲線圖形下的面積");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_12A_5_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_5_A1_1);
}

function A1_operation1_link() {
    removeListener();
    if (!initA1) {
        Swal.fire({ html: '<div style="text-align:left;">給定 '+katex.renderToString("f(x) \\geq 0, x\\in [0, 1]", { throwOnError: false })+'，<br>我們的目的是以上和 '+katex.renderToString("U_n", { throwOnError: false })+' 及下和 '+katex.renderToString("L_n", { throwOnError: false })+' 來估計函數 '+katex.renderToString("f", { throwOnError: false })+' 在區間 '+katex.renderToString("[0, 1]", { throwOnError: false })+' 上的曲線下面積。</div>' });
        initA1 = true;
    }
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("kk", A1_operation1_preCheck);
}
function A1_operation1_preCheck() {
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("e", A1_operation1_check);
}
function A1_operation1_check() {
    let api = applet.getAppletObject();
    let e = api.getValue("e");
    if (e) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_5_A1_1);
}

function A1_observation1_link() {
    removeListener();
    // A1_observation1_hideAllIcon();
    A1_observation1_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("n", A1_observation1_showIcon);
}
function A1_observation1_hideAllIcon() {
    $("#A1_observation1_icon1").hide();
    $("#A1_observation1_icon2").hide();
    $("#A1_observation1_icon3").hide();
    $("#A1_observation1_icon4").hide();
}
// listN= [5, 10, 15, 20];
// listA1Obs1Record = [false, false, false, false];
function A1_observation1_showIcon() {
    A1_observation1_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexN = listN.indexOf(n);
    if (indexN in listN && !listA1Obs1Record[indexN]) {
        let indexObs = listN.indexOf(n)+1;
        $("#A1_observation1_icon"+indexObs).show();
        $("#A1_observation1_icon"+indexObs).click(A1_observation1_record);
    }
}
function A1_observation1_record() {
    A1_observation1_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexObs = listN.indexOf(n)+1;
    let resultU = numRound(api.getValue("c"), 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: n + ' 等分割的上矩形面積和已記錄！'}).then((result) => {
        $("#A1_observation1_record" + indexObs).html(katex.renderToString(""+ resultU, { throwOnError: false }));
        $("#A1_investigation1_record" + indexObs).html(katex.renderToString(""+ resultU, { throwOnError: false }));
        $("#A1_investigation3_record" + indexObs + "_2").html(katex.renderToString(""+ resultU, { throwOnError: false }));
    })
    listA1Obs1Record[indexObs-1] = true;
}
function A1_observation1_check() {
    if (listA1Obs1Record.equals([true, true, true, true])) {
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
    loadApplet("ggbApplet01_1", ggb_F_12A_5_A1_1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    let A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    let A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    let A1_investigation1_input3_usrans = $('input[name=A1_investigation1_input3]:checked').val();
    if( A1_investigation1_input1_usrans == 1 &&
        A1_investigation1_input2_usrans == 1 &&
        A1_investigation1_input3_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_5_A1_2);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("kk", A1_operation2_preCheck);
}

function A1_operation2_preCheck() {
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("i", A1_operation2_check);
}
function A1_operation2_check() {
    let api = applet.getAppletObject();
    let i = api.getValue("i");
    if (i) {
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
    loadApplet("ggbApplet01_2", ggb_F_12A_5_A1_2);
}

function A1_observation2_link() {
    removeListener();
    // A1_observation2_hideAllIcon();
    A1_observation2_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("n", A1_observation2_showIcon);
}
function A1_observation2_hideAllIcon() {
    $("#A1_observation2_icon1").hide();
    $("#A1_observation2_icon2").hide();
    $("#A1_observation2_icon3").hide();
    $("#A1_observation2_icon4").hide();
}
// listN= [5, 10, 15, 20];
// listA1Obs2Record = [false, false, false, false];
function A1_observation2_showIcon() {
    A1_observation2_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexN = listN.indexOf(n);
    if (indexN in listN && !listA1Obs2Record[indexN]) {
        let indexObs = listN.indexOf(n)+1;
        $("#A1_observation2_icon"+indexObs).show();
        $("#A1_observation2_icon"+indexObs).click(A1_observation2_record);
    }
}
function A1_observation2_record() {
    A1_observation2_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexObs = listN.indexOf(n)+1;
    let resultL = numRound(api.getValue("d"), 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: n + ' 等分割的下矩形面積和已記錄！'}).then((result) => {
        $("#A1_observation2_record" + indexObs).html(katex.renderToString(""+ resultL, { throwOnError: false }));
        $("#A1_investigation2_record" + indexObs).html(katex.renderToString(""+ resultL, { throwOnError: false }));
        $("#A1_investigation3_record" + indexObs + "_1").html(katex.renderToString(""+ resultL, { throwOnError: false }));
    })
    listA1Obs2Record[indexObs-1] = true;
}
function A1_observation2_check() {
    if (listA1Obs2Record.equals([true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_5_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    let A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    let A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
    let A1_investigation2_input3_usrans = $('input[name=A1_investigation2_input3]:checked').val();
    if( A1_investigation2_input1_usrans == 1 &&
        A1_investigation2_input2_usrans == 1 &&
        A1_investigation2_input3_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01_2", ggb_F_12A_5_A1_2);
}

function A1_investigation3_link() {
    removeListener();
}

function A1_investigation3_check() {
    let A1_investigation3_input1_usrans = $('input[name=A1_investigation3_input1]:checked').val();
    let A1_investigation3_input2_usrans = $('input[name=A1_investigation3_input2]:checked').val();
    if( A1_investigation3_input1_usrans == 1 &&
        A1_investigation3_input2_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A1_investigation3_confirm").hide();
            $("#A1_investigation3_done").css({"opacity": "1"});
            $("#A1_investigation3_next").removeClass("d-none");
            $("#A1_investigation3_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_F_12A_5_A2);
}

function A2_operation1_link() {
    removeListener();
    if (!initA2) {
        Swal.fire({ html: '<div style="text-align:left;">給定 '+katex.renderToString("f(x) \\geq 0, x\\in [0, 1]", { throwOnError: false })+'，<br>我們的目的是以黎曼和 '+katex.renderToString("R_n", { throwOnError: false })+' 來估計函數 '+katex.renderToString("f", { throwOnError: false })+' 在區間 '+katex.renderToString("[0, 1]", { throwOnError: false })+' 上的曲線下面積。</div>' });
        initA2 = true;
    }
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("kk", A2_operation1_preCheck);
}

function A2_operation1_preCheck() {
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("o", A2_operation1_check);
}
function A2_operation1_check() {
    let api = applet.getAppletObject();
    let o = api.getValue("o");
    if (o) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A2_operation1_done").css({"opacity": "1"});
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_F_12A_5_A2);
}

function A2_observation1_link() {
    removeListener();
    // A2_observation1_hideAllIcon();
    A2_observation1_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("n", A2_observation1_showIcon);
}
function A2_observation1_hideAllIcon() {
    $("#A2_observation1_icon1").hide();
    $("#A2_observation1_icon2").hide();
    $("#A2_observation1_icon3").hide();
    $("#A2_observation1_icon4").hide();
}
// listN= [5, 10, 15, 20];
// listA2Obs1Record = [false, false, false, false];
function A2_observation1_showIcon() {
    A2_observation1_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexN = listN.indexOf(n);
    if (indexN in listN && !listA2Obs1Record[indexN]) {
        let indexObs = listN.indexOf(n)+1;
        $("#A2_observation1_icon"+indexObs).show();
        $("#A2_observation1_icon"+indexObs).click(A2_observation1_record);
    }
}
function A2_observation1_record() {
    A2_observation1_hideAllIcon();
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let indexObs = listN.indexOf(n)+1;
    let resultL = numRound(api.getValue("d"), 2);
    let resultR = numRound(api.getValue("m"), 2);
    let resultU = numRound(api.getValue("c"), 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: n + ' 等分割的下和、黎曼和、上和已記錄！'}).then((result) => {
        $("#A2_observation1_record" + indexObs + "_1").html(katex.renderToString(""+ resultL, { throwOnError: false }));
        $("#A2_observation1_record" + indexObs + "_2").html(katex.renderToString(""+ resultR, { throwOnError: false }));
        $("#A2_observation1_record" + indexObs + "_3").html(katex.renderToString(""+ resultU, { throwOnError: false }));
        $("#A2_investigation1_record" + indexObs + "_1").html(katex.renderToString(""+ resultL, { throwOnError: false }));
        $("#A2_investigation1_record" + indexObs + "_2").html(katex.renderToString(""+ resultR, { throwOnError: false }));
        $("#A2_investigation1_record" + indexObs + "_3").html(katex.renderToString(""+ resultU, { throwOnError: false }));
    })
    listA2Obs1Record[indexObs-1] = true;
}
function A2_observation1_check() {
    if (listA2Obs1Record.equals([true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_F_12A_5_A2);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    let A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();
    let A2_investigation1_input2_usrans = $('input[name=A2_investigation1_input2]:checked').val();
    let A2_investigation1_input3_usrans = $('input[name=A2_investigation1_input3]:checked').val();
    let A2_investigation1_input4_usrans = $('input[name=A2_investigation1_input4]:checked').val();
    if( A2_investigation1_input1_usrans == 1 &&
        A2_investigation1_input2_usrans == 1 &&
        A2_investigation1_input3_usrans == 1 &&
        A2_investigation1_input4_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
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
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function () {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function () {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function () {
        $("#A1_investigation3_link").click();
    });
    $("#A1_investigation3_link").click(function () {
        A1_investigation3();
    });
    $("#A1_investigation3_confirm").click(function () {
        A1_investigation3_check();
    });
    $("#A1_investigation3_next").click(function () {
        showA2();
    });

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
        ;
    });
});

// 待改進項目
// 學習單文字顏色與學具搭配
// operation check