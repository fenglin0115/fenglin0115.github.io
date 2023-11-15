var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_5_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA0();
    }
}

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
});

$(document).ready(function() {
    $("#A0_operation1_next").click(function() {
        $("#A0_observation1_link").click();
        $("#A0_operation1_done").css({"opacity": "1"});
        $("#A0_operation1_link img").css({"opacity": "1"});
    });

    $("#A0_observation1_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });
    });

    $("#A0_observation1_confirm").click(function() {
        A0_observation1_check();
    });

    $("#A0_observation1_next").click(function() {
        $("#A0_investigation1_link").click();
    });

    // $("#A0_investigation1_link").click(function() {

    // });

    $("#A0_investigation1_confirm1").click(function() {
        A0_investigation1_check1();
    });

    $("#A0_investigation1_confirm2").click(function() {
        A0_investigation1_check2();
    });

    $("#A0_investigation1_next").click(function() {
        showA1();
    });

    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
        $("#A1_operation1_done").css({"opacity": "1"});
        $("#A1_operation1_link img").css({"opacity": "1"});
    });

    $("#A1_observation1_link").click(function() {
        var api = applet.getAppletObject();
        $("#A1_observation1_input1_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideAE, red)");
        });
        $("#A1_observation1_input1_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideEF, red)");
        });
        $("#A1_observation1_input2_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideAE, red)");
        });
        $("#A1_observation1_input2_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideEF, red)");
        });
        $("#A1_observation1_input3_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A1_observation1_input3_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegBE, red)");
        });
        $("#A1_observation1_input4_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A1_observation1_input4_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegBE, red)");
        });
        $("#A1_observation1_input5_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetVisibleInView(angleCEF, 1, true)");
        });
        $("#A1_observation1_input5_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetVisibleInView(angleAEB, 1, true)");
        });
        $("#A1_observation1_input5_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetVisibleInView(angleCFE, 1, true)");
        });
        $("#A1_observation1_input5_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetVisibleInView(angleAFD, 1, true)");
        });
        $("#A1_observation1_input6_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetColor(SegEC, red)");
        });
        $("#A1_observation1_input6_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetColor(SegFC, red)");
        });
        $("#A1_observation1_input7_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetColor(SegEC, red)");
        });
        $("#A1_observation1_input7_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetColor(SegFC, red)");
        });
        $("#A1_observation1_input8_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetVisibleInView(angleAFD, 1, true)");
        });
        $("#A1_observation1_input8_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetVisibleInView(angleFAD, 1, true)");
        });
        $("#A1_observation1_input8_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            api.evalCommand("SetVisibleInView(angleAEB, 1, true)");
        });
        $("#A1_observation1_input9_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset3)");
            api.evalCommand("SetColor(SegDF, red)");
        });
        $("#A1_observation1_input9_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset3)");
            api.evalCommand("SetColor(RecSideDA, red)");
        });
        $("#A1_observation1_input10_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset3)");
            api.evalCommand("SetColor(SegDF, red)");
        });
        $("#A1_observation1_input10_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset3)");
            api.evalCommand("SetColor(RecSideDA, red)");
        });
    });

    $("#A1_observation1_confirm1").click(function() {
        A1_observation1_check1();
    });

    $("#A1_observation1_confirm2").click(function() {
        A1_observation1_check2();
    });

    $("#A1_observation1_confirm3").click(function() {
        A1_observation1_check3();
    });

    $("#A1_observation1_confirm4").click(function() {
        A1_observation1_check4();
    });

    $("#A1_observation1_confirm5").click(function() {
        A1_observation1_check5();
    });

    $("#A1_observation1_confirm6").click(function() {
        A1_observation1_check6();
    });

    $("#A1_observation1_confirm7").click(function() {
        A1_observation1_check7();
    });

    $("#A1_observation1_confirm8").click(function() {
        A1_observation1_check8();
    });

    $("#A1_observation1_confirm9").click(function() {
        A1_observation1_check9();
    });

    $("#A1_observation1_confirm10").click(function() {
        A1_observation1_check10();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });

        var api = applet.getAppletObject();
        $("#A1_investigation1_input1_option1").click(function() {
            if($("#A1_investigation1_input1_option1").is(':checked')) {
                api.evalCommand("SetColor(RecSideAB, red)");
            } else {
                api.evalCommand("SetColor(RecSideAB, black)");
            }
        });
        $("#A1_investigation1_input1_option2").click(function() {
            if($("#A1_investigation1_input1_option2").is(':checked')) {
                api.evalCommand("SetColor(SegBE, red)");
            } else {
                api.evalCommand("SetColor(SegBE, black)");
            }
        });
        $("#A1_investigation1_input1_option3").click(function() {
            if($("#A1_investigation1_input1_option3").is(':checked')) {
                api.evalCommand("SetColor(SegEC, red)");
            } else {
                api.evalCommand("SetColor(SegEC, black)");
            }
        });
        $("#A1_investigation1_input1_option4").click(function() {
            if($("#A1_investigation1_input1_option4").is(':checked')) {
                api.evalCommand("SetColor(SegFC, red)");
            } else {
                api.evalCommand("SetColor(SegFC, black)");
            }
        });
    });

    $("#A1_investigation1_confirm1").click(function() {
        A1_investigation1_check1();
    });

    $("#A1_investigation1_confirm2").click(function() {
        A1_investigation1_check2();
    });

    $("#A1_investigation1_next").click(function() {
        $("#A1_investigation2_link").click();
    });

    $("#A1_investigation2_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });

        var api = applet.getAppletObject();

        $("#A1_investigation2_input1_option1").click(function() {
            if($("#A1_investigation2_input1_option1").is(':checked')) {
                api.evalCommand("SetColor(RecSideAB, red)");
            } else {
                api.evalCommand("SetColor(RecSideAB, black)");
            }
        });
        $("#A1_investigation2_input1_option2").click(function() {
            if($("#A1_investigation2_input1_option2").is(':checked')) {
                api.evalCommand("SetColor(SegBE, red)");
            } else {
                api.evalCommand("SetColor(SegBE, black)");
            }
        });
        $("#A1_investigation2_input1_option3").click(function() {
            if($("#A1_investigation2_input1_option3").is(':checked')) {
                api.evalCommand("SetColor(SegEC, red)");
            } else {
                api.evalCommand("SetColor(SegEC, black)");
            }
        });
        $("#A1_investigation2_input1_option4").click(function() {
            if($("#A1_investigation2_input1_option4").is(':checked')) {
                api.evalCommand("SetColor(SegFC, red)");
            } else {
                api.evalCommand("SetColor(SegFC, black)");
            }
        });
    });

    $("#A1_investigation2_confirm1").click(function() {
        A1_investigation2_check1();
    });

    $("#A1_investigation2_confirm2").click(function() {
        A1_investigation2_check2();
    });

    $("#A1_investigation2_next").click(function() {
        showA2();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
        $("#A2_operation1_done").css({"opacity": "1"});
        $("#A2_operation1_link img").css({"opacity": "1"});
    });

    $("#A2_observation1_link").click(function() {
        var api = applet.getAppletObject();
        $("#A2_observation1_input1_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideAE, red)");
        });
        $("#A2_observation1_input1_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideEF, red)");
        });
        $("#A2_observation1_input2_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideAE, red)");
        });
        $("#A2_observation1_input2_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(TriSideEF, red)");
        });
        $("#A2_observation1_input3_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            if($("#A2_observation1_input3_option1").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleAEB, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleAEB, 1, false)");
            }
        });
        $("#A2_observation1_input3_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            if($("#A2_observation1_input3_option2").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleCFE, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleCFE, 1, false)");
            }
        });
        $("#A2_observation1_input3_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            if($("#A2_observation1_input3_option3").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleCEF, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleCEF, 1, false)");
            }
        });
        $("#A2_observation1_input3_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            if($("#A2_observation1_input3_option4").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleAFD, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleAFD, 1, false)");
            }
        });
        $("#A2_observation1_input4_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A2_observation1_input4_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentEB, red)");
        });
        $("#A2_observation1_input4_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentCE, red)");
        });
        $("#A2_observation1_input4_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentFC, red)");
        });
        $("#A2_observation1_input5_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A2_observation1_input5_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentEB, red)");
        });
        $("#A2_observation1_input5_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentCE, red)");
        });
        $("#A2_observation1_input5_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentFC, red)");
        });
        $("#A2_observation1_input6_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A2_observation1_input6_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentEB, red)");
        });
        $("#A2_observation1_input6_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentCE, red)");
        });
        $("#A2_observation1_input6_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentFC, red)");
        });
        $("#A2_observation1_input7_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideAB, red)");
        });
        $("#A2_observation1_input7_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentEB, red)");
        });
        $("#A2_observation1_input7_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentCE, red)");
        });
        $("#A2_observation1_input7_option4").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentFC, red)");
        });
        $("#A2_observation1_input8_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            if($("#A2_observation1_input8_option1").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleDAF, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleDAF, 1, false)");
            }
        });
        $("#A2_observation1_input8_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            if($("#A2_observation1_input8_option2").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleBEA, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleBEA, 1, false)");
            }
        });
        $("#A2_observation1_input8_option3").click(function() {
            api.evalCommand("RunClickScript(btnReset2)");
            if($("#A2_observation1_input8_option3").is(":checked")) {
                api.evalCommand("SetVisibleInView(angleCFE2, 1, true)");
            } else {
                api.evalCommand("SetVisibleInView(angleCFE2, 1, false)");
            }
        });
        $("#A2_observation1_input9_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideDA, red)");
        });
        $("#A2_observation1_input9_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentDF, red)");
        });
        $("#A2_observation1_input10_option1").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(RecSideDA, red)");
        });
        $("#A2_observation1_input10_option2").click(function() {
            api.evalCommand("RunClickScript(btnReset)");
            api.evalCommand("SetColor(SegmentDF, red)");
        });
    });

    $("#A2_observation1_confirm1").click(function() {
        A2_observation1_check1();
    });

    $("#A2_observation1_confirm2").click(function() {
        A2_observation1_check2();
    });

    $("#A2_observation1_confirm3").click(function() {
        A2_observation1_check3();
    });

    $("#A2_observation1_confirm4").click(function() {
        A2_observation1_check4();
    });

    $("#A2_observation1_confirm5").click(function() {
        A2_observation1_check5();
    });

    $("#A2_observation1_confirm6").click(function() {
        A2_observation1_check6();
    });

    $("#A2_observation1_confirm7").click(function() {
        A2_observation1_check7();
    });

    $("#A2_observation1_confirm8").click(function() {
        A2_observation1_check8();
    });

    $("#A2_observation1_confirm9").click(function() {
        A2_observation1_check9();
    });

    $("#A2_observation1_confirm10").click(function() {
        A2_observation1_check10();
    });

    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
        A2_investigation1_link();
    });

    $("#A2_investigation1_link").click(function() {
        
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });

        var api = applet.getAppletObject();
        $("#A2_investigation1_input1_option1").click(function() {
            if($("#A2_investigation1_input1_option1").is(':checked')) {
                api.evalCommand("SetColor(RecSideAB, red)");
            } else {
                api.evalCommand("SetColor(RecSideAB, black)");
            }
        });
        $("#A2_investigation1_input1_option2").click(function() {
            if($("#A2_investigation1_input1_option2").is(':checked')) {
                api.evalCommand("SetColor(SegmentEB, red)");
            } else {
                api.evalCommand("SetColor(SegmentEB, black)");
            }
        });
        $("#A2_investigation1_input1_option3").click(function() {
            if($("#A2_investigation1_input1_option3").is(':checked')) {
                api.evalCommand("SetColor(SegmentCE, red)");
            } else {
                api.evalCommand("SetColor(SegmentCE, black)");
            }
        });
        $("#A2_investigation1_input1_option4").click(function() {
            if($("#A2_investigation1_input1_option4").is(':checked')) {
                api.evalCommand("SetColor(SegmentFC, red)");
            } else {
                api.evalCommand("SetColor(SegmentFC, black)");
            }
        });
    });

    $("#A2_investigation1_confirm1").click(function() {
        A2_investigation1_check1();
    });

    $("#A2_investigation1_confirm2").click(function() {
        A2_investigation1_check2();
    });

    $("#A2_investigation1_next").click(function() {
        $("#A2_investigation2_link").click();
    });

    $("#A2_investigation2_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });

        var api = applet.getAppletObject();

        $("#A2_investigation2_input1_option1").click(function() {
            if($("#A2_investigation2_input1_option1").is(':checked')) {
                api.evalCommand("SetColor(RecSideAB, red)");
            } else {
                api.evalCommand("SetColor(RecSideAB, black)");
            }
        });
        $("#A2_investigation2_input1_option2").click(function() {
            if($("#A2_investigation2_input1_option2").is(':checked')) {
                api.evalCommand("SetColor(SegmentEB, red)");
            } else {
                api.evalCommand("SetColor(SegmentEB, black)");
            }
        });
        $("#A2_investigation2_input1_option3").click(function() {
            if($("#A2_investigation2_input1_option3").is(':checked')) {
                api.evalCommand("SetColor(SegmentCE, red)");
            } else {
                api.evalCommand("SetColor(SegmentCE, black)");
            }
        });
        $("#A2_investigation2_input1_option4").click(function() {
            if($("#A2_investigation2_input1_option4").is(':checked')) {
                api.evalCommand("SetColor(SegmentFC, red)");
            } else {
                api.evalCommand("SetColor(SegmentFC, black)");
            }
        });
    });

    $("#A2_investigation2_confirm1").click(function() {
        A2_investigation2_check1();
    });

    $("#A2_investigation2_confirm2").click(function() {
        A2_investigation2_check2();
    });
});