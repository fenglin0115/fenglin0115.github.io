function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("活動2：發展機率");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_JDM_IEEA_01_A2a;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1a";
    showWorksheetsContents("A2_operation1a_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A2_operation1a() {
    currentStage = "A2_operation1a";
    loadApplet("ggbApplet02a", ggb_JDM_IEEA_01_A2a);
}

function A2_operation1a_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: '進入遊戲', html: '<img src="./images/content/JDM_IEEA_01/A2_operation1a_forward.png" width="450px">'})
    
    $("#A2_operation1a_confirm").show();
    $("#A2_operation1a_next").addClass("d-none");
    $("#A2_operation1a_usransY").val("");
    $("#A2_operation1a_usransB").val("");
}

var A2_operation1a_usransY = 0;
var A2_operation1a_usransB = 0;

// isNumber
function isNumber(inputs) { return parseFloat(inputs).toString() != "NaN";} 

function A2_operation1a_confirm() {
    A2_operation1a_usransY = $("#A2_operation1a_usransY").val();
    A2_operation1a_usransB = $("#A2_operation1a_usransB").val();
    
    A2_operation1_check1 = (A2_operation1a_usransY!="");
    A2_operation1_check2 = (A2_operation1a_usransB!="");
    A2_operation1_check3 = isNumber(A2_operation1a_usransY);
    A2_operation1_check4 = isNumber(A2_operation1a_usransB);
    A2_operation1_check5 = Number.isInteger(Number(A2_operation1a_usransY)) && Number(A2_operation1a_usransY) >= 0;
    A2_operation1_check6 = Number.isInteger(Number(A2_operation1a_usransB)) && Number(A2_operation1a_usransB) >= 0;
    A2_operation1_check7 = ((Number(A2_operation1a_usransY)+Number(A2_operation1a_usransB))==10);
    
    if (A2_operation1_check1 && A2_operation1_check2) {
        if (A2_operation1_check3 && A2_operation1_check4) {
            if (A2_operation1_check5 && A2_operation1_check6) {
                if (A2_operation1_check7) {
                    Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請點選學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
                        $("#A2_operation1a_confirm").hide();
                        $("#A2_operation1a_done").css({"opacity": "1"});
                        $("#A2_operation1a_next").removeClass("d-none");
                        $("#A2_operation1a_link img").css({"opacity": "1"});
                    })
                } else {
                    Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="color: #000000; background-color: #ffe28b; line-height: 2; font-size: 24px;">黃色次數</span>與<span style="color: #000000; background-color: #a4c8f2;">藍色次數</span>加起來的總和應該等於 10 喔!'})
                }
            } else {
                Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">次數應該都是正整數喔</span>'})
            }
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你輸入的資料不是數字喔!</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗操作1A的問題</span>'})
    }
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02b", ggb_JDM_IEEA_01_A2b);
}

var rouletteASpined = false;

function A2_operation1_done(objName) {
    var api = applet.getAppletObject();
    let tmp = api.getValue(objName);
    let ny = api.getValue("numRouletteA_Y");
    let nb = api.getValue("numRouletteA_B");
    if (tmp == 1 && rouletteASpined == false) {
        rouletteASpined = true;
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">恭喜你順利轉動1次輪盤,<br>接下來請繼續轉動剩餘9次輪盤.</span>'})
    } else if (tmp == 10) {
        if (A2_operation1a_usransY == ny && A2_operation1a_usransB == nb) {
            Swal.fire({position: 'center-end', showConfirmButton: true, confirmButtonText: 'OK', html: '<span style="line-height: 2;">恭喜你猜中了!<br>猜中只能靠運氣嗎? 有沒有什麼秘訣呢?<br>讓我們繼續玩下去！</span>'}).then((result) => {
                $("#A2_operation1_confirm").hide();
                $("#A2_operation1_done").css({"opacity": "1"});
                $("#A2_operation1_next").removeClass("d-none");
                $("#A2_operation1_link img").css({"opacity": "1"});
                api.evalCommand("SetVisibleInView(picClearResultsRouletteA,1,false)");
            })
        } else {
            Swal.fire({position: 'center-end', showConfirmButton: true, confirmButtonText: 'OK', html: '<span style="line-height: 2;">哎呀，運氣差了一點!<br>要猜中難道只能靠運氣嗎? 有沒有什麼秘訣呢?<br>讓我們繼續玩下去！</span>'}).then((result) => {
                $("#A2_operation1_confirm").hide();
                $("#A2_operation1_done").css({"opacity": "1"});
                $("#A2_operation1_next").removeClass("d-none");
                $("#A2_operation1_link img").css({"opacity": "1"});
                api.evalCommand("SetVisibleInView(picClearResultsRouletteA,1,false)");
            })
        }
    } else {}
}

function A2_operation1_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: 'OK', html: '<img src="./images/content/JDM_IEEA_01/A2_operation1_forward.png" width="450px">'})
    var api = applet.getAppletObject();
    api.evalCommand("RunClickScript(btnReset)");
    api.evalCommand("SetFixed(picRouletteALabel, true, true)");
    api.evalCommand("SetValue(numStep, 1)");
    api.evalCommand("SetVisibleInView(u,1,true)");
    api.evalCommand("SetVisibleInView(text5,1,true)");
    api.evalCommand("SetVisibleInView(btnRouletteASpotLight,1,true)");
    api.setValue("numUsrRouletteA_B", A2_operation1a_usransB);
    api.setValue("numUsrRouletteA_Y", A2_operation1a_usransY);
    rouletteASpined = false;
    api.registerObjectUpdateListener("numSpinedRouletteA", "A2_operation1_done");
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02b", ggb_JDM_IEEA_01_A2b);
}

