function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("活動2：波浪疊疊樂");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_11A_2_2_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("sliderHLNotation");
    api.unregisterObjectUpdateListener("sliderReplaceVariables");
    api.unregisterObjectUpdateListener("sliderPlotFunctionG");
    api.unregisterObjectUpdateListener("sliderShowCases");
    api.unregisterObjectUpdateListener("sliderShowMax");
    api.unregisterObjectUpdateListener("sliderShowMin");
    api.unregisterObjectUpdateListener("num_a");
    api.unregisterObjectUpdateListener("num_b");
    api.unregisterUpdateListener(A2_operation3_check);
}

var num_a=0, num_b=0;

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbAppletA2_1", ggb_F_11A_2_2_A2_1);
}

function A2_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("num_a", num_a);
    api.setValue("num_b", num_b);
    api.registerObjectUpdateListener("sliderHLNotation", A2_operation1_check);
    api.registerObjectUpdateListener("num_a", A2_operation1_check);
    api.registerObjectUpdateListener("num_b", A2_operation1_check);
}

function A2_operation1_check() {
    var api = applet.getAppletObject();
    let condition = api.getValue("sliderHLNotation");
    num_a = api.getValue("num_a");
    num_b = api.getValue("num_b");
    if (condition==12) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作1<br>點擊【前往實驗操作2】繼續下去"
        });
        $("#A2_operation1_next").removeClass("d-none");
    }
}

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbAppletA2_2", ggb_F_11A_2_2_A2_2);
}

function A2_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("num_a", num_a);
    api.setValue("num_b", num_b);
    api.registerObjectUpdateListener("sliderReplaceVariables", A2_operation2_check);
    api.registerObjectUpdateListener("sliderPlotFunctionG", A2_operation2_check);
    api.registerObjectUpdateListener("sliderShowCases", A2_operation2_check);
    api.registerObjectUpdateListener("sliderShowMax", A2_operation2_check);
    api.registerObjectUpdateListener("sliderShowMin", A2_operation2_check);
    api.registerObjectUpdateListener("num_a", A2_operation2_check);
    api.registerObjectUpdateListener("num_b", A2_operation2_check);
}

function A2_operation2_check() {
    var api = applet.getAppletObject();
    let sliderReplaceVariables = api.getValue("sliderReplaceVariables");
    let sliderPlotFunctionG = api.getValue("sliderPlotFunctionG");
    let sliderShowCases = api.getValue("sliderShowCases");
    let sliderShowMax = api.getValue("sliderShowMax");
    let sliderShowMin = api.getValue("sliderShowMin");
    num_a = api.getValue("num_a");
    num_b = api.getValue("num_b");
    if (sliderReplaceVariables==1.9 && sliderPlotFunctionG==1 && sliderShowCases==2 && sliderShowMax==1 && sliderShowMin==1) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作2<br>點擊【前往實驗操作3】繼續下去"
        });
        $("#A2_operation2_next").removeClass("d-none");
    }
}

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbAppletA2_3", ggb_F_11A_2_2_A2_3);
}

function A2_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("num_a", num_a);
    api.setValue("num_b", num_b);
    api.registerUpdateListener(A2_operation3_check);
}

function A2_operation3_check() {
    var api = applet.getAppletObject();
    let t2 = api.getVisible("text2", 1);
    let t3 = api.getVisible("text3", 1);
    let t4 = api.getVisible("text4", 1);
    let t5 = api.getVisible("text5", 1);
    if (t2 && t3 && t4 && t5) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作3<br>點擊【前往觀察記錄1】繼續下去"
        });
        $("#A2_operation3_next").removeClass("d-none");
    }
}

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbAppletA2_3", ggb_F_11A_2_2_A2_3);
}

function A2_observation1_link() {
    removeListener();
}

