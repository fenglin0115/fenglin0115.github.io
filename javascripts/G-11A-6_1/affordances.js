var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_6_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectClickListener("button0");
    api.unregisterObjectClickListener("button90");
    api.unregisterObjectClickListener("button180");
    api.unregisterObjectClickListener("button30");
    api.unregisterObjectClickListener("button120");
    api.unregisterObjectClickListener("button1");
    api.unregisterObjectClickListener("button2");
    api.unregisterObjectClickListener("button3");
    api.unregisterObjectUpdateListener("θ");
    api.unregisterObjectUpdateListener("m");
    api.unregisterObjectUpdateListener("A");
    api.unregisterObjectUpdateListener("B");
}
// var initA1_1 = false;
// var initA1_2 = false;
// var initA2 = false;
const listTheta= [0, 30, 60, 90, 120, 150, 180];
const listDirect = ["同向", "同向", "同向", "無", "反向", "反向", "反向"];
var listA1Ope1Record1 = [false, false, false, false, false, false, false];
var listA1Ope1Record2 = [false, false, false, false, false, false, false];
var listA1Ope1Record = [listA1Ope1Record1, listA1Ope1Record2];
var listA1Ope2Clicked = [false, false, false, false, false];
var listA2Ope2Clicked = [false, false, false];
const listCoord1 = [
    [2, 1, 1, 2],
    [2, 1, -1, 2],
    [2, 1, -1, 1],
    [3, 1, 1, 3],
    [3, 1, -1, 3],
    [3, 1, -2, -3]
];
var listA3Ope1Record = [false, false, false, false, false, false];
const listCoord2 = [
    [1, 0, -3, 0],
    [2, 1, -1, 2],
    [1, 1, -1, 0]
];
var listA3Ope2Record = [false, false, false];