function A2_observation1_link() {
    var api = applet.getAppletObject();
    var numRouletteA_B = api.getValue("numRouletteA_B");
    var numRouletteA_Y = api.getValue("numRouletteA_Y");
    var numSpinedRouletteA = api.getValue("numSpinedRouletteA");
    var ratioRouletteA_B = numRouletteA_B/numSpinedRouletteA;
    var ratioRouletteA_Y = numRouletteA_Y/numSpinedRouletteA;
    if(numRouletteA_B==5) {
        listRF1 = [4, 5, 6];
        listRF2 = [0.4, 0.5, 0.6];
    } else {
        listRF1 = [5, numRouletteA_B, numRouletteA_Y];
        listRF2 = [0.5, ratioRouletteA_B, ratioRouletteA_Y];
    }

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A2_observation1_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation1_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation1_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation1_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation1_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation1_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A2_observation1_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation1_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation1_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation1_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation1_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation1_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A2_observation1_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation1_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation1_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation1_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation1_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation1_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation1_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation1_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation1_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation1_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation1_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation1_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A2_observation1_check() {
    var api = applet.getAppletObject();
    var numRouletteA_B = api.getValue("numRouletteA_B");
    var numRouletteA_Y = api.getValue("numRouletteA_Y");
    var numSpinedRouletteA = api.getValue("numSpinedRouletteA");
    var ratioRouletteA_B = numRouletteA_B/numSpinedRouletteA;
    var ratioRouletteA_Y = numRouletteA_Y/numSpinedRouletteA;
    var A2_observation1_input1_usrans1 = $("#A2_observation1_input1_ans1").val();
    var A2_observation1_input1_usrans2 = $("#A2_observation1_input1_ans2").val();
    var A2_observation1_input1_usrans3 = $("#A2_observation1_input1_ans3").val();
    var A2_observation1_input1_usrans4 = $("#A2_observation1_input1_ans4").val();
    var input1_usrans1_check = (A2_observation1_input1_usrans1 == numRouletteA_Y);
    var input1_usrans2_check = (A2_observation1_input1_usrans3 == numRouletteA_B);
    var input1_usrans3_check = (A2_observation1_input1_usrans2 == ratioRouletteA_Y);
    var input1_usrans4_check = (A2_observation1_input1_usrans4 == ratioRouletteA_B);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height:2;font-size:24px">恭喜完成觀察記錄 1</span>'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height:2;font-size:24px">請對照左方的圖表數據</span>'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02b", ggb_JDM_IEEA_01_A2b);
}

function A2_investigation1_link() {
    var api = applet.getAppletObject();
    var A2_investigation1_record1 = api.getValue("numRouletteA_Y");
    var A2_investigation1_record3 = api.getValue("numRouletteA_B");
    var A2_investigation1_record2 = A2_investigation1_record1/(A2_investigation1_record1+A2_investigation1_record3);
    var A2_investigation1_record4 = A2_investigation1_record3/(A2_investigation1_record1+A2_investigation1_record3);
    $("#A2_investigation1_record1").html(A2_investigation1_record1);
    $("#A2_investigation1_record2").html(A2_investigation1_record2);
    $("#A2_investigation1_record3").html(A2_investigation1_record3);
    $("#A2_investigation1_record4").html(A2_investigation1_record4);
    $("#A2_investigation1_usransY").html(A2_operation1a_usransY);
    $("#A2_investigation1_usransB").html(A2_operation1a_usransB);
    let ny = api.getValue("numRouletteA_Y");
    let nb = api.getValue("numRouletteA_B");
    if (A2_operation1a_usransY == ny && A2_operation1a_usransB == nb) {
        $("#A2_investigation1_reason").html("你猜對的理由是：");
        $("#A2_investigation1_reason").next().removeClass("d-none");
    } else {
        $("#A2_investigation1_reason").html("你猜錯的理由是：");
        $("#A2_investigation1_reason").next().next().removeClass("d-none");
    }
    $("#A2_investigation1_confirm").show();
    $("#A2_investigation1_next").addClass("d-none");
    $("input[name=A2_investigation1_input1]").prop("checked", false);
    $("input[name=A2_investigation1_input2]").prop("checked", false);
    $("input[name=A2_investigation1_input1]").prop("disabled", false);
    $("input[name=A2_investigation1_input2]").prop("disabled", false);
    $("#A2_investigation1_question").addClass("d-none");
    $("#A2_investigation1_question").next().addClass("d-none");
    $("input[name=A2_investigation1_input3]").prop("checked", false);
    $("#A2_investigation1_confirm2").addClass("d-none");
}

function A2_investigation1_confirm() {
    var api = applet.getAppletObject();
    let ny = api.getValue("numRouletteA_Y");
    let nb = api.getValue("numRouletteA_B");
    if (A2_operation1a_usransY == ny && A2_operation1a_usransB == nb) {
        if ($("input[name=A2_investigation1_input1]:checked").val()==1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size:24px;line-height:2;">讓我們等等多轉幾次,<br>看看是不是都會這麼好運?</span>'}).then((result) => {
                $("#A2_investigation1_question").removeClass("d-none");
                $("#A2_investigation1_question").next().removeClass("d-none");
                $("input[name=A2_investigation1_input1]").prop("disabled", true);
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_confirm2").removeClass("d-none");
                // $("#A2_investigation1_done").css({"opacity": "1"});
                // $("#A2_investigation1_next").removeClass("d-none");
                // $("#A2_investigation1_link img").css({"opacity": "1"});
            })
        } else if ($("input[name=A2_investigation1_input1]:checked").val()==2) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size:24px;line-height:2;">讓我們等等多轉幾次,<br>驗證看看你的理由是否正確?</span>'}).then((result) => {
                $("#A2_investigation1_question").removeClass("d-none");
                $("#A2_investigation1_question").next().removeClass("d-none");
                $("input[name=A2_investigation1_input1]").prop("disabled", true);
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_confirm2").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答問題探索1的問題</span>'})
        }
    } else {
        if ($("input[name=A2_investigation1_input2]:checked").val()==1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">讓我們繼續實驗下去,<br>看看有沒有轉運的方法</span>'}).then((result) => {
                $("#A2_investigation1_question").removeClass("d-none");
                $("#A2_investigation1_question").next().removeClass("d-none");
                $("input[name=A2_investigation1_input1]").prop("disabled", true);
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_confirm2").removeClass("d-none");
            })
        } else if ($("input[name=A2_investigation1_input2]:checked").val()==2) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">別急著下結論,<br>讓我們繼續實驗下去,<br>驗證你的想法吧!</span>'}).then((result) => {
                $("#A2_investigation1_question").removeClass("d-none");
                $("#A2_investigation1_question").next().removeClass("d-none");
                $("input[name=A2_investigation1_input1]").prop("disabled", true);
                $("#A2_investigation1_confirm").hide();
                $("#A2_investigation1_confirm2").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答問題探索1的問題</span>'})
        }
    }
}

function A2_investigation1_confirm2() {
    if ($("input[name=A2_investigation1_input3]:checked").val() != undefined) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size:24px; line-height: 2;">讓我們繼續實驗下去,<br>驗證你的想法吧!</span>'}).then((result) => {
            $("#A2_investigation1_confirm2").addClass("d-none");
            $("#A2_investigation1_done").css({"opacity": "1"});
            $("#A2_investigation1_next").removeClass("d-none");
            $("#A2_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答問題探索1的問題</span>'})
    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02c", ggb_JDM_IEEA_01_A2c);
}

function A2_operation2_done(objName) {
    var api = applet.getAppletObject();
    let numRouletteAResults = api.getValue(objName);
    let numAutoSpinRouletteA = api.getValue("numAutoSpinRouletteA");
    if (numAutoSpinRouletteA > 0 ){
        if (numAutoSpinRouletteA > 500 && numRouletteAResults == numAutoSpinRouletteA) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數超過500次了,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteA < 500 && numRouletteAResults == numAutoSpinRouletteA) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數不滿500次喔,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteA == 500 && numRouletteAResults == numAutoSpinRouletteA){
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作2</span>'}).then((result) => {
                $("#A2_operation2_done").css({"opacity": "1"});
                $("#A2_operation2_next").removeClass("d-none");
                $("#A2_operation2_link img").css({"opacity": "1"});
            })
        } else {}
    } else {}
}

