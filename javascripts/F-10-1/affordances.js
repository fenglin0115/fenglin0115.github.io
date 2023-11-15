var currentStage = "cover";
params.ggbBase64 = ggb_F_10_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});

function coverUtility() {
    let api = applet.getAppletObject();
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
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("check1");
    api.unregisterObjectUpdateListener("check2");
    api.unregisterObjectUpdateListener("check3");
    api.unregisterObjectUpdateListener("check4");
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-10-2(1) 活動1：圖形特徵");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_10_1_A1;
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
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("check1", A1_operation1_check)

    api.setValue("posa", 1)
    api.setValue("showA", 1)
    api.setValue("showf", 0)
}

function A1_operation1_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check1");
    let A1_ope1_done = $("#A1_operation1_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A1_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_operation1_confirm").hide();
            $("#A1_operation1_done").css({ "opacity": "1" });
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_observation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    // api.setValue("posa", 1)
}

function A1_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A1_obs1_input1 = $("#A1_observation1_input1_option1").prop("checked");
    let A1_obs1_input2 = $("#A1_observation1_input2_option2").prop("checked");
    let A1_obs1_input3 = $("#A1_observation1_input3_option2").prop("checked");
    let A1_obs1_input4 = $("#A1_observation1_input4_option1").prop("checked");
    //甜蜜警告
    if (A1_obs1_input1 &&
        A1_obs1_input2 &&
        A1_obs1_input3 &&
        A1_obs1_input4
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_observation1_done").css({ "opacity": "1" });
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_investigation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    // api.setValue("posa", 1)
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

function A1_investigation1_check() {
    //檢查問題探索學習單
    let A1_inv1_input1 = $("#A1_investigation1_input1_option1").prop("checked")
    let A1_inv1_input2 = $("#A1_investigation1_input2_1").val() == 2
    let A1_inv1_input3 = $("#A1_investigation1_input2_2").val() == 2
    //甜蜜警告
    if (A1_inv1_input1 && A1_inv1_input2 && A1_inv1_input3) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            //答對後調整內容
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({ "opacity": "1" });
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("check2", A1_operation2_check);
    api.setValue("posa", 1);
    api.setValue("showA", 0);
    api.setValue("showf", 1);
}

function A1_operation2_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check2");
    let A1_ope2_done = $("#A1_operation2_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A1_ope2_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_operation2_done").css({ "opacity": "1" });
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({ "opacity": "1" });
        })
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);

}

function A1_observation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("posa", 1)
}

function A1_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A1_obs2_input1 = $("#A1_observation2_input1").val();
    let A1_obs2_input2 = $("#A1_observation2_input2").val();
    let A1_obs2_input3 = $("#A1_observation2_input3").val();
    let A1_obs2_input4 = $("#A1_observation2_input4").val();
    let A1_obs2_input5 = $("#A1_observation2_input5").val();
    let A1_obs2_input6 = $("#A1_observation2_input6").val();
    let A1_obs2_input7 = $("#A1_observation2_input7").val();
    let A1_obs2_input8 = $("#A1_observation2_input8").val();
    console.log(A1_obs2_input1)
    console.log(A1_obs2_input2)
    console.log(A1_obs2_input3)
    console.log(A1_obs2_input4)
    console.log(A1_obs2_input5)
    console.log(A1_obs2_input6)
    console.log(A1_obs2_input7)
    console.log(A1_obs2_input8)
    //甜蜜警告
    if (
        A1_obs2_input1 == "" ||
        A1_obs2_input2 == "" ||
        A1_obs2_input3 == "" ||
        A1_obs2_input4 == "" ||
        A1_obs2_input5 == "" ||
        A1_obs2_input6 == "" ||
        A1_obs2_input7 == "" ||
        A1_obs2_input8 == ""
    ) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '還有空格沒有輸入喔' })

    } else if (
        A1_obs2_input1 == 1 &&
        A1_obs2_input2 == 0 &&
        A1_obs2_input3 == 4 &&
        A1_obs2_input4 == 8 &&
        A1_obs2_input5 == 0 &&
        A1_obs2_input6 == 2 &&
        A1_obs2_input7 == 3 &&
        A1_obs2_input8 == 12) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
            //答對後調整內容
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({ "opacity": "1" });
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }

}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_investigation2_link() {
    removeListener();
    let api = applet.getAppletObject()
    api.setValue("posa", 1)
}

