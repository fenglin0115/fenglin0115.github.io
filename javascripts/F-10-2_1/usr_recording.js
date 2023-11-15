// 以下處理後端資料庫
const firebaseConfig = {
    apiKey: "AIzaSyCPpKPPR2R2KDhYyNAD27o7teZqr47TTqY",
    authDomain: "manipulatives-27815.firebaseapp.com",
    databaseURL: "https://manipulatives-27815-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "manipulatives-27815",
    storageBucket: "manipulatives-27815.appspot.com",
    messagingSenderId: "871484206696",
    appId: "1:871484206696:web:a7828219e548f67bf695dd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const dbkey = Date.now() //記錄使用者載入時間

// 以下建立連接後端資料庫的函數


function updateDb(id, action, data, photo=true){
    if (id!=undefined){
        if (navigator.onLine){
            var time = Date.now()
            var req = {}
            req.action = action;

            // 以下處理紀錄data
            req.data = data;

            // 以下處理紀錄使用者介面大小
            req.window={
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
            firebase.database().ref(id+'/'+dbkey+'/'+time+'/').update(req);
            if (photo & dataChanged){
                applet.getAppletObject().getScreenshotBase64((url)=>{
                    var data = {
                        fileName : time + ".png",
                        fileType : "image/png",
                        base64Data : url,
                        id : id,
                        key: dbkey
                    }
                    $.post("https://script.google.com/macros/s/AKfycbw7QGYBE-I1ipjLFVZkRQp2p3B_WnaozFI3ufHFEev2Ks5yF5h7BWC2XOGqh_cPAhyV/exec", data)
                })
                dataChanged=false;
            }
            
        }else{
            alert("網路中斷，請檢查網路連線。")
        }
    }else{
        
    }
    
}

// data 初始化

var geogebraClickTarget=""

var updateData = {
    geogebraData:{},
    form:{}
}


//頁面離開或者瀏覽器關閉的時候給予提示 防止用戶誤操作 離開當前頁面未保存數據可能丟失 
window.onbeforeunload = function(event) { 
    return beforeunload(event); 
}; 

function beforeunload(event) { event = event ? event : (window.event ? window.event : null); 
    if (navigator.onLine){
        var action = {
            type:"logout"
        }
        updateDb(id, action, updateData)
    }else{
        var nodeName = event.currentTarget.document.activeElement.nodeName;
        if (nodeName!="A") { return "請確定是否連上網路"; } 
    }
    
}

// 以下處理Geogebra全域讀取變數
let dataChanged=false;
function clientListener(object){
    // 確認是否有修改applet，如果有改的話就清空變數
    if (updateData["geogebraData"]["applet"]!==applet.getParameters().id){
        updateData["geogebraData"]={
            applet:applet.getParameters().id
        }
    }
    geogebraClickTarget=object[1]
    if (object[1]=="" | applet.getAppletObject().getObjectType(object[1])=="text"){
        //pass
    }else if (!isNaN(applet.getAppletObject().getValue(object[1]))){
        updateData["geogebraData"][object[1]]=applet.getAppletObject().getValue(object[1]);
    }else if(!isNaN(applet.getAppletObject().getXcoord(object[1]))){
        updateData["geogebraData"][object[1]]=[applet.getAppletObject().getXcoord(object[1]),applet.getAppletObject().getYcoord(object[1])];
    }
    dataChanged=true;
}


// 以下處理不同使用者的id
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      });
    return vars;
}
const id = getUrlVars()["id"];
const replayId = getUrlVars()["replayId"];



