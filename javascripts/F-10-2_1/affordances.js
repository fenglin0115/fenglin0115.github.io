var currentStage = "cover";
params.ggbBase64 = ggb_F_10_2_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

// function splitBarSetting(a, b) {
//     $(".draggerParentHorizontal").css("width", a + "px");
//     // $(".draggerParentHorizontal").css("left", "600px");
//     $(".splitPaneDragger").css("width", "1px");
//     // $(".dockPanelParent").eq(0).css("width", "600px");
//     $(".dockPanelParent").eq(1).css("inset", "0px 0px 0px " + b + "px");
// }

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("A");
    api.unregisterObjectUpdateListener("a");
    api.unregisterObjectUpdateListener("b");
    api.unregisterObjectUpdateListener("p");
    api.unregisterObjectUpdateListener("e");
    api.unregisterObjectUpdateListener("t");
    api.unregisterObjectUpdateListener("o");
    api.unregisterObjectUpdateListener("α");
}

// function loadApplet(id, ggbBase64) {
//     // if (id != "ggbApplet01" && params.id == "ggbApplet01") {
//     //     ggbApplet01Tmp = api.getBase64();
//     // }
    
//     if (params.id != id) {
//         params.id = id;
//         params.ggbBase64 = ggbBase64;
//         applet = new GGBApplet(params, true);
//         applet.inject('ggb-element');
//     } else {
//         switch (currentStage) {
//             case "A1_operation1":
//                 A1_operation1_link();
//                 break;
//             case "A1_observation1":
//                 A1_observation1_link();
//                 break;
//             case "A1_investigation1":
//                 A1_investigation1_link();
//                 break;
//             case "A1_operation2":
//                 A1_operation2_link();
//                 break;
//             case "A1_observation2":
//                 A1_observation2_link();
//                 break;
//             case "A1_operation3":
//                 A1_operation3_link();
//                 break;
//             case "A1_observation3":
//                 A1_observation3_link();
//                 break;
//             case "A1_investigation2":
//                 A1_investigation2_link();
//                 break;
//             case "A1_operation4":
//                 A1_operation4_link();
//                 break;
//             case "A1_observation4":
//                 A1_observation4_link();
//                 break;
//             case "A1_investigation3":
//                 A1_investigation3_link();
//                 break;
//             case "A1_investigation4":
//                 A1_investigation4_link();
//                 break;    
//             case "A2_operation1":
//                 A2_operation1_link();
//                 break;
//             case "A2_observation1":
//                 A2_observation1_link();
//                 break;
//             case "A2_observation2":
//                 A2_observation2_link();
//                 break;
//             case "A2_investigation1":
//                 A2_investigation1_link();
//                 break;
//             case "A2_operation2":
//                 A2_operation2_link();
//                 break;
//             case "A2_observation3":
//                 A2_observation3_link();
//                 break;
//             case "A2_observation4":
//                 A2_observation4_link();
//                 break;
//             case "A2_investigation2":
//                 A2_investigation2_link();
//                 break;
//             case "A2_investigation3":
//                 A2_investigation3_link();
//                 break;
//             case "A3_operation1":
//                 A3_operation1_link();
//                 break;
//             case "A3_investigation1":
//                 A3_investigation1_link();
//                 break;
//             case "A3_operation2":
//                 A3_operation2_link();
//                 break;
//             case "A3_observation1":
//                 A3_observation1_link();
//                 break;
//             case "A3_investigation2":
//                 A3_investigation2_link();
//                 break;
//             case "A3_operation3":
//                 A3_operation3_link();
//                 break;
//             case "A3_investigation3":
//                 A3_investigation3_link();
//                 break;
//             case "A3_operation4":
//                 A3_operation4_link();
//                 break;
//             case "A3_investigation4":
//                 A3_investigation4_link();
//                 break;
//             case "A3_operation5":
//                 A3_operation5_link();
//                 break;
//             case "A3_observation2":
//                 A3_observation2_link();
//                 break;
//             case "A3_investigation5":
//                 A3_investigation5_link();
//                 break;
//             default:
//                 break;
//         }
//     }
// }




// function ggbOnInit() {
//     hideLoading();
//     console.log(currentStage);
//     switch (currentStage) {
//         case "cover":
//             removeListener();
//             coverUtility();
//             break;
//         case "A1_operation1":
//             A1_operation1_link();
//             console.log("enter A1_operation1 switch");
//             break;
//         case "A1_observation1":
//             A1_observation1_link();
//             console.log("enter A1_observation1 switch");
//             break;
//         case "A1_investigation1":
//             A1_investigation1_link();
//             break;
//         case "A1_operation2":
//             A1_operation2_link();
//             console.log("enter A1_operation2 switch");
//             break;
//         case "A1_observation2":
//             A1_observation2_link();
//             console.log("enter A1_observation2 switch");
//             break;
//         case "A1_operation3":
//             A1_operation3_link();
//             console.log("enter A1_operation3 switch");
//             break;
//         case "A1_observation3":
//             A1_observation3_link();
//             console.log("enter A1_observation3 switch");
//             break;
//         case "A1_investigation2":
//             A1_investigation2_link();
//             break;
//         case "A1_operation4":
//             A1_operation4_link();
//             console.log("enter A1_operation4 switch");
//             break;
//         case "A1_observation4":
//             A1_observation4_link();
//             console.log("enter A1_observation4 switch");
//             break;
//         case "A1_investigation3":
//             A1_investigation3_link();
//             break;
//         case "A1_investigation4":
//             A1_investigation4_link();
//             break;
//         case "A2_operation1":
//             A2_operation1_link();
//             console.log("enter A2_operation1 switch");
//             break;
//         case "A2_observation1":
//             A2_observation1_link();
//             console.log("enter A2_observation1 switch");
//             break;
//         case "A2_observation2":
//             A2_observation2_link();
//             console.log("enter A2_observation2 switch");
//             break;
//         case "A2_investigation1":
//             A2_investigation1_link();
//             break;
//         case "A2_operation2":
//             A2_operation2_link();
//             console.log("enter A2_operation2 switch");
//             break;
//         case "A2_observation3":
//             A2_observation3_link();
//             console.log("enter A2_observation3 switch");
//             break;
//         case "A2_observation4":
//             A2_observation4_link();
//             console.log("enter A2_observation4 switch");
//             break;
//         case "A2_investigation2":
//             A2_investigation2_link();
//             break;
//         case "A2_investigation3":
//             A2_investigation3_link();
//             break;
//         case "A3_operation1":
//             A3_operation1_link();
//             console.log("enter A3_operation1 switch");
//             break;
//         case "A3_investigation1":
//             A3_investigation1_link();
//             break;
//         case "A3_operation2":
//             A3_operation2_link();
//             break;
//         case "A3_observation1":
//             A3_observation1_link();
//             break;
//         case "A3_investigation2":
//             A3_investigation2_link();
//             break;
//         case "A3_operation3":
//             A3_operation3_link();
//             break;
//         case "A3_investigation3":
//             A3_investigation3_link();
//             break;
//         case "A3_operation4":
//             A3_operation4_link();
//             break;
//         case "A3_investigation4":
//             A3_investigation4_link();
//             break;
//         case "A3_operation5":
//             A3_operation5_link();
//             break;
//         case "A3_observation2":
//             A3_observation2_link();
//             break;
//         case "A3_investigation5":
//             A3_investigation5_link();
//             break;
//         default:
//             removeListener();
//     }
// }

