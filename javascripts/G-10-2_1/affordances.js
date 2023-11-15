var currentStage = "cover";
params.ggbBase64 = ggb_G_10_2_1_cover;
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
    api.unregisterObjectUpdateListener("h");
    api.unregisterObjectUpdateListener("k");
    api.unregisterObjectUpdateListener("a_1");
    api.unregisterObjectUpdateListener("b_1");
    api.unregisterObjectUpdateListener("c_1");
    api.unregisterObjectUpdateListener("text6");
    api.unregisterObjectUpdateListener("button2");
}

function showA1() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-2(1) 活動1：點與直線的平移");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_2_1_A1;
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
    $(".title > span ").html("G-10-2(1) 活動2：平行、垂直之兩直線的斜率關係");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_2_1_A2;
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
    loadApplet("ggbApplet01", ggb_G_10_2_1_A1);
}

function A1_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("h", A1_operation1_check);
    api.registerObjectUpdateListener("k", A1_operation1_check);

}

function A1_operation1_check() {
    var api =applet.getAppletObject();
    var h = api.getValue("h");
    var k = api.getValue("k");
    if (h !=0 && k !=0 ) {
        $("#A1_operation1_confirm").removeClass("d-none");
    }
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
    loadApplet("ggbApplet01", ggb_G_10_2_1_A1);
}

