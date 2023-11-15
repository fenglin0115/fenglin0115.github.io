var currentStage = "cover";
params.ggbBase64 = ggb_G_10_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
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
    api.unregisterObjectUpdateListener("a");
    api.unregisterObjectUpdateListener("b");
    api.unregisterObjectUpdateListener("c");
    api.unregisterObjectUpdateListener("d");
    api.unregisterObjectUpdateListener("");
    api.unregisterObjectUpdateListener("");
    api.unregisterObjectUpdateListener("");
    api.unregisterObjectUpdateListener("");
    api.unregisterObjectUpdateListener("");
    api.unregisterObjectUpdateListener("");
}

function showA1() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-1 活動1：坐標平面上的對稱點 ");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_1_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}


function showA2() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-1 活動2：函數圖形的對稱性");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_1_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

// 活動一實驗操作一
function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_operation1_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A1_operation1_check);
}

function A1_operation1_check() {
    var api =applet.getAppletObject();
    var a = api.getValue("a");
    a==1 ? $("#A1_operation1_confirm").removeClass("d-none") : $("#A1_operation1_confirm").addClass("d-none");
}

function A1_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A1_operation1_confirm").hide();
        $("#A1_operation1_done").css({"opacity": "1"});
        $("#A1_operation1_next").removeClass("d-none");
        $("#A1_operation1_link img").css({"opacity": "1"});
    })
}

