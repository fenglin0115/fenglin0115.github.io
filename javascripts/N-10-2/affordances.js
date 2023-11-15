var currentStage = "cover";
params.ggbBase64 = ggb_N_10_2_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    var api = applet.getAppletObject();
    // api.unregisterObjectClickListener("buttonRoll10");
    api.unregisterObjectUpdateListener("A");
    api.unregisterObjectUpdateListener("B");
}
// var initA1 = false;
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
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>N-10-2-S01</dt><dd>能理解絕對值在數線上的幾何意義。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<ol style="text-align:left;"><li>了解絕對值的幾何意義。</li><li>能利用絕對值的幾何意義解絕對值方程式與不等式問題。</li></ol>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>N-10-2-S04</dt><dd>能理解絕對值不等式在數線上的幾何意義並求其解</dd></dl>',
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
    $(".title > span ").html("N-10-2 活動1：複習 " + katex.renderToString("\\left| a \\right|", { throwOnError: false }) + " 與 " +katex.renderToString("\\left| a-b \\right|", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_N_10_2_A1;
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
    $(".title > span ").html("N-10-2 活動2：" + katex.renderToString("\\left| x-2 \\right|=3", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_N_10_2_A2;
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
    $(".title > span ").html("N-10-2 活動3：" + katex.renderToString("\\left| x-2 \\right| < 3", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_N_10_2_A3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("N-10-2 活動4：" + katex.renderToString("\\left| x+1 \\right| \\geq \\left| x-3 \\right|", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_N_10_2_A4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA5() {
    showLoading();
    $("#navbarDropdown").text("活動5");
    $("#navbarDropdown").val("活動5");
    $(".outlines").hide();
    $("#outlineA5").show();
    $(".title > span ").html("N-10-2 活動5：" + katex.renderToString("\\left| x+1 \\right| + \\left| x-2 \\right| = 5", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet05";
    params.ggbBase64 = ggb_N_10_2_A5;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A5_operation1";
    showWorksheetsContents("A5_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_N_10_2_A1);
}
function A1_operation1_link() {
    removeListener();
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("A", A1_operation1_check);
    api.registerObjectUpdateListener("B", A1_operation1_check);
}
function A1_operation1_check() {
    let api =applet.getAppletObject();
    let a = api.getValue("a");
    let b = api.getValue("b");
    if (a == -2 && b == 3) {
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
    loadApplet("ggbApplet01", ggb_N_10_2_A1);
}

function A1_observation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("numThrows", A1_observation1_showIcon);
}
function A1_observation1_check() {
    // let api = applet.getAppletObject();
    let A1_observation1_input1_usrans = $("#A1_observation1_input1").val();
    let A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
    let A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
    if (A1_observation1_input1_usrans == 2 &&
        A1_observation1_input2_usrans == 3 &&
        A1_observation1_input3_usrans == 5) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A1_observation1_confirm").hide();
            $("#A1_observation1_done").css({"opacity": "1"});
            $("#A1_observation1_next").removeClass("d-none");
            $("#A1_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細看看！'})
    }
}

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_N_10_2_A1);
}

function A1_investigation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

function A1_investigation1_check() {
    let A1_investigation1_input1_usrans = $('input[name=A1_investigation1_input1]:checked').val();
    let A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    if( A1_investigation1_input1_usrans == 2 &&
        A1_investigation1_input2_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A1_investigation1_confirm").hide();
            $("#A1_investigation1_done").css({"opacity": "1"});
            $("#A1_investigation1_next").removeClass("d-none");
            $("#A1_investigation1_explain").removeClass("d-none");
            $("#A1_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再想想看！'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_N_10_2_A2);
}
function A2_operation1_link() {
    removeListener();
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("A", A2_operation1_check);
}
function A2_operation1_check() {
    let api =applet.getAppletObject();
    let a = api.getValue("a");
    if (a == 7) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A2_operation1_done").css({"opacity": "1"});
            $("#A2_operation1_next").removeClass("d-none");
            $("#A2_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_N_10_2_A2);
}

function A2_observation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("numThrows", A2_observation1_showIcon);
}
function A2_observation1_check() {
    // let api = applet.getAppletObject();
    let A2_observation1_input1_usrans = $("#A2_observation1_input1").val();
    let A2_observation1_input2_usrans = $("#A2_observation1_input2").val();
    let A2_observation1_input3_usrans = $("#A2_observation1_input3").val();
    let A2_observation1_input4_usrans = $("#A2_observation1_input4").val();
    let A2_observation1_input5_usrans = $("#A2_observation1_input5").val();
    let A2_observation1_input6_usrans = $("#A2_observation1_input6").val();
    if (A2_observation1_input1_usrans == 5 &&
        A2_observation1_input2_usrans == 3 &&
        A2_observation1_input3_usrans == 1 &&
        A2_observation1_input4_usrans == 1 &&
        A2_observation1_input5_usrans == 3 &&
        A2_observation1_input6_usrans == 5) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細看看！'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_N_10_2_A2);
}

function A2_investigation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
}

function A2_investigation1_check() {
    let A2_investigation1_input1_usrans = $('input[name=A2_investigation1_input1]:checked').val();
    if( A2_investigation1_input1_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A2_investigation1_confirm").hide();
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_explain").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再想想看！'})
    }
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03", ggb_N_10_2_A3);
}
function A3_operation1_link() {
    removeListener();
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("A", A3_operation1_check);
}
function A3_operation1_check() {
    let api =applet.getAppletObject();
    let a = api.getValue("a");
    if (a == 7) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A3_operation1_done").css({"opacity": "1"});
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_N_10_2_A3);
}

function A3_observation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("numThrows", A3_observation1_showIcon);
}
function A3_observation1_check() {
    // let api = applet.getAppletObject();
    let A3_observation1_input1_usrans = $("#A3_observation1_input1").val();
    let A3_observation1_input2_usrans = $("#A3_observation1_input2").val();
    let A3_observation1_input3_usrans = $("#A3_observation1_input3").val();
    let A3_observation1_input4_usrans = $("#A3_observation1_input4").val();
    let A3_observation1_input5_usrans = $("#A3_observation1_input5").val();
    let A3_observation1_input6_usrans = $("#A3_observation1_input6").val();
    if (A3_observation1_input1_usrans == 5 &&
        A3_observation1_input2_usrans == 3 &&
        A3_observation1_input3_usrans == 1 &&
        A3_observation1_input4_usrans == 1 &&
        A3_observation1_input5_usrans == 3 &&
        A3_observation1_input6_usrans == 5) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({"opacity": "1"});
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細看看！'})
    }
}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_N_10_2_A3);
}

function A3_investigation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
}

function A3_investigation1_check() {
    let A3_investigation1_input1_usrans = $('input[name=A3_investigation1_input1]:checked').val();
    if( A3_investigation1_input1_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A3_investigation1_confirm").hide();
            $("#A3_investigation1_done").css({"opacity": "1"});
            $("#A3_investigation1_next").removeClass("d-none");
            $("#A3_investigation1_explain").removeClass("d-none");
            $("#A3_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再想想看！'})
    }
}

function A4_operation1() {
    currentStage = "A4_operation1";
    loadApplet("ggbApplet04", ggb_N_10_2_A4);
}
function A4_operation1_link() {
    removeListener();
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("A", A4_operation1_check);
}
function A4_operation1_check() {
    let api =applet.getAppletObject();
    let a = api.getValue("a");
    if (a == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A4_operation1_done").css({"opacity": "1"});
            $("#A4_operation1_next").removeClass("d-none");
            $("#A4_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A4_observation1() {
    currentStage = "A4_observation1";
    loadApplet("ggbApplet04", ggb_N_10_2_A4);
}

function A4_observation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("numThrows", A4_observation1_showIcon);
}
function A4_observation1_check() {
    let A4_observation1_input1_1_usrans = $("#A4_observation1_input1_1").val();
    let A4_observation1_input1_2_usrans = $("#A4_observation1_input1_2").val();
    let A4_observation1_input2_1_usrans = $("#A4_observation1_input2_1").val();
    let A4_observation1_input2_2_usrans = $("#A4_observation1_input2_2").val();
    let A4_observation1_input3_1_usrans = $("#A4_observation1_input3_1").val();
    let A4_observation1_input3_2_usrans = $("#A4_observation1_input3_2").val();
    let A4_observation1_input4_1_usrans = $("#A4_observation1_input4_1").val();
    let A4_observation1_input4_2_usrans = $("#A4_observation1_input4_2").val();
    let A4_observation1_input5_1_usrans = $("#A4_observation1_input5_1").val();
    let A4_observation1_input5_2_usrans = $("#A4_observation1_input5_2").val();
    // let api = applet.getAppletObject();
    if (A4_observation1_input1_1_usrans == 2 &&
        A4_observation1_input1_2_usrans == 2 &&
        A4_observation1_input2_1_usrans == 3 &&
        A4_observation1_input2_2_usrans == 1 &&
        A4_observation1_input3_1_usrans == 6 &&
        A4_observation1_input3_2_usrans == 2 &&
        A4_observation1_input4_1_usrans == 1 &&
        A4_observation1_input4_2_usrans == 3 &&
        A4_observation1_input5_1_usrans == 2 &&
        A4_observation1_input5_2_usrans == 6 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A4_observation1_confirm").hide();
            $("#A4_observation1_done").css({"opacity": "1"});
            $("#A4_observation1_next").removeClass("d-none");
            $("#A4_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細看看！'})
    }
}

function A4_investigation1() {
    currentStage = "A4_investigation1";
    loadApplet("ggbApplet04", ggb_N_10_2_A4);
}

function A4_investigation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
}

function A4_investigation1_check() {
    let A4_investigation1_input1_usrans = $('input[name=A4_investigation1_input1]:checked').val();
    if( A4_investigation1_input1_usrans ==2 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A4_investigation1_confirm").hide();
            $("#A4_investigation1_done").css({"opacity": "1"});
            $("#A4_investigation1_next").removeClass("d-none");
            $("#A4_investigation1_explain").removeClass("d-none");
            $("#A4_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再想想看！'})
    }
}

function A5_operation1() {
    currentStage = "A5_operation1";
    loadApplet("ggbApplet05", ggb_N_10_2_A5);
}
function A5_operation1_link() {
    removeListener();
    let api =applet.getAppletObject();
    api.registerObjectUpdateListener("A", A5_operation1_check);
}
function A5_operation1_check() {
    let api =applet.getAppletObject();
    let a = api.getValue("a");
    if (a == 0) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A5_operation1_done").css({"opacity": "1"});
            $("#A5_operation1_next").removeClass("d-none");
            $("#A5_operation1_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A5_observation1() {
    currentStage = "A5_observation1";
    loadApplet("ggbApplet05", ggb_N_10_2_A5);
}

function A5_observation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
    // api.registerObjectUpdateListener("numThrows", A5_observation1_showIcon);
}
function A5_observation1_check() {
    // let api = applet.getAppletObject();
    let A5_observation1_input1_1_usrans = $("#A5_observation1_input1_1").val();
    let A5_observation1_input1_2_usrans = $("#A5_observation1_input1_2").val();
    let A5_observation1_input2_1_usrans = $("#A5_observation1_input2_1").val();
    let A5_observation1_input2_2_usrans = $("#A5_observation1_input2_2").val();
    let A5_observation1_input3_1_usrans = $("#A5_observation1_input3_1").val();
    let A5_observation1_input3_2_usrans = $("#A5_observation1_input3_2").val();
    let A5_observation1_input4_1_usrans = $("#A5_observation1_input4_1").val();
    let A5_observation1_input4_2_usrans = $("#A5_observation1_input4_2").val();
    let A5_observation1_input5_1_usrans = $("#A5_observation1_input5_1").val();
    let A5_observation1_input5_2_usrans = $("#A5_observation1_input5_2").val();
    let A5_observation1_input6_1_usrans = $("#A5_observation1_input6_1").val();
    let A5_observation1_input6_2_usrans = $("#A5_observation1_input6_2").val();
    if (A5_observation1_input1_1_usrans == 1 &&
        A5_observation1_input1_2_usrans == 2 &&
        A5_observation1_input2_1_usrans == 2 &&
        A5_observation1_input2_2_usrans == 1 &&
        A5_observation1_input3_1_usrans == 1 &&
        A5_observation1_input3_2_usrans == 4 &&
        A5_observation1_input4_1_usrans == 4 &&
        A5_observation1_input4_2_usrans == 1 &&
        A5_observation1_input5_1_usrans == 3 &&
        A5_observation1_input5_2_usrans == 6 &&
        A5_observation1_input6_1_usrans == 6 &&
        A5_observation1_input6_2_usrans == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A5_observation1_confirm").hide();
            $("#A5_observation1_done").css({"opacity": "1"});
            $("#A5_observation1_next").removeClass("d-none");
            $("#A5_observation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '再仔細看看！'})
    }
}

function A5_investigation1() {
    currentStage = "A5_investigation1";
    loadApplet("ggbApplet05", ggb_N_10_2_A5);
}

function A5_investigation1_link() {
    removeListener();
    // let api = applet.getAppletObject();
}

function A5_investigation1_check() {
    let A5_investigation1_input1_usrans = $('input[name=A5_investigation1_input1]:checked').val();
    if( A5_investigation1_input1_usrans == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A5_investigation1_confirm").hide();
            $("#A5_investigation1_done").css({"opacity": "1"});
            $("#A5_investigation1_next").removeClass("d-none");
            $("#A5_investigation1_explain").removeClass("d-none");
            $("#A5_investigation1_link img").css({"opacity": "1"});
        })
        removeListener();
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再想想看！'})
    }
}

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
        showA4();
    });
    //A4
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
        showA5();
    });
    //A5
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
        ;
    });
    

});

// 待改進項目
// 