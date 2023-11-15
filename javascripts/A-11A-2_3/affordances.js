var currentStage = "cover";
params.ggbBase64 = ggb_A_11A_2_3_cover;
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
    $(".title > span ").html("A-11A-2(3) 活動1：由三平面關係探索與聯立方程式的解的關聯");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_A_11A_2_3_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
// function showA2() {
//     showLoading();
//     $("#navbarDropdown").text("活動2");
//     $("#navbarDropdown").val("活動2");
//     $(".outlines").hide();
//     $("#outlineA2").show();
//     $(".title > span ").html("A-11A-2(2) 活動2：矩陣列運算解三元一次聯立方程式");
//     params.id = "ggbApplet02_1";
//     params.ggbBase64 = ggb_A_11A_2_3_A2_1;
//     applet = new GGBApplet(params, true);
//     applet.inject('ggb-element');
//     currentStage = "A2_operation1";
//     showWorksheetsContents("A2_operation1_link");
//     $(".outline").click(function() {
//         showWorksheetsContents(this.id);
//     });
// }

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
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
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_observation1_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
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
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_operation2_link() {
    removeListener();
    // if (!initA1_1) {
    //     Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
    //     initA1_1 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation2_check);
    // api.registerObjectUpdateListener("ROI", A1_operation2_check);
}

// function A1_operation2_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ROI = api.getValue("ROI");
//     if (PV == 1000000 && ROI == 20) {
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
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_observation2_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation2_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation2_input1_1_usrans = $("#A1_observation2_input1_1").val();
//     let A1_observation2_input1_2_usrans = $("#A1_observation2_input1_2").val();
//     let A1_observation2_input2_1_usrans = $("#A1_observation2_input2_1").val();
//     let A1_observation2_input2_2_usrans = $("#A1_observation2_input2_2").val();
//     let A1_observation2_input3_1_usrans = $("#A1_observation2_input3_1").val();
//     let A1_observation2_input3_2_usrans = $("#A1_observation2_input3_2").val();
//     let A1_observation2_input4_1_usrans = $("#A1_observation2_input4_1").val();
//     let A1_observation2_input4_2_usrans = $("#A1_observation2_input4_2").val();
//     let A1_observation2_input5_1_usrans = $("#A1_observation2_input5_1").val();
//     let A1_observation2_input5_2_usrans = $("#A1_observation2_input5_2").val();
//     if (A1_observation2_input1_1_usrans == 1040000 &&
//         A1_observation2_input1_2_usrans == 1039000 &&
//         A1_observation2_input2_1_usrans == 1080000 &&
//         A1_observation2_input2_2_usrans == 1079521 &&
//         A1_observation2_input3_1_usrans == 1120000 &&
//         A1_observation2_input3_2_usrans == 1121622 &&
//         A1_observation2_input4_1_usrans == 1160000 &&
//         A1_observation2_input4_2_usrans == 1165366 &&
//         A1_observation2_input5_1_usrans == 1200000 &&
//         A1_observation2_input5_2_usrans == 1210815 ) {
//         $("#A1_investigation1_input1_1").html(A1_observation2_input1_1_usrans);
//         $("#A1_investigation1_input1_2").html(A1_observation2_input1_2_usrans);
//         $("#A1_investigation1_input2_1").html(A1_observation2_input2_1_usrans);
//         $("#A1_investigation1_input2_2").html(A1_observation2_input2_2_usrans);
//         $("#A1_investigation1_input3_1").html(A1_observation2_input3_1_usrans);
//         $("#A1_investigation1_input3_2").html(A1_observation2_input3_2_usrans);
//         $("#A1_investigation1_input4_1").html(A1_observation2_input4_1_usrans);
//         $("#A1_investigation1_input4_2").html(A1_observation2_input4_2_usrans);
//         $("#A1_investigation1_input5_1").html(A1_observation2_input5_1_usrans);
//         $("#A1_investigation1_input5_2").html(A1_observation2_input5_2_usrans);
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
//             $("#A1_observation2_confirm").hide();
//             $("#A1_observation2_done").css({"opacity": "1"});
//             $("#A1_observation2_next").removeClass("d-none");
//             $("#A1_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查輸入的數據喔！'})
//     }
// }

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_operation3_link() {
    removeListener();
    // if (!initA1_1) {
    //     Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
    //     initA1_1 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation3_check);
    // api.registerObjectUpdateListener("ROI", A1_operation3_check);
}

