var currentStage = "cover";
params.ggbBase64 = ggb_N_10_6_02_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：常用公式 "+ katex.renderToString("1+2+3+...+n=\\dfrac{n(n+1)}{2}", { throwOnError: false })+"");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_N_10_6_2_A1a;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}



function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_N_10_6_1_A1a);
}

function start(objName) {
    A1_operation2();
    showWorksheetsContents("A1_operation2_link");
}

function A1_operation1_link() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", "start");
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet02", ggb_N_10_6_2_A1b);
}

function A1_operation2_done(objName) {
    var api = applet.getAppletObject();
    var n = api.getValue(objName);
    api.evalCommand("SetVisibleInView(button1, 1, false)");
    if (n==6) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A1_operation2_link() {
    var api = applet.getAppletObject();
    api.unregisterObjectClickListener("pic2");
    api.registerObjectUpdateListener("n", "A1_operation2_done");
}


function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet02", ggb_N_10_6_2_A1b);
}

function A1_observation1_link() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("n5");
}

function A1_observation1_check() {
    var n1 = $("#A1_observation1_input1").val();
    var n2 = $("#A1_observation1_input2").val();
    var n3 = $("#A1_observation1_input3").val();
    var n4 = $("#A1_observation1_input4").val();
    var n5 = $("#A1_observation1_input5").val();
   
    if (n1==1&&n2==3&&n3==6&&n4==10&&n5==15) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '不對喔! 請對照左方的圖示檢查看看哪裡填錯了'})
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet02", ggb_N_10_6_2_A1b);
}

function A1_investigation1_link() {
    var api = applet.getAppletObject();
    api.evalCommand("RunClickScript(button1)");
}

function A1_investigation1_check() {
    var n = $("input[name=A1_investigation1_input1]:checked").val();
    if (n == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '不對喔! 請再想想看'})
    }
}





$(document).ready(function() {
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });
    
    $("#A1_operation2_next").click(function() {
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

});