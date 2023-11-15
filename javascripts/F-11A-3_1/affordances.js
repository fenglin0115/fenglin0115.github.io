var currentStage = "cover";
params.ggbBase64 = ggb_F_11A_3_1_cover;
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

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
});

function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("c");
    api.unregisterObjectUpdateListener("P");
}

$(document).ready(function() {
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });

    $("#A1_operation1_next").click(function() {
        $("#A1_operation2_link").click();
    });

    $("#A1_operation2_link").click(function() {
        A1_operation2();
    });
    
    $("#A1_operation2_next").click(function() {
        $("#A1_observation1_link").click();
    });

    $("#A1_observation1_link").click(function() {
        A1_observation1();
    });

    $("#A1_observation1_confirm").click(function() {
        A1_observation1_check();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_operation3_link").click();
    });

    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });

    $("#A1_operation3_next").click(function() {
        $("#A1_observation2_link").click();
    });

    $("#A1_observation2_link").click(function() {
        A1_observation2();
    });

    $("#A1_observation2_confirm").click(function() {
        A1_observation2_check();
    });

    $("#A1_observation2_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });

    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });

    $("#A1_investigation1_next").click(function() {
        $("#A1_operation4_link").click();
    });

    $("#A1_operation4_link").click(function() {
        A1_operation4();
    });

    $("#A1_operation4_next").click(function() {
        $("#A1_observation3_link").click();
    });

    $("#A1_observation3_link").click(function() {
        A1_observation3();
    });

    $("#A1_observation3_confirm").click(function() {
        A1_observation3_check();
    });

    $("#A1_observation3_next").click(function() {
        $("#A1_investigation2_link").click();
    });

    $("#A1_investigation2_next").click(function() {
        $("#A1_operation5_link").click();
    });

    $("#A1_operation5_link").click(function() {
        loadApplet("ggbAppletA1_3", ggb_F_11A_3_1_A1_3);
    });

    $("#A1_operation5_next").click(function() {
        $("#A1_observation4_link").click();
    });

    $("#A1_observation4_next").click(function() {
        $("#A1_investigation3_link").click();
    });

    $("#A1_investigation3_next").click(function() {
        $("#A1_operation6_link").click();
    });

    $("#A1_operation6_next").click(function() {
        $("#A1_observation5_link").click();
    });

    $("#A1_observation5_next").click(function() {
        $("#A1_investigation4_link").click();
    });

    $("#A1_investigation4_next").click(function() {
        $("#A1_operation7_link").click();
    });

    $("#A1_operation7_next").click(function() {
        $("#A1_observation6_link").click();
    });

    $("#A1_observation6_next").click(function() {
        $("#A1_investigation5_link").click();
    });

    $("#A1_investigation5_next").click(function() {
        showA2();
    });
});