function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("活動3：發展樹狀圖");
    params.id = "ggbApplet07";
    params.ggbBase64 = ggb_JDM_IEEA_01_A3a;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1a";
    showWorksheetsContents("A3_operation1a_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A3_operation1a() {
    currentStage = "A3_operation1a";
    loadApplet("ggbApplet03a", ggb_JDM_IEEA_01_A3a);
}

function A3_operation1a_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetFixed(text6, true, false)");
    api.evalCommand("SetFixed(picBtnOption2B, true, false)");
    api.evalCommand("SetFixed(picBtnOption2Y, true, false)");
    api.evalCommand("SetFixed(picBtnOption1B1Y, true, false)");
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">遊戲規則改變了<br>請先看規則說明並回答問題.</span>'})
}

var A3_investigation1_usrAns = 0;

function A3_operation1a_confirm() {
    if ($("input[name=A3_operation1a_input1]:checked").val() != undefined) {
        A3_investigation1_usrAns = $("input[name=A3_operation1a_input1]:checked").val();
        Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
            $("#A3_operation1a_confirm").hide();
            $("#A3_operation1a_done").css({"opacity": "1"});
            $("#A3_operation1a_next").removeClass("d-none");
            $("#A3_operation1a_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答 實驗操作1A 的問題</span>'})
    }
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03b", ggb_JDM_IEEA_01_A3b);
}

function A3_operation1_done(objName) {
    var api = applet.getAppletObject();
    if (api.getValue(objName) == 10) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作1B!</span>'}).then((result) => {
            $("#A3_operation1_done").css({"opacity": "1"});
            $("#A3_operation1_next").removeClass("d-none");
            $("#A3_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A3_operation1_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A3_operation1_done");
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">讓我們先轉動10回合看看結果會如何吧!</span>'})
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03b", ggb_JDM_IEEA_01_A3b);
}

function A3_observation1_link() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation1_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation1_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation1_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation1_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation1_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation1_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation1_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation1_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        
        $("#A3_observation1_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation1_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation1_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation1_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation1_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation1_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation1_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation1_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation1_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation1_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation1_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation1_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation1_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation1_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation1_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation1_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation1_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation1_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A3_observation1_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation1_input1_usrans1 = $("#A3_observation1_input1_ans1").val();
    var A3_observation1_input1_usrans2 = $("#A3_observation1_input1_ans2").val();
    var A3_observation1_input1_usrans3 = $("#A3_observation1_input1_ans3").val();
    var A3_observation1_input1_usrans4 = $("#A3_observation1_input1_ans4").val();
    var A3_observation1_input1_usrans5 = $("#A3_observation1_input1_ans5").val();
    var A3_observation1_input1_usrans6 = $("#A3_observation1_input1_ans6").val();
    var input1_usrans1_check = (A3_observation1_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation1_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation1_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation1_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation1_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation1_input1_usrans6 == ratioRouletteA_1B1Y);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 1</span>'}).then((result) => {
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({"opacity": "1"});
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03b", ggb_JDM_IEEA_01_A3b);
}

function A3_investigation1_link() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    $("#A3_investigation1_ans1").html(numRouletteA_2Y);
    $("#A3_investigation1_ans2").html(ratioRouletteA_2Y);
    $("#A3_investigation1_ans3").html(numRouletteA_2B);
    $("#A3_investigation1_ans4").html(ratioRouletteA_2B);
    $("#A3_investigation1_ans5").html(numRouletteA_1B1Y);
    $("#A3_investigation1_ans6").html(ratioRouletteA_1B1Y);
    switch (A3_investigation1_usrAns) {
        case '1':
            $("#A3_investigation1_usrAns").html(katex.renderToString("\\dfrac{1}{2}", { throwOnError: false }));
            break;
        case '2':
            $("#A3_investigation1_usrAns").html(katex.renderToString("\\dfrac{1}{3}", { throwOnError: false }));
            break;
        case '3':
            $("#A3_investigation1_usrAns").html(katex.renderToString("\\dfrac{1}{4}", { throwOnError: false }));
            break;
        case '4':
            $("#A3_investigation1_usrAns").html("不確定");
            break;
        default:
            break;
    } 
}

function A3_investigation1_confirm() {
    if ($("input[name=A3_investigation1_input1]:checked").val() != undefined) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">讓我們多轉幾回合, 驗證看看你的想法吧!</span>'}).then((result) => {
            $("#A3_investigation1_confirm").hide();
            $("#A3_investigation1_done").css({"opacity": "1"});
            $("#A3_investigation1_next").removeClass("d-none");
            $("#A3_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03c", ggb_JDM_IEEA_01_A3c);
}

