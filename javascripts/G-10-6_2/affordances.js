params.ggbBase64 = ggb_G_10_6_2_cover;
params.appletOnLoad = function(api) {

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        alert("test1");
    }

    function backLists() {
        location.href = "./index.html";
    }

    api.registerObjectClickListener("pic5", start);
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
    var initA1 = false;
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-6(2) 活動1：" + "三角比的數值視覺化");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_6_2_A1;
    params.appletOnLoad = function(api) {
        var theta, xP, yP= 0;
        var listRecord1 = [false, false, false, false];
        var listRecord2 = [false, false, false, false];

        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
        };
        function hideAllRecordIcon() {
            $("#A1_observation1_record1").hide();
            $("#A1_observation1_record2").hide();
            $("#A1_observation1_record3").hide();
            $("#A1_observation1_record4").hide();
            $("#A1_observation2_record1").hide();
            $("#A1_observation2_record2").hide();
            $("#A1_observation2_record3").hide();
            $("#A1_observation2_record4").hide();
        };
        function ggbMode1() {
            api.setValue("showTextPtf", false);
            api.setValue("showAux", false);
        }
        function ggbMode2() {
            api.setValue("showTextPtf", true);
            api.setValue("showAux", true);
        }

        // A1_operation1
        function A1_operation1_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*5/4,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A1_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            api.registerObjectUpdateListener("θ", A1_operation1_check)
        });
        if (!initA1) { 
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        function recordResult1(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            $("#A1_observation1_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A1_observation1_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A1_investigation1_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A1_investigation1_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A1_observation2_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A1_observation2_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A1_investigation2_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A1_investigation2_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            listRecord1[num-1] = true;
        };
        function A1_observation1_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord1[0] && theta == numRound(Math.PI*1/6,4)) && ($("#A1_observation1_record1").show());
            (!listRecord1[1] && theta == numRound(Math.PI*11/18,4)) && ($("#A1_observation1_record2").show());
            (!listRecord1[2] && theta == numRound(Math.PI*5/4,4)) && ($("#A1_observation1_record3").show());
            (!listRecord1[3] && theta == numRound(Math.PI*16/9,4)) && ($("#A1_observation1_record4").show());
            $("#A1_observation1_record1").click(function() {recordResult1(1)});
            $("#A1_observation1_record2").click(function() {recordResult1(2)});
            $("#A1_observation1_record3").click(function() {recordResult1(3)});
            $("#A1_observation1_record4").click(function() {recordResult1(4)});
        };
        $("#A1_observation1_link").click(function() {
            removeListener();
            ggbMode1();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectUpdateListener("θ", A1_observation1_checkTheta)
        });
        function A1_observation1_check() {
            if (listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({"opacity": "1"});
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A1_observation1_confirm").click(function() {
            A1_observation1_check();
        });
        $("#A1_observation1_next").click(function() {
            $("#A1_investigation1_link").click();
        })

        // A1_investigation1
        function A1_investigation1_check() {
            let A1_investigation1_input1_usrans = $("input[name=A1_investigation1_input1]:checked").val();
            let A1_investigation1_input2_usrans = $("#A1_investigation1_input2").val();
            if (A1_investigation1_input1_usrans != "" && A1_investigation1_input2_usrans != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            } else if (A1_investigation1_input1_usrans == "" && A1_investigation1_input2_usrans == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (A1_investigation1_input1_usrans == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請回答問題'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            }
        };
        $("#A1_investigation1_link").click(function() {
            removeListener();
            ggbMode1();
        });
        $("#A1_investigation1_confirm").click(function() {
            A1_investigation1_check();
        });
        $("#A1_investigation1_next").click(function() {
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        function recordResult2(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            $("#A1_observation2_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A1_observation2_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A1_investigation2_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A1_investigation2_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            listRecord2[num-1] = true;
        };
        function A1_observation2_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord2[0] && theta == numRound(Math.PI*1/6,4)) && ($("#A1_observation2_record1").show());
            (!listRecord2[1] && theta == numRound(Math.PI*11/18,4)) && ($("#A1_observation2_record2").show());
            (!listRecord2[2] && theta == numRound(Math.PI*5/4,4)) && ($("#A1_observation2_record3").show());
            (!listRecord2[3] && theta == numRound(Math.PI*16/9,4)) && ($("#A1_observation2_record4").show());
            $("#A1_observation2_record1").click(function() {recordResult2(1)});
            $("#A1_observation2_record2").click(function() {recordResult2(2)});
            $("#A1_observation2_record3").click(function() {recordResult2(3)});
            $("#A1_observation2_record4").click(function() {recordResult2(4)});
        };
        $("#A1_observation2_link").click(function() {
            removeListener();
            ggbMode2();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectUpdateListener("θ", A1_observation2_checkTheta)
        });
        function A1_observation2_check() {
            if (listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({"opacity": "1"});
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A1_observation2_confirm").click(function() {
            A1_observation2_check();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation2_link").click();
        })

        // A1_investigation2
        function A1_investigation2_check() {
            let A1_investigation2_input1_usrans = $("input[name=A1_investigation2_input1]:checked").val();
            let A1_investigation2_input2_usrans = $("input[name=A1_investigation2_input2]:checked").val();
            let A1_investigation2_input3_usrans = $("#A1_investigation2_input3").val();
            let input1_check = (A1_investigation2_input1_usrans == "2");
            let input2_check = (A1_investigation2_input2_usrans == "1");
            let input3_check = (A1_investigation2_input3_usrans != "");
            if (input1_check && input2_check && input3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({"opacity": "1"});
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({"opacity": "1"});
                })
            } else if (A1_investigation2_input1_usrans == "" || A1_investigation2_input2_usrans == "") {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (input3_check) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 2 的數據'})
            }
        };
        $("#A1_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A1_investigation2_confirm").click(function() {
            A1_investigation2_check();
        });
        $("#A1_investigation2_next").click(function() {
            $("#A1_investigation3_link").click();
        });

        // A1_investigation3
        function A1_investigation3_check() {
            let A1_investigation3_input1_usrans = $("input[name=A1_investigation3_input1]:checked").val();
            let A1_investigation3_input2_usrans = $("input[name=A1_investigation3_input2]:checked").val();
            let A1_investigation3_input3_usrans = $("input[name=A1_investigation3_input3]:checked").val();
            let A1_investigation3_input4_usrans = $("input[name=A1_investigation3_input4]:checked").val();
            let A1_investigation3_input5_usrans = $("#A1_investigation3_input5").val();
            let input1_check = (A1_investigation3_input1_usrans == "1");
            let input2_check = (A1_investigation3_input2_usrans == "1");
            let input3_check = (A1_investigation3_input3_usrans == "2");
            let input4_check = (A1_investigation3_input4_usrans == "2");
            let input5_check = (A1_investigation3_input5_usrans == "0");
            if (input1_check && input2_check && input3_check && input4_check && input5_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({"opacity": "1"});
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A1_investigation3_link").click(function() {
            removeListener();
            ggbMode2();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_investigation3_confirm").click(function() {
            A1_investigation3_check();
        });
        $("#A1_investigation3_next").click(function() {
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
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-6(2) 活動2：" + katex.renderToString("-\\theta", { throwOnError: false }) + " 與 " + katex.renderToString("\\theta", { throwOnError: false }) + " 的三角比轉換關係");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_6_2_A2;
    params.appletOnLoad = function(api) {
        var theta, xP, yP, xPr, yPr = 0;
        var listRecord = [false, false, false, false];

        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterObjectClickListener("buttonSetCancel")
        };
        function hideAllRecordIcon() {
            $("#A2_observation2_record1").hide();
            $("#A2_observation2_record2").hide();
            $("#A2_observation2_record3").hide();
            $("#A2_observation2_record4").hide();
        };
        function ggbMode1() {
            api.setValue("mode180pn", true);
            api.setValue("showAux", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }
        function ggbMode2() {
            api.setValue("mode180pn", true);
            api.setValue("showAuxCopy", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
            api.evalCommand("SetValue(Pcopy, O + (sizeRadius; 30°))");
            api.evalCommand("SetValue(Qcopy, O + (sizeRadius cos(30°), 0))");
        }
        function ggbMode3() {
            api.setValue("mode180pn", false);
            api.setValue("showAux", true);
            api.setValue("showButtonSet", true);
            api.setValue("showTextP", true);
            api.setValue("showTextPtf", true);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }

        // A2_operation1
        function A2_operation1_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*1/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A2_operation1_done").css({"opacity": "1"});
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A2_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            api.registerObjectUpdateListener("θ", A2_operation1_check)
        });
        if (!initA2) { 
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        function A2_operation2_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*11/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A2_operation2_done").css({"opacity": "1"});
                    $("#A2_operation2_next").removeClass("d-none");
                    $("#A2_operation2_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A2_operation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A2_operation2_check);
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(331))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A2_observation1_check() {
            let A2_observation1_input1_1_usrans = $("#A2_observation1_input1_1").val();
            let A2_observation1_input1_2_usrans = $("#A2_observation1_input1_2").val();
            let A2_observation1_input2_1_usrans = $("#A2_observation1_input2_1").val();
            let A2_observation1_input2_2_usrans = $("#A2_observation1_input2_2").val();
            let A2_observation1_input3_1_usrans = $("#A2_observation1_input3_1").val();
            let A2_observation1_input3_2_usrans = $("#A2_observation1_input3_2").val();
            let input_check = [
                (A2_observation1_input1_1_usrans == "0"),
                (A2_observation1_input1_2_usrans == "0"),
                (A2_observation1_input2_1_usrans == "1"),
                (A2_observation1_input2_2_usrans == "3"),
                (A2_observation1_input3_1_usrans == "0"),
                (A2_observation1_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({"opacity": "1"});
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A2_observation1_confirm").click(function() {
            A2_observation1_check();
        });
        $("#A2_observation1_next").click(function() {
            $("#A2_investigation1_link").click();
        })

        // A2_investigation1
        $("#A2_investigation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(331))");
        });
        function A2_investigation1_check() {
            let A2_investigation1_input1_usrans = $("input[name=A2_investigation1_input1]:checked").val();
            let A2_investigation1_input2_usrans = $("input[name=A2_investigation1_input2]:checked").val();
            let input_check = [
                A2_investigation1_input1_usrans == "1",
                A2_investigation1_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({"opacity": "1"});
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A2_investigation1_confirm").click(function() {
            A2_investigation1_check();
        });
        $("#A2_investigation1_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        $("#A2_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(331))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A2_investigation2_check() {
            let A2_investigation2_input1_1_usrans = $("#A2_investigation2_input1_1").val();
            let A2_investigation2_input1_2_usrans = $("#A2_investigation2_input1_2").val();
            let A2_investigation2_input2_1_usrans = $("#A2_investigation2_input2_1").val();
            let A2_investigation2_input2_2_usrans = $("#A2_investigation2_input2_2").val();
            let A2_investigation2_input3_usrans = $("#A2_investigation2_input3").val();
            let A2_investigation2_input4_usrans = $("#A2_investigation2_input4").val();
            let A2_investigation2_input5_usrans = $("input[name=A2_investigation2_input5]:checked").val();
            let A2_investigation2_input6_usrans = $("input[name=A2_investigation2_input6]:checked").val();
            let input_check = [
                A2_investigation2_input1_1_usrans == "2",
                A2_investigation2_input1_2_usrans == "2",
                A2_investigation2_input2_1_usrans == "1",
                A2_investigation2_input2_2_usrans == "1",
                A2_investigation2_input3_usrans == "1",
                A2_investigation2_input4_usrans == "1",
                A2_investigation2_input5_usrans == "1",
                A2_investigation2_input6_usrans == "2"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({"opacity": "1"});
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
        $("#A2_investigation2_next").click(function() {
            $("#A2_operation3_link").click();
        });

        // A2_operation3
        function A2_operation3_check() {
            let countShowP = api.getValue("countShowP");
            let showPp = api.getValue("showP'");
            if (countShowP == 1 && showPp == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                    $("#A2_operation3_done").css({"opacity": "1"});
                    $("#A2_operation3_next").removeClass("d-none");
                    $("#A2_operation3_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「−θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「−θ」'});
            }
        };
        $("#A2_operation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A2_operation3_check)
        });
        $("#A2_operation3_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        function recordResult(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A2_observation2_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A2_observation2_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A2_observation2_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A2_observation2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_observation2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_observation2_Pp_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A2_observation2_Pp_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A2_observation2_Pp_cos" + num).html(katex.renderToString("\\cos{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A2_observation2_Pp_sin" + num).html(katex.renderToString("\\sin{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A2_investigation3_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A2_investigation3_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A2_investigation3_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_investigation3_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_investigation3_1_Pp_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A2_investigation3_1_Pp_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A2_investigation3_1_Pp_cos" + num).html(katex.renderToString("\\cos{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A2_investigation3_1_Pp_sin" + num).html(katex.renderToString("\\sin{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A2_investigation3_2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_investigation3_2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A2_investigation3_2_Pp_cos" + num).html(katex.renderToString("\\cos{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A2_investigation3_2_Pp_sin" + num).html(katex.renderToString("\\sin{(-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord[num-1] = true;
        };
        function A2_observation2_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A2_observation2_record1").show());
            (!listRecord[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A2_observation2_record2").show());
            (!listRecord[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A2_observation2_record3").show());
            (!listRecord[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A2_observation2_record4").show());
            $("#A2_observation2_record1").click(function() {recordResult(1)});
            $("#A2_observation2_record2").click(function() {recordResult(2)});
            $("#A2_observation2_record3").click(function() {recordResult(3)});
            $("#A2_observation2_record4").click(function() {recordResult(4)});
        };
        $("#A2_observation2_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP',true)");
            api.registerObjectUpdateListener("θ", A2_observation2_checkTheta)
        });
        function A2_observation2_check() {
            if (listRecord.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A2_observation2_confirm").hide();
                    $("#A2_observation2_done").css({"opacity": "1"});
                    $("#A2_observation2_next").removeClass("d-none");
                    $("#A2_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A2_observation2_confirm").click(function() {
            A2_observation2_check();
        });
        $("#A2_observation2_next").click(function() {
            $("#A2_investigation3_link").click();
        })

        // A2_investigation3
        function A2_investigation3_check() {
            let A2_investigation3_input5_usrans = $("input[name=A2_investigation3_input5]:checked").val();
            let A2_investigation3_input6_usrans = $("input[name=A2_investigation3_input6]:checked").val();
            let A2_investigation3_input1_1_usrans = $("#A2_investigation3_input1_1").val();
            let A2_investigation3_input1_2_usrans = $("#A2_investigation3_input1_2").val();
            let A2_investigation3_input2_1_usrans = $("#A2_investigation3_input2_1").val();
            let A2_investigation3_input2_2_usrans = $("#A2_investigation3_input2_2").val();
            let A2_investigation3_input3_1_usrans = $("#A2_investigation3_input3_1").val();
            let A2_investigation3_input3_2_usrans = $("#A2_investigation3_input3_2").val();
            let A2_investigation3_input4_1_usrans = $("#A2_investigation3_input4_1").val();
            let A2_investigation3_input4_2_usrans = $("#A2_investigation3_input4_2").val();
            let input_check = [
                (A2_investigation3_input5_usrans == "1"),
                (A2_investigation3_input6_usrans == "2"),
                (A2_investigation3_input1_1_usrans == "0"),
                (A2_investigation3_input1_2_usrans == "1"),
                (A2_investigation3_input2_1_usrans == "0"),
                (A2_investigation3_input2_2_usrans == "1"),
                (A2_investigation3_input3_1_usrans == "0"),
                (A2_investigation3_input3_2_usrans == "1"),
                (A2_investigation3_input4_1_usrans == "0"),
                (A2_investigation3_input4_2_usrans == "1"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A2_investigation3_confirm").hide();
                    $("#A2_investigation3_done").css({"opacity": "1"});
                    $("#A2_investigation3_next").removeClass("d-none");
                    $("#A2_investigation3_link img").css({"opacity": "1"});
                })
            } else if (!listRecord.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 2，才能進行問題探索 3'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 2 的數據'})
            }
        };
        $("#A2_investigation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP',true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_investigation3_confirm").click(function() {
            A2_investigation3_check();
        });
        $("#A2_investigation3_next").click(function() {
            $("#A2_investigation4_link").click();
        });

        // A2_investigation4
        function A2_investigation4_check() {
            let A2_investigation4_input1_usrans = $("#A2_investigation4_input1").val();
            let A2_investigation4_input2_usrans = $("#A2_investigation4_input2").val();
            let A2_investigation4_input3_usrans = $("#A2_investigation4_input3").val();
            let input_check = [
                (A2_investigation4_input1_usrans == "0"),
                (A2_investigation4_input2_usrans == "1"),
                (A2_investigation4_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A2_investigation4_confirm").hide();
                    $("#A2_investigation4_done").css({"opacity": "1"});
                    $("#A2_investigation4_next").removeClass("d-none");
                    $("#A2_investigation4_link img").css({"opacity": "1"});
                })
            } else if (A2_investigation4_input1_usrans == "" || A2_investigation4_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A2_investigation4_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A2_investigation4_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP',true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_investigation4_confirm").click(function() {
            A2_investigation4_check();
        });
        $("#A2_investigation4_next").click(function() {
            showA3();
        });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA3() {
    var initA3 = false;
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-10-6(2) 活動3：" + katex.renderToString("180\\degree\\pm\\theta", { throwOnError: false }) + " 與 "+ katex.renderToString("\\theta", { throwOnError: false }) + " 的三角比轉換關係");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_6_2_A3;
    params.appletOnLoad = function(api) {
        var theta, xP, yP, xPr, yPr = 0;
        var listRecord1 = [false, false, false, false];
        var listRecord2 = [false, false, false, false];

        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterObjectClickListener("buttonSetCancel")
        };
        function hideAllRecordIcon() {
            $("#A3_observation2_record1").hide();
            $("#A3_observation2_record2").hide();
            $("#A3_observation2_record3").hide();
            $("#A3_observation2_record4").hide();
            $("#A3_observation4_record1").hide();
            $("#A3_observation4_record2").hide();
            $("#A3_observation4_record3").hide();
            $("#A3_observation4_record4").hide();
        };
        function ggbMode1() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }
        function ggbMode2() {
            api.setValue("showAuxCopy", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
            api.evalCommand("SetValue(Pcopy, O + (sizeRadius; 30°))");
            api.evalCommand("SetValue(Qcopy, O + (sizeRadius cos(30°), 0))");
        }
        function ggbMode3() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", true);
            api.setValue("showTextP", true);
            api.setValue("showTextPtf", true);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }

        // A3_operation1
        function A3_operation1_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*1/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A3_operation1_done").css({"opacity": "1"});
                    $("#A3_operation1_next").removeClass("d-none");
                    $("#A3_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A3_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            api.registerObjectUpdateListener("θ", A3_operation1_check)
        });
        if (!initA3) { 
            $("#A3_operation1_link").click();
            initA3 = true;
        };
        $("#A3_operation1_next").click(function() {
            $("#A3_operation2_link").click();
        });

        // A3_operation2
        function A3_operation2_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*5/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A3_operation2_done").css({"opacity": "1"});
                    $("#A3_operation2_next").removeClass("d-none");
                    $("#A3_operation2_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A3_operation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A3_operation2_check);
        });
        $("#A3_operation2_next").click(function() {
            $("#A3_observation1_link").click();
        });

        // A3_observation1
        $("#A3_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(151))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A3_observation1_check() {
            let A3_observation1_input1_1_usrans = $("#A3_observation1_input1_1").val();
            let A3_observation1_input1_2_usrans = $("#A3_observation1_input1_2").val();
            let A3_observation1_input2_1_usrans = $("#A3_observation1_input2_1").val();
            let A3_observation1_input2_2_usrans = $("#A3_observation1_input2_2").val();
            let A3_observation1_input3_1_usrans = $("#A3_observation1_input3_1").val();
            let A3_observation1_input3_2_usrans = $("#A3_observation1_input3_2").val();
            let input_check = [
                (A3_observation1_input1_1_usrans == "0"),
                (A3_observation1_input1_2_usrans == "0"),
                (A3_observation1_input2_1_usrans == "1"),
                (A3_observation1_input2_2_usrans == "3"),
                (A3_observation1_input3_1_usrans == "0"),
                (A3_observation1_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A3_observation1_confirm").hide();
                    $("#A3_observation1_done").css({"opacity": "1"});
                    $("#A3_observation1_next").removeClass("d-none");
                    $("#A3_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_observation1_confirm").click(function() {
            A3_observation1_check();
        });
        $("#A3_observation1_next").click(function() {
            $("#A3_investigation1_link").click();
        })

        // A3_investigation1
        $("#A3_investigation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(151))");
        });
        function A3_investigation1_check() {
            let A3_investigation1_input1_usrans = $("input[name=A3_investigation1_input1]:checked").val();
            let A3_investigation1_input2_usrans = $("input[name=A3_investigation1_input2]:checked").val();
            let input_check = [
                A3_investigation1_input1_usrans == "1",
                A3_investigation1_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A3_investigation1_confirm").hide();
                    $("#A3_investigation1_done").css({"opacity": "1"});
                    $("#A3_investigation1_next").removeClass("d-none");
                    $("#A3_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation1_confirm").click(function() {
            A3_investigation1_check();
        });
        $("#A3_investigation1_next").click(function() {
            $("#A3_investigation2_link").click();
        });

        // A3_investigation2
        $("#A3_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(151))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A3_investigation2_check() {
            let A3_investigation2_input1_1_usrans = $("#A3_investigation2_input1_1").val();
            let A3_investigation2_input1_2_usrans = $("#A3_investigation2_input1_2").val();
            let A3_investigation2_input2_1_usrans = $("#A3_investigation2_input2_1").val();
            let A3_investigation2_input2_2_usrans = $("#A3_investigation2_input2_2").val();
            let A3_investigation2_input3_usrans = $("#A3_investigation2_input3").val();
            let A3_investigation2_input4_usrans = $("#A3_investigation2_input4").val();
            let A3_investigation2_input5_usrans = $("input[name=A3_investigation2_input5]:checked").val();
            let A3_investigation2_input6_usrans = $("input[name=A3_investigation2_input6]:checked").val();
            let input_check = [
                A3_investigation2_input1_1_usrans == "2",
                A3_investigation2_input1_2_usrans == "2",
                A3_investigation2_input2_1_usrans == "1",
                A3_investigation2_input2_2_usrans == "1",
                A3_investigation2_input3_usrans == "1",
                A3_investigation2_input4_usrans == "1",
                A3_investigation2_input5_usrans == "2",
                A3_investigation2_input6_usrans == "1"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A3_investigation2_confirm").hide();
                    $("#A3_investigation2_done").css({"opacity": "1"});
                    $("#A3_investigation2_next").removeClass("d-none");
                    $("#A3_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation2_confirm").click(function() {
            A3_investigation2_check();
        });
        $("#A3_investigation2_next").click(function() {
            $("#A3_operation3_link").click();
        });

        // A3_operation3
        function A3_operation3_check() {
            let countShowP = api.getValue("countShowP");
            let showP1 = api.getValue("showP1");
            if (countShowP == 1 && showP1 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                    $("#A3_operation3_done").css({"opacity": "1"});
                    $("#A3_operation3_next").removeClass("d-none");
                    $("#A3_operation3_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「180°−θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「180°−θ」'});
            }
        };
        $("#A3_operation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A3_operation3_check)
        });
        $("#A3_operation3_next").click(function() {
            $("#A3_observation2_link").click();
        });

        // A3_observation2
        function recordResult1(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A3_observation2_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A3_observation2_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A3_observation2_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A3_observation2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_observation2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_observation2_P1_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A3_observation2_P1_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A3_observation2_P1_cos" + num).html(katex.renderToString("\\cos{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_observation2_P1_sin" + num).html(katex.renderToString("\\sin{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation3_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A3_investigation3_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A3_investigation3_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation3_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation3_1_P1_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A3_investigation3_1_P1_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A3_investigation3_1_P1_cos" + num).html(katex.renderToString("\\cos{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation3_1_P1_sin" + num).html(katex.renderToString("\\sin{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation3_2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation3_2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation3_2_P1_cos" + num).html(katex.renderToString("\\cos{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation3_2_P1_sin" + num).html(katex.renderToString("\\sin{(180\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord1[num-1] = true;
        };
        function A3_observation2_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord1[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A3_observation2_record1").show());
            (!listRecord1[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A3_observation2_record2").show());
            (!listRecord1[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A3_observation2_record3").show());
            (!listRecord1[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A3_observation2_record4").show());
            $("#A3_observation2_record1").click(function() {recordResult1(1)});
            $("#A3_observation2_record2").click(function() {recordResult1(2)});
            $("#A3_observation2_record3").click(function() {recordResult1(3)});
            $("#A3_observation2_record4").click(function() {recordResult1(4)});
        };
        $("#A3_observation2_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP1,true)");
            api.registerObjectUpdateListener("θ", A3_observation2_checkTheta);
        });
        function A3_observation2_check() {
            if (listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A3_observation2_confirm").hide();
                    $("#A3_observation2_done").css({"opacity": "1"});
                    $("#A3_observation2_next").removeClass("d-none");
                    $("#A3_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A3_observation2_confirm").click(function() {
            A3_observation2_check();
        });
        $("#A3_observation2_next").click(function() {
            $("#A3_investigation3_link").click();
        })

        // A3_investigation3
        function A3_investigation3_check() {
            let A3_investigation3_input5_usrans = $("input[name=A3_investigation3_input5]:checked").val();
            let A3_investigation3_input6_usrans = $("input[name=A3_investigation3_input6]:checked").val();
            let A3_investigation3_input1_1_usrans = $("#A3_investigation3_input1_1").val();
            let A3_investigation3_input1_2_usrans = $("#A3_investigation3_input1_2").val();
            let A3_investigation3_input2_1_usrans = $("#A3_investigation3_input2_1").val();
            let A3_investigation3_input2_2_usrans = $("#A3_investigation3_input2_2").val();
            let A3_investigation3_input3_1_usrans = $("#A3_investigation3_input3_1").val();
            let A3_investigation3_input3_2_usrans = $("#A3_investigation3_input3_2").val();
            let A3_investigation3_input4_1_usrans = $("#A3_investigation3_input4_1").val();
            let A3_investigation3_input4_2_usrans = $("#A3_investigation3_input4_2").val();
            let input_check = [
                (A3_investigation3_input5_usrans == "2"),
                (A3_investigation3_input6_usrans == "1"),
                (A3_investigation3_input1_1_usrans == "1"),
                (A3_investigation3_input1_2_usrans == "0"),
                (A3_investigation3_input2_1_usrans == "1"),
                (A3_investigation3_input2_2_usrans == "0"),
                (A3_investigation3_input3_1_usrans == "1"),
                (A3_investigation3_input3_2_usrans == "0"),
                (A3_investigation3_input4_1_usrans == "1"),
                (A3_investigation3_input4_2_usrans == "0"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A3_investigation3_confirm").hide();
                    $("#A3_investigation3_done").css({"opacity": "1"});
                    $("#A3_investigation3_next").removeClass("d-none");
                    $("#A3_investigation3_link img").css({"opacity": "1"});
                })
            } else if (!listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 2，才能進行問題探索 3'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 2 的數據'})
            }
        };
        $("#A3_investigation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP1,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A3_investigation3_confirm").click(function() {
            A3_investigation3_check();
        });
        $("#A3_investigation3_next").click(function() {
            $("#A3_investigation4_link").click();
        });

        // A3_investigation4
        function A3_investigation4_check() {
            let A3_investigation4_input1_usrans = $("#A3_investigation4_input1").val();
            let A3_investigation4_input2_usrans = $("#A3_investigation4_input2").val();
            let A3_investigation4_input3_usrans = $("#A3_investigation4_input3").val();
            let input_check = [
                (A3_investigation4_input1_usrans == "1"),
                (A3_investigation4_input2_usrans == "0"),
                (A3_investigation4_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A3_investigation4_confirm").hide();
                    $("#A3_investigation4_done").css({"opacity": "1"});
                    $("#A3_investigation4_next").removeClass("d-none");
                    $("#A3_investigation4_link img").css({"opacity": "1"});
                })
            } else if (A3_investigation4_input1_usrans == "" || A3_investigation4_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A3_investigation4_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation4_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP1,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A3_investigation4_confirm").click(function() {
            A3_investigation4_check();
        });
        $("#A3_investigation4_next").click(function() {
            $("#A3_operation4_link").click();
        });

        // A3_operation4
        function A3_operation4_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*7/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                    $("#A3_operation4_done").css({"opacity": "1"});
                    $("#A3_operation4_next").removeClass("d-none");
                    $("#A3_operation4_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A3_operation4_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A3_operation4_check);
        });
        $("#A3_operation4_next").click(function() {
            $("#A3_observation3_link").click();
        });

        // A3_observation3
        $("#A3_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(211))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A3_observation3_check() {
            let A3_observation3_input1_1_usrans = $("#A3_observation3_input1_1").val();
            let A3_observation3_input1_2_usrans = $("#A3_observation3_input1_2").val();
            let A3_observation3_input2_1_usrans = $("#A3_observation3_input2_1").val();
            let A3_observation3_input2_2_usrans = $("#A3_observation3_input2_2").val();
            let A3_observation3_input3_1_usrans = $("#A3_observation3_input3_1").val();
            let A3_observation3_input3_2_usrans = $("#A3_observation3_input3_2").val();
            let input_check = [
                (A3_observation3_input1_1_usrans == "0"),
                (A3_observation3_input1_2_usrans == "0"),
                (A3_observation3_input2_1_usrans == "1"),
                (A3_observation3_input2_2_usrans == "3"),
                (A3_observation3_input3_1_usrans == "0"),
                (A3_observation3_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A3_observation3_confirm").hide();
                    $("#A3_observation3_done").css({"opacity": "1"});
                    $("#A3_observation3_next").removeClass("d-none");
                    $("#A3_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_observation3_confirm").click(function() {
            A3_observation3_check();
        });
        $("#A3_observation3_next").click(function() {
            $("#A3_investigation5_link").click();
        })

        // A3_investigation5
        $("#A3_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(211))");
        });
        function A3_investigation5_check() {
            let A3_investigation5_input1_usrans = $("input[name=A3_investigation5_input1]:checked").val();
            let A3_investigation5_input2_usrans = $("input[name=A3_investigation5_input2]:checked").val();
            let input_check = [
                A3_investigation5_input1_usrans == "1",
                A3_investigation5_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A3_investigation5_confirm").hide();
                    $("#A3_investigation5_done").css({"opacity": "1"});
                    $("#A3_investigation5_next").removeClass("d-none");
                    $("#A3_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation5_confirm").click(function() {
            A3_investigation5_check();
        });
        $("#A3_investigation5_next").click(function() {
            $("#A3_investigation6_link").click();
        });

        // A3_investigation6
        $("#A3_investigation6_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(211))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A3_investigation6_check() {
            let A3_investigation6_input1_1_usrans = $("#A3_investigation6_input1_1").val();
            let A3_investigation6_input1_2_usrans = $("#A3_investigation6_input1_2").val();
            let A3_investigation6_input2_1_usrans = $("#A3_investigation6_input2_1").val();
            let A3_investigation6_input2_2_usrans = $("#A3_investigation6_input2_2").val();
            let A3_investigation6_input3_usrans = $("#A3_investigation6_input3").val();
            let A3_investigation6_input4_usrans = $("#A3_investigation6_input4").val();
            let A3_investigation6_input5_usrans = $("input[name=A3_investigation6_input5]:checked").val();
            let A3_investigation6_input6_usrans = $("input[name=A3_investigation6_input6]:checked").val();
            let input_check = [
                A3_investigation6_input1_1_usrans == "2",
                A3_investigation6_input1_2_usrans == "2",
                A3_investigation6_input2_1_usrans == "1",
                A3_investigation6_input2_2_usrans == "1",
                A3_investigation6_input3_usrans == "1",
                A3_investigation6_input4_usrans == "1",
                A3_investigation6_input5_usrans == "2",
                A3_investigation6_input6_usrans == "2"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A3_investigation6_confirm").hide();
                    $("#A3_investigation6_done").css({"opacity": "1"});
                    $("#A3_investigation6_next").removeClass("d-none");
                    $("#A3_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation6_confirm").click(function() {
            A3_investigation6_check();
        });
        $("#A3_investigation6_next").click(function() {
            $("#A3_operation5_link").click();
        });

        // A3_operation5
        function A3_operation5_check() {
            let countShowP = api.getValue("countShowP");
            let showP2 = api.getValue("showP2");
            if (countShowP == 1 && showP2 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                    $("#A3_operation5_done").css({"opacity": "1"});
                    $("#A3_operation5_next").removeClass("d-none");
                    $("#A3_operation5_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「180°+θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「180°+θ」'});
            }
        };
        $("#A3_operation5_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A3_operation5_check)
        });
        $("#A3_operation5_next").click(function() {
            $("#A3_observation4_link").click();
        });

        // A3_observation4
        function recordResult2(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A3_observation4_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A3_observation4_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A3_observation4_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A3_observation4_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_observation4_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_observation4_P2_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A3_observation4_P2_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A3_observation4_P2_cos" + num).html(katex.renderToString("\\cos{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_observation4_P2_sin" + num).html(katex.renderToString("\\sin{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation7_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A3_investigation7_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A3_investigation7_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation7_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation7_1_P2_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A3_investigation7_1_P2_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A3_investigation7_1_P2_cos" + num).html(katex.renderToString("\\cos{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation7_1_P2_sin" + num).html(katex.renderToString("\\sin{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation7_2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation7_2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A3_investigation7_2_P2_cos" + num).html(katex.renderToString("\\cos{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A3_investigation7_2_P2_sin" + num).html(katex.renderToString("\\sin{(180\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord2[num-1] = true;
        };
        function A3_observation4_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord2[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A3_observation4_record1").show());
            (!listRecord2[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A3_observation4_record2").show());
            (!listRecord2[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A3_observation4_record3").show());
            (!listRecord2[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A3_observation4_record4").show());
            $("#A3_observation4_record1").click(function() {recordResult2(1)});
            $("#A3_observation4_record2").click(function() {recordResult2(2)});
            $("#A3_observation4_record3").click(function() {recordResult2(3)});
            $("#A3_observation4_record4").click(function() {recordResult2(4)});
        };
        $("#A3_observation4_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP2,true)");
            api.registerObjectUpdateListener("θ", A3_observation4_checkTheta);
        });
        function A3_observation4_check() {
            if (listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A3_observation4_confirm").hide();
                    $("#A3_observation4_done").css({"opacity": "1"});
                    $("#A3_observation4_next").removeClass("d-none");
                    $("#A3_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A3_observation4_confirm").click(function() {
            A3_observation4_check();
        });
        $("#A3_observation4_next").click(function() {
            $("#A3_investigation7_link").click();
        })

        // A3_investigation7
        function A3_investigation7_check() {
            let A3_investigation7_input5_usrans = $("input[name=A3_investigation7_input5]:checked").val();
            let A3_investigation7_input6_usrans = $("input[name=A3_investigation7_input6]:checked").val();
            let A3_investigation7_input1_1_usrans = $("#A3_investigation7_input1_1").val();
            let A3_investigation7_input1_2_usrans = $("#A3_investigation7_input1_2").val();
            let A3_investigation7_input2_1_usrans = $("#A3_investigation7_input2_1").val();
            let A3_investigation7_input2_2_usrans = $("#A3_investigation7_input2_2").val();
            let A3_investigation7_input3_1_usrans = $("#A3_investigation7_input3_1").val();
            let A3_investigation7_input3_2_usrans = $("#A3_investigation7_input3_2").val();
            let A3_investigation7_input4_1_usrans = $("#A3_investigation7_input4_1").val();
            let A3_investigation7_input4_2_usrans = $("#A3_investigation7_input4_2").val();
            let input_check = [
                (A3_investigation7_input5_usrans == "2"),
                (A3_investigation7_input6_usrans == "2"),
                (A3_investigation7_input1_1_usrans == "1"),
                (A3_investigation7_input1_2_usrans == "1"),
                (A3_investigation7_input2_1_usrans == "1"),
                (A3_investigation7_input2_2_usrans == "1"),
                (A3_investigation7_input3_1_usrans == "1"),
                (A3_investigation7_input3_2_usrans == "1"),
                (A3_investigation7_input4_1_usrans == "1"),
                (A3_investigation7_input4_2_usrans == "1"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 7'}).then((result) => {
                    $("#A3_investigation7_confirm").hide();
                    $("#A3_investigation7_done").css({"opacity": "1"});
                    $("#A3_investigation7_next").removeClass("d-none");
                    $("#A3_investigation7_link img").css({"opacity": "1"});
                })
            } else if (!listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 4，才能進行問題探索 7'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 4 的數據'})
            }
        };
        $("#A3_investigation7_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP2,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A3_investigation7_confirm").click(function() {
            A3_investigation7_check();
        });
        $("#A3_investigation7_next").click(function() {
            $("#A3_investigation8_link").click();
        });

        // A3_investigation8
        function A3_investigation8_check() {
            let A3_investigation8_input1_usrans = $("#A3_investigation8_input1").val();
            let A3_investigation8_input2_usrans = $("#A3_investigation8_input2").val();
            let A3_investigation8_input3_usrans = $("#A3_investigation8_input3").val();
            let input_check = [
                (A3_investigation8_input1_usrans == "1"),
                (A3_investigation8_input2_usrans == "1"),
                (A3_investigation8_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 8'}).then((result) => {
                    $("#A3_investigation8_confirm").hide();
                    $("#A3_investigation8_done").css({"opacity": "1"});
                    $("#A3_investigation8_next").removeClass("d-none");
                    $("#A3_investigation8_link img").css({"opacity": "1"});
                })
            } else if (A3_investigation8_input1_usrans == "" || A3_investigation8_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A3_investigation8_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A3_investigation8_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP2,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A3_investigation8_confirm").click(function() {
            A3_investigation8_check();
        });
        $("#A3_investigation8_next").click(function() {
            showA4();
        });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA4() {
    var initA4 = false;
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("G-10-6(2) 活動4：" + katex.renderToString("90\\degree\\pm\\theta", { throwOnError: false }) + " 與 "+ katex.renderToString("\\theta", { throwOnError: false }) + " 的三角比轉換關係");
    params.id = "ggbApplet04";
    params.ggbBase64 = ggb_G_10_6_2_A3;
    params.appletOnLoad = function(api) {
        var theta, xP, yP, xPr, yPr = 0;
        var listRecord1 = [false, false, false, false];
        var listRecord2 = [false, false, false, false];

        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterObjectClickListener("buttonSetCancel")
        };
        function hideAllRecordIcon() {
            $("#A4_observation2_record1").hide();
            $("#A4_observation2_record2").hide();
            $("#A4_observation2_record3").hide();
            $("#A4_observation2_record4").hide();
            $("#A4_observation4_record1").hide();
            $("#A4_observation4_record2").hide();
            $("#A4_observation4_record3").hide();
            $("#A4_observation4_record4").hide();
        };
        function ggbMode1() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }
        function ggbMode2() {
            api.setValue("showAuxCopy'", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
            api.evalCommand("SetValue(Pcopy, O + (sizeRadius; 30°))");
            api.evalCommand("SetValue(Qcopy, O + (sizeRadius cos(30°), 0))");
        }
        function ggbMode3() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", true);
            api.setValue("showTextP", true);
            api.setValue("showTextPtf", true);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }

        // A4_operation1
        function A4_operation1_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*1/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A4_operation1_done").css({"opacity": "1"});
                    $("#A4_operation1_next").removeClass("d-none");
                    $("#A4_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A4_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            api.registerObjectUpdateListener("θ", A4_operation1_check)
        });
        if (!initA4) { 
            $("#A4_operation1_link").click();
            initA4 = true;
        };
        $("#A4_operation1_next").click(function() {
            $("#A4_operation2_link").click();
        });

        // A4_operation2
        function A4_operation2_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*2/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A4_operation2_done").css({"opacity": "1"});
                    $("#A4_operation2_next").removeClass("d-none");
                    $("#A4_operation2_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A4_operation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A4_operation2_check);
        });
        $("#A4_operation2_next").click(function() {
            $("#A4_observation1_link").click();
        });

        // A4_observation1
        $("#A4_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(61))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A4_observation1_check() {
            let A4_observation1_input1_1_usrans = $("#A4_observation1_input1_1").val();
            let A4_observation1_input1_2_usrans = $("#A4_observation1_input1_2").val();
            let A4_observation1_input2_1_usrans = $("#A4_observation1_input2_1").val();
            let A4_observation1_input2_2_usrans = $("#A4_observation1_input2_2").val();
            let A4_observation1_input3_1_usrans = $("#A4_observation1_input3_1").val();
            let A4_observation1_input3_2_usrans = $("#A4_observation1_input3_2").val();
            let input_check = [
                (A4_observation1_input1_1_usrans == "0"),
                (A4_observation1_input1_2_usrans == "0"),
                (A4_observation1_input2_1_usrans == "1"),
                (A4_observation1_input2_2_usrans == "3"),
                (A4_observation1_input3_1_usrans == "0"),
                (A4_observation1_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A4_observation1_confirm").hide();
                    $("#A4_observation1_done").css({"opacity": "1"});
                    $("#A4_observation1_next").removeClass("d-none");
                    $("#A4_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_observation1_confirm").click(function() {
            A4_observation1_check();
        });
        $("#A4_observation1_next").click(function() {
            $("#A4_investigation1_link").click();
        })

        // A4_investigation1
        $("#A4_investigation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(61))");
        });
        function A4_investigation1_check() {
            let A4_investigation1_input1_usrans = $("input[name=A4_investigation1_input1]:checked").val();
            let A4_investigation1_input2_usrans = $("input[name=A4_investigation1_input2]:checked").val();
            let input_check = [
                A4_investigation1_input1_usrans == "1",
                A4_investigation1_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A4_investigation1_confirm").hide();
                    $("#A4_investigation1_done").css({"opacity": "1"});
                    $("#A4_investigation1_next").removeClass("d-none");
                    $("#A4_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation1_confirm").click(function() {
            A4_investigation1_check();
        });
        $("#A4_investigation1_next").click(function() {
            $("#A4_investigation2_link").click();
        });

        // A4_investigation2
        $("#A4_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(61))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A4_investigation2_check() {
            let A4_investigation2_input1_1_usrans = $("#A4_investigation2_input1_1").val();
            let A4_investigation2_input1_2_usrans = $("#A4_investigation2_input1_2").val();
            let A4_investigation2_input2_1_usrans = $("#A4_investigation2_input2_1").val();
            let A4_investigation2_input2_2_usrans = $("#A4_investigation2_input2_2").val();
            let A4_investigation2_input3_usrans = $("#A4_investigation2_input3").val();
            let A4_investigation2_input4_usrans = $("#A4_investigation2_input4").val();
            let A4_investigation2_input5_usrans = $("input[name=A4_investigation2_input5]:checked").val();
            let A4_investigation2_input6_usrans = $("input[name=A4_investigation2_input6]:checked").val();
            let input_check = [
                A4_investigation2_input1_1_usrans == "2",
                A4_investigation2_input1_2_usrans == "2",
                A4_investigation2_input2_1_usrans == "1",
                A4_investigation2_input2_2_usrans == "1",
                A4_investigation2_input3_usrans == "1",
                A4_investigation2_input4_usrans == "0",
                A4_investigation2_input5_usrans == "3",
                A4_investigation2_input6_usrans == "1"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A4_investigation2_confirm").hide();
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation2_confirm").click(function() {
            A4_investigation2_check();
        });
        $("#A4_investigation2_next").click(function() {
            $("#A4_operation3_link").click();
        });

        // A4_operation3
        function A4_operation3_check() {
            let countShowP = api.getValue("countShowP");
            let showP3 = api.getValue("showP3");
            if (countShowP == 1 && showP3 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                    $("#A4_operation3_done").css({"opacity": "1"});
                    $("#A4_operation3_next").removeClass("d-none");
                    $("#A4_operation3_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「90°−θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「90°−θ」'});
            }
        };
        $("#A4_operation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A4_operation3_check)
        });
        $("#A4_operation3_next").click(function() {
            $("#A4_observation2_link").click();
        });

        // A4_observation2
        function recordResult1(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A4_observation2_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A4_observation2_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A4_observation2_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A4_observation2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_observation2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_observation2_P3_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A4_observation2_P3_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A4_observation2_P3_cos" + num).html(katex.renderToString("\\cos{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_observation2_P3_sin" + num).html(katex.renderToString("\\sin{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation3_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A4_investigation3_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A4_investigation3_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_1_P3_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A4_investigation3_1_P3_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A4_investigation3_1_P3_cos" + num).html(katex.renderToString("\\cos{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation3_1_P3_sin" + num).html(katex.renderToString("\\sin{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_1").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_1").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_1").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_1").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_2").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_2").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_2").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_input"+ num +"_2").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation3_2_P3_cos" + num).html(katex.renderToString("\\cos{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation3_2_P3_sin" + num).html(katex.renderToString("\\sin{(90\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord1[num-1] = true;
        };
        function A4_observation2_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord1[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A4_observation2_record1").show());
            (!listRecord1[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A4_observation2_record2").show());
            (!listRecord1[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A4_observation2_record3").show());
            (!listRecord1[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A4_observation2_record4").show());
            $("#A4_observation2_record1").click(function() {recordResult1(1)});
            $("#A4_observation2_record2").click(function() {recordResult1(2)});
            $("#A4_observation2_record3").click(function() {recordResult1(3)});
            $("#A4_observation2_record4").click(function() {recordResult1(4)});
        };
        $("#A4_observation2_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP3,true)");
            api.registerObjectUpdateListener("θ", A4_observation2_checkTheta);
        });
        function A4_observation2_check() {
            if (listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A4_observation2_confirm").hide();
                    $("#A4_observation2_done").css({"opacity": "1"});
                    $("#A4_observation2_next").removeClass("d-none");
                    $("#A4_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A4_observation2_confirm").click(function() {
            A4_observation2_check();
        });
        $("#A4_observation2_next").click(function() {
            $("#A4_investigation3_link").click();
        })

        // A4_investigation3
        function A4_investigation3_check() {
            let A4_investigation3_input5_usrans = $("input[name=A4_investigation3_input5]:checked").val();
            let A4_investigation3_input6_usrans = $("input[name=A4_investigation3_input6]:checked").val();
            let A4_investigation3_input1_1_usrans = $("#A4_investigation3_input1_1").val();
            let A4_investigation3_input1_2_usrans = $("#A4_investigation3_input1_2").val();
            let A4_investigation3_input2_1_usrans = $("#A4_investigation3_input2_1").val();
            let A4_investigation3_input2_2_usrans = $("#A4_investigation3_input2_2").val();
            let A4_investigation3_input3_1_usrans = $("#A4_investigation3_input3_1").val();
            let A4_investigation3_input3_2_usrans = $("#A4_investigation3_input3_2").val();
            let A4_investigation3_input4_1_usrans = $("#A4_investigation3_input4_1").val();
            let A4_investigation3_input4_2_usrans = $("#A4_investigation3_input4_2").val();
            let input_check = [
                (A4_investigation3_input5_usrans == "3"),
                (A4_investigation3_input6_usrans == "1"),
                (A4_investigation3_input1_1_usrans == "2"),
                (A4_investigation3_input1_2_usrans == "0"),
                (A4_investigation3_input2_1_usrans == "2"),
                (A4_investigation3_input2_2_usrans == "0"),
                (A4_investigation3_input3_1_usrans == "2"),
                (A4_investigation3_input3_2_usrans == "0"),
                (A4_investigation3_input4_1_usrans == "2"),
                (A4_investigation3_input4_2_usrans == "0"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A4_investigation3_confirm").hide();
                    $("#A4_investigation3_done").css({"opacity": "1"});
                    $("#A4_investigation3_next").removeClass("d-none");
                    $("#A4_investigation3_link img").css({"opacity": "1"});
                })
            } else if (!listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 2，才能進行問題探索 3'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 2 的數據'})
            }
        };
        $("#A4_investigation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP3,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A4_investigation3_confirm").click(function() {
            A4_investigation3_check();
        });
        $("#A4_investigation3_next").click(function() {
            $("#A4_investigation4_link").click();
        });

        // A4_investigation4
        function A4_investigation4_check() {
            let A4_investigation4_input1_usrans = $("#A4_investigation4_input1").val();
            let A4_investigation4_input2_usrans = $("#A4_investigation4_input2").val();
            let A4_investigation4_input3_usrans = $("#A4_investigation4_input3").val();
            let input_check = [
                (A4_investigation4_input1_usrans == "2"),
                (A4_investigation4_input2_usrans == "0"),
                (A4_investigation4_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A4_investigation4_confirm").hide();
                    $("#A4_investigation4_done").css({"opacity": "1"});
                    $("#A4_investigation4_next").removeClass("d-none");
                    $("#A4_investigation4_link img").css({"opacity": "1"});
                })
            } else if (A4_investigation4_input1_usrans == "" || A4_investigation4_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A4_investigation4_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation4_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP3,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A4_investigation4_confirm").click(function() {
            A4_investigation4_check();
        });
        $("#A4_investigation4_next").click(function() {
            $("#A4_operation4_link").click();
        });

        // A4_operation4
        function A4_operation4_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*4/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                    $("#A4_operation4_done").css({"opacity": "1"});
                    $("#A4_operation4_next").removeClass("d-none");
                    $("#A4_operation4_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A4_operation4_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A4_operation4_check);
        });
        $("#A4_operation4_next").click(function() {
            $("#A4_observation3_link").click();
        });

        // A4_observation3
        $("#A4_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(121))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A4_observation3_check() {
            let A4_observation3_input1_1_usrans = $("#A4_observation3_input1_1").val();
            let A4_observation3_input1_2_usrans = $("#A4_observation3_input1_2").val();
            let A4_observation3_input2_1_usrans = $("#A4_observation3_input2_1").val();
            let A4_observation3_input2_2_usrans = $("#A4_observation3_input2_2").val();
            let A4_observation3_input3_1_usrans = $("#A4_observation3_input3_1").val();
            let A4_observation3_input3_2_usrans = $("#A4_observation3_input3_2").val();
            let input_check = [
                (A4_observation3_input1_1_usrans == "0"),
                (A4_observation3_input1_2_usrans == "0"),
                (A4_observation3_input2_1_usrans == "1"),
                (A4_observation3_input2_2_usrans == "3"),
                (A4_observation3_input3_1_usrans == "0"),
                (A4_observation3_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A4_observation3_confirm").hide();
                    $("#A4_observation3_done").css({"opacity": "1"});
                    $("#A4_observation3_next").removeClass("d-none");
                    $("#A4_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_observation3_confirm").click(function() {
            A4_observation3_check();
        });
        $("#A4_observation3_next").click(function() {
            $("#A4_investigation5_link").click();
        })

        // A4_investigation5
        $("#A4_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(121))");
        });
        function A4_investigation5_check() {
            let A4_investigation5_input1_usrans = $("input[name=A4_investigation5_input1]:checked").val();
            let A4_investigation5_input2_usrans = $("input[name=A4_investigation5_input2]:checked").val();
            let input_check = [
                A4_investigation5_input1_usrans == "1",
                A4_investigation5_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A4_investigation5_confirm").hide();
                    $("#A4_investigation5_done").css({"opacity": "1"});
                    $("#A4_investigation5_next").removeClass("d-none");
                    $("#A4_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation5_confirm").click(function() {
            A4_investigation5_check();
        });
        $("#A4_investigation5_next").click(function() {
            $("#A4_investigation6_link").click();
        });

        // A4_investigation6
        $("#A4_investigation6_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(121))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A4_investigation6_check() {
            let A4_investigation6_input1_1_usrans = $("#A4_investigation6_input1_1").val();
            let A4_investigation6_input1_2_usrans = $("#A4_investigation6_input1_2").val();
            let A4_investigation6_input2_1_usrans = $("#A4_investigation6_input2_1").val();
            let A4_investigation6_input2_2_usrans = $("#A4_investigation6_input2_2").val();
            let A4_investigation6_input3_usrans = $("#A4_investigation6_input3").val();
            let A4_investigation6_input4_usrans = $("#A4_investigation6_input4").val();
            let A4_investigation6_input5_usrans = $("input[name=A4_investigation6_input5]:checked").val();
            let A4_investigation6_input6_usrans = $("input[name=A4_investigation6_input6]:checked").val();
            let input_check = [
                A4_investigation6_input1_1_usrans == "2",
                A4_investigation6_input1_2_usrans == "2",
                A4_investigation6_input2_1_usrans == "1",
                A4_investigation6_input2_2_usrans == "1",
                A4_investigation6_input3_usrans == "1",
                A4_investigation6_input4_usrans == "0",
                A4_investigation6_input5_usrans == "4",
                A4_investigation6_input6_usrans == "1"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A4_investigation6_confirm").hide();
                    $("#A4_investigation6_done").css({"opacity": "1"});
                    $("#A4_investigation6_next").removeClass("d-none");
                    $("#A4_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation6_confirm").click(function() {
            A4_investigation6_check();
        });
        $("#A4_investigation6_next").click(function() {
            $("#A4_operation5_link").click();
        });

        // A4_operation5
        function A4_operation5_check() {
            let countShowP = api.getValue("countShowP");
            let showP4 = api.getValue("showP4");
            if (countShowP == 1 && showP4 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                    $("#A4_operation5_done").css({"opacity": "1"});
                    $("#A4_operation5_next").removeClass("d-none");
                    $("#A4_operation5_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「90°+θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「90°+θ」'});
            }
        };
        $("#A4_operation5_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A4_operation5_check)
        });
        $("#A4_operation5_next").click(function() {
            $("#A4_observation4_link").click();
        });

        // A4_observation4
        function recordResult2(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A4_observation4_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A4_observation4_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A4_observation4_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A4_observation4_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_observation4_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_observation4_P4_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A4_observation4_P4_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A4_observation4_P4_cos" + num).html(katex.renderToString("\\cos{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_observation4_P4_sin" + num).html(katex.renderToString("\\sin{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation7_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A4_investigation7_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A4_investigation7_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_1_P4_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A4_investigation7_1_P4_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A4_investigation7_1_P4_cos" + num).html(katex.renderToString("\\cos{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation7_1_P4_sin" + num).html(katex.renderToString("\\sin{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_1").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_1").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_1").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_1").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_2").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_2").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_2").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_input"+ num +"_2").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A4_investigation7_2_P4_cos" + num).html(katex.renderToString("\\cos{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A4_investigation7_2_P4_sin" + num).html(katex.renderToString("\\sin{(90\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord2[num-1] = true;
        };
        function A4_observation4_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord2[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A4_observation4_record1").show());
            (!listRecord2[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A4_observation4_record2").show());
            (!listRecord2[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A4_observation4_record3").show());
            (!listRecord2[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A4_observation4_record4").show());
            $("#A4_observation4_record1").click(function() {recordResult2(1)});
            $("#A4_observation4_record2").click(function() {recordResult2(2)});
            $("#A4_observation4_record3").click(function() {recordResult2(3)});
            $("#A4_observation4_record4").click(function() {recordResult2(4)});
        };
        $("#A4_observation4_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP4,true)");
            api.registerObjectUpdateListener("θ", A4_observation4_checkTheta);
        });
        function A4_observation4_check() {
            if (listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A4_observation4_confirm").hide();
                    $("#A4_observation4_done").css({"opacity": "1"});
                    $("#A4_observation4_next").removeClass("d-none");
                    $("#A4_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A4_observation4_confirm").click(function() {
            A4_observation4_check();
        });
        $("#A4_observation4_next").click(function() {
            $("#A4_investigation7_link").click();
        })

        // A4_investigation7
        function A4_investigation7_check() {
            let A4_investigation7_input5_usrans = $("input[name=A4_investigation7_input5]:checked").val();
            let A4_investigation7_input6_usrans = $("input[name=A4_investigation7_input6]:checked").val();
            let A4_investigation7_input1_1_usrans = $("#A4_investigation7_input1_1").val();
            let A4_investigation7_input1_2_usrans = $("#A4_investigation7_input1_2").val();
            let A4_investigation7_input2_1_usrans = $("#A4_investigation7_input2_1").val();
            let A4_investigation7_input2_2_usrans = $("#A4_investigation7_input2_2").val();
            let A4_investigation7_input3_1_usrans = $("#A4_investigation7_input3_1").val();
            let A4_investigation7_input3_2_usrans = $("#A4_investigation7_input3_2").val();
            let A4_investigation7_input4_1_usrans = $("#A4_investigation7_input4_1").val();
            let A4_investigation7_input4_2_usrans = $("#A4_investigation7_input4_2").val();
            let input_check = [
                (A4_investigation7_input5_usrans == "4"),
                (A4_investigation7_input6_usrans == "1"),
                (A4_investigation7_input1_1_usrans == "3"),
                (A4_investigation7_input1_2_usrans == "0"),
                (A4_investigation7_input2_1_usrans == "3"),
                (A4_investigation7_input2_2_usrans == "0"),
                (A4_investigation7_input3_1_usrans == "3"),
                (A4_investigation7_input3_2_usrans == "0"),
                (A4_investigation7_input4_1_usrans == "3"),
                (A4_investigation7_input4_2_usrans == "0"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 7'}).then((result) => {
                    $("#A4_investigation7_confirm").hide();
                    $("#A4_investigation7_done").css({"opacity": "1"});
                    $("#A4_investigation7_next").removeClass("d-none");
                    $("#A4_investigation7_link img").css({"opacity": "1"});
                })
            } else if (!listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 4，才能進行問題探索 7'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 4 的數據'})
            }
        };
        $("#A4_investigation7_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP4,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A4_investigation7_confirm").click(function() {
            A4_investigation7_check();
        });
        $("#A4_investigation7_next").click(function() {
            $("#A4_investigation8_link").click();
        });

        // A4_investigation8
        function A4_investigation8_check() {
            let A4_investigation8_input1_usrans = $("#A4_investigation8_input1").val();
            let A4_investigation8_input2_usrans = $("#A4_investigation8_input2").val();
            let A4_investigation8_input3_usrans = $("#A4_investigation8_input3").val();
            let input_check = [
                (A4_investigation8_input1_usrans == "3"),
                (A4_investigation8_input2_usrans == "0"),
                (A4_investigation8_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 8'}).then((result) => {
                    $("#A4_investigation8_confirm").hide();
                    $("#A4_investigation8_done").css({"opacity": "1"});
                    $("#A4_investigation8_next").removeClass("d-none");
                    $("#A4_investigation8_link img").css({"opacity": "1"});
                })
            } else if (A4_investigation8_input1_usrans == "" || A4_investigation8_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A4_investigation8_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A4_investigation8_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP4,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A4_investigation8_confirm").click(function() {
            A4_investigation8_check();
        });
        $("#A4_investigation8_next").click(function() {
            showA5();
        });
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A4_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA5() {
    var initA5 = false;
    showLoading();
    $("#navbarDropdown").text("活動5");
    $("#navbarDropdown").val("活動5");
    $(".outlines").hide();
    $("#outlineA5").show();
    $(".title > span ").html("G-10-6(2) 活動5：" + katex.renderToString("270\\degree\\pm\\theta", { throwOnError: false }) + " 與 "+ katex.renderToString("\\theta", { throwOnError: false }) + " 的三角比轉換關係");
    params.id = "ggbApplet05";
    params.ggbBase64 = ggb_G_10_6_2_A3;
    params.appletOnLoad = function(api) {
        var theta, xP, yP, xPr, yPr = 0;
        var listRecord1 = [false, false, false, false];
        var listRecord2 = [false, false, false, false];

        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterObjectClickListener("buttonSetCancel")
        };
        function hideAllRecordIcon() {
            $("#A5_observation2_record1").hide();
            $("#A5_observation2_record2").hide();
            $("#A5_observation2_record3").hide();
            $("#A5_observation2_record4").hide();
            $("#A5_observation4_record1").hide();
            $("#A5_observation4_record2").hide();
            $("#A5_observation4_record3").hide();
            $("#A5_observation4_record4").hide();
        };
        function ggbMode1() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }
        function ggbMode2() {
            api.setValue("showAuxCopy'", true);
            api.setValue("showButtonSet", false);
            api.setValue("showTextP", false);
            api.setValue("showTextPtf", false);
            api.evalCommand("RunClickScript(buttonResetShowP)");
            api.evalCommand("SetValue(Pcopy, O + (sizeRadius; 30°))");
            api.evalCommand("SetValue(Qcopy, O + (sizeRadius cos(30°), 0))");
        }
        function ggbMode3() {
            api.setValue("showAux", true);
            api.setValue("showButtonSet", true);
            api.setValue("showTextP", true);
            api.setValue("showTextPtf", true);
            api.evalCommand("RunClickScript(buttonResetShowP)");
        }

        // A5_operation1
        function A5_operation1_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*1/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A5_operation1_done").css({"opacity": "1"});
                    $("#A5_operation1_next").removeClass("d-none");
                    $("#A5_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A5_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            api.registerObjectUpdateListener("θ", A5_operation1_check)
        });
        if (!initA5) { 
            $("#A5_operation1_link").click();
            initA5 = true;
        };
        $("#A5_operation1_next").click(function() {
            $("#A5_operation2_link").click();
        });

        // A5_operation2
        function A5_operation2_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*8/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                    $("#A5_operation2_done").css({"opacity": "1"});
                    $("#A5_operation2_next").removeClass("d-none");
                    $("#A5_operation2_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A5_operation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A5_operation2_check);
        });
        $("#A5_operation2_next").click(function() {
            $("#A5_observation1_link").click();
        });

        // A5_observation1
        $("#A5_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(241))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A5_observation1_check() {
            let A5_observation1_input1_1_usrans = $("#A5_observation1_input1_1").val();
            let A5_observation1_input1_2_usrans = $("#A5_observation1_input1_2").val();
            let A5_observation1_input2_1_usrans = $("#A5_observation1_input2_1").val();
            let A5_observation1_input2_2_usrans = $("#A5_observation1_input2_2").val();
            let A5_observation1_input3_1_usrans = $("#A5_observation1_input3_1").val();
            let A5_observation1_input3_2_usrans = $("#A5_observation1_input3_2").val();
            let input_check = [
                (A5_observation1_input1_1_usrans == "0"),
                (A5_observation1_input1_2_usrans == "0"),
                (A5_observation1_input2_1_usrans == "1"),
                (A5_observation1_input2_2_usrans == "3"),
                (A5_observation1_input3_1_usrans == "0"),
                (A5_observation1_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A5_observation1_confirm").hide();
                    $("#A5_observation1_done").css({"opacity": "1"});
                    $("#A5_observation1_next").removeClass("d-none");
                    $("#A5_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_observation1_confirm").click(function() {
            A5_observation1_check();
        });
        $("#A5_observation1_next").click(function() {
            $("#A5_investigation1_link").click();
        })

        // A5_investigation1
        $("#A5_investigation1_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(241))");
        });
        function A5_investigation1_check() {
            let A5_investigation1_input1_usrans = $("input[name=A5_investigation1_input1]:checked").val();
            let A5_investigation1_input2_usrans = $("input[name=A5_investigation1_input2]:checked").val();
            let input_check = [
                A5_investigation1_input1_usrans == "1",
                A5_investigation1_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A5_investigation1_confirm").hide();
                    $("#A5_investigation1_done").css({"opacity": "1"});
                    $("#A5_investigation1_next").removeClass("d-none");
                    $("#A5_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation1_confirm").click(function() {
            A5_investigation1_check();
        });
        $("#A5_investigation1_next").click(function() {
            $("#A5_investigation2_link").click();
        });

        // A5_investigation2
        $("#A5_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(241))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A5_investigation2_check() {
            let A5_investigation2_input1_1_usrans = $("#A5_investigation2_input1_1").val();
            let A5_investigation2_input1_2_usrans = $("#A5_investigation2_input1_2").val();
            let A5_investigation2_input2_1_usrans = $("#A5_investigation2_input2_1").val();
            let A5_investigation2_input2_2_usrans = $("#A5_investigation2_input2_2").val();
            let A5_investigation2_input3_usrans = $("#A5_investigation2_input3").val();
            let A5_investigation2_input4_usrans = $("#A5_investigation2_input4").val();
            let A5_investigation2_input5_usrans = $("input[name=A5_investigation2_input5]:checked").val();
            let A5_investigation2_input6_usrans = $("input[name=A5_investigation2_input6]:checked").val();
            let input_check = [
                A5_investigation2_input1_1_usrans == "2",
                A5_investigation2_input1_2_usrans == "2",
                A5_investigation2_input2_1_usrans == "1",
                A5_investigation2_input2_2_usrans == "1",
                A5_investigation2_input3_usrans == "1",
                A5_investigation2_input4_usrans == "0",
                A5_investigation2_input5_usrans == "4",
                A5_investigation2_input6_usrans == "2"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A5_investigation2_confirm").hide();
                    $("#A5_investigation2_done").css({"opacity": "1"});
                    $("#A5_investigation2_next").removeClass("d-none");
                    $("#A5_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation2_confirm").click(function() {
            A5_investigation2_check();
        });
        $("#A5_investigation2_next").click(function() {
            $("#A5_operation3_link").click();
        });

        // A5_operation3
        function A5_operation3_check() {
            let countShowP = api.getValue("countShowP");
            let showP5 = api.getValue("showP5");
            if (countShowP == 1 && showP5 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                    $("#A5_operation3_done").css({"opacity": "1"});
                    $("#A5_operation3_next").removeClass("d-none");
                    $("#A5_operation3_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「270°−θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「270°−θ」'});
            }
        };
        $("#A5_operation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A5_operation3_check)
        });
        $("#A5_operation3_next").click(function() {
            $("#A5_observation2_link").click();
        });
        
        // A5_observation2
        function recordResult1(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A5_observation2_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A5_observation2_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A5_observation2_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A5_observation2_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_observation2_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_observation2_P5_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A5_observation2_P5_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A5_observation2_P5_cos" + num).html(katex.renderToString("\\cos{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_observation2_P5_sin" + num).html(katex.renderToString("\\sin{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation3_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A5_investigation3_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A5_investigation3_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_1_P5_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A5_investigation3_1_P5_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A5_investigation3_1_P5_cos" + num).html(katex.renderToString("\\cos{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation3_1_P5_sin" + num).html(katex.renderToString("\\sin{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_1").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_1").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_1").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_1").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_2").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_2").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_2").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_input"+ num +"_2").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation3_2_P5_cos" + num).html(katex.renderToString("\\cos{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation3_2_P5_sin" + num).html(katex.renderToString("\\sin{(270\\degree-" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord1[num-1] = true;
        };
        function A5_observation2_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord1[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A5_observation2_record1").show());
            (!listRecord1[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A5_observation2_record2").show());
            (!listRecord1[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A5_observation2_record3").show());
            (!listRecord1[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A5_observation2_record4").show());
            $("#A5_observation2_record1").click(function() {recordResult1(1)});
            $("#A5_observation2_record2").click(function() {recordResult1(2)});
            $("#A5_observation2_record3").click(function() {recordResult1(3)});
            $("#A5_observation2_record4").click(function() {recordResult1(4)});
        };
        $("#A5_observation2_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP5,true)");
            api.registerObjectUpdateListener("θ", A5_observation2_checkTheta);
        });
        function A5_observation2_check() {
            if (listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A5_observation2_confirm").hide();
                    $("#A5_observation2_done").css({"opacity": "1"});
                    $("#A5_observation2_next").removeClass("d-none");
                    $("#A5_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A5_observation2_confirm").click(function() {
            A5_observation2_check();
        });
        $("#A5_observation2_next").click(function() {
            $("#A5_investigation3_link").click();
        })

        // A5_investigation3
        function A5_investigation3_check() {
            let A5_investigation3_input5_usrans = $("input[name=A5_investigation3_input5]:checked").val();
            let A5_investigation3_input6_usrans = $("input[name=A5_investigation3_input6]:checked").val();
            let A5_investigation3_input1_1_usrans = $("#A5_investigation3_input1_1").val();
            let A5_investigation3_input1_2_usrans = $("#A5_investigation3_input1_2").val();
            let A5_investigation3_input2_1_usrans = $("#A5_investigation3_input2_1").val();
            let A5_investigation3_input2_2_usrans = $("#A5_investigation3_input2_2").val();
            let A5_investigation3_input3_1_usrans = $("#A5_investigation3_input3_1").val();
            let A5_investigation3_input3_2_usrans = $("#A5_investigation3_input3_2").val();
            let A5_investigation3_input4_1_usrans = $("#A5_investigation3_input4_1").val();
            let A5_investigation3_input4_2_usrans = $("#A5_investigation3_input4_2").val();
            let input_check = [
                (A5_investigation3_input5_usrans == "4"),
                (A5_investigation3_input6_usrans == "2"),
                (A5_investigation3_input1_1_usrans == "3"),
                (A5_investigation3_input1_2_usrans == "1"),
                (A5_investigation3_input2_1_usrans == "3"),
                (A5_investigation3_input2_2_usrans == "1"),
                (A5_investigation3_input3_1_usrans == "3"),
                (A5_investigation3_input3_2_usrans == "1"),
                (A5_investigation3_input4_1_usrans == "3"),
                (A5_investigation3_input4_2_usrans == "1"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A5_investigation3_confirm").hide();
                    $("#A5_investigation3_done").css({"opacity": "1"});
                    $("#A5_investigation3_next").removeClass("d-none");
                    $("#A5_investigation3_link img").css({"opacity": "1"});
                })
            } else if (!listRecord1.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 2，才能進行問題探索 3'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 2 的數據'})
            }
        };
        $("#A5_investigation3_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP5,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A5_investigation3_confirm").click(function() {
            A5_investigation3_check();
        });
        $("#A5_investigation3_next").click(function() {
            $("#A5_investigation4_link").click();
        });

        // A5_investigation4
        function A5_investigation4_check() {
            let A5_investigation4_input1_usrans = $("#A5_investigation4_input1").val();
            let A5_investigation4_input2_usrans = $("#A5_investigation4_input2").val();
            let A5_investigation4_input3_usrans = $("#A5_investigation4_input3").val();
            let input_check = [
                (A5_investigation4_input1_usrans == "3"),
                (A5_investigation4_input2_usrans == "1"),
                (A5_investigation4_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A5_investigation4_confirm").hide();
                    $("#A5_investigation4_done").css({"opacity": "1"});
                    $("#A5_investigation4_next").removeClass("d-none");
                    $("#A5_investigation4_link img").css({"opacity": "1"});
                })
            } else if (A5_investigation4_input1_usrans == "" || A5_investigation4_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A5_investigation4_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation4_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP5,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A5_investigation4_confirm").click(function() {
            A5_investigation4_check();
        });
        $("#A5_investigation4_next").click(function() {
            $("#A5_operation4_link").click();
        });

        // A5_operation4
        function A5_operation4_check() {
            theta = numRound(api.getValue("θ"),4);
            if (theta == numRound(Math.PI*10/6,4)) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                    $("#A5_operation4_done").css({"opacity": "1"});
                    $("#A5_operation4_next").removeClass("d-none");
                    $("#A5_operation4_link img").css({"opacity": "1"});
                    removeListener();
                })
            };
        };
        $("#A5_operation4_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(31))");
            api.registerObjectUpdateListener("θ", A5_operation4_check);
        });
        $("#A5_operation4_next").click(function() {
            $("#A5_observation3_link").click();
        });

        // A5_observation3
        $("#A5_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(301))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A5_observation3_check() {
            let A5_observation3_input1_1_usrans = $("#A5_observation3_input1_1").val();
            let A5_observation3_input1_2_usrans = $("#A5_observation3_input1_2").val();
            let A5_observation3_input2_1_usrans = $("#A5_observation3_input2_1").val();
            let A5_observation3_input2_2_usrans = $("#A5_observation3_input2_2").val();
            let A5_observation3_input3_1_usrans = $("#A5_observation3_input3_1").val();
            let A5_observation3_input3_2_usrans = $("#A5_observation3_input3_2").val();
            let input_check = [
                (A5_observation3_input1_1_usrans == "0"),
                (A5_observation3_input1_2_usrans == "0"),
                (A5_observation3_input2_1_usrans == "1"),
                (A5_observation3_input2_2_usrans == "3"),
                (A5_observation3_input3_1_usrans == "0"),
                (A5_observation3_input3_2_usrans == "0")
            ];
            if (input_check.equals([true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A5_observation3_confirm").hide();
                    $("#A5_observation3_done").css({"opacity": "1"});
                    $("#A5_observation3_next").removeClass("d-none");
                    $("#A5_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_observation3_confirm").click(function() {
            A5_observation3_check();
        });
        $("#A5_observation3_next").click(function() {
            $("#A5_investigation5_link").click();
        })

        // A5_investigation5
        $("#A5_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(301))");
        });
        function A5_investigation5_check() {
            let A5_investigation5_input1_usrans = $("input[name=A5_investigation5_input1]:checked").val();
            let A5_investigation5_input2_usrans = $("input[name=A5_investigation5_input2]:checked").val();
            let input_check = [
                A5_investigation5_input1_usrans == "1",
                A5_investigation5_input2_usrans == "3"
            ];
            if (input_check.equals([true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A5_investigation5_confirm").hide();
                    $("#A5_investigation5_done").css({"opacity": "1"});
                    $("#A5_investigation5_next").removeClass("d-none");
                    $("#A5_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation5_confirm").click(function() {
            A5_investigation5_check();
        });
        $("#A5_investigation5_next").click(function() {
            $("#A5_investigation6_link").click();
        });

        // A5_investigation6
        $("#A5_investigation6_link").click(function() {
            removeListener();
            ggbMode2();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(301))");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        function A5_investigation6_check() {
            let A5_investigation6_input1_1_usrans = $("#A5_investigation6_input1_1").val();
            let A5_investigation6_input1_2_usrans = $("#A5_investigation6_input1_2").val();
            let A5_investigation6_input2_1_usrans = $("#A5_investigation6_input2_1").val();
            let A5_investigation6_input2_2_usrans = $("#A5_investigation6_input2_2").val();
            let A5_investigation6_input3_usrans = $("#A5_investigation6_input3").val();
            let A5_investigation6_input4_usrans = $("#A5_investigation6_input4").val();
            let A5_investigation6_input5_usrans = $("input[name=A5_investigation6_input5]:checked").val();
            let A5_investigation6_input6_usrans = $("input[name=A5_investigation6_input6]:checked").val();
            let input_check = [
                A5_investigation6_input1_1_usrans == "2",
                A5_investigation6_input1_2_usrans == "2",
                A5_investigation6_input2_1_usrans == "1",
                A5_investigation6_input2_2_usrans == "1",
                A5_investigation6_input3_usrans == "1",
                A5_investigation6_input4_usrans == "0",
                A5_investigation6_input5_usrans == "3",
                A5_investigation6_input6_usrans == "2"
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A5_investigation6_confirm").hide();
                    $("#A5_investigation6_done").css({"opacity": "1"});
                    $("#A5_investigation6_next").removeClass("d-none");
                    $("#A5_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation6_confirm").click(function() {
            A5_investigation6_check();
        });
        $("#A5_investigation6_next").click(function() {
            $("#A5_operation5_link").click();
        });

        // A5_operation5
        function A5_operation5_check() {
            let countShowP = api.getValue("countShowP");
            let showP6 = api.getValue("showP6");
            if (countShowP == 1 && showP6 == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                    $("#A5_operation5_done").css({"opacity": "1"});
                    $("#A5_operation5_next").removeClass("d-none");
                    $("#A5_operation5_link img").css({"opacity": "1"});
                })
            } else if (countShowP == 2) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '只需要勾選「270°+θ」和「輔助線」'});
            } else {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '記得要勾選「270°+θ」'});
            }
        };
        $("#A5_operation5_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.registerObjectClickListener("buttonSetCancel",A5_operation5_check)
        });
        $("#A5_operation5_next").click(function() {
            $("#A5_observation4_link").click();
        });

        // A5_observation4
        function recordResult2(num) {
            hideAllRecordIcon();
            xP = api.getValue("xP");
            yP = api.getValue("yP");
            xPr = api.getValue("xPr");
            yPr = api.getValue("yPr");
            $("#A5_observation4_theta" + num).html(katex.renderToString("" + numRound(theta*180/Math.PI,0) + "\\degree", { throwOnError: false }));
            $("#A5_observation4_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A5_observation4_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A5_observation4_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_observation4_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_observation4_P6_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A5_observation4_P6_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A5_observation4_P6_cos" + num).html(katex.renderToString("\\cos{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_observation4_P6_sin" + num).html(katex.renderToString("\\sin{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation7_1_P_x" + num).html(katex.renderToString("" + xP, { throwOnError: false }));
            $("#A5_investigation7_1_P_y" + num).html(katex.renderToString("" + yP, { throwOnError: false }));
            $("#A5_investigation7_1_P_cos" + num).html(katex.renderToString("\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_1_P_sin" + num).html(katex.renderToString("\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_1_P6_x" + num).html(katex.renderToString("" + xPr, { throwOnError: false }));
            $("#A5_investigation7_1_P6_y" + num).html(katex.renderToString("" + yPr, { throwOnError: false }));
            $("#A5_investigation7_1_P6_cos" + num).html(katex.renderToString("\\cos{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation7_1_P6_sin" + num).html(katex.renderToString("\\sin{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_1").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_1").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_1").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_1").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_2").next().find("a").eq(0).html(katex.renderToString("+\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_2").next().find("a").eq(1).html(katex.renderToString("-\\cos{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_2").next().find("a").eq(2).html(katex.renderToString("+\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_input"+ num +"_2").next().find("a").eq(3).html(katex.renderToString("-\\sin{" + numRound(theta*180/Math.PI,0) + "\\degree}", { throwOnError: false }));
            $("#A5_investigation7_2_P6_cos" + num).html(katex.renderToString("\\cos{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            $("#A5_investigation7_2_P6_sin" + num).html(katex.renderToString("\\sin{(270\\degree+" + numRound(theta*180/Math.PI,0) + "\\degree)}", { throwOnError: false }));
            listRecord2[num-1] = true;
        };
        function A5_observation4_checkTheta() {
            theta = numRound(api.getValue("θ"),4);
            hideAllRecordIcon();
            (!listRecord2[0] && theta > numRound(Math.PI*0,4) && theta < numRound(Math.PI/2,4)) && ($("#A5_observation4_record1").show());
            (!listRecord2[1] && theta > numRound(Math.PI/2,4) && theta < numRound(Math.PI,4)) && ($("#A5_observation4_record2").show());
            (!listRecord2[2] && theta > numRound(Math.PI,4) && theta < numRound(Math.PI*3/2,4)) && ($("#A5_observation4_record3").show());
            (!listRecord2[3] && theta > numRound(Math.PI*3/2,4) && theta < numRound(Math.PI*2,4)) && ($("#A5_observation4_record4").show());
            $("#A5_observation4_record1").click(function() {recordResult2(1)});
            $("#A5_observation4_record2").click(function() {recordResult2(2)});
            $("#A5_observation4_record3").click(function() {recordResult2(3)});
            $("#A5_observation4_record4").click(function() {recordResult2(4)});
        };
        $("#A5_observation4_link").click(function() {
            removeListener();
            ggbMode3();
            hideAllRecordIcon();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            api.evalCommand("SetValue(showP6,true)");
            api.registerObjectUpdateListener("θ", A5_observation4_checkTheta);
        });
        function A5_observation4_check() {
            if (listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A5_observation4_confirm").hide();
                    $("#A5_observation4_done").css({"opacity": "1"});
                    $("#A5_observation4_next").removeClass("d-none");
                    $("#A5_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成所有記錄'})
            }
        };
        $("#A5_observation4_confirm").click(function() {
            A5_observation4_check();
        });
        $("#A5_observation4_next").click(function() {
            $("#A5_investigation7_link").click();
        })

        // A5_investigation7
        function A5_investigation7_check() {
            let A5_investigation7_input5_usrans = $("input[name=A5_investigation7_input5]:checked").val();
            let A5_investigation7_input6_usrans = $("input[name=A5_investigation7_input6]:checked").val();
            let A5_investigation7_input1_1_usrans = $("#A5_investigation7_input1_1").val();
            let A5_investigation7_input1_2_usrans = $("#A5_investigation7_input1_2").val();
            let A5_investigation7_input2_1_usrans = $("#A5_investigation7_input2_1").val();
            let A5_investigation7_input2_2_usrans = $("#A5_investigation7_input2_2").val();
            let A5_investigation7_input3_1_usrans = $("#A5_investigation7_input3_1").val();
            let A5_investigation7_input3_2_usrans = $("#A5_investigation7_input3_2").val();
            let A5_investigation7_input4_1_usrans = $("#A5_investigation7_input4_1").val();
            let A5_investigation7_input4_2_usrans = $("#A5_investigation7_input4_2").val();
            let input_check = [
                (A5_investigation7_input5_usrans == "3"),
                (A5_investigation7_input6_usrans == "2"),
                (A5_investigation7_input1_1_usrans == "2"),
                (A5_investigation7_input1_2_usrans == "1"),
                (A5_investigation7_input2_1_usrans == "2"),
                (A5_investigation7_input2_2_usrans == "1"),
                (A5_investigation7_input3_1_usrans == "2"),
                (A5_investigation7_input3_2_usrans == "1"),
                (A5_investigation7_input4_1_usrans == "2"),
                (A5_investigation7_input4_2_usrans == "1"),
            ];
            if (input_check.equals([true, true, true, true, true, true, true, true, true, true]) && listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 7'}).then((result) => {
                    $("#A5_investigation7_confirm").hide();
                    $("#A5_investigation7_done").css({"opacity": "1"});
                    $("#A5_investigation7_next").removeClass("d-none");
                    $("#A5_investigation7_link img").css({"opacity": "1"});
                })
            } else if (!listRecord2.equals([true, true, true, true])) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: '請先完成觀察記錄 4，才能進行問題探索 7'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著再次參考觀察記錄 4 的數據'})
            }
        };
        $("#A5_investigation7_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP6,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A5_investigation7_confirm").click(function() {
            A5_investigation7_check();
        });
        $("#A5_investigation7_next").click(function() {
            $("#A5_investigation8_link").click();
        });

        // A5_investigation8
        function A5_investigation8_check() {
            let A5_investigation8_input1_usrans = $("#A5_investigation8_input1").val();
            let A5_investigation8_input2_usrans = $("#A5_investigation8_input2").val();
            let A5_investigation8_input3_usrans = $("#A5_investigation8_input3").val();
            let input_check = [
                (A5_investigation8_input1_usrans == "2"),
                (A5_investigation8_input2_usrans == "1"),
                (A5_investigation8_input3_usrans != "")
            ];
            if (input_check.equals([true, true, true])) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 8'}).then((result) => {
                    $("#A5_investigation8_confirm").hide();
                    $("#A5_investigation8_done").css({"opacity": "1"});
                    $("#A5_investigation8_next").removeClass("d-none");
                    $("#A5_investigation8_link img").css({"opacity": "1"});
                })
            } else if (A5_investigation8_input1_usrans == "" || A5_investigation8_input2_usrans == "") {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請完成作答'})
            } else if (!A5_investigation8_input3_usrans) {
                Swal.fire({icon: 'warning', showConfirmButton: false, timer: 3000, text: '請說明想法'})
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        };
        $("#A5_investigation8_link").click(function() {
            removeListener();
            ggbMode3();
            api.evalCommand("SetValue(showP6,true)");
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A5_investigation8_confirm").click(function() {
            A5_investigation8_check();
        });
        $("#A5_investigation8_next").click(function() {
            ;
        });
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A5_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
