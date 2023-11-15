function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("活動4：利用機率解決情境問題");
    params.id = "ggbApplet04b";
    params.ggbBase64 = ggb_JDM_IEEA_01_A4b;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A4_operation1() {
    currentStage = "A4_operation1";
    loadApplet("ggbApplet04b", ggb_JDM_IEEA_01_A4b);
}

function A4_operation1_change(objName) {
    loadApplet("ggbApplet04b", ggb_JDM_IEEA_01_A4b);
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">先從樹狀圖分析一下應該拿哪一種轉盤讓老師玩比較有機會吃到換麥當勞?</span>'})
}

function A4_operation1_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: '我想挑戰!', width: 1000, html: '<img src="./images/content/JDM_IEEA_01/A4_operation1_forward.png" width="900px">'}).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">先從樹狀圖分析一下應該拿哪一種轉盤讓老師玩比較有機會吃到換麥當勞？</span>'})
        }
    })
    var api = applet.getAppletObject();
    $("#A4_operation1_input1_ans1").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation1_input1_ans1").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation1_input1_ans1").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation1_input1_ans1").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation1_input1_ans1").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation1_input1_ans1").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation1_input1_ans2").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation1_input1_ans2").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation1_input1_ans2").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation1_input1_ans2").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation1_input1_ans2").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation1_input1_ans2").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation1_input1_ans2").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation1_input1_ans2").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation1_input1_ans3").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation1_input1_ans3").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation1_input1_ans3").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation1_input1_ans3").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation1_input1_ans3").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation1_input1_ans3").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation1_input1_ans3").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation1_input1_ans3").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation1_input1_ans4").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation1_input1_ans4").next().find("a").eq(1).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation1_input1_ans4").next().find("a").eq(2).html(katex.renderToString("6", { throwOnError: false }));
    $("#A4_operation1_input1_ans4").next().find("a").eq(3).html(katex.renderToString("9", { throwOnError: false }));
    $("#A4_operation1_input1_ans4").next().find("a").eq(4).html(katex.renderToString("18", { throwOnError: false }));
    $("#A4_operation1_input1_ans4").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation1_input1_ans4").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation1_input1_ans4").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(6);
    });
    $("#A4_operation1_input1_ans4").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(9);
    });
    $("#A4_operation1_input1_ans4").next().find("a").eq(4).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(18);
    });
    $("#A4_operation1_input1_ans5").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation1_input1_ans5").next().find("a").eq(1).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation1_input1_ans5").next().find("a").eq(2).html(katex.renderToString("6", { throwOnError: false }));
    $("#A4_operation1_input1_ans5").next().find("a").eq(3).html(katex.renderToString("9", { throwOnError: false }));
    $("#A4_operation1_input1_ans5").next().find("a").eq(4).html(katex.renderToString("18", { throwOnError: false }));
    $("#A4_operation1_input1_ans5").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation1_input1_ans5").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation1_input1_ans5").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(6);
    });
    $("#A4_operation1_input1_ans5").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(9);
    });
    $("#A4_operation1_input1_ans5").next().find("a").eq(4).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(18);
    });
}

function A4_operation1_check1() {
    let A4_operation1_input1_ans1 = $("#A4_operation1_input1_ans1").val();
    if (A4_operation1_input1_ans1 != "") {
        if (A4_operation1_input1_ans1 == 0) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">0層表示只會有1種結果<br>但從左方的樹狀圖看來不只1種結果喔<br>請再觀察看看!</span>'})
        } else if (A4_operation1_input1_ans1 == 1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">左方的樹狀圖看起來不只1層喔<br>請再觀察看看!</span>'})
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation1_confirm").hide();
                $("#A4_operation1_input1_ans2").parent().parent().removeClass("d-none");
                $("#A4_operation1_input1_ans1").prop("disabled", true);
                // $("#A4_operation1_input1_ans1").parent().removeClass("dropdown");
                // $("#A4_operation1_input1_ans1").hide();
                // $("#A4_operation1_input1_ans1").parent().html("<span style='color: #0000ff; text-weight: bolder;'>2</span>");
                $("#A4_operation1_confirm2").removeClass("d-none");
    
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_operation1_check2() {
    let A4_operation1_input1_ans2 = $("#A4_operation1_input1_ans2").val();
    let A4_operation1_input1_ans3 = $("#A4_operation1_input1_ans3").val();
    if (A4_operation1_input1_ans2 !="" && A4_operation1_input1_ans3 != "") {
        if (A4_operation1_input1_ans2 == 3 && A4_operation1_input1_ans3 == 3) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation1_confirm2").addClass("d-none");
                $("#A4_operation1_input1_ans4").parent().parent().removeClass("d-none");
                $("#A4_operation1_input1_ans2").prop("disabled", true);
                $("#A4_operation1_input1_ans3").prop("disabled", true);
                // $("#A4_operation1_input1_ans2").parent().removeClass("dropdown");
                // $("#A4_operation1_input1_ans2").hide();
                // $("#A4_operation1_input1_ans2").parent().html("<span style='color: #0000ff; text-weight: bolder;'>3</span>");
                // $("#A4_operation1_input1_ans3").parent().removeClass("dropdown");
                // $("#A4_operation1_input1_ans3").hide();
                // $("#A4_operation1_input1_ans3").parent().html("<span style='color: #0000ff; text-weight: bolder;'>3</span>");
                $("#A4_operation1_confirm3").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察第一次結果中<br>藍色和黃色出現的次數</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_operation1_check3() {
    let A4_operation1_input1_ans4 = $("#A4_operation1_input1_ans4").val();
    let A4_operation1_input1_ans5 = $("#A4_operation1_input1_ans5").val();
    if (A4_operation1_input1_ans4 !="" && A4_operation1_input1_ans5 != "") {
        if (A4_operation1_input1_ans4 == 18 && A4_operation1_input1_ans5 == 18) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation1_confirm3").addClass("d-none");
                $("#A4_operation1_input1_ans4").prop("disabled", true);
                $("#A4_operation1_input1_ans5").prop("disabled", true);
                // $("#A4_operation1_input1_ans4").parent().removeClass("dropdown");
                // $("#A4_operation1_input1_ans4").hide();
                // $("#A4_operation1_input1_ans4").parent().html("<span style='color: #0000ff; text-weight: bolder;'>18</span>");
                // $("#A4_operation1_input1_ans5").parent().removeClass("dropdown");
                // $("#A4_operation1_input1_ans5").hide();
                // $("#A4_operation1_input1_ans5").parent().html("<span style='color: #0000ff; text-weight: bolder;'>18</span>");
                $("#A4_operation1_done").css({"opacity": "1"});
                $("#A4_operation1_next").removeClass("d-none");
                $("#A4_operation1_link img").css({"opacity": "1"});
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察第二次結果中<br>藍色和黃色出現的次數</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_observation1() {
    currentStage = "A4_observation1";
    loadApplet("ggbApplet04b", ggb_JDM_IEEA_01_A4b);
}

function A4_observation1_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(picShowOption2Y,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption2B,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption1B1Y,1,true)");
    api.evalCommand("SetFixed(picShowOption2Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2B, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2YClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption2BClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1YClicked, true, true)");
    $("#A4_observation1_input1_ans1").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans1").next().find("a").eq(1).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans1").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans1").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation1_input1_ans1").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation1_input1_ans1").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_observation1_input1_ans2").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans2").next().find("a").eq(1).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans2").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans2").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation1_input1_ans2").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation1_input1_ans2").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_observation1_input1_ans3").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans3").next().find("a").eq(1).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans3").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
    $("#A4_observation1_input1_ans3").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation1_input1_ans3").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation1_input1_ans3").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    // $("#A4_observation1").find("tr").eq(2).addClass("d-none");
    
}

