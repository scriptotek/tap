'use strict';
var e,f="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},g="object"===typeof f.global&&f.global?f.global:"object"===typeof global&&global&&global.Object===Object?global:this;f.global=g;var k=exports;f.exportsNamespace=k;g.Object.freeze(f);var aa={envInfo:f,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.25",globalThis:this};g.Object.freeze(aa);g.Object.freeze(aa.semantics);
var p=g.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},ba=g.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},ca=0,da=g.WeakMap?new g.WeakMap:null;function q(a){return function(b,c){return!(!b||!b.$classData||b.$classData.z!==c||b.$classData.x!==a)}}
function ea(a){for(var b in a)return b}function fa(a,b,c){var d=new a.U(b[c]);if(c<b.length-1){a=a.B;c+=1;for(var h=d.aa,l=0;l<h.length;l++)h[l]=fa(a,b,c)}return d}function ga(a){switch(typeof a){case "string":return r(ha);case "number":var b=a|0;return b===a?ia(b)?r(ja):ka(b)?r(la):r(ma):"number"===typeof a?r(na):r(oa);case "boolean":return r(pa);case "undefined":return r(qa);default:return null===a?a.Ib():ra(a)?r(sa):a&&a.$classData?r(a.$classData):null}}
function ta(a){switch(typeof a){case "string":return ua(va(),a);case "number":return wa(xa(),a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a.p():null===da?42:ya(a)}}function za(a,b){var c=g.Object.getPrototypeOf,d=g.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var h=d(a,b);if(void 0!==h)return h;a=c(a)}}function Aa(a,b,c){a=za(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}
function Ba(a,b,c,d){a=za(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new g.TypeError("super has no setter '"+c+"'.");}
var ya=null!==da?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ta(a);default:if(null===a)return 0;var b=da.get(a);void 0===b&&(ca=b=ca+1|0,da.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(g.Object.isSealed(a))return 42;ca=b=ca+1|0;return a.$idHashCode$0=b}return null===a?0:ta(a)};function ia(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function ka(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function t(){this.P=this.U=void 0;this.x=this.B=this.j=null;this.z=0;this.ca=null;this.J="";this.g=this.H=this.I=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function u(a,b,c){var d=new t;d.j={};d.B=null;d.ca=a;d.J=b;d.g=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function v(a,b,c,d,h,l,n){var m=new t,x=ea(a);l=l||function(a){return!!(a&&a.$classData&&a.$classData.j[x])};n=n||function(a,b){return!!(a&&a.$classData&&a.$classData.z===b&&a.$classData.x.j[x])};m.P=h;m.j=c;m.J="L"+b+";";m.g=n;m.name=b;m.isInterface=!1;m.isRawJSType=!!d;m.isInstance=l;return m}
function Ca(a){function b(a){if("number"===typeof a){this.aa=Array(a);for(var b=0;b<a;b++)this.aa[b]=h}else this.aa=a}var c=new t,d=a.ca,h="longZero"==d?w().G:d;b.prototype=new y;b.prototype.constructor=b;b.prototype.$classData=c;var d="["+a.J,l=a.x||a,n=a.z+1;c.U=b;c.P=Da;c.j={a:1,Ta:1,c:1};c.B=a;c.x=l;c.z=n;c.ca=null;c.J=d;c.I=void 0;c.H=void 0;c.g=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return l.g(a,n)};return c}
function r(a){if(!a.I){var b=new z;b.s=a;a.I=b}return a.I}function Ea(a){a.H||(a.H=Ca(a));return a.H}t.prototype.getFakeInstance=function(){return this===ha?"some string":this===pa?!1:this===ja||this===la||this===ma||this===na||this===oa?0:this===sa?w().G:this===qa?void 0:{$classData:this}};t.prototype.getSuperclass=function(){return this.P?r(this.P):null};t.prototype.getComponentType=function(){return this.B?r(this.B):null};
t.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=Ea(b);return fa(b,a,0)};var Fa=u(!1,"Z","boolean"),Ga=u(0,"C","char"),Ha=u(0,"B","byte"),Ia=u(0,"S","short"),Ja=u(0,"I","int"),Ka=u("longZero","J","long"),La=u(0,"F","float"),Ma=u(0,"D","double");Fa.g=q(Fa);Ga.g=q(Ga);Ha.g=q(Ha);Ia.g=q(Ia);Ja.g=q(Ja);Ka.g=q(Ka);La.g=q(La);Ma.g=q(Ma);var Na=require("./graphiqlsetup");function A(){}function y(){}y.prototype=A.prototype;A.prototype.b=function(){return this};A.prototype.f=function(){var a=ga(this).s.name,b=(+(this.p()>>>0)).toString(16);return a+"@"+b};A.prototype.p=function(){return ya(this)};A.prototype.toString=function(){return this.f()};var Da=v({a:0},"java.lang.Object",{a:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.$classData){var c=a.z||0;return!(c<b)&&(c>b||!a.x.isPrimitive)}return!1});
A.prototype.$classData=Da;function B(){}B.prototype=new y;B.prototype.constructor=B;B.prototype.b=function(){return this};B.prototype.$classData=v({Ba:0},"io.heta.tap.client.ClientApp$",{Ba:1,a:1});var Oa=void 0;function C(){}C.prototype=new y;C.prototype.constructor=C;C.prototype.b=function(){return this};
C.prototype.run=function(){Pa(Qa().O.F,"Loading GraphiQLClient...\n");var a;Ra||(Ra=(new D).b());a=Ra;0===(268435456&a.d)&&0===(268435456&a.d)&&(0===(134217728&a.d)&&0===(134217728&a.d)&&(a.za=g.window,a.d|=134217728),a.ia=a.za.document,a.d|=268435456);a.ia.getElementById("graphiql");a="Load result: "+Na.load(Sa(),Ta().ea);Pa(Qa().O.F,a+"\n")};C.prototype.$classData=v({Ca:0},"io.heta.tap.client.GraphiQLClient$",{Ca:1,a:1});var Ua=void 0;function E(){this.Y=this.R=this.ea=this.fa=null;this.d=!1}
E.prototype=new y;E.prototype.constructor=E;
E.prototype.b=function(){Va=this;var a=(new F).l('{\r\n      |  "text": "I have found this process extremely challenging. I hope that the future is more enjoyable and relaxing.",\r\n      |  "parameters": "{\\"arousal\\":0,\\"valence\\":0,\\"dominance\\":0}",\r\n      |  "moveParams": "{\\"grammar\\":\\"reflective\\"}"\r\n      |}\r\n    ');this.ea=Wa(a);a=(new F).l("\r\n      |# TAP Example Queries\r\n      |\r\n      |query Affect($text:String,$parameters:String) {\r\n      |  affectExpressions(text:$text,parameters:$parameters) {\r\n      |    message\r\n      |    timestamp\r\n      |    querytime\r\n      |    analytics {\r\n      |      affect {\r\n      |        text\r\n      |        valence\r\n      |        arousal\r\n      |        dominance\r\n      |        startIdx\r\n      |        endIdx\r\n      |      }\r\n      |    }\r\n      |  }\r\n      |}\r\n      |\r\n      |\r\n    ");this.R=
Wa(a);a=(new F).l("\r\n      |  query ReflectExpressions($input:String,$parameters:String) {\r\n      |    reflectExpressions(text:$input,parameters:$parameters) {\r\n      |      querytime\r\n      |      message\r\n      |      timestamp\r\n      |      analytics {\r\n      |        counts {\r\n      |          wordCount\r\n      |          avgWordLength\r\n      |          sentenceCount\r\n      |          avgSentenceLength\r\n      |        }\r\n      |        summary {\r\n      |          metaTagSummary {\r\n      |            knowledge\r\n      |            experience\r\n      |            regulation\r\n      |            none\r\n      |          }\r\n      |          phraseTagSummary {\r\n      |            outcome\r\n      |            temporal\r\n      |            pertains\r\n      |            consider\r\n      |            anticipate\r\n      |            definite\r\n      |            possible\r\n      |            selfReflexive\r\n      |            emotive\r\n      |            selfPossessive\r\n      |            compare\r\n      |            manner\r\n      |            none\r\n      |          }\r\n      |        }\r\n      |        tags {\r\n      |          sentence\r\n      |          phrases\r\n      |          subTags\r\n      |          metaTags\r\n      |        }\r\n      |      }\r\n      |    }\r\n      |  }\r\n    ");
Wa(a);a=(new F).l("\r\n      |query RhetoricalMoves($text: String,$moveParams:String) {\r\n      |  moves(text:$text,parameters:$moveParams) {\r\n      |      analytics\r\n      |      message\r\n      |      timestamp\r\n      |      querytime\r\n      |  }\r\n      |}\r\n    ");this.Y=Wa(a);return this};function Sa(){var a=Ta();a.d||(a.d||(a.fa=""+a.R+a.Y,a.d=!0),a.R=null,a.Y=null);return a.fa}E.prototype.$classData=v({Da:0},"io.heta.tap.client.GraphiQLQueries$",{Da:1,a:1});var Va=void 0;
function Ta(){Va||(Va=(new E).b());return Va}function D(){this.ia=this.za=null;this.d=0}D.prototype=new y;D.prototype.constructor=D;D.prototype.b=function(){return this};D.prototype.$classData=v({Ha:0},"org.scalajs.dom.package$",{Ha:1,a:1});var Ra=void 0;function z(){this.s=null}z.prototype=new y;z.prototype.constructor=z;z.prototype.f=function(){return(this.s.isInterface?"interface ":this.s.isPrimitive?"":"class ")+this.s.name};z.prototype.$classData=v({Sa:0},"java.lang.Class",{Sa:1,a:1});
function G(){this.ja=this.sa=null}G.prototype=new y;G.prototype.constructor=G;G.prototype.b=function(){Xa=this;this.sa=Ya(!1);this.ja=Ya(!0);return this};G.prototype.$classData=v({db:0},"java.lang.System$",{db:1,a:1});var Xa=void 0;function Za(){Xa||(Xa=(new G).b());return Xa}function $a(){}$a.prototype=new y;$a.prototype.constructor=$a;function ab(){}ab.prototype=$a.prototype;function H(){this.F=null}H.prototype=new y;H.prototype.constructor=H;
H.prototype.f=function(){return"DynamicVariable("+this.F+")"};H.prototype.E=function(a){this.F=a;return this};H.prototype.$classData=v({hb:0},"scala.util.DynamicVariable",{hb:1,a:1});function bb(){}bb.prototype=new y;bb.prototype.constructor=bb;function cb(){}cb.prototype=bb.prototype;function db(a,b){b=p(-862048943,b);b=p(461845907,b<<15|b>>>17|0);a^=b;return-430675100+p(5,a<<13|a>>>19|0)|0}function eb(a){a=p(-2048144789,a^(a>>>16|0));a=p(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)}
function fb(a,b,c){var d=(new I).C(0);c=(new I).C(c);b.V(gb(function(a,b,c){return function(a){c.k=db(c.k,hb(ib(),a));b.k=1+b.k|0}}(a,d,c)));return eb(c.k^d.k)}function J(){this.r=!1;this.ma=this.L=this.y=null;this.T=!1;this.ra=this.oa=0}J.prototype=new y;J.prototype.constructor=J;
J.prototype.b=function(){kb=this;this.y=(this.r=!!(g.ArrayBuffer&&g.Int32Array&&g.Float32Array&&g.Float64Array))?new g.ArrayBuffer(8):null;this.L=this.r?new g.Int32Array(this.y,0,2):null;this.r&&new g.Float32Array(this.y,0,2);this.ma=this.r?new g.Float64Array(this.y,0,1):null;if(this.r)this.L[0]=16909060,a=1===((new g.Int8Array(this.y,0,8))[0]|0);else var a=!0;this.oa=(this.T=a)?0:1;this.ra=this.T?1:0;return this};
function wa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;if(a.r)a.ma[0]=b,a=(new K).D(a.L[a.ra]|0,a.L[a.oa]|0);else{if(b!==b)a=!1,b=2047,c=+g.Math.pow(2,51);else if(Infinity===b||-Infinity===b)a=0>b,b=2047,c=0;else if(0===b)a=-Infinity===1/b,c=b=0;else{var d=(a=0>b)?-b:b;if(d>=+g.Math.pow(2,-1022)){b=+g.Math.pow(2,52);var c=+g.Math.log(d)/.6931471805599453,c=+g.Math.floor(c)|0,c=1023>c?c:1023,h=+g.Math.pow(2,c);h>d&&(c=-1+c|0,h/=2);h=d/h*b;d=+g.Math.floor(h);h-=d;d=.5>h?d:.5<h?1+d:0!==d%2?1+
d:d;2<=d/b&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=b);b=c;c=d}else b=d/+g.Math.pow(2,-1074),c=+g.Math.floor(b),d=b-c,b=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c}c=+c;a=(new K).D(c|0,(a?-2147483648:0)|(b|0)<<20|c/4294967296|0)}return a.v^a.t}J.prototype.$classData=v({zb:0},"scala.scalajs.runtime.Bits$",{zb:1,a:1});var kb=void 0;function xa(){kb||(kb=(new J).b());return kb}function L(){this.d=!1}L.prototype=new y;L.prototype.constructor=L;L.prototype.b=function(){return this};
function ua(a,b){a=0;for(var c=1,d=-1+(b.length|0)|0;0<=d;)a=a+p(65535&(b.charCodeAt(d)|0),c)|0,c=p(31,c),d=-1+d|0;return a}L.prototype.$classData=v({Bb:0},"scala.scalajs.runtime.RuntimeString$",{Bb:1,a:1});var lb=void 0;function va(){lb||(lb=(new L).b());return lb}function M(){}M.prototype=new y;M.prototype.constructor=M;M.prototype.b=function(){return this};M.prototype.$classData=v({Cb:0},"scala.scalajs.runtime.package$",{Cb:1,a:1});var mb=void 0;function nb(){mb||(mb=(new M).b())}
function N(){}N.prototype=new y;N.prototype.constructor=N;N.prototype.b=function(){return this};
function hb(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=w();var c;if(-9223372036854775808>a)b.Q=-2147483648,c=0;else if(0x7fffffffffffffff<=a)b.Q=2147483647,c=-1;else{c=a|0;var d=a/4294967296|0;b.Q=0>a&&0!==c?-1+d|0:d}b=b.Q;w();a=(0>b?-(4294967296*+((0!==c?~b:-b|0)>>>0)+ +((-c|0)>>>0)):4294967296*b+ +(c>>>0))===a?c^b:wa(xa(),a)}return a}return ra(b)?(a=null===b?w().G:b,b=(new K).D(a.v,a.t),a=b.v,b=b.t,b===a>>31?
a:a^b):ta(b)}N.prototype.$classData=v({Fb:0},"scala.runtime.Statics$",{Fb:1,a:1});var ob=void 0;function ib(){ob||(ob=(new N).b());return ob}function pb(){}pb.prototype=new y;pb.prototype.constructor=pb;function qb(){}qb.prototype=pb.prototype;function O(){this.m=null}O.prototype=new y;O.prototype.constructor=O;function rb(){}rb.prototype=O.prototype;
O.prototype.la=function(){if(void 0===g.Error.captureStackTrace){try{var a={}.undef()}catch(b){if(nb(),a=b&&b.$classData&&b.$classData.j.M?b:(new sb).E(b),null!==a)if(tb(a))a=a.o;else throw nb(),tb(a)?a.o:a;else throw b;}this.stackdata=a}else g.Error.captureStackTrace(this),this.stackdata=this;return this};O.prototype.na=function(){return this.m};O.prototype.f=function(){var a=ga(this).s.name,b=this.na();return null===b?a:a+": "+b};O.prototype.K=function(a,b,c,d){this.m=a;d&&this.la();return this};
function P(){this.Z=0}P.prototype=new cb;P.prototype.constructor=P;P.prototype.b=function(){ub=this;this.Z=ua(va(),"Seq");ua(va(),"Map");ua(va(),"Set");return this};P.prototype.$classData=v({ib:0},"scala.util.hashing.MurmurHash3$",{ib:1,Pb:1,a:1});var ub=void 0;function vb(){ub||(ub=(new P).b());return ub}function wb(){}wb.prototype=new y;wb.prototype.constructor=wb;function xb(){}xb.prototype=wb.prototype;wb.prototype.f=function(){return"\x3cfunction1\x3e"};
var qa=v({Db:0},"scala.runtime.BoxedUnit",{Db:1,a:1,c:1},void 0,void 0,function(a){return void 0===a});function I(){this.k=0}I.prototype=new y;I.prototype.constructor=I;I.prototype.f=function(){return""+this.k};I.prototype.C=function(a){this.k=a;return this};I.prototype.$classData=v({Eb:0},"scala.runtime.IntRef",{Eb:1,a:1,c:1});var pa=v({Pa:0},"java.lang.Boolean",{Pa:1,a:1,c:1,h:1},void 0,void 0,function(a){return"boolean"===typeof a});function Q(){this.ba=0}Q.prototype=new y;
Q.prototype.constructor=Q;Q.prototype.f=function(){return g.String.fromCharCode(this.ba)};function yb(a){var b=new Q;b.ba=a;return b}Q.prototype.p=function(){return this.ba};Q.prototype.$classData=v({Ra:0},"java.lang.Character",{Ra:1,a:1,c:1,h:1});function zb(){this.m=null}zb.prototype=new rb;zb.prototype.constructor=zb;function Ab(){}Ab.prototype=zb.prototype;function R(){this.O=null}R.prototype=new ab;R.prototype.constructor=R;
R.prototype.b=function(){Bb=this;this.O=(new H).E(Za().sa);(new H).E(Za().ja);(new H).E(null);return this};R.prototype.$classData=v({fb:0},"scala.Console$",{fb:1,Kb:1,a:1,Ob:1});var Bb=void 0;function Qa(){Bb||(Bb=(new R).b());return Bb}function S(){this.ka=null}S.prototype=new xb;S.prototype.constructor=S;S.prototype.S=function(a){return(0,this.ka)(a)};function gb(a){var b=new S;b.ka=a;return b}S.prototype.$classData=v({yb:0},"scala.scalajs.runtime.AnonFunction1",{yb:1,pc:1,a:1,Aa:1});
function T(){this.Q=0;this.G=null}T.prototype=new y;T.prototype.constructor=T;T.prototype.b=function(){Cb=this;this.G=(new K).D(0,0);return this};
function Db(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+ba(1E9)|0)-(0!==b?ba(b):32+ba(a)|0)|0,d=c,h=0===(32&d)?1E9<<d:0,d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d,l=a,n=b;for(a=b=0;0<=c&&0!==(-2097152&n);){var m=l,x=n,Ub=h,jb=d;if(x===jb?(-2147483648^m)>=(-2147483648^Ub):(-2147483648^x)>=(-2147483648^jb))m=n,x=d,n=l-h|0,m=(-2147483648^n)>(-2147483648^l)?-1+(m-x|0)|0:m-x|0,l=n,n=m,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;m=d>>>1|0;h=h>>>1|0|d<<31;d=m}c=n;if(0===c?-1147483648<=(-2147483648^
l):-2147483648<=(-2147483648^c))c=4294967296*n+ +(l>>>0),l=c/1E9,h=l/4294967296|0,d=b,b=l=d+(l|0)|0,a=(-2147483648^l)<(-2147483648^d)?1+(a+h|0)|0:a+h|0,l=c%1E9|0;c=""+l;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}T.prototype.$classData=v({Ab:0},"scala.scalajs.runtime.RuntimeLong$",{Ab:1,a:1,ua:1,c:1});var Cb=void 0;function w(){Cb||(Cb=(new T).b());return Cb}function Eb(){}Eb.prototype=new y;Eb.prototype.constructor=Eb;function Fb(){}Fb.prototype=Eb.prototype;
var ha=v({Ia:0},"java.lang.String",{Ia:1,a:1,c:1,qa:1,h:1},void 0,void 0,function(a){return"string"===typeof a}),ja=v({Qa:0},"java.lang.Byte",{Qa:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return ia(a)}),oa=v({Ua:0},"java.lang.Double",{Ua:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return"number"===typeof a}),na=v({Va:0},"java.lang.Float",{Va:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return"number"===typeof a}),ma=v({Xa:0},"java.lang.Integer",{Xa:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return"number"===
typeof a&&(a|0)===a&&1/a!==1/-0}),sa=v({$a:0},"java.lang.Long",{$a:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return ra(a)});function Gb(){this.m=null}Gb.prototype=new Ab;Gb.prototype.constructor=Gb;function Hb(){}Hb.prototype=Gb.prototype;var la=v({bb:0},"java.lang.Short",{bb:1,u:1,a:1,c:1,h:1},void 0,void 0,function(a){return ka(a)});function U(){this.i=null}U.prototype=new y;U.prototype.constructor=U;e=U.prototype;e.b=function(){this.i="";return this};e.f=function(){return this.i};
e.C=function(a){U.prototype.b.call(this);if(0>a)throw(new V).b();return this};e.N=function(){return this.i.length|0};function Ib(a,b){return 65535&(a.i.charCodeAt(b)|0)}e.$classData=v({cb:0},"java.lang.StringBuilder",{cb:1,a:1,qa:1,Na:1,c:1});function W(){}W.prototype=new y;W.prototype.constructor=W;function Jb(){}Jb.prototype=W.prototype;W.prototype.f=function(){return(this.e<this.q?"non-empty":"empty")+" iterator"};W.prototype.V=function(a){for(;this.e<this.q;)a.S(Kb(this))};
function K(){this.t=this.v=0}K.prototype=new qb;K.prototype.constructor=K;e=K.prototype;e.f=function(){w();var a=this.v,b=this.t;return b===a>>31?""+a:0>b?"-"+Db(-a|0,0!==a?~b:-b|0):Db(a,b)};e.D=function(a,b){this.v=a;this.t=b;return this};e.C=function(a){K.prototype.D.call(this,a,a>>31);return this};e.p=function(){return this.v^this.t};function ra(a){return!!(a&&a.$classData&&a.$classData.j.ya)}e.$classData=v({ya:0},"scala.scalajs.runtime.RuntimeLong",{ya:1,u:1,a:1,c:1,h:1});function X(){}
X.prototype=new Fb;X.prototype.constructor=X;function Lb(){}Lb.prototype=X.prototype;X.prototype.Ka=function(){return this};function Y(){this.m=null}Y.prototype=new Hb;Y.prototype.constructor=Y;Y.prototype.l=function(a){O.prototype.K.call(this,a,0,0,!0);return this};Y.prototype.$classData=v({Wa:0},"java.lang.IndexOutOfBoundsException",{Wa:1,X:1,W:1,M:1,a:1,c:1});function Mb(){}Mb.prototype=new Fb;Mb.prototype.constructor=Mb;Mb.prototype.b=function(){return this};
Mb.prototype.$classData=v({Za:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{Za:1,Ga:1,a:1,Ea:1,Oa:1,Fa:1});function V(){this.m=null}V.prototype=new Hb;V.prototype.constructor=V;V.prototype.b=function(){O.prototype.K.call(this,null,0,0,!0);return this};V.prototype.$classData=v({ab:0},"java.lang.NegativeArraySizeException",{ab:1,X:1,W:1,M:1,a:1,c:1});function Nb(){this.m=null}Nb.prototype=new Hb;Nb.prototype.constructor=Nb;Nb.prototype.l=function(a){O.prototype.K.call(this,a,0,0,!0);return this};
Nb.prototype.$classData=v({eb:0},"java.util.NoSuchElementException",{eb:1,X:1,W:1,M:1,a:1,c:1});function Ob(){this.$=null;this.e=this.q=0;this.da=null}Ob.prototype=new Jb;Ob.prototype.constructor=Ob;function Kb(a){if(a.e>=a.q)throw(new Nb).l("next on empty iterator");for(var b=a.e;;){if(a.e<a.q)var c=a.da.ga(a.e),c=!(10===c||12===c);else c=!1;if(c)a.e=1+a.e|0;else break}a.e=1+a.e|0;var c=a.e,d=a.q;return a.$.substring(b,c<d?c:d)}
Ob.prototype.$classData=v({vb:0},"scala.collection.immutable.StringLike$$anon$1",{vb:1,Rb:1,a:1,Zb:1,wa:1,va:1});function Pb(){}Pb.prototype=new Lb;Pb.prototype.constructor=Pb;function Qb(){}Qb.prototype=Pb.prototype;Pb.prototype.La=function(){X.prototype.Ka.call(this);return this};function Rb(){this.A=this.pa=null}Rb.prototype=new Qb;Rb.prototype.constructor=Rb;function Ya(a){var b=new Rb;b.pa=a;(new Mb).b();Pb.prototype.La.call(b);b.A="";return b}
function Pa(a,b){for(;""!==b;){var c=b.indexOf("\n")|0;if(0>c)a.A=""+a.A+b,b="";else{var d=""+a.A+b.substring(0,c);g.console&&(a.pa&&g.console.error?g.console.error(d):g.console.log(d));a.A="";b=b.substring(1+c|0)}}}Rb.prototype.$classData=v({Ya:0},"java.lang.JSConsoleBasedPrintStream",{Ya:1,Hb:1,Gb:1,Ga:1,a:1,Ea:1,Oa:1,Fa:1,Na:1});function sb(){this.o=this.m=null}sb.prototype=new Hb;sb.prototype.constructor=sb;e=sb.prototype;e.la=function(){this.stackdata=this.o;return this};
e.na=function(){var a=this.o;return void 0===a?"undefined":a.toString()};e.E=function(a){this.o=a;O.prototype.K.call(this,null,0,0,!0);return this};e.p=function(){var a;vb();var b=-889275714;for(a=0;1>a;){ib();var c;b:switch(a){case 0:c=this.o;break b;default:throw(new Y).l(""+a);}b=db(b,hb(0,c));a=1+a|0}a=eb(b^1);return a};function tb(a){return!!(a&&a.$classData&&a.$classData.j.xa)}e.$classData=v({xa:0},"scala.scalajs.js.JavaScriptException",{xa:1,X:1,W:1,M:1,a:1,c:1,Nb:1,ta:1,ua:1});
function Sb(){}Sb.prototype=new y;Sb.prototype.constructor=Sb;function Tb(){}Tb.prototype=Sb.prototype;function Vb(a,b){for(var c=0,d=a.N();c<d;)b.S(a.ha(c)),c=1+c|0}function Wa(a){var b=(new Z).b(),c=new Ob;if(null===a)throw nb(),tb(null)?null.o:null;c.da=a;c.$=a.f();c.q=c.$.length|0;for(c.e=0;c.e<c.q;){a=Kb(c);for(var d=a.length|0,h=0;;)if(h<d&&32>=(65535&(a.charCodeAt(h)|0)))h=1+h|0;else break;a=h<d&&124===(65535&(a.charCodeAt(h)|0))?a.substring(1+h|0):a;d=b.n;d.i=""+d.i+a}return b.n.i}
function Wb(){}Wb.prototype=new Tb;Wb.prototype.constructor=Wb;function Xb(){}Xb.prototype=Wb.prototype;function F(){this.w=null}F.prototype=new y;F.prototype.constructor=F;e=F.prototype;e.ha=function(a){a=65535&(this.w.charCodeAt(a)|0);return yb(a)};e.ga=function(a){return 65535&(this.w.charCodeAt(a)|0)};e.f=function(){return this.w};e.V=function(a){Vb(this,a)};e.N=function(){return this.w.length|0};e.l=function(a){this.w=a;return this};e.p=function(){var a=this.w;return ua(va(),a)};
e.$classData=v({wb:0},"scala.collection.immutable.StringOps",{wb:1,a:1,ub:1,nb:1,mb:1,qb:1,ob:1,ta:1,rb:1,tb:1,sb:1,wa:1,va:1,lb:1,pb:1,jb:1,kb:1,gb:1,h:1});function Yb(){}Yb.prototype=new Xb;Yb.prototype.constructor=Yb;function Zb(){}Zb.prototype=Yb.prototype;function $b(){}$b.prototype=new Zb;$b.prototype.constructor=$b;function ac(){}ac.prototype=$b.prototype;function Z(){this.n=null}Z.prototype=new ac;Z.prototype.constructor=Z;e=Z.prototype;e.b=function(){Z.prototype.Ja.call(this,16,"");return this};
e.ha=function(a){a=Ib(this.n,a);return yb(a)};e.S=function(a){a=Ib(this.n,a|0);return yb(a)};e.ga=function(a){return Ib(this.n,a)};e.f=function(){return this.n.i};e.V=function(a){Vb(this,a)};e.Ja=function(a,b){a=(new U).C((b.length|0)+a|0);a.i=""+a.i+b;Z.prototype.Ma.call(this,a);return this};e.N=function(){return this.n.N()};e.Ma=function(a){this.n=a;return this};e.p=function(){var a=vb();return this&&this.$classData&&this.$classData.j.ec?eb(a.Z^0):fb(a,this,a.Z)};
e.$classData=v({xb:0},"scala.collection.mutable.StringBuilder",{xb:1,fc:1,Sb:1,Qb:1,Tb:1,a:1,ac:1,rb:1,tb:1,sb:1,wa:1,va:1,lb:1,pb:1,Wb:1,cc:1,Yb:1,Ub:1,jb:1,ob:1,ta:1,$b:1,Mb:1,Aa:1,Vb:1,kb:1,qb:1,mc:1,kc:1,oc:1,Lb:1,nc:1,hc:1,Jb:1,Ta:1,qa:1,ic:1,Xb:1,mb:1,jc:1,ub:1,nb:1,gb:1,h:1,lc:1,gc:1,dc:1,bc:1,ua:1,c:1});k.io=k.io||{};k.io.heta=k.io.heta||{};k.io.heta.tap=k.io.heta.tap||{};k.io.heta.tap.client=k.io.heta.tap.client||{};var bc=k.io.heta.tap.client;Ua||(Ua=(new C).b());bc.GraphiQLClient=Ua;
Oa||(Oa=(new B).b());new (Ea(ha).U)([]);Pa(Qa().O.F,"ClientApp loaded.\n");
//# sourceMappingURL=client-opt.js.map