function coverUtility() {
    var api = applet.getAppletObject();
    // api.registerObjectClickListener("pic2", prereguisite);
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

    // function prereguisite() {
    //     Swal.fire({
    //         html: '<dl style="text-align:left;"><dt>F-10-2</dt><dd>三次函數的圖形特徵</dd><dt>N-8-6</dt><dd>等比數列。</dd></dl>',
    //         heightAuto: false
    //     });
    // }
    function goal() {
        Swal.fire({
            html: '<div style="text-align:left;">由內積公式及幾何意義進行討論，再討論坐標表示法的表示方式。</div>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>G-11A-6 S01</dt><dd>能理解平面向量的內積公式與幾何意義。</dd><dt>G-11A-6 S02</dt><dd>能以坐標表示法進行平面向量的內積運算並求出兩向量的夾角。</dd></dl>',
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
    $(".title > span ").html("G-11A-6(1) 活動1：物理作功與平面向量的內積");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_G_11A_6_1_A1_1;
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
    $(".title > span ").html("G-11A-6(1) 活動2：平面向量內積的幾何意義");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_G_11A_6_1_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-11A-6(1) 活動3：平面向量坐標表示法的內積運算及兩向量的夾角");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_G_11A_6_1_A3_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_G_11A_6_1_A1_1);
}

function A1_operation1_link() {
    removeListener();
    // A1_operation1_hideAllIcon();
    A1_operation1_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("θ", A1_operation1_showIcon);
    api.registerObjectUpdateListener("m", A1_operation1_showIcon);
    // if (!initA1_1) {
    //     Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
    //     initA1_1 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation1_check);
    // api.registerObjectUpdateListener("ROI", A1_operation1_check);
}
function A1_operation1_hideAllIcon() {
    $("#A1_operation1_icon1_1").hide();
    $("#A1_operation1_icon1_2").hide();
    $("#A1_operation1_icon1_3").hide();
    $("#A1_operation1_icon1_4").hide();
    $("#A1_operation1_icon1_5").hide();
    $("#A1_operation1_icon1_6").hide();
    $("#A1_operation1_icon1_7").hide();
    $("#A1_operation1_icon2_1").hide();
    $("#A1_operation1_icon2_2").hide();
    $("#A1_operation1_icon2_3").hide();
    $("#A1_operation1_icon2_4").hide();
    $("#A1_operation1_icon2_5").hide();
    $("#A1_operation1_icon2_6").hide();
    $("#A1_operation1_icon2_7").hide();
}
// listTheta = [0, 30, 60, 90, 120, 150, 180];
// listDirect = ["同向", "同向", "同向", "無", "反向", "反向", "反向"];
// listA1Ope1Record1 = [false, false, false, false, false, false, false];
// listA1Ope1Record2 = [false, false, false, false, false, false, false];
// listA1Ope1Record = [listA1Ope1Record1, listA1Ope1Record2]
function A1_operation1_showIcon() {
    A1_operation1_hideAllIcon();
    let api = applet.getAppletObject();
    let dpm = (api.getValue("m")/2);  //displacement
    let theta = numRound(api.getValue("θ")/Math.PI*180,0);
    let indexTheta = listTheta.indexOf(theta)+1;
    listA1Ope1Record[-1] = [];  //avoid the Undefined Error
    if (0 < dpm <= 2 && !listA1Ope1Record[dpm-1][indexTheta-1]) {
        $("#A1_operation1_icon" + dpm + "_" + indexTheta).show();
        $("#A1_operation1_icon" + dpm + "_" + indexTheta).click(A1_operation1_record);
    }
}
function A1_operation1_record() {
    A1_operation1_hideAllIcon();
    let api = applet.getAppletObject();
    let dpm = (api.getValue("m")/2);  //displacement
    let theta = numRound(api.getValue("θ")/Math.PI*180,0);
    let indexTheta = listTheta.indexOf(theta)+1;
    let F_x = numRound(api.getValue("k_x"), 2);
    let direct = listDirect[indexTheta-1];
    let work = numRound(F_x * dpm, 2);
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, text: '位移 ' + dpm + ' ，夾角 ' + theta + '° 的結果已記錄！'}).then((result) => {
        $("#A1_operation1_record" + dpm + "_" + indexTheta + "_1").html(katex.renderToString(""+ F_x, { throwOnError: false }));
        $("#A1_operation1_record" + dpm + "_" + indexTheta + "_2").html(katex.renderToString(""+ direct, { throwOnError: false }));
        $("#A1_operation1_record" + dpm + "_" + indexTheta + "_3").html(katex.renderToString(""+ work, { throwOnError: false }));
    })
    listA1Ope1Record[dpm-1][indexTheta-1] = true;
}

function A1_operation1_check() {
    if (listA1Ope1Record1.equals([true, true, true, true, true, true, true]) &&
        listA1Ope1Record2.equals([true, true, true, true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_confirm").hide();
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_2", ggb_G_11A_6_1_A1_2);
}

function A1_observation1_link() {
    removeListener();
}

function A1_observation1_check() {
    // let api = applet.getAppletObject();
    let A1_observation1_input1_usrans = $("#A1_observation1_input1").val();
    let A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
    let A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
    let A1_observation1_input4_usrans = $("#A1_observation1_input4").val();
    let A1_observation1_input5_usrans = $("#A1_observation1_input5").val();
    let A1_observation1_input6_usrans = $("#A1_observation1_input6").val();
    let A1_observation1_input7_usrans = $("#A1_observation1_input7").val();
    let A1_observation1_input8_usrans = $("#A1_observation1_input8").val();
    let A1_observation1_input9_usrans = $("#A1_observation1_input9").val();
    if (A1_observation1_input1_usrans == 2 &&
        A1_observation1_input2_usrans == -2 &&
        A1_observation1_input3_usrans == 0 &&
        A1_observation1_input4_usrans == 1.73 &&
        A1_observation1_input5_usrans == 1.41 &&
        A1_observation1_input6_usrans == 1 &&
        A1_observation1_input7_usrans == -1 &&
        A1_observation1_input8_usrans == -1.41 &&
        A1_observation1_input9_usrans == -1.73 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查輸入的數據喔！'})
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_2", ggb_G_11A_6_1_A1_2);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    let A1_investigation1_input1_1_usrans = $('input[name=A1_investigation1_input1_1]:checked').val();
    let A1_investigation1_input1_2_usrans = $('input[name=A1_investigation1_input1_2]:checked').val();
    let A1_investigation1_input1_3_usrans = $('input[name=A1_investigation1_input1_3]:checked').val();
    let A1_investigation1_input2_1_usrans = $('input[name=A1_investigation1_input2_1]:checked').val();
    let A1_investigation1_input2_2_usrans = $('input[name=A1_investigation1_input2_2]:checked').val();
    let A1_investigation1_input2_3_usrans = $('input[name=A1_investigation1_input2_3]:checked').val();
    let A1_investigation1_input3_usrans = $('input[name=A1_investigation1_input3]:checked').val();
    if( A1_investigation1_input1_1_usrans == 1 &&
        A1_investigation1_input1_2_usrans == 1 &&
        A1_investigation1_input1_3_usrans == 1 &&
        A1_investigation1_input2_1_usrans == 1 &&
        A1_investigation1_input2_2_usrans == 1 &&
        A1_investigation1_input2_3_usrans == 1 &&
        A1_investigation1_input3_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答'})
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_3", ggb_G_11A_6_1_A1_3);
}

// listA1Ope2Clicked = [false, false, false, false, false]
function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectClickListener("button0", A1_ope2_angle0_showText);
    api.registerObjectClickListener("button90", A1_ope2_angle90_showText);
    api.registerObjectClickListener("button180", A1_ope2_angle180_showText);
    api.registerObjectClickListener("button30", A1_ope2_angle30_showText);
    api.registerObjectClickListener("button120", A1_ope2_angle120_showText);
    // api.registerObjectClickListener("buttoncon", A1_ope2_con_showText);
}

function A1_ope2_angle0_showText() {
    $("#A1_ope2_angle0").html("作正功 " + katex.renderToString("W=\\left|\\overrightharpoon{F}\\right|\\left|\\overrightharpoon{S}\\right|", { throwOnError: false }));
    $("#A1_ope2_angle0").attr("style", "color: blue");
    listA1Ope2Clicked[0]= true;
    A1_operation2_preCheck();
}
function A1_ope2_angle90_showText() {
    $("#A1_ope2_angle90").html("不作功 " + katex.renderToString("W=0\\times\\left|\\overrightharpoon{S}\\right|=0", { throwOnError: false }));
    $("#A1_ope2_angle90").attr("style", "color: blue");
    listA1Ope2Clicked[1]= true;
    A1_operation2_preCheck();
}
function A1_ope2_angle180_showText() {
    $("#A1_ope2_angle180").html("作負功 " + katex.renderToString("W=-\\left|\\overrightharpoon{F}\\right|\\left|\\overrightharpoon{S}\\right|", { throwOnError: false }));
    $("#A1_ope2_angle180").attr("style", "color: blue");
    listA1Ope2Clicked[2]= true;
    A1_operation2_preCheck();
}
function A1_ope2_angle30_showText() {
    $("#A1_ope2_angle30_1").html(katex.renderToString("\\left|\\overrightharpoon{F}\\right|\\cos{\\theta}\\gt0", { throwOnError: false }));
    $("#A1_ope2_angle30_2").html(katex.renderToString("=\\left|\\overrightharpoon{F}\\right|\\cos{\\theta}\\times\\left|\\overrightharpoon{S}\\right|\\gt0", { throwOnError: false }));
    $("#A1_ope2_angle30_1").attr("style", "color: blue");
    $("#A1_ope2_angle30_2").attr("style", "color: blue");
    listA1Ope2Clicked[3]= true;
    A1_operation2_preCheck();
}
function A1_ope2_angle120_showText() {
    $("#A1_ope2_angle120_1").html(katex.renderToString("\\left|\\overrightharpoon{F}\\right|\\cos{\\theta}\\lt0", { throwOnError: false }));
    $("#A1_ope2_angle120_2").html(katex.renderToString("=\\left|\\overrightharpoon{F}\\right|\\cos{\\theta}\\times\\left|\\overrightharpoon{S}\\right|\\lt0", { throwOnError: false }));
    $("#A1_ope2_angle120_1").attr("style", "color: blue");
    $("#A1_ope2_angle120_2").attr("style", "color: blue");
    listA1Ope2Clicked[4]= true;
    A1_operation2_preCheck();
}

function A1_operation2_preCheck() {
    if (listA1Ope2Clicked.equals([true, true, true, true, true])) {
        $("#A1_operation2_confirm").removeClass("d-none");
        $("#A1_operation2_confirm").click(A1_operation2_check);
    }
}
function A1_operation2_check() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A1_operation2_confirm").hide();
        $("#A1_operation2_done").css({"opacity": "1"});
        $("#A1_operation2_next").removeClass("d-none");
        $("#A1_operation2_link img").css({"opacity": "1"});
        $("#A1_operation2_conclusion").removeClass("d-none");
        $("#A1_operation2_conclusion").css({"background-color": "rgba(0, 0, 255, 0.1)"});
    })
    removeListener();
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_4", ggb_G_11A_6_1_A1_4);
}

function A1_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation2_check() {
    // let api = applet.getAppletObject();
    let A1_observation2_input1_usrans = $("#A1_observation2_input1").val();
    let A1_observation2_input2_usrans = $("#A1_observation2_input2").val();
    let A1_observation2_input3_usrans = $("#A1_observation2_input3").val();
    if (A1_observation2_input1_usrans == 3 &&
        A1_observation2_input2_usrans == 0 &&
        A1_observation2_input3_usrans == 4 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再仔細檢查喔！'})
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01_5", ggb_G_11A_6_1_A1_5);
}

function A1_observation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation3_check() {
    // let api = applet.getAppletObject();
    let A1_observation3_input1_usrans = $("#A1_observation3_input1").val();
    let A1_observation3_input2_usrans = $("#A1_observation3_input2").val();
    let A1_observation3_input3_usrans = $("#A1_observation3_input3").val();
    if (A1_observation3_input1_usrans == 3 &&
        A1_observation3_input2_usrans == 0 &&
        A1_observation3_input3_usrans == 4 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再仔細檢查喔！'})
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_5", ggb_G_11A_6_1_A1_5);
}

function A1_investigation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation2_check() {
    let A1_investigation2_input1_1_usrans = $("#A1_investigation2_input1_1").val();
    let A1_investigation2_input1_2_usrans = $("#A1_investigation2_input1_2").val();
    let A1_investigation2_input2_1_usrans = $("#A1_investigation2_input2_1").val();
    let A1_investigation2_input2_2_usrans = $("#A1_investigation2_input2_2").val();
    let A1_investigation2_input3_1_usrans = $("#A1_investigation2_input3_1").val();
    let A1_investigation2_input3_2_usrans = $("#A1_investigation2_input3_2").val();
    if( A1_investigation2_input1_1_usrans == 0 &&
        A1_investigation2_input1_2_usrans == 0 &&
        A1_investigation2_input2_1_usrans == 1 &&
        A1_investigation2_input2_2_usrans == 1 &&
        A1_investigation2_input3_1_usrans == 2 &&
        A1_investigation2_input3_2_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再仔細檢查喔！'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02_1", ggb_G_11A_6_1_A2_1);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A2_operation1_check);
    api.registerObjectClickListener("button2", A2_operation1_check);
    api.registerObjectClickListener("button3", A2_operation1_check);
}

function A2_operation1_check() {
    let api =applet.getAppletObject();
    let clicked1 = api.getValue("clicked1");
    let clicked2 = api.getValue("clicked2");
    let clicked3 = api.getValue("clicked3");
    if (clicked1 == 1 && clicked2 == 1 && clicked3 == 1) {
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
    loadApplet("ggbApplet02_2", ggb_G_11A_6_1_A2_2);
}

function A2_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_observation1_check() {
    // let api = applet.getAppletObject();
    let A2_observation1_input1_usrans = $('#A2_observation1_input1').val();
    let A2_observation1_input2_usrans = $('#A2_observation1_input2').val();
    let A2_observation1_input3_usrans = $('#A2_observation1_input3').val();
    if (A2_observation1_input1_usrans == 1 && 
        A2_observation1_input2_usrans == 0 && 
        A2_observation1_input3_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_3", ggb_G_11A_6_1_A2_3);
}

function A2_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_observation2_check() {
    // let api = applet.getAppletObject();
    let A2_observation2_input1_usrans = $('#A2_observation2_input1').val();
    let A2_observation2_input2_usrans = $('#A2_observation2_input2').val();
    let A2_observation2_input3_usrans = $('#A2_observation2_input3').val();
    if (A2_observation2_input1_usrans == 1 && 
        A2_observation2_input2_usrans == 0 &&
        A2_observation2_input3_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02_3", ggb_G_11A_6_1_A2_3);
}

function A2_investigation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation1_check() {
    let A2_investigation1_input1_usrans = $('#A2_investigation1_input1').val();
    let A2_investigation1_input2_usrans = $('#A2_investigation1_input2').val();
    let A2_investigation1_input3_usrans = $('#A2_investigation1_input3').val();
    if( A2_investigation1_input1_usrans == 0 &&
        A2_investigation1_input2_usrans == 1 &&
        A2_investigation1_input3_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再仔細檢查喔！'})
    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_4", ggb_G_11A_6_1_A2_4);
}

// listA2Ope2Clicked = [false, false, false]
function A2_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A2_operation2_preCheck1);
    api.registerObjectClickListener("button2", A2_operation2_preCheck2);
    api.registerObjectClickListener("button3", A2_operation2_preCheck3);
}

function A2_operation2_preCheck1() {
    listA2Ope2Clicked[0] = true;
    A2_operation2_check();
}
function A2_operation2_preCheck2() {
    listA2Ope2Clicked[1] = true;
    A2_operation2_check();
}
function A2_operation2_preCheck3() {
    listA2Ope2Clicked[2] = true;
    A2_operation2_check();
}
function A2_operation2_check() {
    if (listA2Ope2Clicked.equals([true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A2_operation2_done").css({"opacity": "1"});
            $("#A2_operation2_next").removeClass("d-none");
            $("#A2_operation2_link img").css({"opacity": "1"});
            $("#A2_operation2_conclusion").removeClass("d-none");
            $("#A2_operation2_conclusion").css({"background-color": "rgba(0, 0, 255, 0.1)"});
        })
        removeListener();
    }
}

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02_5", ggb_G_11A_6_1_A2_5);
}

function A2_observation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_observation3_check() {
    // let api = applet.getAppletObject();
    let A2_observation3_input1_usrans = $('#A2_observation3_input1').val();
    let A2_observation3_input2_usrans = $('#A2_observation3_input2').val();
    if (A2_observation3_input1_usrans == 0 && 
        A2_observation3_input2_usrans == 0 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A2_observation3_confirm").hide();
            $("#A2_observation3_done").css({"opacity": "1"});
            $("#A2_observation3_next").removeClass("d-none");
            $("#A2_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_6", ggb_G_11A_6_1_A2_6);
}

function A2_investigation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation2_check() {
    let A2_investigation2_input1_1_usrans = $('#A2_investigation2_input1_1').val();
    let A2_investigation2_input1_2_usrans = $('#A2_investigation2_input1_2').val();
    let A2_investigation2_input1_3_usrans = $('#A2_investigation2_input1_3').val();
    let A2_investigation2_input1_4_usrans = $('#A2_investigation2_input1_4').val();
    let A2_investigation2_input1_5_usrans = $('#A2_investigation2_input1_5').val();
    let A2_investigation2_input2_1_usrans = $('#A2_investigation2_input2_1').val();
    let A2_investigation2_input2_2_usrans = $('#A2_investigation2_input2_2').val();
    let A2_investigation2_input2_3_usrans = $('#A2_investigation2_input2_3').val();
    let A2_investigation2_input2_4_usrans = $('#A2_investigation2_input2_4').val();
    let A2_investigation2_input2_5_usrans = $('#A2_investigation2_input2_5').val();
    if( A2_investigation2_input1_1_usrans == 0 &&
        A2_investigation2_input1_2_usrans == 1 &&
        A2_investigation2_input1_3_usrans == 2 &&
        A2_investigation2_input1_4_usrans == 3 &&
        A2_investigation2_input1_5_usrans == 4 &&
        A2_investigation2_input2_1_usrans == 0 &&
        A2_investigation2_input2_2_usrans == 1 &&
        A2_investigation2_input2_3_usrans == 2 &&
        A2_investigation2_input2_4_usrans == 3 &&
        A2_investigation2_input2_5_usrans == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03_1", ggb_G_11A_6_1_A3_1);
}

// listA3Ope1Record = [false, false, false, false, false, false];
function A3_operation1_link() {
    removeListener();
    // A3_operation1_hideAllIcon();
    A3_operation1_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("A", A3_operation1_showIcon);
    api.registerObjectUpdateListener("B", A3_operation1_showIcon);
    // if (!initA3) {
    //     Swal.fire({html: '<div style="text-align:left;">如果我們縮短計息週期，那麼本利和會接近本金的幾倍呢？</div>'}); 
    //     initA3 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A3_operation1_check);
    // api.registerObjectUpdateListener("N", A3_operation1_check);
}

function A3_operation1_hideAllIcon() {
    $("#A3_operation1_icon1").hide();
    $("#A3_operation1_icon2").hide();
    $("#A3_operation1_icon3").hide();
    $("#A3_operation1_icon4").hide();
    $("#A3_operation1_icon5").hide();
    $("#A3_operation1_icon6").hide();
}
function A3_operation1_showIcon() {
    A3_operation1_hideAllIcon();
    let api = applet.getAppletObject();
    let Coord = [api.getXcoord("A"), api.getYcoord("A"),
                api.getXcoord("B"), api.getYcoord("B")];
    let indexCoord = arrayIndexOf(Coord, listCoord1)+1;
    if (!listA3Ope1Record[indexCoord-1]) {
        $("#A3_operation1_icon" + indexCoord).show();
        $("#A3_operation1_icon" + indexCoord).click(A3_operation1_record);
    }
}
function A3_operation1_record() {
    A3_operation1_hideAllIcon();
    let api = applet.getAppletObject();
    let Coord = [api.getXcoord("A"), api.getYcoord("A"),
                api.getXcoord("B"), api.getYcoord("B")];
    let indexCoord = arrayIndexOf(Coord, listCoord1)+1;
    let dot = api.getValue("dot");
    let A = "(" + Coord[0] + ", " + Coord[1] + ")";
    let B = "(" + Coord[2] + ", " + Coord[3] + ")";
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, html: katex.renderToString("\\overrightharpoon{a}=" + A + "、\\overrightharpoon{b}=" + B + "的結果已紀錄！", { throwOnError: false })}).then((result) => {
        $("#A3_operation1_record" + indexCoord + "_1").html(katex.renderToString(""+ dot, { throwOnError: false }));
        $("#A3_operation1_record" + indexCoord + "_2").html(katex.renderToString(""+ dot, { throwOnError: false }));
    })
    listA3Ope1Record[indexCoord-1] = true;
}

function A3_operation1_check() {
    if (listA3Ope1Record.equals([true, true, true, true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A3_operation1_confirm").hide();
            $("#A3_operation1_done").css({"opacity": "1"});
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '未完成所有記錄！'})
    }
}

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03_2", ggb_G_11A_6_1_A3_2);
}

// listA3Ope2Record = [false, false, false];
function A3_operation2_link() {
    removeListener();
    // A3_operation2_hideAllIcon();
    A3_operation2_showIcon();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("A", A3_operation2_showIcon);
    api.registerObjectUpdateListener("B", A3_operation2_showIcon);
    // if (!initA3) {
    //     Swal.fire({html: '<div style="text-align:left;">如果我們縮短計息週期，那麼本利和會接近本金的幾倍呢？</div>'}); 
    //     initA3 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A3_operation2_check);
    // api.registerObjectUpdateListener("N", A3_operation2_check);
}

function A3_operation2_hideAllIcon() {
    $("#A3_operation2_icon1").hide();
    $("#A3_operation2_icon2").hide();
    $("#A3_operation2_icon3").hide();
}
function A3_operation2_showIcon() {
    A3_operation2_hideAllIcon();
    let api = applet.getAppletObject();
    let Coord = [api.getXcoord("A"), api.getYcoord("A"),
                api.getXcoord("B"), api.getYcoord("B")];
    let indexCoord = arrayIndexOf(Coord, listCoord2)+1;
    if (!listA3Ope2Record[indexCoord-1]) {
        $("#A3_operation2_icon" + indexCoord).show();
        $("#A3_operation2_icon" + indexCoord).click(A3_operation2_record);
    }
}
function A3_operation2_record() {
    A3_operation2_hideAllIcon();
    let api = applet.getAppletObject();
    let Coord = [api.getXcoord("A"), api.getYcoord("A"),
                api.getXcoord("B"), api.getYcoord("B")];
    let indexCoord = arrayIndexOf(Coord, listCoord2)+1;
    let dot = api.getValue("dot");
    let cosTheta = numRound(api.getValue("cosTheta"),2);
    let A = "(" + Coord[0] + ", " + Coord[1] + ")";
    let B = "(" + Coord[2] + ", " + Coord[3] + ")";
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 2000, html: katex.renderToString("\\overrightharpoon{a}=" + A + "、\\overrightharpoon{b}=" + B + "的結果已紀錄！", { throwOnError: false })}).then((result) => {
        $("#A3_operation2_record" + indexCoord + "_1").html(katex.renderToString(""+ dot, { throwOnError: false }));
        $("#A3_operation2_record" + indexCoord + "_2").html(katex.renderToString(""+ cosTheta, { throwOnError: false }));
        $("#A3_operation2_record" + indexCoord + "_3").html(katex.renderToString(""+ cosTheta, { throwOnError: false }));
    })
    listA3Ope2Record[indexCoord-1] = true;
}

function A3_operation2_check() {
    if (listA3Ope2Record.equals([true, true, true])) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A3_operation2_confirm").hide();
            $("#A3_operation2_done").css({"opacity": "1"});
            $("#A3_operation2_next").removeClass("d-none");
            $("#A3_operation2_link img").css({"opacity": "1"});
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
    $("#A1_operation1_confirm").click(function() {
        A1_operation1_check();
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
        $("#A1_observation3_link").click();
    });
    $("#A1_observation3_link").click(function() {
        A1_observation3();
    });
    $("#A1_observation3_confirm").click(function() {
        A1_observation3_check();
    });
    $("#A1_observation3_next").click(function() {
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function() {
        showA2();
    });
    //A2
    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });
    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
    });
    $("#A2_observation1_link").click(function() {
        A2_observation1();
    });
    $("#A2_observation1_confirm").click(function() {
        A2_observation1_check();
    });
    $("#A2_observation1_next").click(function() {
        $("#A2_observation2_link").click();
    });
    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });
    $("#A2_observation2_confirm").click(function() {
        A2_observation2_check();
    });
    $("#A2_observation2_next").click(function() {
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
        $("#A2_observation3_link").click();
    });
    $("#A2_observation3_link").click(function() {
        A2_observation3();
    });
    $("#A2_observation3_confirm").click(function() {
        A2_observation3_check();
    });
    $("#A2_observation3_next").click(function() {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function() {
        showA3();
    });
    //A3
    $("#A3_operation1_link").click(function() {
        A3_operation1();
    });
    $("#A3_operation1_confirm").click(function() {
        A3_operation1_check();
    });
    $("#A3_operation1_next").click(function() {
        $("#A3_operation2_link").click();
    });
    $("#A3_operation2_link").click(function() {
        A3_operation2();
    });
    $("#A3_operation2_confirm").click(function() {
        A3_operation2_check();
    });
    $("#A3_operation2_next").click(function() {
        ;
    });
});

// 待改進項目
// 無先備子技能
// A2 operation1 GGB 按鈕偵測
// A3 operation1 GGB 版面修改