"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address;

address = system.args[1];
page.viewportSize = { width: 1000, height: 1000 };

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit(1);
    } else {
        window.setTimeout(function () {
            var height = page.evaluate(function(){
                return document.getElementsByTagName('svg')[0].height.baseVal.value;
            });
            var width = page.evaluate(function(){
                return document.getElementsByTagName('svg')[0].width.baseVal.value;
            });
            page.clipRect = { top: 0, left: 0, width: width, height: height };
            var base64 = page.renderBase64('PNG');
            console.log(base64);
            phantom.exit();
        }, 200);
    }
});
