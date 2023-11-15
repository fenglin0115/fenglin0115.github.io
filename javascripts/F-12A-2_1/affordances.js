var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_2_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});

function coverUtility() {
    let api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic6", backLists);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
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

//下拉是選單
function dropdownlist() {
    $(".dropdown-menu li a").click(function () {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index() + 1);
    });
}

//移除監聽
function removeListener() {}



//SHOW活動
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-12甲-2 活動1：函數的極限與函數值的異同");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_12A_2_1_A1;
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
    loadApplet("ggbApplet01", ggb_F_12A_2_1_A1);
}

function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
}

function A1_operation1_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
}

//觀察
function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_F_12A_2_1_A1);
}

function A1_observation1_link() {
    removeListener();
    dropdownlist();
}

function A1_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_F_12A_2_1_A1);
}

function A1_investigation1_link() {
    removeListener();
    dropdownlist();
}

function A1_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

//操作
function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet02", ggb_F_12A_2_1_A2);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
}

function A1_operation2_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
}

//觀察
function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet02", ggb_F_12A_2_1_A2);
}

function A1_observation2_link() {
    removeListener();
    dropdownlist();
}

function A1_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet02", ggb_F_12A_2_1_A2);
}

function A1_investigation2_link() {
    removeListener();
    dropdownlist();
}

function A1_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}
//操作


//SHOW活動
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-12甲-2 活動2：函數的左右極限與極限值");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_12A_2_1_A3;
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
    loadApplet("ggbApplet03", ggb_F_12A_2_1_A3);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
}

function A2_operation1_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
}

//觀察
function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet03", ggb_F_12A_2_1_A3);
}

function A2_observation1_link() {
    removeListener();
    dropdownlist();
}

function A2_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet03", ggb_F_12A_2_1_A3);
}

function A2_investigation1_link() {
    removeListener();
    dropdownlist();
}

function A2_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet04", ggb_F_12A_2_1_A4);
}

function A2_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
}

function A2_operation2_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
}

//觀察
function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet04", ggb_F_12A_2_1_A4);
}

function A2_observation2_link() {
    removeListener();
    dropdownlist();
}

function A2_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}


//探索
function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet04", ggb_F_12A_2_1_A4);
}

function A2_investigation2_link() {
    removeListener();
    dropdownlist();
}

function A2_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

//SHOW活動
function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("F-12甲-2 活動3：夾擠定理的應用");
    params.id = "ggbApplet05";
    params.ggbBase64 = ggb_F_12A_2_1_A5;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

//操作
function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet05", ggb_F_12A_2_1_A5);
}

function A3_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    //註冊監聽物件
}

function A3_operation1_check() {
    let api = applet.getAppletObject();

    //建立監聽函式
}

//觀察
function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet05", ggb_F_12A_2_1_A5);
}

function A3_observation1_link() {
    removeListener();
    dropdownlist();
}

function A3_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet05", ggb_F_12A_2_1_A5);
}

function A3_investigation1_link() {
    removeListener();
    dropdownlist();
}

function A3_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

function A3_switch() {
    loadApplet("ggbApplet06", ggb_F_12A_2_1_A6);
    console.log("A3-switch on click")
}


//連結各個按鈕與函示
$(document).ready(function () {
    //針對A3修正
    $("#A3_switchGGB1").click(function () {
        A3_switch();
    });
    $("#A3_switchGGB2").click(function () {
        A3_switch();
    });
    $("#A3_switchGGB3").click(function () {
        A3_switch();
    });


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
        Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '完成全部活動囉' })
            ;//下一個活動
    });

});
