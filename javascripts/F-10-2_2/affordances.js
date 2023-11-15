var currentStage = "cover";
params.ggbBase64 = ggb_F_10_2_2_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});


function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectClickListener("button1");
    api.unregisterObjectClickListener("button2");
    api.unregisterObjectClickListener("button3");
    api.unregisterObjectUpdateListener("O");
    api.unregisterObjectUpdateListener("a");
    api.unregisterObjectUpdateListener("b");
    api.unregisterObjectUpdateListener("c");
    api.unregisterObjectUpdateListener("d");
    api.unregisterObjectUpdateListener("e");
    api.unregisterObjectUpdateListener("p");
    api.unregisterObjectUpdateListener("h");
    api.unregisterObjectUpdateListener("k");
    api.unregisterObjectUpdateListener("text10");
    api.unregisterObjectUpdateListener("i");
    api.unregisterObjectUpdateListener("j");
    api.unregisterObjectUpdateListener("m");
    api.unregisterObjectUpdateListener("t");
}

function coverUtility() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic6", backLists);

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA0();
    }

    function backLists() {
        location.href = "./index.html";
    }
}

function showA0() {
    showLoading();
    $("#navbarDropdown").text("活動0");
    $("#navbarDropdown").val("活動0");
    $(".outlines").hide();
    $("#outlineA0").show();
    $(".title > span ").html("F-10-2(2) 活動0：一般三次函數的圖形型態");
    params.id = "ggbApplet00_investigation1";
    params.ggbBase64 = ggb_F_10_2_2_A0_investigation1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A0_investigation1";
    showWorksheetsContents("A0_investigation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-10-2(2) 活動1：一般三次函數的圖形與對稱中心");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_10_2_2_A1;
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
    $(".title > span ").html("F-10-2(2) 活動2：一般三次函數的圖形與標準式");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_10_2_2_A2;
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
    $(".title > span ").html("F-10-2(2) 活動3：三次函數的局部特徵與大域特徵");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_10_2_2_A3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A0_investigation1() {
    currentStage = "A0_investigation1";
    loadApplet("ggbApplet00_investigation1", ggb_F_10_2_2_A0_investigation1);
}

function A0_investigation1_link() {
    removeListener();
}

function A0_investigation1_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var d = api.getValue("d");
    var e = api.getValue("e");
    var f = api.getValue("f");
    var g = api.getValue("g");
    var h = api.getValue("h");
    if(a && b && c && d && !e && !f && !g && !h) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A0_investigation1_confirm").hide();
            $("#A0_investigation1_done").css({"opacity": "1"});
            $("#A0_investigation1_next").removeClass("d-none");
            $("#A0_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 想想看有哪些選項沒選到或是多選了'})
    }
}

function A0_operation1() {
    currentStage = "A0_operation1";
    loadApplet("ggbApplet00", ggb_F_10_2_2_A0);
}

function A0_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A0_operation1_check);
    api.registerObjectUpdateListener("b", A0_operation1_check);
    api.registerObjectUpdateListener("c", A0_operation1_check);
    api.registerObjectUpdateListener("d", A0_operation1_check);
    splitBarSetting(3, 614);
}

var A0_operation1_a = false, A0_operation1_b = false, A0_operation1_c = false, A0_operation1_d = false;
function A0_operation1_check(obj) {
    var api = applet.getAppletObject();
    api.getValue("a") != 0 ? A0_operation1_a = true : A0_operation1_a = false;
    if(obj == "b") A0_operation1_b = true;
    if(obj == "c") A0_operation1_c = true;
    if(obj == "d") A0_operation1_d = true;
    if (A0_operation1_a && A0_operation1_b && A0_operation1_c && A0_operation1_d) {
        $("#A0_operation1_confirm").removeClass("d-none");
    } else {
        $("#A0_operation1_confirm").addClass("d-none");
    }
}

