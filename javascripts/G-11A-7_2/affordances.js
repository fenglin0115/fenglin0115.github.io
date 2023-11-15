var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_7_2_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    var api = applet.getAppletObject();
    // api.unregisterObjectClickListener("button2");
    // api.unregisterObjectUpdateListener("PV");
}
// var initA1_1 = false;
// var initA1_2 = false;
// var initA2 = false;

function coverUtility() {
    var api = applet.getAppletObject();
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
        // Swal.fire({
        //     html: '<dl style="text-align:left;"><dt>F-10-2</dt><dd>三次函數的圖形特徵</dd><dt>N-8-6</dt><dd>等比數列。</dd></dl>',
        //     heightAuto: false
        // });
    }
    function goal() {
        // Swal.fire({
        //     html: '<div style="text-align:left;">透過學具操作、觀察、從連續複利的過程認識常數 e。</div>',
        //     heightAuto: false
        // });
    };
    function bigidea() {
        // Swal.fire({
        //     html: '<dl style="text-align:left;"><dt>N-12甲-1</dt><dd>數列的極限，極限的運算性質，夾擠定理。從連續複利認識常數 e。</dd></dl>',
        //     heightAuto: false
        // });
    };
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-11A-7(2) 活動1：認識兩向量的公垂向量與性質");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_G_11A_7_2_A1_1;
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
    $(".title > span ").html("G-11A-7(2) 活動2：探索平行四邊形面積與兩向量之公垂向量長度之關係");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_G_11A_7_2_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-11A-7(2) 活動3：計算兩向量的外積");
    params.id = "ggbApplet03_1a";
    params.ggbBase64 = ggb_G_11A_7_2_A3_1a;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_G_11A_7_2_A1_1);
}

function A1_operation1_link() {
    removeListener();
    // if (!initA1_1) {
    //     Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
    //     initA1_1 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation1_check);
    // api.registerObjectUpdateListener("ROI", A1_operation1_check);
}

// function A1_operation1_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ROI = api.getValue("ROI");
//     if (PV == 1000000 && ROI == 20) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
//             $("#A1_operation1_done").css({"opacity": "1"});
//             $("#A1_operation1_next").removeClass("d-none");
//             $("#A1_operation1_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_1", ggb_G_11A_7_2_A1_1);
}

function A1_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

// function A1_observation1_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation1_input1_1_usrans = $("#A1_observation1_input1_1").val();
//     let A1_observation1_input1_2_usrans = $("#A1_observation1_input1_2").val();
//     let A1_observation1_input2_1_usrans = $("#A1_observation1_input2_1").val();
//     let A1_observation1_input2_2_usrans = $("#A1_observation1_input2_2").val();
//     let A1_observation1_input3_1_usrans = $("#A1_observation1_input3_1").val();
//     let A1_observation1_input3_2_usrans = $("#A1_observation1_input3_2").val();
//     let A1_observation1_input4_1_usrans = $("#A1_observation1_input4_1").val();
//     let A1_observation1_input4_2_usrans = $("#A1_observation1_input4_2").val();
//     let A1_observation1_input5_1_usrans = $("#A1_observation1_input5_1").val();
//     let A1_observation1_input5_2_usrans = $("#A1_observation1_input5_2").val();
//     if (A1_observation1_input1_1_usrans == 1040000 &&
//         A1_observation1_input1_2_usrans == 1039000 &&
//         A1_observation1_input2_1_usrans == 1080000 &&
//         A1_observation1_input2_2_usrans == 1079521 &&
//         A1_observation1_input3_1_usrans == 1120000 &&
//         A1_observation1_input3_2_usrans == 1121622 &&
//         A1_observation1_input4_1_usrans == 1160000 &&
//         A1_observation1_input4_2_usrans == 1165366 &&
//         A1_observation1_input5_1_usrans == 1200000 &&
//         A1_observation1_input5_2_usrans == 1210815 ) {
//         $("#A1_investigation1_input1_1").html(A1_observation1_input1_1_usrans);
//         $("#A1_investigation1_input1_2").html(A1_observation1_input1_2_usrans);
//         $("#A1_investigation1_input2_1").html(A1_observation1_input2_1_usrans);
//         $("#A1_investigation1_input2_2").html(A1_observation1_input2_2_usrans);
//         $("#A1_investigation1_input3_1").html(A1_observation1_input3_1_usrans);
//         $("#A1_investigation1_input3_2").html(A1_observation1_input3_2_usrans);
//         $("#A1_investigation1_input4_1").html(A1_observation1_input4_1_usrans);
//         $("#A1_investigation1_input4_2").html(A1_observation1_input4_2_usrans);
//         $("#A1_investigation1_input5_1").html(A1_observation1_input5_1_usrans);
//         $("#A1_investigation1_input5_2").html(A1_observation1_input5_2_usrans);
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A1_observation1_confirm").hide();
//             $("#A1_observation1_done").css({"opacity": "1"});
//             $("#A1_observation1_next").removeClass("d-none");
//             $("#A1_observation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查輸入的數據喔！'})
//     }
// }

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_G_11A_7_2_A1_2);
}

