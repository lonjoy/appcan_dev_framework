var App;
function application(){
		var _route={};
		var _appendroute= function( id,controller){
			if(typeof id =='object'){
				for(var objid in id){
					_route[objid]  = id[objid];
				}
			}else if(typeof id =='string'){
				_route[id] = controller;					
			}
		}

		var routeClass = function(){
			var _defaultPage 	= 'index_content.html';
			var _enterFile 		= "index.html";
			

			this.setDefault = function (file ){
				_defaultPage = file;
			}

			this.getDefault = function(){
				return _defaultPage;
			}

			this.append = _appendroute;
			return this
		}


		var controlClass = function(){

		};

		var panelClass = function(){
					var panel = {}
					var page  = { 
						curid : '',
						preid : ''
					};

					this.Open=  function(id, callback){
						if (id  == page.curid ){
							console.log('already stay at this');
							return false;
						}
						if(!panel[id]){
							panel[ id ] = {
								'_index' : 0,
								bind: route[i],
								loaded: 0,
								updateflag : 0				
							}
						}
						var curobj = panel[id];

						if( curobj.loaded == 0 || updateflag){//panel not  load or per switch update content
							callback();
						}
					
						page.preid = _page.curid;
						page.curid = id;
						// doing switch window;
						var p1 = $$(id);
						var p2 = $$(page.preid);
						p1.style.display = "block !important";
						p2.style.display ='none !important';
						
					}
					return this;
				}
				// ,
			// page : function(){

			// }

		var eventClass = function(){
			var srcele = event.srcElement ? event.srcElement : event.target;
			var srcobj = $(srcele);
			var url = srcobj.attr('data-url');
			var name = srcobj.attr('data-title');
			var bindname = srcobj.attr('data-bind');
			var onlyid = "";
			//表示切换 一个html的多个panel
			if(url.indexOf('#') == 0){
				var label = url.substr(1);
				// App.panel.go()
				//statrt read binded data
				_w.panel.open( label,  _do(bindname) );

			}else if (url.indexOf('.html') != -1){
				//表示content的切换
				var _pflag = 0;
				var _p =  p? {x:0, y :0}: p; 
				var s = window.getComputedStyle($$('content'), null);
				uexWindow.openPopover( 'content', 0, url, '', _p.x ,_p.y ,s.width ,
							s.height ,s.fontSize ,_pflag);
				
			}
		}

		var _do = function(controller){
				if(!_route[controller]){
					console.log('ERROR:not found the controller '+controller);
				}
				var coname = _route[controller];
				coname();
			}
		}

		var _w;
		_w.panel = new panelClass();
		var _instance = {
			Route 		: routeClass(),
			Event 		: eventClass,
			Controller 	: {},
			View 		: {}
			init 		: function(){
				var url = this.Route.getDefault();
				var s 	= window.getComputedStyle($$('content'), null);
				uexWindow.openPopover( 'content', 0, url, '', 0,0,s.width ,
							s.height ,s.fontSize ,_pflag);
			}
		}	
		return _instance;
}

//function layout
App = new application();
App.Route.append({
	getfav: 'UserFavContrioller'
})

App.Route.setDefault('index_content.html');
App.init();
// var ctx = App.Route({
// });

// App.ready= function(){

// }
