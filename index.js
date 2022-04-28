export default {
    chooseImg() {
        console.log('chooseImg')
    },
    config(option) {
        console.log('config-option', option);
    },
    sendChatMessage(arg) {
        console.log('触发发送消息', '参数：', arg)
    }
}