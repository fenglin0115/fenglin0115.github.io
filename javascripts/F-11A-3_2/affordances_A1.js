function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("活動1：矩陣的應用－旋轉變換");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_11A_3_2_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    params.ggbBase64 = ggb_F_11A_3_2_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
}

function A1_operation2() {
    params.ggbBase64 = ggb_F_11A_3_2_A1_2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation2";
}

function A1_operation3() {
    params.ggbBase64 = ggb_F_11A_3_2_A1_3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation3";
}

function A1_observation5a() {
    params.ggbBase64 = ggb_F_11A_3_1_A1_4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_observation5a";
}

function A1_observation5b() {
    params.ggbBase64 = ggb_F_11A_3_1_A1_5;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_observation5b";
}