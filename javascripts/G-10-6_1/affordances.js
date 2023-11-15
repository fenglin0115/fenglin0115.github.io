var currentStage = "cover";
params.ggbBase64 = ggb_G_10_6_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
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



//移除監聽
function removeListener() {
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("testtime");
    api.unregisterObjectUpdateListener("check");
    api.unregisterObjectUpdateListener("checkA");
    api.unregisterObjectUpdateListener("checkB");
    api.unregisterObjectUpdateListener("A");
}

//SHOW活動
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-6(1) 活動1：廣義角的複習");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_G_10_6_1_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_G_10_6_1_A1_1);
}

function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("testtime", A1_operation1_check)
}

function A1_operation1_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
    let point = api.getValue("point");
    let check = api.getValue("testtime");
    let A1_ope1_fin = $("#A1_operation1_link img").css("opacity");


    if (check == 25 && point >= 10 && A1_ope1_fin != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_operation1_done").css({ "opacity": "1" });
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({ "opacity": "1" });

            removeListener();
        })
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_G_10_6_1_A1_2);

}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();

    api.setValue("showc", false);
    //註冊監聽物件
    api.registerObjectUpdateListener("testtime", A1_operation2_check);
}

function A1_operation2_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
    let point = api.getValue("point");
    let check = api.getValue("testtime");
    let A1_ope2_fin = $("#A1_operation2_link img").css("opacity");


    if (check == 25 && point >= 8 && A1_ope2_fin != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_operation1_done").css({ "opacity": "1" });
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({ "opacity": "1" });

            removeListener();
        })
    }

}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_2", ggb_G_10_6_1_A1_2);
}

function A1_investigation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("showc", true);
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });

}

function A1_investigation1_check() {
    //檢查問題探索學習單
    let A1_inv_input1 = $("#A1_investigation1_input1").val();
    let A1_inv_input2 = $("#A1_investigation1_input2").val();
    let A1_inv_input3 = $("#A1_investigation1_input3").val();
    let A1_inv_input4_1 = $("#A1_investigation1_input4_option1").prop("checked");
    let A1_inv_input4_2 = $("#A1_investigation1_input4_option2").prop("checked");
    let A1_inv_input4_3 = $("#A1_investigation1_input4_option3").prop("checked");
    let A1_inv_input4_4 = $("#A1_investigation1_input4_option4").prop("checked");
    let A1_inv_input5 = $("#A1_investigation1_input5").val();
    let A1_inv_input6 = $("#A1_investigation1_input6").val();
    let A1_inv_input7 = $("#A1_investigation1_input7").val();
    let A1_inv_input8 = $("#A1_investigation1_input8").val();

    console.log(A1_inv_input1);

    let A1_ans1 = A1_inv_input1 == 2 && A1_inv_input2 == 2 && A1_inv_input3 == 2
    let A1_ans2 = A1_inv_input4_1 && !A1_inv_input4_2 && !A1_inv_input4_3 && A1_inv_input4_4
    let A1_ans3 = A1_inv_input5 == 4 && A1_inv_input6 == 2
    let A1_ans4 = A1_inv_input7 == 1 && A1_inv_input8 == 2

    //甜蜜警告
    if (A1_ans1 && A1_ans2 && A1_ans3 && A1_ans4) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            //答對後調整內容
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({ "opacity": "1" });
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({ "opacity": "1" });
        })
        removeListener();
    } else if (!A1_ans1) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第一題不對喔! 想想看我們怎麼定義有向角的？' })

    } else if (!A1_ans2) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第二題不對喔! 拖動滑桿看看下列角度的情形吧' })

    } else if (!A1_ans3) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第三題不對喔! 想想看什麼時候終邊會繞一圈呢？' })

    } else if (!A1_ans4) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第四題不對喔! 想想看活動中的終邊旋轉的方向吧' })

    }
}


function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-6(1) 活動2：三角比");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_6_1_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_G_10_6_1_A2);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    // let check = api.getValue("check");
    api.registerObjectUpdateListener("check", A2_operation1_check)
    // api.registerObjectUpdateListener("A", A2_operation1_check)
}

function A2_operation1_check() {
    let api = applet.getAppletObject();
    //建立監聽函式
    let check = api.getValue("check");
    let A2_ope1_done = $("#A2_operation1_link img").css("opacity");

    console.log(check);

    if (check == 1 && A2_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A2_operation1_done").css({ "opacity": "1" });
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({ "opacity": "1" });

            removeListener();
        })
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_G_10_6_1_A2);
}

function A2_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