function A1_investigation2_check() {
    //檢查問題探索學習單
    let A1_inv2_input1_1 = !$("#A1_investigation2_input1_option1").prop("checked")
    let A1_inv2_input1_2 = $("#A1_investigation2_input1_option2").prop("checked")
    let A1_inv2_input1_3 = $("#A1_investigation2_input1_option3").prop("checked")
    let A1_inv2_input1_4 = !$("#A1_investigation2_input1_option4").prop("checked")
    let A1_inv2_input1_5 = !$("#A1_investigation2_input1_option5").prop("checked")
    let A1_inv2_input2 = $("#A1_investigation2_input2_option1").prop("checked")
    let A1_inv2_input3 = $("#A1_investigation2_textarea1").val()

    //甜蜜警告
    if (A1_inv2_input3 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    } else if (
        A1_inv2_input1_1 &&
        A1_inv2_input1_2 &&
        A1_inv2_input1_3 &&
        A1_inv2_input1_4 &&
        A1_inv2_input1_5 &&
        A1_inv2_input2 &&
        A1_inv2_input2 != ""
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
            //答對後調整內容
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({ "opacity": "1" });
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("nega", 1)
    api.setValue("showf", 0)
    api.setValue("showA", 1)
    api.setValue("start", 1)

    //註冊監聽物件
    api.registerObjectUpdateListener("check3", A1_operation3_check)
}

function A1_operation3_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check3")
    let A1_ope3_done = $("#A1_operation3_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A1_ope3_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_operation3_done").css({ "opacity": "1" });
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({ "opacity": "1" });
        })
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_observation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    // api.setValue("nega", 1)
}

function A1_observation3_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A1_obs3_input1 = $("#A1_observation3_input1_option2").prop("checked")
    let A1_obs3_input2 = $("#A1_observation3_input2_option1").prop("checked")
    let A1_obs3_input3 = $("#A1_observation3_input3_option1").prop("checked")
    let A1_obs3_input4 = $("#A1_observation3_input4_option2").prop("checked")
    //甜蜜警告
    if (
        A1_obs3_input1 &&
        A1_obs3_input2 &&
        A1_obs3_input3 &&
        A1_obs3_input4
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3' }).then((result) => {
            //答對後調整內容
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({ "opacity": "1" });
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_investigation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
    let api = applet.getAppletObject();
    api.setValue("nega", 1)
}

function A1_investigation3_check() {
    //檢查問題探索學習單
    let A1_inv3_input1 = $("#A1_investigation3_input1_option2").prop("checked")
    let A1_inv3_input2 = $("#A1_investigation3_input2_1").val() == 2
    let A1_inv3_input3 = $("#A1_investigation3_input2_2").val() == 2

    //甜蜜警告

    if (A1_inv3_input1 && A1_inv3_input2 && A1_inv3_input3) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
            //答對後調整內容
            $("#A1_investigation3_confirm").hide();
            $("#A1_investigation3_done").css({ "opacity": "1" });
            $("#A1_investigation3_next").removeClass("d-none");
            $("#A1_investigation3_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_operation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("nega", 1)
    api.setValue("showA", 0)
    api.setValue("showf", 1)
    //註冊監聽物件
    api.registerObjectUpdateListener("check4", A1_operation4_check);
}

function A1_operation4_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check4");
    let A1_ope4_done = $("#A1_operation4_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A1_ope4_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4' }).then((result) => {
            //答對後調整內容
            $("#A1_operation4_confirm").hide();
            $("#A1_operation4_done").css({ "opacity": "1" });
            $("#A1_operation4_next").removeClass("d-none");
            $("#A1_operation4_link img").css({ "opacity": "1" });
        })
    }
}

function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_observation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("nega", 1);

}

