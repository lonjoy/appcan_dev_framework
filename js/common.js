/**
 * @description APP.Utils function
 * @author swzxcwl
 */
(function(win, doc, p){
    var that = this; // this refer to window
    // that.root = win;  //root is global var
    // that.d = doc;
    // that.$ = p;
    var application =  function(){
        var version = '0.1';
        var author = 'chenwenli';

        this.widget = []; 
    };
    application.prototype= {
        register : function(ns){
            var nsArray = ns.split('/');
            var sEval = "";
            var sNS = "";
            for (var i = 0; i < nsArray.length; i++)
            {
                if (i != 0) sNS += ".";
                sNS += nsArray[i];
                sEval += "if (typeof(" + sNS + ") == 'undefined') " + sNS + " = new Object();";
            }
            if (sEval != "") eval(sEval);
        }
    };

    that.App = new application;

    that.App.Controller = function(){
        var attr = {};
    };
    that.App.Controller.prototype = {
        get: function(){},
        set : function(){},
        create : function(){
            if(typeof this.init == 'function'){
                this.init.call(this);
            }}
    };
    that.App.Controller.extend = function(prop){
        var newobj = new App.Controller();
        for(var pid in prop){
            newobj[pid] = prop[pid];
        }
        return newobj;
    }
})(window, document, Zepto);

App.register('App/Utils');
App.register('App/Session');

App.Utils.log = function(s){
    // uexLog.sendLog(s);
}
/**
 *  @
 */
 // App.Controller;
App.Ct = App.Controller.extend({ id:'chenwenli'});

App.Ct.create();

// App.extend('Page',{});
App.Utils.saveurl = function(url){
    var pos = 0;
    var querystr ,j = '';
    var qArr = {};
    pos = url.indexOf('?') +1;
    querystr = url.substr(pos).split('&');
    for(var pid in querystr){
        var tmp = querystr[pid].split('=');
        qArr[tmp[0]] = tmp[1];
    }
    	window.localStorage.setItem('params',JSON.stringify(qArr));
}
//session function
App.Session.get = function(i){
    var s_name = "SESSION_" + i;
    window.localStorage.getItem( s_name);
}

App.Session.set = function(i ,v){
    var s_name = 'SESSION_'+ i ;
    window.localStorage.setItem(s_name ,v);
}