function coverUtility() {
    var api = applet.getAppletObject();
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
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-10-2(1) 活動1：" + katex.renderToString("y=ax^3", { throwOnError: false }) + " 的圖形特徵");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_10_2_1_A1;
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
    $(".title > span ").html("F-10-2(1) 活動2：" + katex.renderToString("y=ax^3+px", { throwOnError: false }) + " 的圖形特徵");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_10_2_1_A2;
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
    $(".title > span ").html("F-10-2(1) 活動3：" + katex.renderToString("y=ax^3+px", { throwOnError: false }) + " 的對稱中心");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_10_2_1_A3;
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
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("A", A1_operation1_check);
    api.registerObjectUpdateListener("b", A1_operation1_check);
    splitBarSetting(3, 665);
}

function A1_operation1_check() {
    var api =applet.getAppletObject();
    var a = api.getValue("a");
    var showTrajectoryP = api.getValue("c");
    var showGraph = api.getValue("b");
    var xcoordsA = api.getXcoord("A");
    if (xcoordsA ==3 && a > 0 && showTrajectoryP == true && showGraph == true) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
            $("#A1_operation1_done").css({"opacity": "1"});
            $("#A1_operation1_next").removeClass("d-none");
            $("#A1_operation1_link img").css({"opacity": "1"});
        })
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_observation1_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_observation1_check() {
    var api = applet.getAppletObject();
    var A1_observation1_input1_usrans = $('input[name=A1_observation1_input1]:checked').val();
    var A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
    var A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
    var A1_observation1_input1_correctAns = 1;
    var A1_observation1_input2_correctAns = api.getValue("a")*1*1*1;
    var A1_observation1_input3_correctAns = api.getValue("a")*2*2*2;
    if (A1_observation1_input1_usrans == A1_observation1_input1_correctAns && A1_observation1_input2_usrans == A1_observation1_input2_correctAns && A1_observation1_input3_usrans == A1_observation1_input3_correctAns) {
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
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_investigation1_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_investigation1_check() {
    var A1_investigation1_input1_usrans1 = $('input[name=A1_investigation1_input1_g1]:checked').val();
    var A1_investigation1_input1_usrans2 = $('input[name=A1_investigation1_input1_g2]:checked').val();
    var A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
    var A1_investigation1_input3_usrans1 = $("#A1_investigation1_input3_option1").prop("checked");
    var A1_investigation1_input3_usrans2 = $("#A1_investigation1_input3_option2").prop("checked");
    var A1_investigation1_input3_usrans3 = $("#A1_investigation1_input3_option3").prop("checked");
    var A1_investigation1_input3_usrans4 = $("#A1_investigation1_input3_option4").prop("checked");
    if(A1_investigation1_input1_usrans1==3 && A1_investigation1_input1_usrans2 == 6 && A1_investigation1_input2_usrans == 1 && A1_investigation1_input3_usrans1==false && A1_investigation1_input3_usrans2==true && A1_investigation1_input3_usrans3==true && A1_investigation1_input3_usrans4==false) {
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
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("b", true);
    api.setValue("c", false);
    api.registerObjectUpdateListener("a", A1_operation2_check);
    splitBarSetting(3, 665);
}

function A1_operation2_check() {
    var api = applet.getAppletObject();
    api.getValue("a")>0 ? $("#A1_operation2_confirm").removeClass("d-none") : $("#A1_operation2_confirm").addClass("d-none");
}

function A1_operation2_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A1_operation2_confirm").hide();
        $("#A1_operation2_done").css({"opacity": "1"});
        $("#A1_operation2_next").removeClass("d-none");
        $("#A1_operation2_link img").css({"opacity": "1"});
    })
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_observation2_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_observation2_check() {
    var A1_observation2_usrans1 = $("#A1_observation2_input1_option1").prop("checked");
    var A1_observation2_usrans2 = $("#A1_observation2_input1_option2").prop("checked");
    var A1_observation2_usrans3 = $("#A1_observation2_input1_option3").prop("checked");
    var A1_observation2_usrans4 = $("#A1_observation2_input1_option4").prop("checked");
    if (A1_observation2_usrans1 == true && A1_observation2_usrans2 == false && A1_observation2_usrans3 == true && A1_observation2_usrans4 == false) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A1_observation2_confirm").hide();
            $("#A1_observation2_done").css({"opacity": "1"});
            $("#A1_observation2_next").removeClass("d-none");
            $("#A1_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setCoords("A", -3, 0);
    api.setValue("b", false);
    api.setValue("c", false);
    api.registerObjectUpdateListener("A", A1_operation3_check);
    api.registerObjectUpdateListener("b", A1_operation3_check);
    splitBarSetting(3, 665);
}

function A1_operation3_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var showTrajectoryP = api.getValue("c");
    var showGraph = api.getValue("b");
    var xcoordsA = api.getXcoord("A");
    if (xcoordsA ==3 && a < 0 && showTrajectoryP == true && showGraph == true) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
            $("#A1_operation3_done").css({"opacity": "1"});
            $("#A1_operation3_next").removeClass("d-none");
            $("#A1_operation3_link img").css({"opacity": "1"});
        })
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_observation3_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_observation3_check() {
    var api = applet.getAppletObject();
    var A1_observation3_input1_usrans = $('input[name=A1_observation3_input1]:checked').val();
    var A1_observation3_input2_usrans = $("#A1_observation3_input2").val();
    var A1_observation3_input3_usrans = $("#A1_observation3_input3").val();
    var A1_observation3_input1_correctAns = 3;
    var A1_observation3_input2_correctAns = api.getValue("a")*1*1*1;
    var A1_observation3_input3_correctAns = api.getValue("a")*2*2*2;
    if (A1_observation3_input1_usrans == A1_observation3_input1_correctAns && A1_observation3_input2_usrans == A1_observation3_input2_correctAns && A1_observation3_input3_usrans == A1_observation3_input3_correctAns) {
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
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_investigation2_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_investigation2_check() {
    var A1_investigation2_input1_usrans1 = $('input[name=A1_investigation2_input1_g1]:checked').val();
    var A1_investigation2_input1_usrans2 = $('input[name=A1_investigation2_input1_g2]:checked').val();
    var A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
    var A1_investigation2_input3_usrans1 = $("#A1_investigation2_input3_option1").prop("checked");
    var A1_investigation2_input3_usrans2 = $("#A1_investigation2_input3_option2").prop("checked");
    var A1_investigation2_input3_usrans3 = $("#A1_investigation2_input3_option3").prop("checked");
    var A1_investigation2_input3_usrans4 = $("#A1_investigation2_input3_option4").prop("checked");
    if(A1_investigation2_input1_usrans1==1 && A1_investigation2_input1_usrans2 == 4 && A1_investigation2_input2_usrans == 2 && A1_investigation2_input3_usrans1==true && A1_investigation2_input3_usrans2==false && A1_investigation2_input3_usrans3==false && A1_investigation2_input3_usrans4==true) {
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

function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_operation4_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("b", true);
    api.setValue("c", false);
    api.registerObjectUpdateListener("a", A1_operation4_check);
    splitBarSetting(3, 665);
}

function A1_operation4_check() {
    var api = applet.getAppletObject();
    api.getValue("a")<0 ? $("#A1_operation4_confirm").removeClass("d-none") : $("#A1_operation4_confirm").addClass("d-none");
}

function A1_operation4_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
        $("#A1_operation4_confirm").hide();
        $("#A1_operation4_done").css({"opacity": "1"});
        $("#A1_operation4_next").removeClass("d-none");
        $("#A1_operation4_link img").css({"opacity": "1"});
    })
}

