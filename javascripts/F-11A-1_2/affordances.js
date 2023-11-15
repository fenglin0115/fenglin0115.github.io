var currentStage = "cover";
params.ggbBase64 = ggb_F_11A_1_2_cover;
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
        title: "餘弦函數的圖形",
    },
    2: {
        id: "A2_investigation1",
        title: "正切函數的圖形",
    },
};
const manipulative = new Manipulative(
    "F-11A-1_2 ",
    params,
    ggb_F_11A_1_2_cover,
    firstActivityInfo,
    {
        isTesting: true,
    }
);
const activities = [
    new Activity("A1_operation1", ggb_F_11A_1_2_A1_1, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_operation2", ggb_F_11A_1_2_A1_2, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_investigation1", ggb_F_11A_1_2_A1_2, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_observation1", ggb_F_11A_1_2_A1_2, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_operation3", ggb_F_11A_1_2_A1_3, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_observation2", ggb_F_11A_1_2_A1_3, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_operation4", ggb_F_11A_1_2_A1_4, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_observation3", ggb_F_11A_1_2_A1_4, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A1_observation4", ggb_F_11A_1_2_A1_5, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_investigation1", ggb_F_11A_1_2_A2_1, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_operation1", ggb_F_11A_1_2_A2_2, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_operation2", ggb_F_11A_1_2_A2_3, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_observation1", ggb_F_11A_1_2_A2_3, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_operation3", ggb_F_11A_1_2_A2_4, {
        validate: (self, appletData) => {
            self.complete = true;
        },
    }),
    new Activity("A2_observation2", ggb_F_11A_1_2_A2_4, {
        validate: (self, appletData) => {
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
// $(document).ready(() => {
//     // A2_observation1
//     $(".A2_observation1_icon").click(function () {
//         const activity = manipulative.getActivity("A2_observation1");
//         const isPlus = manipulative.api.getVisible("c_1");
//         const isMinus = manipulative.api.getVisible("c_2");
//         const iconNumber = this.id[this.id.length - 1];
//         const a = getCoord("a");
//         const b = getCoord("b");
//         switch (iconNumber) {
//             case "1":
//                 const answers1 = [
//                     { a: [1, 3], b: [2, 5] },
//                     { a: [-1, 3], b: [3, -4] },
//                     { a: [1, 3], b: [2, 6] },
//                     { a: [1, 3], b: [-1, -3] },
//                 ];
//                 const displayAnswer1 = ["(3,8)", "(2,-1)", "(3,9)", "(0,0)"];
//                 for (let i = 0; i < answers1.length; i++) {
//                     const answer = answers1[i];

//                     if (a.equals(answer.a) && b.equals(answer.b) && isPlus) {
//                         activity.data[iconNumber] =
//                             activity.data[iconNumber] || {};
//                         activity.data[iconNumber][i] = true;
//                     }
//                 }
//                 break;
//             case "2":
//                 const answers2 = [
//                     { a: [1, 3], b: [2, 5] },
//                     { a: [-1, 3], b: [3, -4] },
//                     { a: [1, 3], b: [2, 6] },
//                     { a: [1, 3], b: [-1, -3] },
//                 ];
//                 for (let i = 0; i < answers2.length; i++) {
//                     const answer = answers2[i];

//                     if (b.equals(answer.b) && isMinus) {
//                         activity.data[iconNumber] =
//                             activity.data[iconNumber] || {};
//                         activity.data[iconNumber][i] = true;
//                     }
//                 }
//                 break;
//             case "3":
//                 const answers3 = [
//                     { a: [1, 3], b: [2, 5] },
//                     { a: [-1, 3], b: [3, -4] },
//                     { a: [1, 3], b: [2, 6] },
//                     { a: [1, 3], b: [-1, -3] },
//                 ];
//                 for (let i = 0; i < answers3.length; i++) {
//                     const answer = answers3[i];
//                     if (a.equals(answer.a) && b.equals(answer.b) && isMinus) {
//                         activity.data[iconNumber] =
//                             activity.data[iconNumber] || {};
//                         activity.data[iconNumber][i] = true;
//                     }
//                 }
//                 break;
//             default:
//                 break;
//         }
//     });

//     $(".A3_observation1_icon").click(function () {
//         const activity = manipulative.getActivity("A3_observation1");
//         const t = getValue("t");
//         const Y = getCoord("Y");
//         const answers1 = [
//             { t: -1, Y: [2, 1] },
//             { t: -0.5, Y: [2, 1] },
//             { t: 0, Y: [2, 1] },
//             { t: 1, Y: [2, 1] },
//             { t: 2, Y: [2, 1] },
//         ];

//         for (let i = 0; i < answers1.length; i++) {
//             const answer = answers1[i];

//             if (t === answer.t && Y.equals(answer.Y)) {
//                 activity.data[i] = true;
//             }
//         }
//     });

//     $(".A3_observation2_icon").click(function () {
//         const activity = manipulative.getActivity("A3_observation2");
//         const t = getValue("t");
//         const s = getValue("s");
//         const A = getCoord("A");
//         const B = getCoord("B");
//         const answers1 = [
//             { t: 0.6, s: 0.4, A: [2, 3], B: [5, 2] },
//             { t: 0.6, s: 0.2, A: [2, 3], B: [5, 2] },
//             { t: 0.6, s: 0.8, A: [2, 3], B: [5, 2] },
//             { t: 0.5, s: 0.5, A: [2, 3], B: [5, 2] },
//             { t: 0.5, s: 0.3, A: [2, 3], B: [5, 2] },
//         ];
//         for (let i = 0; i < answers1.length; i++) {
//             const answer = answers1[i];

//             if (
//                 t === answer.t &&
//                 s === answer.s &&
//                 A.equals(answer.A) &&
//                 B.equals(answer.B)
//             ) {
//                 activity.data[i] = true;
//             }
//         }
//     });
// });

function getCoord(x) {
    return [manipulative.api.getXcoord(x), manipulative.api.getYcoord(x)];
}

function getValue(x) {
    return manipulative.api.getValue(x);
}

function renderLatex(value) {
    return katex.renderToString(value, { throwOnError: false });
}