function A3_operation2_done(objName) {
    var api = applet.getAppletObject();
    let numSpinedRoundRouletteA = api.getValue(objName);
    let numAutoSpinRouletteA = api.getValue("numAutoSpinRouletteA");
    if (numAutoSpinRouletteA > 0 ){
        if (numAutoSpinRouletteA > 500 && numSpinedRoundRouletteA == numAutoSpinRouletteA) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數超過500回合了,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteA < 500 && numSpinedRoundRouletteA == numAutoSpinRouletteA) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數不滿500回合喔,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteA == 500 && numSpinedRoundRouletteA == numAutoSpinRouletteA){
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作2</span>'}).then((result) => {
                $("#A3_operation2_done").css({"opacity": "1"});
                $("#A3_operation2_next").removeClass("d-none");
                $("#A3_operation2_link img").css({"opacity": "1"});
            })
        } else {}
    } else {}
}

function A3_operation2_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetFixed(picAddHundred, true, false)");
    api.evalCommand("SetFixed(picMinusHundred, true, false)");
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A3_operation2_done");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 5000, html: '<span style="line-height: 2; font-size: 24px;">請先回答轉動500回合後, 你預測的結果.<br>按下 <img src="./images/content/JDM_IEEA_01/btnConfirm.png" alt="確認送出"> 後再實際實驗看看.</span>'})
}

function isNumber(inputs) {return parseFloat(inputs).toString() != "NaN";} 

function A3_operation2_confirm() {
    let A3_operation2_usrans1B1Y = $("#A3_operation2_usrans1B1Y").val();
    let A3_operation2_usrans2B = $("#A3_operation2_usrans2B").val();
    let A3_operation2_usrans2Y = $("#A3_operation2_usrans2Y").val();

    let A3_operation2_check1 = (A3_operation2_usrans1B1Y!="");
    let A3_operation2_check2 = (A3_operation2_usrans2B!="");
    let A3_operation2_check3 = (A3_operation2_usrans2Y!="");

    let A3_operation2_check4 = isNumber(A3_operation2_usrans1B1Y);
    let A3_operation2_check5 = isNumber(A3_operation2_usrans2B);
    let A3_operation2_check6 = isNumber(A3_operation2_usrans2Y);

    let A3_operation2_check7 = Number.isInteger(Number(A3_operation2_usrans1B1Y)) && Number(A3_operation2_usrans1B1Y) >= 0;
    let A3_operation2_check8 = Number.isInteger(Number(A3_operation2_usrans2B)) && Number(A3_operation2_usrans2B) >= 0;
    let A3_operation2_check9 = Number.isInteger(Number(A3_operation2_usrans2Y)) && Number(A3_operation2_usrans2Y) >= 0;

    let A3_operation2_check10 = ((Number(A3_operation2_usrans1B1Y)+Number(A3_operation2_usrans2B)+Number(A3_operation2_usrans2Y))==500);

    if (A3_operation2_check1 && A3_operation2_check2 && A3_operation2_check3) {
        if (A3_operation2_check4 && A3_operation2_check5 && A3_operation2_check6) {
            if (A3_operation2_check7 && A3_operation2_check8 && A3_operation2_check9) {
                if (A3_operation2_check10) {
                    var api = applet.getAppletObject();
                    $("#A3_operation2_confirm").hide();
                    $("#A3_operation2_usrans1B1Y").prop("disabled", true);
                    $("#A3_operation2_usrans2B").prop("disabled", true);
                    $("#A3_operation2_usrans2Y").prop("disabled", true);
                    $("#A3_operation2_part2").removeClass("d-none");
                    api.evalCommand("SetFixed(picAddHundred, true, true)");
                    api.evalCommand("SetFixed(picMinusHundred, true, true)");
                    api.evalCommand("SetVisibleInView(q1, 1, false)");
                } else {
                    Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '各情況出現的回合數加起來的總和應該等於 500 喔!'})
                }
            } else {
                Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">次數應該都是正整數喔</span>'})
            }
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你輸入的資料不是數字喔!</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作2的問題</span>'})
    }
}

function A3_observation2() {
    currentStage = "A3_observation2";
    loadApplet("ggbApplet03c", ggb_JDM_IEEA_01_A3c);
}

function A3_observation2_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(pic2, 1, false)");
    api.evalCommand("SetVisibleInView(text5, 1, false)");
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation2_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation2_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation2_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation2_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation2_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation2_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation2_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation2_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        
        $("#A3_observation2_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation2_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation2_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation2_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation2_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation2_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation2_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation2_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation2_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation2_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation2_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation2_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation2_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation2_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation2_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation2_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation2_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation2_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();

}

