/* Zepto v1.1.2 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=(function(){var n,u,G,a,P=[],q=P.slice,H=P.filter,h=window.document,M={},Q={},Y={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},z=/^\s*<(\w+|!)[^>]*>/,O=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,K=/^(?:body|html)$/i,p=/([A-Z])/g,F=["val","css","html","text","data","width","height","offset"],A=["after","prepend","before","append"],w=h.createElement("table"),R=h.createElement("tr"),i={tr:h.createElement("tbody"),tbody:w,thead:w,tfoot:w,td:R,th:R,"*":h.createElement("div")},x=/complete|loaded|interactive/,J=/^\.([\w-]+)$/,y=/^#([\w-]*)$/,l=/^[\w-]*$/,e={},g=e.toString,d={},W,S,I=h.createElement("div"),Z={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};d.matches=function(ag,ac){if(!ac||!ag||ag.nodeType!==1){return false;}var ae=ag.webkitMatchesSelector||ag.mozMatchesSelector||ag.oMatchesSelector||ag.matchesSelector;if(ae){return ae.call(ag,ac);}var af,ah=ag.parentNode,ad=!ah;if(ad){(ah=I).appendChild(ag);}af=~d.qsa(ah,ac).indexOf(ag);ad&&I.removeChild(ag);return af;};function ab(ac){return ac==null?String(ac):e[g.call(ac)]||"object";}function r(ac){return ab(ac)=="function";}function N(ac){return ac!=null&&ac==ac.window;}function v(ac){return ac!=null&&ac.nodeType==ac.DOCUMENT_NODE;}function L(ac){return ab(ac)=="object";}function aa(ac){return L(ac)&&!N(ac)&&Object.getPrototypeOf(ac)==Object.prototype;}function C(ac){return ac instanceof Array;}function D(ac){return typeof ac.length=="number";}function X(ac){return H.call(ac,function(ad){return ad!=null;});}function E(ac){return ac.length>0?G.fn.concat.apply([],ac):ac;}W=function(ac){return ac.replace(/-+(.)?/g,function(ad,ae){return ae?ae.toUpperCase():"";});};function o(ac){return ac.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase();}S=function(ac){return H.call(ac,function(ae,ad){return ac.indexOf(ae)==ad;});};function T(ac){return ac in Q?Q[ac]:(Q[ac]=new RegExp("(^|\\s)"+ac+"(\\s|$)"));}function f(ac,ad){return(typeof ad=="number"&&!Y[o(ac)])?ad+"px":ad;}function U(ae){var ac,ad;if(!M[ae]){ac=h.createElement(ae);h.body.appendChild(ac);ad=getComputedStyle(ac,"").getPropertyValue("display");ac.parentNode.removeChild(ac);ad=="none"&&(ad="block");M[ae]=ad;}return M[ae];}function t(ac){return"children" in ac?q.call(ac.children):G.map(ac.childNodes,function(ad){if(ad.nodeType==1){return ad;}});}d.fragment=function(ag,ae,af){var ah,ad,ac;if(O.test(ag)){ah=G(h.createElement(RegExp.$1));}if(!ah){if(ag.replace){ag=ag.replace(k,"<$1></$2>");}if(ae===n){ae=z.test(ag)&&RegExp.$1;}if(!(ae in i)){ae="*";}ac=i[ae];ac.innerHTML=""+ag;ah=G.each(q.call(ac.childNodes),function(){ac.removeChild(this);});}if(aa(af)){ad=G(ah);G.each(af,function(ai,aj){if(F.indexOf(ai)>-1){ad[ai](aj);}else{ad.attr(ai,aj);}});}return ah;};d.Z=function(ad,ac){ad=ad||[];ad.__proto__=G.fn;ad.selector=ac||"";return ad;};d.isZ=function(ac){return ac instanceof d.Z;};d.init=function(ac,ad){var ae;if(!ac){return d.Z();}else{if(typeof ac=="string"){ac=ac.trim();if(ac[0]=="<"&&z.test(ac)){ae=d.fragment(ac,RegExp.$1,ad),ac=null;}else{if(ad!==n){return G(ad).find(ac);}else{ae=d.qsa(h,ac);}}}else{if(r(ac)){return G(h).ready(ac);}else{if(d.isZ(ac)){return ac;}else{if(C(ac)){ae=X(ac);}else{if(L(ac)){ae=[ac],ac=null;}else{if(z.test(ac)){ae=d.fragment(ac.trim(),RegExp.$1,ad),ac=null;}else{if(ad!==n){return G(ad).find(ac);}else{ae=d.qsa(h,ac);}}}}}}}}return d.Z(ae,ac);};G=function(ac,ad){return d.init(ac,ad);};function m(ae,ad,ac){for(u in ad){if(ac&&(aa(ad[u])||C(ad[u]))){if(aa(ad[u])&&!aa(ae[u])){ae[u]={};}if(C(ad[u])&&!C(ae[u])){ae[u]=[];}m(ae[u],ad[u],ac);}else{if(ad[u]!==n){ae[u]=ad[u];}}}}G.extend=function(ae){var ac,ad=q.call(arguments,1);if(typeof ae=="boolean"){ac=ae;ae=ad.shift();}ad.forEach(function(af){m(ae,af,ac);});return ae;};d.qsa=function(ae,ac){var ah,ai=ac[0]=="#",ad=!ai&&ac[0]==".",af=ai||ad?ac.slice(1):ac,ag=l.test(af);return(v(ae)&&ag&&ai)?((ah=ae.getElementById(af))?[ah]:[]):(ae.nodeType!==1&&ae.nodeType!==9)?[]:q.call(ag&&!ai?ad?ae.getElementsByClassName(af):ae.getElementsByTagName(ac):ae.querySelectorAll(ac));};function B(ad,ac){return ac==null?G(ad):G(ad).filter(ac);}G.contains=function(ac,ad){return ac!==ad&&ac.contains(ad);};function s(ae,ad,ac,af){return r(ad)?ad.call(ae,ac,af):ad;}function b(ad,ac,ae){ae==null?ad.removeAttribute(ac):ad.setAttribute(ac,ae);}function V(ae,af){var ac=ae.className,ad=ac&&ac.baseVal!==n;if(af===n){return ad?ac.baseVal:ac;}ad?(ac.baseVal=af):(ae.className=af);}function j(ad){var ac;try{return ad?ad=="true"||(ad=="false"?false:ad=="null"?null:!/^0/.test(ad)&&!isNaN(ac=Number(ad))?ac:/^[\[\{]/.test(ad)?G.parseJSON(ad):ad):ad;}catch(ae){return ad;}}G.type=ab;G.isFunction=r;G.isWindow=N;G.isArray=C;G.isPlainObject=aa;G.isEmptyObject=function(ad){var ac;for(ac in ad){return false;}return true;};G.inArray=function(ad,ae,ac){return P.indexOf.call(ae,ad,ac);};G.camelCase=W;G.trim=function(ac){return ac==null?"":String.prototype.trim.call(ac);};G.uuid=0;G.support={};G.expr={};G.map=function(ag,ah){var af,ac=[],ae,ad;if(D(ag)){for(ae=0;ae<ag.length;ae++){af=ah(ag[ae],ae);if(af!=null){ac.push(af);}}}else{for(ad in ag){af=ah(ag[ad],ad);if(af!=null){ac.push(af);}}}return E(ac);};G.each=function(ae,af){var ad,ac;if(D(ae)){for(ad=0;ad<ae.length;ad++){if(af.call(ae[ad],ad,ae[ad])===false){return ae;}}}else{for(ac in ae){if(af.call(ae[ac],ac,ae[ac])===false){return ae;}}}return ae;};G.grep=function(ac,ad){return H.call(ac,ad);};if(window.JSON){G.parseJSON=JSON.parse;}G.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(ad,ac){e["[object "+ac+"]"]=ac.toLowerCase();});G.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(ac){return G(G.map(this,function(ae,ad){return ac.call(ae,ad,ae);}));},slice:function(){return G(q.apply(this,arguments));},ready:function(ac){if(x.test(h.readyState)&&h.body){ac(G);}else{h.addEventListener("DOMContentLoaded",function(){ac(G);},false);}return this;},get:function(ac){return ac===n?q.call(this):this[ac>=0?ac:ac+this.length];},toArray:function(){return this.get();},size:function(){return this.length;},remove:function(){return this.each(function(){if(this.parentNode!=null){this.parentNode.removeChild(this);}});},each:function(ac){P.every.call(this,function(ae,ad){return ac.call(ae,ad,ae)!==false;});return this;},filter:function(ac){if(r(ac)){return this.not(this.not(ac));}return G(H.call(this,function(ad){return d.matches(ad,ac);}));},add:function(ac,ad){return G(S(this.concat(G(ac,ad))));},is:function(ac){return this.length>0&&d.matches(this[0],ac);},not:function(ac){var ad=[];if(r(ac)&&ac.call!==n){this.each(function(af){if(!ac.call(this,af)){ad.push(this);}});}else{var ae=typeof ac=="string"?this.filter(ac):(D(ac)&&r(ac.item))?q.call(ac):G(ac);this.forEach(function(af){if(ae.indexOf(af)<0){ad.push(af);}});}return G(ad);},has:function(ac){return this.filter(function(){return L(ac)?G.contains(this,ac):G(this).find(ac).size();});},eq:function(ac){return ac===-1?this.slice(ac):this.slice(ac,+ac+1);},first:function(){var ac=this[0];return ac&&!L(ac)?ac:G(ac);},last:function(){var ac=this[this.length-1];return ac&&!L(ac)?ac:G(ac);},find:function(ad){var ac,ae=this;if(typeof ad=="object"){ac=G(ad).filter(function(){var af=this;return P.some.call(ae,function(ag){return G.contains(ag,af);});});}else{if(this.length==1){ac=G(d.qsa(this[0],ad));}else{ac=this.map(function(){return d.qsa(this,ad);});}}return ac;},closest:function(ac,ad){var ae=this[0],af=false;if(typeof ac=="object"){af=G(ac);}while(ae&&!(af?af.indexOf(ae)>=0:d.matches(ae,ac))){ae=ae!==ad&&!v(ae)&&ae.parentNode;}return G(ae);},parents:function(ac){var ae=[],ad=this;while(ad.length>0){ad=G.map(ad,function(af){if((af=af.parentNode)&&!v(af)&&ae.indexOf(af)<0){ae.push(af);return af;}});}return B(ae,ac);},parent:function(ac){return B(S(this.pluck("parentNode")),ac);},children:function(ac){return B(this.map(function(){return t(this);}),ac);},contents:function(){return this.map(function(){return q.call(this.childNodes);});},siblings:function(ac){return B(this.map(function(ad,ae){return H.call(t(ae.parentNode),function(af){return af!==ae;});}),ac);},empty:function(){return this.each(function(){this.innerHTML="";});},pluck:function(ac){return G.map(this,function(ad){return ad[ac];});},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none"){this.style.display=U(this.nodeName);}});},replaceWith:function(ac){return this.before(ac).remove();},wrap:function(ac){var ad=r(ac);if(this[0]&&!ad){var ae=G(ac).get(0),af=ae.parentNode||this.length>1;}return this.each(function(ag){G(this).wrapAll(ad?ac.call(this,ag):af?ae.cloneNode(true):ae);});},wrapAll:function(ac){if(this[0]){G(this[0]).before(ac=G(ac));var ad;while((ad=ac.children()).length){ac=ad.first();}G(ac).append(this);}return this;},wrapInner:function(ac){var ad=r(ac);return this.each(function(af){var ae=G(this),ag=ae.contents(),ah=ad?ac.call(this,af):ac;ag.length?ag.wrapAll(ah):ae.append(ah);});},unwrap:function(){this.parent().each(function(){G(this).replaceWith(G(this).children());});return this;},clone:function(){return this.map(function(){return this.cloneNode(true);});},hide:function(){return this.css("display","none");},toggle:function(ac){return this.each(function(){var ad=G(this);(ac===n?ad.css("display")=="none":ac)?ad.show():ad.hide();});},prev:function(ac){return G(this.pluck("previousElementSibling")).filter(ac||"*");},next:function(ac){return G(this.pluck("nextElementSibling")).filter(ac||"*");},html:function(ac){return arguments.length===0?(this.length>0?this[0].innerHTML:null):this.each(function(ad){var ae=this.innerHTML;G(this).empty().append(s(this,ac,ad,ae));});},text:function(ac){return arguments.length===0?(this.length>0?this[0].textContent:null):this.each(function(){this.textContent=(ac===n)?"":""+ac;});},attr:function(ad,ae){var ac;return(typeof ad=="string"&&ae===n)?(this.length==0||this[0].nodeType!==1?n:(ad=="value"&&this[0].nodeName=="INPUT")?this.val():(!(ac=this[0].getAttribute(ad))&&ad in this[0])?this[0][ad]:ac):this.each(function(af){if(this.nodeType!==1){return;}if(L(ad)){for(u in ad){b(this,u,ad[u]);}}else{b(this,ad,s(this,ae,af,this.getAttribute(ad)));}});},removeAttr:function(ac){return this.each(function(){this.nodeType===1&&b(this,ac);});},prop:function(ac,ad){ac=Z[ac]||ac;return(ad===n)?(this[0]&&this[0][ac]):this.each(function(ae){this[ac]=s(this,ad,ae,this[ac]);});},data:function(ac,ae){var ad=this.attr("data-"+ac.replace(p,"-$1").toLowerCase(),ae);return ad!==null?j(ad):n;},val:function(ac){return arguments.length===0?(this[0]&&(this[0].multiple?G(this[0]).find("option").filter(function(){return this.selected;}).pluck("value"):this[0].value)):this.each(function(ad){this.value=s(this,ac,ad,this.value);});},offset:function(ad){if(ad){return this.each(function(af){var ai=G(this),ah=s(this,ad,af,ai.offset()),ae=ai.offsetParent().offset(),ag={top:ah.top-ae.top,left:ah.left-ae.left};if(ai.css("position")=="static"){ag.position="relative";}ai.css(ag);});}if(this.length==0){return null;}var ac=this[0].getBoundingClientRect();return{left:ac.left+window.pageXOffset,top:ac.top+window.pageYOffset,width:Math.round(ac.width),height:Math.round(ac.height)};},css:function(ah,ag){if(arguments.length<2){var ae=this[0],ac=getComputedStyle(ae,"");if(!ae){return;}if(typeof ah=="string"){return ae.style[W(ah)]||ac.getPropertyValue(ah);}else{if(C(ah)){var af={};G.each(C(ah)?ah:[ah],function(ai,aj){af[aj]=(ae.style[W(aj)]||ac.getPropertyValue(aj));});return af;}}}var ad="";if(ab(ah)=="string"){if(!ag&&ag!==0){this.each(function(){this.style.removeProperty(o(ah));});}else{ad=o(ah)+":"+f(ah,ag);}}else{for(u in ah){if(!ah[u]&&ah[u]!==0){this.each(function(){this.style.removeProperty(o(u));});}else{ad+=o(u)+":"+f(u,ah[u])+";";}}}return this.each(function(){this.style.cssText+=";"+ad;});},index:function(ac){return ac?this.indexOf(G(ac)[0]):this.parent().children().indexOf(this[0]);},hasClass:function(ac){if(!ac){return false;}return P.some.call(this,function(ad){return this.test(V(ad));},T(ac));},addClass:function(ac){if(!ac){return this;}return this.each(function(ad){a=[];var af=V(this),ae=s(this,ac,ad,af);ae.split(/\s+/g).forEach(function(ag){if(!G(this).hasClass(ag)){a.push(ag);}},this);a.length&&V(this,af+(af?" ":"")+a.join(" "));});},removeClass:function(ac){return this.each(function(ad){if(ac===n){return V(this,"");}a=V(this);s(this,ac,ad,a).split(/\s+/g).forEach(function(ae){a=a.replace(T(ae)," ");});V(this,a.trim());});},toggleClass:function(ad,ac){if(!ad){return this;}return this.each(function(ae){var ag=G(this),af=s(this,ad,ae,V(this));af.split(/\s+/g).forEach(function(ah){(ac===n?!ag.hasClass(ah):ac)?ag.addClass(ah):ag.removeClass(ah);});});},scrollTop:function(ad){if(!this.length){return;}var ac="scrollTop" in this[0];if(ad===n){return ac?this[0].scrollTop:this[0].pageYOffset;}return this.each(ac?function(){this.scrollTop=ad;}:function(){this.scrollTo(this.scrollX,ad);});},scrollLeft:function(ad){if(!this.length){return;}var ac="scrollLeft" in this[0];if(ad===n){return ac?this[0].scrollLeft:this[0].pageXOffset;}return this.each(ac?function(){this.scrollLeft=ad;}:function(){this.scrollTo(ad,this.scrollY);});},position:function(){if(!this.length){return;}var ae=this[0],ad=this.offsetParent(),af=this.offset(),ac=K.test(ad[0].nodeName)?{top:0,left:0}:ad.offset();af.top-=parseFloat(G(ae).css("margin-top"))||0;af.left-=parseFloat(G(ae).css("margin-left"))||0;ac.top+=parseFloat(G(ad[0]).css("border-top-width"))||0;ac.left+=parseFloat(G(ad[0]).css("border-left-width"))||0;return{top:af.top-ac.top,left:af.left-ac.left};},offsetParent:function(){return this.map(function(){var ac=this.offsetParent||h.body;while(ac&&!K.test(ac.nodeName)&&G(ac).css("position")=="static"){ac=ac.offsetParent;}return ac;});}};G.fn.detach=G.fn.remove;["width","height"].forEach(function(ad){var ac=ad.replace(/./,function(ae){return ae[0].toUpperCase();});G.fn[ad]=function(af){var ag,ae=this[0];if(af===n){return N(ae)?ae["inner"+ac]:v(ae)?ae.documentElement["scroll"+ac]:(ag=this.offset())&&ag[ad];}else{return this.each(function(ah){ae=G(this);ae.css(ad,s(this,af,ah,ae[ad]()));});}};});function c(ae,ac){ac(ae);for(var ad in ae.childNodes){c(ae.childNodes[ad],ac);}}A.forEach(function(ae,ad){var ac=ad%2;G.fn[ae]=function(){var af,ag=G.map(arguments,function(aj){af=ab(aj);return af=="object"||af=="array"||aj==null?aj:d.fragment(aj);}),ah,ai=this.length>1;if(ag.length<1){return this;}return this.each(function(aj,ak){ah=ac?ak:ak.parentNode;ak=ad==0?ak.nextSibling:ad==1?ak.firstChild:ad==2?ak:null;ag.forEach(function(al){if(ai){al=al.cloneNode(true);}else{if(!ah){return G(al).remove();}}c(ah.insertBefore(al,ak),function(am){if(am.nodeName!=null&&am.nodeName.toUpperCase()==="SCRIPT"&&(!am.type||am.type==="text/javascript")&&!am.src){window["eval"].call(window,am.innerHTML);}});});});};G.fn[ac?ae+"To":"insert"+(ad?"Before":"After")]=function(af){G(af)[ae](this);return this;};});d.Z.prototype=G.fn;d.uniq=S;d.deserializeValue=j;G.zepto=d;return G;})();window.Zepto=Zepto;window.$===undefined&&(window.$=Zepto);(function(d){var k=d.zepto.qsa,f=1,h,t=Array.prototype.slice,a=d.isFunction,l=function(A){return typeof A=="string";},s={},p={},g="onfocusin" in window,q={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents";function b(A){return A._zid||(A._zid=f++);}function m(B,D,C,A){D=r(D);if(D.ns){var E=w(D.ns);}return(s[b(B)]||[]).filter(function(F){return F&&(!D.e||F.e==D.e)&&(!D.ns||E.test(F.ns))&&(!C||b(F.fn)===b(C))&&(!A||F.sel==A);});}function r(A){var B=(""+A).split(".");return{e:B[0],ns:B.slice(1).sort().join(" ")};}function w(A){return new RegExp("(?:^| )"+A.replace(" "," .* ?")+"(?: |$)");}function j(A,B){return A.del&&(!g&&(A.e in q))||!!B;}function v(A){return x[A]||(g&&q[A])||A;}function o(D,H,E,C,B,I,G){var A=b(D),F=(s[A]||(s[A]=[]));H.split(/\s/).forEach(function(K){if(K=="ready"){return d(document).ready(E);}var J=r(K);J.fn=E;J.sel=B;if(J.e in x){E=function(N){var M=N.relatedTarget;if(!M||(M!==this&&!d.contains(this,M))){return J.fn.apply(this,arguments);}};}J.del=I;var L=I||E;J.proxy=function(N){N=y(N);if(N.isImmediatePropagationStopped()){return;}N.data=C;var M=L.apply(D,N._args==h?[N]:[N].concat(N._args));if(M===false){N.preventDefault(),N.stopPropagation();}return M;};J.i=F.length;F.push(J);if("addEventListener" in D){D.addEventListener(v(J.e),J.proxy,j(J,G));}});}function z(D,C,E,A,B){var F=b(D);(C||"").split(/\s/).forEach(function(G){m(D,G,E,A).forEach(function(H){delete s[F][H.i];if("removeEventListener" in D){D.removeEventListener(v(H.e),H.proxy,j(H,B));}});});}d.event={add:o,remove:z};d.proxy=function(C,B){if(a(C)){var A=function(){return C.apply(B,arguments);};A._zid=b(C);return A;}else{if(l(B)){return d.proxy(C[B],C);}else{throw new TypeError("expected function");}}};d.fn.bind=function(A,B,C){return this.on(A,B,C);};d.fn.unbind=function(A,B){return this.off(A,B);};d.fn.one=function(B,A,C,D){return this.on(B,A,C,D,1);};var u=function(){return true;},i=function(){return false;},e=/^([A-Z]|returnValue$|layer[XY]$)/,n={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function y(A,B){if(B||!A.isDefaultPrevented){B||(B=A);d.each(n,function(D,C){var E=B[D];A[D]=function(){this[C]=u;return E&&E.apply(B,arguments);};A[C]=i;});if(B.defaultPrevented!==h?B.defaultPrevented:"returnValue" in B?B.returnValue===false:B.getPreventDefault&&B.getPreventDefault()){A.isDefaultPrevented=u;}}return A;}function c(C){var B,A={originalEvent:C};for(B in C){if(!e.test(B)&&C[B]!==h){A[B]=C[B];}}return y(A,C);}d.fn.delegate=function(A,B,C){return this.on(B,A,C);};d.fn.undelegate=function(A,B,C){return this.off(B,A,C);};d.fn.live=function(A,B){d(document.body).delegate(this.selector,A,B);return this;};d.fn.die=function(A,B){d(document.body).undelegate(this.selector,A,B);return this;};d.fn.on=function(E,A,F,H,D){var C,B,G=this;if(E&&!l(E)){d.each(E,function(J,I){G.on(J,A,F,I,D);});return G;}if(!l(A)&&!a(H)&&H!==false){H=F,F=A,A=h;}if(a(F)||F===false){H=F,F=h;}if(H===false){H=i;}return G.each(function(I,J){if(D){C=function(K){z(J,K.type,H);return H.apply(this,arguments);};}if(A){B=function(M){var K,L=d(M.target).closest(A,J).get(0);if(L&&L!==J){K=d.extend(c(M),{currentTarget:L,liveFired:J});return(C||H).apply(L,[K].concat(t.call(arguments,1)));}};}o(J,E,H,F,A,B||C);});};d.fn.off=function(B,A,D){var C=this;if(B&&!l(B)){d.each(B,function(F,E){C.off(F,A,E);});return C;}if(!l(A)&&!a(D)&&D!==false){D=A,A=h;}if(D===false){D=i;}return C.each(function(){z(this,B,D,A);});};d.fn.trigger=function(B,A){B=(l(B)||d.isPlainObject(B))?d.Event(B):y(B);B._args=A;return this.each(function(){if("dispatchEvent" in this){this.dispatchEvent(B);}else{d(this).triggerHandler(B,A);}});};d.fn.triggerHandler=function(C,B){var D,A;this.each(function(F,E){D=c(l(C)?d.Event(C):C);D._args=B;D.target=E;d.each(m(E,C.type||C),function(G,H){A=H.proxy(D);if(D.isImmediatePropagationStopped()){return false;}});});return A;};("focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error").split(" ").forEach(function(A){d.fn[A]=function(B){return B?this.bind(A,B):this.trigger(A);};});["focus","blur"].forEach(function(A){d.fn[A]=function(B){if(B){this.bind(A,B);}else{this.each(function(){try{this[A]();}catch(C){}});}return this;};});d.Event=function(D,C){if(!l(D)){C=D,D=C.type;}var E=document.createEvent(p[D]||"Events"),A=true;if(C){for(var B in C){(B=="bubbles")?(A=!!C[B]):(E[B]=C[B]);}}E.initEvent(D,A,true);return y(E);};})(Zepto);(function($){var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;function triggerAndReturn(context,eventName,data){var event=$.Event(eventName);$(context).trigger(event,data);return !event.isDefaultPrevented();}function triggerGlobal(settings,context,eventName,data){if(settings.global){return triggerAndReturn(context||document,eventName,data);}}$.active=0;function ajaxStart(settings){if(settings.global&&$.active++===0){triggerGlobal(settings,null,"ajaxStart");}}function ajaxStop(settings){if(settings.global&&!(--$.active)){triggerGlobal(settings,null,"ajaxStop");}}function ajaxBeforeSend(xhr,settings){var context=settings.context;if(settings.beforeSend.call(context,xhr,settings)===false||triggerGlobal(settings,context,"ajaxBeforeSend",[xhr,settings])===false){return false;}triggerGlobal(settings,context,"ajaxSend",[xhr,settings]);}function ajaxSuccess(data,xhr,settings,deferred){var context=settings.context,status="success";settings.success.call(context,data,status,xhr);if(deferred){deferred.resolveWith(context,[data,status,xhr]);}triggerGlobal(settings,context,"ajaxSuccess",[xhr,settings,data]);ajaxComplete(status,xhr,settings);}function ajaxError(error,type,xhr,settings,deferred){var context=settings.context;settings.error.call(context,xhr,type,error);if(deferred){deferred.rejectWith(context,[xhr,type,error]);}triggerGlobal(settings,context,"ajaxError",[xhr,settings,error||type]);ajaxComplete(type,xhr,settings);}function ajaxComplete(status,xhr,settings){var context=settings.context;settings.complete.call(context,xhr,status);triggerGlobal(settings,context,"ajaxComplete",[xhr,settings]);ajaxStop(settings);}function empty(){}$.ajaxJSONP=function(options,deferred){if(!("type" in options)){return $.ajax(options);}var _callbackName=options.jsonpCallback,callbackName=($.isFunction(_callbackName)?_callbackName():_callbackName)||("jsonp"+(++jsonpID)),script=document.createElement("script"),originalCallback=window[callbackName],responseData,abort=function(errorType){$(script).triggerHandler("error",errorType||"abort");},xhr={abort:abort},abortTimeout;if(deferred){deferred.promise(xhr);}$(script).on("load error",function(e,errorType){clearTimeout(abortTimeout);$(script).off().remove();if(e.type=="error"||!responseData){ajaxError(null,errorType||"error",xhr,options,deferred);}else{ajaxSuccess(responseData[0],xhr,options,deferred);}window[callbackName]=originalCallback;if(responseData&&$.isFunction(originalCallback)){originalCallback(responseData[0]);}originalCallback=responseData=undefined;});if(ajaxBeforeSend(xhr,options)===false){abort("abort");return xhr;}window[callbackName]=function(){responseData=arguments;};script.src=options.url.replace(/=\?/,"="+callbackName);document.head.appendChild(script);if(options.timeout>0){abortTimeout=setTimeout(function(){abort("timeout");},options.timeout);}return xhr;};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest();},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true};function mimeToDataType(mime){if(mime){mime=mime.split(";",2)[0];}return mime&&(mime==htmlType?"html":mime==jsonType?"json":scriptTypeRE.test(mime)?"script":xmlTypeRE.test(mime)&&"xml")||"text";}function appendQuery(url,query){if(query==""){return url;}return(url+"&"+query).replace(/[&?]{1,2}/,"?");}function serializeData(options){if(options.processData&&options.data&&$.type(options.data)!="string"){options.data=$.param(options.data,options.traditional);}if(options.data&&(!options.type||options.type.toUpperCase()=="GET")){options.url=appendQuery(options.url,options.data),options.data=undefined;}}$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings){if(settings[key]===undefined){settings[key]=$.ajaxSettings[key];}}ajaxStart(settings);if(!settings.crossDomain){settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host;}if(!settings.url){settings.url=window.location.toString();}serializeData(settings);if(settings.cache===false){settings.url=appendQuery(settings.url,"_="+Date.now());}var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){if(!hasPlaceholder){settings.url=appendQuery(settings.url,settings.jsonp?(settings.jsonp+"=?"):settings.jsonp===false?"":"callback=?");}return $.ajaxJSONP(settings,deferred);}var mime=settings.accepts[dataType],headers={},setHeader=function(name,value){headers[name.toLowerCase()]=[name,value];},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;if(deferred){deferred.promise(xhr);}if(!settings.crossDomain){setHeader("X-Requested-With","XMLHttpRequest");}setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime){if(mime.indexOf(",")>-1){mime=mime.split(",",2)[0];}xhr.overrideMimeType&&xhr.overrideMimeType(mime);}if(settings.contentType||(settings.contentType!==false&&settings.data&&settings.type.toUpperCase()!="GET")){setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");}if(settings.headers){for(name in settings.headers){setHeader(name,settings.headers[name]);}}xhr.setRequestHeader=setHeader;xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty;clearTimeout(abortTimeout);var result,error=false;if((xhr.status>=200&&xhr.status<300)||xhr.status==304||(xhr.status==0&&protocol=="file:")){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type"));result=xhr.responseText;try{if(dataType=="script"){(1,eval)(result);}else{if(dataType=="xml"){result=xhr.responseXML;}else{if(dataType=="json"){result=blankRE.test(result)?null:$.parseJSON(result);}}}}catch(e){error=e;}if(error){ajaxError(error,"parsererror",xhr,settings,deferred);}else{ajaxSuccess(result,xhr,settings,deferred);}}else{ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred);}}};if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();ajaxError(null,"abort",xhr,settings,deferred);return xhr;}if(settings.xhrFields){for(name in settings.xhrFields){xhr[name]=settings.xhrFields[name];}}var async="async" in settings?settings.async:true;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers){nativeSetHeader.apply(xhr,headers[name]);}if(settings.timeout>0){abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings,deferred);},settings.timeout);}xhr.send(settings.data?settings.data:null);return xhr;};function parseArguments(url,data,success,dataType){var hasData=!$.isFunction(data);return{url:url,data:hasData?data:undefined,success:!hasData?data:$.isFunction(success)?success:undefined,dataType:hasData?dataType||success:success};}$.get=function(url,data,success,dataType){return $.ajax(parseArguments.apply(null,arguments));};$.post=function(url,data,success,dataType){var options=parseArguments.apply(null,arguments);options.type="POST";return $.ajax(options);};$.getJSON=function(url,data,success){var options=parseArguments.apply(null,arguments);options.dataType="json";return $.ajax(options);};$.fn.load=function(url,data,success){if(!this.length){return this;}var self=this,parts=url.split(/\s/),selector,options=parseArguments(url,data,success),callback=options.success;if(parts.length>1){options.url=parts[0],selector=parts[1];}options.success=function(response){self.html(selector?$("<div>").html(response.replace(rscript,"")).find(selector):response);callback&&callback.apply(self,arguments);};$.ajax(options);return this;};var escape=encodeURIComponent;function serialize(params,obj,traditional,scope){var type,array=$.isArray(obj),hash=$.isPlainObject(obj);$.each(obj,function(key,value){type=$.type(value);if(scope){key=traditional?scope:scope+"["+(hash||type=="object"||type=="array"?key:"")+"]";}if(!scope&&array){params.add(value.name,value.value);}else{if(type=="array"||(!traditional&&type=="object")){serialize(params,value,traditional,key);}else{params.add(key,value);}}});}$.param=function(obj,traditional){var params=[];params.add=function(k,v){this.push(escape(k)+"="+escape(v));};serialize(params,obj,traditional);return params.join("&").replace(/%20/g,"+");};})(Zepto);(function(a){a.fn.serializeArray=function(){var b=[],c;a([].slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");if(this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&((d!="radio"&&d!="checkbox")||this.checked)){b.push({name:c.attr("name"),value:c.val()});}});return b;};a.fn.serialize=function(){var b=[];this.serializeArray().forEach(function(c){b.push(encodeURIComponent(c.name)+"="+encodeURIComponent(c.value));});return b.join("&");};a.fn.submit=function(c){if(c){this.bind("submit",c);}else{if(this.length){var b=a.Event("submit");this.eq(0).trigger(b);if(!b.isDefaultPrevented()){this.get(0).submit();}}}return this;};})(Zepto);(function(b){if(!("__proto__" in {})){b.extend(b.zepto,{Z:function(e,d){e=e||[];b.extend(e,b.fn);e.selector=d||"";e.__Z=true;return e;},isZ:function(d){return b.type(d)==="array"&&"__Z" in d;}});}try{getComputedStyle(undefined);}catch(c){var a=getComputedStyle;window.getComputedStyle=function(d){try{return a(d);}catch(f){return null;}};}})(Zepto);

// Copyright 2014 Linus Roune
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see http://www.gnu.org/licenses/.

(function(win, $, undefined) {
	
	"use strict";
	
	// Global variables accessible only inside this closure
	var NULL = null, TRUE = !0, FALSE = !1, win = window, doc = win.document,
	// byId = function(str){return doc.getElementByID(str);},
	// $byId = function(id){return document.getElementById(id);},
	// $byTag = function(tag){return document.getElementsByTagName(tag);},
		$byTagNS = function(namespaceURI, tag) {
			return document.getElementsByTagNameNS(namespaceURI, tag);
		}, 
		NSS = {
			svg : 'http://www.w3.org/2000/svg',
			inkscape : "http://www.inkscape.org/namespaces/inkscape"
		}, 
		svgStyleMap = {
			color : "fill"
		}, 
		CLIP_PATH_NAME = "protoready-clip_path", CLIP_PATH_URL_STR = "url(#" + CLIP_PATH_NAME + ")",
		SEL_ID_SVG = "#svg2"
	;
	//From http://stackoverflow.com/questions/1921688/filtering-whitespace-only-strings-in-javascript
	//Trim function for trimming whitespace out of strings
	if (!('trim' in String.prototype)) {
		String.prototype.trim = function() {
			return this.replace(/^\s+/, '').replace(/\s+$/, '');
		};
	}

	win.ProtoReady = {
		clipPaths : [],
		clipSizes : {},
		clipPathRect : {},
		layerNodes : {},
		rootNode : 0,
		_connections : {},
		hasAttribute : function(node, attr) {
			if ( typeof (attr) !== "string") {
				throw "Given attribute wasn't a string.";
			}
			return node.attributes[attr] === undefined ? FALSE : TRUE;
		},
		defineLayerNodes : function() {
			var kids = $(SEL_ID_SVG)[0].childNodes, l = kids.length, kid, layers = [];
			for (var i = l - 1; i >= 0; i--) {
				kid = kids[i];
				if (kid.nodeType === 1 && kid.getAttributeNS(NSS["inkscape"], "groupmode")) {
					layers.push(kid);
				}
			};
			this.layerNodes = layers;
		},
		clipLayerNodes : function() {
			var kids = this.layerNodes, i = kids.length, kid;
			while (i--) {
				kid = kids[i];
				kid.setAttribute("clip-path", CLIP_PATH_URL_STR);
			};
		},
		createClipPath : function() {
			var sizes = this.clipSizes, defsNode;
			if (( defsNode = $("defs")[0])) {
				var rectNode = document.createElementNS(NSS["svg"], "rect"), clipPath = document.createElementNS(NSS["svg"], "clipPath");

				rectNode.setAttribute("x", 0);
				rectNode.setAttribute("y", 0);
				rectNode.setAttribute("width", sizes.boxW);
				rectNode.setAttribute("height", sizes.boxH);

				clipPath.setAttribute("id", CLIP_PATH_NAME);
				clipPath.setAttribute("clipPathUnits", "userSpaceOnUse");

				clipPath.appendChild(rectNode);
				defsNode.appendChild(clipPath);

				this.clipPathRect = rectNode;

			} else {
				//TODO: create defs node and return to this function again.
			}
		},
		updateClipPath : function() {
			var rect, sizes;
			if (!( rect = this.clipPathRect)) {
				throw "No clip path exists for some explicit reason.";
			}
			if (!( sizes = this.clipSizes)) {
				throw "No clip sizes exists for some explicit reason.";
			}

			rect.setAttribute("x", sizes.boxX);
			rect.setAttribute("y", sizes.boxY);
			rect.setAttribute("width", sizes.boxW);
			rect.setAttribute("height", sizes.boxH);
		},
		updateStage : function() {
			var rootNode = this.rootNode || (this.rootNode = $(SEL_ID_SVG)[0]), sizes = this.clipSizes;
			rootNode.setAttribute("viewBox", "0 0 " + sizes.boxW + " " + sizes.boxH);
			rootNode.setAttribute("width", "100%");
			rootNode.setAttribute("height", sizes.boxH);
		},
		updateDimensionsToNode : function(n) {
			if (!n) {
				throw "No node supplied to updateDimensionsToNode method";
			}
			var node = n, strokeW = ($(node).css("strokeWidth") - 0 || 0), w = $(node).attr("width") - 0, h = $(node).attr("height") - 0;

			//TODO: throw an error here.
			if (w <= 0 || h <= 0) {
				throw "Width and/or height of the target rectangle couldn't be establish. Try checking your connections";
			}

			return this.clipSizes = {
				w : w,
				h : h,
				boxW : w + strokeW,
				boxH : h + strokeW,
				boxX : $(node).attr("x") - 0 - strokeW / 2,
				boxY : $(node).attr("y") - 0 - strokeW / 2
			};

		},
		updateLayers : function() {

			var rect = this.clipSizes, kids = this.layerNodes, i = kids.length;
			//TODO: take into consideration the layer's possible original translation coordinates.
			// If for example all the items in a layer is moved simultaneously then the layer gets a
			//translate attribute set to it.
			while (i--) {
				kids[i].setAttribute("transform", "translate(" + (rect.boxX * -1) + "," + (rect.boxY * -1) + ")");
			};
		},
		gotoArea : function(areaSel) {

			this.updateDimensionsToNode($(areaSel));
			this.updateClipPath();
			this.updateLayers();
			this.updateStage();

		},
		getStartNode : function() {
			var slicerNode, kids, 
				kid = $("#webslicer-layer")[0],
			 	l = 0;
			 
			//Use the first rect node in the web-slicer node as a starting point
			if ( kid ) {
				
				 kid = kid.firstChild;

				while (kid) {
					if (kid.nodeType === 1 && this.hasAttribute(kid, "width") && this.hasAttribute(kid, "height") && this.hasAttribute(kid, "x") && this.hasAttribute(kid, "y")) {
						return kid;
					}
					kid = kid.nextSibling;
				}
			} else {
				//TODO: find the first occurance of a connector path and use it's end connection node.
			}
			return FALSE;
		},

		processChildren : function(element, fn) {
			var dis = this, child = element.firstChild;
			while (child) {
				if (child.hasChildNodes()) {
					dis.processChildren(child, fn);
				}
				if (child.nodeType === 1) {
					fn(child);
				}
				child = child.nextSibling;
			}
		},

		//
		// Strips nodes and it's decendents of a certain style property
		//
		stripNodeOfStyle : function(nodetag, svgstyle) {
			var tagNodes = $(nodetag), l = tagNodes.length, style, nuStyle = "", 
				stripStyle = function(n) {
				var node, stylePatt = /([^:\s*]+)\s*:\s*([^;]+?)\s*(;|$)/g, styleAttr = svgstyle;

				if (!( node = n) || !styleAttr) {
					return FALSE;
				}

				if (( style = node.getAttribute("style"))) {
					while (( match = stylePatt.exec(style))) {
						//Cycle through the style properties
						if (match[1] !== styleAttr) {
							//rebuild style property to new style
							nuStyle += match[0];
						}
					}
					node.setAttribute("style", nuStyle);
				}
			}
			;

			while (l--) {
				tagNode = tagNodes[l];
				stripStyle(tagNode);
				this.processChildren(tagNode, stripStyle);
			}
		},
		//
		// Gathers information from the CSS declaration of what nodes are handled by CSS
		// TODO: similar technique for possible external CSS files
		//
		///
		interpretCSS : function() {
			var dis = this, 
				styleNodes = $("style") || $byTagNS(NSS["svg"], "style"),
				i = styleNodes.length, j = 0,
				text = "", svgCSS = "", allAnchorsChanged = FALSE,
				anchorPatt_1 = /\s*a(\s)*{/i, //single anchor (whitespace in front and back)
				anchorPatt_2 = /\s*a+[:#<>:+~*.]/i, // anchor with multiple selectors
				decl = [], props = [], prop, str, pos, propPairs, selector,
				processProperties = function(sel, cssProps) {
					
					//TODO: Get this working for multiple CSS property declarations (currently ony works for one.)
					var k = cssProps.length, stylePair = [], prop = "", svgStyle = "";
					
					while (k--) {
						//cycling through the property pairs and searching for the svg equivalents
						if (( stylePair = cssProps[k].split(":")) && 
							( prop = stylePair[0].trim()) && 
							prop !== "" && 
							( prop = svgStyleMap[prop])) {
								
								svgStyle += (prop + ":" + stylePair[1] + ";");
								//Attending only anchor properties for now as that's in the project scope
								if (!allAnchorsChanged) {
									dis.stripNodeOfStyle("a", prop);
									allAnchorsChanged = TRUE;
								}
						} else {
							svgStyle += cssProps[k];
						}
					}
					
					return svgStyle;
				}
			;
			//itterate through all the style nodes
			while (i--) {
				if (!( text = styleNodes[i].textContent)) {
					continue;
				}

				svgCSS = "";
				decl = text.split("}");
				j = decl.length;

				//itterate through all the style declarations
				while (j--) {
					str = decl[j].trim();
					if (str === "") {
						continue;
					}
					pos = str.indexOf("{");
					selector = str.slice(0, pos + 1);
					props = str.slice(pos + 1).split(";");

					if (anchorPatt_1.test(selector)) {
						//all anchors a{
						svgCSS += selector;
						svgCSS += processProperties(selector, props);

					} else if (anchorPatt_2.test(selector)) {
						//a.className{ , a[attribute=value]{...
						// svgCSS += str;//for now
						svgCSS += selector;
						svgCSS += processProperties(selector, props);
					} else {
						//Reform the CSS as it was before as we're not traversing any properties
						svgCSS += str;
					}
					svgCSS += "}";
				}

				styleNodes[i].textContent = svgCSS;

			}
		},
		setupConnections : function() {

			var connectionIDs = {}, //object with all the connection node ID's
			pathNodes = document.getElementsByTagNameNS(NSS["svg"], "path"), i = pathNodes.length, path, startSel, endSel,
			// Sets the event handler directly on the node. Opted for this instead of using event handlers as the user
			// may want to manually change the handler to something else.
			setHandler = function(start, end) {
				var startNode;
				if (!( startNode = $(start))) {
					return;
				}

				startNode.attr("onclick", "ProtoReady.gotoArea('" + end + "')");
			};

			// Search for all connection paths and gather the connections into an object
			while (i--) {
				path = pathNodes[i];
				//All diagram connectors use ID's to create connections
				if (( startSel = path.getAttributeNS(NSS["inkscape"], "connection-start"))) {

					endSel = path.getAttributeNS(NSS["inkscape"], "connection-end");

					connectionIDs[path.getAttribute("id")] = {
						startSel : startSel,
						endSel : endSel
					};

					setHandler(startSel, endSel);
				}
			};
			this._connections = connectionIDs;

		},
		init : function() {
			var startNode;
			if (!( startNode = this.getStartNode())) {
				var msg = "Could not find a connection box to start with.";
				msg += "TIP: Use the Web Slicer extension for creating target view boxes.";
				throw msg;
			}

			this.defineLayerNodes();
			try {
				//Could have sub/pub pattern here for all the updates.
				this.setupConnections();
				this.updateDimensionsToNode(startNode);
				this.createClipPath();
				this.clipLayerNodes();
				this.updateStage();
				$("#webslicer-layer").attr("style", "display:none;");
				//Make it invisible but not disabled

				this.interpretCSS();

			} catch(e) {
				throw e;
			}

			var rect = this.clipSizes;

		}
	};
	
	Zepto(function(){ ProtoReady.init();} );

})(window, Zepto);
