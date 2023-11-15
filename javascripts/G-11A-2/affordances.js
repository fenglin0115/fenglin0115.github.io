var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_2_cover;
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
        title: "坐標系與點坐標",
    },
    2: {
        id: "A2_operation1",
        title: "空間中兩點的距離公式",
    },
    3: {
        id: "A3_operation1",
        title: "空間中兩點的中點公式",
    },
};
const manipulative = new Manipulative(
    "G-11A-2",
    params,
    ggb_G_11A_2_cover,
    firstActivityInfo
);
const activities = [
    new Activity("A1_operation1", ggb_G_11A_2_A1_1, {
        validate: (self, appletData, target) => {
            self.data.ax = self.data.ax || !!appletData.ax;
            self.data.ay = self.data.ay || !!appletData.ay;
            self.data.k = self.data.k || !!appletData.k;
            self.data.e = self.data.e || !!appletData.e;
            if (
                self.data.ax &&
                self.data.ay &&
                self.data.k &&
                self.data.e &&
                appletData.k > 0.95 &&
                appletData.e > 0.95
            ) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation1", ggb_G_11A_2_A1_1, {
        validate: (self, appletData, target) => {
            const answers = ["0", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_investigation1", ggb_G_11A_2_A1_1, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_operation2", ggb_G_11A_2_A1_2, {
        validate: (self, appletData, target) => {
            self.data.ax = appletData.ax === 1;
            self.data.ay = appletData.ay === 2;
            self.data.az = appletData.az === 3;
            self.data.l = appletData.l === 1;
            self.data.button1 = self.data.button1 || target === "button1";
            self.data.button2 = self.data.button2 || target === "button2";
            if (
                self.data.ax &&
                self.data.ay &&
                self.data.az &&
                self.data.l &&
                self.data.button1 &&
                self.data.button2
            ) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation2", ggb_G_11A_2_A1_2, {
        validate: (self, appletData, target) => {
            const answers = ["2", "1", "3", "3", "1", "0", "2", "3", "0"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_investigation2", ggb_G_11A_2_A1_2, {
        validate: (self, appletData, target) => {
            const answers = ["0", "1", "2"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_operation3", ggb_G_11A_2_A1_3, {
        validate: (self, appletData, target) => {
            self.data.ax = appletData.ax === 1;
            self.data.ay = appletData.ay === 2;
            self.data.az = appletData.az === 3;
            self.data.d = appletData.d === 1;
            self.data.button1 = self.data.button1 || target === "button1";
            self.data.button2 = self.data.button2 || target === "button2";
            if (
                self.data.ax &&
                self.data.ay &&
                self.data.az &&
                self.data.d &&
                self.data.button1 &&
                self.data.button2
            ) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation3", ggb_G_11A_2_A1_3, {
        validate: (self, appletData, target) => {
            const answers = ["2", "3", "3", "3", "1", "3", "3", "3", "0"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_investigation3", ggb_G_11A_2_A1_3, {
        validate: (self, appletData, target) => {
            const answers = ["0", "1", "2", "0", "1", "2"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation1", ggb_G_11A_2_A2_1, {
        validate: (self, appletData, target) => {
            self.data.t = appletData.t === 1;
            self.data.a_1 = appletData.a_1 === 1;
            self.data.xyd = appletData.xyd > 0.95;
            if (self.data.t && self.data.a_1 && self.data.xyd) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation1", ggb_G_11A_2_A2_1, {
        validate: (self, appletData, target) => {
            const answers = ["0", "2", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_investigation1", ggb_G_11A_2_A2_1, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation2", ggb_G_11A_2_A2_2, {
        validate: (self, appletData, target) => {
            self.data.a_1 = appletData.a_1 === 1;
            self.data.c_1 = appletData.c_1 === 1;
            self.data.button1 = self.data.button1 || target === "button1";
            self.data.button2 = self.data.button2 || target === "button2";
            if (
                self.data.a_1 &&
                self.data.c_1 &&
                self.data.button1 &&
                self.data.button2
            ) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation2", ggb_G_11A_2_A2_2, {
        validate: (self, appletData, target) => {
            const answers = ["0", "1", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_investigation2", ggb_G_11A_2_A2_2, {
        validate: (self, appletData, target) => {
            const inputAnswers = [false, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation3", ggb_G_11A_2_A2_3, {
        validate: (self, appletData, target) => {
            self.data.f_1 = appletData.f_1 === 1;
            self.data.g_1 = appletData.g_1 === 1;
            if (self.data.f_1 && self.data.g_1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation3", ggb_G_11A_2_A2_3, {
        validate: (self, appletData, target) => {
            const answers = ["2", "1", "3", "3", "0", "2"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_investigation3", ggb_G_11A_2_A2_3, {
        validate: (self, appletData, target) => {
            const answers = [false, true, false, false, false, true];
            const result = answers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation4", ggb_G_11A_2_A2_4, {
        validate: (self, appletData, target) => {
            self.data.ax = appletData.ax === 1;
            self.data.ay = appletData.ay === 2;
            self.data.az = appletData.az === 3;
            self.data.dx = appletData.dx === 4;
            self.data.dy = appletData.dy === 5;
            self.data.dz = appletData.dz === 6;
            self.data.f_1 = appletData.f_1 === 1;
            self.data.g_1 = appletData.g_1 === 1;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_operation5", ggb_G_11A_2_A2_5, {
        validate: (self, appletData, target) => {
            self.data.f_1 = appletData.f_1 === 1;
            self.data.g_1 = appletData.g_1 === 1;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation4", ggb_G_11A_2_A2_5, {
        validate: (self, appletData, target) => {
            const answers = ["1", "2", "0", "1", "2", "2"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_investigation4", ggb_G_11A_2_A2_5, {
        validate: (self, appletData, target) => {
            const answers = [true, false, false];
            const result = answers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_operation1", ggb_G_11A_2_A3_1, {
        validate: (self, appletData, target) => {
            self.data.a = appletData.a === 1;
            self.data.b_1 = appletData["b_{1}"] === 1;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation1", ggb_G_11A_2_A3_1, {
        validate: (self, appletData, target) => {
            const answers = ["1", "2"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_investigation1", ggb_G_11A_2_A3_1, {
        validate: (self, appletData, target) => {
            const answers = [false, true, false];
            const result = answers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_operation2", ggb_G_11A_2_A3_2, {
        validate: (self, appletData, target) => {
            self.data.a = appletData.a === 1;
            self.data.b = appletData.b === 0;
            self.data.r = appletData.r === 1;
            self.data.o = appletData.o === 1;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation2", ggb_G_11A_2_A3_2, {
        validate: (self, appletData, target) => {
            const answers = ["1", "1", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_investigation2", ggb_G_11A_2_A3_2, {
        validate: (self, appletData, target) => {
            const answers = ["0", "2", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            const inputAnswers = [true, false];
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