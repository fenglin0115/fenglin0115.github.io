/**
 * 
 * @param {活動幾？} numA 
 * @param {操作打1、觀察打2、紀錄打3} numsection 
 * @param {操作幾？} numa 
 * @param {第幾個GGB} id 
 * @param {ggbBase64_變數名} ggbBase64 
 */
function loadggb(numA, numsection, numa, id, ggbBase64) {
	const section = [
		"operation", "observation", "investigation"
	];
	currentStage = "A" + numA + section[numsection] + numa;
	loadApplet(id, ggbBase64)
	console.log("loadggb" + numA + numa)
}

function checkdone(currentStage) {

}

/**
 * 
 * @param {活動} activity 
 * @param {類型} type 
 * @param {階段} section 
 */
function sweetalert(activity, type, section) {
	switch (type) {
		case 'ope':
			type = 'operation'
			break;
		case 'obs':
			type = 'observation'
			break;
		case 'inv':
			type = 'investigation'
			break;
		default:
			break;
	}
	//答對後調整內容
	$("#A" + activity + "_" + type + section + "_confirm").hide();
	$("#A" + activity + "_" + type + section + "_done").css({ "opacity": "1" });
	$("#A" + activity + "_" + type + section + "_next").removeClass("d-none");
	$("#A" + activity + "_" + type + section + "_link img").css({ "opacity": "1" });
}

/**
 * 
 * @param {提示類型} type 
 * @param {提示文字} text 
 * @param {確認按鈕} confirmYN 
 * @param {持續時間} time 
 */
function hintalert(type, text, confirmYN = false, time = 8000) {
	switch (type) {
		case 'O':
			type = 'success'
			break;
		case 'X':
			type = 'error'
			break;
		case 'Q':
			type = 'question'
			break
		case 'I':
			type = 'info'
			break
		default:
			console.log('沒有輸入是否正確')
			break;
	}
	switch (text) {
		case 'ope':
			text = '恭喜完成實驗操作'
			break;
		case 'obs':
			text = '恭喜完成觀察紀錄'
			break
		case 'inv':
			text = '恭喜完成問題探索'
			break
		case 'table':
			text = '表格填寫有錯喔！再檢查看看'
			break
		case '':
			text = '好像還沒作答喔！'
			break
		case '1':
			text = "第一題答案不對喔！"
			break
		case '2':
			text = "第二題答案不對喔！"
			break
		case '3':
			text = "第三題答案不對喔！"
			break
		case '4':
			text = "第四題答案不對喔！"
			break
		case '5':
			text = "第五題答案不對喔！"
			break
		case 'X':
			text = '答案不對喔! 請再想想看哪裡做錯了'
			break
		default:
			break;
	}
	swal.fire({
		icon: type,
		showConfirmButton: confirmYN,
		timer: time,
		html: '<div>' + text + '</div>',
		allowOutsideClick: !confirmYN
	})
}
/**
 * 
 * @param {活動} activity 
 * @param {學習單階段：1實驗、2觀察、3探索} sectionnum 
 * @param {階段} phase 
 * @param {第幾個輸入} input 
 */
function inputname(activity, sectionnum, phase, input) {
	section = ["operation", 'observation', 'investigation']
	let str = $('input[name=A' + activity + '_' + section[sectionnum] + phase + '_input' + input + ']:checked').val()
	return str
}