var currentStage = "cover";
params.ggbBase64 = ggb_D_12A_2_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectClickListener("button2");
    api.unregisterObjectUpdateListener("p");
    api.unregisterObjectUpdateListener("n");
}

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
            html: '隨機變數的期望值、變異數及標準差的定義。',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>讓學生了解二項分布的概念。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S01-能認識二項分布的概念</dt><dd><ul><li>以具體實例說明二項分布的定義。</li><li>以具體實例說明二項分布隨機變數X的機率分布。</li><li>可利用GGB輔助計算，並繪製二項分布的機率 質量函數圖，進而觀察圖形的特徵。</li></ul></dd><dt>S02-能理解二項分布的期望值之意義與算法</dt><dd><ul><li>以具體實例說明，由機率分布計算隨機變數的期望值。</li><li>建議證明二項分布的期望值的公式。</li></ul></dd><dt>S03-能理解二項分布的變異數與標準差之意義與算法</dt><dd><ul><li>以具體實例說明，由機率分布計算隨機變數的變異數與標準差。</li><li>建議證明二項分布的變異數的公式。</li></ul></dd><dt>S04-能理解二項分布的期望值、變異數與標準差之應用</dt><dd><ul><li>以具體實例說明二項分布的期望值、變異數與標 準差之應用。</li></ul></dd></dl>',
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
    $(".title > span ").html("D-12甲-2(1) 活動1：二項分布");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_D_12A_2_1_A1_1;
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
    loadApplet("ggbApplet01_1", ggb_D_12A_2_1_A1_1);
}

function A1_operation1_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectClickListener("button2", A1_operation1_check);
}