function A2_operation2_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: '準備好了', html: '<span style="font-size: 24px; line-height: 2;">讓我們來實際轉動500次【轉盤A】,<br>看看黃色及藍色分別會出現幾次?<br>準備好了嗎?</span>'})
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("numSpinedRouletteA");
    api.evalCommand("RunClickScript(picClearResultsRouletteA)");
    api.evalCommand("RunClickScript(button2)");
    api.evalCommand("SetVisibleInView(v,1,true)");
    api.evalCommand("SetVisibleInView(w,1,true)");
    api.evalCommand("SetVisibleInView(q1,1,true)");
    api.evalCommand("SetVisibleInView(text8,1,true)");
    api.registerObjectUpdateListener("numSpinedRouletteA", "A2_operation2_done");
}

function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02c", ggb_JDM_IEEA_01_A2c);
}

function A2_observation2_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(picClearResultsRouletteA, 1, false)");
    var numRouletteA_B = api.getValue("numRouletteA_B");
    investigation3RouletteA_B = numRouletteA_B;
    var numRouletteA_Y = api.getValue("numRouletteA_Y");
    var numSpinedRouletteA = api.getValue("numSpinedRouletteA");
    var ratioRouletteA_B = numRound(numRouletteA_B/numSpinedRouletteA,2);
    var ratioRouletteA_Y = numRound(numRouletteA_Y/numSpinedRouletteA,2);
    if(numRouletteA_B==250) {
        listRF1 = [240, 250, 260];
        listRF2 = [0.48, 0.5, 0.52];
    } else {
        listRF1 = [250, numRouletteA_B, numRouletteA_Y];
        listRF2 = [0.5, ratioRouletteA_B, ratioRouletteA_Y];
    }

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A2_observation2_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation2_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation2_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation2_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation2_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation2_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A2_observation2_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation2_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation2_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation2_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation2_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation2_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A2_observation2_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation2_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation2_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation2_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation2_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation2_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation2_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation2_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation2_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation2_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation2_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation2_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A2_observation2_check() {
    var api = applet.getAppletObject();
    var numRouletteA_B = api.getValue("numRouletteA_B");
    var numRouletteA_Y = api.getValue("numRouletteA_Y");
    var numSpinedRouletteA = api.getValue("numSpinedRouletteA");
    var ratioRouletteA_B = numRound(numRouletteA_B/numSpinedRouletteA,2);
    var ratioRouletteA_Y = numRound(numRouletteA_Y/numSpinedRouletteA,2);
    var A2_observation2_input1_usrans1 = $("#A2_observation2_input1_ans1").val();
    var A2_observation2_input1_usrans2 = $("#A2_observation2_input1_ans2").val();
    var A2_observation2_input1_usrans3 = $("#A2_observation2_input1_ans3").val();
    var A2_observation2_input1_usrans4 = $("#A2_observation2_input1_ans4").val();
    var input1_usrans1_check = (A2_observation2_input1_usrans1 == numRouletteA_Y);
    var input1_usrans2_check = (A2_observation2_input1_usrans3 == numRouletteA_B);
    var input1_usrans3_check = (A2_observation2_input1_usrans2 == ratioRouletteA_Y);
    var input1_usrans4_check = (A2_observation2_input1_usrans4 == ratioRouletteA_B);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成觀察記錄 2</span>'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '<span style="font-size: 24px; line-height: 2;">請對照左方的圖表數據</span>'})
    }
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02c", ggb_JDM_IEEA_01_A2c);
}

function A2_investigation2_link() {
    var api = applet.getAppletObject();
    var A2_investigation2_record1 = api.getValue("numRouletteA_Y");
    var A2_investigation2_record3 = api.getValue("numRouletteA_B");
    var A2_investigation2_record2 = numRound(A2_investigation2_record1/(A2_investigation2_record1+A2_investigation2_record3), 2);
    var A2_investigation2_record4 = numRound(A2_investigation2_record3/(A2_investigation2_record1+A2_investigation2_record3), 2);
    console.log(A2_investigation2_record1);
    console.log(A2_investigation2_record3);
    console.log(A2_investigation2_record2);
    console.log(A2_investigation2_record4);
    $("#A2_investigation2_record1").html(A2_investigation2_record1);
    $("#A2_investigation2_record2").html(A2_investigation2_record2);
    $("#A2_investigation2_record3").html(A2_investigation2_record3);
    $("#A2_investigation2_record4").html(A2_investigation2_record4);
}

function A2_investigation2_confirm() {
    var investigation2_usrAns = $("input[name=A2_investigation2_input1]:checked").val();
    if (investigation2_usrAns == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜你答對了</span>'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請參考一下實驗的數據(如上表), 再想想</span>'})
    }
}

function A2_investigation2_next() {
    Swal.fire({icon: 'info', showConfirmButton: true, confirmButtonText: '繼續下一步', html: '<span style="font-size: 24px; line-height: 2;">原來不只有手氣,<br>先用大數據分析是可以提高命中率的!</span>'}).then((result) => {
        $("#A2_operation3a_link").click();
    })
}

function A2_operation3a() {
    currentStage = "A2_operation3a";
    loadApplet("ggbApplet02d", ggb_JDM_IEEA_01_A2d);
}

function A2_operation3a_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: '開始挑戰', html: '<span style="font-size: 24px; line-height: 2;">有了前面的經驗<br>歡迎挑戰另外兩種不同樣式的俄羅斯輪盤<br>看看你的預測準不準!</span>'})
    $("#A2_operation3a_confirm").show();
    $("#A2_operation3a_next").addClass("d-none");
    $("input[name=A2_operation3a_input1]").prop("checked", false);
    $("input[name=A2_operation3a_input2]").prop("checked", false);
}

var operation3a_usrAnsB = 0, operation3a_usrAnsC = 0;

function A2_operation3a_confirm() {
    var operation3a_usrAnsB = $("input[name=A2_operation3a_input1]:checked").val();
    var operation3a_usrAnsC = $("input[name=A2_operation3a_input2]:checked").val();
    console.log(operation3a_usrAnsB);
    console.log(operation3a_usrAnsC);
    if (operation3a_usrAnsB == undefined || operation3a_usrAnsC == undefined) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請先回答實驗操作3A的問題'})
    } else {
        Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
            $("#A2_operation3a_confirm").hide();
            $("#A2_operation3a_done").css({"opacity": "1"});
            $("#A2_operation3a_next").removeClass("d-none");
            $("#A2_operation3a_link img").css({"opacity": "1"});
        })
    }
}

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02e", ggb_JDM_IEEA_01_A2e);
}

var numSpinedRouletteB = 0, numSpinedRouletteC = 0;

