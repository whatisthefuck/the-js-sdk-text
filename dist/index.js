(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wx = factory());
})(this, (function () { 'use strict';

    var index = {
        chooseImg() {
            console.log('chooseImg');
        },
        config(option) {
            console.log('config-option', option);
        },
        sendChatMessage(arg) {
            console.log('触发发送消息', '参数：', arg);
        },
        scanQRCode(arg) {
            console.log('扫码扫码', arg);
        }
    };

    return index;

}));