function A4_observation1_check1() {
    let A4_observation1_input1_ans1 = $("#A4_observation1_input1_ans1").val();
    let A4_observation1_input1_ans2 = $("#A4_observation1_input1_ans2").val();
    let A4_observation1_input1_ans3 = $("#A4_observation1_input1_ans3").val();
    if (A4_observation1_input1_ans1 != "" && A4_observation1_input1_ans2 != "" && A4_observation1_input1_ans3 != "") {
        if (A4_observation1_input1_ans1 == 1 && A4_observation1_input1_ans2 == 1 && A4_observation1_input1_ans3 == 3) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對嘍</span>'}).then((result) => {
                $("#A4_observation1_confirm").hide();
                $("#A4_observation1_confirm2").removeClass("d-none");
                $("#A4_observation1").find("tr").eq(2).removeClass("d-none");
                $("#A4_observation1_input1_ans1").prop("disabled", true);
                $("#A4_observation1_input1_ans2").prop("disabled", true);
                $("#A4_observation1_input1_ans3").prop("disabled", true);
                // $("#A4_observation1_input1_ans1").parent().html("<span style='color: #0000ff;'>"+katex.renderToString("\\dfrac{1}{4}", { throwOnError: false })+"</span>");;
                // $("#A4_observation1_input1_ans1").hide();
                // $("#A4_observation1_input1_ans2").parent().html("<span style='color: #0000ff;'>"+katex.renderToString("\\dfrac{1}{4}", { throwOnError: false })+"</span>");;
                // $("#A4_observation1_input1_ans2").hide();
                // $("#A4_observation1_input1_ans3").parent().html("<span style='color: #0000ff;'>"+katex.renderToString("\\dfrac{1}{2}", { throwOnError: false })+"</span>");;
                // $("#A4_observation1_input1_ans3").hide();
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察樹狀圖中各情況出現的次數並算出其機率</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答觀察記錄1的問題</span>'})
    }
}

function A4_observation1_check2() {
    let A4_observation1_input1_ans4 = $("#A4_observation1_input1_ans4").prop("checked");
    let A4_observation1_input1_ans5 = $("#A4_observation1_input1_ans5").prop("checked");
    let A4_observation1_input1_ans6 = $("#A4_observation1_input1_ans6").prop("checked");
    if (A4_observation1_input1_ans4 || A4_observation1_input1_ans5 || A4_observation1_input1_ans6) {
        if (!A4_observation1_input1_ans4 && !A4_observation1_input1_ans5 && A4_observation1_input1_ans6) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_observation1_confirm2").addClass("d-none");
                $("#A4_observation1_done").css({"opacity": "1"});
                $("#A4_observation1_next").removeClass("d-none");
                $("#A4_observation1_link img").css({"opacity": "1"});
                $("#A4_observation1_input1_ans4").prop("disabled", true);
                $("#A4_observation1_input1_ans5").prop("disabled", true);
                $("#A4_observation1_input1_ans6").prop("disabled", true);
                // $("#A4_observation1_input1_ans4").parent().html("");
                // $("#A4_observation1_input1_ans4").hide();
                // $("#A4_observation1_input1_ans5").parent().html("");
                // $("#A4_observation1_input1_ans5").hide();
                // $("#A4_observation1_input1_ans6").parent().removeClass("form-check");
                // $("#A4_observation1_input1_ans6").parent().html('<span style="color:#ff0000; font-size: 18px; font-weight: bolder;">&#10003;</span>');
                // $("#A4_observation1_input1_ans6").hide();
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請對照各情況出現的機率並勾選最高者</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答觀察記錄1的問題</span>'})
    }
}

function A4_operation2() {
    currentStage = "A4_operation2";
    loadApplet("ggbApplet04c", ggb_JDM_IEEA_01_A4c);
}

function A4_operation2_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    if (numSpinedRoundRouletteA == 180) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成實驗操作2</span>'}).then((result) => {
            $("#A4_operation2_done").css({"opacity": "1"});
            $("#A4_operation2_next").removeClass("d-none");
            $("#A4_operation2_link img").css({"opacity": "1"});
        })
    } 
}

function A4_operation2_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_operation2_done");
}

function A4_observation2() {
    currentStage = "A4_observation2";
    loadApplet("ggbApplet04c", ggb_JDM_IEEA_01_A4c);
}

