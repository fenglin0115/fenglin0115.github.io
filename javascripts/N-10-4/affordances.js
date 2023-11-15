var currentStage = "cover";
params.ggbBase64 = ggb_N_10_4_cover;
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
    $(".title > span ").html("活動1：10的乘冪");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_N_10_4_A1;
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
    loadApplet("ggbApplet01", ggb_N_10_4_A1);
}

function A1_operation1_link() {}


function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_N_10_4_A1);
}

function A1_observation1_link() {}

function A1_observation1_check() {
    var n1 = $("#A1_observation1_input1").val();
    var n2 = $("#A1_observation1_input2").val();
    var n3 = $("#A1_observation1_input3").val();
    var n4 = $("#A1_observation1_input4").val();
    var n5 = $("#A1_observation1_input5").val();
    var n6 = $("#A1_observation1_input6").val();
    var n7 = $("#A1_observation1_input7").val();
   
    if (n1==0.1 && n2==1 && n3==10 && n4==100 && n5==1.9953 && n6==2.0417 && n7==1.9999) {
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
    loadApplet("ggbApplet02", ggb_N_10_4_A1);
}

function A1_investigation1_link() {
    var api = applet.getAppletObject();
    api.evalCommand("RunClickScript(button1)");
}

function A1_investigation1_check() {
    var n1 = $("#A1_investigation1_input1").val();
    var n2 = $("#A1_investigation1_input2").val();
    var n3 = $("#A1_investigation1_input3").val();
    var n4 = $("#A1_investigation1_input4").val();
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    if (n1 == 0.30 && n2== 0.31 && n3==0.47 && n4==0.48) {
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
        $("#A1_operation1_done").css({"opacity": "1"});
        $("#A1_operation1_link img").css({"opacity": "1"});
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

    // $("#A1_investigation1_next").click(function() {
    //     showA2();
    // });

});