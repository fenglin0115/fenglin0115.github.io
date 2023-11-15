params.ggbBase64 = ggb_F_10_3_cover;
params.appletOnLoad = function(api) {

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("F-10-3 活動1：圖解一元一次不等式");
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
    // api.registerObjectClickListener("pic2", prereguisite);
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
    var initA1_operation2 = false;
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-10-3 活動1：圖解一元一次不等式");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_F_10_3_A1;

    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectClickListener("button9");
            api.unregisterObjectUpdateListener("Px");
            // api.unregisterObjectClickListener("button6");
        }
        
        // A1_operation1
        function A1_operation1_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                $("#A1_operation1_done").css({"opacity": "1"});
                $("#A1_operation1_next").removeClass("d-none");
                $("#A1_operation1_link img").css({"opacity": "1"});
            })
        }    
        $("#A1_operation1_link").click(function() {
            removeListener();
            initA1_operation2 = false;
            api.setVisible("button6",true);      
            api.evalCommand("RunClickScript(button6)");
            api.registerObjectClickListener("button9", A1_operation1_check);
        });
        if (!initA1) { 
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });
        
        // A1_observation1
        $("#A1_observation1_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);
            api.setValue("ShowP4", true);
            api.setValue("ShowP5", true);
            api.setVisible("button6",false);
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textf1"); //ans
                var f2 = api.getValueString("Textf2");
                var f3 = api.getValueString("Textf3");
                var f4 = api.getValueString("Textf4");
                $("#A1_observation1_input1_option1").next().html(katex.renderToString(f4, { throwOnError: false })); //value = 1
                $("#A1_observation1_input1_option2").next().html(katex.renderToString(f1, { throwOnError: false })); //value = 2 ->ans
                $("#A1_observation1_input1_option3").next().html(katex.renderToString(f2, { throwOnError: false })); //value = 3
                $("#A1_observation1_input1_option4").next().html(katex.renderToString(f3, { throwOnError: false })); //value = 4
                // Q4
                api.evalCommand('SetValue(TextRoot1, CopyFreeObject("("+round(Element(ListRoots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot2, CopyFreeObject("("+round(Element(ListRoots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot3, CopyFreeObject("("+round(Element(ListRoots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot4, CopyFreeObject("("+round(Element(ListRoots, 4),2)+", 0)"))');
                var root1 = api.getValueString("TextRoot1"); //ans
                var root2 = api.getValueString("TextRoot2"); 
                var root3 = api.getValueString("TextRoot3"); 
                var root4 = api.getValueString("TextRoot4");
                $("#A1_observation1_input4_option1").next().html(katex.renderToString(root2, { throwOnError: false })); 
                $("#A1_observation1_input4_option2").next().html(katex.renderToString(root3, { throwOnError: false })); 
                $("#A1_observation1_input4_option3").next().html(katex.renderToString(root4, { throwOnError: false })); 
                $("#A1_observation1_input4_option4").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                // Q5, Q6
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(fRoots, 1),2)))');
                var froot1 = api.getValue("froot1");
                // var froot1type = api.getObjectType("froot1");
                $("#A1_observation1_question5").html(katex.renderToString("(-\\infty, " + froot1 + ")", { throwOnError: false })); 
                $("#A1_observation1_question6").html(katex.renderToString("(" + froot1 + ", \\infty)", { throwOnError: false })); 
            }
            createOption();
            // api.registerObjectClickListener("button6", createOption);
        });
        function A1_observation1_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkHC_ = (Highestf>0 ? 2 : 1);
            var A1_observation1_input1_usrans = $("input[name=A1_observation1_input1]:checked").val();
            var A1_observation1_input2_usrans = $("input[name=A1_observation1_input2]:checked").val();
            var A1_observation1_input3_usrans = $("input[name=A1_observation1_input3]:checked").val();
            var A1_observation1_input4_usrans1 = $("#A1_observation1_input4_option1").prop("checked");
            var A1_observation1_input4_usrans2 = $("#A1_observation1_input4_option2").prop("checked");
            var A1_observation1_input4_usrans3 = $("#A1_observation1_input4_option3").prop("checked");
            var A1_observation1_input4_usrans4 = $("#A1_observation1_input4_option4").prop("checked");
            var A1_observation1_input5_usrans = $("input[name=A1_observation1_input5]:checked").val();
            var A1_observation1_input6_usrans = $("input[name=A1_observation1_input6]:checked").val();
            var input1_check = (A1_observation1_input1_usrans == 2);
            var input2_check = (A1_observation1_input2_usrans == checkHC);
            var input3_check = (A1_observation1_input3_usrans == checkHC);
            var input4_check = (A1_observation1_input4_usrans1 == false && A1_observation1_input4_usrans2 == false && A1_observation1_input4_usrans3 == false && A1_observation1_input4_usrans4 == true);
            var input5_check = (A1_observation1_input5_usrans == checkHC_);
            var input6_check = (A1_observation1_input6_usrans == checkHC);
            if (input1_check && input2_check && input3_check && input4_check && input5_check && input6_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({"opacity": "1"});
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_observation1_confirm").click(function() {
            A1_observation1_check();
        });
        $("#A1_observation1_next").click(function() {
            $("#A1_operation2_link").click();
        });
        
        // A1_operation2
        function A1_operation2_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                $("#A1_operation2_done").css({"opacity": "1"});
                $("#A1_operation2_next").removeClass("d-none");
                $("#A1_operation2_link img").css({"opacity": "1"});
            })
        }    
        $("#A1_operation2_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            // api.evalCommand("RunClickScript(button6)")      
            if (!initA1_operation2) {
                api.evalCommand("RunClickScript(button17)");
                initA1_operation2 = true;
            };
            api.registerObjectClickListener("button9", A1_operation2_check); 
        });
        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });
        
        // A1_obserbation2
        $("#A1_observation2_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);
            api.setValue("ShowP4", true);
            api.setValue("ShowP5", true);
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            function createOption() {
                // Q3
                api.evalCommand('SetValue(TextRoot1, CopyFreeObject("("+round(Element(ListRoots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot2, CopyFreeObject("("+round(Element(ListRoots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot3, CopyFreeObject("("+round(Element(ListRoots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(TextRoot4, CopyFreeObject("("+round(Element(ListRoots, 4),2)+", 0)"))');
                var root1 = api.getValueString("TextRoot1"); //ans
                var root2 = api.getValueString("TextRoot2"); 
                var root3 = api.getValueString("TextRoot3"); 
                var root4 = api.getValueString("TextRoot4");
                $("#A1_observation2_input3_option1").next().html(katex.renderToString(root3, { throwOnError: false })); 
                $("#A1_observation2_input3_option2").next().html(katex.renderToString(root4, { throwOnError: false })); 
                $("#A1_observation2_input3_option3").next().html(katex.renderToString(root1, { throwOnError: false })); // ans 
                $("#A1_observation2_input3_option4").next().html(katex.renderToString(root2, { throwOnError: false }));
                // Q4, Q5
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(fRoots, 1),2)))');
                var froot1 = api.getValue("froot1");
                // var froot1type = api.getObjectType("froot1");
                $("#A1_observation2_question4").html(katex.renderToString("(-\\infty, " + froot1 + ")", { throwOnError: false })); 
                $("#A1_observation2_question5").html(katex.renderToString("(" + froot1 + ", \\infty)", { throwOnError: false })); 
            }
            createOption();
            });
        function A1_observation2_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkHC_ = (Highestf>0 ? 2 : 1);
            var A1_observation2_input1_usrans = $("input[name=A1_observation2_input1]:checked").val();
            var A1_observation2_input2_usrans = $("input[name=A1_observation2_input2]:checked").val();
            var A1_observation2_input3_usrans1 = $("#A1_observation2_input3_option1").prop("checked");
            var A1_observation2_input3_usrans2 = $("#A1_observation2_input3_option2").prop("checked");
            var A1_observation2_input3_usrans3 = $("#A1_observation2_input3_option3").prop("checked");
            var A1_observation2_input3_usrans4 = $("#A1_observation2_input3_option4").prop("checked");
            var A1_observation2_input4_usrans = $("input[name=A1_observation2_input4]:checked").val();
            var A1_observation2_input5_usrans = $("input[name=A1_observation2_input5]:checked").val();
            var input1_check = (A1_observation2_input1_usrans == checkHC);
            var input2_check = (A1_observation2_input2_usrans == checkHC);
            var input3_check = (A1_observation2_input3_usrans1 == false && A1_observation2_input3_usrans2 == false && A1_observation2_input3_usrans3 == true && A1_observation2_input3_usrans4 == false);
            var input4_check = (A1_observation2_input4_usrans == checkHC_);
            var input5_check = (A1_observation2_input5_usrans == checkHC);
            if (input1_check && input2_check && input3_check && input4_check && input5_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({"opacity": "1"});
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_observation2_confirm").click(function() {
            A1_observation2_check();
        });
        $("#A1_observation2_next").click(function() {
            $("#A1_operation3_link").click();
        });

        // A1_operation3
        function A1_operation3_check () {
            $("#A1_operation3_confirm").removeClass("d-none");    
        }
        $("#A1_operation3_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",false);
            api.evalCommand("RunClickScript(P6BT)");
            api.registerObjectUpdateListener("Px", A1_operation3_check);      
        });
        $("#A1_operation3_confirm").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 3'}).then((result) => {
                $("#A1_operation3_confirm").hide();
                $("#A1_operation3_done").css({"opacity": "1"});
                $("#A1_operation3_next").removeClass("d-none");
                $("#A1_operation3_link img").css({"opacity": "1"});
            })
        });
        $("#A1_operation3_next").click(function() {
            $("#A1_investigation1_link").click();
        });

        // A1_investigation1
        function A1_investigation1_check() {    
            var A1_investigation1_input1_usrans = $("input[name=A1_investigation1_input1]:checked").val();
            var A1_investigation1_input2_usrans = $("input[name=A1_investigation1_input2]:checked").val();
            var input1_check = (A1_investigation1_input1_usrans == 1);
            var input2_check = (A1_investigation1_input2_usrans == 2);
            if (input1_check && input2_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_investigation1_confirm").click(function() {
            A1_investigation1_check();
        });
        $("#A1_investigation1_next").click(function() {
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
    var initA2_operation2 = false;
    var initA2_operation4 = false;
    var initA2_operation7 = false;
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-10-3 活動2：圖解高次多項不等式（相異一次因式）");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_F_10_3_A2;

    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectClickListener("button9");
            api.unregisterObjectClickListener("button2");
            api.unregisterObjectUpdateListener("Px");
        }

        // A2_operation1
        function A2_operation1_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                $("#A2_operation1_done").css({"opacity": "1"});
                $("#A2_operation1_next").removeClass("d-none");
                $("#A2_operation1_link img").css({"opacity": "1"});
            })
        }
        $("#A2_operation1_link").click(function() {
            removeListener();
            initA2_operation2 = false;
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",true);
            api.setVisible("button1",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button6)");
            api.registerObjectClickListener("button9", A2_operation1_check);   
        });
        if (!initA2) { 
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);
            // api.setValue("ShowP4", true);
            // api.setValue("ShowP5", true);
            api.setVisible("button6",false);
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfd21"); //ans
                var f2 = api.getValueString("Textfd22");
                var f3 = api.getValueString("Textfd23");
                var f4 = api.getValueString("Textfd24");
                $("#A2_observation1_input1_option1").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                $("#A2_observation1_input1_option2").next().html(katex.renderToString(f2, { throwOnError: false })); //
                $("#A2_observation1_input1_option3").next().html(katex.renderToString(f3, { throwOnError: false })); //
                $("#A2_observation1_input1_option4").next().html(katex.renderToString(f4, { throwOnError: false })); //
                // Q4
                api.evalCommand('SetValue(Textfd2Root1, CopyFreeObject("("+round(Element(Listfd2Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root2, CopyFreeObject("("+round(Element(Listfd2Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root3, CopyFreeObject("("+round(Element(Listfd2Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root4, CopyFreeObject("("+round(Element(Listfd2Roots, 4),2)+", 0)"))');
                var root1 = api.getValueString("Textfd2Root1"); //ans
                var root2 = api.getValueString("Textfd2Root2"); //ans 
                var root3 = api.getValueString("Textfd2Root3"); 
                var root4 = api.getValueString("Textfd2Root4");
                $("#A2_observation1_input4_option1").next().html(katex.renderToString(root4, { throwOnError: false })); //
                $("#A2_observation1_input4_option2").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A2_observation1_input4_option3").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A2_observation1_input4_option4").next().html(katex.renderToString(root3, { throwOnError: false })); //
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                $("#A2_observation1_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation1_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation1_question5_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false })); 
            }
            createOption();
            // api.registerObjectClickListener("button6", createOption);
        });
        function A2_observation1_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var A2_observation1_input1_usrans = $("input[name=A2_observation1_input1]:checked").val();
            var A2_observation1_input2_usrans = $("input[name=A2_observation1_input2]:checked").val();
            var A2_observation1_input3_usrans = $("input[name=A2_observation1_input3]:checked").val();
            var A2_observation1_input4_usrans1 = $("#A2_observation1_input4_option1").prop("checked");
            var A2_observation1_input4_usrans2 = $("#A2_observation1_input4_option2").prop("checked");
            var A2_observation1_input4_usrans3 = $("#A2_observation1_input4_option3").prop("checked");
            var A2_observation1_input4_usrans4 = $("#A2_observation1_input4_option4").prop("checked");
            var A2_observation1_input5_1_usrans = $("input[name=A2_observation1_input5_1]:checked").val();
            var A2_observation1_input5_2_usrans = $("input[name=A2_observation1_input5_2]:checked").val();
            var A2_observation1_input5_3_usrans = $("input[name=A2_observation1_input5_3]:checked").val();
            var input1_check = (A2_observation1_input1_usrans == 1);
            var input2_check = (A2_observation1_input2_usrans == checkHC);
            var input3_check = (A2_observation1_input3_usrans == checkHC);
            var input4_check = (A2_observation1_input4_usrans1 == false && A2_observation1_input4_usrans2 == true && A2_observation1_input4_usrans3 == true && A2_observation1_input4_usrans4 == false);
            var input5_1_check = (A2_observation1_input5_1_usrans == checkPN1);
            var input5_2_check = (A2_observation1_input5_2_usrans == checkPN2);
            var input5_3_check = (A2_observation1_input5_3_usrans == checkPN3);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A2_observation1_confirm").hide();
                    $("#A2_observation1_done").css({"opacity": "1"});
                    $("#A2_observation1_next").removeClass("d-none");
                    $("#A2_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation1_confirm").click(function() {
            A2_observation1_check();
        });
        $("#A2_observation1_next").click(function() {
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        function A2_operation2_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                $("#A2_operation2_done").css({"opacity": "1"});
                $("#A2_operation2_next").removeClass("d-none");
                $("#A2_operation2_link img").css({"opacity": "1"});
            })
        }    
        $("#A2_operation2_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button1",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA2_operation2) {
                api.evalCommand("RunClickScript(button17)");
                initA2_operation2 = true;
            };
            api.registerObjectClickListener("button9", A2_operation2_check); 
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        $("#A2_observation2_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfd2Root1, CopyFreeObject("("+round(Element(Listfd2Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root2, CopyFreeObject("("+round(Element(Listfd2Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root3, CopyFreeObject("("+round(Element(Listfd2Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd2Root4, CopyFreeObject("("+round(Element(Listfd2Roots, 4),2)+", 0)"))');
                var root1 = api.getValueString("Textfd2Root1"); //ans
                var root2 = api.getValueString("Textfd2Root2"); //ans
                var root3 = api.getValueString("Textfd2Root3"); 
                var root4 = api.getValueString("Textfd2Root4");
                $("#A2_observation2_input3_option1").next().html(katex.renderToString(root3, { throwOnError: false })); //
                $("#A2_observation2_input3_option2").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A2_observation2_input3_option3").next().html(katex.renderToString(root4, { throwOnError: false })); //  
                $("#A2_observation2_input3_option4").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                $("#A2_observation2_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation2_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation2_question4_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false })); 
            }
            createOption();
            });
        function A2_observation2_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var A2_observation2_input1_usrans = $("input[name=A2_observation2_input1]:checked").val();
            var A2_observation2_input2_usrans = $("input[name=A2_observation2_input2]:checked").val();
            var A2_observation2_input3_usrans1 = $("#A2_observation2_input3_option1").prop("checked");
            var A2_observation2_input3_usrans2 = $("#A2_observation2_input3_option2").prop("checked");
            var A2_observation2_input3_usrans3 = $("#A2_observation2_input3_option3").prop("checked");
            var A2_observation2_input3_usrans4 = $("#A2_observation2_input3_option4").prop("checked");
            var A2_observation2_input4_1_usrans = $("input[name=A2_observation2_input4_1]:checked").val();
            var A2_observation2_input4_2_usrans = $("input[name=A2_observation2_input4_2]:checked").val();
            var A2_observation2_input4_3_usrans = $("input[name=A2_observation2_input4_3]:checked").val();
            var input1_check = (A2_observation2_input1_usrans == checkHC);
            var input2_check = (A2_observation2_input2_usrans == checkHC);
            var input3_check = (A2_observation2_input3_usrans1 == false && A2_observation2_input3_usrans2 == true && A2_observation2_input3_usrans3 == false && A2_observation2_input3_usrans4 == true);
            var input4_1_check = (A2_observation2_input4_1_usrans == checkPN1);
            var input4_2_check = (A2_observation2_input4_2_usrans == checkPN2);
            var input4_3_check = (A2_observation2_input4_3_usrans == checkPN3);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A2_observation2_confirm").hide();
                    $("#A2_observation2_done").css({"opacity": "1"});
                    $("#A2_observation2_next").removeClass("d-none");
                    $("#A2_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation2_confirm").click(function() {
            A2_observation2_check();
        });
        $("#A2_observation2_next").click(function() {
            $("#A2_operation3_link").click();
        });

        // A2_operation3
        function A2_operation3_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 3'}).then((result)=> {
                $("#A2_operation3_done").css({"opacity": "1"});
                $("#A2_operation3_next").removeClass("d-none");
                $("#A2_operation3_link img").css({"opacity": "1"});
            })
        }
        $("#A2_operation3_link").click(function() {
            removeListener();
            initA2_operation4 = false;
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",false);
            api.setVisible("button1",true);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button1)");
            api.registerObjectClickListener("button9", A2_operation3_check);   
        });
        $("#A2_operation3_next").click(function() {
            $("#A2_observation3_link").click();
        });    
        
        // A2_observation3
        $("#A2_observation3_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button6",false);
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfd31"); //ans
                var f2 = api.getValueString("Textfd32");
                var f3 = api.getValueString("Textfd33");
                var f4 = api.getValueString("Textfd34");
                $("#A2_observation3_input1_option1").next().html(katex.renderToString(f3, { throwOnError: false })); // 
                $("#A2_observation3_input1_option2").next().html(katex.renderToString(f4, { throwOnError: false })); //
                $("#A2_observation3_input1_option3").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                $("#A2_observation3_input1_option4").next().html(katex.renderToString(f2, { throwOnError: false })); //
                // Q4
                api.evalCommand('SetValue(Textfd3Root1, CopyFreeObject("("+round(Element(Listfd3Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root2, CopyFreeObject("("+round(Element(Listfd3Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root3, CopyFreeObject("("+round(Element(Listfd3Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root4, CopyFreeObject("("+round(Element(Listfd3Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root5, CopyFreeObject("("+round(Element(Listfd3Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root6, CopyFreeObject("("+round(Element(Listfd3Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfd3Root1"); //ans
                var root2 = api.getValueString("Textfd3Root2"); //ans 
                var root3 = api.getValueString("Textfd3Root3"); //ans
                var root4 = api.getValueString("Textfd3Root4");
                var root5 = api.getValueString("Textfd3Root5");
                var root6 = api.getValueString("Textfd3Root6");
                $("#A2_observation3_input4_option1").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A2_observation3_input4_option2").next().html(katex.renderToString(root4, { throwOnError: false })); // 
                $("#A2_observation3_input4_option3").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A2_observation3_input4_option4").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A2_observation3_input4_option5").next().html(katex.renderToString(root6, { throwOnError: false })); //
                $("#A2_observation3_input4_option6").next().html(katex.renderToString(root3, { throwOnError: false })); // ans
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A2_observation3_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation3_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation3_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                $("#A2_observation3_question5_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
            }
            createOption();
        });
        function A2_observation3_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var A2_observation3_input1_usrans = $("input[name=A2_observation3_input1]:checked").val();
            var A2_observation3_input2_usrans = $("input[name=A2_observation3_input2]:checked").val();
            var A2_observation3_input3_usrans = $("input[name=A2_observation3_input3]:checked").val();
            var A2_observation3_input4_usrans1 = $("#A2_observation3_input4_option1").prop("checked");
            var A2_observation3_input4_usrans2 = $("#A2_observation3_input4_option2").prop("checked");
            var A2_observation3_input4_usrans3 = $("#A2_observation3_input4_option3").prop("checked");
            var A2_observation3_input4_usrans4 = $("#A2_observation3_input4_option4").prop("checked");
            var A2_observation3_input4_usrans5 = $("#A2_observation3_input4_option5").prop("checked");
            var A2_observation3_input4_usrans6 = $("#A2_observation3_input4_option6").prop("checked");
            var A2_observation3_input5_1_usrans = $("input[name=A2_observation3_input5_1]:checked").val();
            var A2_observation3_input5_2_usrans = $("input[name=A2_observation3_input5_2]:checked").val();
            var A2_observation3_input5_3_usrans = $("input[name=A2_observation3_input5_3]:checked").val();
            var A2_observation3_input5_4_usrans = $("input[name=A2_observation3_input5_4]:checked").val();
            var input1_check = (A2_observation3_input1_usrans == 3);
            var input2_check = (A2_observation3_input2_usrans == checkHC);
            var input3_check = (A2_observation3_input3_usrans == checkHC);
            var input4_check = (
                A2_observation3_input4_usrans1 == true && 
                A2_observation3_input4_usrans2 == false && 
                A2_observation3_input4_usrans3 == false && 
                A2_observation3_input4_usrans4 == true && 
                A2_observation3_input4_usrans5 == false && 
                A2_observation3_input4_usrans6 == true);
            var input5_1_check = (A2_observation3_input5_1_usrans == checkPN1);
            var input5_2_check = (A2_observation3_input5_2_usrans == checkPN2);
            var input5_3_check = (A2_observation3_input5_3_usrans == checkPN3);
            var input5_4_check = (A2_observation3_input5_4_usrans == checkPN4);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A2_observation3_confirm").hide();
                    $("#A2_observation3_done").css({"opacity": "1"});
                    $("#A2_observation3_next").removeClass("d-none");
                    $("#A2_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation3_confirm").click(function() {
            A2_observation3_check();
        });
        $("#A2_observation3_next").click(function() {
            $("#A2_operation4_link").click();
        });
        
        // A2_operation4
        $("#A2_operation4_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button1",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA2_operation4) {
                api.evalCommand("RunClickScript(button17)");
                initA2_operation4 = true;
            };
            api.registerObjectClickListener("button9", A2_operation4_check);   
        });
        function A2_operation4_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 4'}).then((result)=> {
                $("#A2_operation4_done").css({"opacity": "1"});
                $("#A2_operation4_next").removeClass("d-none");
                $("#A2_operation4_link img").css({"opacity": "1"});
            })
        };
        $("#A2_operation4_next").click(function() {
            $("#A2_observation4_link").click();
        });

        // A2_observation4
        $("#A2_observation4_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfd3Root1, CopyFreeObject("("+round(Element(Listfd3Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root2, CopyFreeObject("("+round(Element(Listfd3Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root3, CopyFreeObject("("+round(Element(Listfd3Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root4, CopyFreeObject("("+round(Element(Listfd3Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root5, CopyFreeObject("("+round(Element(Listfd3Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd3Root6, CopyFreeObject("("+round(Element(Listfd3Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfd3Root1"); //ans
                var root2 = api.getValueString("Textfd3Root2"); //ans
                var root3 = api.getValueString("Textfd3Root3"); //ans
                var root4 = api.getValueString("Textfd3Root4");
                var root5 = api.getValueString("Textfd3Root5");
                var root6 = api.getValueString("Textfd3Root6");
                $("#A2_observation4_input3_option1").next().html(katex.renderToString(root4, { throwOnError: false })); //
                $("#A2_observation4_input3_option2").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A2_observation4_input3_option3").next().html(katex.renderToString(root2, { throwOnError: false })); // ans 
                $("#A2_observation4_input3_option4").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A2_observation4_input3_option5").next().html(katex.renderToString(root3, { throwOnError: false })); // ans
                $("#A2_observation4_input3_option6").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A2_observation4_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation4_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation4_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                $("#A2_observation4_question4_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
            }
            createOption();
            });
        function A2_observation4_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var A2_observation4_input1_usrans = $("input[name=A2_observation4_input1]:checked").val();
            var A2_observation4_input2_usrans = $("input[name=A2_observation4_input2]:checked").val();
            var A2_observation4_input3_usrans1 = $("#A2_observation4_input3_option1").prop("checked");
            var A2_observation4_input3_usrans2 = $("#A2_observation4_input3_option2").prop("checked");
            var A2_observation4_input3_usrans3 = $("#A2_observation4_input3_option3").prop("checked");
            var A2_observation4_input3_usrans4 = $("#A2_observation4_input3_option4").prop("checked");
            var A2_observation4_input3_usrans5 = $("#A2_observation4_input3_option5").prop("checked");
            var A2_observation4_input3_usrans6 = $("#A2_observation4_input3_option6").prop("checked");
            var A2_observation4_input4_1_usrans = $("input[name=A2_observation4_input4_1]:checked").val();
            var A2_observation4_input4_2_usrans = $("input[name=A2_observation4_input4_2]:checked").val();
            var A2_observation4_input4_3_usrans = $("input[name=A2_observation4_input4_3]:checked").val();
            var A2_observation4_input4_4_usrans = $("input[name=A2_observation4_input4_4]:checked").val();
            var input1_check = (A2_observation4_input1_usrans == checkHC);
            var input2_check = (A2_observation4_input2_usrans == checkHC);
            var input3_check = (
                A2_observation4_input3_usrans1 == false && 
                A2_observation4_input3_usrans2 == true && 
                A2_observation4_input3_usrans3 == true && 
                A2_observation4_input3_usrans4 == false && 
                A2_observation4_input3_usrans5 == true && 
                A2_observation4_input3_usrans6 == false);
            var input4_1_check = (A2_observation4_input4_1_usrans == checkPN1);
            var input4_2_check = (A2_observation4_input4_2_usrans == checkPN2);
            var input4_3_check = (A2_observation4_input4_3_usrans == checkPN3);
            var input4_4_check = (A2_observation4_input4_4_usrans == checkPN4);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A2_observation4_confirm").hide();
                    $("#A2_observation4_done").css({"opacity": "1"});
                    $("#A2_observation4_next").removeClass("d-none");
                    $("#A2_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation4_confirm").click(function() {
            A2_observation4_check();
        });
        $("#A2_observation4_next").click(function() {
            $("#A2_operation5_link").click();
        });

        // A2_operation5
        function A2_operation5_check () {
            $("#A2_operation5_confirm").removeClass("d-none");    
        }
        function A2_operation5_clearCheck() {
            api.setValue("ShowP6", true);
        }
        $("#A2_operation5_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button1",false);
            api.evalCommand("RunClickScript(P6BT)");
            api.registerObjectUpdateListener("Px", A2_operation5_check);
            api.registerObjectClickListener("button2", A2_operation5_clearCheck);
        });
        $("#A2_operation5_confirm").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A2_operation5_confirm").hide();
                $("#A2_operation5_done").css({"opacity": "1"});
                $("#A2_operation5_next").removeClass("d-none");
                $("#A2_operation5_link img").css({"opacity": "1"});
            })
        });
        $("#A2_operation5_next").click(function() {
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        function A2_investigation1_check() {
            var A2_investigation1_input1_usrans1 = $("#A2_investigation1_input1_option1").prop("checked");
            var A2_investigation1_input1_usrans2 = $("#A2_investigation1_input1_option2").prop("checked");
            var A2_investigation1_input1_usrans3 = $("#A2_investigation1_input1_option3").prop("checked");
            var A2_investigation1_input1_usrans4 = $("#A2_investigation1_input1_option4").prop("checked");
            var A2_investigation1_input2_usrans1 = $("#A2_investigation1_input2_option1").prop("checked");
            var A2_investigation1_input2_usrans2 = $("#A2_investigation1_input2_option2").prop("checked");
            var A2_investigation1_input2_usrans3 = $("#A2_investigation1_input2_option3").prop("checked");
            var A2_investigation1_input2_usrans4 = $("#A2_investigation1_input2_option4").prop("checked");
            var input1_check = (
                A2_investigation1_input1_usrans1 == false && 
                A2_investigation1_input1_usrans2 == true && 
                A2_investigation1_input1_usrans3 == false && 
                A2_investigation1_input1_usrans4 == true);
            var input2_check = (
                A2_investigation1_input2_usrans1 == true && 
                A2_investigation1_input2_usrans2 == false && 
                A2_investigation1_input2_usrans3 == true && 
                A2_investigation1_input2_usrans4 == false);
            if (input1_check && input2_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({"opacity": "1"});
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_investigation1_confirm").click(function() {
            A2_investigation1_check();
        });
        $("#A2_investigation1_next").click(function() {
            $("#A2_investigation2_link").click();
        });

        // A2_investigation2
        function A2_investigation2_check() {
            var A2_investigation2_textarea1_usrans = $("#A2_investigation2_textarea1").val();
            if (A2_investigation2_textarea1_usrans != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({"opacity": "1"});
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著寫下自己的想法吧！'})
            }
        }
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
        $("#A2_investigation2_next").click(function() {
            $("#A2_operation6_link").click();
        });

        // A2_operation6
        function A2_operation6_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 6'}).then((result)=> {
                $("#A2_operation6_done").css({"opacity": "1"});
                $("#A2_operation6_next").removeClass("d-none");
                $("#A2_operation6_link img").css({"opacity": "1"});
            })
        }
        $("#A2_operation6_link").click(function() {
            removeListener();
            initA2_operation7 = false;
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",false);
            api.setVisible("button1",false);
            api.setVisible("button11",true);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button11)");
            api.registerObjectClickListener("button9", A2_operation6_check);   
        });
        $("#A2_operation6_next").click(function() {
            $("#A2_observation5_link").click();
        });    

        // A2_observation5
        $("#A2_observation5_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button11",false);
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfd41"); //ans
                var f2 = api.getValueString("Textfd42");
                var f3 = api.getValueString("Textfd43");
                var f4 = api.getValueString("Textfd44");
                $("#A2_observation5_input1_option1").next().html(katex.renderToString(f4, { throwOnError: false })); // 
                $("#A2_observation5_input1_option2").next().html(katex.renderToString(f3, { throwOnError: false })); //
                $("#A2_observation5_input1_option3").next().html(katex.renderToString(f2, { throwOnError: false })); // 
                $("#A2_observation5_input1_option4").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                // Q4
                api.evalCommand('SetValue(Textfd4Root1, CopyFreeObject("("+round(Element(Listfd4Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root2, CopyFreeObject("("+round(Element(Listfd4Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root3, CopyFreeObject("("+round(Element(Listfd4Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root4, CopyFreeObject("("+round(Element(Listfd4Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root5, CopyFreeObject("("+round(Element(Listfd4Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root6, CopyFreeObject("("+round(Element(Listfd4Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfd4Root1"); //ans
                var root2 = api.getValueString("Textfd4Root2"); //ans 
                var root3 = api.getValueString("Textfd4Root3"); //ans
                var root4 = api.getValueString("Textfd4Root4"); //ans
                var root5 = api.getValueString("Textfd4Root5");
                var root6 = api.getValueString("Textfd4Root6");
                $("#A2_observation5_input4_option1").next().html(katex.renderToString(root4, { throwOnError: false })); // ans
                $("#A2_observation5_input4_option2").next().html(katex.renderToString(root3, { throwOnError: false })); // ans
                $("#A2_observation5_input4_option3").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A2_observation5_input4_option4").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A2_observation5_input4_option5").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A2_observation5_input4_option6").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                api.evalCommand('SetValue(froot4, CopyFreeObject(Element(Listfroot, 4)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                var froot4 = api.getValue("froot4");
                $("#A2_observation5_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation5_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation5_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                $("#A2_observation5_question5_c4").html(katex.renderToString(froot3 + "<x<" + froot4, { throwOnError: false })); 
                $("#A2_observation5_question5_c5").html(katex.renderToString("x>" + froot4, { throwOnError: false })); 
            }
            createOption();
        });
        function A2_observation5_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var checkPN5 = api.getListValue("ListfrootPN", 5);            
            var A2_observation5_input1_usrans = $("input[name=A2_observation5_input1]:checked").val();
            var A2_observation5_input2_usrans = $("input[name=A2_observation5_input2]:checked").val();
            var A2_observation5_input3_usrans = $("input[name=A2_observation5_input3]:checked").val();
            var A2_observation5_input4_usrans1 = $("#A2_observation5_input4_option1").prop("checked");
            var A2_observation5_input4_usrans2 = $("#A2_observation5_input4_option2").prop("checked");
            var A2_observation5_input4_usrans3 = $("#A2_observation5_input4_option3").prop("checked");
            var A2_observation5_input4_usrans4 = $("#A2_observation5_input4_option4").prop("checked");
            var A2_observation5_input4_usrans5 = $("#A2_observation5_input4_option5").prop("checked");
            var A2_observation5_input4_usrans6 = $("#A2_observation5_input4_option6").prop("checked");
            var A2_observation5_input5_1_usrans = $("input[name=A2_observation5_input5_1]:checked").val();
            var A2_observation5_input5_2_usrans = $("input[name=A2_observation5_input5_2]:checked").val();
            var A2_observation5_input5_3_usrans = $("input[name=A2_observation5_input5_3]:checked").val();
            var A2_observation5_input5_4_usrans = $("input[name=A2_observation5_input5_4]:checked").val();
            var A2_observation5_input5_5_usrans = $("input[name=A2_observation5_input5_5]:checked").val();
            var input1_check = (A2_observation5_input1_usrans == 4);
            var input2_check = (A2_observation5_input2_usrans == checkHC);
            var input3_check = (A2_observation5_input3_usrans == checkHC);
            var input4_check = (
                A2_observation5_input4_usrans1 == true && 
                A2_observation5_input4_usrans2 == true && 
                A2_observation5_input4_usrans3 == false && 
                A2_observation5_input4_usrans4 == true && 
                A2_observation5_input4_usrans5 == true && 
                A2_observation5_input4_usrans6 == false);
            var input5_1_check = (A2_observation5_input5_1_usrans == checkPN1);
            var input5_2_check = (A2_observation5_input5_2_usrans == checkPN2);
            var input5_3_check = (A2_observation5_input5_3_usrans == checkPN3);
            var input5_4_check = (A2_observation5_input5_4_usrans == checkPN4);
            var input5_5_check = (A2_observation5_input5_5_usrans == checkPN5);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check && input5_5_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 5'}).then((result) => {
                    $("#A2_observation5_confirm").hide();
                    $("#A2_observation5_done").css({"opacity": "1"});
                    $("#A2_observation5_next").removeClass("d-none");
                    $("#A2_observation5_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation5_confirm").click(function() {
            A2_observation5_check();
        });
        $("#A2_observation5_next").click(function() {
            $("#A2_operation7_link").click();
        });

        // A2_operation7
        $("#A2_operation7_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button1",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA2_operation7) {
                api.evalCommand("RunClickScript(button17)");
                initA2_operation7 = true;
            };
            api.registerObjectClickListener("button9", A2_operation7_check);   
        });
        function A2_operation7_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 7'}).then((result)=> {
                $("#A2_operation7_done").css({"opacity": "1"});
                $("#A2_operation7_next").removeClass("d-none");
                $("#A2_operation7_link img").css({"opacity": "1"});
            })
        };
        $("#A2_operation7_next").click(function() {
            $("#A2_observation6_link").click();
        });

        // A2_observation6
        $("#A2_observation6_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            // api.setVisible("button11",false);
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfd4Root1, CopyFreeObject("("+round(Element(Listfd4Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root2, CopyFreeObject("("+round(Element(Listfd4Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root3, CopyFreeObject("("+round(Element(Listfd4Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root4, CopyFreeObject("("+round(Element(Listfd4Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root5, CopyFreeObject("("+round(Element(Listfd4Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfd4Root6, CopyFreeObject("("+round(Element(Listfd4Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfd4Root1"); //ans
                var root2 = api.getValueString("Textfd4Root2"); //ans
                var root3 = api.getValueString("Textfd4Root3"); //ans
                var root4 = api.getValueString("Textfd4Root4"); //ans
                var root5 = api.getValueString("Textfd4Root5");
                var root6 = api.getValueString("Textfd4Root6");
                $("#A2_observation6_input3_option1").next().html(katex.renderToString(root3, { throwOnError: false })); // ans
                $("#A2_observation6_input3_option2").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A2_observation6_input3_option3").next().html(katex.renderToString(root5, { throwOnError: false })); //  
                $("#A2_observation6_input3_option4").next().html(katex.renderToString(root4, { throwOnError: false })); // ans
                $("#A2_observation6_input3_option5").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A2_observation6_input3_option6").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                api.evalCommand('SetValue(froot4, CopyFreeObject(round(Element(Listfroot, 4),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                var froot4 = api.getValue("froot4");
                $("#A2_observation6_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A2_observation6_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                $("#A2_observation6_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                $("#A2_observation6_question4_c4").html(katex.renderToString(froot3 + "<x<" + froot4, { throwOnError: false })); 
                $("#A2_observation6_question4_c5").html(katex.renderToString("x>" + froot4, { throwOnError: false })); 
            }
            createOption();
            });
        function A2_observation6_check() {
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var checkPN5 = api.getListValue("ListfrootPN", 5); 
            var A2_observation6_input1_usrans = $("input[name=A2_observation6_input1]:checked").val();
            var A2_observation6_input2_usrans = $("input[name=A2_observation6_input2]:checked").val();
            var A2_observation6_input3_usrans1 = $("#A2_observation6_input3_option1").prop("checked");
            var A2_observation6_input3_usrans2 = $("#A2_observation6_input3_option2").prop("checked");
            var A2_observation6_input3_usrans3 = $("#A2_observation6_input3_option3").prop("checked");
            var A2_observation6_input3_usrans4 = $("#A2_observation6_input3_option4").prop("checked");
            var A2_observation6_input3_usrans5 = $("#A2_observation6_input3_option5").prop("checked");
            var A2_observation6_input3_usrans6 = $("#A2_observation6_input3_option6").prop("checked");
            var A2_observation6_input4_1_usrans = $("input[name=A2_observation6_input4_1]:checked").val();
            var A2_observation6_input4_2_usrans = $("input[name=A2_observation6_input4_2]:checked").val();
            var A2_observation6_input4_3_usrans = $("input[name=A2_observation6_input4_3]:checked").val();
            var A2_observation6_input4_4_usrans = $("input[name=A2_observation6_input4_4]:checked").val();
            var A2_observation6_input4_5_usrans = $("input[name=A2_observation6_input4_5]:checked").val();
            var input1_check = (A2_observation6_input1_usrans == checkHC);
            var input2_check = (A2_observation6_input2_usrans == checkHC);
            var input3_check = (
                A2_observation6_input3_usrans1 == true && 
                A2_observation6_input3_usrans2 == true && 
                A2_observation6_input3_usrans3 == false && 
                A2_observation6_input3_usrans4 == true && 
                A2_observation6_input3_usrans5 == false && 
                A2_observation6_input3_usrans6 == true);
            var input4_1_check = (A2_observation6_input4_1_usrans == checkPN1);
            var input4_2_check = (A2_observation6_input4_2_usrans == checkPN2);
            var input4_3_check = (A2_observation6_input4_3_usrans == checkPN3);
            var input4_4_check = (A2_observation6_input4_4_usrans == checkPN4);
            var input4_5_check = (A2_observation6_input4_5_usrans == checkPN5);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check && input4_5_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 6'}).then((result) => {
                    $("#A2_observation6_confirm").hide();
                    $("#A2_observation6_done").css({"opacity": "1"});
                    $("#A2_observation6_next").removeClass("d-none");
                    $("#A2_observation6_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_observation6_confirm").click(function() {
            A2_observation6_check();
        });
        $("#A2_observation6_next").click(function() {
            $("#A2_operation8_link").click();
        });

        // A2_operation8
        function A2_operation8_check () {
            $("#A2_operation8_confirm").removeClass("d-none");    
        }
        function A2_operation8_clearCheck() {
            api.setValue("ShowP6", true);
        }
        $("#A2_operation8_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button11",false);
            api.evalCommand("RunClickScript(P6BT)");
            api.registerObjectUpdateListener("Px", A2_operation8_check);
            api.registerObjectClickListener("button2", A2_operation8_clearCheck);

        });
        $("#A2_operation8_confirm").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 8'}).then((result) => {
                $("#A2_operation8_confirm").hide();
                $("#A2_operation8_done").css({"opacity": "1"});
                $("#A2_operation8_next").removeClass("d-none");
                $("#A2_operation8_link img").css({"opacity": "1"});
            })
        });
        $("#A2_operation8_next").click(function() {
            $("#A2_investigation3_link").click();
        });

        // A2_investigation3
        function A2_investigation3_check() {
            var A2_investigation3_textarea1_usrans = $("#A2_investigation3_textarea1").val();
            if (A2_investigation3_textarea1_usrans != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A2_investigation3_confirm").hide();
                    $("#A2_investigation3_done").css({"opacity": "1"});
                    $("#A2_investigation3_next").removeClass("d-none");
                    $("#A2_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著寫下自己的想法吧！'})
            }
        }
        $("#A2_investigation3_confirm").click(function() {
            A2_investigation3_check();
        });
        $("#A2_investigation3_next").click(function() {
            showA3();
        });

        // 要解決不同次方跳轉問題
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
    var initA3 = false;
    var initA3_operation2 = false;
    var initA3_operation4 = false;
    showLoading();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("F-10-3 活動3：圖解高次多項不等式（有偶重根）");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_10_3_A3;
    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectClickListener("button9");
            api.unregisterObjectUpdateListener("Px");
        }

        // A3_operation1
        function A3_operation1_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                $("#A3_operation1_done").css({"opacity": "1"});
                $("#A3_operation1_next").removeClass("d-none");
                $("#A3_operation1_link img").css({"opacity": "1"});
            })
        }
        $("#A3_operation1_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",true);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button6)");
            api.registerObjectClickListener("button9", A3_operation1_check);
        });
        if (!initA3) { 
            $("#A3_operation1_link").click();
            initA3 = true;
        };
        $("#A3_operation1_next").click(function() {
            $("#A3_observation1_link").click();
        });

        // A3_observation1
        $("#A3_observation1_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button6",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfr21"); //ans
                var f2 = api.getValueString("Textfr22");
                var f3 = api.getValueString("Textfr23");
                var f4 = api.getValueString("Textfr24");
                $("#A3_observation1_input1_option1").next().html(katex.renderToString(f4, { throwOnError: false })); // 
                $("#A3_observation1_input1_option2").next().html(katex.renderToString(f3, { throwOnError: false })); //
                $("#A3_observation1_input1_option3").next().html(katex.renderToString(f2, { throwOnError: false })); // 
                $("#A3_observation1_input1_option4").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                // Q4
                api.evalCommand('SetValue(Textfr2Root1, CopyFreeObject("("+round(Element(Listfr2Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root2, CopyFreeObject("("+round(Element(Listfr2Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root3, CopyFreeObject("("+round(Element(Listfr2Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root4, CopyFreeObject("("+round(Element(Listfr2Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root5, CopyFreeObject("("+round(Element(Listfr2Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root6, CopyFreeObject("("+round(Element(Listfr2Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr2Root1"); //ans
                var root2 = api.getValueString("Textfr2Root2"); //ans 
                var root3 = api.getValueString("Textfr2Root3"); //ans or not
                var root4 = api.getValueString("Textfr2Root4");
                var root5 = api.getValueString("Textfr2Root5");
                var root6 = api.getValueString("Textfr2Root6");
                $("#A3_observation1_input4_option1").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A3_observation1_input4_option2").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A3_observation1_input4_option3").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A3_observation1_input4_option4").next().html(katex.renderToString(root4, { throwOnError: false })); // 
                $("#A3_observation1_input4_option5").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A3_observation1_input4_option6").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A3_observation1_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A3_observation1_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                
                if (Nrootf==2) {
                    $("#A3_observation1_question5_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A3_observation1_question5_c4").hide();
                    $("#A3_observation1_question5_c4_options").hide();
                };
                if (Nrootf==3) {
                    $("#A3_observation1_question5_c4").show();
                    $("#A3_observation1_question5_c4_options").show();
                    $("#A3_observation1_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false }));
                    $("#A3_observation1_question5_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false }));
                }    
            }
            createOption();
        });
        function A3_observation1_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var A3_observation1_input1_usrans = $("input[name=A3_observation1_input1]:checked").val();
            var A3_observation1_input2_usrans = $("input[name=A3_observation1_input2]:checked").val();
            var A3_observation1_input3_usrans = $("input[name=A3_observation1_input3]:checked").val();
            var A3_observation1_input4_usrans1 = $("#A3_observation1_input4_option1").prop("checked");
            var A3_observation1_input4_usrans2 = $("#A3_observation1_input4_option2").prop("checked");
            var A3_observation1_input4_usrans3 = $("#A3_observation1_input4_option3").prop("checked");
            var A3_observation1_input4_usrans4 = $("#A3_observation1_input4_option4").prop("checked");
            var A3_observation1_input4_usrans5 = $("#A3_observation1_input4_option5").prop("checked");
            var A3_observation1_input4_usrans6 = $("#A3_observation1_input4_option6").prop("checked");
            var A3_observation1_input5_1_usrans = $("input[name=A3_observation1_input5_1]:checked").val();
            var A3_observation1_input5_2_usrans = $("input[name=A3_observation1_input5_2]:checked").val();
            var A3_observation1_input5_3_usrans = $("input[name=A3_observation1_input5_3]:checked").val();
            var A3_observation1_input5_4_usrans = $("input[name=A3_observation1_input5_4]:checked").val();
            var input1_check = (A3_observation1_input1_usrans == 4);
            var input2_check = (A3_observation1_input2_usrans == checkHC);
            var input3_check = (A3_observation1_input3_usrans == checkHC);
            var input4_check = (
                A3_observation1_input4_usrans1 == (Nrootf==3 ? true : false) && 
                A3_observation1_input4_usrans2 == true && 
                A3_observation1_input4_usrans3 == false && 
                A3_observation1_input4_usrans4 == false && 
                A3_observation1_input4_usrans5 == false && 
                A3_observation1_input4_usrans6 == true);
            var input5_1_check = (A3_observation1_input5_1_usrans == checkPN1);
            var input5_2_check = (A3_observation1_input5_2_usrans == checkPN2);
            var input5_3_check = (A3_observation1_input5_3_usrans == checkPN3);
            var input5_4_check = (Nrootf==3 ? (A3_observation1_input5_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A3_observation1_confirm").hide();
                    $("#A3_observation1_done").css({"opacity": "1"});
                    $("#A3_observation1_next").removeClass("d-none");
                    $("#A3_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_observation1_confirm").click(function() {
            A3_observation1_check();
        });
        $("#A3_observation1_next").click(function() {
            $("#A3_operation2_link").click();
        });

        // A3_operation2
        $("#A3_operation2_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA3_operation2) {
                api.evalCommand("RunClickScript(button17)");
                initA3_operation2 = true;
            };
            api.registerObjectClickListener("button9", A3_operation2_check);
        });        
        function A3_operation2_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                $("#A3_operation2_done").css({"opacity": "1"});
                $("#A3_operation2_next").removeClass("d-none");
                $("#A3_operation2_link img").css({"opacity": "1"});
            })
        };
        $("#A3_operation2_next").click(function() {
            $("#A3_observation2_link").click();
        });

        // A3_observation2
        $("#A3_observation2_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfr2Root1, CopyFreeObject("("+round(Element(Listfr2Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root2, CopyFreeObject("("+round(Element(Listfr2Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root3, CopyFreeObject("("+round(Element(Listfr2Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root4, CopyFreeObject("("+round(Element(Listfr2Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root5, CopyFreeObject("("+round(Element(Listfr2Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr2Root6, CopyFreeObject("("+round(Element(Listfr2Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr2Root1"); //ans
                var root2 = api.getValueString("Textfr2Root2"); //ans
                var root3 = api.getValueString("Textfr2Root3"); //ans or not
                var root4 = api.getValueString("Textfr2Root4");
                var root5 = api.getValueString("Textfr2Root5");
                var root6 = api.getValueString("Textfr2Root6");
                $("#A3_observation2_input3_option1").next().html(katex.renderToString(root4, { throwOnError: false })); //
                $("#A3_observation2_input3_option2").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A3_observation2_input3_option3").next().html(katex.renderToString(root2, { throwOnError: false })); // ans 
                $("#A3_observation2_input3_option4").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A3_observation2_input3_option5").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A3_observation2_input3_option6").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A3_observation2_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A3_observation2_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false }));
                if (Nrootf==2) {
                    $("#A3_observation2_question4_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A3_observation2_question4_c4").hide();
                    $("#A3_observation2_question4_c4_options").hide();
                } 
                if (Nrootf==3) {
                    $("#A3_observation2_question4_c4").show();
                    $("#A3_observation2_question4_c4_options").show();
                    $("#A3_observation2_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                    $("#A3_observation2_question4_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
                }
            }
            createOption();
            });
        function A3_observation2_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var A3_observation2_input1_usrans = $("input[name=A3_observation2_input1]:checked").val();
            var A3_observation2_input2_usrans = $("input[name=A3_observation2_input2]:checked").val();
            var A3_observation2_input3_usrans1 = $("#A3_observation2_input3_option1").prop("checked");
            var A3_observation2_input3_usrans2 = $("#A3_observation2_input3_option2").prop("checked");
            var A3_observation2_input3_usrans3 = $("#A3_observation2_input3_option3").prop("checked");
            var A3_observation2_input3_usrans4 = $("#A3_observation2_input3_option4").prop("checked");
            var A3_observation2_input3_usrans5 = $("#A3_observation2_input3_option5").prop("checked");
            var A3_observation2_input3_usrans6 = $("#A3_observation2_input3_option6").prop("checked");
            var A3_observation2_input4_1_usrans = $("input[name=A3_observation2_input4_1]:checked").val();
            var A3_observation2_input4_2_usrans = $("input[name=A3_observation2_input4_2]:checked").val();
            var A3_observation2_input4_3_usrans = $("input[name=A3_observation2_input4_3]:checked").val();
            var A3_observation2_input4_4_usrans = $("input[name=A3_observation2_input4_4]:checked").val();
            var input1_check = (A3_observation2_input1_usrans == checkHC);
            var input2_check = (A3_observation2_input2_usrans == checkHC);
            var input3_check = (
                A3_observation2_input3_usrans1 == false && 
                A3_observation2_input3_usrans2 == false && 
                A3_observation2_input3_usrans3 == true && 
                A3_observation2_input3_usrans4 == (Nrootf==3 ? true : false) && 
                A3_observation2_input3_usrans5 == true && 
                A3_observation2_input3_usrans6 == false);
            var input4_1_check = (A3_observation2_input4_1_usrans == checkPN1);
            var input4_2_check = (A3_observation2_input4_2_usrans == checkPN2);
            var input4_3_check = (A3_observation2_input4_3_usrans == checkPN3);
            var input4_4_check = (Nrootf==3 ? (A3_observation2_input4_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A3_observation2_confirm").hide();
                    $("#A3_observation2_done").css({"opacity": "1"});
                    $("#A3_observation2_next").removeClass("d-none");
                    $("#A3_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_observation2_confirm").click(function() {
            A3_observation2_check();
        });
        $("#A3_observation2_next").click(function() {
            $("#A3_operation3_link").click();
        });

        // A3_operation3
        function A3_operation3_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 3'}).then((result)=> {
                $("#A3_operation3_done").css({"opacity": "1"});
                $("#A3_operation3_next").removeClass("d-none");
                $("#A3_operation3_link img").css({"opacity": "1"});
            })
        }
        $("#A3_operation3_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",false);
            api.setVisible("button11",true);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button11)");
            api.registerObjectClickListener("button9", A3_operation3_check);
        });
        $("#A3_operation3_next").click(function() {
            $("#A3_observation3_link").click();
        });

        // A3_observation3
        $("#A3_observation3_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button11",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfr41"); //ans
                var f2 = api.getValueString("Textfr42");
                var f3 = api.getValueString("Textfr43");
                var f4 = api.getValueString("Textfr44");
                $("#A3_observation3_input1_option1").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                $("#A3_observation3_input1_option2").next().html(katex.renderToString(f3, { throwOnError: false })); //
                $("#A3_observation3_input1_option3").next().html(katex.renderToString(f4, { throwOnError: false })); // 
                $("#A3_observation3_input1_option4").next().html(katex.renderToString(f2, { throwOnError: false })); // 
                // Q4
                api.evalCommand('SetValue(Textfr4Root1, CopyFreeObject("("+round(Element(Listfr4Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root2, CopyFreeObject("("+round(Element(Listfr4Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root3, CopyFreeObject("("+round(Element(Listfr4Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root4, CopyFreeObject("("+round(Element(Listfr4Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root5, CopyFreeObject("("+round(Element(Listfr4Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root6, CopyFreeObject("("+round(Element(Listfr4Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr4Root1"); //ans
                var root2 = api.getValueString("Textfr4Root2"); //ans 
                var root3 = api.getValueString("Textfr4Root3"); //ans or not
                var root4 = api.getValueString("Textfr4Root4");
                var root5 = api.getValueString("Textfr4Root5");
                var root6 = api.getValueString("Textfr4Root6");
                $("#A3_observation3_input4_option1").next().html(katex.renderToString(root4, { throwOnError: false })); // 
                $("#A3_observation3_input4_option2").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A3_observation3_input4_option3").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A3_observation3_input4_option4").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A3_observation3_input4_option5").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A3_observation3_input4_option6").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A3_observation3_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A3_observation3_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                
                if (Nrootf==2) {
                    $("#A3_observation3_question5_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A3_observation3_question5_c4").hide();
                    $("#A3_observation3_question5_c4_options").hide();
                };
                if (Nrootf==3) {
                    $("#A3_observation3_question5_c4").show();
                    $("#A3_observation3_question5_c4_options").show();
                    $("#A3_observation3_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false }));
                    $("#A3_observation3_question5_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false }));
                }    
            }
            createOption();
        });
        function A3_observation3_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var A3_observation3_input1_usrans = $("input[name=A3_observation3_input1]:checked").val();
            var A3_observation3_input2_usrans = $("input[name=A3_observation3_input2]:checked").val();
            var A3_observation3_input3_usrans = $("input[name=A3_observation3_input3]:checked").val();
            var A3_observation3_input4_usrans1 = $("#A3_observation3_input4_option1").prop("checked");
            var A3_observation3_input4_usrans2 = $("#A3_observation3_input4_option2").prop("checked");
            var A3_observation3_input4_usrans3 = $("#A3_observation3_input4_option3").prop("checked");
            var A3_observation3_input4_usrans4 = $("#A3_observation3_input4_option4").prop("checked");
            var A3_observation3_input4_usrans5 = $("#A3_observation3_input4_option5").prop("checked");
            var A3_observation3_input4_usrans6 = $("#A3_observation3_input4_option6").prop("checked");
            var A3_observation3_input5_1_usrans = $("input[name=A3_observation3_input5_1]:checked").val();
            var A3_observation3_input5_2_usrans = $("input[name=A3_observation3_input5_2]:checked").val();
            var A3_observation3_input5_3_usrans = $("input[name=A3_observation3_input5_3]:checked").val();
            var A3_observation3_input5_4_usrans = $("input[name=A3_observation3_input5_4]:checked").val();
            var input1_check = (A3_observation3_input1_usrans == 1);
            var input2_check = (A3_observation3_input2_usrans == checkHC);
            var input3_check = (A3_observation3_input3_usrans == checkHC);
            var input4_check = (
                A3_observation3_input4_usrans1 == false && 
                A3_observation3_input4_usrans2 == true && 
                A3_observation3_input4_usrans3 == (Nrootf==3 ? true : false) && 
                A3_observation3_input4_usrans4 == true && 
                A3_observation3_input4_usrans5 == false && 
                A3_observation3_input4_usrans6 == false);
            var input5_1_check = (A3_observation3_input5_1_usrans == checkPN1);
            var input5_2_check = (A3_observation3_input5_2_usrans == checkPN2);
            var input5_3_check = (A3_observation3_input5_3_usrans == checkPN3);
            var input5_4_check = (Nrootf==3 ? (A3_observation3_input5_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A3_observation3_confirm").hide();
                    $("#A3_observation3_done").css({"opacity": "1"});
                    $("#A3_observation3_next").removeClass("d-none");
                    $("#A3_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_observation3_confirm").click(function() {
            A3_observation3_check();
        });
        $("#A3_observation3_next").click(function() {
            $("#A3_operation4_link").click();
        });

        // A3_operation4
        $("#A3_operation4_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA3_operation4) {
                api.evalCommand("RunClickScript(button17)");
                initA3_operation4 = true;
            };
            api.registerObjectClickListener("button9", A3_operation4_check);
        });        
        function A3_operation4_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 4'}).then((result)=> {
                $("#A3_operation4_done").css({"opacity": "1"});
                $("#A3_operation4_next").removeClass("d-none");
                $("#A3_operation4_link img").css({"opacity": "1"});
            })
        };
        $("#A3_operation4_next").click(function() {
            $("#A3_observation4_link").click();
        });

        // A3_observation4
        $("#A3_observation4_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button11",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfr4Root1, CopyFreeObject("("+round(Element(Listfr4Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root2, CopyFreeObject("("+round(Element(Listfr4Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root3, CopyFreeObject("("+round(Element(Listfr4Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root4, CopyFreeObject("("+round(Element(Listfr4Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root5, CopyFreeObject("("+round(Element(Listfr4Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr4Root6, CopyFreeObject("("+round(Element(Listfr4Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr4Root1"); //ans
                var root2 = api.getValueString("Textfr4Root2"); //ans
                var root3 = api.getValueString("Textfr4Root3"); //ans or not
                var root4 = api.getValueString("Textfr4Root4");
                var root5 = api.getValueString("Textfr4Root5");
                var root6 = api.getValueString("Textfr4Root6");
                $("#A3_observation4_input3_option1").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A3_observation4_input3_option2").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A3_observation4_input3_option3").next().html(katex.renderToString(root4, { throwOnError: false })); //  
                $("#A3_observation4_input3_option4").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A3_observation4_input3_option5").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A3_observation4_input3_option6").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A3_observation4_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A3_observation4_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false }));
                if (Nrootf==2) {
                    $("#A3_observation4_question4_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A3_observation4_question4_c4").hide();
                    $("#A3_observation4_question4_c4_options").hide();
                } 
                if (Nrootf==3) {
                    $("#A3_observation4_question4_c4").show();
                    $("#A3_observation4_question4_c4_options").show();
                    $("#A3_observation4_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                    $("#A3_observation4_question4_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
                }
            }
            createOption();
            });
        function A3_observation4_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var A3_observation4_input1_usrans = $("input[name=A3_observation4_input1]:checked").val();
            var A3_observation4_input2_usrans = $("input[name=A3_observation4_input2]:checked").val();
            var A3_observation4_input3_usrans1 = $("#A3_observation4_input3_option1").prop("checked");
            var A3_observation4_input3_usrans2 = $("#A3_observation4_input3_option2").prop("checked");
            var A3_observation4_input3_usrans3 = $("#A3_observation4_input3_option3").prop("checked");
            var A3_observation4_input3_usrans4 = $("#A3_observation4_input3_option4").prop("checked");
            var A3_observation4_input3_usrans5 = $("#A3_observation4_input3_option5").prop("checked");
            var A3_observation4_input3_usrans6 = $("#A3_observation4_input3_option6").prop("checked");
            var A3_observation4_input4_1_usrans = $("input[name=A3_observation4_input4_1]:checked").val();
            var A3_observation4_input4_2_usrans = $("input[name=A3_observation4_input4_2]:checked").val();
            var A3_observation4_input4_3_usrans = $("input[name=A3_observation4_input4_3]:checked").val();
            var A3_observation4_input4_4_usrans = $("input[name=A3_observation4_input4_4]:checked").val();
            var input1_check = (A3_observation4_input1_usrans == checkHC);
            var input2_check = (A3_observation4_input2_usrans == checkHC);
            var input3_check = (
                A3_observation4_input3_usrans1 == true && 
                A3_observation4_input3_usrans2 == false && 
                A3_observation4_input3_usrans3 == false && 
                A3_observation4_input3_usrans4 == false && 
                A3_observation4_input3_usrans5 == (Nrootf==3 ? true : false) && 
                A3_observation4_input3_usrans6 == true);
            var input4_1_check = (A3_observation4_input4_1_usrans == checkPN1);
            var input4_2_check = (A3_observation4_input4_2_usrans == checkPN2);
            var input4_3_check = (A3_observation4_input4_3_usrans == checkPN3);
            var input4_4_check = (Nrootf==3 ? (A3_observation4_input4_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A3_observation4_confirm").hide();
                    $("#A3_observation4_done").css({"opacity": "1"});
                    $("#A3_observation4_next").removeClass("d-none");
                    $("#A3_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_observation4_confirm").click(function() {
            A3_observation4_check();
        });
        $("#A3_observation4_next").click(function() {
            $("#A3_operation5_link").click();
        });

        // A3_operation5
        function A3_operation5_check () {
            $("#A3_operation5_confirm").removeClass("d-none");    
        }
        function A3_operation5_clearCheck() {
            api.setValue("ShowP6", true);
        }
        $("#A3_operation5_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button11",false);
            api.evalCommand("RunClickScript(P6BT)");
            api.registerObjectUpdateListener("Px", A3_operation5_check);
            api.registerObjectClickListener("button2", A3_operation5_clearCheck);

        });
        $("#A3_operation5_confirm").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A3_operation5_confirm").hide();
                $("#A3_operation5_done").css({"opacity": "1"});
                $("#A3_operation5_next").removeClass("d-none");
                $("#A3_operation5_link img").css({"opacity": "1"});
            })
        });
        $("#A3_operation5_next").click(function() {
            $("#A3_investigation1_link").click();
        });

        // A3_investigation1
        function A3_investigation1_check() {
            var A3_investigation1_input1_usrans1 = $("#A3_investigation1_input1_option1").prop("checked");
            var A3_investigation1_input1_usrans2 = $("#A3_investigation1_input1_option2").prop("checked");
            var A3_investigation1_input1_usrans3 = $("#A3_investigation1_input1_option3").prop("checked");
            var A3_investigation1_input1_usrans4 = $("#A3_investigation1_input1_option4").prop("checked");
            var A3_investigation1_input2_usrans1 = $("#A3_investigation1_input2_option1").prop("checked");
            var A3_investigation1_input2_usrans2 = $("#A3_investigation1_input2_option2").prop("checked");
            var A3_investigation1_input2_usrans3 = $("#A3_investigation1_input2_option3").prop("checked");
            var A3_investigation1_input2_usrans4 = $("#A3_investigation1_input2_option4").prop("checked");
            var input1_check = (
                A3_investigation1_input1_usrans1 == false && 
                A3_investigation1_input1_usrans2 == true && 
                A3_investigation1_input1_usrans3 == true && 
                A3_investigation1_input1_usrans4 == false);
            var input2_check = (
                A3_investigation1_input2_usrans1 == true && 
                A3_investigation1_input2_usrans2 == true && 
                A3_investigation1_input2_usrans3 == false && 
                A3_investigation1_input2_usrans4 == true);
            if (input1_check && input2_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A3_investigation1_confirm").hide();
                    $("#A3_investigation1_done").css({"opacity": "1"});
                    $("#A3_investigation1_next").removeClass("d-none");
                    $("#A3_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_investigation1_confirm").click(function() {
            A3_investigation1_check();
        });
        $("#A3_investigation1_next").click(function() {
            $("#A3_investigation2_link").click();
        });

        // A3_investigation2
        function A3_investigation2_check() {
            var A3_investigation2_textarea1_usrans = $("#A3_investigation2_textarea1").val();
            if (A3_investigation2_textarea1_usrans != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A3_investigation2_confirm").hide();
                    $("#A3_investigation2_done").css({"opacity": "1"});
                    $("#A3_investigation2_next").removeClass("d-none");
                    $("#A3_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著寫下自己的想法吧！'})
            }
        }
        $("#A3_investigation2_confirm").click(function() {
            A3_investigation2_check();
        });
        $("#A3_investigation2_next").click(function() {
            showA4();
        });
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A3_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA4() {
    var initA4 = false;
    var initA4_operation2 = false;
    var initA4_operation4 = false;
    showLoading();
    $("#navbarDropdown").text("活動4");
    $("#navbarDropdown").val("活動4");
    $(".outlines").hide();
    $("#outlineA4").show();
    $(".title > span ").html("F-10-3 活動4：圖解高次多項不等式（有奇重根）");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_F_10_3_A4;
    params.appletOnLoad = function(api) {
        function removeListener() {
            api.unregisterObjectClickListener("button9");
            api.unregisterObjectUpdateListener("Px");
        }

        // A4_operation1
        $("#A4_operation1_link").click(function() {
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",true)
            api.setVisible("button11",false)
            api.setVisible("inputBox1",false)
            api.evalCommand("RunClickScript(button6)")      
        });
        function A4_operation1_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                $("#A4_operation1_done").css({"opacity": "1"});
                $("#A4_operation1_next").removeClass("d-none");
                $("#A4_operation1_link img").css({"opacity": "1"});
            })
        }
        $("#A4_operation1_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",true);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button6)");
            api.registerObjectClickListener("button9", A4_operation1_check);
        });
        if (!initA4) { 
            $("#A4_operation1_link").click();
            initA4 = true;
        };
        $("#A4_operation1_next").click(function() {
            $("#A4_observation1_link").click();
        });

        // A4_observation1
        $("#A4_observation1_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button6",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfr31"); //ans
                var f2 = api.getValueString("Textfr32");
                var f3 = api.getValueString("Textfr33");
                var f4 = api.getValueString("Textfr34");
                $("#A4_observation1_input1_option1").next().html(katex.renderToString(f4, { throwOnError: false })); // 
                $("#A4_observation1_input1_option2").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                $("#A4_observation1_input1_option3").next().html(katex.renderToString(f2, { throwOnError: false })); // 
                $("#A4_observation1_input1_option4").next().html(katex.renderToString(f3, { throwOnError: false })); // 
                // Q4
                api.evalCommand('SetValue(Textfr3Root1, CopyFreeObject("("+round(Element(Listfr3Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root2, CopyFreeObject("("+round(Element(Listfr3Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root3, CopyFreeObject("("+round(Element(Listfr3Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root4, CopyFreeObject("("+round(Element(Listfr3Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root5, CopyFreeObject("("+round(Element(Listfr3Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root6, CopyFreeObject("("+round(Element(Listfr3Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr3Root1"); //ans
                var root2 = api.getValueString("Textfr3Root2"); //ans 
                var root3 = api.getValueString("Textfr3Root3"); //ans or not
                var root4 = api.getValueString("Textfr3Root4");
                var root5 = api.getValueString("Textfr3Root5");
                var root6 = api.getValueString("Textfr3Root6");
                $("#A4_observation1_input4_option1").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A4_observation1_input4_option2").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A4_observation1_input4_option3").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A4_observation1_input4_option4").next().html(katex.renderToString(root4, { throwOnError: false })); // 
                $("#A4_observation1_input4_option5").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A4_observation1_input4_option6").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A4_observation1_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A4_observation1_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                
                if (Nrootf==2) {
                    $("#A4_observation1_question5_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A4_observation1_question5_c4").hide();
                    $("#A4_observation1_question5_c4_options").hide();
                };
                if (Nrootf==3) {
                    $("#A4_observation1_question5_c4").show();
                    $("#A4_observation1_question5_c4_options").show();
                    $("#A4_observation1_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false }));
                    $("#A4_observation1_question5_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false }));
                }    
            }
            createOption();
        });
        function A4_observation1_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var A4_observation1_input1_usrans = $("input[name=A4_observation1_input1]:checked").val();
            var A4_observation1_input2_usrans = $("input[name=A4_observation1_input2]:checked").val();
            var A4_observation1_input3_usrans = $("input[name=A4_observation1_input3]:checked").val();
            var A4_observation1_input4_usrans1 = $("#A4_observation1_input4_option1").prop("checked");
            var A4_observation1_input4_usrans2 = $("#A4_observation1_input4_option2").prop("checked");
            var A4_observation1_input4_usrans3 = $("#A4_observation1_input4_option3").prop("checked");
            var A4_observation1_input4_usrans4 = $("#A4_observation1_input4_option4").prop("checked");
            var A4_observation1_input4_usrans5 = $("#A4_observation1_input4_option5").prop("checked");
            var A4_observation1_input4_usrans6 = $("#A4_observation1_input4_option6").prop("checked");
            var A4_observation1_input5_1_usrans = $("input[name=A4_observation1_input5_1]:checked").val();
            var A4_observation1_input5_2_usrans = $("input[name=A4_observation1_input5_2]:checked").val();
            var A4_observation1_input5_3_usrans = $("input[name=A4_observation1_input5_3]:checked").val();
            var A4_observation1_input5_4_usrans = $("input[name=A4_observation1_input5_4]:checked").val();
            var input1_check = (A4_observation1_input1_usrans == 2);
            var input2_check = (A4_observation1_input2_usrans == checkHC);
            var input3_check = (A4_observation1_input3_usrans == checkHC);
            var input4_check = (
                A4_observation1_input4_usrans1 == true && 
                A4_observation1_input4_usrans2 == false && 
                A4_observation1_input4_usrans3 == true && 
                A4_observation1_input4_usrans4 == false && 
                A4_observation1_input4_usrans5 == (Nrootf==3 ? true : false) && 
                A4_observation1_input4_usrans6 == false);
            var input5_1_check = (A4_observation1_input5_1_usrans == checkPN1);
            var input5_2_check = (A4_observation1_input5_2_usrans == checkPN2);
            var input5_3_check = (A4_observation1_input5_3_usrans == checkPN3);
            var input5_4_check = (Nrootf==3 ? (A4_observation1_input5_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 1'}).then((result) => {
                    $("#A4_observation1_confirm").hide();
                    $("#A4_observation1_done").css({"opacity": "1"});
                    $("#A4_observation1_next").removeClass("d-none");
                    $("#A4_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A4_observation1_confirm").click(function() {
            A4_observation1_check();
        });
        $("#A4_observation1_next").click(function() {
            $("#A4_operation2_link").click();
        });

        // A4_operation2
        $("#A4_operation2_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA4_operation2) {
                api.evalCommand("RunClickScript(button17)");
                initA4_operation2 = true;
            };
            api.registerObjectClickListener("button9", A4_operation2_check);
        });        
        function A4_operation2_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                $("#A4_operation2_done").css({"opacity": "1"});
                $("#A4_operation2_next").removeClass("d-none");
                $("#A4_operation2_link img").css({"opacity": "1"});
            })
        };
        $("#A4_operation2_next").click(function() {
            $("#A4_observation2_link").click();
        });

        // A4_observation2
        $("#A4_observation2_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfr3Root1, CopyFreeObject("("+round(Element(Listfr3Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root2, CopyFreeObject("("+round(Element(Listfr3Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root3, CopyFreeObject("("+round(Element(Listfr3Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root4, CopyFreeObject("("+round(Element(Listfr3Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root5, CopyFreeObject("("+round(Element(Listfr3Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr3Root6, CopyFreeObject("("+round(Element(Listfr3Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr3Root1"); //ans
                var root2 = api.getValueString("Textfr3Root2"); //ans
                var root3 = api.getValueString("Textfr3Root3"); //ans or not
                var root4 = api.getValueString("Textfr3Root4");
                var root5 = api.getValueString("Textfr3Root5");
                var root6 = api.getValueString("Textfr3Root6");
                $("#A4_observation2_input3_option1").next().html(katex.renderToString(root4, { throwOnError: false })); //
                $("#A4_observation2_input3_option2").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A4_observation2_input3_option3").next().html(katex.renderToString(root5, { throwOnError: false })); //  
                $("#A4_observation2_input3_option4").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A4_observation2_input3_option5").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A4_observation2_input3_option6").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A4_observation2_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A4_observation2_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false }));
                if (Nrootf==2) {
                    $("#A4_observation2_question4_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A4_observation2_question4_c4").hide();
                    $("#A4_observation2_question4_c4_options").hide();
                } 
                if (Nrootf==3) {
                    $("#A4_observation2_question4_c4").show();
                    $("#A4_observation2_question4_c4_options").show();
                    $("#A4_observation2_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                    $("#A4_observation2_question4_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
                }
            }
            createOption();
            });
        function A4_observation2_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var A4_observation2_input1_usrans = $("input[name=A4_observation2_input1]:checked").val();
            var A4_observation2_input2_usrans = $("input[name=A4_observation2_input2]:checked").val();
            var A4_observation2_input3_usrans1 = $("#A4_observation2_input3_option1").prop("checked");
            var A4_observation2_input3_usrans2 = $("#A4_observation2_input3_option2").prop("checked");
            var A4_observation2_input3_usrans3 = $("#A4_observation2_input3_option3").prop("checked");
            var A4_observation2_input3_usrans4 = $("#A4_observation2_input3_option4").prop("checked");
            var A4_observation2_input3_usrans5 = $("#A4_observation2_input3_option5").prop("checked");
            var A4_observation2_input3_usrans6 = $("#A4_observation2_input3_option6").prop("checked");
            var A4_observation2_input4_1_usrans = $("input[name=A4_observation2_input4_1]:checked").val();
            var A4_observation2_input4_2_usrans = $("input[name=A4_observation2_input4_2]:checked").val();
            var A4_observation2_input4_3_usrans = $("input[name=A4_observation2_input4_3]:checked").val();
            var A4_observation2_input4_4_usrans = $("input[name=A4_observation2_input4_4]:checked").val();
            var input1_check = (A4_observation2_input1_usrans == checkHC);
            var input2_check = (A4_observation2_input2_usrans == checkHC);
            var input3_check = (
                A4_observation2_input3_usrans1 == false && 
                A4_observation2_input3_usrans2 == (Nrootf==3 ? true : false) && 
                A4_observation2_input3_usrans3 == false && 
                A4_observation2_input3_usrans4 == true && 
                A4_observation2_input3_usrans5 == false && 
                A4_observation2_input3_usrans6 == true);
            var input4_1_check = (A4_observation2_input4_1_usrans == checkPN1);
            var input4_2_check = (A4_observation2_input4_2_usrans == checkPN2);
            var input4_3_check = (A4_observation2_input4_3_usrans == checkPN3);
            var input4_4_check = (Nrootf==3 ? (A4_observation2_input4_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 2'}).then((result) => {
                    $("#A4_observation2_confirm").hide();
                    $("#A4_observation2_done").css({"opacity": "1"});
                    $("#A4_observation2_next").removeClass("d-none");
                    $("#A4_observation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A4_observation2_confirm").click(function() {
            A4_observation2_check();
        });
        $("#A4_observation2_next").click(function() {
            $("#A4_operation3_link").click();
        });

        // A4_operation3
        function A4_operation3_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 3'}).then((result)=> {
                $("#A4_operation3_done").css({"opacity": "1"});
                $("#A4_operation3_next").removeClass("d-none");
                $("#A4_operation3_link img").css({"opacity": "1"});
            })
        }
        $("#A4_operation3_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button6",false);
            api.setVisible("button11",true);
            api.setVisible("inputBox1",false);
            api.evalCommand("RunClickScript(button11)");
            api.registerObjectClickListener("button9", A4_operation3_check);
        });
        $("#A4_operation3_next").click(function() {
            $("#A4_observation3_link").click();
        });

        // A4_observation3
        $("#A4_observation3_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("button11",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q1
                var f1 = api.getValueString("Textfr51"); //ans
                var f2 = api.getValueString("Textfr52");
                var f3 = api.getValueString("Textfr53");
                var f4 = api.getValueString("Textfr54");
                $("#A4_observation3_input1_option1").next().html(katex.renderToString(f4, { throwOnError: false })); // 
                $("#A4_observation3_input1_option2").next().html(katex.renderToString(f3, { throwOnError: false })); // 
                $("#A4_observation3_input1_option3").next().html(katex.renderToString(f1, { throwOnError: false })); // -> ans
                $("#A4_observation3_input1_option4").next().html(katex.renderToString(f2, { throwOnError: false })); // 
                // Q4
                api.evalCommand('SetValue(Textfr5Root1, CopyFreeObject("("+round(Element(Listfr5Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root2, CopyFreeObject("("+round(Element(Listfr5Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root3, CopyFreeObject("("+round(Element(Listfr5Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root4, CopyFreeObject("("+round(Element(Listfr5Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root5, CopyFreeObject("("+round(Element(Listfr5Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root6, CopyFreeObject("("+round(Element(Listfr5Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr5Root1"); //ans
                var root2 = api.getValueString("Textfr5Root2"); //ans 
                var root3 = api.getValueString("Textfr5Root3"); //ans or not
                var root4 = api.getValueString("Textfr5Root4");
                var root5 = api.getValueString("Textfr5Root5");
                var root6 = api.getValueString("Textfr5Root6");
                $("#A4_observation3_input4_option1").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                $("#A4_observation3_input4_option2").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A4_observation3_input4_option3").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A4_observation3_input4_option4").next().html(katex.renderToString(root4, { throwOnError: false })); // 
                $("#A4_observation3_input4_option5").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A4_observation3_input4_option6").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                // Q5,
                api.evalCommand('SetValue(froot1, CopyFreeObject(Element(Listfroot, 1)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(Element(Listfroot, 2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(Element(Listfroot, 3)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A4_observation3_question5_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A4_observation3_question5_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false })); 
                
                if (Nrootf==2) {
                    $("#A4_observation3_question5_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A4_observation3_question5_c4").hide();
                    $("#A4_observation3_question5_c4_options").hide();
                };
                if (Nrootf==3) {
                    $("#A4_observation3_question5_c4").show();
                    $("#A4_observation3_question5_c4_options").show();
                    $("#A4_observation3_question5_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false }));
                    $("#A4_observation3_question5_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false }));
                }    
            }
            createOption();
        });
        function A4_observation3_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3);            
            var checkPN4 = api.getListValue("ListfrootPN", 4);            
            var A4_observation3_input1_usrans = $("input[name=A4_observation3_input1]:checked").val();
            var A4_observation3_input2_usrans = $("input[name=A4_observation3_input2]:checked").val();
            var A4_observation3_input3_usrans = $("input[name=A4_observation3_input3]:checked").val();
            var A4_observation3_input4_usrans1 = $("#A4_observation3_input4_option1").prop("checked");
            var A4_observation3_input4_usrans2 = $("#A4_observation3_input4_option2").prop("checked");
            var A4_observation3_input4_usrans3 = $("#A4_observation3_input4_option3").prop("checked");
            var A4_observation3_input4_usrans4 = $("#A4_observation3_input4_option4").prop("checked");
            var A4_observation3_input4_usrans5 = $("#A4_observation3_input4_option5").prop("checked");
            var A4_observation3_input4_usrans6 = $("#A4_observation3_input4_option6").prop("checked");
            var A4_observation3_input5_1_usrans = $("input[name=A4_observation3_input5_1]:checked").val();
            var A4_observation3_input5_2_usrans = $("input[name=A4_observation3_input5_2]:checked").val();
            var A4_observation3_input5_3_usrans = $("input[name=A4_observation3_input5_3]:checked").val();
            var A4_observation3_input5_4_usrans = $("input[name=A4_observation3_input5_4]:checked").val();
            var input1_check = (A4_observation3_input1_usrans == 3);
            var input2_check = (A4_observation3_input2_usrans == checkHC);
            var input3_check = (A4_observation3_input3_usrans == checkHC);
            var input4_check = (
                A4_observation3_input4_usrans1 == true && 
                A4_observation3_input4_usrans2 == (Nrootf==3 ? true : false) && 
                A4_observation3_input4_usrans3 == true && 
                A4_observation3_input4_usrans4 == false && 
                A4_observation3_input4_usrans5 == false && 
                A4_observation3_input4_usrans6 == false);
            var input5_1_check = (A4_observation3_input5_1_usrans == checkPN1);
            var input5_2_check = (A4_observation3_input5_2_usrans == checkPN2);
            var input5_3_check = (A4_observation3_input5_3_usrans == checkPN3);
            var input5_4_check = (Nrootf==3 ? (A4_observation3_input5_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_check && input5_1_check && input5_2_check && input5_3_check && input5_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A4_observation3_confirm").hide();
                    $("#A4_observation3_done").css({"opacity": "1"});
                    $("#A4_observation3_next").removeClass("d-none");
                    $("#A4_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A4_observation3_confirm").click(function() {
            A4_observation3_check();
        });
        $("#A4_observation3_next").click(function() {
            $("#A4_operation4_link").click();
        });

        // A4_operation4
        $("#A4_operation4_link").click(function() {
            removeListener();
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button6",false);
            api.setVisible("button11",false);
            api.setVisible("inputBox1",false);
            if (!initA4_operation4) {
                api.evalCommand("RunClickScript(button17)");
                initA4_operation4 = true;
            };
            api.registerObjectClickListener("button9", A4_operation4_check);
        });        
        function A4_operation4_check() {
            Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 4'}).then((result)=> {
                $("#A4_operation4_done").css({"opacity": "1"});
                $("#A4_operation4_next").removeClass("d-none");
                $("#A4_operation4_link img").css({"opacity": "1"});
            })
        };
        $("#A4_operation4_next").click(function() {
            $("#A4_observation4_link").click();
        });

        // A4_observation4
        $("#A4_observation4_link").click(function() {
            removeListener();
            api.setValue("Nshowf", 0);            
            api.setVisible("fCopy", true);
            api.setVisible("textfCopy", true);
            api.setVisible("button11",false);
            var Nrootf = api.getValue("Nrootf");
            function createOption() {
                // Q3
                api.evalCommand('SetValue(Textfr5Root1, CopyFreeObject("("+round(Element(Listfr5Roots, 1),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root2, CopyFreeObject("("+round(Element(Listfr5Roots, 2),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root3, CopyFreeObject("("+round(Element(Listfr5Roots, 3),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root4, CopyFreeObject("("+round(Element(Listfr5Roots, 4),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root5, CopyFreeObject("("+round(Element(Listfr5Roots, 5),2)+", 0)"))');
                api.evalCommand('SetValue(Textfr5Root6, CopyFreeObject("("+round(Element(Listfr5Roots, 6),2)+", 0)"))');
                var root1 = api.getValueString("Textfr5Root1"); //ans
                var root2 = api.getValueString("Textfr5Root2"); //ans
                var root3 = api.getValueString("Textfr5Root3"); //ans or not
                var root4 = api.getValueString("Textfr5Root4");
                var root5 = api.getValueString("Textfr5Root5");
                var root6 = api.getValueString("Textfr5Root6");
                $("#A4_observation4_input3_option1").next().html(katex.renderToString(root6, { throwOnError: false })); // 
                $("#A4_observation4_input3_option2").next().html(katex.renderToString(root5, { throwOnError: false })); // 
                $("#A4_observation4_input3_option3").next().html(katex.renderToString(root4, { throwOnError: false })); //  
                $("#A4_observation4_input3_option4").next().html(katex.renderToString(root1, { throwOnError: false })); // ans
                $("#A4_observation4_input3_option5").next().html(katex.renderToString(root3, { throwOnError: false })); // ans or not
                $("#A4_observation4_input3_option6").next().html(katex.renderToString(root2, { throwOnError: false })); // ans
                // Q4
                api.evalCommand('SetValue(froot1, CopyFreeObject(round(Element(Listfroot, 1),2)))');
                api.evalCommand('SetValue(froot2, CopyFreeObject(round(Element(Listfroot, 2),2)))');
                api.evalCommand('SetValue(froot3, CopyFreeObject(round(Element(Listfroot, 3),2)))');
                var froot1 = api.getValue("froot1");
                var froot2 = api.getValue("froot2");
                var froot3 = api.getValue("froot3");
                $("#A4_observation4_question4_c1").html(katex.renderToString("x<" + froot1, { throwOnError: false })); 
                $("#A4_observation4_question4_c2").html(katex.renderToString(froot1 + "<x<" + froot2, { throwOnError: false }));
                if (Nrootf==2) {
                    $("#A4_observation4_question4_c3").html(katex.renderToString("x>" + froot2, { throwOnError: false }));
                    $("#A4_observation4_question4_c4").hide();
                    $("#A4_observation4_question4_c4_options").hide();
                } 
                if (Nrootf==3) {
                    $("#A4_observation4_question4_c4").show();
                    $("#A4_observation4_question4_c4_options").show();
                    $("#A4_observation4_question4_c3").html(katex.renderToString(froot2 + "<x<" + froot3, { throwOnError: false })); 
                    $("#A4_observation4_question4_c4").html(katex.renderToString("x>" + froot3, { throwOnError: false })); 
                }
            }
            createOption();
            });
        function A4_observation4_check() {
            var Nrootf = api.getValue("Nrootf");
            var Highestf = api.getValue("Highestf");
            var checkHC = (Highestf>0 ? 1 : 2); // 最高項係數
            var checkPN1 = api.getListValue("ListfrootPN", 1);
            var checkPN2 = api.getListValue("ListfrootPN", 2);
            var checkPN3 = api.getListValue("ListfrootPN", 3); 
            var checkPN4 = api.getListValue("ListfrootPN", 4); 
            var A4_observation4_input1_usrans = $("input[name=A4_observation4_input1]:checked").val();
            var A4_observation4_input2_usrans = $("input[name=A4_observation4_input2]:checked").val();
            var A4_observation4_input3_usrans1 = $("#A4_observation4_input3_option1").prop("checked");
            var A4_observation4_input3_usrans2 = $("#A4_observation4_input3_option2").prop("checked");
            var A4_observation4_input3_usrans3 = $("#A4_observation4_input3_option3").prop("checked");
            var A4_observation4_input3_usrans4 = $("#A4_observation4_input3_option4").prop("checked");
            var A4_observation4_input3_usrans5 = $("#A4_observation4_input3_option5").prop("checked");
            var A4_observation4_input3_usrans6 = $("#A4_observation4_input3_option6").prop("checked");
            var A4_observation4_input4_1_usrans = $("input[name=A4_observation4_input4_1]:checked").val();
            var A4_observation4_input4_2_usrans = $("input[name=A4_observation4_input4_2]:checked").val();
            var A4_observation4_input4_3_usrans = $("input[name=A4_observation4_input4_3]:checked").val();
            var A4_observation4_input4_4_usrans = $("input[name=A4_observation4_input4_4]:checked").val();
            var input1_check = (A4_observation4_input1_usrans == checkHC);
            var input2_check = (A4_observation4_input2_usrans == checkHC);
            var input3_check = (
                A4_observation4_input3_usrans1 == false && 
                A4_observation4_input3_usrans2 == false && 
                A4_observation4_input3_usrans3 == false && 
                A4_observation4_input3_usrans4 == true && 
                A4_observation4_input3_usrans5 == (Nrootf==3 ? true : false) && 
                A4_observation4_input3_usrans6 == true);
            var input4_1_check = (A4_observation4_input4_1_usrans == checkPN1);
            var input4_2_check = (A4_observation4_input4_2_usrans == checkPN2);
            var input4_3_check = (A4_observation4_input4_3_usrans == checkPN3);
            var input4_4_check = (Nrootf==3 ? (A4_observation4_input4_4_usrans == checkPN4) : true);
            if (input1_check && input2_check && input3_check && input4_1_check && input4_2_check && input4_3_check && input4_4_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A4_observation4_confirm").hide();
                    $("#A4_observation4_done").css({"opacity": "1"});
                    $("#A4_observation4_next").removeClass("d-none");
                    $("#A4_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A4_observation4_confirm").click(function() {
            A4_observation4_check();
        });
        $("#A4_observation4_next").click(function() {
            $("#A4_operation5_link").click();
        });

        // A4_operation5
        function A4_operation5_check () {
            $("#A4_operation5_confirm").removeClass("d-none");    
        }
        function A4_operation5_clearCheck() {
            api.setValue("ShowP6", true);
        }
        $("#A4_operation5_link").click(function() {
            removeListener();
            api.setVisible("fCopy", false);
            api.setVisible("textfCopy", false);
            api.setVisible("button11",false);
            api.evalCommand("RunClickScript(P6BT)");
            api.registerObjectUpdateListener("Px", A4_operation5_check);
            api.registerObjectClickListener("button2", A4_operation5_clearCheck);
        });
        $("#A4_operation5_confirm").click(function() {
            Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作 5'}).then((result) => {
                $("#A4_operation5_confirm").hide();
                $("#A4_operation5_done").css({"opacity": "1"});
                $("#A4_operation5_next").removeClass("d-none");
                $("#A4_operation5_link img").css({"opacity": "1"});
            })
        });
        $("#A4_operation5_next").click(function() {
            $("#A4_investigation1_link").click();
        });

        // A4_investigation1
        function A4_investigation1_check() {
            var A4_investigation1_input1_usrans1 = $("#A4_investigation1_input1_option1").prop("checked");
            var A4_investigation1_input1_usrans2 = $("#A4_investigation1_input1_option2").prop("checked");
            var A4_investigation1_input1_usrans3 = $("#A4_investigation1_input1_option3").prop("checked");
            var A4_investigation1_input1_usrans4 = $("#A4_investigation1_input1_option4").prop("checked");
            var A4_investigation1_input2_usrans1 = $("#A4_investigation1_input2_option1").prop("checked");
            var A4_investigation1_input2_usrans2 = $("#A4_investigation1_input2_option2").prop("checked");
            var A4_investigation1_input2_usrans3 = $("#A4_investigation1_input2_option3").prop("checked");
            var A4_investigation1_input2_usrans4 = $("#A4_investigation1_input2_option4").prop("checked");
            var A4_investigation1_input3_usrans1 = $("#A4_investigation1_input3_option1").prop("checked");
            var A4_investigation1_input3_usrans2 = $("#A4_investigation1_input3_option2").prop("checked");
            var A4_investigation1_input3_usrans3 = $("#A4_investigation1_input3_option3").prop("checked");
            var A4_investigation1_input3_usrans4 = $("#A4_investigation1_input3_option4").prop("checked");
            var A4_investigation1_input3_usrans5 = $("#A4_investigation1_input3_option5").prop("checked");
            var input1_check = (
                A4_investigation1_input1_usrans1 == true && 
                A4_investigation1_input1_usrans2 == false && 
                A4_investigation1_input1_usrans3 == true && 
                A4_investigation1_input1_usrans4 == false);
            var input2_check = (
                A4_investigation1_input2_usrans1 == false && 
                A4_investigation1_input2_usrans2 == true && 
                A4_investigation1_input2_usrans3 == false && 
                A4_investigation1_input2_usrans4 == true);
            var input3_check = (
                A4_investigation1_input3_usrans1 == false && 
                A4_investigation1_input3_usrans2 == true && 
                A4_investigation1_input3_usrans3 == true && 
                A4_investigation1_input3_usrans4 == false && 
                A4_investigation1_input3_usrans5 == true);
            if (input1_check && input2_check && input3_check) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A4_investigation1_confirm").hide();
                    $("#A4_investigation1_done").css({"opacity": "1"});
                    $("#A4_investigation1_next").removeClass("d-none");
                    $("#A4_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A4_investigation1_confirm").click(function() {
            A4_investigation1_check();
        });
        $("#A4_investigation1_next").click(function() {
            $("#A4_investigation2_link").click();
        });

        // A4_investigation2
        function A4_investigation2_check() {
            var A4_investigation2_textarea1_usrans = $("#A4_investigation2_textarea1").val();
            if (A4_investigation2_textarea1_usrans != "") {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A4_investigation2_confirm").hide();
                    $("#A4_investigation2_done").css({"opacity": "1"});
                    $("#A4_investigation2_next").removeClass("d-none");
                    $("#A4_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '試著寫下自己的想法吧！'})
            }
        }
        $("#A4_investigation2_confirm").click(function() {
            A4_investigation2_check();
        });
        $("#A4_investigation2_next").click(function() {
            ;
        });
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A4_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});

// 待解決問題：點選學習單選單連結後，學習單與GGB未能互相搭配。例如：四次偶重根的觀察記錄配二次偶重根的GGB