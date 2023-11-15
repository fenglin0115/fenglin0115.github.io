// Testing class for manipulative
// Cover G-11A-1-1
class Manipulative {
    static SECTION_TYPE = {
        operation: "實驗操作",
        observation: "觀察記錄",
        investigation: "問題探索",
    };
    currentStage = "cover";
    currentActivity = new Activity("cover");
    firstActivityInfo = {
        1: {
            id: "A1_operation1",
            title: "向量的加法與減法",
        },
    };
    activities = [new Activity("A1_operation1", this.coverGgb)];
    updateData = {
        ggbData: {},
        target: null,
    };

    get api() {
        return this.applet.getAppletObject();
    }
    constructor(
        id,
        params,
        coverGgb,
        firstActivityInfo,
        option = { onReady: (manipulative) => {}, isTesting: false }
    ) {
        this.id = id;
        this.params = params;
        this.currentStage = "cover";
        this.coverGgb = coverGgb;
        this.firstActivityInfo = firstActivityInfo;
        if (option && option.isTesting) {
            console.warn("Testing mode is enable");
            this.getCurrentAnswer = this.#getAnswer;
        }

        window.addEventListener("load", () => {});
        $(document).ready(() => {
            this.onReady();
            if (option && option.onReady) {
                option.onReady(this);
            }
        });
    }
    onReady() {
        this.activities.forEach((activity, index) => {
            $("#" + activity.id + "_next").click(() => {
                if (index < this.activities.length - 1) {
                    const nextId = this.activities[index + 1].id;
                    $("#" + nextId + "_link").click();
                    if (activity.id[1] != nextId[1]) {
                        this.showFirstActivity(nextId[1]);
                    }
                } else {
                    console.error("Didn't defined the last next behavior");
                }
            });
            $("#" + activity.id + "_confirm").click(() => {
                this.validateActivityIsFinished(this.currentStage);
            });
        });

        // 以下處理dropdown-menu
        $(".worksheets .dropdown-menu li a").click(function () {
            $(this).parent().parent().prev().html($(this).html());
            $(this).parent().parent().prev().val($(this).parent().index());
        });
    }

    loadApplet(activity) {
        showLoading();
        const id = activity.id;
        const ggbBase64 = activity.ggbBase64;

        // ggb file did't change, keep it
        if (this.params.ggbBase64 === ggbBase64) {
            hideLoading();
            return;
        }
        this.params.id = id;
        this.params.ggbBase64 = ggbBase64;
        applet = new GGBApplet(params, true);
        this.applet = applet;
        this.applet.inject("ggb-element");
    }

    showWorksheetsContents(x) {
        $(".operation, .observation, .investigation").hide();
        this.currentStage = x.replace("_link", ""); //紀錄現在狀態
        const activity = this.getCurrentActivity();
        this.loadApplet(activity);
        $(`#${this.currentStage}`).fadeIn();
    }

    generateCongratsWord(id) {
        if (!id) return;

        try {
            for (const key of Object.keys(Manipulative.SECTION_TYPE)) {
                if (id.indexOf(key) == -1) continue;
                const index = id.split(key)[1];
                const msg = `恭喜完成${Manipulative.SECTION_TYPE[key]}${index}`;
                return msg;
            }
        } catch (error) {
            return;
        }
    }

    validateActivityIsFinished(id) {
        if (id === "cover") {
            return;
        }
        // init activity data;
        const activity = this.getActivity(id);
        let response = {
            message: "",
            icon: "error",
            isSuccess: false,
        };

        response = {
            ...response,
            ...activity.validate(
                activity,
                this.updateData.ggbData,
                this.updateData.target
            ),
        };

        if (activity.complete) {
            response.message = this.generateCongratsWord(id);
            response.isSuccess = true;
        }

        // response
        if (response.isSuccess) {
            $("#" + id + "_confirm").css({ display: "none" });
            $("#" + id + "_done").css({ opacity: "1" });
            $("#" + id + "_next").removeClass("d-none");
            $("#" + id + "_next").css({ display: "inline-block" });
            $("#" + id + "_link img").css({ opacity: "1" });
            Swal.fire({
                icon: "success",
                showConfirmButton: false,
                timer: 3000,
                html: response.message,
            });
        } else if (response.message) {
            Swal.fire({
                icon: response.icon,
                showConfirmButton: false,
                timer: 3000,
                html: response.message,
            });
        }
    }

