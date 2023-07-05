// ==UserScript==
// @name         No Misskey Side Timeline
// @namespace    https://github.com/omg-xtao
// @version      1.0
// @description  移除预览 Misskey 实例时的站点时间线
// @author       omg-xtao
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function remove_dom(n) {
        var dom = document.querySelector("#misskey_app > div.mk-app > div.side > div.dashboard > div > div.x69lt.x2yRw");
        if (dom !== null) {
            dom.remove();
            console.info(`%c No Misskey Side Timeline %c 已移除此页面包含的时间线`, "color:white;background:green;font-weight:bold","color:red");
        } else {
            if (n < 60) {
                setTimeout(() => {
                    remove_dom(n + 1);
                }, 1000);
            }
        }
    }

    remove_dom(1);
})();