// function A1_operation3_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ROI = api.getValue("ROI");
//     if (PV == 1000000 && ROI == 20) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
//             $("#A1_operation3_done").css({"opacity": "1"});
//             $("#A1_operation3_next").removeClass("d-none");
//             $("#A1_operation3_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_observation3_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation3_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation3_input1_1_usrans = $("#A1_observation3_input1_1").val();
//     let A1_observation3_input1_2_usrans = $("#A1_observation3_input1_2").val();
//     let A1_observation3_input2_1_usrans = $("#A1_observation3_input2_1").val();
//     let A1_observation3_input2_2_usrans = $("#A1_observation3_input2_2").val();
//     let A1_observation3_input3_1_usrans = $("#A1_observation3_input3_1").val();
//     let A1_observation3_input3_2_usrans = $("#A1_observation3_input3_2").val();
//     let A1_observation3_input4_1_usrans = $("#A1_observation3_input4_1").val();
//     let A1_observation3_input4_2_usrans = $("#A1_observation3_input4_2").val();
//     let A1_observation3_input5_1_usrans = $("#A1_observation3_input5_1").val();
//     let A1_observation3_input5_2_usrans = $("#A1_observation3_input5_2").val();
//     if (A1_observation3_input1_1_usrans == 1040000 &&
//         A1_observation3_input1_2_usrans == 1039000 &&
//         A1_observation3_input2_1_usrans == 1080000 &&
//         A1_observation3_input2_2_usrans == 1079521 &&
//         A1_observation3_input3_1_usrans == 1120000 &&
//         A1_observation3_input3_2_usrans == 1121622 &&
//         A1_observation3_input4_1_usrans == 1160000 &&
//         A1_observation3_input4_2_usrans == 1165366 &&
//         A1_observation3_input5_1_usrans == 1200000 &&
//         A1_observation3_input5_2_usrans == 1210815 ) {
//         $("#A1_investigation1_input1_1").html(A1_observation3_input1_1_usrans);
//         $("#A1_investigation1_input1_2").html(A1_observation3_input1_2_usrans);
//         $("#A1_investigation1_input2_1").html(A1_observation3_input2_1_usrans);
//         $("#A1_investigation1_input2_2").html(A1_observation3_input2_2_usrans);
//         $("#A1_investigation1_input3_1").html(A1_observation3_input3_1_usrans);
//         $("#A1_investigation1_input3_2").html(A1_observation3_input3_2_usrans);
//         $("#A1_investigation1_input4_1").html(A1_observation3_input4_1_usrans);
//         $("#A1_investigation1_input4_2").html(A1_observation3_input4_2_usrans);
//         $("#A1_investigation1_input5_1").html(A1_observation3_input5_1_usrans);
//         $("#A1_investigation1_input5_2").html(A1_observation3_input5_2_usrans);
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
//             $("#A1_observation3_confirm").hide();
//             $("#A1_observation3_done").css({"opacity": "1"});
//             $("#A1_observation3_next").removeClass("d-none");
//             $("#A1_observation3_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查輸入的數據喔！'})
//     }
// }

function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_operation4_link() {
    removeListener();
    // if (!initA1_1) {
    //     Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
    //     initA1_1 = true;
    // };
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation4_check);
    // api.registerObjectUpdateListener("ROI", A1_operation4_check);
}

// function A1_operation4_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ROI = api.getValue("ROI");
//     if (PV == 1000000 && ROI == 20) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
//             $("#A1_operation4_done").css({"opacity": "1"});
//             $("#A1_operation4_next").removeClass("d-none");
//             $("#A1_operation4_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
}

