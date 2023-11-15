var currentStage = "cover";
params.ggbBase64 = ggb_D_11A_2_cover;
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

$(document).ready(function() {
    $("#A1_operation1_next").click(function() {
        $("#A1_operation2_link").click();
        $("#A1_operation1_done").css({"opacity": "1"});
        $("#A1_operation1_link img").css({"opacity": "1"});
    });

    $("#A1_operation2_next").click(function() {
        $("#A1_observation1_link").click();
        $("#A1_operation2_done").css({"opacity": "1"});
        $("#A1_operation2_link img").css({"opacity": "1"});
    });

    $("#A1_observation1_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });
    });

    $("#A1_observation1_confirm").click(function() {
        A1_observation1_check();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_link").click(function() {
        $(".dropdown-menu li a").click(function(){
            $(this).parent().parent().prev().removeClass("error");
            $(this).parent().parent().prev().addClass("btn-light");
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });
    });

    $("#A1_investigation1_confirm").click(function() {
        A1_investigation1_check();
    });

    $("#A1_investigation1_next").click(function() {
        showA2();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
        $("#A2_operation1_done").css({"opacity": "1"});
        $("#A2_operation1_link img").css({"opacity": "1"});
    });

    $("#A2_observation1_confirm").click(function() {
        A2_observation1_check();
    });

    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });

    $("#A2_investigation1_confirm").click(function() {
        A2_investigation1_check();
    });
});