function A1_operation2_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation2_check);
    // api.registerObjectUpdateListener("ARR", A1_operation2_check);
    // api.registerObjectUpdateListener("n", A1_operation2_check);
}

// function A1_operation2_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
//             $("#A1_operation2_done").css({"opacity": "1"});
//             $("#A1_operation2_next").removeClass("d-none");
//             $("#A1_operation2_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_2", ggb_G_11A_7_2_A1_2);
}

function A1_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

// function A1_observation2_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation2_input1_usrans = $('#A1_observation2_input1').val();
//     let A1_observation2_input2_usrans = $('#A1_observation2_input2').val();
//     let A1_observation2_input3_usrans = $('#A1_observation2_input3').val();
//     if (A1_observation2_input1_usrans == 20 && 
//         A1_observation2_input2_usrans == 4 &&
//         A1_observation2_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
//             $("#A1_observation2_confirm").hide();
//             $("#A1_observation2_done").css({"opacity": "1"});
//             $("#A1_observation2_next").removeClass("d-none");
//             $("#A1_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_3", ggb_G_11A_7_2_A1_3);
}

function A1_operation3_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation3_check);
    // api.registerObjectUpdateListener("ARR", A1_operation3_check);
    // api.registerObjectUpdateListener("n", A1_operation3_check);
}

// function A1_operation3_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
//             $("#A1_operation3_done").css({"opacity": "1"});
//             $("#A1_operation3_next").removeClass("d-none");
//             $("#A1_operation3_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01_3", ggb_G_11A_7_2_A1_3);
}

function A1_observation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

// function A1_observation3_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation3_input1_usrans = $('#A1_observation3_input1').val();
//     let A1_observation3_input2_usrans = $('#A1_observation3_input2').val();
//     let A1_observation3_input3_usrans = $('#A1_observation3_input3').val();
//     if (A1_observation3_input1_usrans == 20 && 
//         A1_observation3_input2_usrans == 4 &&
//         A1_observation3_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
//             $("#A1_observation3_confirm").hide();
//             $("#A1_observation3_done").css({"opacity": "1"});
//             $("#A1_observation3_next").removeClass("d-none");
//             $("#A1_observation3_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_3", ggb_G_11A_7_2_A1_3);
}

function A1_investigation1_link() {
    removeListener();
}

// function A1_investigation1_check() {
//     let A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
//     if(A1_investigation1_input1_usrans == 2) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A1_investigation1_confirm").hide();
//             $("#A1_investigation1_done").css({"opacity": "1"});
//             $("#A1_investigation1_next").removeClass("d-none");
//             $("#A1_investigation1_explain").removeClass("d-none");
//             $("#A1_investigation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再仔細觀察表格中的數據！'})
//     }
// }

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02_1", ggb_G_11A_7_2_A2_1);
}

function A2_operation1_link() {
    removeListener();
    // if (!initA2) {
    //     Swal.fire({html: '<div style="text-align:left;">如果我們縮短計息週期，那麼本利和會接近本金的幾倍呢？</div>'}); 
    //     initA2 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A2_operation1_check);
    // api.registerObjectUpdateListener("N", A2_operation1_check);
}

// function A2_operation1_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let N = api.getValue("N");
//     if (PV == 1 && N == 52) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
//             $("#A2_operation1_done").css({"opacity": "1"});
//             $("#A2_operation1_next").removeClass("d-none");
//             $("#A2_operation1_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02_1", ggb_G_11A_7_2_A2_1);
}

