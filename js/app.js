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

function  appPanel(){
	var _panel = {}
	var _page  = { 
		curid : '',
		preid : ''
	}
	this.go = function(id, callback){
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
			uexWindow.openPopover(id,"0",url,"",int(x),int(y),int(s.width),int(s.height),int(s.fontSize),"0");
			App.Controller.run;
		}
		_page.preid = _page.curid;
		_page.curid = id;
		// doing switch window;
		var p1 = $$(id);
		var p2 = $$(_page.preid);
		p1.style.display = "block !important";
		p2.style.display ='none !important';
		
	};
}; 



function _event(cb,p){
	var srcele = event.srcElement ? event.srcElement : event.target;
	var srcobj = $(srcele);
	var url = srcobj.attr('data-url');
	var name = srcobj.attr('data-title');
	var name = srcobj.attr('data-bind');
	var onlyid = "";
	//表示切换 一个html的多个panel
	if(url.indexOf('#') == 0){
		var _label = url.substr(1);
		var _pInstance = new appPanel();
		_pInstance.go(_label, cb);

	}else if (url.indexOf('.html') != -1){
		//表示content的切换
		var s = window.getComputedStyle($$('content'), null);
	 
		uexWindow.openPopover( 'content', 0, url, '',p.x,p.y,s.width,s.height,s.fontSize,0);
		
	}

}	

var ctx = App.Route({
	first : 'IndexController',
	second : 'SecondController',
	third : 'ThirdController'
});


App.init = function(){

}

//html code: linkto index.html
App.Controller.IndexController = function(){};
App.Controller.SecondController = function(){};

App.Controller.ThirdController =function(){};
