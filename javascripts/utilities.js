$(document).ready(function () {
    showManipulativesCover();
    $(".operation, .observation, .investigation").hide();
    selectActivity();

    $("img[id$=shorten]").click(function () {
        $(this).hide();
        $(this).parent().next().children().show();
        $(this).parent().parent().next().hide();
    });

    $("img[id$=expand]").click(function () {
        $(this).hide();
        $(this).parent().prev().children().show();
        $(this).parent().parent().next().show();
    });
});

function showLoading() {
    $("#load-wrapper").addClass("d-flex");
    $("#load-wrapper").show();
}

function hideLoading() {
    $("#load-wrapper").removeClass("d-flex");
    $("#load-wrapper").hide();
}

//common
// function ggbOnInit() {
//     hideLoading();
// }
function ggbOnInit() {
    hideLoading();
    console.log(currentStage);
    switch (currentStage) {
        case "cover":
            // removeListener();
            coverUtility();
            console.log("enter cover123");
            break;
        case "A0_operation1":
            A0_operation1_link();
            break;
        case "A0_operation2":
            A0_operation2_link();
            break;
        case "A0_investigation1":
            A0_investigation1_link();
            break;
        case "A0_operation1":
            A0_operation1_link();
            break;
        case "A1_operation1a":
            A1_operation1a_link();
            break;
        case "A1_operation1b":
            A1_operation1b_link();
            break;
        case "A1_operation1":
            A1_operation1_link();
            console.log("enter A1_operation1 switch");
            break;
        case "A1_operation2a":
            A1_operation2a_link();
            console.log("enter A1_operation2a switch");
            break;
        case "A1_operation2b":
            A1_operation2b_link();
            console.log("enter A1_operation2b switch");
            break;
        case "A1_operation2":
            A1_operation2_link();
            console.log("enter A1_operation2 switch");
            break;
        case "A1_operation3":
            A1_operation3_link();
            console.log("enter A1_operation3 switch");
            break;
        case "A1_operation4":
            A1_operation4_link();
            console.log("enter A1_operation4 switch");
            break;
        case "A1_operation5":
            A1_operation5_link();
            console.log("enter A1_operation5 switch");
            break;
        case "A1_operation6":
            A1_operation6_link();
            console.log("enter A1_operation6 switch");
            break;
        case "A1_operation7":
            A1_operation7_link();
            console.log("enter A1_operation7 switch");
            break;
        case "A1_operation8":
            A1_operation8_link();
            console.log("enter A1_operation8 switch");
            break;
        case "A1_observation1a":
            A1_observation1a_link();
            console.log("enter A1_observation1a switch");
            break;
        case "A1_observation1b":
            A1_observation1b_link();
            console.log("enter A1_observation1b switch");
            break;
        case "A1_observation1":
            A1_observation1_link();
            console.log("enter A1_observation1 switch");
            break;
        case "A1_observation2a":
            A1_observation2a_link();
            console.log("enter A1_observation2a switch");
            break;
        case "A1_observation2b":
            A1_observation2b_link();
            console.log("enter A1_observation2b switch");
            break;
        case "A1_observation2":
            A1_observation2_link();
            console.log("enter A1_observation2 switch");
            break;
        case "A1_observation3":
            A1_observation3_link();
            console.log("enter A1_observation3 switch");
            break;
        case "A1_observation4":
            A1_observation4_link();
            console.log("enter A1_observation4 switch");
            break;
        case "A1_observation5":
            A1_observation5_link();
            console.log("enter A1_observation5 switch");
            break;
        case "A1_observation6":
            A1_observation6_link();
            console.log("enter A1_observation6 switch");
            break;
        case "A1_observation7":
            A1_observation7_link();
            console.log("enter A1_observation7 switch");
            break;
        case "A1_observation8":
            A1_observation8_link();
            console.log("enter A1_observation8 switch");
            break;
        case "A1_investigation1":
            A1_investigation1_link();
            break;
        case "A1_investigation2":
            A1_investigation2_link();
            break;
        case "A1_investigation3":
            A1_investigation3_link();
            break;
        case "A1_investigation4":
            A1_investigation4_link();
            break;
        case "A1_investigation5":
            A1_investigation5_link();
            break;
        case "A1_investigation6":
            A1_investigation6_link();
            break;
        case "A1_investigation7":
            A1_investigation7_link();
            break;
        case "A2_operation1a":
            A2_operation1a_link();
            console.log("enter A2_operation1a switch");
            break;
        case "A2_operation1b":
            A2_operation1b_link();
            console.log("enter A2_operation1b switch");
            break;
        case "A2_operation1":
            A2_operation1_link();
            console.log("enter A2_operation1 switch");
            break;
        case "A2_operation2":
            A2_operation2_link();
            console.log("enter A2_operation2 switch");
            break;
        case "A2_operation3a":
            A2_operation3a_link();
            console.log("enter A2_operation3a switch");
            break;
        case "A2_operation3b":
            A2_operation3b_link();
            console.log("enter A2_operation3b switch");
            break;
        case "A2_operation3":
            A2_operation3_link();
            console.log("enter A2_operation3 switch");
            break;
        case "A2_operation4a":
            A2_operation4a_link();
            console.log("enter A2_operation4a switch");
            break;
        case "A2_operation4":
            A2_operation4_link();
            console.log("enter A2_operation4 switch");
            break;
        case "A2_operation5":
            A2_operation5_link();
            console.log("enter A2_operation5 switch");
            break;
        case "A2_operation6":
            A2_operation6_link();
            console.log("enter A2_operation6 switch");
            break;
        case "A2_operation7":
            A2_operation7_link();
            console.log("enter A2_operation7 switch");
            break;
        case "A2_observation1a":
            A2_observation1a_link();
            console.log("enter A2_observation1a switch");
            break;
        case "A2_observation1b":
            A2_observation1b_link();
            console.log("enter A2_observation1b switch");
            break;
        case "A2_observation1":
            A2_observation1_link();
            console.log("enter A2_observation1 switch");
            break;
        case "A2_observation2a":
            A2_observation2a_link();
            console.log("enter A2_observation2a switch");
            break;
        case "A2_observation2b":
            A2_observation2b_link();
            console.log("enter A2_observation2b switch");
            break;
        case "A2_observation2":
            A2_observation2_link();
            console.log("enter A2_observation2 switch");
            break;
        case "A2_observation3":
            A2_observation3_link();
            console.log("enter A2_observation3 switch");
            break;
        case "A2_observation4":
            A2_observation4_link();
            console.log("enter A2_observation4 switch");
            break;
        case "A2_observation5":
            A2_observation5_link();
            console.log("enter A2_observation5 switch");
            break;
        case "A2_investigation1":
            A2_investigation1_link();
            break;
        case "A2_investigation2":
            A2_investigation2_link();
            break;
        case "A2_investigation3":
            A2_investigation3_link();
            break;
        case "A2_investigation4":
            A2_investigation4_link();
            break;
        case "A2_investigation5":
            A2_investigation5_link();
            break;
        case "A2_investigation6":
            A2_investigation6_link();
            break;
        case "A3_operation1a":
            A3_operation1a_link();
            console.log("enter A3_operation1a switch");
            break;
        case "A3_operation1":
            A3_operation1_link();
            console.log("enter A3_operation1 switch");
            break;
        case "A3_operation2":
            A3_operation2_link();
            console.log("enter A3_operation3 switch");
            break;
        case "A3_operation3":
            A3_operation3_link();
            console.log("enter A3_operation3 switch");
            break;
        case "A3_operation4":
            A3_operation4_link();
            break;
        case "A3_operation4a":
            A3_operation4a_link();
            break;
        case "A3_operation5":
            A3_operation5_link();
            break;
        case "A3_operation6":
            A3_operation6_link();
            break;
        case "A3_observation1a":
            A3_observation1a_link();
            break;
        case "A3_observation1b":
            A3_observation1b_link();
            break;
        case "A3_observation1":
            A3_observation1_link();
            break;
        case "A3_observation2a":
            A3_observation2a_link();
            break;
        case "A3_observation2b":
            A3_observation2b_link();
            break;
        case "A3_observation2":
            A3_observation2_link();
            break;
        case "A3_observation3":
            A3_observation3_link();
            break;
        case "A3_observation4":
            A3_observation4_link();
            break;
        case "A3_observation5":
            A3_observation5_link();
            break;
        case "A3_observation6":
            A3_observation6_link();
            break;
        case "A3_investigation1":
            A3_investigation1_link();
            break;
        case "A3_investigation2":
            A3_investigation2_link();
            break;
        case "A3_investigation3":
            A3_investigation3_link();
            break;
        case "A3_investigation4":
            A3_investigation4_link();
            break;
        case "A3_investigation5a":
            A3_investigation5a_link();
            console.log("enter A3_investigation5a switch");
            break;
        case "A3_investigation5":
            A3_investigation5_link();
            break;
        case "A3_investigation6":
            A3_investigation6_link();
            break;
        case "A4_operation1":
            A4_operation1_link()
            break;
        case "A4_observation1":
            A4_observation1_link()
            break;
        case "A4_investigation1":
            A4_investigation1_link()
            break;
        case "A4_operation2":
            A4_operation2_link()
            break;
        case "A4_observation2":
            A4_observation2_link()
            break;
        case "A4_investigation2":
            A4_investigation2_link()
            break;
        case "A4_operation3":
            A4_operation3_link()
            break;
        case "A4_operation4":
                A4_operation4_link()
                break;
        case "A4_operation5":
                A4_operation5_link()
                break;
        case "A5_operation1":
            A5_operation1_link()
            break;
        case "A5_observation1":
            A5_observation1_link()
            break;
        case "A5_investigation1":
            A5_investigation1_link()
            break;
        case "A5_operation2":
            A5_operation2_link()
            break;
        case "A5_observation2":
            A5_observation2_link()
            break;
        case "A5_investigation2":
            A5_investigation2_link()
            break;
        case "A6_operation1":
            A6_operation1_link()
            break;
        case "A6_observation1":
            A6_observation1_link()
            break;
        case "A6_investigation1":
            A6_investigation1_link()
            break;
        case "A6_operation2":
            A6_operation2_link()
            break;
        case "A6_observation2":
            A6_observation2_link()
            break;
        case "A6_investigation2":
            A6_investigation2_link()
            break;
        default:
            removeListener();
    }
}


