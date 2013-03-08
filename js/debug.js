//debug file
var _debugconfig = {
	host:"192.168.1.151",
	port:':8081',
	user:'cwl'
	scriptsrc :"/target/target-script-min.js#"
}
function require(debugflag){
	 if(debugflag =='debug'){
	 	 var s = document.createElement('script');
	 	 var full = 'http://'+host +port +scriptsrc+user;
	 	 s.setAttribute('src',full);
	 	 s.setAttribute('type','text/javascript');
	 	 document.getElementsByTagName('head').appendChild(s);
	 	 return false;
	 }
	 if(debugflag =='nocache'){

	 }
}	
