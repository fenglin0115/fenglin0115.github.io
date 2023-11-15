var params = {
  id: "ggbAppletCover",
  ggbBase64: ggb_G_10_7_2_cover,
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
    $(".title > span ").html("G-10-7(2) 活動1：動手做餘弦定理");
    $(".ggbSetting").removeAttr("style");
    $(".worksheets").show();
    showA1();
  }

  // function prereguisite() {
  //   alert("test1");
  // }

  function backLists() {
    location.href = "./index.html";
  }

  api.registerObjectClickListener("pic5", start);
  // api.registerObjectClickListener("pic2", prereguisite);
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
  drawAuxiliaryline();
  current_section = x.replace("_link", ""); //紀錄現在狀態
  switch (x) {
    case "A1_operation1_link":
      $("#A1_operation1").fadeIn();
      break;
    case "A1_observation1_link":
      drawAuxiliaryline(true, "A1O1");
      $("#A1_observation1").fadeIn();
      break;
    case "A1_investigation1_link":
      drawAuxiliaryline(true, "A1I1");
      $("#A1_investigation1").fadeIn();
      break;

    case "A2_operation1_link":
      $("#A2_operation1").fadeIn();
      break;
    case "A2_observation1_link":
      $("#A2_observation1").fadeIn();
      break;
    case "A2_observation2_link":
      $("#A2_observation2").fadeIn();
      break;
    case "A2_observation3_link":
      current_answer = randomQuestionNumber("A2");
      $("#A2_observation3").fadeIn();
      break;

    case "A2_investigation1_link":
      drawAuxiliaryline(true, "A2");
      $("#A2_investigation1").fadeIn();
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
    case "A3_observation3_link":
      current_answer = randomQuestionNumber("A3");
      $("#A3_observation3").fadeIn();
      break;
    case "A3_investigation1_link":
      drawAuxiliaryline(true, "A3");
      $("#A3_investigation1").fadeIn();
      break;

    case "A4_operation1_link":
      $("#A4_operation1").fadeIn();
      break;
    case "A4_observation1_link":
      drawAuxiliaryline(true, "A4O1");
      $("#A4_observation1").fadeIn();
      break;
    case "A4_investigation1_link":
      drawAuxiliaryline(true, "A4I1");
      $("#A4_investigation1").fadeIn();
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
      case "補充實驗1":
        showA5();
        break;
      case "補充實驗2":
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
  $(".title > span ").html("G-10-7(2) 活動1：視覺化畢氏定理");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_G_10_7_2_A1;
  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
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
  $(".title > span ").html("G-10-7(2) 活動2：動手做餘弦定理(銳角)");
  params.id = "ggbApplet02";
  params.ggbBase64 = ggb_G_10_7_2_A2;
  // 以下將geogebra點擊之物件傳到js變數
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
  $(".title > span ").html("G-10-7(2) 活動3：動手做餘弦定理(鈍角) ");
  params.id = "ggbApplet03";
  params.ggbBase64 = ggb_G_10_7_2_A3;
  // 以下將geogebra點擊之物件傳到js變數
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
  $(".title > span ").html("G-10-7(2) 活動4：視覺化餘弦定理");
  params.id = "ggbApplet04";
  params.ggbBase64 = ggb_G_10_7_2_A4;
  // 以下將geogebra點擊之物件傳到js變數
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
  $("#navbarDropdown").text("補充實驗1");
  $("#navbarDropdown").val("補充實驗1");
  $(".outlines").hide();
  $("#outlineA5").show();
  $(".title > span ").html("G-10-7(2) 補充實驗1：餘弦定理證明(1)");
  params.id = "ggbApplet05";
  params.ggbBase64 = ggb_G_10_7_2_A5;
  // 以下將geogebra點擊之物件傳到js變數
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
  $("#navbarDropdown").text("補充實驗2");
  $("#navbarDropdown").val("補充實驗2");
  $(".outlines").hide();
  $("#outlineA6").show();
  $(".title > span ").html("G-10-7(2) 補充實驗2：餘弦定理證明(2)");
  params.id = "ggbApplet06";
  params.ggbBase64 = ggb_G_10_7_2_A6;
  // 以下將geogebra點擊之物件傳到js變數
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

// 以下處理畫輔助線
function drawAuxiliaryline(statement = false, activity) {
  if (statement) {
    applet.getAppletObject().setValue("ShowP0", false);
    applet.getAppletObject().setValue("ShowP3", true);
    applet.getAppletObject().setValue("ShowP3BT", false);
    switch (activity) {
      case "A2":
        applet.getAppletObject().setValue("α", (-75 / 180) * Math.PI);
        applet
          .getAppletObject()
          .setCoords(
            "I",
            applet.getAppletObject().getXcoord("J"),
            applet.getAppletObject().getYcoord("J")
          );
        break;
      case "A3":
        applet.getAppletObject().setValue("α", (-150 / 180) * Math.PI);
        applet
          .getAppletObject()
          .setCoords(
            "J",
            applet.getAppletObject().getXcoord("K"),
            applet.getAppletObject().getYcoord("K")
          );
        break;
      case "A1O1":
        applet.getAppletObject().setValue("A1O1", true);
        applet.getAppletObject().setValue("Step", 3);
        break;
      case "A1I1":
        applet.getAppletObject().setValue("A1I1", true);
        applet.getAppletObject().setValue("Step", 0);
        break;
      case "A4O1":
        applet.getAppletObject().setValue("A4O1", true);
        applet.getAppletObject().setValue("Step", 1);
        break;
      case "A4I1":
        applet.getAppletObject().setValue("A4I1", true);
        applet.getAppletObject().setValue("Step", 18);
        break;
      default:
        break;
    }
  } else {
    applet.getAppletObject().setValue("ShowP0", true);
    applet.getAppletObject().setValue("ShowP3", false);
    applet.getAppletObject().setValue("ShowP3BT", true);
    applet.getAppletObject().setValue("A1O1", false);
    applet.getAppletObject().setValue("A1I1", false);
    applet.getAppletObject().setValue("A4O1", false);
    applet.getAppletObject().setValue("A4I1", false);
  }
}

// 以下處理問題的隨機數字
function randomQuestionNumber(activity) {
  if (activity == "A2") {
    var num = Math.floor(Math.random() * 7 + 2) * 10;
    $("#A2_observation3 .observationRandom").html(function () {
      var str = "如圖，當";
      str += katex.renderToString("∠C (\\theta) = " + num + "^{\\circ}", {
        throwOnError: false,
      });
      str += "時，";
      str += katex.renderToString("a^2, b^2, c^2", {
        throwOnError: false,
      });
      str += "的關係是？";
      return str;
    });
    return num;
  } else if (activity == "A3") {
    var num = Math.floor(Math.random() * 8 + 10) * 10;
    $("#A3_observation3 .observationRandom").html(function () {
      var str = "如圖，當";
      str += katex.renderToString("∠C (\\theta) = " + num + "^{\\circ}", {
        throwOnError: false,
      });
      str += "時，";
      str += katex.renderToString("a^2, b^2, c^2", {
        throwOnError: false,
      });
      str += "的關係是？";
      return str;
    });
    return num;
  }
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
    "A2_observation3",
    "A2_investigation1",
    "A3_operation1",
    "A3_observation1",
    "A3_observation2",
    "A3_observation3",
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
  // 以下處理dropdown-menu
  $(".worksheets .dropdown-menu li a").click(function () {
    $(this).parent().parent().prev().html($(this).html());
    $(this).parent().parent().prev().val($(this).parent().index());
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
      if (data.Step >= 10.5) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A1_observation1":
      if (
        (userselect[0].value == "2") &
        (userselect[1].value == "1") &
        (userselect[2].value == "1") &
        (userselect[3].value == "1") &
        (userselect[4].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A1_investigation1":
      if (
        (userselect[0].value == "1") &
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "0") &
        (userdropdown[2].value == "0") &
        (userdropdown[3].value == "0")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_operation1":
      if (applet.getAppletObject().getValue("α") > (-89 / 180) * Math.PI) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A2_observation1":
      if (
        (userselect[0].value == "2") &
        (userselect[1].value == "3") &
        (userselect[2].value == "3") &
        (userselect[3].value == "3") &
        (userselect[4].value == "3")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A2_observation2":
      if (userinput[2].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A2_observation3":
      if (
        userinput[1].checked &
        (data.α == (current_answer / -180) * Math.PI)
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄3";
      } else if (data.α != (current_answer / -180) * Math.PI) {
        text = "請先拉到指定的角度！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;

    case "A2_investigation1":
      if (
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "0") &
        (userdropdown[2].value == "1") &
        (userdropdown[3].value == "0") &
        (userdropdown[4].value == "1") &
        (userdropdown[5].value == "1") &
        (userdropdown[6].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_operation1":
      if (applet.getAppletObject().getValue("α") < (-91 / 180) * Math.PI) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A3_observation1":
      if (
        (userselect[0].value == "2") &
        (userselect[1].value == "1") &
        (userselect[2].value == "1") &
        (userselect[3].value == "1") &
        (userselect[4].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_observation2":
      if (userinput[1].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_observation3":
      if (
        userinput[2].checked &
        (data.α == (current_answer / -180) * Math.PI)
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄3";
      } else if (data.α != (current_answer / -180) * Math.PI) {
        text = "請先拉到指定的角度！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A3_investigation1":
      if (
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "1") &
        (userdropdown[2].value == "1") &
        (userdropdown[3].value == "0") &
        (userdropdown[4].value == "0") &
        (userdropdown[5].value == "1") &
        (userdropdown[6].value == "2") &
        (userdropdown[7].value == "1") &
        (userdropdown[8].value == "2") &
        (userdropdown[9].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A4_operation1":
      if (data.Step >= 16) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A4_observation1":
      if (
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "1") &
        (userdropdown[2].value == "2") &
        (userdropdown[3].value == "1") &
        (userdropdown[4].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A4_investigation1":
      if (
        userinput[1].checked &
        (userdropdown[0].value == "0") &
        (userdropdown[1].value == "1")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A5_operation1":
      if (data.Step >= 12) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A5_observation1":
      if (
        (userdropdown[0].value == "0") &
        (userdropdown[1].value == "0") &
        (userdropdown[2].value == "0") &
        (userdropdown[3].value == "0") &
        (userdropdown[4].value == "0")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A5_investigation1":
      var resultValue=1,checkValue=1;
      $("#"+id+" .dropdown-toggle").each((e,i)=>{checkValue*=(parseInt(i.value)+1);resultValue*=(e+1)})
      if (activity[id]["list"] == undefined){
        activity[id]["list"]=[]
      }
      
      if (
        activity[id]["complete"] &
        (checkValue == resultValue) &
        (usertextarea[0].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (activity[id]["complete"] & (checkValue != resultValue)) {
        text = "請檢查是否有選項忘記填或填寫重複的選項！";
      } else if (
        !activity[id]["complete"] &
        (userinput.is(":checked"))
      ) {
        activity[id]["complete"] = true;
        icon = "success";
        text = "針對所勾選的策略和定理，請繼續回答下列問題！";
        activity[id]["list"]=$("#A5_investigation1 input").filter((index,e)=>{return e.checked}).map((index,e)=>{return e.value})
        $("#" + id).find("li")[1].className = "";

        var inputhtml="喜歡"
        var inputlist=""
        for (var i =0;i<activity[id]["list"].length;i++){
          inputlist+='<li><a class="dropdown-item" href="#">'+activity[id]["list"][i]+'</a></li>'
        }

        for (var i =0;i<activity[id]["list"].length;i++){
          inputhtml+='<div class="dropdown mx-2 d-inline-block"><button class="btn btn-sm btn-light border border-dark dropdown-toggle" type="button" id="A5_investigation1_input2'+i+'" data-bs-toggle="dropdown" aria-expanded="false"> </button><ul class="dropdown-menu" aria-labelledby="A5_investigation1_input2'+i+'">'+inputlist+'</ul></div>'
          inputhtml+=i<activity[id]["list"].length-1?'&gt':""
        }
        $("#" + id+"_input2").html(inputhtml)
        $("#" + id+" .dropdown-menu li a").click(function () {
          $(this).parent().parent().prev().html($(this).html());
          $(this).parent().parent().prev().val($(this).parent().index());
        });
        userinput.attr("disabled",true)

      } else if (activity[id]["complete"] & (usertextarea[0].value == "")) {
        text = "請記得寫下你的理由！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A6_operation1":
      if (data.Step >= 13) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      break;
    case "A6_observation1":
      if (
        (userdropdown[0].value == "0") &
        (userdropdown[1].value == "1") &
        (userdropdown[2].value == "0") &
        (userdropdown[3].value == "0")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A6_investigation1":
      var resultValue=1,checkValue=1;
      $("#"+id+" .dropdown-toggle").each((e,i)=>{checkValue*=(parseInt(i.value)+1);resultValue*=(e+1)})
      if (activity[id]["list"] == undefined){
        activity[id]["list"]=[]
      }
      
      if (
        activity[id]["complete"] &
        (checkValue == resultValue) &
        (usertextarea[0].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (activity[id]["complete"] & (checkValue != resultValue)) {
        text = "請檢查是否有選項忘記填或填寫重複的選項！";
      } else if (
        !activity[id]["complete"] &
        (userinput.is(":checked"))
      ) {
        activity[id]["complete"] = true;
        icon = "success";
        text = "針對所勾選的策略和定理，請繼續回答下列問題！";
        activity[id]["list"]=$("#A6_investigation1 input").filter((index,e)=>{return e.checked}).map((index,e)=>{return e.value})
        $("#" + id).find("li")[1].className = "";

        var inputhtml="喜歡"
        var inputlist=""
        for (var i =0;i<activity[id]["list"].length;i++){
          inputlist+='<li><a class="dropdown-item" href="#">'+activity[id]["list"][i]+'</a></li>'
        }

        for (var i =0;i<activity[id]["list"].length;i++){
          inputhtml+='<div class="dropdown mx-2 d-inline-block"><button class="btn btn-sm btn-light border border-dark dropdown-toggle" type="button" id="A6_investigation1_input2'+i+'" data-bs-toggle="dropdown" aria-expanded="false"> </button><ul class="dropdown-menu" aria-labelledby="A6_investigation1_input2'+i+'">'+inputlist+'</ul></div>'
          inputhtml+=i<activity[id]["list"].length-1?'&gt':""
        }
        $("#" + id+"_input2").html(inputhtml)
        $("#" + id+" .dropdown-menu li a").click(function () {
          $(this).parent().parent().prev().html($(this).html());
          $(this).parent().parent().prev().val($(this).parent().index());
        });
        userinput.attr("disabled",true)

      } else if (activity[id]["complete"] & (usertextarea[0].value == "")) {
        text = "請記得寫下你的理由！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
  }
  if (testResult) {
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
      text: text,
    }).then((result) => {
      $("#" + id + "_confirm").css({ display: "none" });
      $("#" + id + "_done").css({ opacity: "1" });
      $("#" + id + "_next").css({ display: "inline-block" });
      $("#" + id + "_link img").css({ opacity: "1" });
    });
  } else if (text !== "") {
    Swal.fire({
      icon: icon,
      showConfirmButton: false,
      timer: 3000,
      text: text,
    });
  }
}

// $("#A1_observation1 select")
// $("#A1_observation1 input")