function A1_observation4() {
    currentStage = "A1_observation4";
    loadApplet("ggbApplet01", ggb_F_10_2_1_A1);
}

function A1_observation4_link() {
    removeListener();
    splitBarSetting(3, 665);
}

function A1_observation4_check() {
    var A1_observation4_usrans1 = $("#A1_observation4_input1_option1").prop("checked");
    var A1_observation4_usrans2 = $("#A1_observation4_input1_option2").prop("checked");
    var A1_observation4_usrans3 = $("#A1_observation4_input1_option3").prop("checked");
    var A1_observation4_usrans4 = $("#A1_observation4_input1_option4").prop("checked");
    if (A1_observation4_usrans1 == true && A1_observation4_usrans2 == false && A1_observation4_usrans3 == true && A1_observation4_usrans4 == false) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A1_observation4_confirm").hide();
            $("#A1_observation4_done").css({"opacity": "1"});
            $("#A1_observation4_next").removeClass("d-none");
            $("#A1_observation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbApplet01_investigation3", ggb_F_10_2_1_A1_investigation3);
}

function A1_investigation3_link() {
    removeListener();
    $("#A1_investigation3_input3_ans1").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_investigation3_input3_ans1").next().find("a").eq(1).html(katex.renderToString("a_1", { throwOnError: false }));
    $("#A1_investigation3_input3_ans1").next().find("a").eq(2).html(katex.renderToString("a_2", { throwOnError: false }));
    $("#A1_investigation3_input3_ans1").next().find("a").eq(3).html(katex.renderToString("a_3", { throwOnError: false }));
    $("#A1_investigation3_input3_ans1").next().find("a").eq(4).html(katex.renderToString("a_4", { throwOnError: false }));
    $("#A1_investigation3_input3_ans2").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_investigation3_input3_ans2").next().find("a").eq(1).html(katex.renderToString("a_1", { throwOnError: false }));
    $("#A1_investigation3_input3_ans2").next().find("a").eq(2).html(katex.renderToString("a_2", { throwOnError: false }));
    $("#A1_investigation3_input3_ans2").next().find("a").eq(3).html(katex.renderToString("a_3", { throwOnError: false }));
    $("#A1_investigation3_input3_ans2").next().find("a").eq(4).html(katex.renderToString("a_4", { throwOnError: false }));
    $("#A1_investigation3_input3_ans3").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_investigation3_input3_ans3").next().find("a").eq(1).html(katex.renderToString("a_1", { throwOnError: false }));
    $("#A1_investigation3_input3_ans3").next().find("a").eq(2).html(katex.renderToString("a_2", { throwOnError: false }));
    $("#A1_investigation3_input3_ans3").next().find("a").eq(3).html(katex.renderToString("a_3", { throwOnError: false }));
    $("#A1_investigation3_input3_ans3").next().find("a").eq(4).html(katex.renderToString("a_4", { throwOnError: false }));
    $("#A1_investigation3_input3_ans4").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_investigation3_input3_ans4").next().find("a").eq(1).html(katex.renderToString("a_1", { throwOnError: false }));
    $("#A1_investigation3_input3_ans4").next().find("a").eq(2).html(katex.renderToString("a_2", { throwOnError: false }));
    $("#A1_investigation3_input3_ans4").next().find("a").eq(3).html(katex.renderToString("a_3", { throwOnError: false }));
    $("#A1_investigation3_input3_ans4").next().find("a").eq(4).html(katex.renderToString("a_4", { throwOnError: false }));
    $("#A1_investigation3_input3_ans5").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
    $("#A1_investigation3_input3_ans5").next().find("a").eq(1).html(katex.renderToString("a_1", { throwOnError: false }));
    $("#A1_investigation3_input3_ans5").next().find("a").eq(2).html(katex.renderToString("a_2", { throwOnError: false }));
    $("#A1_investigation3_input3_ans5").next().find("a").eq(3).html(katex.renderToString("a_3", { throwOnError: false }));
    $("#A1_investigation3_input3_ans5").next().find("a").eq(4).html(katex.renderToString("a_4", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation3_check() {
    var A1_investigation3_input1_usrans1 = $('input[name=A1_investigation3_input1_g1]:checked').val();
    var A1_investigation3_input1_usrans2 = $('input[name=A1_investigation3_input1_g2]:checked').val();
    var A1_investigation3_input1_usrans3 = $('input[name=A1_investigation3_input1_g3]:checked').val();
    var A1_investigation3_input1_usrans4 = $('input[name=A1_investigation3_input1_g4]:checked').val();
    var A1_investigation3_input2_usrans1 = $("#A1_investigation3_input2_option1").prop("checked");
    var A1_investigation3_input2_usrans2 = $("#A1_investigation3_input2_option2").prop("checked");
    var A1_investigation3_input2_usrans3 = $("#A1_investigation3_input2_option3").prop("checked");
    var A1_investigation3_input2_usrans4 = $("#A1_investigation3_input2_option4").prop("checked");
    var A1_investigation3_input3_usrans1 = $("#A1_investigation3_input3_ans1").val();
    var A1_investigation3_input3_usrans2 = $("#A1_investigation3_input3_ans2").val();
    var A1_investigation3_input3_usrans3 = $("#A1_investigation3_input3_ans3").val();
    var A1_investigation3_input3_usrans4 = $("#A1_investigation3_input3_ans4").val();
    var A1_investigation3_input3_usrans5 = $("#A1_investigation3_input3_ans5").val();
    if (A1_investigation3_input1_usrans1 == 5 && A1_investigation3_input1_usrans2 == 6 && A1_investigation3_input1_usrans3 == 3 && A1_investigation3_input1_usrans4 == 4 && A1_investigation3_input2_usrans1 == true && A1_investigation3_input2_usrans2 == false && A1_investigation3_input2_usrans3 == true && A1_investigation3_input2_usrans4 == false && A1_investigation3_input3_usrans1 == "2" && A1_investigation3_input3_usrans2 == "1" && A1_investigation3_input3_usrans3 == "0" && A1_investigation3_input3_usrans4 == "3" && A1_investigation3_input3_usrans5 == "4") {
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
    loadApplet("ggbApplet01_investigation4", ggb_F_10_2_1_A1_investigation4);
}

function A1_investigation4_link() {
    removeListener();
    $("#A1_investigation4_input1").next().find("a").eq(0).html(katex.renderToString("y=x^3", { throwOnError: false }));
    $("#A1_investigation4_input1").next().find("a").eq(1).html(katex.renderToString("y=2x^3", { throwOnError: false }));
    $("#A1_investigation4_input1").next().find("a").eq(2).html(katex.renderToString("y=-x^3", { throwOnError: false }));
    $("#A1_investigation4_input1").next().find("a").eq(3).html(katex.renderToString("y=-2x^3", { throwOnError: false }));
    $("#A1_investigation4_input2").next().find("a").eq(0).html(katex.renderToString("y=x^3", { throwOnError: false }));
    $("#A1_investigation4_input2").next().find("a").eq(1).html(katex.renderToString("y=2x^3", { throwOnError: false }));
    $("#A1_investigation4_input2").next().find("a").eq(2).html(katex.renderToString("y=-x^3", { throwOnError: false }));
    $("#A1_investigation4_input2").next().find("a").eq(3).html(katex.renderToString("y=-2x^3", { throwOnError: false }));
    $("#A1_investigation4_input3").next().find("a").eq(0).html(katex.renderToString("y=x^3", { throwOnError: false }));
    $("#A1_investigation4_input3").next().find("a").eq(1).html(katex.renderToString("y=2x^3", { throwOnError: false }));
    $("#A1_investigation4_input3").next().find("a").eq(2).html(katex.renderToString("y=-x^3", { throwOnError: false }));
    $("#A1_investigation4_input3").next().find("a").eq(3).html(katex.renderToString("y=-2x^3", { throwOnError: false }));
    $("#A1_investigation4_input4").next().find("a").eq(0).html(katex.renderToString("y=x^3", { throwOnError: false }));
    $("#A1_investigation4_input4").next().find("a").eq(1).html(katex.renderToString("y=2x^3", { throwOnError: false }));
    $("#A1_investigation4_input4").next().find("a").eq(2).html(katex.renderToString("y=-x^3", { throwOnError: false }));
    $("#A1_investigation4_input4").next().find("a").eq(3).html(katex.renderToString("y=-2x^3", { throwOnError: false }));
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A1_investigation4_check() {
    var A1_investigation4_input1 = $("#A1_investigation4_input1").val();
    var A1_investigation4_input2 = $("#A1_investigation4_input2").val();
    var A1_investigation4_input3 = $("#A1_investigation4_input3").val();
    var A1_investigation4_input4 = $("#A1_investigation4_input4").val();
    if (A1_investigation4_input1 == "0" && A1_investigation4_input2 == "1" && A1_investigation4_input3 == "3" && A1_investigation4_input4 == "2") {
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

function A2_operation1() {
    currentStage="A2_operation1";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_operation1_link() {
        removeListener();
        var api = applet.getAppletObject();
        api.setFixed("a", true, true);
        api.setFixed("p", true, true);
        api.registerObjectUpdateListener("a", A2_operation1_check);
        api.registerObjectUpdateListener("p", A2_operation1_check);
        splitBarSetting(3, 623);
}

function A2_operation1_check() {
    var api = applet.getAppletObject();
    api.getValue("a")>0 ? $("#A2_operation1_confirm").removeClass("d-none") : $("#A2_operation1_confirm").addClass("d-none");
}

function A2_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A2_operation1_confirm").hide();
        $("#A2_operation1_done").css({"opacity": "1"});
        $("#A2_operation1_next").removeClass("d-none");
        $("#A2_operation1_link img").css({"opacity": "1"});
    })
}

function A2_observation1() {
    currentStage="A2_observation1";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_observation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("d", false);
    api.setCoords("A", -3, 0);
    api.setValue("c", false);
    api.setFixed("a", true, false);
    $("#A2_observation1_input4").next().find("a").eq(0).html("0");
    $("#A2_observation1_input4").next().find("a").eq(1).html("1");
    $("#A2_observation1_input4").next().find("a").eq(2).html("2");
    $("#A2_observation1_input4").next().find("a").eq(3).html("3");
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 623);
}

function A2_observation1_check() {
    var api = applet.getAppletObject();
    var A2_observation1_input1_usrans1 = api.getValue("d");
    var A2_observation1_input1_usrans2 = api.getXcoord("A");
    var A2_observation1_input1_usrans3 = api.getValue("c");
    var A2_observation1_input1_usrans4 = api.getValue("p");
    var A2_observation1_input2_usrans = $('input[name=A2_observation1_input2]:checked').val();
    var A2_observation1_input3_usrans = $('input[name=A2_observation1_input3]:checked').val();
    var A2_observation1_input4_usrans = $("#A2_observation1_input4").val();
    if (A2_observation1_input1_usrans1 == 1 && A2_observation1_input1_usrans2 == 3 && A2_observation1_input1_usrans3 == 1 && A2_observation1_input1_usrans4 > 0 && A2_observation1_input2_usrans == 1 && A2_observation1_input3_usrans == 1 && A2_observation1_input4_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A2_observation1_confirm").hide();
            $("#A2_observation1_done").css({"opacity": "1"});
            $("#A2_observation1_next").removeClass("d-none");
            $("#A2_observation1_link img").css({"opacity": "1"});
        })
    } else if ((A2_observation1_input1_usrans1 != 1 || A2_observation1_input1_usrans2 != 3 || A2_observation1_input1_usrans3 != 1 || A2_observation1_input1_usrans4 <= 0) && A2_observation1_input2_usrans == 1 && A2_observation1_input3_usrans == 1 && A2_observation1_input4_usrans == 1) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成觀察記錄1中的第1小題操作'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A2_observation2() {
    currentStage="A2_observation2";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_observation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("d", false);
    api.setCoords("A", -3, 0);
    api.setValue("c", false);
    $("#A2_observation2_input4").next().find("a").eq(0).html("0");
    $("#A2_observation2_input4").next().find("a").eq(1).html("1");
    $("#A2_observation2_input4").next().find("a").eq(2).html("2");
    $("#A2_observation2_input4").next().find("a").eq(3).html("3");
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 623);
}

function A2_observation2_check() {
    var api = applet.getAppletObject();
    var A2_observation2_input1_usrans1 = api.getValue("d");
    var A2_observation2_input1_usrans2 = api.getXcoord("A");
    var A2_observation2_input1_usrans3 = api.getValue("c");
    var A2_observation2_input1_usrans4 = api.getValue("p");
    var A2_observation2_input2_usrans = $('input[name=A2_observation2_input2]:checked').val();
    var A2_observation2_input3_usrans = $('input[name=A2_observation2_input3]:checked').val();
    var A2_observation2_input4_usrans = $("#A2_observation2_input4").val();
    if (A2_observation2_input1_usrans1 == 1 && A2_observation2_input1_usrans2 == 3 && A2_observation2_input1_usrans3 == 1 && A2_observation2_input1_usrans4 < 0 && A2_observation2_input2_usrans == 3 && A2_observation2_input3_usrans == 3 && A2_observation2_input4_usrans == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A2_observation2_confirm").hide();
            $("#A2_observation2_done").css({"opacity": "1"});
            $("#A2_observation2_next").removeClass("d-none");
            $("#A2_observation2_link img").css({"opacity": "1"});
        })
    } else if ((A2_observation2_input1_usrans1 != 1 || A2_observation2_input1_usrans2 != 3 || A2_observation2_input1_usrans3 != 1 || A2_observation2_input1_usrans4 >= 0) && A2_observation2_input2_usrans == 3 && A2_observation2_input3_usrans == 3 && A2_observation2_input4_usrans == 3) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成觀察記錄2中的第1小題操作'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02_investigation1", ggb_F_10_2_1_A2_investigation1);
}