function A2_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A2_obs_input1_1 = $("#A2_observation1_input1_1").val() == 2;
    let A2_obs_input1_2 = $("#A2_observation1_input1_2").val() == 2;
    let A2_obs_input1_3 = $("#A2_observation1_input1_4").val() == 3;
    let A2_obs_input1_4 = $("#A2_observation1_input1_5").val() == 2;
    let A2_obs_input2_1 = $("#A2_observation1_input2_1").val() == 1;
    let A2_obs_input2_2 = $("#A2_observation1_input2_2").val() == 2;
    let A2_obs_input2_3 = $("#A2_observation1_input2_4").val() == 1;
    let A2_obs_input2_4 = $("#A2_observation1_input2_5").val() == 2;
    let A2_obs_input3_1 = $("#A2_observation1_input3_1").val() == 2;
    let A2_obs_input3_2 = $("#A2_observation1_input3_2").val() == 2;
    let A2_obs_input3_3 = $("#A2_observation1_input3_4").val() == 2;
    let A2_obs_input3_4 = $("#A2_observation1_input3_5").val() == 3;
    // console.log(A2_obs_input2_1)
    // console.log(A2_obs_input2_2)
    // console.log(A2_obs_input2_3)
    // console.log(A2_obs_input2_4)
    //甜蜜警告
    if (A2_obs_input1_1 && A2_obs_input1_2 && A2_obs_input1_3 && A2_obs_input1_4 &&
        A2_obs_input2_1 && A2_obs_input2_2 && A2_obs_input2_3 && A2_obs_input2_4 &&
        A2_obs_input3_1 && A2_obs_input3_2 && A2_obs_input3_3 && A2_obs_input3_4
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察紀錄1' }).then((result) => {
            //答對後調整內容
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({ "opacity": "1" });
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_G_10_6_1_A2);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    //檢查問題探索學習單
    let A2_inv_input1 = $("#A2_investigation1_input1_option2").prop("checked");
    let A2_inv_input2 = $("#A2_investigation1_input2_option1").prop("checked");
    let A2_inv_input3_1 = $("#A2_investigation1_input3_option1").prop("checked");
    let A2_inv_input3_2 = $("#A2_investigation1_input3_option2").prop("checked");
    let A2_inv_input4 = $("#A2_investigation1_textarea1").val();

    //甜蜜警告
    if (A2_inv_input4 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請留下你的想法吧' })

    } else if (A2_inv_input1 && A2_inv_input2) {
        if (A2_inv_input3_1) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                //答對後調整內容
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_done").css({ "opacity": "1" });
                $("#A2_investigation1_next").removeClass("d-none");
                $("#A2_investigation1_link img").css({ "opacity": "1" });
            })
        } else if (A2_inv_input3_2) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '其實決定底角的同時，就決定了比值的大小喔！我們看下去吧' }).then((result) => {
                //答對後調整內容
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_done").css({ "opacity": "1" });
                $("#A2_investigation1_next").removeClass("d-none");
                $("#A2_investigation1_link img").css({ "opacity": "1" });
            })
        } else {
            Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

        }
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}


function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-10-6(1) 活動3：三角比(符號篇)");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_6_1_A3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03", ggb_G_10_6_1_A3);
}

function A3_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("check", A3_operation1_check)
}

function A3_operation1_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check");
    let A3_ope_done = $("#A3_operation1_link img").css("opacity");
    // console.log(check);

    //建立監聽函式
    if (check == 1 && A3_ope_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            // $("#A2_operation1_confirm").hide();
            $("#A3_operation1_done").css({ "opacity": "1" });
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_G_10_6_1_A3);
}

function A3_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}


function A3_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A3_obs_input1_1 = $("#A3_observation1_input1_1").val() == 1;
    let A3_obs_input1_2 = $("#A3_observation1_input1_2").val() == 1;
    let A3_obs_input1_3 = $("#A3_observation1_input1_3").val() == 2;
    let A3_obs_input2_1 = $("#A3_observation1_input2_1").val() == 3;
    let A3_obs_input2_2 = $("#A3_observation1_input2_2").val() == 1;
    let A3_obs_input2_3 = $("#A3_observation1_input2_3").val() == 1;
    let A3_obs_input3_1 = $("#A3_observation1_input3_1").val() == 2;
    let A3_obs_input3_2 = $("#A3_observation1_input3_2").val() == 3;
    let A3_obs_input3_3 = $("#A3_observation1_input3_3").val() == 3;

    console.log(A3_obs_input1_1)
    //甜蜜警告
    if (A3_obs_input1_1 && A3_obs_input1_2 && A3_obs_input1_3 &&
        A3_obs_input2_1 && A3_obs_input2_2 && A3_obs_input2_3 &&
        A3_obs_input3_1 && A3_obs_input3_2 && A3_obs_input3_3
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({ "opacity": "1" });
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })

    }

}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_G_10_6_1_A3);
}

