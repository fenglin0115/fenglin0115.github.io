function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：認知和角公式的正確性");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_11A_5_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_observation1_check1() {
    if($('input[name=A1_observation1_input1]:checked').val() == "1") {
        $('input[name=A1_observation1_input1]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input1]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第2題"
        });
        $("input[name=A1_observation1_input2]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm1").addClass("d-none");
        $("#A1_observation1_confirm2").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset)");
        api.evalCommand("ShowLabel(TriSideAE, true)");
    } else {
        $('input[name=A1_observation1_input1]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check2() {
    if($('input[name=A1_observation1_input2]:checked').val() == "2") {
        $('input[name=A1_observation1_input2]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input2]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input2]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第3題"
        });
        $("input[name=A1_observation1_input3]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm2").addClass("d-none");
        $("#A1_observation1_confirm3").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset)");
        api.evalCommand("ShowLabel(TriSideEF, true)");
    } else {
        $('input[name=A1_observation1_input2]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check3() {
    if($('input[name=A1_observation1_input3]:checked').val() == "1") {
        $('input[name=A1_observation1_input3]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input3]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input3]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第4題"
        });
        $("input[name=A1_observation1_input4]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm3").addClass("d-none");
        $("#A1_observation1_confirm4").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset)");
        api.evalCommand("SetVisibleInView(text5, 1, true)");
    } else {
        $('input[name=A1_observation1_input3]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check4() {
    if($('input[name=A1_observation1_input4]:checked').val() == "2") {
        $('input[name=A1_observation1_input4]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input4]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input4]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第5題"
        });
        $("input[name=A1_observation1_input5]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm4").addClass("d-none");
        $("#A1_observation1_confirm5").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset)");
        api.evalCommand("SetVisibleInView(text6, 1, true)");
    } else {
        $('input[name=A1_observation1_input4]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check5() {
    if($('input[name=A1_observation1_input5]:checked').val() == "1") {
        $('input[name=A1_observation1_input5]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input5]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input5]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第6題"
        });
        $("input[name=A1_observation1_input6]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm5").addClass("d-none");
        $("#A1_observation1_confirm6").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset2)");
        api.evalCommand("SetColor(angleCEF, Magenta)");
        api.evalCommand("SetDecoration(angleCEF, 0)");
        api.evalCommand("ShowLabel(angleCEF, true)");
    } else {
        $('input[name=A1_observation1_input5]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check6() {
    if($('input[name=A1_observation1_input6]:checked').val() == "1") {
        $('input[name=A1_observation1_input6]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input6]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input6]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第7題"
        });
        $("input[name=A1_observation1_input7]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm6").addClass("d-none");
        $("#A1_observation1_confirm7").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset2)");
        api.evalCommand("SetVisibleInView(text4, 1, true)");
    } else {
        $('input[name=A1_observation1_input6]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check7() {
    if($('input[name=A1_observation1_input7]:checked').val() == "2") {
        $('input[name=A1_observation1_input7]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input7]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input7]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第8題"
        });
        $("input[name=A1_observation1_input8]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm7").addClass("d-none");
        $("#A1_observation1_confirm8").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset2)");
        api.evalCommand("SetVisibleInView(text3, 1, true)");
    } else {
        $('input[name=A1_observation1_input7]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check8() {
    if($('input[name=A1_observation1_input8]:checked').val() == "1") {
        $('input[name=A1_observation1_input8]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input8]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input8]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第9題"
        });
        $("input[name=A1_observation1_input9]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm8").addClass("d-none");
        $("#A1_observation1_confirm9").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset3)");
        api.evalCommand("SetColor(angleAFD, red)");
        api.evalCommand("SetDecoration(angleAFD, 0)");
        api.evalCommand("SetVisibleInView(text7, 1, true)");
    } else {
        $('input[name=A1_observation1_input8]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check9() {
    if($('input[name=A1_observation1_input9]:checked').val() == "2") {
        $('input[name=A1_observation1_input9]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input9]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input9]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第10題"
        });
        $("input[name=A1_observation1_input10]").parent().parent().removeClass("d-none");
        $("#A1_observation1_confirm9").addClass("d-none");
        $("#A1_observation1_confirm10").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset3)");
        api.evalCommand("SetVisibleInView(text1, 1, true)");
    } else {
        $('input[name=A1_observation1_input9]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_observation1_check10() {
    if($('input[name=A1_observation1_input10]:checked').val() == "1") {
        $('input[name=A1_observation1_input10]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input10]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input10]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>點擊【前往問題探索1】繼續下去"
        });
        $("#A1_observation1_confirm10").addClass("d-none");
        $("#A1_observation1_next").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset3)");
        api.evalCommand("SetVisibleInView(text2, 1, true)");
    } else {
        $('input[name=A1_observation1_input10]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check1() {
    if(!$("#A1_investigation1_input1_option1").is(':checked') && $("#A1_investigation1_input1_option2").is(':checked') && $("#A1_investigation1_input1_option3").is(':checked') && !$("#A1_investigation1_input1_option4").is(':checked')) {
        $("#A1_investigation1_input1_option1").attr('disabled', 'disabled');
        $("#A1_investigation1_input1_option2").attr('disabled', 'disabled');
        $("#A1_investigation1_input1_option3").attr('disabled', 'disabled');
        $("#A1_investigation1_input1_option4").attr('disabled', 'disabled');
        $("#A1_investigation1_input1_option1").parent().css("background-color", "#ddff77");
        $("#A1_investigation1_input1_option2").parent().css("background-color", "#ddff77");
        $("#A1_investigation1_input1_option3").parent().css("background-color", "#ddff77");
        $("#A1_investigation1_input1_option4").parent().css("background-color", "#ddff77");
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第2題"
        });
        $("#A1_investigation1_input2").parent().parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm1").addClass("d-none");
        $("#A1_investigation1_confirm2").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset3)");
    } else {
        if($("#A1_investigation1_input1_option1").is(':checked')) {
            $("#A1_investigation1_input1_option1").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input1_option1").parent().css("background-color", "#ddff77");
        }
        if(!$("#A1_investigation1_input1_option2").is(':checked')) {
            $("#A1_investigation1_input1_option2").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input1_option2").parent().css("background-color", "#ddff77");
        }
        if(!$("#A1_investigation1_input1_option3").is(':checked')) {
            $("#A1_investigation1_input1_option3").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input1_option3").parent().css("background-color", "#ddff77");
        }
        if($("#A1_investigation1_input1_option4").is(':checked')) {
            $("#A1_investigation1_input1_option4").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input1_option4").parent().css("background-color", "#ddff77");
        }
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check2() {
    if($("#A1_investigation1_input2").val() == "0") {
        $("#A1_investigation1_input2").removeClass("btn-light");
        $("#A1_investigation1_input2").removeClass("btn-danger");
        $("#A1_investigation1_input2").addClass("btn-success");
        $("#A1_investigation1_input2").addClass("disabled");
    } else {
        $("#A1_investigation1_input2").removeClass("btn-light");
        $("#A1_investigation1_input2").addClass("btn-danger");
    }
    if($("#A1_investigation1_input3").val() == "1") {
        $("#A1_investigation1_input3").removeClass("btn-light");
        $("#A1_investigation1_input3").removeClass("btn-danger");
        $("#A1_investigation1_input3").addClass("btn-success");
        $("#A1_investigation1_input3").addClass("disabled");
    } else {
        $("#A1_investigation1_input3").removeClass("btn-light");
        $("#A1_investigation1_input3").addClass("btn-danger");
    }

    if($("#A1_investigation1_input2").val() == "0" && $("#A1_investigation1_input3").val() == "1") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往問題探索2】繼續下去"
        });
        $("#A1_investigation1_confirm2").addClass("d-none");
        $("#A1_investigation1_next").removeClass("d-none");
        $("#A1_investigation1_done").css({"opacity": "1"});
        $("#A1_investigation1_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation2_check1() {
    if($("#A1_investigation2_input1_option1").is(':checked') && !$("#A1_investigation2_input1_option2").is(':checked') && !$("#A1_investigation2_input1_option3").is(':checked') && $("#A1_investigation2_input1_option4").is(':checked')) {
        $("#A1_investigation2_input1_option1").attr('disabled', 'disabled');
        $("#A1_investigation2_input1_option2").attr('disabled', 'disabled');
        $("#A1_investigation2_input1_option3").attr('disabled', 'disabled');
        $("#A1_investigation2_input1_option4").attr('disabled', 'disabled');
        $("#A1_investigation2_input1_option1").parent().css("background-color", "#ddff77");
        $("#A1_investigation2_input1_option2").parent().css("background-color", "#ddff77");
        $("#A1_investigation2_input1_option3").parent().css("background-color", "#ddff77");
        $("#A1_investigation2_input1_option4").parent().css("background-color", "#ddff77");
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第2題"
        });
        $("#A1_investigation2_input2").parent().parent().parent().removeClass("d-none");
        $("#A1_investigation2_confirm1").addClass("d-none");
        $("#A1_investigation2_confirm2").removeClass("d-none");
        var api = applet.getAppletObject();
        api.evalCommand("RunClickScript(btnReset3)");
    } else {
        if(!$("#A1_investigation2_input1_option1").is(':checked')) {
            $("#A1_investigation2_input1_option1").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation2_input1_option1").parent().css("background-color", "#ddff77");
        }
        if($("#A1_investigation2_input1_option2").is(':checked')) {
            $("#A1_investigation2_input1_option2").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation2_input1_option2").parent().css("background-color", "#ddff77");
        }
        if($("#A1_investigation2_input1_option3").is(':checked')) {
            $("#A1_investigation2_input1_option3").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation2_input1_option3").parent().css("background-color", "#ddff77");
        }
        if(!$("#A1_investigation2_input1_option4").is(':checked')) {
            $("#A1_investigation2_input1_option4").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation2_input1_option4").parent().css("background-color", "#ddff77");
        }
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation2_check2() {
    if($("#A1_investigation2_input2").val() == "1") {
        $("#A1_investigation2_input2").removeClass("btn-light");
        $("#A1_investigation2_input2").removeClass("btn-danger");
        $("#A1_investigation2_input2").addClass("btn-success");
        $("#A1_investigation2_input2").addClass("disabled");
    } else {
        $("#A1_investigation2_input2").removeClass("btn-light");
        $("#A1_investigation2_input2").addClass("btn-danger");
    }
    if($("#A1_investigation2_input3").val() == "0") {
        $("#A1_investigation2_input3").removeClass("btn-light");
        $("#A1_investigation2_input3").removeClass("btn-danger");
        $("#A1_investigation2_input3").addClass("btn-success");
        $("#A1_investigation2_input3").addClass("disabled");
    } else {
        $("#A1_investigation2_input3").removeClass("btn-light");
        $("#A1_investigation2_input3").addClass("btn-danger");
    }

    if($("#A1_investigation2_input2").val() == "1" && $("#A1_investigation2_input3").val() == "0") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往活動2】繼續下去"
        });
        $("#A1_investigation2_confirm2").addClass("d-none");
        $("#A1_investigation2_next").removeClass("d-none");
        $("#A1_investigation2_done").css({"opacity": "1"});
        $("#A1_investigation2_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}