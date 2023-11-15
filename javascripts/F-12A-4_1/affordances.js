var currentStage = "cover";
params.ggbBase64 = ggb_F_12A_4_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    let api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("P");
}
var initA1 = false;
var initA2 = false;

function coverUtility() {
    let api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", prereguisite);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
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

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-10-2</dt><dd>三次函數的圖形特徵：二次、三次函數圖形的對稱性，兩者圖形的大域（global）特徵由最高次項決定，而局部（local）則近似一條直線。</dd><dt>F-12甲-3-S01</dt><dd>能理解切線斜率與導數的關係。</dd><dt>F-12甲-3-S03</dt><dd>能認識多項式函數與簡單代數函數之導函數。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>從幾何面切入，探索函數遞增、遞減情況與切線斜率的關係。</dd><dt>活動二</dt><dd>從分析面切入，將一階導數與活動階段一的切線斜率連結。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-12甲-4-S04</dt><dd>能理解並判斷函數的單調性。</dd></dl>',
            heightAuto: false
        });
    };
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-12甲-4(1) 活動1：函數圖形單調性與切線斜率");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_F_12A_4_1_A1_1;
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
    $(".title > span ").html("F-12甲-4(1) 活動2：函數圖形單調性與一階導函數");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_12A_4_1_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_4_1_A1_1);
}

function A1_operation1_link() {
    removeListener();
    if (!initA1) { 
        Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">我們在高一的時候已經學過了三次函數，當時透過逐步代值描點認識了三次函數的圖形，也介紹了它的對稱性以及廣域與局部特徵。接下來就讓我們來認識三次函數的遞增與遞減性質吧！</div>'});
        initA1 = true;
    };
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("P", A1_operation1_check);
}

function A1_operation1_check() {
    let api =applet.getAppletObject();
    let dragedPA = api.getValue("dragedPA");
    let dragedA = api.getValue("dragedA");
    if (dragedPA && dragedA) {
        removeListener();
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_4_1_A1_1);
}

function A1_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation1_check() {
    // var api = applet.getAppletObject();
    let A1_observation1_input1_1_usrans = $("#A1_observation1_input1_1").val();
    let A1_observation1_input1_2_usrans = $("#A1_observation1_input1_2").val();
    let A1_observation1_input1_3_usrans = $("#A1_observation1_input1_3").val();
    let A1_observation1_input2_1_usrans = $("#A1_observation1_input2_1").val();
    let A1_observation1_input2_2_usrans = $("#A1_observation1_input2_2").val();
    let A1_observation1_input2_3_usrans = $("#A1_observation1_input2_3").val();
    let A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
    let A1_observation1_input4_usrans = $("#A1_observation1_input4").val();
    if (A1_observation1_input1_1_usrans == (-1.46) && 
        A1_observation1_input1_2_usrans == (-0.7) &&
        A1_observation1_input1_3_usrans == (0.43) &&
        A1_observation1_input2_1_usrans == (5.76) && 
        A1_observation1_input2_2_usrans == (6.76) &&
        A1_observation1_input2_3_usrans == (7.84) &&
        A1_observation1_input3_usrans == 3 &&
        A1_observation1_input4_usrans == 3) {
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

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_1", ggb_F_12A_4_1_A1_1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    let A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    let A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    let A1_investigation1_input3_usrans = $('input[name=A1_investigation1_input3]:checked').val();
    let A1_investigation1_input4_usrans = $('input[name=A1_investigation1_input4]:checked').val();
    let A1_investigation1_input5_usrans = $('input[name=A1_investigation1_input5]:checked').val();
    if (A1_investigation1_input1_usrans == 1 &&
        A1_investigation1_input2_usrans == 1 &&
        A1_investigation1_input3_usrans == 1 &&
        A1_investigation1_input4_usrans == 1 &&
        A1_investigation1_input5_usrans == 1) {
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

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_4_1_A1_2);
}

function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("P", A1_operation2_check);
}

function A1_operation2_check() {
    let api =applet.getAppletObject();
    let dragedPB = api.getValue("dragedPB");
    let dragedB = api.getValue("dragedB");
    if (dragedPB && dragedB) {
        removeListener();
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_4_1_A1_2);
}

