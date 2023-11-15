// var currentStage = "cover";
params.ggbBase64 = ggb_D_12A_1_1_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("D-12甲-1(1) 活動1：探討隨機變數期望值的意涵");
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S02</dt><dd>能認識離散型隨機變數，並理解其機率分布的意義。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>。</dd><dt>活動二</dt><dd>。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S03</dt><dd>能理解離散型隨機變數的期望值之意義</dd><dt>S04</dt><dd>能理解離散型隨機變數的變異數與標準差之意義。</dd></dl>',
            heightAuto: false
        });
    };
    function backLists() {
        location.href = "./index.html";
    }

    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic2", prereguisite);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
    api.registerObjectClickListener("pic6", backLists);
}

var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function showA1() {
    var initA1 = false;
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-12甲-1(1) 活動1：探討隨機變數期望值的意涵");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_12A_1_1_A1;
    params.appletOnLoad = function(api){
        function ggbMode1() {
            api.setValue("n", 1);
        };
        function ggbMode2() {
            api.setValue("n", 2);
        };
        function ggbMode3() {
            api.setValue("n", 3);
        };
        function ggbMode4() {
            api.setValue("n", 4);
        };
        function removeListener() {
            // api.unregisterObjectUpdateListener("numTree2");
            // api.unregisterObjectUpdateListener("numTree3");
            // api.unregisterObjectUpdateListener("numInRegion2");
            // api.unregisterObjectUpdateListener("numInRegion3");
        }

        // A1_operation1
        $("#A1_operation1_link").click(function() {
            // removeListener();
            ggbMode1();
        });
        if (!initA1) {
            Swal.fire({html: '<div>現在有一個公正的骰子，六個面的數字皆分別為 1 ~ 6 的整數，每面出現的機率均等。現在，試著擲骰子，透過實驗數據來推測骰子每面的點數分別是多少吧！</div>'}); 
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        $("#A1_observation1_next").click(function() {
            $("#A1_investigation1_link").click();
        });

        // A1_investigation1
        $("#A1_investigation1_link").click(function() {
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_investigation1_next").click(function() {
            $("#A1_operation2_link").click();
        });

        // A1_operation2
        $("#A1_operation2_link").click(function() {
            // removeListener();
            ggbMode2();
        });
        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        $("#A1_observation2_link").click(function() {
            // removeListener();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        $("#A1_investigation2_link").click(function() {
            // removeListener();
            ggbMode3();
        });
        $("#A1_investigation2_next").click(function() {
            $("#A1_investigation3_link").click();
        });

        // A1_investigation3
        $("#A1_investigation3_next").click(function() {
            $("#A1_operation3_link").click();
        });

        // A1_operation3
        $("#A1_operation3_link").click(function() {
            // removeListener();
            ggbMode4();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_operation3_next").click(function() {
            $("#A1_observation3_link").click();
        });

        // A1_observation3
        $("#A1_observation3_next").click(function() {
            showA2();
        });

    }

    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA2() {
    var initA2 = false;
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("D-12甲-1(1) 活動2：探討隨機變數變異數的意涵");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_D_12A_1_1_A2_1;

    params.appletOnLoad = function(api){
        // function removeListener() {
        //     api.unregisterObjectUpdateListener("numTree3");
        //     api.unregisterObjectUpdateListener("numTree4");
        //     api.unregisterObjectUpdateListener("numRecord");
        // }

        // A2_operation1
        
        $("#A2_operation1_link").click(function() {
            A2_operation1();
        });
        if (!initA2) {
            // Swal.fire({html: '<div>之前的章節我們學過一階導數值代表在該點的切線斜率值，接下來讓我們來探索一階導數與函數值遞增、遞減的關係。</div>'}); 
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        $("#A2_operation2_link").click(function() {
            A2_operation2();
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        $("#A2_observation2_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        $("#A2_investigation1_next").click(function() {
            $("#A2_operation3_link").click();
        });

        // A2_operation3
        $("#A2_operation3_link").click(function() {
            A2_operation3();
        });
        $("#A2_operation3_next").click(function() {
            $("#A2_operation4_link").click();
        });

        // A2_operation4
        $("#A2_operation4_link").click(function() {
            A2_operation4();
        });
        $("#A2_operation4_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        $("#A2_investigation2_next").click(function() {
            $("#A2_operation5_link").click();
        });

        // A2_operation5
        $("#A2_operation5_link").click(function() {
            A2_operation5();
        });
        $("#A2_operation5_next").click(function() {
            $("#A2_operation6_link").click();
        });

        // A2_operation6
        $("#A2_operation6_link").click(function() {
            A2_operation6();
        });
        $("#A2_operation6_next").click(function() {
            $("#A2_observation3_link").click();
        });

        // A2_observation3
        $("#A2_observation3_link").click(function() {
            A2_observation3();
        });
        $("#A2_observation3_next").click(function() {
            ;
        });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A2_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02_1", ggb_D_12A_1_1_A2_1);
};

function A2_operation1_link() {
    // removeListener();
    var api = applet.getAppletObject();
    api.setValue("n", 1);
};

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_1", ggb_D_12A_1_1_A2_1);
};

function A2_operation2_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 2);
};

function A2_operation3() {
    currentStage = "A2_operation3";
    loadApplet("ggbApplet02_1", ggb_D_12A_1_1_A2_1);
};

function A2_operation3_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 3);
};

function A2_operation4() {
    currentStage = "A2_operation4";
    loadApplet("ggbApplet02_2", ggb_D_12A_1_1_A2_2);
};

function A2_operation4_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 1);
};

function A2_investigation2_link() {
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
}

function A2_operation5() {
    currentStage = "A2_operation5";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
};

function A2_operation5_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 1);
    $(".dropdown-menu li a").click(function(){
        $(this).parent().parent().prev().html($(this).html());
        $(this).parent().parent().prev().val($(this).parent().index());
    });
};

function A2_operation6() {
    currentStage = "A2_operation6";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
};

function A2_operation6_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 2);
};

function A2_observation3() {
    currentStage = "A2_observation3";
    loadApplet("ggbApplet02_3", ggb_D_12A_1_1_A2_3);
};

function A2_observation3_link() {
    var api = applet.getAppletObject();
    api.setValue("n", 3);
};

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
