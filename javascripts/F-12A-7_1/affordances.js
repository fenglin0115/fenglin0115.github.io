var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_7_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});

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
            html: '<dl style="text-align:left;"><dt>S01</dt><dd>能透過定積分分段求出函數與x軸所圍出的區域面積。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>能計算指定區間內兩函數所圍的區域</dd><dt>活動二</dt><dd>能計算兩函數所圍的區域面積</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S02</dt><dd>能計算兩函數所圍出區域之面積</dd></dl>',
            heightAuto: false
        });
    };
}

//下拉是選單
function dropdownlist() {
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

//移除監聽
function removeListener() { 
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("a");
    api.unregisterObjectUpdateListener("b");
    api.unregisterObjectUpdateListener("d");
    api.unregisterObjectUpdateListener("k");
}
function ggbA1Reset1() {
    let api = applet.getAppletObject();
    api.setValue("j", false);
    api.setValue("a", false);
    api.setValue("e", false);
    api.setValue("h", false);
    api.setValue("d", false);
    api.setValue("k", 0);
}
var initA1 = false;
var initA2 = false;
var A1_operation2_kHigh = false;
var A1_operation2_kLow = false;
var A1_operation3_kHigh = false;
var A1_operation3_kLow = false;

//SHOW活動
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-12甲-7_1 活動 1：計算指定區間內兩函數所圍的區域");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_F_12A_7_1_A1_1;
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
    loadApplet("ggbApplet01_1", ggb_F_12A_7_1_A1_1);
    ggbA1Reset1();
}
function A1_operation1_link() {
    removeListener();
    if (!initA1) {
        Swal.fire({
        html: '<div style="text-align:left;">本活動探討在 ' + katex.renderToString("x=0", { throwOnError: false }) + ' 到 ' + katex.renderToString("5", { throwOnError: false }) + ' 之間，'+ katex.renderToString("f(x)=2x+5", { throwOnError: false }) +' 和 ' + katex.renderToString("g(x)=k", { throwOnError: false }) + ' 所圍的區域。</div>',
        heightAuto: false
        });
        initA1 = true;
    }
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A1_operation1_check);
}
function A1_operation1_check() {
    let api = applet.getAppletObject();
    let j = api.getValue("j");
    let a = api.getValue("a");
    if (j && a) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_1", ggb_F_12A_7_1_A1_1);
    ggbA1Reset1();
}
function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("k", A1_operation2_check);
}
function A1_operation2_check() {
    let api = applet.getAppletObject();
    let e = api.getValue("e");
    let h = api.getValue("h");
    let k = api.getValue("k");
    if (k>=4) {A1_operation2_kHigh=true};
    if (k<=-3) {A1_operation2_kLow=true};
    if (e && h && A1_operation2_kHigh && A1_operation2_kLow) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_1", ggb_F_12A_7_1_A1_1);
    ggbA1Reset1();
}
function A1_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("k", A1_operation3_check);
}
function A1_operation3_check() {
    let api = applet.getAppletObject();
    let j = api.getValue("j");
    let e = api.getValue("e");
    let d = api.getValue("d");
    let k = api.getValue("k");
    if (k>=4) {A1_operation3_kHigh=true};
    if (k<=-3) {A1_operation3_kLow=true};
    if (j && e && d && A1_operation3_kHigh && A1_operation3_kLow) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

//觀察
function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_7_1_A1_1);
}
function A1_observation1_link() {
    removeListener();
    // dropdownlist();
}
function A1_observation1_check() {
    let A1_observation1_input1_usrans = $('input[name=A1_observation1_input1]:checked').val();
    let A1_observation1_input2_usrans = $('input[name=A1_observation1_input2]:checked').val();
    let A1_observation1_input3_usrans = $('input[name=A1_observation1_input3]:checked').val();
    let A1_observation1_input4_usrans = $('input[name=A1_observation1_input4]:checked').val();
    let A1_observation1_input5_usrans = $('input[name=A1_observation1_input5]:checked').val();
    let A1_observation1_input6_usrans = $('input[name=A1_observation1_input6]:checked').val();
    if( A1_observation1_input1_usrans == 2 &&
        A1_observation1_input2_usrans == 1 &&
        A1_observation1_input3_usrans == 1 &&
        A1_observation1_input4_usrans == 2 &&
        A1_observation1_input5_usrans == 1 &&
        A1_observation1_input6_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

//探索
function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_7_1_A1_1);
}
function A1_investigation1_link() {
    removeListener();
    // dropdownlist();
}
function A1_investigation1_check() {
    let A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    let A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    let A1_investigation1_input3_usrans = $('input[name=A1_investigation1_input3]:checked').val();
    let A1_investigation1_input4_usrans = $('input[name=A1_investigation1_input4]:checked').val();
    let A1_investigation1_input5_usrans1 = $("#A1_investigation1_input5_option1").prop("checked");
    let A1_investigation1_input5_usrans2 = $("#A1_investigation1_input5_option2").prop("checked");
    let A1_investigation1_input5_usrans3 = $("#A1_investigation1_input5_option3").prop("checked");
    let A1_investigation1_input5_usrans4 = $("#A1_investigation1_input5_option4").prop("checked");
    if( A1_investigation1_input1_usrans == 2 &&
        A1_investigation1_input2_usrans == 2 &&
        A1_investigation1_input3_usrans == 4 && 
        A1_investigation1_input4_usrans == 4 && 
        A1_investigation1_input5_usrans1 == false && 
        A1_investigation1_input5_usrans2 == true && 
        A1_investigation1_input5_usrans3 == true && 
        A1_investigation1_input5_usrans4 == true ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

//操作
function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01_2", ggb_F_12A_7_1_A1_2);
}
function A1_operation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A1_operation4_check);
    api.registerObjectUpdateListener("b", A1_operation4_check);
}
function A1_operation4_check() {
    let api = applet.getAppletObject();
    let a = api.getValue("a");
    let b = api.getValue("b");
    let k = api.getValue("k");
    if (a && b && k==2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
            $("#A1_operation4_done").css({"opacity": "1"});
            $("#A1_operation4_next").removeClass("d-none");
            $("#A1_operation4_doneStep").removeClass("d-none");
            $("#A1_operation4_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

//觀察
function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_7_1_A1_2);
}
function A1_observation2_link() {
    removeListener();
    // dropdownlist();
}
function A1_observation2_check() {
    let A1_observation2_input1_usrans = $('input[name=A1_observation2_input1]:checked').val();
    let A1_observation2_input2_usrans = $('input[name=A1_observation2_input2]:checked').val();
    let A1_observation2_input3_usrans = $('input[name=A1_observation2_input3]:checked').val();
    let A1_observation2_input4_usrans = $("#A1_observation2_input4").val();
    let A1_observation2_input5_usrans1 = $("#A1_observation2_input5_option1").prop("checked");
    let A1_observation2_input5_usrans2 = $("#A1_observation2_input5_option2").prop("checked");
    let A1_observation2_input5_usrans3 = $("#A1_observation2_input5_option3").prop("checked");
    let A1_observation2_input5_usrans4 = $("#A1_observation2_input5_option4").prop("checked");
    if( A1_observation2_input1_usrans == 2 &&
        A1_observation2_input2_usrans == 5 &&
        A1_observation2_input3_usrans == 5 &&
        A1_observation2_input4_usrans == 2 &&
        A1_observation2_input5_usrans1 == false &&
        A1_observation2_input5_usrans2 == true &&
        A1_observation2_input5_usrans3 == true &&
        A1_observation2_input5_usrans4 == false ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

//探索
function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_7_1_A1_2);
}
function A1_investigation2_link() {
    removeListener();
    // dropdownlist();
}
function A1_investigation2_check() {
    let A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    let A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
    let A1_investigation2_input3_usrans = $('input[name=A1_investigation2_input3]:checked').val();
    let A1_investigation2_input4_usrans = $('input[name=A1_investigation2_input4]:checked').val();
    let A1_investigation2_input5_usrans1 = $("#A1_investigation2_input5_option1").prop("checked");
    let A1_investigation2_input5_usrans2 = $("#A1_investigation2_input5_option2").prop("checked");
    let A1_investigation2_input5_usrans3 = $("#A1_investigation2_input5_option3").prop("checked");
    let A1_investigation2_input5_usrans4 = $("#A1_investigation2_input5_option4").prop("checked");
    let A1_investigation2_input5_usrans5 = $("#A1_investigation2_input5_option5").prop("checked");
    let A1_investigation2_input5_usrans6 = $("#A1_investigation2_input5_option6").prop("checked");
    if( A1_investigation2_input1_usrans == 2 &&
        A1_investigation2_input2_usrans == 1 &&
        A1_investigation2_input3_usrans == 1 && 
        A1_investigation2_input4_usrans == 1 && 
        A1_investigation2_input5_usrans1 == true && 
        A1_investigation2_input5_usrans2 == false && 
        A1_investigation2_input5_usrans3 == true && 
        A1_investigation2_input5_usrans4 == false && 
        A1_investigation2_input5_usrans5 == true && 
        A1_investigation2_input5_usrans6 == true ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

//SHOW活動
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-12甲-7_1 活動 2：計算兩函數所圍的區域面積");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_12A_7_1_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

//操作
function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_F_12A_7_1_A2);
}
function A2_operation1_link() {
    removeListener();
    if (!initA2) {
        Swal.fire({
            html: '<div style="text-align:left;"><ul><li>本活動試求函數 '+katex.renderToString("f(x)=ax^2+bx+c",{ throwOnError: false})+
            ' 的圖形與直線 ' + katex.renderToString("g(x)=mx+k", { throwOnError: false }) +' 所圍區域的面積。</li><li>為了方便操作，本活動設定 '+ katex.renderToString("f(x)=x^2-x-2", { throwOnError: false })+ '、' + katex.renderToString("g(x)=-x+2", { throwOnError: false })+ '。</li></ul></div>' , heightAuto: false
        });
        initA2 = true;
    }
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("d", A2_operation1_check);
    api.registerObjectUpdateListener("b", A2_operation1_check);
}
function A2_operation1_check() {
    let api = applet.getAppletObject();
    let d = api.getValue("d");
    let b = api.getValue("b");
    if (d && b ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
            $("#A2_operation1_done").css({"opacity": "1"});
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

//觀察
function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_F_12A_7_1_A2);
}
function A2_observation1_link() {
    removeListener();
    // dropdownlist();
}
function A2_observation1_check() {
    let A2_observation1_input1_usrans = $('input[name=A2_observation1_input1]:checked').val();
    let A2_observation1_input2_usrans1 = $("#A2_observation1_input2_option1").prop("checked");
    let A2_observation1_input2_usrans2 = $("#A2_observation1_input2_option2").prop("checked");
    let A2_observation1_input2_usrans3 = $("#A2_observation1_input2_option3").prop("checked");
    let A2_observation1_input2_usrans4 = $("#A2_observation1_input2_option4").prop("checked");
    let A2_observation1_input3_usrans1 = $("#A2_observation1_input3_option1").prop("checked");
    let A2_observation1_input3_usrans2 = $("#A2_observation1_input3_option2").prop("checked");
    let A2_observation1_input3_usrans3 = $("#A2_observation1_input3_option3").prop("checked");
    let A2_observation1_input3_usrans4 = $("#A2_observation1_input3_option4").prop("checked");
    let A2_observation1_input3_usrans5 = $("#A2_observation1_input3_option5").prop("checked");
    if( A2_observation1_input1_usrans == 1 &&
        A2_observation1_input2_usrans1 == true &&
        A2_observation1_input2_usrans2 == false &&
        A2_observation1_input2_usrans3 == false &&
        A2_observation1_input2_usrans4 == true &&
        A2_observation1_input3_usrans1 == true &&
        A2_observation1_input3_usrans2 == true &&
        A2_observation1_input3_usrans3 == true &&
        A2_observation1_input3_usrans4 == false &&
        A2_observation1_input3_usrans5 == true ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

//探索
function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_F_12A_7_1_A2);
}
function A2_investigation1_link() {
    removeListener();
    // dropdownlist();
}
function A2_investigation1_check() {
    let A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();
    if( A2_investigation1_input1_usrans == 2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細計算後再回答'})
    }
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02", ggb_F_12A_7_1_A2);
}
function A2_investigation2_link() {
    removeListener();
    // dropdownlist();
}
function A2_investigation2_check() {
    let A2_investigation2_input1_usrans = $('input[name=A2_investigation2_input1]:checked').val();
    if( A2_investigation2_input1_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
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
        $("#A1_operation2_link").click();
    });
    $("#A1_operation2_link").click(function () {
        A1_operation2();
    });
    $("#A1_operation2_next").click(function () {
        $("#A1_operation3_link").click();
    });
    $("#A1_operation3_link").click(function () {
        A1_operation3();
    });
    $("#A1_operation3_next").click(function () {
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
        $("#A1_operation4_link").click();
    });
    $("#A1_operation4_link").click(function () {
        A1_operation4();
    });
    $("#A1_operation4_next").click(function () {
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
        showA2();//下一個活動2
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
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function () {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function () {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function () {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '完成全部活動囉！' })
    });


});