function A0_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A0_operation1_confirm").hide();
        $("#A0_operation1_done").css({"opacity": "1"});
        $("#A0_operation1_next").removeClass("d-none");
        $("#A0_operation1_link img").css({"opacity": "1"});
    })
}

function A0_observation1() {
    currentStage = "A0_observation1";
    loadApplet("ggbApplet00_investigation1", ggb_F_10_2_2_A0_investigation1);
}

function A0_observation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("a", false);
    api.setValue("b", false);
    api.setValue("c", false);
    api.setValue("d", false);
    api.setValue("e", false);
    api.setValue("f", false);
    api.setValue("g", false);
    api.setValue("h", false);
}

function A0_observation1_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var d = api.getValue("d");
    var e = api.getValue("e");
    var f = api.getValue("f");
    var g = api.getValue("g");
    var h = api.getValue("h");
    if(a && b && c && d && !e && !f && !g && !h) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A0_observation1_confirm").hide();
            $("#A0_observation1_done").css({"opacity": "1"});
            $("#A0_observation1_next").removeClass("d-none");
            $("#A0_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 想想看有哪些選項沒選到或是多選了'})
    }
}

function A0_investigation2() {
    currentStage = "A0_investigation2";
    loadApplet("ggbApplet00_investigation1", ggb_F_10_2_2_A0_investigation1);
}

function A0_investigation2_link() {
    removeListener();
}

function A0_investigation2_check() {
    var A0_investigation2_input1_usrans = $('input[name=A0_investigation2_input1]:checked').val();
    var A0_investigation2_input2_usrans = $('input[name=A0_investigation2_input2]:checked').val();
    var A0_investigation2_input3_usrans = $("#A0_investigation2_input3").val();
    if (A0_investigation2_input1_usrans == 1 && A0_investigation2_input2_usrans == 1 && A0_investigation2_input3_usrans != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A0_investigation2_confirm").hide();
            $("#A0_investigation2_done").css({"opacity": "1"});
            $("#A0_investigation2_next").removeClass("d-none");
            $("#A0_investigation2_link img").css({"opacity": "1"});
        })
    } else if (A0_investigation2_input1_usrans == 1 && A0_investigation2_input2_usrans == 1 && A0_investigation2_input3_usrans == "") {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請簡單說明你的推測或想法'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button2", A1_operation1_check);
    api.registerObjectUpdateListener("O", A1_operation1_check);
    api.registerObjectClickListener("button1", A1_operation1_reset);
}