function A3_observation2_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation2_input1_usrans1 = $("#A3_observation2_input1_ans1").val();
    var A3_observation2_input1_usrans2 = $("#A3_observation2_input1_ans2").val();
    var A3_observation2_input1_usrans3 = $("#A3_observation2_input1_ans3").val();
    var A3_observation2_input1_usrans4 = $("#A3_observation2_input1_ans4").val();
    var A3_observation2_input1_usrans5 = $("#A3_observation2_input1_ans5").val();
    var A3_observation2_input1_usrans6 = $("#A3_observation2_input1_ans6").val();
    var input1_usrans1_check = (A3_observation2_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation2_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation2_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation2_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation2_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation2_input1_usrans6 == ratioRouletteA_1B1Y);
    console.log(input1_usrans1_check);
    console.log(input1_usrans2_check);
    console.log(input1_usrans3_check);
    console.log(input1_usrans4_check);
    console.log(input1_usrans5_check);
    console.log(input1_usrans6_check);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 2</span>'}).then((result) => {
            $("#A3_observation2_confirm").hide();
            $("#A3_observation2_done").css({"opacity": "1"});
            $("#A3_observation2_next").removeClass("d-none");
            $("#A3_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A3_investigation2() {
    currentStage = "A3_investigation2";
    loadApplet("ggbApplet03c", ggb_JDM_IEEA_01_A3c);
}

function A3_investigation2_link() {
    var api = applet.getAppletObject();
}

function A3_investigation2_check() {
    if ($("input[name=A3_investigation2_input1]:checked").val() == undefined) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔</span>'})
    } else if ($("input[name=A3_investigation2_input1]:checked").val() == 4) {
        Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation2_confirm").hide();
            $("#A3_investigation2_done").css({"opacity": "1"});
            $("#A3_investigation2_next").removeClass("d-none");
            $("#A3_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">轉動回合數太少了</span>'})
    }
}

function A3_operation3() {
    currentStage = "A3_operation3";
    loadApplet("ggbApplet03d", ggb_JDM_IEEA_01_A3d);
}

function A3_operation3_done(objName) {
    var api = applet.getAppletObject();
    let tmp = api.getValue(objName);
    console.log(tmp);
    if (tmp == 1) {
        Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="font-size: 24px;">恭喜完成實驗操作3</span>'}).then((result) => {
            $("#A3_operation3_done").css({"opacity": "1"});
            $("#A3_operation3_next").removeClass("d-none");
            $("#A3_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A3_operation3_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("C7", "A3_operation3_done");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你如何表示一回合(轉動2次)中的各種可能，並算出每一種情況的機率呢?</span>'})
}

function A3_observation3() {
    currentStage = "A3_observation3";
    loadApplet("ggbApplet03d", ggb_JDM_IEEA_01_A3d);
}

function A3_observation3_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(btnReset,1,false)");
    api.evalCommand("SetVisibleInView(picShowOption2Y,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption2B,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption1B1Y,1,true)");
    api.evalCommand("SetFixed(picShowOption2Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2B, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2YClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption2BClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1YClicked, true, true)");
    var numRouletteA_2B = 9;
    var numRouletteA_2Y = 9;
    var numRouletteA_1B1Y = 18;
    var numSpinedRoundRouletteA = 36;
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation3_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation3_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation3_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation3_input1_ans2").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans2").next().find("a").eq(1).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans2").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation3_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation3_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation3_input1_ans4").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans4").next().find("a").eq(1).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans4").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation3_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation3_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation3_input1_ans6").next().find("a").eq(0).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans6").next().find("a").eq(1).html(katex.renderToString("\\dfrac{9}{36}", { throwOnError: false }));
        $("#A3_observation3_input1_ans6").next().find("a").eq(2).html(katex.renderToString("\\dfrac{18}{36}", { throwOnError: false }));
        
        
        $("#A3_observation3_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation3_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation3_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation3_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation3_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation3_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation3_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation3_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation3_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation3_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation3_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation3_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation3_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation3_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation3_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation3_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation3_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation3_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A3_observation3_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = 9;
    var numRouletteA_2Y = 9;
    var numRouletteA_1B1Y = 18;
    var numSpinedRoundRouletteA = 36;
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation3_input1_usrans1 = $("#A3_observation3_input1_ans1").val();
    var A3_observation3_input1_usrans2 = $("#A3_observation3_input1_ans2").val();
    var A3_observation3_input1_usrans3 = $("#A3_observation3_input1_ans3").val();
    var A3_observation3_input1_usrans4 = $("#A3_observation3_input1_ans4").val();
    var A3_observation3_input1_usrans5 = $("#A3_observation3_input1_ans5").val();
    var A3_observation3_input1_usrans6 = $("#A3_observation3_input1_ans6").val();
    var input1_usrans1_check = (A3_observation3_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation3_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation3_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation3_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation3_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation3_input1_usrans6 == ratioRouletteA_1B1Y);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 3</span>'}).then((result) => {
            $("#A3_observation3_confirm").hide();
            $("#A3_observation3_done").css({"opacity": "1"});
            $("#A3_observation3_next").removeClass("d-none");
            $("#A3_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的樹狀圖結果</span>'})
    }
}

