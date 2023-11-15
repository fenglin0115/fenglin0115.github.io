params.ggbBase64 = ggb_D_10_3_1_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("D-10-3(1) 活動1：加法原理");
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
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-10-3(1) 活動1：加法原理");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_10_3_1_A1;
    params.appletOnLoad = function(api){
        function removeListener() {
            api.unregisterObjectUpdateListener("viewTreeAll");
        }

        // A1_operation1
        function A1_operation1_check() {
            var viewTreeAll = api.getValue("viewTreeAll");
            if (viewTreeAll == 1) {
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A1_operation1_link").click(function() {
            removeListener();
            api.setFixed("listNumTea", true, true);
            api.setFixed("listNumJuice", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Tea1", false, true);
            api.setFixed("Tea2", false, true);
            api.setFixed("Tea3", false, true);
            api.setFixed("Juice1", false, true);
            api.setFixed("Juice2", false, true);
            api.setFixed("Juice3", false, true);
            api.registerObjectUpdateListener("viewTreeAll", A1_operation1_check);
        });
        if (!initA1) { 
            $("#A1_operation1_link").click();
            initA1 = true;
        };
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        $("#A1_observation1_link").click(function(){
            removeListener();
            api.setFixed("listNumTea",true,false);
            api.setFixed("listNumJuice",true,false);
            api.setFixed("buttonUnfold",true,false);
            api.setFixed("Tea1",true,false);
            api.setFixed("Tea2",true,false);
            api.setFixed("Tea3",true,false);
            api.setFixed("Juice1",true,false);
            api.setFixed("Juice2",true,false);
            api.setFixed("Juice3",true,false);
            function createOption() {
                var nTea = api.getValue("nTea");
                var nJuice = api.getValue("nJuice");
                $("#A1_observation1_input1_option1").next().html(katex.renderToString(nTea + "\\times" + nJuice, { throwOnError: false }));
                $("#A1_observation1_input1_option2").next().html(katex.renderToString(nTea + "+" + nJuice, { throwOnError: false }));
                $("#A1_observation1_input1_option3").next().html(katex.renderToString(nTea + "^" + nJuice, { throwOnError: false }));
                $("#A1_observation1_input1_option4").next().html(katex.renderToString(nTea + "" + nJuice, { throwOnError: false }));
            }
            createOption();
        });
        function A1_observation1_check() {
            var A1_observation1_input1_usrans = $("input[name=A1_observation1_input1]:checked").val();
            if (A1_observation1_input1_usrans == 2) {
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
            $("#A1_investigation1_link").click();
        });

        // A1_investigation1
        $("#A1_investigation1_link").click(function(){
            removeListener();
            api.setFixed("listNumTea",true,true);
            api.setFixed("listNumJuice",true,true);
            api.setFixed("buttonUnfold",true,true);
            api.setFixed("Tea1",false,true);
            api.setFixed("Tea2",false,true);
            api.setFixed("Tea3",false,true);
            api.setFixed("Juice1",false,true);
            api.setFixed("Juice2",false,true);
            api.setFixed("Juice3",false,true);
        });
        function A1_investigation1_check() {
            var A1_investigation1_input1_usrans = $("input[name=A1_investigation1_input1]:checked").val();
            if (A1_investigation1_input1_usrans == 4) {
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
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        $("#A1_investigation2_link").click(function(){
            removeListener();
            api.setFixed("listNumTea",true,true);
            api.setFixed("listNumJuice",true,true);
            api.setFixed("buttonUnfold",true,true);
            api.setFixed("Tea1",false,true);
            api.setFixed("Tea2",false,true);
            api.setFixed("Tea3",false,true);
            api.setFixed("Juice1",false,true);
            api.setFixed("Juice2",false,true);
            api.setFixed("Juice3",false,true);
        });
        function A1_investigation2_check() {
            var A1_investigation2_input1_usrans = $("input[name=A1_investigation2_input1]:checked").val();
            if (A1_investigation2_input1_usrans == 3) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({"opacity": "1"});
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_investigation2_confirm").click(function() {
            A1_investigation2_check();
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
    $(".title > span ").html("D-10-3(1) 活動2：乘法原理");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_D_10_3_1_A2;
    params.appletOnLoad = function(api){
        function removeListener() {
            api.unregisterObjectUpdateListener("viewTreeAll");
        }

        // A2_operation1
        function A2_operation1_check() {
            var viewTreeAll = api.getValue("viewTreeAll");
            if (viewTreeAll == 1) {
                setTimeout(() => {
                    Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                        $("#A2_operation1_done").css({"opacity": "1"});
                        $("#A2_operation1_next").removeClass("d-none");
                        $("#A2_operation1_link img").css({"opacity": "1"});
                    })
                }, 4000);
            }
        }    
        $("#A2_operation1_link").click(function() {
            removeListener();
            api.setFixed("listNumSandwich", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Sandwich1", false, true);
            api.setFixed("Sandwich2", false, true);
            api.setFixed("Sandwich3", false, true);
            api.setFixed("Sandwich4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
            api.registerObjectUpdateListener("viewTreeAll", A2_operation1_check);
        });
        if (!initA2) { 
            $("#A2_operation1_link").click();
            initA2 = true;
        };
        $("#A2_operation1_next").click(function() {
            $("#A2_observation1_link").click();
        });

        // A2_observation1
        $("#A2_observation1_link").click(function(){
            removeListener();
            api.setFixed("listNumSandwich", true, false);
            api.setFixed("listNumDrink", true, false);
            api.setFixed("buttonUnfold", true, false);
            api.setFixed("Sandwich1", true, false);
            api.setFixed("Sandwich2", true, false);
            api.setFixed("Sandwich3", true, false);
            api.setFixed("Sandwich4", true, false);
            api.setFixed("Drink1", true, false);
            api.setFixed("Drink2", true, false);
            api.setFixed("Drink3", true, false);
            api.setFixed("Drink4", true, false);
            function createOption() {
                var nSandwich = api.getValue("nSandwich");
                var nDrink = api.getValue("nDrink");
                $("#A2_observation1_input1_option1").next().html(katex.renderToString(nSandwich + "\\times" + nDrink, { throwOnError: false }));
                $("#A2_observation1_input1_option2").next().html(katex.renderToString(nSandwich + "+" + nDrink, { throwOnError: false }));
                $("#A2_observation1_input1_option3").next().html(katex.renderToString(nSandwich + "^" + nDrink, { throwOnError: false }));
                $("#A2_observation1_input1_option4").next().html(katex.renderToString(nSandwich + "" + nDrink, { throwOnError: false }));
            }
            createOption();
        });
        function A2_observation1_check() {
            var A2_observation1_input1_usrans = $("input[name=A2_observation1_input1]:checked").val();
            if (A2_observation1_input1_usrans == 1) {
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
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        $("#A2_investigation1_link").click(function(){
            removeListener();
            api.setFixed("listNumSandwich", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Sandwich1", false, true);
            api.setFixed("Sandwich2", false, true);
            api.setFixed("Sandwich3", false, true);
            api.setFixed("Sandwich4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
        });
        function A2_investigation1_check() {
            var A2_investigation1_input1_usrans = $("input[name=A2_investigation1_input1]:checked").val();
            if (A2_investigation1_input1_usrans == 2) {
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
        $("#A2_investigation2_link").click(function(){
            removeListener();
            api.setFixed("listNumSandwich", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Sandwich1", false, true);
            api.setFixed("Sandwich2", false, true);
            api.setFixed("Sandwich3", false, true);
            api.setFixed("Sandwich4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
        });
        function A2_investigation2_check() {
            var A2_investigation2_input1_usrans = $("input[name=A2_investigation2_input1]:checked").val();
            if (A2_investigation2_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A2_investigation2_confirm").hide();
                    $("#A2_investigation2_done").css({"opacity": "1"});
                    $("#A2_investigation2_next").removeClass("d-none");
                    $("#A2_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
        $("#A2_investigation2_next").click(function() {
            showA3();
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

function showA3() {
    var initA3 = false;
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動3");
    $("#navbarDropdown").val("活動3");
    $(".outlines").hide();
    $("#outlineA3").show();
    $(".title > span ").html("D-10-3(1) 活動3：加法原理與乘法原理的應用");
    params.id = "ggbApplet03";
    params.ggbBase64 = ggb_D_10_3_1_A3;
    params.appletOnLoad = function(api){
        function removeListener() {
            api.unregisterObjectUpdateListener("viewTreeAll");
        }

        // A3_operation1
        function A3_operation1_check() {
            var viewTreeAll = api.getValue("viewTreeAll");
            if (viewTreeAll == 1) {
                setTimeout(() => {
                    Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                        $("#A3_operation1_done").css({"opacity": "1"});
                        $("#A3_operation1_next").removeClass("d-none");
                        $("#A3_operation1_link img").css({"opacity": "1"});
                    })
                }, 5000);
            }
        }    
        $("#A3_operation1_link").click(function() {
            removeListener();
            api.setFixed("listNumRice", true, true);
            api.setFixed("listNumNoodle", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Rice1", false, true);
            api.setFixed("Rice2", false, true);
            api.setFixed("Rice3", false, true);
            api.setFixed("Rice4", false, true);
            api.setFixed("Noodle1", false, true);
            api.setFixed("Noodle2", false, true);
            api.setFixed("Noodle3", false, true);
            api.setFixed("Noodle4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
            api.registerObjectUpdateListener("viewTreeAll", A3_operation1_check);
        });
        if (!initA3) { 
            $("#A3_operation1_link").click();
            initA3 = true;
        };
        $("#A3_operation1_next").click(function() {
            $("#A3_observation1_link").click();
        });

        // A3_observation1
        $("#A3_observation1_link").click(function(){
            removeListener();
            api.setFixed("listNumRice", true, false);
            api.setFixed("listNumNoodle", true, false);
            api.setFixed("listNumDrink", true, false);
            api.setFixed("buttonUnfold", true, false);
            api.setFixed("Rice1", true, false);
            api.setFixed("Rice2", true, false);
            api.setFixed("Rice3", true, false);
            api.setFixed("Rice4", true, false);
            api.setFixed("Noodle1", true, false);
            api.setFixed("Noodle2", true, false);
            api.setFixed("Noodle3", true, false);
            api.setFixed("Noodle4", true, false);
            api.setFixed("Drink1", true, false);
            api.setFixed("Drink2", true, false);
            api.setFixed("Drink3", true, false);
            api.setFixed("Drink4", true, false);
            function createOption() {
                var nRice = api.getValue("nRice");
                var nNoodle = api.getValue("nNoodle");
                var nDrink = api.getValue("nDrink");
                $("#A3_observation1_input1_option1").next().html(katex.renderToString(nRice + "\\times" + nNoodle + "\\times" + nDrink, { throwOnError: false }));
                $("#A3_observation1_input1_option2").next().html(katex.renderToString(nRice + "+" + nNoodle + "+" + nDrink, { throwOnError: false }));
                $("#A3_observation1_input1_option3").next().html(katex.renderToString("(" + nRice + "+" + nNoodle + ")\\times" + nDrink, { throwOnError: false }));
                $("#A3_observation1_input1_option4").next().html(katex.renderToString(nRice + "\\times" + nNoodle + "+" + nDrink, { throwOnError: false }));
            }
            createOption();
        });
        function A3_observation1_check() {
            var A3_observation1_input1_usrans = $("input[name=A3_observation1_input1]:checked").val();
            if (A3_observation1_input1_usrans == 3) {
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
            $("#A3_investigation1_link").click();
        });

        // A3_investigation1
        $("#A3_investigation1_link").click(function(){
            removeListener();
            api.setFixed("listNumRice", true, true);
            api.setFixed("listNumNoodle", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Rice1", false, true);
            api.setFixed("Rice2", false, true);
            api.setFixed("Rice3", false, true);
            api.setFixed("Rice4", false, true);
            api.setFixed("Noodle1", false, true);
            api.setFixed("Noodle2", false, true);
            api.setFixed("Noodle3", false, true);
            api.setFixed("Noodle4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
        });
        function A3_investigation1_check() {
            var A3_investigation1_input1_usrans = $("input[name=A3_investigation1_input1]:checked").val();
            if (A3_investigation1_input1_usrans == 2) {
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
        $("#A3_investigation2_link").click(function(){
            removeListener();
            api.setFixed("listNumRice", true, true);
            api.setFixed("listNumNoodle", true, true);
            api.setFixed("listNumDrink", true, true);
            api.setFixed("buttonUnfold", true, true);
            api.setFixed("Rice1", false, true);
            api.setFixed("Rice2", false, true);
            api.setFixed("Rice3", false, true);
            api.setFixed("Rice4", false, true);
            api.setFixed("Noodle1", false, true);
            api.setFixed("Noodle2", false, true);
            api.setFixed("Noodle3", false, true);
            api.setFixed("Noodle4", false, true);
            api.setFixed("Drink1", false, true);
            api.setFixed("Drink2", false, true);
            api.setFixed("Drink3", false, true);
            api.setFixed("Drink4", false, true);
        });
        function A3_investigation2_check() {
            var A3_investigation2_input1_usrans = $("input[name=A3_investigation2_input1]:checked").val();
            if (A3_investigation2_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A3_investigation2_confirm").hide();
                    $("#A3_investigation2_done").css({"opacity": "1"});
                    $("#A3_investigation2_next").removeClass("d-none");
                    $("#A3_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A3_investigation2_confirm").click(function() {
            A3_investigation2_check();
        });
        $("#A3_investigation2_next").click(function() {
            ;
        });

        // 要解決 A2 和 A3 活動1 swal 的效能問題。
    }
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    $(".operation, .observation, .investigation").hide();
    $("#A3_operation1").show();
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

$(document).ready(function() {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
