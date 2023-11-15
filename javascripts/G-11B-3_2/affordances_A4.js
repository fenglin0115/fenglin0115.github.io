function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("活動4：認識費氏數列與黃金比例的關係");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_G_11B_3_2_A4;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A4_operation1";
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}