function A1_observation4_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A1_obs4_input1 = $("#A1_observation4_input1").val();
    let A1_obs4_input2 = $("#A1_observation4_input2").val();
    let A1_obs4_input3 = $("#A1_observation4_input3").val();
    let A1_obs4_input4 = $("#A1_observation4_input4").val();
    let A1_obs4_input5 = $("#A1_observation4_input5").val();
    let A1_obs4_input6 = $("#A1_observation4_input6").val();
    let A1_obs4_input7 = $("#A1_observation4_input7").val();
    let A1_obs4_input8 = $("#A1_observation4_input8").val();
    // console.log(A1_obs2_input1)
    // console.log(A1_obs2_input2)
    // console.log(A1_obs2_input3)
    // console.log(A1_obs2_input4)
    // console.log(A1_obs2_input5)
    // console.log(A1_obs2_input6)
    // console.log(A1_obs2_input7)
    // console.log(A1_obs2_input8)
    //甜蜜警告
    if (
        A1_obs4_input1 == "" ||
        A1_obs4_input2 == "" ||
        A1_obs4_input3 == "" ||
        A1_obs4_input4 == "" ||
        A1_obs4_input5 == "" ||
        A1_obs4_input6 == "" ||
        A1_obs4_input7 == "" ||
        A1_obs4_input8 == ""
    ) {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '還有空格沒有輸入喔' })

    } else if (
        A1_obs4_input1 == -1 &&
        A1_obs4_input2 == 0 &&
        A1_obs4_input3 == -4 &&
        A1_obs4_input4 == -8 &&
        A1_obs4_input5 == 0 &&
        A1_obs4_input6 == -2 &&
        A1_obs4_input7 == -3 &&
        A1_obs4_input8 == -12) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4' }).then((result) => {
            //答對後調整內容
            $("#A1_observation4_confirm").hide();
            $("#A1_observation4_done").css({ "opacity": "1" });
            $("#A1_observation4_next").removeClass("d-none");
            $("#A1_observation4_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }

}

function A1_investigation4() {
    currentStage = "A1_investigation4";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_investigation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("nega", 1);
}

function A1_investigation4_check() {
    //檢查問題探索學習單
    let A1_inv4_input1_1 = !$("#A1_investigation4_input1_option1").prop("checked")
    let A1_inv4_input1_2 = $("#A1_investigation4_input1_option2").prop("checked")
    let A1_inv4_input1_3 = $("#A1_investigation4_input1_option3").prop("checked")
    let A1_inv4_input1_4 = !$("#A1_investigation4_input1_option4").prop("checked")
    let A1_inv4_input1_5 = !$("#A1_investigation4_input1_option5").prop("checked")
    let A1_inv4_input2 = $("#A1_investigation4_input2_option1").prop("checked")
    let A1_inv4_input3 = $("#A1_investigation4_textarea1").val()

    //甜蜜警告
    if (A1_inv4_input3 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    } else if (
        A1_inv4_input1_1 &&
        A1_inv4_input1_2 &&
        A1_inv4_input1_3 &&
        A1_inv4_input1_4 &&
        A1_inv4_input1_5 &&
        A1_inv4_input2 &&
        A1_inv4_input2 != ""
    ) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4' }).then((result) => {
            //答對後調整內容
            $("#A1_investigation4_confirm").hide();
            $("#A1_investigation4_done").css({ "opacity": "1" });
            $("#A1_investigation4_next").removeClass("d-none");
            $("#A1_investigation4_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A1_observation5() {
    currentStage = "A1_observation5";
    loadApplet("ggbApplet01", ggb_F_10_1_A1);
}

function A1_observation5_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("posa", 0)
    api.setValue("nega", 0)
    api.setValue("showf", 1)

    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });

}

