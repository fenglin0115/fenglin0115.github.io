var currentStage = "cover";
params.ggbBase64 = ggb_F_11A_4_1_cover;
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
        title: "指對數圖形的描繪與特性",
    },
    2: {
        id: "A2_operation1",
        title: "指對數函數圖形的對稱關係",
    },
};

const manipulative = new Manipulative(
    "F-11A-4_1",
    params,
    ggb_F_11A_4_1_cover,
    firstActivityInfo,
    {
        onReady: () => {
            onManipulativeReady();
        },
    }
);
const activities = [
    new Activity("A1_operation1", ggb_F_11A_4_1_A1_1, {
        validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
    }),
    new Activity("A1_operation2", ggb_F_11A_4_1_A1_2, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation3", ggb_F_11A_4_1_A1_3, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation4", ggb_F_11A_4_1_A1_4, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
			self.data.Viewp = appletData.Viewp === 1
			self.data.a = self.data.a || !!appletData.a
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_observation1", ggb_F_11A_4_1_A1_4, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, true, true, true, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_investigation1", ggb_F_11A_4_1_A1_4, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, false, false, true, true, false, false, true, true, true, false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_operation5", ggb_F_11A_4_1_A1_5, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation6", ggb_F_11A_4_1_A1_6, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation7", ggb_F_11A_4_1_A1_7, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation8", ggb_F_11A_4_1_A1_8, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
			self.data.Viewp = appletData.Viewp === 1
			self.data.a = self.data.a || !!appletData.a
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_observation2", ggb_F_11A_4_1_A1_8, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, true, false, true, true, false, true, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_investigation2", ggb_F_11A_4_1_A1_8, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, false, false, true, false, true, true, false, true, true, false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_operation9", ggb_F_11A_4_1_A1_9, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation10", ggb_F_11A_4_1_A1_10, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation11", ggb_F_11A_4_1_A1_11, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation12", ggb_F_11A_4_1_A1_12, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
			self.data.Viewp = appletData.Viewp === 1
			self.data.a = self.data.a || !!appletData.a
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_observation3", ggb_F_11A_4_1_A1_12, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, true, false, false, true, false, true, false, true, true, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_investigation3", ggb_F_11A_4_1_A1_12, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, false, false, true, false, false, false, true, true, false, true, false, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_operation13", ggb_F_11A_4_1_A1_13, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation14", ggb_F_11A_4_1_A1_14, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation15", ggb_F_11A_4_1_A1_15, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_operation16", ggb_F_11A_4_1_A1_16, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.Viewf = self.data.Viewf || target === "Viewf";
			self.data.Viewg = self.data.Viewg || target === "Viewg";
			self.data.Viewh = self.data.Viewh || target === "Viewh";
			self.data.Viewp = appletData.Viewp === 1
			self.data.a = self.data.a || !!appletData.a
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A1_observation4", ggb_F_11A_4_1_A1_16, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, true, false, true, false, true, true, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A1_investigation4", ggb_F_11A_4_1_A1_16, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, false, false, true, false, false, false, true, false, true, true, false, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_operation1", ggb_F_11A_4_1_A2_1, {
		validate: (self, appletData, target) => {
			self.data.button = self.data.button || target === "button1";
            self.data["ViewP'"] = appletData["ViewP'"] === 1;
			self.data.a = !!appletData.a;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A2_observation1", ggb_F_11A_4_1_A2_1, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_investigation1", ggb_F_11A_4_1_A2_1, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, true, true, false, true, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_operation2", ggb_F_11A_4_1_A2_2, {
		validate: (self, appletData, target) => {
			self.data.button = self.data.button || target === "button1";
            self.data["ViewQ'"] = appletData["ViewQ'"] === 1;
			self.data.a = !!appletData.a;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A2_observation2", ggb_F_11A_4_1_A2_2, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, true, true, false, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_investigation2", ggb_F_11A_4_1_A2_2, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, true, false, false, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_operation3", ggb_F_11A_4_1_A2_3, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.a = self.data.a || 0;
			self.data.a += appletData.a ? 1 : 0;
			self.data.aOk = self.data.a >= 9;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A2_observation3", ggb_F_11A_4_1_A2_3, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, false, false, false, false, false, true, true, true, true, false, true];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_investigation3", ggb_F_11A_4_1_A2_3, {
		validate: (self, appletData, target) => {
            const inputAnswers = [true, true, true, false, false, true, false, false, true, false, false, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_operation4", ggb_F_11A_4_1_A2_4, {
		validate: (self, appletData, target) => {
            self.data.button = self.data.button || target === "button1";
			self.data.a = self.data.a || 0;
			self.data.a += appletData.a ? 1 : 0;
			self.data.aOk = self.data.a >= 9;
            if (Object.values(self.data).indexOf(false) === -1) {
                self.complete = true;
            }
        },
	}),
    new Activity("A2_observation4", ggb_F_11A_4_1_A2_4, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, false, false, true, false, false];
            const inputResult = inputAnswers.map((answer, index) => {
                return answer === self.userInput[index].checked;
            });
            if (inputResult.indexOf(false) !== -1) {
                return { message: "答案不對喔! 請再想想看哪裡做錯了" };
            }
            self.complete = true;
        },
	}),
    new Activity("A2_investigation4", ggb_F_11A_4_1_A2_4, {
		validate: (self, appletData, target) => {
            const inputAnswers = [false, true, false, false, false, true, true, false, true, false, false, false];
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

function onManipulativeReady(manipulative) {
    // 以下處理互動性按鈕
    dropdownEventValueChangeListener("A1_operation1_input1", (value) => {
        applet.getAppletObject().setValue("ViewA1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation1_input2", (value) => {
        applet.getAppletObject().setValue("ViewA2", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation1_input3", (value) => {
        applet.getAppletObject().setValue("ViewA3", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation1_input4", (value) => {
        applet.getAppletObject().setValue("ViewA4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation1_input5", (value) => {
        applet.getAppletObject().setValue("ViewA5", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation1_input6", (value) => {
        applet.getAppletObject().setValue("ViewA6", value === "2");
    });

    dropdownEventValueChangeListener("A1_operation2_input1", (value) => {
        applet.getAppletObject().setValue("ViewB1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation2_input2", (value) => {
        applet.getAppletObject().setValue("ViewB2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation2_input3", (value) => {
        applet.getAppletObject().setValue("ViewB3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation2_input4", (value) => {
        applet.getAppletObject().setValue("ViewB4", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation2_input5", (value) => {
        applet.getAppletObject().setValue("ViewB5", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation3_input1", (value) => {
        applet.getAppletObject().setValue("ViewC1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation3_input2", (value) => {
        applet.getAppletObject().setValue("ViewC2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation3_input3", (value) => {
        applet.getAppletObject().setValue("ViewC3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation3_input4", (value) => {
        applet.getAppletObject().setValue("ViewC4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation3_input5", (value) => {
        applet.getAppletObject().setValue("ViewC5", value === "2");
    });

    dropdownEventValueChangeListener("A1_operation5_input1", (value) => {
        applet.getAppletObject().setValue("ViewA1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation5_input2", (value) => {
        applet.getAppletObject().setValue("ViewA2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation5_input3", (value) => {
        applet.getAppletObject().setValue("ViewA3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation5_input4", (value) => {
        applet.getAppletObject().setValue("ViewA4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation5_input5", (value) => {
        applet.getAppletObject().setValue("ViewA5", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation5_input6", (value) => {
        applet.getAppletObject().setValue("ViewA6", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation6_input1", (value) => {
        applet.getAppletObject().setValue("ViewB1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation6_input2", (value) => {
        applet.getAppletObject().setValue("ViewB2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation6_input3", (value) => {
        applet.getAppletObject().setValue("ViewB3", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation6_input4", (value) => {
        applet.getAppletObject().setValue("ViewB4", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation6_input5", (value) => {
        applet.getAppletObject().setValue("ViewB5", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation6_input6", (value) => {
        applet.getAppletObject().setValue("ViewB6", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation7_input1", (value) => {
        applet.getAppletObject().setValue("ViewC1", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation7_input2", (value) => {
        applet.getAppletObject().setValue("ViewC2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation7_input3", (value) => {
        applet.getAppletObject().setValue("ViewC3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation7_input4", (value) => {
        applet.getAppletObject().setValue("ViewC4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation7_input5", (value) => {
        applet.getAppletObject().setValue("ViewC5", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation7_input6", (value) => {
        applet.getAppletObject().setValue("ViewC6", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation9_input1", (value) => {
        applet.getAppletObject().setValue("ViewA1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation9_input2", (value) => {
        applet.getAppletObject().setValue("ViewA2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation9_input3", (value) => {
        applet.getAppletObject().setValue("ViewA3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation9_input4", (value) => {
        applet.getAppletObject().setValue("ViewA4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation9_input5", (value) => {
        applet.getAppletObject().setValue("ViewA5", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation9_input6", (value) => {
        applet.getAppletObject().setValue("ViewA6", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation9_input7", (value) => {
        applet.getAppletObject().setValue("ViewA7", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation10_input1", (value) => {
        applet.getAppletObject().setValue("ViewB1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation10_input2", (value) => {
        applet.getAppletObject().setValue("ViewB2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation10_input3", (value) => {
        applet.getAppletObject().setValue("ViewB3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation10_input4", (value) => {
        applet.getAppletObject().setValue("ViewB4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation10_input5", (value) => {
        applet.getAppletObject().setValue("ViewB5", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation10_input6", (value) => {
        applet.getAppletObject().setValue("ViewB6", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation11_input1", (value) => {
        applet.getAppletObject().setValue("ViewC1", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation11_input2", (value) => {
        applet.getAppletObject().setValue("ViewC2", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation11_input3", (value) => {
        applet.getAppletObject().setValue("ViewC3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation11_input4", (value) => {
        applet.getAppletObject().setValue("ViewC4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation11_input5", (value) => {
        applet.getAppletObject().setValue("ViewC5", value === "3");
    });

    dropdownEventValueChangeListener("A1_operation13_input1", (value) => {
        applet.getAppletObject().setValue("ViewA1", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation13_input2", (value) => {
        applet.getAppletObject().setValue("ViewA2", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation13_input3", (value) => {
        applet.getAppletObject().setValue("ViewA3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation13_input4", (value) => {
        applet.getAppletObject().setValue("ViewA4", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation13_input5", (value) => {
        applet.getAppletObject().setValue("ViewA5", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation13_input6", (value) => {
        applet.getAppletObject().setValue("ViewA6", value === "0");
    });
    dropdownEventValueChangeListener("A1_operation13_input7", (value) => {
        applet.getAppletObject().setValue("ViewA7", value === "0");
    });

    dropdownEventValueChangeListener("A1_operation14_input1", (value) => {
        applet.getAppletObject().setValue("ViewC1", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation14_input2", (value) => {
        applet.getAppletObject().setValue("ViewC2", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation14_input3", (value) => {
        applet.getAppletObject().setValue("ViewC3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation14_input4", (value) => {
        applet.getAppletObject().setValue("ViewC4", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation14_input5", (value) => {
        applet.getAppletObject().setValue("ViewC5", value === "0");
    });

    dropdownEventValueChangeListener("A1_operation15_input1", (value) => {
        applet.getAppletObject().setValue("ViewB1", value === "3");
    });
    dropdownEventValueChangeListener("A1_operation15_input2", (value) => {
        applet.getAppletObject().setValue("ViewB2", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation15_input3", (value) => {
        applet.getAppletObject().setValue("ViewB3", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation15_input4", (value) => {
        applet.getAppletObject().setValue("ViewB4", value === "2");
    });
    dropdownEventValueChangeListener("A1_operation15_input5", (value) => {
        applet.getAppletObject().setValue("ViewB5", value === "1");
    });
    dropdownEventValueChangeListener("A1_operation15_input6", (value) => {
        applet.getAppletObject().setValue("ViewB6", value === "0");
    });
}

function dropdownEventValueChangeListener(id, callback) {
    $(`.dropdown-menu[aria-labelledby=${id}]`).on("click", () => {
        callback($(`#${id}`)[0].value);
    });
}
