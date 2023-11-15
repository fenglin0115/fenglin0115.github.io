var currentStage = "cover";
params.ggbBase64 = ggb_N_12A_3_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
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


//移除監聽
function removeListener() {}

//SHOW活動
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("N-12A-3 活動1：");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_N_12A_3_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

//操作
function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A1_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_observation1_link() {
    removeListener();
}

function A1_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}



//操作
function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A1_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_observation2_link() {
    removeListener();
}

function A1_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01", ggb_N_12A_3_A1);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

//SHOW活動
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("N-12A-3 活動2：");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_N_12A_3_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

//操作
function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A2_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_observation1_link() {
    removeListener();
}

function A2_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A2_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_observation2_link() {
    removeListener();
}

function A2_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02", ggb_N_12A_3_A2);
}

function A2_investigation2_link() {
    removeListener();
}

function A2_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}

function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("N-12A-3 活動3：");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_N_12A_3_A3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}


//操作
function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03", ggb_N_12A_3_A3);
}

function A3_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A3_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_N_12A_3_A3);
}

function A3_observation1_link() {
    removeListener();
}

function A3_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_N_12A_3_A3);
}

function A3_investigation1_link() {
    removeListener();
}

function A3_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03", ggb_N_12A_3_A3);
}

function A3_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A3_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A3_observation2() {
    currentStage = "A3_observation2";
    loadApplet("ggbApplet03",ggb_N_12A_3_A3);
}

function A3_observation2_link() {
    removeListener();
}

function A3_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A3_investigation2() {
    currentStage = "A3_investigation2";
    loadApplet("ggbApplet03_investigation2", ggb_N_12A_3_A3_investigation2);
}

function A3_investigation2_link() {
    removeListener();
}

function A3_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("N-12A-3 活動4：");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_N_12A_3_A4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}


//操作
function A4_operation1() {
    currentStage = "A4_operation1";
    loadApplet("ggbApplet04",  ggb_N_12A_3_A4);
}

function A4_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A4_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A4_observation1() {
    currentStage = "A4_observation1";
    loadApplet("ggbApplet04",  ggb_N_12A_3_A4);
}

function A4_observation1_link() {
    removeListener();
}

function A4_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A4_investigation1() {
    currentStage = "A4_investigation1";
    loadApplet("ggbApplet04_investigation1",  ggb_N_12A_3_A4_investigation1);
}

function A4_investigation1_link() {
    removeListener();
}

function A4_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A4_operation2() {
    currentStage = "A4_operation2";
    loadApplet("ggbApplet04",  ggb_N_12A_3_A4);
}

function A4_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A4_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A4_observation2() {
    currentStage = "A4_observation2";
    loadApplet("ggbApplet04",  ggb_N_12A_3_A4);
}

function A4_observation2_link() {
    removeListener();
}

function A4_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A4_investigation2() {
    currentStage = "A4_investigation2";
    loadApplet("ggbApplet04",  ggb_N_12A_3_A4);
}

function A4_investigation2_link() {
    removeListener();
}

function A4_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}