function A2_investigation1_link() {
    removeListener();
}

function A2_investigation1_check() {
    var A2_investigation1_input1_usrans1 = $("#A2_investigation1_input1_option1").prop("checked");
    var A2_investigation1_input1_usrans2 = $("#A2_investigation1_input1_option2").prop("checked");
    var A2_investigation1_input1_usrans3 = $("#A2_investigation1_input1_option3").prop("checked");
    var A2_investigation1_input1_usrans4 = $("#A2_investigation1_input1_option4").prop("checked");
    var A2_investigation1_input3_usrans = $('input[name=A2_investigation1_input3]:checked').val();
    var A2_investigation1_input4_usrans = $('input[name=A2_investigation1_input4]:checked').val();
    var A2_investigation1_input5_usrans = $('input[name=A2_investigation1_input5]:checked').val();
    var A2_investigation1_input6_usrans = $('input[name=A2_investigation1_input6]:checked').val();

    if (A2_investigation1_input1_usrans1==true && A2_investigation1_input1_usrans2==false && A2_investigation1_input1_usrans3==true && A2_investigation1_input1_usrans4==false && A2_investigation1_input3_usrans==1 && A2_investigation1_input4_usrans==1 && A2_investigation1_input5_usrans==1 && A2_investigation1_input6_usrans==2) {
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

function A2_operation2()  {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setFixed("a", true, true);
    api.registerObjectUpdateListener("a", A2_operation2_check);
    api.registerObjectUpdateListener("p", A2_operation2_check);
    splitBarSetting(3, 623);
}

function A2_operation2_check() {
    var api = applet.getAppletObject();
    api.getValue("a")<0 ? $("#A2_operation2_confirm").removeClass("d-none") : $("#A2_operation2_confirm").addClass("d-none");
}

function A2_operation2_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A2_operation2_confirm").hide();
        $("#A2_operation2_done").css({"opacity": "1"});
        $("#A2_operation2_next").removeClass("d-none");
        $("#A2_operation2_link img").css({"opacity": "1"});
    })
}

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_observation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("d", false);
    api.setCoords("A", -3, 0);
    api.setValue("c", false);
    api.setFixed("a", true, false);
    $("#A2_observation3_input4").next().find("a").eq(0).html("0");
    $("#A2_observation3_input4").next().find("a").eq(1).html("1");
    $("#A2_observation3_input4").next().find("a").eq(2).html("2");
    $("#A2_observation3_input4").next().find("a").eq(3).html("3");
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 623);
}