// 活動一觀察記錄一
function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_observation1_link() {
    removeListener();
    $("#A1_observation1_input1").next().find("a").eq(0).html(katex.renderToString("A(2,1)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(1).html(katex.renderToString("A(-2,1)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(2).html(katex.renderToString("A(2,-1)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(3).html(katex.renderToString("A(-2,-1)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(0).html(katex.renderToString("A(2,2)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(1).html(katex.renderToString("A(-2,2)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(2).html(katex.renderToString("A(2,-2)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(3).html(katex.renderToString("A(-2,-2)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(0).html(katex.renderToString("A(2,1)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(1).html(katex.renderToString("A(-2,1)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(2).html(katex.renderToString("A(2,-1)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(3).html(katex.renderToString("A(-2,-1)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(0).html(katex.renderToString("A(1,2)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(1).html(katex.renderToString("A(-1,2)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(2).html(katex.renderToString("A(1,-2)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(3).html(katex.renderToString("A(-1,-2)", { throwOnError: false }));
    $("#A1_observation1_input5").next().find("a").eq(0).html(katex.renderToString("A(2,0)", { throwOnError: false }));
    $("#A1_observation1_input5").next().find("a").eq(1).html(katex.renderToString("A(-2,0)", { throwOnError: false }));
    $("#A1_observation1_input5").next().find("a").eq(2).html(katex.renderToString("A(0,2)", { throwOnError: false }));
    $("#A1_observation1_input5").next().find("a").eq(3).html(katex.renderToString("A(0,-2)", { throwOnError: false }));
    $("#A1_observation1_input6").next().find("a").eq(0).html(katex.renderToString("A(0,1)", { throwOnError: false }));
    $("#A1_observation1_input6").next().find("a").eq(1).html(katex.renderToString("A(0,-1)", { throwOnError: false }));
    $("#A1_observation1_input6").next().find("a").eq(2).html(katex.renderToString("A(1,0)", { throwOnError: false }));
    $("#A1_observation1_input6").next().find("a").eq(3).html(katex.renderToString("A(-1,0)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_observation1_check() {
    var api = applet.getAppletObject();
    var A1_observation1_input1_usrans = $("#A1_observation1_input1").val();
    var A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
    var A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
    var A1_observation1_input4_usrans = $("#A1_observation1_input4").val();
    var A1_observation1_input5_usrans = $("#A1_observation1_input5").val();
    var A1_observation1_input6_usrans = $("#A1_observation1_input6").val();

    if (A1_observation1_input1_usrans == 2 && A1_observation1_input2_usrans == 3 && A1_observation1_input3_usrans == 1 && A1_observation1_input4_usrans == 0 && A1_observation1_input5_usrans == 0 && A1_observation1_input6_usrans == 1) {
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

// 活動一問題探索一
function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    var A1_investigation1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    if (A1_investigation1_usrans == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一實驗操作二
function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_operation2_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("b", A1_operation2_check);
}

function A1_operation2_check() {
    var api =applet.getAppletObject();
    var b = api.getValue("b");
    b==1 ? $("#A1_operation2_confirm").removeClass("d-none") : $("#A1_operation2_confirm").addClass("d-none");
}

function A1_operation2_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A1_operation2_confirm").hide();
        $("#A1_operation2_done").css({"opacity": "1"});
        $("#A1_operation2_next").removeClass("d-none");
        $("#A1_operation2_link img").css({"opacity": "1"});
    })
}

// 活動一觀察紀錄二
function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_observation2_link() {
    removeListener();
    $("#A1_observation2_input1").next().find("a").eq(0).html(katex.renderToString("B(2,1)", { throwOnError: false }));
    $("#A1_observation2_input1").next().find("a").eq(1).html(katex.renderToString("B(-2,1)", { throwOnError: false }));
    $("#A1_observation2_input1").next().find("a").eq(2).html(katex.renderToString("B(2,-1)", { throwOnError: false }));
    $("#A1_observation2_input1").next().find("a").eq(3).html(katex.renderToString("B(-2,-1)", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(0).html(katex.renderToString("B(2,2)", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(1).html(katex.renderToString("B(-2,2)", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(2).html(katex.renderToString("B(2,-2)", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(3).html(katex.renderToString("B(-2,-2)", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(0).html(katex.renderToString("B(2,1)", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(1).html(katex.renderToString("B(-2,1)", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(2).html(katex.renderToString("B(2,-1)", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(3).html(katex.renderToString("B(-2,-1)", { throwOnError: false }));
    $("#A1_observation2_input4").next().find("a").eq(0).html(katex.renderToString("B(1,2)", { throwOnError: false }));
    $("#A1_observation2_input4").next().find("a").eq(1).html(katex.renderToString("B(-1,2)", { throwOnError: false }));
    $("#A1_observation2_input4").next().find("a").eq(2).html(katex.renderToString("B(1,-2)", { throwOnError: false }));
    $("#A1_observation2_input4").next().find("a").eq(3).html(katex.renderToString("B(-1,-2)", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(0).html(katex.renderToString("B(2,0)", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(1).html(katex.renderToString("B(-2,0)", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(2).html(katex.renderToString("B(0,2)", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(3).html(katex.renderToString("B(0,-2)", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(0).html(katex.renderToString("B(0,1)", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(1).html(katex.renderToString("B(0,-1)", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(2).html(katex.renderToString("B(1,0)", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(3).html(katex.renderToString("B(-1,0)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_observation2_check() {
    var api = applet.getAppletObject();
    var A1_observation2_input1_usrans = $("#A1_observation2_input1").val();
    var A1_observation2_input2_usrans = $("#A1_observation2_input2").val();
    var A1_observation2_input3_usrans = $("#A1_observation2_input3").val();
    var A1_observation2_input4_usrans = $("#A1_observation2_input4").val();
    var A1_observation2_input5_usrans = $("#A1_observation2_input5").val();
    var A1_observation2_input6_usrans = $("#A1_observation2_input6").val();

    if (A1_observation2_input1_usrans == 1 && A1_observation2_input2_usrans == 0 && A1_observation2_input3_usrans == 2 && A1_observation2_input4_usrans == 3 && A1_observation2_input5_usrans == 1 && A1_observation2_input6_usrans == 0) {
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

// 活動一問題探索二
function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    var A1_investigation2_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    if (A1_investigation2_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一實驗操作三
function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_operation3_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A1_operation3_check);
}

function A1_operation3_check() {
    var api =applet.getAppletObject();
    var c = api.getValue("c");
    c==1 ? $("#A1_operation3_confirm").removeClass("d-none") : $("#A1_operation3_confirm").addClass("d-none");
}

function A1_operation3_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
        $("#A1_operation3_confirm").hide();
        $("#A1_operation3_done").css({"opacity": "1"});
        $("#A1_operation3_next").removeClass("d-none");
        $("#A1_operation3_link img").css({"opacity": "1"});
    })
}

// 活動一觀察紀錄三
function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_observation3_link() {
    removeListener();
    $("#A1_observation3_input1").next().find("a").eq(0).html(katex.renderToString("C(2,1)", { throwOnError: false }));
    $("#A1_observation3_input1").next().find("a").eq(1).html(katex.renderToString("C(-2,1)", { throwOnError: false }));
    $("#A1_observation3_input1").next().find("a").eq(2).html(katex.renderToString("C(2,-1)", { throwOnError: false }));
    $("#A1_observation3_input1").next().find("a").eq(3).html(katex.renderToString("C(-2,-1)", { throwOnError: false }));
    $("#A1_observation3_input2").next().find("a").eq(0).html(katex.renderToString("C(2,2)", { throwOnError: false }));
    $("#A1_observation3_input2").next().find("a").eq(1).html(katex.renderToString("C(-2,2)", { throwOnError: false }));
    $("#A1_observation3_input2").next().find("a").eq(2).html(katex.renderToString("C(2,-2)", { throwOnError: false }));
    $("#A1_observation3_input2").next().find("a").eq(3).html(katex.renderToString("C(-2,-2)", { throwOnError: false }));
    $("#A1_observation3_input3").next().find("a").eq(0).html(katex.renderToString("C(2,1)", { throwOnError: false }));
    $("#A1_observation3_input3").next().find("a").eq(1).html(katex.renderToString("C(-2,1)", { throwOnError: false }));
    $("#A1_observation3_input3").next().find("a").eq(2).html(katex.renderToString("C(2,-1)", { throwOnError: false }));
    $("#A1_observation3_input3").next().find("a").eq(3).html(katex.renderToString("C(-2,-1)", { throwOnError: false }));
    $("#A1_observation3_input4").next().find("a").eq(0).html(katex.renderToString("C(1,2)", { throwOnError: false }));
    $("#A1_observation3_input4").next().find("a").eq(1).html(katex.renderToString("C(-1,2)", { throwOnError: false }));
    $("#A1_observation3_input4").next().find("a").eq(2).html(katex.renderToString("C(1,-2)", { throwOnError: false }));
    $("#A1_observation3_input4").next().find("a").eq(3).html(katex.renderToString("C(-1,-2)", { throwOnError: false }));
    $("#A1_observation3_input5").next().find("a").eq(0).html(katex.renderToString("C(2,0)", { throwOnError: false }));
    $("#A1_observation3_input5").next().find("a").eq(1).html(katex.renderToString("C(-2,0)", { throwOnError: false }));
    $("#A1_observation3_input5").next().find("a").eq(2).html(katex.renderToString("C(0,2)", { throwOnError: false }));
    $("#A1_observation3_input5").next().find("a").eq(3).html(katex.renderToString("C(0,-2)", { throwOnError: false }));
    $("#A1_observation3_input6").next().find("a").eq(0).html(katex.renderToString("C(0,1)", { throwOnError: false }));
    $("#A1_observation3_input6").next().find("a").eq(1).html(katex.renderToString("C(0,-1)", { throwOnError: false }));
    $("#A1_observation3_input6").next().find("a").eq(2).html(katex.renderToString("C(1,0)", { throwOnError: false }));
    $("#A1_observation3_input6").next().find("a").eq(3).html(katex.renderToString("C(-1,0)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_observation3_check() {
    var api = applet.getAppletObject();
    var A1_observation3_input1_usrans = $("#A1_observation3_input1").val();
    var A1_observation3_input2_usrans = $("#A1_observation3_input2").val();
    var A1_observation3_input3_usrans = $("#A1_observation3_input3").val();
    var A1_observation3_input4_usrans = $("#A1_observation3_input4").val();
    var A1_observation3_input5_usrans = $("#A1_observation3_input5").val();
    var A1_observation3_input6_usrans = $("#A1_observation3_input6").val();

    if (A1_observation3_input1_usrans == 3 && A1_observation3_input2_usrans == 2 && A1_observation3_input3_usrans == 0 && A1_observation3_input4_usrans == 1 && A1_observation3_input5_usrans == 1 && A1_observation3_input6_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

// 活動一問題探索三
function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_investigation3_link() {
    removeListener();
}

function A1_investigation3_check() {
    var A1_investigation3_usrans = $('input[name=A1_investigation3_input1]:checked').val();
    if (A1_investigation3_usrans == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A1_investigation3_confirm").hide();
            $("#A1_investigation3_done").css({"opacity": "1"});
            $("#A1_investigation3_next").removeClass("d-none");
            $("#A1_investigation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一實驗操作四
function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_operation4_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("d", A1_operation4_check);
}

function A1_operation4_check() {
    var api =applet.getAppletObject();
    var d = api.getValue("d");
    d==1 ? $("#A1_operation4_confirm").removeClass("d-none") : $("#A1_operation4_confirm").addClass("d-none");
}

function A1_operation4_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
        $("#A1_operation4_confirm").hide();
        $("#A1_operation4_done").css({"opacity": "1"});
        $("#A1_operation4_next").removeClass("d-none");
        $("#A1_operation4_link img").css({"opacity": "1"});
    })
}

// 活動一觀察紀錄四
function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_observation4_link() {
    removeListener();
    $("#A1_observation4_input1").next().find("a").eq(0).html(katex.renderToString("D(1,2)", { throwOnError: false }));
    $("#A1_observation4_input1").next().find("a").eq(1).html(katex.renderToString("D(-1,2)", { throwOnError: false }));
    $("#A1_observation4_input1").next().find("a").eq(2).html(katex.renderToString("D(1,-2)", { throwOnError: false }));
    $("#A1_observation4_input1").next().find("a").eq(3).html(katex.renderToString("D(-1,-2)", { throwOnError: false }));
    $("#A1_observation4_input2").next().find("a").eq(0).html(katex.renderToString("D(2,2)", { throwOnError: false }));
    $("#A1_observation4_input2").next().find("a").eq(1).html(katex.renderToString("D(-2,2)", { throwOnError: false }));
    $("#A1_observation4_input2").next().find("a").eq(2).html(katex.renderToString("D(2,-2)", { throwOnError: false }));
    $("#A1_observation4_input2").next().find("a").eq(3).html(katex.renderToString("D(-2,-2)", { throwOnError: false }));
    $("#A1_observation4_input3").next().find("a").eq(0).html(katex.renderToString("D(1,2)", { throwOnError: false }));
    $("#A1_observation4_input3").next().find("a").eq(1).html(katex.renderToString("D(-1,2)", { throwOnError: false }));
    $("#A1_observation4_input3").next().find("a").eq(2).html(katex.renderToString("D(1,-2)", { throwOnError: false }));
    $("#A1_observation4_input3").next().find("a").eq(3).html(katex.renderToString("D(-1,-2)", { throwOnError: false }));
    $("#A1_observation4_input4").next().find("a").eq(0).html(katex.renderToString("D(2,1)", { throwOnError: false }));
    $("#A1_observation4_input4").next().find("a").eq(1).html(katex.renderToString("D(-2,1)", { throwOnError: false }));
    $("#A1_observation4_input4").next().find("a").eq(2).html(katex.renderToString("D(2,-1)", { throwOnError: false }));
    $("#A1_observation4_input4").next().find("a").eq(3).html(katex.renderToString("D(-2,-1)", { throwOnError: false }));
    $("#A1_observation4_input5").next().find("a").eq(0).html(katex.renderToString("D(2,0)", { throwOnError: false }));
    $("#A1_observation4_input5").next().find("a").eq(1).html(katex.renderToString("D(-2,0)", { throwOnError: false }));
    $("#A1_observation4_input5").next().find("a").eq(2).html(katex.renderToString("D(0,2)", { throwOnError: false }));
    $("#A1_observation4_input5").next().find("a").eq(3).html(katex.renderToString("D(0,-2)", { throwOnError: false }));
    $("#A1_observation4_input6").next().find("a").eq(0).html(katex.renderToString("D(0,1)", { throwOnError: false }));
    $("#A1_observation4_input6").next().find("a").eq(1).html(katex.renderToString("D(0,-1)", { throwOnError: false }));
    $("#A1_observation4_input6").next().find("a").eq(2).html(katex.renderToString("D(1,0)", { throwOnError: false }));
    $("#A1_observation4_input6").next().find("a").eq(3).html(katex.renderToString("D(-1,0)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_observation4_check() {
    var api = applet.getAppletObject();
    var A1_observation4_input1_usrans = $("#A1_observation4_input1").val();
    var A1_observation4_input2_usrans = $("#A1_observation4_input2").val();
    var A1_observation4_input3_usrans = $("#A1_observation4_input3").val();
    var A1_observation4_input4_usrans = $("#A1_observation4_input4").val();
    var A1_observation4_input5_usrans = $("#A1_observation4_input5").val();
    var A1_observation4_input6_usrans = $("#A1_observation4_input6").val();

    if (A1_observation4_input1_usrans == 0 && A1_observation4_input2_usrans == 2 && A1_observation4_input3_usrans == 3 && A1_observation4_input4_usrans == 1 && A1_observation4_input5_usrans == 2 && A1_observation4_input6_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A1_observation4_confirm").hide();
            $("#A1_observation4_done").css({"opacity": "1"});
            $("#A1_observation4_next").removeClass("d-none");
            $("#A1_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

// 活動一問題探索四
function A1_investigation4() {
    currentStage = "A1_investigation4";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_investigation4_link() {
    removeListener();
}

function A1_investigation4_check() {
    var A1_investigation4_usrans = $('input[name=A1_investigation4_input1]:checked').val();
    if (A1_investigation4_usrans == 5) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4'}).then((result) => {
            $("#A1_investigation4_confirm").hide();
            $("#A1_investigation4_done").css({"opacity": "1"});
            $("#A1_investigation4_next").removeClass("d-none");
            $("#A1_investigation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一問題探索五
function A1_investigation5() {
    currentStage = "A1_investigation5";
    loadApplet("ggbApplet01", ggb_G_10_1_A1);
}

function A1_investigation5_link() {
    removeListener();
    $("#A1_investigation5_input1").next().find("a").eq(0).html(katex.renderToString("D(1,2)", { throwOnError: false }));
    $("#A1_investigation5_input1").next().find("a").eq(1).html(katex.renderToString("D(-1,2)", { throwOnError: false }));
    $("#A1_investigation5_input1").next().find("a").eq(2).html(katex.renderToString("D(1,-2)", { throwOnError: false }));
    $("#A1_investigation5_input1").next().find("a").eq(3).html(katex.renderToString("D(-1,-2)", { throwOnError: false }));
    $("#A1_investigation5_input2").next().find("a").eq(0).html(katex.renderToString("D(2,2)", { throwOnError: false }));
    $("#A1_investigation5_input2").next().find("a").eq(1).html(katex.renderToString("D(-2,2)", { throwOnError: false }));
    $("#A1_investigation5_input2").next().find("a").eq(2).html(katex.renderToString("D(2,-2)", { throwOnError: false }));
    $("#A1_investigation5_input2").next().find("a").eq(3).html(katex.renderToString("D(-2,-2)", { throwOnError: false }));
    $("#A1_investigation5_input3").next().find("a").eq(0).html(katex.renderToString("D(1,2)", { throwOnError: false }));
    $("#A1_investigation5_input3").next().find("a").eq(1).html(katex.renderToString("D(-1,2)", { throwOnError: false }));
    $("#A1_investigation5_input3").next().find("a").eq(2).html(katex.renderToString("D(1,-2)", { throwOnError: false }));
    $("#A1_investigation5_input3").next().find("a").eq(3).html(katex.renderToString("D(-1,-2)", { throwOnError: false }));
    $("#A1_investigation5_input4").next().find("a").eq(0).html(katex.renderToString("D(2,1)", { throwOnError: false }));
    $("#A1_investigation5_input4").next().find("a").eq(1).html(katex.renderToString("D(-2,1)", { throwOnError: false }));
    $("#A1_investigation5_input4").next().find("a").eq(2).html(katex.renderToString("D(2,-1)", { throwOnError: false }));
    $("#A1_investigation5_input4").next().find("a").eq(3).html(katex.renderToString("D(-2,-1)", { throwOnError: false }));
    $("#A1_investigation5_input5").next().find("a").eq(0).html(katex.renderToString("D(2,0)", { throwOnError: false }));
    $("#A1_investigation5_input5").next().find("a").eq(1).html(katex.renderToString("D(-2,0)", { throwOnError: false }));
    $("#A1_investigation5_input5").next().find("a").eq(2).html(katex.renderToString("D(0,2)", { throwOnError: false }));
    $("#A1_investigation5_input5").next().find("a").eq(3).html(katex.renderToString("D(0,-2)", { throwOnError: false }));
    $("#A1_investigation5_input6").next().find("a").eq(0).html(katex.renderToString("D(0,1)", { throwOnError: false }));
    $("#A1_investigation5_input6").next().find("a").eq(1).html(katex.renderToString("D(0,-1)", { throwOnError: false }));
    $("#A1_investigation5_input6").next().find("a").eq(2).html(katex.renderToString("D(1,0)", { throwOnError: false }));
    $("#A1_investigation5_input6").next().find("a").eq(3).html(katex.renderToString("D(-1,0)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_investigation5_check() {
    var api = applet.getAppletObject();
    var A1_investigation5_input1_usrans = $("#A1_investigation5_input1").val();
    var A1_investigation5_input2_usrans = $("#A1_investigation5_input2").val();
    var A1_investigation5_input3_usrans = $("#A1_investigation5_input3").val();
    var A1_investigation5_input4_usrans = $("#A1_investigation5_input4").val();

    if (A1_investigation5_input1_usrans == 2 && A1_investigation5_input2_usrans == 1 && A1_investigation5_input3_usrans == 3 && A1_investigation5_input4_usrans == 0) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索5'}).then((result) => {
            $("#A1_investigation5_confirm").hide();
            $("#A1_investigation5_done").css({"opacity": "1"});
            $("#A1_investigation5_next").removeClass("d-none");
            $("#A1_investigation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

// 活動二實驗操作一
function A2_operation1()  {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_G_10_1_A2);
}

function A2_operation1_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("b", A2_operation1_check);
}

function A2_operation1_check() {
    var api =applet.getAppletObject();
    var b = api.getValue("b");
    b==1 ? $("#A2_operation1_confirm").removeClass("d-none") : $("#A2_operation1_confirm").addClass("d-none");
}

function A2_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A2_operation1_confirm").hide();
        $("#A2_operation1_done").css({"opacity": "1"});
        $("#A2_operation1_next").removeClass("d-none");
        $("#A2_operation1_link img").css({"opacity": "1"});
    })
}

// 活動二觀察紀錄一
function A2_observation1()  {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_G_10_1_A2);
}

function A2_observation1_link() {
    removeListener();
}

function A2_observation1_check() {
    var api = applet.getAppletObject();
    var A2_observation1_input1_usrans = $('input[name=A2_observation1_input1]:checked').val();

    if (A2_observation1_input1_usrans == 2) {
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

// 活動二問題探索一
function A2_investigation1()  {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_G_10_1_A2);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    var api = applet.getAppletObject();
    var A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();

    if (A2_investigation1_input1_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}


// 活動二實驗操作二
function A2_operation2()  {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_1_A2_operation2);
}

function A2_operation2_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A2_operation2_check);
}

function A2_operation2_check() {
    var api =applet.getAppletObject();
    var c = api.getValue("c");
    c==1 ? $("#A2_operation2_confirm").removeClass("d-none") : $("#A2_operation2_confirm").addClass("d-none");
}

function A2_operation2_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A2_operation2_confirm").hide();
        $("#A2_operation2_done").css({"opacity": "1"});
        $("#A2_operation2_next").removeClass("d-none");
        $("#A2_operation2_link img").css({"opacity": "1"});
    })
}

// 活動二觀察記錄二
function A2_observation2()  {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_1_A2_operation2);
}

function A2_observation2_link() {
    removeListener();
}

function A2_observation2_check() {
    var api = applet.getAppletObject();
    var A2_observation2_input1_usrans = $('input[name=A2_observation2_input1]:checked').val();

    if (A2_observation2_input1_usrans == 3) {
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


// 活動二問題探索二
function A2_investigation2()  {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_1_A2_operation2);
}

function A2_investigation2_link() {
    removeListener();
}

function A2_investigation2_check() {
    var api = applet.getAppletObject();
    var A2_investigation2_input1_usrans = $('input[name=A2_investigation2_input1]:checked').val();

    if (A2_investigation2_input1_usrans == 3) {
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

// 活動二問題探索三
function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02_operation2", ggb_G_10_1_A2_operation2);
}

function A2_investigation3_link() {
    removeListener();
}

function A2_investigation3_check() {
    var A2_investigation3_usrans1 = $('input[name=A2_investigation3_input1]:checked').val();
    var A2_investigation3_usrans2 = $('input[name=A2_investigation3_input2]:checked').val();
    if((A2_investigation3_usrans1 != "") && (A2_investigation3_usrans2 != "")) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_done").css({"opacity": "1"});
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({"opacity": "1"});
        })
    } else if ((A2_investigation3_usrans1 == "") || (A2_investigation3_usrans2 == "")) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請簡單說明你的推測或想法！'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    } 
}


// function showA3() {
//     $("#load-wrapper").addClass("d-flex");
//     $("#load-wrapper").show();
//     $("#navbarDropdown").text("活動3");
//     $("#navbarDropdown").val("活動3");
//     $(".outlines").hide();
//     $("#outlineA3").show();
//     $(".title > span ").html("G-10-1 活動3：點對稱 " + katex.renderToString("x=y", { throwOnError: false }) + "");
//     params.id = "ggbApplet03";
//     params.ggbBase64 = ggb_G_10_1_A3;
//     applet = new GGBApplet(params, true);
//     applet.inject('ggb-element');
//     $(".operation, .observation, .investigation").hide();
//     $("#A3_operation1").show();
//     $(".outline").click(function() {
//         showWorksheetsContents(this.id);
//     });
// }



$(document).ready(function() {
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });
    $("#A1_operation1_confirm").click(function() {
        A1_operation1_confirm();
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
    $("#A1_operation2_confirm").click(function() {
        A1_operation2_confirm();
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
        $("#A1_operation3_link").click();
    });


    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });
    $("#A1_operation3_confirm").click(function() {
        A1_operation3_confirm();
    });
    $("#A1_operation3_next").click(function() {
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
        $("#A1_operation4_link").click();
    });


    $("#A1_operation4_link").click(function() {
        A1_operation4();
    });
    $("#A1_operation4_confirm").click(function() {
        A1_operation4_confirm();
    });
    $("#A1_operation4_next").click(function() {
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
        $("#A1_investigation5_link").click();
    });
    $("#A1_investigation5_link").click(function() {
        A1_investigation5();
    });
    $("#A1_investigation5_confirm").click(function() {
        A1_investigation5_check();
    });
    $("#A1_investigation5_next").click(function() {
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
    $("#A2_operation2_confirm").click(function() {
        A2_operation2_confirm();
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


});