function A2_observation1_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A2_observation1_check() {
//     // let api = applet.getAppletObject();
//     let A2_observation1_input1_1_usrans = $('#A2_observation1_input1_1').val();
//     let A2_observation1_input1_2_usrans = $('#A2_observation1_input1_2').val();
//     let A2_observation1_input1_3_usrans = $('#A2_observation1_input1_3').val();
//     let A2_observation1_input2_1_usrans = $('#A2_observation1_input2_1').val();
//     let A2_observation1_input2_2_usrans = $('#A2_observation1_input2_2').val();
//     let A2_observation1_input2_3_usrans = $('#A2_observation1_input2_3').val();
//     let A2_observation1_input3_1_usrans = $('#A2_observation1_input3_1').val();
//     let A2_observation1_input3_2_usrans = $('#A2_observation1_input3_2').val();
//     let A2_observation1_input3_3_usrans = $('#A2_observation1_input3_3').val();
//     let A2_observation1_input4_1_usrans = $('#A2_observation1_input4_1').val();
//     let A2_observation1_input4_2_usrans = $('#A2_observation1_input4_2').val();
//     let A2_observation1_input4_3_usrans = $('#A2_observation1_input4_3').val();
//     if (A2_observation1_input1_1_usrans == 0 && 
//         A2_observation1_input1_2_usrans == 0 && 
//         A2_observation1_input1_3_usrans == 2.6926 && 
//         A2_observation1_input2_1_usrans == 1 && 
//         A2_observation1_input2_2_usrans == 1 && 
//         A2_observation1_input2_3_usrans == 2.71457 && 
//         A2_observation1_input3_1_usrans == 2 && 
//         A2_observation1_input3_2_usrans == 2 && 
//         A2_observation1_input3_3_usrans == 2.71813 && 
//         A2_observation1_input4_1_usrans == 3 && 
//         A2_observation1_input4_2_usrans == 3 &&
//         A2_observation1_input4_3_usrans == 2.71828 ) {
//         $("#A2_investigation1_input1_1").html(katex.renderToString("52", { throwOnError: false }));
//         $("#A2_investigation1_input1_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{52}", { throwOnError: false }));
//         $("#A2_investigation1_input1_3").html(katex.renderToString("2.6926", { throwOnError: false }));
//         $("#A2_investigation1_input2_1").html(katex.renderToString("365", { throwOnError: false }));
//         $("#A2_investigation1_input2_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{365}", { throwOnError: false }));
//         $("#A2_investigation1_input2_3").html(katex.renderToString("2.71457", { throwOnError: false }));
//         $("#A2_investigation1_input3_1").html(katex.renderToString("8760", { throwOnError: false }));
//         $("#A2_investigation1_input3_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{8760}", { throwOnError: false }));
//         $("#A2_investigation1_input3_3").html(katex.renderToString("2.71813", { throwOnError: false }));
//         $("#A2_investigation1_input4_1").html(katex.renderToString("525600", { throwOnError: false }));
//         $("#A2_investigation1_input4_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{525600}", { throwOnError: false }));
//         $("#A2_investigation1_input4_3").html(katex.renderToString("2.71828", { throwOnError: false }));
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A2_observation1_confirm").hide();
//             $("#A2_observation1_done").css({"opacity": "1"});
//             $("#A2_observation1_next").removeClass("d-none");
//             $("#A2_observation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察後再試著回答！'})
//     }
// }

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_2", ggb_G_11A_7_2_A2_2);
}

function A2_operation2_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("N", A2_operation2_check);
}

// function A2_operation2_check() {
//     let api = applet.getAppletObject();
//     let N = api.getValue("N");
//     if (N == 1) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
//             $("#A2_operation2_done").css({"opacity": "1"});
//             $("#A2_operation2_next").removeClass("d-none");
//             $("#A2_operation2_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_2", ggb_G_11A_7_2_A2_2);
}