function A3_investigation3() {
    currentStage = "A3_investigation3";
    loadApplet("ggbApplet03d", ggb_JDM_IEEA_01_A3d);
}

function A3_investigation3_link() {
    var api = applet.getAppletObject();
}

function A3_investigation3_check1() {
    if ($("input[name=A3_investigation3_input1]:checked").val() == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation3_confirm").hide();
            // $("#A3_investigation3_done").css({"opacity": "1"});
            // $("#A3_investigation3_next").removeClass("d-none");
            // $("#A3_investigation3_link img").css({"opacity": "1"});
            $("#A3_investigation3_question2").removeClass("d-none");
            $("#A3_investigation3_question2").next().removeClass("d-none");
            $("#A3_investigation3_confirm2").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation3_input1]:checked").val() == 1 || $("input[name=A3_investigation3_input1]:checked").val() == 2) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方樹狀圖</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}

function A3_investigation3_check2() {
    if ($("input[name=A3_investigation3_input2]:checked").val() == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation3_confirm2").addClass("d-none");
            // $("#A3_investigation3_done").css({"opacity": "1"});
            // $("#A3_investigation3_next").removeClass("d-none");
            // $("#A3_investigation3_link img").css({"opacity": "1"});
            $("#A3_investigation3_question3").removeClass("d-none");
            $("#A3_investigation3_question3").next().removeClass("d-none");
            $("#A3_investigation3_confirm3").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation3_input2]:checked").val() == 1 || $("input[name=A3_investigation3_input2]:checked").val() == 2) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方樹狀圖</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}

function A3_investigation3_check3() {
    if ($("input[name=A3_investigation3_input3]:checked").val() == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation3_confirm3").addClass("d-none");
            $("#A3_investigation3_done").css({"opacity": "1"});
            $("#A3_investigation3_next").removeClass("d-none");
            $("#A3_investigation3_link img").css({"opacity": "1"});
            // $("#A3_investigation3_question2").removeClass("d-none");
            // $("#A3_investigation3_question2").next().removeClass("d-none");
            // $("#A3_investigation3_confirm2").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation3_input1]:checked").val() == 2 || $("input[name=A3_investigation3_input1]:checked").val() == 3) {
        Swal.fire({showConfirmButton: true, html: '<span style="line-height: 2; font-size: 14px;"> '+katex.renderToString("機率=\\dfrac{出現次數}{總次數}", { throwOnError: false })+' </span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}

function A3_operation4a() {
    currentStage = "A3_operation4a";
    loadApplet("ggbApplet03e", ggb_JDM_IEEA_01_A3e);
}

function A3_operation4a_link() {
    var api = applet.getAppletObject();
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">現在將輪盤換成【轉盤D】<br>結果會不一樣嗎?<br>讓我們一起來實驗看看吧!</span>'})
}

var A3_investigation4_usrAns = 0;

function A3_operation4a_confirm() {
    if ($("input[name=A3_operation4a_input1]:checked").val() != undefined) {
        A3_investigation4_usrAns = $("input[name=A3_operation4a_input1]:checked").val();
        Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
            $("#A3_operation4a_confirm").hide();
            $("#A3_operation4a_done").css({"opacity": "1"});
            $("#A3_operation4a_next").removeClass("d-none");
            $("#A3_operation4a_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答 實驗操作4A 的問題</span>'})
    }
}

function A3_operation4() {
    currentStage = "A3_operation4";
    loadApplet("ggbApplet03f", ggb_JDM_IEEA_01_A3f);
}

function A3_operation4_done(objName) {
    var api = applet.getAppletObject();
    if (api.getValue(objName) == 10) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作4B!</span>'}).then((result) => {
            $("#A3_operation4_done").css({"opacity": "1"});
            $("#A3_operation4_next").removeClass("d-none");
            $("#A3_operation4_link img").css({"opacity": "1"});
        })
    }
}

function A3_operation4_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A3_operation4_done");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">讓我們實際轉動10回合, 看看結果會是如何吧!</span>'})
}

function A3_observation4(){
    currentStage = "A3_observation4";
    loadApplet("ggbApplet03f", ggb_JDM_IEEA_01_A3f);
}

function A3_observation4_link(){
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    console.log(numRouletteA_2B);
    console.log(numRouletteA_2Y);
    console.log(numRouletteA_1B1Y);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation4_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation4_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation4_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation4_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation4_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation4_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation4_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation4_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        
        $("#A3_observation4_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation4_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation4_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation4_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation4_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation4_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation4_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation4_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation4_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation4_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation4_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation4_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation4_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation4_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation4_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation4_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation4_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation4_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A3_observation4_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation4_input1_usrans1 = $("#A3_observation4_input1_ans1").val();
    var A3_observation4_input1_usrans2 = $("#A3_observation4_input1_ans2").val();
    var A3_observation4_input1_usrans3 = $("#A3_observation4_input1_ans3").val();
    var A3_observation4_input1_usrans4 = $("#A3_observation4_input1_ans4").val();
    var A3_observation4_input1_usrans5 = $("#A3_observation4_input1_ans5").val();
    var A3_observation4_input1_usrans6 = $("#A3_observation4_input1_ans6").val();
    var input1_usrans1_check = (A3_observation4_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation4_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation4_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation4_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation4_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation4_input1_usrans6 == ratioRouletteA_1B1Y);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 4</span>'}).then((result) => {
            $("#A3_observation4_confirm").hide();
            $("#A3_observation4_done").css({"opacity": "1"});
            $("#A3_observation4_next").removeClass("d-none");
            $("#A3_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A3_investigation4() {
    currentStage = "A3_investigation4";
    loadApplet("ggbApplet03f", ggb_JDM_IEEA_01_A3f);
}

function A3_investigation4_link() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    $("#A3_investigation4_ans1").html(numRouletteA_2Y);
    $("#A3_investigation4_ans2").html(ratioRouletteA_2Y);
    $("#A3_investigation4_ans3").html(numRouletteA_2B);
    $("#A3_investigation4_ans4").html(ratioRouletteA_2B);
    $("#A3_investigation4_ans5").html(numRouletteA_1B1Y);
    $("#A3_investigation4_ans6").html(ratioRouletteA_1B1Y);
    switch (A3_investigation4_usrAns) {
        case '1':
            $("#A3_investigation4_usrAns").html(katex.renderToString("\\dfrac{1}{2}", { throwOnError: false }));
            break;
        case '2':
            $("#A3_investigation4_usrAns").html(katex.renderToString("\\dfrac{2}{3}", { throwOnError: false }));
            break;
        case '3':
            $("#A3_investigation4_usrAns").html(katex.renderToString("\\dfrac{2}{9}", { throwOnError: false }));
            break;
        case '4':
            $("#A3_investigation4_usrAns").html(katex.renderToString("\\dfrac{4}{9}", { throwOnError: false }));
            break;
        default:
            break;
    } 
}

function A3_investigation4_confirm() {
    if ($("input[name=A3_investigation4_input1]:checked").val() != undefined) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">讓我們多轉幾回合, 驗證看看你的想法吧!</span>'}).then((result) => {
            $("#A3_investigation4_confirm").hide();
            $("#A3_investigation4_done").css({"opacity": "1"});
            $("#A3_investigation4_next").removeClass("d-none");
            $("#A3_investigation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A3_operation5() {
    currentStage = "A3_operation5";
    loadApplet("ggbApplet03g", ggb_JDM_IEEA_01_A3g);
}

function A3_operation5_done(objName) {
    var api = applet.getAppletObject();
    var numSpinedRoundRouletteA = api.getValue(objName);
    if (numSpinedRoundRouletteA == 500) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成實驗操作 5</span>'}).then((result) => {
            $("#A3_operation5_done").css({"opacity": "1"});
            $("#A3_operation5_next").removeClass("d-none");
            $("#A3_operation5_link img").css({"opacity": "1"});
        })
    }
}

function A3_operation5_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetFixed(picAddHundred, true, false)");
    api.evalCommand("SetFixed(picMinusHundred, true, false)");
    api.registerObjectUpdateListener("numSpinedRoundRouletteA", "A3_operation5_done");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 5000, html: '<span style="line-height: 2; font-size: 24px;">請先回答轉動500回合後, 你預測的結果.<br>按下 <img src="./images/content/JDM_IEEA_01/btnConfirm.png" alt="確認送出"> 後再實際實驗看看.</span>'})
}

