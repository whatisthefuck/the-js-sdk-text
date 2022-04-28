export default {
    chooseImg() {
        console.log('chooseImg')
    },
    config(option) {
        console.log('config-option', option);
    },
    sendChatMessage(arg) {
        console.log('触发发送消息', '参数：', arg)
    },
    scanQRCode(arg) {
        console.log('扫码扫码', arg)
    }
}