function A1_observation4_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation4_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation4_input1_1_usrans = $("#A1_observation4_input1_1").val();
//     let A1_observation4_input1_2_usrans = $("#A1_observation4_input1_2").val();
//     let A1_observation4_input2_1_usrans = $("#A1_observation4_input2_1").val();
//     let A1_observation4_input2_2_usrans = $("#A1_observation4_input2_2").val();
//     let A1_observation4_input3_1_usrans = $("#A1_observation4_input3_1").val();
//     let A1_observation4_input3_2_usrans = $("#A1_observation4_input3_2").val();
//     let A1_observation4_input4_1_usrans = $("#A1_observation4_input4_1").val();
//     let A1_observation4_input4_2_usrans = $("#A1_observation4_input4_2").val();
//     let A1_observation4_input5_1_usrans = $("#A1_observation4_input5_1").val();
//     let A1_observation4_input5_2_usrans = $("#A1_observation4_input5_2").val();
//     if (A1_observation4_input1_1_usrans == 1040000 &&
//         A1_observation4_input1_2_usrans == 1039000 &&
//         A1_observation4_input2_1_usrans == 1080000 &&
//         A1_observation4_input2_2_usrans == 1079521 &&
//         A1_observation4_input3_1_usrans == 1120000 &&
//         A1_observation4_input3_2_usrans == 1121622 &&
//         A1_observation4_input4_1_usrans == 1160000 &&
//         A1_observation4_input4_2_usrans == 1165366 &&
//         A1_observation4_input5_1_usrans == 1200000 &&
//         A1_observation4_input5_2_usrans == 1210815 ) {
//         $("#A1_investigation1_input1_1").html(A1_observation4_input1_1_usrans);
//         $("#A1_investigation1_input1_2").html(A1_observation4_input1_2_usrans);
//         $("#A1_investigation1_input2_1").html(A1_observation4_input2_1_usrans);
//         $("#A1_investigation1_input2_2").html(A1_observation4_input2_2_usrans);
//         $("#A1_investigation1_input3_1").html(A1_observation4_input3_1_usrans);
//         $("#A1_investigation1_input3_2").html(A1_observation4_input3_2_usrans);
//         $("#A1_investigation1_input4_1").html(A1_observation4_input4_1_usrans);
//         $("#A1_investigation1_input4_2").html(A1_observation4_input4_2_usrans);
//         $("#A1_investigation1_input5_1").html(A1_observation4_input5_1_usrans);
//         $("#A1_investigation1_input5_2").html(A1_observation4_input5_2_usrans);
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
//             $("#A1_observation4_confirm").hide();
//             $("#A1_observation4_done").css({"opacity": "1"});
//             $("#A1_observation4_next").removeClass("d-none");
//             $("#A1_observation4_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細檢查輸入的數據喔！'})
//     }
// }

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_1", ggb_A_11A_2_3_A1_1);
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

function A1_operation5() {
    currentStage = "A1_operation5";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_operation5_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation5_check);
    // api.registerObjectUpdateListener("ARR", A1_operation5_check);
    // api.registerObjectUpdateListener("n", A1_operation5_check);
}

// function A1_operation5_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作5'}).then((result) => {
//             $("#A1_operation5_done").css({"opacity": "1"});
//             $("#A1_operation5_next").removeClass("d-none");
//             $("#A1_operation5_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation5() {
    currentStage = "A1_observation5";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_observation5_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation5_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation5_input1_usrans = $('#A1_observation5_input1').val();
//     let A1_observation5_input2_usrans = $('#A1_observation5_input2').val();
//     let A1_observation5_input3_usrans = $('#A1_observation5_input3').val();
//     if (A1_observation5_input1_usrans == 20 && 
//         A1_observation5_input2_usrans == 4 &&
//         A1_observation5_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄5'}).then((result) => {
//             $("#A1_observation5_confirm").hide();
//             $("#A1_observation5_done").css({"opacity": "1"});
//             $("#A1_observation5_next").removeClass("d-none");
//             $("#A1_observation5_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_operation6() {
    currentStage = "A1_operation6";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_operation6_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation6_check);
    // api.registerObjectUpdateListener("ARR", A1_operation6_check);
    // api.registerObjectUpdateListener("n", A1_operation6_check);
}

// function A1_operation6_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作6'}).then((result) => {
//             $("#A1_operation6_done").css({"opacity": "1"});
//             $("#A1_operation6_next").removeClass("d-none");
//             $("#A1_operation6_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation6() {
    currentStage = "A1_observation6";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_observation6_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation6_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation6_input1_usrans = $('#A1_observation6_input1').val();
//     let A1_observation6_input2_usrans = $('#A1_observation6_input2').val();
//     let A1_observation6_input3_usrans = $('#A1_observation6_input3').val();
//     if (A1_observation6_input1_usrans == 20 && 
//         A1_observation6_input2_usrans == 4 &&
//         A1_observation6_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄6'}).then((result) => {
//             $("#A1_observation6_confirm").hide();
//             $("#A1_observation6_done").css({"opacity": "1"});
//             $("#A1_observation6_next").removeClass("d-none");
//             $("#A1_observation6_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_operation7() {
    currentStage = "A1_operation7";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_operation7_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation7_check);
    // api.registerObjectUpdateListener("ARR", A1_operation7_check);
    // api.registerObjectUpdateListener("n", A1_operation7_check);
}

// function A1_operation7_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作7'}).then((result) => {
//             $("#A1_operation7_done").css({"opacity": "1"});
//             $("#A1_operation7_next").removeClass("d-none");
//             $("#A1_operation7_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation7() {
    currentStage = "A1_observation7";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_observation7_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation7_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation7_input1_usrans = $('#A1_observation7_input1').val();