function A3_operation5_confirm() {
    let A3_operation5_usrans1B1Y = $("#A3_operation5_usrans1B1Y").val();
    let A3_operation5_usrans2B = $("#A3_operation5_usrans2B").val();
    let A3_operation5_usrans2Y = $("#A3_operation5_usrans2Y").val();

    let A3_operation5_check1 = (A3_operation5_usrans1B1Y!="");
    let A3_operation5_check2 = (A3_operation5_usrans2B!="");
    let A3_operation5_check3 = (A3_operation5_usrans2Y!="");

    let A3_operation5_check4 = isNumber(A3_operation5_usrans1B1Y);
    let A3_operation5_check5 = isNumber(A3_operation5_usrans2B);
    let A3_operation5_check6 = isNumber(A3_operation5_usrans2Y);

    let A3_operation5_check7 = Number.isInteger(Number(A3_operation5_usrans1B1Y)) && Number(A3_operation5_usrans1B1Y) >= 0;
    let A3_operation5_check8 = Number.isInteger(Number(A3_operation5_usrans2B)) && Number(A3_operation5_usrans2B) >= 0;
    let A3_operation5_check9 = Number.isInteger(Number(A3_operation5_usrans2Y)) && Number(A3_operation5_usrans2Y) >= 0;

    let A3_operation5_check10 = ((Number(A3_operation5_usrans1B1Y)+Number(A3_operation5_usrans2B)+Number(A3_operation5_usrans2Y))==500);

    if (A3_operation5_check1 && A3_operation5_check2 && A3_operation5_check3) {
        if (A3_operation5_check4 && A3_operation5_check5 && A3_operation5_check6) {
            if (A3_operation5_check7 && A3_operation5_check8 && A3_operation5_check9) {
                if (A3_operation5_check10) {
                    var api = applet.getAppletObject();
                    $("#A3_operation5_confirm").hide();
                    $("#A3_operation5_usrans1B1Y").prop("disabled", true);
                    $("#A3_operation5_usrans2B").prop("disabled", true);
                    $("#A3_operation5_usrans2Y").prop("disabled", true);
                    $("#A3_operation5_part2").removeClass("d-none");
                    api.evalCommand("SetFixed(picAddHundred, true, true)");
                    api.evalCommand("SetFixed(picMinusHundred, true, true)");
                    api.evalCommand("SetVisibleInView(q1, 1, false)");
                } else {
                    Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '各情況出現的回合數加起來的總和應該等於 500 喔!'})
                }
            } else {
                Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">次數應該都是正整數喔</span>'})
            }
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你輸入的資料不是數字喔!</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作5的問題</span>'})
    }
}

