params.ggbBase64 = ggb_D_10_4_cover;
params.appletOnLoad = function(api) {
    // 開始實驗
    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }
    // 預備知識
    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>D-10-2-S01：</dt><dd>能認識一維(組)數據中眾數、中位數、平均數的意義。</dd><dt>D-10-4-S02：</dt><dd>能理解古典機率的意義，並能在不同隨機試驗下計算各事件機率。</dd></dl>',
            heightAuto: false
        });
    }
    // 學習目標
    function goal() {
        Swal.fire({
            html: '<div style="text-align:left;">透過操作學具先複習平均數與機率的概念，接著在抽獎試驗中不同抽獎次數的情況下，觀察獎金平均價值的規律，最後理解以各事件發生之機率作為權數來計算期望值的意義。</div>',
            heightAuto: false
        });
    };
    // 核心概念
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>D-10-4-S05：</dt><dd>認識期望值，並理解期望值的定義及其各事件須滿足的條件。</dd><dt>D-10-4-S06：</dt><dd>學習計算在不同生活情境下的期望值，並理解期望值所代表的意義。</dd></dl>',
            heightAuto: false
        });
    };
    // 回到列表
    function backLists() {
        location.href = "./index.html";
    };

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

// var currentStage = "";
// var visitedA1 = false, visitedA2 = false;