function A3_investigation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

function A3_investigation1_check() {
    //檢查問題探索學習單
    let A3_inv1_input1_1 = $("#A3_investigation1_input1_1").val() == 2;
    let A3_inv1_input1_2 = $("#A3_investigation1_input1_2").val() == 3;
    let A3_inv1_input2_1 = $("#A3_investigation1_input2_1").val() == 1;
    let A3_inv1_input2_2 = $("#A3_investigation1_input2_2").val() == 3;
    let A3_inv1_input3_1 = $("#A3_investigation1_input3_1").val() == 2;
    let A3_inv1_input3_2 = $("#A3_investigation1_input3_2").val() == 1;
    let A3_inv1_input4_1 = $("#A3_investigation1_input4_option1").prop("checked");
    let A3_inv1_input4_2 = $("#A3_investigation1_input4_option2").prop("checked");
    let A3_inv1_input5 = $("#A3_investigation1_textarea1").val();

    //甜蜜警告
    if (A3_inv1_input5 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧!' })

    } else if (A3_inv1_input1_1 && A3_inv1_input1_2 && A3_inv1_input2_1 && A3_inv1_input2_2 &&
        A3_inv1_input3_1 && A3_inv1_input3_2) {
        if (A3_inv1_input4_1) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                //答對後調整內容
                $("#A3_investigation1_confirm").hide();
                $("#A3_investigation1_done").css({ "opacity": "1" });
                $("#A3_investigation1_next").removeClass("d-none");
                $("#A3_investigation1_link img").css({ "opacity": "1" });
            })
        } else if (A3_inv1_input4_2) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '其實總是會小於一喔！我們看下去吧' }).then((result) => {
                //答對後調整內容
                $("#A3_investigation1_confirm").hide();
                $("#A3_investigation1_done").css({ "opacity": "1" });
                $("#A3_investigation1_next").removeClass("d-none");
                $("#A3_investigation1_link img").css({ "opacity": "1" });
            })
        } else {
            Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的猜測吧！' })
        }
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("G-10-6(1) 活動4：廣義三角比");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_G_10_6_1_A4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

//切換廣義與狹義的函式
function A4ope1() {
    let api = applet.getAppletObject();
    let more = api.getValue("more");
    if (more == 1) {
        api.evalCommand("RunClickScript(view)")
    }
    api.setValue("thinktime", 0)
    console.log("A4ope1 running");
}

function A4ope2() {
    let api = applet.getAppletObject();
    let more = api.getValue("more");
    if (more == 0) {
        api.evalCommand("RunClickScript(view)")
    }
    api.setValue("thinktime", 0)
    console.log("A4ope2 running");
}

function A4_operation1() {
    currentStage = "A4_operation1";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("checkA", A4_operation1_check);
    A4ope1();
}

function A4_operation1_check() {
    let api = applet.getAppletObject();
    //建立監聽函式
    let check = api.getValue("checkA")
    let A4_ope1_done = $("#A4_operation1_link img").css("opacity");
    if (check == 1 && A4_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A4_investigation1_confirm").hide();
            $("#A4_operation1_done").css({ "opacity": "1" });
            $("#A4_operation1_next").removeClass("d-none");
            $("#A4_operation1_link img").css({ "opacity": "1" });
        })
        removeListener();
    }
}

function A4_observation1() {
    currentStage = "A4_observation1";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
    A4ope1();
}

