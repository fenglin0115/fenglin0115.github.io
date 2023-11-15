var currentStage = "cover";
params.ggbBase64 = ggb_F_11A_2_2_cover;
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

// function A1_operation2_link() {
//     var api = applet.getAppletObject();
//     api.setValue("num_a", num_a);
//     api.setValue("num_b", num_b);
// }

// function A1_operation3_link() {
//     var api = applet.getAppletObject();
//     api.setValue("num_a", num_a);
//     api.setValue("num_b", num_b);
// }

$(document).ready(function() {
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
        A1_investigation1_check();
    });

    $("#A1_investigation1_next").click(function() {
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
        A1_investigation2_check();
    });

    $("#A1_investigation2_next").click(function() {
        $("#A1_operation3_link").click();
    });

    $("#A1_operation3_link").click(function() {
        A1_operation3();
    });

    $("#A1_operation3_next").click(function() {
        $("#A1_observation3_link").click();
    });

    $("#A1_observation3_link").click(function() {
        A1_observation3();
    });

    $("#A1_observation3_confirm").click(function() {
        A1_observation3_check();
    });

    $("#A1_observation3_next").click(function() {
        $("#A1_investigation3_link").click();
    });

    $("#A1_investigation3_link").click(function() {
        A1_investigation3();
    });

    $("#A1_investigation3_confirm").click(function() {
        A1_investigation3_check();
    });

    $("#A1_investigation3_next").click(function() {
        showA2();
    });

    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_operation2_link").click();
    });

    $("#A2_operation2_link").click(function() {
        A2_operation2();
    });

    $("#A2_operation2_next").click(function() {
        $("#A2_operation3_link").click();
    });

    $("#A2_operation3_link").click(function() {
        A2_operation3();
    });

    $("#A2_operation3_next").click(function() {
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
        A2_investigation1_check();
    });
});