function showA5() {
    showLoading();
    $("#navbarDropdown").text("活動5");
    $("#navbarDropdown").val("活動5");
    $(".outlines").hide();
    $("#outlineA5").show();
    $(".title > span ").html("N-12A-3 活動5：");
    params.id = "ggbApplet05";
    params.ggbBase64 = ggb_N_12A_3_A5;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A5_operation1";
    showWorksheetsContents("A5_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}


//操作
function A5_operation1() {
    currentStage = "A5_operation1";
    loadApplet("ggbApplet05", ggb_N_12A_3_A5);
}

function A5_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A5_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A5_observation1() {
    currentStage = "A5_observation1";
    loadApplet("ggbApplet05", ggb_N_12A_3_A5);
}

function A5_observation1_link() {
    removeListener();
}

function A5_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A5_investigation1() {
    currentStage = "A5_investigation1";
    loadApplet("ggbApplet05", ggb_N_12A_3_A5);
}

function A5_investigation1_link() {
    removeListener();
}

function A5_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A5_operation2() {
    currentStage = "A5_operation2";
    loadApplet("ggbApplet05", ggb_N_12A_3_A5);
}

function A5_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A5_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A5_observation2() {
    currentStage = "A5_observation2";
    loadApplet("ggbApplet05_observation2", ggb_N_12A_3_A5_observation2);
}

function A5_observation2_link() {
    removeListener();
}

function A5_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A5_investigation2() {
    currentStage = "A5_investigation2";
    loadApplet("ggbApplet05_investigation2", ggb_N_12A_3_A5_investigation2);
}

function A5_investigation2_link() {
    removeListener();
}

function A5_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


function showA6() {
    showLoading();
    $("#navbarDropdown").text("活動6");
    $("#navbarDropdown").val("活動6");
    $(".outlines").hide();
    $("#outlineA6").show();
    $(".title > span ").html("N-12A-3 活動6：");
    params.id = "ggbApplet06";
    params.ggbBase64 = ggb_N_12A_3_A6;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A6_operation1";
    showWorksheetsContents("A6_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}


//操作
function A6_operation1() {
    currentStage = "A6_operation1";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A6_operation1_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A6_observation1() {
    currentStage = "A6_observation1";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_observation1_link() {
    removeListener();
}

function A6_observation1_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A6_investigation1() {
    currentStage = "A6_investigation1";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_investigation1_link() {
    removeListener();
}

function A6_investigation1_check() {
    //檢查問題探索學習單

    //甜蜜警告
}


//操作
function A6_operation2() {
    currentStage = "A6_operation2";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
   //註冊監聽物件
}

function A6_operation2_check() {
    let api =applet.getAppletObject();
    
    //建立監聽函式
}

//觀察
function A6_observation2() {
    currentStage = "A6_observation2";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_observation2_link() {
    removeListener();
}

function A6_observation2_check() {
    let api = applet.getAppletObject();
    //檢查觀察紀錄學習單

    //甜蜜警告
}

//探索
function A6_investigation2() {
    currentStage = "A6_investigation2";
    loadApplet("ggbApplet06", ggb_N_12A_3_A6);
}

function A6_investigation2_link() {
    removeListener();
}

function A6_investigation2_check() {
    //檢查問題探索學習單

    //甜蜜警告
}



//連結各個按鈕與函示
$(document).ready(function() {
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
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });
    $("#A1_investigation1_next").click(function() {
        $("#A1_operation2_link").click();//下一個活動
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
        showA2();//下一個活動
    });

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
        $("#A2_investigation1_link").click();
    });
    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });
    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_check();
    });
    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();//下一個活動
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
    $("#A2_investigation2_next").click(function() {
        showA3();//下一個活動
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
        $("#A3_investigation1_link").click();
    });
    $("#A3_investigation1_link").click(function() {
        A3_investigation1();
    });
    $("#A3_investigation1_confirm").click(function() {
        A3_investigation1_check();
    });
    $("#A3_investigation1_next").click(function() {
        $("#A3_operation2_link").click();//下一個活動
    });

    $("#A3_operation2_link").click(function() {
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
        $("#A3_investigation2_link").click();
    });
    $("#A3_investigation2_link").click(function() {
        A3_investigation2();
    });
    $("#A3_investigation2_confirm").click(function() {
        A3_investigation2_check();
    });
    $("#A3_investigation2_next").click(function() {
        showA4();//下一個活動
    });

    $("#A4_operation1_link").click(function() {
        A4_operation1();
    });
    $("#A4_operation1_next").click(function() {
        $("#A4_observation1_link").click();
    });
    $("#A4_observation1_link").click(function() {
        A4_observation1();
    });
    $("#A4_observation1_confirm").click(function() {
        A4_observation1_check();
    });
    $("#A4_observation1_next").click(function() {
        $("#A4_investigation1_link").click();
    });
    $("#A4_investigation1_link").click(function() {
        A4_investigation1();
    });
    $("#A4_investigation1_confirm").click(function() {
        A4_investigation1_check();
    });
    $("#A4_investigation1_next").click(function() {
        $("#A4_operation2_link").click();//下一個活動
    });

    $("#A4_operation2_link").click(function() {
        A4_operation2();
    });
    $("#A4_operation2_next").click(function() {
        $("#A4_observation2_link").click();
    });
    $("#A4_observation2_link").click(function() {
        A4_observation2();
    });
    $("#A4_observation2_confirm").click(function() {
        A4_observation2_check();
    });
    $("#A4_observation2_next").click(function() {
        $("#A4_investigation2_link").click();
    });
    $("#A4_investigation2_link").click(function() {
        A4_investigation2();
    });
    $("#A4_investigation2_confirm").click(function() {
        A4_investigation2_check();
    });
    $("#A4_investigation2_next").click(function() {
        showA5();//下一個活動
    });

    $("#A5_operation1_link").click(function() {
        A5_operation1();
    });
    $("#A5_operation1_next").click(function() {
        $("#A5_observation1_link").click();
    });
    $("#A5_observation1_link").click(function() {
        A5_observation1();
    });
    $("#A5_observation1_confirm").click(function() {
        A5_observation1_check();
    });
    $("#A5_observation1_next").click(function() {
        $("#A5_investigation1_link").click();
    });
    $("#A5_investigation1_link").click(function() {
        A5_investigation1();
    });
    $("#A5_investigation1_confirm").click(function() {
        A5_investigation1_check();
    });
    $("#A5_investigation1_next").click(function() {
        $("#A5_operation2_link").click();//下一個活動
    });

    $("#A5_operation2_link").click(function() {
        A5_operation2();
    });
    $("#A5_operation2_next").click(function() {
        $("#A5_observation2_link").click();
    });
    $("#A5_observation2_link").click(function() {
        A5_observation2();
    });
    $("#A5_observation2_confirm").click(function() {
        A5_observation2_check();
    });
    $("#A5_observation2_next").click(function() {
        $("#A5_investigation2_link").click();
    });
    $("#A5_investigation2_link").click(function() {
        A5_investigation2();
    });
    $("#A5_investigation2_confirm").click(function() {
        A5_investigation2_check();
    });
    $("#A5_investigation2_next").click(function() {
        showA6();//下一個活動
    });

    $("#A6_operation1_link").click(function() {
        A6_operation1();
    });
    $("#A6_operation1_next").click(function() {
        $("#A6_observation1_link").click();
    });
    $("#A6_observation1_link").click(function() {
        A6_observation1();
    });
    $("#A6_observation1_confirm").click(function() {
        A6_observation1_check();
    });
    $("#A6_observation1_next").click(function() {
        $("#A6_investigation1_link").click();
    });
    $("#A6_investigation1_link").click(function() {
        A6_investigation1();
    });
    $("#A6_investigation1_confirm").click(function() {
        A6_investigation1_check();
    });
    $("#A6_investigation1_next").click(function() {
        $("#A6_operation2_link").click();//下一個活動
    });

    $("#A6_operation2_link").click(function() {
        A6_operation2();
    });
    $("#A6_operation2_next").click(function() {
        $("#A6_observation2_link").click();
    });
    $("#A6_observation2_link").click(function() {
        A6_observation2();
    });
    $("#A6_observation2_confirm").click(function() {
        A6_observation2_check();
    });
    $("#A6_observation2_next").click(function() {
        $("#A6_investigation2_link").click();
    });
    $("#A6_investigation2_link").click(function() {
        A6_investigation2();
    });
    $("#A6_investigation2_confirm").click(function() {
        A6_investigation2_check();
    });
    $("#A6_investigation2_next").click(function() {
        $("#A1_operation2_link").click();//下一個活動
    });
});
