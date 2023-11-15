// ver.2022.8.30 奕凱
// ver.2022.12.18 Edward

var currentStage = "cover";
params.ggbBase64 = ggb_D_12A_2_2_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});

function coverUtility() {
    let api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", prereguisite);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic6", backLists);

    function start() {
        console.log("start click")
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
            html: '隨機變數的期望值、變異數及標準差的定義。',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>讓學生了解幾何分布的概念。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S05-能認識幾何分布的概念</dt><dd><ul><li>以具體實例說明幾何分布的定義。</li><li>以具體實例說明幾何分布隨機變數X的機率分布。</li><li>可利用GGB輔助計算，並繪製幾何分布的機率質量函數圖，進而觀察圖形的特徵。</li></ul></dd><dt>S06-能理解幾何分布的期望值之意義與算法</dt><dd><ul><li>以具體實例說明，由幾何分布的機率分布計算隨機變數的期望值變異數與標準差的應用。</li></ul></dd></dl>',
            heightAuto: false
        });
    };
}


//移除監聽
function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectClickListener("button1");
    api.unregisterObjectClickListener("button2");
    api.unregisterObjectUpdateListener("p");
    api.unregisterObjectUpdateListener("n");
}

//SHOW活動
function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-12甲-2_2 活動1：幾何分布");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_D_12A_2_2_A1_1;
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
    loadApplet("ggbApplet01_1", ggb_D_12A_2_2_A1_1);
}
function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectClickListener("button1", A1_operation1_preCheck);
}
function A1_operation1_preCheck() {
    let api = applet.getAppletObject();
    let p = api.getValue("p");
    if (p == 0.3) {
        api.registerObjectClickListener("button2", A1_operation1_check);
    }
}
function A1_operation1_check() {
    let api = applet.getAppletObject();
    let p = api.getValue("p");
    if (p == 0.3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
        loadApplet("ggbApplet01_1", ggb_D_12A_2_2_A1_1);
}
function A1_observation1_link() {
    removeListener();
}
function A1_observation1_check() {
    // let api = applet.getAppletObject();
    let input1 = $("#A1_observation1_input1").val();
    let input2 = $("#A1_observation1_input2").val();
    let input3 = $("#A1_observation1_input3").val();
    let input4 = $("#A1_observation1_input4").val();
    let input5 = $("#A1_observation1_input5").val();
    let input6 = $("#A1_observation1_input6").val();
    let input7 = $("#A1_observation1_input7").val();
    let input8 = $("#A1_observation1_input8").val();
    let input9 = $("#A1_observation1_input9").val();
    let input10 = $("#A1_observation1_input10").val();
    if (input1 != "" &&
        input2 != "" &&
        input3 != "" &&
        input4 != "" &&
        input5 != "" &&
        input6 != "" &&
        input7 != "" &&
        input8 != "" &&
        input9 != "" &&
        input10 != "") {
        let inputAve = numRound((parseInt(input1) + 
                                parseInt(input2) + 
                                parseInt(input3) + 
                                parseInt(input4) + 
                                parseInt(input5) + 
                                parseInt(input6) + 
                                parseInt(input7) + 
                                parseInt(input8) + 
                                parseInt(input9) + 
                                parseInt(input10))/10, 2);
        $("#A1_observation1_average").html(inputAve);
        $("#A1_investigation1_average").html(inputAve);
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查是否每個回合都有輸入喔！'})
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
        loadApplet("ggbApplet01_1", ggb_D_12A_2_2_A1_1);
}
function A1_investigation1_link() {
    removeListener();
}
function A1_investigation1_check() {
    let input1 = $("#A1_investigation1_input1").val();
    if(input1 != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_explain").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請試著說明自己的想法喔！'})
    }
}

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_2_A1_2);
}
function A1_operation2_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("p", A1_operation2_check);
    api.registerObjectUpdateListener("n", A1_operation2_check);
}
function A1_operation2_check() {
    let api = applet.getAppletObject();
    let p = api.getValue("p");
    let n = api.getValue("n");
    if (p == 0.1 && n == 4) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
            $("#A1_operation2_done").css({"opacity": "1"});
            $("#A1_operation2_next").removeClass("d-none");
            $("#A1_operation2_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_2_A1_2);
}
function A1_observation2_link() {
    removeListener();
}
function A1_observation2_check() {
    // let api = applet.getAppletObject();
    let A1_observation2_input1_usrans = $('#A1_observation2_input1').val();
    let A1_observation2_input2_usrans = $('#A1_observation2_input2').val();
    if (A1_observation2_input1_usrans == 0.0729 && 
        A1_observation2_input2_usrans == 0.02471 ) {
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
    loadApplet("ggbApplet01_2", ggb_D_12A_2_2_A1_2);
}
function A1_investigation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation2_check() {
    let A1_investigation2_input1_usrans = $('#A1_investigation2_input1').val();
    let A1_investigation2_input2_usrans = $('#A1_investigation2_input2').val();
    let A1_investigation2_input3_usrans = $('#A1_investigation2_input3').val();
    let A1_investigation2_input4_usrans = $('#A1_investigation2_input4').val();
    if( A1_investigation2_input1_usrans == 0 && 
        A1_investigation2_input2_usrans == 1 && 
        A1_investigation2_input3_usrans == 2 && 
        A1_investigation2_input4_usrans == 3 ) {
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

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_2_A1_2);
}
function A1_investigation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation3_check() {
    let A1_investigation3_input1_usrans = $('#A1_investigation3_input1').val();
    let A1_investigation3_input2_usrans = $('#A1_investigation3_input2').val();
    let A1_investigation3_input3_usrans = $('#A1_investigation3_input3').val();
    let A1_investigation3_input4_usrans = $('#A1_investigation3_input4').val();
    let A1_investigation3_input5_usrans = $('#A1_investigation3_input5').val();
    let A1_investigation3_input6_usrans = $('#A1_investigation3_input6').val();
    if( A1_investigation3_input1_usrans == 0 && 
        A1_investigation3_input2_usrans == 1 && 
        A1_investigation3_input3_usrans == 2 && 
        A1_investigation3_input4_usrans == 3 &&
        A1_investigation3_input5_usrans == 1 &&
        A1_investigation3_input6_usrans == 0) {
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

function A1_investigation4() {
    currentStage = "A1_investigation4";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_2_A1_2);
}
function A1_investigation4_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation4_check() {
    let A1_investigation4_input1_usrans = $('#A1_investigation4_input1').val();
    let A1_investigation4_input2_usrans = $('#A1_investigation4_input2').val();
    let A1_investigation4_input3_usrans = $('#A1_investigation4_input3').val();
    if( A1_investigation4_input1_usrans == 2 && 
        A1_investigation4_input2_usrans == 0 && 
        A1_investigation4_input3_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4'}).then((result) => {
            $("#A1_investigation4_confirm").hide();
            $("#A1_investigation4_done").css({"opacity": "1"});
            $("#A1_investigation4_next").removeClass("d-none");
            $("#A1_investigation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_2_A1_3);
}
function A1_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("p", A1_operation3_check);
}
function A1_operation3_check() {
    let api = applet.getAppletObject();
    let p = api.getValue("p");
    if (p == 0.1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_2_A1_3);
}
function A1_observation3_link() {
    removeListener();
}
function A1_observation3_check() {
    // let api = applet.getAppletObject();
    let A1_observation3_input1_1_usrans = $('#A1_observation3_input1_1').val();
    let A1_observation3_input1_2_usrans = $('#A1_observation3_input1_2').val();
    let A1_observation3_input2_1_usrans = $('#A1_observation3_input2_1').val();
    let A1_observation3_input2_2_usrans = $('#A1_observation3_input2_2').val();
    if (A1_observation3_input1_1_usrans == 10 && 
        A1_observation3_input1_2_usrans == 3.33333 &&
        A1_observation3_input2_1_usrans == 9.48683 &&
        A1_observation3_input2_2_usrans == 2.78887 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_explain").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation5() {
    currentStage = "A1_investigation5";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_2_A1_3);
}
function A1_investigation5_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation5_check() {
    let A1_investigation5_input1_usrans = $('#A1_investigation5_input1').val();
    let A1_investigation5_input2_usrans = $('#A1_investigation5_input2').val();
    if( A1_investigation5_input1_usrans == 1 && 
        A1_investigation5_input2_usrans == 0 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索5'}).then((result) => {
            $("#A1_investigation5_confirm").hide();
            $("#A1_investigation5_done").css({"opacity": "1"});
            $("#A1_investigation5_next").removeClass("d-none");
            $("#A1_investigation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A1_investigation6() {
    currentStage = "A1_investigation6";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_2_A1_3);
}
function A1_investigation6_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation6_check() {
    let A1_investigation6_input1_usrans = $('#A1_investigation6_input1').val();
    let A1_investigation6_input2_usrans = $('#A1_investigation6_input2').val();
    if( A1_investigation6_input1_usrans == 1 && 
        A1_investigation6_input2_usrans == 0 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索6'}).then((result) => {
            $("#A1_investigation6_confirm").hide();
            $("#A1_investigation6_done").css({"opacity": "1"});
            $("#A1_investigation6_next").removeClass("d-none");
            $("#A1_investigation6_explain").removeClass("d-none");
            $("#A1_investigation6_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A1_investigation7() {
    currentStage = "A1_investigation7";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_2_A1_3);
}
function A1_investigation7_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}
function A1_investigation7_check() {
    let A1_investigation7_input1_1_usrans = $('#A1_investigation7_input1_1').val();
    let A1_investigation7_input1_2_usrans = $('#A1_investigation7_input1_2').val();
    let A1_investigation7_input2_1_usrans = $('#A1_investigation7_input2_1').val();
    let A1_investigation7_input2_2_usrans = $('#A1_investigation7_input2_2').val();
    let A1_investigation7_input3_1_usrans = $('#A1_investigation7_input3_1').val();
    let A1_investigation7_input3_2_usrans = $('#A1_investigation7_input3_2').val();
    let A1_investigation7_input4_1_usrans = $('#A1_investigation7_input4_1').val();
    let A1_investigation7_input4_2_usrans = $('#A1_investigation7_input4_2').val();
    let A1_investigation7_input5_1_usrans = $('#A1_investigation7_input5_1').val();
    let A1_investigation7_input5_2_usrans = $('#A1_investigation7_input5_2').val();
    let A1_investigation7_input6_1_usrans = $('#A1_investigation7_input6_1').val();
    let A1_investigation7_input6_2_usrans = $('#A1_investigation7_input6_2').val();
    if( A1_investigation7_input1_1_usrans == 0 && 
        A1_investigation7_input1_2_usrans == 1 &&
        A1_investigation7_input2_1_usrans == 1 && 
        A1_investigation7_input2_2_usrans == 0 &&
        A1_investigation7_input3_1_usrans == 1 && 
        A1_investigation7_input3_2_usrans == 0 &&
        A1_investigation7_input4_1_usrans == 0 && 
        A1_investigation7_input4_2_usrans == 1 &&
        A1_investigation7_input5_1_usrans == 1 && 
        A1_investigation7_input5_2_usrans == 0 &&
        A1_investigation7_input6_1_usrans == 0 && 
        A1_investigation7_input6_2_usrans == 1 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索7'}).then((result) => {
            $("#A1_investigation7_confirm").hide();
            $("#A1_investigation7_done").css({"opacity": "1"});
            $("#A1_investigation7_next").removeClass("d-none");
            $("#A1_investigation7_explain").removeClass("d-none");
            $("#A1_investigation7_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

//連結各個按鈕與函示
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
        $("#A1_operation2_link").click();
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
        $("#A1_investigation3_link").click();
    });
    $("#A1_investigation3_link").click(function () {
        A1_investigation3();
    });
    $("#A1_investigation3_confirm").click(function () {
        A1_investigation3_check();
    });
    $("#A1_investigation3_next").click(function () {
        $("#A1_investigation4_link").click();
    });
    $("#A1_investigation4_link").click(function () {
        A1_investigation4();
    });
    $("#A1_investigation4_confirm").click(function () {
        A1_investigation4_check();
    });
    $("#A1_investigation4_next").click(function () {
        $("#A1_operation3_link").click();
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
        $("#A1_investigation5_link").click();
    });
    $("#A1_investigation5_link").click(function () {
        A1_investigation5();
    });
    $("#A1_investigation5_confirm").click(function () {
        A1_investigation5_check();
    });
    $("#A1_investigation5_next").click(function () {
        $("#A1_investigation6_link").click();
    });
    $("#A1_investigation6_link").click(function () {
        A1_investigation6();
    });
    $("#A1_investigation6_confirm").click(function () {
        A1_investigation6_check();
    });
    $("#A1_investigation6_next").click(function () {
        $("#A1_investigation7_link").click();
    });
    $("#A1_investigation7_link").click(function () {
        A1_investigation7();
    });
    $("#A1_investigation7_confirm").click(function () {
        A1_investigation7_check();
    });
    $("#A1_investigation7_next").click(function () {
        ;
    });
});