var currentStage = "cover";
params.ggbBase64 = ggb_G_10_4_2_cover;
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

function removelistener() {
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("finishpic1");
    api.unregisterObjectUpdateListener("finishpic2");
    api.unregisterObjectUpdateListener("textL");
    api.unregisterObjectUpdateListener("check");
    api.unregisterObjectUpdateListener("draw");
    api.unregisterObjectUpdateListener("pf");
}


// 活動一
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-4(2) 活動1：圓形的切線性質");
    params.id = "ggbapplet01";
    params.ggbBase64 = ggb_G_10_4_2_A1;
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
    loadApplet("ggbapplet01", ggb_G_10_4_2_A1);
}

function A1_operation1_check() {
    let api = applet.getAppletObject();
    let check = api.getValue("check");
    let A1_ope1_done = $("#A1_operation1_link img").css("opacity");
    // console.log(A1_ope1_done);
    if (check == 1 && A1_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A1_investigation1_confirm").hide();
            $("#A1_operation1_done").css({ "opacity": "1" });
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({ "opacity": "1" });

            removelistener();
        })
    }
}

function A1_operation1_link() {
    removelistener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("textL", A1_operation1_check);
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbapplet01", ggb_G_10_4_2_A1)
}

function A1_observation1_link() {
    removelistener();
}

function A1_observation1_check() {
    let A1_obs1_input1 = $('input[name=A1_observation1_input1]:checked').val();
    console.log(A1_obs1_input1);
    if (A1_obs1_input1 == 4) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({ "opacity": "1" });
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbapplet01", ggb_G_10_4_2_A1);
}

function A1_investigation1_link() {
    removelistener();
}

function A1_investigation1_check() {
    let A1_inv1_input1 = $("#A1_investigation1_input2_option1").prop("checked");
    if (A1_inv1_input1 == 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({ "opacity": "1" });
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
    }
}

//活動2
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-4(2) 活動2：圓外一點的切線與固定斜率的切線");
    params.id = "ggbapplet02";
    params.ggbBase64 = ggb_G_10_4_2_A2;
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
    loadApplet("ggbapplet02", ggb_G_10_4_2_A2);
}

function A2_operation1_link() {
    removelistener();
    console.log("do A2ope1 link");
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("check", A2_operation1_check);
}

function A2_operation1_check() {
    // console.log("checking");
    let api = applet.getAppletObject();
    let check = api.getValue("check");
    let A2_ope1_done = $("#A2_operation1_link img").css("opacity");

    if (check == 1 && A2_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            // $("#A2_operation1_confirm").hide();
            $("#A2_operation1_done").css({ "opacity": "1" });
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbapplet02", ggb_G_10_4_2_A2);
}

function A2_observation1_link() {
    removelistener();
}

function A2_observation1_check() {
    // let api = applet.getAppletObject();
    let A2_obs1_input1 = $("#A2_observation1_input1_option2").prop("checked");
    let A2_obs1_input2 = $("#A2_observation1_input2_option2").prop("checked");
    if (A2_obs1_input1 && A2_obs1_input2) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({ "opacity": "1" });
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1"
    loadApplet("ggbapplet02", ggb_G_10_4_2_A2);
}

function A2_investigation1_link() {
    removelistener();
}

function A2_investigation1_check() {
    let A2_inv1_input1 = $("#A2_investigation1_input1_option3").prop("checked");
    let A2_inv1_input2 = $("#A2_investigation1_input2_option2").prop("checked");
    let A2_inv1_input3 = $("#A2_investigation1_input3_option3").prop("checked");
    let A2_inv1_input4 = $("#A2_investigation1_input4_option2").prop("checked");

    if (A2_inv1_input1 && A2_inv1_input2 && A2_inv1_input3 && A2_inv1_input4) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({ "opacity": "1" });
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({ "opacity": "1" });
        })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
    }
}

//活動3
function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-10-4(2) 活動3：圓外一點的切線作圖");
    params.id = "ggbApplet03_1";
    params.ggbBase64 = ggb_G_10_4_2_A3_1;
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
    loadApplet("ggbApplet03_1", ggb_G_10_4_2_A3_1);
}