function A3_observation5() {
    currentStage = "A3_observation5";
    loadApplet("ggbApplet03g", ggb_JDM_IEEA_01_A3g);
}

function A3_observation5_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(pic2, 1, false)");
    api.evalCommand("SetVisibleInView(text5, 1, false)");
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation5_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation5_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation5_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation5_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A3_observation5_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation5_input1_ans6").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A3_observation5_input1_ans6").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A3_observation5_input1_ans6").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        
        $("#A3_observation5_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation5_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation5_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation5_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation5_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation5_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation5_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation5_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation5_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation5_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation5_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation5_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation5_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation5_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation5_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation5_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation5_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation5_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();

}

function A3_observation5_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation5_input1_usrans1 = $("#A3_observation5_input1_ans1").val();
    var A3_observation5_input1_usrans2 = $("#A3_observation5_input1_ans2").val();
    var A3_observation5_input1_usrans3 = $("#A3_observation5_input1_ans3").val();
    var A3_observation5_input1_usrans4 = $("#A3_observation5_input1_ans4").val();
    var A3_observation5_input1_usrans5 = $("#A3_observation5_input1_ans5").val();
    var A3_observation5_input1_usrans6 = $("#A3_observation5_input1_ans6").val();
    var input1_usrans1_check = (A3_observation5_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation5_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation5_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation5_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation5_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation5_input1_usrans6 == ratioRouletteA_1B1Y);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 5</span>'}).then((result) => {
            $("#A3_observation5_confirm").hide();
            $("#A3_observation5_done").css({"opacity": "1"});
            $("#A3_observation5_next").removeClass("d-none");
            $("#A3_observation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A3_investigation5a() {
    currentStage = "A3_investigation5a";
    loadApplet("ggbApplet03g", ggb_JDM_IEEA_01_A3g);
}

function A3_investigation5a_link() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = api.getValue("numRouletteA_{2B}");
    var numRouletteA_2Y = api.getValue("numRouletteA_{2Y}");
    var numRouletteA_1B1Y = api.getValue("numRouletteA_{1B1Y}");
    var numSpinedRoundRouletteA = api.getValue("numSpinedRoundRouletteA");
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    $("#A3_investigation5a_ans1").html(numRouletteA_2Y);
    $("#A3_investigation5a_ans2").html(ratioRouletteA_2Y);
    $("#A3_investigation5a_ans3").html(numRouletteA_2B);
    $("#A3_investigation5a_ans4").html(ratioRouletteA_2B);
    $("#A3_investigation5a_ans5").html(numRouletteA_1B1Y);
    $("#A3_investigation5a_ans6").html(ratioRouletteA_1B1Y);
    switch (A3_investigation4_usrAns) {
        case '1':
            $("#A3_investigation5a_usrAns").html(katex.renderToString("\\dfrac{1}{2}", { throwOnError: false }));
            break;
        case '2':
            $("#A3_investigation5a_usrAns").html(katex.renderToString("\\dfrac{2}{3}", { throwOnError: false }));
            break;
        case '3':
            $("#A3_investigation5a_usrAns").html(katex.renderToString("\\dfrac{2}{9}", { throwOnError: false }));
            break;
        case '4':
            $("#A3_investigation5a_usrAns").html(katex.renderToString("\\dfrac{4}{9}", { throwOnError: false }));
            break;
        default:
            break;
    } 
}