function A2_operation3_done(objName) {
    var api = applet.getAppletObject();
    if (objName == "numSpinedRouletteB") {
        numSpinedRouletteB = api.getValue(objName);
    } else {
        numSpinedRouletteC = api.getValue(objName);
    }
    if(numSpinedRouletteB==500 && numSpinedRouletteC==500) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作3B</span>'}).then((result) => {
            $("#A2_operation3_confirm").hide();
            $("#A2_operation3_done").css({"opacity": "1"});
            $("#A2_operation3_next").removeClass("d-none");
            $("#A2_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A2_operation3_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetValue(numStep, 4)");
    api.registerObjectUpdateListener("numSpinedRouletteB", "A2_operation3_done");
    api.registerObjectUpdateListener("numSpinedRouletteC", "A2_operation3_done");
    $("#A2_operation3_next").addClass("d-none");
    Swal.fire({showConfirmButton: true, confirmButtonText: '進入操作', html: '<span style="font-size: 24px; line-height: 2;">讓我們實際來轉動500次【轉盤B】和【轉盤C】, 看看黃色及藍色分別會出現幾次</span>'})
}

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02e", ggb_JDM_IEEA_01_A2e);
}

// var investigation3RouletteB_B = 0, investigation3RouletteC_B = 0;
function A2_observation3_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(picClearResultsRouletteB, 1, false)");
    api.evalCommand("SetVisibleInView(picClearResultsRouletteC, 1, false)");
    var numRouletteB_B = api.getValue("numRouletteB_B");
    investigation3RouletteB_B = numRouletteB_B;
    var numRouletteB_Y = api.getValue("numRouletteB_Y");
    var numSpinedRouletteB = api.getValue("numSpinedRouletteB");
    var ratioRouletteB_B = numRound(numRouletteB_B/numSpinedRouletteB,2);
    var ratioRouletteB_Y = numRound(numRouletteB_Y/numSpinedRouletteB,2);
    var numRouletteC_B = api.getValue("numRouletteC_B");
    investigation3RouletteC_B = numRouletteC_B;
    var numRouletteC_Y = api.getValue("numRouletteC_Y");
    var numSpinedRouletteC = api.getValue("numSpinedRouletteC");
    var ratioRouletteC_B = numRound(numRouletteC_B/numSpinedRouletteC,2);
    var ratioRouletteC_Y = numRound(numRouletteC_Y/numSpinedRouletteC,2);
    if(numRouletteB_B==250) {
        listRF1 = [240, 250, 260];
        listRF2 = [0.48, 0.5, 0.52];
    } else {
        listRF1 = [250, numRouletteB_B, numRouletteB_Y];
        listRF2 = [0.5, ratioRouletteB_B, ratioRouletteB_Y];
    }

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    if(numRouletteC_B==250) {
        listRF3 = [240, 250, 260];
        listRF4 = [0.48, 0.5, 0.52];
    } else {
        listRF3 = [250, numRouletteC_B, numRouletteC_Y];
        listRF4 = [0.5, ratioRouletteC_B, ratioRouletteC_Y];
    }

    listRF3.sort(function(a, b) {
        return a - b;
    });
    listRF4.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A2_observation3_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation3_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation3_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation3_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation3_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation3_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A2_observation3_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation3_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation3_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation3_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation3_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation3_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A2_observation3_input2_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF3[0], { throwOnError: false }));
        $("#A2_observation3_input2_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF3[1], { throwOnError: false }));
        $("#A2_observation3_input2_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF3[2], { throwOnError: false }));
        $("#A2_observation3_input2_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF4[0], { throwOnError: false }));
        $("#A2_observation3_input2_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF4[1], { throwOnError: false }));
        $("#A2_observation3_input2_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF4[2], { throwOnError: false }));
        $("#A2_observation3_input2_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF3[0], { throwOnError: false }));
        $("#A2_observation3_input2_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF3[1], { throwOnError: false }));
        $("#A2_observation3_input2_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF3[2], { throwOnError: false }));
        $("#A2_observation3_input2_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF4[0], { throwOnError: false }));
        $("#A2_observation3_input2_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF4[1], { throwOnError: false }));
        $("#A2_observation3_input2_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF4[2], { throwOnError: false }));

        $("#A2_observation3_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation3_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation3_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation3_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation3_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation3_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation3_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation3_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation3_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation3_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation3_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation3_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation3_input2_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[0]);
        });
        $("#A2_observation3_input2_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[1]);
        });
        $("#A2_observation3_input2_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[2]);
        });

        $("#A2_observation3_input2_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[0]);
        });
        $("#A2_observation3_input2_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[1]);
        });
        $("#A2_observation3_input2_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[2]);
        });

        $("#A2_observation3_input2_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[0]);
        });
        $("#A2_observation3_input2_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[1]);
        });
        $("#A2_observation3_input2_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF3[2]);
        });

        $("#A2_observation3_input2_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[0]);
        });
        $("#A2_observation3_input2_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[1]);
        });
        $("#A2_observation3_input2_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF4[2]);
        });
    }
    createOption();
    $("#A2_observation3_confirm").show();
    $("#A2_observation3_next").addClass("d-none");
}

function A2_observation3_check() {
    var api = applet.getAppletObject();
    var numRouletteB_B = api.getValue("numRouletteB_B");
    var numRouletteB_Y = api.getValue("numRouletteB_Y");
    var numSpinedRouletteB = api.getValue("numSpinedRouletteB");
    var ratioRouletteB_B = numRound(numRouletteB_B/numSpinedRouletteB,2);
    var ratioRouletteB_Y = numRound(numRouletteB_Y/numSpinedRouletteB,2);
    var numRouletteC_B = api.getValue("numRouletteC_B");
    var numRouletteC_Y = api.getValue("numRouletteC_Y");
    var numSpinedRouletteC = api.getValue("numSpinedRouletteC");
    var ratioRouletteC_B = numRound(numRouletteC_B/numSpinedRouletteC,2);
    var ratioRouletteC_Y = numRound(numRouletteC_Y/numSpinedRouletteC,2);
    var A2_observation3_input1_usrans1 = $("#A2_observation3_input1_ans1").val();
    var A2_observation3_input1_usrans2 = $("#A2_observation3_input1_ans2").val();
    var A2_observation3_input1_usrans3 = $("#A2_observation3_input1_ans3").val();
    var A2_observation3_input1_usrans4 = $("#A2_observation3_input1_ans4").val();
    var A2_observation3_input2_usrans1 = $("#A2_observation3_input2_ans1").val();
    var A2_observation3_input2_usrans2 = $("#A2_observation3_input2_ans2").val();
    var A2_observation3_input2_usrans3 = $("#A2_observation3_input2_ans3").val();
    var A2_observation3_input2_usrans4 = $("#A2_observation3_input2_ans4").val();

    var input1_usrans1_check = (A2_observation3_input1_usrans1 == numRouletteB_Y);
    var input1_usrans2_check = (A2_observation3_input1_usrans3 == numRouletteB_B);
    var input1_usrans3_check = (A2_observation3_input1_usrans2 == ratioRouletteB_Y);
    var input1_usrans4_check = (A2_observation3_input1_usrans4 == ratioRouletteB_B);

    var input2_usrans1_check = (A2_observation3_input2_usrans1 == numRouletteC_Y);
    var input2_usrans2_check = (A2_observation3_input2_usrans3 == numRouletteC_B);
    var input2_usrans3_check = (A2_observation3_input2_usrans2 == ratioRouletteC_Y);
    var input2_usrans4_check = (A2_observation3_input2_usrans4 == ratioRouletteC_B);

    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input2_usrans1_check && input2_usrans2_check && input2_usrans3_check && input2_usrans4_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成觀察記錄 3</span>'}).then((result) => {
            $("#A2_observation3_confirm").hide();
            $("#A2_observation3_done").css({"opacity": "1"});
            $("#A2_observation3_next").removeClass("d-none");
            $("#A2_observation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '<span style="font-size: 24px; line-height: 2;">請對照左方的圖表數據</span>'})
    }
}