function A1_observation5_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A1_obs5_input1 = $("#A1_observation5_input1").val() == 1;
    let A1_obs5_input2 = $("#A1_observation5_input2").val() == 2;
    let A1_obs5_input3 = $("#A1_observation5_input3").val() == 2;
    let A1_obs5_input4 = $("#A1_observation5_input4").val() == 2;
    let A1_obs5_input5 = $("#A1_observation5_input5").val() == 2;
    let A1_obs5_input6 = $("#A1_observation5_input6").val() == 2;
    let A1_obs5_input7 = $("#A1_observation5_input7").val() == 2;
    //甜蜜警告
    if (
        A1_obs5_input1 &&
        A1_obs5_input2 &&
        A1_obs5_input3 &&
        A1_obs5_input4 &&
        A1_obs5_input5 &&
        A1_obs5_input6 &&
        A1_obs5_input7) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索5' }).then((result) => {
            //答對後調整內容
            $("#A1_observation5_confirm").hide();
            $("#A1_observation5_done").css({ "opacity": "1" });
            $("#A1_observation5_next").removeClass("d-none");
            $("#A1_observation5_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}



function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-10-1 活動2：圖形的平移");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_10_1_A2;
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
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.setValue("h", 0)
    api.setValue("a", 2)
    api.setValue("k", 0)
    api.setValue("check1_1", 0)
    api.setValue("check1_2", 0)
    api.registerObjectUpdateListener("check1", A2_operation1_check)
}

function A2_operation1_check() {
    let api = applet.getAppletObject();

    let check = api.getValue("check1")
    let A2_ope1_done = $("#A2_operation1_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A2_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A2_operation1_done").css({ "opacity": "1" });
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_observation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("a", 2)
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

function A2_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A2_obs1_input1 = $("#A2_observation1_input1").val() == 4;
    let A2_obs1_input2_1 = $("#A2_observation1_input2_1").val() == 2;
    let A2_obs1_input2_2 = $("#A2_observation1_input2_2").val() == 1;
    let A2_obs1_input2_3 = $("#A2_observation1_input2_4").val() == 2;
    let A2_obs1_input3_1 = $("#A2_observation1_input3_3").val() == 2;
    let A2_obs1_input3_2 = $("#A2_observation1_input3_4").val() == 2;
    let A2_obs1_input3_3 = $("#A2_observation1_input3_5").val() == 1;
    let A2_obs1_input4 = $("#A2_observation1_input4").val() == 3;
    // console.log(A2_obs1_input1)
    // console.log(A2_obs1_input2_1)
    // console.log(A2_obs1_input2_2)
    // console.log(A2_obs1_input2_3)
    // console.log(A2_obs1_input3_1)
    // console.log(A2_obs1_input3_2)
    // console.log(A2_obs1_input3_3)
    // console.log(A2_obs1_input4)
    //甜蜜警告
    if (
        A2_obs1_input1 &&
        A2_obs1_input2_1 &&
        A2_obs1_input2_2 &&
        A2_obs1_input2_3 &&
        A2_obs1_input3_1 &&
        A2_obs1_input3_2 &&
        A2_obs1_input3_3 &&
        A2_obs1_input4) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
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
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_investigation1_link() {
    removeListener();

}

function A2_investigation1_check() {
    //檢查問題探索學習單
    let A2_inv1_input1 = $("#A2_investigation1_textarea1").val()
    let A2_inv1_input2 = $("#A2_investigation1_input1_option2").prop("checked")
    let A2_inv1_input3 = $("#A2_investigation1_input2_option1").prop("checked")
    //甜蜜警告
    if (A2_inv1_input1 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    } else if (A2_inv1_input1 != "" && A2_inv1_input2 && A2_inv1_input3) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            //答對後調整內容
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({ "opacity": "1" });
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件

    api.setValue("h", 0)
    api.setValue("a", 2)
    api.setValue("k", 0)
    api.setValue("check2_1", 0)
    api.setValue("check2_2", 0)
    api.registerObjectUpdateListener("check2", A2_operation2_check)
}

function A2_operation2_check() {
    let api = applet.getAppletObject();

    let check = api.getValue("check2")
    let A2_ope2_done = $("#A2_operation2_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A2_ope2_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A2_operation2_done").css({ "opacity": "1" });
            $("#A2_operation2_next").removeClass("d-none");
            $("#A2_operation2_link img").css({ "opacity": "1" });
        })
    }
}

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_observation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("a", 2)
    // api.setValue("h", 2)
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

