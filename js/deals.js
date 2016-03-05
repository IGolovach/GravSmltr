window.DealsBar = (function () {
    var W = window,
	D = document,
	p = D.createElement('div'),
    C,
    S,
    canRun = (W.outerWidth || D.body.clientWidth) > 800,
    id = 'dropdowndeals';


    function changeHeight(H) {
        try {
            p.style.height = H + "px";
        } catch (ex) { }
    }

    function changePosition(R) {
        try {
            p.style.right = R + "px";
        } catch (ex) { }
    }


    function run(swfobject) {
        try {
            var c, flashvars, params, atts;
            p.id = id;
            p.style.cssText = 'position:fixed; top:0px; right:11px; width:155px; height:1px; z-index:2147483647;';

            c = D.createElement('div');
            c.id = 'dddContent'
            c.style.cssText = 'width:100%; height:100%';

            flashvars = {
                domain: window.location.hostname,
                protocol: D.location.protocol,
                clientId: C.guid,
                appDomain: S.settings.appDomain,
                serviceDomain: S.settings.serviceDomain,
                spriteUrl: S.spriteUrl,
                helpLink: S.settings.helpLink,
                client: 'DealsBar',
                changeHeightMethod: 'DealsBar.changeHeight',
                changePositionMethod: 'DealsBar.changePosition'
            };
            params = {
                menu: 'false',
                allowScriptAccess: 'always',
                wmode: 'transparent'
            };
            atts = {
                style: 'outline:none;'
            };

            p.appendChild(c);
            document.body.appendChild(p);

            swfobject.embedSWF(window.location.protocol + '//' + S.settings.appDomain + '/App/DddWrapper.swf?c=6', c.id, '100%', '100%', '10.0.0', 'expressInstall.swf', flashvars, params, atts);
        } catch (e) { }
    };


    function init(client, settings) {
        if (!canRun) return;
        C = client;
        S = settings;
        C.utils.require('swfobject', null, run);
    }
	
    return { init: init, changeHeight: changeHeight, changePosition: changePosition };
})()