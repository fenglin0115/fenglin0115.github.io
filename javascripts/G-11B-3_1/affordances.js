var currentStage = "cover";
params.ggbBase64 = ggb_G_11B_3_1_cover;
params.appletOnLoad = function (api) {
    api.registerClientListener("clientListener");
};
var applet = new GGBApplet(params, true);
applet.setHTML5Codebase("GeoGebra/HTML5/5.0/web3d/");
window.addEventListener("load", function () {
    applet.inject("ggb-element");
});

const firstActivityInfo = {
    1: {
        id: "A1_operation1",
        title: "認識單點透視法原理",
    },
    2: {
        id: "A2_operation1",
        title: "單點透視法繪製立體形狀",
    },
    3: {
        id: "A3_operation1",
        title: "在畫布上繪製鐵軌與枕木",
    },
    4: {
        id: "A4_operation1",
        title: "計算枕木在畫布上的位置",
    },
    5: {
        id: "A5_operation1",
        title: "計算枕木在畫布上的長度",
    },
};
const manipulative = new Manipulative(
    "G-11B-3",
    params,
    ggb_G_11B_3_1_cover,
    firstActivityInfo
);
const activities = [
    new Activity("A1_operation1", ggb_G_11B_3_1_A1, {
        validate: (self, appletData, target) => {
            self.data.tr = Activity.isDataInit(self, appletData, "tr");
            self.data.ls = Activity.isDataInit(self, appletData, "ls");
            self.data.viewXY = Activity.isTargetInit(self, target, "viewXY");
            self.data.viewXZ = Activity.isTargetInit(self, target, "viewXZ");
            self.data.viewYZ = Activity.isTargetInit(self, target, "viewYZ");
            self.data.viewDE1 = Activity.isTargetInit(self, target, "viewDE1");
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation1", ggb_G_11B_3_1_A1, {
        validate: (self, appletData, target) => {
            const inputAnswers = [true, false, true, false, true, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_operation2", ggb_G_11B_3_1_A1, {
        validate: (self, appletData, target) => {
            self.data.tr = Activity.isDataInit(self, appletData, "tr");
            self.data.showPen = appletData.showPen === 1;
            self.data.trChange = self.data.trChange || 0;
            self.data.trChange += target === "tr" ? 1 : 0;
            self.data.trChangeOk = self.data.trChange > 3;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation2", ggb_G_11B_3_1_A1, {
        validate: (self, appletData, target) => {
            const inputAnswers = [
                true,
                false,
                true,
                false,
                true,
                false,
                true,
                false,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),

    new Activity("A2_operation1", ggb_G_11B_3_1_A2, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.ptSet = self.data.ptSet || new Set();
            self.data.ptSet.add(manipulative.api.getValue("pt"));
            self.data.ptCount = self.data.ptSet.size >= 8;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation1", ggb_G_11B_3_1_A2, {
        validate: (self, appletData, target) => {
            const inputAnswers = [
                true,
                false,
                true,
                false,
                true,
                false,
                false,
                true,
                true,
                false,
                true,
                false,
                false,
                true,
                false,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation2", ggb_G_11B_3_1_A2, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.vp = appletData.vp > 0.95;
            self.data.pt = manipulative.api.getValue("pt") === 8;
            self.data.showResize = appletData.showResize === 1;
            self.data.A1r = Activity.isTargetInit(self, target, "A1r");

            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation2", ggb_G_11B_3_1_A2, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, true, true, false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),

    new Activity("A3_operation1", ggb_G_11B_3_1_A3, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.pen = Activity.isDataInit(self, appletData, "pen");

            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_operation2", ggb_G_11B_3_1_A3, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.pen0 = appletData.pen < 0.2;
            self.data.pen1 = appletData.pen > 0.8;
            self.data.showTRACE = appletData.showTRACE === 1;
            self.data.showRR1 = appletData.showRR1 === 1;
            self.data.showRR2 = appletData.showRR2 === 1;
            self.data.showSL1 = appletData.showSL1 === 1;
            self.data.showSL2 = appletData.showSL2 === 1;
            self.data.showSL3 = appletData.showSL3 === 1;
            self.data.showSL4 = appletData.showSL4 === 1;
            self.data.showSL5 = appletData.showSL5 === 1;
            self.data.showSL6 = appletData.showSL6 === 1;

            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation1", ggb_G_11B_3_1_A3, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, true, true, false, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_operation3", ggb_G_11B_3_1_A3, {
        validate: (self, appletData, target) => {
            self.data.vp = appletData.vp > 0.95;
            self.data.showHL = appletData.showHL === 1;

            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation2", ggb_G_11B_3_1_A3, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, true, true, false, true, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),

    new Activity("A4_operation1", ggb_G_11B_3_1_A4, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.showSL3 = appletData.showSL3 === 1;
            self.data.showAUX = appletData.showAUX === 1;
            self.data.showDATA = appletData.showDATA === 1;
            self.data.viewXZ = Activity.isTargetInit(self, target, "viewXZ");
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A4_observation1", ggb_G_11B_3_1_A4, {
        validate: (self, appletData, target) => {
            const inputAnswers = [
                true,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A4_investigation1", ggb_G_11B_3_1_A4, {
        validate: (self, appletData, target) => {
            const inputAnswers = [
                true,
                false,
                false,
                true,
                true,
                false,
                true,
                true,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),

    new Activity("A5_operation1", ggb_G_11B_3_1_A5, {
        validate: (self, appletData, target) => {
            self.data.ls = appletData.ls > 0.95;
            self.data.showSL3 = appletData.showSL3 === 1;
            self.data.showSLOther =
                appletData.showSL1 === 1 || appletData.showSL2 === 1;
            self.data.viewXY = Activity.isTargetInit(self, target, "viewXY");
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A5_observation1", ggb_G_11B_3_1_A5, {
        validate: (self, appletData, target) => {
            const inputAnswers = [
                false,
                true,
                true,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                true,
                false,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
];

manipulative.activities = activities;
function clientListener(object) {
    manipulative.clientListener.bind(manipulative)(object);
}

function coverUtility() {
    var api = applet.getAppletObject();
    api.registerObjectClickListener("pic5", start);
    api.registerObjectClickListener("pic6", backLists);

    function start() {
        console.log("Start");
        showLoading();
        $(".header_wrapper").show();
        $(".title").show();
        $(".ggbSetting").removeAttr("style");
        $(".worksheets").show();
        manipulative.showFirstActivity(1);
    }

    function backLists() {
        location.href = "./index.html";
    }
}

function showA1() {
    manipulative.showFirstActivity(1);
}
function showA2() {
    manipulative.showFirstActivity(2);
}
function showA3() {
    manipulative.showFirstActivity(3);
}
function showA4() {
    manipulative.showFirstActivity(4);
}
function showA5() {
    manipulative.showFirstActivity(5);
}
