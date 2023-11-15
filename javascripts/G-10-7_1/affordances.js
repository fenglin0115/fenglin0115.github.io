var params = {
  id: "ggbAppletCover",
  ggbBase64: ggb_G_10_7_1_cover,
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
    $(".title > span ").html("G-10-7(1) 活動1：動手做正弦定理");
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
  applet.getAppletObject().setValue("roundR",false)
  switch (x) {
    case "A1_operation1_link":
      $("#A1_operation1").fadeIn();
      break;
    case "A1_observation1_link":
      $("#A1_observation1").fadeIn();
      break;
    case "A1_observation2_link":
      applet.getAppletObject().setValue("roundR",true)
      $("#A1_observation2").fadeIn();
      break;
    case "A1_observation3_link":
      $("#A1_observation3").fadeIn();
      break;
    case "A1_observation4_link":
      $("#A1_observation4").fadeIn();
      break;
    case "A1_investigation1_link":
      $("#A1_investigation1").fadeIn();
      break;

    case "A2_operation1_link":
      $("#A2_operation1").fadeIn();
      break;
    case "A2_observation1_link":
      $("#A2_observation1").fadeIn();
      break;
    case "A2_observation2_link":
      applet.getAppletObject().setValue("roundR",true)
      $("#A2_observation2").fadeIn();
      break;
    case "A2_observation3_link":
      $("#A2_observation3").fadeIn();
      break;
    case "A2_observation4_link":
      $("#A2_observation4").fadeIn();
      break;
    case "A2_investigation1_link":
      drawAuxiliaryline(true);
      $("#A2_investigation1").fadeIn();
      break;

    case "A3_operation1_link":
      $("#A3_operation1").fadeIn();
      break;
    case "A3_observation1_link":
      $("#A3_observation1").fadeIn();
      break;
    case "A3_observation2_link":
      applet.getAppletObject().setValue("roundR",true)
      $("#A3_observation2").fadeIn();
      break;
    case "A3_observation3_link":
      $("#A3_observation3").fadeIn();
      break;
    case "A3_observation4_link":
      $("#A3_observation4").fadeIn();
      break;
    case "A3_investigation1_link":
      drawAuxiliaryline(true);
      $("#A3_investigation1").fadeIn();
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
  $(".title > span ").html("G-10-7(1) 活動1：動手做正弦定理(直角)");
  params.id = "ggbApplet01";
  params.ggbBase64 = ggb_G_10_7_1_A1;
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
  $(".title > span ").html("G-10-7(1) 活動2：動手做正弦定理(銳角)");
  params.id = "ggbApplet02";
  params.ggbBase64 = ggb_G_10_7_1_A2;
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
  $(".title > span ").html("G-10-7(1) 活動3：動手做正弦定理(鈍角)");
  params.id = "ggbApplet03";
  params.ggbBase64 = ggb_G_10_7_1_A3;
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

// 以下處理畫輔助線
function drawAuxiliaryline(statement = false) {
  if (statement) {
    applet.getAppletObject().setValue("ShowP0", false);
    applet.getAppletObject().setValue("ShowP3", true);
  } else {
    applet.getAppletObject().setValue("ShowP0", true);
    applet.getAppletObject().setValue("ShowP3", false);
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
    "A1_observation2",
    "A1_observation3",
    "A1_observation4",
    "A1_investigation1",
    "A2_operation1",
    "A2_observation1",
    "A2_observation2",
    "A2_observation3",
    "A2_observation4",
    "A2_investigation1",
    "A3_operation1",
    "A3_observation1",
    "A3_observation2",
    "A3_observation3",
    "A3_observation4",
    "A3_investigation1",
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
  let text = "";
  let testResult = false;
  let icon = "error" ;
  const userselect = $("#" + id + " select");
  const userinput = $("#" + id + " input");
  const userdropdown = $("#" + id + " .dropdown-toggle");
  const usertextarea = $("#" + id + " textarea");

  if (activity[id] == undefined) {
    activity[id] = {};
  }
  switch (id) {
    case "A1_operation1":
      if (data.R != activity[id].R) {
        activity[id].Rtimes =
          activity[id].Rtimes === undefined ? 1 : activity[id].Rtimes + 1;
      }
      if (data.B != activity[id].B) {
        activity[id].Btimes =
          activity[id].Btimes === undefined ? 1 : activity[id].Btimes + 1;
      }

      if ((activity[id].Rtimes >= 3) & (activity[id].Btimes >= 3)) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      activity[id]["R"] = data.R;
      activity[id]["B"] = data.B;
      break;

    case "A1_observation1":
      if (data.R == 5) {
        activity[id]["complete"] = true;
      }
      if (!activity[id]["complete"]) {
        text = "請先將R拉到5！";
      }else if (!activity[id]["complete1"] & 
      (userselect[0].value == "10") &
      (userselect[1].value == "2") &
      (userselect[2].value == "10")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成∠B=15度，請繼續記錄∠B=30度";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成∠B=30度，請繼續記錄∠B=45度";
      }else if (!activity[id]["complete3"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成∠B=45度，請繼續記錄∠B=60度";
      }else if (!activity[id]["complete4"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成∠B=60度，請繼續記錄∠B=75度";
      } else if (
        activity[id]["complete"] &
        (userselect[0].value == "10") &
        (userselect[1].value == "2") &
        (userselect[2].value == "10") &
        (userselect[3].value == "10") &
        (userselect[4].value == "2") &
        (userselect[5].value == "10") &
        (userselect[6].value == "10") &
        (userselect[7].value == "2") &
        (userselect[8].value == "10") &
        (userselect[9].value == "10") &
        (userselect[10].value == "2") &
        (userselect[11].value == "10") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A1_observation2":
      if (applet.getAppletObject().getValue("angleb") == (60 / 180) * Math.PI) {
        activity[id]["complete"] = true;
      }
      
      if (!activity[id]["complete"]) {
        text = "請先將角B拉到60度！";
      } else if (!activity[id]["complete1"] & 
      (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成R=1，請繼續記錄R=2";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成R=2，請繼續記錄R=3";
      }else if (!activity[id]["complete3"]& 
      (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成R=3，請繼續記錄R=4";
      }else if (!activity[id]["complete4"]& 
      (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成R=4，請繼續記錄R=5";
      } else if(
        activity[id]["complete"] &
        (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2") &
        (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4") &
        (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6") &
        (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A1_observation3":
      if (!userinput[0].checked & userinput[1].checked & userinput[2].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄3";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A1_observation4":
      if (
        !userinput[0].checked &
        userinput[1].checked &
        !userinput[2].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄4";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A1_investigation1":
      if (
        userinput[0].checked &
        (userdropdown[0].value == "0") &
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
      if (data.R != activity[id].R) {
        activity[id].Rtimes =
          activity[id].Rtimes === undefined ? 1 : activity[id].Rtimes + 1;
      }
      if (data.J != activity[id].J) {
        activity[id].αtimes =
          activity[id].αtimes === undefined ? 1 : activity[id].αtimes + 1;
      }

      if ((activity[id].Rtimes + activity[id].αtimes >= 3)) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      activity[id]["R"] = data.R;
      activity[id]["J"] = data.J;
      break;

    case "A2_observation1":
      if (data.R == 5) {
        activity[id]["complete"] = true;
      }
      if (!activity[id]["complete"]) {
        text = "請先將R拉到5！";
      }else if (!activity[id]["complete1"] & 
      (userselect[0].value == "10") &
      (userselect[1].value == "2") &
      (userselect[2].value == "10")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成∠A=15度，請繼續記錄∠A=30度";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成∠A=30度，請繼續記錄∠A=45度";
      }else if (!activity[id]["complete3"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成∠A=45度，請繼續記錄∠A=60度";
      }else if (!activity[id]["complete4"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成∠A=60度，請繼續記錄∠A=75度";
      } else if (
        activity[id]["complete"] &
        (userselect[0].value == "10") &
        (userselect[1].value == "2") &
        (userselect[2].value == "10") &
        (userselect[3].value == "10") &
        (userselect[4].value == "2") &
        (userselect[5].value == "10") &
        (userselect[6].value == "10") &
        (userselect[7].value == "2") &
        (userselect[8].value == "10") &
        (userselect[9].value == "10") &
        (userselect[10].value == "2") &
        (userselect[11].value == "10") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A2_observation2":
      if (applet.getAppletObject().getValue("α") == (60 / 180) * Math.PI) {
        activity[id]["complete"] = true;
      }
      if (!activity[id]["complete"]) {
        text = "請先將角A拉到60度！";
      } else if (!activity[id]["complete1"] & 
      (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成R=1，請繼續記錄R=2";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成R=2，請繼續記錄R=3";
      }else if (!activity[id]["complete3"]& 
      (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成R=3，請繼續記錄R=4";
      }else if (!activity[id]["complete4"]& 
      (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成R=4，請繼續記錄R=5";
      } else if (
        activity[id]["complete"] &
        (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2") &
        (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4") &
        (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6") &
        (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A2_observation3":
      if (!userinput[0].checked & userinput[1].checked & userinput[2].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄3";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;
    case "A2_observation4":
      if (
        !userinput[0].checked &
        userinput[1].checked &
        !userinput[2].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄4";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A2_investigation1":
      if (
        userinput[0].checked &
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "0") &
        (usertextarea[0].value != "") &
        (usertextarea[1].value != "") &
        (usertextarea[2].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (
        (usertextarea[0].value == "") |
        (usertextarea[1].value == "") |
        (usertextarea[2].value == "")
      ) {
        text = "請記得寫下你的理由和證明！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A3_operation1":
      if (data.R != activity[id].R) {
        activity[id].Rtimes =
          activity[id].Rtimes === undefined ? 1 : activity[id].Rtimes + 1;
      }
      if (data.I != activity[id].I) {
        activity[id].αtimes =
          activity[id].αtimes === undefined ? 1 : activity[id].αtimes + 1;
      }

      if ((activity[id].Rtimes + activity[id].αtimes >= 3)) {
        testResult = true;
        text = "恭喜完成實驗操作1";
      }
      activity[id]["R"] = data.R;
      activity[id]["I"] = data.I;
      break;
    case "A3_observation1":
      if (data.R == 5) {
        activity[id]["complete"] = true;
      }
      if (!activity[id]["complete"]) {
        text = "請先將R拉到5！";
      }else if (!activity[id]["complete1"] & 
      (userselect[0].value == "10") &
      (userselect[1].value == "2") &
      (userselect[2].value == "10")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成∠A=100度，請繼續記錄∠A=110度";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成∠A=110度，請繼續記錄∠A=120度";
      }else if (!activity[id]["complete3"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成∠A=120度，請繼續記錄∠A=130度";
      }else if (!activity[id]["complete4"]& 
      (userselect[3].value == "10") &
      (userselect[4].value == "2") &
      (userselect[5].value == "10")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成∠A=130度，請繼續記錄∠A=140度";
      } else if (
        activity[id]["complete"] &
        (userselect[0].value == "10") &
        (userselect[1].value == "2") &
        (userselect[2].value == "10") &
        (userselect[3].value == "10") &
        (userselect[4].value == "2") &
        (userselect[5].value == "10") &
        (userselect[6].value == "10") &
        (userselect[7].value == "2") &
        (userselect[8].value == "10") &
        (userselect[9].value == "10") &
        (userselect[10].value == "2") &
        (userselect[11].value == "10") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄1";
      } else if (!activity[id]["complete"]) {
        text = "請先將R拉到5！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_observation2":
      if (applet.getAppletObject().getValue("α") == (120 / 180) * Math.PI) {
        activity[id]["complete"] = true;
      }
      if (!activity[id]["complete"]) {
        text = "請先將角A拉到120度！";
      } else if (!activity[id]["complete1"] & 
      (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2")){
        $("#"+id).find("tr")[2].className="";
        activity[id]["complete1"]=true;
        icon = "success";
        text = "恭喜完成R=1，請繼續記錄R=2";
      }else if (!activity[id]["complete2"]& 
      (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4")
      ){
        $("#"+id).find("tr")[3].className="";
        activity[id]["complete2"]=true;
        icon = "success";
        text = "恭喜完成R=2，請繼續記錄R=3";
      }else if (!activity[id]["complete3"]& 
      (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6")
      ){
        $("#"+id).find("tr")[4].className="";
        activity[id]["complete3"]=true;
        icon = "success";
        text = "恭喜完成R=3，請繼續記錄R=4";
      }else if (!activity[id]["complete4"]& 
      (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8")
      ){
        $("#"+id).find("tr")[5].className="";
        activity[id]["complete4"]=true;
        icon = "success";
        text = "恭喜完成R=4，請繼續記錄R=5";
      } else if (
        activity[id]["complete"] &
        (userselect[0].value == "2") &
        (userselect[1].value == "2") &
        (userselect[2].value == "2") &
        (userselect[3].value == "4") &
        (userselect[4].value == "2") &
        (userselect[5].value == "4") &
        (userselect[6].value == "6") &
        (userselect[7].value == "2") &
        (userselect[8].value == "6") &
        (userselect[9].value == "8") &
        (userselect[10].value == "2") &
        (userselect[11].value == "8") &
        (userselect[12].value == "10") &
        (userselect[13].value == "2") &
        (userselect[14].value == "10")
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄2";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;
    case "A3_observation3":
      if (!userinput[0].checked & userinput[1].checked & userinput[2].checked) {
        testResult = true;
        text = "恭喜完成觀察記錄3";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }

      break;
    case "A3_observation4":
      if (
        !userinput[0].checked &
        userinput[1].checked &
        userinput[2].checked
      ) {
        testResult = true;
        text = "恭喜完成觀察記錄4";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    case "A3_investigation1":
      if (
        userinput[0].checked &
        (userdropdown[0].value == "1") &
        (userdropdown[1].value == "0") &
        (usertextarea[0].value != "") &
        (usertextarea[1].value != "") &
        (usertextarea[2].value != "")
      ) {
        testResult = true;
        text = "恭喜完成問題探索1";
      } else if (
        (usertextarea[0].value == "") |
        (usertextarea[1].value == "") |
        (usertextarea[2].value == "")
      ) {
        text = "請記得寫下你的理由和證明！";
      } else {
        text = "答案不對喔! 請再想想看哪裡做錯了";
      }
      break;

    default:
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