function A1_observation1_link() {
    removeListener();
    $("#A1_observation1_input1").next().find("a").eq(0).html(katex.renderToString("Q(3,1)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(1).html(katex.renderToString("Q(-1,1)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(2).html(katex.renderToString("Q(1,3)", { throwOnError: false }));
    $("#A1_observation1_input1").next().find("a").eq(3).html(katex.renderToString("Q(1,-1)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(0).html(katex.renderToString("Q(2,1)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(1).html(katex.renderToString("Q(0,1)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(2).html(katex.renderToString("Q(1,2)", { throwOnError: false }));
    $("#A1_observation1_input2").next().find("a").eq(3).html(katex.renderToString("Q(1,0)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(0).html(katex.renderToString("Q(4,-4)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(1).html(katex.renderToString("Q(-1,1)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(2).html(katex.renderToString("Q(3,1)", { throwOnError: false }));
    $("#A1_observation1_input3").next().find("a").eq(3).html(katex.renderToString("Q(4,1)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(0).html(katex.renderToString("Q(3,-3)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(1).html(katex.renderToString("Q(-1,-3)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(2).html(katex.renderToString("Q(3,-1)", { throwOnError: false }));
    $("#A1_observation1_input4").next().find("a").eq(3).html(katex.renderToString("Q(-3,-1)", { throwOnError: false }));
    $("#A1_observation1_input5").next().find("a").eq(0).html("右移3單位");
    $("#A1_observation1_input5").next().find("a").eq(1).html("左移3單位");
    $("#A1_observation1_input5").next().find("a").eq(2).html("上移3單位");
    $("#A1_observation1_input5").next().find("a").eq(3).html("右移2單位");
    $("#A1_observation1_input6").next().find("a").eq(0).html("右移1單位、下移2單位");
    $("#A1_observation1_input6").next().find("a").eq(1).html("右移1單位、上移2單位");
    $("#A1_observation1_input6").next().find("a").eq(2).html("左移1單位、下移2單位");
    $("#A1_observation1_input6").next().find("a").eq(3).html("左移1單位、上移2單位");
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

    if (A1_observation1_input1_usrans == 0 && A1_observation1_input2_usrans == 3 && A1_observation1_input3_usrans == 1 && A1_observation1_input4_usrans == 0 && A1_observation1_input5_usrans == 0 && A1_observation1_input6_usrans == 2) {
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
    loadApplet("ggbApplet01", ggb_G_10_2_1_A1);
}

function A1_investigation1_link() {
    removeListener();
    $("#A1_investigation1_input1").next().find("a").eq(0).html(katex.renderToString("P(x+h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input1").next().find("a").eq(1).html(katex.renderToString("P(x-h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input1").next().find("a").eq(2).html(katex.renderToString("P(x+h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input1").next().find("a").eq(3).html(katex.renderToString("P(x-h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input2").next().find("a").eq(0).html(katex.renderToString("P(x+h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input2").next().find("a").eq(1).html(katex.renderToString("P(x-h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input2").next().find("a").eq(2).html(katex.renderToString("P(x+h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input2").next().find("a").eq(3).html(katex.renderToString("P(x-h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input3").next().find("a").eq(0).html(katex.renderToString("P(x+h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input3").next().find("a").eq(1).html(katex.renderToString("P(x-h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input3").next().find("a").eq(2).html(katex.renderToString("P(x+h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input3").next().find("a").eq(3).html(katex.renderToString("P(x-h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input4").next().find("a").eq(0).html(katex.renderToString("P(x+h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input4").next().find("a").eq(1).html(katex.renderToString("P(x-h,y+k)", { throwOnError: false }));
    $("#A1_investigation1_input4").next().find("a").eq(2).html(katex.renderToString("P(x+h,y-k)", { throwOnError: false }));
    $("#A1_investigation1_input4").next().find("a").eq(3).html(katex.renderToString("P(x-h,y-k)", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A1_investigation1_check() {
    var A1_investigation1_usrans1 = $("#A1_investigation1_input1").val();
    var A1_investigation1_usrans2 = $("#A1_investigation1_input2").val();
    var A1_investigation1_usrans3 = $("#A1_investigation1_input3").val();
    var A1_investigation1_usrans4 = $("#A1_investigation1_input4").val();
    if(A1_investigation1_usrans1 == 0 && A1_investigation1_usrans2 == 2 && A1_investigation1_usrans3 == 1 && A1_investigation1_usrans4 == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

// 活動一實驗操作二
function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_operation2", ggb_G_10_2_1_A1_operation2);
}

function A1_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A1_operation2_check);
    api.registerObjectUpdateListener("b", A1_operation2_check);
    api.registerObjectUpdateListener("c", A1_operation2_check);
    api.registerObjectUpdateListener("h", A1_operation2_check);

}

function A1_operation2_check() {
    var api =applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var h = api.getValue("h");
    if (a == 2 && b == -1 && c == 0 && h == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A1_operation2_confirm").hide();
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })       
    }
}

// 活動一觀察記錄二
function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_operation2", ggb_G_10_2_1_A1_operation2);
}

function A1_observation2_link() {
    removeListener();
}

function A1_observation2_check() {
    var A1_observation2_usrans1 = $('input[name=A1_observation2_input1]:checked').val();
    var A1_observation2_usrans2 = $('input[name=A1_observation2_input2]:checked').val();
    var A1_observation2_usrans3 = $('input[name=A1_observation2_input3]:checked').val();
    var A1_observation2_usrans4 = $('input[name=A1_observation2_input4]:checked').val();
    var A1_observation2_usrans5 = $('input[name=A1_observation2_input5]:checked').val();
    if (A1_observation2_usrans1 == 1 && A1_observation2_usrans2 == 2 && A1_observation2_usrans3 == 1 && A1_observation2_usrans4 == 2 && A1_observation2_usrans5 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一問題探索二
function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_operation2", ggb_G_10_2_1_A1_operation2);
}

function A1_investigation2_link() {
    removeListener();

}

function A1_investigation2_check() {
    var A1_investigation2_usrans1 = $('input[name=A1_investigation2_input1]:checked').val();
    var A1_investigation2_usrans2 = $('input[name=A1_investigation2_input2]:checked').val();
    var A1_investigation2_usrans3 = $('input[name=A1_investigation2_input3]:checked').val();
    var A1_investigation2_usrans4 = $('input[name=A1_investigation2_input4]:checked').val();
    var A1_investigation2_usrans5 = $('input[name=A1_investigation2_input5]:checked').val();
    if(A1_investigation2_usrans1 == 1 && A1_investigation2_usrans2 == 2 && A1_investigation2_usrans3 == 1 && A1_investigation2_usrans4 == 1 && A1_investigation2_usrans5 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

// 活動一實驗操作三
function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_operation3", ggb_G_10_2_1_A1_operation3);
}

function A1_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A1_operation3_check);
    api.registerObjectUpdateListener("b", A1_operation3_check);
    api.registerObjectUpdateListener("c", A1_operation3_check);
    api.registerObjectUpdateListener("k", A1_operation3_check);

}

function A1_operation3_check() {
    var api =applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var k = api.getValue("k");
    if (a == 2 && b == 1 && c == 0 && k == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A1_operation3_confirm").hide();
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
    }
}

// 活動一觀察記錄三
function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01_operation3", ggb_G_10_2_1_A1_operation3);
}

function A1_observation3_link() {
    removeListener();
}

function A1_observation3_check() {
    var A1_observation3_usrans1 = $('input[name=A1_observation3_input1]:checked').val();
    var A1_observation3_usrans2 = $('input[name=A1_observation3_input2]:checked').val();
    var A1_observation3_usrans3 = $('input[name=A1_observation3_input3]:checked').val();
    var A1_observation3_usrans4 = $('input[name=A1_observation3_input4]:checked').val();
    var A1_observation3_usrans5 = $('input[name=A1_observation3_input5]:checked').val();
    if (A1_observation3_usrans1 == 3 && A1_observation3_usrans2 == 2 && A1_observation3_usrans3 == 3 && A1_observation3_usrans4 == 2 && A1_observation3_usrans5 == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動一問題探索三
function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01_operation3", ggb_G_10_2_1_A1_operation3);
}

function A1_investigation3_link() {
    removeListener();
}

function A1_investigation3_check() {
    var A1_investigation3_usrans1 = $('input[name=A1_investigation3_input1]:checked').val();
    var A1_investigation3_usrans2 = $('input[name=A1_investigation3_input2]:checked').val();
    var A1_investigation3_usrans3 = $('input[name=A1_investigation3_input3]:checked').val();
    var A1_investigation3_usrans4 = $('input[name=A1_investigation3_input4]:checked').val();
    var A1_investigation3_usrans5 = $('input[name=A1_investigation3_input5]:checked').val();
    if(A1_investigation3_usrans1 == 3 && A1_investigation3_usrans2 == 2 && A1_investigation3_usrans3 == 3 && A1_investigation3_usrans4 == 1 && A1_investigation3_usrans5 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A1_investigation3_confirm").hide();
            $("#A1_investigation3_done").css({"opacity": "1"});
            $("#A1_investigation3_next").removeClass("d-none");
            $("#A1_investigation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

// 活動二實驗操作一
function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_G_10_2_1_A2);
}

function A2_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A2_operation1_check);
    api.registerObjectUpdateListener("b", A2_operation1_check);
    api.registerObjectUpdateListener("c", A2_operation1_check);
    api.registerObjectUpdateListener("h", A2_operation1_check);
    api.registerObjectUpdateListener("k", A2_operation1_check);

}

function A2_operation1_check() {
    var api =applet.getAppletObject();
    var a = api.getValue("a");
    var b = api.getValue("b");
    var c = api.getValue("c");
    var h = api.getValue("h");
    var k = api.getValue("k");
    if (a == 2 && b == -1 && c == 0 && (h!=0 || k!=0) ) {
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

// 活動二觀察記錄一
function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_G_10_2_1_A2);
}

function A2_observation1_link() {
    removeListener();

}

function A2_observation1_check() {
    var A2_observation1_input1 = $("#A2_observation1_input1").val();
    var A2_observation1_input2 = $("#A2_observation1_input2").val();
    var A2_observation1_input3 = $("#A2_observation1_input3").val();
    var A2_observation1_input4 = $("#A2_observation1_input4").val();
    var A2_observation1_input5 = $("#A2_observation1_input5").val();
    var A2_observation1_input6 = $("#A2_observation1_input6").val();
    var A2_observation1_input7 = $('input[name=A2_observation1_input7]:checked').val();
    var A2_observation1_input8 = $('input[name=A2_observation1_input8]:checked').val();
    if ((A2_observation1_input1!="") && (A2_observation1_input2==2) && (A2_observation1_input3!="") && (A2_observation1_input4==2) && (A2_observation1_input5!="") && (A2_observation1_input6==2) && A2_observation1_input7==1 && A2_observation1_input8==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動二問題探索一
function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_G_10_2_1_A2);
}

function A2_investigation1_link() {
    removeListener();

}

function A2_investigation1_check() {
    var A2_investigation1_usrans1 = $('input[name=A2_investigation1_input1]:checked').val();
    var A2_investigation1_usrans2 = $('input[name=A2_investigation1_input2]:checked').val();
    if(A2_investigation1_usrans1 == 1 && A2_investigation1_usrans2 == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

// 活動二實驗操作二
function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_2_1_A2_operation2);
}

function A2_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a_1", A2_operation2_check);
    api.registerObjectUpdateListener("b_1", A2_operation2_check);
    api.registerObjectUpdateListener("c_1", A2_operation2_check);
    api.registerObjectUpdateListener("text6", A2_operation2_check);
    api.registerObjectUpdateListener("button2", A2_operation2_reset);
}

var A2_operation2_check1 = false, A2_operation2_check2 = false;
function A2_operation2_check() {
    var api =applet.getAppletObject();
    var a1 = api.getValue("a_1");
    var b1 = api.getValue("b_1");
    var c1 = api.getValue("c_1");
    if (Math.abs(a1)+Math.abs(b1)+Math.abs(c1)!=0) {A2_operation2_check1 = true;}
        
    else{
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '係數不可全為0，請重新輸入！'})
        }
    
    if (api.getVisible("text6") == true) {A2_operation2_check2 = true;}

    if (A2_operation2_check1 == true && A2_operation2_check2 == true ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A2_operation2_confirm").hide();
            $("#A2_operation2_done").css({"opacity": "1"});
            $("#A2_operation2_next").removeClass("d-none");
            $("#A2_operation2_link img").css({"opacity": "1"});
        })
    }
}

function A2_operation2_reset() {
    var api = applet.getAppletObject();
    A2_operation2_check1 = false;
    A2_operation2_check2 = false;
}

// 活動二觀察記錄二
function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_2_1_A2_operation2);
}

function A2_observation2_link() {
    removeListener();
    $("#A1_observation2_input2").next().find("a").eq(0).html(katex.renderToString("1", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(1).html(katex.renderToString("-1", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(2).html(katex.renderToString("\dfrac{1}{2}", { throwOnError: false }));
    $("#A1_observation2_input2").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(0).html(katex.renderToString("1", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(1).html(katex.renderToString("-1", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(2).html(katex.renderToString("\dfrac{1}{2}", { throwOnError: false }));
    $("#A1_observation2_input3").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(0).html(katex.renderToString("-\dfrac{1}{4}", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(1).html(katex.renderToString("\dfrac{1}{4}", { throwOnError: false }));
    $("#A1_observation2_input5").next().find("a").eq(2).html("不存在");
    $("#A1_observation2_input5").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(0).html(katex.renderToString("1", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(1).html(katex.renderToString("-1", { throwOnError: false }));
    $("#A1_observation2_input6").next().find("a").eq(2).html("不存在");
    $("#A1_observation2_input6").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_observation2_input8").next().find("a").eq(0).html(katex.renderToString("-2", { throwOnError: false }));
    $("#A1_observation2_input8").next().find("a").eq(1).html(katex.renderToString("2", { throwOnError: false }));
    $("#A1_observation2_input8").next().find("a").eq(2).html("不存在");
    $("#A1_observation2_input8").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_observation2_input9").next().find("a").eq(0).html(katex.renderToString("1", { throwOnError: false }));
    $("#A1_observation2_input9").next().find("a").eq(1).html(katex.renderToString("-1", { throwOnError: false }));
    $("#A1_observation2_input9").next().find("a").eq(2).html("不存在");
    $("#A1_observation2_input9").next().find("a").eq(3).html(katex.renderToString("0", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });

}

function A2_observation2_check() {
    var A2_observation2_input1 = $("#A2_observation2_input1").val();
    var A2_observation2_input2 = $("#A2_observation2_input2").val();
    var A2_observation2_input3 = $("#A2_observation2_input3").val();
    var A2_observation2_input4 = $("#A2_observation2_input4").val();
    var A2_observation2_input5 = $("#A2_observation2_input5").val();
    var A2_observation2_input6 = $("#A2_observation2_input6").val();
    var A2_observation2_input7 = $("#A2_observation2_input7").val();
    var A2_observation2_input8 = $("#A2_observation2_input8").val();
    var A2_observation2_input9 = $("#A2_observation2_input9").val();
    if ((A2_observation2_input1 != "") && A2_observation2_input2 == 1 && A2_observation2_input3 == 1 && (A2_observation2_input4 != "") && A2_observation2_input5 == 1 && A2_observation2_input6 == 1 && (A2_observation2_input7 != "") && A2_observation2_input8 == 1 && A2_observation2_input9 == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    }
}

// 活動二問題探索二
function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_operation2", ggb_G_10_2_1_A2_operation2);
}

function A2_investigation2_link() {
    removeListener();

}

function A2_investigation2_check() {
    var A2_investigation2_usrans1 = $('input[name=A2_investigation2_input1]:checked').val();
    var A2_investigation2_usrans2 = $('input[name=A2_investigation2_input2]:checked').val();
    var A2_investigation2_usrans3 = $('input[name=A2_investigation2_input3]:checked').val();
    if(A2_investigation2_usrans1 == 3 && (A2_investigation2_usrans2 != "") && (A2_investigation2_usrans3 != "") ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
    } else if ((A2_investigation2_usrans2 == "") || (A2_investigation2_usrans3 == "")) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請簡單說明你的推測或想法！'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再仔細觀察看看！'})
    } 
}

$(document).ready(function() {

    // 活動一
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
        showA2();
    });

    // 活動二
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
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
});
