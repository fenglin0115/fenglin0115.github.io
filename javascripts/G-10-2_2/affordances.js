params.ggbBase64 = ggb_G_10_2_2_cover;

params.appletOnLoad = function (api) {

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        // $(".title > span ").html("G-10-2(1) 活動1：點的平移");
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
    $(".title > span ").html("G-10-2(2) 活動1：鉛直線與水平線與不等式");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_2_2_A1;

    params.appletOnLoad = function (api) {
        //操作
        function unregisterListener() {
            api.unregisterObjectUpdateListener("P");
        }

        api.registerObjectUpdateListener("P", A1_ope_check);
        $("#A1_operation1_link").click(function () {
            api.unregisterObjectUpdateListener("P");
            var A1ope_alreadyfin = $("#A1_operation1_img").css("opacity");

            if (A1ope_alreadyfin != 1) {
                api.registerObjectUpdateListener("P", A1_ope_check);
            }

            api.setTrace("P", true);
            api.evalCommand("SetValue(btn,true)");


        });

        function A1_ope_check() {
            var checkP = api.getValue("checkP");

            if (checkP == 1) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    // $("#A1_observation1_confirm").hide();
                    $("#A1_operation1_done").css({ "opacity": "1" });
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("P");
            }
        }

        $("#A1_operation1_next").click(function () {
            $("#A1_observation1_link").click();
            unregisterListener();
        });


        //觀察
        $("#A1_observation1_link").click(function () {
            api.unregisterObjectUpdateListener("P");

            api.setTrace("P", false);

            api.evalCommand("RunClickScript(btnver)");
            api.evalCommand("RunClickScript(showbtn)");
            api.evalCommand("SetValue(x', 2)");
        });

        $("#A1_observation1_confirm").click(function () {

            var A1x = -2;

            let A1_obs1_ans1 = 2;
            let A1_obs1_ans2 = 1;
            let A1_obs1_ans3 = 3;
            let A1_obs1_ans4 = 3;
            let A1_obs1_ans5 = 3;


            var A1x_input = parseInt($("#A1_observation1_inputtext1").val(), 10);

            if (A1x_input + A1x > 0) {
                var A1_obs1_ans6 = 1;
            } else if (A1x_input + A1x < 0) {
                var A1_obs1_ans6 = 3;
            } else {
                var A1_obs1_ans6 = 2;
            }
            // console.log(A1x_input);
            // console.log(A1x_input+A1x);
            // console.log(A1_obs1_ans6);

            let A1input1 = $('input[name=A1_observation1_input1]:checked').val();
            let A1input2 = $('input[name=A1_observation1_input2]:checked').val();
            let A1input3 = $('input[name=A1_observation1_input3]:checked').val();
            let A1input4 = $('input[name=A1_observation1_input4]:checked').val();
            let A1input5 = $('input[name=A1_observation1_input5]:checked').val();
            let A1input6 = $('input[name=A1_observation1_input6]:checked').val();


            var checktable =
                (A1_obs1_ans1 == A1input1 &&
                    A1_obs1_ans2 == A1input2 &&
                    A1_obs1_ans3 == A1input3 &&
                    A1_obs1_ans4 == A1input4 &&
                    A1_obs1_ans5 == A1input5 &&
                    A1_obs1_ans6 == A1input6);
            // alert(checktable);


            if (isNaN(A1x_input)) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '在輸入框中輸入數字吧' })
            } else if (checktable) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({ "opacity": "1" });
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A1_observation1_next").click(function () {
            $("#A1_observation2_link").click();
            unregisterListener();
        });


        //觀察2
        $("#A1_observation2_link").click(function () {
            api.unregisterObjectUpdateListener("P");

            api.setTrace("P", false);

            api.evalCommand("RunClickScript(btnhor)");
            api.evalCommand("RunClickScript(showbtn)");
            api.evalCommand("SetValue(y', 1)");
        });

        $("#A1_observation2_confirm").click(function () {
            var A1y = 1;

            let A1_obs2_ans1 = 2;
            let A1_obs2_ans2 = 1;
            let A1_obs2_ans3 = 1;
            let A1_obs2_ans4 = 3;
            let A1_obs2_ans5 = 3;


            var A1y_input = parseInt($("#A1_observation2_inputtext1").val(), 10);

            // console.log("A1y" + A1y);
            // console.log("A1x" + A1x);

            if (A1y_input + A1y > 0) {
                var A1_obs2_ans6 = 1;
            } else if (A1y_input + A1y < 0) {
                var A1_obs2_ans6 = 3;
            } else {
                var A1_obs2_ans6 = 2;
            }

            let A1input1 = $('input[name=A1_observation2_input1]:checked').val();
            let A1input2 = $('input[name=A1_observation2_input2]:checked').val();
            let A1input3 = $('input[name=A1_observation2_input3]:checked').val();
            let A1input4 = $('input[name=A1_observation2_input4]:checked').val();
            let A1input5 = $('input[name=A1_observation2_input5]:checked').val();
            let A1input6 = $('input[name=A1_observation2_input6]:checked').val();


            var checktable =
                (A1_obs2_ans1 == A1input1 &&
                    A1_obs2_ans2 == A1input2 &&
                    A1_obs2_ans3 == A1input3 &&
                    A1_obs2_ans4 == A1input4 &&
                    A1_obs2_ans5 == A1input5 &&
                    A1_obs2_ans6 == A1input6);
            // alert(checktable);


            if (isNaN(A1y_input)) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '在輸入框中輸入數字吧' })
            } else if (checktable) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({ "opacity": "1" });
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A1_observation2_next").click(function () {
            $("#A1_investigation1_link").click();
            unregisterListener();
        });

        //探索
        $("#A1_investigation1_link").click(function () {
            api.unregisterObjectUpdateListener("P");

            api.setValue("btn", true)
            api.setTrace("P", false)
        });

        $("#A1_investigation1_confirm").click(function () {
            var A1_inv1_input1 =
                !$("#A1_investigation1_input1_option1").prop("checked") &&
                !$("#A1_investigation1_input1_option2").prop("checked") &&
                !$("#A1_investigation1_input1_option3").prop("checked") &&
                $("#A1_investigation1_input1_option4").prop("checked");//正確答案
            var A1_inv1_input2 = $("#A1_investigation1_input2_option1").prop("checked"); //1
            var A1_inv1_input3 =
                $("#A1_investigation1_input3_option1").prop("checked") &&//正確答案
                $("#A1_investigation1_input3_option2").prop("checked") &&//正確答案
                !$("#A1_investigation1_input3_option3").prop("checked") &&
                !$("#A1_investigation1_input3_option4").prop("checked");
            var A1_inv1_input4 = $("#A1_investigation1_input4_option1").prop("checked");//正確答案
            var A1_inv1_input5 = $("#A1_investigation1_input5_option1").prop("checked");//正確答案
            var A1_inv1_input6 = $("#A1_investigation1_input6_option1").prop("checked");//正確答案
            var A1_inv1_inputtext = $("#A1_investigation1_textarea1").val() != "";


            console.log(A1_inv1_input1);
            console.log(A1_inv1_input2);
            console.log(A1_inv1_input3);
            console.log(A1_inv1_input4);
            console.log(A1_inv1_input5);
            console.log(A1_inv1_input6);


            if (A1_inv1_input1 && A1_inv1_input2 && A1_inv1_input3 && A1_inv1_input4 &&
                A1_inv1_input5 && A1_inv1_input6 && A1_inv1_inputtext) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({ "opacity": "1" });
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({ "opacity": "1" });
                })
            } else if (!A1_inv1_input1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第一題不對喔! 請仔細想想後再回答' })
            } else if (!A1_inv1_input2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第二題不對喔! 請仔細想想後再回答' })
            } else if (!A1_inv1_input3) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第三題不對喔! 請仔細想想後再回答' })
            } else if (!A1_inv1_input4) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第四題不對喔! 請仔細想想後再回答' })
            } else if (!A1_inv1_inputtext) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請留下你的想法吧' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A1_investigation1_next").click(function () {
            $("#A1_investigation2_link").click();
            unregisterListener();
        });

        //探索2
        $("#A1_investigation2_link").click(function () {
            api.unregisterObjectUpdateListener("P");

            api.setValue("btn", true)
            api.setTrace("P", false)
        });

        $("#A1_investigation2_confirm").click(function () {
            var A1_inv2_input1 =
                !$("#A1_investigation2_input1_option1").prop("checked") &&
                !$("#A1_investigation2_input1_option2").prop("checked") &&
                $("#A1_investigation2_input1_option3").prop("checked") &&//正確答案
                !$("#A1_investigation2_input1_option4").prop("checked");

            var A1_inv2_input2 =
                !$("#A1_investigation2_input2_option1").prop("checked") &&
                !$("#A1_investigation2_input2_option2").prop("checked") &&
                $("#A1_investigation2_input2_option3").prop("checked") &&//正確答案
                !$("#A1_investigation2_input2_option4").prop("checked") &&
                !$("#A1_investigation2_input2_option5").prop("checked");

            if (A1_inv2_input1 &&
                A1_inv2_input2) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({ "opacity": "1" });
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({ "opacity": "1" });
                })
            } else if (!A1_inv2_input1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第一題不對喔! 請仔細想想後再回答' })
            } else if (!A1_inv2_input2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第二題不對喔! 請仔細想想後再回答' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A1_investigation2_next").click(function () {
            showA2();
            unregisterListener();
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

function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("G-10-2(2) 活動2：二元一次不等式與半平面");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_G_10_2_2_A2;
    params.appletOnLoad = function (api) {

        function unregisterListener() {
            api.unregisterObjectUpdateListener("P");
            api.unregisterObjectUpdateListener("textL");

        }

        //老師說這邊不要了--又可以在這邊囉~
        function funcgetL1() {
            let getL = api.getValueString("textL").slice(2, -2);
            let getLorigin = api.getValueString("textL");
            var A2a = api.getValue("a");
            var A2b = api.getValue("b");
            var A2c = api.getValue("c");
            if (A2a < 0) { A2a = "(" + A2a + ")" };
            if (A2b < 0) { A2b = "(" + A2b + ")" };
            if (A2c < 0) { A2c = "(" + A2c + ")" };

            // console.log(getL);
            $("#A2_operation1_getL1_1").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_operation1_getL1_2").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_operation1_getL1_3").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_operation1_getL1_4").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_investigation1_label1").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_investigation1_label2").html(katex.renderToString(getL, { throwOnError: false }));
            $("#A2_investigation1_label3").html(katex.renderToString(getLorigin, { throwOnError: false }));
        }

        function A2_ope_check() {
            var checkP = api.getValue("checkP");
            if (checkP == 1) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    // $("#A1_observ1_confirm").hide();
                    $("#A2_operation1_done").css({ "opacity": "1" });
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("P");
            }
        }

        unregisterListener();
        api.registerObjectUpdateListener("P", A2_ope_check);
        api.registerObjectUpdateListener("textL", funcgetL1);

        //操作
        $("#A2_operation1_link").click(function () {
            unregisterListener();

            var A2ope_alreadyfin = $("#A2_operation1_img").css("opacity");

            if (A2ope_alreadyfin) {
                api.registerObjectUpdateListener("P", A2_ope_check);
            }

            api.registerObjectUpdateListener("textL", funcgetL1);
            api.evalCommand("RunClickScript(setL)");
            api.setVisible("setL", true);

        });



        $("#A2_operation1_next").click(function () {
            $("#A2_observation1_link").click();
            unregisterListener();
        });




        //觀察1
        $("#A2_observation1_link").click(function () {
            // api.unregisterObjectUpdateListener("textL");
            // api.registerObjectUpdateListener("textL", funcsetL);

            // setL();
            api.setValue("a", 2);
            api.setValue("b", 1);
            api.setValue("c", -3),

                api.setVisible("setL", false);
            api.evalCommand("RunClickScript(cls)");
        });


        $("#A2_observation1_confirm").click(function () {
            let A2a = 2;
            let A2b = 1;
            let A2c = -3;

            let x1 = A2c;
            let x2 = A2a + A2b + A2c;
            let x3 = 3 * A2a + 2 * A2b + A2c;
            let x4 = 2 * A2a - 5 * A2b + A2c;
            let x5 = -5 * A2a + A2b + A2c;

            if (x1 > 0) { var ans1 = 1; } else if (x1 < 0) { var ans1 = 3; } else { var ans1 = 2; }
            if (x2 > 0) { var ans2 = 1; } else if (x2 < 0) { var ans2 = 3; } else { var ans2 = 2; }
            if (x3 > 0) { var ans3 = 1; } else if (x3 < 0) { var ans3 = 3; } else { var ans3 = 2; }
            if (x4 > 0) { var ans4 = 1; } else if (x4 < 0) { var ans4 = 3; } else { var ans4 = 2; }
            if (x5 > 0) { var ans5 = 1; } else if (x5 < 0) { var ans5 = 3; } else { var ans5 = 2; }

            let A2input1 = $('input[name=A2_observation1_input1]:checked').val();
            let A2input2 = $('input[name=A2_observation1_input2]:checked').val();
            let A2input3 = $('input[name=A2_observation1_input3]:checked').val();
            let A2input4 = $('input[name=A2_observation1_input4]:checked').val();
            let A2input5 = $('input[name=A2_observation1_input5]:checked').val();
            // let A2input1_2 = $('input[name=A2_observation1_input1_2]:checked').val();
            // let A2input2_2 = $('input[name=A2_observation1_input2_2]:checked').val();
            // let A2input3_2 = $('input[name=A2_observation1_input3_2]:checked').val();
            // let A2input4_2 = $('input[name=A2_observation1_input4_2]:checked').val();
            // let A2input5_2 = $('input[name=A2_observation1_input5_2]:checked').val();

            if (ans1 == A2input1 &&
                ans2 == A2input2 &&
                ans3 == A2input3 &&
                ans4 == A2input4 &&
                ans5 == A2input5) {
                // alert(恭喜你可以休息10秒);
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({ "opacity": "1" });
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({ "opacity": "1" });

                    // api.unregisterObjectUpdateListener("textL");
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A2_observation1_next").click(function () {
            $("#A2_observation2_link").click();

        });

        //觀察2
        $("#A2_observation2_link").click(function () {
            // api.unregisterObjectUpdateListener("textL");
            // api.registerObjectUpdateListener("textL", funcsetL);

            // setL();
            api.setValue("a", 1);
            api.setValue("b", -3);
            api.setValue("c", 5),

                api.setVisible("setL", false);
            api.evalCommand("RunClickScript(cls)");
        });


        $("#A2_observation2_confirm").click(function () {
            let A2a = 1;
            let A2b = -3;
            let A2c = 5;

            let x1 = A2c;
            let x2 = 2 * A2a + 5 * A2b + A2c;
            let x3 = A2a + 2 * A2b + A2c;
            let x4 = -3 * A2a - 3 * A2b + A2c;
            let x5 = -5 * A2a + A2b + A2c;

            if (x1 > 0) { var ans1 = 1; } else if (x1 < 0) { var ans1 = 3; } else { var ans1 = 2; }
            if (x2 > 0) { var ans2 = 1; } else if (x2 < 0) { var ans2 = 3; } else { var ans2 = 2; }
            if (x3 > 0) { var ans3 = 1; } else if (x3 < 0) { var ans3 = 3; } else { var ans3 = 2; }
            if (x4 > 0) { var ans4 = 1; } else if (x4 < 0) { var ans4 = 3; } else { var ans4 = 2; }
            if (x5 > 0) { var ans5 = 1; } else if (x5 < 0) { var ans5 = 3; } else { var ans5 = 2; }

            let A2input1 = $('input[name=A2_observation2_input1]:checked').val();
            let A2input2 = $('input[name=A2_observation2_input2]:checked').val();
            let A2input3 = $('input[name=A2_observation2_input3]:checked').val();
            let A2input4 = $('input[name=A2_observation2_input4]:checked').val();
            let A2input5 = $('input[name=A2_observation2_input5]:checked').val();
            // let A2input1_2 = $('input[name=A2_observation2_input1_2]:checked').val();
            // let A2input2_2 = $('input[name=A2_observation2_input2_2]:checked').val();
            // let A2input3_2 = $('input[name=A2_observation2_input3_2]:checked').val();
            // let A2input4_2 = $('input[name=A2_observation2_input4_2]:checked').val();
            // let A2input5_2 = $('input[name=A2_observation2_input5_2]:checked').val();

            if (ans1 == A2input1 &&
                ans2 == A2input2 &&
                ans3 == A2input3 &&
                ans4 == A2input4 &&
                ans5 == A2input5) {
                // alert(恭喜你可以休息10秒);
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
                    $("#A2_observation2_confirm").hide();
                    $("#A2_observation2_done").css({ "opacity": "1" });
                    $("#A2_observation2_next").removeClass("d-none");
                    $("#A2_observation2_link img").css({ "opacity": "1" });

                    // api.unregisterObjectUpdateListener("textL");
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A2_observation2_next").click(function () {
            $("#A2_investigation1_link").click();

        });

        //探索
        $("#A2_investigation1_link").click(function () {
            unregisterListener();

            api.setVisible("setL", false);
            // api.evalCommand("RunClickScript(setL)");
            api.evalCommand("RunClickScript(cls)");

            api.setValue("a", 1);
            api.setValue("b", 3);
            api.setValue("c", 2);

            // api.registerObjectUpdateListener("textL", funcgetL1);

        });

        $("#A2_investigation1_confirm").click(function () {
            let A2_inv1_input1 = $('input[name=A2_investigation1_input1]:checked').val();
            let A2_inv1_input2 = $('input[name=A2_investigation1_input2]:checked').val();
            let A2_inv1_input3 = $('input[name=A2_investigation1_input3]:checked').val();
            let A2_inv1_input4 = $('input[name=A2_investigation1_input4]:checked').val();
            let A2_inv1_input5 = $("#A2_invsetigation1_textarea1").val();
            // console.log(A2_inv1_input5);

            let A2a = 1;
            let A2b = 3;
            let A2c = 2;

            // var A2_x2 = 3 * A2a + A2b + A2c;
            // var A2_x3 = -4 * A2a + A2b + A2c;
            // if (A2_x2 > 0) { var A2_ans2 = 1 } else if (A2_x2 < 0) { var A2_ans2 = 3 } else { var A2_ans2 = 0 }
            // if (A2_x3 > 0) { var A2_ans3 = 1 } else if (A2_x3 < 0) { var A2_ans3 = 3 } else { var A2_ans3 = 0 }
            // if (A2_ans2 == A2_ans3) { var A2_ans4 = 1 } else if (A2_ans2 != A2_ans3) { var A2_ans4 = 2 }

            if (A2_inv1_input1 != 1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '觀察一下你在坐標平面上看到幾個區塊呢？' })
            } else if (A2_inv1_input2 != 1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '把坐標代入算算看吧' })
            } else if (A2_inv1_input3 != 3) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '把坐標代入算算看吧' })
            } else if (A2_inv1_input4 != 2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '兩個坐標代入後得到的正負值是相同呢？' })
            } else if (A2_inv1_input5 == "") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下你的想法吧！' })
            } else if (A2_inv1_input1 == 1 &&
                A2_inv1_input2 == 1 &&
                A2_inv1_input3 == 3 &&
                A2_inv1_input4 == 2 &&
                A2_inv1_input5 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({ "opacity": "1" });
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }

        });

        $("#A2_investigation1_next").click(function () {
            // api.unregisterObjectUpdateListener("textL");
            showA3();
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

function showA3() {
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("G-10-2(2) 活動三：平面上點與直線的位置關係");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_2_2_A3;
    params.appletOnLoad = function (api) {


        function unregisterListener() {
            api.unregisterObjectUpdateListener("select");
            api.unregisterObjectUpdateListener("textL");
        }

        function A3_setL() {
            var A3_L = api.getValueString("textL").slice(4, -2);
            var A3_Q = api.getValueString("Q");
            // var A3_P1 = api.getValue("P1");
            // var A3_P2 = api.getValue("P2");
            // console.log(A3_Q)
            $("#A3_operation1_label1").html(katex.renderToString(A3_L, { throwOnError: false }))
            $("#A3_operation1_label2").html(katex.renderToString(A3_L, { throwOnError: false }))
            $("#A3_operation1_label3").html(katex.renderToString(A3_L, { throwOnError: false }))
            // $("#A3_observation1_label1").html(katex.renderToString(A3_L, { throwOnError: false }));
            // $("#A3_observation1_label2").html(katex.renderToString(A3_L, { throwOnError: false }));
            // $("#A3_observation1_label3").html(katex.renderToString(A3_L, { throwOnError: false }));
            // $("#A3_observation1_label4").html(katex.renderToString(A3_L, { throwOnError: false }));
        }

        function A3_ope_check() {
            var check_ope = api.getValue("checkP");
            if (check_ope == true) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    // $("#A1_observation1_confirm").hide();
                    $("#A3_operation1_done").css({ "opacity": "1" });
                    $("#A3_operation1_next").removeClass("d-none");
                    $("#A3_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterObjectUpdateListener("select");
            }
            var selecttimes = api.getValue("seln");
            console.log(selecttimes);
            $("#A3_operation1_label_selecttimes").html(katex.renderToString(selecttimes, { throwOnError: false }));
            //沒搞懂的地方這裡有問題
            

        }
        //操作
        unregisterListener();
        api.registerObjectUpdateListener("select", A3_ope_check);
        api.registerObjectUpdateListener("textL", A3_setL);
        api.evalCommand("RunClickScript(setL)")

        $("#A3_operation1_link").click(function () {
            unregisterListener();
            api.registerObjectUpdateListener("select", A3_ope_check);
            api.registerObjectUpdateListener("textL", A3_setL);
            api.evalCommand("RunClickScript(setL)")
        });

        $("#A3_operation1_next").click(function () {
            $("#A3_observation1_link").click();
        });



        //觀察1
        $("#A3_observation1_link").click(function () {
            unregisterListener();
            // api.registerObjectUpdateListener("setL", A3_setL);
            api.evalCommand("RunClickSrcipt(setL)");

            //觀察直線數值
            api.setValue("a", 2);
            api.setValue("b", 3);
            api.setValue("c", -2);
            api.setValue("x0", 1);
            api.setValue("y0", 0);

            api.evalCommand("SetValue(select,Q)")

            api.evalCommand("RunClickScript(cls)")
            api.setVisible("setL", false);
            A3_setL();
        });

        $("#A3_observation1_confirm").click(function () {

            let A3_input1 = $("#A3_observation1_input1").val();
            let A3_input2 = $("#A3_observation1_input2_option1").prop("checked");
            let A3_input3 = $("#A3_observation1_input3").val();
            let A3_input4 = $("#A3_observation1_input4_option1").prop("checked");
            let A3_input5 = $("#A3_observation1_input5_option2").prop("checked");
            let A3_input6 = $("#A3_observation1_input6_option1").prop("checked");

            console.log(A3_input1);
            console.log(A3_input2);
            console.log(A3_input3);
            console.log(A3_input4);
            console.log(A3_input5);
            console.log(A3_input6);

            if (A3_input1 != "(1,1)") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P1點坐標紀錄有錯喔!仔細觀察一下' })
            } else if (!A3_input2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P1點代入後的數值是多少再算一次看看' })
            } else if (A3_input3 != "(1,2)") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P2點坐標紀錄有錯喔!仔細觀察一下' })
            } else if (!A3_input4) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P2點代入後的數值是多少再算一次看看' })
            } else if (!A3_input5) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '上下拖動P點觀察看看數值的變化' })
            } else if (!A3_input6) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '上下拖動P點觀察看看數值的變化' })
            } else if (
                A3_input1 == "(1,1)" &&
                A3_input2 &&
                A3_input3 == "(1,2)" &&
                A3_input4 &&
                A3_input5 &&
                A3_input6) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
                    $("#A3_observation1_confirm").hide();
                    $("#A3_observation1_done").css({ "opacity": "1" });
                    $("#A3_observation1_next").removeClass("d-none");
                    $("#A3_observation1_link img").css({ "opacity": "1" });

                    // api.unregisterObjectUpdateListener("setL");
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A3_observation1_next").click(function () {
            $("#A3_observation2_link").click();
            // api.unregisterObjectUpdateListener("textL");
        });

        //觀察2
        $("#A3_observation2_link").click(function () {
            unregisterListener();
            // api.registerObjectUpdateListener("setL", A3_setL);
            api.evalCommand("RunClickSrcipt(setL)");

            //觀察直線數值
            api.setValue("a", 1);
            api.setValue("b", -2);
            api.setValue("c", -2);
            api.setValue("x0", -2);
            api.setValue("y0", -2);

            api.evalCommand("SetValue(select,Q)")

            api.evalCommand("RunClickScript(cls)")
            api.setVisible("setL", false);
            A3_setL();
        });

        $("#A3_observation2_confirm").click(function () {

            let A3_input1_2 = $("#A3_observation2_input1").val();
            let A3_input2_2 = $("#A3_observation2_input2_option3").prop("checked");
            let A3_input3_2 = $("#A3_observation2_input3").val();
            let A3_input4_2 = $("#A3_observation2_input4_option3").prop("checked");
            let A3_input5_2 = $("#A3_observation2_input5_option3").prop("checked");
            let A3_input6_2 = $("#A3_observation2_input6_option3").prop("checked");

            // console.log(A3_input1);
            // console.log(A3_input2);
            // console.log(A3_input3);
            // console.log(A3_input4);
            // console.log(A3_input5);
            // console.log(A3_input6);

            if (A3_input1_2 != "(-2,-1)") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P1點坐標紀錄有錯喔!仔細觀察一下' })
            } else if (!A3_input2_2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P1點代入後的數值是多少再算一次看看' })
            } else if (A3_input3_2 != "(-2,0)") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P2點坐標紀錄有錯喔!仔細觀察一下' })
            } else if (!A3_input4_2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P2點代入後的數值是多少再算一次看看' })
            } else if (!A3_input5_2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '上下拖動P點觀察看看數值的變化' })
            } else if (!A3_input6_2) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '上下拖動P點觀察看看數值的變化' })
            } else if (
                A3_input1_2 == "(-2,-1)" &&
                A3_input2_2 &&
                A3_input3_2 == "(-2,0)" &&
                A3_input4_2 &&
                A3_input5_2 &&
                A3_input6_2) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2' }).then((result) => {
                    $("#A3_observation2_confirm").hide();
                    $("#A3_observation2_done").css({ "opacity": "1" });
                    $("#A3_observation2_next").removeClass("d-none");
                    $("#A3_observation2_link img").css({ "opacity": "1" });

                    // api.unregisterObjectUpdateListener("setL");
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A3_observation2_next").click(function () {
            $("#A3_investigation1_link").click();
            // api.unregisterObjectUpdateListener("textL");
        });



        //探索
        $("#A3_investigation1_link").click(function () {
            api.setVisible("setL", true);
        });

        $("#A3_investigation1_confirm").click(function () {
            var A3_inv_input1 = $('input[name=A3_investigation1_input1]:checked').val();
            var A3_inv_input2 = $('input[name=A3_investigation1_input2]:checked').val();
            var A3_inv_input3 = $('input[name=A3_investigation1_input3]:checked').val();
            var A3_inv_input4 = $('input[name=A3_investigation1_input4]:checked').val();
            var A3_inv_input5 = $("#A3_investigaion1_textarea1").val();

            if (A3_inv_input1 != 3) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '第一題答案不對喔! 請仔細觀察後再回答' })
            } else if (A3_inv_input2 != 4) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            } else if (A3_inv_input3 != 1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            } else if (A3_inv_input4 != 1) {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            } else if (A3_inv_input5 == "") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '請寫下你的想法吧' })
            } else if (
                A3_inv_input1 == 3 &&
                A3_inv_input2 == 4 &&
                A3_inv_input3 == 1 &&
                A3_inv_input4 == 1 &&
                A3_inv_input5 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                    $("#A3_investigation1_confirm").hide();
                    $("#A3_investigation1_done").css({ "opacity": "1" });
                    $("#A3_investigation1_next").removeClass("d-none");
                    $("#A3_investigation1_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' });
            }
        });

        $("#A3_investigation1_next").click(function () {
            showA4();
        });

    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A3_operation1").show();
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

