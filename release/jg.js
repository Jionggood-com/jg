!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function t(){return e.default}:function t(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){var r="//dc.banggood.com/index.php?"+dctest,n=window.JGData={C:{},actiontype:["click","hover"],_label:document.getElementsByTagName("body")[0],_Type:["click","mouseover"],accounttype:["orderList","wishList","coupons","myPreorders","points","accountSettings","affiliate","referrals","giftCard","dropship","addressList","tracking","community"],accountfiter:["t%3DordersList","t%3Dwishlist","t%3DmyCoupons","t%3DpreOrders","t%3Dpoints","t%3Dsetting","ffiliate","t%3Dreferrals","t%3Dgiftcard","t%3Ddropship","t%3Daddress","t%3DmsgList","t%3Dposts","t%3Dmsn","t%3DmyReview"],type:["home","category","search","prodcut","brand","orderList","newArrival","flashDeals","preOrder","shoppingCart","checkoutSuccess","addressList","wishList","coupons","myPreorders","points","accountSettings","brandStreet","login","affiliate","referrals","giftCard","dropship","community","tracking","helpCenter","wholesale"],categoryfiter:["arrivals","%2Fsearch%2F","%2Fbuy%2F","%2FFlashdeals","2FDeals_","%2Fpreorder","%2Fbrands","login","help_center","Wholesale","_hl","%2Fshopping_cart"],categoryfitertype:["newArrival","search","search","flashDeals","flashDeals","preOrder","brand","login","helpCenter","wholesale","helpCenter","shoppingCart"],tm24:144e4,ty1:31104e6,referer:document.referrer.replace(/\$/g,""),visit_page:document.location.href,site:document.location.host,domain:document.domain.split(".")[1],Wv:function(e,t,i,r){e=e+"="+t+"; path=/; ",r&&(e+="expires="+new Date((new Date).getTime()+r).toGMTString()+"; "),i&&(e+="domain="+i+";"),document.cookie=e},Vv:function(e){for(var t=[],i=document.cookie.split(";"),r=RegExp("^\\s*"+e+"=\\s*(.*?)\\s*$"),n=0;n<i.length;n++){var s=i[n].match(r);s&&t.push(s[1])}return t},Gp:function(e,t){var i=new RegExp(".*(?:^|&|[?]|[/])"+e+"=([^&]*).*$"),r=i.exec(t);return r?encodeURIComponent(r[1]):""},Gup:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(t);if(null!=i)return unescape(i[2])},Gpid:function(e,t){var i="us.banggood.com"==t&&new RegExp(".*-wp-.*-([0-9]*)\\.html")||"eu.banggood.com"==t&&new RegExp(".*-wp-.*-([0-9]*)\\.html")||new RegExp(".*-p-([0-9]*)\\.html"),r=i.exec(e);return r?encodeURIComponent(r[1]):0},Gcid:function(e,t){var i="us.banggood.com"==t&&new RegExp(".*-c-[a-zA-Z]{2,3}-([0-9]*)[-.]")||"eu.banggood.com"==t&&new RegExp(".*-c-[a-zA-Z]{2,3}-([0-9]*)[-.]")||new RegExp(".*-c-([0-9]*)[-.]"),r=i.exec(e);return r?encodeURIComponent(r[1]):0},Gbrand:function(e,t){var i=new RegExp(".*-b-([0-9]*)\\.html"),r=i.exec(e);return r?encodeURIComponent(r[1]):0},Gkeyword:function(e,t){var i="us.banggood.com"==t&&new RegExp("\\/wh_search\\/[a-zA-Z]{2,3}\\/([^/]*)[.]")||"eu.banggood.com"==t&&new RegExp("\\/wh_search\\/[a-zA-Z]{2,3}\\/([^/]*)[.]")||new RegExp("\\/search\\/([^/]*)[.]"),r=i.exec(e);return r?encodeURIComponent(r[1]):""},parseRP:function(e){var t=document.createElement("a");t.href=e,this.C.referer_group="";var i=this.Gcid(t.pathname,t.hostname),r=this.Gpid(t.pathname,t.hostname),n=this.Gbrand(t.pathname,t.hostname),s=this.C.referer.indexOf(".html")<0,o="banggood.com%2F",a=o.length,c=this.C.referer.indexOf("banggood.com%2F");""==this.C.referer_group.substr(c+a,1)&&(this.C.referer_group=this.type[0]),i>0&&(this.C.referer_group=this.type[1]),r>0&&(this.C.referer_group=this.type[3]),n>0&&(this.C.referer_group=this.type[4]);for(var h=0;h<this.accountfiter.length;h++)s&&this.C.referer_group.indexOf(this.accountfiter[h])>-1&&("t%3Dmsn"==this.accountfiter[h]||"t%3DmyReview"==this.accountfiter[h]?this.C.referer_group=this.accounttype[12]:this.C.referer_group=this.accounttype[h]);for(var p=0;p<this.categoryfiter.length;p++)this.C.referer.indexOf(this.categoryfiter[p])>-1&&(this.C.referer_group=this.categoryfitertype[p])},parseVP:function(e){var t=this.Gcid(e.pathname,e.hostname),i=this.Gpid(e.pathname,e.hostname),r=this.Gbrand(e.pathname,e.hostname),n=this.C.visit_page.indexOf(".html")<0,s="banggood.com%2F",o=s.length,a=this.C.visit_page.indexOf("banggood.com%2F");this.C.visit_group="",""==this.C.visit_page.substr(a+o,1)&&(this.C.visit_group=this.type[0]),t>0&&(this.C.visit_group=this.type[1]),i>0&&(this.C.visit_group=this.type[3]),r>0&&(this.C.visit_group=this.type[4]);for(var c=0;c<this.accountfiter.length;c++)n&&this.C.visit_page.indexOf(this.accountfiter[c])>-1&&("t%3Dmsn"==this.accountfiter[c]||"t%3DmyReview"==this.accountfiter[c]?this.C.visit_group=this.accounttype[12]:this.C.visit_group=this.accounttype[c]);for(var h=0;h<this.categoryfiter.length;h++)this.C.visit_page.indexOf(this.categoryfiter[h])>-1&&(this.C.visit_group=this.categoryfitertype[h]);this.C.info={},this.C.log_id="",this.C.point_id="",this.C.order_id="",this.C.label="",this.C.action=""},init:function(){this.C.customers_id=this.Vv("dc_cid")[0]||0,this.C.site=this.site,this.C.domain=this.domain;var e=this.Vv("rec_uid"),t=e.length>0?e[0].split("|"):[],i=this.Vv("__bguser"),r=i.length>0?i[0].split("|"):[];t.length>0&&(this.C.user_id=t[0]||0,this.C.ft=t[1]||0),this.C.sess_id=r.length>0?r[1]:0,this.referer?(this.C.referer=encodeURIComponent(this.referer),this.parseRP(this.referer)):(this.C.referer_group="",this.C.referer=""),this.C.visit_page=encodeURIComponent(this.visit_page),this.parseVP(document.location),this.C.info=JSON.stringify(this.C.info),this.send();for(var s=0;s<this._Type.length;s++)this._Listener(this._label,this._Type[s],function(e){return e.className},function(e){var t="",i=[];"A"!=this.tagName&&null!=this.parentNode.getAttribute("data-point-id")?(t=this.parentNode.getAttribute("data-point-id"),i=this.parentNode.className.split(" ")):(t=this.getAttribute("data-point-id"),i=this.className.split(" ")),null!=t&&("click"==e.type?n.JGCheckClassName(n,i.join(" "),0,t,0,this):i.indexOf("homehover")>-1&&n.JGCheckClassName(n,i.join(" "),1,t,0,this))})},SortNumber:function(e,t){return t-e},CheckSearchkeyWordsBtn:function(){this.C.info={};var e=document.querySelector("input[name='keywords'][type='text']").value,t=["recommendkeyword","activity","userkeyword"],i=document.querySelector("input[name='hint_search_tagname']").value,r="";return r=null!=window.localStorage.getItem("_RecKey")&&window.localStorage.getItem("_RecKey")==e?t[0]:i.length>0&&e==i?t[1]:t[2],this.C.info={string1:e,string2:r},this.C.info=JSON.stringify(this.C.info),this.C.info},JGCheckClassName:function(e,t,i,r,n,s){if("number"==typeof i&&"string"==typeof t&&"object"!=typeof r&&0!=r)if(""==s||void 0===s){if("string"==typeof r)return;e.C.point_id=r,e.C.label=t,e.C.action=e.actiontype[i],"number"==typeof n&&2==n?e.send(2):e.send(1)}else if(void 0!==t||void 0!==r||"object"!=typeof s){for(var o=r.split("|"),a=[],c=t.split(" "),h=0;h<c.length;h++)a.push(c[h].length);a.sort(this.SortNumber);for(var h=0;h<c.length;h++)c[h].length==a[0]&&(e.C.label=c[h]);"top_search_button_20161212"!=e.C.label&&"top_search_button_170412"!=e.C.label||e.CheckSearchkeyWordsBtn(),1==i?s.className.indexOf("homehover")>-1&&(e.C.action=e.actiontype[i],2==o.length?e.C.point_id=o[1]:e.C.point_id=o[0],e.send(1)):-1==c.indexOf("nocountclick")&&(e.C.action=e.actiontype[i],e.C.point_id=o[0],"A"!=s.tagName&&null!=s.getAttribute("data-point-id")?e.send(1):"A"!=s.tagName&&null!=s.parentNode.getAttribute("data-point-id")?e.send(1):"A"==s.tagName&&"_blank"==s.getAttribute("target")?e.send(1):"A"==s.tagName&&-1==s.getAttribute("href").indexOf("/")?e.send(1):e.send(2))}},_Listener:function(e,t,i,r){e.addEventListener(t,function(t){for(var n=t.target||t.srcElement;n!=e;){if(i(n)){r.call(n,t);break}n=n.parentNode||n.parentElement}})},_Ajax:function(e){e=e||{},e.type=(e.type||"GET").toUpperCase(),e.dataType=e.dataType||"jsonp",e.async=e.async||!0;var t=e.data,i;i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),i.withCredentials=!0,i.onreadystatechange=function(){if(4==i.readyState){var t=i.status;t>=200&&t<300?e.success&&e.success(i.responseText,i.responseXML):e.fail&&e.fail(t)}},"GET"==e.type?(i.open("GET",e.url+"?"+t,e.async),i.send(null)):"POST"==e.type&&(i.open("POST",e.url,e.async),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(t))},send:function(e){var t=window.localStorage,i="";for(var n in this.C)i+="&"+n+"="+this.C[n];if(null!=t.getItem("JGAutoRecord")||void 0!==e){var s=r+"com=sess&t=record";void 0!==e?1==e?this._Ajax({url:s,type:"POST",data:i,dataType:"jsonp",jsonp:"callback",async:!1,success:function(e){}}):2==e&&t.setItem("JGAutoRecord",i):(this._Ajax({url:s,type:"POST",data:t.getItem("JGAutoRecord"),dataType:"jsonp",jsonp:"callback",async:!1,success:function(e){}}),t.removeItem("JGAutoRecord"))}}};n.init()}]);