function A3_operation1_link() {
    removelistener();
    var api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("A", A3_operation1_check);
}

function A3_operation1_check() {
    var api = applet.getAppletObject();
    //建立監聽用函式
    let check = api.getValue("check1");
    let A3_ope1_done = $("#A3_operation1_link img").css("opacity");
    // console.log(A3_ope1_done);
    if (check >= 10 && A3_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A3_operation1_confirm").hide();
            $("#A3_operation1_done").css({ "opacity": "1" });
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({ "opacity": "1" });
        })
    }
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03_1", ggb_G_10_4_2_A3_1);
}

function A3_observation1_link() {
    removelistener();
}

function A3_observation1_check() {
    var api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A3_inv1_input1 = $("#A3_observation1_input1_option3").prop("checked");
    let A3_inv1_input2 = $("#A3_observation1_input2_option2").prop("checked");
    let A3_inv1_input3 = $("#A3_observation1_textarea1").val();

    console.log(A3_inv1_input3);

    //甜蜜警告
    if (A3_inv1_input1 &&
        A3_inv1_input2 &&
        A3_inv1_input3 != "") {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
            //答對後調整內容
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({ "opacity": "1" });
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({ "opacity": "1" });
        })
    } else if (A3_inv1_input3 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧!' })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03_2", ggb_G_10_4_2_A3_2);
}

function A3_operation2_link() {
    removelistener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectClickListener("draw", A3_operation2_check);
}

function A3_operation2_check() {
    let api = applet.getAppletObject();
    //建立監聽函式
    let A3_ope2_done = $("#A3_operation2_link img").css("opacity")
    if (A3_ope2_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A3_operation2_confirm").hide();
            $("#A3_operation2_done").css({ "opacity": "1" });
            $("#A3_operation2_next").removeClass("d-none");
            $("#A3_operation2_link img").css({ "opacity": "1" });
        })
    }
}

function A3_observation2() {
    currentStage = "A3_observation2";
    loadApplet("ggbApplet03_2", ggb_G_10_4_2_A3_2);
}

function A3_observation2_link() {
    removelistener();
}

function A3_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A3_obs2_input1 = $("#A3_observation2_input1_option1").prop("checked");
    let A3_obs2_input2 = $("#A3_observation2_textarea1").val();

    //甜蜜警告
    if (A3_obs2_input1 && A3_obs2_input2 != "") {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
            //答對後調整內容
            $("#A3_observation2_confirm").hide();
            $("#A3_observation2_done").css({ "opacity": "1" });
            $("#A3_observation2_next").removeClass("d-none");
            $("#A3_observation2_link img").css({ "opacity": "1" });
        })
    } else if (A3_obs2_input2 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧!' })
    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
    }
}


function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03_2", ggb_G_10_4_2_A3_2);
}

function A3_investigation1_link() {
    removelistener();
}

function A3_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

//活動4
function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("G-10-4(2) 活動4(補充)：相互垂直的直線其斜率關係");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_4_2_A4_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function A4_operation1() {
    currentStage = "A4_operation1";
    loadApplet("ggbApplet04_1", ggb_G_10_4_2_A4_1);
}

function A4_operation1_link() {
    removelistener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("check", A4_operation1_check);
    // console.log("監聽PF")
}

function A4_operation1_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
    let check = api.getValue("check");
    let A4_ope1_done = $("#A4_operation1_link img").css("opacity");

    // console.log(check);
    if (check && A4_ope1_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
            //答對後調整內容
            // $("#A3_observation2_confirm").hide();
            $("#A4_operation1_done").css({ "opacity": "1" });
            $("#A4_operation1_next").removeClass("d-none");
            $("#A4_operation1_link img").css({ "opacity": "1" });
        })
        removelistener();
    }
}

function A4_observation1() {
    currentStage = "A4_observation1";
    loadApplet("ggbApplet04_1", ggb_G_10_4_2_A4_1);
}

function A4_observation1_link() {
    removelistener();
}