function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02f", ggb_JDM_IEEA_01_A2f);
}

function A2_investigation3_link() {
    var api = applet.getAppletObject();
    api.setValue("numRouletteA_B", investigation3RouletteA_B);
    api.setValue("numRouletteA_Y", 500-investigation3RouletteA_B);
    api.setValue("numRouletteB_B", investigation3RouletteB_B);
    api.setValue("numRouletteB_Y", 500-investigation3RouletteB_B);
    api.setValue("numRouletteC_B", investigation3RouletteC_B);
    api.setValue("numRouletteC_Y", 500-investigation3RouletteC_B);
}

function A2_investigation3_confirm() {
    var investigation3_usrAns1 = $("input[name=A2_investigation3_input1]:checked").val();
    if (investigation3_usrAns1 == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">答對了</span>'}).then((result) => {
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_question2").removeClass("d-none");
            $("#A2_investigation3_question2").next().removeClass("d-none");
            $("#A2_investigation3_confirm2").removeClass("d-none");
        })
    } else {
        // Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">如果藍色有4格, 黃色有2格<br>結果還是如此嗎?</span>'})
        Swal.fire({showConfirmButton: true, html: '<img src="./images/content/JDM_IEEA_01/A2_investigation3_confirm.png" width="450px">'})
    }
}

function A2_investigation3_confirm2() {
    var investigation3_usrAns2 = $("input[name=A2_investigation3_input2]:checked").val();
    if (investigation3_usrAns2 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔</span>'}).then((result) => {
            $("#A2_investigation3_confirm2").addClass("d-none");
            $("#A2_investigation3_question3").removeClass("d-none");
            $("#A2_investigation3_question3").next().removeClass("d-none");
            $("#A2_investigation3_confirm3").removeClass("d-none");
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">再想想看!</span>'})
    }
}

function A2_investigation3_confirm3() {
    var investigation3_usrAns3 = $("input[name=A2_investigation3_input3]:checked").val();
    if (investigation3_usrAns3 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">你的觀察正確喔</span>'}).then((result) => {
            $("#A2_investigation3_confirm3").addClass("d-none");
            $("#A2_investigation3_question4").removeClass("d-none");
            $("#A2_investigation3_question4").next().removeClass("d-none");
            $("#A2_investigation3_confirm4").removeClass("d-none");
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">再想想看!</span>'})
    }
}

function A2_investigation3_confirm4() {
    var investigation3_usrAns4 = $("input[name=A2_investigation3_input4]:checked").val();
    if (investigation3_usrAns4 == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">叮咚叮咚, 答對了!</span>'}).then((result) => {
            $("#A2_investigation3_confirm4").addClass("d-none");
            $("#A2_investigation3_done").css({"opacity": "1"});
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({"opacity": "1"});
        })
    } else if (investigation3_usrAns4 == 2) {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">還要看該顏色所占的面積大小!</span>'})
    } else if (investigation3_usrAns4 == 3) {
        Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="line-height: 2; font-size: 24px;">受該顏色所占的總面積大小影響喔!</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請先回答實驗探索3的問題</span>'})
    }
}

function A2_operation4a() {
    currentStage = "A2_operation4a";
    loadApplet("ggbApplet02h", ggb_JDM_IEEA_01_A2h);
}

function A2_operation4a_link() {
    Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">出現一個新的轉盤D, 先觀察看看跟之前的轉盤有什麼不同.<br>再開始試試你的手氣吧</span>'})
    var api = applet.getAppletObject();
    api.evalCommand("SetValue(numStep, 0)");
    api.evalCommand("SetFixed(picRouletteDLabel, true, false)");
}

var A2_operation4a_usransY = 0, A2_operation4a_usransB = 0;

function A2_operation4a_confirm() {
    A2_operation4a_usransY = $("#A2_operation4a_usransY").val();
    A2_operation4a_usransB = $("#A2_operation4a_usransB").val();
    
    A2_operation4a_check1 = (A2_operation4a_usransY!="");
    A2_operation4a_check2 = (A2_operation4a_usransB!="");
    A2_operation4a_check3 = isNumber(A2_operation4a_usransY);
    A2_operation4a_check4 = isNumber(A2_operation4a_usransB);
    A2_operation4a_check5 = Number.isInteger(Number(A2_operation4a_usransY)) && Number(A2_operation4a_usransY) >= 0;
    A2_operation4a_check6 = Number.isInteger(Number(A2_operation4a_usransB)) && Number(A2_operation4a_usransB) >= 0;
    A2_operation4a_check7 = ((Number(A2_operation4a_usransY)+Number(A2_operation4a_usransB))==10);
    
    if (A2_operation4a_check1 && A2_operation4a_check2) {
        if (A2_operation4a_check3 && A2_operation4a_check4) {
            if (A2_operation4a_check5 && A2_operation4a_check6) {
                if (A2_operation4a_check7) {
                    Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
                        $("#A2_operation4a_confirm").hide();
                        $("#A2_operation4a_done").css({"opacity": "1"});
                        $("#A2_operation4a_next").removeClass("d-none");
                        $("#A2_operation4a_link img").css({"opacity": "1"});
                    })
                } else {
                    Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;"><span style="color: #000000; background-color: #ffe28b;">黃色次數</span>與<span style="color: #000000; background-color: #a4c8f2;">藍色次數</span>加起來的總和應該等於 10 喔!</span>'})
                }
            } else {
                Swal.fire({icon: 'error', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">次數應該都是正整數喔</span>'})
            }
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你輸入的資料不是數字喔!</span>'})
        }
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答實驗操作4A的問題</span>'})
    }
}

function A2_operation4() {
    currentStage = "A2_operation4";
    loadApplet("ggbApplet02i", ggb_JDM_IEEA_01_A2i);
}

var rouletteDSpined = false;