var A1_operation1_check1 = false, A1_operation1_check2 = false;
function A1_operation1_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("m");
    var b = api.getValue("n");
    var c = api.getValue("r");
    var d = api.getValue("s");
    if (a == 1 && b == -3 && c == 2 && d == 1) {A1_operation1_check1 = true;}
    if (api.getVisible("text11") == true) {A1_operation1_check2 = true;}
    // alert(A1_operation1_check1);
    // alert(A1_operation1_check2);
    if (A1_operation1_check1 == true && A1_operation1_check2 == true) {
        // api.setFixed("O", true, false);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A1_operation1_reset() {
    var api = applet.getAppletObject();
    A1_operation1_check1 = false;
    A1_operation1_check2 = false;
    api.setFixed("O", false, true);
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_observation1_link() {
    removeListener();
}

function A1_observation1_check() {
    var A1_observation1_input1_usrans = $('input[name=A1_observation1_input1]:checked').val();
    var A1_observation1_input2_usrans = $('input[name=A1_observation1_input2]:checked').val();
    if (A1_observation1_input1_usrans == 1 && A1_observation1_input2_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button2", A1_operation2_check);
    api.registerObjectUpdateListener("O", A1_operation2_check);
    api.registerObjectClickListener("button1", A1_operation2_reset);
}

var A1_operation2_check1 = false, A1_operation2_check2 = false;
function A1_operation2_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("m");
    var b = api.getValue("n");
    var c = api.getValue("r");
    var d = api.getValue("s");
    if (a == 2 && b == -6 && c == 3 && d == 1) {A1_operation2_check1 = true;}
    if (api.getVisible("text11") == true) {A1_operation2_check2 = true;}
    if (A1_operation2_check1 == true && A1_operation2_check2 == true) {
        // api.setFixed("O", true, false);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })
    }
}

function A1_operation2_reset() {
    var api = applet.getAppletObject();
    A1_operation2_check1 = false;
    A1_operation2_check2 = false;
    // api.setFixed("O", false, true);
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_observation2_link() {
    removeListener();
}

function A1_observation2_check() {
    var A1_observation2_input1_usrans = $('input[name=A1_observation2_input1]:checked').val();
    var A1_observation2_input2_usrans = $('input[name=A1_observation1_input2]:checked').val();
    if (A1_observation2_input1_usrans == 1 && A1_observation2_input2_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_operation3_link() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button2", A1_operation3_check);
    api.registerObjectUpdateListener("O", A1_operation3_check);
    api.registerObjectClickListener("button1", A1_operation3_reset);
}

var A1_operation3_check1 = false, A1_operation3_check2 = false;
function A1_operation3_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("m");
    var b = api.getValue("n");
    var c = api.getValue("r");
    var d = api.getValue("s");
    if (a != 0 && Math.abs(b)+Math.abs(c)+Math.abs(d)!=0) {A1_operation3_check1 = true;}
    if (api.getVisible("text11") == true) {A1_operation3_check2 = true;}
    if (A1_operation3_check1 == true && A1_operation3_check2 == true) {
        // api.setFixed("O", true, false);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A1_operation3_reset() {
    var api = applet.getAppletObject();
    A1_operation3_check1 = false;
    A1_operation3_check2 = false;
    // api.setFixed("O", false, true);
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    var A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    var A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    var A1_investigation1_input3_usrans = $("#A1_investigation1_input3").val();
    if (A1_investigation1_input1_usrans == 1 && A1_investigation1_input2_usrans == 1 && A1_investigation1_input3_usrans != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else if (A1_investigation1_input1_usrans == 1 && A1_investigation1_input2_usrans == 1 && A1_investigation1_input3_usrans == "") {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請簡單說明你的推測或想法'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01", ggb_F_10_2_2_A1);
}

function A1_investigation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setFixed("O", false, true);
    api.evalCommand('RunClickScript(button1)');
}

function A1_investigation2_check() {
    var A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    var A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
    if (A1_investigation2_input1_usrans == 4 && A1_investigation2_input2_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A2_operation1_check);
    api.registerObjectUpdateListener("p", A2_operation1_check);
    api.registerObjectUpdateListener("h", A2_operation1_check);
    api.registerObjectUpdateListener("k", A2_operation1_check);
}

function A2_operation1_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var p = api.getValue("p");
    var h = api.getValue("h");
    var k = api.getValue("k");
    if(a == 1 && p == 2 && h != 0 && k != 0) {
        $("#A2_operation1_confirm").removeClass("d-none");
    }
}

function A2_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A2_operation1_confirm").hide();
        $("#A2_operation1_done").css({"opacity": "1"});
        $("#A2_operation1_next").removeClass("d-none");
        $("#A2_operation1_link img").css({"opacity": "1"});
    })
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_observation1_link() {
    removeListener();
}

function A2_observation1_check() {
    var A2_observation1_input1_usrans = $('input[name=A2_observation1_input1]:checked').val();
    var A2_observation1_input2_usrans = $('input[name=A2_observation1_input2]:checked').val();
    var A2_observation1_input3_usrans = $('input[name=A2_observation1_input3]:checked').val();
    var A2_observation1_input4_usrans = $('input[name=A2_observation1_input4]:checked').val();
    if (A2_observation1_input1_usrans == 3 && A2_observation1_input2_usrans == 3 && A2_observation1_input3_usrans == 2 && A2_observation1_input4_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    var A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();
    var A2_investigation1_input2_usrans = $('input[name=A2_investigation1_input2]:checked').val();
    var A2_investigation1_input3_usrans = $('input[name=A2_investigation1_input3]:checked').val();
    var A2_investigation1_input4_usrans = $('input[name=A2_investigation1_input4]:checked').val();
    if (A2_investigation1_input1_usrans == 1 && A2_investigation1_input2_usrans == 1 && A2_investigation1_input3_usrans == 3 && A2_investigation1_input4_usrans == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A2_operation2_check);
    api.registerObjectUpdateListener("O", A2_operation2_check);
    api.registerObjectUpdateListener("p", A2_operation2_check);
    api.registerObjectUpdateListener("text10", A2_operation2_check);
    api.registerObjectClickListener("button2", A2_operation2_reset);
}

function A2_operation2_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("m");
    var b = api.getValue("n");
    var c = api.getValue("r");
    var d = api.getValue("s");
    var a1 = api.getValue("a");
    var p1 = api.getValue("p");
    var h1 = api.getValue("h");
    var k1 = api.getValue("k");
    
    if ((a == 1 && b == -3 && c == 1 && d == 2 ) && ((a == a1 && -3*a1*h1 == b && 3*a1*h1*h1+p1 == c && -1*a1*h1*h1*h1-p1*h1+k1 == d) || api.getVisible("text10"))) {
        // api.setFixed("O", true, false);
        // api.setFixed("p", true, false);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A2_operation2_done").css({"opacity": "1"});
            $("#A2_operation2_next").removeClass("d-none");
            $("#A2_operation2_link img").css({"opacity": "1"});
        })
    }
}

