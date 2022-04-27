(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.wx = factory());
    })(undefined, (function () {
        var index = {
            chooseImg() {
                console.log('chooseImg');
            }
        };

        return index;

    }));

}));