function A2_observation2_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A2_observation2_check() {
//     // let api = applet.getAppletObject();
//     let A2_observation2_input1_usrans = $('#A2_observation2_input1').val();
//     let A2_observation2_input2_usrans = $('#A2_observation2_input2').val();
//     let A2_observation2_input3_usrans = $('#A2_observation2_input3').val();
//     if (A2_observation2_input1_usrans == 2 && 
//         A2_observation2_input2_usrans == 2.59374 &&
//         A2_observation2_input3_usrans == 2.69159 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
//             $("#A2_observation2_confirm").hide();
//             $("#A2_observation2_done").css({"opacity": "1"});
//             $("#A2_observation2_next").removeClass("d-none");
//             $("#A2_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02_3", ggb_G_11A_7_2_A2_3);
}

function A2_operation3_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("N", A2_operation3_check);
}

// function A2_operation3_check() {
//     let api = applet.getAppletObject();
//     let N = api.getValue("N");
//     if (N == 1) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
//             $("#A2_operation3_done").css({"opacity": "1"});
//             $("#A2_operation3_next").removeClass("d-none");
//             $("#A2_operation3_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02_3", ggb_G_11A_7_2_A2_3);
}

function A2_observation3_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A2_observation3_check() {
//     // let api = applet.getAppletObject();
//     let A2_observation3_input1_usrans = $('#A2_observation3_input1').val();
//     let A2_observation3_input2_usrans = $('#A2_observation3_input2').val();
//     let A2_observation3_input3_usrans = $('#A2_observation3_input3').val();
//     if (A2_observation3_input1_usrans == 2 && 
//         A2_observation3_input2_usrans == 2.59374 &&
//         A2_observation3_input3_usrans == 2.69159 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
//             $("#A2_observation3_confirm").hide();
//             $("#A2_observation3_done").css({"opacity": "1"});
//             $("#A2_observation3_next").removeClass("d-none");
//             $("#A2_observation3_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02_3", ggb_G_11A_7_2_A2_3);
}

function A2_investigation1_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A2_investigation1_check() {
//     let A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();
//     if(A2_investigation1_input1_usrans == 4) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A2_investigation1_confirm").hide();
//             $("#A2_investigation1_done").css({"opacity": "1"});
//             $("#A2_investigation1_next").removeClass("d-none");
//             $("#A2_investigation1_explain").removeClass("d-none");
//             $("#A2_investigation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03_1a", ggb_G_11A_7_2_A3_1a);
}

function A3_operation1_link() {
    removeListener();
    // if (!initA3) {
    //     Swal.fire({html: '<div style="text-align:left;">如果我們縮短計息週期，那麼本利和會接近本金的幾倍呢？</div>'}); 
    //     initA3 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A3_operation1_check);
    // api.registerObjectUpdateListener("N", A3_operation1_check);
}

// function A3_operation1_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let N = api.getValue("N");
//     if (PV == 1 && N == 52) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
//             $("#A3_operation1_done").css({"opacity": "1"});
//             $("#A3_operation1_next").removeClass("d-none");
//             $("#A3_operation1_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A3_observation1a() {
    currentStage = "A3_observation1a";
    loadApplet("ggbApplet03_1a", ggb_G_11A_7_2_A3_1a);
}

