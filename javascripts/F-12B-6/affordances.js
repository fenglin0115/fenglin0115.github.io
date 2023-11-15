var currentStage = "cover";
params.ggbBase64 = ggb_F_12B_6_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function removeListener() {
    var api = applet.getAppletObject();
    // api.unregisterObjectUpdateListener("A");
    // api.unregisterObjectUpdateListener("a");
    // api.unregisterObjectUpdateListener("b");
    // api.unregisterObjectUpdateListener("p");
    // api.unregisterObjectUpdateListener("e");
    // api.unregisterObjectUpdateListener("t");
    // api.unregisterObjectUpdateListener("o");
    // api.unregisterObjectUpdateListener("α");
}

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic2", prereguisite);
    api.registerObjectClickListener("pic3", goal);
    api.registerObjectClickListener("pic4", bigidea);
    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic6", backLists);

    function start() {
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        showA1();
    }

    function backLists() {
        location.href = "./index.html";
    }

    function prereguisite() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>F-12乙-5積分 S06</dt><dd>能應用定積分求出函數圖形與直線圍成的區域面積。</dd></dl>',
            heightAuto: false
        });
    }
    function goal() {
        Swal.fire({
            html: '',
            heightAuto: false
        });
    };
    function bigidea() {
        Swal.fire({
            html: '<dl style="text-align:left;"><dt>S04</dt><dd>能理解消費者剩餘的幾何意涵，並求其值。</dd><dt>S05</dt><dd>能理解生產者剩餘的幾何意涵，並求其值。</dd></dl>',
            heightAuto: false
        });
    };
}

function showA1() {
    showLoading();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("F-12乙-6 活動1：能理解消費者剩餘的幾何意涵，並求其值");
    params.id = "ggbApplet01_1";
    params.ggbBase64 = ggb_F_12B_6_A1_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}
function showA2() {
    showLoading();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("F-12乙-6 活動2：能理解生產者剩餘的幾何意涵，並求其值");
    params.id = "ggbApplet02_1";
    params.ggbBase64 = ggb_F_12B_6_A2_1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01_1", ggb_F_12B_6_A1_1);
}

function A1_operation1_link() {
    removeListener();
    // if (!initA1) { 
        Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">商品的需求量是指消費者願意且有能力購買的數量。影響需求量的因素有很多，其中最為關鍵的是商品的訂價，現在就讓我們來觀察它們的關係吧！</div>'});
        // initA1 = true;
    // };
    var api = applet.getAppletObject();
}

// function A1_operation1_check() {
//     var api =applet.getAppletObject();
//     if (xcoordsA ==3 && a > 0 && showTrajectoryP == true && showGraph == true) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
//             $("#A1_operation1_done").css({"opacity": "1"});
//             $("#A1_operation1_next").removeClass("d-none");
//             $("#A1_operation1_link img").css({"opacity": "1"});
//         })
//     }
// }

function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01_1", ggb_F_12B_6_A1_1);
}

function A1_observation1_link() {
    removeListener();
    // $(".dropdown-menu li a").click(function(){
    //     $(this).parent().parent().prev().html($(this).html());
    //     $(this).parent().parent().prev().val($(this).parent().index());
    // });
}

// function A1_observation1_check() {
//     var api = applet.getAppletObject();
//     if (A1_observation1_input1_usrans == A1_observation1_input1_correctAns && A1_observation1_input2_usrans == A1_observation1_input2_correctAns && A1_observation1_input3_usrans == A1_observation1_input3_correctAns) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A1_observation1_confirm").hide();
//             $("#A1_observation1_done").css({"opacity": "1"});
//             $("#A1_observation1_next").removeClass("d-none");
//             $("#A1_observation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01_1", ggb_F_12B_6_A1_1);
}

function A1_investigation1_link() {
    removeListener();
}