function A4_observation2_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(pic2, 1, false)");
    api.evalCommand("SetVisibleInView(text5, 1, false)");
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    let numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    let ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    let ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    let ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];
    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });
    function createOption() {
        $("#A4_observation2_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation2_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation2_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation2_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A4_observation2_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A4_observation2_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation2_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation2_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A4_observation2_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation2_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation2_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation2_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation2_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation2_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation2_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation2_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation2_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation2_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation2_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation2_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A4_observation2_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation2_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation2_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A4_observation2_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation2_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation2_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A4_observation2_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A4_observation2_input1_usrans1 = $("#A4_observation2_input1_ans1").val();
    var A4_observation2_input1_usrans2 = $("#A4_observation2_input1_ans2").val();
    var A4_observation2_input1_usrans3 = $("#A4_observation2_input1_ans3").val();
    var A4_observation2_input1_usrans4 = $("#A4_observation2_input1_ans4").val();
    var A4_observation2_input1_usrans5 = $("#A4_observation2_input1_ans5").val();
    var A4_observation2_input1_usrans6 = $("#A4_observation2_input1_ans6").val();
    var input1_usrans1_check = (A4_observation2_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A4_observation2_input1_usrans2 == numRouletteA_2B);
    var input1_usrans3_check = (A4_observation2_input1_usrans3 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A4_observation2_input1_usrans4 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A4_observation2_input1_usrans5 == ratioRouletteA_2B);
    var input1_usrans6_check = (A4_observation2_input1_usrans6 == ratioRouletteA_1B1Y);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 2</span>'}).then((result) => {
            $("#A4_observation2_confirm").hide();
            $("#A4_observation2_done").css({"opacity": "1"});
            $("#A4_observation2_next").removeClass("d-none");
            $("#A4_observation2_link img").css({"opacity": "1"});
            $("#A4_observation2_input1_ans1").prop("disabled", true);
            $("#A4_observation2_input1_ans2").prop("disabled", true);
            $("#A4_observation2_input1_ans3").prop("disabled", true);
            $("#A4_observation2_input1_ans4").prop("disabled", true);
            $("#A4_observation2_input1_ans5").prop("disabled", true);
            $("#A4_observation2_input1_ans6").prop("disabled", true);
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A4_investigation1() {
    currentStage = "A4_investigation1";
    loadApplet("ggbApplet04c", ggb_JDM_IEEA_01_A4c);
}

var numRouletteA_2B = 0, numRouletteA_2Y = 0, numRouletteA_1B1Y = 0, ratioRouletteA_2B = 0, ratioRouletteA_2Y = 0, ratioRouletteA_1B1Y = 0; 
function A4_investigation1_link() {
    var api = applet.getAppletObject();
    numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    $("#A4_investigation1_usrAns1").html(numRouletteA_2B);
    $("#A4_investigation1_usrAns2").html(numRouletteA_2Y);
    $("#A4_investigation1_usrAns3").html(numRouletteA_1B1Y);
    $("#A4_investigation1_usrAns4").html(ratioRouletteA_2B);
    $("#A4_investigation1_usrAns5").html(ratioRouletteA_2Y);
    $("#A4_investigation1_usrAns6").html(ratioRouletteA_1B1Y);
}

var A4_investigation1_input1_usrAns = 0;
function A4_investigation1_confirm() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation1_input1]:checked").val() != undefined) {
        A4_investigation1_input1_usrAns = $("input[name=A4_investigation1_input1]:checked").val();
        if ($("input[name=A4_investigation1_input1]:checked").val() != 3) {
            // $("#A4_investigation1_question2").find("span").html("2次黃色");
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師會選擇機率最高的情況下注喔!</span>'})
        } else {
            $("#A4_investigation1_question2").find("span").html("1藍1黃");
            Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">根據模擬結果回答接下來的問題</span>'}).then((result) => {
                $("#A4_investigation1_confirm").hide();
                $("#A4_investigation1_question2").removeClass("d-none");
                $("#A4_investigation1_question2").next().removeClass("d-none");
                $("#A4_investigation1_input2_option1").next().html(numRouletteA_2B);
                $("#A4_investigation1_input2_option2").next().html(numRouletteA_2Y);
                $("#A4_investigation1_input2_option3").next().html(numRouletteA_1B1Y);
                $("#A4_investigation1_confirm2").removeClass("d-none");
                $("input[name=A4_investigation1_input1]").prop("disabled", true);
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation1_confirm2() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation1_input2]:checked").val() != undefined) {
        if ($("input[name=A4_investigation1_input2]:checked").val() != A4_investigation1_input1_usrAns) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師獲勝的回合數就是出現1藍1黃的回合數</span>'}) 
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對了</span>'}).then((result) => {
                $("#A4_investigation1_confirm2").addClass("d-none");
                $("#A4_investigation1_question3").removeClass("d-none");
                $("#A4_investigation1_question3").next().removeClass("d-none");
                $("#A4_investigation1_input3_option1").next().html(180-numRouletteA_2B);
                $("#A4_investigation1_input3_option2").next().html(180-numRouletteA_2Y);
                $("#A4_investigation1_input3_option3").next().html(180-numRouletteA_1B1Y);
                $("#A4_investigation1_input3_option4").next().html(numRouletteA_1B1Y);
                $("#A4_investigation1_confirm3").removeClass("d-none");
                $("input[name=A4_investigation1_input2]").prop("disabled", true);
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation1_confirm3() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation1_input3]:checked").val() != undefined) {
        if ($("input[name=A4_investigation1_input3]:checked").val() == 4) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師獲勝的回合數不等於你獲得的點數喔!<br>請再想想看</span>'})
        } else if ($("input[name=A4_investigation1_input3]:checked").val() != A4_investigation1_input1_usrAns) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師沒押中的就是你獲得的點數</span>'})
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對了</span>'}).then((result) => {
                $("#A4_investigation1_confirm3").addClass("d-none");
                $("#A4_investigation1_question4").removeClass("d-none");
                $("#A4_investigation1_question4").next().removeClass("d-none");
                $("#A4_investigation1_confirm4").removeClass("d-none");
                $("input[name=A4_investigation1_input3]").prop("disabled", true);
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation1_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    if (numSpinedRoundRouletteA == 180) {
        if (api.getValue("numRouletteA_{1B1Y}") <= 80) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">恭喜你換得一份麥當勞套餐<br>接下來換成【轉盤D】<br>看看能否也有機會換到一份套餐?</span>'}).then((result) => {
                // $("input[name=A4_investigation1_input4]").prop("disabled", true);
                $("#A4_investigation1_done").css({"opacity": "1"});
                $("#A4_investigation1_next").removeClass("d-none");
                $("#A4_investigation1_link img").css({"opacity": "1"});
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">可惜沒辦法順利換到麥當勞套餐<br>接下來換成【轉盤D】<br>看看能否比較有機會能換到一份套餐?</span>'}).then((result) => {
                // $("input[name=A4_investigation1_input4]").prop("disabled", true);
                $("#A4_investigation1_done").css({"opacity": "1"});
                $("#A4_investigation1_next").removeClass("d-none");
                $("#A4_investigation1_link img").css({"opacity": "1"});
            })
        }
        
    } 
}