    getActivity(id) {
        const activity = this.activities.find(
            (_activity) => _activity.id === id
        );
        return activity || new Activity(id);
    }
    getCurrentActivity() {
        if (!this.currentActivity) {
            this.currentActivity = this.getActivity(this.currentStage);
        }
        if (this.currentActivity.id !== this.currentStage) {
            this.currentActivity = this.getActivity(this.currentStage);
        }
        return this.currentActivity;
    }

    showFirstActivity(number) {
        $("#load-wrapper").addClass("d-flex");
        $("#load-wrapper").show();
        $("#navbarDropdown").text(`活動${number}`);
        $("#navbarDropdown").val(`活動${number}`);
        $(".outlines").hide();
        $(`#outlineA${number}`).show();
        $(".title > span ").html(
            `${this.id} 活動${number}：${this.firstActivityInfo[number].title}`
        );
        this.currentStage = this.firstActivityInfo[number].id;
        const activity = this.getCurrentActivity();
        this.loadApplet(activity);

        $(".operation, .observation, .investigation").hide();
        $(`#${this.currentStage}`).show();
        $(".outline").click(
            (() => {
                const manipulative = this;
                return function () {
                    manipulative.showWorksheetsContents(this.id);
                };
            })()
        );
    }

    clientListener(object) {
        if (this.updateData.ggbData.applet !== applet.getParameters().id) {
            this.updateData.ggbData = {
                applet: applet.getParameters().id,
            };
        }
        // skip this type
        if (["viewChanged3D"].indexOf(object[0]) !== -1) {
            return;
        }
        console.log(object);
        this.updateData.type = object[0];
        this.updateData.target = object[1];

        if ((object[1] == "") | (this.api.getObjectType(object[1]) == "text")) {
            //pass
        } else if (!isNaN(this.api.getValue(object[1]))) {
            this.updateData.ggbData[object[1]] = this.api.getValue(object[1]);
        }
        if (
            ($("#" + this.currentStage + "_done").css("opacity") != 1) &
            ($("#" + this.currentStage + "_confirm").length == 0)
        ) {
            this.validateActivityIsFinished(this.currentStage);
        }
        this.runActivityListener(this.api);
    }
    #getAnswer(){
        const activity = this.getCurrentActivity();
        console.log("dropdown");
        console.log(activity.userDropdown.map((index, value) => value.value));
        console.log("input checked");
        console.log(activity.userInput.map((index, value) => value.checked));
        console.log("input value");
        console.log(activity.userInput.map((index, value) => value.checked));
        console.log("textarea");
        console.log(activity.userTextarea.map((index, value) => value.value));
        console.log("select");
        console.log(activity.userSelect.map((index, value) => value.value));
    }

    runActivityListener(api) {
        const activity = this.getCurrentActivity();
        if (activity.onListen) {
            activity.onListen(activity, api);
        }
    }
}

class Activity {
    /**
     *
     * @param {Manipulative} manipulative
     * @param {string} id
     * @param {string} ggbBase64
     * @param {ActivityOption} option
     */
    constructor(id, ggbBase64, option) {
        this.id = id;
        this.ggbBase64 = ggbBase64;
        this.validate = (option ? option.validate : undefined) || this.validate;
        this.init = (option ? option.init : undefined) || this.init;
        this.onListen = option ? option.onListen : undefined;

        this.data = {};
        this.complete = false;
    }
    init() {}
    validate(self, appletData) {
        self.complete = true;
    }
    get userInput() {
        return this.getUserInput("input");
    }
    get userSelect() {
        return this.getUserInput("select");
    }
    get userDropdown() {
        return this.getUserInput(".dropdown-toggle");
    }
    get userTextarea() {
        return this.getUserInput("textarea");
    }

    getUserInput(type) {
        return $(`#${this.id} ${type}`);
    }

    static isDataInit(self, appletData, key) {
        return self.data[key] || !!appletData[key];
    }
    static isTargetInit(self, target, key) {
        return self.data[key] || target === key;
    }
}
