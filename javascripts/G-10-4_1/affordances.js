params.ggbBase64 = ggb_G_10_4_1_cover;
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
    // api.registerObjectClickListener("pic2", prereguisite);
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
    $(".title > span ").html("G-10-4(1) 活動1：直線與圓的關係");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_G_10_4_1_A1;

    params.appletOnLoad = function (api) {
        //活動內切換GGB
        function loadApplet(id, ggbBase64) {
            if (id != "ggbApplet01" && params.id == "ggbApplet01") {
                ggbApplet01Tmp = "";
                ggbApplet01Tmp = api.getBase64();
                //alert("record ggbApplet01");
            }

            if (params.id != id) {
                params.id = id;
                params.ggbBase64 = ggbBase64;
                applet = new GGBApplet(params, true);
                applet.inject('ggb-element');
            }
        }


        //操作一連結
        api.setValue("lmove", 0);
        api.setValue("rmove", 0);
        // api.setValue("mmove", 0);
        api.setValue("omove", 0);
        api.registerUpdateListener(A1_operation1_check);

        $("#A1_operation1_link").click(function(){
            loadApplet("ggbApplet01",ggb_G_10_4_1_A1);
            api.setValue("Atv2",0);
            api.setValue("lmove", 0);
            api.setValue("rmove", 0);
            // api.setValue("mmove", 0);
            api.setValue("omove", 0);
            api.registerUpdateListener(A1_operation1_check);
        });


        function A1_operation1_check() {
            var check1 = api.getValue("check1");
            if (check1) {
                //alert("操作一完成");
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1' }).then((result) => {
                    $("#A1_operation1_done").css({ "opacity": "1" });
                    $("#A1_operation1_next").removeClass("d-none");
                    $("#A1_operation1_link img").css({ "opacity": "1" });
                })
                api.unregisterUpdateListener(A1_operation1_check);
            }
        }

        $("#A1_operation1_next").click(function(){
            $("#A1_observation1_link").click();
        });



        //觀察一
        $("#A1_observation1_link").click(function(){
            loadApplet("ggbApplet01",ggb_G_10_4_1_A1);
            api.setValue("Atv2",0);
        });

        function A1_observation1_check() {
            var A1_obs1_input1_1 = $("#A1_observation1_input1_option1").prop("checked");
            var A1_obs1_input1_2 = $("#A1_observation1_input1_option2").prop("checked");
            var A1_obs1_input1_3 = $("#A1_observation1_input1_option3").prop("checked");
            var A1_obs1_input1_4 = $("#A1_observation1_input1_option4").prop("checked");
            if (A1_obs1_input1_1 == true && A1_obs1_input1_2 == true && A1_obs1_input1_3 == true && A1_obs1_input1_4 == false) {
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
                    $("#A1_observation1_confirm").hide();
                    $("#A1_observation1_done").css({"opacity": "1"});
                    $("#A1_observation1_next").removeClass("d-none");
                    $("#A1_observation1_link img").css({"opacity": "1"});
                })
            } else {
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了' })
            }
        }
        //觀察一確認
        $("#A1_observation1_confirm").click(function () {
            A1_observation1_check();
        });

        //觀察一下一步
        $("#A1_observation1_next").click(function () {
            $("#A1_investigation1_link").click();
        });


        //探索一
        $("#A1_investigation1_link").click(function () {
            loadApplet("ggbApplet01",ggb_G_10_4_1_A1);
            api.setValue("Atv2",0);
            $("#A1_investigation1_input1").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
            $("#A1_investigation1_input1").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
            $("#A1_investigation1_input1").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
            $("#A1_investigation1_input1").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
            $("#A1_investigation1_input2").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
            $("#A1_investigation1_input2").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
            $("#A1_investigation1_input2").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
            $("#A1_investigation1_input2").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
            $("#A1_investigation1_input3").next().find("a").eq(0).html(katex.renderToString("0", { throwOnError: false }));
            $("#A1_investigation1_input3").next().find("a").eq(1).html(katex.renderToString("1", { throwOnError: false }));
            $("#A1_investigation1_input3").next().find("a").eq(2).html(katex.renderToString("2", { throwOnError: false }));
            $("#A1_investigation1_input3").next().find("a").eq(3).html(katex.renderToString("3", { throwOnError: false }));
            $(".dropdown-menu li a").click(function () {
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });

        function A1_inv1_check(){
            var A1_inv1_input1=$("#A1_investigation1_input1").val();
            var A1_inv1_input2=$("#A1_investigation1_input2").val();
            var A1_inv1_input3=$("#A1_investigation1_input3").val();
            if(A1_inv1_input1=="0" && A1_inv1_input2=="1" && A1_inv1_input3=="2"){
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
                    $("#A1_investigation1_confirm").hide();
                    $("#A1_investigation1_done").css({"opacity": "1"});
                    $("#A1_investigation1_next").removeClass("d-none");
                    $("#A1_investigation1_link img").css({"opacity": "1"});
                })
            }else{
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
            }
        }

        //探索一確認
        $("#A1_investigation1_confirm").click(function(){
            A1_inv1_check();
        });

        //探索一結束下一步
        $("#A1_investigation1_next").click(function(){
            $("#A1_operation2_link").click();
        });

        //操作2
        $("#A1_operation2_link").click(function(){
            loadApplet("ggbApplet01",ggb_G_10_4_1_A1);
            api.setValue("Atv2",1);
            api.setValue("lmove", 0);
            api.setValue("rmove", 0);
            // api.setValue("mmove", 0);
            api.setValue("omove", 0);
            api.registerUpdateListener(A1_operation2_check);
        });

        function A1_operation2_check() {
            var check1 = api.getValue("check1");
            if (check1) {
                //alert("操作一完成");
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作2' }).then((result) => {
                    $("#A1_operation2_done").css({ "opacity": "1" });
                    $("#A1_operation2_next").removeClass("d-none");
                    $("#A1_operation2_link img").css({ "opacity": "1" });
                })
                api.unregisterUpdateListener(A1_operation2_check);
            }
        }

        $("#A1_operation2_next").click(function(){
            $("#A1_observation2_link").click();
        });


        //觀察2
        $("#A1_observation2_link").click(function(){
            loadApplet("ggbApplet01",ggb_G_10_4_1_A1);
            api.setValue("Atv2",1);
            $("#A1_observation2_input1").next().find("a").eq(0).html(katex.renderToString("r>d", { throwOnError: false }));
            $("#A1_observation2_input1").next().find("a").eq(1).html(katex.renderToString("r=d", { throwOnError: false }));
            $("#A1_observation2_input1").next().find("a").eq(2).html(katex.renderToString("r<d", { throwOnError: false }));

            $("#A1_observation2_input2").next().find("a").eq(0).html(katex.renderToString("r>d", { throwOnError: false }));
            $("#A1_observation2_input2").next().find("a").eq(1).html(katex.renderToString("r=d", { throwOnError: false }));
            $("#A1_observation2_input2").next().find("a").eq(2).html(katex.renderToString("r<d", { throwOnError: false }));
            
            $("#A1_observation2_input3").next().find("a").eq(0).html(katex.renderToString("r>d", { throwOnError: false }));
            $("#A1_observation2_input3").next().find("a").eq(1).html(katex.renderToString("r=d", { throwOnError: false }));
            $("#A1_observation2_input3").next().find("a").eq(2).html(katex.renderToString("r<d", { throwOnError: false }));
            
            $(".dropdown-menu li a").click(function () {
                $(this).parent().parent().prev().html($(this).html());
                $(this).parent().parent().prev().val($(this).parent().index());
            });
        });

        function A1_obs2_check(){
            var A1_obs2_input1=$("#A1_observation2_input1").val();
            var A1_obs2_input2=$("#A1_observation2_input2").val();
            var A1_obs2_input3=$("#A1_observation2_input3").val();
            if(A1_obs2_input1=="2" && A1_obs2_input2=="1" && A1_obs2_input3=="0"){
                Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄2'}).then((result) => {
                    $("#A1_observation2_confirm").hide();
                    $("#A1_observation2_done").css({"opacity": "1"});
                    $("#A1_observation2_next").removeClass("d-none");
                    $("#A1_observation2_link img").css({"opacity": "1"});
                })
            }else{
                Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
            }
        }

        $("#A1_observation2_confirm").click(function(){
            A1_obs2_check();
        });

        $("#A1_observation2_next").click(function(){
            $("#A1_investigation2_link").click();
        });

        

        //探索2(未完成-活動完成告示)
        $("#A1_investigation2_link").click(function(){
            loadApplet("ggbApplet02",ggb_G_10_4_1_A2);
        });


        function A1_inv2_check(){
            var A1_inv2_input1=$("#A1_investigation2_input1_option3").prop("checked");
            var A1_inv2_input2=$("#A1_investigation2_input2_option2").prop("checked");
            var check2 = api.getVisible("button4");
            
            if(A1_inv2_input1&&A1_inv2_input2&&check2){
                Swal.fire({ icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索2' }).then((result) => {
                    $("#A1_investigation2_confirm").hide();
                    $("#A1_investigation2_done").css({ "opacity": "1" });
                    $("#A1_investigation2_next").removeClass("d-none");
                    $("#A1_investigation2_link img").css({ "opacity": "1" });
                })
            }else if(!check2){
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '你還沒完成分類帽的考驗喔!' })

            }else{
                Swal.fire({ icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答' })
            }
        }

        $("#A1_investigation2_confirm").click(function(){
            A1_inv2_check();
        });

        $("#A1_investigation2_next").click(function(){

        });
    }


    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    showWorksheetsContents("A1_operation1_link")
    $(".outline").click(function () {
        showWorksheetsContents(this.id);
    });
}







$(document).ready(function () {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();
});