function A4_investigation1_confirm4() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("numSpinedRoundRouletteA");
    api.evalCommand("RunClickScript(pic2)");
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">那我們就來挑戰一次看看吧!<br>點擊 自動轉動 按鈕</span>'})
    $("input[name=A4_investigation1_input4]").prop("disabled", true);
    $("#A4_investigation1_confirm4").addClass("d-none");
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_investigation1_done");
    // let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    // if (180-numRouletteA_1B1Y >= 100) {
    //     if ($("input[name=A4_investigation1_input4]:checked").val() == 1) {
            // Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">恭喜你換得一份麥當勞套餐<br>接下來換成【轉盤D】<br>試試看是否也能換到一份套餐?</span>'}).then((result) => {
            //     $("#A4_investigation1_confirm4").addClass("d-none");
            //     $("input[name=A4_investigation1_input4]").prop("disabled", true);
            //     $("#A4_investigation1_done").css({"opacity": "1"});
            //     $("#A4_investigation1_next").removeClass("d-none");
            //     $("#A4_investigation1_link img").css({"opacity": "1"});
            // })
    //     } else {
    //         Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">你得到的點數已經足夠換得一份麥當勞套餐嘍~</span>'})
    //     }
    // } else {
    //     if ($("input[name=A4_investigation1_input4]:checked").val() == 1) {
    //         Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">你得到的點數還不足100點，還不能換得一份麥當勞套餐喔</span>'})
    //     } else {
            // Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">可惜沒辦法順利換到麥當勞套餐<br>接下來換成【轉盤D】<br>試試看是否能換到一份套餐?</span>'}).then((result) => {
            //     $("#A4_investigation1_confirm4").addClass("d-none");
            //     $("input[name=A4_investigation1_input4]").prop("disabled", true);
            //     $("#A4_investigation1_done").css({"opacity": "1"});
            //     $("#A4_investigation1_next").removeClass("d-none");
            //     $("#A4_investigation1_link img").css({"opacity": "1"});
            // })
    //     }
    // }
}

function A4_operation3() {
    currentStage = "A4_operation3";
    loadApplet("ggbApplet04d", ggb_JDM_IEEA_01_A4d);
}

function A4_operation3_link() {
    var api = applet.getAppletObject();
    $("#A4_operation3_input1_ans1").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation3_input1_ans1").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation3_input1_ans1").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation3_input1_ans1").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation3_input1_ans1").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation3_input1_ans1").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation3_input1_ans2").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation3_input1_ans2").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation3_input1_ans2").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation3_input1_ans2").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation3_input1_ans2").next().find("a").eq(4).html(katex.renderToString("4", { throwOnError: false }));
    $("#A4_operation3_input1_ans2").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation3_input1_ans2").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation3_input1_ans2").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation3_input1_ans2").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation3_input1_ans2").next().find("a").eq(4).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(4);
    });
    $("#A4_operation3_input1_ans3").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A4_operation3_input1_ans3").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
    $("#A4_operation3_input1_ans3").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
    $("#A4_operation3_input1_ans3").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
    $("#A4_operation3_input1_ans3").next().find("a").eq(4).html(katex.renderToString("4", { throwOnError: false }));
    $("#A4_operation3_input1_ans3").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_operation3_input1_ans3").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_operation3_input1_ans3").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_operation3_input1_ans3").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_operation3_input1_ans3").next().find("a").eq(4).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(4);
    });
    $("#A4_operation3_input1_ans4").next().find("a").eq(0).html(katex.renderToString("8", { throwOnError: false }));
    $("#A4_operation3_input1_ans4").next().find("a").eq(1).html(katex.renderToString("12", { throwOnError: false }));
    $("#A4_operation3_input1_ans4").next().find("a").eq(2).html(katex.renderToString("18", { throwOnError: false }));
    $("#A4_operation3_input1_ans4").next().find("a").eq(3).html(katex.renderToString("24", { throwOnError: false }));
    $("#A4_operation3_input1_ans4").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(8);
    });
    $("#A4_operation3_input1_ans4").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(12);
    });
    $("#A4_operation3_input1_ans4").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(18);
    });
    $("#A4_operation3_input1_ans4").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(24);
    });
    $("#A4_operation3_input1_ans5").next().find("a").eq(0).html(katex.renderToString("8", { throwOnError: false }));
    $("#A4_operation3_input1_ans5").next().find("a").eq(1).html(katex.renderToString("12", { throwOnError: false }));
    $("#A4_operation3_input1_ans5").next().find("a").eq(2).html(katex.renderToString("18", { throwOnError: false }));
    $("#A4_operation3_input1_ans5").next().find("a").eq(3).html(katex.renderToString("24", { throwOnError: false }));
    $("#A4_operation3_input1_ans5").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(8);
    });
    $("#A4_operation3_input1_ans5").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(12);
    });
    $("#A4_operation3_input1_ans5").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(18);
    });
    $("#A4_operation3_input1_ans5").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(24);
    });
}