function A3_observation1a_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A3_observation1a_check() {
//     // let api = applet.getAppletObject();
//     let A3_observation1a_input1_1_usrans = $('#A3_observation1a_input1_1').val();
//     let A3_observation1a_input1_2_usrans = $('#A3_observation1a_input1_2').val();
//     let A3_observation1a_input1_3_usrans = $('#A3_observation1a_input1_3').val();
//     let A3_observation1a_input2_1_usrans = $('#A3_observation1a_input2_1').val();
//     let A3_observation1a_input2_2_usrans = $('#A3_observation1a_input2_2').val();
//     let A3_observation1a_input2_3_usrans = $('#A3_observation1a_input2_3').val();
//     let A3_observation1a_input3_1_usrans = $('#A3_observation1a_input3_1').val();
//     let A3_observation1a_input3_2_usrans = $('#A3_observation1a_input3_2').val();
//     let A3_observation1a_input3_3_usrans = $('#A3_observation1a_input3_3').val();
//     let A3_observation1a_input4_1_usrans = $('#A3_observation1a_input4_1').val();
//     let A3_observation1a_input4_2_usrans = $('#A3_observation1a_input4_2').val();
//     let A3_observation1a_input4_3_usrans = $('#A3_observation1a_input4_3').val();
//     if (A3_observation1a_input1_1_usrans == 0 && 
//         A3_observation1a_input1_2_usrans == 0 && 
//         A3_observation1a_input1_3_usrans == 2.6926 && 
//         A3_observation1a_input2_1_usrans == 1 && 
//         A3_observation1a_input2_2_usrans == 1 && 
//         A3_observation1a_input2_3_usrans == 2.71457 && 
//         A3_observation1a_input3_1_usrans == 2 && 
//         A3_observation1a_input3_2_usrans == 2 && 
//         A3_observation1a_input3_3_usrans == 2.71813 && 
//         A3_observation1a_input4_1_usrans == 3 && 
//         A3_observation1a_input4_2_usrans == 3 &&
//         A3_observation1a_input4_3_usrans == 2.71828 ) {
//         $("#A3_investigation1_input1_1").html(katex.renderToString("52", { throwOnError: false }));
//         $("#A3_investigation1_input1_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{52}", { throwOnError: false }));
//         $("#A3_investigation1_input1_3").html(katex.renderToString("2.6926", { throwOnError: false }));
//         $("#A3_investigation1_input2_1").html(katex.renderToString("365", { throwOnError: false }));
//         $("#A3_investigation1_input2_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{365}", { throwOnError: false }));
//         $("#A3_investigation1_input2_3").html(katex.renderToString("2.71457", { throwOnError: false }));
//         $("#A3_investigation1_input3_1").html(katex.renderToString("8760", { throwOnError: false }));
//         $("#A3_investigation1_input3_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{8760}", { throwOnError: false }));
//         $("#A3_investigation1_input3_3").html(katex.renderToString("2.71813", { throwOnError: false }));
//         $("#A3_investigation1_input4_1").html(katex.renderToString("525600", { throwOnError: false }));
//         $("#A3_investigation1_input4_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{525600}", { throwOnError: false }));
//         $("#A3_investigation1_input4_3").html(katex.renderToString("2.71828", { throwOnError: false }));
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1A'}).then((result) => {
//             $("#A3_observation1a_confirm").hide();
//             $("#A3_observation1a_done").css({"opacity": "1"});
//             $("#A3_observation1a_next").removeClass("d-none");
//             $("#A3_observation1a_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察後再試著回答！'})
//     }
// }

function A3_observation1b() {
    currentStage = "A3_observation1b";
    loadApplet("ggbApplet03_1b", ggb_G_11A_7_2_A3_1b);
}

function A3_observation1b_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A3_observation1b_check() {
//     // let api = applet.getAppletObject();
//     let A3_observation1b_input1_1_usrans = $('#A3_observation1b_input1_1').val();
//     let A3_observation1b_input1_2_usrans = $('#A3_observation1b_input1_2').val();
//     let A3_observation1b_input1_3_usrans = $('#A3_observation1b_input1_3').val();
//     let A3_observation1b_input2_1_usrans = $('#A3_observation1b_input2_1').val();
//     let A3_observation1b_input2_2_usrans = $('#A3_observation1b_input2_2').val();
//     let A3_observation1b_input2_3_usrans = $('#A3_observation1b_input2_3').val();
//     let A3_observation1b_input3_1_usrans = $('#A3_observation1b_input3_1').val();
//     let A3_observation1b_input3_2_usrans = $('#A3_observation1b_input3_2').val();
//     let A3_observation1b_input3_3_usrans = $('#A3_observation1b_input3_3').val();
//     let A3_observation1b_input4_1_usrans = $('#A3_observation1b_input4_1').val();
//     let A3_observation1b_input4_2_usrans = $('#A3_observation1b_input4_2').val();
//     let A3_observation1b_input4_3_usrans = $('#A3_observation1b_input4_3').val();
//     if (A3_observation1b_input1_1_usrans == 0 && 
//         A3_observation1b_input1_2_usrans == 0 && 
//         A3_observation1b_input1_3_usrans == 2.6926 && 
//         A3_observation1b_input2_1_usrans == 1 && 
//         A3_observation1b_input2_2_usrans == 1 && 
//         A3_observation1b_input2_3_usrans == 2.71457 && 
//         A3_observation1b_input3_1_usrans == 2 && 
//         A3_observation1b_input3_2_usrans == 2 && 
//         A3_observation1b_input3_3_usrans == 2.71813 && 
//         A3_observation1b_input4_1_usrans == 3 && 
//         A3_observation1b_input4_2_usrans == 3 &&
//         A3_observation1b_input4_3_usrans == 2.71828 ) {
//         $("#A3_investigation1_input1_1").html(katex.renderToString("52", { throwOnError: false }));
//         $("#A3_investigation1_input1_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{52}", { throwOnError: false }));
//         $("#A3_investigation1_input1_3").html(katex.renderToString("2.6926", { throwOnError: false }));
//         $("#A3_investigation1_input2_1").html(katex.renderToString("365", { throwOnError: false }));
//         $("#A3_investigation1_input2_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{365}", { throwOnError: false }));
//         $("#A3_investigation1_input2_3").html(katex.renderToString("2.71457", { throwOnError: false }));
//         $("#A3_investigation1_input3_1").html(katex.renderToString("8760", { throwOnError: false }));
//         $("#A3_investigation1_input3_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{8760}", { throwOnError: false }));
//         $("#A3_investigation1_input3_3").html(katex.renderToString("2.71813", { throwOnError: false }));
//         $("#A3_investigation1_input4_1").html(katex.renderToString("525600", { throwOnError: false }));
//         $("#A3_investigation1_input4_2").html(katex.renderToString("\\dfrac{\\ 1\\ }{525600}", { throwOnError: false }));
//         $("#A3_investigation1_input4_3").html(katex.renderToString("2.71828", { throwOnError: false }));
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1B'}).then((result) => {
//             $("#A3_observation1b_confirm").hide();
//             $("#A3_observation1b_done").css({"opacity": "1"});
//             $("#A3_observation1b_next").removeClass("d-none");
//             $("#A3_observation1b_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察後再試著回答！'})
//     }
// }

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03_2a", ggb_G_11A_7_2_A3_2a);
}

function A3_operation2_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("N", A3_operation2_check);
}

