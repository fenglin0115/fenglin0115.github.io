function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：線性變換後的點坐標");
    params.id = "ggbAppletA1_1";
    params.ggbBase64 = ggb_F_11A_3_1_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_operation1_link() {
    removeListener();
    splitBarSetting(3, 300);
}



function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_operation2_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A1_operation2_check);
    api.registerObjectUpdateListener("num_a", A1_operation2_check);
    api.registerObjectUpdateListener("num_b", A1_operation2_check);
    api.registerObjectUpdateListener("num_c", A1_operation2_check);
    api.registerObjectUpdateListener("num_d", A1_operation2_check);
    api.registerObjectUpdateListener("P", A1_operation2_check);
    splitBarSetting(3, 300);
}

function A1_operation2_check() {
    var api = applet.getAppletObject();
    let a = api.getValue("num_a");
    let b = api.getValue("num_b");
    let c = api.getValue("num_c");
    let d = api.getValue("num_d");
    let px = api.getXcoord("P");
    let py = api.getYcoord("P");

    if (a==1 && b==-2 && c==3 && d==0 && px==1 && py==0) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作2<br>點擊【前往觀察記錄1】繼續下去"
        });
        $("#A1_operation2_next").removeClass("d-none");
    }
}

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_observation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().removeClass("error");
        $(this).parent().parent().prev().addClass("btn-light");
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 300);
}

function A1_observation1_check() {
    if($("#A1_observation1_input1").val() == "4") {
        $("#A1_observation1_input1").removeClass("btn-light");
        $("#A1_observation1_input1").removeClass("btn-danger");
        $("#A1_observation1_input1").addClass("btn-success");
        $("#A1_observation1_input1").addClass("disabled");
    } else {
        $("#A1_observation1_input1").removeClass("btn-light");
        $("#A1_observation1_input1").addClass("btn-danger");
    }
    if($("#A1_observation1_input2").val() == "6") {
        $("#A1_observation1_input2").removeClass("btn-light");
        $("#A1_observation1_input2").removeClass("btn-danger");
        $("#A1_observation1_input2").addClass("btn-success");
        $("#A1_observation1_input2").addClass("disabled");
    } else {
        $("#A1_observation1_input2").removeClass("btn-light");
        $("#A1_observation1_input2").addClass("btn-danger");
    }
    if($("#A1_observation1_input1").val() == "4" && $("#A1_observation1_input2").val() == "6") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往實驗操作3】繼續下去"
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

function A1_operation3() {
    currentStage = "A1_operation3";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_operation3_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A1_operation3_check);
    api.registerObjectUpdateListener("num_a", A1_operation3_check);
    api.registerObjectUpdateListener("num_b", A1_operation3_check);
    api.registerObjectUpdateListener("num_c", A1_operation3_check);
    api.registerObjectUpdateListener("num_d", A1_operation3_check);
    api.registerObjectUpdateListener("P", A1_operation3_check);
    splitBarSetting(3, 300);
}

function A1_operation3_check() {
    var api = applet.getAppletObject();
    let a = api.getValue("num_a");
    let b = api.getValue("num_b");
    let c = api.getValue("num_c");
    let d = api.getValue("num_d");
    let px = api.getXcoord("P");
    let py = api.getYcoord("P");

    if (a==1 && b==-2 && c==3 && d==0 && px==0 && py==1) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作3<br>點擊【前往觀察記錄2】繼續下去"
        });
        $("#A1_operation3_next").removeClass("d-none");
    }
}

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_observation2_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().removeClass("error");
        $(this).parent().parent().prev().addClass("btn-light");
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 300);
}

function A1_observation2_check() {
    if($("#A1_observation2_input1").val() == "1") {
        $("#A1_observation2_input1").removeClass("btn-light");
        $("#A1_observation2_input1").removeClass("btn-danger");
        $("#A1_observation2_input1").addClass("btn-success");
        $("#A1_observation2_input1").addClass("disabled");
    } else {
        $("#A1_observation2_input1").removeClass("btn-light");
        $("#A1_observation2_input1").addClass("btn-danger");
    }
    if($("#A1_observation2_input2").val() == "3") {
        $("#A1_observation2_input2").removeClass("btn-light");
        $("#A1_observation2_input2").removeClass("btn-danger");
        $("#A1_observation2_input2").addClass("btn-success");
        $("#A1_observation2_input2").addClass("disabled");
    } else {
        $("#A1_observation2_input2").removeClass("btn-light");
        $("#A1_observation2_input2").addClass("btn-danger");
    }
    if($("#A1_observation2_input1").val() == "1" && $("#A1_observation2_input2").val() == "3") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往問題探索1】繼續下去"
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

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbAppletA1_1", ggb_F_11A_3_1_A1_1);
}

function A1_investigation1_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().removeClass("error");
        $(this).parent().parent().prev().addClass("btn-light");
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 300);
}

