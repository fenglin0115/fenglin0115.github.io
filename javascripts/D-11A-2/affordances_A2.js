function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("活動2：條件機率的意義");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_D_11A_2_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A2_observation1_check() {
    if(!$("#A2_observation1_input1").is(':checked') && !$("#A2_observation1_input2").is(':checked') && !$("#A2_observation1_input3").is(':checked') && $("#A2_observation1_input4").is(':checked') && !$("#A2_observation1_input5").is(':checked') && !$("#A2_observation1_input6").is(':checked') && !$("#A2_observation1_input7").is(':checked') && !$("#A2_observation1_input8").is(':checked') && !$("#A2_observation1_input9").is(':checked') && $("#A2_observation1_input10").is(':checked') && $("#A2_observation1_input11").is(':checked') && $("#A2_observation1_input12").is(':checked') && !$("#A2_observation1_input13").is(':checked') && $("#A2_observation1_input14").is(':checked') && !$("#A2_observation1_input15").is(':checked') && $("#A2_observation1_input16").is(':checked') && $("#A2_observation1_input17").is(':checked') && $("#A2_observation1_input18").is(':checked')) {
        $("#A2_observation1_input1").attr('disabled', 'disabled');
        $("#A2_observation1_input1").parent().css("background-color", "initial");
        $("#A2_observation1_input2").attr('disabled', 'disabled');
        $("#A2_observation1_input2").parent().css("background-color", "initial");
        $("#A2_observation1_input3").attr('disabled', 'disabled');
        $("#A2_observation1_input3").parent().css("background-color", "initial");
        $("#A2_observation1_input4").attr('disabled', 'disabled');
        $("#A2_observation1_input4").parent().css("background-color", "initial");
        $("#A2_observation1_input5").attr('disabled', 'disabled');
        $("#A2_observation1_input5").parent().css("background-color", "initial");
        $("#A2_observation1_input6").attr('disabled', 'disabled');
        $("#A2_observation1_input6").parent().css("background-color", "initial");
        $("#A2_observation1_input7").attr('disabled', 'disabled');
        $("#A2_observation1_input7").parent().css("background-color", "initial");
        $("#A2_observation1_input8").attr('disabled', 'disabled');
        $("#A2_observation1_input8").parent().css("background-color", "initial");
        $("#A2_observation1_input9").attr('disabled', 'disabled');
        $("#A2_observation1_input9").parent().css("background-color", "initial");
        $("#A2_observation1_input10").attr('disabled', 'disabled');
        $("#A2_observation1_input10").parent().css("background-color", "initial");
        $("#A2_observation1_input11").attr('disabled', 'disabled');
        $("#A2_observation1_input11").parent().css("background-color", "initial");
        $("#A2_observation1_input12").attr('disabled', 'disabled');
        $("#A2_observation1_input12").parent().css("background-color", "initial");
        $("#A2_observation1_input13").attr('disabled', 'disabled');
        $("#A2_observation1_input13").parent().css("background-color", "initial");
        $("#A2_observation1_input14").attr('disabled', 'disabled');
        $("#A2_observation1_input14").parent().css("background-color", "initial");
        $("#A2_observation1_input15").attr('disabled', 'disabled');
        $("#A2_observation1_input15").parent().css("background-color", "initial");
        $("#A2_observation1_input16").attr('disabled', 'disabled');
        $("#A2_observation1_input16").parent().css("background-color", "initial");
        $("#A2_observation1_input17").attr('disabled', 'disabled');
        $("#A2_observation1_input17").parent().css("background-color", "initial");
        $("#A2_observation1_input18").attr('disabled', 'disabled');
        $("#A2_observation1_input18").parent().css("background-color", "initial");
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往問題探索1】繼續下去"
        });
        $("#A2_observation1_confirm").addClass("d-none");
        $("#A2_observation1_next").removeClass("d-none");
        $("#A2_observation1_done").css({"opacity": "1"});
        $("#A2_observation1_link img").css({"opacity": "1"});
    } else {
        if($("#A2_observation1_input1").is(':checked')) {
            $("#A2_observation1_input1").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input1").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input2").is(':checked')) {
            $("#A2_observation1_input2").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input2").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input3").is(':checked')) {
            $("#A2_observation1_input3").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input3").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input4").is(':checked')) {
            $("#A2_observation1_input4").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input4").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input5").is(':checked')) {
            $("#A2_observation1_input5").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input5").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input6").is(':checked')) {
            $("#A2_observation1_input6").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input6").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input7").is(':checked')) {
            $("#A2_observation1_input7").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input7").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input8").is(':checked')) {
            $("#A2_observation1_input8").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input8").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input9").is(':checked')) {
            $("#A2_observation1_input9").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input9").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input10").is(':checked')) {
            $("#A2_observation1_input10").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input10").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input11").is(':checked')) {
            $("#A2_observation1_input11").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input11").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input12").is(':checked')) {
            $("#A2_observation1_input12").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input12").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input13").is(':checked')) {
            $("#A2_observation1_input13").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input13").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input14").is(':checked')) {
            $("#A2_observation1_input14").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input14").parent().css("background-color", "#ddff77");
        }
        if($("#A2_observation1_input15").is(':checked')) {
            $("#A2_observation1_input15").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input15").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input16").is(':checked')) {
            $("#A2_observation1_input16").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input16").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input17").is(':checked')) {
            $("#A2_observation1_input17").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input17").parent().css("background-color", "#ddff77");
        }
        if(!$("#A2_observation1_input18").is(':checked')) {
            $("#A2_observation1_input18").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A2_observation1_input18").parent().css("background-color", "#ddff77");
        }
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A2_investigation1_check() {
    if($('input[name=A2_investigation1_input1]:checked').val() == "3") {
        $('input[name=A2_investigation1_input1]').parent().css("background-color", "initial");
        $('input[name=A2_investigation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A2_investigation1_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A2_investigation1_input1]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A2_investigation1_input2]:checked').val() == "3") {
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
    if($('input[name=A2_investigation1_input1]:checked').val() == "3" && $('input[name=A2_investigation1_input2]:checked').val() == "3" && $('input[name=A2_investigation1_input3]:checked').val() == "1") {
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