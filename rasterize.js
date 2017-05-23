"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, size, pageWidth, pageHeight;

address = system.args[1];
page.viewportSize = { width: 600, height: 600 };
if (system.args.length > 3 && system.args[2].substr(-4) === ".pdf") {
    size = system.args[3].split('*');
    page.paperSize = size.length === 2 ? { width: size[0], height: size[1], margin: '0px' }
                                       : { format: system.args[3], orientation: 'portrait', margin: '1cm' };
} else if (system.args.length > 3 && system.args[3].substr(-2) === "px") {
    size = system.args[3].split('*');
    if (size.length === 2) {
        var pageWidth = parseInt(size[0], 10),
            pageHeight = parseInt(size[1], 10);
        page.viewportSize = { width: pageWidth, height: pageHeight };
        page.clipRect = { top: 0, left: 0, width: pageWidth, height: pageHeight };
    } else {
        console.log("size:", system.args[3]);
        var pageWidth = parseInt(system.args[3], 10),
            pageHeight = parseInt(pageWidth * 3/4, 10); // it's as good an assumption as any
        console.log ("pageHeight:",pageHeight);
        page.viewportSize = { width: pageWidth, height: pageHeight };
    }
}
if (system.args.length > 4) {
    page.zoomFactor = system.args[4];
}
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
