﻿/*Creat at 2012-07-09 for discuz v3.0 by JetCheung*/

function logs(s){
	uexLog.sendLog(s);
}

function evalscript(wn, scr){
	uexWindow.evaluateScript(wn,'0',scr);
}

function evalpopscript(wn, pn, scr){
	uexWindow.evaluatePopoverScript(wn,pn,scr);
}

function openwin(winName,url,anim){
	uexWindow.open(winName, "0", url, anim, "", "", "4", "275");
}

function closewin(anim){
	var a = '-1';
	if(anim) a=anim;
	uexWindow.close(a);
}

function resetBV(type){
	uexWindow.resetBounceView(type);
}
function setPageBounce(downcb, upcb){
	var s = ['0', '0'];
	var str = '';
	uexWindow.onBounceStateChange = function (type,status){
		//logs('onBounceStateChange-->type='+type+', status='+status);
		if(downcb && type==0 && status==2) downcb();
		if(upcb && type==1 && status==2) upcb();
	}
	
	uexWindow.setBounce("1");
	
	if(downcb){
		s[0] = '1';
		uexWindow.notifyBounceEvent("0","1");
		str = '{"pullToReloadText":"下拉刷新..."}';
		if(!isSML) uexWindow.setBounceParams('0', str);
	}
	uexWindow.showBounceView("0","#E6E6E6",s[0]);
	
	if(upcb){
		s[1] = '1';
		uexWindow.notifyBounceEvent("1","1");
		str = '{"pullToReloadText":"上拉加载更多..."}';
		if(!isSML) uexWindow.setBounceParams('1', str);
	}
	uexWindow.showBounceView("1","#E6E6E6",s[1]);
}
function hiddenPageBounce(){
	uexWindow.showBounceView("0","#E6E6E6","0");
	uexWindow.showBounceView("1","#E6E6E6","0");
}
function showPageBounce(){
	uexWindow.showBounceView("0","#E6E6E6","1");
	uexWindow.showBounceView("1","#E6E6E6","1");
}

function setHtml(id, html) {
	if ("string" == typeof(id)) {
		var ele = $(id);
		if (ele != null) {
			ele.innerHTML = html == null ? "" : html;
		}
	} else if (id != null) {
		id.innerHTML = html == null ? "" : html;
	}
}

function getValue(id){
	var e = $$(id);
	if(e) return e.value;
}

function setValue(id, vl){
	var e = $$(id);
	if(e) e.value = vl;
}

function isDefine(para) {
	if (typeof para == 'undefined' || para == "" || para == null || para == undefined)  return false;
	else  return true;
}

function fucCheckLength(strTemp) {
	var i, sum;
	sum = 0;
	for (i = 0; i < strTemp.length; i++) {
		if ((strTemp.charCodeAt(i) >= 0) && (strTemp.charCodeAt(i) <= 255))
			sum = sum + 1;
		else
			sum = sum + 2;
	}
	return sum;
}

function setstorage(objName,objValue){
	var sto = window.localStorage;
	if(sto) sto.setItem(objName,objValue);
}
function getstorage(objName){
	var ret = '';
	var sto = window.localStorage;
	if(sto) ret=sto.getItem(objName);
	return ret;
}
function clearstorage(objName){
	var sto = window.localStorage;
	if(sto){
		if(objName) sto.removeItem(objName);
		else storage.clear();
	}
}
function setStorJson(objName, json){
	if(json) setstorage(objName,JSON.stringify(json));
}
function getStorJson(objName){
	var ret = {};
	var str = getstorage(objName);
	if(str) ret=JSON.parse(str);
	return ret;
}

function checkKey(k){
	return getstorage(k)?1:'';
}

function my_page_switch(p1,p2,cb){
	if(p1 != p2){
		var a = $$(p1);
		var b = $$(p2);
		
		if(a && b){
	        a.style.display="none !important";
	        b.style.display="block !important";
		}
		
		if(cb) cb(p2);
	}
}
//chenwenli defined
function content_switch(c1,c2,cb){
	if(p1 != p2){
		var a = $$(p1);
		var b = $$(p2);
		
		if(a && b){
	        a.style.display="none !important";
	        b.style.display="block !important";
		}
		
		if(cb) cb(p2);
	}
}
function createEle(t){
	return document.createElement(t);
}

