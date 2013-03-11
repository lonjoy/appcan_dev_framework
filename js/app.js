// var App;
function application(){
		var _route={};
		var _addroute= function( id,controller){
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

			this.append = _addroute;
			return this;
		};


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
				};
				// ,
			// page : function(){

			// }

		var eventClass = function(eventtype,self,other){
			if(eventtype =='' || eventtype instanceof window.Event){
				var e , srcele;
				var dataurl , datatitle, databind = ''; 

				e = eventtype ? eventtype : window.Event ;
				
				if(self){
					srcele = self;
				}else{
					srcele = e.srcElement ? e.srcElement : e.currentTarget ;
				}
				
				// var srcobj = $$(srcele);
				if( ! srcele.getAttribute('data-url')){
					console.log('ERROR:event capture currentTarget is error');
					return false;
				}
				
				// datatitle 	= srcele.getAttribute('data-title');
				dataurl 	= srcele.getAttribute('data-url');

				databind 	= srcele.getAttribute('data-bind');
				alert(dataurl);
				//表示切换 一个html的多个panel
				if(dataurl.indexOf('#') == 0){
					var label = dataurl.substr(1);
					// App.panel.go()
					//statrt read binded data
					_w.panel.open( label,  _do(databind) );

				}else if (dataurl.indexOf('.html') != -1){
					//表示content的切换
					var _pflag 	= 0;
					var _top  	= $$('header').offsetHeight;
					var s = window.getComputedStyle($$('content'), null);
					uexWindow.openPopover( 'content', 0, dataurl, '', 0 , _top ,s.width ,
								s.height ,s.fontSize ,_pflag);
					
				}

			}else if(eventtype =='select'){

			}else if(eventtype =='fold'){	

			}else if(eventtype =='pop'){

			}
		};

		var _do = function(controller){
				if(!_route[controller]){
					console.log('ERROR:not found the controller '+controller);
				}
				var coname = _route[controller];
				coname();
			};

		var _w = {};
		_w.panel = new panelClass();


		var _instance = {
			Route 		: routeClass(),
			E 			: eventClass,
			Controller 	: {},
			View 		: {},
			init 		: function(){
				var url = this.Route.getDefault();
				var s 	= window.getComputedStyle($$('content'), null);
				var ht  = $$('header').offsetHeight;
				uexWindow.openPopover( 'content', 0, url, '', 0, ht,s.width ,
							s.height ,s.fontSize ,0);
			}
		};	
		return _instance;
}

//function layout
// App = new application();
// App.Route.append({
// 	getfav: 'UserFavContrioller'
// })

// App.Route.setDefault('index_content.html');
// App.init();
// var ctx = App.Route({
// });

// App.ready= function(){

// }
