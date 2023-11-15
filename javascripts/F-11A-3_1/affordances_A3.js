function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("活動3：平面上的鏡射變換");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_11A_3_1_A3;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A3_operation1";
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}