function A1_investigation1_check() {
    if($("#A1_investigation1_input1").val() == "0") {
        $("#A1_investigation1_input1").removeClass("btn-light");
        $("#A1_investigation1_input1").removeClass("btn-danger");
        $("#A1_investigation1_input1").addClass("btn-success");
        $("#A1_investigation1_input1").addClass("disabled");
    } else {
        $("#A1_investigation1_input1").removeClass("btn-light");
        $("#A1_investigation1_input1").addClass("btn-danger");
    }
    if($("#A1_investigation1_input2").val() == "2") {
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
    if($("#A1_investigation1_input4").val() == "3") {
        $("#A1_investigation1_input4").removeClass("btn-light");
        $("#A1_investigation1_input4").removeClass("btn-danger");
        $("#A1_investigation1_input4").addClass("btn-success");
        $("#A1_investigation1_input4").addClass("disabled");
    } else {
        $("#A1_investigation1_input4").removeClass("btn-light");
        $("#A1_investigation1_input4").addClass("btn-danger");
    }

    if($("#A1_investigation1_input1").val() == "0" && $("#A1_investigation1_input2").val() == "2" && $("#A1_investigation1_input3").val() == "1" && $("#A1_investigation1_input4").val() == "3") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往實驗操作4】繼續下去"
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

function A1_operation4() {
    currentStage = "A1_operation4";
    loadApplet("ggbAppletA1_2", ggb_F_11A_3_1_A1_2);
}

function A1_operation4_link() {
    removeListener();
    var api = applet.getAppletObject();
    api.registerObjectUpdateListener("c", A1_operation4_check);
    api.registerObjectUpdateListener("num_a", A1_operation4_check);
    api.registerObjectUpdateListener("num_b", A1_operation4_check);
    api.registerObjectUpdateListener("num_c", A1_operation4_check);
    api.registerObjectUpdateListener("num_d", A1_operation4_check);
    api.registerObjectUpdateListener("P", A1_operation4_check);
    api.registerObjectUpdateListener("Q", A1_operation4_check);
    api.registerObjectUpdateListener("a", A1_operation4_check);
    api.registerObjectUpdateListener("b", A1_operation4_check);
    api.registerObjectUpdateListener("d", A1_operation4_check);
    api.registerObjectUpdateListener("e", A1_operation4_check);
    api.registerObjectUpdateListener("i", A1_operation4_check);
    api.registerObjectUpdateListener("j", A1_operation4_check);
    api.registerObjectUpdateListener("k", A1_operation4_check);
    splitBarSetting(3, 300);
}

function A1_operation4_check() {
    var api = applet.getAppletObject();
    let a = api.getValue("num_a");
    let b = api.getValue("num_b");
    let c = api.getValue("num_c");
    let d = api.getValue("num_d");
    let px = api.getXcoord("P");
    let py = api.getYcoord("P");
    let qx = api.getXcoord("Q");
    let qy = api.getYcoord("Q");
    let showP = api.getValue("a");
    let showQ = api.getValue("d");
    let showP1 = api.getValue("b");
    let showQ1 = api.getValue("e");
    let showPQ = api.getValue("i");
    let showP1Q1 = api.getValue("j");
    let showMPQ = api.getValue("k");

    if(a==3 && b==1 && c==-2 && d==2 && px==1 && py==3 && qx==1 && qy==-1 && showP==1 && showQ==1 && showP1==1 && showQ1==1 && showPQ==1 && showP1Q1==1 && showMPQ==1) {
        Toast.fire({
            icon: "success",
            title: "恭喜完成實驗操作4<br>點擊【前往觀察記錄3】繼續下去"
        });
        $("#A1_operation4_next").removeClass("d-none");
    }
}

function A1_observation3() {
    currentStage = "A1_observation3";
    loadApplet("ggbAppletA1_2", ggb_F_11A_3_1_A1_2);
}

function A1_observation3_link() {
    removeListener();
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().removeClass("error");
        $(this).parent().parent().prev().addClass("btn-light");
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
    splitBarSetting(3, 300);
}

function A1_observation3_check() {
    if($("#A1_observation3_input1").val() == "2") {
        $("#A1_observation3_input1").removeClass("btn-light");
        $("#A1_observation3_input1").removeClass("btn-danger");
        $("#A1_observation3_input1").addClass("btn-success");
        $("#A1_observation3_input1").addClass("disabled");
    } else {
        $("#A1_observation3_input1").removeClass("btn-light");
        $("#A1_observation3_input1").addClass("btn-danger");
    }
    if($("#A1_observation3_input2").val() == "1") {
        $("#A1_observation3_input2").removeClass("btn-light");
        $("#A1_observation3_input2").removeClass("btn-danger");
        $("#A1_observation3_input2").addClass("btn-success");
        $("#A1_observation3_input2").addClass("disabled");
    } else {
        $("#A1_observation3_input2").removeClass("btn-light");
        $("#A1_observation3_input2").addClass("btn-danger");
    }
    if($("#A1_observation3_input2").val() == "1") {
        $("#A1_observation3_input3").removeClass("btn-light");
        $("#A1_observation3_input3").removeClass("btn-danger");
        $("#A1_observation3_input3").addClass("btn-success");
        $("#A1_observation3_input3").addClass("disabled");
    } else {
        $("#A1_observation3_input3").removeClass("btn-light");
        $("#A1_observation3_input3").addClass("btn-danger");
    }
    if($("#A1_observation3_input4").val() == "1") {
        $("#A1_observation3_input4").removeClass("btn-light");
        $("#A1_observation3_input4").removeClass("btn-danger");
        $("#A1_observation3_input4").addClass("btn-success");
        $("#A1_observation3_input4").addClass("disabled");
    } else {
        $("#A1_observation3_input4").removeClass("btn-light");
        $("#A1_observation3_input4").addClass("btn-danger");
    }
    if($("#A1_observation3_input5").val() == "2") {
        $("#A1_observation3_input5").removeClass("btn-light");
        $("#A1_observation3_input5").removeClass("btn-danger");
        $("#A1_observation3_input5").addClass("btn-success");
        $("#A1_observation3_input5").addClass("disabled");
    } else {
        $("#A1_observation3_input5").removeClass("btn-light");
        $("#A1_observation3_input5").addClass("btn-danger");
    }

    if($("#A1_observation3_input1").val() == "2" && $("#A1_observation3_input2").val() == "1" && $("#A1_observation3_input2").val() == "1" && $("#A1_observation3_input4").val() == "1" && $("#A1_observation3_input5").val() == "2") {
        Toast.fire({
            icon: "success",
            title: "答對了! 點擊【前往問題探索2】繼續下去"
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