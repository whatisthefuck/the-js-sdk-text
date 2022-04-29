// 更换ua为企业微信客户端ua
navigator.__defineGetter__('userAgent', () => 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36 wxwork/2.1.3 (MicroMessenger/6.2)')

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