function A4_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單
    let A4_obs_input1 = parseInt($("#A4_observation1_input1").val(), 10);
    let A4_obs_input2 = parseInt($("#A4_observation1_input2").val(), 10);
    let A4_obs_input3 = parseInt($("#A4_observation1_input3").val(), 10);
    let A4_obs_input4 = parseInt($("#A4_observation1_input4").val(), 10);
    let A4_obs_input5 = parseInt($("#A4_observation1_input5").val(), 10);
    let A4_obs_input6 = parseFloat($("#A4_observation1_input6").val(), 10);
    let A4_obs_input7 = parseInt($("#A4_observation1_input7").val(), 10);
    let A4_obs_input8 = parseInt($("#A4_observation1_input8").val(), 10);
    let A4_obs_input9 = parseFloat($("#A4_observation1_input9").val(), 10);
    let A4_obs_input10 = parseInt($("#A4_observation1_input10").val(), 10);

    console.log(A4_obs_input1 == -1)
    console.log(A4_obs_input3 == 1)
    console.log(A4_obs_input4 == -1)
    console.log(A4_obs_input5 == -1)
    console.log(A4_obs_input6)
    console.log(A4_obs_input6 == 0.5)
    console.log(A4_obs_input8 == -2)
    console.log(A4_obs_input9 == 0.5)
    console.log(A4_obs_input10 == -1)
    //甜蜜警告
    if (A4_obs_input1 == -1 &&
        A4_obs_input3 == 1 &&
        A4_obs_input4 == -1 &&
        A4_obs_input5 == -1 &&
        A4_obs_input6 == 0.5 &&
        A4_obs_input8 == -2 &&
        A4_obs_input9 == 0.5 &&
        A4_obs_input10 == -1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察紀錄1' }).then((result) => {
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
    loadApplet("ggbApplet04_1", ggb_G_10_4_2_A4_1);
}

function A4_investigation1_link() {
    removelistener();
}

function A4_investigation1_check() {
    //檢查問題探索學習單
    let A4_inv_input1 = $("#A4_investigation1_input1_option1").prop("checked");
    let A4_inv_input2 = $("#A4_investigation1_input2_option1").prop("checked");
    let A4_inv_input3 = $("#A4_investigation1_textarea1").val();


    //甜蜜警告
    if (A4_inv_input1 && A4_inv_input2 && A4_inv_input3 != "") {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
            //答對後調整內容
            $("#A4_investigation1_confirm").hide();
            $("#A4_investigation1_done").css({ "opacity": "1" });
            $("#A4_investigation1_next").removeClass("d-none");
            $("#A4_investigation1_link img").css({ "opacity": "1" });
        })
    } else if (A4_inv_input3 == "") {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧' })

    } else {
        Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })

    }
}

function A4_operation2() {
    currentStage = "A4_operation2";
    loadApplet("ggbApplet04_2", ggb_G_10_4_2_A4_2);
}

function A4_operation2_link() {
    removelistener();
    let api = applet.getAppletObject();
    //註冊監聽物件
    api.registerObjectUpdateListener("pf", A4_operation2_check);
}

function A4_operation2_check() {
    let api = applet.getAppletObject();
    //建立監聽函式
    let check = api.getValue("pf");
    let A4_ope2_done = $("#A4_operation2_link img").css("opacity");

    // console.log(check);
    if (check == -7 && A4_ope2_done != 1) {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
            //答對後調整內容
            // $("#A3_observation2_confirm").hide();
            $("#A4_operation2_done").css({ "opacity": "1" });
            $("#A4_operation2_next").removeClass("d-none");
            $("#A4_operation2_link img").css({ "opacity": "1" });
        })
        removelistener();
    }

}


//按鈕監聽連結
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
        $("#A3_operation2_link").click();
    });

    $("#A3_operation2_link").click(function () {
        A3_operation2();
    });
    $("#A3_operation2_next").click(function () {
        $("#A3_observation2_link").click();
    });
    $("#A3_observation2_link").click(function () {
        A3_observation2();
    });
    $("#A3_observation2_confirm").click(function () {
        A3_observation2_check();
    });
    $("#A3_observation2_next").click(function () {
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
        $("#A4_operation2_link").click();
    });
    $("#A4_operation2_link").click(function () {
        A4_operation2();
    });
    $("#A4_operation2_next").click(function () {
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成活動' })

    });
});
