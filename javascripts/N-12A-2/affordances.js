var params = {
  id: "ggbAppletCover",
  ggbBase64: ggb_N_12A_2_cover,
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
    $(".title > span ").html("N-12A-2 活動1：正方形分割面積之無窮等比級數");
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
      break;
    case "A1_observation1_link":
      $("#A1_observation1").fadeIn();
      break;
    case "A1_observation2_link":
      $("#A1_observation2").fadeIn();
      break;
    case "A1_investigation1_link":
      $("#A1_investigation1").fadeIn();
      break;
    case "A1_observation3_link":
      $("#A1_observation3").fadeIn();
      break;
    case "A1_investigation2_link":
      $("#A1_investigation2").fadeIn();
      break;
    case "A1_investigation3_link":
      $("#A1_investigation3").fadeIn();
      break;
    case "A1_observation4_link":
      $("#A1_observation4").fadeIn();
      break;
    case "A1_investigation4_link":
      $("#A1_investigation4").fadeIn();
      break;
    // case "A1_investigation5_link":
    //   $("#A1_investigation5").fadeIn();
    //   break;
      
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
      $("#A2_observation3").fadeIn();
      break;
    case "A2_investigation1_link":
      $("#A2_investigation1").fadeIn();
      break;
    case "A2_investigation2_link":
      $("#A2_investigation2").fadeIn();
      break;
    case "A2_investigation3_link":
      $("#A2_investigation3").fadeIn();
      break;
    case "A2_investigation4_link":
      $("#A2_investigation4").fadeIn();
      break;
    case "A2_observation4_link":
      $("#A2_observation4").fadeIn();
      break;
    case "A2_investigation5_link":
      $("#A2_investigation5").fadeIn();
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
      $("#A3_observation3").fadeIn();
      break;
    case "A3_investigation1_link":
      $("#A3_investigation1").fadeIn();
      break;
    case "A3_investigation2_link":
      $("#A3_investigation2").fadeIn();
      break;
    case "A3_investigation3_link":
      $("#A3_investigation3").fadeIn();
      break;
    case "A3_investigation4_link":
      $("#A3_investigation4").fadeIn();
      break;
    case "A3_observation4_link":
      $("#A3_observation4").fadeIn();
      break;
    case "A3_investigation5_link":
      $("#A3_investigation5").fadeIn();
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
  $(".title > span ").html("N-12A-2 活動1：正方形分割面積之無窮等比級數");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_N_12A_2_A1;

  params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
    api.registerObjectClickListener("button1", "refreshData");
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
  $(".title > span ").html("N-12A-2 活動2：正方形分割部分面積之無窮等比級數");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_N_12A_2_A2;
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
  $(".title > span ").html("N-12A-2 活動3：謝爾賓斯基三角形面積之無窮等比級數");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_N_12A_2_A3;
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

$(document).ready(function () {
  showManipulativesCover();
  $(".operation, .observation, .investigation").hide();
  selectActivity();

  // 以下處理next和confirm按鈕
  var section_list = [
    "A1_operation1",
    "A1_observation1",
    "A1_observation2",
    "A1_investigation1",
    "A1_observation3",
    "A1_investigation2",
    "A1_investigation3",
    "A1_observation4",
    "A1_investigation4",
    // "A1_investigation5",

    "A2_operation1",
    "A2_observation1",
    "A2_observation2", 
    "A2_investigation1",  
    "A2_observation3",
    "A2_investigation2",
    "A2_investigation3",
    "A2_observation4",
    "A2_investigation4",
    // "A2_investigation5",

    "A3_operation1",
    "A3_observation1",
    "A3_observation2",
    "A3_observation3",
    "A3_investigation1",
    "A3_investigation2",
    "A3_observation4",
    "A3_investigation3",
    // "A3_investigation4",
    // "A3_investigation5",
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
  // $("#A3_observation2_table_btn").click(() => {
  //   if (updateData.geogebraData.P == undefined) {
  //     text = "請先將平均拉到原點(0, 0)!";
  //     icon = "error";
  //   } else {
  //     if (
  //       (updateData.geogebraData.P[0] == 0) &
  //       (updateData.geogebraData.P[1] == 0)
  //     ) {
  //       $("#A3_observation2_table_btn").addClass("d-none");
  //       updateData.activity["A3_observation2"] = { complete: true };
  //       $("#A3_observation2_table")
  //         .find("tr")
  //         .eq(1)
  //         .children()
  //         .each((i, e) => {
  //           if (i != 0) {
  //             e.innerHTML =
  //               Math.round(
  //                 applet.getAppletObject().getListValue("Bl9x", i) * 10
  //               ) / 10;
  //           }
  //         });
  //       $("#A3_observation2_table")
  //         .find("tr")
  //         .eq(2)
  //         .children()
  //         .each((i, e) => {
  //           if (i != 0) {
  //             e.innerHTML =
  //               Math.round(
  //                 applet.getAppletObject().getListValue("Bl9y", i) * 10
  //               ) / 10;
  //           }
  //         });
  //       $("#A3_observation2 li").removeClass("d-none");
  //       $("#A3_observation2_confirm").removeClass("d-none");
  //       text = "完成數據紀錄，請繼續回答後續問題。";
  //       icon = "success";
  //     } else {
  //       text = "請先將平均拉到原點(0, 0)!";
  //       icon = "error";
  //     }
  //   }
  //   Swal.fire({
  //     icon: icon,
  //     showConfirmButton: false,
  //     timer: 3000,
  //     html: text,
  //   });
  // });
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
      if (data.n == 11) {
        activity[id]["complete"] = true;
      }

      if (activity[id]["complete"] == true){
        text = "恭喜完成實驗操作1";
        testResult = true;
      }

      break;

    case "A1_observation1":
      if (userinput[1].checked){
        text = "恭喜完成觀察記錄1";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A1_observation2":
      if (userinput[3].checked){
        text = "恭喜完成觀察記錄2";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A1_investigation1":
      if (userinput[1].checked){
        text = "恭喜完成問題探索1";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A1_observation3":
      if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" &
        userinput[4].value != "" &
        userinput[5].value != "" &
        userinput[6].value != "" &
        userinput[7].value != "" 
      ){
        text = "恭喜完成觀察記錄3";
        testResult = true;
      } else {
        text = "請把每一格面積確實填上哦！";
      }
      break;

    case "A1_investigation2":
      if (userinput[2].checked){
        text = "恭喜完成問題探索2";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;

    case "A1_investigation3":
      if (userinput[3].checked){
        text = "恭喜完成問題探索3";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;

    case "A1_observation4":
      if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" &
        userinput[4].value != "" &
        userinput[5].value != "" &
        userinput[6].value != "" &
        userinput[7].value != "" 
      ){
        text = "恭喜完成觀察記錄4";
        testResult = true;
      } else {
        text = "請把每一格面積確實填上哦！";
      }

      break;

    case "A1_investigation4":
      if (userinput[0].checked &
          userinput[5].checked
         ){
        text = "恭喜完成問題探索4";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    // 和4合併
    // case "A1_investigation5":
    //   text = "恭喜完成問題探索5";
    //   testResult = true;
    //   break;

    case "A2_operation1":
      if (data.n == 4) {
        activity[id]["complete"] = true;
      }

      if (activity[id]["complete"] == true){
        text = "恭喜完成實驗操作1";
        testResult = true;
      }
      break;

    case "A2_observation1":
      if (userinput[3].checked){
        text = "恭喜完成觀察記錄1";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_observation2":
      if (userinput[3].checked){
        text = "恭喜完成觀察記錄2";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A2_observation3":
      if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" 
      ){
        text = "恭喜完成觀察記錄3";
        testResult = true;
      } else {
        text = "請把每一格面積確實填上哦！";
      }
      break;

    case "A2_investigation1":
      if (userinput[2].checked){
        text = "恭喜完成問題探索1";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A2_investigation2":
      if (userinput[3].checked){
        text = "恭喜完成問題探索2";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;

    case "A2_investigation3":
      if (userinput[3].checked){
        text = "恭喜完成問題探索3";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;

    case "A2_observation4":
      if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" 
      ){
        text = "恭喜完成觀察記錄4";
        testResult = true;
      } else {
        text = "請把每一格面積確實填上哦！";
      }
      
      break;

    case "A2_investigation4":
      if (userinput[0].checked &
        userinput[6].checked
       ){
        text = "恭喜完成問題探索4";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
        break;
      
    // case "A2_investigation5":
    //   text = "恭喜完成問題探索5";
    //   testResult = true;
    //   break;

    case "A3_operation1":
      if (data.n == 5) {
        activity[id]["complete"] = true;
      }

      if (activity[id]["complete"] == true){
        text = "恭喜完成實驗操作1";
        testResult = true;
      }
      break;

    case "A3_observation1":
      if (
        userinput[0].value == "1" &
        (
          userinput[1].value == "1/4" ||
          userinput[1].value == "0.25"
        )
      ){
        text = "恭喜完成觀察記錄1";
        testResult = true;
      } else if (
        userinput[0].value == "" ||
        userinput[1].value == ""
      ) {
        text = "請把每一格答案確實填上哦！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A3_observation2":
      if (
        userinput[0].value == "3" &
        (
          userinput[1].value == "1/16" ||
          userinput[1].value == "0.0625"
        )
      ){
        text = "恭喜完成觀察記錄2";
        testResult = true;
      } else if (
        userinput[0].value == "" ||
        userinput[1].value == ""
      ) {
        text = "請把每一格答案確實填上哦！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;
      
    case "A3_observation3":
      if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" &
        userinput[4].value != "" &
        userinput[5].value != "" &
        userinput[6].value != "" &
        userinput[7].value != "" &
        userinput[8].value != "" &
        userinput[9].value != "" &
        userinput[10].value != "" 
      ){
        text = "恭喜完成觀察記錄3";
        testResult = true;
      } else if (
        userinput[0].value == "" ||
        userinput[1].value == "" ||
        userinput[2].value == "" ||
        userinput[3].value == "" ||
        userinput[4].value == "" ||
        userinput[5].value == "" ||
        userinput[6].value == "" ||
        userinput[7].value == "" ||
        userinput[8].value == "" ||
        userinput[9].value == "" ||
        userinput[10].value == ""  
      ) {
        text = "請把每一格答案確實填上哦！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A3_investigation1":
      if (
        userdropdown[0].value == "1"  &
        userdropdown[1].value == "2"
      ){
        text = "恭喜完成問題探索1";
        testResult = true;
      }else{
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A3_investigation2":
      if (
        userinput[3].checked
      ){
        text = "恭喜完成問題探索2";
        testResult = true;
      }else{
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A3_observation4":
      if (
        !(userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" &
        userinput[4].value != "" &
        userinput[5].value != "" &
        userinput[6].value != "" &
        userinput[7].value != "" &
        userinput[8].value)
      ){
        text = "請把每一格面積確實填上哦！";
      } else if (
        userinput[0].value != "" &
        userinput[1].value != "" &
        userinput[2].value != "" &
        userinput[3].value != "" &
        userinput[4].value != "" &
        userinput[5].value != "" &
        userinput[6].value != "" &
        userinput[7].value != "" &
        userinput[8].value != "" &
        userinput[13].checked
      ){
        text = "恭喜完成觀察記錄4";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      
      break;

    case "A3_investigation3":
      if (
        userinput[0].checked &
        userinput[6].checked
      ){
        text = "恭喜完成問題探索3";
        testResult = true;
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
        break;
      
    // case "A3_investigation4":
    //   text = "恭喜完成問題探索4";
    //   testResult = true;
    //   break;
    
    // case "A3_investigation5":
    //   text = "恭喜完成問題探索5";
    //   testResult = true;
    //   break;

    default:
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