// function A1_investigation1_check() {
//     var A1_investigation1_input1_usrans1 = $('input[name=A1_investigation1_input1_g1]:checked').val();
//     var A1_investigation1_input1_usrans2 = $('input[name=A1_investigation1_input1_g2]:checked').val();
//     var A1_investigation1_input2_usrans = $('input[name=A1_investigation1_input2]:checked').val();
//     var A1_investigation1_input3_usrans1 = $("#A1_investigation1_input3_option1").prop("checked");
//     var A1_investigation1_input3_usrans2 = $("#A1_investigation1_input3_option2").prop("checked");
//     var A1_investigation1_input3_usrans3 = $("#A1_investigation1_input3_option3").prop("checked");
//     var A1_investigation1_input3_usrans4 = $("#A1_investigation1_input3_option4").prop("checked");
//     if(A1_investigation1_input1_usrans1==3 && A1_investigation1_input1_usrans2 == 6 && A1_investigation1_input2_usrans == 1 && A1_investigation1_input3_usrans1==false && A1_investigation1_input3_usrans2==true && A1_investigation1_input3_usrans3==true && A1_investigation1_input3_usrans4==false) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A1_investigation1_confirm").hide();
//             $("#A1_investigation1_done").css({"opacity": "1"});
//             $("#A1_investigation1_next").removeClass("d-none");
//             $("#A1_investigation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
//     }
// }

function A1_operation2() {
    currentStage = "A1_operation2";
    loadApplet("ggbApplet01_2", ggb_F_12B_6_A1_2);
}

function A1_operation2_link() {
    removeListener();
    Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">在實際的狀況中，有許多購買商品的消費者，也有許多不同的價格，因此圖中的點會更多且更密，最後形成一條需求曲線。</div>'});
}

// function A1_operation2_check() {
//     var api = applet.getAppletObject();
//     api.getValue("a")>0 ? $("#A1_operation2_confirm").removeClass("d-none") : $("#A1_operation2_confirm").addClass("d-none");
// }

function A1_observation2() {
    currentStage = "A1_observation2";
    loadApplet("ggbApplet01_2", ggb_F_12B_6_A1_2);
}

function A1_observation2_link() {
    removeListener();
}

// function A1_observation2_check() {
//     var api = applet.getAppletObject();
//     if (A1_observation2_input1_usrans == A1_observation2_input1_correctAns && A1_observation2_input2_usrans == A1_observation2_input2_correctAns && A1_observation2_input3_usrans == A1_observation2_input3_correctAns) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A1_observation2_confirm").hide();
//             $("#A1_observation2_done").css({"opacity": "1"});
//             $("#A1_observation2_next").removeClass("d-none");
//             $("#A1_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A1_investigation2() {
    currentStage = "A1_investigation2";
    loadApplet("ggbApplet01_2", ggb_F_12B_6_A1_2);
}

function A1_investigation2_link() {
    removeListener();
}

// function A1_investigation2_check() {
//     var A1_investigation2_input1_usrans1 = $('input[name=A1_investigation2_input1_g1]:checked').val();
//     var A1_investigation2_input1_usrans2 = $('input[name=A1_investigation2_input1_g2]:checked').val();
//     var A1_investigation2_input2_usrans = $('input[name=A1_investigation2_input2]:checked').val();
//     var A1_investigation2_input3_usrans1 = $("#A1_investigation2_input3_option1").prop("checked");
//     var A1_investigation2_input3_usrans2 = $("#A1_investigation2_input3_option2").prop("checked");
//     var A1_investigation2_input3_usrans3 = $("#A1_investigation2_input3_option3").prop("checked");
//     var A1_investigation2_input3_usrans4 = $("#A1_investigation2_input3_option4").prop("checked");
//     if(A1_investigation2_input1_usrans1==3 && A1_investigation2_input1_usrans2 == 6 && A1_investigation2_input2_usrans == 1 && A1_investigation2_input3_usrans1==false && A1_investigation2_input3_usrans2==true && A1_investigation2_input3_usrans3==true && A1_investigation2_input3_usrans4==false) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A1_investigation2_confirm").hide();
//             $("#A1_investigation2_done").css({"opacity": "1"});
//             $("#A1_investigation2_next").removeClass("d-none");
//             $("#A1_investigation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
//     }
// }

function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02_1", ggb_F_12B_6_A2_1);
}

function A2_operation1_link() {
    removeListener();
    Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">在市場上，有一個供給函數，在不同的價格，考量其成本與其他因素，生產端願意供給的量會有所不同。</div>'});
    var api = applet.getAppletObject();
}