function A2_observation3_check() {
    var api = applet.getAppletObject();
    var A2_observation3_input1_usrans1 = api.getValue("d");
    var A2_observation3_input1_usrans2 = api.getXcoord("A");
    var A2_observation3_input1_usrans3 = api.getValue("c");
    var A2_observation3_input1_usrans4 = api.getValue("p");
    var A2_observation3_input2_usrans = $('input[name=A2_observation3_input2]:checked').val();
    var A2_observation3_input3_usrans = $('input[name=A2_observation3_input3]:checked').val();
    var A2_observation3_input4_usrans = $("#A2_observation3_input4").val();
    if (A2_observation3_input1_usrans1 == 1 && A2_observation3_input1_usrans2 == 3 && A2_observation3_input1_usrans3 == 1 && A2_observation3_input1_usrans4 > 0 && A2_observation3_input2_usrans == 3 && A2_observation3_input3_usrans == 4 && A2_observation3_input4_usrans == 3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄3'}).then((result) => {
            $("#A2_observation3_confirm").hide();
            $("#A2_observation3_done").css({"opacity": "1"});
            $("#A2_observation3_next").removeClass("d-none");
            $("#A2_observation3_link img").css({"opacity": "1"});
        })
    } else if ((A2_observation3_input1_usrans1 != 1 || A2_observation3_input1_usrans2 != 3 || A2_observation3_input1_usrans3 != 1 || A2_observation3_input1_usrans4 <= 0) && A2_observation3_input2_usrans == 3 && A2_observation3_input3_usrans == 4 && A2_observation3_input4_usrans == 3) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成觀察記錄3中的第1小題操作'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A2_observation4() {
    currentStage = "A2_observation4";
    loadApplet("ggbApplet02", ggb_F_10_2_1_A2);
}

