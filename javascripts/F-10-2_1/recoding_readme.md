# 使用者操作紀錄

## requirement 必要js file:
https://cdnjs.cloudflare.com/ajax/libs/firebase/8.7.0/firebase.js
https://cdnjs.cloudflare.com/ajax/libs/firebase/8.7.0/firebase-app.min.js
https://cdnjs.cloudflare.com/ajax/libs/firebase/8.7.0/firebase-database.min.js

https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js

usr_recording.js （目前放在F-10-2_1裡面）

## affordances.js 注意事項
function showAX(api) 中務必加上：
```javascript
if (id !="" ){
    api.registerClientListener("clientListener") // 加入GGB全域變數listener
}
```
需要紀錄表格資料，請直接存在updateData變數中：

例如：
```javascript
var A1_observation1_input1_usrans = $('input[name=A1_observation1_input1]:checked').val();
var A1_observation1_input2_usrans = $("#A1_observation1_input2").val();
var A1_observation1_input3_usrans = $("#A1_observation1_input3").val();
var A1_observation1_input1_correctAns = 1;
var A1_observation1_input2_correctAns = api.getValue("a")*1*1*1;
var A1_observation1_input3_correctAns = api.getValue("a")*2*2*2;

updateData["form"]={
    A1_observation1_input1_usrans:A1_observation1_input1_usrans,
    A1_observation1_input2_usrans:A1_observation1_input2_usrans,
    A1_observation1_input3_usrans:A1_observation1_input3_usrans,
    A1_observation1_input1_correctAns: A1_observation1_input1_correctAns,
    A1_observation1_input2_correctAns: A1_observation1_input2_correctAns,
    A1_observation1_input3_correctAns: A1_observation1_input3_correctAns
}
```

## 範例檔案
F-10-2_1_recording.html.erb (取代原本的html)
affordances_recoding.js (取代原本的affordances)


## 以下簡單說明使用方式
目前預設進入網址並不啟動使用者操作紀錄，應給予適當的get method parameter，主要是要區分使用者的ID
get method parameter 目前用到兩種： 1. id, 2. replayId。前者為使用者ID，後者為閱覽操作紀錄時欲查閱之ID。

例如：https://math.ntnu.edu.tw/~tsoty/manipulatives/F-10-2_1.html?id=1
即代表目前登入使用者id=1，將啟動使用者操作紀錄並上傳。

例如：https://math.ntnu.edu.tw/~tsoty/manipulatives/F-10-2_1.html?replayId=1
即代表目前研究者欲閱覽ID為1之使用者的操作紀錄。


## 資料庫位址與截圖硬碟
資料庫位址（需具權限）：https://manipulatives-27815-default-rtdb.asia-southeast1.firebasedatabase.app/ 
截圖硬碟：https://drive.google.com/drive/folders/1MG2UhfEU6dnwS_o3iU6N1-g7XLeTBCDq?usp=sharing