function A3_investigation5a_confirm() {
    if ($("input[name=A3_investigation5a_input1]:checked").val() != undefined) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">讓我們多轉幾回合, 驗證看看你的想法吧!</span>'}).then((result) => {
            $("#A3_investigation5a_confirm").hide();
            $("#A3_investigation5a_done").css({"opacity": "1"});
            $("#A3_investigation5a_next").removeClass("d-none");
            $("#A3_investigation5a_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A3_investigation5() {
    currentStage = "A3_investigation5";
    loadApplet("ggbApplet03g", ggb_JDM_IEEA_01_A3g);
}

function A3_investigation5_confirm() {
    if ($("input[name=A3_investigation5_input1]:checked").val() != undefined) {
        if ($("input[name=A3_investigation5_input1]:checked").val() == 1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">用【轉盤A】來判斷似乎不太合適,<br>同時轉動的回合數也太少了!<br>請再想想看</span>'})
        } else if ($("input[name=A3_investigation5_input1]:checked").val() == 2) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">轉動的回合數雖然足夠了,<br>但用【轉盤A】來判斷似乎不太合適!<br>請再想想看</span>'})
        } else if ($("input[name=A3_investigation5_input1]:checked").val() == 3) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px;">用【轉盤D】來判斷沒錯,<br>但轉動的回合數太少了!<br>請再想想看</span>'})
        } else {
            Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="font-size: 24px;">答對了!</span>'}).then((result) => {
                $("#A3_investigation5_confirm").hide();
                $("#A3_investigation5_done").css({"opacity": "1"});
                $("#A3_investigation5_next").removeClass("d-none");
                $("#A3_investigation5_link img").css({"opacity": "1"});
            })
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
}

function A3_investigation5_link() {}

function A3_operation6() {
    currentStage = "A3_operation6";
    loadApplet("ggbApplet03h", ggb_JDM_IEEA_01_A3h);
}

function A3_operation6_done(objName) {
    var api = applet.getAppletObject();
    let tmp = api.getValue(objName);
    console.log(tmp);
    if (tmp == 1) {
        Swal.fire({icon: 'success', showConfirmButton: true, html: '<span style="font-size: 24px;">恭喜完成實驗操作6</span>'}).then((result) => {
            $("#A3_operation6_done").css({"opacity": "1"});
            $("#A3_operation6_next").removeClass("d-none");
            $("#A3_operation6_link img").css({"opacity": "1"});
        })
    }
}

function A3_operation6_link() {
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("C7", "A3_operation6_done");
    Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你如何表示一回合(轉動2次)中的各種可能，並算出每一種情況的機率呢?</span>'})
}

function A3_observation6() {
    currentStage = "A3_observation6";
    loadApplet("ggbApplet03h", ggb_JDM_IEEA_01_A3h);
}