//common
function showManipulativesCover() {
    $(".header_wrapper").hide();
    $(".title").hide();
    $(".worksheets").hide();
    $(".ggbSetting").css({ 'width': 'calc(100vw - 1.2rem)', 'max-width': 'calc((100vmin - 1.2rem) / 10 * 16)', 'margin': '0 auto' });
}



function selectActivity() {
    $("#activitySelected").on("click", "li a", function () {
        $("#navbarDropdown").text($(this).text());
        $("#navbarDropdown").val($(this).text());
        switch ($(this).text()) {
            case "活動0":
                showA0();
                break;
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
            case "活動7":
                showA7();
                break;
            case "活動8":
                showA8();
                break;
            case "活動9":
                showA9();
                break;
            default:
                break;
        }
    });
}


//common
function showWorksheetsContents(x) {
    $(".operation, .observation, .investigation").hide();
    switch (x) {
        case "A0_investigation1_link":
            $("#A0_investigation1").fadeIn();
            break;
        case "A0_operation1_link":
            $("#A0_operation1").fadeIn();
            break;
        case "A0_operation2_link":
            $("#A0_operation2").fadeIn();
            break;
        case "A0_observation1_link":
            $("#A0_observation1").fadeIn();
            break;
        case "A0_investigation2_link":
            $("#A0_investigation2").fadeIn();
            break;
        case "A1_operation1a_link":
            $("#A1_operation1a").fadeIn();
            break;
        case "A1_operation1b_link":
            $("#A1_operation1b").fadeIn();
            break;
        case "A1_operation1_link":
            $("#A1_operation1").fadeIn();
            break;
        case "A1_operation2a_link":
            $("#A1_operation2a").fadeIn();
            break;
        case "A1_operation2b_link":
            $("#A1_operation2b").fadeIn();
            break;
        case "A1_operation2_link":
            $("#A1_operation2").fadeIn();
            break;
        case "A1_operation3_link":
            $("#A1_operation3").fadeIn();
            break;
        case "A1_operation4_link":
            $("#A1_operation4").fadeIn();
            break;
        case "A1_operation5_link":
            $("#A1_operation5").fadeIn();
            break;
        case "A1_operation6_link":
            $("#A1_operation6").fadeIn();
            break;
        case "A1_operation7_link":
            $("#A1_operation7").fadeIn();
            break;
        case "A1_operation8_link":
            $("#A1_operation8").fadeIn();
            break;
        case "A1_observation1a_link":
            $("#A1_observation1a").fadeIn();
            break;
        case "A1_observation1b_link":
            $("#A1_observation1b").fadeIn();
            break;
        case "A1_observation1_link":
            $("#A1_observation1").fadeIn();
            break;
        case "A1_observation2a_link":
            $("#A1_observation2a").fadeIn();
            break;
        case "A1_observation2b_link":
            $("#A1_observation2b").fadeIn();
            break;
        case "A1_observation2_link":
            $("#A1_observation2").fadeIn();
            break;
        case "A1_observation3_link":
            $("#A1_observation3").fadeIn();
            break;
        case "A1_observation4_link":
            $("#A1_observation4").fadeIn();
            break;
        case "A1_observation5_link":
            $("#A1_observation5").fadeIn();
            break;
        case "A1_observation6_link":
            $("#A1_observation6").fadeIn();
            break;
        case "A1_observation7_link":
            $("#A1_observation7").fadeIn();
            break;
        case "A1_observation8_link":
            $("#A1_observation8").fadeIn();
            break;
        case "A1_investigation1_link":
            $("#A1_investigation1").fadeIn();
            break;
        case "A1_investigation2_link":
            $("#A1_investigation2").fadeIn();
            break;
        case "A1_investigation3_link":
            $("#A1_investigation3").fadeIn();
            break;
        case "A1_investigation4_link":
            $("#A1_investigation4").fadeIn();
            break;
        case "A1_investigation5_link":
            $("#A1_investigation5").fadeIn();
            break;
        case "A1_investigation6_link":
            $("#A1_investigation6").fadeIn();
            break;
        case "A1_investigation7_link":
            $("#A1_investigation7").fadeIn();
            break;
        case "A1_investigation8_link":
            $("#A1_investigation8").fadeIn();
            break;
        case "A2_operation1a_link":
            $("#A2_operation1a").fadeIn();
            break;
        case "A2_operation1b_link":
            $("#A2_operation1b").fadeIn();
            break;
        case "A2_operation1_link":
            $("#A2_operation1").fadeIn();
            break;
        case "A2_operation2_link":
            $("#A2_operation2").fadeIn();
            break;
        case "A2_operation3a_link":
            $("#A2_operation3a").fadeIn();
            break;
        case "A2_operation3b_link":
            $("#A2_operation3b").fadeIn();
            break;
        case "A2_operation3_link":
            $("#A2_operation3").fadeIn();
            break;
        case "A2_operation4a_link":
            $("#A2_operation4a").fadeIn();
            break;
        case "A2_operation4_link":
            $("#A2_operation4").fadeIn();
            break;
        case "A2_operation5_link":
            $("#A2_operation5").fadeIn();
            break;
        case "A2_operation6_link":
            $("#A2_operation6").fadeIn();
            break;
        case "A2_operation7_link":
            $("#A2_operation7").fadeIn();
            break;
        case "A2_operation8_link":
            $("#A2_operation8").fadeIn();
            break;
        case "A2_operation9_link":
            $("#A2_operation9").fadeIn();
            break;
        case "A2_operation10_link":
            $("#A2_operation10").fadeIn();
            break;
        case "A2_operation11_link":
            $("#A2_operation11").fadeIn();
            break;
        case "A2_observation1a_link":
            $("#A2_observation1a").fadeIn();
            break;
        case "A2_observation1b_link":
            $("#A2_observation1b").fadeIn();
            break;
        case "A2_observation1_link":
            $("#A2_observation1").fadeIn();
            break;
        case "A2_observation2a_link":
            $("#A2_observation2a").fadeIn();
            break;
        case "A2_observation2b_link":
            $("#A2_observation2b").fadeIn();
            break;
        case "A2_observation2_link":
            $("#A2_observation2").fadeIn();
            break;
        case "A2_observation3_link":
            $("#A2_observation3").fadeIn();
            break;
        case "A2_observation4_link":
            $("#A2_observation4").fadeIn();
            break;
        case "A2_observation5_link":
            $("#A2_observation5").fadeIn();
            break;
        case "A2_observation6_link":
            $("#A2_observation6").fadeIn();
            break;
        case "A2_observation7_link":
            $("#A2_observation7").fadeIn();
            break;
        case "A2_observation8_link":
            $("#A2_observation8").fadeIn();
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
        case "A2_investigation5_link":
            $("#A2_investigation5").fadeIn();
            break;
        case "A2_investigation6_link":
            $("#A2_investigation6").fadeIn();
            break;
        case "A2_investigation7_link":
            $("#A2_investigation7").fadeIn();
            break;
        case "A2_investigation8_link":
            $("#A2_investigation8").fadeIn();
            break;
        case "A3_operation1a_link":
            $("#A3_operation1a").fadeIn();
            break;
        case "A3_operation1_link":
            $("#A3_operation1").fadeIn();
            break;
        case "A3_operation2_link":
            $("#A3_operation2").fadeIn();
            break;
        case "A3_operation3_link":
            $("#A3_operation3").fadeIn();
            break;
        case "A3_operation4_link":
            $("#A3_operation4").fadeIn();
            break;
        case "A3_operation4a_link":
            $("#A3_operation4a").fadeIn();
            break;
        case "A3_operation5_link":
            $("#A3_operation5").fadeIn();
            break;
        case "A3_operation6_link":
            $("#A3_operation6").fadeIn();
            break;
        case "A3_operation7_link":
            $("#A3_operation7").fadeIn();
            break;
        case "A3_operation8_link":
            $("#A3_operation8").fadeIn();
            break;
        case "A3_observation1a_link":
            $("#A3_observation1a").fadeIn();
            break;
        case "A3_observation1b_link":
            $("#A3_observation1b").fadeIn();
            break;
        case "A3_observation1_link":
            $("#A3_observation1").fadeIn();
            break;
        case "A3_observation2a_link":
            $("#A3_observation2a").fadeIn();
            break;
        case "A3_observation2b_link":
            $("#A3_observation2b").fadeIn();
            break;
        case "A3_observation2_link":
            $("#A3_observation2").fadeIn();
            break;
        case "A3_observation3_link":
            $("#A3_observation3").fadeIn();
            break;
        case "A3_observation4_link":
            $("#A3_observation4").fadeIn();
            break;
        case "A3_observation5_link":
            $("#A3_observation5").fadeIn();
            break;
        case "A3_observation6_link":
            $("#A3_observation6").fadeIn();
            break;
        case "A3_observation7_link":
            $("#A3_observation7").fadeIn();
            break;
        case "A3_observation8_link":
            $("#A3_observation8").fadeIn();
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
        case "A3_investigation5a_link":
            $("#A3_investigation5a").fadeIn();
            break;
        case "A3_investigation5_link":
            $("#A3_investigation5").fadeIn();
            break;
        case "A3_investigation6_link":
            $("#A3_investigation6").fadeIn();
            break;
        case "A3_investigation7_link":
            $("#A3_investigation7").fadeIn();
            break;
        case "A3_investigation8_link":
            $("#A3_investigation8").fadeIn();
            break;
        case "A4_operation1_link":
            $("#A4_operation1").fadeIn();
            break;
        case "A4_operation2_link":
            $("#A4_operation2").fadeIn();
            break;
        case "A4_operation3_link":
            $("#A4_operation3").fadeIn();
            break;
        case "A4_operation4_link":
            $("#A4_operation4").fadeIn();
            break;
        case "A4_operation5_link":
            $("#A4_operation5").fadeIn();
            break;
        case "A4_operation6_link":
            $("#A4_operation6").fadeIn();
            break;
        case "A4_operation7_link":
            $("#A4_operation7").fadeIn();
            break;
        case "A4_operation8_link":
            $("#A4_operation8").fadeIn();
            break;
        case "A4_operation9_link":
            $("#A4_operation9").fadeIn();
            break;
        case "A4_operation10_link":
            $("#A4_operation10").fadeIn();
            break;
        case "A4_operation11_link":
            $("#A4_operation11").fadeIn();
            break;
        case "A4_observation1_link":
            $("#A4_observation1").fadeIn();
            break;
        case "A4_observation2_link":
            $("#A4_observation2").fadeIn();
            break;
        case "A4_observation3_link":
            $("#A4_observation3").fadeIn();
            break;
        case "A4_observation4_link":
            $("#A4_observation4").fadeIn();
            break;
        case "A4_observation5_link":
            $("#A4_observation5").fadeIn();
            break;
        case "A4_observation6_link":
            $("#A4_observation6").fadeIn();
            break;
        case "A4_observation7_link":
            $("#A4_observation7").fadeIn();
            break;
        case "A4_observation8_link":
            $("#A4_observation8").fadeIn();
            break;
        case "A4_investigation1_link":
            $("#A4_investigation1").fadeIn();
            break;
        case "A4_investigation2_link":
            $("#A4_investigation2").fadeIn();
            break;
        case "A4_investigation3_link":
            $("#A4_investigation3").fadeIn();
            break;
        case "A4_investigation4_link":
            $("#A4_investigation4").fadeIn();
            break;
        case "A4_investigation5_link":
            $("#A4_investigation5").fadeIn();
            break;
        case "A4_investigation6_link":
            $("#A4_investigation6").fadeIn();
            break;
        case "A4_investigation7_link":
            $("#A4_investigation7").fadeIn();
            break;
        case "A4_investigation8_link":
            $("#A4_investigation8").fadeIn();
            break;
        case "A5_operation1_link":
            $("#A5_operation1").fadeIn();
            break;
        case "A5_operation2_link":
            $("#A5_operation2").fadeIn();
            break;
        case "A5_operation3_link":
            $("#A5_operation3").fadeIn();
            break;
        case "A5_operation4_link":
            $("#A5_operation4").fadeIn();
            break;
        case "A5_operation5_link":
            $("#A5_operation5").fadeIn();
            break;
        case "A5_operation6_link":
            $("#A5_operation6").fadeIn();
            break;
        case "A5_operation7_link":
            $("#A5_operation7").fadeIn();
            break;
        case "A5_operation8_link":
            $("#A5_operation8").fadeIn();
            break;
        case "A5_operation9_link":
            $("#A5_operation9").fadeIn();
            break;
        case "A5_operation10_link":
            $("#A5_operation10").fadeIn();
            break;
        case "A5_operation11_link":
            $("#A5_operation11").fadeIn();
            break;
        case "A5_observation1_link":
            $("#A5_observation1").fadeIn();
            break;
        case "A5_observation2_link":
            $("#A5_observation2").fadeIn();
            break;
        case "A5_observation3_link":
            $("#A5_observation3").fadeIn();
            break;
        case "A5_observation4_link":
            $("#A5_observation4").fadeIn();
            break;
        case "A5_observation5_link":
            $("#A5_observation5").fadeIn();
            break;
        case "A5_observation6_link":
            $("#A5_observation6").fadeIn();
            break;
        case "A5_observation7_link":
            $("#A5_observation7").fadeIn();
            break;
        case "A5_observation8_link":
            $("#A5_observation8").fadeIn();
            break;
        case "A5_investigation1_link":
            $("#A5_investigation1").fadeIn();
            break;
        case "A5_investigation2_link":
            $("#A5_investigation2").fadeIn();
            break;
        case "A5_investigation3_link":
            $("#A5_investigation3").fadeIn();
            break;
        case "A5_investigation4_link":
            $("#A5_investigation4").fadeIn();
            break;
        case "A5_investigation5_link":
            $("#A5_investigation5").fadeIn();
            break;
        case "A5_investigation6_link":
            $("#A5_investigation6").fadeIn();
            break;
        case "A5_investigation7_link":
            $("#A5_investigation7").fadeIn();
            break;
        case "A5_investigation8_link":
            $("#A5_investigation8").fadeIn();
            break;
        case "A6_operation1_link":
            $("#A6_operation1").fadeIn();
            break;
        case "A6_operation2_link":
            $("#A6_operation2").fadeIn();
            break;
        case "A6_operation3_link":
            $("#A6_operation3").fadeIn();
            break;
        case "A6_operation4_link":
            $("#A6_operation4").fadeIn();
            break;
        case "A6_operation5_link":
            $("#A6_operation5").fadeIn();
            break;
        case "A6_operation6_link":
            $("#A6_operation6").fadeIn();
            break;
        case "A6_operation7_link":
            $("#A6_operation7").fadeIn();
            break;
        case "A6_operation8_link":
            $("#A6_operation8").fadeIn();
            break;
        case "A6_operation9_link":
            $("#A6_operation9").fadeIn();
            break;
        case "A6_operation10_link":
            $("#A6_operation10").fadeIn();
            break;
        case "A6_operation11_link":
            $("#A6_operation11").fadeIn();
            break;
        case "A6_observation1_link":
            $("#A6_observation1").fadeIn();
            break;
        case "A6_observation2_link":
            $("#A6_observation2").fadeIn();
            break;
        case "A6_observation3_link":
            $("#A6_observation3").fadeIn();
            break;
        case "A6_observation4_link":
            $("#A6_observation4").fadeIn();
            break;
        case "A6_observation5_link":
            $("#A6_observation5").fadeIn();
            break;
        case "A6_observation6_link":
            $("#A6_observation6").fadeIn();
            break;
        case "A6_observation7_link":
            $("#A6_observation7").fadeIn();
            break;
        case "A6_observation8_link":
            $("#A6_observation8").fadeIn();
            break;
        case "A6_investigation1_link":
            $("#A6_investigation1").fadeIn();
            break;
        case "A6_investigation2_link":
            $("#A6_investigation2").fadeIn();
            break;
        case "A6_investigation3_link":
            $("#A6_investigation3").fadeIn();
            break;
        case "A6_investigation4_link":
            $("#A6_investigation4").fadeIn();
            break;
        case "A6_investigation5_link":
            $("#A6_investigation5").fadeIn();
            break;
        case "A6_investigation6_link":
            $("#A6_investigation6").fadeIn();
            break;
        case "A6_investigation7_link":
            $("#A6_investigation7").fadeIn();
            break;
        case "A6_investigation8_link":
            $("#A6_investigation8").fadeIn();
            break;
        default:
            break;
    }
}