function A2_operation2_reset() {
    var api = applet.getAppletObject();
    // A2_operation2_check1 = false;
    // A2_operation2_check2 = false;
    api.setFixed("O", false, true);
    api.setFixed("p", false, true);
}

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_observation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setFixed("O", false, true);
    api.setFixed("p", false, true);
}

function A2_observation2_check() {
    var A2_observation4_input1_usrans = $('input[name=A2_observation2_input1]:checked').val();
    var A2_observation4_input2_usrans = $('input[name=A2_observation2_input2]:checked').val();

    if (A2_observation4_input1_usrans == 1 && A2_observation4_input2_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A2_operation3_check);
    api.registerObjectUpdateListener("O", A2_operation3_check);
    api.registerObjectUpdateListener("p", A2_operation3_check);
    api.registerObjectUpdateListener("text10", A2_operation3_check);
    api.registerObjectClickListener("button2", A2_operation3_reset);
}

function A2_operation3_check() {
    console.log("check");
    var api = applet.getAppletObject();
    var a = api.getValue("m");
    var b = api.getValue("n");
    var c = api.getValue("r");
    var d = api.getValue("s");
    var a1 = api.getValue("a");
    var p1 = api.getValue("p");
    var h1 = api.getValue("h");
    var k1 = api.getValue("k");
    
    if ((a != 0 && (Math.abs(b)+Math.abs(c)+Math.abs(d)) != 0) && ((a == a1 && -3*a1*h1 == b && 3*a1*h1*h1+p1 == c && -1*a1*h1*h1*h1-p1*h1+k1 == d) || api.getVisible("text10"))) {
        // api.setFixed("O", true, false);
        // api.setFixed("p", true, false);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A2_operation3_done").css({"opacity": "1"});
            $("#A2_operation3_next").removeClass("d-none");
            $("#A2_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A2_operation3_reset() {
    var api = applet.getAppletObject();
    A2_operation3_check1 = false;
    A2_operation3_check2 = false;
    api.setFixed("O", false, true);
    api.setFixed("p", false, true);
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_investigation2_link() {
    removeListener();
}

function A2_investigation2_check() {
    var A2_investigation2_input1_usrans = $('input[name=A2_investigation2_input1]:checked').val();
    var A2_investigation2_input2_usrans = $('input[name=A2_investigation2_input2]:checked').val();
    if (A2_investigation2_input1_usrans == 4 && A2_investigation2_input2_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02", ggb_F_10_2_2_A2);
}

function A2_investigation3_link() {
    removeListener();
}

function A2_investigation3_check() {
    var A2_investigation3_input1_usrans = $('input[name=A2_investigation3_input1]:checked').val();
    var A2_investigation3_input2_usrans = $('input[name=A2_investigation3_input2]:checked').val();
    var A2_investigation3_input3_usrans = $("#A2_investigation3_input3").val();
    if (A2_investigation3_input1_usrans == 3 && A2_investigation3_input2_usrans == 2 && A2_investigation3_input3_usrans != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_done").css({"opacity": "1"});
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({"opacity": "1"});
        })
    } else if (A2_investigation3_input1_usrans == 3 && A2_investigation3_input2_usrans == 2 && A2_investigation3_input3_usrans == "") {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請簡單說明一下如何有系統地繪製函數圖形'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A3_operation1_check);
    api.registerObjectUpdateListener("j", A3_operation1_check);
    api.registerObjectUpdateListener("m", A3_operation1_check);
}

function A3_operation1_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var d = api.getValue("d");
    var h = api.getValue("t");
    var check = api.getValue("j");
    var m = api.getValue("m");
    // console.log(a+","+b+","+c+","+d+","+h+","+check+","+m);
    if (a == 2 && b==6 && c==3 && d==-3 && h==0 && check==1 && m==-40) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A3_operation1_done").css({"opacity": "1"});
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_observation1_link() {
    removeListener();
}

function A3_observation1_check() {
    var A3_observation1_input1_usrans = $('input[name=A3_observation1_input1]:checked').val();
    if (A3_observation1_input1_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({"opacity": "1"});
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("j", A3_operation2_check);
    api.registerObjectUpdateListener("i", A3_operation2_check);
    api.registerObjectUpdateListener("m", A3_operation2_check);
    api.registerObjectUpdateListener("t", A3_operation2_check);
}

function A3_operation2_check() {
    var api = applet.getAppletObject();
    var x = api.getValue("t");
    var m = api.getValue("m");
    var check1 = api.getValue("i");
    var check2 = api.getValue("j");
    if (x==0 && m==40 && check1==1 && check2==0) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A3_operation2_done").css({"opacity": "1"});
            $("#A3_operation2_next").removeClass("d-none");
            $("#A3_operation2_link img").css({"opacity": "1"});
        })
    }
}

function A3_observation2() {
    currentStage = "A3_observation2";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_observation2_link() {
    removeListener();
}

function A3_observation2_check() {
    var A3_observation2_input1_usrans = $('input[name=A3_observation2_input1]:checked').val();
    var A3_observation2_input3_usrans = $('input[name=A3_observation2_input3]:checked').val();
    if (A3_observation2_input1_usrans == 1 && A3_observation2_input3_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A3_observation2_confirm").hide();
            $("#A3_observation2_done").css({"opacity": "1"});
            $("#A3_observation2_next").removeClass("d-none");
            $("#A3_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_investigation1_link() {
    removeListener();
}

function A3_investigation1_check() {
    var A3_investigation1_input1_usrans1 = $("#A3_investigation1_input1_option1").prop("checked");
    var A3_investigation1_input1_usrans2 = $("#A3_investigation1_input1_option2").prop("checked");
    var A3_investigation1_input1_usrans3 = $("#A3_investigation1_input1_option3").prop("checked");
    var A3_investigation1_input1_usrans4 = $("#A3_investigation1_input1_option4").prop("checked");
    if (A3_investigation1_input1_usrans1 == true && A3_investigation1_input1_usrans2 == false && A3_investigation1_input1_usrans3 == false && A3_investigation1_input1_usrans4 == true) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A3_investigation1_confirm").hide();
            $("#A3_investigation1_done").css({"opacity": "1"});
            $("#A3_investigation1_next").removeClass("d-none");
            $("#A3_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_operation3() {
    currentStage = "A3_operation3";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A3_operation3_check);
    api.registerObjectUpdateListener("t", A3_operation3_check);
    api.registerObjectClickListener("button3", A3_operation3_check);
    api.registerObjectUpdateListener("e", A3_operation3_check);
    api.registerObjectUpdateListener("j", A3_operation3_check);
    api.registerObjectUpdateListener("m", A3_operation3_check);
}

function A3_operation3_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var d = api.getValue("d");
    var m = api.getValue("m");
    var check1 = api.getValue("e");
    var check2 = api.getValue("j");
    if (a!=0 && m==-40 && check1==1 && check2==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A3_operation3_done").css({"opacity": "1"});
            $("#A3_operation3_next").removeClass("d-none");
            $("#A3_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A3_observation3() {
    currentStage = "A3_observation3";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_observation3_link() {
    removeListener();
}

function A3_observation3_check() {
    var A3_observation3_input1_usrans = $('input[name=A3_observation3_input1]:checked').val();
    if (A3_observation3_input1_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A3_observation3_confirm").hide();
            $("#A3_observation3_done").css({"opacity": "1"});
            $("#A3_observation3_next").removeClass("d-none");
            $("#A3_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_operation4() {
    currentStage = "A3_operation4";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_operation4_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("j", A3_operation4_check);
    api.registerObjectUpdateListener("i", A3_operation4_check);
    api.registerObjectUpdateListener("m", A3_operation4_check);
}

function A3_operation4_check() {
    var api = applet.getAppletObject();
    var check1 = api.getValue("i");
    var check2 = api.getValue("j");
    var m = api.getValue("m");
    if (check1==1 && check2==0 && m==40) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
            $("#A3_operation4_done").css({"opacity": "1"});
            $("#A3_operation4_next").removeClass("d-none");
            $("#A3_operation4_link img").css({"opacity": "1"});
        })
    }
}

function A3_observation4() {
    currentStage = "A3_observation4";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_observation4_check() {
    var A3_observation4_input1_usrans = $('input[name=A3_observation4_input1]:checked').val();
    var A3_observation4_input3_usrans = $('input[name=A3_observation4_input3]:checked').val();
    if (A3_observation4_input1_usrans == 1 && A3_observation4_input3_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A3_observation4_confirm").hide();
            $("#A3_observation4_done").css({"opacity": "1"});
            $("#A3_observation4_next").removeClass("d-none");
            $("#A3_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

function A3_investigation2() {
    currentStage = "A3_investigation2";
    loadApplet("ggbApplet03", ggb_F_10_2_2_A3);
}

function A3_investigation2_link() {
    removeListener();
}

function A3_investigation2_check() {
    var A3_investigation2_input1_usrans1 = $("#A3_investigation2_input1_option1").prop("checked");
    var A3_investigation2_input1_usrans2 = $("#A3_investigation2_input1_option2").prop("checked");
    var A3_investigation2_input1_usrans3 = $("#A3_investigation2_input1_option3").prop("checked");
    var A3_investigation2_input1_usrans4 = $("#A3_investigation2_input1_option4").prop("checked");
    if (A3_investigation2_input1_usrans1 == true && A3_investigation2_input1_usrans2 == false && A3_investigation2_input1_usrans3 == false && A3_investigation2_input1_usrans4 == true) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A3_investigation2_confirm").hide();
            $("#A3_investigation2_done").css({"opacity": "1"});
            $("#A3_investigation2_next").removeClass("d-none");
            $("#A3_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看'})
    }
}

$(document).ready(function() {
    $("#A0_investigation1_link").click(function() {
        A0_investigation1();
    });
    $("#A0_investigation1_confirm").click(function() {
        A0_investigation1_check();
    });
    $("#A0_investigation1_next").click(function() {
        $("#A0_operation1_link").click();
    });
    $("#A0_operation1_link").click(function() {
        A0_operation1();
    });
    $("#A0_operation1_confirm").click(function() {
        A0_operation1_confirm();
    });
    $("#A0_operation1_next").click(function() {
        $("#A0_observation1_link").click();
    });
    $("#A0_observation1_link").click(function() {
        A0_observation1();
    });
    $("#A0_observation1_confirm").click(function() {
        A0_observation1_check();
    });
    $("#A0_observation1_next").click(function() {
        $("#A0_investigation2_link").click();
    });
    $("#A0_investigation2_link").click(function() {
        A0_investigation2();
    });
    $("#A0_investigation2_confirm").click(function() {
        A0_investigation2_check();
    });
    $("#A0_investigation2_next").click(function () {
        showA1();
    });

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
        $("#A1_operation3_link").click();
    });
    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });
    $("#A1_operation3_next").click(function() {
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });

    $("#A1_investigation1_next").click(function() {
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

    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });
    $("#A2_operation1_confirm").click(function() {
        A2_operation1_confirm();
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
        $("#A2_observation2_link").click();
    });
    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });
    $("#A2_observation2_confirm").click(function() {
        A2_observation2_check();
    });
    $("#A2_observation2_next").click(function() {
        $("#A2_operation3_link").click();
    });
    $("#A2_operation3_link").click(function() {
        A2_operation3();
    });
    $("#A2_operation3_next").click(function() {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function() {
        $("#A2_investigation3_link").click();
    });
    $("#A2_investigation3_link").click(function() {
        A2_investigation3();
    });
    $("#A2_investigation3_confirm").click(function() {
        A2_investigation3_check();
    });
    $("#A2_investigation3_next").click(function() {
        showA3();
    });

    $("#A3_operation1_link").click(function() {
        A3_operation1();
    });
    $("#A3_operation1_next").click(function() {
        $("#A3_observation1_link").click();
    });
    $("#A3_observation1_link").click(function() {
        A3_observation1();
    });
    $("#A3_observation1_confirm").click(function() {
        A3_observation1_check();
    });
    $("#A3_observation1_next").click(function() {
        $("#A3_operation2_link").click();
    });
    $("#A3_operation2_link").click(function () {
        A3_operation2();
    });
    $("#A3_operation2_next").click(function() {
        $("#A3_observation2_link").click();
    });
    $("#A3_observation2_link").click(function() {
        A3_observation2();
    });
    $("#A3_observation2_confirm").click(function() {
        A3_observation2_check();
    });
    $("#A3_observation2_next").click(function() {
        $("#A3_investigation1_link").click();
    });
    $("#A3_investigation1_link").click(function() {
        A3_investigation1();
    });
    $("#A3_investigation1_confirm").click(function() {
        A3_investigation1_check();
    });
    $("#A3_investigation1_next").click(function() {
        $("#A3_operation3_link").click();
    });
    $("#A3_operation3_link").click(function() {
        A3_operation3();
    });
    $("#A3_operation3_next").click(function() {
        $("#A3_observation3_link").click();
    });
    $("#A3_observation3_confirm").click(function() {
        A3_observation3_check();
    });
    $("#A3_observation3_next").click(function() {
        $("#A3_operation4_link").click();
    });
    $("#A3_operation4_link").click(function() {
        A3_operation4();
    });
    $("#A3_operation4_next").click(function() {
        $("#A3_observation4_link").click();
    });
    $("#A3_observation4_link").click(function() {
        A3_observation4();
    });
    $("#A3_operation4_next").click(function() {
        $("#A3_observation4_link").click();
    });
    $("#A3_observation4_confirm").click(function() {
        A3_observation4_check();
    });
    $("#A3_observation4_next").click(function() {
        $("#A3_investigation2_link").click();
    });
    $("#A3_investigation2_link").click(function() {
        A3_investigation2();
    });
    $("#A3_investigation2_confirm").click(function() {
        A3_investigation2_check();
    });
});