params.ggbBase64 = ggb_F_12A_4_2_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("F-12甲-4(2) 活動1：凹向與一階導數值");
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-10-1-S05</dt><dd>能理解二次函數意義及其圖形特徵與平移關係。</dd><dt>F-10-2</dt><dd>三次函數的圖形特徵：二次、三次函數圖形的對稱性，兩者圖形的大域（global）特徵由最高次項決定，而局部（local）則近似一條直線。</dd><dt>F-12甲-3-S01</dt><dd>能理解切線斜率與導數的關係。</dd><dt>F-12甲-3-S03</dt><dd>能認識多項式函數與簡單代數函數之導函數。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>活動一</dt><dd>以較熟悉的二次函數為例子，將凹向與一階導數(切線斜率)的遞增減連結。</dd><dt>活動二</dt><dd>以一個三次函數為例，同時有凹口向上、凹口向下的區間，銜接活動階段一思考如何判斷一階導數(切線斜率)的遞增減。</dd></dl>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-12甲-4-S05</dt><dd>能理解並判斷函數的凹凸性與反曲點。</dd></dl>',
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
    $(".title > span ").html("F-12甲-4(2) 活動1：凹向與一階導數值");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_12A_4_2_A1;
    params.appletOnLoad = function(api){
        function ggbMode1() {
            api.setValue("mode1", true);
        };
        function ggbMode2() {
            api.setValue("mode1", false);
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
            Swal.fire({html: '<div>我們在高一的時候已經學過了二次函數，當時介紹過開口方向有分向上與向下，開口方向指的就是函數圖形的凹向，接下來就讓我們來認識如何判斷函數圖形的凹向吧！</div>'}); 
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        $("#A1_observation1_link").click(function() {
            // removeListener();
            ggbMode1();
        });
        $("#A1_observation1_next").click(function() {
            $("#A1_investigation1_link").click();
        });

        // A1_investigation1
        $("#A1_investigation1_link").click(function() {
            // removeListener();
            ggbMode1();
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
            ggbMode2();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        $("#A1_investigation2_link").click(function() {
            // removeListener();
            ggbMode2();
        });
        $("#A1_investigation2_next").click(function() {
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
    $(".title > span ").html("F-12甲-4(2) 活動2：凹向與二階導數值");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_12A_4_2_A2;
    params.appletOnLoad = function(api){
        // function ggbMode1_map1() {
        //     api.setValue("mode3", false);
        //     api.setValue("modeButton", false);
        //     api.setValue("modeInvest1", false);
        //     api.setValue("modeInvest2", false);
        // };
        // function ggbMode2_map1() {
        //     api.setValue("mode3", false);
        //     api.setValue("modeButton", true);
        //     api.setValue("modeInvest1", false);
        //     api.setValue("modeInvest2", false);
        // };
        // function ggbMode1_map2() {
        //     api.setValue("mode3", true);
        //     api.setValue("modeButton", false);
        //     api.setValue("modeInvest1", false);
        //     api.setValue("modeInvest2", false);
        // };
        // function ggbMode2_map2() {
        //     api.setValue("mode3", true);
        //     api.setValue("modeButton", true);
        //     api.setValue("modeInvest1", false);
        //     api.setValue("modeInvest2", false);
        // };
        // function ggbMode3_1() {
        //     api.setValue("mode3", false);
        //     api.setValue("modeButton", false);
        //     api.setValue("modeInvest1", true);
        //     api.setValue("modeInvest2", false);
        // };
        // function ggbMode3_2() {
        //     api.setValue("mode3", false);
        //     api.setValue("modeButton", false);
        //     api.setValue("modeInvest1", false);
        //     api.setValue("modeInvest2", true);
        // };
        // function removeListener() {
        //     api.unregisterObjectUpdateListener("numTree3");
        //     api.unregisterObjectUpdateListener("numTree4");
        //     api.unregisterObjectUpdateListener("numRecord");
        // }

        // A2_operation1
        if (!initA2) {
            Swal.fire({html: '<div>在活動階段一我們觀察到函數圖形的凹向與一階導數值的變化有關，接下來讓我們來觀察如何判斷一階導數值的變化情況吧！</div>'}); 
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        $("#A2_investigation1_next").click(function() {
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

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
