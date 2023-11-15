params.ggbBase64 = ggb_N_10_2_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("N-10-2 活動1：複習 " + katex.renderToString("\\left| a \\right|", { throwOnError: false }) + " 與 " +katex.renderToString("\\left| a-b \\right|", { throwOnError: false }) + " 的幾何意義");
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        // alert("test1");
    }

    function backLists() {
        location.href = "./index.html";
    }

    // api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic2", prereguisite);
    // api.registerObjectClickListener("pic3", goal);
    // api.registerObjectClickListener("pic4", bigidea);
    api.registerObjectClickListener("pic6", backLists);
}

var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});


function showA1() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("N-10-2 活動1：複習 " + katex.renderToString("\\left| a \\right|", { throwOnError: false }) + " 與 " +katex.renderToString("\\left| a-b \\right|", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_N_10_2_A1;
    params.appletOnLoad = function(api) {
        var A1_operation1_c1=false, A1_operation1_c2=false, A1_operation1_c3=false;

        function removerListener() {
            api.unregisterObjectUpdateListener("A");
            api.unregisterObjectUpdateListener("B");
        }

        function A1_operation1_check() {
            var a = api.getXcoord("A");
            if (a == -2) {A1_operation1_c1 = true;}
            if (a == 0) {A1_operation1_c2 = true;}
            if (a == 3) {A1_operation1_c3 = true;}
            if (A1_operation1_c1 && A1_operation1_c2 && A1_operation1_c3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                })
            }
        }

        $("#A1_operation1_link").click(function() {
            removerListener();
            api.registerObjectUpdateListener("A", A1_operation1_check);
        });

        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        $("#A1_observation1_link").click(function() {
            removerListener();
        });

        $("#A1_observation1_confirm").click(function() {
            $("#A1_investigation1_link").click();
        });

        $("#A1_investigation1_confirm").click(function() {
            $("#A1_operation2_link").click();
        });

        function A1_operation2_check() {
            var b = api.getXcoord("B");
            if (b == 5) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2'}).then((result) => {
                    $("#A1_operation2_done").css({"opacity": "1"});
                    $("#A1_operation2_next").removeClass("d-none");
                    $("#A1_operation2_link img").css({"opacity": "1"});
                })
            }
        }

        $("#A1_operation2_link").click(function() {
            removerListener();
            api.setVisible("B", true);
            api.setVisible("labelB", true);
            api.setVisible("labelNumberB", true);
            api.setVisible("expressionB", true);
            api.setVisible("g", true);
            api.registerObjectUpdateListener("B", A1_operation2_check);
        });

        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });

        $("#A1_observation2_link").click(function() {
            removerListener();
        });

        $("#A1_observation2_confirm").click(function() {
            $("#A1_observation3_link").click();
        });

        $("#A1_observation3_link").click(function() {
            removerListener();
            api.setVisible("expressionDistanceAB", true);
            api.setVisible("distanceAB", true);
        });

        $("#A1_observation3_confirm").click(function() {
            $("#A1_investigation2_link").click();
        });

        $("#A1_operation1_link").click();
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A1_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA2() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("N-10-2 活動2：" + katex.renderToString("\\left| x-2 \\right|=3", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_N_10_2_A2;
    params.appletOnLoad = function(api) {
        $("#A2_operation2_link").click(function() {
            api.setVisible("B", true);
            // api.setVisible("labelB", true);
            api.setVisible("labelNumberB", true);
            api.setVisible("expressionDistanceAB", true);
            api.setVisible("distanceAB", true);
            api.setVisible("l", true);
            api.setVisible("expressionA", false);
            api.setVisible("expressionDistanceAO", false);
            api.setVisible("f", false);
        });

        $("#A2_operation1_link").click();
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A2_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA3() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("N-10-2 活動2：" + katex.renderToString("\\left| x-2 \\right| < 3", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_N_10_2_A3;
    params.appletOnLoad = function(api) {}
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A3_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA4() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("N-10-2 活動4：" + katex.renderToString("\\left| x+1 \\right| \\geq \\left| x-3 \\right|", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_N_10_2_A4;
    params.appletOnLoad = function(api) {}
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A4_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA5() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動5");
    $("#navbarDropdown").val("活動5");
    $(".outlines").hide();
    $("#outlineA5").show();
    $(".title > span ").html("N-10-2 活動5：" + katex.renderToString("\\left| x+1 \\right| + \\left| x-2 \\right| = 5", { throwOnError: false }) + " 的幾何意義");
    params.id = "ggbApplet05";
    params.ggbBase64 = ggb_N_10_2_A5;
    params.appletOnLoad = function(api) {}
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A5_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