// function A2_operation1_check() {
//     var api =applet.getAppletObject();
//     if (xcoordsA ==3 && a > 0 && showTrajectoryP == true && showGraph == true) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成實驗操作1'}).then((result) => {
//             $("#A2_operation1_done").css({"opacity": "1"});
//             $("#A2_operation1_next").removeClass("d-none");
//             $("#A2_operation1_link img").css({"opacity": "1"});
//         })
//     }
// }

function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02_1", ggb_F_12B_6_A2_1);
}

function A2_observation1_link() {
    removeListener();
}

// function A2_observation1_check() {
//     var api = applet.getAppletObject();
//     if (A2_observation1_input1_usrans == A2_observation1_input1_correctAns && A2_observation1_input2_usrans == A2_observation1_input2_correctAns && A2_observation1_input3_usrans == A2_observation1_input3_correctAns) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A2_observation1_confirm").hide();
//             $("#A2_observation1_done").css({"opacity": "1"});
//             $("#A2_observation1_next").removeClass("d-none");
//             $("#A2_observation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02_1", ggb_F_12B_6_A2_1);
}

function A2_investigation1_link() {
    removeListener();
}

// function A2_investigation1_check() {
//     var A2_investigation1_input1_usrans1 = $('input[name=A2_investigation1_input1_g1]:checked').val();
//     var A2_investigation1_input1_usrans2 = $('input[name=A2_investigation1_input1_g2]:checked').val();
//     var A2_investigation1_input2_usrans = $('input[name=A2_investigation1_input2]:checked').val();
//     var A2_investigation1_input3_usrans1 = $("#A2_investigation1_input3_option1").prop("checked");
//     var A2_investigation1_input3_usrans2 = $("#A2_investigation1_input3_option2").prop("checked");
//     var A2_investigation1_input3_usrans3 = $("#A2_investigation1_input3_option3").prop("checked");
//     var A2_investigation1_input3_usrans4 = $("#A2_investigation1_input3_option4").prop("checked");
//     if(A2_investigation1_input1_usrans1==3 && A2_investigation1_input1_usrans2 == 6 && A2_investigation1_input2_usrans == 1 && A2_investigation1_input3_usrans1==false && A2_investigation1_input3_usrans2==true && A2_investigation1_input3_usrans3==true && A2_investigation1_input3_usrans4==false) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A2_investigation1_confirm").hide();
//             $("#A2_investigation1_done").css({"opacity": "1"});
//             $("#A2_investigation1_next").removeClass("d-none");
//             $("#A2_investigation1_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
//     }
// }

function A2_operation2() {
    currentStage = "A2_operation2";
    loadApplet("ggbApplet02_2", ggb_F_12B_6_A2_2);
}

function A2_operation2_link() {
    removeListener();
    Swal.fire({html: '<div style="text-align: left; font-size: 16px; line-height: 2;">提供商品的單位（如生產者），在市場上會有一個供給函數，在不同的價格，考量其成本與其他因素，生產端願意供給的量會有所不同，一般來說，我們用 y = S(x) 來表示商品價格 y 與供給量 x 的對應關係，稱 y = S(x) 或 S(x) 為此商品的供給函數。</div>'});
}

// function A2_operation2_check() {
//     var api = applet.getAppletObject();
//     api.getValue("a")>0 ? $("#A2_operation2_confirm").removeClass("d-none") : $("#A2_operation2_confirm").addClass("d-none");
// }


function A2_observation2() {
    currentStage = "A2_observation2";
    loadApplet("ggbApplet02_2", ggb_F_12B_6_A2_2);
}

function A2_observation2_link() {
    removeListener();
}

// function A2_observation2_check() {
//     var api = applet.getAppletObject();
//     if (A2_observation2_input1_usrans == A2_observation2_input1_correctAns && A2_observation2_input2_usrans == A2_observation2_input2_correctAns && A2_observation2_input3_usrans == A2_observation2_input3_correctAns) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成觀察記錄1'}).then((result) => {
//             $("#A2_observation2_confirm").hide();
//             $("#A2_observation2_done").css({"opacity": "1"});
//             $("#A2_observation2_next").removeClass("d-none");
//             $("#A2_observation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請仔細觀察後再回答'})
//     }
// }

function A2_investigation2() {
    currentStage = "A2_investigation2";
    loadApplet("ggbApplet02_2", ggb_F_12B_6_A2_2);
}