function A2_operation4_done(objName) {
    var api = applet.getAppletObject();
    let tmp = api.getValue(objName);
    let ny = api.getValue("numRouletteD_Y");
    let nb = api.getValue("numRouletteD_B");
    if (tmp == 1 && rouletteDSpined == false) {
        rouletteDSpined = true;
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">恭喜你順利轉動1次輪盤,<br>接下來請繼續轉動剩餘9次輪盤.</span>'})
    } else if (tmp == 10) {
        if (A2_operation4a_usransY == ny && A2_operation4a_usransB == nb) {
            Swal.fire({position: 'center-end', showConfirmButton: true, confirmButtonText: 'OK',html: '<span style="line-height: 2; font-size: 24px;">恭喜你猜中了!<br>猜中只能靠運氣嗎? 有沒有什麼秘訣呢?<br>讓我們繼續玩下去!</span>'}).then((result) => {
                $("#A2_operation4_confirm").hide();
                $("#A2_operation4_done").css({"opacity": "1"});
                $("#A2_operation4_next").removeClass("d-none");
                $("#A2_operation4_link img").css({"opacity": "1"});
                api.evalCommand("SetVisibleInView(picClearResultsRouletteD,1,false)");
            })
        } else {
            Swal.fire({position: 'center-end', showConfirmButton: true, confirmButtonText: 'OK',html: '<span style="line-height: 2; font-size: 24px;">哎呀，運氣差了一點!<br>要猜中難道只能靠運氣嗎? 有沒有什麼秘訣呢? 讓我們繼續玩下去!</span>'}).then((result) => {
                $("#A2_operation4_confirm").hide();
                $("#A2_operation4_done").css({"opacity": "1"});
                $("#A2_operation4_next").removeClass("d-none");
                $("#A2_operation4_link img").css({"opacity": "1"});
                api.evalCommand("SetVisibleInView(picClearResultsRouletteD,1,false)");
            })
        }
    } else {}
}

function A2_operation4_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetValue(numStep, 1)");
    api.evalCommand("SetFixed(picRouletteDLabel, true, true)");
    api.setValue("numUsrRouletteD_B", A2_operation4a_usransB);
    api.setValue("numUsrRouletteD_Y", A2_operation4a_usransY);
    api.evalCommand("SetVisibleInView(btnRouletteDSpotLight, 1, true)");
    api.evalCommand("SetVisibleInView(u, 1, true)");
    api.evalCommand("SetVisibleInView(text1, 1, true)");
    api.registerObjectUpdateListener("numSpinedRouletteD", "A2_operation4_done");
}

function A2_observation4() {
    currentStage = "A2_observation4";
    loadApplet("ggbApplet02i", ggb_JDM_IEEA_01_A2i);
}

function A2_observation4_link() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("numSpinedRouletteD");
    var numRouletteD_B = api.getValue("numRouletteD_B");
    var numRouletteD_Y = api.getValue("numRouletteD_Y");
    var numSpinedRouletteD = api.getValue("numSpinedRouletteD");
    var ratioRouletteD_B = numRouletteD_B/numSpinedRouletteD;
    var ratioRouletteD_Y = numRouletteD_Y/numSpinedRouletteD;
    if(numRouletteD_B==5) {
        listRF1 = [4, 5, 6];
        listRF2 = [0.4, 0.5, 0.6];
    } else {
        listRF1 = [5, numRouletteD_B, numRouletteD_Y];
        listRF2 = [0.5, ratioRouletteD_B, ratioRouletteD_Y];
    }

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A2_observation4_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation4_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation4_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation4_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation4_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation4_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A2_observation4_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation4_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation4_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation4_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation4_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation4_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A2_observation4_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation4_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation4_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation4_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation4_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation4_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation4_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation4_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation4_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation4_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation4_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation4_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A2_observation4_check() {
    var api = applet.getAppletObject();
    var numRouletteD_B = api.getValue("numRouletteD_B");
    var numRouletteD_Y = api.getValue("numRouletteD_Y");
    var numSpinedRouletteD = api.getValue("numSpinedRouletteD");
    var ratioRouletteD_B = numRouletteD_B/numSpinedRouletteD;
    var ratioRouletteD_Y = numRouletteD_Y/numSpinedRouletteD;
    var A2_observation4_input1_usrans1 = $("#A2_observation4_input1_ans1").val();
    var A2_observation4_input1_usrans2 = $("#A2_observation4_input1_ans2").val();
    var A2_observation4_input1_usrans3 = $("#A2_observation4_input1_ans3").val();
    var A2_observation4_input1_usrans4 = $("#A2_observation4_input1_ans4").val();
    var input1_usrans1_check = (A2_observation4_input1_usrans1 == numRouletteD_Y);
    var input1_usrans2_check = (A2_observation4_input1_usrans3 == numRouletteD_B);
    var input1_usrans3_check = (A2_observation4_input1_usrans2 == ratioRouletteD_Y);
    var input1_usrans4_check = (A2_observation4_input1_usrans4 == ratioRouletteD_B);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成觀察記錄 4</span>'}).then((result) => {
            $("#A2_observation4_confirm").hide();
            $("#A2_observation4_done").css({"opacity": "1"});
            $("#A2_observation4_next").removeClass("d-none");
            $("#A2_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '<span style="font-size: 24px; line-height: 2;">請對照左方的圖表數據</span>'})
    }
}

function A2_investigation4() {
    currentStage = "A2_investigation4";
    loadApplet("ggbApplet02i", ggb_JDM_IEEA_01_A2i);
}

function A2_investigation4_link() {
    var api = applet.getAppletObject();
    var A2_investigation4_record1 = api.getValue("numRouletteD_Y");
    var A2_investigation4_record3 = api.getValue("numRouletteD_B");
    var A2_investigation4_record2 = A2_investigation4_record1/(A2_investigation4_record1+A2_investigation4_record3);
    var A2_investigation4_record4 = A2_investigation4_record3/(A2_investigation4_record1+A2_investigation4_record3);
    $("#A2_investigation4_record1").html(A2_investigation4_record1);
    $("#A2_investigation4_record2").html(A2_investigation4_record2);
    $("#A2_investigation4_record3").html(A2_investigation4_record3);
    $("#A2_investigation4_record4").html(A2_investigation4_record4);
    $("#A2_investigation4_usransY").html(A2_operation4a_usransY);
    $("#A2_investigation4_usransB").html(A2_operation4a_usransB);
    let ny = api.getValue("numRouletteD_Y");
    let nb = api.getValue("numRouletteD_B");
    if (A2_operation4a_usransY == ny && A2_operation4a_usransB == nb) {
        $("#A2_investigation4_reason").html("你猜對的理由是：");
        $("#A2_investigation4_reason").next().removeClass("d-none");
    } else {
        $("#A2_investigation4_reason").html("你猜錯的理由是：");
        $("#A2_investigation4_reason").next().next().removeClass("d-none");
    }
    $("#A2_investigation4_confirm").show();
    $("#A2_investigation4_next").addClass("d-none");
    $("input[name=A2_investigation4_input1]").prop("checked", false);
    $("input[name=A2_investigation4_input2]").prop("checked", false);
    $("input[name=A2_investigation4_input1]").prop("disabled", false);
    $("input[name=A2_investigation4_input2]").prop("disabled", false);
    $("#A2_investigation4_question").addClass("d-none");
    $("#A2_investigation4_question").next().addClass("d-none");
    $("input[name=A2_investigation4_input3]").prop("checked", false);
    $("#A2_investigation4_confirm2").addClass("d-none");
}