function A4_operation3_check1() {
    let A4_operation3_input1_ans1 = $("#A4_operation3_input1_ans1").val();
    if (A4_operation3_input1_ans1 != "") {
        if (A4_operation3_input1_ans1 == 0) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">0層表示只會有1種結果<br>但從左方的樹狀圖看來不只1種結果喔<br>請再觀察看看!</span>'})
        } else if (A4_operation3_input1_ans1 == 1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">左方的樹狀圖看起來不只1層喔<br>請再觀察看看!</span>'})
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation3_confirm").hide();
                $("#A4_operation3_input1_ans2").parent().parent().removeClass("d-none");
                $("#A4_operation3_input1_ans1").prop("disabled", true);
                $("#A4_operation3_confirm2").removeClass("d-none");
    
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_operation3_check2() {
    let A4_operation3_input1_ans2 = $("#A4_operation3_input1_ans2").val();
    let A4_operation3_input1_ans3 = $("#A4_operation3_input1_ans3").val();
    if (A4_operation3_input1_ans2 !="" && A4_operation3_input1_ans3 != "") {
        if (A4_operation3_input1_ans2 == 4 && A4_operation3_input1_ans3 == 2) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation3_confirm2").addClass("d-none");
                $("#A4_operation3_input1_ans4").parent().parent().removeClass("d-none");
                $("#A4_operation3_input1_ans2").prop("disabled", true);
                $("#A4_operation3_input1_ans3").prop("disabled", true);
                $("#A4_operation3_confirm3").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察第一次結果中<br>藍色和黃色出現的次數</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_operation3_check3() {
    let A4_operation3_input1_ans4 = $("#A4_operation3_input1_ans4").val();
    let A4_operation3_input1_ans5 = $("#A4_operation3_input1_ans5").val();
    if (A4_operation3_input1_ans4 !="" && A4_operation3_input1_ans5 != "") {
        if (A4_operation3_input1_ans4 == 24 && A4_operation3_input1_ans5 == 12) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_operation3_confirm3").addClass("d-none");
                $("#A4_operation3_input1_ans4").prop("disabled", true);
                $("#A4_operation3_input1_ans5").prop("disabled", true);
                // $("#A4_operation3_input1_ans4").parent().removeClass("dropdown");
                // $("#A4_operation3_input1_ans4").hide();
                // $("#A4_operation3_input1_ans4").parent().html("<span style='color: #0000ff; text-weight: bolder;'>18</span>");
                // $("#A4_operation3_input1_ans5").parent().removeClass("dropdown");
                // $("#A4_operation3_input1_ans5").hide();
                // $("#A4_operation3_input1_ans5").parent().html("<span style='color: #0000ff; text-weight: bolder;'>18</span>");
                $("#A4_operation3_done").css({"opacity": "1"});
                $("#A4_operation3_next").removeClass("d-none");
                $("#A4_operation3_link img").css({"opacity": "1"});
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察第二次結果中<br>藍色和黃色出現的次數</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1的問題</span>'})
    }
}

function A4_observation3() {
    currentStage = "A4_observation3";
    loadApplet("ggbApplet04d", ggb_JDM_IEEA_01_A4d);
}

function A4_observation3_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(picShowOption2Y,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption2B,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption1B1Y,1,true)");
    api.evalCommand("SetFixed(picShowOption2Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2B, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2YClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption2BClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1YClicked, true, true)");
    $("#A4_observation3_input1_ans1").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans1").next().find("a").eq(1).html(katex.renderToString("\\dfrac{8}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans1").next().find("a").eq(2).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans1").next().find("a").eq(3).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans1").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_observation3_input1_ans1").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation3_input1_ans1").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation3_input1_ans1").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_observation3_input1_ans2").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans2").next().find("a").eq(1).html(katex.renderToString("\\dfrac{8}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans2").next().find("a").eq(2).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans2").next().find("a").eq(3).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans2").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_observation3_input1_ans2").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation3_input1_ans2").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation3_input1_ans2").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
    $("#A4_observation3_input1_ans3").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans3").next().find("a").eq(1).html(katex.renderToString("\\dfrac{8}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans3").next().find("a").eq(2).html(katex.renderToString("\\dfrac{12}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans3").next().find("a").eq(3).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
    $("#A4_observation3_input1_ans3").next().find("a").eq(0).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(0);
    });
    $("#A4_observation3_input1_ans3").next().find("a").eq(1).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(1);
    });
    $("#A4_observation3_input1_ans3").next().find("a").eq(2).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(2);
    });
    $("#A4_observation3_input1_ans3").next().find("a").eq(3).click(function() {
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val(3);
    });
}

function A4_observation3_check1() {
    let A4_observation3_input1_ans1 = $("#A4_observation3_input1_ans1").val();
    let A4_observation3_input1_ans2 = $("#A4_observation3_input1_ans2").val();
    let A4_observation3_input1_ans3 = $("#A4_observation3_input1_ans3").val();
    if (A4_observation3_input1_ans1 != "" && A4_observation3_input1_ans2 != "" && A4_observation3_input1_ans3 != "") {
        if (A4_observation3_input1_ans1 == 0 && A4_observation3_input1_ans2 == 3 && A4_observation3_input1_ans3 == 3) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對嘍</span>'}).then((result) => {
                $("#A4_observation3_confirm").hide();
                $("#A4_observation3_confirm2").removeClass("d-none");
                $("#A4_observation3").find("tr").eq(2).removeClass("d-none");
                $("#A4_observation3_input1_ans1").prop("disabled", true);
                $("#A4_observation3_input1_ans2").prop("disabled", true);
                $("#A4_observation3_input1_ans3").prop("disabled", true);
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請再仔細觀察樹狀圖中各情況出現的次數並算出其機率</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答觀察記錄3的問題</span>'})
    }
}

function A4_observation3_check2() {
    let A4_observation3_input1_ans4 = $("#A4_observation3_input1_ans4").prop("checked");
    let A4_observation3_input1_ans5 = $("#A4_observation3_input1_ans5").prop("checked");
    let A4_observation3_input1_ans6 = $("#A4_observation3_input1_ans6").prop("checked");
    if (A4_observation3_input1_ans4 || A4_observation3_input1_ans5 || A4_observation3_input1_ans6) {
        if (!A4_observation3_input1_ans4 && A4_observation3_input1_ans5 && A4_observation3_input1_ans6) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔!</span>'}).then((result) => {
                $("#A4_observation3_confirm2").addClass("d-none");
                $("#A4_observation3_done").css({"opacity": "1"});
                $("#A4_observation3_next").removeClass("d-none");
                $("#A4_observation3_link img").css({"opacity": "1"});
                $("#A4_observation3_input1_ans4").prop("disabled", true);
                $("#A4_observation3_input1_ans5").prop("disabled", true);
                $("#A4_observation3_input1_ans6").prop("disabled", true);
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請對照各情況出現的機率並勾選最高者</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">請先回答觀察記錄3的問題</span>'})
    }
}

function A4_operation4() {
    currentStage = "A4_operation4";
    loadApplet("ggbApplet04e", ggb_JDM_IEEA_01_A4e);
}

function A4_operation4_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    if (numSpinedRoundRouletteA == 180) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成實驗操作4</span>'}).then((result) => {
            $("#A4_operation4_done").css({"opacity": "1"});
            $("#A4_operation4_next").removeClass("d-none");
            $("#A4_operation4_link img").css({"opacity": "1"});
        })
    } 
}

function A4_operation4_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_operation4_done");
}