if (id != undefined & replayId == undefined){
    // 以下是處理使用者打開網頁時寫入註記
    $(document).ready(function(){
        var action = {
            type:"login"
        }
        updateDb(id, action, updateData)
    })



    // 以下處理點擊拖曳事件
    var isDraging = false
    
    $(document).mousedown(function(event){
        var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget
        action = {
            type: "mousedown",
            target: target,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            pageX: event.pageX,
            pageY: event.pageY,
        }
        isDraging = true
        updateDb(id, action, updateData)
    })

    function moveUpdateData(object){
        if (object=="" | applet.getAppletObject().getObjectType(object)=="text"){
            //pass
        }else if (!isNaN(applet.getAppletObject().getValue(object))){
            updateData["geogebraData"][object]=applet.getAppletObject().getValue(object);
        }else if(!isNaN(applet.getAppletObject().getXcoord(object))){
            updateData["geogebraData"][object]=[applet.getAppletObject().getXcoord(object),applet.getAppletObject().getYcoord(object)];
        }
    }

        // 手機移動中的update
    function mousemoveUpdate(event){
        if (isDraging){
            event.preventDefault();
            var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget
            action = {
                type: "mousemove",
                target: target,
                offsetX: event.offsetX,
                offsetY: event.offsetY,
                pageX: event.pageX,
                pageY: event.pageY,
            }
            if (event.target.tagName=="CANVAS"){
                moveUpdateData(geogebraClickTarget)
            }
            updateDb(id, action, updateData)
        }
    }
    // 防跳動
    var mouseDebounce = _.debounce(mousemoveUpdate,50)
    $(document).mousemove(function(event){
        mouseDebounce(event)
    })

    $(document).mouseup(function(event){
        var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget
        action = {
            type: "mouseup",
            target: target,
            offsetX: event.offsetX,
            offsetY: event.offsetY,
            pageX: event.pageX,
            pageY: event.pageY,
        }
        isDraging = false
        updateDb(id, action, updateData)
    })

    function keyUpdate(event){
        action = {
            type: "keypress",
            target: event.key,
        }
        updateDb(id, action, updateData)
    }


    var keyDebounce =_.debounce(keyUpdate,1000)
    $(document).keyup(function(event){
        keyDebounce(event)
    })

    $(document).on("touchstart",function(event){
        event.preventDefault();

        var touches = event.changedTouches;
        // for (var i = 0; i < touches.length; i++) {
            
        // }

        // var offsetXs=touches.map(function(x){return })
        // $(".navbar")[0].innerHTML="("+event.pageX+","+event.pageY+")"
        $(".title")[0].innerHTML=touches[0].offsetX
        $(".navbar")[0].innerHTML="("+touches[0].pageX+","+touches[0].pageY+")"

        var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget

        action = {
            type: "touchstart",
            target: target,
            // offsetX: touches[0].offsetX,
            // offsetY: touches[0].offsetY,
            pageX: touches[0].pageX,
            pageY: touches[0].pageY,
        }

        updateDb(id, action, updateData)
    })


    // 手機移動中的update
    function touchmoveUpdate(event){
        event.preventDefault();
        
        var touches = event.changedTouches;
        // for (var i = 0; i < touches.length; i++) {
            
        // }

        // var offsetXs=touches.map(function(x){return })
        // $(".navbar")[0].innerHTML="("+event.pageX+","+event.pageY+")"
        $(".title")[0].innerHTML=touches[0].offsetX
        $(".navbar")[0].innerHTML="("+touches[0].pageX+","+touches[0].pageY+")"

        var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget

        action = {
            type: "touchmove",
            target: target,
            // offsetX: touches[0].offsetX,
            // offsetY: touches[0].offsetY,
            pageX: touches[0].pageX,
            pageY: touches[0].pageY,
        }
        if (event.target.tagName=="CANVAS"){
                moveUpdateData(geogebraClickTarget)
            }
        updateDb(id, action, updateData)
    }
    // 防跳動
    var touchDebounce = _.debounce(touchmoveUpdate,50)


    $(document).on("touchmove",function(event){
        touchDebounce(event)
    })

    $(document).on("touchend",function(event){
        event.preventDefault();
        

        var touches = event.changedTouches;
        // for (var i = 0; i < touches.length; i++) {
            
        // }
        
        // var offsetXs=touches.map(function(x){return })
        // $(".navbar")[0].innerHTML="("+event.pageX+","+event.pageY+")"
        $(".title")[0].innerHTML=touches[0].offsetX
        $(".navbar")[0].innerHTML="("+touches[0].pageX+","+touches[0].pageY+")"
        var target=event.target.tagName!="CANVAS" ? event.target.outerHTML.slice(0,31) : geogebraClickTarget

        action = {
            type: "touchend",
            target: target,
            // offsetX: touches[0].offsetX,
            // offsetY: touches[0].offsetY,
            pageX: touches[0].pageX,
            pageY: touches[0].pageY,
        }

        updateDb(id, action, updateData)
    })
}else if ( replayId != undefined){
    $('document').ready(function(){
        // 以下處理回播
        var Db = {}
        let key = 0
        $('body').append('<div id="replayMousePosition" style="position: absolute;z-index: 3000;width: 10px;height: 10px;background-color: red;border-radius: 10px;top:0"></div><div style="position: absolute;z-index:2999;top:0;right:0;font-size: 16px;"><p style="text-align: end;"><span id="partitionReplayAction"></span><button id="partitionReplayPrev" type="button">前一段操作</button><button id="partitionReplayNext" type="button">後一段操作</button></p><p style="text-align: end;"><span id="replayAction"></span><button id="autoPlay">自動撥放</button><button id="replayPrev" type="button">&lt</button><button id="replayNext" type="button">&gt</button></p></div>')
    
    
        firebase.database().ref(replayId+'/').once("value",(snapshot)=>{
            var keys = Object.keys(snapshot.val())
            var data = snapshot.val()
            keys.forEach((keystamp,index)=>{
                key=new Date(parseInt(keystamp)).toString().replace("GMT+0800 (台北標準時間)","")
                Db[key]={}
                Object.keys(data[keystamp]).forEach((i)=>{Db[key][i-keystamp]=data[keystamp][i]})
            })
            key = Object.keys(Db)[0]
        })
    
        function formatTime(i){
            var second=Math.floor(i/1000)%60;
            var minute=Math.floor(i/60000)%60;
            var hour=Math.floor(i/3600000)
            
            return hour+":"+minute+":"+second
        }
        
    
        function replay(key, i, geogebraRefresh=true){
            $('#partitionReplayAction').html(key+" ");
            $("#replayAction").html( formatTime(Object.keys(Db[key])[i])+" "+"("+ (i+1)+"/"+Object.keys(Db[key]).length+") "+Db[key][Object.keys(Db[key])[i]].action.type)
            if( ["mousedown","mouseup","mousemove","touchmove","touchstart","touchend","keypress"].indexOf(Db[key][Object.keys(Db[key])[i]].action.type)!=-1){
                $("#replayMousePosition").css("display","block");
                $("#replayMousePosition").css("top",Db[key][Object.keys(Db[key])[i]].action.pageY+"px");
                $("#replayMousePosition").css("left",Db[key][Object.keys(Db[key])[i]].action.pageX+"px");
                $("#replayAction").html(formatTime(Object.keys(Db[key])[i])+" "+"("+ (i+1)+"/"+Object.keys(Db[key]).length+") "+Db[key][Object.keys(Db[key])[i]].action.type +" "+ Db[key][Object.keys(Db[key])[i]].action.target.replace("<","&lt"))
                if(["mousedown","mousemove","touchmove","touchstart"].indexOf(Db[key][Object.keys(Db[key])[i]].action.type)!=-1) {
                    $("#replayMousePosition").css("width","15px");
                    $("#replayMousePosition").css("height","15px");
                    $("#replayMousePosition").css("background-color","#8b0000");
                }else{
                    $("#replayMousePosition").css("width","10px");
                    $("#replayMousePosition").css("height","10px");
                    $("#replayMousePosition").css("background-color","red");
                }
                console.log(Db[key][Object.keys(Db[key])[i]].action)
            }else{
                $("#replayMousePosition").css("display","none");
                console.log(Db[key][Object.keys(Db[key])[i]].action)
            }
    
            // 以下處理自動播放geogebra的變化
            if (geogebraRefresh){
                var data = Db[key][Object.keys(Db[key])[i]].data.geogebraData;
                if (data!={}){
                    Object.keys(data).forEach(key=>{
                    if(typeof(data[key])=="object"){
                        applet.getAppletObject().setCoords(key,data[key][0],data[key][1])
                    }else{
                        applet.getAppletObject().setValue(key,data[key])
                    }
                })
                }
            }
        }
        // 初始化使用者操作
        var replayStep=0
        $("#replayNext").click(()=>{
            if (replayStep<Object.keys(Db[key]).length-1){
                replayStep+=1
                replay(key, replayStep)
            }else{
                alert("已無後續資料")
            }
            
        })
        $("#replayPrev").click(()=>{
            if (replayStep>0){
                replayStep-=1
                replay(key, replayStep)
            }else{
                alert("已是最早的資料")
            }
        })
    
        function computeTimeDiff(){
            return Object.keys(Db[key]).map((i,index)=>{
                return i-Object.keys(Db[key])[index-1]
            })
        }
    
        $("#autoPlay").click(()=>{
            replayStep=0;
            var timeDiff=computeTimeDiff();
            for (var i=0;i<Object.keys(Db[key]).length-1;i++){
                setTimeout(function(){
                    $("#replayNext").click()
                }, 
                Object.keys(Db[key])[i]);
            }
        })
    
    
        $("#partitionReplayNext").click(()=>{
            if (key!=Object.keys(Db)[Object.keys(Db).length-1]){
                key=Object.keys(Db)[Object.keys(Db).indexOf(key)+1]
                replayStep=0
                replay(key, replayStep)
            }else{
                alert("已無後續資料")
            }
            
        })
        $("#partitionReplayPrev").click(()=>{
            if (key!=Object.keys(Db)[0]){
                key=Object.keys(Db)[Object.keys(Db).indexOf(key)-1]
                replayStep=0
                replay(key, replayStep)
            }else{
                alert("已是最早的資料")
            }
        })
    
    
    })
}
