params.ggbBase64 = ggb_D_10_3_2_cover;

params.appletOnLoad = function(api) {

    function start() {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $(".header_wrapper").show();
        $(".title").show();
        $(".title > span ").html("D-10-3(2) 活動1：完全相異物的組合");
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>D-10-3-S01：</dt><dd>能理解基本計數原理（一）—窮舉法、樹狀圖。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '<div style="text-align:left;">透過學具操作、觀察、理解完全相異物組合的方法與 ' + katex.renderToString("C^n_k", { throwOnError: false }) + ' 原則，並知道與不完全相異物直線排列的關係。</div>',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>D-10-3-S07：</dt><dd>能理解完全相異物組合的方法與 ' + katex.renderToString("C^n_k", { throwOnError: false }) + ' 原則，並知道與不完全相異物直線排列的關係。</dd></dl>',
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
    // var initA1 = false;
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("D-10-3(2) 活動1：完全相異物的組合");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_D_10_3_2_A1;
    params.appletOnLoad = function(api){
        function ggbMode1() {
            api.setValue("showProblemCover", true);
        };
        function ggbMode2_buy2() {
            api.setValue("showProblemCover", false);
            api.setValue("showRegionResult", false);
            api.setValue("mode3", false);
        };
        function ggbMode2_buy3() {
            api.setValue("showProblemCover", false);
            api.setValue("showRegionResult", false);
            api.setValue("mode3", true);
        };
        function ggbMode3_buy2() {
            api.setValue("showProblemCover", false);
            api.setValue("showRegionResult", true);
            api.setValue("mode3", false);
        };
        function ggbMode3_buy3() {
            api.setValue("showProblemCover", false);
            api.setValue("showRegionResult", true);
            api.setValue("mode3", true);
        };
        function removeListener() {
            api.unregisterObjectUpdateListener("numTree2");
            api.unregisterObjectUpdateListener("numTree3");
            api.unregisterObjectUpdateListener("numInRegion2");
            api.unregisterObjectUpdateListener("numInRegion3");
        }

        // A1_investigation1
        $("#A1_investigation1_link").click(function() {
            removeListener();
            ggbMode1();
        });
        function A1_investigation1_check() {
            let A1_investigation1_input1_usrans = $("input[name=A1_investigation1_input1]:checked").val();
            if (A1_investigation1_input1_usrans == 2) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！再試試看！'})
            }
        };
        $("#A1_investigation1_confirm").click(function() {
            A1_investigation1_check();
        });
        $("#A1_investigation1_next").click(function() {
            $("#A1_operation1_link").click();
        });

        // A1_operation1
        function A1_operation1_check() {
            let numTree2 = api.getValue("numTree2");
            if (numTree2 == 12) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                    $("#A1_operation1_done").css({"opacity": "1"});
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A1_operation1_link").click(function() {
            removeListener();
            ggbMode2_buy2();
            api.registerObjectUpdateListener("numTree2", A1_operation1_check);
        });
        $("#A1_operation1_next").click(function() {
            $("#A1_observation1_link").click();
        });

        // A1_observation1
        $("#A1_observation1_link").click(function(){
            removeListener();
            ggbMode2_buy2();
            api.evalCommand("RunClickScript(unfoldTree)");
            ;
        });
        function A1_observation1_check() {
            let A1_observation1_input1_usrans = $("input[name=A1_observation1_input1]:checked").val();
            if (A1_observation1_input1_usrans == 4) {
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
            let numInRegion2 = api.getValue("numInRegion2");
            if (numInRegion2 == 12) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                    $("#A1_operation2_done").css({"opacity": "1"});
                    $("#A1_operation2_next").removeClass("d-none");
                    $("#A1_operation2_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A1_operation2_link").click(function() {
            removeListener();
            ggbMode3_buy2();
            api.registerObjectUpdateListener("numInRegion2", A1_operation2_check);
        });
        $("#A1_operation2_next").click(function() {
            $("#A1_observation2_link").click();
        });

        // A1_observation2
        $("#A1_observation2_link").click(function(){
            removeListener();
            // ggbMode3_buy2();
            // api.evalCommand("RunClickScript(unfoldTree)");
            ;
        });
        function A1_observation2_check() {
            let A1_observation2_input1_usrans = $("input[name=A1_observation2_input1]:checked").val();
            if (A1_observation2_input1_usrans == 4) {
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
        function A1_operation3_check() {
            let numTree3 = api.getValue("numTree3");
            if (numTree3 == 24) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 3'}).then((result)=> {
                    $("#A1_operation3_done").css({"opacity": "1"});
                    $("#A1_operation3_next").removeClass("d-none");
                    $("#A1_operation3_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A1_operation3_link").click(function() {
            removeListener();
            ggbMode2_buy3();
            api.registerObjectUpdateListener("numTree3", A1_operation3_check);
        });
        $("#A1_operation3_next").click(function() {
            $("#A1_observation3_link").click();
        });

        // A1_observation3
        $("#A1_observation3_link").click(function(){
            removeListener();
            ggbMode2_buy3();
            api.evalCommand("RunClickScript(unfoldTree)");
            ;
        });
        function A1_observation3_check() {
            let A1_observation3_input1_usrans = $("input[name=A1_observation3_input1]:checked").val();
            if (A1_observation3_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 3'}).then((result) => {
                    $("#A1_observation3_confirm").hide();
                    $("#A1_observation3_done").css({"opacity": "1"});
                    $("#A1_observation3_next").removeClass("d-none");
                    $("#A1_observation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_observation3_confirm").click(function() {
            A1_observation3_check();
        });
        $("#A1_observation3_next").click(function() {
            $("#A1_operation4_link").click();
        });

        // A1_operation4
        function A1_operation4_check() {
            let numInRegion3 = api.getValue("numInRegion3");
            if (numInRegion3 == 24) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 4'}).then((result)=> {
                    $("#A1_operation4_done").css({"opacity": "1"});
                    $("#A1_operation4_next").removeClass("d-none");
                    $("#A1_operation4_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A1_operation4_link").click(function() {
            removeListener();
            ggbMode3_buy3();
            api.registerObjectUpdateListener("numInRegion3", A1_operation4_check);
        });
        $("#A1_operation4_next").click(function() {
            $("#A1_observation4_link").click();
        });

        // A1_observation4
        $("#A1_observation4_link").click(function(){
            removeListener();
            // ggbMode3_buy3();
            // api.evalCommand("RunClickScript(unfoldTree)");
            ;
        });
        function A1_observation4_check() {
            let A1_observation4_input1_usrans = $("input[name=A1_observation4_input1]:checked").val();
            if (A1_observation4_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄 4'}).then((result) => {
                    $("#A1_observation4_confirm").hide();
                    $("#A1_observation4_done").css({"opacity": "1"});
                    $("#A1_observation4_next").removeClass("d-none");
                    $("#A1_observation4_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！請仔細觀察後再回答。'})
            }
        }
        $("#A1_observation4_confirm").click(function() {
            A1_observation4_check();
        });
        $("#A1_observation4_next").click(function() {
            $("#A1_investigation2_link").click();
        });

        // A1_investigation2
        $("#A1_investigation2_link").click(function(){
            removeListener();
        });
        function A1_investigation2_check() {
            var A1_investigation2_input1_usrans = $("input[name=A1_investigation2_input1]:checked").val();
            if (A1_investigation2_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 2'}).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({"opacity": "1"});
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！再試試看！'})
            }
        }
        $("#A1_investigation2_confirm").click(function() {
            A1_investigation2_check();
        });
        $("#A1_investigation2_next").click(function() {
            $("#A1_investigation3_link").click();
        });

        // A1_investigation3
        $("#A1_investigation3_link").click(function(){
            removeListener();
        });
        function A1_investigation3_check() {
            var A1_investigation3_input1_usrans = $("input[name=A1_investigation3_input1]:checked").val();
            if (A1_investigation3_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 3'}).then((result) => {
                    $("#A1_investigation3_confirm").hide();
                    $("#A1_investigation3_done").css({"opacity": "1"});
                    $("#A1_investigation3_next").removeClass("d-none");
                    $("#A1_investigation3_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！再試試看！'})
            }
        }
        $("#A1_investigation3_confirm").click(function() {
            A1_investigation3_check();
        });
        $("#A1_investigation3_next").click(function() {
            showA2();
        });
    }

    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A1_investigation1_link");
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
    $(".title > span ").html("D-10-3(2) 活動2：不完全相異物排列");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_D_10_3_2_A2;
    params.appletOnLoad = function(api){
        function ggbMode1_map1() {
            api.setValue("mode3", false);
            api.setValue("modeButton", false);
            api.setValue("modeInvest1", false);
            api.setValue("modeInvest2", false);
        };
        function ggbMode2_map1() {
            api.setValue("mode3", false);
            api.setValue("modeButton", true);
            api.setValue("modeInvest1", false);
            api.setValue("modeInvest2", false);
        };
        function ggbMode1_map2() {
            api.setValue("mode3", true);
            api.setValue("modeButton", false);
            api.setValue("modeInvest1", false);
            api.setValue("modeInvest2", false);
        };
        function ggbMode2_map2() {
            api.setValue("mode3", true);
            api.setValue("modeButton", true);
            api.setValue("modeInvest1", false);
            api.setValue("modeInvest2", false);
        };
        function ggbMode3_1() {
            api.setValue("mode3", false);
            api.setValue("modeButton", false);
            api.setValue("modeInvest1", true);
            api.setValue("modeInvest2", false);
        };
        function ggbMode3_2() {
            api.setValue("mode3", false);
            api.setValue("modeButton", false);
            api.setValue("modeInvest1", false);
            api.setValue("modeInvest2", true);
        };
        function removeListener() {
            api.unregisterObjectUpdateListener("numTree3");
            api.unregisterObjectUpdateListener("numTree4");
            api.unregisterObjectUpdateListener("numRecord");
        }

        // A2_operation1
        function A2_operation1_check() {
            let numTree3 = api.getValue("numTree3");
            if (numTree3 == 6) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 1'}).then((result)=> {
                    $("#A2_operation1_done").css({"opacity": "1"});
                    $("#A2_operation1_next").removeClass("d-none");
                    $("#A2_operation1_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A2_operation1_link").click(function() {
            removeListener();
            ggbMode1_map1();
            api.registerObjectUpdateListener("numTree3", A2_operation1_check);
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
            ggbMode1_map1();
            api.evalCommand("RunClickScript(unfoldTree)");
        });
        function A2_observation1_check() {
            let A2_observation1_input1_usrans = $("input[name=A2_observation1_input1]:checked").val();
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
            $("#A2_operation2_link").click();
        });

        // A2_operation2
        function A2_operation2_check() {
            let numRecord = api.getValue("numRecord");
            if (numRecord == 3) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 2'}).then((result)=> {
                    $("#A2_operation2_done").css({"opacity": "1"});
                    $("#A2_operation2_next").removeClass("d-none");
                    $("#A2_operation2_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A2_operation2_link").click(function() {
            removeListener();
            ggbMode2_map1();
            api.registerObjectUpdateListener("numRecord", A2_operation2_check);
        });
        $("#A2_operation2_next").click(function() {
            $("#A2_observation2_link").click();
        });

        // A2_observation2
        $("#A2_observation2_link").click(function(){
            removeListener();
        });
        function A2_observation2_check() {
            let A2_observation2_input1_usrans = $("input[name=A2_observation2_input1]:checked").val();
            if (A2_observation2_input1_usrans == 3) {
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
            let numTree4 = api.getValue("numTree4");
            if (numTree4 == 24) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 3'}).then((result)=> {
                    $("#A2_operation3_done").css({"opacity": "1"});
                    $("#A2_operation3_next").removeClass("d-none");
                    $("#A2_operation3_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A2_operation3_link").click(function() {
            removeListener();
            ggbMode1_map2();
            api.registerObjectUpdateListener("numTree4", A2_operation3_check);
        });
        $("#A2_operation3_next").click(function() {
            $("#A2_observation3_link").click();
        });

        // A2_observation3
        $("#A2_observation3_link").click(function(){
            removeListener();
            ggbMode1_map2();
            api.evalCommand("RunClickScript(unfoldTree)");
            ;
        });
        function A2_observation3_check() {
            let A2_observation3_input1_usrans = $("input[name=A2_observation3_input1]:checked").val();
            if (A2_observation3_input1_usrans == 2) {
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
        function A2_operation4_check() {
            let numRecord = api.getValue("numRecord");
            if (numRecord == 6) {
                removeListener();
                Swal.fire({icon: 'success', showConfirmButton: false,timer: 3000, text: '恭喜完成實驗操作 4'}).then((result)=> {
                    $("#A2_operation4_done").css({"opacity": "1"});
                    $("#A2_operation4_next").removeClass("d-none");
                    $("#A2_operation4_link img").css({"opacity": "1"});
                })
            }
        }    
        $("#A2_operation4_link").click(function() {
            removeListener();
            ggbMode2_map2();
            api.registerObjectUpdateListener("numRecord", A2_operation4_check);
        });
        $("#A2_operation4_next").click(function() {
            $("#A2_observation4_link").click();
        });

        // A2_observation4
        $("#A2_observation4_link").click(function(){
            removeListener();
        });
        function A2_observation4_check() {
            let A2_observation4_input1_usrans = $("input[name=A2_observation4_input1]:checked").val();
            if (A2_observation4_input1_usrans == 4) {
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
            $("#A2_investigation1_link").click();
        });

        // A2_investigation1
        $("#A2_investigation1_link").click(function(){
            ggbMode3_1();
            removeListener();
        });
        function A2_investigation1_check() {
            var A2_investigation1_input1_usrans = $("input[name=A2_investigation1_input1]:checked").val();
            if (A2_investigation1_input1_usrans == 4) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索 1'}).then((result) => {
                    $("#A2_investigation1_confirm").hide();
                    $("#A2_investigation1_done").css({"opacity": "1"});
                    $("#A2_investigation1_next").removeClass("d-none");
                    $("#A2_investigation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！再試試看！'})
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
            ggbMode3_2();
            removeListener();
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
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔！再試試看！'})
            }
        }
        $("#A2_investigation2_confirm").click(function() {
            A2_investigation2_check();
        });
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