function A2_investigation4_confirm() {
    var api = applet.getAppletObject();
    let ny = api.getValue("numRouletteD_Y");
    let nb = api.getValue("numRouletteD_B");
    if (A2_operation4a_usransY == ny && A2_operation4a_usransB == nb) {
        if ($("input[name=A2_investigation4_input1]:checked").val()==1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size:24px;line-height:2;">讓我們等等多轉幾次,<br>看看是不是都會這麼好運?</span>'}).then((result) => {
                $("#A2_investigation4_question").removeClass("d-none");
                $("#A2_investigation4_question").next().removeClass("d-none");
                $("input[name=A2_investigation4_input1]").prop("disabled", true);
                $("#A2_investigation4_confirm").hide();
                $("#A2_investigation4_confirm2").removeClass("d-none");
            })
        } else if ($("input[name=A2_investigation4_input1]:checked").val()==2) {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size:24px;line-height:2;">讓我們等等多轉幾次,<br>驗證看看你的理由是否正確?</span>'}).then((result) => {
                $("#A2_investigation4_question").removeClass("d-none");
                $("#A2_investigation4_question").next().removeClass("d-none");
                $("input[name=A2_investigation4_input1]").prop("disabled", true);
                $("#A2_investigation4_confirm").hide();
                $("#A2_investigation4_confirm2").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答問題探索4的問題</span>'})
        }
    } else {
        if ($("input[name=A2_investigation4_input2]:checked").val()==1) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">讓我們繼續實驗下去,<br>看看有沒有轉運的方法</span>'}).then((result) => {
                $("#A2_investigation4_question").removeClass("d-none");
                $("#A2_investigation4_question").next().removeClass("d-none");
                $("input[name=A2_investigation4_input1]").prop("disabled", true);
                $("#A2_investigation4_confirm").hide();
                $("#A2_investigation4_confirm2").removeClass("d-none");
            })
        } else if ($("input[name=A2_investigation4_input2]:checked").val()==2) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">別急著下結論,<br>讓我們繼續實驗下去,<br>驗證你的想法吧!</span>'}).then((result) => {
                $("#A2_investigation4_question").removeClass("d-none");
                $("#A2_investigation4_question").next().removeClass("d-none");
                $("input[name=A2_investigation4_input1]").prop("disabled", true);
                $("#A2_investigation4_confirm").hide();
                $("#A2_investigation4_confirm2").removeClass("d-none");
            })
        } else {
            Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答問題探索4的問題</span>'})
        }
    }
}

function A2_investigation4_confirm2() {
    if ($("input[name=A2_investigation4_input3]:checked").val() != undefined) {
        Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size:24px; line-height: 2;">讓我們繼續實驗下去,<br>驗證你的想法吧!</span>'}).then((result) => {
            $("#A2_investigation4_confirm2").addClass("d-none");
            $("#A2_investigation4_done").css({"opacity": "1"});
            $("#A2_investigation4_next").removeClass("d-none");
            $("#A2_investigation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請先回答 問題探索4 的問題</span>'})
    }
}

function A2_operation5() {
    currentStage = "A2_operation5";
    loadApplet("ggbApplet02j", ggb_JDM_IEEA_01_A2j);
}

function A2_operation5_done(objName) {
    var api = applet.getAppletObject();
    let numRouletteDResults = api.getValue(objName);
    let numAutoSpinRouletteD = api.getValue("numAutoSpinRouletteD");
    if (numAutoSpinRouletteD > 0 ){
        if (numAutoSpinRouletteD > 500 && numRouletteDResults == numAutoSpinRouletteD) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數超過500次了,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteD < 500 && numRouletteDResults == numAutoSpinRouletteD) {
            Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height: 2;">你設定轉動的次數不滿500次喔,<br>請清除轉動結果後再重新操作一次吧!</span>'})
        } else if (numAutoSpinRouletteD == 500 && numRouletteDResults == numAutoSpinRouletteD){
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜完成實驗操作5</span>'}).then((result) => {
                $("#A2_operation5_done").css({"opacity": "1"});
                $("#A2_operation5_next").removeClass("d-none");
                $("#A2_operation5_link img").css({"opacity": "1"});
            })
        } else {}
    } else {}
}

function A2_operation5_link() {
    Swal.fire({showConfirmButton: true, confirmButtonText: '準備好了', html: '<span style="font-size: 24px; line-height: 2;">讓我們來實際轉動500次【轉盤D】,<br>看看黃色及藍色分別會出現幾次?<br>準備好了嗎?</span>'})
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("numSpinedRouletteD");
    api.evalCommand("RunClickScript(btnReset)");
    api.evalCommand("SetValue(numStep, 4)");
    api.registerObjectUpdateListener("numSpinedRouletteD", "A2_operation5_done");
}

function A2_observation5() {
    currentStage = "A2_observation5";
    loadApplet("ggbApplet02j", ggb_JDM_IEEA_01_A2j);
}

var investigation6RouletteD_B = 0;

function A2_observation5_link() {
    var api = applet.getAppletObject();
    api.evalCommand("SetVisibleInView(picClearResultsRouletteA, 1, false)");
    var numRouletteD_B = api.getValue("numRouletteD_B");
    investigation6RouletteD_B = numRouletteD_B;
    var numRouletteD_Y = api.getValue("numRouletteD_Y");
    var numSpinedRouletteD = api.getValue("numSpinedRouletteD");
    var ratioRouletteD_B = numRound(numRouletteD_B/numSpinedRouletteD,2);
    var ratioRouletteD_Y = numRound(numRouletteD_Y/numSpinedRouletteD,2);
    if(numRouletteD_B==250) {
        listRF1 = [240, 250, 260];
        listRF2 = [0.48, 0.5, 0.52];
    } else {
        listRF1 = [250, numRouletteD_B, numRouletteD_Y];
        listRF2 = [0.5, ratioRouletteD_B, ratioRouletteD_Y];
    }

    listRF1.sort(function(a, b) {
        return a - b;
    });
    listRF2.sort(function(a, b) {
        return a - b;
    });

    function createOption() {
        $("#A2_observation5_input1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation5_input1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation5_input1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation5_input1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation5_input1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation5_input1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        $("#A2_observation5_input1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF1[0], { throwOnError: false }));
        $("#A2_observation5_input1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF1[1], { throwOnError: false }));
        $("#A2_observation5_input1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF1[2], { throwOnError: false }));
        $("#A2_observation5_input1_ans4").next().find("a").eq(0).html(katex.renderToString("" + listRF2[0], { throwOnError: false }));
        $("#A2_observation5_input1_ans4").next().find("a").eq(1).html(katex.renderToString("" + listRF2[1], { throwOnError: false }));
        $("#A2_observation5_input1_ans4").next().find("a").eq(2).html(katex.renderToString("" + listRF2[2], { throwOnError: false }));
        
        $("#A2_observation5_input1_ans1").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation5_input1_ans1").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation5_input1_ans1").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation5_input1_ans2").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation5_input1_ans2").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation5_input1_ans2").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });

        $("#A2_observation5_input1_ans3").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[0]);
        });
        $("#A2_observation5_input1_ans3").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[1]);
        });
        $("#A2_observation5_input1_ans3").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF1[2]);
        });

        $("#A2_observation5_input1_ans4").next().find("a").eq(0).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[0]);
        });
        $("#A2_observation5_input1_ans4").next().find("a").eq(1).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[1]);
        });
        $("#A2_observation5_input1_ans4").next().find("a").eq(2).click(function() {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val(listRF2[2]);
        });
    }
    createOption();
}