function A2_observation1_check() {
    if($('input[name=A2_observation1_input1]:checked').val() == "1") {
        $('input[name=A2_observation1_input1]').parent().css("background-color", "initial");
        $('input[name=A2_observation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_observation1_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_observation1_input1]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A2_observation1_input1]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成觀察記錄1<br>點擊【前往問題探索1】繼續下去"
        });
        $("#A2_observation1_confirm").addClass("d-none");
        $("#A2_observation1_next").removeClass("d-none");
        $("#A2_observation1_done").css({"opacity": "1"});
        $("#A2_observation1_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbAppletA2_3", ggb_F_11A_2_2_A2_3);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    if($('input[name=A2_investigation1_input1]:checked').val() == "1") {
        $('input[name=A2_investigation1_input1]').parent().css("background-color", "initial");
        $('input[name=A2_investigation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_investigation1_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_investigation1_input1]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A2_investigation1_input2]:checked').val() == "2") {
        $('input[name=A2_investigation1_input2]').parent().css("background-color", "initial");
        $('input[name=A2_investigation1_input2]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_investigation1_input2]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_investigation1_input2]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A2_investigation1_input3]:checked').val() == "1") {
        $('input[name=A2_investigation1_input3]').parent().css("background-color", "initial");
        $('input[name=A2_investigation1_input3]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_investigation1_input3]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_investigation1_input3]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A2_investigation1_input4]:checked').val() == "2") {
        $('input[name=A2_investigation1_input4]').parent().css("background-color", "initial");
        $('input[name=A2_investigation1_input4]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_investigation1_input4]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_investigation1_input4]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A2_investigation1_input1]:checked').val() == "1" && $('input[name=A2_investigation1_input2]:checked').val() == "2" && $('input[name=A2_investigation1_input3]:checked').val() == "1" && $('input[name=A2_investigation1_input4]:checked').val() == "2") {
        Toast.fire({
            icon: "success",
            title: "答對了! 恭喜完成所有活動了~"
        });
        $("#A2_investigation1_confirm").addClass("d-none");
        $("#A2_investigation1_next").removeClass("d-none");
        $("#A2_investigation1_done").css({"opacity": "1"});
        $("#A2_investigation1_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}



// function A1_operation1a_link() {
//     var api = applet.getAppletObject();
//     api.evalCommand("RunClickScript(btnReset)");
//     setTimeout(() => {api.evalCommand("StartAnimation(sliderDemoIntro1, true)");}, 2000);
// }

// var operation1a_UsrAns = 0;

// function A1_operation1a_confirm() {
//     var api = applet.getAppletObject();
//     operation1a_UsrAns = $("input[name=A1_operation1a_input1]:checked").val();
//     api.evalCommand("StartAnimation(sliderDemoIntro1, false)");
//     api.evalCommand("StartAnimation(sliderDemoBagA, false)");
//     api.evalCommand("StartAnimation(sliderDemoBagB, false)");
//     api.evalCommand("SetValue(sliderDemoIntro1, 1)");
//     api.evalCommand("SetValue(sliderDemoBagA, 3.5)");
//     api.evalCommand("SetValue(sliderDemoBagB, 3.5)");
//     if (operation1a_UsrAns != undefined) {
//         Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
//             $("#A1_operation1a_confirm").hide();
//             $("#A1_operation1a_done").css({"opacity": "1"});
//             $("#A1_operation1a_next").removeClass("d-none");
//             $("#A1_operation1a_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px;">請先回答 實驗操作1A 的問題</span>'})
//     }
// }

// function A1_operation1() {
//     currentStage = "A1_operation1";
//     if (operation1a_UsrAns == 1) {
//         loadApplet("ggbApplet01b", ggb_JDM_IEEA_01_A1b);
//     } else {
//         loadApplet("ggbApplet01c", ggb_JDM_IEEA_01_A1c);
//     }
    
// }

// var operation1Drawed = false;

// function A1_operation1_done(objName) {
//     var api = applet.getAppletObject();
//     let tmp = api.getValue(objName);
//     let numDrawedPens = api.getValue("numDrawedPens");
//     if (tmp == 1.2 && operation1Drawed == false) {
//         operation1Drawed = true;
//         Swal.fire({icon: 'info', html: '<span style="line-height: 2; font-size: 24px;">恭喜你順利從袋中抽出1支筆了,<br>接下來請完成剩餘4次抽取動作.</span>'})
//     } else if (numDrawedPens == 5 && tmp == 1.2) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '恭喜完成實驗操作1B'}).then((result) => {
//             $("#A1_operation1_done").css({"opacity": "1"});
//             $("#A1_operation1_next").removeClass("d-none");
//             $("#A1_operation1_link img").css({"opacity": "1"});
//         }) 
//     } else {}
// }

// function A1_operation1_link() {
//     Swal.fire({html: '<span style="font-size: 24px; line-height: 2;">讓我們來實際抽5次, 看看結果會是如何吧!<br>你準備好了嗎?</span>', confirmButtonText: '準備好了'})   
//     if(operation1a_UsrAns == 1) {
//         $("#A1_operation1 > .worksheetsContents > ol").html("<li>請從甲袋中點選你要抽取的筆 5 次。</li>");
//     } else {
//         $("#A1_operation1 > .worksheetsContents > ol").html("<li>請從乙袋中點選你要抽取的筆 5 次。</li>");
//     }
//     var api = applet.getAppletObject();
//     api.registerObjectUpdateListener("sliderDemoPen1Selected", "A1_operation1_done");
//     api.registerObjectUpdateListener("sliderDemoPen2Selected", "A1_operation1_done");
// }

// function A1_observation1() {
//     currentStage = "A1_observation1";
//     if (operation1a_UsrAns == 1) {
//         loadApplet("ggbApplet01b", ggb_JDM_IEEA_01_A1b);
//     } else {
//         loadApplet("ggbApplet01c", ggb_JDM_IEEA_01_A1c);
//     }
//     $(".dropdown-menu li a").click(function(){
//         $(this).parent().parent().prev().html($(this).html());
//         $(this).parent().parent().prev().val($(this).parent().index()+1);
//     });
// }

// function A1_observation1_link() {
//     var api = applet.getAppletObject();
//     api.unregisterObjectUpdateListener("sliderDemoPen1Selected");
//     api.unregisterObjectUpdateListener("sliderDemoPen2Selected");
// }

// function A1_observation1_check() {
//     var api = applet.getAppletObject();
//     var A1_observation1_input1_check1 = ($("#A1_observation1_input1_ans1").val() == api.getValue("listResultsBag(1)"));
//     var A1_observation1_input1_check2 = ($("#A1_observation1_input1_ans2").val() == api.getValue("listResultsBag(2)"));
//     var A1_observation1_input1_check3 = ($("#A1_observation1_input1_ans3").val() == api.getValue("listResultsBag(3)"));
//     var A1_observation1_input1_check4 = ($("#A1_observation1_input1_ans4").val() == api.getValue("listResultsBag(4)"));
//     var A1_observation1_input1_check5 = ($("#A1_observation1_input1_ans5").val() == api.getValue("listResultsBag(5)"));
//     console.log($("#A1_observation1_input1_ans1").val() == api.getValue("listResultsBag(1)"));
//     console.log($("#A1_observation1_input1_ans2").val() == api.getValue("listResultsBag(2)"));
//     console.log($("#A1_observation1_input1_ans3").val() == api.getValue("listResultsBag(3)"));
//     console.log($("#A1_observation1_input1_ans4").val() == api.getValue("listResultsBag(4)"));
//     console.log($("#A1_observation1_input1_ans5").val() == api.getValue("listResultsBag(5)"));
    
//     if (A1_observation1_input1_check1 && A1_observation1_input1_check2 && A1_observation1_input1_check3 && A1_observation1_input1_check4 && A1_observation1_input1_check5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size:24px; line-height:2;">恭喜完成觀察記錄1</span>'}).then((result) => {
//             $("#A1_observation1_confirm").hide();
//             $("#A1_observation1_done").css({"opacity": "1"});
//             $("#A1_observation1_next").removeClass("d-none");
//             $("#A1_observation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height: 2;">請對照左方的抽取結果</span>'})
//     }
// }

// function A1_investigation1() {
//     currentStage = "A1_investigation1";
//     loadApplet("ggbApplet01d", ggb_JDM_IEEA_01_A1d);
// }

// function A1_investigation1_link() {
//     if(operation1a_UsrAns==1) {
//         $("#A1_investigation1_selection").html("裝有<span style='color: #0000ff; font-weight: bolder;'>2支藍筆</span>的甲袋中");
//     } else {
//         $("#A1_investigation1_selection").html("裝有<span style='color: #0000ff; font-weight: bolder;'>1支藍筆</span>與<span style='color: #ff0000; font-weight: bolder;'>1支紅筆</span>的乙袋中");
//     }
//     $("#A1_investigation1_confirm").show();
//     $("#A1_investigation1_next").addClass("d-none");
// }

// function A1_investigation1_confirm() {
//     var A1_investigation1_input_usrans = $("input[name=A1_investigation1_input1]:checked").val();
//     if (A1_investigation1_input_usrans==1) {
//         Swal.fire({icon: 'success', showConfirmButton: true, html:'<span style="font-size:24px; line-height:2;">恭喜你答對了! <br>甲袋都是<span style="color: #0000ff; font-weight: bolder;">藍筆</span>, 所以怎麼抽都會抽到<span style="color: #0000ff; font-weight: bolder;">藍筆</span></span>.'}).then((result) => {
//             $("#A1_investigation1_confirm").hide();
//             $("#A1_investigation1_done").css({"opacity": "1"});
//             $("#A1_investigation1_next").removeClass("d-none");
//             $("#A1_investigation1_link img").css({"opacity": "1"});
//         })
//     } else if (A1_investigation1_input_usrans==undefined) {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html:'<span style="font-size:24px;line-height:2;">請先回答問題探索1的問題</span>'})
//     } else {
//         Swal.fire({icon: 'info', showConfirmButton: true, html:'<span style="font-size:24px;line-height:2;">乙袋有可能會抽到<span style="color: #ff0000; font-weight: bolder;">紅筆</span>喔,<br>你要不要再想想看?</span>'})
//     }
// }

// function A1_operation2a() {
//     currentStage = "A1_operation2a";
//     loadApplet("ggbApplet01e", ggb_JDM_IEEA_01_A1e);
// }

// function A1_operation2a_link() {
//     var api = applet.getAppletObject();
//     api.evalCommand("RunClickScript(btnReset)");
//     setTimeout(() => {
//         api.evalCommand("StartAnimation(sliderDemoBagA,true)");
//         api.evalCommand("StartAnimation(sliderDemoBagB,true)");
//     }, "2000");
//     $("#A1_operation2a_confirm").show();
//     $("#A1_operation2a_next").addClass("d-none");
// }

// var operation2a_UsrAns = 0;

// function A1_operation2a_confirm() {
//     var api = applet.getAppletObject();
//     operation2a_ans = $("input[name=A1_operation2a_input1]:checked").val();
//     api.evalCommand("StartAnimation(sliderDemoBagA, false)");
//     api.evalCommand("StartAnimation(sliderDemoBagB, false)");
//     api.evalCommand("SetValue(sliderDemoBagA, 3.5)");
//     api.evalCommand("SetValue(sliderDemoBagB, 3.5)");
//     if(operation2a_UsrAns!=undefined) {
//         Swal.fire({showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">請按學習單中的 <img src="./images/content/JDM_IEEA_01/btnNext.png" alt="下一步"> 繼續做下去</span>'}).then((result) => {
//             $("#A1_operation2a_confirm").hide();
//             $("#A1_operation2a_done").css({"opacity": "1"});
//             $("#A1_operation2a_next").removeClass("d-none");
//             $("#A1_operation2a_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">請先回答實驗操作2A的問題</span>'})
//     }
// }

// function A1_operation2() {
//     currentStage = "A1_operation2";
//     if (operation2a_UsrAns == 1) {
//         loadApplet("ggbApplet01b", ggb_JDM_IEEA_01_A1b);
//     } else {
//         loadApplet("ggbApplet01c", ggb_JDM_IEEA_01_A1c);
//     }
// }

// var operation2Drawed = false;

// function A1_operation2_done(objName) {
//     var api = applet.getAppletObject();
//     let tmp = api.getValue(objName);
//     let numDrawedPens = api.getValue("numDrawedPens");
//     if (tmp == 1.2 && operation1Drawed == false) {
//         operation1Drawed = true;
//         Swal.fire({icon: 'info', html: '<span style="font-size: 24px; line-height:2;">恭喜你順利從袋中抽出1支筆了,<br>接下來請完成剩餘4次抽取動作.</span>'})
//     } else if (numDrawedPens == 5 && tmp == 1.2) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">恭喜完成實驗操作2B</span>'}).then((result) => {
//             $("#A1_operation2_done").css({"opacity": "1"});
//             $("#A1_operation2_next").removeClass("d-none");
//             $("#A1_operation2_link img").css({"opacity": "1"});
//         }) 
//     } else {}
// }

// function A1_operation2_link() {
//     Swal.fire({html: '<span style="font-size: 24px; line-height:2;">讓我們來實際抽5次, 看看結果會是如何吧!<br>你準備好了嗎?</span>', confirmButtonText: '準備好了'})
//     if(operation2a_UsrAns == 1) {
//         $("#A1_operation2 > .worksheetsContents > ol").html("<li>請從甲袋中點選你要抽取的筆 5 次。</li>");
//     } else {
//         $("#A1_operation2 > .worksheetsContents > ol").html("<li>請從乙袋中點選你要抽取的筆 5 次。</li>");
//     }

//     var api = applet.getAppletObject();
//     api.registerObjectUpdateListener("sliderDemoPen1Selected", "A1_operation2_done");
//     api.registerObjectUpdateListener("sliderDemoPen2Selected", "A1_operation2_done");
// }

// function A1_observation2() {
//     currentStage = "A1_observation2";
//     if (operation2a_UsrAns == 1) {
//         loadApplet("ggbApplet01b", ggb_JDM_IEEA_01_A1b);
//     } else {
//         loadApplet("ggbApplet01c", ggb_JDM_IEEA_01_A1c);
//     }
//     $(".dropdown-menu li a").click(function(){
//         $(this).parent().parent().prev().html($(this).html());
//         $(this).parent().parent().prev().val($(this).parent().index()+1);
//     });
// }

// function A1_observation2_link() {
//     var api = applet.getAppletObject();
//     api.unregisterObjectUpdateListener("sliderDemoPen1Selected");
//     api.unregisterObjectUpdateListener("sliderDemoPen2Selected");
// }

// function A1_observation2_check() {
//     var api = applet.getAppletObject();
//     var A1_observation2_input1_check1 = ($("#A1_observation2_input1_ans1").val() == api.getValue("listResultsBag(1)"));
//     var A1_observation2_input1_check2 = ($("#A1_observation2_input1_ans2").val() == api.getValue("listResultsBag(2)"));
//     var A1_observation2_input1_check3 = ($("#A1_observation2_input1_ans3").val() == api.getValue("listResultsBag(3)"));
//     var A1_observation2_input1_check4 = ($("#A1_observation2_input1_ans4").val() == api.getValue("listResultsBag(4)"));
//     var A1_observation2_input1_check5 = ($("#A1_observation2_input1_ans5").val() == api.getValue("listResultsBag(5)"));
//     console.log($("#A1_observation2_input1_ans1").val() == api.getValue("listResultsBag(1)"));
//     console.log($("#A1_observation2_input1_ans2").val() == api.getValue("listResultsBag(2)"));
//     console.log($("#A1_observation2_input1_ans3").val() == api.getValue("listResultsBag(3)"));
//     console.log($("#A1_observation2_input1_ans4").val() == api.getValue("listResultsBag(4)"));
//     console.log($("#A1_observation2_input1_ans5").val() == api.getValue("listResultsBag(5)"));

    
//     if (A1_observation2_input1_check1 && A1_observation2_input1_check2 && A1_observation2_input1_check3 && A1_observation2_input1_check4 && A1_observation2_input1_check5) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">恭喜完成觀察記錄2</sapn>'}).then((result) => {
//             $("#A1_observation2_confirm").hide();
//             $("#A1_observation2_done").css({"opacity": "1"});
//             $("#A1_observation2_next").removeClass("d-none");
//             $("#A1_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">請對照左方的抽取結果</span>'})
//     }
// }

// function A1_investigation2() {
//     currentStage = "A1_investigation2";
//     loadApplet("ggbApplet01f", ggb_JDM_IEEA_01_A1f);
// }

// function A1_investigation2_link() {
//     if(operation2a_UsrAns==1) {
//         $("#A1_investigation2_selection").html("裝有<span style='color: #0000ff; font-weight: bolder;'>2支藍筆</span>的甲袋中");
//     } else {
//         $("#A1_investigation2_selection").html("裝有<span style='color: #0000ff; font-weight: bolder;'>1支藍筆</span>與<span style='color: #ff0000; font-weight: bolder;'>1支紅筆</span>的乙袋中");
//     }
//     $("#A1_investigation2_confirm").show();
//     $("#A1_investigation2_next").addClass("d-none");
// }

// function A1_investigation2_confirm() {
//     var A1_investigation2_input_usrans = $("input[name=A1_investigation2_input1]:checked").val();
//     if (A1_investigation2_input_usrans==2) {
//         Swal.fire({icon: 'success', showConfirmButton: true, html:'<span style="font-size: 24px; line-height:2;">恭喜你答對了!<br>只有乙袋裝<span style="color: #ff0000; font-weight: bolder;">紅筆</span>,<br>所以選乙袋才有機會抽到<span style="color: #ff0000; font-weight: bolder;">紅筆</span></span>.'}).then((result) => {
//             $("#A1_investigation2_confirm").hide();
//             $("#A1_investigation2_done").css({"opacity": "1"});
//             $("#A1_investigation2_next").removeClass("d-none");
//             $("#A1_investigation2_link img").css({"opacity": "1"});
//         })
//     } else if (A1_investigation2_input_usrans==undefined){
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html:'<span style="font-size: 24px; line-height:2;">請先回答 問題探索2 的問題.</span>'})
//     } else {
//         Swal.fire({icon: 'info', showConfirmButton: true, html:'<span style="font-size: 24px; line-height:2;">甲袋裝2支<span style="color: #0000ff; font-weight: bolder;">藍筆</span>, 會有機會抽到<span style="color: #ff0000; font-weight: bolder;">紅筆</span>嗎?<br>你要不要再想想看</span>'})
//     }
// }

// function A1_investigation3() {
//     currentStage = "A1_investigation3";
//     loadApplet("ggbApplet01g", ggb_JDM_IEEA_01_A1g);
// }

// function A1_investigation3_link() {
//     var api = applet.getAppletObject();
//     $("#A1_investigation3_input1_option1").click(() => {
//         api.evalCommand("SetVisibleInView(q1, 1, true)");
//         api.evalCommand("SetVisibleInView(q2, 1, false)");
//         api.evalCommand("SetVisibleInView(q3, 1, false)");
//         console.log("test1");
//     });
//     $("#A1_investigation3_input1_option2").click(() => {
//         api.evalCommand("SetVisibleInView(q2, 1, true)");
//         api.evalCommand("SetVisibleInView(q1, 1, false)");
//         api.evalCommand("SetVisibleInView(q3, 1, false)");
//     });
//     $("#A1_investigation3_input1_option3").click(() => {
//         api.evalCommand("SetVisibleInView(q3, 1, true)");
//         api.evalCommand("SetVisibleInView(q2, 1, false)");
//         api.evalCommand("SetVisibleInView(q1, 1, false)");
//     });
// }

// function A1_investigation3_confirm() {
//     var A1_investigation3_input_usrans = $("input[name=A1_investigation3_input1]:checked").val();
//     if (A1_investigation3_input_usrans == undefined) {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">請先回答問題探索3的問題</span>'})
//     } else if (A1_investigation3_input_usrans == 1) {
//         Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height:2;">袋子中沒有紅筆哦，再想想看</span>'})
//     } else if (A1_investigation3_input_usrans == 2) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, html: '<span style="font-size: 24px; line-height:2;">恭喜你答對了!</span>'}).then((result) => {
//             $("#A1_investigation3_confirm").hide();
//             $("#A1_investigation3_done").css({"opacity": "1"});
//             $("#A1_investigation3_next").removeClass("d-none");
//             $("#A1_investigation3_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height:2;">手一摸就可以確定哪一枝是紅筆哦，再想想看</span>'})
//     }
// }

// function A1_investigation3_next() {
//     Swal.fire({icon: 'info', showConfirmButton: true, html: '<span style="font-size: 24px; line-height:2;">告訴你一個秘密：<br>先用數學方法分析，可以提高<span style="color: #ff0000; font-weight: bolder;">抽中的機會</span>.<br>讓我們來一探究竟吧！</span>', confirmButtonText: '前往活動2'}).then((result) => {
//         showA2();
//     })
// }