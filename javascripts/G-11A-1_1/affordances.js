var currentStage = "cover";
params.ggbBase64 = ggb_G_11A_1_1_cover;
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
        title: "向量的加法與減法",
    },
    2: {
        id: "A2_operation1",
        title: "向量坐標表示法的加法與減法",
    },
    3: {
        id: "A3_operation1",
        title: "向量的係數積",
    },
};
const manipulative = new Manipulative(
    "G-11A-1_1 ",
    params,
    ggb_G_11A_1_1_cover,
    firstActivityInfo
);
const activities = [
    new Activity("A1_operation1", ggb_G_11A_1_1_A1_1, {
        validate: (self, appletData) => {
            if (appletData.tc > 0.95) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_observation1", ggb_G_11A_1_1_A1_1, {
        validate: (self, appletData) => {
            const answers = ["0", "1", "2", "0", "0"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_operation2", ggb_G_11A_1_1_A1_2, {
        validate: (self, appletData) => {
            self.data.ct = self.data.ct || appletData.ct;
            self.data.cp = self.data.cp || appletData.cp;
            if (self.data.ct && self.data.cp) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_investigation1", ggb_G_11A_1_1_A1_2, {
        validate: (self, appletData) => {
            const answers = [false, true, false, false];
            const result = answers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A1_operation3", ggb_G_11A_1_1_A1_3, {
        validate: (self, appletData) => {
            if (appletData.t_2 > 2.95) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_investigation2", ggb_G_11A_1_1_A1_3, {
        validate: (self, appletData) => {
            const answers = ["2", "1", "1"];
            const result = answers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            if (result.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A2_operation1", ggb_G_11A_1_1_A2, {
        validate: (self, appletData) => {
            if (appletData.t_1 > 1.95 && appletData.t_2 > 2.95) {
                self.complete = true;
            }
        },
    }),
    new Activity("A2_observation1", ggb_G_11A_1_1_A2, {
        validate: (self, appletData) => {
            for (const iconNumber of ["1", "2", "3"]) {
                for (let i = 0; i < 4; i++) {
                    if (!self.data[iconNumber]) {
                        return { message: "還有空格沒有完成哦！" };
                    }
                    if (!self.data[iconNumber][i]) {
                        return { message: "還有空格沒有完成哦！" };
                    }
                }
            }

            self.complete = true;
        },
        onListen: (self, api) => {
            console.log("onListening");
            // check mode
            const isPlus = api.getVisible("c_1");
            const isMinus = api.getVisible("c_2");
            const a = getCoord("a");
            const b = getCoord("b");
            const answers1 = [
                { a: [1, 3], b: [2, 5] },
                { a: [-1, 3], b: [3, -4] },
                { a: [1, 3], b: [2, 6] },
                { a: [1, 3], b: [-1, -3] },
            ];
            self.data[1] = self.data[1] || {};
            self.data[2] = self.data[2] || {};
            self.data[3] = self.data[3] || {};
            const displayAnswer1 = ["(3,8)", "(2,-1)", "(3,9)", "(0,0)"];
            const displayAnswer2 = ["(-2,-5)", "(-3,4)", "(-2,-6)", "(1,3)"];
            const displayAnswer3 = ["(-1,-2)", "(-4,7)", "(-1,-3)", "(2,6)"];
            for (let i = 0; i < answers1.length; i++) {
                const answer = answers1[i];
                const isDisplayAnswer =
                    self.data[1][i] ||
                    (a.equals(answer.a) && b.equals(answer.b) && isPlus);
                $(".A2_observation1_table_answer_1")[i].innerHTML =
                    isDisplayAnswer ? renderLatex(displayAnswer1[i]) : "";
                const isDisplayAnswer2 =
                    self.data[2][i] || (b.equals(answer.b) && isMinus);
                const isDisplayAnswer3 =
                    self.data[3][i] ||
                    (a.equals(answer.a) && b.equals(answer.b) && isMinus);
                $(".A2_observation1_table_answer_2")[i].innerHTML =
                    isDisplayAnswer2 ? renderLatex(displayAnswer2[i]) : "";
                $(".A2_observation1_table_answer_3")[i].innerHTML =
                    isDisplayAnswer3 ? renderLatex(displayAnswer3[i]) : "";
            }
        },
    }),
    new Activity("A2_investigation1", ggb_G_11A_1_1_A2, {
        validate: (self, appletData) => {
            const dropdownAnswers = ["1", "3"];
            const dropdownResult = dropdownAnswers.map((answer, index) => {
                return answer === self.userDropdown[index].value;
            });
            const inputAnswers = [
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                true,
            ];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (dropdownResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
    }),
    new Activity("A3_operation1", ggb_G_11A_1_1_A3_1, {
        validate: (self, appletData, target) => {
            self.data.tChange =
                self.data.tChange ||
                (appletData.t ? appletData.t !== -2 : false);
            self.data.yChange =
                self.data.yChange || !getCoord("Y").equals(["2", "1"]);
            if (self.data.tChange && self.data.yChange) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation1", ggb_G_11A_1_1_A3_1, {
        validate: (self, appletData) => {
            for (let i = 0; i < 5; i++) {
                if (!self.data[i]) {
                    return { message: "還有空格沒有完成哦！" };
                }
            }

            self.complete = true;
        },
        onListen: (self, api) => {
            console.log("onListening");
            const t = getValue("t");
            const Y = getCoord("Y");
            const answers1 = [
                { t: -1, Y: [2, 1] },
                { t: -0.5, Y: [2, 1] },
                { t: 0, Y: [2, 1] },
                { t: 1, Y: [2, 1] },
                { t: 2, Y: [2, 1] },
            ];
            const displayAnswer1 = [
                "(-2,-1)",
                "(-1,-0.5)",
                "(0,0)",
                "(2,1)",
                "(4,2)",
            ];
            for (let i = 0; i < answers1.length; i++) {
                const answer = answers1[i];
                const isDisplayAnswer =
                    self.data[i] || (t === answer.t && Y.equals(answer.Y));
                $(".A3_observation1_table_answer_1")[i].innerHTML =
                    isDisplayAnswer ? renderLatex(displayAnswer1[i]) : "";
            }
        },
    }),
    new Activity("A3_investigation1", ggb_G_11A_1_1_A3_1, {
        validate: (self, appletData) => {
            const inputAnswers = [
                true,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                true,
                false,
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
    new Activity("A3_operation2", ggb_G_11A_1_1_A3_2, {
        validate: (self, appletData, target) => {
            self.data.tChange = self.data.tChange || !!appletData.t;
            self.data.sChange = self.data.sChange || !!appletData.s;
            self.data.button1 = self.data.button1 || target === "button1";
            if (self.data.tChange && self.data.sChange && self.data.button1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A3_observation2", ggb_G_11A_1_1_A3_2, {
        validate: (self, appletData) => {
            for (let i = 0; i < 5; i++) {
                if (!self.data[i]) {
                    return { message: "還有空格沒有完成哦！" };
                }
            }

            self.complete = true;
        },
        onListen: (self, api) => {
            console.log("onListening");
            const t = getValue("t");
            const s = getValue("s");
            const A = getCoord("A");
            const B = getCoord("B");
            const answers1 = [
                { t: 0.6, s: 0.4, A: [2, 3], B: [5, 2] },
                { t: 0.6, s: 0.2, A: [2, 3], B: [5, 2] },
                { t: 0.6, s: 0.8, A: [2, 3], B: [5, 2] },
                { t: 0.5, s: 0.5, A: [2, 3], B: [5, 2] },
                { t: 0.5, s: 0.3, A: [2, 3], B: [5, 2] },
            ];
            const displayAnswer1 = [
                "(3.2,2.6)",
                "(1.2,1.8)",
                "(5.2,3.4)",
                "(3.5,2.5)",
                "(2.5,2.1)",
            ];
            for (let i = 0; i < answers1.length; i++) {
                const answer = answers1[i];
                const isDisplayAnswer =
                    self.data[i] ||
                    (t === answer.t &&
                        s === answer.s &&
                        A.equals(answer.A) &&
                        B.equals(answer.B));
                $(".A3_observation2_table_answer_1")[i].innerHTML =
                    isDisplayAnswer ? renderLatex(displayAnswer1[i]) : "";
            }
        },
    }),
    new Activity("A3_investigation2", ggb_G_11A_1_1_A3_2, {
        validate: (self, appletData) => {
            const inputAnswers = [
                false,
                false,
                true,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
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
// Set activity
$(document).ready(() => {
    // A2_observation1
    $(".A2_observation1_icon").click(function () {
        const activity = manipulative.getActivity("A2_observation1");
        const isPlus = manipulative.api.getVisible("c_1");
        const isMinus = manipulative.api.getVisible("c_2");
        const iconNumber = this.id[this.id.length - 1];
        const a = getCoord("a");
        const b = getCoord("b");
        switch (iconNumber) {
            case "1":
                const answers1 = [
                    { a: [1, 3], b: [2, 5] },
                    { a: [-1, 3], b: [3, -4] },
                    { a: [1, 3], b: [2, 6] },
                    { a: [1, 3], b: [-1, -3] },
                ];
                const displayAnswer1 = ["(3,8)", "(2,-1)", "(3,9)", "(0,0)"];
                for (let i = 0; i < answers1.length; i++) {
                    const answer = answers1[i];

                    if (a.equals(answer.a) && b.equals(answer.b) && isPlus) {
                        activity.data[iconNumber] =
                            activity.data[iconNumber] || {};
                        activity.data[iconNumber][i] = true;
                    }
                }
                break;
            case "2":
                const answers2 = [
                    { a: [1, 3], b: [2, 5] },
                    { a: [-1, 3], b: [3, -4] },
                    { a: [1, 3], b: [2, 6] },
                    { a: [1, 3], b: [-1, -3] },
                ];
                for (let i = 0; i < answers2.length; i++) {
                    const answer = answers2[i];

                    if (b.equals(answer.b) && isMinus) {
                        activity.data[iconNumber] =
                            activity.data[iconNumber] || {};
                        activity.data[iconNumber][i] = true;
                    }
                }
                break;
            case "3":
                const answers3 = [
                    { a: [1, 3], b: [2, 5] },
                    { a: [-1, 3], b: [3, -4] },
                    { a: [1, 3], b: [2, 6] },
                    { a: [1, 3], b: [-1, -3] },
                ];
                for (let i = 0; i < answers3.length; i++) {
                    const answer = answers3[i];
                    if (a.equals(answer.a) && b.equals(answer.b) && isMinus) {
                        activity.data[iconNumber] =
                            activity.data[iconNumber] || {};
                        activity.data[iconNumber][i] = true;
                    }
                }
                break;
            default:
                break;
        }
    });

    $(".A3_observation1_icon").click(function () {
        const activity = manipulative.getActivity("A3_observation1");
        const t = getValue("t");
        const Y = getCoord("Y");
        const answers1 = [
            { t: -1, Y: [2, 1] },
            { t: -0.5, Y: [2, 1] },
            { t: 0, Y: [2, 1] },
            { t: 1, Y: [2, 1] },
            { t: 2, Y: [2, 1] },
        ];

        for (let i = 0; i < answers1.length; i++) {
            const answer = answers1[i];

            if (t === answer.t && Y.equals(answer.Y)) {
                activity.data[i] = true;
            }
        }
    });

    $(".A3_observation2_icon").click(function () {
        const activity = manipulative.getActivity("A3_observation2");
        const t = getValue("t");
        const s = getValue("s");
        const A = getCoord("A");
        const B = getCoord("B");
        const answers1 = [
            { t: 0.6, s: 0.4, A: [2, 3], B: [5, 2] },
            { t: 0.6, s: 0.2, A: [2, 3], B: [5, 2] },
            { t: 0.6, s: 0.8, A: [2, 3], B: [5, 2] },
            { t: 0.5, s: 0.5, A: [2, 3], B: [5, 2] },
            { t: 0.5, s: 0.3, A: [2, 3], B: [5, 2] },
        ];
        for (let i = 0; i < answers1.length; i++) {
            const answer = answers1[i];

            if (
                t === answer.t &&
                s === answer.s &&
                A.equals(answer.A) &&
                B.equals(answer.B)
            ) {
                activity.data[i] = true;
            }
        }
    });
});

function getCoord(x) {
    return [manipulative.api.getXcoord(x), manipulative.api.getYcoord(x)];
}

function getValue(x) {
    return manipulative.api.getValue(x);
}

function renderLatex(value) {
    return katex.renderToString(value, { throwOnError: false });
}