function A2_observation4_link() {
    var api = applet.getAppletObject();
    api.setValue("d", false);
    api.setCoords("A", -3, 0);
    api.setValue("c", false);
    $("#A2_observation4_input4").next().find("a").eq(0).html("0");
    $("#A2_observation4_input4").next().find("a").eq(1).html("1");
    $("#A2_observation4_input4").next().find("a").eq(2).html("2");
    $("#A2_observation4_input4").next().find("a").eq(3).html("3");
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_observation4_check() {
    var api = applet.getAppletObject();
    var A2_observation4_input1_usrans1 = api.getValue("d");
    var A2_observation4_input1_usrans2 = api.getXcoord("A");
    var A2_observation4_input1_usrans3 = api.getValue("c");
    var A2_observation4_input1_usrans4 = api.getValue("p");
    var A2_observation4_input2_usrans = $('input[name=A2_observation4_input2]:checked').val();
    var A2_observation4_input3_usrans = $('input[name=A2_observation4_input3]:checked').val();
    var A2_observation4_input4_usrans = $("#A2_observation4_input4").val();
    if (A2_observation4_input1_usrans1 == 1 && A2_observation4_input1_usrans2 == 3 && A2_observation4_input1_usrans3 == 1 && A2_observation4_input1_usrans4 < 0 && A2_observation4_input2_usrans == 2 && A2_observation4_input3_usrans == 2 && A2_observation4_input4_usrans == 1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄4'}).then((result) => {
            $("#A2_observation4_confirm").hide();
            $("#A2_observation4_done").css({"opacity": "1"});
            $("#A2_observation4_next").removeClass("d-none");
            $("#A2_observation4_link img").css({"opacity": "1"});
        })
    } else if ((A2_observation4_input1_usrans1 != 1 || A2_observation4_input1_usrans2 != 3 || A2_observation4_input1_usrans3 != 1 || A2_observation4_input1_usrans4 >= 0) && A2_observation4_input2_usrans == 2 && A2_observation4_input3_usrans == 2 && A2_observation4_input4_usrans == 1) {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成觀察記錄2中的第1小題操作'})
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_investigation2", ggb_F_10_2_1_A2_investigation2);
}

function A2_investigation2_link() {
    removeListener();
}

function A2_investigation2_check() {
    var A2_investigation2_input1_usrans1 = $("#A2_investigation2_input1_option1").prop("checked");
    var A2_investigation2_input1_usrans2 = $("#A2_investigation2_input1_option2").prop("checked");
    var A2_investigation2_input1_usrans3 = $("#A2_investigation2_input1_option3").prop("checked");
    var A2_investigation2_input1_usrans4 = $("#A2_investigation2_input1_option4").prop("checked");
    var A2_investigation2_input3_usrans = $('input[name=A2_investigation2_input3]:checked').val();
    var A2_investigation2_input4_usrans = $('input[name=A2_investigation2_input4]:checked').val();
    var A2_investigation2_input5_usrans = $('input[name=A2_investigation2_input5]:checked').val();
    var A2_investigation2_input6_usrans = $('input[name=A2_investigation2_input6]:checked').val();
    var A2_investigation2_input7 = $("#A2_investigation2_input7").val();
    if (A2_investigation2_input1_usrans1==false && A2_investigation2_input1_usrans2==true && A2_investigation2_input1_usrans3==false && A2_investigation2_input1_usrans4==true && A2_investigation2_input3_usrans==2 && A2_investigation2_input4_usrans==2 && A2_investigation2_input5_usrans==2 && A2_investigation2_input6_usrans==1 && (A2_investigation2_input7=="(0,0)"||"原點")) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A2_investigation2_confirm").hide();
            $("#A2_investigation2_done").css({"opacity": "1"});
            $("#A2_investigation2_next").removeClass("d-none");
            $("#A2_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A2_investigation3() {
    currentStage = "A2_investigation3";
    loadApplet("ggbApplet02_investigation3", ggb_F_10_2_1_A2_investigation3);
}

function A2_investigation3_link() {
    removeListener();
    $("#A2_investigation3_input3, #A2_investigation3_input6, #A2_investigation3_input9").next().find("a").eq(0).html("0");
    $("#A2_investigation3_input3, #A2_investigation3_input6, #A2_investigation3_input9").next().find("a").eq(1).html("1");
    $("#A2_investigation3_input3, #A2_investigation3_input6, #A2_investigation3_input9").next().find("a").eq(2).html("2");
    $("#A2_investigation3_input3, #A2_investigation3_input6, #A2_investigation3_input9").next().find("a").eq(3).html("3");
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_investigation3_check() {
    var A2_investigation3_input1_usrans = $('input[name=A2_investigation3_input1]:checked').val();
    var A2_investigation3_input2_usrans = $('input[name=A2_investigation3_input2]:checked').val();
    var A2_investigation3_input3 = $("#A2_investigation3_input3").val();
    var A2_investigation3_input4_usrans = $('input[name=A2_investigation3_input4]:checked').val();
    var A2_investigation3_input5_usrans = $('input[name=A2_investigation3_input5]:checked').val();
    var A2_investigation3_input6 = $("#A2_investigation3_input6").val();
    var A2_investigation3_input7_usrans = $('input[name=A2_investigation3_input7]:checked').val();
    var A2_investigation3_input8_usrans = $('input[name=A2_investigation3_input8]:checked').val();
    var A2_investigation3_input9 = $("#A2_investigation3_input9").val();
    var A2_investigation3_input10_usrans = $('input[name=A2_investigation3_input10]:checked').val();
    var A2_investigation3_input11_usrans = $('input[name=A2_investigation3_input11]:checked').val();
    var A2_investigation3_input12 = $("#A2_investigation3_input12").val();
    console.log(A2_investigation3_input1_usrans+","+A2_investigation3_input2_usrans+","+A2_investigation3_input3+","+A2_investigation3_input4_usrans+","+A2_investigation3_input5_usrans+","+A2_investigation3_input6+","+A2_investigation3_input7_usrans+","+A2_investigation3_input8_usrans+","+A2_investigation3_input9+","+A2_investigation3_input10_usrans+","+A2_investigation3_input11_usrans+","+A2_investigation3_input12);
    if (A2_investigation3_input1_usrans==1 && A2_investigation3_input2_usrans==1 && A2_investigation3_input3==1 && A2_investigation3_input4_usrans==1 && A2_investigation3_input5_usrans==2 && A2_investigation3_input6==3 && A2_investigation3_input7_usrans==2 && A2_investigation3_input8_usrans==2 && A2_investigation3_input9==1 && A2_investigation3_input10_usrans==2 && A2_investigation3_input11_usrans==1 && A2_investigation3_input12==3) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A2_investigation3_confirm").hide();
            $("#A2_investigation3_done").css({"opacity": "1"});
            $("#A2_investigation3_next").removeClass("d-none");
            $("#A2_investigation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_operation1() {
    currentStage = "A3_operation1";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A3_operation1_check);
    api.registerObjectUpdateListener("p", A3_operation1_check);
    splitBarSetting(3, 591);
}

function A3_operation1_check() {
    $("#A3_operation1_confirm").removeClass("d-none");
}

function A3_operation1_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
        $("#A3_operation1_confirm").hide();
        $("#A3_operation1_done").css({"opacity": "1"});
        $("#A3_operation1_next").removeClass("d-none");
        $("#A3_operation1_link img").css({"opacity": "1"});
    })
}

