function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：認識貝氏定理");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_11A_3_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation2() {
    params.ggbBase64 = ggb_D_11A_3_A1_2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation2";
}

function A1_operation3() {
    params.ggbBase64 = ggb_D_11A_3_A1_3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation3";
}

function A1_operation4() {
    params.ggbBase64 = ggb_D_11A_3_A1_4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation4";
}