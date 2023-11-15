var currentStage = "cover";
params.ggbBase64 = ggb_A_12B_1_cover;
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});

function coverUtility() {
    var api = applet.getAppletObject();
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
}


function removeListener() {
    var api = applet.getAppletObject();
    api.unregisterObjectUpdateListener("P");
}

function showA1() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動1");
    $("#navbarDropdown").val("活動1");
    $(".outlines").hide();
    $("#outlineA1").show();
    $(".title > span ").html("A-12B-1 活動1：");
    params.id = "ggbApplet01";
    params.ggbBase64 = ggb_A_12B_1_A1;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A1_operation1";
    showWorksheetsContents("A1_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

function showA2() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $("#navbarDropdown").text("活動2");
    $("#navbarDropdown").val("活動2");
    $(".outlines").hide();
    $("#outlineA2").show();
    $(".title > span ").html("A-12B-1 活動2：");
    params.id = "ggbApplet02";
    params.ggbBase64 = ggb_A_12B_1_A2;
    applet = new GGBApplet(params, true);
    applet.inject('ggb-element');
    currentStage = "A2_operation1";
    showWorksheetsContents("A2_operation1_link");
    $(".outline").click(function() {
        showWorksheetsContents(this.id);
    });
}

// 活動一實驗操作一
function A1_operation1() {
    currentStage = "A1_operation1";
    loadApplet("ggbApplet01", ggb_A_12B_1_A1);
}

function A1_operation1_link() {


}

function A1_operation1_check() {

}

function A1_operation1_confirm() {

}

// 活動一觀察記錄一
function A1_observation1() {
    currentStage = "A1_observation1";
    loadApplet("ggbApplet01", ggb_A_12B_1_A1);
}

function A1_observation1_link() {

}

function A1_observation1_check() {

}

// 活動一問題探索一
function A1_investigation1() {
    currentStage = "A1_investigation1";
    loadApplet("ggbApplet01", ggb_A_12B_1_A1);
}

function A1_investigation1_link() {
    removeListener();

}

function A1_investigation1_check() {

}


// 活動二實驗操作一
function A2_operation1() {
    currentStage = "A2_operation1";
    loadApplet("ggbApplet02", ggb_A_12B_1_A2);
}

function A2_operation1_link() {
    removeListener();

}

function A2_operation1_check() {

}

function A2_operation1_confirm() {

}

// 活動二觀察記錄一
function A2_observation1() {
    currentStage = "A2_observation1";
    loadApplet("ggbApplet02", ggb_A_12B_1_A2);
}

function A2_observation1_link() {
    removeListener();

}

function A2_observation1_check() {

}

// 活動二問題探索一
function A2_investigation1() {
    currentStage = "A2_investigation1";
    loadApplet("ggbApplet02", ggb_A_12B_1_A2);
}

function A2_investigation1_link() {
    removeListener();

}

function A2_investigation1_check() {

}



$(document).ready(function() {

    // 活動一
    $("#A1_operation1_link").click(function() {
        A1_operation1();
    });

    $("#A1_operation1_next").click(function() {
        $("#A1_observation1_link").click();
    });

    $("#A1_observation1_link").click(function() {
        A1_observation1();
    });

    $("#A1_observation1_next").click(function() {
        $("#A1_investigation1_link").click();
    });

    $("#A1_investigation1_link").click(function() {
        A1_investigation1();
    });

    $("#A1_investigation1_next").click(function() {
        $("#A2_operation1_link").click();
    });


    // 活動二
    $("#A2_operation1_link").click(function() {
        A2_operation1();
    });

    $("#A2_operation1_next").click(function() {
        $("#A2_observation1_link").click();
    });

    $("#A2_observation1_link").click(function() {
        A2_observation1();
    });

    $("#A2_observation1_next").click(function() {
        $("#A2_investigation1_link").click();
    });

    $("#A2_investigation1_link").click(function() {
        A2_investigation1();
    });

});
