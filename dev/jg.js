/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*
	********************************
	beta2.0 统一匹配是否存在data-point-id，关取最长的classname，后期不用更改jg.js
	********************************
*/


var dcBaseUrl = '//' + "dcbeta" + ".banggood.com/index.php?"+dctest;

var JGData = window.JGData = {
	C:{},
	/*事件类型*/
	actiontype: ['click','hover'],
	/*全局标签*/
	_label: document.getElementsByTagName("body")[0],
	/*操作类型*/
	_Type: ['click','mouseover'],
	//用户中心页面组
	accounttype:['orderList','wishList','coupons','myPreorders','points','accountSettings','affiliate','referrals','giftCard','dropship','addressList','tracking','community'],
	//用户中心过滤词
	accountfiter:['t%3DordersList','t%3Dwishlist','t%3DmyCoupons','t%3DpreOrders','t%3Dpoints','t%3Dsetting','ffiliate','t%3Dreferrals','t%3Dgiftcard','t%3Ddropship','t%3Daddress','t%3DmsgList','t%3Dposts','t%3Dmsn','t%3DmyReview'],
	//行为标示
	type:['home','category','search','prodcut','brand','orderList','newArrival','flashDeals','preOrder','shoppingCart','checkoutSuccess','addressList','wishList','coupons','myPreorders','points','accountSettings','brandStreet','login','affiliate','referrals','giftCard','dropship','community','tracking','helpCenter','wholesale'],
	//分类剩余筛选
	categoryfiter:['arrivals','%2Fsearch%2F','%2Fbuy%2F','%2FFlashdeals','2FDeals_','%2Fpreorder','%2Fbrands','login','help_center','Wholesale','_hl','%2Fshopping_cart'],
	//分类剩余筛选值
	categoryfitertype:['newArrival','search','search','flashDeals','flashDeals','preOrder','brand','login','helpCenter','wholesale','helpCenter','shoppingCart'],
	//会话有效期24分钟
	tm24:1440000,
	//用户标示有效期1年
	ty1:31104000000,
	//上级url
	referer:document.referrer.replace(/\$/g,""),
	//当前url
	visit_page:document.location.href,
	//hostname
	site:document.location.host,
	//domain
	domain:document.domain.split(".")[1],
	//cookie写入函数，s：cookie名称，g：要写入的值，p：保存的域名，l：有效期
	Wv:function(s,g,p,l){
		s=s+"="+g+"; path=/; ";
		l&&(s+="expires="+(new Date(new Date().getTime()+l)).toGMTString()+"; ");
		p&&(s+="domain="+p+";");
		document.cookie=s
	},
	//cookie读取函数，y：cookie名称
	Vv:function(y){
		for(var g=[],t=document.cookie.split(";"),l=RegExp("^\\s*"+y+"=\\s*(.*?)\\s*$"),s=0;s<t.length;s++){
			var p=t[s]["match"](l);p&&g.push(p[1])
		}
		return g
	},
	//获取url上的query参数,l:参数名，p：url的search
	Gp:function(l,p){
		var s=new RegExp(".*(?:^|&|[?]|[/])"+l+"=([^&]*).*$");var g=s.exec(p);return g?encodeURIComponent(g[1]):""
	},
	//获取地址栏URL的参数值,n: 标签名
	Gup:function(n){
		var s = new RegExp("(^|&)" + n + "=([^&]*)(&|$)");var g = window.location.search.substr(1).match(s);
		if(g != null){return unescape(g[2])};
	},
	//获取产品页面的产品id，l：url,h:url的host
	Gpid:function(l,h){
		var s = h == 'us.banggood.com' && new RegExp(".*-wp-.*-([0-9]*)\\.html")
		|| h == 'eu.banggood.com' && new RegExp(".*-wp-.*-([0-9]*)\\.html")
		|| new RegExp(".*-p-([0-9]*)\\.html");
		var g=s.exec(l);
		return g ? encodeURIComponent(g[1]) : 0
	},
	//获取分类页的分类id，l：url,h:url的host
	Gcid:function(l,h){
		var s=h=='us.banggood.com'&&new RegExp(".*-c-[a-zA-Z]{2,3}-([0-9]*)[-.]")
		||h=='eu.banggood.com'&&new RegExp(".*-c-[a-zA-Z]{2,3}-([0-9]*)[-.]")
		||new RegExp(".*-c-([0-9]*)[-.]");
		var g=s.exec(l);
		return g?encodeURIComponent(g[1]):0
	},
	//获取品牌页的品牌id，l：url,h:url的host
	Gbrand:function(l,h){
		var s=new RegExp(".*-b-([0-9]*)\\.html");
		var g=s.exec(l);
		return g?encodeURIComponent(g[1]):0
	},
	//获取关键词，l：url,h:url的host
	Gkeyword:function(l,h){
		var s=h=='us.banggood.com'&&new RegExp("\\/wh_search\\/[a-zA-Z]{2,3}\\/([^/]*)[.\]")
		||h=='eu.banggood.com'&&new RegExp("\\/wh_search\\/[a-zA-Z]{2,3}\\/([^/]*)[.\]")
		||new RegExp("\\/search\\/([^/]*)[.\]");
		var g=s.exec(l);return g?encodeURIComponent(g[1]):""
	},
	//解析上级url
	parseRP:function(referer){
		var a=document.createElement("a");
		a.href=referer;
		this.C.referer_group = '';
		var r_categories = this.Gcid(a.pathname,a.hostname);
		var r_products = this.Gpid(a.pathname,a.hostname);
		var r_brandid = this.Gbrand(a.pathname,a.hostname);
		var rStatus = this.C.referer.indexOf('.html')<0;
		var rkeyfiter = 'banggood.com%2F';
		var rkeyfiterlength = rkeyfiter.length;
		var rfirstIndex = this.C.referer.indexOf('banggood.com%2F');
		if(this.C.referer_group.substr(rfirstIndex+rkeyfiterlength,1)==''){
			this.C.referer_group = this.type[0];
		}
		if(r_categories>0){
			this.C.referer_group = this.type[1];
		}

		if(r_products>0){
			this.C.referer_group = this.type[3];
		}
		if(r_brandid>0){
			this.C.referer_group = this.type[4];
		}

		for(var rpi=0; rpi<this.accountfiter.length;rpi++){
			if(rStatus && this.C.referer_group.indexOf(this.accountfiter[rpi])>-1){
				if(this.accountfiter[rpi]=='t%3Dmsn' || this.accountfiter[rpi]=='t%3DmyReview'){
					this.C.referer_group = this.accounttype[12];
				}else{
					this.C.referer_group = this.accounttype[rpi];
				}
			}
		}

		for(var ri = 0;ri<this.categoryfiter.length;ri++){
			if(this.C.referer.indexOf(this.categoryfiter[ri])>-1){
				this.C.referer_group = this.categoryfitertype[ri];
			}
		}
	},
	//解析当前url
	parseVP:function(w){
		var categories_id = this.Gcid(w.pathname,w.hostname);
		var products_id = this.Gpid(w.pathname,w.hostname);
		var brand_id = this.Gbrand(w.pathname,w.hostname);
		var pStatus = this.C.visit_page.indexOf('.html')<0;
		var keyfiter = 'banggood.com%2F';
		var keyfiterlength = keyfiter.length;
		var firstIndex = this.C.visit_page.indexOf('banggood.com%2F');
		this.C.visit_group = '';
		if(this.C.visit_page.substr(firstIndex+keyfiterlength,1)==''){
			this.C.visit_group = this.type[0];
		}
		if(categories_id>0){
			this.C.visit_group = this.type[1];
		}
		if(products_id>0){
			this.C.visit_group = this.type[3];
		}
		if(brand_id>0){
			this.C.visit_group = this.type[4];
		}

		for(var pi=0; pi<this.accountfiter.length;pi++){
			if(pStatus && this.C.visit_page.indexOf(this.accountfiter[pi])>-1){
				if(this.accountfiter[pi]=='t%3Dmsn' || this.accountfiter[pi]=='t%3DmyReview'){
					this.C.visit_group = this.accounttype[12];
				}else{
					this.C.visit_group = this.accounttype[pi];
				}
			}
		}

		for(var i = 0;i<this.categoryfiter.length;i++){
			if(this.C.visit_page.indexOf(this.categoryfiter[i])>-1){
				this.C.visit_group = this.categoryfitertype[i];
			}
		}
		this.C.info={};
		this.C.log_id='';
		this.C.point_id='';
		this.C.order_id='';
		this.C.label='';
		this.C.action = '';
		/*this.C.field1 = '';
		this.C.field2 = '';*/
	},

	init: function(){
	    this.C.customers_id=this.Vv('dc_cid')[0]||0;
		this.C.site=this.site;
		this.C.domain=this.domain;
		var u=this.Vv('rec_uid'),u1=u.length>0?u[0].split('|'):[],
			s=this.Vv('__bguser'),s1=s.length>0?s[0].split('|'):[];		
		if(u1.length>0){
			this.C.user_id=u1[0]||0;
			this.C.ft=u1[1]||0;
		}
		this.C.sess_id=s1.length>0?s1[1]:0;
		if(this.referer){
			this.C.referer=encodeURIComponent(this.referer);
			this.parseRP(this.referer);
		}else{
			this.C.referer_group = '';
			this.C.referer = '';
		}
		this.C.visit_page=encodeURIComponent(this.visit_page);
		this.parseVP(document.location);
		this.C.info = JSON.stringify(this.C.info);
	    this.send();

	   	for(var i=0;i<this._Type.length;i++){
	    	this._Listener(this._label, this._Type[i],
		        function(t){
		          return t.className;
		        },
		       	function(e) {
		       		var point_id = '',
		       		 	classListName = [];

		       		if(this.tagName != 'A' && this.parentNode.getAttribute('data-point-id') != null){
		       			point_id = this.parentNode.getAttribute('data-point-id');
		       			classListName = this.parentNode.className.split(' ');
		       		}else{
		       			point_id = this.getAttribute('data-point-id');
		       			classListName = this.className.split(' ');
		       		}

		       		if(point_id == null)return;
		       		
		            if(e.type=='click'){
                    	JGData.JGCheckClassName(JGData,classListName.join(' '),0,point_id,0,this);		                    	
                  	}else{
              			if(classListName.indexOf('homehover')>-1){
              				JGData.JGCheckClassName(JGData,classListName.join(' '),1,point_id,0,this);
              			}
              		}
		    });
	   	}
	},

	SortNumber: function(a, b){
		return b - a;
	},

	CheckSearchkeyWordsBtn: function(){
		this.C.info = {};
		var keyword = document.querySelector("input[name='keywords'][type='text']").value,
			keywordTypeList = ['recommendkeyword','activity','userkeyword'],
			hinttagname = document.querySelector("input[name='hint_search_tagname']").value,
			keyType = '';
		if(window.localStorage.getItem("_RecKey") != null && window.localStorage.getItem("_RecKey") == keyword){
			keyType = keywordTypeList[0];
		}else{
			if(hinttagname.length > 0 && keyword == hinttagname){
				keyType = keywordTypeList[1];
			}else{
				keyType = keywordTypeList[2];
			}
		}
		this.C.info = {
			'string1':keyword,
			'string2':keyType,
		};
		this.C.info = JSON.stringify(this.C.info);
		return this.C.info;
	},

	JGCheckClassName: function(obj, classname, num, directID, sendtype, _this){
		
		/*
			*******************************************************************************

			num = 0，click
			num = 1，hover

			*******************************************************************************
			
			send(1),sendtype=1，直接发送
			send(2),sendtype=2，先储存在localStorage，在target页面再取出来发送(foxfire在处理页面跳转会执行Abort)
			
			******************

			外部接口用法：
			参数1为事件名
			参数2为事件标签
			参数3为事件行为类型(0=click，1=hover)
			参数4为事件ID
			参数5为直接发送还是刷新页面发送(1,2)，可以不填写

			******************

			if(typeof(JGData.JGCheckClassName) != 'undefined'){
				JGData.JGCheckClassName(JGData,'countName',0,10000);
				JGData.JGCheckClassName(JGData,'countName',0,10000,2);
			}

		*/

		if(typeof(num) != 'number'  || typeof(classname) != 'string' || typeof(directID) == 'object' || directID == 0)return;

		if(_this == '' || typeof(_this) == 'undefined'){
			if(typeof(directID) == 'string')return;
			obj.C.point_id = directID;
			obj.C.label = classname;
			obj.C.action = obj.actiontype[num];
			if(typeof(sendtype) == 'number'){
				if(sendtype == 2){
					obj.send(2);
				}else{
					obj.send(1);
				}
			}else{
				obj.send(1);
			}
		}else{
			if(typeof(classname) != 'undefined' || typeof(directID) != 'undefined' || typeof(_this) != 'object'){
				var pointID = directID.split('|'),
					sortLabelname = [],
					eventName = classname.split(' ');

				for(var i=0;i<eventName.length;i++){
					sortLabelname.push(eventName[i].length);
				}
				
				sortLabelname.sort(this.SortNumber);

				for(var i=0;i<eventName.length;i++){
					if(eventName[i].length == sortLabelname[0]){
						obj.C.label = eventName[i];
					}
				}

				if(obj.C.label == 'top_search_button_20161212' || obj.C.label == 'top_search_button_170412'){
					obj.CheckSearchkeyWordsBtn();								
				}

				if(num==1){
					if(_this.className.indexOf('homehover')>-1){
						obj.C.action = obj.actiontype[num];
						if(pointID.length==2){
							obj.C.point_id = pointID[1];
						}else{
							obj.C.point_id = pointID[0];
						}
						obj.send(1);
					}
				}else{
					if(eventName.indexOf('nocountclick')==-1){
						obj.C.action = obj.actiontype[num];
						obj.C.point_id = pointID[0];
						if(_this.tagName != 'A' && _this.getAttribute('data-point-id') != null){
							obj.send(1);
						}else if(_this.tagName != 'A' && _this.parentNode.getAttribute('data-point-id') != null){
							obj.send(1);
						}else if(_this.tagName == 'A' && _this.getAttribute('target') == '_blank'){
							obj.send(1);
						}else if(_this.tagName == 'A' && _this.getAttribute('href').indexOf('/') == -1){
							obj.send(1);
						}else{
			       			obj.send(2);
			       		}										
					}
				}
			}
		}
	},

	_Listener: function(label, eventname, subject, callBack) {
      label.addEventListener(eventname,
        function(e) {
          	var target = e.target || e.srcElement;
          	while (target != label) {
              	if(subject(target)) {
                  	callBack.call(target, e);
                  	break;
              	}
              	target = target.parentNode || target.parentElement;
          	}
      	});
  	},

  	_Ajax: function (options) {
		options = options || {};
		options.type = (options.type || "GET").toUpperCase();
		options.dataType = options.dataType || 'jsonp';
		options.async = options.async || true;

		var params = options.data;
		var xhr;

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHTTP')
		}
		xhr.withCredentials = true;
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				var status = xhr.status;
				if (status >= 200 && status < 300) {
					options.success && options.success(xhr.responseText, xhr.responseXML);
				} else {
					options.fail && options.fail(status);
				}
			}
		};
		if (options.type == 'GET') {
			xhr.open("GET", options.url + '?' + params, options.async);
			xhr.send(null)
		} else if (options.type == 'POST') {

			xhr.open('POST', options.url, options.async);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(params);
		}
	},

	send: function(num){
		var JGstorage = window.localStorage;
		var s='';
		for(var k in this.C){
			s +='&'+k+'='+this.C[k];
		}

		if(JGstorage.getItem("JGAutoRecord") == null && typeof(num) == 'undefined')return;

		var g = dcBaseUrl + "com=sess&t=record";

		if(typeof(num) != 'undefined'){
			if(num==1){
				this._Ajax({
					url: g,
					type: 'POST',
					data: s,
					dataType: 'jsonp',
					jsonp: 'callback',
					async: false,
					success: function (response) {
					}
				});
			}else if(num==2){
				JGstorage.setItem("JGAutoRecord",s);
			}
		}else{
			this._Ajax({
				url: g,
				type: 'POST',
				data: JGstorage.getItem("JGAutoRecord"),
				dataType: 'jsonp',
				jsonp: 'callback',
				async: false,
				success: function (response) {
				}
			});
			JGstorage.removeItem('JGAutoRecord');
		}
	}
};

JGData.init();


/***/ })
/******/ ]);