function A3_investigation1() {
    currentStage = "A3_investigation1";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_investigation1_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_investigation1_check() {
    var A3_investigation1_input1_usrans = $('input[name=A3_investigation1_input1]:checked').val();
    var A3_investigation1_input2_usrans = $('input[name=A3_investigation1_input2]:checked').val();
    if (A3_investigation1_input1_usrans==2 && A3_investigation1_input2_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
            $("#A3_investigation1_confirm").hide();
            $("#A3_investigation1_done").css({"opacity": "1"});
            $("#A3_investigation1_next").removeClass("d-none");
            $("#A3_investigation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_operation2() {
    currentStage = "A3_operation2";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.setValue("a", 0);
    api.setValue("p", 0);
    api.registerObjectUpdateListener("a", A3_operation2_check);
    api.registerObjectUpdateListener("p", A3_operation2_check);
    api.registerObjectUpdateListener("e", A3_operation2_check);
    api.registerObjectUpdateListener("t", A3_operation2_check);
    splitBarSetting(3, 591);
}

function A3_operation2_check() {
    var api = applet.getAppletObject();
    var a = api.getValue("a");
    var p = api.getValue("p");
    var e = api.getValue("e");
    var P = api.getXcoord("P");
    if (a==1 && p==2 && e==1 && P!=1) {
        $("#A3_operation2_confirm").removeClass("d-none");
    }
}

function A3_operation2_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
        $("#A3_operation2_confirm").hide();
        $("#A3_operation2_done").css({"opacity": "1"});
        $("#A3_operation2_next").removeClass("d-none");
        $("#A3_operation2_link img").css({"opacity": "1"});
    })
}