// for number rounding add by Edward
// If you want to round <num> to second decimal place, put <digit> as 2.
// If you want to round <num> to thousands place, put <digit> as -3.
function numRound(num, digit) {
    var exp = (digit >= 0 ? "e+" + digit : "e" + digit);
    var exp_r = (digit >= 0 ? "e" + (-digit) : "e+" + (-digit));
    return +(Math.round(num + exp) + exp_r);
}

// Fisher-Yates array Shuffle added and modified by Edward
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Suppose that there are two arrays: list1,  list2
// We can check whether two arrays are equal or not as type: list1.equals(list2)
// https://www.delftstack.com/zh-tw/howto/javascript/compare-two-arrays-javascript/
// Added by Edward
Array.prototype.equals = function (getArray) {
    if (this.length != getArray.length) return false;

    for (var i = 0; i < getArray.length; i++) {
        if (this[i] instanceof Array && getArray[i] instanceof Array) {
            if (!this[i].equals(getArray[i])) return false;
        } else if (this[i] != getArray[i]) {
            return false;
        }
    }
    return true;
};
// Suppose that there are some inner arrays in a outer array
// We can find the index of innerArray in the outerArray by following function
// Added by Edward
function arrayIndexOf(innerArray, outerArray) {
    for (var i = 0; i < outerArray.length; i++) {
        if (innerArray.equals(outerArray[i])) {return i;}
    }
}

