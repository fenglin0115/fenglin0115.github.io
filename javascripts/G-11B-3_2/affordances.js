var currentStage = "cover";
params.ggbBase64 = ggb_G_11B_3_2_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }
}

$(document).ready(function() {
    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_operation2_link").click();
    });

    $("#A1_operation2_next").click(function() {
        $("#A1_observation2_link").click();
    });

    $("#A1_observation2_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_next").click(function() {
        showA2();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_operation2_link").click();
    });

    $("#A2_operation2_next").click(function() {
        $("#A2_observation1_link").click();
    });

    $("#A2_observation1_next").click(function() {
        showA3();
    });

    $("#A3_operation1_next").click(function() {
        $("#A3_observation1_link").click();
    });

    $("#A3_observation1_next").click(function() {
        $("#A3_operation2_link").click();
    });

    $("#A3_operation2_next").click(function() {
        $("#A3_investigation1_link").click();
    });

    $("#A3_investigation1_next").click(function() {
        $("#A3_operation3_link").click();
    });

    $("#A3_operation3_next").click(function() {
        $("#A3_investigation2_link").click();
    });

    $("#A3_investigation2_next").click(function() {
        showA4();
    });

    $("#A4_operation1_next").click(function() {
        $("#A4_observation1_link").click();
    });

    $("#A4_observation1_next").click(function() {
        $("#A4_operation2_link").click();
    });

    $("#A4_operation2_next").click(function() {
        $("#A4_observation2_link").click();
    });
});