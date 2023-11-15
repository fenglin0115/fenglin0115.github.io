params.ggbBase64 = ggb_G_10_5_cover;

params.appletOnLoad = function (api) {

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
window.addEventListener("load", function () {
    applet.inject('ggb-element');
});



function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("G-10-5 活動1：極坐標");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_5_A1;

    params.appletOnLoad = function (api) {
        function listenerdelete() {
            api.unregisterObjectUpdateListener("gotostep3");
            api.unregisterObjectClickListener("gotostep3", funcgotostep3);
        }

        //操作一
        api.registerObjectUpdateListener("gotostep3", A1_ope1_check);
        // api.registerObjectClickListener("gotostep3", funcgotostep3);
        $("#A1_operation1_link").click(function () {
            api.evalCommand("RunClickScript(reset)");
            api.registerObjectUpdateListener("gotostep3", A1_ope1_check);
            // api.registerObjectClickListener("gotostep3", funcgotostep3);
        });

        function funcgotostep3() {
            $("#A1_operation1_next").click();
        }

        function A1_ope1_check() {
            var checkA1ope = api.getVisible("gotostep3");
            if (checkA1ope) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    $("#A1_operation1_done").css({ "opacity": "1" });
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("gotostep3");
            }
        }

        $("#A1_operation1_next").click(function () {
            $("#A1_observation1_link").click();
            // api.unregisterObjectClickListener("gotostep3");
            api.evalCommand("RunClickScript(gotostep3)");
        });


        //觀察一
        $("#A1_observation1_link").click(function () {
            $("#A1_observation1_input1").next().find("a").eq(0).html(katex.renderToString("0\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(1).html(katex.renderToString("30\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(2).html(katex.renderToString("60\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(3).html(katex.renderToString("90\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(4).html(katex.renderToString("120\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(5).html(katex.renderToString("150\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(6).html(katex.renderToString("180\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(7).html(katex.renderToString("210\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(8).html(katex.renderToString("240\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(9).html(katex.renderToString("270\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(10).html(katex.renderToString("300\\degree", { throwOnError: false }));
            $("#A1_observation1_input1").next().find("a").eq(11).html(katex.renderToString("330\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(0).html(katex.renderToString("0\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(1).html(katex.renderToString("30\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(2).html(katex.renderToString("60\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(3).html(katex.renderToString("90\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(4).html(katex.renderToString("120\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(5).html(katex.renderToString("150\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(6).html(katex.renderToString("180\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(7).html(katex.renderToString("210\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(8).html(katex.renderToString("240\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(9).html(katex.renderToString("270\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(10).html(katex.renderToString("300\\degree", { throwOnError: false }));
            $("#A1_observation1_input2").next().find("a").eq(11).html(katex.renderToString("330\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(0).html(katex.renderToString("0\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(1).html(katex.renderToString("30\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(2).html(katex.renderToString("60\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(3).html(katex.renderToString("90\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(4).html(katex.renderToString("120\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(5).html(katex.renderToString("150\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(6).html(katex.renderToString("180\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(7).html(katex.renderToString("210\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(8).html(katex.renderToString("240\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(9).html(katex.renderToString("270\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(10).html(katex.renderToString("300\\degree", { throwOnError: false }));
            $("#A1_observation1_input3").next().find("a").eq(11).html(katex.renderToString("330\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(0).html(katex.renderToString("0\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(1).html(katex.renderToString("30\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(2).html(katex.renderToString("60\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(3).html(katex.renderToString("90\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(4).html(katex.renderToString("120\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(5).html(katex.renderToString("150\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(6).html(katex.renderToString("180\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(7).html(katex.renderToString("210\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(8).html(katex.renderToString("240\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(9).html(katex.renderToString("270\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(10).html(katex.renderToString("300\\degree", { throwOnError: false }));
            $("#A1_observation1_input4").next().find("a").eq(11).html(katex.renderToString("330\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(0).html(katex.renderToString("0\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(1).html(katex.renderToString("30\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(2).html(katex.renderToString("60\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(3).html(katex.renderToString("90\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(4).html(katex.renderToString("120\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(5).html(katex.renderToString("150\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(6).html(katex.renderToString("180\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(7).html(katex.renderToString("210\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(8).html(katex.renderToString("240\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(9).html(katex.renderToString("270\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(10).html(katex.renderToString("300\\degree", { throwOnError: false }));
            $("#A1_observation1_input5").next().find("a").eq(11).html(katex.renderToString("330\\degree", { throwOnError: false }));
            $(".dropdown-menu li a").click(function () {
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });

            api.evalCommand("RunClickScript(gotostep3)");
            // api.evalCommand("SetValue(step,3)");
            // api.registerObjectClickListener("finstep3",funcfinstep3);

        });


        $("#A1_observation1_confirm").click(function () {
            var A1_obs1_input1 = $("#A1_observation1_input1").val();
            var A1_obs1_input2 = $("#A1_observation1_input2").val();
            var A1_obs1_input3 = $("#A1_observation1_input3").val();
            var A1_obs1_input4 = $("#A1_observation1_input4").val();
            var A1_obs1_input5 = $("#A1_observation1_input5").val();
            var A1_obs1_b1 = api.getValue("G1");
            var A1_obs1_b2 = api.getValue("G2");
            var A1_obs1_b3 = api.getValue("G3");
            var A1_obs1_b4 = api.getValue("G4");
            var A1_obs1_b5 = api.getValue("G5");
            if (A1_obs1_input1 == A1_obs1_b1 && A1_obs1_input2 == A1_obs1_b2 && A1_obs1_input3 == A1_obs1_b3 && A1_obs1_input4 == A1_obs1_b4 && A1_obs1_input5 == A1_obs1_b5) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察紀錄1' }).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({ "opacity": "1" });
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({ "opacity": "1" });
                })
                // api.setValue("recordfin", 1);
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡紀錄錯了' })
            }
        });

        // function funcfinstep3(){
        //     $("#A1_observation1_next").click();
        // }

        $("#A1_observation1_next").click(function () {
            $("#A1_investigation1_link").click();
            // api.unregisterObjectClickListener("finstep3");
            // api.evalCommand("RunClickScript(finstep3)");
        });



        //探索一
        $("#A1_investigation1_link").click(function () {
            api.evalCommand("RunClickScript(finstep3)");
            // api.evalCommand("SetValue(step,4)");
        });

        $("#A1_investigation1_confirm").click(function () {
            var A1_inv1_input1 = $("#A1_investigation1_input1_option1").prop("checked");
            var A1_inv1_input2 = $("#A1_investigation1_input1_option2").prop("checked");
            var A1_inv1_input3 = $("#A1_investigation1_input1_option3").prop("checked");
            var A1_inv1_input4 = $("#A1_investigation1_input1_option4").prop("checked");
            var A1_inv1_input5 = $("#A1_investigation1_input1_option5").prop("checked");
            if (A1_inv1_input4 || A1_inv1_input1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '好像不對喔! 剛剛是這樣紀錄的嗎？' })
            } else if (A1_inv1_input2 && A1_inv1_input3 && A1_inv1_input5) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '太好了擊中所有敵艦了！恭喜完成問題探索1' }).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({ "opacity": "1" });
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({ "opacity": "1" });
                })
            } else if (A1_inv1_input2 || A1_inv1_input3 || A1_inv1_input5) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1 還有沒有其他敵艦沒有解決呢？' }).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({ "opacity": "1" });
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '好像不對喔! 剛剛是這樣紀錄的嗎？' })
            }
        });

        $("#A1_investigation1_next").click(function () {
            $("#A1_investigation2_link").click();
            // api.evalCommand("RunClickScript(finstep4)");
        });



        //探索二
        $("#A1_investigation2_link").click(function () {
            api.evalCommand("RunClickScript(finstep4)");
        });

        $("#A1_investigation2_confirm").click(function () {
            var A1_inv2_check = $("#A1_investigation2_textarea1").val();
            if (A1_inv2_check == "") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請寫下你的看法吧' })
            } else {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({ "opacity": "1" });
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({ "opacity": "1" });
                })
            }
        });

        $("#A1_investigation2_next").click(function () {
            $("#A1_investigation3_link").click();
            // api.evalCommand("RunClickScript(finstep5)");
        });


        //探索三
        $("#A1_investigation3_link").click(function () {
            api.evalCommand("RunClickScript(finstep5)");
        });

        $("#A1_investigation3_confirm").click(function () {
            var A1_inv3_input1_1 = $("#A1_investigation3_input1_option1").prop("checked");
            var A1_inv3_input1_2 = $("#A1_investigation3_input1_option2").prop("checked");
            var A1_inv3_input2 = $("#A1_investigation3_input2").val();
            if (A1_inv3_input2 == "") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請寫下你的看法吧' })
            } else if (A1_inv3_input1_2 && A1_inv3_input2 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({ "opacity": "1" });
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({ "opacity": "1" });
                })
            } else if (A1_inv3_input1_1 && A1_inv3_input2 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '其實距離也是一個重要的因素喔!恭喜完成問題探索3' }).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({ "opacity": "1" });
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({ "opacity": "1" });
                })
            }
        });

        $("#A1_investigation3_next").click(function () {
            showA2();
        });



    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A1_operation1").show();
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function showA2_2() {
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_5_A2_2;
    params.appletOnLoad = function (api) {

        function loadApplet(id, ggbBase64) {
            // if (id != "ggbApplet02" && params.id == "ggbApplet02") {
            //     // ggbApplet01Tmp = "";
            //     ggbApplet01Tmp = api.getBase64();
            //     // alert("record ggbApplet01");
            // }

            if (params.id != id) {
                params.id = id;
                params.ggbBase64 = ggbBase64;
                applet = new GGBApplet(params, true);
                applet.inject('ggb-element');
            }
        }
        api.registerObjectUpdateListener("P", checkPoperation);
        //操作2
        $("#A2_operation2_link").click(function () {
            // var doA2ope2 = true;
            loadApplet("ggbApplet02_2", ggb_G_10_5_A2_2);
            // loadA2ope2();
        });

        function checkPoperation() {
            var A2_ope2_check = api.getValue("check");
            if (A2_ope2_check == 1&&$("#A2_operation2_link img").css("opacity")!=1) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
                    $("#A2_operation2_done").css({ "opacity": "1" });
                    $("#A2_operation2_next").removeClass("d-none");
                    $("#A2_operation2_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("P");

            }
        }

        $("#A2_operation2_next").click(function () {
            $("#A2_investigation2_link").click();
            api.unregisterObjectUpdateListener("P");
        });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A2_operation2").show();
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-5 活動2：極坐標");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_5_A2;
    params.appletOnLoad = function (api) {

        function loadApplet(id, ggbBase64) {
            // if (id != "ggbApplet02" && params.id == "ggbApplet02") {
            //     // ggbApplet01Tmp = "";
            //     ggbApplet01Tmp = api.getBase64();
            //     // alert("record ggbApplet01");
            // }

            if (params.id != id) {
                params.id = id;
                params.ggbBase64 = ggbBase64;
                applet = new GGBApplet(params, true);
                applet.inject('ggb-element');
            }
        }

        api.registerObjectUpdateListener("gotorecord", A2_ope1_check);
        //操作1
        $("#A2_operation1_link").click(function () {
            loadApplet("ggbApplet02", ggb_G_10_5_A2);
            api.evalCommand("RunClickScrpit(reset)")
            api.registerObjectUpdateListener("gotorecord", A2_ope1_check);
        });

        function A2_ope1_check() {
            var checkA1ope = api.getVisible("gotorecord");
            if (checkA1ope) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    $("#A2_operation1_done").css({ "opacity": "1" });
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("gotorecord");
            }
        }

        $("#A2_operation1_next").click(function () {
            $("#A2_observation1_link").click();

        });


        //觀察1
        $("#A2_observation1_link").click(function () {
            loadApplet("ggbApplet02", ggb_G_10_5_A2);
            api.evalCommand("RunClickScript(gotorecord)")

            $(".dropdown-menu li a").click(function () {
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
                // alert($(this).parent().parent().prev().val());
            });
        });

        $("#A2_observation1_confirm").click(function () {
            var A2_obs1_input1 = $("#A2_observation1_input1").val();
            var A2_obs1_input2 = $("#A2_observation1_input2").val();
            var A2_obs1_input3 = $("#A2_observation1_input3").val();
            var A2_obs1_input4 = $("#A2_observation1_input4").val();
            var A2_obs1_input5 = $("#A2_observation1_input5").val();
            var A2_obs1_input6 = $("#A2_observation1_input6").val();
            var A2_obs1_input7 = $("#A2_observation1_input7").val();
            var A2_obs1_input8 = $("#A2_observation1_input8").val();
            var A2_obs1_input9 = $("#A2_observation1_input9").val();
            var A2_obs1_input10 = $("#A2_observation1_input10").val();
            var A2_obs1_b1 = api.getValue("G1") - 1;
            var A2_obs1_b2 = api.getValue("G2");
            var A2_obs1_b3 = api.getValue("G3") - 1;
            var A2_obs1_b4 = api.getValue("G4");
            var A2_obs1_b5 = api.getValue("G5") - 1;
            var A2_obs1_b6 = api.getValue("G6");
            var A2_obs1_b7 = api.getValue("G7") - 1;
            var A2_obs1_b8 = api.getValue("G8");
            var A2_obs1_b9 = api.getValue("G9") - 1;
            var A2_obs1_b10 = api.getValue("G10");
            if (A2_obs1_input1 == A2_obs1_b1 &&
                A2_obs1_input2 == A2_obs1_b2 &&
                A2_obs1_input3 == A2_obs1_b3 &&
                A2_obs1_input4 == A2_obs1_b4 &&
                A2_obs1_input5 == A2_obs1_b5 &&
                A2_obs1_input6 == A2_obs1_b6 &&
                A2_obs1_input7 == A2_obs1_b7 &&
                A2_obs1_input8 == A2_obs1_b8 &&
                A2_obs1_input9 == A2_obs1_b9 &&
                A2_obs1_input10 == A2_obs1_b10) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察紀錄1' }).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({ "opacity": "1" });
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({ "opacity": "1" });
                })
                // api.setValue("recordfin", 1);
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡紀錄錯了' })
            }
        });

        $("#A2_observation1_next").click(function () {
            $("#A2_investigation1_link").click();
        });

        //探索1
        $("#A2_investigation1_link").click(function () {
            loadApplet("ggbApplet02", ggb_G_10_5_A2);
            api.evalCommand("RunClickScript(finstep2)");
        });

        $("#A2_investigation1_confirm").click(function () {
            var A2_inv1_check = $("#A2_investigation1_input1_option3").prop("checked");
            if (A2_inv1_check) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({ "opacity": "1" });
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看' })
            }
        });

        $("#A2_investigation1_next").click(function () {
            $("#A2_operation2_link").click();
        });

        //操作2
        $("#A2_operation2_link").click(function () {
            showA2_2();
        });
        // function loadA2ope2(){
        //     do{
        //         loadApplet("ggbApplet02_2", ggb_G_10_5_A2_2);
        //         api.registerObjectUpdateListener("P", checkPoperation);
        //     }while(params.id!="ggbApplet02_2")
        //     api.registerObjectUpdateListener("P", checkPoperation); 
        // }

        // function checkPoperation() {
        //     var A2_ope2_check = api.getValue("check");
        //     if (A2_ope2_check == 1) {
        //         Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
        //             $("#A2_operation2_done").css({ "opacity": "1" });
        //             $("#A2_operation2_next").removeClass("d-none");
        //             $("#A2_operation2_link img").css({ "opacity": "1" });
        //         })
        //         api.unregisterObjectUpdateListener("P");

        //     }
        // }

        // $("#A2_operation2_next").click(function () {
        //     $("#A2_investigation2_link").click();
        // });

        //探索2
        $("#A2_investigation2_link").click(function () {
            loadApplet("ggbApplet02_2", ggb_G_10_5_A2_2);
        });

        $("#A2_investigation2_confirm").click(function () {
            var A2_inv2_input1 = $("#A2_investigation2_input1_option1").prop("checked");
            var A2_inv2_input2 = $("#A2_investigation2_input2").val();
            var A2_inv2_input3 = $("#A2_investigation2_input3").val();
            if (A2_inv2_input1 &&
                A2_inv2_input2 != "" &&
                A2_inv2_input3 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({ "opacity": "1" });
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({ "opacity": "1" });
                })
            } else if (!A2_inv2_input1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請寫下你的想法' })
            }
        });

        $("#A2_investigation2_next").click(function () {
            $("#A2_investigation3_link").click();
        });

        //探索3
        $("#A2_investigation3_link").click(function () {
            loadApplet("ggbApplet02_2", ggb_G_10_5_A2_2);

        });

        $("#A2_investigation3_confirm").click(function () {
            var A2_inv3_input1 = $("#A2_investigation3_input1_option1").prop("checked");
            var A2_inv3_input2 = $("#A2_investigation3_input1_option2").prop("checked");
            var A2_inv3_input3 = $("#A2_investigation3_input2").val();
            if (A2_inv3_input3 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索3' }).then((result) => {
                    $("#A2_investigation3_confirm").hide();
                    $("#A2_investigation3_done").css({ "opacity": "1" });
                    $("#A2_investigation3_next").removeClass("d-none");
                    $("#A2_investigation3_link img").css({ "opacity": "1" });
                })
            } else if (!A2_inv3_input1 && !A2_inv3_input2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '告訴我你喜歡哪一個吧' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '說說看你的想法吧' })
            }
        });

        $("#A2_investigation3_next").click(function () {
            if (true) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成所有活動' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '還有一些學習單沒有完成喔!現在就去吧' })
            }
        });


    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A2_operation1").show();
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}



$(document).ready(function () {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