function A4_observation4() {
    currentStage = "A4_observation4";
    loadApplet("ggbApplet04e", ggb_JDM_IEEA_01_A4e);
}

function A4_observation4_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(pic2, 1, false)");
    api.evalCommand("SetVisibleInView(text5, 1, false)");
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    let numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    let ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    let ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    let ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];
    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });
    function createOption() {
        $("#A4_observation4_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation4_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation4_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A4_observation4_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A4_observation4_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A4_observation4_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A4_observation4_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A4_observation4_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A4_observation4_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation4_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation4_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation4_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation4_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation4_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation4_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A4_observation4_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A4_observation4_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A4_observation4_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation4_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation4_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A4_observation4_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation4_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation4_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A4_observation4_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A4_observation4_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A4_observation4_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A4_observation4_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A4_observation4_input1_usrans1 = $("#A4_observation4_input1_ans1").val();
    var A4_observation4_input1_usrans2 = $("#A4_observation4_input1_ans2").val();
    var A4_observation4_input1_usrans3 = $("#A4_observation4_input1_ans3").val();
    var A4_observation4_input1_usrans4 = $("#A4_observation4_input1_ans4").val();
    var A4_observation4_input1_usrans5 = $("#A4_observation4_input1_ans5").val();
    var A4_observation4_input1_usrans6 = $("#A4_observation4_input1_ans6").val();
    var input1_usrans1_check = (A4_observation4_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A4_observation4_input1_usrans2 == numRouletteA_2B);
    var input1_usrans3_check = (A4_observation4_input1_usrans3 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A4_observation4_input1_usrans4 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A4_observation4_input1_usrans5 == ratioRouletteA_2B);
    var input1_usrans6_check = (A4_observation4_input1_usrans6 == ratioRouletteA_1B1Y);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 4</span>'}).then((result) => {
            $("#A4_observation4_confirm").hide();
            $("#A4_observation4_done").css({"opacity": "1"});
            $("#A4_observation4_next").removeClass("d-none");
            $("#A4_observation4_link img").css({"opacity": "1"});
            $("#A4_observation4_input1_ans1").prop("disabled", true);
            $("#A4_observation4_input1_ans2").prop("disabled", true);
            $("#A4_observation4_input1_ans3").prop("disabled", true);
            $("#A4_observation4_input1_ans4").prop("disabled", true);
            $("#A4_observation4_input1_ans5").prop("disabled", true);
            $("#A4_observation4_input1_ans6").prop("disabled", true);
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A4_investigation2() {
    currentStage = "A4_investigation2";
    loadApplet("ggbApplet04e", ggb_JDM_IEEA_01_A4e);
}

var numRouletteD_2B = 0, numRouletteD_2Y = 0, numRouletteD_1B1Y = 0, ratioRouletteD_2B = 0, ratioRouletteD_2Y = 0, ratioRouletteD_1B1Y = 0; 
function A4_investigation2_link() {
    var api = applet.getAppletObject();
    numRouletteD_2B = api.getValue("numRouletteA_{2B}");
    numRouletteD_2Y = api.getValue("numRouletteA_{2Y}");
    numRouletteD_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteD = api.getValue("numSpinedRoundRouletteA");
    ratioRouletteD_2B = numRound(numRouletteD_2B/numSpinedRoundRouletteD, 2);
    ratioRouletteD_2Y = numRound(numRouletteD_2Y/numSpinedRoundRouletteD, 2);
    ratioRouletteD_1B1Y = numRound(numRouletteD_1B1Y/numSpinedRoundRouletteD, 2);
    $("#A4_investigation2_usrAns1").html(numRouletteD_2Y);
    $("#A4_investigation2_usrAns2").html(numRouletteD_2B);
    $("#A4_investigation2_usrAns3").html(numRouletteD_1B1Y);
    $("#A4_investigation2_usrAns4").html(ratioRouletteD_2Y);
    $("#A4_investigation2_usrAns5").html(ratioRouletteD_2B);
    $("#A4_investigation2_usrAns6").html(ratioRouletteD_1B1Y);
}

var A4_investigation2_input1_usrAns = 0;
function A4_investigation2_confirm() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation2_input1]:checked").val() != undefined) {
        A4_investigation2_input1_usrAns = $("input[name=A4_investigation2_input1]:checked").val();
        if ($("input[name=A4_investigation2_input1]:checked").val() == 2 || $("input[name=A4_investigation2_input1]:checked").val() == 3) {
            if ($("input[name=A4_investigation2_input1]:checked").val() == 2) {
                $("#A4_investigation2_question2").find("span").html("2次藍色");
            } else {
                $("#A4_investigation2_question2").find("span").html("1藍1黃");
            }
            Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">根據模擬結果回答接下來的問題</span>'}).then((result) => {
                $("#A4_investigation2_confirm").hide();
                $("#A4_investigation2_question2").removeClass("d-none");
                $("#A4_investigation2_question2").next().removeClass("d-none");
                $("#A4_investigation2_input2_option1").next().html(numRouletteA_2Y);
                $("#A4_investigation2_input2_option2").next().html(numRouletteA_2B);
                $("#A4_investigation2_input2_option3").next().html(numRouletteA_1B1Y);
                $("#A4_investigation2_confirm2").removeClass("d-none");
                $("input[name=A4_investigation2_input1]").prop("disabled", true);
            })
        } else {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師會選擇機率最高的情況下注喔!</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation2_confirm2() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation2_input2]:checked").val() != undefined) {
        if ($("input[name=A4_investigation2_input2]:checked").val() != A4_investigation2_input1_usrAns) {
            if (A4_investigation2_input1_usrAns==3) {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師獲勝的回合數就是出現1藍1黃的回合數</span>'}) 
            } else {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師獲勝的回合數就是出現2次藍色的回合數</span>'}) 
            }
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對了</span>'}).then((result) => {
                $("#A4_investigation2_confirm2").addClass("d-none");
                $("#A4_investigation2_question3").removeClass("d-none");
                $("#A4_investigation2_question3").next().removeClass("d-none");
                $("#A4_investigation2_input3_option1").next().html(180-numRouletteA_2Y);
                $("#A4_investigation2_input3_option2").next().html(180-numRouletteA_2B);
                $("#A4_investigation2_input3_option3").next().html(180-numRouletteA_1B1Y);
                if (A4_investigation2_input1_usrAns==3) {
                    $("#A4_investigation2_input3_option4").next().html(numRouletteA_1B1Y);
                } else {
                    $("#A4_investigation2_input3_option4").next().html(numRouletteA_2B);
                }
                $("#A4_investigation2_confirm3").removeClass("d-none");
                $("input[name=A4_investigation2_input2]").prop("disabled", true);
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation2_confirm3() {
    var api = applet.getAppletObject();
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");

    if ($("input[name=A4_investigation2_input3]:checked").val() != undefined) {
        if ($("input[name=A4_investigation2_input3]:checked").val() == 4) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師獲勝的回合數不等於你獲得的點數喔!<br>請再想想看</span>'})
        } else if ($("input[name=A4_investigation2_input3]:checked").val() != A4_investigation2_input1_usrAns) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">老師沒押中的就是你獲得的點數</span>'})
        } else {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對了</span>'}).then((result) => {
                $("#A4_investigation2_confirm3").addClass("d-none");
                $("#A4_investigation2_question4").removeClass("d-none");
                $("#A4_investigation2_question4").next().removeClass("d-none");
                $("#A4_investigation2_confirm4").removeClass("d-none");
                $("input[name=A4_investigation2_input3]").prop("disabled", true);
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A4_investigation2_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    if (numSpinedRoundRouletteA == 180) {
        if (A4_investigation2_input1_usrAns==2) {
            if (api.getValue("numRouletteA_{2B}") <= 80) {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">恭喜你換得一份麥當勞套餐</span>'}).then((result) => {
                    // $("input[name=A4_investigation2_input4]").prop("disabled", true);
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">可惜沒辦法順利換到麥當勞套餐</span>'}).then((result) => {
                    // $("input[name=A4_investigation2_input4]").prop("disabled", true);
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            }
        } else {
            if (api.getValue("numRouletteA_{1B1Y}") <= 80) {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">恭喜你換得一份麥當勞套餐</span>'}).then((result) => {
                    $("input[name=A4_investigation2_input4]").prop("disabled", true);
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">可惜沒辦法順利換到麥當勞套餐</span>'}).then((result) => {
                    $("input[name=A4_investigation2_input4]").prop("disabled", true);
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            }
        }
    } 
}

function A4_investigation2_confirm4() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("numSpinedRoundRouletteA");
    api.evalCommand("RunClickScript(pic2)");
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">那我們就來挑戰一次看看吧!<br>點擊 自動轉動 按鈕</span>'})
    $("input[name=A4_investigation2_input4]").prop("disabled", true);
    $("#A4_investigation2_confirm4").addClass("d-none");
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_investigation2_done");
}