// This function is for validating input value is number or not.
// Both String and Number objects are acceptable.
// This code below is taken from the book "JavaScript - the good parts".
// Added and modified by Edward
function isNumber(value) {
    if (typeof value === 'string') { value = Number(value); };    // added by Edward
    return typeof value === 'number' && isFinite(value);
}


function splitBarSetting(a, b) {
    $(".draggerParentHorizontal").css("width", a + "px");
    $(".splitPaneDragger").css("width", "1px");
    $(".dockPanelParent").eq(1).css("inset", "0px 0px 0px " + b + "px");
}

function loadApplet(id, ggbBase64) {
    // console.log("loadApp");
    if (params.id != id) {
        params.id = id;
        params.ggbBase64 = ggbBase64;
        applet = new GGBApplet(params, true);
        applet.inject('ggb-element');
        // console.log("loadAppIf");
    } else {
        switch (currentStage) {
            case "A0_operation1":
                A0_operation1_link();
                break;
            case "A0_operation2":
                A0_operation2_link();
                break;
            case "A0_investigation1":
                A0_investigation1_link();
                break;
            case "A0_operation1":
                A0_operation1_link();
                break;
            case "A1_operation1a":
                A1_operation1a_link()
                break;
            case "A1_operation1b":
                A1_operation1b_link()
                break;
            case "A1_operation1":
                A1_operation1_link();
                break;
            case "A1_operation2a":
                A1_operation2a_link();
                break;
            case "A1_operation2b":
                A1_operation2b_link();
                break;
            case "A1_operation2":
                A1_operation2_link();
                break;
            case "A1_operation3":
                A1_operation3_link();
                break;
            case "A1_operation4":
                A1_operation4_link();
                break;
            case "A1_operation5":
                A1_operation5_link();
                break;
            case "A1_operation6":   
                A1_operation6_link();
                break;
            case "A1_operation7":
                A1_operation7_link();
                break;
            case "A1_operation8":
                A1_operation8_link();
                break;
            case "A1_observation1a":
                A1_observation1a_link();
                break;
            case "A1_observation1b":
                A1_observation1b_link();
                break;
            case "A1_observation1":
                A1_observation1_link();
                break;
            case "A1_observation2a":
                A1_observation2a_link();
                break;
            case "A1_observation2b":
                A1_observation2b_link();
                break;
            case "A1_observation2":
                A1_observation2_link();
                break;
            case "A1_observation3":
                A1_observation3_link();
                break;
            case "A1_observation4":
                A1_observation4_link();
                break;
            case "A1_observation5":
                A1_observation5_link();
                break;
            case "A1_observation6":
                A1_observation6_link();
                break;
            case "A1_observation7":
                A1_observation7_link();
                break;
            case "A1_observation8":
                A1_observation8_link();
                break;
            case "A1_investigation1":
                A1_investigation1_link();
                break;
            case "A1_investigation2":
                A1_investigation2_link();
                break;
            case "A1_investigation3":
                A1_investigation3_link();
                break;
            case "A1_investigation4":
                A1_investigation4_link();
                break;
            case "A1_investigation5":
                A1_investigation5_link();
                break;
            case "A1_investigation6":
                A1_investigation6_link();
                break;
            case "A1_investigation7":
                A1_investigation7_link();
                break;
            case "A2_operation1a":
                A2_operation1a_link();
                break;
            case "A2_operation1b":
                A2_operation1b_link();
                break;
            case "A2_operation1":
                A2_operation1_link();
                break;
            case "A2_operation2":
                A2_operation2_link();
                break;
            case "A2_operation3a":
                A2_operation3a_link();
                break;
            case "A2_operation3b":
                A2_operation3b_link();
                break;
            case "A2_operation3":
                A2_operation3_link();
                break;
            case "A2_operation4a":
                A2_operation4a_link();
                break;
            case "A2_operation4":
                A2_operation4_link();
                break;
            case "A2_operation5":
                A2_operation5_link();
                break;
            case "A2_operation6":
                A2_operation6_link();
                break;
            case "A2_operation7":
                A2_operation7_link();
                break;
            case "A2_observation1a":
                A2_observation1a_link();
                break;
            case "A2_observation1b":
                A2_observation1b_link();
                break;
            case "A2_observation1":
                A2_observation1_link();
                break;
            case "A2_observation2a":
                A2_observation2a_link();
                break;
            case "A2_observation2b":
                A2_observation2b_link();
                break;
            case "A2_observation2":
                A2_observation2_link();
                break;
            case "A2_observation3":
                A2_observation3_link();
                break;
            case "A2_observation4":
                A2_observation4_link();
                break;
            case "A2_observation5":
                A2_observation5_link();
                break;
            case "A2_investigation1":
                A2_investigation1_link();
                break;
            case "A2_investigation2":
                A2_investigation2_link();
                break;
            case "A2_investigation3":
                A2_investigation3_link();
                break;
            case "A2_investigation4":
                A2_investigation4_link();
                break;
            case "A2_investigation5":
                A2_investigation5_link();
                break;
            case "A2_investigation6":
                A2_investigation6_link();
                break;
            case "A3_operation1a":
                A3_operation1a_link();
                break;
            case "A3_operation1":
                A3_operation1_link();
                break;
            case "A3_operation2":
                A3_operation2_link();
                break;
            case "A3_operation3":
                A3_operation3_link();
                break;
            case "A3_operation4":
                A3_operation4_link();
                break;
            case "A3_operation4a":
                A3_operation4a_link();
                break;
            case "A3_operation5":
                A3_operation5_link();
                break;
            case "A3_operation6":
                A3_operation6_link();
                break;
            case "A3_observation1a":
                A3_observation1a_link();
                break;
            case "A3_observation1b":
                A3_observation1b_link();
                break;
            case "A3_observation1":
                A3_observation1_link();
                break;
            case "A3_observation2a":
                A3_observation2a_link();
                break;
            case "A3_observation2b":
                A3_observation2b_link();
                break;
            case "A3_observation2":
                A3_observation2_link();
                break;
            case "A3_observation3":
                A3_observation3_link();
                break;
            case "A3_observation4":
                A3_observation4_link();
                break;
            case "A3_observation5":
                A3_observation5_link();
                break;
            case "A3_observation6":
                A3_observation6_link();
                break;
            case "A3_investigation1":
                A3_investigation1_link();
                break;
            case "A3_investigation2":
                A3_investigation2_link();
                break;
            case "A3_investigation3":
                A3_investigation3_link();
                break;
            case "A3_investigation4":
                A3_investigation4_link();
                break;
            case "A3_investigation5a":
                A3_investigation5a_link();
                break;
            case "A3_investigation5":
                A3_investigation5_link();
                break;
            case "A3_investigation6":
                A3_investigation6_link();
                break;
            case "A4_operation1":
                A4_operation1_link();
                break;
            case "A4_observation1":
                A4_observation1_link();
                break;
            case "A4_investigation1":
                A4_investigation1_link();
                break;
            case "A4_operation2":
                A4_operation2_link();
                break;
            case "A4_observation2":
                A4_observation2_link();
                break;
            case "A4_investigation2":
                A4_investigation2_link();
                break;
            case "A4_operation3":
                A4_operation3_link();
                break;
            case "A4_operation4":
                A4_operation4_link();
                break;
            case "A4_operation5":
                A4_operation5_link();
                break;
            case "A5_operation1":
                A5_operation1_link();
                break;
            case "A5_observation1":
                A5_observation1_link();
                break;
            case "A5_investigation1":
                A5_investigation1_link();
                break;
            case "A5_operation2":
                A5_operation2_link();
                break;
            case "A5_observation2":
                A5_observation2_link();
                break;
            case "A5_investigation2":
                A5_investigation2_link();
                break;
            case "A6_operation1":
                A6_operation1_link();
                break;
            case "A6_observation1":
                A6_observation1_link();
                break;
            case "A6_investigation1":
                A6_investigation1_link();
                break;
            case "A6_operation2":
                A6_operation2_link();
                break;
            case "A6_observation2":
                A6_observation2_link();
                break;
            case "A6_investigation2":
                A6_investigation2_link();
                break;
            default:
                console.log("no!!!");
                break;
        }
    }
}