var params = {
  id: "ggbAppletCover",
  ggbBase64: ggb_G_10_3_cover,
  width: 960,
  height: 600,
  enableRightClick: false,
  enableLabelDrags: false,
  enableShiftDragZoom: false,
  showZoomButtons: false,
  errorDialogsActive: false,
  showMenuBar: false,
  showToolBar: false,
  showToolBarHelp: false,
  showAlgebraInput: false,
  showResetIcon: false,
  showFullscreenButton: false,
  showAnimationButton: false,
  useBrowserForJS: true,
  scaleContainerClass: "ggbSetting",
  autoHeight: true,
  allowUpscale: true,
  borderColor: "#FFFFFF",
};

params.appletOnLoad = function (api) {
  function start() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
    $(".header_wrapper").show();
    $(".title").show();
    $(".title > span ").html("G-10-3 活動1：觀察圓方程式的圓心位置與半徑大小");
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
};

var applet = new GGBApplet(params, true);
applet.setHTML5Codebase("GeoGebra/HTML5/5.0/web3d/");
window.addEventListener("load", function () {
  applet.inject("ggb-element");
});

//common
function ggbOnInit() {
  $("#load-wrapper").removeClass("d-flex");
  $("#load-wrapper").hide();
}

//common
function showManipulativesCover() {
  $(".header_wrapper").hide();
  $(".title").hide();
  $(".worksheets").hide();
  $(".ggbSetting").css({
    width: "calc(100vw - 1.2rem)",
    "max-width": "calc((100vmin - 1.2rem) / 10 * 16)",
    margin: "0 auto",
  });
}

