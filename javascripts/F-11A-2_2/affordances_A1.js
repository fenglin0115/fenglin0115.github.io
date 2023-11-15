function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：當正弦遇上餘弦");
    params.id = "ggbAppletA1_1";
    params.ggbBase64 = ggb_F_11A_2_2_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("b");
    api.unregisterObjectUpdateListener("c");
    api.unregisterObjectUpdateListener("e");
    api.unregisterObjectUpdateListener("i");
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_2_2_A1_1);
}

function A1_operation1_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A1_operation1_check);
}

function A1_operation1_check() {
    var api = applet.getAppletObject();
    let c = api.getValue("c");
    let animating = api.isAnimationRunning();
    if (c == 5*Math.PI/2 && !animating) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作1<br>點擊【前往觀察記錄1】繼續下去"
        });
        $("#A1_operation1_next").removeClass("d-none");
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_2_2_A1_1);
}

function A1_observation1_link() {
    removeListener();
}

function A1_observation1_check() {
    if($('input[name=A1_observation1_input1]:checked').val() == "1") {
        $('input[name=A1_observation1_input1]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_observation1_input1]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A1_observation1_input2]:checked').val() == "3") {
        $('input[name=A1_observation1_input2]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input2]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input2]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_observation1_input2]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A1_observation1_input3]:checked').val() == "3") {
        $('input[name=A1_observation1_input3]').parent().css("background-color", "initial");
        $('input[name=A1_observation1_input3]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation1_input3]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_observation1_input3]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_observation1_input1]:checked').val() == "1" && $('input[name=A1_observation1_input2]:checked').val() == "3" && $('input[name=A1_observation1_input3]:checked').val() == "3") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成觀察記錄1<br>點擊【前往問題探索1】繼續下去"
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

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_2_2_A1_1);
}

function A1_investigation1_link() {
    removeListener();
}

function A1_investigation1_check() {
    if($('input[name=A1_investigation1_input1]:checked').val() == "1") {
        $('input[name=A1_investigation1_input1]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_investigation1_input1]:checked').parent().css("background-color", "#ffb7dd");
    }
    if($('input[name=A1_investigation1_input2]:checked').val() == "1") {
        $('input[name=A1_investigation1_input2]').parent().css("background-color", "initial");
        $('input[name=A1_investigation1_input2]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation1_input2]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_investigation1_input2]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_investigation1_input1]:checked').val() == "1" && $('input[name=A1_investigation1_input2]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成問題探索1<br>點擊【前往實驗操作2】繼續下去"
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

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbAppletA1_2", ggb_F_11A_2_2_A1_2);
}

function A1_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("b", A1_operation2_check);
    api.registerObjectUpdateListener("e", A1_operation2_check);
}

function A1_operation2_check() {
    var api = applet.getAppletObject();
    let b = api.getValue("b");
    let e = api.getValue("e");
    if (b == Math.PI/4 && e == Math.sqrt(2)) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作2<br>點擊【前往觀察記錄2】繼續下去"
        });
        $("#A1_operation2_next").removeClass("d-none");
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbAppletA1_2", ggb_F_11A_2_2_A1_2);
}

function A1_observation2_link() {
    removeListener();
}

function A1_observation2_check() {
    if($('input[name=A1_observation2_input1]:checked').val() == "1") {
        $('input[name=A1_observation2_input1]').parent().css("background-color", "initial");
        $('input[name=A1_observation2_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation2_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_observation2_input1]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_observation2_input1]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成觀察記錄2<br>點擊【前往問題探索2】繼續下去"
        });
        $("#A1_observation2_confirm").addClass("d-none");
        $("#A1_observation2_next").removeClass("d-none");
        $("#A1_observation2_done").css({"opacity": "1"});
        $("#A1_observation2_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbAppletA1_2", ggb_F_11A_2_2_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

function A1_investigation2_check() {
    if($('input[name=A1_investigation2_input1]:checked').val() == "1") {
        $('input[name=A1_investigation2_input1]').parent().css("background-color", "initial");
        $('input[name=A1_investigation2_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation2_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_investigation2_input1]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_investigation2_input1]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成問題探索2<br>點擊【前往實驗操作3】繼續下去"
        });
        $("#A1_investigation2_confirm").addClass("d-none");
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

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbAppletA1_3", ggb_F_11A_2_2_A1_3);
}

function A1_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("i", A1_operation3_check);
}

function A1_operation3_check() {
    var api = applet.getAppletObject();
    let i = api.getValue("i");
    if (i==6) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作3<br>點擊【前往觀察記錄3】繼續下去"
        });
        $("#A1_operation3_next").removeClass("d-none");
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbAppletA1_3", ggb_F_11A_2_2_A1_3);
}

function A1_observation3_link() {
    removeListener();
}

function A1_observation3_check() {
    if($('input[name=A1_observation3_input1]:checked').val() == "1") {
        $('input[name=A1_observation3_input1]').parent().css("background-color", "initial");
        $('input[name=A1_observation3_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_observation3_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_observation3_input1]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_observation3_input1]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成觀察記錄3<br>點擊【前往問題探索3】繼續下去"
        });
        $("#A1_observation3_confirm").addClass("d-none");
        $("#A1_observation3_next").removeClass("d-none");
        $("#A1_observation3_done").css({"opacity": "1"});
        $("#A1_observation3_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}


function A1_investigation3() {
    currentStage = "A1_investigation3";
    loadApplet("ggbAppletA1_2", ggb_F_11A_2_2_A1_3);
}

function A1_investigation3_link() {
    removeListener();
}

function A1_investigation3_check() {
    if($('input[name=A1_investigation3_input1]:checked').val() == "1") {
        $('input[name=A1_investigation3_input1]').parent().css("background-color", "initial");
        $('input[name=A1_investigation3_input1]:checked').parent().css("background-color", "#ddff77");
        $('input[name=A1_investigation3_input1]').attr('disabled', 'disabled');
    } else {
        $('input[name=A1_investigation3_input1]:checked').parent().css("background-color", "#ffb7dd");
    }

    if($('input[name=A1_investigation3_input1]:checked').val() == "1") {
        Toast.fire({
            icon: "success",
            title: "恭喜完成問題探索3<br>點擊【前往活動2】繼續下去"
        });
        $("#A1_investigation3_confirm").addClass("d-none");
        $("#A1_investigation3_next").removeClass("d-none");
        $("#A1_investigation3_done").css({"opacity": "1"});
        $("#A1_investigation3_link img").css({"opacity": "1"});
    } else {
        Toast.fire({
            icon: "error",
            title: "請確認紅色錯誤部分"
        });
    }
}