//     let A1_observation7_input2_usrans = $('#A1_observation7_input2').val();
//     let A1_observation7_input3_usrans = $('#A1_observation7_input3').val();
//     if (A1_observation7_input1_usrans == 20 && 
//         A1_observation7_input2_usrans == 4 &&
//         A1_observation7_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄7'}).then((result) => {
//             $("#A1_observation7_confirm").hide();
//             $("#A1_observation7_done").css({"opacity": "1"});
//             $("#A1_observation7_next").removeClass("d-none");
//             $("#A1_observation7_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_operation8() {
    currentStage = "A1_operation8";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_operation8_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("PV", A1_operation8_check);
    // api.registerObjectUpdateListener("ARR", A1_operation8_check);
    // api.registerObjectUpdateListener("n", A1_operation8_check);
}

// function A1_operation8_check() {
//     let api =applet.getAppletObject();
//     let PV = api.getValue("PV");
//     let ARR = api.getValue("ARR");
//     let n = api.getValue("n");
//     if (PV == 1000000 && ARR == 4 && n == 5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作8'}).then((result) => {
//             $("#A1_operation8_done").css({"opacity": "1"});
//             $("#A1_operation8_next").removeClass("d-none");
//             $("#A1_operation8_link img").css({"opacity": "1"});
//         })
//         removeListener();
//     }
// }

function A1_observation8() {
    currentStage = "A1_observation8";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_observation8_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation8_check() {
//     // let api = applet.getAppletObject();
//     let A1_observation8_input1_usrans = $('#A1_observation8_input1').val();
//     let A1_observation8_input2_usrans = $('#A1_observation8_input2').val();
//     let A1_observation8_input3_usrans = $('#A1_observation8_input3').val();
//     if (A1_observation8_input1_usrans == 20 && 
//         A1_observation8_input2_usrans == 4 &&
//         A1_observation8_input3_usrans == 3.71 ) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄8'}).then((result) => {
//             $("#A1_observation8_confirm").hide();
//             $("#A1_observation8_done").css({"opacity": "1"});
//             $("#A1_observation8_next").removeClass("d-none");
//             $("#A1_observation8_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_A_11A_2_3_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

// function A1_investigation2_check() {
//     let A1_investigation2_input1_usrans = $('input[name=A1_investigation2_input1]:checked').val();
//     if(A1_investigation2_input1_usrans == 2) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
//             $("#A1_investigation2_confirm").hide();
//             $("#A1_investigation2_done").css({"opacity": "1"});
//             $("#A1_investigation2_next").removeClass("d-none");
//             $("#A1_investigation2_explain").removeClass("d-none");
//             $("#A1_investigation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再仔細觀察表格中的數據！'})
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
        $("#A1_operation4_link").click();
    });
    $("#A1_operation4_link").click(function() {
        A1_operation4();
    });
    $("#A1_operation4_next").click(function() {
        $("#A1_observation4_link").click();
    });
    $("#A1_observation4_link").click(function() {
        A1_observation4();
    });
    $("#A1_observation4_confirm").click(function() {
        A1_observation4_check();
    });
    $("#A1_observation4_next").click(function() {
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });
    $("#A1_investigation1_next").click(function() {
        $("#A1_operation5_link").click();
    });
    $("#A1_operation5_link").click(function() {
        A1_operation5();
    });
    $("#A1_operation5_next").click(function() {
        $("#A1_observation5_link").click();
    });
    $("#A1_observation5_link").click(function() {
        A1_observation5();
    });
    $("#A1_observation5_confirm").click(function() {
        A1_observation5_check();
    });
    $("#A1_observation5_next").click(function() {
        $("#A1_operation6_link").click();
    });
    $("#A1_operation6_link").click(function() {
        A1_operation6();
    });
    $("#A1_operation6_next").click(function() {
        $("#A1_observation6_link").click();
    });
    $("#A1_observation6_link").click(function() {
        A1_observation6();
    });
    $("#A1_observation6_confirm").click(function() {
        A1_observation6_check();
    });
    $("#A1_observation6_next").click(function() {
        $("#A1_operation7_link").click();
    });
    $("#A1_operation7_link").click(function() {
        A1_operation7();
    });
    $("#A1_operation7_next").click(function() {
        $("#A1_observation7_link").click();
    });
    $("#A1_observation7_link").click(function() {
        A1_observation7();
    });
    $("#A1_observation7_confirm").click(function() {
        A1_observation7_check();
    });
    $("#A1_observation7_next").click(function() {
        $("#A1_operation8_link").click();
    });
    $("#A1_operation8_link").click(function() {
        A1_operation8();
    });
    $("#A1_operation8_next").click(function() {
        $("#A1_observation8_link").click();
    });
    $("#A1_observation8_link").click(function() {
        A1_observation8();
    });
    $("#A1_observation8_confirm").click(function() {
        A1_observation8_check();
    });
    $("#A1_observation8_next").click(function() {
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function() {
        ;
    });
});

// 待改進項目
// 