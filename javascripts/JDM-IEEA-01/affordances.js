var currentStage = "cover";
params.ggbBase64 = ggb_JDM_IEEA_01_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", start);

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
    $("#A1_operation1a_link").click(function() {
        A1_operation1a();
    });

    $("#A1_operation1a_confirm").click(function() {
        A1_operation1a_confirm();
    });

    $("#A1_operation1a_next").click(function() {
        $("#A1_operation1_link").click();
    });

    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });

    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
    });

    $("#A1_observation1_link").click(function() {
        A1_observation1();
    });

    $("#A1_observation1_confirm").click(function() {
        A1_observation1_check();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });

    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_confirm();
    });

    $("#A1_investigation1_next").click(function() {
        $("#A1_operation2a_link").click();
    });

    $("#A1_operation2a_link").click(function() {
        A1_operation2a();
    });

    $("#A1_operation2a_confirm").click(function() {
        A1_operation2a_confirm();
    });

    $("#A1_operation2a_next").click(function() {
        $("#A1_operation2_link").click();
    });

    $("#A1_operation2_link").click(function() {
        A1_operation2();
    });

    $("#A1_operation2_next").click(function() {
        $("#A1_observation2_link").click();
    });

    $("#A1_observation2_link").click(function() {
        A1_observation2();
    });

    $("#A1_observation2_confirm").click(function() {
        A1_observation2_check();
    });

    $("#A1_observation2_next").click(function() {
        $("#A1_investigation2_link").click();
    });

    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });

    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_confirm();
    });

    $("#A1_investigation2_next").click(function() {
        $("#A1_investigation3_link").click();
    });

    $("#A1_investigation3_link").click(function() {
        A1_investigation3();
    });

    $("#A1_investigation3_confirm").click(function() {
        A1_investigation3_confirm();
    });

    $("#A1_investigation3_next").click(function() {
        A1_investigation3_next();
    });

    $("#A2_operation1a_link").click(function() {
        A2_operation1a();
    });

    $("#A2_operation1a_confirm").click(function() {
        A2_operation1a_confirm();
    });

    $("#A2_operation1a_next").click(function() {
        $("#A2_operation1_link").click();
    });

    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
    });

    $("#A2_observation1_link").click(function() {
        A2_observation1();
    });

    $("#A2_observation1_confirm").click(function() {
        A2_observation1_check();
    });

    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });

    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });

    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_confirm();
    });

    $("#A2_investigation1_confirm2").click(function() {
        A2_investigation1_confirm2();
    });

    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();
    });

    $("#A2_operation2_link").click(function() {
        A2_operation2();
    });

    $("#A2_operation2_next").click(function() {
        $("#A2_observation2_link").click();
    });

    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });

    $("#A2_observation2_confirm").click(function() {
        A2_observation2_check();
    });    

    $("#A2_observation2_next").click(function() {
        $("#A2_investigation2_link").click();
    });

    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });

    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_confirm();
    });

    $("#A2_investigation2_next").click(function() {
        A2_investigation2_next();
    });

    $("#A2_operation3a_link").click(function() {
        A2_operation3a();
    });

    $("#A2_operation3a_confirm").click(function() {
        A2_operation3a_confirm();
    });

    $("#A2_operation3a_next").click(function() {
        $("#A2_operation3_link").click();
    });

    $("#A2_operation3_link").click(function() {
        A2_operation3();
    });

    $("#A2_operation3_next").click(function() {
        $("#A2_observation3_link").click();
    });

    $("#A2_observation3_link").click(function() {
        A2_observation3();
    });

    $("#A2_observation3_confirm").click(function() {
        A2_observation3_check();
    });

    $("#A2_observation3_next").click(function() {
        $("#A2_investigation3_link").click();
    });

    $("#A2_investigation3_link").click(function() {
        A2_investigation3();
    });

    $("#A2_investigation3_confirm").click(function() {
        A2_investigation3_confirm();
    });

    $("#A2_investigation3_confirm2").click(function() {
        A2_investigation3_confirm2();
    });

    $("#A2_investigation3_confirm3").click(function() {
        A2_investigation3_confirm3();
    });

    $("#A2_investigation3_confirm4").click(function() {
        A2_investigation3_confirm4();
    });

    $("#A2_investigation3_next").click(function() {
        console.log("A2_investigation3 next clicked");
        $("#A2_operation4a_link").click();
    });

    $("#A2_operation4a_link").click(function() {
        A2_operation4a();
    });

    $("#A2_operation4a_confirm").click(function() {
        A2_operation4a_confirm();
    });

    $("#A2_operation4a_next").click(function() {
        $("#A2_operation4_link").click();
    });

    $("#A2_operation4_link").click(function() {
        A2_operation4();
    });

    $("#A2_operation4_next").click(function() {
        $("#A2_observation4_link").click();
    });

    $("#A2_observation4_link").click(function() {
        A2_observation4();
    });

    $("#A2_observation4_confirm").click(function() {
        A2_observation4_check();
    });

    $("#A2_observation4_next").click(function() {
        $("#A2_investigation4_link").click();
    });

    $("#A2_investigation4_link").click(function() {
        A2_investigation4();
    });

    $("#A2_investigation4_confirm").click(function() {
        A2_investigation4_confirm();
    });

    $("#A2_investigation4_confirm2").click(function() {
        A2_investigation4_confirm2();
    });

    $("#A2_investigation4_next").click(function() {
        $("#A2_operation5_link").click();
    });

    $("#A2_operation5_link").click(function() {
        A2_operation5();
    });

    $("#A2_operation5_next").click(function() {
        $("#A2_observation5_link").click();
    });

    $("#A2_observation5_link").click(function() {
        A2_observation5();
    });

    $("#A2_observation5_confirm").click(function() {
        A2_observation5_check();
    });

    $("#A2_observation5_next").click(function() {
        $("#A2_investigation5_link").click();
    });

    $("#A2_investigation5_link").click(function() {
        A2_investigation5();
    });

    $("#A2_investigation5_confirm").click(function() {
        A2_investigation5_confirm();
    });

    $("#A2_investigation5_next").click(function() {
        $("#A2_investigation6_link").click();
    });

    $("#A2_investigation6_link").click(function() {
        A2_investigation6();
    });

    $("#A2_investigation6_confirm").click(function() {
        A2_investigation6_confirm();
    });

    $("#A2_investigation6_confirm2").click(function() {
        A2_investigation6_confirm2();
    });

    $("#A2_investigation6_confirm3").click(function() {
        A2_investigation6_confirm3();
    });

    $("#A2_investigation6_confirm4").click(function() {
        A2_investigation6_confirm4();
    });

    $("#A2_investigation6_confirm5").click(function() {
        A2_investigation6_confirm5();
    });

    $("#A2_investigation6_next").click(function() {
        showA3();
    });

    $("#A3_operation1a_link").click(function() {
        A3_operation1a();
    });

    $("#A3_operation1a_confirm").click(function() {
        A3_operation1a_confirm();
    });

    $("#A3_operation1a_next").click(function() {
        $("#A3_operation1_link").click();
    });

    $("#A3_operation1_link").click(function() {
        A3_operation1();
    });

    $("#A3_operation1_next").click(function() {
        $("#A3_observation1_link").click();
    });

    $("#A3_observation1_link").click(function() {
        A3_observation1();
    });

    $("#A3_observation1_confirm").click(function() {
        A3_observation1_check();
    });

    $("#A3_observation1_next").click(function() {
        $("#A3_investigation1_link").click();
    });

    $("#A3_investigation1_link").click(function() {
        A3_investigation1();
    });

    $("#A3_investigation1_confirm").click(function() {
        A3_investigation1_confirm();
    });

    $("#A3_investigation1_next").click(function() {
        $("#A3_operation2_link").click();
    });

    $("#A3_operation2_link").click(function() {
        A3_operation2();
    });

    $("#A3_operation2_confirm").click(function() {
        A3_operation2_confirm();
    });

    $("#A3_operation2_next").click(function() {
        $("#A3_observation2_link").click();
    });

    $("#A3_observation2_link").click(function() {
        A3_observation2();
    });

    $("#A3_observation2_confirm").click(function() {
        A3_observation2_check();
    });

    $("#A3_observation2_next").click(function() {
        $("#A3_investigation2_link").click();
    });

    $("#A3_investigation2_link").click(function() {
        A3_investigation2();
    });

    $("#A3_investigation2_confirm").click(function() {
        A3_investigation2_check();
    });

    $("#A3_investigation2_next").click(function() {
        $("#A3_operation3_link").click();
    });

    $("#A3_operation3_link").click(function() {
        A3_operation3();
    });

    $("#A3_operation3_next").click(function() {
        $("#A3_observation3_link").click();
    });

    $("#A3_observation3_link").click(function() {
        A3_observation3();
    });

    $("#A3_observation3_confirm").click(function() {
        A3_observation3_check();
    });

    $("#A3_observation3_next").click(function() {
        $("#A3_investigation3_link").click();
    });

    $("#A3_investigation3_link").click(function() {
        A3_investigation3();
    });

    $("#A3_investigation3_confirm").click(function() {
        A3_investigation3_check1();
    });

    $("#A3_investigation3_confirm2").click(function() {
        A3_investigation3_check2();
    });

    $("#A3_investigation3_confirm3").click(function() {
        A3_investigation3_check3();
    });

    $("#A3_investigation3_next").click(function() {
        $("#A3_operation4a_link").click();
    });

    $("#A3_operation4a_link").click(function() {
        A3_operation4a();
    });

    $("#A3_operation4a_confirm").click(function() {
        A3_operation4a_confirm();
    });

    $("#A3_operation4a_next").click(function() {
        $("#A3_operation4_link").click();
    });

    $("#A3_operation4_link").click(function() {
        A3_operation4();
    });

    $("#A3_operation4_next").click(function() {
        $("#A3_observation4_link").click();
    });

    $("#A3_observation4_link").click(function() {
        A3_observation4();
    });

    $("#A3_observation4_confirm").click(function() {
        A3_observation4_check();
    });

    $("#A3_observation4_next").click(function() {
        $("#A3_investigation4_link").click();
    });

    $("#A3_investigation4_link").click(function() {
        A3_investigation4();
    });

    $("#A3_investigation4_confirm").click(function() {
        A3_investigation4_confirm();
    });

    $("#A3_investigation4_next").click(function() {
        $("#A3_operation5_link").click();
    });

    $("#A3_operation5_link").click(function() {
        A3_operation5();
    });

    $("#A3_operation5_confirm").click(function() {
        A3_operation5_confirm();
    });

    $("#A3_operation5_next").click(function() {
        $("#A3_observation5_link").click();
    });

    $("#A3_observation5_link").click(function() {
        A3_observation5();
    });

    $("#A3_observation5_confirm").click(function() {
        A3_observation5_check();
    });

    $("#A3_observation5_next").click(function() {
        $("#A3_investigation5a_link").click();
    });
    
    $("#A3_investigation5a_link").click(function() {
        A3_investigation5a();
    });

    $("#A3_investigation5a_confirm").click(function() {
        A3_investigation5a_confirm();
    });

    $("#A3_investigation5a_next").click(function() {
        $("#A3_investigation5_link").click();
    });

    $("#A3_investigation5_link").click(function() {
        A3_investigation5();
    });

    $("#A3_investigation5_confirm").click(function() {
        A3_investigation5_confirm();
    });

    $("#A3_investigation5_next").click(function() {
        $("#A3_operation6_link").click();
    });

    $("#A3_operation6_link").click(function() {
        A3_operation6();
    });

    $("#A3_operation6_next").click(function() {
        $("#A3_observation6_link").click();
    });

    $("#A3_observation6_link").click(function() {
        A3_observation6();
    });

    $("#A3_observation6_confirm").click(function() {
        A3_observation6_check();
    });

    $("#A3_observation6_next").click(function() {
        $("#A3_investigation6_link").click();
    });

    $("#A3_investigation6_link").click(function() {
        A3_investigation6();
    });

    $("#A3_investigation6_confirm").click(function() {
        A3_investigation6_check1();
    });

    $("#A3_investigation6_confirm2").click(function() {
        A3_investigation6_check2();
    });

    $("#A3_investigation6_confirm3").click(function() {
        A3_investigation6_check3();
    });

    $("#A3_investigation6_next").click(function() {
        showA4();
    });

    $("#A4_operation1_link").click(function() {
        A4_operation1();
    });

    $("#A4_operation1_confirm").click(function() {
        A4_operation1_check1();
    });

    $("#A4_operation1_confirm2").click(function() {
        A4_operation1_check2();
    });

    $("#A4_operation1_confirm3").click(function() {
        A4_operation1_check3();
    });

    $("#A4_operation1_next").click(function() {
        $("#A4_observation1_link").click();
    });

    $("#A4_observation1_link").click(function() {
        A4_observation1();
    });

    $("#A4_observation1_confirm").click(function() {
        A4_observation1_check1();
    });

    $("#A4_observation1_confirm2").click(function() {
        A4_observation1_check2();
    });

    $("#A4_observation1_next").click(function() {
        $("#A4_operation2_link").click();
    });

    $("#A4_operation2_link").click(function() {
        A4_operation2();
    });

    $("#A4_operation2_next").click(function() {
        $("#A4_observation2_link").click();
    });

    $("#A4_observation2_link").click(function() {
        A4_observation2();
    });

    $("#A4_observation2_confirm").click(function() {
        A4_observation2_check();
    });

    $("#A4_observation2_next").click(function() {
        $("#A4_investigation1_link").click();
    });

    $("#A4_investigation1_link").click(function() {
        A4_investigation1();
    });

    $("#A4_investigation1_confirm").click(function() {
        A4_investigation1_confirm();
    });

    $("#A4_investigation1_confirm2").click(function() {
        A4_investigation1_confirm2();
    });

    $("#A4_investigation1_confirm3").click(function() {
        A4_investigation1_confirm3();
    });

    $("#A4_investigation1_confirm4").click(function() {
        A4_investigation1_confirm4();
    });

    $("#A4_investigation1_next").click(function() {
        $("#A4_operation3_link").click();
    });

    $("#A4_operation3_link").click(function() {
        A4_operation3();
    });

    $("#A4_operation3_confirm").click(function() {
        A4_operation3_check1();
    });

    $("#A4_operation3_confirm2").click(function() {
        A4_operation3_check2();
    });

    $("#A4_operation3_confirm3").click(function() {
        A4_operation3_check3();
    });

    $("#A4_operation3_next").click(function() {
        $("#A4_observation3_link").click();
    });

    $("#A4_observation3_link").click(function() {
        A4_observation3();
    });

    $("#A4_observation3_confirm").click(function() {
        A4_observation3_check1();
    });

    $("#A4_observation3_confirm2").click(function() {
        A4_observation3_check2();
    });

    $("#A4_observation3_next").click(function() {
        $("#A4_operation4_link").click();
    });

    $("#A4_operation4_link").click(function() {
        A4_operation4();
    });

    $("#A4_operation4_next").click(function() {
        $("#A4_observation4_link").click();
    });

    $("#A4_observation4_link").click(function() {
        A4_observation4();
    });

    $("#A4_observation4_confirm").click(function() {
        A4_observation4_check();
    });

    $("#A4_observation4_next").click(function() {
        $("#A4_investigation2_link").click();
    });

    $("#A4_investigation2_link").click(function () {
        A4_investigation2();
    });

    $("#A4_investigation2_confirm").click(function () {
        A4_investigation2_confirm();
    });

    $("#A4_investigation2_confirm2").click(function() {
        A4_investigation2_confirm2();
    });

    $("#A4_investigation2_confirm3").click(function() {
        A4_investigation2_confirm3();
    });

    $("#A4_investigation2_confirm4").click(function() {
        A4_investigation2_confirm4();
    });

    $("#A4_investigation2_next").click(function() {
        $("#A4_investigation3_link").click();
    });

    $("#A4_investigation3_link").click(function () {
        A4_investigation3();
    });

    $("#A4_investigation3_confirm").click(function () {
        A4_investigation3_confirm();
    });

    $("#A4_investigation3_confirm3").click(function () {
        A4_investigation3_confirm3();
    });

    $("#A4_investigation3_confirm4").click(function () {
        A4_investigation3_confirm4();
    });

    $("#A4_investigation3_again").click(function () {
        A4_investigation3_again();
    });

    $("#A4_investigation3_end").click(function () {
        A4_investigation3_end();
    });
});