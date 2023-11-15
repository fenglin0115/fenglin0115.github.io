var params = {
  id: "ggbAppletCover",
  ggbBase64: ggb_D_10_2_cover,
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
    $(".title > span ").html("D-10-2 活動1：繪製二維散布圖");
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
  current_section = x.replace("_link", ""); //紀錄現在狀態
  switch (x) {
    case "A1_operation1_link":
      $("#A1_operation1").fadeIn();
      applet.getAppletObject().setValue("A1O1", false);
      applet.getAppletObject().setValue("o", false);
      break;
    case "A1_observation1_link":
      $("#A1_observation1").fadeIn();
      refreshData()
      applet.getAppletObject().setValue("A1O1", true);
      applet.getAppletObject().setValue("o", true);
      applet.getAppletObject().setValue("level", 11);
      break;
    case "A1_investigation1_link":
      applet.getAppletObject().setValue("A1O1", false);
      applet.getAppletObject().setValue("o", false);
      $("#A1_investigation1").fadeIn();
      break;
    case "A2_operation1_link":
      $("#A2_operation1").fadeIn();
      applet.getAppletObject().setValue("A2O1", false);
      applet.getAppletObject().setValue("A2O2", false);

      applet.getAppletObject().setValue("u", false);
      break;
    case "A2_observation1_link":
      $("#A2_observation1").fadeIn();
      applet.getAppletObject().setValue("A2O1", true);
      applet.getAppletObject().setValue("A2O2", false);
      applet.getAppletObject().setValue("u", true);
      break;
    case "A2_observation2_link":
      $("#A2_observation2").fadeIn();
      applet.getAppletObject().setValue("A2O1", false);
      applet.getAppletObject().setValue("A2O2", true);
      applet.getAppletObject().setValue("u", false);
      break;
    case "A2_investigation1_link":
      $("#A2_investigation1").fadeIn();
      applet.getAppletObject().setValue("A2O1", false);
      applet.getAppletObject().setValue("A2O2", false);
      applet.getAppletObject().setValue("u", false);
      break;

    case "A3_operation1_link":
      $("#A3_operation1").fadeIn();
      break;
    case "A3_observation1_link":
      $("#A3_observation1").fadeIn();
      break;
    case "A3_observation2_link":
      $("#A3_observation2").fadeIn();
      break;
    case "A3_investigation1_link":
      $("#A3_investigation1").fadeIn();
      break;
    case "A4_operation1_link":
      $("#A4_operation1").fadeIn();
      break;
    case "A4_observation1_link":
      $("#A4_observation1").fadeIn();
      break;
    case "A4_observation2_link":
      $("#A4_observation2").fadeIn();
      break;
    case "A4_investigation1_link":
      $("#A4_investigation1").fadeIn();
      for (var i = 1; i < 11; i++) {
        if (
          (applet.getAppletObject().getValue("level") != 1.1) &
          (applet.getAppletObject().getValue("level") != 1.9)
        ) {
          applet.getAppletObject().setFixed("Ah" + i, false);
        }
        applet.getAppletObject().setCoords("Ah" + i, 5 + 0.2 * i, 4 + 0.2 * i);
        if (
          (applet.getAppletObject().getValue("level") != 1.1) &
          (applet.getAppletObject().getValue("level") != 1.9)
        ) {
          applet.getAppletObject().setFixed("Ah" + i, true);
        }
      }

      break;
    case "A5_operation1_link":
      $("#A5_operation1").fadeIn();
      break;
    case "A5_observation1_link":
      $("#A5_observation1").fadeIn();
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
  $(".title > span ").html("D-10-2 活動1：繪製二維散布圖");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_D_10_2_A1;
  
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
    api.registerObjectClickListener("button1","refreshData")
  };
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
  $(".title > span ").html("D-10-2 活動2：兩個變數的關係");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_D_10_2_A2;
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
  $(".title > span ").html("D-10-2 活動3：二維數據的標準化");
  params.id = "ggbApplet02";
  params.ggbBase64 = ggb_D_10_2_A3;
  params.appletOnLoad = function (api) {
    api.setCoords("P", api.getXcoord("Q"), api.getYcoord("Q"));
    api.registerClientListener("clientListener");
    var x = api.getXcoord("S");
    var y = api.getYcoord("S");
    var muX = api.getXcoord("Q");
    var muY = api.getYcoord("Q");
    function round(i) {
      return Math.round(i * 10) / 10;
    }
    $(".A3_pointS").html(
      katex.renderToString("(" + round(x) + "," + round(y) + ")", {
        throwOnError: false,
      })
    );
    $(".A3_pointS2").html(
      katex.renderToString("(" + round(x - muX) + "," + round(y - muY) + ")", {
        throwOnError: false,
      })
    );
    $(".A3_pointMean").html(
      katex.renderToString("(" + round(muX) + "," + round(muY) + ")", {
        throwOnError: false,
      })
    );
    $("[name=A3_observation1_input2]").each((i, e) => {
      switch (i) {
        case 0:
          text = "(" + round(x - 3) + "," + round(y) + ")";
          break;
        case 1:
          text = "(" + round(x) + "," + round(y - 3) + ")";
          break;
        case 2:
          text = "(" + round(x + 3) + "," + round(y) + ")";
          break;
        case 3:
          text = "(" + round(x) + "," + round(y + 3) + ")";
          break;

        default:
          break;
      }
      $("[for=" + e.id + "]").html(
        katex.renderToString(text, {
          throwOnError: false,
        })
      );
    });

    $("[name=A3_observation1_input3]").each((i, e) => {
      switch (i) {
        case 0:
          text = "(" + round(x - 2) + "," + round(y) + ")";
          break;
        case 1:
          text = "(" + round(x) + "," + round(y - 2) + ")";
          break;
        case 2:
          text = "(" + round(x + 2) + "," + round(y) + ")";
          break;
        case 3:
          text = "(" + round(x) + "," + round(y + 2) + ")";
          break;

        default:
          break;
      }

      $("[for=" + e.id + "]").html(
        katex.renderToString(text, {
          throwOnError: false,
        })
      );
    });

    $("[name=A3_observation1_input4]").each((i, e) => {
      switch (i) {
        case 0:
          text = "(" + round(x - muX) + "," + round(y - muY) + ")";
          break;
        case 1:
          text = "(" + round(x - muY) + "," + round(y - muX) + ")";
          break;
        case 2:
          text = "(" + round(x + muX) + "," + round(y + muY) + ")";
          break;
        case 3:
          text = "(" + round(x + muY) + "," + round(y + muX) + ")";
          break;

        default:
          break;
      }

      $("[for=" + e.id + "]").html(
        katex.renderToString(text, {
          throwOnError: false,
        })
      );
    });
    $("[name=A3_observation2_input4]").each((i, e) => {
      switch (i) {
        case 0:
          text = "(" + round((x - muX) / 2) + "," + round(y - muY) + ")";
          break;
        case 1:
          text = "(" + round(x - muX) + "," + round((y - muY) / 2) + ")";
          break;
        case 2:
          text = "(" + round((x - muX) * 2) + "," + round(y - muY) + ")";
          break;
        case 3:
          text = "(" + round(x - muX) + "," + round((y - muY) * 2) + ")";
          break;

        default:
          break;
      }
      $("[for=" + e.id + "]").html(
        katex.renderToString(text, {
          throwOnError: false,
        })
      );
    });
    $("[name=A3_observation2_input5]").each((i, e) => {
      switch (i) {
        case 0:
          text = "(" + round((x - muX) / 2) + "," + round(y - muY) + ")";
          break;
        case 1:
          text = "(" + round(x - muX) + "," + round((y - muY) / 2) + ")";
          break;
        case 2:
          text = "(" + round((x - muX) * 2) + "," + round(y - muY) + ")";
          break;
        case 3:
          text = "(" + round(x - muX) + "," + round((y - muY) * 2) + ")";
          break;

        default:
          break;
      }
      $("[for=" + e.id + "]").html(
        katex.renderToString(text, {
          throwOnError: false,
        })
      );
    });
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
  $(".title > span ").html("D-10-2 活動4：理解相關係數的意義");
  params.id = "ggbApplet03";
  params.ggbBase64 = ggb_D_10_2_A4;
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
  $(".title > span ").html("D-10-2 活動5：理解最小平方法");
  params.id = "ggbApplet04";
  params.ggbBase64 = ggb_D_10_2_A5;
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
  $(".title > span ").html("D-10-2 活動6：最適直線與相關係數的關係");
  params.id = "ggbApplet05";
  params.ggbBase64 = ggb_D_10_2_A6;
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
    "A2_observation2",
    "A2_investigation1",
    "A3_operation1",
    "A3_observation1",
    "A3_observation2",
    "A3_investigation1",
    "A4_operation1",
    "A4_observation1",
    "A4_observation2",
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
  // 以下處理dropdown-menu
  $(".worksheets .dropdown-menu li a").click(function () {
    $(this).parent().parent().prev().html($(this).html());
    $(this).parent().parent().prev().val($(this).parent().index());
  });

  // 以下處理互動性按鈕
  $("#A3_observation2_table_btn").click(() => {
    if (updateData.geogebraData.P == undefined) {
      text = "請先將平均拉到原點(0, 0)!";
      icon = "error";
    } else {
      if (
        (updateData.geogebraData.P[0] == 0) &
        (updateData.geogebraData.P[1] == 0)
      ) {
        $("#A3_observation2_table_btn").addClass("d-none");
        updateData.activity["A3_observation2"] = { complete: true };
        $("#A3_observation2_table")
          .find("tr")
          .eq(1)
          .children()
          .each((i, e) => {
            if (i != 0) {
              e.innerHTML =
                Math.round(
                  applet.getAppletObject().getListValue("Bl9x", i) * 10
                ) / 10;
            }
          });
        $("#A3_observation2_table")
          .find("tr")
          .eq(2)
          .children()
          .each((i, e) => {
            if (i != 0) {
              e.innerHTML =
                Math.round(
                  applet.getAppletObject().getListValue("Bl9y", i) * 10
                ) / 10;
            }
          });
        $("#A3_observation2 li").removeClass("d-none");
        $("#A3_observation2_confirm").removeClass("d-none");
        text = "完成數據紀錄，請繼續回答後續問題。";
        icon = "success";
      } else {
        text = "請先將平均拉到原點(0, 0)!";
        icon = "error";
      }
    }
    Swal.fire({
      icon: icon,
      showConfirmButton: false,
      timer: 3000,
      html: text,
    });
  });

  function A4_observation1_check(i) {
    if (
      parseFloat($("#A4_observation1_input" + i).val()) ==
      Math.round(applet.getAppletObject().getValue("aR2") * 100) / 100
    ) {
      if (
        updateData.activity["A4_observation1"] ==
        $("#A4_observation1_input" + i).val()
      ) {
        $("#A4_observation1_input" + i).val("");
        icon = "error";
        text = "請重新產生新的數據後再紀錄！";
      } else {
        $("#A4_observation1_table_btn" + i).addClass("d-none");
        if (i != 3) {
          $("#A4_observation1_table_btn" + (i + 1)).removeClass("d-none");
          $("#A4_observation1_input" + (i + 1)).removeClass("d-none");
          text = "輸入完成，請繼續輸入下一筆資料！";
        } else {
          $("#A4_observation1_confirm").removeClass("d-none");
          text = "三筆資料輸入完成，請確認送出！";
        }
        icon = "success";
        $("#A4_observation1_table");
        for (var j = 2; j < 12; j++) {
          $("#A4_observation1_table")
            .find("tr")
            .eq(j)
            .children()
            .eq(2 * i - 1)
            .html(
              Math.round(
                applet.getAppletObject().getListValue("Al1x", j - 1) * 100
              ) / 100
            );
          $("#A4_observation1_table")
            .find("tr")
            .eq(j)
            .children()
            .eq(2 * i)
            .html(
              Math.round(
                applet.getAppletObject().getListValue("Al1y", j - 1) * 100
              ) / 100
            );
        }
        updateData.activity["A4_observation1"] = $(
          "#A4_observation1_input" + i
        ).val();
        $("#A4_observation1_table_btn" + i)
          .parent()
          .html($("#A4_observation1_input" + i).val());
      }
    } else {
      icon = "error";
      text = "請確認相關係數與畫面中顯示相同！";
    }
    Swal.fire({
      icon: icon,
      showConfirmButton: false,
      timer: 3000,
      html: text,
    });
  }

  $("#A4_observation1_table_btn1").click(function () {
    A4_observation1_check(1);
  });
  $("#A4_observation1_table_btn2").click(function () {
    A4_observation1_check(2);
  });
  $("#A4_observation1_table_btn3").click(function () {
    A4_observation1_check(3);
  });

  function A6_observation1_check(i) {
    if (
      parseFloat($("#A6_observation1_input1" + i).val()) ==
        Math.round(applet.getAppletObject().getValue("aR2") * 100) / 100 &
      parseFloat($("#A6_observation1_input1" + i).val()) ==
        parseFloat($("#A6_observation1_input2" + i).val())
    ) {
      if (
        updateData.activity["A6_observation1"] ==
        $("#A6_observation1_input1" + i).val()
      ) {
        $("#A6_observation1_input1" + i).val("");
        $("#A6_observation1_input2" + i).val("");
        icon = "error";
        text = "請重新產生新的數據後再紀錄！";
      } else {
        $("#A6_observation1_table_btn" + i).addClass("d-none");
        if (i != 3) {
          $("#A6_observation1_table_btn" + (i + 1)).removeClass("d-none");
          $("#A6_observation1_input1" + (i + 1)).removeClass("d-none");
          $("#A6_observation1_input2" + (i + 1)).removeClass("d-none");
          text = "輸入完成，請繼續輸入下一筆資料！";
        } else {
          $("#A6_observation1_confirm").removeClass("d-none");
          text = "三筆資料輸入完成，請確認送出！";
        }
        icon = "success";
        $("#A6_observation1_table");
        for (var j = 2; j < 12; j++) {
          $("#A6_observation1_table")
            .find("tr")
            .eq(j)
            .children()
            .eq(2 * i - 1)
            .html(
              Math.round(
                applet.getAppletObject().getListValue("Al1x", j - 1) * 100
              ) / 100
            );
          $("#A6_observation1_table")
            .find("tr")
            .eq(j)
            .children()
            .eq(2 * i)
            .html(
              Math.round(
                applet.getAppletObject().getListValue("Al1y", j - 1) * 100
              ) / 100
            );
        }
        updateData.activity["A6_observation1"] = $(
          "#A6_observation1_input1" + i
        ).val();
        $("#A6_observation1_input1" + i)
          .parent()
          .html($("#A6_observation1_input2" + i).val());
        $("#A6_observation1_table_btn" + i)
          .parent()
          .html($("#A6_observation1_input2" + i).val());
      }
    } else {
      icon = "error";
      text = "請確認相關係數、最適直線斜率均與畫面中顯示相同！";
    }
    Swal.fire({
      icon: icon,
      showConfirmButton: false,
      timer: 3000,
      html: text,
    });
  }
  $("#A6_observation1_table_btn1").click(function () {
    A6_observation1_check(1);
  });
  $("#A6_observation1_table_btn2").click(function () {
    A6_observation1_check(2);
  });
  $("#A6_observation1_table_btn3").click(function () {
    A6_observation1_check(3);
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

// 活動1觀察1
function refreshData(object){
  $("label[for=A1_observation1_input1_option1]").html("("+applet.getAppletObject().getXcoord("A")+","+applet.getAppletObject().getYcoord("A")+")")
  $("label[for=A1_observation1_input1_option2]").html("("+applet.getAppletObject().getXcoord("B")+","+applet.getAppletObject().getYcoord("B")+")")
  $("label[for=A1_observation1_input1_option3]").html("("+applet.getAppletObject().getXcoord("C")+","+applet.getAppletObject().getYcoord("C")+")")
  $("label[for=A1_observation1_input1_option4]").html("("+applet.getAppletObject().getXcoord("D")+","+applet.getAppletObject().getYcoord("D")+")")
  $("label[for=A1_observation1_input4_option1]").html("("+applet.getAppletObject().getXcoord("A")+","+applet.getAppletObject().getYcoord("A")+")")
  $("label[for=A1_observation1_input4_option2]").html("("+applet.getAppletObject().getXcoord("B")+","+applet.getAppletObject().getYcoord("B")+")")
  $("label[for=A1_observation1_input4_option3]").html("("+applet.getAppletObject().getXcoord("C")+","+applet.getAppletObject().getYcoord("C")+")")
  $("label[for=A1_observation1_input4_option4]").html("("+applet.getAppletObject().getXcoord("D")+","+applet.getAppletObject().getYcoord("D")+")")

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
      if (data.level == 11) {
        activity[id]["complete"] = true;
      }

      if (
        activity[id]["complete"] &&
        applet.getAppletObject().getValue("counterR") >= 5
      ) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }

      break;
    case "A1_observation1":
      if (userinput[1].checked & userinput[5].checked & userinput[10].checked & userinput[15].checked & userinput[18].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A1_investigation1":
      var checknumber =
        $("[name=A1_investigation1_input3]").filter((i, e) => {
          return e.checked;
        }).length > 0;
      if (
        (userinput[0].checked | userinput[1].checked) &
        checknumber &
        (usertextarea[0].value != "") &
        (usertextarea[1].value != "")
      ) {
        console.log(userinput);
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (usertextarea[0].value == "" || usertextarea[1].value == "") {
        text = "請記得寫下你的理由！";
      } else {
        text = "請記得回答問題！";
      }
      break;

    case "A2_operation1":
      if (
        data.a &&
        data.b &&
        data.g &&
        data.i &&
        data.k &&
        data.l &&
        data.m &&
        data.button1
      ) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A2_observation1":
      if (
        userinput[0].checked &
        userinput[6].checked &
        userinput[9].checked &
        userinput[14].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_observation2":
      if (
        userinput[0].checked &
        userinput[4].checked &
        userinput[6].checked &
        userinput[9].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_investigation1":
      if (
        userinput[0].checked &
        userinput[2].checked &
        userinput[6].checked &
        userinput[9].checked 
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_operation1":
      if (data.P != undefined && data.R != undefined) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }

      break;
    case "A3_observation1":
      if (
        userinput[0].checked &
        userinput[2].checked &
        userinput[7].checked &
        userinput[10].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_observation2":
      if (
        userinput[0].checked &
        userinput[7].checked &
        userinput[8].checked &
        userinput[12].checked &
        userinput[15].checked&
        userinput[18].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A3_investigation1":
      if (
        userinput[0].checked &
        userinput[4].checked &
        userinput[6].checked &
        userinput[11].checked
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A4_operation1":
      if (applet.getAppletObject().getValue("level") == 1.9) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A4_observation1":
      testResult = true;
      text = "恭喜完成觀察記錄1";
      break;
    case "A4_observation2":
      if (
        userinput[0].checked &
        userinput[3].checked &
        userinput[5].checked &
        userinput[7].checked &
        userinput[10].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      }

      break;
    case "A4_investigation1":
      if (
        userinput[2].checked &
        userinput[4].checked &
        userinput[8].checked &
        userinput[9].checked &
        userinput[10].checked &
        !userinput[11].checked &
        userinput[12].checked &
        userinput[13].checked &
        userinput[14].checked &
        userinput[15].checked &
        !userinput[16].checked &
        !userinput[17].checked
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A5_operation1":
      if (applet.getAppletObject().getValue("score") >= 3) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A5_observation1":
      if (
        userinput[2].checked &
        userinput[4].checked &
        userinput[5].checked &
        (usertextarea[0].value != "") &
        (usertextarea[1].value != "")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else if (usertextarea[0].value == "" || usertextarea[1].value == "") {
        text = "請記得寫下你的想法！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A5_investigation1":
      if (userinput[0].checked & userinput[4].checked) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A6_operation1":
      if (applet.getAppletObject().getValue("level") == 1.9) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A6_observation1":
      testResult = true;
      text = "恭喜完成觀察記錄1";
      break;
    case "A6_investigation1":
      if (
        userinput[1].checked &
        userinput[4].checked &
        userinput[6].checked &
        userinput[10].checked
      ) {
        text = "恭喜完成問題探索1";
        testResult = true;
      } else {
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