function A1_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation2_check() {
    // var api = applet.getAppletObject();
    let A1_observation2_input1_1_usrans = $("#A1_observation2_input1_1").val();
    let A1_observation2_input1_2_usrans = $("#A1_observation2_input1_2").val();
    let A1_observation2_input1_3_usrans = $("#A1_observation2_input1_3").val();
    let A1_observation2_input2_1_usrans = $("#A1_observation2_input2_1").val();
    let A1_observation2_input2_2_usrans = $("#A1_observation2_input2_2").val();
    let A1_observation2_input2_3_usrans = $("#A1_observation2_input2_3").val();
    let A1_observation2_input3_usrans = $("#A1_observation2_input3").val();
    let A1_observation2_input4_usrans = $("#A1_observation2_input4").val();
    if (A1_observation2_input1_1_usrans == (1.76) && 
        A1_observation2_input1_2_usrans == (0.87) &&
        A1_observation2_input1_3_usrans == (-0.3) &&
        A1_observation2_input2_1_usrans == (-2.61) && 
        A1_observation2_input2_2_usrans == (-2.81) &&
        A1_observation2_input2_3_usrans == (-2.69) &&
        A1_observation2_input3_usrans == 1 &&
        A1_observation2_input4_usrans == 1) {
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

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_F_12A_4_1_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    let A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
    let A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
    let A1_investigation2_input3_usrans = $('input[name=A1_investigation2_input3]:checked').val();
    let A1_investigation2_input4_usrans = $('input[name=A1_investigation2_input4]:checked').val();
    let A1_investigation2_input5_usrans = $('input[name=A1_investigation2_input5]:checked').val();
    if (A1_investigation2_input1_usrans == 2 &&
        A1_investigation2_input2_usrans == 2 &&
        A1_investigation2_input3_usrans == 1 &&
        A1_investigation2_input4_usrans == 1 &&
        A1_investigation2_input5_usrans == 1) {
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

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_F_12A_4_1_A2);
}

function A2_operation1_link() {
    removeListener();
    if (!initA2) { 
        Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">之前的章節我們學過一階導數值代表在該點的切線斜率值，接下來讓我們來探索一階導數與函數值遞增、遞減的關係。</div>'});
        initA2 = true;
    }
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("P", A2_operation1_check);

}

function A2_operation1_check() {
    let api =applet.getAppletObject();
    let checkShowFp = api.getValue("checkShowFp");
    let checkShowP = api.getValue("checkShowP");
    let nPpass = api.getValue("nPpass");
    if (checkShowFp == true && checkShowP == true && nPpass ==9 ) {
        removeListener();
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A2_operation1_done").css({"opacity": "1"});
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_F_12A_4_1_A2);
}

function A2_observation1_link() {
    removeListener();
}

function A2_observation1_check() {
    // let api = applet.getAppletObject();
    let A2_observation1_input1_1_usrans = $("#A2_observation1_input1_1").val();
    let A2_observation1_input1_2_usrans = $("#A2_observation1_input1_2").val();
    let A2_observation1_input2_1_usrans = $("#A2_observation1_input2_1").val();
    let A2_observation1_input2_2_usrans = $("#A2_observation1_input2_2").val();
    let A2_observation1_input3_1_usrans = $("#A2_observation1_input3_1").val();
    let A2_observation1_input3_2_usrans = $("#A2_observation1_input3_2").val();
    let A2_observation1_input4_1_usrans = $("#A2_observation1_input4_1").val();
    let A2_observation1_input4_2_usrans = $("#A2_observation1_input4_2").val();
    let A2_observation1_input5_1_usrans = $("#A2_observation1_input5_1").val();
    let A2_observation1_input5_2_usrans = $("#A2_observation1_input5_2").val();
    if (A2_observation1_input1_1_usrans == (9) && 
        A2_observation1_input1_2_usrans == (9) &&
        A2_observation1_input2_1_usrans == (0) && 
        A2_observation1_input2_2_usrans == (0) &&
        A2_observation1_input3_1_usrans == (-3) && 
        A2_observation1_input3_2_usrans == (-3) &&
        A2_observation1_input4_1_usrans == (0) && 
        A2_observation1_input4_2_usrans == (0) &&
        A2_observation1_input5_1_usrans == (9) && 
        A2_observation1_input5_2_usrans == (9) ) {
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

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_F_12A_4_1_A2);
}

function A2_investigation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation1_check() {
    let A2_investigation1_input1_usrans1 = $("#A2_investigation1_input1_option1").prop("checked");
    let A2_investigation1_input1_usrans2 = $("#A2_investigation1_input1_option2").prop("checked");
    let A2_investigation1_input1_usrans3 = $("#A2_investigation1_input1_option3").prop("checked");
    let A2_investigation1_input1_usrans4 = $("#A2_investigation1_input1_option4").prop("checked");
    let A2_investigation1_input2_1_usrans = $("#A2_investigation1_input2_1").val();
    let A2_investigation1_input2_2_usrans = $("#A2_investigation1_input2_2").val();
    if( A2_investigation1_input1_usrans1 == true &&
        A2_investigation1_input1_usrans2 == true &&
        A2_investigation1_input1_usrans3 == true &&
        A2_investigation1_input1_usrans4 == true &&
        A2_investigation1_input2_1_usrans == 2 &&
        A2_investigation1_input2_2_usrans == 0 ) {
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
        $("#A1_operation2_link").click();
    });
    $("#A1_operation2_link").click(function() {
        A1_operation2();
    });
    // $("#A1_operation2_confirm").click(function() {
    //     A1_operation2_confirm();
    // });
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
        showA2();
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
        ;
    });
});