function showA4() {
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("G-10-2(2) 活動四：二元一次不等式圖形");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_G_10_2_2_A4;
    params.appletOnLoad = function (api) {


        api.unregisterObjectUpdateListener("ani");
        api.registerObjectUpdateListener("ani", check_A4);
        //操作
        $("#A4_operation1_link").click(function () {
            api.unregisterObjectUpdateListener("ani");
            api.registerObjectUpdateListener("ani", check_A4);


        });

        function check_A4() {
            var check = api.getValue("checkn");
            if (check >= 10) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    $("#A4_operation1_done").css({ "opacity": "1" });
                    $("#A4_operation1_next").removeClass("d-none");
                    $("#A4_operation1_link img").css({ "opacity": "1" });
                })

                api.unregisterObjectUpdateListener("ani");
            }
        }

        $("#A4_operation1_next").click(function () {
            $("#A4_investigation1_link").click();

        });


        //觀察
        function setL_A4() {
            var A4_L = api.getValueString("textL");
            var A4_Lbig = api.getValueString("big");
            var A4_Lsmall = api.getValueString("small");
            // console.log(A4_Lbig);
            $("#A4_observation1_label1").html(katex.renderToString("直線" + A4_L, { throwOnError: false }));
            $("#A4_observation1_input1_option1_label").html(katex.renderToString(A4_Lbig.slice(4), { throwOnError: false }));
            $("#A4_observation1_input1_option2_label").html(katex.renderToString(A4_Lsmall.slice(6), { throwOnError: false }));
        }

        // $("#A4_observation1_link").click(function () {
        //     api.unregisterObjectUpdateListener("textL");
        //     api.registerObjectUpdateListener("textL", setL_A4);

        //     setL_A4();
        // });

        // $("#A4_observation1_confirm").click(function () {
        //     // var A4_P = api.getValueString("P").slice(4);
        //     // var A4_Q = api.getValueString("Q").slice(4);
        //     // console.log(A4_P);
        //     // console.log(A4_Q);
        //     var A4_Qy = numRound(api.getValue("Qy"), 2);
        //     var A4_b = api.getValue("b");
        //     var A4_c = api.getValue("c");
        //     var checkP = api.getValue("check");

        //     // console.log(A4_Qy)

        //     var A4_input = $("#A4_observation1_input1").val();
        //     api.evalCommand("inputQy=" + A4_input);

        //     var A4_input1 = numRound(api.getValue("inputQy"), 2);

        //     var A4_input2 = $("#A4_observation1_input2").val();

        //     // 這裡有問題 HELP!!!

        //     // var A4_ans1 = (A4_input1==-A4_c/A4_b)
        //     console.log(A4_Qy);
        //     console.log(A4_input);
        //     console.log(A4_input1);


        //     if (A4_input2 == "" || A4_input1 == "") {
        //         Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '在學習單上記錄你看到的吧！' })
        //     } else if (A4_Qy != A4_input1) {
        //         Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'Q 點坐標不對喔! 請仔細觀察後再回答' })
        //     } else if (A4_input2 != checkP) {
        //         Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: 'P 點代入L的結果是這樣嗎! 請仔細觀察後再回答' })
        //     } else if (A4_input1 == A4_Qy && A4_input2 == checkP) {
        //         // alert("打起精神!")
        //         Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1' }).then((result) => {
        //             $("#A4_observation1_confirm").hide();
        //             $("#A4_observation1_done").css({ "opacity": "1" });
        //             $("#A4_observation1_next").removeClass("d-none");
        //             $("#A4_observation1_link img").css({ "opacity": "1" });
        //         })
        //         api.unregisterObjectUpdateListener("textL");
        //     } else {
        //         Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
        //     }

        // });

        // $("#A4_observation1_next").click(function () {
        //     $("#A4_investigation1_link").click();

        //     api.unregisterObjectUpdateListener("textL");
        // });

        //探索
        $("#A4_investigation1_link").click(function () {
            api.unregisterObjectUpdateListener("ani");
        });

        $("#A4_investigation1_confirm").click(function () {
            // var A3_inv_input1 = $('input[name=A3_investigation1_input1]:checked').val();
            let A4_inv_input1 = $('input[name=A4_investigation1_input1]:checked').val();
            let A4_inv_input2 = $('input[name=A4_investigation1_input2]:checked').val();
            let A4_inv_input3 = $('input[name=A4_investigation1_input3]:checked').val();
            let A4_inv_input4 = $('input[name=A4_investigation1_input4]:checked').val();
            let A4_inv_input5 = $("#A4_investigation1_input4").val();
            if (A4_inv_input1 == 1 &&
                A4_inv_input2 == 2 &&
                A4_inv_input3 == 1 &&
                A4_inv_input4 == 1 &&
                A4_inv_input5 != "") {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1' }).then((result) => {
                    $("#A4_investigation1_confirm").hide();
                    $("#A4_investigation1_done").css({ "opacity": "1" });
                    $("#A4_investigation1_next").removeClass("d-none");
                    $("#A4_investigation1_link img").css({ "opacity": "1" });
                })
            } else if (A4_inv_input5 == "") {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '留下想法或做法吧' })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A4_investigation1_next").click(function () {
            $("#A4_investigation2_link").click();
        });

        $("#A4_investigation2_link").click(function () {
            api.unregisterObjectUpdateListener("ani");
        });

        $("#A4_investigation2_confirm").click(function () {
            // var A3_inv_input1 = $('input[name=A3_investigation1_input1]:checked').val();
            let A4_inv_input1 = $('input[name=A4_investigation1_input1]:checked').val();
            let A4_inv_input2 = $('input[name=A4_investigation1_input2]:checked').val();

            if (A4_inv_input1 == 1 &&
                A4_inv_input2 == 2 
                ) {
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
                    $("#A4_investigation2_confirm").hide();
                    $("#A4_investigation2_done").css({ "opacity": "1" });
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({ "opacity": "1" });
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        });

        $("#A4_investigation2_next").click(function () {
            Swal.fire({ icon: 'seccess', showConfirmButton: false, timer: 3000, text: '恭喜完成所有實驗活動' })
        });


    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A4_operation1").show();
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}

$(document).ready(function () {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