var imgmod = '';
function dis_imgcache(sel,key,url,cb,err,dest,ext,head){
	var g_uid = getstorage('UID');
	if(g_uid){
		var simgid = 'showimage'+g_uid;
		imgmod = getstorage(simgid);
		if(imgmod!='true' && head){
			url = 'images/imgno.png';
			key = url;
		}
	}
	//logs('dis_imgcache-->id='+sel+', url='+url);
	zy_imgcache(sel,key,url,cb,err,dest,ext);
}
function imgLoadErr(id){
	var e = $$(id);
	if(e && e.style) e.style.cssText = "background-image: url(images/imgno.png)";
}
function imgLoadSuc(id, src){
	var e = $$(id);
	if(e && e.style) e.style.cssText = "background-image: url("+src+")";
}
function imgLoadErrSrc(id){
	var e = $$(id);
	//logs('imgLoadErrSrc()-->id='+id);
	if(e) e.src = "images/imgno.png";
}
function imgLoadSucSrc(id, src){
	var e = $$(id);
	//logs('imgLoadSucSrc()-->id='+id+', e='+e+',src='+src);
	if(e) e.src = src;
}

function loadLink(url){
	var appInfo = ''; 
	var filter = '';
	var dataInfo = url.toLowerCase();
	var pf = getstorage('platform');
	if(pf==1){
		appInfo = 'android.intent.action.VIEW';
		filter = 'text/html';
	}
	if(dataInfo.indexOf('http://')<0 && dataInfo.indexOf('https://')<0){
		dataInfo = 'http://'+dataInfo;
	}
	uexWidget.loadApp(appInfo, filter, dataInfo);
}
function runbrowser(url)
{
	var brsurl = url;
	uexWindow.cbActionSheet = function(opId, dataType, data)
	{
		if(data=="0") loadLink(brsurl);
	}
	var array = ['启动本地浏览器'];
	uexWindow.actionSheet('', '取消', array);
}

function hyperlinkHandle(evt){
	evt.preventDefault();	

	var toele = evt.toElement;
	if(toele)
	{
		if(toele.tagName=="A")
		{
			//logs('hyperlinkHandle-->url='+toele.href);
			runbrowser(toele.href);
			return true;
		}
		else if(toele.onclick) return true;
	}
	return false;
}

/*查看帖子大图*/
var imglists = [];
function viewimage(e){
	var istr = e.id.substring(4);
	//logs('viewimage--->str='+imglists[istr]);
	uexImageBrowser.open(imglists, istr, '1');
}

function removeNode(id){
	var e = $$(id);
	if(e) e.parentElement.removeChild(e);
}

function disShowAnim(dx, dy, cb){
	uexWindow.beginAnimition();
	uexWindow.setAnimitionDuration('250');
	uexWindow.setAnimitionRepeatCount('0');
	uexWindow.setAnimitionAutoReverse('0');
	uexWindow.makeTranslation(dx,dy,'0');
	uexWindow.commitAnimition();
	if(cb) uexWindow.onAnimationFinish = cb;
}

function getJsonErr(s){
	//uexWindow.closeToast();
	resetBV('0');
	resetBV('1');
	
	var str = '返回数据有误！';
	if(s.status=='-1') str = '无网络，连接失败^_^！';
	//str = s.message;
	uexWindow.toast('0','5',str,"1500");
}

function checkLogin(){
	var lid = getstorage('UID');
	if (!lid) {
		uexWindow.cbConfirm = function(opId, dataType, data){
	 		if(int(data)==0) openwin('login', 'login.html', '12');
		}
		var mycars = ['确定','取消'];
		uexWindow.confirm('提示', '请先登录', mycars);
		return 0;
	}
	return lid;
}

function myConfirm(s, wid){
	uexWindow.closeToast();
	uexWindow.cbConfirm = function(opId, dataType, data){
 		uescript(wid, 'closewin();');
	}
	var mycars = ['确定'];
	uexWindow.confirm('提示', s, mycars);
}

function clearData(cc, num){
	if(cc){
		while(cc.childElementCount>num){
			cc.removeChild(cc.firstElementChild);
		}
	}
}

function my_con(id,url,x,y)
{
	var s=window.getComputedStyle($$(id),null);
	var ht = int(s.height)+int(y);
	if(isSML) ht = int(s.height);
	logs('my_con-->id='+id+', x='+x+', y='+y+', ht='+ht+', width='+Int(s.width)+', fontSize='+Int(s.fontSize));
	uexWindow.openPopover(id,"0",url,"",int(x),int(y),int(s.width),ht,int(s.fontSize),"0");
}
var isSML = getstorage('simulate');
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */