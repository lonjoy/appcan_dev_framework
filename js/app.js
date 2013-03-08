var App;
function application(){		
	var _cache = function(){		
	
	};
	
	var _init = function(){
		this.Controller = {};
		this.View = {};
		this.Model = {};
	}
	return _init();
}

//function layout
App.prototype = new application();

App.Widget.Panel = funciton(){
		var _panel = {}
		var _page  = { 
			curid : '',
			preid : ''
		};

	this.Open=  function(id, callback){
		if (id  == _page.curid ){
			console.log('already stay at this');
			return false;
		}
		if(!_panel[id]){
			_panel[ id ] = {
				'_index' : 0,
				bind: route[i],
				loaded: 0,
				updateflag : 0				
			}
		}
		var curobj = _panel[id];

		if( curobj.loaded == 0 || updateflag){//panel not  load or per switch update content
			callback();
		}
	
		_page.preid = _page.curid;
		_page.curid = id;
		// doing switch window;
		var p1 = $$(id);
		var p2 = $$(_page.preid);
		p1.style.display = "block !important";
		p2.style.display ='none !important';
		
	}

	}



function _event(cb,p){
	var srcele = event.srcElement ? event.srcElement : event.target;
	var srcobj = $(srcele);
	var url = srcobj.attr('data-url');
	var name = srcobj.attr('data-title');
	var bindname = srcobj.attr('data-bind');
	var onlyid = "";
	//表示切换 一个html的多个panel
	if(url.indexOf('#') == 0){
		var _label = url.substr(1);
		// App.panel.go()
		//statrt read binded data
		App.Widget.Panel.Open(_label,  App.Controller.done(bindname) );

	}else if (url.indexOf('.html') != -1){
		//表示content的切换
		var s = window.getComputedStyle($$('content'), null);
	 
		uexWindow.openPopover( 'content', 0, url, '',p.x,p.y,s.width,s.height,s.fontSize,0);
		
	}

}	

// var ctx = App.Route({
// });

App.ready= function(){

}

App.Controller.prototype = function(){
	var _c = {};
	this.reg = function(control, preparecb){
		control = control.toLowerCase();
		if(!_c[control]){
			_c[control] = {};
			preparecb(_c[control]);	
		}		
		return  _c[control];
	}
	this.run = function(bindname){
		var list = bindname.split('/');
		var c = s[0].toLowerCase();
		var a = s[1];
		if(!_c[c]){
			console.log('Error::Not found Controll Name as '+ c);
		}else if(!_c[c][a+'Action']){
			console.log('Error::Not found Action Name as '+ a);
		}else{
			return _c[c][a];
		}

	}
}

//html code: linkto index.html
var newControl = App.Controller.reg('News','');
newControl.hotAction = function(){}
newControl.digAction = function(page,updateflag){
	$.getJson('');
}

App.View.newsdig = function(){}
