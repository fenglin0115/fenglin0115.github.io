params.ggbBase64 = ggb_G_10_6_3_cover;
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
        // alert("test1");
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
    var thetaFirst = 0;
    var count = 0;
    var checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false; 
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-6(3) 活動1：" + katex.renderToString("\\sin{ \\theta }", { throwOnError: false }) + " 的範圍");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_6_3_A1;
    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            // api.unregisterObjectClickListener("buttonAuto");
            api.unregisterUpdateListener(A1_operation6_check);
        };
        function ggbMode1() {
            api.setValue("showOQ", true)
            api.setValue("showAxis", false);
            api.setValue("showInfoText", false);
            api.setValue("showDashboard", false);
            api.setValue("showAuto", false);
        };
        function ggbMode2() {
            api.setValue("showOQ", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText", true);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", false);
        };
        function ggbMode3() {
            api.setValue("showOQ", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText", true);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", true);
        };

        // A1_operation1
        function A1_operation1_check() {
            let theta = api.getValue("θ");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            }
        };
        $("#A1_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerObjectUpdateListener("θ", A1_operation1_check);
        });
        if (!initA1) { 
            Swal.fire({html: '<img src="./images/content/G-10-6_3/wheel.png" height="300"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">摩天輪在旋轉時，其中某個車廂的水平、鉛直位移與旋轉角度是否有關聯呢？<br>我們將以半徑為 1 的單位圓模擬摩天輪的轉動，其中 P 點為某個車廂，S 點為出發點。</div>'});
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_investigation1_link").click();
        });

        // A1_investigation1
        function A1_investigation1_check() {
            let A1_investigation1_input1_usrans1 = $("#A1_investigation1_input1_1").val();
            let A1_investigation1_input1_usrans2 = $("#A1_investigation1_input1_2").val();
            let A1_investigation1_input1_usrans3 = $("#A1_investigation1_input1_3").val();
            let A1_investigation1_input1_usrans4 = $("#A1_investigation1_input1_4").val();
            let A1_investigation1_input2_usrans = $("input[name=A1_investigation1_input2]:checked").val();
            let A1_investigation1_input3_usrans = $("input[name=A1_investigation1_input3]:checked").val();
            let input1_usrans1_check = (A1_investigation1_input1_usrans1 == "0");
            let input1_usrans2_check = (A1_investigation1_input1_usrans2 == "1");
            let input1_usrans3_check = (A1_investigation1_input1_usrans3 == "2");
            let input1_usrans4_check = (A1_investigation1_input1_usrans4 == "3");
            let input2_usrans_check = (A1_investigation1_input2_usrans == "1");
            let input3_usrans_check = (A1_investigation1_input3_usrans == "2");
            if (input1_usrans1_check && input1_usrans2_check && input1_usrans3_check && input1_usrans4_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation1_link").click(function() {
            removeListener();
            ggbMode1();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_investigation1_confirm").click(function() {
            A1_investigation1_check();
        });
        $("#A1_investigation1_next").click(function() {
            $("#A1_operation2_link").click();
        });

        // A1_operation2
        function A1_operation2_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI/3) && theta < (Math.PI/2)) {
                $("#A1_operation2_next").removeClass("d-none");
            };
            if (theta > (Math.PI/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第一象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            };
        };
        $("#A1_operation2_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A1_operation2_check);
        });
        $("#A1_operation2_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                $("#A1_operation2_done").css({"opacity": "1"});
                $("#A1_operation2_link img").css({"opacity": "1"});
            })
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        $("#A1_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A1_observation1_record").click(function() {
            let theta = api.getValue("θ");
            let sinTheta = api.getValue("b");
            let checkThetaRange = (theta < Math.PI/2 && theta > 0);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A1_observation1_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation1_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation2_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A1_observation1_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation1_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation2_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A1_observation1_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: "讓 P 點在第一象限"});
            }
        })
        function A1_observation1_check() {
            let A1_observation1_input1_usrans = $("#A1_observation1_input1").val();
            let A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
            let input1_usrans_check = (A1_observation1_input1_usrans == "1");
            let input2_usrans_check = (A1_observation1_input2_usrans == "2");
            let record_check = (count == 2);
            if (input1_usrans_check && input2_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({"opacity": "1"});
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({"opacity": "1"});
                })
                $("#A1_investigation2_input1").html(katex.renderToString("0", { throwOnError: false }));
                $("#A1_investigation2_input2").html(katex.renderToString("1", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            }
        };
        $("#A1_observation1_confirm").click(function() {
            A1_observation1_check();
        });
        $("#A1_observation1_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        function A1_investigation2_check() {
            let A1_investigation2_input1_usrans = $("input[name=A1_investigation2_input1]:checked").val();
            let A1_investigation2_input2_usrans = $("input[name=A1_investigation2_input2]:checked").val();
            let A1_investigation2_input3_usrans = $("input[name=A1_investigation2_input3]:checked").val();
            let A1_investigation2_input4_usrans = $("input[name=A1_investigation2_input4]:checked").val();
            let input1_usrans_check = (A1_investigation2_input1_usrans == "2");
            let input2_usrans_check = (A1_investigation2_input2_usrans == "1");
            let input3_usrans_check = (A1_investigation2_input3_usrans == "1");
            let input4_usrans_check = (A1_investigation2_input4_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check && input4_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({"opacity": "1"});
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A1_investigation2_confirm").click(function() {
            A1_investigation2_check();
        });
        $("#A1_investigation2_next").click(function() {
            $("#A1_operation3_link").click();
        });

        // A1_operation3
        function A1_operation3_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*5/6)) {
                $("#A1_operation3_next").removeClass("d-none");
            };
            if (theta < (Math.PI/2 - 0.2) || theta > (Math.PI + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第二象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            };
        };
        $("#A1_operation3_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A1_operation3_check);
        });
        $("#A1_operation3_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                $("#A1_operation3_done").css({"opacity": "1"});
                $("#A1_operation3_link img").css({"opacity": "1"});
            })
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        $("#A1_observation2_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A1_observation2_record").click(function() {
            let theta = api.getValue("θ");
            let sinTheta = api.getValue("b");
            let checkThetaRange = (theta > Math.PI/2 && theta < Math.PI);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A1_observation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation2_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation3_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A1_observation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation2_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation3_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A1_observation2_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第二象限"});
            }
        })
        function A1_observation2_check() {
            let A1_observation2_input1_usrans = $("#A1_observation2_input1").val();
            let input1_usrans_check = (A1_observation2_input1_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({"opacity": "1"});
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({"opacity": "1"});
                })
                $("#A1_investigation3_input1").html(katex.renderToString("0", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A1_observation2_confirm").click(function() {
            A1_observation2_check();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_investigation3_link").click();
        });

        // A1_investigation3
        function A1_investigation3_check() {
            let A1_investigation3_input1_usrans = $("input[name=A1_investigation3_input1]:checked").val();
            let A1_investigation3_input2_usrans = $("input[name=A1_investigation3_input2]:checked").val();
            let A1_investigation3_input3_usrans = $("input[name=A1_investigation3_input3]:checked").val();
            let input1_usrans_check = (A1_investigation3_input1_usrans == "1");
            let input2_usrans_check = (A1_investigation3_input2_usrans == "2");
            let input3_usrans_check = (A1_investigation3_input3_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({"opacity": "1"});
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation3_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A1_investigation3_confirm").click(function() {
            A1_investigation3_check();
        });
        $("#A1_investigation3_next").click(function() {
            $("#A1_operation4_link").click();
        });

        // A1_operation4
        function A1_operation4_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*4/3)) {
                $("#A1_operation4_next").removeClass("d-none");
            };
            if (theta < (Math.PI - 0.2) || theta > (Math.PI*3/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第三象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            };
        };
        $("#A1_operation4_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A1_operation4_check);
        });
        $("#A1_operation4_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                $("#A1_operation4_done").css({"opacity": "1"});
                $("#A1_operation4_link img").css({"opacity": "1"});
            })
            $("#A1_observation3_link").click();
        });

        // A1_observation3
        $("#A1_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A1_observation3_record").click(function() {
            let theta = api.getValue("θ");
            let sinTheta = api.getValue("b");
            let checkThetaRange = (theta > Math.PI && theta < Math.PI*3/2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A1_observation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation3_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation4_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A1_observation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation3_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation4_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A1_observation3_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第三象限"});
            }
        })
        function A1_observation3_check() {
            let A1_observation3_input1_usrans = $("#A1_observation3_input1").val();
            let input1_usrans_check = (A1_observation3_input1_usrans == "0");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A1_observation3_confirm").hide();
                    $("#A1_observation3_done").css({"opacity": "1"});
                    $("#A1_observation3_next").removeClass("d-none");
                    $("#A1_observation3_link img").css({"opacity": "1"});
                })
                $("#A1_investigation4_input1").html(katex.renderToString("-1", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A1_observation3_confirm").click(function() {
            A1_observation3_check();
        });
        $("#A1_observation3_next").click(function() {
            $("#A1_investigation4_link").click();
        });

        // A1_investigation4
        function A1_investigation4_check() {
            let A1_investigation4_input1_usrans = $("input[name=A1_investigation4_input1]:checked").val();
            let A1_investigation4_input2_usrans = $("input[name=A1_investigation4_input2]:checked").val();
            let A1_investigation4_input3_usrans = $("input[name=A1_investigation4_input3]:checked").val();
            let input1_usrans_check = (A1_investigation4_input1_usrans == "2");
            let input2_usrans_check = (A1_investigation4_input2_usrans == "2");
            let input3_usrans_check = (A1_investigation4_input3_usrans == "3");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A1_investigation4_confirm").hide();
                    $("#A1_investigation4_done").css({"opacity": "1"});
                    $("#A1_investigation4_next").removeClass("d-none");
                    $("#A1_investigation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation4_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A1_investigation4_confirm").click(function() {
            A1_investigation4_check();
        });
        $("#A1_investigation4_next").click(function() {
            $("#A1_operation5_link").click();
        });

        // A1_operation5
        function A1_operation5_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*11/6)) {
                $("#A1_operation5_next").removeClass("d-none");
            };
            if (theta < (Math.PI*3/2 - 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第四象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            };
        };
        $("#A1_operation5_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A1_operation5_check);
        });
        $("#A1_operation5_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A1_operation5_done").css({"opacity": "1"});
                $("#A1_operation5_link img").css({"opacity": "1"});
            })
            $("#A1_observation4_link").click();
        });

        // A1_observation4
        $("#A1_observation4_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A1_observation4_record").click(function() {
            let theta = api.getValue("θ");
            let sinTheta = api.getValue("b");
            let checkThetaRange = (theta > Math.PI*3/2 && theta < Math.PI*2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A1_observation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation4_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation5_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation5_record1_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A1_observation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_observation4_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                $("#A1_investigation5_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A1_investigation5_record2_2").html(katex.renderToString("" + numRound(sinTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A1_observation4_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第四象限"});
            }
        })
        function A1_observation4_check() {
            let A1_observation4_input1_usrans = $("#A1_observation4_input1").val();
            let input1_usrans_check = (A1_observation4_input1_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A1_observation4_confirm").hide();
                    $("#A1_observation4_done").css({"opacity": "1"});
                    $("#A1_observation4_next").removeClass("d-none");
                    $("#A1_observation4_link img").css({"opacity": "1"});
                });
                $("#A1_investigation5_input1").html(katex.renderToString("0", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A1_observation4_confirm").click(function() {
            A1_observation4_check();
        });
        $("#A1_observation4_next").click(function() {
            $("#A1_investigation5_link").click();
        });

        // A1_investigation5
        function A1_investigation5_check() {
            let A1_investigation5_input1_usrans = $("input[name=A1_investigation5_input1]:checked").val();
            let A1_investigation5_input2_usrans = $("input[name=A1_investigation5_input2]:checked").val();
            let A1_investigation5_input3_usrans = $("input[name=A1_investigation5_input3]:checked").val();
            let input1_usrans_check = (A1_investigation5_input1_usrans == "2");
            let input2_usrans_check = (A1_investigation5_input2_usrans == "1");
            let input3_usrans_check = (A1_investigation5_input3_usrans == "3");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A1_investigation5_confirm").hide();
                    $("#A1_investigation5_done").css({"opacity": "1"});
                    $("#A1_investigation5_next").removeClass("d-none");
                    $("#A1_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A1_investigation5_confirm").click(function() {
            A1_investigation5_check();
        });
        $("#A1_investigation5_next").click(function() {
            $("#A1_operation6_link").click();
        });

        // A1_operation6
        function A1_operation6_check() {
            let theta = api.getValue("θ");
            let aniStart = api.getValue("aniStart");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4 && aniStart == 0) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 6'}).then((result) => {
                    $("#A1_operation6_done").css({"opacity": "1"});
                    $("#A1_operation6_next").removeClass("d-none");
                    $("#A1_operation6_link img").css({"opacity": "1"});
                })
                removeListener();
            };
        };
        $("#A1_operation6_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode3();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerUpdateListener(A1_operation6_check);
        });
        $("#A1_operation6_next").click(function() {
            $("#A1_investigation6_link").click();
        });

        // A1_investigation6
        function A1_investigation6_check() {
            let A1_investigation6_1_input1_usrans = $("#A1_investigation6_1_input1").val();
            let A1_investigation6_1_input2_usrans = $("#A1_investigation6_1_input2").val();
            let A1_investigation6_1_input3_usrans = $("#A1_investigation6_1_input3").val();
            let A1_investigation6_2_input1_usrans = $("#A1_investigation6_2_input1").val();
            let A1_investigation6_2_input2_usrans = $("#A1_investigation6_2_input2").val();
            let A1_investigation6_2_input3_usrans = $("#A1_investigation6_2_input3").val();
            let A1_investigation6_3_input1_usrans = $("#A1_investigation6_3_input1").val();
            let A1_investigation6_4_input1_usrans = $("#A1_investigation6_4_input1").val();
            let A1_investigation6_4_input2_usrans = $("#A1_investigation6_4_input2").val();
            let A1_investigation6_5_input1_usrans = $("#A1_investigation6_5_input1").val();
            let A1_investigation6_5_input2_usrans = $("#A1_investigation6_5_input2").val();
            let input_1_1_usrans_check = (A1_investigation6_1_input1_usrans == "1");
            let input_1_2_usrans_check = (A1_investigation6_1_input2_usrans == "0");
            let input_1_3_usrans_check = (A1_investigation6_1_input3_usrans == "2");
            let input_2_1_usrans_check = (A1_investigation6_2_input1_usrans == "2");
            let input_2_2_usrans_check = (A1_investigation6_2_input2_usrans == "1");
            let input_2_3_usrans_check = (A1_investigation6_2_input3_usrans == "1");
            let input_3_1_usrans_check = (A1_investigation6_3_input1_usrans == "1");
            let input_4_usrans_check = ((A1_investigation6_4_input1_usrans == "0") && (A1_investigation6_4_input2_usrans == "2")) || 
                                        ((A1_investigation6_4_input1_usrans == "2") && (A1_investigation6_4_input2_usrans == "0"));
            let input_5_1_usrans_check = (A1_investigation6_5_input1_usrans == "0");
            let input_5_2_usrans_check = (A1_investigation6_5_input2_usrans == "2");
            if (input_1_1_usrans_check && input_1_2_usrans_check && input_1_3_usrans_check && input_2_1_usrans_check && input_2_2_usrans_check && input_2_3_usrans_check && input_3_1_usrans_check && input_4_usrans_check && input_5_1_usrans_check && input_5_2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A1_investigation6_confirm").hide();
                    $("#A1_investigation6_done").css({"opacity": "1"});
                    $("#A1_investigation6_next").removeClass("d-none");
                    $("#A1_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A1_investigation6_link").click(function() {
            removeListener();
            ggbMode3();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A1_investigation6_confirm").click(function() {
            A1_investigation6_check();
        });
        $("#A1_investigation6_next").click(function() {
            showA2();
        });

        // 待處理：觀察紀錄中兩個 theta 紀錄的大小排序、問題探索加入觀察記錄結果
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
};

function showA2() {
    var initA2 = false;
    var thetaFirst = 0;
    var count = 0;
    var checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false; 
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-6(3) 活動2：" + katex.renderToString("\\cos{ \\theta }", { throwOnError: false }) + " 的範圍");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_6_3_A2;
    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterUpdateListener(A2_operation6_check);
        };
        function ggbMode1() {
            api.setValue("showOQ", true)
            api.setValue("showAxis", false);
            api.setValue("showInfoText", false);
            api.setValue("showDashboard", false);
            api.setValue("showAuto", false);
        };
        function ggbMode2() {
            api.setValue("showOQ", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText", true);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", false);
        };
        function ggbMode3() {
            api.setValue("showOQ", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText", true);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", true);
        };

        // A2_operation1
        function A2_operation1_check() {
            let theta = api.getValue("θ");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A2_operation1_done").css({"opacity": "1"});
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            }
        };
        $("#A2_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerObjectUpdateListener("θ", A2_operation1_check);
        });
        if (!initA2) { 
            // Swal.fire({html: '<img src="./images/content/lotteryMachine.png" height="150"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">這是一個抽獎實驗。<br>已知搖獎機中有橘、綠、藍三種顏色的球，共 10 顆。<br>每次從搖獎機中搖出一球之後便放回，即算完成一次抽獎。</div>'});
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        function A2_investigation1_check() {
            let A2_investigation1_input1_usrans = $("input[name=A2_investigation1_input1]:checked").val();
            let A2_investigation1_input2_usrans = $("input[name=A2_investigation1_input2]:checked").val();
            let input1_usrans_check = (A2_investigation1_input1_usrans == "2");
            let input2_usrans_check = (A2_investigation1_input2_usrans == "1");
            if (input1_usrans_check && input2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({"opacity": "1"});
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation1_link").click(function() {
            removeListener();
            ggbMode1();
        });
        $("#A2_investigation1_confirm").click(function() {
            A2_investigation1_check();
        });
        $("#A2_investigation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        function A2_operation2_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI/3) && theta < (Math.PI/2)) {
                $("#A2_operation2_next").removeClass("d-none");
            };
            if (theta > (Math.PI/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第一象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            };
        };
        $("#A2_operation2_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A2_operation2_check);
        });
        $("#A2_operation2_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                $("#A2_operation2_done").css({"opacity": "1"});
                $("#A2_operation2_link img").css({"opacity": "1"});
            })
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A2_observation1_record").click(function() {
            let theta = api.getValue("θ");
            let cosTheta = api.getValue("a");
            let checkThetaRange = (theta < Math.PI/2 && theta > 0);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A2_observation1_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation1_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation2_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A2_observation1_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation1_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation2_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A2_observation1_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第一象限"});
            }
        })
        function A2_observation1_check() {
            let A2_observation1_input1_usrans = $("#A2_observation1_input1").val();
            let A2_observation1_input2_usrans = $("#A2_observation1_input2").val();
            let input1_usrans_check = (A2_observation1_input1_usrans == "2");
            let input2_usrans_check = (A2_observation1_input2_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && input2_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({"opacity": "1"});
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({"opacity": "1"});
                });
                $("#A2_investigation2_input1").html(katex.renderToString("1", { throwOnError: false }));
                $("#A2_investigation2_input2").html(katex.renderToString("0", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            }
        };
        $("#A2_observation1_confirm").click(function() {
            A2_observation1_check();
        });
        $("#A2_observation1_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        function A2_investigation2_check() {
            let A2_investigation2_input1_usrans = $("input[name=A2_investigation2_input1]:checked").val();
            let A2_investigation2_input2_usrans = $("input[name=A2_investigation2_input2]:checked").val();
            let A2_investigation2_input3_usrans = $("input[name=A2_investigation2_input3]:checked").val();
            let input1_usrans_check = (A2_investigation2_input1_usrans == "1");
            let input2_usrans_check = (A2_investigation2_input2_usrans == "2");
            let input3_usrans_check = (A2_investigation2_input3_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({"opacity": "1"});
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
        $("#A2_investigation2_next").click(function() {
            $("#A2_operation3_link").click();
        });

        // A2_operation3
        function A2_operation3_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*5/6)) {
                $("#A2_operation3_next").removeClass("d-none");
            };
            if (theta < (Math.PI/2 - 0.2) || theta > (Math.PI + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第二象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            };
        };
        $("#A2_operation3_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A2_operation3_check);
        });
        $("#A2_operation3_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                $("#A2_operation3_done").css({"opacity": "1"});
                $("#A2_operation3_link img").css({"opacity": "1"});
            })
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        $("#A2_observation2_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A2_observation2_record").click(function() {
            let theta = api.getValue("θ");
            let cosTheta = api.getValue("a");
            let checkThetaRange = (theta > Math.PI/2 && theta < Math.PI);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A2_observation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation2_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation3_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A2_observation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation2_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation3_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A2_observation2_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第二象限"});
            }
        })
        function A2_observation2_check() {
            let A2_observation2_input1_usrans = $("#A2_observation2_input1").val();
            let input1_usrans_check = (A2_observation2_input1_usrans == "0");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A2_observation2_confirm").hide();
                    $("#A2_observation2_done").css({"opacity": "1"});
                    $("#A2_observation2_next").removeClass("d-none");
                    $("#A2_observation2_link img").css({"opacity": "1"});
                });
                $("#A2_investigation3_input1").html(katex.renderToString("-1", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A2_observation2_confirm").click(function() {
            A2_observation2_check();
        });
        $("#A2_observation2_next").click(function() {
            $("#A2_investigation3_link").click();
        });

        // A2_investigation3
        function A2_investigation3_check() {
            let A2_investigation3_input1_usrans = $("input[name=A2_investigation3_input1]:checked").val();
            let A2_investigation3_input2_usrans = $("input[name=A2_investigation3_input2]:checked").val();
            let A2_investigation3_input3_usrans = $("input[name=A2_investigation3_input3]:checked").val();
            let input1_usrans_check = (A2_investigation3_input1_usrans == "2");
            let input2_usrans_check = (A2_investigation3_input2_usrans == "2");
            let input3_usrans_check = (A2_investigation3_input3_usrans == "3");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A2_investigation3_confirm").hide();
                    $("#A2_investigation3_done").css({"opacity": "1"});
                    $("#A2_investigation3_next").removeClass("d-none");
                    $("#A2_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation3_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A2_investigation3_confirm").click(function() {
            A2_investigation3_check();
        });
        $("#A2_investigation3_next").click(function() {
            $("#A2_operation4_link").click();
        });

        // A2_operation4
        function A2_operation4_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*4/3)) {
                $("#A2_operation4_next").removeClass("d-none");
            };
            if (theta < (Math.PI - 0.2) || theta > (Math.PI*3/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第三象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            };
        };
        $("#A2_operation4_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A2_operation4_check);
        });
        $("#A2_operation4_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                $("#A2_operation4_done").css({"opacity": "1"});
                $("#A2_operation4_link img").css({"opacity": "1"});
            })
            $("#A2_observation3_link").click();
        });

        // A2_observation3
        $("#A2_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A2_observation3_record").click(function() {
            let theta = api.getValue("θ");
            let cosTheta = api.getValue("a");
            let checkThetaRange = (theta > Math.PI && theta < Math.PI*3/2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A2_observation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation3_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation4_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A2_observation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation3_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation4_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A2_observation3_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第三象限"});
            }
        })
        function A2_observation3_check() {
            let A2_observation3_input1_usrans = $("#A2_observation3_input1").val();
            let input1_usrans_check = (A2_observation3_input1_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A2_observation3_confirm").hide();
                    $("#A2_observation3_done").css({"opacity": "1"});
                    $("#A2_observation3_next").removeClass("d-none");
                    $("#A2_observation3_link img").css({"opacity": "1"});
                });
                $("#A2_investigation4_input1").html(katex.renderToString("0", { throwOnError: false }));

            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A2_observation3_confirm").click(function() {
            A2_observation3_check();
        });
        $("#A2_observation3_next").click(function() {
            $("#A2_investigation4_link").click();
        });

        // A2_investigation4
        function A2_investigation4_check() {
            let A2_investigation4_input1_usrans = $("input[name=A2_investigation4_input1]:checked").val();
            let A2_investigation4_input2_usrans = $("input[name=A2_investigation4_input2]:checked").val();
            let A2_investigation4_input3_usrans = $("input[name=A2_investigation4_input3]:checked").val();
            let input1_usrans_check = (A2_investigation4_input1_usrans == "2");
            let input2_usrans_check = (A2_investigation4_input2_usrans == "1");
            let input3_usrans_check = (A2_investigation4_input3_usrans == "3");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A2_investigation4_confirm").hide();
                    $("#A2_investigation4_done").css({"opacity": "1"});
                    $("#A2_investigation4_next").removeClass("d-none");
                    $("#A2_investigation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation4_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A2_investigation4_confirm").click(function() {
            A2_investigation4_check();
        });
        $("#A2_investigation4_next").click(function() {
            $("#A2_operation5_link").click();
        });

        // A2_operation5
        function A2_operation5_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*11/6)) {
                $("#A2_operation5_next").removeClass("d-none");
            };
            if (theta < (Math.PI*3/2 - 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第四象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            };
        };
        $("#A2_operation5_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A2_operation5_check);
        });
        $("#A2_operation5_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A2_operation5_done").css({"opacity": "1"});
                $("#A2_operation5_link img").css({"opacity": "1"});
            })
            $("#A2_observation4_link").click();
        });

        // A2_observation4
        $("#A2_observation4_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A2_observation4_record").click(function() {
            let theta = api.getValue("θ");
            let cosTheta = api.getValue("a");
            let checkThetaRange = (theta > Math.PI*3/2 && theta < Math.PI*2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A2_observation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation4_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation5_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation5_record1_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A2_observation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_observation4_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                $("#A2_investigation5_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A2_investigation5_record2_2").html(katex.renderToString("" + numRound(cosTheta , 4), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A2_observation4_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 P 點在第四象限"});
            }
        })
        function A2_observation4_check() {
            let A2_observation4_input1_usrans = $("#A2_observation4_input1").val();
            let input1_usrans_check = (A2_observation4_input1_usrans == "2");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A2_observation4_confirm").hide();
                    $("#A2_observation4_done").css({"opacity": "1"});
                    $("#A2_observation4_next").removeClass("d-none");
                    $("#A2_observation4_link img").css({"opacity": "1"});
                });
                $("#A2_investigation5_input1").html(katex.renderToString("1", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A2_observation4_confirm").click(function() {
            A2_observation4_check();
        });
        $("#A2_observation4_next").click(function() {
            $("#A2_investigation5_link").click();
        });

        // A2_investigation5
        function A2_investigation5_check() {
            let A2_investigation5_input1_usrans = $("input[name=A2_investigation5_input1]:checked").val();
            let A2_investigation5_input2_usrans = $("input[name=A2_investigation5_input2]:checked").val();
            let A2_investigation5_input3_usrans = $("input[name=A2_investigation5_input3]:checked").val();
            let input1_usrans_check = (A2_investigation5_input1_usrans == "1");
            let input2_usrans_check = (A2_investigation5_input2_usrans == "1");
            let input3_usrans_check = (A2_investigation5_input3_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A2_investigation5_confirm").hide();
                    $("#A2_investigation5_done").css({"opacity": "1"});
                    $("#A2_investigation5_next").removeClass("d-none");
                    $("#A2_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A2_investigation5_confirm").click(function() {
            A2_investigation5_check();
        });
        $("#A2_investigation5_next").click(function() {
            $("#A2_operation6_link").click();
        });

        // A2_operation6
        function A2_operation6_check() {
            let theta = api.getValue("θ");
            let aniStart = api.getValue("aniStart");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4 && aniStart == 0) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 6'}).then((result) => {
                    $("#A2_operation6_done").css({"opacity": "1"});
                    $("#A2_operation6_next").removeClass("d-none");
                    $("#A2_operation6_link img").css({"opacity": "1"});
                })
                removeListener();
            };
        };
        $("#A2_operation6_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode3();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerUpdateListener(A2_operation6_check);
        });
        $("#A2_operation6_next").click(function() {
            $("#A2_investigation6_link").click();
        });

        // A2_investigation6
        function A2_investigation6_check() {
            let A2_investigation6_1_input1_usrans = $("#A2_investigation6_1_input1").val();
            let A2_investigation6_1_input2_usrans = $("#A2_investigation6_1_input2").val();
            let A2_investigation6_1_input3_usrans = $("#A2_investigation6_1_input3").val();
            let A2_investigation6_2_input1_usrans = $("#A2_investigation6_2_input1").val();
            let A2_investigation6_2_input2_usrans = $("#A2_investigation6_2_input2").val();
            let A2_investigation6_2_input3_usrans = $("#A2_investigation6_2_input3").val();
            let A2_investigation6_3_input1_usrans = $("#A2_investigation6_3_input1").val();
            let A2_investigation6_4_input1_usrans = $("#A2_investigation6_4_input1").val();
            let A2_investigation6_4_input2_usrans = $("#A2_investigation6_4_input2").val();
            let input_1_1_usrans_check = (A2_investigation6_1_input1_usrans == "2");
            let input_1_2_usrans_check = (A2_investigation6_1_input2_usrans == "1");
            let input_1_3_usrans_check = (A2_investigation6_1_input3_usrans == "1");
            let input_2_1_usrans_check = (A2_investigation6_2_input1_usrans == "1");
            let input_2_2_usrans_check = (A2_investigation6_2_input2_usrans == "1");
            let input_2_3_usrans_check = (A2_investigation6_2_input3_usrans == "0");
            let input_3_1_usrans_check = (A2_investigation6_3_input1_usrans == "1");
            let input_4_1_usrans_check = (A2_investigation6_4_input1_usrans == "0");
            let input_4_2_usrans_check = (A2_investigation6_4_input2_usrans == "2");
            if (input_1_1_usrans_check && input_1_2_usrans_check && input_1_3_usrans_check && input_2_1_usrans_check && input_2_2_usrans_check && input_2_3_usrans_check && input_3_1_usrans_check && input_4_1_usrans_check && input_4_2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A2_investigation6_confirm").hide();
                    $("#A2_investigation6_done").css({"opacity": "1"});
                    $("#A2_investigation6_next").removeClass("d-none");
                    $("#A2_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A2_investigation6_link").click(function() {
            removeListener();
            ggbMode3();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A2_investigation6_confirm").click(function() {
            A2_investigation6_check();
        });
        $("#A2_investigation6_next").click(function() {
            showA3();
        });
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
};

function showA3() {
    var initA3 = false;
    var thetaFirst = 0;
    var count = 0;
    var checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false; 
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-10-6(3) 活動3：" + katex.renderToString("\\tan{ \\theta }", { throwOnError: false }) + " 的範圍");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_6_3_A3;
    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectUpdateListener("θ");
            api.unregisterUpdateListener(A3_operation6_check);
        };
        function ggbMode1() {
            api.setValue("showOACD", true)
            api.setValue("showAxis", false);
            api.setValue("showInfoText1", false);
            // api.setValue("showInfoText2", false);
            api.setValue("showDashboard", false);
            api.setValue("showAuto", false);
        };
        function ggbMode2() {
            api.setValue("showOACD", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText1", true);
            // api.setValue("showInfoText2", false);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", false);
        };
        function ggbMode3() {
            api.setValue("showOACD", false)
            api.setValue("showAxis", true);
            api.setValue("showInfoText1", true);
            // api.setValue("showInfoText2", false);
            api.setValue("showDashboard", true);
            api.setValue("showAuto", true);
        };
        // function ggbMode4() {
        //     api.setValue("showOACD", true)
        //     api.setValue("showAxis", true);
        //     api.setValue("showInfoText1", true);
        //     api.setValue("showInfoText2", true);
        //     api.setValue("showDashboard", true);
        //     api.setValue("showAuto", true);
        // };

        // A3_operation1
        function A3_operation1_check() {
            let theta = api.getValue("θ");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 1'}).then((result) => {
                    $("#A3_operation1_done").css({"opacity": "1"});
                    $("#A3_operation1_next").removeClass("d-none");
                    $("#A3_operation1_link img").css({"opacity": "1"});
                    removeListener();
                })
            }
        };
        $("#A3_operation1_link").click(function() {
            removeListener();
            ggbMode1();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerObjectUpdateListener("θ", A3_operation1_check);
        });
        if (!initA3) { 
            // Swal.fire({html: '<img src="./images/content/lotteryMachine.png" height="150"><br><br><div style="text-align: left; font-size: 16px; line-height: 2;">這是一個抽獎實驗。<br>已知搖獎機中有橘、綠、藍三種顏色的球，共 10 顆。<br>每次從搖獎機中搖出一球之後便放回，即算完成一次抽獎。</div>'});
            $("#A3_operation1_link").click();
            initA3 = true;
        };
        $("#A3_operation1_next").click(function() {
            $("#A3_investigation1_link").click();
        });

        // A3_investigation1
        function A3_investigation1_check() {
            let A3_investigation1_input1_usrans = $("input[name=A3_investigation1_input1]:checked").val();
            let A3_investigation1_input2_usrans = $("input[name=A3_investigation1_input2]:checked").val();
            let A3_investigation1_input3_usrans = $("input[name=A3_investigation1_input3]:checked").val();
            let input1_usrans_check = (A3_investigation1_input1_usrans == "3");
            let input2_usrans_check = (A3_investigation1_input2_usrans == "3");
            let input3_usrans_check = (A3_investigation1_input3_usrans == "2");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A3_investigation1_confirm").hide();
                    $("#A3_investigation1_done").css({"opacity": "1"});
                    $("#A3_investigation1_next").removeClass("d-none");
                    $("#A3_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation1_link").click(function() {
            removeListener();
            ggbMode1();
        });
        $("#A3_investigation1_confirm").click(function() {
            A3_investigation1_check();
        });
        $("#A3_investigation1_next").click(function() {
            $("#A3_operation2_link").click();
        });

        // A3_operation2
        function A3_operation2_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI/3) && theta < (Math.PI/2)) {
                $("#A3_operation2_next").removeClass("d-none");
            };
            if (theta > (Math.PI/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第一象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            };
        };
        $("#A3_operation2_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A3_operation2_check);
        });
        $("#A3_operation2_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 2'}).then((result) => {
                $("#A3_operation2_done").css({"opacity": "1"});
                $("#A3_operation2_link img").css({"opacity": "1"});
            })
            $("#A3_observation1_link").click();
        });

        // A3_observation1
        $("#A3_observation1_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A3_observation1_record").click(function() {
            let theta = api.getValue("θ");
            let tanTheta = Math.tan(theta);
            let checkThetaRange = (theta < Math.PI/2 && theta > 0);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A3_observation1_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation1_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation2_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A3_observation1_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation1_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation2_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A3_observation1_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第一象限"});
            }
        })
        function A3_observation1_check() {
            let A3_observation1_input1_usrans = $("#A3_observation1_input1").val();
            let A3_observation1_input2_usrans = $("#A3_observation1_input2").val();
            let input1_usrans_check = (A3_observation1_input1_usrans == "1");
            let input2_usrans_check = (A3_observation1_input2_usrans == "3");
            let record_check = (count == 2);
            if (input1_usrans_check && input2_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A3_observation1_confirm").hide();
                    $("#A3_observation1_done").css({"opacity": "1"});
                    $("#A3_observation1_next").removeClass("d-none");
                    $("#A3_observation1_link img").css({"opacity": "1"});
                });
                $("#A3_investigation2_input1").html(katex.renderToString("0", { throwOnError: false }));
                $("#A3_investigation2_input2").html("無意義");
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            }
        };
        $("#A3_observation1_confirm").click(function() {
            A3_observation1_check();
        });
        $("#A3_observation1_next").click(function() {
            $("#A3_investigation2_link").click();
        });

        // A3_investigation2
        function A3_investigation2_check() {
            let A3_investigation2_input1_usrans = $("input[name=A3_investigation2_input1]:checked").val();
            let A3_investigation2_input2_usrans = $("input[name=A3_investigation2_input2]:checked").val();
            let A3_investigation2_input3_usrans = $("input[name=A3_investigation2_input3]:checked").val();
            let A3_investigation2_input4_usrans = $("input[name=A3_investigation2_input4]:checked").val();
            let input1_usrans_check = (A3_investigation2_input1_usrans == "1");
            let input2_usrans_check = (A3_investigation2_input2_usrans == "2");
            let input3_usrans_check = (A3_investigation2_input3_usrans == "1");
            let input4_usrans_check = (A3_investigation2_input4_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check && input4_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A3_investigation2_confirm").hide();
                    $("#A3_investigation2_done").css({"opacity": "1"});
                    $("#A3_investigation2_next").removeClass("d-none");
                    $("#A3_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation2_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A3_investigation2_confirm").click(function() {
            A3_investigation2_check();
        });
        $("#A3_investigation2_next").click(function() {
            $("#A3_operation3_link").click();
        });

        // A3_operation3
        function A3_operation3_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*5/6)) {
                $("#A3_operation3_next").removeClass("d-none");
            };
            if (theta < (Math.PI/2 - 0.2) || theta > (Math.PI + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第二象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            };
        };
        $("#A3_operation3_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(91))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A3_operation3_check);
        });
        $("#A3_operation3_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                $("#A3_operation3_done").css({"opacity": "1"});
                $("#A3_operation3_link img").css({"opacity": "1"});
            })
            $("#A3_observation2_link").click();
        });

        // A3_observation2
        $("#A3_observation2_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A3_observation2_record").click(function() {
            let theta = api.getValue("θ");
            let tanTheta = Math.tan(theta);
            let checkThetaRange = (theta > Math.PI/2 && theta < Math.PI);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A3_observation2_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation2_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation3_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A3_observation2_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation2_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation3_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A3_observation2_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第二象限"});
            }
        })
        function A3_observation2_check() {
            let A3_observation2_input1_usrans = $("#A3_observation2_input1").val();
            let input1_usrans_check = (A3_observation2_input1_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A3_observation2_confirm").hide();
                    $("#A3_observation2_done").css({"opacity": "1"});
                    $("#A3_observation2_next").removeClass("d-none");
                    $("#A3_observation2_link img").css({"opacity": "1"});
                });
                $("#A3_investigation3_input1").html(katex.renderToString("0", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A3_observation2_confirm").click(function() {
            A3_observation2_check();
        });
        $("#A3_observation2_next").click(function() {
            $("#A3_investigation3_link").click();
        });

        // A3_investigation3
        function A3_investigation3_check() {
            let A3_investigation3_input1_usrans = $("input[name=A3_investigation3_input1]:checked").val();
            let A3_investigation3_input2_usrans = $("input[name=A3_investigation3_input2]:checked").val();
            let A3_investigation3_input3_usrans = $("input[name=A3_investigation3_input3]:checked").val();
            let input1_usrans_check = (A3_investigation3_input1_usrans == "2");
            let input2_usrans_check = (A3_investigation3_input2_usrans == "1");
            let input3_usrans_check = (A3_investigation3_input3_usrans == "1");
            if (input1_usrans_check && input2_usrans_check && input3_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A3_investigation3_confirm").hide();
                    $("#A3_investigation3_done").css({"opacity": "1"});
                    $("#A3_investigation3_next").removeClass("d-none");
                    $("#A3_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation3_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A3_investigation3_confirm").click(function() {
            A3_investigation3_check();
        });
        $("#A3_investigation3_next").click(function() {
            $("#A3_operation4_link").click();
        });

        // A3_operation4
        function A3_operation4_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*4/3)) {
                $("#A3_operation4_next").removeClass("d-none");
            };
            if (theta < (Math.PI - 0.2) || theta > (Math.PI*3/2 + 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第三象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            };
        };
        $("#A3_operation4_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(181))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A3_operation4_check);
        });
        $("#A3_operation4_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 4'}).then((result) => {
                $("#A3_operation4_done").css({"opacity": "1"});
                $("#A3_operation4_link img").css({"opacity": "1"});
            })
            $("#A3_observation3_link").click();
        });

        // A3_observation3
        $("#A3_observation3_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A3_observation3_record").click(function() {
            let theta = api.getValue("θ");
            let tanTheta = Math.tan(theta);
            let checkThetaRange = (theta > Math.PI && theta < Math.PI*3/2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A3_observation3_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation3_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation4_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A3_observation3_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation3_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation4_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A3_observation3_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第三象限"});
            }
        })
        function A3_observation3_check() {
            let A3_observation3_input1_usrans = $("#A3_observation3_input1").val();
            let input1_usrans_check = (A3_observation3_input1_usrans == "3");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A3_observation3_confirm").hide();
                    $("#A3_observation3_done").css({"opacity": "1"});
                    $("#A3_observation3_next").removeClass("d-none");
                    $("#A3_observation3_link img").css({"opacity": "1"});
                });
                $("#A3_investigation4_input1").html("無意義");
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A3_observation3_confirm").click(function() {
            A3_observation3_check();
        });
        $("#A3_observation3_next").click(function() {
            $("#A3_investigation4_link").click();
        });

        // A3_investigation4
        function A3_investigation4_check() {
            let A3_investigation4_input1_usrans = $("input[name=A3_investigation4_input1]:checked").val();
            let A3_investigation4_input2_usrans = $("input[name=A3_investigation4_input2]:checked").val();
            let input1_usrans_check = (A3_investigation4_input1_usrans == "1");
            let input2_usrans_check = (A3_investigation4_input2_usrans == "1");
            if (input1_usrans_check && input2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 4'}).then((result) => {
                    $("#A3_investigation4_confirm").hide();
                    $("#A3_investigation4_done").css({"opacity": "1"});
                    $("#A3_investigation4_next").removeClass("d-none");
                    $("#A3_investigation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation4_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A3_investigation4_confirm").click(function() {
            A3_investigation4_check();
        });
        $("#A3_investigation4_next").click(function() {
            $("#A3_operation5_link").click();
        });

        // A3_operation5
        function A3_operation5_check() {
            let theta = api.getValue("θ");
            if (theta > (Math.PI*11/6)) {
                $("#A3_operation5_next").removeClass("d-none");
            };
            if (theta < (Math.PI*3/2 - 0.2)) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第四象限"});
                api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            };
        };
        $("#A3_operation5_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(271))");
            ggbMode2();
            api.registerObjectUpdateListener("θ", A3_operation5_check);
        });
        $("#A3_operation5_next").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A3_operation5_done").css({"opacity": "1"});
                $("#A3_operation5_link img").css({"opacity": "1"});
            })
            $("#A3_observation4_link").click();
        });

        // A3_observation4
        $("#A3_observation4_link").click(function() {
            removeListener();
            ggbMode2();
            thetaFirst = 0;
            count = 0;
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        })
        $("#A3_observation4_record").click(function() {
            let theta = api.getValue("θ");
            let tanTheta = Math.tan(theta);
            let checkThetaRange = (theta > Math.PI*3/2 && theta < Math.PI*2);
            if (count == 0 && checkThetaRange) {
                thetaFirst = theta;
                $("#A3_observation4_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation4_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation5_record1_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation5_record1_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 1 筆紀錄'})
                count++;
            } else if (count ==1 && theta != thetaFirst && checkThetaRange) {
                $("#A3_observation4_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_observation4_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                $("#A3_investigation5_record2_1").html(katex.renderToString(numRound(theta*180/Math.PI , 0) + "\\degree", { throwOnError: false }));
                $("#A3_investigation5_record2_2").html(katex.renderToString("" + numRound(tanTheta , 2), { throwOnError: false }));
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '完成第 2 筆紀錄'});
                count++;
                $("#A3_observation4_record").hide();
            } else if (!checkThetaRange) {
                Swal.fire({icon: 'info', showConfirmButton: false, timer: 3000, text: "讓 B 點在第四象限"});
            }
        })
        function A3_observation4_check() {
            let A3_observation4_input1_usrans = $("#A3_observation4_input1").val();
            let input1_usrans_check = (A3_observation4_input1_usrans == "1");
            let record_check = (count == 2);
            if (input1_usrans_check && record_check ) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A3_observation4_confirm").hide();
                    $("#A3_observation4_done").css({"opacity": "1"});
                    $("#A3_observation4_next").removeClass("d-none");
                    $("#A3_observation4_link img").css({"opacity": "1"});
                });
                $("#A3_investigation5_input1").html(katex.renderToString("0", { throwOnError: false }));
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '請完成紀錄！'})
            } 
        };
        $("#A3_observation4_confirm").click(function() {
            A3_observation4_check();
        });
        $("#A3_observation4_next").click(function() {
            $("#A3_investigation5_link").click();
        });

        // A3_investigation5
        function A3_investigation5_check() {
            let A3_investigation5_input1_usrans = $("input[name=A3_investigation5_input1]:checked").val();
            let A3_investigation5_input2_usrans = $("input[name=A3_investigation5_input2]:checked").val();
            let input1_usrans_check = (A3_investigation5_input1_usrans == "2");
            let input2_usrans_check = (A3_investigation5_input2_usrans == "1");
            if (input1_usrans_check && input2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 5'}).then((result) => {
                    $("#A3_investigation5_confirm").hide();
                    $("#A3_investigation5_done").css({"opacity": "1"});
                    $("#A3_investigation5_next").removeClass("d-none");
                    $("#A3_investigation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation5_link").click(function() {
            removeListener();
            ggbMode2();
        });
        $("#A3_investigation5_confirm").click(function() {
            A3_investigation5_check();
        });
        $("#A3_investigation5_next").click(function() {
            $("#A3_operation6_link").click();
        });

        // A3_operation6
        function A3_operation6_check() {
            let theta = api.getValue("θ");
            let aniStart = api.getValue("aniStart");
            (theta > 0 && theta < Math.PI/2) && (checkThetaQ1 = true);
            (theta > Math.PI/2 && theta < Math.PI) && (checkThetaQ2 = true);
            (theta > Math.PI && theta < Math.PI*3/2) && (checkThetaQ3 = true);
            (theta > Math.PI*3/2 && theta < Math.PI*2) && (checkThetaQ4 = true);
            if (checkThetaQ1 && checkThetaQ2 && checkThetaQ3 && checkThetaQ4 && aniStart == 0) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 6'}).then((result) => {
                    $("#A3_operation6_done").css({"opacity": "1"});
                    $("#A3_operation6_next").removeClass("d-none");
                    $("#A3_operation6_link img").css({"opacity": "1"});
                })
                removeListener();
            };
        };
        $("#A3_operation6_link").click(function() {
            removeListener();
            api.evalCommand("SetValue(PosThetaControl,listPosTheta(1))");
            ggbMode3();
            checkThetaQ1, checkThetaQ2, checkThetaQ3, checkThetaQ4 = false;
            api.registerUpdateListener(A3_operation6_check);
        });
        $("#A3_operation6_next").click(function() {
            $("#A3_investigation6_link").click();
        });

        // A3_investigation6
        function A3_investigation6_check() {
            let A3_investigation6_1_input1_usrans = $("#A3_investigation6_1_input1").val();
            let A3_investigation6_1_input2_usrans = $("#A3_investigation6_1_input2").val();
            let A3_investigation6_1_input3_usrans = $("#A3_investigation6_1_input3").val();
            let A3_investigation6_2_input1_usrans = $("#A3_investigation6_2_input1").val();
            let A3_investigation6_2_input2_usrans = $("#A3_investigation6_2_input2").val();
            let A3_investigation6_2_input3_usrans = $("#A3_investigation6_2_input3").val();
            let A3_investigation6_3_input1_usrans = $("#A3_investigation6_3_input1").val();
            let A3_investigation6_3_input2_usrans = $("#A3_investigation6_3_input2").val();
            let A3_investigation6_4_input1_usrans = $("#A3_investigation6_4_input1").val();
            let A3_investigation6_4_input2_usrans = $("#A3_investigation6_4_input2").val();
            let input_1_1_usrans_check = (A3_investigation6_1_input1_usrans == "2");
            let input_1_2_usrans_check = (A3_investigation6_1_input2_usrans == "0");
            let input_1_3_usrans_check = (A3_investigation6_1_input3_usrans == "4");
            let input_2_1_usrans_check = (A3_investigation6_2_input1_usrans == "0");
            let input_2_2_usrans_check = (A3_investigation6_2_input2_usrans == "0");
            let input_2_3_usrans_check = (A3_investigation6_2_input3_usrans == "2");
            let input_3_1_usrans_check = (A3_investigation6_3_input1_usrans == "0");
            let input_3_2_usrans_check = (A3_investigation6_3_input2_usrans == "1");
            let input_4_1_usrans_check = (A3_investigation6_4_input1_usrans == "0");
            let input_4_2_usrans_check = (A3_investigation6_4_input2_usrans == "4");
            if (input_1_1_usrans_check && input_1_2_usrans_check && input_1_3_usrans_check && input_2_1_usrans_check && input_2_2_usrans_check && input_2_3_usrans_check && input_3_1_usrans_check && input_3_2_usrans_check && input_4_1_usrans_check && input_4_2_usrans_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 6'}).then((result) => {
                    $("#A3_investigation6_confirm").hide();
                    $("#A3_investigation6_done").css({"opacity": "1"});
                    $("#A3_investigation6_next").removeClass("d-none");
                    $("#A3_investigation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '再試試看！'})
            }
        }
        $("#A3_investigation6_link").click(function() {
            removeListener();
            ggbMode3();
            $(".dropdown-menu li a").click(function(){
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });
        $("#A3_investigation6_confirm").click(function() {
            A3_investigation6_check();
        });
        $("#A3_investigation6_next").click(function() {
            // $("#A3_operation7_link").click();
        });

        // A3_operation7
        // function A3_operation7_check() {
        //     let theta = api.getValue("θ");
        //     if (theta > 6) {
        //         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 7'}).then((result) => {
        //             $("#A3_operation7_done").css({"opacity": "1"});
        //             $("#A3_operation7_next").removeClass("d-none");
        //             $("#A3_operation7_link img").css({"opacity": "1"});
        //             removeListener();
        //         })
        //     }
        // };
        // $("#A3_operation7_link").click(function() {
        //     removeListener();
        //     ggbMode4();
        //     api.stopAnimation();
        //     api.setValue("aniStart",true);
        //     api.setValue("θ", 0);
        //     api.registerObjectUpdateListener("θ", A3_operation7_check);
        // });
        // $("#A3_operation7_next").click(function() {
        //     $("#A3_investigation7_link").click();
        // });

        // A3_investigation7
        // $("#A3_investigation7_link").click(function() {
        //     removeListener();
        // })
        // function A3_investigation7_check() {
        //     let input1 = $('input[name=A3_investigation7_input1]:checked').val();
        //     let input2 = $("#A3_investigation7_textarea1").val();
        //     let check_input1 = (input1 == "1");
        //     let check_input2 = (input2 != "");
        //     if (check_input1 && check_input2) {
        //         Swal.fire({icon: 'success', showConfirmButton: false, timer: 2000, text: '恭喜完成問題探索 7'}).then((result) => {
        //             $("#A3_investigation7_confirm").hide();
        //             $("#A3_investigation7_done").css({"opacity": "1"});
        //             $("#A3_investigation7_next").removeClass("d-none");
        //             $("#A3_investigation7_link img").css({"opacity": "1"});
        //         })
        //     } else if (input1 == "2") {
        //         Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '兩者真的不同嗎？'});
        //     } else {
        //         Swal.fire({icon: 'error', showConfirmButton: false, timer: 2000, text: '請完成作答'});
        //     }
        // }
        // $("#A3_investigation7_confirm").click(function() {
        //     A3_investigation7_check();
        // });
        // $("#A3_investigation7_next").click(function() {
        //     ;
        // });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A3_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
};