function A4_investigation3() {
    currentStage = "A4_investigation3";
    loadApplet("ggbApplet04f", ggb_JDM_IEEA_01_A4f);
}

function A4_investigation3_link() {
    $("#A4_investigation3_usrAns1").html(numRouletteA_2Y);
    $("#A4_investigation3_usrAns2").html(numRouletteA_2B);
    $("#A4_investigation3_usrAns3").html(numRouletteA_1B1Y);
    $("#A4_investigation3_usrAns4").html(ratioRouletteA_2Y);
    $("#A4_investigation3_usrAns5").html(ratioRouletteA_2B);
    $("#A4_investigation3_usrAns6").html(ratioRouletteA_1B1Y);
    $("#A4_investigation3_usrAns7").html(numRouletteD_2Y);
    $("#A4_investigation3_usrAns8").html(numRouletteD_2B);
    $("#A4_investigation3_usrAns9").html(numRouletteD_1B1Y);
    $("#A4_investigation3_usrAns10").html(ratioRouletteD_2Y);
    $("#A4_investigation3_usrAns11").html(ratioRouletteD_2B);
    $("#A4_investigation3_usrAns12").html(ratioRouletteD_1B1Y);
    
    $("#A4_investigation3_input4_option1").click(() => {
        loadApplet("ggbApplet04g", ggb_JDM_IEEA_01_A4g);
        $("#A4_investigation3_confirm4").removeClass("d-none");
    });
    $("#A4_investigation3_input4_option2").click(() => {
        loadApplet("ggbApplet04h", ggb_JDM_IEEA_01_A4h);
        $("#A4_investigation3_confirm4").removeClass("d-none");
    });
}

function A4_investigation3_confirm() {
    if ($("input[name=A4_investigation3_input1]:checked").val() == 1) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">待會就實際試試看是否拿【轉盤A】比較有機會贏老師</span>'}).then((result) => {
            $("#A4_investigation3_confirm").hide();
            $("#A4_investigation3_question3").removeClass("d-none");
            $("#A4_investigation3_question3").next().removeClass("d-none");
            $("#A4_investigation3_confirm3").removeClass("d-none");
            $("input[name=A4_investigation3_input1]").prop("disabled", true);
        })
    } else if ($("input[name=A4_investigation3_input1]:checked").val() == 2) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">待會就實際試試看是否拿【轉盤D】比較有機會贏老師</span>'}).then((result) => {
            $("#A4_investigation3_confirm").hide();
            $("#A4_investigation3_question3").removeClass("d-none");
            $("#A4_investigation3_question3").next().removeClass("d-none");
            $("#A4_investigation3_confirm3").removeClass("d-none");
            $("input[name=A4_investigation3_input1]").prop("disabled", true);
        })
    } else {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">待會就實際試試看兩個轉盤的機會是否相同</span>'}).then((result) => {
            $("#A4_investigation3_confirm").hide();
            $("#A4_investigation3_question3").removeClass("d-none");
            $("#A4_investigation3_question3").next().removeClass("d-none");
            $("#A4_investigation3_confirm3").removeClass("d-none");
            $("input[name=A4_investigation3_input1]").prop("disabled", true);
        })
    }   
}

function A4_investigation3_confirm3() {
    if ($("input[name=A4_investigation3_input3]:checked").val() == 1) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">機率就是不確定性，沒辦法百分之百準確預測喔</span>'})
    } else {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚! 叮咚! 答對了</span>'}).then((result) => {
            $("#A4_investigation3_confirm3").addClass("d-none");
            $("#A4_investigation3_question4").removeClass("d-none");
            $("#A4_investigation3_question4").next().removeClass("d-none");
            $("#A4_investigation3_confirm4").removeClass("d-none");
            $("input[name=A4_investigation3_input3]").prop("disabled", true);
        })
    }
}