function A1_operation1_check() {
    let api =applet.getAppletObject();
    let p = api.getValue("p");
    let n = api.getValue("n");
    if (p == 0.4 && n == 15) {
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
    loadApplet("ggbApplet01_1", ggb_D_12A_2_1_A1_1);
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
    loadApplet("ggbApplet01_1", ggb_D_12A_2_1_A1_1);
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
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
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
    if (p == 0.4 && n == 15) {
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
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation2_check() {
    // let api = applet.getAppletObject();
    let A1_observation2_input1_1_usrans = $('#A1_observation2_input1_1').val();
    let A1_observation2_input1_2_usrans = $('#A1_observation2_input1_2').val();
    let A1_observation2_input1_3_usrans = $('#A1_observation2_input1_3').val();
    let A1_observation2_input1_4_usrans = $('#A1_observation2_input1_4').val();
    let A1_observation2_input1_5_usrans = $('#A1_observation2_input1_5').val();
    let A1_observation2_input2_1_usrans = $('#A1_observation2_input2_1').val();
    let A1_observation2_input2_2_usrans = $('#A1_observation2_input2_2').val();
    let A1_observation2_input2_3_usrans = $('#A1_observation2_input2_3').val();
    let A1_observation2_input2_4_usrans = $('#A1_observation2_input2_4').val();
    let A1_observation2_input2_5_usrans = $('#A1_observation2_input2_5').val();
    if (A1_observation2_input1_1_usrans == 0 && 
        A1_observation2_input1_2_usrans == 1 &&
        A1_observation2_input1_3_usrans == 2 &&
        A1_observation2_input1_4_usrans == 3 &&
        A1_observation2_input1_5_usrans == 4 &&
        A1_observation2_input2_1_usrans == 0 && 
        A1_observation2_input2_2_usrans == 1 &&
        A1_observation2_input2_3_usrans == 2 &&
        A1_observation2_input2_4_usrans == 3 &&
        A1_observation2_input2_5_usrans == 4 ) {
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

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_operation3_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("p", A1_operation3_check);
    api.registerObjectUpdateListener("n", A1_operation3_check);
}

function A1_operation3_check() {
    let api = applet.getAppletObject();
    let p = api.getValue("p");
    let n = api.getValue("n");
    if (p == 0.5 && n == 11) {
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
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_observation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation3_check() {
    let api = applet.getAppletObject();
    let A1_observation3_input1_1_usrans = $('#A1_observation3_input1_1').val();
    let A1_observation3_input1_2_usrans = $('#A1_observation3_input1_2').val();
    let A1_observation3_input1_3_usrans = $('#A1_observation3_input1_3').val();
    let A1_observation3_input2_1_usrans = $('#A1_observation3_input2_1').val();
    let A1_observation3_input2_2_usrans = $('#A1_observation3_input2_2').val();
    let A1_observation3_input2_3_usrans = $('#A1_observation3_input2_3').val();
    if (A1_observation3_input1_1_usrans == 3 && 
        A1_observation3_input1_2_usrans == 2 && 
        A1_observation3_input1_3_usrans == 0 && 
        A1_observation3_input2_1_usrans == 3 && 
        A1_observation3_input2_2_usrans == 2 && 
        A1_observation3_input2_3_usrans == 0 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A1_observation3_confirm").hide();
            $("#A1_observation3_done").css({"opacity": "1"});
            $("#A1_observation3_next").removeClass("d-none");
            $("#A1_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    let input1 = $("#A1_investigation2_input1").val();
    if(input1 != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A1_investigation2_confirm").hide();
            $("#A1_investigation2_done").css({"opacity": "1"});
            $("#A1_investigation2_next").removeClass("d-none");
            $("#A1_investigation2_explain").removeClass("d-none");
            $("#A1_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請試著說明自己的想法喔！'})
    }
}

function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_operation4_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.setValue("passPL", false);
    api.setValue("passPR", false);
    api.registerObjectUpdateListener("n", A1_operation4_check);
    api.registerObjectUpdateListener("p", A1_operation4_check);
}

function A1_operation4_check() {
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let passPL = api.getValue("passPL");
    let passPR = api.getValue("passPR");
    if (n == 15 && passPL && passPR) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
            $("#A1_operation4_done").css({"opacity": "1"});
            $("#A1_operation4_next").removeClass("d-none");
            $("#A1_operation4_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01_2", ggb_D_12A_2_1_A1_2);
}

function A1_observation4_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation4_check() {
    // let api = applet.getAppletObject();
    let A1_observation4_input1_1_usrans = $('#A1_observation4_input1_1').val();
    let A1_observation4_input1_2_usrans = $('#A1_observation4_input1_2').val();
    let A1_observation4_input2_1_usrans = $('#A1_observation4_input2_1').val();
    let A1_observation4_input2_2_usrans = $('#A1_observation4_input2_2').val();
    if (A1_observation4_input1_1_usrans == 1 && 
        A1_observation4_input1_2_usrans == 0 && 
        A1_observation4_input2_1_usrans == 0 &&
        A1_observation4_input2_2_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A1_observation4_confirm").hide();
            $("#A1_observation4_done").css({"opacity": "1"});
            $("#A1_observation4_next").removeClass("d-none");
            $("#A1_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察後再試著回答！'})
    }
}

function A1_operation5() {
    currentStage = "A1_operation5";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_1_A1_3);
}

function A1_operation5_link() {
    removeListener();
    let api = applet.getAppletObject();
    api.registerObjectUpdateListener("n", A1_operation5_check);
    api.registerObjectUpdateListener("p", A1_operation5_check);
}

function A1_operation5_check() {
    let api = applet.getAppletObject();
    let n = api.getValue("n");
    let p = api.getValue("p");
    if (n == 10 && p == 0.1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作5'}).then((result) => {
            $("#A1_operation5_done").css({"opacity": "1"});
            $("#A1_operation5_next").removeClass("d-none");
            $("#A1_operation5_link img").css({"opacity": "1"});
        })
        removeListener();
    }
}

function A1_observation5() {
    currentStage = "A1_observation5";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_1_A1_3);
}

function A1_observation5_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_observation5_check() {
    // let api = applet.getAppletObject();
    let A1_observation5_input1_1_usrans = $('#A1_observation5_input1_1').val();
    let A1_observation5_input1_2_usrans = $('#A1_observation5_input1_2').val();
    let A1_observation5_input1_3_usrans = $('#A1_observation5_input1_3').val();
    let A1_observation5_input2_1_usrans = $('#A1_observation5_input2_1').val();
    let A1_observation5_input2_2_usrans = $('#A1_observation5_input2_2').val();
    let A1_observation5_input2_3_usrans = $('#A1_observation5_input2_3').val();
    let A1_observation5_input3_1_usrans = $('#A1_observation5_input3_1').val();
    let A1_observation5_input3_2_usrans = $('#A1_observation5_input3_2').val();
    let A1_observation5_input3_3_usrans = $('#A1_observation5_input3_3').val();
    let A1_observation5_input4_1_usrans = $('#A1_observation5_input4_1').val();
    let A1_observation5_input4_2_usrans = $('#A1_observation5_input4_2').val();
    let A1_observation5_input4_3_usrans = $('#A1_observation5_input4_3').val();
    let A1_observation5_input5_1_usrans = $('#A1_observation5_input5_1').val();
    let A1_observation5_input5_2_usrans = $('#A1_observation5_input5_2').val();
    let A1_observation5_input5_3_usrans = $('#A1_observation5_input5_3').val();
    let A1_observation5_input6_1_usrans = $('#A1_observation5_input6_1').val();
    let A1_observation5_input6_2_usrans = $('#A1_observation5_input6_2').val();
    let A1_observation5_input6_3_usrans = $('#A1_observation5_input6_3').val();
    if (A1_observation5_input1_1_usrans == 0 && 
        A1_observation5_input1_2_usrans == 1 && 
        A1_observation5_input1_3_usrans == 2 &&
        A1_observation5_input2_1_usrans == 0 && 
        A1_observation5_input2_2_usrans == 1 && 
        A1_observation5_input2_3_usrans == 0 &&
        A1_observation5_input3_1_usrans == 0 && 
        A1_observation5_input3_2_usrans == 1 && 
        A1_observation5_input3_3_usrans == 0 &&
        A1_observation5_input4_1_usrans == 0 && 
        A1_observation5_input4_2_usrans == 1 && 
        A1_observation5_input4_3_usrans == 2 &&
        A1_observation5_input5_1_usrans == 0 && 
        A1_observation5_input5_2_usrans == 1 && 
        A1_observation5_input5_3_usrans == 0 &&
        A1_observation5_input6_1_usrans == 0 && 
        A1_observation5_input6_2_usrans == 1 && 
        A1_observation5_input6_3_usrans == 0 ) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄5'}).then((result) => {
            $("#A1_observation5_confirm").hide();
            $("#A1_observation5_done").css({"opacity": "1"});
            $("#A1_observation5_next").removeClass("d-none");
            $("#A1_observation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
    }
}

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01_3", ggb_D_12A_2_1_A1_3);
}

function A1_investigation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation3_check() {
    let A1_investigation3_input1_1_usrans = $('#A1_investigation3_input1_1').val();
    let A1_investigation3_input1_2_usrans = $('#A1_investigation3_input1_2').val();
    let A1_investigation3_input1_3_usrans = $('#A1_investigation3_input1_3').val();
    let A1_investigation3_input1_4_usrans = $('#A1_investigation3_input1_4').val();
    if( A1_investigation3_input1_1_usrans == 1 && 
        A1_investigation3_input1_2_usrans == 2 && 
        A1_investigation3_input1_3_usrans == 0 && 
        A1_investigation3_input1_4_usrans == 3 ) {
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
    loadApplet("ggbApplet01_4", ggb_D_12A_2_1_A1_4);
}

function A1_investigation4_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation4_check() {
    let A1_investigation4_input1_1_usrans = $('#A1_investigation4_input1_1').val();
    let A1_investigation4_input1_2_usrans = $('#A1_investigation4_input1_2').val();
    let A1_investigation4_input2_1_usrans = $('#A1_investigation4_input2_1').val();
    let A1_investigation4_input2_2_usrans = $('#A1_investigation4_input2_2').val();
    let A1_investigation4_input3_1_usrans = $('#A1_investigation4_input3_1').val();
    let A1_investigation4_input3_2_usrans = $('#A1_investigation4_input3_2').val();
    let A1_investigation4_input4_1_usrans = $('#A1_investigation4_input4_1').val();
    let A1_investigation4_input4_2_usrans = $('#A1_investigation4_input4_2').val();
    let A1_investigation4_input5_1_usrans = $('#A1_investigation4_input5_1').val();
    let A1_investigation4_input5_2_usrans = $('#A1_investigation4_input5_2').val();
    let A1_investigation4_input6_1_usrans = $('#A1_investigation4_input6_1').val();
    let A1_investigation4_input6_2_usrans = $('#A1_investigation4_input6_2').val();
    if( A1_investigation4_input1_1_usrans == 0 && 
        A1_investigation4_input1_2_usrans == 0 && 
        A1_investigation4_input2_1_usrans == 0 && 
        A1_investigation4_input2_2_usrans == 1 && 
        A1_investigation4_input3_1_usrans == 0 && 
        A1_investigation4_input3_2_usrans == 1 && 
        A1_investigation4_input4_1_usrans == 0 && 
        A1_investigation4_input4_2_usrans == 1 && 
        A1_investigation4_input5_1_usrans == 0 && 
        A1_investigation4_input5_2_usrans == 1 && 
        A1_investigation4_input6_1_usrans == 0 && 
        A1_investigation4_input6_2_usrans == 1 ) {
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
        $("#A1_operation3_link").click();
    });
    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });
    // $("#A1_operation3_confirm").click(function() {
    //     A1_operation3_confirm();
    // });
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
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function() {
        $("#A1_operation4_link").click();
    });
    $("#A1_operation4_link").click(function() {
        A1_operation4();
    });
    // $("#A1_operation4_confirm").click(function() {
    //     A1_operation4_confirm();
    // });
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
        $("#A1_operation5_link").click();
    });
    $("#A1_operation5_link").click(function() {
        A1_operation5();
    });
    // $("#A1_operation5_confirm").click(function() {
    //     A1_operation5_confirm();
    // });
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
        $("#A1_investigation3_link").click();
    });
    $("#A1_investigation3_link").click(function() {
        A1_investigation3();
    });
    $("#A1_investigation3_confirm").click(function() {
        A1_investigation3_check();
    });
    $("#A1_investigation3_next").click(function() {
        $("#A1_investigation4_link").click();
    });
    $("#A1_investigation4_link").click(function() {
        A1_investigation4();
    });
    $("#A1_investigation4_confirm").click(function() {
        A1_investigation4_check();
    });
    $("#A1_investigation4_next").click(function() {
        ;
    });
});

// 待改進項目
// ‧A1_observation1 增加"重新投擲"次數偵測