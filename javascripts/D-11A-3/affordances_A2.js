function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("活動2：貝氏定理的應用");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_D_11A_3_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A2_operation2() {
    params.ggbBase64 = ggb_D_11A_3_A2_2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation2";
}

function A2_operation3() {
    params.ggbBase64 = ggb_D_11A_3_A2_3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation3";
}

function A2_operation4() {
    params.ggbBase64 = ggb_D_11A_3_A2_4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation4";
}