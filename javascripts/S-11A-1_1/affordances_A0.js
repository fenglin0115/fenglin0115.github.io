function showA0() {
    showLoading();
    $("#navbarDropdown").text("活動0");
    $("#navbarDropdown").val("活動0");
    $(".outlines").hide();
    $("#outlineA0").show();
    $(".title > span ").html("活動0：一點、二點、共線三點無法決定一平面");
    params.id = "ggbApplet00";
    params.ggbBase64 = ggb_S_11A_1_1_A0;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A0_operation1";
    showWorksheetsContents("A0_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}