function A3_observation1() {
    currentStage = "A3_observation1";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_observation1_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_observation1_check() {
    var A3_observation1_input1_usrans = $('input[name=A3_observation1_input1]:checked').val();
    var A3_observation1_input2_usrans = $('input[name=A3_observation1_input2]:checked').val();
    var A3_observation1_input3_usrans = $('input[name=A3_observation1_input3]:checked').val();
    var A3_observation1_input4_usrans = $('input[name=A3_observation1_input4]:checked').val();
    if (A3_observation1_input1_usrans==3 && A3_observation1_input2_usrans==1 && A3_observation1_input3_usrans==3 && A3_observation1_input4_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
            $("#A3_observation1_confirm").hide();
            $("#A3_observation1_done").css({"opacity": "1"});
            $("#A3_observation1_next").removeClass("d-none");
            $("#A3_observation1_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_investigation2() {
    currentStage = "A3_investigation2";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_investigation2_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_investigation2_check() {
    var A3_investigation2_input1_usrans = $('input[name=A3_investigation2_input1]:checked').val();
    var A3_investigation2_input2_usrans = $('input[name=A3_investigation2_input2]:checked').val();
    var A3_investigation2_input4_usrans = $('input[name=A3_investigation2_input4]:checked').val();
    if (A3_investigation2_input1_usrans==3 && A3_investigation2_input2_usrans==1 && A3_investigation2_input4_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2'}).then((result) => {
            $("#A3_investigation2_confirm").hide();
            $("#A3_investigation2_done").css({"opacity": "1"});
            $("#A3_investigation2_next").removeClass("d-none");
            $("#A3_investigation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_operation3() {
    currentStage = "A3_operation3";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("a", A3_operation3_check);
    api.registerObjectUpdateListener("p", A3_operation3_check);
    splitBarSetting(3, 591);
}

function A3_operation3_check() {
    $("#A3_operation3_confirm").removeClass("d-none");
}

function A3_operation3_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作3'}).then((result) => {
        $("#A3_operation3_confirm").hide();
        $("#A3_operation3_done").css({"opacity": "1"});
        $("#A3_operation3_next").removeClass("d-none");
        $("#A3_operation3_link img").css({"opacity": "1"});
    })
}

function A3_investigation3() {
    currentStage = "A3_investigation3";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_investigation3_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_investigation3_check() {
    var A3_investigation3_input1_usrans = $('input[name=A3_investigation3_input1]:checked').val();
    var A3_investigation3_input2_usrans = $('input[name=A3_investigation3_input2]:checked').val();
    if (A3_investigation3_input1_usrans==1 && A3_investigation3_input2_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3'}).then((result) => {
            $("#A3_investigation3_confirm").hide();
            $("#A3_investigation3_done").css({"opacity": "1"});
            $("#A3_investigation3_next").removeClass("d-none");
            $("#A3_investigation3_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_operation4() {
    currentStage = "A3_operation4";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_operation4_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("t", A3_operation4_check);
    splitBarSetting(3, 591);
}

function A3_operation4_check() {
    $("#A3_operation4_confirm").removeClass("d-none");
}

function A3_operation4_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作4'}).then((result) => {
        $("#A3_operation4_confirm").hide();
        $("#A3_operation4_done").css({"opacity": "1"});
        $("#A3_operation4_next").removeClass("d-none");
        $("#A3_operation4_link img").css({"opacity": "1"});
    })
}

function A3_investigation4() {
    currentStage = "A3_investigation4";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_investigation4_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_investigation4_check() {
    var A3_investigation4_input1_usrans = $('input[name=A3_investigation4_input1]:checked').val();
    var A3_investigation4_input2_usrans = $('input[name=A3_investigation4_input2]:checked').val();
    var A3_investigation4_input3_usrans = $('input[name=A3_investigation4_input3]:checked').val();
    var A3_investigation4_input5_usrans = $('input[name=A3_investigation4_input5]:checked').val();
    console.log(A3_investigation4_input1_usrans+","+A3_investigation4_input2_usrans+","+A3_investigation4_input3_usrans+","+A3_investigation4_input5_usrans);
    if(A3_investigation4_input1_usrans==1 && A3_investigation4_input2_usrans==4 && A3_investigation4_input3_usrans==4 && A3_investigation4_input5_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索4'}).then((result) => {
            $("#A3_investigation4_confirm").hide();
            $("#A3_investigation4_done").css({"opacity": "1"});
            $("#A3_investigation4_next").removeClass("d-none");
            $("#A3_investigation4_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
    }
}

function A3_operation5() {
    currentStage = "A3_operation5";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_operation5_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("o", A3_operation5_check);
    api.registerObjectUpdateListener("α", A3_operation5_check);
    splitBarSetting(3, 591);
}

function A3_operation5_check() {
    var api = applet.getAppletObject();
    var o = api.getValue("o");
    var angle = api.getValue("α");
    console.log(angle);
    if (o==1 && Math.abs(angle-3.141592653589793)<0.000000000000001) {
        $("#A3_operation5_confirm").removeClass("d-none");
    }
}

function A3_operation5_confirm() {
    Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作5'}).then((result) => {
        $("#A3_operation5_confirm").hide();
        $("#A3_operation5_done").css({"opacity": "1"});
        $("#A3_operation5_next").removeClass("d-none");
        $("#A3_operation5_link img").css({"opacity": "1"});
    })
}

function A3_observation2() {
    currentStage = "A3_observation2";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_observation2_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_observation2_check() {
    var A3_observation2_input1_usrans = $("#A3_observation2_input1").val();
    if (A3_observation2_input1_usrans != "") {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
            $("#A3_observation2_confirm").hide();
            $("#A3_observation2_done").css({"opacity": "1"});
            $("#A3_observation2_next").removeClass("d-none");
            $("#A3_observation2_link img").css({"opacity": "1"});
        })
    } else {
        Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請仔細觀察看看，然後簡述你的發現吧'})
    }
}

function A3_investigation5() {
    currentStage = "A3investigation5";
    loadApplet("ggbApplet03", ggb_F_10_2_1_A3);
}

function A3_investigation5_link() {
    removeListener();
    splitBarSetting(3, 591);
}

function A3_investigation5_check() {
    var A3_investigation5_input1_usrans = $('input[name=A3_investigation5_input1]:checked').val();
    var A3_investigation5_input2_usrans = $('input[name=A3_investigation5_input2]:checked').val();
    console.log(A3_investigation5_input1_usrans+","+A3_investigation5_input2_usrans);
    if (A3_investigation5_input1_usrans==4 && A3_investigation5_input2_usrans==1) {
        Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索5'}).then((result) => {
            $("#A3_investigation5_confirm").hide();
            $("#A3_investigation5_done").css({"opacity": "1"});
            $("#A3_investigation5_next").removeClass("d-none");
            $("#A3_investigation5_link img").css({"opacity": "1"});
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
    $("#A1_operation2_confirm").click(function() {
        A1_operation2_confirm();
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
    $("#A1_operation4_confirm").click(function() {
        A1_operation4_confirm();
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
        showA2();
    });

    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });
    $("#A2_operation1_confirm").click(function() {
        A2_operation1_confirm();
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
        $("#A2_observation2_link").click();
    });
    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });
    $("#A2_observation2_confirm").click(function() {
        A2_observation2_check();
    });
    $("#A2_observation2_next").click(function() {
        $("#A2_investigation1_link").click();
    });
    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });
    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_check();
    });
    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();
    });
    $("#A2_operation2_link").click(function() {
        A2_operation2();
    });
    $("#A2_operation2_confirm").click(function() {
        A2_operation2_confirm();
    });
    $("#A2_operation2_next").click(function() {
        $("#A2_observation3_link").click();
    });
    $("#A2_observation3_link").click(function() {
        A2_observation3();
    });
    $("#A2_observation3_confirm").click(function() {
        A2_observation3_check();
    });
    $("#A2_observation3_next").click(function() {
        $("#A2_observation4_link").click();
    });
    $("#A2_observation4_link").click(function() {
        A2_observation4();
    });
    $("#A2_observation4_confirm").click(function() {
        A2_observation4_check();
    });
    $("#A2_observation4_next").click(function() {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function() {
        $("#A2_investigation3_link").click();
    });
    $("#A2_investigation3_link").click(function() {
        A2_investigation3();
    });
    $("#A2_investigation3_confirm").click(function() {
        A2_investigation3_check();
    });
    $("#A2_investigation3_next").click(function() {
        showA3();
    });

    $("#A3_operation1_link").click(function() {
        A3_operation1();
    });
    $("#A3_operation1_confirm").click(function() {
        A3_operation1_confirm();
    });
    $("#A3_operation1_next").click(function() {
        $("#A3_investigation1_link").click();
    });
    $("#A3_investigation1_link").click(function() {
        A3_investigation1();
    });
    $("#A3_investigation1_confirm").click(function() {
        A3_investigation1_check();
    });
    $("#A3_investigation1_next").click(function() {
        $("#A3_operation2_link").click();
    });
    $("#A3_operation2_link").click(function() {
        A3_operation2();
    });
    $("#A3_operation2_confirm").click(function() {
        A3_operation2_confirm();
    });
    $("#A3_operation2_next").click(function() {
        $("#A3_observation1_link").click();
    });
    $("#A3_observation1_link").click(function() {
        A3_observation1();
    });
    $("#A3_observation1_confirm").click(function() {
        A3_observation1_check();
    });
    $("#A3_observation1_next").click(function() {
        $("#A3_investigation2_link").click();
    });
    $("#A3_investigation2_link").click(function() {
        A3_investigation2();
    });
    $("#A3_investigation2_confirm").click(function() {
        A3_investigation2_check();
    });
    $("#A3_investigation2_next").click(function() {
        $("#A3_operation3_link").click();
    });
    $("#A3_operation3_link").click(function() {
        A3_operation3();
    });
    $("#A3_operation3_confirm").click(function() {
        A3_operation3_confirm();
    });
    $("#A3_operation3_next").click(function() {
        $("#A3_investigation3_link").click();
    });
    $("#A3_investigation3_link").click(function() {
        A3_investigation3();
    });
    $("#A3_investigation3_confirm").click(function() {
        A3_investigation3_check();
    });
    $("#A3_investigation3_next").click(function() {
        $("#A3_operation4_link").click();
    });
    $("#A3_operation4_link").click(function() {
        A3_operation4();
    });
    $("#A3_operation4_confirm").click(function() {
        A3_operation4_confirm();
    });
    $("#A3_operation4_next").click(function() {
        $("#A3_investigation4_link").click();
    });
    $("#A3_investigation4_link").click(function() {
        A3_investigation4();
    });
    $("#A3_investigation4_confirm").click(function() {
        A3_investigation4_check();
    });
    $("#A3_investigation4_next").click(function() {
        $("#A3_operation5_link").click();
    });
    $("#A3_operation5_link").click(function() {
        A3_operation5();
    });
    $("#A3_operation5_confirm").click(function() {
        A3_operation5_confirm();
    });
    $("#A3_operation5_next").click(function() {
        $("#A3_observation2_link").click();
    });
    $("#A3_observation2_link").click(function() {
        A3_observation2();
    });
    $("#A3_observation2_confirm").click(function() {
        A3_observation2_check();
    });
    $("#A3_observation2_next").click(function() {
        $("#A3_investigation5_link").click();
    });
    $("#A3_investigation5_link").click(function() {
        A3_investigation5();
    });
    $("#A3_investigation5_confirm").click(function() {
        A3_investigation5_check();
    });
});