function A2_observation5_check() {
    var api = applet.getAppletObject();
    var numRouletteD_B = api.getValue("numRouletteD_B");
    var numRouletteD_Y = api.getValue("numRouletteD_Y");
    var numSpinedRouletteD = api.getValue("numSpinedRouletteD");
    var ratioRouletteD_B = numRound(numRouletteD_B/numSpinedRouletteD,2);
    var ratioRouletteD_Y = numRound(numRouletteD_Y/numSpinedRouletteD,2);
    var A2_observation5_input1_usrans1 = $("#A2_observation5_input1_ans1").val();
    var A2_observation5_input1_usrans2 = $("#A2_observation5_input1_ans2").val();
    var A2_observation5_input1_usrans3 = $("#A2_observation5_input1_ans3").val();
    var A2_observation5_input1_usrans4 = $("#A2_observation5_input1_ans4").val();
    var input1_usrans1_check = (A2_observation5_input1_usrans1 == numRouletteD_Y);
    var input1_usrans2_check = (A2_observation5_input1_usrans3 == numRouletteD_B);
    var input1_usrans3_check = (A2_observation5_input1_usrans2 == ratioRouletteD_Y);
    var input1_usrans4_check = (A2_observation5_input1_usrans4 == ratioRouletteD_B);
    if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">恭喜完成觀察記錄 5</span>'}).then((result) => {
            $("#A2_observation5_confirm").hide();
            $("#A2_observation5_done").css({"opacity": "1"});
            $("#A2_observation5_next").removeClass("d-none");
            $("#A2_observation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="line-height: 2; font-size: 24px;">請對照左方的圖表數據</span>'})
    }
}

function A2_investigation5() {
    currentStage = "A2_investigation5";
    loadApplet("ggbApplet02j", ggb_JDM_IEEA_01_A2j);
}

function A2_investigation5_link() {
    var api = applet.getAppletObject();
    var A2_investigation5_record1 = api.getValue("numRouletteD_Y");
    var A2_investigation5_record3 = api.getValue("numRouletteD_B");
    var A2_investigation5_record2 = numRound(A2_investigation5_record1/(A2_investigation5_record1+A2_investigation5_record3), 2);
    var A2_investigation5_record4 = numRound(A2_investigation5_record3/(A2_investigation5_record1+A2_investigation5_record3), 2);

    $("#A2_investigation5_record1").html(A2_investigation5_record1);
    $("#A2_investigation5_record2").html(A2_investigation5_record2);
    $("#A2_investigation5_record3").html(A2_investigation5_record3);
    $("#A2_investigation5_record4").html(A2_investigation5_record4);
}

function A2_investigation5_confirm() {
    var investigation5_usrAns = $("input[name=A2_investigation5_input1]:checked").val();
    if (investigation5_usrAns == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">恭喜你答對了</span>'}).then((result) => {
            $("#A2_investigation5_confirm").hide();
            $("#A2_investigation5_done").css({"opacity": "1"});
            $("#A2_investigation5_next").removeClass("d-none");
            $("#A2_investigation5_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請參考一下實驗的數據(如上表)，再想想</span>'})
    }
}

function A2_investigation6() {
    currentStage = "A2_investigation6";
    loadApplet("ggbApplet02k", ggb_JDM_IEEA_01_A2k);
}

function A2_investigation6_link() {
    var api = applet.getAppletObject();
    api.setValue("numRouletteA_B", investigation3RouletteA_B);
    api.setValue("numRouletteA_Y", 500-investigation3RouletteA_B);
    api.setValue("numRouletteB_B", investigation3RouletteB_B);
    api.setValue("numRouletteB_Y", 500-investigation3RouletteB_B);
    api.setValue("numRouletteC_B", investigation3RouletteC_B);
    api.setValue("numRouletteC_Y", 500-investigation3RouletteC_B);
    api.setValue("numRouletteD_B", investigation6RouletteD_B);
    api.setValue("numRouletteD_Y", 500-investigation6RouletteD_B);
}

function A2_investigation6_confirm() {
    if ($("input[name=A2_investigation6_input1]:checked").val() == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">叮咚叮咚, 答對了!</span>'})
        $("#A2_investigation6_question2").removeClass("d-none");
        $("#A2_investigation6_question2").next().removeClass("d-none");
        $("#A2_investigation6_confirm").hide();
        $("#A2_investigation6_confirm2").removeClass("d-none");
    } else if ($("input[name=A2_investigation6_input1]:checked").val() == 2) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">如果不知道所有結果, 如何算出機率?<br>再想想!</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你還沒回答喔</span>'})
    }
}

function A2_investigation6_confirm2() {
    if ($("input[name=A2_investigation6_input2]:checked").val() == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">叮咚叮咚, 答對了!</span>'})
        $("#A2_investigation6_question3").removeClass("d-none");
        $("#A2_investigation6_question3").next().removeClass("d-none");
        $("#A2_investigation6_confirm2").addClass("d-none");
        $("#A2_investigation6_confirm3").removeClass("d-none");
    } else if ($("input[name=A2_investigation6_input2]:checked").val() == 2) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">如果發生的機會都不相同, 如何算出機率?<br>再想想!</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你還沒回答喔</span>'})
    }
}

function A2_investigation6_confirm3() {
    if ($("input[name=A2_investigation6_input3]:checked").val() == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">叮咚叮咚, 答對了!</span>'})
        $("#A2_investigation6_question4").removeClass("d-none");
        $("#A2_investigation6_question4").next().removeClass("d-none");
        $("#A2_investigation6_confirm3").addClass("d-none");
        $("#A2_investigation6_confirm4").removeClass("d-none");
    } else if ($("input[name=A2_investigation6_input3]:checked").val() == 2) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">這就是機率的定義哦!</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你還沒回答喔</span>'})
    }
}

function A2_investigation6_confirm4() {
    if ($("input[name=A2_investigation6_input4]:checked").val() == 2) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">叮咚叮咚, 答對了!</span>'})
        $("#A2_investigation6_question5").removeClass("d-none");
        $("#A2_investigation6_question5").next().removeClass("d-none");
        $("#A2_investigation6_confirm4").addClass("d-none");
        $("#A2_investigation6_confirm5").removeClass("d-none");
    } else if ($("input[name=A2_investigation6_input4]:checked").val() == 1) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請觀察一下左欄的資料, 再想想!</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你還沒回答喔</span>'})
    }
}

function A2_investigation6_confirm5() {
    if ($("input[name=A2_investigation6_input5]:checked").val() == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">叮咚叮咚, 答對了!</span>'})
        $("#A2_investigation6_confirm5").addClass("d-none");
        $("#A2_investigation6_done").css({"opacity": "1"});
        $("#A2_investigation6_next").removeClass("d-none");
        $("#A2_investigation6_link img").css({"opacity": "1"});
    } else if ($("input[name=A2_investigation6_input5]:checked").val() == 2) {
        Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">轉10次和500次, 哪一個會比較接近呢?</span>'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">你還沒回答喔</span>'})
    }
}