function A4_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A4_obs1_input1_1 = $("#A4_observation1_input1_1").val() == 3;
    let A4_obs1_input1_2 = $("#A4_observation1_input1_2").val() == 2;
    let A4_obs1_input1_3 = $("#A4_observation1_input1_3").val() == 3;
    let A4_obs1_input1_4 = $("#A4_observation1_input1_4").val() == 2;
    let A4_obs1_input2_1 = $("#A4_observation1_input2_1").val() == 2;
    let A4_obs1_input2_2 = $("#A4_observation1_input2_2").val() == 3;
    let A4_obs1_input2_3 = $("#A4_observation1_input2_3").val() == 2;
    let A4_obs1_input2_4 = $("#A4_observation1_input2_4").val() == 3;
    let A4_obs1_input3_1 = $("#A4_observation1_input3_1").val() == 1;
    let A4_obs1_input3_2 = $("#A4_observation1_input3_2").val() == 3;
    let A4_obs1_input3_3 = $("#A4_observation1_input3_3").val() == 1;
    let A4_obs1_input3_4 = $("#A4_observation1_input3_4").val() == 3;
    //甜蜜警告
    if (
        A4_obs1_input1_1 && A4_obs1_input1_2 && A4_obs1_input1_3 && A4_obs1_input1_4 &&
        A4_obs1_input2_1 && A4_obs1_input2_2 && A4_obs1_input2_3 && A4_obs1_input2_4 &&
        A4_obs1_input3_1 && A4_obs1_input3_2 && A4_obs1_input3_3 && A4_obs1_input3_4
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            //答對後調整內容
            $("#A4_observation1_confirm").hide();
            $("#A4_observation1_done").css({ "opacity": "1" });
            $("#A4_observation1_next").removeClass("d-none");
            $("#A4_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }

}

function A4_investigation1() {
    currentStage = "A4_investigation1";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_investigation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
    A4ope1();
}

function A4_investigation1_check() {
    //檢查問題探索學習單
    A4_inv1_input1 = $("#A4_investigation1_input1_option1").prop("checked");
    A4_inv1_input2 = $("#A4_investigation1_input2_option1").prop("checked");
    A4_inv1_input3 = $("#A4_investigation1_input3").val();
    A4_inv1_input4_1 = $("#A4_investigation1_input4_option1").prop("checked");
    A4_inv1_input4_2 = $("#A4_investigation1_input4_option2").prop("checked");
    //甜蜜警告
    if (A4_inv1_input1 && A4_inv1_input2) {
        if (!A4_inv1_input4_2 && !A4_inv1_input4_1) {
            Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的猜測吧' })
        } else if (A4_inv1_input3 == 1 && A4_inv1_input4_1) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                //答對後調整內容
                $("#A4_investigation1_confirm").hide();
                $("#A4_investigation1_done").css({ "opacity": "1" });
                $("#A4_investigation1_next").removeClass("d-none");
                $("#A4_investigation1_link img").css({ "opacity": "1" });
            })
        } else if (A4_inv1_input3 != 1) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '會等於多少讓我們繼續看下去吧' }).then((result) => {
                //答對後調整內容
                $("#A4_investigation1_confirm").hide();
                $("#A4_investigation1_done").css({ "opacity": "1" });
                $("#A4_investigation1_next").removeClass("d-none");
                $("#A4_investigation1_link img").css({ "opacity": "1" });
            })
        } else if (A4_inv1_input4_2) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '其實在單位圓上兩者總是會相同喔，繼續看下去吧' }).then((result) => {
                //答對後調整內容
                $("#A4_investigation1_confirm").hide();
                $("#A4_investigation1_done").css({ "opacity": "1" });
                $("#A4_investigation1_next").removeClass("d-none");
                $("#A4_investigation1_link img").css({ "opacity": "1" });
            })
        }
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A4_operation2() {
    currentStage = "A4_operation2";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("checkB", A4_operation2_check);
    A4ope2();
}

function A4_operation2_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("checkB");
    let A4_ope2_done = $("#A4_operation2_link img").css("opacity")
    // console.log("listenin A4 2 "+check);
    //建立監聽函式
    if (check == 1 && A4_ope2_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A4_investigation1_confirm").hide();
            $("#A4_operation2_done").css({ "opacity": "1" });
            $("#A4_operation2_next").removeClass("d-none");
            $("#A4_operation2_link img").css({ "opacity": "1" });
        })
    }
}

function A4_observation2() {
    currentStage = "A4_observation2";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_observation2_link() {
    removeListener();

    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });

    A4ope2();
}