function A2_investigation2_link() {
    removeListener();
}

// function A2_investigation2_check() {
//     var A2_investigation2_input1_usrans1 = $('input[name=A2_investigation2_input1_g1]:checked').val();
//     var A2_investigation2_input1_usrans2 = $('input[name=A2_investigation2_input1_g2]:checked').val();
//     var A2_investigation2_input2_usrans = $('input[name=A2_investigation2_input2]:checked').val();
//     var A2_investigation2_input3_usrans1 = $("#A2_investigation2_input3_option1").prop("checked");
//     var A2_investigation2_input3_usrans2 = $("#A2_investigation2_input3_option2").prop("checked");
//     var A2_investigation2_input3_usrans3 = $("#A2_investigation2_input3_option3").prop("checked");
//     var A2_investigation2_input3_usrans4 = $("#A2_investigation2_input3_option4").prop("checked");
//     if(A2_investigation2_input1_usrans1==3 && A2_investigation2_input1_usrans2 == 6 && A2_investigation2_input2_usrans == 1 && A2_investigation2_input3_usrans1==false && A2_investigation2_input3_usrans2==true && A2_investigation2_input3_usrans3==true && A2_investigation2_input3_usrans4==false) {
//         Swal.fire({icon: 'success', showConfirmButton: false, timer: 3000, text: '恭喜完成問題探索1'}).then((result) => {
//             $("#A2_investigation2_confirm").hide();
//             $("#A2_investigation2_done").css({"opacity": "1"});
//             $("#A2_investigation2_next").removeClass("d-none");
//             $("#A2_investigation2_link img").css({"opacity": "1"});
//         })
//     } else {
//         Swal.fire({icon: 'error', showConfirmButton: false, timer: 3000, text: '答案不對喔! 請再想想看哪裡做錯了'})
//     }
// }

$(document).ready(function() {
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });
    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
    });
    $("#A1_observation1_link").click(function() {
        A1_observation1();
    });
    // $("#A1_observation1_confirm").click(function() {
    //     A1_observation1_check();
    // });
    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });
    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });
    // $("#A1_investigation1_confirm").click(function() {
    //     A1_investigation1_check();
    // });
    $("#A1_investigation1_next").click(function() {
        $("#A1_operation2_link").click();
    });
    $("#A1_operation2_link").click(function() {
        A1_operation2();
    });
    // $("#A1_operation2_confirm").click(function() {
    //     A1_operation2_confirm();
    // });
    $("#A1_operation2_next").click(function() {
        $("#A1_observation2_link").click();
    });
    $("#A1_observation2_link").click(function() {
        A1_observation2();
    });
    // $("#A1_observation2_confirm").click(function() {
    //     A1_observation2_check();
    // });
    $("#A1_observation2_next").click(function() {
        $("#A1_investigation2_link").click();
    });
    $("#A1_investigation2_link").click(function() {
        A1_investigation2();
    });
    $("#A1_investigation2_confirm").click(function() {
        A1_investigation2_check();
    });
    $("#A1_investigation2_next").click(function() {
        showA2();
    });
    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });
    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
    });
    $("#A2_observation1_link").click(function() {
        A2_observation1();
    });
    // $("#A2_observation1_confirm").click(function() {
    //     A2_observation1_check();
    // });
    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });
    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });
    // $("#A2_investigation1_confirm").click(function() {
    //     A2_investigation1_check();
    // });
    $("#A2_investigation1_next").click(function() {
        $("#A2_operation2_link").click();
    });
    $("#A2_operation2_link").click(function() {
        A2_operation2();
    });
    // $("#A2_operation2_confirm").click(function() {
    //     A2_operation2_confirm();
    // });
    $("#A2_operation2_next").click(function() {
        $("#A2_observation2_link").click();
    });
    $("#A2_observation2_link").click(function() {
        A2_observation2();
    });
    // $("#A2_observation2_confirm").click(function() {
    //     A2_observation2_check();
    // });
    $("#A2_observation2_next").click(function() {
        $("#A2_investigation2_link").click();
    });
    $("#A2_investigation2_link").click(function() {
        A2_investigation2();
    });
    $("#A2_investigation2_confirm").click(function() {
        A2_investigation2_check();
    });
    $("#A2_investigation2_next").click(function() {
        ;
    });
});