function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：樣本空間與其機率變化");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_11A_2_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_observation1_check() {
    if($("#A1_observation1_input1").val() == "0") {
        $("#A1_observation1_input1").removeClass("btn-danger");
        $("#A1_observation1_input1").addClass("disabled");
    } else {
        $("#A1_observation1_input1").removeClass("btn-light");
        $("#A1_observation1_input1").addClass("btn-danger");
    }
    if($("#A1_observation1_input2").val() == "1") {
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
    if($("#A1_observation1_input4").val() == "3") {
        $("#A1_observation1_input4").removeClass("btn-danger");
        $("#A1_observation1_input4").addClass("disabled");
    } else {
        $("#A1_observation1_input4").removeClass("btn-light");
        $("#A1_observation1_input4").addClass("btn-danger");
    }
    if($("#A1_observation1_input5").val() == "0") {
        $("#A1_observation1_input5").removeClass("btn-danger");
        $("#A1_observation1_input5").addClass("disabled");
    } else {
        $("#A1_observation1_input5").removeClass("btn-light");
        $("#A1_observation1_input5").addClass("btn-danger");
    }
    if($("#A1_observation1_input6").val() == "0") {
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
    if($("#A1_observation1_input9").val() == "3") {
        $("#A1_observation1_input9").removeClass("btn-danger");
        $("#A1_observation1_input9").addClass("disabled");
    } else {
        $("#A1_observation1_input9").removeClass("btn-light");
        $("#A1_observation1_input9").addClass("btn-danger");
    }
    if($("#A1_observation1_input10").val() == "3") {
        $("#A1_observation1_input10").removeClass("btn-danger");
        $("#A1_observation1_input10").addClass("disabled");
    } else {
        $("#A1_observation1_input10").removeClass("btn-light");
        $("#A1_observation1_input10").addClass("btn-danger");
    }
    if($("#A1_observation1_input11").val() == "3") {
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

    if($("#A1_observation1_input1").val() == "0" && $("#A1_observation1_input2").val() == "1" && $("#A1_observation1_input3").val() == "2" && $("#A1_observation1_input4").val() == "3" && $("#A1_observation1_input5").val() == "0" && $("#A1_observation1_input6").val() == "0" && $("#A1_observation1_input7").val() == "1" && $("#A1_observation1_input8").val() == "1" && $("#A1_observation1_input9").val() == "3" && $("#A1_observation1_input10").val() == "3" && $("#A1_observation1_input11").val() == "3" && $("#A1_observation1_input12").val() == "2" ) {
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

function A1_investigation1_check() {
    if($("#A1_investigation1_input1").val() == "0") {
        $("#A1_investigation1_input1").removeClass("btn-danger");
        $("#A1_investigation1_input1").addClass("disabled");
    } else {
        $("#A1_investigation1_input1").removeClass("btn-light");
        $("#A1_investigation1_input1").addClass("btn-danger");
    }
    if($("#A1_investigation1_input2").val() == "1") {
        $("#A1_investigation1_input2").removeClass("btn-danger");
        $("#A1_investigation1_input2").addClass("disabled");
    } else {
        $("#A1_investigation1_input2").removeClass("btn-light");
        $("#A1_investigation1_input2").addClass("btn-danger");
    }
    if($("#A1_investigation1_input3").val() == "2") {
        $("#A1_investigation1_input3").removeClass("btn-danger");
        $("#A1_investigation1_input3").addClass("disabled");
    } else {
        $("#A1_investigation1_input3").removeClass("btn-light");
        $("#A1_investigation1_input3").addClass("btn-danger");
    }
    if($("#A1_investigation1_input4").val() == "3") {
        $("#A1_investigation1_input4").removeClass("btn-danger");
        $("#A1_investigation1_input4").addClass("disabled");
    } else {
        $("#A1_investigation1_input4").removeClass("btn-light");
        $("#A1_investigation1_input4").addClass("btn-danger");
    }
    if($("#A1_investigation1_input5").val() == "2") {
        $("#A1_investigation1_input5").removeClass("btn-danger");
        $("#A1_investigation1_input5").addClass("disabled");
    } else {
        $("#A1_investigation1_input5").removeClass("btn-light");
        $("#A1_investigation1_input5").addClass("btn-danger");
    }
    if($("#A1_investigation1_input6").val() == "1") {
        $("#A1_investigation1_input6").removeClass("btn-danger");
        $("#A1_investigation1_input6").addClass("disabled");
    } else {
        $("#A1_investigation1_input6").removeClass("btn-light");
        $("#A1_investigation1_input6").addClass("btn-danger");
    }
    if($('input[name=A1_investigation1_input7]:checked').val() == "2") {
        $('input[name=A1_investigation1_input7]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input7]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input7]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_investigation1_input7]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($("#A1_investigation1_input1").val() == "0" && $("#A1_investigation1_input2").val() == "1" && $("#A1_investigation1_input3").val() == "2" && $("#A1_investigation1_input4").val() == "3" && $("#A1_investigation1_input5").val() == "2" && $("#A1_investigation1_input6").val() == "1" && $('input[name=A1_investigation1_input7]:checked').val() == "2") {
        Toast.fire({
            icon: "success",
            title: "答對了!<br>點擊【前往活動2】繼續下去"
        });
        $("#A1_investigation1_confirm").addClass("d-none");
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