function A2_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A2_obs2_input1 = $("#A2_observation2_input1").val() == 1;
    let A2_obs2_input2_1 = $("#A2_observation2_input2_2").val() == 1;
    let A2_obs2_input2_2 = $("#A2_observation2_input2_5").val() == 3;
    let A2_obs2_input3_1 = $("#A2_observation2_input3_1").val() == 2;
    let A2_obs2_input3_2 = $("#A2_observation2_input3_2").val() == 1;
    let A2_obs2_input3_3 = $("#A2_observation2_input3_3").val() == 1;
    let A2_obs2_input3_4 = $("#A2_observation2_input3_5").val() == 2;
    let A2_obs2_input4 = $("#A2_observation2_input4").val() == 2;
    console.log(A2_obs2_input1)
    console.log(A2_obs2_input2_1)
    console.log(A2_obs2_input2_2)
    console.log(A2_obs2_input3_1)
    console.log(A2_obs2_input3_2)
    console.log(A2_obs2_input3_3)
    console.log(A2_obs2_input3_4)
    console.log(A2_obs2_input4)
    //甜蜜警告
    if (
        A2_obs2_input1 &&
        A2_obs2_input2_1 &&
        A2_obs2_input2_2 &&
        A2_obs2_input3_1 &&
        A2_obs2_input3_2 &&
        A2_obs2_input3_3 &&
        A2_obs2_input3_4 &&
        A2_obs2_input4) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
            //答對後調整內容
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({ "opacity": "1" });
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }

}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_investigation2_link() {
    removeListener();
}

function A2_investigation2_check() {
    //檢查問題探索學習單
    let A2_inv2_input = $("#A2_investigation2_input1_option4").prop("checked")
    if (A2_inv2_input) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
            //答對後調整內容
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({ "opacity": "1" });
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    }
}

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("h", 0)
    api.setValue("a", 1)
    api.setValue("k", 0)
    api.registerObjectUpdateListener("check3", A2_operation3_check)
    //註冊監聽物件
}

function A2_operation3_check() {
    let api = applet.getAppletObject();

    let check = api.getValue("check3")
    let A2_ope3_done = $("#A2_operation3_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A2_ope3_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A2_operation3_done").css({ "opacity": "1" });
            $("#A2_operation3_next").removeClass("d-none");
            $("#A2_operation3_link img").css({ "opacity": "1" });
        })
    }
}

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_observation3_link() {
    removeListener();
}

function A2_observation3_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A2_obs3_input1 = $("#A2_observation3_textarea1").val()
    let A2_obs3_input2 = $("#A2_observation3_input1_option1").prop("checked")

    //甜蜜警告
    if (A2_obs3_input1 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    } else if (A2_obs3_input2 && A2_obs3_input1 != "") {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3' }).then((result) => {
            //答對後調整內容
            $("#A2_observation3_confirm").hide();
            $("#A2_observation3_done").css({ "opacity": "1" });
            $("#A2_observation3_next").removeClass("d-none");
            $("#A2_observation3_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02", ggb_F_10_1_A2);
}

function A2_investigation3_link() {
    removeListener();
}

function A2_investigation3_check() {
    //檢查問題探索學習單
    let A2_inv3_input1 = $("#A2_investigation3_input1_option3").prop("checked");
    let A2_inv3_input2 = $("#A2_investigation3_input2_option2").prop("checked");
    //甜蜜警告;

    console.log(A2_inv3_input1)
    console.log(A2_inv3_input2)

    if (A2_inv3_input1 && A2_inv3_input2) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
            //答對後調整內容
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_done").css({ "opacity": "1" });
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({ "opacity": "1" });
        })
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
    $(".title > span ").html("F-10-1 活動3：極值問題");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_10_1_A3;
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
    loadApplet("ggbApplet03", ggb_F_10_1_A3);
}

function A3_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("check", A3_operation1_check)
}