function A4_investigation3_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    let numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    let numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    let numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    if (numSpinedRoundRouletteA == 180) {
        api.evalCommand("SetVisibleInView(pic2, 1, false)");
        api.evalCommand("SetVisibleInView(text5, 1, false)");
        if (usrSelection == 1) {
            if (numRouletteA_1B1Y > 80) {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中<span style="background-color: #acd998;"> '+numRouletteA_1B1Y+' 回合</span><br>你得到 '+(180-numRouletteA_1B1Y)+' 點<br>點數不足100點，沒辦法換麥當勞</span>'}).then((result) => {
                    $("#A4_investigation3_again").removeClass("d-none");
                    $("#A4_investigation3_end").removeClass("d-none");
                })
            } else {
                Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中'+numRouletteA_1B1Y+'回合<br>你得到 '+(180-numRouletteA_1B1Y)+' 點<br>恭喜你! 點數足夠換到一份麥當勞套餐</span>'}).then((result) => {
                    $("#A4_investigation3_again").removeClass("d-none");
                    $("#A4_investigation3_end").removeClass("d-none");
                })
            }
        } else {
            if (teacherSelection == 0) {
                if (numRouletteA_2B > 80) {
                    Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中<span style="background-color: #a4c8f2;"> '+numRouletteA_2B+' 回合</span><br>你得到'+(180-numRouletteA_2B)+'點<br>點數不足100點，沒辦法換麥當勞</span>'}).then((result) => {
                        $("#A4_investigation3_again").removeClass("d-none");
                        $("#A4_investigation3_end").removeClass("d-none");
                    })
                } else {
                    Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中<span style="background-color: #acd998;"> '+numRouletteA_2B+' 回合</span><br>你得到 '+(180-numRouletteA_2B)+' 點<br>恭喜你! 點數足夠換到一份麥當勞套餐</span>'}).then((result) => {
                        $("#A4_investigation3_again").removeClass("d-none");
                        $("#A4_investigation3_end").removeClass("d-none");
                    })
                }
            } else {
                if (numRouletteA_1B1Y > 80) {
                    Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中<span style="background-color: #acd998;"> '+numRouletteA_1B1Y+' 回合</span><br>你得到 '+(180-numRouletteA_1B1Y)+' 點<br>點數不足100點，沒辦法換麥當勞</span>'}).then((result) => {
                        $("#A4_investigation3_again").removeClass("d-none");
                        $("#A4_investigation3_end").removeClass("d-none");
                    })
                } else {
                    Swal.fire({icon: 'info', showConfirmButton: true, html: '<table class="table table-bordered text-center bg-light" style="font-size:24px; margin: 0 auto; border: 1px solid #000; table-layout: fixed;"><tr><td>種類數</td><td><span style="background-color: #ffe28b;">2次黃色</span></td><td><span style="background-color: #a4c8f2;">2次藍色</span></td><td><span style="background-color: #acd998;">1藍1黃</span></td></tr><tr><td>出現次數</td><td>'+numRouletteA_2Y+'</td><td>'+numRouletteA_2B+'</td><td>'+numRouletteA_1B1Y+'</td></tr></table><span style="line-height: 2; font-size: 24px;">老師押中'+numRouletteA_1B1Y+'回合<br>你得到 '+(180-numRouletteA_1B1Y)+' 點<br>恭喜你! 點數足夠換到一份麥當勞套餐</span>'}).then((result) => {
                        $("#A4_investigation3_again").removeClass("d-none");
                        $("#A4_investigation3_end").removeClass("d-none");
                    })
                }
            }
        }
    }
}

var teacherSelection = 0, usrSelection = 0;
function A4_investigation3_confirm4() {
    usrSelection = $("input[name=A4_investigation3_input4]:checked").val();
    $("input[name=A4_investigation3_input4]").prop("disabled", true);
    $("#A4_investigation3_confirm4").addClass("d-none");
    if (usrSelection == 1) {
        $("#A4_investigation3_input4_option1_response").removeClass("d-none");
        $("#A4_investigation3_input4_option2_response1").addClass("d-none");
        $("#A4_investigation3_input4_option2_response2").addClass("d-none");
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">點擊 自動轉動 按鈕開始挑戰看看</span>'}).then((result) => {
            var api = applet.getAppletObject();
            api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_investigation3_done");
            api.evalCommand("SetVisibleInView(pic1, 1, true)");
            api.evalCommand("SetVisibleInView(text4, 1, true)");
        })
    } else {
        teacherSelection = Math.floor(Math.random() * 2);
        if (teacherSelection == 0) {
            $("#A4_investigation3_input4_option2_response1").removeClass("d-none");
            $("#A4_investigation3_input4_option2_response2").addClass("d-none");
            $("#A4_investigation3_input4_option1_response").addClass("d-none");
        } else {
            $("#A4_investigation3_input4_option2_response2").removeClass("d-none");
            $("#A4_investigation3_input4_option2_response1").addClass("d-none");
            $("#A4_investigation3_input4_option1_response").addClass("d-none");
        }
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">點擊 自動轉動 按鈕開始挑戰看看</span>'}).then((result) => {
            var api = applet.getAppletObject();
            api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A4_investigation3_done");
            api.evalCommand("SetVisibleInView(pic1, 1, true)");
            api.evalCommand("SetVisibleInView(text4, 1, true)");
        })
    }
}

function A4_investigation3_again() {
    $("#A4_investigation3_again").addClass("d-none");
    $("#A4_investigation3_end").addClass("d-none");
    $("#A4_investigation3_input4_option1_response").addClass("d-none");
    $("#A4_investigation3_input4_option2_response1").addClass("d-none");
    $("#A4_investigation3_input4_option2_response2").addClass("d-none");
    $("input[name=A4_investigation3_input4]").prop("disabled", false);
    $("input[name=A4_investigation3_input4]").prop("checked", false);
    usrSelection = 0;
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(pic2, 1, false)");
    api.evalCommand("SetVisibleInView(text5, 1, false)");
    api.evalCommand("RunClickScript(pic2)");
    api.evalCommand("SetVisibleInView(pic1, 1, false)");
    api.evalCommand("SetVisibleInView(text4, 1, false)");
}

function A4_investigation3_end() {
    $("#A4_investigation3_again").addClass("d-none");
    $("#A4_investigation3_end").addClass("d-none");
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">活動結束嘍!<br>這個實驗活動有讓你更瞭解機率的不確定性嗎?<br>跟老師和同學一塊討論看看吧!</span>'})
}