// function A3_operation2_check() {
//     let api = applet.getAppletObject();
//     let N = api.getValue("N");
//     if (N == 1) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
//             $("#A3_operation2_done").css({"opacity": "1"});
//             $("#A3_operation2_next").removeClass("d-none");
//             $("#A3_operation2_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A3_observation2a() {
    currentStage = "A3_observation2a";
    loadApplet("ggbApplet03_2a", ggb_G_11A_7_2_A3_2a);
}

function A3_observation2a_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A3_observation2a_check() {
//     // let api = applet.getAppletObject();
//     let A3_observation2a_input1_usrans = $('#A3_observation2a_input1').val();
//     let A3_observation2a_input2_usrans = $('#A3_observation2a_input2').val();
//     let A3_observation2a_input3_usrans = $('#A3_observation2a_input3').val();
//     if (A3_observation2a_input1_usrans == 2 && 
//         A3_observation2a_input2_usrans == 2.59374 &&
//         A3_observation2a_input3_usrans == 2.69159 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2A'}).then((result) => {
//             $("#A3_observation2a_confirm").hide();
//             $("#A3_observation2a_done").css({"opacity": "1"});
//             $("#A3_observation2a_next").removeClass("d-none");
//             $("#A3_observation2a_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A3_observation2b() {
    currentStage = "A3_observation2b";
    loadApplet("ggbApplet03_2b", ggb_G_11A_7_2_A3_2b);
}

function A3_observation2b_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A3_observation2b_check() {
//     // let api = applet.getAppletObject();
//     let A3_observation2b_input1_usrans = $('#A3_observation2b_input1').val();
//     let A3_observation2b_input2_usrans = $('#A3_observation2b_input2').val();
//     let A3_observation2b_input3_usrans = $('#A3_observation2b_input3').val();
//     if (A3_observation2b_input1_usrans == 2 && 
//         A3_observation2b_input2_usrans == 2.59374 &&
//         A3_observation2b_input3_usrans == 2.69159 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2B'}).then((result) => {
//             $("#A3_observation2b_confirm").hide();
//             $("#A3_observation2b_done").css({"opacity": "1"});
//             $("#A3_observation2b_next").removeClass("d-none");
//             $("#A3_observation2b_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A3_operation3() {
    currentStage = "A3_operation3";
    loadApplet("ggbApplet03_3", ggb_G_11A_7_2_A3_3);
}