function A3_observation6_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(btnReset, 1, false)");
    api.evalCommand("SetVisibleInView(picShowOption2Y,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption2B,1,true)");
    api.evalCommand("SetVisibleInView(picShowOption1B1Y,1,true)");
    api.evalCommand("SetFixed(picShowOption2Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2B, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1Y, true, true)");
    api.evalCommand("SetFixed(picShowOption2YClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption2BClicked, true, true)");
    api.evalCommand("SetFixed(picShowOption1B1YClicked, true, true)");
    var numRouletteA_2B = 16;
    var numRouletteA_2Y = 4;
    var numRouletteA_1B1Y = 16;
    var numSpinedRoundRouletteA = 36;
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);

    listRF1 = [numRouletteA_2B, numRouletteA_2Y, numRouletteA_1B1Y];
    listRF2 = [ratioRouletteA_2B, ratioRouletteA_2Y, ratioRouletteA_1B1Y];

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A3_observation6_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation6_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation6_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation6_input1_ans2").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans2").next().find("a").eq(1).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans2").next().find("a").eq(2).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation6_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation6_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation6_input1_ans4").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans4").next().find("a").eq(1).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans4").next().find("a").eq(2).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans5").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A3_observation6_input1_ans5").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A3_observation6_input1_ans5").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A3_observation6_input1_ans6").next().find("a").eq(0).html(katex.renderToString("\\dfrac{4}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans6").next().find("a").eq(1).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        $("#A3_observation6_input1_ans6").next().find("a").eq(2).html(katex.renderToString("\\dfrac{16}{36}", { throwOnError: false }));
        
        
        $("#A3_observation6_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation6_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation6_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation6_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation6_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation6_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation6_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation6_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation6_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation6_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation6_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation6_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A3_observation6_input1_ans5").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A3_observation6_input1_ans5").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A3_observation6_input1_ans5").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A3_observation6_input1_ans6").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A3_observation6_input1_ans6").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A3_observation6_input1_ans6").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A3_observation6_check() {
    var api = applet.getAppletObject();
    var numRouletteA_2B = 16;
    var numRouletteA_2Y = 4;
    var numRouletteA_1B1Y = 16;
    var numSpinedRoundRouletteA = 36;
    var ratioRouletteA_2B = numRound(numRouletteA_2B/numSpinedRoundRouletteA,2);
    var ratioRouletteA_2Y = numRound(numRouletteA_2Y/numSpinedRoundRouletteA,2);
    var ratioRouletteA_1B1Y = numRound(numRouletteA_1B1Y/numSpinedRoundRouletteA,2);
    var A3_observation6_input1_usrans1 = $("#A3_observation6_input1_ans1").val();
    var A3_observation6_input1_usrans2 = $("#A3_observation6_input1_ans2").val();
    var A3_observation6_input1_usrans3 = $("#A3_observation6_input1_ans3").val();
    var A3_observation6_input1_usrans4 = $("#A3_observation6_input1_ans4").val();
    var A3_observation6_input1_usrans5 = $("#A3_observation6_input1_ans5").val();
    var A3_observation6_input1_usrans6 = $("#A3_observation6_input1_ans6").val();
    var input1_usrans1_check = (A3_observation6_input1_usrans1 == numRouletteA_2Y);
    var input1_usrans2_check = (A3_observation6_input1_usrans3 == numRouletteA_2B);
    var input1_usrans3_check = (A3_observation6_input1_usrans5 == numRouletteA_1B1Y);
    var input1_usrans4_check = (A3_observation6_input1_usrans2 == ratioRouletteA_2Y);
    var input1_usrans5_check = (A3_observation6_input1_usrans4 == ratioRouletteA_2B);
    var input1_usrans6_check = (A3_observation6_input1_usrans6 == ratioRouletteA_1B1Y);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input1_usrans5_check && input1_usrans6_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 6</span>'}).then((result) => {
            $("#A3_observation6_confirm").hide();
            $("#A3_observation6_done").css({"opacity": "1"});
            $("#A3_observation6_next").removeClass("d-none");
            $("#A3_observation6_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的樹狀圖結果</span>'})
    }
}

function A3_investigation6() {
    currentStage = "A3_investigation6";
    loadApplet("ggbApplet03h", ggb_JDM_IEEA_01_A3h);
}

function A3_investigation6_link() {
    var api = applet.getAppletObject();
}

function A3_investigation6_check1() {
    if ($("input[name=A3_investigation6_input1]:checked").val() == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation6_confirm").hide();
            // $("#A3_investigation6_done").css({"opacity": "1"});
            // $("#A3_investigation6_next").removeClass("d-none");
            // $("#A3_investigation6_link img").css({"opacity": "1"});
            $("#A3_investigation6_question2").removeClass("d-none");
            $("#A3_investigation6_question2").next().removeClass("d-none");
            $("#A3_investigation6_confirm2").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation6_input1]:checked").val() == 1 || $("input[name=A3_investigation6_input1]:checked").val() == 2) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方樹狀圖</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}

function A3_investigation6_check2() {
    if ($("input[name=A3_investigation6_input2]:checked").val() == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation6_confirm2").addClass("d-none");
            // $("#A3_investigation6_done").css({"opacity": "1"});
            // $("#A3_investigation6_next").removeClass("d-none");
            // $("#A3_investigation6_link img").css({"opacity": "1"});
            $("#A3_investigation6_question3").removeClass("d-none");
            $("#A3_investigation6_question3").next().removeClass("d-none");
            $("#A3_investigation6_confirm3").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation6_input2]:checked").val() == 1 || $("input[name=A3_investigation6_input2]:checked").val() == 2) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方樹狀圖</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}

function A3_investigation6_check3() {
    if ($("input[name=A3_investigation6_input3]:checked").val() == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">答對了!</span>'}).then((result) => {
            $("#A3_investigation6_confirm3").addClass("d-none");
            $("#A3_investigation6_done").css({"opacity": "1"});
            $("#A3_investigation6_next").removeClass("d-none");
            $("#A3_investigation6_link img").css({"opacity": "1"});
            // $("#A3_investigation6_question2").removeClass("d-none");
            // $("#A3_investigation6_question2").next().removeClass("d-none");
            // $("#A3_investigation6_confirm2").removeClass("d-none");
        })
    } else if ($("input[name=A3_investigation6_input1]:checked").val() == 2 || $("input[name=A3_investigation6_input1]:checked").val() == 3) {
        Swal.fire({showConfirmButton: true, html: '<span style="line-height: 2; font-size: 14px;"> '+katex.renderToString("機率=\\dfrac{出現次數}{總次數}", { throwOnError: false })+' </span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你還沒回答問題喔!</span>'})
    }
    
}