function A4_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A4_obs2_input1_1 = $("#A4_observation2_input1_1").val() == 2;
    let A4_obs2_input1_2 = $("#A4_observation2_input1_2").val() == 3;
    let A4_obs2_input1_3 = $("#A4_observation2_input1_3").val() == 2;
    let A4_obs2_input1_4 = $("#A4_observation2_input1_4").val() == 3;

    let A4_obs2_input2_1 = $("#A4_observation2_input2_1").val() == 2;
    let A4_obs2_input2_2 = $("#A4_observation2_input2_2").val() == 2;
    let A4_obs2_input2_3 = $("#A4_observation2_input2_3").val() == 2;
    let A4_obs2_input2_4 = $("#A4_observation2_input2_4").val() == 2;

    let A4_obs2_input3_1 = $("#A4_observation2_input3_1").val() == 3;
    let A4_obs2_input3_2 = $("#A4_observation2_input3_2").val() == 2;
    let A4_obs2_input3_3 = $("#A4_observation2_input3_3").val() == 3;
    let A4_obs2_input3_4 = $("#A4_observation2_input3_4").val() == 2;
    //甜蜜警告
    if (
        A4_obs2_input1_1 && A4_obs2_input1_2 && A4_obs2_input1_3 && A4_obs2_input1_4 &&
        A4_obs2_input2_1 && A4_obs2_input2_2 && A4_obs2_input2_3 && A4_obs2_input2_4 &&
        A4_obs2_input3_1 && A4_obs2_input3_2 && A4_obs2_input3_3 && A4_obs2_input3_4
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
            //答對後調整內容
            $("#A4_observation2_confirm").hide();
            $("#A4_observation2_done").css({ "opacity": "1" });
            $("#A4_observation2_next").removeClass("d-none");
            $("#A4_observation2_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}

function A4_investigation2() {
    currentStage = "A4_investigation2";
    loadApplet("ggbApplet04", ggb_G_10_6_1_A4);
}

function A4_investigation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
    A4ope2();
    let api = applet.getAppletObject();
    api.setValue("thinktime", 1);
}

function A4_investigation2_check() {
    //檢查問題探索學習單
    let A4_inv2_input1 = $("#A4_investigation2_input1").val() == 1;
    let A4_inv2_input2 = $("#A4_investigation2_input2").val() == 2;
    let A4_inv2_input3 = $("#A4_investigation2_input3").val() == 2;
    let A4_inv2_input4 = $("#A4_investigation2_input4").val() == 3;
    let A4_inv2_input5 = $("#A4_investigation2_input5_option2").prop("checked");
    let A4_inv2_input6 = $("#A4_investigation2_textarea1").val();

    //甜蜜警告

    if (A4_inv2_input6 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請留下你的想法吧' })

    } else if (
        A4_inv2_input1 &&
        A4_inv2_input2 &&
        A4_inv2_input3 &&
        A4_inv2_input4 &&
        A4_inv2_input5 &&
        A4_inv2_input6!=""
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
            //答對後調整內容
            $("#A4_investigation2_confirm").hide();
            $("#A4_investigation2_done").css({ "opacity": "1" });
            $("#A4_investigation2_next").removeClass("d-none");
            $("#A4_investigation2_link img").css({ "opacity": "1" });
        })
    }else{
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

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
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function () {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function () {
        A1_investigation1_check();
    });
    $("#A1_investigation1_next").click(function () {
        showA2();//下一個活動
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
        showA3();//下一個活動
    });
    $("#A3_operation1_link").click(function () {
        A3_operation1();
    });
    $("#A3_operation1_next").click(function () {
        $("#A3_observation1_link").click();
    });
    $("#A3_observation1_link").click(function () {
        A3_observation1();
    });
    $("#A3_observation1_confirm").click(function () {
        A3_observation1_check();
    });
    $("#A3_observation1_next").click(function () {
        $("#A3_investigation1_link").click();
    });
    $("#A3_investigation1_link").click(function () {
        A3_investigation1();
    });
    $("#A3_investigation1_confirm").click(function () {
        A3_investigation1_check();
    });
    $("#A3_investigation1_next").click(function () {
        showA4();//下一個活動
    });

    $("#A4_operation1_link").click(function () {
        A4_operation1();
    });
    $("#A4_operation1_next").click(function () {
        $("#A4_observation1_link").click();
    });
    $("#A4_observation1_link").click(function () {
        A4_observation1();
    });
    $("#A4_observation1_confirm").click(function () {
        A4_observation1_check();
    });
    $("#A4_observation1_next").click(function () {
        $("#A4_investigation1_link").click();
    });
    $("#A4_investigation1_link").click(function () {
        A4_investigation1();
    });
    $("#A4_investigation1_confirm").click(function () {
        A4_investigation1_check();
    });
    $("#A4_investigation1_next").click(function () {
        $("#A4_operation2_link").click();//下一個活動
    });
    $("#A4_operation2_link").click(function () {
        A4_operation2();
    });
    $("#A4_operation2_next").click(function () {
        $("#A4_observation2_link").click();
    });
    $("#A4_observation2_link").click(function () {
        A4_observation2();
    });
    $("#A4_observation2_confirm").click(function () {
        A4_observation2_check();
    });
    $("#A4_observation2_next").click(function () {
        $("#A4_investigation2_link").click();
    });
    $("#A4_investigation2_link").click(function () {
        A4_investigation2();
    });
    $("#A4_investigation2_confirm").click(function () {
        A4_investigation2_check();
    });
    $("#A4_investigation2_next").click(function () {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成活動' })
            ;//下一個活動
    });
});
