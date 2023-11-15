params.ggbBase64 = ggb_N_12A_1_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("N-12甲-1 活動1：投資報酬率");
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-10-2</dt><dd>三次函數的圖形特徵：二次、三次函數圖形的對稱性，兩者圖形的大域（global）特徵由最高次項決定，而局部（local）則近似一條直線。</dd><dt>N-8-6</dt><dd>等比數列。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<div style="text-align:left;">透過學具操作、觀察、從連續複利的過程認識常數 e。</div>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>N-12甲-1</dt><dd>數列的極限，極限的運算性質，夾擠定理。從連續複利認識常數 e。</dd></dl>',
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
    $(".title > span ").html("N-12甲-1 活動1：投資報酬率");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_N_12A_1_A1_1;
    params.appletOnLoad = function(api){
        function ggbMode1() {
            api.setValue("mode", 1);
        };
        function ggbMode2() {
            api.setValue("mode", 2);
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
            Swal.fire({html: '<div style="text-align:left;">在經濟學中，有兩個長得很像的名詞，叫做「年均報酬率」與「年化報酬率」，譬如有一個投資方案，投資' + katex.renderToString("100", { throwOnError: false }) + ' 萬元，' + katex.renderToString("5", { throwOnError: false }) + ' 年之後會得到 ' + katex.renderToString("120", { throwOnError: false }) + ' 萬元，投資報酬率為 ' + katex.renderToString("20\\%", { throwOnError: false }) + '，則：<br><ul><li>年均報酬率' + katex.renderToString("=20\\%÷5=4\\%", { throwOnError: false }) + '</li><li>年化報酬率' + katex.renderToString("≒3.71\\%", { throwOnError: false }) + '</li></ul>年化報酬率是一種複利計算的方式，以一年為一期作複利，' + katex.renderToString("(1+3.71\\%)^5≒1.2", { throwOnError: false }) + '。</div>'}); 
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
        $("#A1_investigation1_next").click(function() {
            $("#A1_operation2_link").click();
        });

        // A1_operation2
        $("#A1_operation2_link").click(function() {
            // removeListener();
            ggbMode2();
            Swal.fire({html: '<div style="text-align:left;">在基金、區塊鏈等投資活動中，複利計息的方式不一定是以年計息一次，譬如有一個投資案，年利率為 ' + katex.renderToString("100\\%", { throwOnError: false }) + '，如果一年為一期，過了一年後，本利和會是本金的 ' + katex.renderToString("2", { throwOnError: false }) + ' 倍(多出 ' + katex.renderToString("100\\%", { throwOnError: false }) + ' 的利息)，而如果是以半年為一期，一年會計息 ' + katex.renderToString("2", { throwOnError: false }) + ' 次，平均一期的利率為 ' + katex.renderToString("\\frac{100\\%}{2}=50\\%=\\frac{1}{2}", { throwOnError: false }) + '，如果以複利計算的話，一年之後的本利和將是本金的 ' + katex.renderToString("2.25", { throwOnError: false }) + ' 倍。</div>'});
        });
        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        $("#A1_observation2_link").click(function() {
            // removeListener();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
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
    // var initA2 = false;
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("N-12甲-1 活動2：尤拉數 " + katex.renderToString("e", { throwOnError: false }));
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_N_12A_1_A2;
    params.appletOnLoad = function(api){
        function ggbMode3() {
            api.setValue("mode", 3);
        };
        function ggbMode4() {
            api.setValue("mode", 4);
        };
        // function removeListener() {
        //     api.unregisterObjectUpdateListener("numTree3");
        //     api.unregisterObjectUpdateListener("numTree4");
        //     api.unregisterObjectUpdateListener("numRecord");
        // }

        // A2_operation1
        $("#A2_operation1_link").click(function() {
            // removeListener();
            ggbMode3();
        });
        // if (!initA2) {
        //     Swal.fire({html: '<div>之前的章節我們學過一階導數值代表在該點的切線斜率值，接下來讓我們來探索一階導數與函數值遞增、遞減的關係。</div>'}); 
        //     $("#A2_operation1_link").click();
        //     initA2 = true;
        // };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_link").click(function() {
            // removeListener();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_observation1_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        $("#A2_investigation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        $("#A2_operation2_link").click(function() {
            // removeListener();
            ggbMode4();
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        $("#A2_observation2_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        $("#A2_investigation2_next").click(function() {
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
