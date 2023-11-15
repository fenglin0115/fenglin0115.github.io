function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：繪製 "+ katex.renderToString("y=\\sin{x}+\\cos{x}", { throwOnError: false }) +" 的圖形");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_11A_2_1_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_observation1_check() {
    if($("#A1_observation1_input1").val() == "1") {
        $("#A1_observation1_input1").removeClass("btn-danger");
        $("#A1_observation1_input1").addClass("disabled");
    } else {
        $("#A1_observation1_input1").removeClass("btn-light");
        $("#A1_observation1_input1").addClass("btn-danger");
    }
    if($("#A1_observation1_input2").val() == "2") {
        $("#A1_observation1_input2").removeClass("btn-danger");
        $("#A1_observation1_input2").addClass("disabled");
    } else {
        $("#A1_observation1_input2").removeClass("btn-light");
        $("#A1_observation1_input2").addClass("btn-danger");
    }
    if($("#A1_observation1_input3").val() == "2") {
        $("#A1_observation1_input3").removeClass("btn-danger");
        $("#A1_observation1_input3").addClass("disabled");
    } else {
        $("#A1_observation1_input3").removeClass("btn-light");
        $("#A1_observation1_input3").addClass("btn-danger");
    }
    if($("#A1_observation1_input4").val() == "0") {
        $("#A1_observation1_input4").removeClass("btn-danger");
        $("#A1_observation1_input4").addClass("disabled");
    } else {
        $("#A1_observation1_input4").removeClass("btn-light");
        $("#A1_observation1_input4").addClass("btn-danger");
    }
    if($("#A1_observation1_input5").val() == "1") {
        $("#A1_observation1_input5").removeClass("btn-danger");
        $("#A1_observation1_input5").addClass("disabled");
    } else {
        $("#A1_observation1_input5").removeClass("btn-light");
        $("#A1_observation1_input5").addClass("btn-danger");
    }
    if($("#A1_observation1_input6").val() == "2") {
        $("#A1_observation1_input6").removeClass("btn-danger");
        $("#A1_observation1_input6").addClass("disabled");
    } else {
        $("#A1_observation1_input6").removeClass("btn-light");
        $("#A1_observation1_input6").addClass("btn-danger");
    }
    if($("#A1_observation1_input7").val() == "1") {
        $("#A1_observation1_input7").removeClass("btn-danger");
        $("#A1_observation1_input7").addClass("disabled");
    } else {
        $("#A1_observation1_input7").removeClass("btn-light");
        $("#A1_observation1_input7").addClass("btn-danger");
    }
    if($("#A1_observation1_input8").val() == "1") {
        $("#A1_observation1_input8").removeClass("btn-danger");
        $("#A1_observation1_input8").addClass("disabled");
    } else {
        $("#A1_observation1_input8").removeClass("btn-light");
        $("#A1_observation1_input8").addClass("btn-danger");
    }
    if($("#A1_observation1_input9").val() == "2") {
        $("#A1_observation1_input9").removeClass("btn-danger");
        $("#A1_observation1_input9").addClass("disabled");
    } else {
        $("#A1_observation1_input9").removeClass("btn-light");
        $("#A1_observation1_input9").addClass("btn-danger");
    }
    if($("#A1_observation1_input10").val() == "1") {
        $("#A1_observation1_input10").removeClass("btn-danger");
        $("#A1_observation1_input10").addClass("disabled");
    } else {
        $("#A1_observation1_input10").removeClass("btn-light");
        $("#A1_observation1_input10").addClass("btn-danger");
    }
    if($("#A1_observation1_input11").val() == "0") {
        $("#A1_observation1_input11").removeClass("btn-danger");
        $("#A1_observation1_input11").addClass("disabled");
    } else {
        $("#A1_observation1_input11").removeClass("btn-light");
        $("#A1_observation1_input11").addClass("btn-danger");
    }
    if($("#A1_observation1_input12").val() == "2") {
        $("#A1_observation1_input12").removeClass("btn-danger");
        $("#A1_observation1_input12").addClass("disabled");
    } else {
        $("#A1_observation1_input12").removeClass("btn-light");
        $("#A1_observation1_input12").addClass("btn-danger");
    }
    if($("#A1_observation1_input13").val() == "2") {
        $("#A1_observation1_input13").removeClass("btn-danger");
        $("#A1_observation1_input13").addClass("disabled");
    } else {
        $("#A1_observation1_input13").removeClass("btn-light");
        $("#A1_observation1_input13").addClass("btn-danger");
    }
    if($("#A1_observation1_input14").val() == "1") {
        $("#A1_observation1_input14").removeClass("btn-danger");
        $("#A1_observation1_input14").addClass("disabled");
    } else {
        $("#A1_observation1_input14").removeClass("btn-light");
        $("#A1_observation1_input14").addClass("btn-danger");
    }
    if($("#A1_observation1_input15").val() == "2") {
        $("#A1_observation1_input15").removeClass("btn-danger");
        $("#A1_observation1_input15").addClass("disabled");
    } else {
        $("#A1_observation1_input15").removeClass("btn-light");
        $("#A1_observation1_input15").addClass("btn-danger");
    }
    if($("#A1_observation1_input16").val() == "1") {
        $("#A1_observation1_input16").removeClass("btn-danger");
        $("#A1_observation1_input16").addClass("disabled");
    } else {
        $("#A1_observation1_input16").removeClass("btn-light");
        $("#A1_observation1_input16").addClass("btn-danger");
    }
    if($("#A1_observation1_input17").val() == "0") {
        $("#A1_observation1_input17").removeClass("btn-danger");
        $("#A1_observation1_input17").addClass("disabled");
    } else {
        $("#A1_observation1_input17").removeClass("btn-light");
        $("#A1_observation1_input17").addClass("btn-danger");
    }
    if($("#A1_observation1_input18").val() == "0") {
        $("#A1_observation1_input18").removeClass("btn-danger");
        $("#A1_observation1_input18").addClass("disabled");
    } else {
        $("#A1_observation1_input18").removeClass("btn-light");
        $("#A1_observation1_input18").addClass("btn-danger");
    }
    if($("#A1_observation1_input19").val() == "0") {
        $("#A1_observation1_input19").removeClass("btn-danger");
        $("#A1_observation1_input19").addClass("disabled");
    } else {
        $("#A1_observation1_input19").removeClass("btn-light");
        $("#A1_observation1_input19").addClass("btn-danger");
    }
    if($("#A1_observation1_input20").val() == "1") {
        $("#A1_observation1_input20").removeClass("btn-danger");
        $("#A1_observation1_input20").addClass("disabled");
    } else {
        $("#A1_observation1_input20").removeClass("btn-light");
        $("#A1_observation1_input20").addClass("btn-danger");
    }
    if($("#A1_observation1_input21").val() == "0") {
        $("#A1_observation1_input21").removeClass("btn-danger");
        $("#A1_observation1_input21").addClass("disabled");
    } else {
        $("#A1_observation1_input21").removeClass("btn-light");
        $("#A1_observation1_input21").addClass("btn-danger");
    }
    if($("#A1_observation1_input22").val() == "1") {
        $("#A1_observation1_input22").removeClass("btn-danger");
        $("#A1_observation1_input22").addClass("disabled");
    } else {
        $("#A1_observation1_input22").removeClass("btn-light");
        $("#A1_observation1_input22").addClass("btn-danger");
    }
    if($("#A1_observation1_input23").val() == "2") {
        $("#A1_observation1_input23").removeClass("btn-danger");
        $("#A1_observation1_input23").addClass("disabled");
    } else {
        $("#A1_observation1_input23").removeClass("btn-light");
        $("#A1_observation1_input23").addClass("btn-danger");
    }
    if($("#A1_observation1_input24").val() == "2") {
        $("#A1_observation1_input24").removeClass("btn-danger");
        $("#A1_observation1_input24").addClass("disabled");
    } else {
        $("#A1_observation1_input24").removeClass("btn-light");
        $("#A1_observation1_input24").addClass("btn-danger");
    }
    if($("#A1_observation1_input25").val() == "0") {
        $("#A1_observation1_input25").removeClass("btn-danger");
        $("#A1_observation1_input25").addClass("disabled");
    } else {
        $("#A1_observation1_input25").removeClass("btn-light");
        $("#A1_observation1_input25").addClass("btn-danger");
    }
    if($("#A1_observation1_input26").val() == "1") {
        $("#A1_observation1_input26").removeClass("btn-danger");
        $("#A1_observation1_input26").addClass("disabled");
    } else {
        $("#A1_observation1_input26").removeClass("btn-light");
        $("#A1_observation1_input26").addClass("btn-danger");
    }
    if($("#A1_observation1_input27").val() == "2") {
        $("#A1_observation1_input27").removeClass("btn-danger");
        $("#A1_observation1_input27").addClass("disabled");
    } else {
        $("#A1_observation1_input27").removeClass("btn-light");
        $("#A1_observation1_input27").addClass("btn-danger");
    }
    if($("#A1_observation1_input28").val() == "1") {
        $("#A1_observation1_input28").removeClass("btn-danger");
        $("#A1_observation1_input28").addClass("disabled");
    } else {
        $("#A1_observation1_input28").removeClass("btn-light");
        $("#A1_observation1_input28").addClass("btn-danger");
    }
    if($("#A1_observation1_input29").val() == "1") {
        $("#A1_observation1_input29").removeClass("btn-danger");
        $("#A1_observation1_input29").addClass("disabled");
    } else {
        $("#A1_observation1_input29").removeClass("btn-light");
        $("#A1_observation1_input29").addClass("btn-danger");
    }
    if($("#A1_observation1_input30").val() == "2") {
        $("#A1_observation1_input30").removeClass("btn-danger");
        $("#A1_observation1_input30").addClass("disabled");
    } else {
        $("#A1_observation1_input30").removeClass("btn-light");
        $("#A1_observation1_input30").addClass("btn-danger");
    }
    if($("#A1_observation1_input31").val() == "1") {
        $("#A1_observation1_input31").removeClass("btn-danger");
        $("#A1_observation1_input31").addClass("disabled");
    } else {
        $("#A1_observation1_input31").removeClass("btn-light");
        $("#A1_observation1_input31").addClass("btn-danger");
    }
    if($("#A1_observation1_input32").val() == "0") {
        $("#A1_observation1_input32").removeClass("btn-danger");
        $("#A1_observation1_input32").addClass("disabled");
    } else {
        $("#A1_observation1_input32").removeClass("btn-light");
        $("#A1_observation1_input32").addClass("btn-danger");
    }
    if($("#A1_observation1_input33").val() == "2") {
        $("#A1_observation1_input33").removeClass("btn-danger");
        $("#A1_observation1_input33").addClass("disabled");
    } else {
        $("#A1_observation1_input33").removeClass("btn-light");
        $("#A1_observation1_input33").addClass("btn-danger");
    }
    if($("#A1_observation1_input34").val() == "1") {
        $("#A1_observation1_input34").removeClass("btn-danger");
        $("#A1_observation1_input34").addClass("disabled");
    } else {
        $("#A1_observation1_input34").removeClass("btn-light");
        $("#A1_observation1_input34").addClass("btn-danger");
    }
    if($("#A1_observation1_input35").val() == "0") {
        $("#A1_observation1_input35").removeClass("btn-danger");
        $("#A1_observation1_input35").addClass("disabled");
    } else {
        $("#A1_observation1_input35").removeClass("btn-light");
        $("#A1_observation1_input35").addClass("btn-danger");
    }
    if($("#A1_observation1_input36").val() == "0") {
        $("#A1_observation1_input36").removeClass("btn-danger");
        $("#A1_observation1_input36").addClass("disabled");
    } else {
        $("#A1_observation1_input36").removeClass("btn-light");
        $("#A1_observation1_input36").addClass("btn-danger");
    }

    if($("#A1_observation1_input1").val() == "1" && $("#A1_observation1_input2").val() == "2" && $("#A1_observation1_input3").val() == "2" && $("#A1_observation1_input4").val() == "0" && $("#A1_observation1_input5").val() == "1" && $("#A1_observation1_input6").val() == "2" && $("#A1_observation1_input7").val() == "1" && $("#A1_observation1_input8").val() == "1" && $("#A1_observation1_input9").val() == "2" && $("#A1_observation1_input10").val() == "1" && $("#A1_observation1_input11").val() == "0" && $("#A1_observation1_input12").val() == "2" && $("#A1_observation1_input13").val() == "2" && $("#A1_observation1_input14").val() == "1" && $("#A1_observation1_input15").val() == "2" && $("#A1_observation1_input16").val() == "1" && $("#A1_observation1_input17").val() == "0" && $("#A1_observation1_input18").val() == "0" && $("#A1_observation1_input19").val() == "0" && $("#A1_observation1_input20").val() == "1" && $("#A1_observation1_input21").val() == "0" && $("#A1_observation1_input22").val() == "1" && $("#A1_observation1_input23").val() == "2" && $("#A1_observation1_input24").val() == "2" && $("#A1_observation1_input25").val() == "0" && $("#A1_observation1_input26").val() == "1" && $("#A1_observation1_input27").val() == "2" && $("#A1_observation1_input28").val() == "1" && $("#A1_observation1_input29").val() == "1" && $("#A1_observation1_input30").val() == "2" && $("#A1_observation1_input31").val() == "1" && $("#A1_observation1_input32").val() == "0" && $("#A1_observation1_input33").val() == "2" && $("#A1_observation1_input34").val() == "1" && $("#A1_observation1_input35").val() == "0" && $("#A1_observation1_input36").val() == "0") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往問題探索1】繼續下去"
        });
        $("#A1_observation1_confirm").addClass("d-none");
        $("#A1_observation1_next").removeClass("d-none");
        $("#A1_observation1_done").css({"opacity": "1"});
        $("#A1_observation1_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check1() {
    if($('input[name=A1_investigation1_input1]:checked').val() == "1") {
        $('input[name=A1_investigation1_input1]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input1]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第2題"
        });
        $("input[name=A1_investigation1_input2]").parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm1").addClass("d-none");
        $("#A1_investigation1_confirm2").removeClass("d-none");
    } else {
        $('input[name=A1_investigation1_input1]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check2() {
    if($('input[name=A1_investigation1_input2]:checked').val() == "2") {
        $('input[name=A1_investigation1_input2]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input2]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input2]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第3題"
        });
        $("input[name=A1_investigation1_input3]").parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm2").addClass("d-none");
        $("#A1_investigation1_confirm3").removeClass("d-none");
    } else {
        $('input[name=A1_investigation1_input2]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check3() {
    if($('input[name=A1_investigation1_input3]:checked').val() == "1") {
        $('input[name=A1_investigation1_input3]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input3]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input3]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第4題"
        });
        $("input[name=A1_investigation1_input4]").parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm3").addClass("d-none");
        $("#A1_investigation1_confirm4").removeClass("d-none");
    } else {
        $('input[name=A1_investigation1_input3]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check4() {
    if($('input[name=A1_investigation1_input4]:checked').val() == "2") {
        $('input[name=A1_investigation1_input4]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input4]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input4]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第5題"
        });
        $("input[name=A1_investigation1_input5]").parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm4").addClass("d-none");
        $("#A1_investigation1_confirm5").removeClass("d-none");
    } else {
        $('input[name=A1_investigation1_input4]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check5() {
    if($('input[name=A1_investigation1_input5]:checked').val() == "2") {
        $('input[name=A1_investigation1_input5]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input5]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input5]').attr('disabled', 'disabled');
        Toast.fire({
            icon: "success",
            title: "答對了!<br>接續回答第6題"
        });
        $("#A1_investigation1_input6_option1").parent().parent().removeClass("d-none");
        $("#A1_investigation1_confirm5").addClass("d-none");
        $("#A1_investigation1_confirm6").removeClass("d-none");
    } else {
        $('input[name=A1_investigation1_input5]:checked').parent().css("background-color", "#ffb7dd");
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation1_check6() {
    if($("#A1_investigation1_input6_option1").is(':checked') && $("#A1_investigation1_input6_option2").is(':checked') && !$("#A1_investigation1_input6_option3").is(':checked')) {
        $("#A1_investigation1_input6_option1").attr('disabled', 'disabled');
        $("#A1_investigation1_input6_option2").attr('disabled', 'disabled');
        $("#A1_investigation1_input6_option3").attr('disabled', 'disabled');
        $("#A1_investigation1_input6_option1").parent().css("background-color", "#ddff77");
        $("#A1_investigation1_input6_option2").parent().css("background-color", "#ddff77");
        $("#A1_investigation1_input6_option3").parent().css("background-color", "#ddff77");
        Toast.fire({
            icon: "success",
            title: "答對了!<br>點擊【前往活動2】繼續下去"
        });
        $("#A1_investigation1_confirm6").addClass("d-none");
        $("#A1_investigation1_next").removeClass("d-none");
        $("#A1_investigation1_done").css({"opacity": "1"});
        $("#A1_investigation1_link img").css({"opacity": "1"});
    } else {
        if(!$("#A1_investigation1_input6_option1").is(':checked')) {
            $("#A1_investigation1_input6_option1").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input6_option1").parent().css("background-color", "#ddff77");
        }
        if(!$("#A1_investigation1_input6_option2").is(':checked')) {
            $("#A1_investigation1_input6_option2").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input6_option2").parent().css("background-color", "#ddff77");
        }
        if($("#A1_investigation1_input6_option3").is(':checked')) {
            $("#A1_investigation1_input6_option3").parent().css("background-color", "#ffb7dd");
        } else {
            $("#A1_investigation1_input6_option3").parent().css("background-color", "#ddff77");
        }
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}