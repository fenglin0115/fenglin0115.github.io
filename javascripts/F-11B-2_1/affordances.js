var currentStage = "cover";
params.ggbBase64 = ggb_F_11B_2_cover;
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
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_next").click(function() {
        $("#A1_operation2_link").click();
        A1_operation2();
    });

    $("#A1_operation2_next").click(function() {
        $("#A1_observation2_link").click();
    });

    $("#A1_observation2_next").click(function() {
        $("#A1_investigation2_link").click();
    });

    $("#A1_investigation2_next").click(function() {
        showA2();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
    });

    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });

    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();
        A2_operation2();
    });

    $("#A2_operation2_next").click(function() {
        $("#A2_observation2_link").click();
    });

    $("#A2_observation2_next").click(function() {
        $("#A2_investigation2_link").click();
    });

    $("#A2_investigation2_next").click(function() {
        $("#A2_operation3_link").click();
        A2_operation3();
    });

    $("#A2_operation3_next").click(function() {
        $("#A2_observation3_link").click();
    });

    $("#A2_observation3_next").click(function() {
        $("#A2_investigation3_link").click();
    });

    $("#A2_investigation3_next").click(function() {
        showA3();
    });

    $("#A3_operation1_next").click(function() {
        $("#A3_observation1_link").click();
    });

    $("#A3_observation1_next").click(function() {
        $("#A3_investigation1_link").click();
    });

    $("#A3_investigation1_next").click(function() {
        $("#A3_operation2_link").click();
        A3_operation2();
    });

    $("#A3_operation2_next").click(function() {
        $("#A3_observation2_link").click();
    });

    $("#A3_observation2_next").click(function() {
        $("#A3_investigation2_link").click();
    });

    $("#A3_investigation2_next").click(function() {
        $("#A3_operation3_link").click();
        A3_operation3();
    });

    $("#A3_operation3_next").click(function() {
        $("#A3_observation3_link").click();
    });

    $("#A3_observation3_next").click(function() {
        $("#A3_investigation3_link").click();
    });

    $("#A3_investigation3_next").click(function() {
        $("#A3_operation4_link").click();
        A3_operation4();
    });

    $("#A3_operation4_next").click(function() {
        $("#A3_observation4_link").click();
    });

    $("#A3_observation4_next").click(function() {
        $("#A3_investigation4_link").click();
    });

    $("#A3_investigation4_next").click(function() {
        $("#A3_investigation5_link").click();
    });
});