function A3_operation1_check() {
    let api = applet.getAppletObject();

    let check = api.getValue("check")
    let A3_ope1_done = $("#A3_operation1_link img").css("opacity")
    //建立監聽函式
    if (check == 1 && A3_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A3_operation1_done").css({ "opacity": "1" });
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_F_10_1_A3);
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
    let A3_obs_input1_1 = $("#A3_observation1_input1_1").val() == 0
    let A3_obs_input1_2 = $("#A3_observation1_input1_2").val() == 10
    let A3_obs_input2 = $("#A3_observation1_input2").val() == 2
    let A3_obs_input3 = $("#A3_observation1_input3").val() == 2
    let A3_obs_input4 = $("#A3_observation1_input4").val() == 2
    let A3_obs_input5_1 = $("#A3_observation1_input5_1").val() == 2
    let A3_obs_input5_2 = $("#A3_observation1_input5_2").val() == 3
    console.log(A3_obs_input1_1)
    console.log(A3_obs_input1_2)
    console.log(A3_obs_input2)
    console.log(A3_obs_input3)
    console.log(A3_obs_input4)
    console.log(A3_obs_input5_1)
    console.log(A3_obs_input5_2)
    //甜蜜警告
    if (A3_obs_input1_1 && A3_obs_input1_2 && A3_obs_input2 && A3_obs_input3
        && A3_obs_input4 && A3_obs_input5_1 && A3_obs_input5_2) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
            //答對後調整內容
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({ "opacity": "1" });
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }

}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_F_10_1_A3);
}

function A3_investigation1_link() {
    removeListener();
}

function A3_investigation1_check() {
    //檢查問題探索學習單
    let A3_inv1_input1 = $("#A3_investigation1_input1_option1").prop("checked")
    let A3_inv1_input2 = $("#A3_investigation1_input1_option2").prop("checked")
    let A3_inv1_text = $("#A3_investigation1_textarea1").val()

    //甜蜜警告
    if (A3_inv1_text == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧!' })

    } else if (A3_inv1_text != "") {
        if (A3_inv1_input1) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                //答對後調整內容
                $("#A3_investigation1_confirm").hide();
                $("#A3_investigation1_done").css({ "opacity": "1" });
                $("#A3_investigation1_next").removeClass("d-none");
                $("#A3_investigation1_link img").css({ "opacity": "1" });
            })
        } else if (A3_inv1_input2) {
            Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '其實是可行的喔~恭喜完成問題探索1' }).then((result) => {
                //答對後調整內容
                $("#A3_investigation1_confirm").hide();
                $("#A3_investigation1_done").css({ "opacity": "1" });
                $("#A3_investigation1_next").removeClass("d-none");
                $("#A3_investigation1_link img").css({ "opacity": "1" });
            })
        } else {
            Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧!' })
        }
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

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
        $("#A1_operation2_link").click();//下一個活動
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
        $("#A1_operation3_link").click();//下一個活動
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
    $("#A1_observation3_confirm").click(function () {
        A1_observation3_check();
    });
    $("#A1_observation3_next").click(function () {
        $("#A1_investigation3_link").click();
    });
    $("#A1_investigation3_link").click(function () {
        A1_investigation3();
    });
    $("#A1_investigation3_confirm").click(function () {
        A1_investigation3_check();
    });
    $("#A1_investigation3_next").click(function () {
        $("#A1_operation4_link").click();//下一個活動
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
    $("#A1_observation4_confirm").click(function () {
        A1_observation4_check();
    });
    $("#A1_observation4_next").click(function () {
        $("#A1_investigation4_link").click();
    });
    $("#A1_investigation4_link").click(function () {
        A1_investigation4();
    });
    $("#A1_investigation4_confirm").click(function () {
        A1_investigation4_check();
    });
    $("#A1_investigation4_next").click(function () {
        $("#A1_observation5_link").click();//下一個活動
    });

    $("#A1_observation5_link").click(function () {
        A1_observation5();
    });
    $("#A1_observation5_confirm").click(function () {
        A1_observation5_check();
    });
    $("#A1_observation5_next").click(function () {
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
        $("#A2_operation2_link").click();//下一個活動
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
    $("#A2_observation2_confirm").click(function () {
        A2_observation2_check();
    });
    $("#A2_observation2_next").click(function () {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function () {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function () {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function () {
        $("#A2_operation3_link").click();//下一個活動
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
    $("#A2_observation3_confirm").click(function () {
        A2_observation3_check();
    });
    $("#A2_observation3_next").click(function () {
        $("#A2_investigation3_link").click();
    });
    $("#A2_investigation3_link").click(function () {
        A2_investigation3();
    });
    $("#A2_investigation3_confirm").click(function () {
        A2_investigation3_check();
    });
    $("#A2_investigation3_next").click(function () {
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
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜你完成活動囉~' })
        //下一個活動
    });
});