//common
var current_section = "";
var current_answer = "";
function showWorksheetsContents(x) {
  $(".operation, .observation, .investigation").hide();
  applet.getAppletObject().setValue("A2O1", false);
  applet.getAppletObject().setValue("A3O1", false);
  current_section = x.replace("_link", ""); //紀錄現在狀態

  if (x.indexOf("A2") != -1) {
    applet.getAppletObject().setValue("level", 0);
  } else {
    applet.getAppletObject().setValue("level", 1);
  }

  switch (x) {
    case "A1_operation1_link":
      $("#A1_operation1").fadeIn();
      break;
    case "A1_observation1_link":
      $("#A1_observation1").fadeIn();
      break;
    case "A1_investigation1_link":
      $("#A1_investigation1").fadeIn();
      break;

    case "A2_operation1_link":
      $("#A2_operation1").fadeIn();
      applet.getAppletObject().setValue("level", 0);
      break;
    case "A2_observation1_link":
      $("#A2_observation1").fadeIn();
      applet.getAppletObject().setValue("level", 0);
      break;
    case "A2_observation2_link":
      $("#A2_observation2").fadeIn();
      applet.getAppletObject().setValue("level", 0);
      break;
    case "A2_investigation1_link":
      $("#A2_investigation1").fadeIn();
      applet.getAppletObject().setValue("level", 0);
      break;
    case "A2_investigation2_link":
      $("#A2_investigation2").fadeIn();
      applet.getAppletObject().setValue("level", 4);
      break;
    case "A3_operation1_link":
      $("#A3_operation1").fadeIn();
      applet.getAppletObject().setValue("step", 1);
      break;
    case "A3_observation1_link":
      $("#A3_observation1").fadeIn();
      applet.getAppletObject().setValue("step", 1);
      break;
    case "A3_investigation1_link":
      $("#A3_investigation1").fadeIn();
      applet.getAppletObject().setValue("step", 3);

      break;
    case "A4_operation1_link":
      $("#A4_operation1").fadeIn();
      break;
    case "A4_observation1_link":
      $("#A4_observation1").fadeIn();
      applet.getAppletObject().setValue("A2O1", true);
      applet.getAppletObject().setValue("level", 2);
      var x = applet.getAppletObject().getXcoord("BO");
      var y = applet.getAppletObject().getYcoord("BO");
      var r = applet.getAppletObject().getValue("Bra");
      if (x == 0) {
        $("[for=A4_observation1_input1_option1]").html(
          katex.renderToString("x^2+(y-" + Math.abs(y) + ")^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option2]").html(
          katex.renderToString("x^2+(y+" + Math.abs(y) + ")^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option3]").html(
          katex.renderToString("(x-" + Math.abs(y) + ")^2+y^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option4]").html(
          katex.renderToString("(x+" + Math.abs(y) + ")^2+y^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        current_answer = Math.sign(y) > 0 ? 0 : 1;
      } else if (y == 0) {
        $("[for=A4_observation1_input1_option1]").html(
          katex.renderToString("x^2+(y-" + Math.abs(x) + ")^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option2]").html(
          katex.renderToString("x^2+(y+" + Math.abs(x) + ")^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option3]").html(
          katex.renderToString("(x-" + Math.abs(x) + ")^2+y^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        $("[for=A4_observation1_input1_option4]").html(
          katex.renderToString("(x+" + Math.abs(x) + ")^2+y^2=" + r + "^2", {
            throwOnError: false,
          })
        );
        current_answer = Math.sign(x) > 0 ? 2 : 3;
      } else {
        $("[for=A4_observation1_input1_option1]").html(
          katex.renderToString(
            "(x-" + Math.abs(x) + ")^2+(y-" + Math.abs(y) + ")^2=" + r + "^2",
            { throwOnError: false }
          )
        );
        $("[for=A4_observation1_input1_option2]").html(
          katex.renderToString(
            "(x+" + Math.abs(x) + ")^2+(y-" + Math.abs(y) + ")^2=" + r + "^2",
            { throwOnError: false }
          )
        );
        $("[for=A4_observation1_input1_option3]").html(
          katex.renderToString(
            "(x-" + Math.abs(x) + ")^2+(y+" + Math.abs(y) + ")^2=" + r + "^2",
            { throwOnError: false }
          )
        );
        $("[for=A4_observation1_input1_option4]").html(
          katex.renderToString(
            "(x+" + Math.abs(x) + ")^2+(y+" + Math.abs(y) + ")^2=" + r + "^2",
            { throwOnError: false }
          )
        );
        switch (Math.sign(x) + Math.sign(y)) {
          case 2:
            current_answer = 0;
            break;
          case 0:
            current_answer = Math.sign(x) > 0 ? 2 : 1;
            break;
          case -2:
            current_answer = 3;
            break;
          default:
            break;
        }
      }

      break;
    case "A4_investigation1_link":
      $("#A4_investigation1").fadeIn();
      break;
    case "A5_operation1_link":
      $("#A5_operation1").fadeIn();
      break;
    case "A5_observation1_link":
      $("#A5_observation1").fadeIn();
      applet.getAppletObject().setValue("A3O1", true);
      applet.getAppletObject().setValue("level", 3);
      var x = applet.getAppletObject().getValue("Ch");
      var y = applet.getAppletObject().getValue("Ck");
      var r = applet.getAppletObject().getValue("Cra");
      $("#A5Question").html(
        katex.renderToString(
          "(x"+(Math.sign(x)==0?"":Math.sign(x)<0?"+"+(-x):(-x))  + ")^2+(y"+(Math.sign(y)==0?"":Math.sign(y)<0?"+"+(-y):(-y)) + ")^2=" + r + "^2",          { throwOnError: false }
        )
      )
      break;
    case "A5_investigation1_link":
      $("#A5_investigation1").fadeIn();
      break;
    case "A6_operation1_link":
      $("#A6_operation1").fadeIn();
      break;
    case "A6_observation1_link":
      $("#A6_observation1").fadeIn();
      break;
    case "A6_investigation1_link":
      $("#A6_investigation1").fadeIn();
      break;
    default:
      break;
  }
}

function selectActivity() {
  $("#activitySelected").on("click", "li a", function () {
    $("#navbarDropdown").text($(this).text());
    $("#navbarDropdown").val($(this).text());
    switch ($(this).text()) {
      case "活動1":
        showA1();
        break;
      case "活動2":
        showA2();
        break;
      case "活動3":
        showA3();
        break;
      case "活動4":
        showA4();
        break;
      case "活動5":
        showA5();
        break;
      case "活動6":
        showA6();
        break;
      default:
        break;
    }
  });
}

function showA1() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動1");
  $("#navbarDropdown").val("活動1");
  $(".outlines").hide();
  $("#outlineA1").show();
  $(".title > span ").html("G-10-3 活動1：觀察與O點等距離的軌跡形成的圖形");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_G_10_3_A1;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  // params.appletOnLoad = function(api) {
  //     $("#A1_operation2_link").click(function() {
  //         api.setValue("showAxis", true);
  //         api.setValue("showInfoText", true);
  //         api.setValue("showDashboard", true);
  //     });
  // }
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A1_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A1_operation1";
}

function showA2() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動2");
  $("#navbarDropdown").val("活動2");
  $(".outlines").hide();
  $("#outlineA2").show();
  $(".title > span ").html("G-10-3 活動2：觀察圓上的點到圓心的距離");
  params.id = "ggbApplet02";
  params.ggbBase64 = ggb_G_10_3_A2;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A2_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A2_operation1";
}
function showA3() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動3");
  $("#navbarDropdown").val("活動3");
  $(".outlines").hide();
  $("#outlineA3").show();
  $(".title > span ").html("G-10-3 活動3：圓方程式");
  params.id = "ggbApplet03";
  params.ggbBase64 = ggb_G_10_3_A3;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A3_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A3_operation1";
}
function showA4() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動4");
  $("#navbarDropdown").val("活動4");
  $(".outlines").hide();
  $("#outlineA4").show();
  $(".title > span ").html("G-10-3 活動4：亂數給定圖形，判斷方程式是否正確");
  params.id = "ggbApplet04";
  params.ggbBase64 = ggb_G_10_3_A4_A5;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A4_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A4_operation1";
}

function showA5() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動5");
  $("#navbarDropdown").val("活動5");
  $(".outlines").hide();
  $("#outlineA5").show();
  $(".title > span ").html(
    "G-10-3 活動5：利用圓方程式判斷圓在坐標平面上的位置"
  );
  params.id = "ggbApplet05";
  params.ggbBase64 = ggb_G_10_3_A4_A5; //共用A4
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A5_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A5_operation1";
}

function showA6() {
  $("#load-wrapper").addClass("d-flex");
  $("#load-wrapper").show();
  $("#navbarDropdown").text("活動6");
  $("#navbarDropdown").val("活動6");
  $(".outlines").hide();
  $("#outlineA6").show();
  $(".title > span ").html("G-10-3 活動6：利用圓方程式判斷點與圓的相對位置");
  params.id = "ggbApplet06";
  params.ggbBase64 = ggb_G_10_3_A6;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
  };
  applet = new GGBApplet(params, true);
  applet.inject("ggb-element");
  $(".operation, .observation, .investigation").hide();
  $("#A6_operation1").show();
  $(".outline").click(function () {
    showWorksheetsContents(this.id);
  });
  current_section = "A6_operation1";
}

$(document).ready(function () {
  showManipulativesCover();
  $(".operation, .observation, .investigation").hide();
  selectActivity();

  // 以下處理next和confirm按鈕
  var section_list = [
    "A1_operation1",
    "A1_observation1",
    "A1_investigation1",
    "A2_operation1",
    "A2_observation1",
    "A2_investigation1",
    "A2_investigation2",
    "A3_operation1",
    "A3_observation1",
    "A3_investigation1",
    "A4_operation1",
    "A4_observation1",
    "A4_investigation1",
    "A5_operation1",
    "A5_observation1",
    "A5_investigation1",
    "A6_operation1",
    "A6_observation1",
    "A6_investigation1",
  ];

  section_list.forEach((id, index) => {
    $("#" + id + "_next").click(() => {
      $("#" + section_list[index + 1] + "_link").click();
      if (index < section_list.length - 1) {
        if (id[1] != section_list[index + 1][1]) {
          switch (section_list[index + 1][1]) {
            case "2":
              showA2();
              break;
            case "3":
              showA3();
              break;
            case "4":
              showA4();
              break;
            case "5":
              showA5();
              break;
            case "6":
              showA6();
              break;

            default:
              break;
          }
        }
      }
    });
    $("#" + id + "_confirm").click(() => {
      checkdone(current_section);
    });
  });
  $("#A4_observation1_confirm_2").click(() => {
    checkdone(current_section);
  });
  $("#A5_observation1_confirm_2").click(() => {
    checkdone(current_section);
  });
  
  // 以下處理dropdown-menu
  $(".worksheets .dropdown-menu li a").click(function () {
    $(this).parent().parent().prev().html($(this).html());
    $(this).parent().parent().prev().val($(this).parent().index());
  });

  // 以下處理互動性的按鈕

  $("#A4_observation1_nextQuestion").click(() => {
    $(
      "[for=A4_observation1_input1_option" + (current_answer + 1) + "]"
    ).removeClass("text-danger");
    var y = Math.floor(Math.random() * 7) - 3;
    var x = Math.floor(Math.random() * 7) - 3;
    x = x == y ? y + 1 : x;
    var r = Math.floor(Math.random() * 4) + 1;
    applet.getAppletObject().setValue("Bk", y);
    applet.getAppletObject().setValue("Bh", x);
    applet.getAppletObject().setValue("Bra", r);

    if (x == 0) {
      $("[for=A4_observation1_input1_option1]").html(
        katex.renderToString("x^2+(y-" + Math.abs(y) + ")^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option2]").html(
        katex.renderToString("x^2+(y+" + Math.abs(y) + ")^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option3]").html(
        katex.renderToString("(x-" + Math.abs(y) + ")^2+y^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option4]").html(
        katex.renderToString("(x+" + Math.abs(y) + ")^2+y^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      current_answer = Math.sign(y) > 0 ? 0 : 1;
    } else if (y == 0) {
      $("[for=A4_observation1_input1_option1]").html(
        katex.renderToString("x^2+(y-" + Math.abs(x) + ")^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option2]").html(
        katex.renderToString("x^2+(y+" + Math.abs(x) + ")^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option3]").html(
        katex.renderToString("(x-" + Math.abs(x) + ")^2+y^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      $("[for=A4_observation1_input1_option4]").html(
        katex.renderToString("(x+" + Math.abs(x) + ")^2+y^2=" + r + "^2", {
          throwOnError: false,
        })
      );
      current_answer = Math.sign(x) > 0 ? 2 : 3;
    } else {
      $("[for=A4_observation1_input1_option1]").html(
        katex.renderToString(
          "(x-" + Math.abs(x) + ")^2+(y-" + Math.abs(y) + ")^2=" + r + "^2",
          { throwOnError: false }
        )
      );
      $("[for=A4_observation1_input1_option2]").html(
        katex.renderToString(
          "(x+" + Math.abs(x) + ")^2+(y-" + Math.abs(y) + ")^2=" + r + "^2",
          { throwOnError: false }
        )
      );
      $("[for=A4_observation1_input1_option3]").html(
        katex.renderToString(
          "(x-" + Math.abs(x) + ")^2+(y+" + Math.abs(y) + ")^2=" + r + "^2",
          { throwOnError: false }
        )
      );
      $("[for=A4_observation1_input1_option4]").html(
        katex.renderToString(
          "(x+" + Math.abs(x) + ")^2+(y+" + Math.abs(y) + ")^2=" + r + "^2",
          { throwOnError: false }
        )
      );
      switch (Math.sign(x) + Math.sign(y)) {
        case 2:
          current_answer = 0;
          break;
        case 0:
          current_answer = Math.sign(x) > 0 ? 2 : 1;
          break;
        case -2:
          current_answer = 3;
          break;
        default:
          break;
      }
    }

    $("#A4_observation1_nextQuestion").addClass("d-none");
    if ($("#A4_observation1_next").css("display")=="none"){
      $("#A4_observation1_confirm").removeClass("d-none");
    }else{
      $("#A4_observation1_confirm_2").removeClass("d-none");
    } 
  });

  $("#A5_observation1_nextQuestion").click(()=>{
    var y = Math.floor(Math.random() * 7) - 3;
    var x = Math.floor(Math.random() * 7) - 3;
    var r = Math.floor(Math.random() * 4) + 1;
    applet.getAppletObject().setValue("Ck", y);
    applet.getAppletObject().setValue("Ch", x);
    applet.getAppletObject().setValue("Cra", r);
    applet.getAppletObject().setValue("ShowA5Ans",false)
    $("#A5Question").html(
      katex.renderToString(
        "(x"+(Math.sign(x)==0?"":Math.sign(x)<0?"+"+(-x):(-x))  + ")^2+(y"+(Math.sign(y)==0?"":Math.sign(y)<0?"+"+(-y):(-y)) + ")^2=" + r + "^2",          { throwOnError: false }
      )
    )
    if ($("#A5_observation1_next").css("display")=="none"){
      $("#A5_observation1_confirm").removeClass("d-none");
    }else{
      $("#A5_observation1_confirm_2").removeClass("d-none");
    } 
    $("#A5_observation1_nextQuestion").addClass("d-none");
  });
});

var updateData = {
  geogebraData: {},
  activity: {},
};

function clientListener(object) {
  if (updateData["geogebraData"]["applet"] !== applet.getParameters().id) {
    updateData["geogebraData"] = {
      applet: applet.getParameters().id,
    };
  }
  geogebraClickTarget = object[1];
  if (
    (object[1] == "") |
    (applet.getAppletObject().getObjectType(object[1]) == "text")
  ) {
    //pass
  } else if (!isNaN(applet.getAppletObject().getValue(object[1]))) {
    updateData["geogebraData"][object[1]] = applet
      .getAppletObject()
      .getValue(object[1]);
  } else if (!isNaN(applet.getAppletObject().getXcoord(object[1]))) {
    updateData["geogebraData"][object[1]] = [
      applet.getAppletObject().getXcoord(object[1]),
      applet.getAppletObject().getYcoord(object[1]),
    ];
  }
  if (
    ($("#" + current_section + "_done").css("opacity") != 1) &
    ($("#" + current_section + "_confirm").length == 0)
  ) {
    checkdone(current_section);
  }
}

function checkdone(id) {
  const data = updateData.geogebraData;
  const activity = updateData.activity;
  let icon = "error";
  let text = "";
  let testResult = false;
  const userselect = $("#" + id + " select");
  const userinput = $("#" + id + " input");
  const userdropdown = $("#" + id + " .dropdown-toggle");
  const usertextarea = $("#" + id + " textarea");
  if (activity[id] == undefined) {
    activity[id] = {};
  }

  switch (id) {
    case "A1_operation1":
      if (data.b != undefined && data.a == 1) {
        if (data.A != activity[id]["A"]) {
          activity[id]["A"] = data.A;
          activity[id]["times"] =
            activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
        }
        if (activity[id]["A"] != undefined && activity[id]["times"] >= 3) {
          testResult = true;
          text = "恭喜完成實驗操作1";
        }
      }
      break;
    case "A1_observation1":
      if (userinput[0].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A1_investigation1":
      if (
        userinput[0].checked &
        userinput[2].checked &
        (userinput[4].checked || userinput[5].checked) &
        (usertextarea[0].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (usertextarea[0].value == "") {
        text = "請記得寫下你的理由！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_operation1":
      if (data.AP != undefined && data.AO != undefined && data["觀察點數"]) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A2_observation1":
      if (userinput[0].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_investigation1":
      if (userinput[0].checked & userinput[2].checked) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A2_investigation2":
      if (userdropdown[0].value == "2") {
        testResult = true;
        text = "恭喜完成問題探索2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_operation1":
      if (data.a == 1) {
        if (data.A != activity[id]["A"]) {
          activity[id]["A"] = data.A;
          activity[id]["times"] =
            activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
        }
        if (activity[id]["A"] != undefined && activity[id]["times"] >= 3) {
          testResult = true;
          text = "恭喜完成實驗操作1";
        }
      }
      break;
    case "A3_observation1":
      if (
        userinput[0].checked &
        userinput[3].checked &
        userinput[7].checked &
        userinput[9].checked &
        userinput[11].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A3_investigation1":
      if (
        (userdropdown[0].value == "2") &
        userinput[2].checked &
        userinput[4].checked &
        userinput[8].checked
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A4_operation1":
      if (data.AO != activity[id]["AO"]) {
        activity[id]["AO"] = data.AO;
        activity[id]["times"] =
          activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
      }
      if (data.AP != activity[id]["AP"]) {
        activity[id]["AP"] = data.AP;
        activity[id]["times"] =
          activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
      }
      if (
        data.AO != undefined &&
        data.AP != undefined &&
        activity[id]["times"] >= 10
      ) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A4_observation1":
      if (
        $("#A4_observation1 input")[current_answer].checked &&
        activity[id]["A4right"] == 3
      ) {
        activity[id]["A4right"] = activity[id]["A4right"]!=undefined?activity[id]["A4right"]+1:1;
        $("#A4right").html(activity[id]["A4right"]);
        testResult = true;
        text = "答案正確，恭喜完成觀察記錄1";
      } else if ($("#A4_observation1 input")[current_answer].checked) {
        activity[id]["A4right"] = activity[id]["A4right"]!=undefined?activity[id]["A4right"]+1:1;
        $("#A4right").html(activity[id]["A4right"]);
        text = "答案正確";
        icon = "success";
      } else {
        activity[id]["A4wrong"] = activity[id]["A4wrong"]!=undefined?activity[id]["A4wrong"]+1:1;
        $("#A4wrong").html(activity[id]["A4wrong"]);
        $(
          "[for=A4_observation1_input1_option" + (current_answer + 1) + "]"
        ).addClass("text-danger");
        text =
          "答案不對喔，正確答案是" +
          $(
            "[for=A4_observation1_input1_option" + (current_answer + 1) + "]"
          ).html();
        icon = "error";
      }
      $("#A4_observation1_nextQuestion").removeClass("d-none");
      if ($("#A4_observation1_next").css("display")=="none"){
        $("#A4_observation1_confirm").addClass("d-none");
      }else{
        $("#A4_observation1_confirm_2").addClass("d-none");
      }
      break;

    case "A4_investigation1":
      if (
        userinput[0].checked &
        !userinput[1].checked &
        userinput[2].checked &
        !userinput[3].checked &
        !userinput[4].checked &
        (usertextarea[0].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (usertextarea[0].value == "") {
        text = "請記得寫下你的理由！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A5_operation1":
      if (data.AO != activity[id]["AO"]) {
        activity[id]["AO"] = data.AO;
        activity[id]["times"] =
          activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
      }
      if (data.AP != activity[id]["AP"]) {
        activity[id]["AP"] = data.AP;
        activity[id]["times"] =
          activity[id]["times"] != undefined ? activity[id]["times"] + 1 : 1;
      }
      if (
        data.AO != undefined &&
        data.AP != undefined &&
        activity[id]["times"] >= 10
      ) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A5_observation1":
      var userAnsX=applet.getAppletObject().getXcoord("CO");
      var userAnsY=applet.getAppletObject().getYcoord("CO");
      var userAnsR=applet.getAppletObject().getValue("Ca");
      var AnsX=applet.getAppletObject().getValue("Ch");
      var AnsY=applet.getAppletObject().getValue("Ck");
      var AnsR=applet.getAppletObject().getValue("Cra");
      if (
        (userAnsX==AnsX) &
        (userAnsY==AnsY) &
        (userAnsR==AnsR) &
        activity[id]["A5right"] == 3
      ) {
        activity[id]["A5right"] = activity[id]["A5right"]!=undefined?activity[id]["A5right"]+1:1;
        $("#A5right").html(activity[id]["A5right"] );
        testResult = true;
        text = "答案正確，恭喜完成觀察記錄1";
      }else if ((userAnsX==AnsX) &
      (userAnsY==AnsY) &
      (userAnsR==AnsR) ){
        activity[id]["A5right"] = activity[id]["A5right"]!=undefined?activity[id]["A5right"]+1:1;
        $("#A5right").html(activity[id]["A5right"] );
        icon = "success";
        text = "答案正確";
      } else {
        text = "答案不對喔!";
        activity[id]["A5wrong"] = activity[id]["A5wrong"]!=undefined?activity[id]["A5wrong"]+1:1;
        $("#A5wrong").html(activity[id]["A5wrong"] );
        applet.getAppletObject().setValue("ShowA5Ans",true)
      }
      $("#A5_observation1_nextQuestion").removeClass("d-none");
      if ($("#A5_observation1_next").css("display")=="none"){
        $("#A5_observation1_confirm").addClass("d-none");
      }else{
        $("#A5_observation1_confirm_2").addClass("d-none");
      }
      
      break;

    case "A5_investigation1":
      if (
        userinput[1].checked &
        userinput[6].checked
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A6_operation1":
      if (applet.getAppletObject().getValue("g2")<19.5) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A6_observation1":
      if (
        userinput[0].value=="8" &
        userinput[1].value=="13" &
        userinput[2].value=="20" &
        userinput[3].value=="29" &
        userinput[4].value=="40" &
        userselect[0].value=="3" &
        userselect[1].value=="1" &
        userselect[2].value=="3" &
        userselect[3].value=="1" &
        userselect[4].value=="2" &
        userselect[5].value=="2" &
        userselect[6].value=="1" &
        userselect[7].value=="3" &
        userselect[8].value=="1" &
        userselect[9].value=="3" 
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A6_investigation1":
      if (userinput[1].checked && usertextarea!=""){
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (usertextarea==""){
        text = "請記得寫下你的想法！";
      }else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
  }
  if (testResult) {
    $("#" + id + "_confirm").css({ display: "none" });
      $("#" + id + "_done").css({ opacity: "1" });
      $("#" + id + "_next").css({ display: "inline-block" });
      $("#" + id + "_link img").css({ opacity: "1" });
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      html: text,
    });
  } else if (text !== "") {
    Swal.fire({
      icon: icon,
      showConfirmButton: false,
      timer: 3000,
      html: text,
    });
  }
}