function A3_operation3_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("N", A3_operation3_check);
}

// function A3_operation3_check() {
//     let api = applet.getAppletObject();
//     let N = api.getValue("N");
//     if (N == 1) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
//             $("#A3_operation3_done").css({"opacity": "1"});
//             $("#A3_operation3_next").removeClass("d-none");
//             $("#A3_operation3_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A3_operation4() {
    currentStage = "A3_operation4";
    loadApplet("ggbApplet03_4", ggb_G_11A_7_2_A3_4);
}

function A3_operation4_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("N", A3_operation4_check);
}

// function A3_operation4_check() {
//     let api = applet.getAppletObject();
//     let N = api.getValue("N");
//     if (N == 1) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
//             $("#A3_operation4_done").css({"opacity": "1"});
//             $("#A3_operation4_next").removeClass("d-none");
//             $("#A3_operation4_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03_4", ggb_G_11A_7_2_A3_4);
}

function A3_investigation1_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A3_investigation1_check() {
//     let A3_investigation1_input1_usrans = $('input[name=A3_investigation1_input1]:checked').val();
//     if(A3_investigation1_input1_usrans == 4) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A3_investigation1_confirm").hide();
//             $("#A3_investigation1_done").css({"opacity": "1"});
//             $("#A3_investigation1_next").removeClass("d-none");
//             $("#A3_investigation1_explain").removeClass("d-none");
//             $("#A3_investigation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }


$(document).ready(function() {
    //A1
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
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });
    $("#A1_investigation1_next").click(function() {
        showA2();
    });
    //A2
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
        $("#A2_operation3_link").click();
    });
    $("#A2_operation3_link").click(function() {
        A2_operation3();
    });
    $("#A2_operation3_next").click(function() {
        $("#A2_observation3_link").click();
    });
    $("#A2_observation3_link").click(function() {
        A2_observation3();
    });
    $("#A2_observation3_confirm").click(function() {
        A2_observation3_check();
    });
    $("#A2_observation3_next").click(function() {
        $("#A2_investigation1_link").click();
    });
    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });
    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_check();
    });
    $("#A2_investigation1_next").click(function() {
        showA3();
    });
    //A3
    $("#A3_operation1_link").click(function() {
        A3_operation1();
    });
    $("#A3_operation1_next").click(function() {
        $("#A3_observation1a_link").click();
    });
    $("#A3_observation1a_link").click(function() {
        A3_observation1a();
    });
    $("#A3_observation1a_confirm").click(function() {
        A3_observation1a_check();
    });
    $("#A3_observation1a_next").click(function() {
        $("#A3_observation1b_link").click();
    });
    $("#A3_observation1b_link").click(function() {
        A3_observation1b();
    });
    $("#A3_observation1b_confirm").click(function() {
        A3_observation1b_check();
    });
    $("#A3_observation1b_next").click(function() {
        $("#A3_operation2_link").click();
    });
    $("#A3_operation2_link").click(function() {
        A3_operation2();
    });
    $("#A3_operation2_next").click(function() {
        $("#A3_observation2a_link").click();
    });
    $("#A3_observation2a_link").click(function() {
        A3_observation2a();
    });
    $("#A3_observation2a_confirm").click(function() {
        A3_observation2a_check();
    });
    $("#A3_observation2a_next").click(function() {
        $("#A3_observation2b_link").click();
    });
    $("#A3_observation2b_link").click(function() {
        A3_observation2b();
    });
    $("#A3_observation2b_confirm").click(function() {
        A3_observation2b_check();
    });
    $("#A3_observation2b_next").click(function() {
        $("#A3_operation3_link").click();
    });
    $("#A3_operation3_link").click(function() {
        A3_operation3();
    });
    $("#A3_operation3_next").click(function() {
        $("#A3_operation4_link").click();
    });
    $("#A3_operation4_link").click(function() {
        A3_operation4();
    });
    $("#A3_operation4_next").click(function() {
        $("#A3_investigation1_link").click();
    });
    $("#A3_investigation1_link").click(function() {
        A3_investigation1();
    });
    $("#A3_investigation1_confirm").click(function() {
        A3_investigation1_check();
    });
    $("#A3_investigation1_next").click(function() {
        ;
    });
});

// 待改進項目
// 