function showA1() {
    var initA1 = false;
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-10-4 活動1：探討隨機試驗中相對次數與機率值的關係");
    // currentStage = "A1_operation1";
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_10_4_A1;
    params.appletOnLoad = function(api) {

        function removeListener() {
            api.unregisterObjectClickListener("buttonSetFine");
            api.unregisterObjectClickListener("buttonOnce");
            api.unregisterObjectClickListener("buttonPause");
            api.unregisterObjectClickListener("buttonNumR");
            api.unregisterObjectUpdateListener("nAll");
            // api.unregisterObjectUpdateListener("viewNum");
        }

        // A1_operation1
        function A1_operation1_check() {
            var n1 = api.getValue("n_O");
            var n2 = api.getValue("n_G");
            var n3 = api.getValue("n_B");
            if (n1 === 6 && n2 === 3 && n3 === 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請確認各色球個數'})
            }
        };
        $("#A1_operation1_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A1_operation1_check);
        });
        if (!initA1) { 
            Swal.fire({html: '<img src="./images/content/lotteryMachine.png" height="150"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">這是一個抽獎實驗。<br>已知搖獎機中有橘、綠、藍三種顏色的球，共 10 顆。<br>每次從搖獎機中搖出一球之後便放回，即算完成一次抽獎。</div>'});
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        function A1_observation1_check() {
            var A1_observation1_input1_usrans1 = $("#A1_observation1_input1_ans1").val();
            var A1_observation1_input1_usrans2 = $("#A1_observation1_input1_ans2").val();
            var A1_observation1_input1_usrans3 = $("#A1_observation1_input1_ans3").val();
            var A1_observation1_input2_usrans1 = $("#A1_observation1_input2_ans1").val();
            var A1_observation1_input2_usrans2 = $("#A1_observation1_input2_ans2").val();
            var A1_observation1_input2_usrans3 = $("#A1_observation1_input2_ans3").val();
            var input1_usrans1_check = (A1_observation1_input1_usrans1 == "2");
            var input1_usrans2_check = (A1_observation1_input1_usrans2 == "1");
            var input1_usrans3_check = (A1_observation1_input1_usrans3 == "0");
            var input2_usrans1_check = (A1_observation1_input2_usrans1 == "2");
            var input2_usrans2_check = (A1_observation1_input2_usrans2 == "1");
            var input2_usrans3_check = (A1_observation1_input2_usrans3 == "0");
            if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input2_usrans1_check && input2_usrans2_check && input2_usrans3_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({"opacity": "1"});
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的色球個數配置'})
            }
        }
        $("#A1_observation1_link").click(function() {
            removeListener();
            $(".dropdown-menu li a").click(function(){
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

        // A1_investigation1
        function A1_investigation1_check() {
            var n1 = $('input[name=A1_investigation1_input1]:checked').val();
            var n2 = $("#A1_investigation1_input2").val();
            if (n1 != undefined && n2 != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            } else if (n1 == undefined && n2 == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (n1 == undefined) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請回答問題'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            }
        }
        $("#A1_investigation1_link").click(function() {
            removeListener();
        });
        $("#A1_investigation1_confirm").click(function() {
            A1_investigation1_check();
        });
        $("#A1_investigation1_next").click(function() {
            $("#A1_operation2_link").click();
        });

        // A1_operation2
        function A1_operation2_check() {
            var count = api.getValue("nAll") + 1;
            if (count == 10) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A1_operation2_done").css({"opacity": "1"});
                    $("#A1_operation2_next").removeClass("d-none");
                    $("#A1_operation2_link img").css({"opacity": "1"});
                })
            } 
        }
        $("#A1_operation2_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonOnce", A1_operation2_check);
        });
        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        var fO, fG, fB, nAll, rfO, rfG, rfB, listRF;
        $("#A1_observation2_link").click(function() {
            removeListener();
            fO = api.getValue("F_O");
            fG = api.getValue("F_G");
            fB = api.getValue("F_B");
            nAll = api.getValue("nAll");
            rfO = numRound(fO/nAll,2);
            rfG = numRound(fG/nAll,2);
            rfB = numRound(fB/nAll,2);
            listRF = [rfO, rfG, rfB];
            shuffle(listRF);
        });
        $("#A1_observation2_record").click(function() {
            function createOption() {
                $("#A1_observation2_input1_ans1").html(katex.renderToString("" + fO, { throwOnError: false }));
                $("#A1_observation2_input1_ans2").html(katex.renderToString("" + fG, { throwOnError: false }));
                $("#A1_observation2_input1_ans3").html(katex.renderToString("" + fB, { throwOnError: false }));
                $("#A1_observation2_input2_ans1").removeClass("d-none");
                $("#A1_observation2_input2_ans2").removeClass("d-none");
                $("#A1_observation2_input2_ans3").removeClass("d-none");
                $("#A1_observation2_input2_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation2_input2_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation2_input2_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A1_observation2_input2_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation2_input2_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation2_input2_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A1_observation2_input2_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation2_input2_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation2_input2_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $(".dropdown-menu li a").click(function(){
                    $(this).parent().parent().prev().html($(this).html());
                    $(this).parent().parent().prev().val(listRF[$(this).parent().index()]);
                });
            }
            createOption();
        });
        function A1_observation2_check() {
            var A1_observation2_input2_usrans1 = $("#A1_observation2_input2_ans1").val();
            var A1_observation2_input2_usrans2 = $("#A1_observation2_input2_ans2").val();
            var A1_observation2_input2_usrans3 = $("#A1_observation2_input2_ans3").val();
            var input2_usrans1_check = (A1_observation2_input2_usrans1 == rfO);
            var input2_usrans2_check = (A1_observation2_input2_usrans2 == rfG);
            var input2_usrans3_check = (A1_observation2_input2_usrans3 == rfB);
            if (input2_usrans1_check && input2_usrans2_check && input2_usrans3_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({"opacity": "1"});
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的抽獎結果'})
            }
        };
        $("#A1_observation2_confirm").click(function() {
            A1_observation2_check();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        function A1_investigation2_check() {
            var n1 = $('input[name=A1_investigation2_input1]:checked').val();
            var n2 = $("#A1_investigation2_textarea1").val();
            if (n1 != undefined && n2 != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({"opacity": "1"});
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({"opacity": "1"});
                })
            } else if (n1 == undefined && n2 == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (n1 == undefined) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請回答問題'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            }
        };
        $("#A1_investigation2_link").click(function() {
            removeListener();
        });
        $("#A1_investigation2_confirm").click(function() {
            A1_investigation2_check();
        });
        $("#A1_investigation2_next").click(function() {
            $("#A1_operation3_link").click();
        });

        // A1_operation3
        function A1_operation3_check() {
            var count = api.getValue("nAll");
            if (count == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                    $("#A1_operation3_done").css({"opacity": "1"});
                    $("#A1_operation3_next").removeClass("d-none");
                    $("#A1_operation3_link img").css({"opacity": "1"});
                })
            }
        };
        function A1_operation3_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查一下「自動抽獎次數」是否設定正確'})
            }
        };
        $("#A1_operation3_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A1_operation3_checkSet);
            api.registerObjectUpdateListener("nAll", A1_operation3_check);
        });
        $("#A1_operation3_next").click(function() {
            $("#A1_observation3_link").click();
        });

        // A1_observation3
        $("#A1_observation3_link").click(function() {
            removeListener();
            fO = api.getValue("F_O");
            fG = api.getValue("F_G");
            fB = api.getValue("F_B");
            nAll = api.getValue("nAll");
            rfO = numRound(fO/nAll,2);
            rfG = numRound(fG/nAll,2);
            rfB = numRound(fB/nAll,2);
            listRF = [rfO, rfG, rfB];
            shuffle(listRF);
        });
        $("#A1_observation3_record").click(function() {
            function createOption() {
                $("#A1_observation3_input1_ans1").html(katex.renderToString("" + fO, { throwOnError: false }));
                $("#A1_observation3_input1_ans2").html(katex.renderToString("" + fG, { throwOnError: false }));
                $("#A1_observation3_input1_ans3").html(katex.renderToString("" + fB, { throwOnError: false }));
                $("#A1_observation3_input2_ans1").removeClass("d-none");
                $("#A1_observation3_input2_ans2").removeClass("d-none");
                $("#A1_observation3_input2_ans3").removeClass("d-none");
                $("#A1_observation3_input2_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation3_input2_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation3_input2_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A1_observation3_input2_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation3_input2_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation3_input2_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A1_observation3_input2_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A1_observation3_input2_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A1_observation3_input2_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $(".dropdown-menu li a").click(function(){
                    $(this).parent().parent().prev().html($(this).html());
                    $(this).parent().parent().prev().val(listRF[$(this).parent().index()]);
                });
            }
            createOption();
        });
        function A1_observation3_check() {
            var A1_observation3_input2_usrans1 = $("#A1_observation3_input2_ans1").val();
            var A1_observation3_input2_usrans2 = $("#A1_observation3_input2_ans2").val();
            var A1_observation3_input2_usrans3 = $("#A1_observation3_input2_ans3").val();
            var input2_usrans1_check = (A1_observation3_input2_usrans1 == rfO);
            var input2_usrans2_check = (A1_observation3_input2_usrans2 == rfG);
            var input2_usrans3_check = (A1_observation3_input2_usrans3 == rfB);
            if (input2_usrans1_check && input2_usrans2_check && input2_usrans3_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A1_observation3_confirm").hide();
                    $("#A1_observation3_done").css({"opacity": "1"});
                    $("#A1_observation3_next").removeClass("d-none");
                    $("#A1_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的抽獎結果'})
            }
        };
        $("#A1_observation3_confirm").click(function() {
            A1_observation3_check();
        });
        $("#A1_observation3_next").click(function() {
            $("#A1_investigation3_link").click();
        });

        // A1_investigation3
        $("#A1_investigation3_b1").click(function () {
            var input1_ans1 = $("#A1_observation2_input1_ans1").html();
            var input1_ans2 = $("#A1_observation2_input1_ans2").html();
            var input1_ans3 = $("#A1_observation2_input1_ans3").html();
            var input2_ans1 = $("#A1_observation2_input2_ans1").html();
            var input2_ans2 = $("#A1_observation2_input2_ans2").html();
            var input2_ans3 = $("#A1_observation2_input2_ans3").html();
            $("#A1_investigation3_n10f_ans1").html(input1_ans1);
            $("#A1_investigation3_n10f_ans2").html(input1_ans2);
            $("#A1_investigation3_n10f_ans3").html(input1_ans3);
            $("#A1_investigation3_n10rf_ans1").html(input2_ans1);
            $("#A1_investigation3_n10rf_ans2").html(input2_ans2);
            $("#A1_investigation3_n10rf_ans3").html(input2_ans3);
        });
        $("#A1_investigation3_b2").click(function () {
            var input1_ans1 = $("#A1_observation3_input1_ans1").html();
            var input1_ans2 = $("#A1_observation3_input1_ans2").html();
            var input1_ans3 = $("#A1_observation3_input1_ans3").html();
            var input2_ans1 = $("#A1_observation3_input2_ans1").html();
            var input2_ans2 = $("#A1_observation3_input2_ans2").html();
            var input2_ans3 = $("#A1_observation3_input2_ans3").html();
            $("#A1_investigation3_n500f_ans1").html(input1_ans1);
            $("#A1_investigation3_n500f_ans2").html(input1_ans2);
            $("#A1_investigation3_n500f_ans3").html(input1_ans3);
            $("#A1_investigation3_n500rf_ans1").html(input2_ans1);
            $("#A1_investigation3_n500rf_ans2").html(input2_ans2);
            $("#A1_investigation3_n500rf_ans3").html(input2_ans3);
        });
        function A1_investigation3_check() {
            var n1 = $('input[name=A1_investigation3_input1]:checked').val();
            var n2 = $("#A1_investigation3_textarea1").val();
            if (n1 != undefined && n2 != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({"opacity": "1"});
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({"opacity": "1"});
                })
            } else if (n1 == undefined && n2 == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (n1 == undefined) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請回答問題'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            }
        };
        $("#A1_investigation3_link").click(function() {
            removeListener();
        });
        $("#A1_investigation3_confirm").click(function() {
            A1_investigation3_check();
        });
        $("#A1_investigation3_next").click(function() {
            $("#A1_operation4_link").click();
        });

        // A1_operation4
        var buttonNumR = false;
        function A1_operation4_check() {
            if (buttonNumR) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                    $("#A1_operation4_done").css({"opacity": "1"});
                    $("#A1_operation4_next").removeClass("d-none");
                    $("#A1_operation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請隨機配置色球個數'})
            }
        };
        function A1_operation4_checkSet() {
            buttonNumR = true;
        };
        $("#A1_operation4_link").click(function() {
            Swal.fire({html: '<img src="./images/content/lotteryMachine.png" height="150"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">現在搖獎機內仍是10顆色球，但不曉得每種色球的個數為何。<br>我們將嘗試以抽獎結果回頭推測各色球的個數。</div>'});
            removeListener();
            buttonNumR = false;
            api.registerObjectClickListener("buttonNumR", A1_operation4_checkSet);
            api.registerObjectClickListener("buttonSetFine", A1_operation4_check);
        });
        $("#A1_operation4_next").click(function() {
            $("#A1_operation5_link").click();
        });

        // A1_operation5
        function A1_operation5_check() {
            var count = api.getValue("nAll") + 1;
            if (count == 10) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                    $("#A1_operation5_done").css({"opacity": "1"});
                    $("#A1_operation5_next").removeClass("d-none");
                    $("#A1_operation5_link img").css({"opacity": "1"});
                })
            } 
        }
        $("#A1_operation5_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonOnce", A1_operation5_check);
        });
        $("#A1_operation5_next").click(function() {
            $("#A1_observation4_link").click();
        });

        // A1_observation4
        listRF = [rfO, rfG, rfB];
        var row = 0;
        var listN = [10, 50, 100, 500, 1000];
        var listRecord = [false, false, false, false, false];
        function hideAllRecordIcon() {
            $("#A1_observation4_record_n10").hide();
            $("#A1_observation4_record_n50").hide();
            $("#A1_observation4_record_n100").hide();
            $("#A1_observation4_record_n500").hide();
            $("#A1_observation4_record_n1000").hide();
        }
        function recordResult(num) {
            hideAllRecordIcon();
            row = listN.indexOf(num);
            fO = api.getValue("F_O");
            fG = api.getValue("F_G");
            fB = api.getValue("F_B");
            nAll = api.getValue("nAll");
            rfO = numRound(fO/nAll,2);
            rfG = numRound(fG/nAll,2);
            rfB = numRound(fB/nAll,2);
            $("#A1_observation4_n" + num + "_ans1").html(katex.renderToString("" + rfO, { throwOnError: false }));
            $("#A1_observation4_n" + num + "_ans2").html(katex.renderToString("" + rfG, { throwOnError: false }));
            $("#A1_observation4_n" + num + "_ans3").html(katex.renderToString("" + rfB, { throwOnError: false }));
            listRecord[row]= true;
            row++;
        }
        $("#A1_observation4_record_n10").click(function() {recordResult(10)});
        $("#A1_observation4_record_n50").click(function() {recordResult(50)});
        $("#A1_observation4_record_n100").click(function() {recordResult(100)});
        $("#A1_observation4_record_n500").click(function() {recordResult(500)});
        $("#A1_observation4_record_n1000").click(function() {recordResult(1000)});
        function A1_observation4_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == listN[row]) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定自動抽獎 ' + nExpect + ' 次'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '目前需要設定自動抽獎 ' + listN[row] + ' 次'})
            }
        };
        function A1_observation4_checkCount() {
            var count = api.getValue("nAll");
            if (count == listN[row]) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成抽獎 ' + count + ' 次，請記錄結果'}).then((result) => {
                });
                $("#A1_observation4_record_n" + listN[row]).show();
            }
        };
        $("#A1_observation4_link").click(function() {
            hideAllRecordIcon();
            if (!listRecord[0]) {$("#A1_observation4_record_n10").show();};
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A1_observation4_checkSet);
            api.registerObjectUpdateListener("nAll", A1_observation4_checkCount);
        });
        function A1_observation4_check() {
            if (listRecord[0] && listRecord[1] && listRecord[2] && listRecord[3] && listRecord[4]) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A1_observation4_confirm").hide();
                    $("#A1_observation4_done").css({"opacity": "1"});
                    $("#A1_observation4_next").removeClass("d-none");
                    $("#A1_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A1_observation4_confirm").click(function() {
            A1_observation4_check();
        });
        $("#A1_observation4_next").click(function() {
            $("#A1_investigation4_link").click();
        });

        // A1_investigation4
        function A1_investigation4_check() {
            var nO = api.getValue("n_O");
            var nG = api.getValue("n_G");
            var nB = api.getValue("n_B");
            var A1_investigation4_input1_usrans = $("#A1_investigation4_input1").val();
            var A1_investigation4_input2_usrans = $("#A1_investigation4_input2").val();
            var A1_investigation4_input3_usrans = $("#A1_investigation4_input3").val();
            var input1_check = (nO == A1_investigation4_input1_usrans);
            var input2_check = (nG == A1_investigation4_input2_usrans);
            var input3_check = (nB == A1_investigation4_input3_usrans);
            if (input1_check && input2_check && input3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A1_investigation4_confirm").hide();
                    $("#A1_investigation4_done").css({"opacity": "1"});
                    $("#A1_investigation4_next").removeClass("d-none");
                    $("#A1_investigation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 4 的數據'})
            }
        }
        $("#A1_investigation4_link").click(function() {
            removeListener();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_investigation4_confirm").click(function() {
            A1_investigation4_check();
        });
        $("#A1_investigation4_next").click(function() {
            $("#A1_operation6_link").click();
        });

        // A1_operation6
        function A1_operation6_check() {
            var viewNum = api.getValue("viewNum");
            if (viewNum == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 6'}).then((result) => {
                    $("#A1_operation6_done").css({"opacity": "1"});
                    $("#A1_operation6_next").removeClass("d-none");
                    $("#A1_operation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請勾選「色球個數與機率值」'})
            };
        };
        $("#A1_operation6_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A1_operation6_check);
        });
        $("#A1_operation6_next").click(function() {
            $("#A1_operation7_link").click();
        });

        // A1_operation7
        function A1_operation7_check() {
            var nO = api.getValue("n_O");
            var nG = api.getValue("n_G");
            var nB = api.getValue("n_B");
            var A1_operation7_input1_usrans = $("#A1_operation7_input1").val();
            var A1_operation7_input2_usrans = $("#A1_operation7_input2").val();
            var A1_operation7_input3_usrans = $("#A1_operation7_input3").val();
            var input1_check = (nO == A1_operation7_input1_usrans);
            var input2_check = (nG == A1_operation7_input2_usrans);
            var input3_check = (nB == A1_operation7_input3_usrans);
            if (input1_check && input2_check && input3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '猜對了，恭喜完成實驗操作 7'}).then((result) => {
                    $("#A1_operation7_confirm").hide();
                    $("#A1_operation7_done").css({"opacity": "1"});
                    $("#A1_operation7_next").removeClass("d-none");
                    $("#A1_operation7_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '猜錯了，再試試看吧！'})
            }
        }
        function A1_operation7_checkSet() {
            buttonNumR = true;
        };
        $("#A1_operation7_link").click(function() {
            removeListener();
            buttonNumR = false;
            api.registerObjectClickListener("buttonNumR",A1_operation7_checkSet);
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_operation7_confirm").click(function() {
            if(buttonNumR) {A1_operation7_check();}
            else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請重新隨機配置色球個數'})
            };
        });
        $("#A1_operation7_next").click(function() {
            showA2();
        });

        // 待處理：A1_operation5 防誤觸、A7_operation7 多點錯誤訊息
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
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("D-10-4 活動2：認識加權平均數中權重的意義");
    // var GGB_A2_pre = {
    //     id: "ggbApplet02pre",
    //     ggbBase64: ggb_D_10_4_pre_A2
    // };
    // var GGB_A2 = {
    //     id: "ggbApplet02",
    //     ggbBase64: ggb_D_10_4_A2
    // };
    // var GGB_list = [GGB_A2_pre,GGB_A2];
    // params.id = GGB_A2_pre.id;
    // params.ggbBase64 = GGB_A2_pre.ggbBase64;
    params.id = "ggbApplet02pre";
    params.ggbBase64 = ggb_D_10_4_pre_A2;
    
    params.appletOnLoad = function(api) {
        // function loadApplet(newGGB) {
        //     // alert("loadApplet! newGGB.id:"+newGGB.id);
        //     if (params.id != newGGB.id) {
        //         let oldGGB = GGB_list.find(obj => obj.id == params.id);
        //         // alert("oldGGB.id:"+oldGGB.id);
        //         oldGGB.ggbBase64 = api.getBase64();
        //         params.id = newGGB.id;
        //         params.ggbBase64 = newGGB.ggbBase64;
        //         applet = new GGBApplet(params, true);
        //         applet.inject('ggb-element');
        //         // alert("loadedGGB.id:"+params.id);
        //     }
        // };
        function removeListener() {
            api.unregisterObjectUpdateListener("aniA1");
            api.unregisterObjectUpdateListener("aniA2");
            
        };

        // A2_operation1
        function A2_operation1_check() {
            var aniA1 = api.getValue("aniA1");
            if (aniA1 == 3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A2_operation1_done").css({"opacity": "1"});
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({"opacity": "1"});
                })
            }
        };
        $("#A2_operation1_link").click(function() {
            // loadApplet(GGB_A2_pre);
            removeListener();
            api.registerObjectUpdateListener("aniA1", A2_operation1_check);
        });
        if (!initA2) { 
            Swal.fire({html: '<img src="./images/content/lotteryMachine.png" height="150"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">現在公布每種色球的中獎金額如下：<br><span style="color: #fba91a;">橘球 10 元</span><br><span style="color: #85b073;">綠球 200 元</span><br><span style="color: #6891b0;">藍球 1000 元</span></div>'});
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        function A2_observation1_check() {
            var A2_observation1_input1_usrans = $("#A2_observation1_input1").val();
            if (A2_observation1_input1_usrans == "1") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({"opacity": "1"});
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再次確認平均獎金'})
            }
        };
        $("#A2_observation1_link").click(function() {
            removeListener();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_observation1_confirm").click(function() {
            A2_observation1_check();
        });
        $("#A2_observation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        function A2_operation2_check() {
            var aniA2 = api.getValue("aniA2");
            if (aniA2 == 3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A2_operation2_done").css({"opacity": "1"});
                    $("#A2_operation2_next").removeClass("d-none");
                    $("#A2_operation2_link img").css({"opacity": "1"});
                })
            }
        };
        $("#A2_operation2_link").click(function() {
            removeListener();
            api.evalCommand("RunClickScript(showItem)");
            api.registerObjectUpdateListener("aniA2", A2_operation2_check);
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        function A2_observation2_check() {
            var A2_observation2_input1_usrans = $("#A2_observation2_input1").val();
            if (A2_observation2_input1_usrans == "3") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A2_observation2_confirm").hide();
                    $("#A2_observation2_done").css({"opacity": "1"});
                    $("#A2_observation2_next").removeClass("d-none");
                    $("#A2_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請再次確認平均獎金'})
            }
        };
        $("#A2_observation2_link").click(function() {
            removeListener();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_observation2_confirm").click(function() {
            A2_observation2_check();
        });
        $("#A2_observation2_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        function A2_investigation1_check() {
            var x = $('input[name=A2_investigation1_input1]:checked').val();
            var y = $('input[name=A2_investigation1_input2]:checked').val();
            var z = $("#A2_investigation1_input3").val();
            if (x == "1" && y != undefined && z != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索1'}).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({"opacity": "1"});
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({"opacity": "1"});
                })
            } else if (x != "1") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '兩種算法的結果真的不同嗎？'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'})
            }
        }
        $("#A2_investigation1_confirm").click(function() {
            A2_investigation1_check();
        });
        $("#A2_investigation1_next").click(function() {
            showA2_1();
        });
        
        // $("#A2_operation3_link").click(function() {
        //     showA2_1();
        // })
    // ==========================================================================================
    // }
    // applet1 = new GGBApplet(params, true);
    // applet1.inject('ggb-element');

    // params.id = GGB_A2.id;
    // params.ggbBase64 = GGB_A2.ggbBase64;
    // params.appletOnLoad = function(api) {
    // ==========================================================================================

        
    };
    // applet2 = new GGBApplet(params, true);
    // applet2.inject('ggb-element');
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA2_1() {
    var initA2_1 = false;
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("D-10-4 活動2：認識加權平均數中權重的意義");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_D_10_4_A2;

    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectClickListener("buttonSetFine");
            api.unregisterObjectUpdateListener("nAll");
            api.unregisterObjectClickListener("buttonNumR");

        };
        // A2_operation3
        var fO, fG, fB, nAll, rfO, rfG, rfB, prizeAverage, betAmount, prizePL;
        var listRF, listInput;
        var row = 0;
        var listBall = ["橘球","綠球","藍球"];
        var listBallNum = [[10,0,0], [0,10,0], [0,0,10]];
        var listRecord = [false, false, false];
        function hideAllRecordIcon() {
            $("#A2_operation3_record1").hide();
            $("#A2_operation3_record2").hide();
            $("#A2_operation3_record3").hide();
            $("#A2_observation3_previous").hide();
        }
        function recordResult() {
            hideAllRecordIcon();
            fO = api.getValue("F_O");
            fG = api.getValue("F_G");
            fB = api.getValue("F_B");
            nAll = api.getValue("nAll");
            rfO = numRound(fO/nAll,2);
            rfG = numRound(fG/nAll,2);
            rfB = numRound(fB/nAll,2);
            $("#A2_observation3_record" + (row+1) + "_f1").html(katex.renderToString("" + fO, { throwOnError: false }));
            $("#A2_observation3_record" + (row+1) + "_f2").html(katex.renderToString("" + fG, { throwOnError: false }));
            $("#A2_observation3_record" + (row+1) + "_f3").html(katex.renderToString("" + fB, { throwOnError: false }));
            $("#A2_observation3_record" + (row+1) + "_rf1").html(katex.renderToString("" + rfO, { throwOnError: false }));
            $("#A2_observation3_record" + (row+1) + "_rf2").html(katex.renderToString("" + rfG, { throwOnError: false }));
            $("#A2_observation3_record" + (row+1) + "_rf3").html(katex.renderToString("" + rfB, { throwOnError: false }));
            // alert("record" + (row+1) + " completed!!");
            $("#A2_observation3_record" + (row+1) + "_AV").removeClass("d-none");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
            $("#A2_observation3_confirm").show();
            $("#A2_observation3_link").click();
        }
        $("#A2_operation3_record1").click(function() {recordResult()});
        $("#A2_operation3_record2").click(function() {recordResult()});
        $("#A2_operation3_record3").click(function() {recordResult()});
        function A2_operation3_checkSet() {
            let nO = api.getValue("n_O");
            let nG = api.getValue("n_G");
            let nB = api.getValue("n_B");
            let listN = [nO, nG, nB];
            let count = api.getValue("nAll")
            // alert(listN);
            // alert(listBallNum[row]);
            if (listN.equals(listBallNum[row]) && count == 0) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成色球個數配置'})
            } else if (count != 0) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要先「清除抽獎結果」'});
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '目前需要設定 10 顆都是' + listBall[row]})
            }
        }   
        function A2_operation3_checkCount() {
            let count = api.getValue("nAll");
            if (count == 10) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成抽獎 10 次，請記錄結果'}).then((result) => {
                });
                $("#A2_operation3_record" + (row+1)).show();
            }
        }
        $("#A2_operation3_link").click(function() {
            // loadApplet(GGB_A2);
            // applet2.inject('ggb_element');
            hideAllRecordIcon();
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation3_checkSet);
            api.registerObjectUpdateListener("nAll", A2_operation3_checkCount);
        });
        if (!initA2_1) { 
            $("#A2_operation3_link").click();
            initA2_1 = true;
        };
        // $("#A2_operation3_next").click(function() {
        //     $("#A2_observation3_link").click();
        // });

        // A2_observation3
        function A2_observation3_checkRecord() {
            var usrans = $("#A2_observation3_record" + (row+1) + "_AV").val();
            if (usrans != "" && usrans == row) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '記錄完成'}).then((result) => {
                    $("#A2_observation3_confirm").hide();
                    $("#A2_observation3_previous").show();
                    $("#A2_operation3_record" + (row+1) + "_done").css({"opacity": "1"});
                    listRecord[row] = true;
                    row++;
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次確認平均獎金'})
            }
        }
        $("#A2_observation3_confirm").click(function() {
            A2_observation3_checkRecord();
        })
        $("#A2_observation3_previous").click(function() {
            if (listRecord[0] && listRecord[1] && listRecord[2]) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A2_observation3_confirm").hide();
                    $("#A2_observation3_previous").hide();
                    $("#A2_observation3_done").css({"opacity": "1"});
                    $("#A2_observation3_next").removeClass("d-none");
                    $("#A2_observation3_link img").css({"opacity": "1"});
                    $("#A2_operation3_done").css({"opacity": "1"});
                    $("#A2_operation3_link img").css({"opacity": "1"});
                })
            } else {
                $("#A2_observation3_previous").hide();
                $("#A2_observation3").hide();
                $("#A2_operation3").fadeIn();
            }
        })
        $("#A2_observation3_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        $("#A2_investigation2_link").click(function() {
            removeListener();
        })
        function A2_investigation2_check() {
            let input1 = $('input[name=A2_investigation2_input1]:checked').val();
            let input2 = $('#A2_investigation2_input2').val();
            let input3 = $("#A2_investigation2_input3").val();
            let check_input1 = (input1 != undefined);
            let check_input2 = (input2 != "" && isNumber(input2));
            let check_input3 = (input3 != "");
            if ( check_input1 && check_input2 && check_input3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({"opacity": "1"});
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'})
            }
        }
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
        $("#A2_investigation2_next").click(function() {
            $("#A2_operation4_link").click();
        });

        // A2_operation4
        function A2_operation4_check() {
            var n1 = api.getValue("n_O");
            var n2 = api.getValue("n_G");
            var n3 = api.getValue("n_B");
            if (n1 === 6 && n2 === 3 && n3 === 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                    $("#A2_operation4_done").css({"opacity": "1"});
                    $("#A2_operation4_next").removeClass("d-none");
                    $("#A2_operation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請確認各色球個數'})
            }
        };
        $("#A2_operation4_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation4_check);
        });
        $("#A2_operation4_next").click(function() {
            $("#A2_operation5_link").click();
        });

        // A2_operation5
        function A2_operation5_check() {
            var count = api.getValue("nAll");
            if (count == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                    $("#A2_operation5_done").css({"opacity": "1"});
                    $("#A2_operation5_next").removeClass("d-none");
                    $("#A2_operation5_link img").css({"opacity": "1"});
                })
            }
        };
        function A2_operation5_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查一下「自動抽獎次數」是否設定正確'})
            }
        };
        $("#A2_operation5_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation5_checkSet);
            api.registerObjectUpdateListener("nAll", A2_operation5_check);
        });
        $("#A2_operation5_next").click(function() {
            $("#A2_observation4_link").click();
        });

        // A2_observation4
        $("#A2_observation4_link").click(function() {
            removeListener();
            fO = api.getValue("F_O");
            fG = api.getValue("F_G");
            fB = api.getValue("F_B");
            nAll = api.getValue("nAll");
            prizeAverage = api.getValue("prizeAverage");
            rfO = numRound(fO/nAll,2);
            rfG = numRound(fG/nAll,2);
            rfB = numRound(fB/nAll,2);
            listRF = [rfO, rfG, rfB, prizeAverage];
            shuffle(listRF);
        });
        $("#A2_observation4_record").click(function() {
            function createOption() {
                $("#A2_observation4_input1_ans1").html(katex.renderToString("" + fO, { throwOnError: false }));
                $("#A2_observation4_input1_ans2").html(katex.renderToString("" + fG, { throwOnError: false }));
                $("#A2_observation4_input1_ans3").html(katex.renderToString("" + fB, { throwOnError: false }));
                $("#A2_observation4_input2_ans1").removeClass("d-none");
                $("#A2_observation4_input2_ans2").removeClass("d-none");
                $("#A2_observation4_input2_ans3").removeClass("d-none");
                $("#A2_observation4_input3_ans").removeClass("d-none");
                $("#A2_observation4_input2_ans1").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A2_observation4_input2_ans1").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A2_observation4_input2_ans1").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A2_observation4_input2_ans1").next().find("a").eq(3).html(katex.renderToString("" + listRF[3], { throwOnError: false }));
                $("#A2_observation4_input2_ans2").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A2_observation4_input2_ans2").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A2_observation4_input2_ans2").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A2_observation4_input2_ans2").next().find("a").eq(3).html(katex.renderToString("" + listRF[3], { throwOnError: false }));
                $("#A2_observation4_input2_ans3").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A2_observation4_input2_ans3").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A2_observation4_input2_ans3").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A2_observation4_input2_ans3").next().find("a").eq(3).html(katex.renderToString("" + listRF[3], { throwOnError: false }));
                $("#A2_observation4_input3_ans").next().find("a").eq(0).html(katex.renderToString("" + listRF[0], { throwOnError: false }));
                $("#A2_observation4_input3_ans").next().find("a").eq(1).html(katex.renderToString("" + listRF[1], { throwOnError: false }));
                $("#A2_observation4_input3_ans").next().find("a").eq(2).html(katex.renderToString("" + listRF[2], { throwOnError: false }));
                $("#A2_observation4_input3_ans").next().find("a").eq(3).html(katex.renderToString("" + listRF[3], { throwOnError: false }));
                $(".dropdown-menu li a").click(function(){
                    $(this).parent().parent().prev().html($(this).html());
                    $(this).parent().parent().prev().val(listRF[$(this).parent().index()]);
                });
            }
            createOption();
        });
        function A2_observation4_check() {
            var A2_observation4_input2_usrans1 = $("#A2_observation4_input2_ans1").val();
            var A2_observation4_input2_usrans2 = $("#A2_observation4_input2_ans2").val();
            var A2_observation4_input2_usrans3 = $("#A2_observation4_input2_ans3").val();
            var A2_observation4_input3_usrans = $("#A2_observation4_input3_ans").val();
            var input2_usrans1_check = (A2_observation4_input2_usrans1 == rfO);
            var input2_usrans2_check = (A2_observation4_input2_usrans2 == rfG);
            var input2_usrans3_check = (A2_observation4_input2_usrans3 == rfB);
            var input3_usrans_check = (A2_observation4_input3_usrans == prizeAverage);
            if (input2_usrans1_check && input2_usrans2_check && input2_usrans3_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A2_observation4_confirm").hide();
                    $("#A2_observation4_done").css({"opacity": "1"});
                    $("#A2_observation4_next").removeClass("d-none");
                    $("#A2_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的抽獎結果'})
            }
        };
        $("#A2_observation4_confirm").click(function() {
            A2_observation4_check();
        });
        $("#A2_observation4_next").click(function() {
            $("#A2_investigation3_link").click();
        });

        // A2_investigation3
        $("#A2_investigation3_link").click(function() {
            removeListener();
        })
        function A2_investigation3_check() {
            let input1 = $('input[name=A2_investigation3_input1]:checked').val();
            let input2 = $('input[name=A2_investigation3_input2]:checked').val();
            let input3 = $("#A2_investigation3_input3").val();
            let check_input1 = (input1 != undefined);
            let check_input2 = (input2 != undefined);
            let check_input3 = (input3 != "");
            if ( check_input1 && check_input2 && check_input3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A2_investigation3_confirm").hide();
                    $("#A2_investigation3_done").css({"opacity": "1"});
                    $("#A2_investigation3_next").removeClass("d-none");
                    $("#A2_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'})
            }
        }
        $("#A2_investigation3_confirm").click(function() {
            A2_investigation3_check();
        });
        $("#A2_investigation3_next").click(function() {
            $("#A2_operation6_link").click();
        });

        // A2_operation6
        function A2_operation6_check() {
            let nO = api.getValue("n_O");
            let nG = api.getValue("n_G");
            let nB = api.getValue("n_B");
            let count = api.getValue("nAll");
            let viewAverage = api.getValue("viewAverage");
            let viewPL = api.getValue("viewPL");
            betAmount = api.getValue("betAmount");
            let check_n = (nO == 6) && (nG == 3) && (nB == 1);
            let check_count = (count == 0);
            let check_viewAverage = (viewAverage == 0);
            let check_viewPL = (viewPL == 1);
            let check_betAmount = (betAmount == 200);
            if (check_n && check_count && check_viewAverage && check_viewPL && check_betAmount) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 6'}).then((result) => {
                    $("#A2_operation6_done").css({"opacity": "1"});
                    $("#A2_operation6_next").removeClass("d-none");
                    $("#A2_operation6_link img").css({"opacity": "1"});
                })
            } else if (!check_n) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '色球個數配置還是維持在「橘球 6 顆、綠球 3 顆、藍球 1 顆」'});
            } else if (!check_count) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要先「清除抽獎結果」'});
            } else if (!check_viewAverage) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要取消勾選「抽中平均獎金」'});
            } else if (!check_viewPL) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要勾選「抽獎平均損益」'});
            } else if (!check_betAmount) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查「下注金額」是否為 200'});
            }
        };
        $("#A2_operation6_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation6_check);
        });
        $("#A2_operation6_next").click(function() {
            $("#A2_operation7_link").click();
        });

        // A2_operation7
        function A2_operation7_check() {
            var count = api.getValue("nAll");
            if (count == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 7'}).then((result) => {
                    $("#A2_operation7_done").css({"opacity": "1"});
                    $("#A2_operation7_next").removeClass("d-none");
                    $("#A2_operation7_link img").css({"opacity": "1"});
                })
            }
        };
        function A2_operation7_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查一下「自動抽獎次數」是否設定正確'})
            }
        };
        $("#A2_operation7_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation7_checkSet);
            api.registerObjectUpdateListener("nAll", A2_operation7_check);
        });
        $("#A2_operation7_next").click(function() {
            $("#A2_observation5_link").click();
        });

        // A2_observation5
        $("#A2_observation5_link").click(function() {
            removeListener();
            betAmount = api.getValue("betAmount");
            prizeAverage = numRound(api.getValue("prizeAverage"),2);
            prizePL = numRound(api.getValue("prizePL"),2);
            listInput = [betAmount, prizeAverage, prizePL];
            shuffle(listInput);
        });
        $("#A2_observation5_record1").click(function() {
            function createOption() {
                $("#A2_observation5_record1_ans1").removeClass("d-none");
                $("#A2_observation5_record1_ans2").removeClass("d-none");
                $("#A2_observation5_record1_ans3").removeClass("d-none");
                $("#A2_observation5_record1_ans1").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation5_record1_ans1").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation5_record1_ans1").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_observation5_record1_ans2").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation5_record1_ans2").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation5_record1_ans2").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_observation5_record1_ans3").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation5_record1_ans3").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation5_record1_ans3").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_investigation4_record1_ans1").html(katex.renderToString("" + betAmount, { throwOnError: false }));
                $("#A2_investigation4_record1_ans2").html(katex.renderToString("" + prizeAverage, { throwOnError: false }));
                $("#A2_investigation4_record1_ans3").html(katex.renderToString("" + prizePL, { throwOnError: false }));
                $("#A2_investigation5_record1_ans1").html(katex.renderToString("" + betAmount, { throwOnError: false }));
                $("#A2_investigation5_record1_ans2").html(katex.renderToString("" + prizeAverage, { throwOnError: false }));
                $("#A2_investigation5_record1_ans3").html(katex.renderToString("" + prizePL, { throwOnError: false }));
                $(".dropdown-menu li a").click(function(){
                    $(this).parent().parent().prev().html($(this).html());
                    $(this).parent().parent().prev().val(listInput[$(this).parent().index()]);
                });
            }
            createOption();
        });
        function A2_observation5_check() {
            var A2_observation5_record1_usrans1 = $("#A2_observation5_record1_ans1").val();
            var A2_observation5_record1_usrans2 = $("#A2_observation5_record1_ans2").val();
            var A2_observation5_record1_usrans3 = $("#A2_observation5_record1_ans3").val();
            var record1_usrans1_check = (A2_observation5_record1_usrans1 == betAmount);
            var record1_usrans2_check = (A2_observation5_record1_usrans2 == prizeAverage);
            var record1_usrans3_check = (A2_observation5_record1_usrans3 == prizePL);
            if (record1_usrans1_check && record1_usrans2_check && record1_usrans3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 5'}).then((result) => {
                    $("#A2_observation5_confirm").hide();
                    $("#A2_observation5_record1_done").css({"opacity": "1"});
                    $("#A2_observation5_done").css({"opacity": "1"});
                    $("#A2_observation5_next").removeClass("d-none");
                    $("#A2_observation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的抽獎結果'})
            }
        };
        $("#A2_observation5_confirm").click(function() {
            A2_observation5_check();
        });
        $("#A2_observation5_next").click(function() {
            $("#A2_investigation4_link").click();
        });

        // A2_investigation4
        $("#A2_investigation4_link").click(function() {
            removeListener();
        })
        function A2_investigation4_check() {
            let input1 = $('input[name=A2_investigation4_input1]:checked').val();
            let input2 = $('#A2_investigation4_input2').val();
            let input3 = $("#A2_investigation4_input3").val();
            let input1_PN;
            if (prizePL > 0) {
                input1_PN = "1";
            } else if (prizePL < 0) {
                input1_PN = "2";
            } else {
                input1_PN = "3";
            };
            let check_input1 = (input1 != undefined && input1 == input1_PN);
            let check_input2 = (input2 != "" && isNumber(input2));
            let check_input3 = (input3 != "");
            // alert("check_input1" + check_input1);
            // alert("check_input2" + check_input2);
            // alert("check_input3" + check_input3);
            if ( check_input1 && check_input2 && check_input3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A2_investigation4_confirm").hide();
                    $("#A2_investigation4_done").css({"opacity": "1"});
                    $("#A2_investigation4_next").removeClass("d-none");
                    $("#A2_investigation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'})
            }
        }
        $("#A2_investigation4_confirm").click(function() {
            A2_investigation4_check();
        });
        $("#A2_investigation4_next").click(function() {
            $("#A2_operation8_link").click();
        });

        // A2_operation8
        function A2_operation8_check() {
            let nO = api.getValue("n_O");
            let nG = api.getValue("n_G");
            let nB = api.getValue("n_B");
            let count = api.getValue("nAll");
            let viewAverage = api.getValue("viewAverage");
            let viewPL = api.getValue("viewPL");
            betAmount = api.getValue("betAmount");
            let check_n = (nO == 6) && (nG == 3) && (nB == 1);
            let check_count = (count == 0);
            let check_viewAverage = (viewAverage == 0);
            let check_viewPL = (viewPL == 1);
            let check_betAmount = (betAmount != 200 && betAmount != 0);
            if (check_n && check_count && check_viewAverage && check_viewPL && check_betAmount) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 8'}).then((result) => {
                    $("#A2_operation8_done").css({"opacity": "1"});
                    $("#A2_operation8_next").removeClass("d-none");
                    $("#A2_operation8_link img").css({"opacity": "1"});
                })
            } else if (!check_n) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '色球個數配置還是維持在「橘球 6 顆、綠球 3 顆、藍球 1 顆」'});
            } else if (!check_count) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要先「清除抽獎結果」'});
            } else if (!check_viewAverage) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要取消勾選「抽中平均獎金」'});
            } else if (!check_viewPL) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要勾選「抽獎平均損益」'});
            } else if (!check_betAmount) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '要設定不同的「下注金額」'});
            }
        };
        $("#A2_operation8_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation8_check);
        });
        $("#A2_operation8_next").click(function() {
            $("#A2_operation9_link").click();
        });

        // A2_operation9
        function A2_operation9_check() {
            var count = api.getValue("nAll");
            if (count == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 9'}).then((result) => {
                    $("#A2_operation9_done").css({"opacity": "1"});
                    $("#A2_operation9_next").removeClass("d-none");
                    $("#A2_operation9_link img").css({"opacity": "1"});
                })
            }
        };
        function A2_operation9_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查一下「自動抽獎次數」是否設定正確'})
            }
        };
        $("#A2_operation9_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation9_checkSet);
            api.registerObjectUpdateListener("nAll", A2_operation9_check);
        });
        $("#A2_operation9_next").click(function() {
            $("#A2_observation6_link").click();
        });

        // A2_observation6
        $("#A2_observation6_link").click(function() {
            removeListener();
            betAmount = api.getValue("betAmount");
            prizeAverage = numRound(api.getValue("prizeAverage"),2);
            prizePL = numRound(api.getValue("prizePL"),2);
            listInput = [betAmount, prizeAverage, prizePL];
            shuffle(listInput);
        });
        $("#A2_observation6_record2").click(function() {
            function createOption() {
                $("#A2_observation6_record2_ans1").removeClass("d-none");
                $("#A2_observation6_record2_ans2").removeClass("d-none");
                $("#A2_observation6_record2_ans3").removeClass("d-none");
                $("#A2_observation6_record2_ans1").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation6_record2_ans1").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation6_record2_ans1").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_observation6_record2_ans2").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation6_record2_ans2").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation6_record2_ans2").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_observation6_record2_ans3").next().find("a").eq(0).html(katex.renderToString("" + listInput[0], { throwOnError: false }));
                $("#A2_observation6_record2_ans3").next().find("a").eq(1).html(katex.renderToString("" + listInput[1], { throwOnError: false }));
                $("#A2_observation6_record2_ans3").next().find("a").eq(2).html(katex.renderToString("" + listInput[2], { throwOnError: false }));
                $("#A2_investigation5_record2_ans1").html(katex.renderToString("" + betAmount, { throwOnError: false }));
                $("#A2_investigation5_record2_ans2").html(katex.renderToString("" + prizeAverage, { throwOnError: false }));
                $("#A2_investigation5_record2_ans3").html(katex.renderToString("" + prizePL, { throwOnError: false }));
                $(".dropdown-menu li a").click(function(){
                    $(this).parent().parent().prev().html($(this).html());
                    $(this).parent().parent().prev().val(listInput[$(this).parent().index()]);
                });
            }
            createOption();
        });
        function A2_observation6_check() {
            var A2_observation6_record2_usrans1 = $("#A2_observation6_record2_ans1").val();
            var A2_observation6_record2_usrans2 = $("#A2_observation6_record2_ans2").val();
            var A2_observation6_record2_usrans3 = $("#A2_observation6_record2_ans3").val();
            var record2_usrans1_check = (A2_observation6_record2_usrans1 == betAmount);
            var record2_usrans2_check = (A2_observation6_record2_usrans2 == prizeAverage);
            var record2_usrans3_check = (A2_observation6_record2_usrans3 == prizePL);
            if (record2_usrans1_check && record2_usrans2_check && record2_usrans3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 6'}).then((result) => {
                    $("#A2_observation6_confirm").hide();
                    $("#A2_observation6_done").css({"opacity": "1"});
                    $("#A2_observation6_record2_done").css({"opacity": "1"});
                    $("#A2_observation6_next").removeClass("d-none");
                    $("#A2_observation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請對照左方的抽獎結果'})
            }
        };
        $("#A2_observation6_confirm").click(function() {
            A2_observation6_check();
        });
        $("#A2_observation6_next").click(function() {
            $("#A2_investigation5_link").click();
        });

        // A2_investigation5
        $("#A2_investigation5_link").click(function() {
            removeListener();
        })
        function A2_investigation5_check() {
            let input1 = $('input[name=A2_investigation5_input1]:checked').val();
            let input2 = $('#A2_investigation5_input2').val();
            let input3 = $("#A2_investigation5_input3").val();
            let check_input1 = (input1 != undefined);
            let check_input2 = (input2 != "");
            let check_input3 = (input3 != "");
            if ( check_input1 && check_input2 && check_input3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A2_investigation5_confirm").hide();
                    $("#A2_investigation5_done").css({"opacity": "1"});
                    $("#A2_investigation5_next").removeClass("d-none");
                    $("#A2_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'})
            }
        }
        $("#A2_investigation5_confirm").click(function() {
            A2_investigation5_check();
        });
        $("#A2_investigation5_next").click(function() {
            $("#A2_operation10_link").click();
        });

        // A2_operation10
        function A2_operation10_check() {
            betAmount = api.getValue("betAmount");
            let check_betAmount = (betAmount != 0);
            if (buttonNumR && check_betAmount) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 10'}).then((result) => {
                    $("#A2_operation10_done").css({"opacity": "1"});
                    $("#A2_operation10_next").removeClass("d-none");
                    $("#A2_operation10_link img").css({"opacity": "1"});
                })
            } else if (!buttonNumR) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '記得要「隨機配置色球個數」'})
            } else if (!check_betAmount) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請調整「下注金額」'})
            }
        }
        function A2_operation10_checkSet() {
            buttonNumR = true;
        };
        $("#A2_operation10_link").click(function() {
            removeListener();
            buttonNumR = false;
            api.registerObjectClickListener("buttonNumR",A2_operation10_checkSet);
            api.registerObjectClickListener("buttonSetFine", A2_operation10_check);
        });
        $("#A2_operation10_next").click(function() {
            $("#A2_operation11_link").click();
        });

        // A2_operation11
        function A2_operation11_check() {
            var count = api.getValue("nAll");
            if (count == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 11'}).then((result) => {
                    $("#A2_operation11_done").css({"opacity": "1"});
                    $("#A2_operation11_next").removeClass("d-none");
                    $("#A2_operation11_link img").css({"opacity": "1"});
                })
            }
        };
        function A2_operation11_checkSet() {
            var nExpect = api.getValue("nExpect");
            if (nExpect == 500) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成設定'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '檢查一下「自動抽獎次數」是否設定正確'})
            }
        };
        $("#A2_operation11_link").click(function() {
            removeListener();
            api.registerObjectClickListener("buttonSetFine", A2_operation11_checkSet);
            api.registerObjectUpdateListener("nAll", A2_operation11_check);
        });
        $("#A2_operation11_next").click(function() {
            ;
        });
        
    };

    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A2_operation3_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}