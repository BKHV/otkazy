!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=257)}([function(e,t,n){(function(e){!function(t,n){e.exports=n()}(0,function(){"use strict";function t(){return Xe.apply(null,arguments)}function r(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function s(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n in t)l(t,n)&&(e[n]=t[n]);return l(t,"toString")&&(e.toString=t.toString),l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,r){return ve(e,t,n,r,!0).utc()}function h(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var t=h(e),n=et.call(t.parsedDateParts,function(e){return null!=e}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r}return e._isValid}function p(e){var t=d(NaN);return null!=e?c(h(t),e):h(t).userInvalidated=!0,t}function _(e,t){var n,r,i;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=h(t)),o(t._locale)||(e._locale=t._locale),tt.length>0)for(n=0;n<tt.length;n++)o(i=t[r=tt[n]])||(e[r]=i);return e}function m(e){_(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===nt&&(nt=!0,t.updateOffset(this),nt=!1)}function y(e){return e instanceof m||null!=e&&null!=e._isAMomentObject}function g(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function v(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=g(t)),n}function b(e,t,n){var r,i=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),a=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&v(e[r])!==v(t[r]))&&a++;return a+o}function M(e){!1===t.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function w(e,n){var r=!0;return c(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),r){for(var i,o=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] ";for(var s in arguments[0])i+=s+": "+arguments[0][s]+", ";i=i.slice(0,-2)}else i=arguments[a];o.push(i)}M(e+"\nArguments: "+Array.prototype.slice.call(o).join("")+"\n"+(new Error).stack),r=!1}return n.apply(this,arguments)},n)}function L(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),rt[e]||(M(n),rt[e]=!0)}function k(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function T(e,t){var n,r=c({},e);for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(r[n]={},c(r[n],e[n]),c(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(r[n]=c({},r[n]));return r}function Y(e){null!=e&&this.set(e)}function S(e,t){var n=e.toLowerCase();ot[n]=ot[n+"s"]=ot[t]=e}function D(e){return"string"==typeof e?ot[e]||ot[e.toLowerCase()]:void 0}function C(e){var t,n,r={};for(n in e)l(e,n)&&(t=D(n))&&(r[t]=e[n]);return r}function O(e,t){at[e]=t}function x(e,t,n){var r=""+Math.abs(e),i=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}function E(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(ct[e]=i),t&&(ct[t[0]]=function(){return x(i.apply(this,arguments),t[1],t[2])}),n&&(ct[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function j(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function P(e,t){return e.isValid()?(t=A(t,e.localeData()),lt[t]=lt[t]||function(e){var t,n,r=e.match(st);for(t=0,n=r.length;t<n;t++)ct[r[t]]?r[t]=ct[r[t]]:r[t]=j(r[t]);return function(t){var i,o="";for(i=0;i<n;i++)o+=k(r[i])?r[i].call(t,e):r[i];return o}}(t),lt[t](e)):e.localeData().invalidDate()}function A(e,t){function n(e){return t.longDateFormat(e)||e}var r=5;for(ut.lastIndex=0;r>=0&&ut.test(e);)e=e.replace(ut,n),ut.lastIndex=0,r-=1;return e}function H(e,t,n){St[e]=k(t)?t:function(e,r){return e&&n?n:t}}function I(e,t){return l(St,e)?St[e](t._strict,t._locale):new RegExp(function(e){return N(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){return t||n||r||i}))}(e))}function N(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function V(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),a(t)&&(r=function(e,n){n[t]=v(e)}),n=0;n<e.length;n++)Dt[e[n]]=r}function F(e,t){V(e,function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)})}function R(e,t,n){null!=t&&l(Dt,e)&&Dt[e](t,n._a,n,e)}function W(e){return z(e)?366:365}function z(e){return e%4==0&&e%100!=0||e%400==0}function G(e,n){return function(r){return null!=r?(B(this,e,r),t.updateOffset(this,n),this):U(this,e)}}function U(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function B(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&z(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),J(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function J(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=function(e,t){return(e%t+t)%t}(t,12);return e+=(t-n)/12,1===n?z(e)?29:28:31-n%7%2}function K(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=v(t);else if(t=e.localeData().monthsParse(t),!a(t))return e;return n=Math.min(e.date(),J(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function $(e){return null!=e?(K(this,e),t.updateOffset(this,!0),this):U(this,"Month")}function q(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],o=[];for(t=0;t<12;t++)n=d([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),o.sort(e),t=0;t<12;t++)r[t]=N(r[t]),i[t]=N(i[t]);for(t=0;t<24;t++)o[t]=N(o[t]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Z(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Q(e,t,n){var r=7+t-n;return-((7+Z(e,0,r).getUTCDay()-t)%7)+r-1}function X(e,t,n,r,i){var o,a,s=1+7*(t-1)+(7+n-r)%7+Q(e,r,i);return s<=0?a=W(o=e-1)+s:s>W(e)?(o=e+1,a=s-W(e)):(o=e,a=s),{year:o,dayOfYear:a}}function ee(e,t,n){var r,i,o=Q(e.year(),t,n),a=Math.floor((e.dayOfYear()-o-1)/7)+1;return a<1?r=a+te(i=e.year()-1,t,n):a>te(e.year(),t,n)?(r=a-te(e.year(),t,n),i=e.year()+1):(i=e.year(),r=a),{week:r,year:i}}function te(e,t,n){var r=Q(e,t,n),i=Q(e+1,t,n);return(W(e)-r+i)/7}function ne(){function e(e,t){return t.length-e.length}var t,n,r,i,o,a=[],s=[],u=[],l=[];for(t=0;t<7;t++)n=d([2e3,1]).day(t),r=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),o=this.weekdays(n,""),a.push(r),s.push(i),u.push(o),l.push(r),l.push(i),l.push(o);for(a.sort(e),s.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)s[t]=N(s[t]),u[t]=N(u[t]),l[t]=N(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function re(){return this.hours()%12||12}function ie(e,t){E(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function oe(e,t){return t._meridiemParse}function ae(e){return e?e.toLowerCase().replace("_","-"):e}function se(t){var r=null;if(!en[t]&&void 0!==e&&e&&e.exports)try{r=Zt._abbr;n(288)("./"+t),ue(r)}catch(e){}return en[t]}function ue(e,t){var n;return e&&(n=o(t)?ce(e):le(e,t))&&(Zt=n),Zt._abbr}function le(e,t){if(null!==t){var n=Xt;if(t.abbr=e,null!=en[e])L("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=en[e]._config;else if(null!=t.parentLocale){if(null==en[t.parentLocale])return tn[t.parentLocale]||(tn[t.parentLocale]=[]),tn[t.parentLocale].push({name:e,config:t}),null;n=en[t.parentLocale]._config}return en[e]=new Y(T(n,t)),tn[e]&&tn[e].forEach(function(e){le(e.name,e.config)}),ue(e),en[e]}return delete en[e],null}function ce(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Zt;if(!r(e)){if(t=se(e))return t;e=[e]}return function(e){for(var t,n,r,i,o=0;o<e.length;){for(t=(i=ae(e[o]).split("-")).length,n=(n=ae(e[o+1]))?n.split("-"):null;t>0;){if(r=se(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&b(i,n,!0)>=t-1)break;t--}o++}return null}(e)}function de(e){var t,n=e._a;return n&&-2===h(e).overflow&&(t=n[Ot]<0||n[Ot]>11?Ot:n[xt]<1||n[xt]>J(n[Ct],n[Ot])?xt:n[Et]<0||n[Et]>24||24===n[Et]&&(0!==n[jt]||0!==n[Pt]||0!==n[At])?Et:n[jt]<0||n[jt]>59?jt:n[Pt]<0||n[Pt]>59?Pt:n[At]<0||n[At]>999?At:-1,h(e)._overflowDayOfYear&&(t<Ct||t>xt)&&(t=xt),h(e)._overflowWeeks&&-1===t&&(t=Ht),h(e)._overflowWeekday&&-1===t&&(t=It),h(e).overflow=t),e}function he(e,t,n){return null!=e?e:null!=t?t:n}function fe(e){var n,r,i,o,a=[];if(!e._d){for(i=function(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}(e),e._w&&null==e._a[xt]&&null==e._a[Ot]&&function(e){var t,n,r,i,o,a,s,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)o=1,a=4,n=he(t.GG,e._a[Ct],ee(be(),1,4).year),r=he(t.W,1),((i=he(t.E,1))<1||i>7)&&(u=!0);else{o=e._locale._week.dow,a=e._locale._week.doy;var l=ee(be(),o,a);n=he(t.gg,e._a[Ct],l.year),r=he(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+o,(t.e<0||t.e>6)&&(u=!0)):i=o}r<1||r>te(n,o,a)?h(e)._overflowWeeks=!0:null!=u?h(e)._overflowWeekday=!0:(s=X(n,r,i,o,a),e._a[Ct]=s.year,e._dayOfYear=s.dayOfYear)}(e),null!=e._dayOfYear&&(o=he(e._a[Ct],i[Ct]),(e._dayOfYear>W(o)||0===e._dayOfYear)&&(h(e)._overflowDayOfYear=!0),r=Z(o,0,e._dayOfYear),e._a[Ot]=r.getUTCMonth(),e._a[xt]=r.getUTCDate()),n=0;n<3&&null==e._a[n];++n)e._a[n]=a[n]=i[n];for(;n<7;n++)e._a[n]=a[n]=null==e._a[n]?2===n?1:0:e._a[n];24===e._a[Et]&&0===e._a[jt]&&0===e._a[Pt]&&0===e._a[At]&&(e._nextDay=!0,e._a[Et]=0),e._d=(e._useUTC?Z:function(e,t,n,r,i,o,a){var s=new Date(e,t,n,r,i,o,a);return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}).apply(null,a),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Et]=24),e._w&&void 0!==e._w.d&&e._w.d!==e._d.getDay()&&(h(e).weekdayMismatch=!0)}}function pe(e){var t,n,r,i,o,a,s=e._i,u=nn.exec(s)||rn.exec(s);if(u){for(h(e).iso=!0,t=0,n=an.length;t<n;t++)if(an[t][1].exec(u[1])){i=an[t][0],r=!1!==an[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=sn.length;t<n;t++)if(sn[t][1].exec(u[3])){o=(u[2]||" ")+sn[t][0];break}if(null==o)return void(e._isValid=!1)}if(!r&&null!=o)return void(e._isValid=!1);if(u[4]){if(!on.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(o||"")+(a||""),ye(e)}else e._isValid=!1}function _e(e,t,n,r,i,o){var a=[function(e){var t=parseInt(e,10);if(t<=49)return 2e3+t;if(t<=999)return 1900+t;return t}(e),Wt.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return o&&a.push(parseInt(o,10)),a}function me(e){var t=ln.exec(function(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e._i));if(t){var n=_e(t[4],t[3],t[2],t[5],t[6],t[7]);if(!function(e,t,n){if(e&&Bt.indexOf(e)!==new Date(t[0],t[1],t[2]).getDay())return h(n).weekdayMismatch=!0,n._isValid=!1,!1;return!0}(t[1],n,e))return;e._a=n,e._tzm=function(e,t,n){if(e)return cn[e];if(t)return 0;var r=parseInt(n,10),i=r%100;return(r-i)/100*60+i}(t[8],t[9],t[10]),e._d=Z.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),h(e).rfc2822=!0}else e._isValid=!1}function ye(e){if(e._f!==t.ISO_8601)if(e._f!==t.RFC_2822){e._a=[],h(e).empty=!0;var n,r,i,o,a,s=""+e._i,u=s.length,l=0;for(i=A(e._f,e._locale).match(st)||[],n=0;n<i.length;n++)o=i[n],(r=(s.match(I(o,e))||[])[0])&&((a=s.substr(0,s.indexOf(r))).length>0&&h(e).unusedInput.push(a),s=s.slice(s.indexOf(r)+r.length),l+=r.length),ct[o]?(r?h(e).empty=!1:h(e).unusedTokens.push(o),R(o,r,e)):e._strict&&!r&&h(e).unusedTokens.push(o);h(e).charsLeftOver=u-l,s.length>0&&h(e).unusedInput.push(s),e._a[Et]<=12&&!0===h(e).bigHour&&e._a[Et]>0&&(h(e).bigHour=void 0),h(e).parsedDateParts=e._a.slice(0),h(e).meridiem=e._meridiem,e._a[Et]=function(e,t,n){var r;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}(e._locale,e._a[Et],e._meridiem),fe(e),de(e)}else me(e);else pe(e)}function ge(e){var n=e._i,l=e._f;return e._locale=e._locale||ce(e._l),null===n||void 0===l&&""===n?p({nullInput:!0}):("string"==typeof n&&(e._i=n=e._locale.preparse(n)),y(n)?new m(de(n)):(s(n)?e._d=n:r(l)?function(e){var t,n,r,i,o;if(0===e._f.length)return h(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)o=0,t=_({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],ye(t),f(t)&&(o+=h(t).charsLeftOver,o+=10*h(t).unusedTokens.length,h(t).score=o,(null==r||o<r)&&(r=o,n=t));c(e,n||t)}(e):l?ye(e):function(e){var n=e._i;o(n)?e._d=new Date(t.now()):s(n)?e._d=new Date(n.valueOf()):"string"==typeof n?function(e){var n=un.exec(e._i);null===n?(pe(e),!1===e._isValid&&(delete e._isValid,me(e),!1===e._isValid&&(delete e._isValid,t.createFromInputFallback(e)))):e._d=new Date(+n[1])}(e):r(n)?(e._a=u(n.slice(0),function(e){return parseInt(e,10)}),fe(e)):i(n)?function(e){if(!e._d){var t=C(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),fe(e)}}(e):a(n)?e._d=new Date(n):t.createFromInputFallback(e)}(e),f(e)||(e._d=null),e))}function ve(e,t,n,o,a){var s={};return!0!==n&&!1!==n||(o=n,n=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||r(e)&&0===e.length)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=t,s._strict=o,function(e){var t=new m(de(ge(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}(s)}function be(e,t,n,r){return ve(e,t,n,r,!1)}function Me(e,t){var n,i;if(1===t.length&&r(t[0])&&(t=t[0]),!t.length)return be();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}function we(e){var t=C(e),n=t.year||0,r=t.quarter||0,i=t.month||0,o=t.week||0,a=t.day||0,s=t.hour||0,u=t.minute||0,l=t.second||0,c=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Nt.call(fn,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,r=0;r<fn.length;++r)if(e[fn[r]]){if(n)return!1;parseFloat(e[fn[r]])!==v(e[fn[r]])&&(n=!0)}return!0}(t),this._milliseconds=+c+1e3*l+6e4*u+1e3*s*60*60,this._days=+a+7*o,this._months=+i+3*r+12*n,this._data={},this._locale=ce(),this._bubble()}function Le(e){return e instanceof we}function ke(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Te(e,t){E(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+x(~~(e/60),2)+t+x(~~e%60,2)})}function Ye(e,t){var n=(t||"").match(e);if(null===n)return null;var r=((n[n.length-1]||[])+"").match(pn)||["-",0,0],i=60*r[1]+v(r[2]);return 0===i?0:"+"===r[0]?i:-i}function Se(e,n){var r,i;return n._isUTC?(r=n.clone(),i=(y(e)||s(e)?e.valueOf():be(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+i),t.updateOffset(r,!1),r):be(e).local()}function De(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ce(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Oe(e,t){var n,r,i,o=e,s=null;return Le(e)?o={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(o={},t?o[t]=e:o.milliseconds=e):(s=_n.exec(e))?(n="-"===s[1]?-1:1,o={y:0,d:v(s[xt])*n,h:v(s[Et])*n,m:v(s[jt])*n,s:v(s[Pt])*n,ms:v(ke(1e3*s[At]))*n}):(s=mn.exec(e))?(n="-"===s[1]?-1:(s[1],1),o={y:xe(s[2],n),M:xe(s[3],n),w:xe(s[4],n),d:xe(s[5],n),h:xe(s[6],n),m:xe(s[7],n),s:xe(s[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Se(t,e),e.isBefore(t)?n=Ee(e,t):((n=Ee(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(be(o.from),be(o.to)),(o={}).ms=i.milliseconds,o.M=i.months),r=new we(o),Le(e)&&l(e,"_locale")&&(r._locale=e._locale),r}function xe(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Ee(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function je(e,t){return function(n,r){var i,o;return null===r||isNaN(+r)||(L(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),o=n,n=r,r=o),n="string"==typeof n?+n:n,i=Oe(n,r),Pe(this,i,e),this}}function Pe(e,n,r,i){var o=n._milliseconds,a=ke(n._days),s=ke(n._months);e.isValid()&&(i=null==i||i,s&&K(e,U(e,"Month")+s*r),a&&B(e,"Date",U(e,"Date")+a*r),o&&e._d.setTime(e._d.valueOf()+o*r),i&&t.updateOffset(e,a||s))}function Ae(e,t){var n,r=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(r,"months");return n=t-i<0?(t-i)/(i-e.clone().add(r-1,"months")):(t-i)/(e.clone().add(r+1,"months")-i),-(r+n)||0}function He(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ce(e))&&(this._locale=t),this)}function Ie(){return this._locale}function Ne(e,t){E(0,[e,e.length],0,t)}function Ve(e,t,n,r,i){var o;return null==e?ee(this,r,i).year:(o=te(e,r,i),t>o&&(t=o),function(e,t,n,r,i){var o=X(e,t,n,r,i),a=Z(o.year,0,o.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,r,i))}function Fe(e,t){t[At]=v(1e3*("0."+e))}function Re(e){return e}function We(e,t,n,r){var i=ce(),o=d().set(r,t);return i[n](o,e)}function ze(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return We(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=We(e,r,n,"month");return i}function Ge(e,t,n,r){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i=ce(),o=e?i._week.dow:0;if(null!=n)return We(t,(n+o)%7,r,"day");var s,u=[];for(s=0;s<7;s++)u[s]=We(t,(s+o)%7,r,"day");return u}function Ue(e,t,n,r){var i=Oe(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function Be(e){return e<0?Math.floor(e):Math.ceil(e)}function Je(e){return 4800*e/146097}function Ke(e){return 146097*e/4800}function $e(e){return function(){return this.as(e)}}function qe(e){return function(){return this.isValid()?this._data[e]:NaN}}function Ze(e){return(e>0)-(e<0)||+e}function Qe(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r=Un(this._milliseconds)/1e3,i=Un(this._days),o=Un(this._months);t=g((e=g(r/60))/60),r%=60,e%=60;var a=n=g(o/12),s=o%=12,u=i,l=t,c=e,d=r?r.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var f=h<0?"-":"",p=Ze(this._months)!==Ze(h)?"-":"",_=Ze(this._days)!==Ze(h)?"-":"",m=Ze(this._milliseconds)!==Ze(h)?"-":"";return f+"P"+(a?p+a+"Y":"")+(s?p+s+"M":"")+(u?_+u+"D":"")+(l||c||d?"T":"")+(l?m+l+"H":"")+(c?m+c+"M":"")+(d?m+d+"S":"")}var Xe,et;et=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};var tt=t.momentProperties=[],nt=!1,rt={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var it;it=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t);return n};var ot={},at={},st=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ut=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,lt={},ct={},dt=/\d/,ht=/\d\d/,ft=/\d{3}/,pt=/\d{4}/,_t=/[+-]?\d{6}/,mt=/\d\d?/,yt=/\d\d\d\d?/,gt=/\d\d\d\d\d\d?/,vt=/\d{1,3}/,bt=/\d{1,4}/,Mt=/[+-]?\d{1,6}/,wt=/\d+/,Lt=/[+-]?\d+/,kt=/Z|[+-]\d\d:?\d\d/gi,Tt=/Z|[+-]\d\d(?::?\d\d)?/gi,Yt=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,St={},Dt={},Ct=0,Ot=1,xt=2,Et=3,jt=4,Pt=5,At=6,Ht=7,It=8;E("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),E(0,["YY",2],0,function(){return this.year()%100}),E(0,["YYYY",4],0,"year"),E(0,["YYYYY",5],0,"year"),E(0,["YYYYYY",6,!0],0,"year"),S("year","y"),O("year",1),H("Y",Lt),H("YY",mt,ht),H("YYYY",bt,pt),H("YYYYY",Mt,_t),H("YYYYYY",Mt,_t),V(["YYYYY","YYYYYY"],Ct),V("YYYY",function(e,n){n[Ct]=2===e.length?t.parseTwoDigitYear(e):v(e)}),V("YY",function(e,n){n[Ct]=t.parseTwoDigitYear(e)}),V("Y",function(e,t){t[Ct]=parseInt(e,10)}),t.parseTwoDigitYear=function(e){return v(e)+(v(e)>68?1900:2e3)};var Nt,Vt=G("FullYear",!0);Nt=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},E("M",["MM",2],"Mo",function(){return this.month()+1}),E("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),E("MMMM",0,0,function(e){return this.localeData().months(this,e)}),S("month","M"),O("month",8),H("M",mt),H("MM",mt,ht),H("MMM",function(e,t){return t.monthsShortRegex(e)}),H("MMMM",function(e,t){return t.monthsRegex(e)}),V(["M","MM"],function(e,t){t[Ot]=v(e)-1}),V(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[Ot]=i:h(n).invalidMonth=e});var Ft=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Rt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Wt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),zt=Yt,Gt=Yt;E("w",["ww",2],"wo","week"),E("W",["WW",2],"Wo","isoWeek"),S("week","w"),S("isoWeek","W"),O("week",5),O("isoWeek",5),H("w",mt),H("ww",mt,ht),H("W",mt),H("WW",mt,ht),F(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=v(e)});E("d",0,"do","day"),E("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),E("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),E("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),E("e",0,0,"weekday"),E("E",0,0,"isoWeekday"),S("day","d"),S("weekday","e"),S("isoWeekday","E"),O("day",11),O("weekday",11),O("isoWeekday",11),H("d",mt),H("e",mt),H("E",mt),H("dd",function(e,t){return t.weekdaysMinRegex(e)}),H("ddd",function(e,t){return t.weekdaysShortRegex(e)}),H("dddd",function(e,t){return t.weekdaysRegex(e)}),F(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:h(n).invalidWeekday=e}),F(["d","e","E"],function(e,t,n,r){t[r]=v(e)});var Ut="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Bt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Jt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Kt=Yt,$t=Yt,qt=Yt;E("H",["HH",2],0,"hour"),E("h",["hh",2],0,re),E("k",["kk",2],0,function(){return this.hours()||24}),E("hmm",0,0,function(){return""+re.apply(this)+x(this.minutes(),2)}),E("hmmss",0,0,function(){return""+re.apply(this)+x(this.minutes(),2)+x(this.seconds(),2)}),E("Hmm",0,0,function(){return""+this.hours()+x(this.minutes(),2)}),E("Hmmss",0,0,function(){return""+this.hours()+x(this.minutes(),2)+x(this.seconds(),2)}),ie("a",!0),ie("A",!1),S("hour","h"),O("hour",13),H("a",oe),H("A",oe),H("H",mt),H("h",mt),H("k",mt),H("HH",mt,ht),H("hh",mt,ht),H("kk",mt,ht),H("hmm",yt),H("hmmss",gt),H("Hmm",yt),H("Hmmss",gt),V(["H","HH"],Et),V(["k","kk"],function(e,t,n){var r=v(e);t[Et]=24===r?0:r}),V(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),V(["h","hh"],function(e,t,n){t[Et]=v(e),h(n).bigHour=!0}),V("hmm",function(e,t,n){var r=e.length-2;t[Et]=v(e.substr(0,r)),t[jt]=v(e.substr(r)),h(n).bigHour=!0}),V("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Et]=v(e.substr(0,r)),t[jt]=v(e.substr(r,2)),t[Pt]=v(e.substr(i)),h(n).bigHour=!0}),V("Hmm",function(e,t,n){var r=e.length-2;t[Et]=v(e.substr(0,r)),t[jt]=v(e.substr(r))}),V("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Et]=v(e.substr(0,r)),t[jt]=v(e.substr(r,2)),t[Pt]=v(e.substr(i))});var Zt,Qt=G("Hours",!0),Xt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Rt,monthsShort:Wt,week:{dow:0,doy:6},weekdays:Ut,weekdaysMin:Jt,weekdaysShort:Bt,meridiemParse:/[ap]\.?m?\.?/i},en={},tn={},nn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,rn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,on=/Z|[+-]\d\d(?::?\d\d)?/,an=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],sn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],un=/^\/?Date\((\-?\d+)/i,ln=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,cn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};t.createFromInputFallback=w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.ISO_8601=function(){},t.RFC_2822=function(){};var dn=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=be.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),hn=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=be.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:p()}),fn=["year","quarter","month","week","day","hour","minute","second","millisecond"];Te("Z",":"),Te("ZZ",""),H("Z",Tt),H("ZZ",Tt),V(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ye(Tt,e)});var pn=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var _n=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,mn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Oe.fn=we.prototype,Oe.invalid=function(){return Oe(NaN)};var yn=je(1,"add"),gn=je(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var vn=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});E(0,["gg",2],0,function(){return this.weekYear()%100}),E(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ne("gggg","weekYear"),Ne("ggggg","weekYear"),Ne("GGGG","isoWeekYear"),Ne("GGGGG","isoWeekYear"),S("weekYear","gg"),S("isoWeekYear","GG"),O("weekYear",1),O("isoWeekYear",1),H("G",Lt),H("g",Lt),H("GG",mt,ht),H("gg",mt,ht),H("GGGG",bt,pt),H("gggg",bt,pt),H("GGGGG",Mt,_t),H("ggggg",Mt,_t),F(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=v(e)}),F(["gg","GG"],function(e,n,r,i){n[i]=t.parseTwoDigitYear(e)}),E("Q",0,"Qo","quarter"),S("quarter","Q"),O("quarter",7),H("Q",dt),V("Q",function(e,t){t[Ot]=3*(v(e)-1)}),E("D",["DD",2],"Do","date"),S("date","D"),O("date",9),H("D",mt),H("DD",mt,ht),H("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),V(["D","DD"],xt),V("Do",function(e,t){t[xt]=v(e.match(mt)[0])});var bn=G("Date",!0);E("DDD",["DDDD",3],"DDDo","dayOfYear"),S("dayOfYear","DDD"),O("dayOfYear",4),H("DDD",vt),H("DDDD",ft),V(["DDD","DDDD"],function(e,t,n){n._dayOfYear=v(e)}),E("m",["mm",2],0,"minute"),S("minute","m"),O("minute",14),H("m",mt),H("mm",mt,ht),V(["m","mm"],jt);var Mn=G("Minutes",!1);E("s",["ss",2],0,"second"),S("second","s"),O("second",15),H("s",mt),H("ss",mt,ht),V(["s","ss"],Pt);var wn=G("Seconds",!1);E("S",0,0,function(){return~~(this.millisecond()/100)}),E(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),E(0,["SSS",3],0,"millisecond"),E(0,["SSSS",4],0,function(){return 10*this.millisecond()}),E(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),E(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),E(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),E(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),E(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),S("millisecond","ms"),O("millisecond",16),H("S",vt,dt),H("SS",vt,ht),H("SSS",vt,ft);var Ln;for(Ln="SSSS";Ln.length<=9;Ln+="S")H(Ln,wt);for(Ln="S";Ln.length<=9;Ln+="S")V(Ln,Fe);var kn=G("Milliseconds",!1);E("z",0,0,"zoneAbbr"),E("zz",0,0,"zoneName");var Tn=m.prototype;Tn.add=yn,Tn.calendar=function(e,n){var r=e||be(),i=Se(r,this).startOf("day"),o=t.calendarFormat(this,i)||"sameElse",a=n&&(k(n[o])?n[o].call(this,r):n[o]);return this.format(a||this.localeData().calendar(o,this,be(r)))},Tn.clone=function(){return new m(this)},Tn.diff=function(e,t,n){var r,i,o;if(!this.isValid())return NaN;if(!(r=Se(e,this)).isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),t=D(t)){case"year":o=Ae(this,r)/12;break;case"month":o=Ae(this,r);break;case"quarter":o=Ae(this,r)/3;break;case"second":o=(this-r)/1e3;break;case"minute":o=(this-r)/6e4;break;case"hour":o=(this-r)/36e5;break;case"day":o=(this-r-i)/864e5;break;case"week":o=(this-r-i)/6048e5;break;default:o=this-r}return n?o:g(o)},Tn.endOf=function(e){return void 0===(e=D(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},Tn.format=function(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=P(this,e);return this.localeData().postformat(n)},Tn.from=function(e,t){return this.isValid()&&(y(e)&&e.isValid()||be(e).isValid())?Oe({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Tn.fromNow=function(e){return this.from(be(),e)},Tn.to=function(e,t){return this.isValid()&&(y(e)&&e.isValid()||be(e).isValid())?Oe({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Tn.toNow=function(e){return this.to(be(),e)},Tn.get=function(e){return e=D(e),k(this[e])?this[e]():this},Tn.invalidAt=function(){return h(this).overflow},Tn.isAfter=function(e,t){var n=y(e)?e:be(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=D(o(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},Tn.isBefore=function(e,t){var n=y(e)?e:be(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=D(o(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},Tn.isBetween=function(e,t,n,r){return("("===(r=r||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===r[1]?this.isBefore(t,n):!this.isAfter(t,n))},Tn.isSame=function(e,t){var n,r=y(e)?e:be(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=D(t||"millisecond"))?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},Tn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},Tn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},Tn.isValid=function(){return f(this)},Tn.lang=vn,Tn.locale=He,Tn.localeData=Ie,Tn.max=hn,Tn.min=dn,Tn.parsingFlags=function(){return c({},h(this))},Tn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:at[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit]);else if(e=D(e),k(this[e]))return this[e](t);return this},Tn.startOf=function(e){switch(e=D(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},Tn.subtract=gn,Tn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},Tn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},Tn.toDate=function(){return new Date(this.valueOf())},Tn.toISOString=function(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?P(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):k(Date.prototype.toISOString)?this.toDate().toISOString():P(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},Tn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+r+"-MM-DD[T]HH:mm:ss.SSS"+i)},Tn.toJSON=function(){return this.isValid()?this.toISOString():null},Tn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Tn.unix=function(){return Math.floor(this.valueOf()/1e3)},Tn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Tn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Tn.year=Vt,Tn.isLeapYear=function(){return z(this.year())},Tn.weekYear=function(e){return Ve.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Tn.isoWeekYear=function(e){return Ve.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},Tn.quarter=Tn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},Tn.month=$,Tn.daysInMonth=function(){return J(this.year(),this.month())},Tn.week=Tn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},Tn.isoWeek=Tn.isoWeeks=function(e){var t=ee(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},Tn.weeksInYear=function(){var e=this.localeData()._week;return te(this.year(),e.dow,e.doy)},Tn.isoWeeksInYear=function(){return te(this.year(),1,4)},Tn.date=bn,Tn.day=Tn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},Tn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},Tn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},Tn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},Tn.hour=Tn.hours=Qt,Tn.minute=Tn.minutes=Mn,Tn.second=Tn.seconds=wn,Tn.millisecond=Tn.milliseconds=kn,Tn.utcOffset=function(e,n,r){var i,o=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ye(Tt,e)))return this}else Math.abs(e)<16&&!r&&(e*=60);return!this._isUTC&&n&&(i=De(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),o!==e&&(!n||this._changeInProgress?Pe(this,Oe(e-o,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?o:De(this)},Tn.utc=function(e){return this.utcOffset(0,e)},Tn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(De(this),"m")),this},Tn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ye(kt,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},Tn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?be(e).utcOffset():0,(this.utcOffset()-e)%60==0)},Tn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Tn.isLocal=function(){return!!this.isValid()&&!this._isUTC},Tn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Tn.isUtc=Ce,Tn.isUTC=Ce,Tn.zoneAbbr=function(){return this._isUTC?"UTC":""},Tn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Tn.dates=w("dates accessor is deprecated. Use date instead.",bn),Tn.months=w("months accessor is deprecated. Use month instead",$),Tn.years=w("years accessor is deprecated. Use year instead",Vt),Tn.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),Tn.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e={};if(_(e,this),(e=ge(e))._a){var t=e._isUTC?d(e._a):be(e._a);this._isDSTShifted=this.isValid()&&b(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var Yn=Y.prototype;Yn.calendar=function(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return k(r)?r.call(t,n):r},Yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},Yn.invalidDate=function(){return this._invalidDate},Yn.ordinal=function(e){return this._ordinal.replace("%d",e)},Yn.preparse=Re,Yn.postformat=Re,Yn.relativeTime=function(e,t,n,r){var i=this._relativeTime[n];return k(i)?i(e,t,n,r):i.replace(/%d/i,e)},Yn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return k(n)?n(t):n.replace(/%s/i,t)},Yn.set=function(e){var t,n;for(n in e)k(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Yn.months=function(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ft).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone},Yn.monthsShort=function(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ft.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Yn.monthsParse=function(e,t,n){var r,i,o;if(this._monthsParseExact)return function(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)o=d([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Nt.call(this._shortMonthsParse,a))?i:null:-1!==(i=Nt.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Nt.call(this._shortMonthsParse,a))?i:-1!==(i=Nt.call(this._longMonthsParse,a))?i:null:-1!==(i=Nt.call(this._longMonthsParse,a))?i:-1!==(i=Nt.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=d([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(o="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}},Yn.monthsRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||q.call(this),e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=Gt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},Yn.monthsShortRegex=function(e){return this._monthsParseExact?(l(this,"_monthsRegex")||q.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=zt),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},Yn.week=function(e){return ee(e,this._week.dow,this._week.doy).week},Yn.firstDayOfYear=function(){return this._week.doy},Yn.firstDayOfWeek=function(){return this._week.dow},Yn.weekdays=function(e,t){return e?r(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:r(this._weekdays)?this._weekdays:this._weekdays.standalone},Yn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},Yn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},Yn.weekdaysParse=function(e,t,n){var r,i,o;if(this._weekdaysParseExact)return function(e,t,n){var r,i,o,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)o=d([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Nt.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Nt.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Nt.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Nt.call(this._weekdaysParse,a))?i:-1!==(i=Nt.call(this._shortWeekdaysParse,a))?i:-1!==(i=Nt.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Nt.call(this._shortWeekdaysParse,a))?i:-1!==(i=Nt.call(this._weekdaysParse,a))?i:-1!==(i=Nt.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Nt.call(this._minWeekdaysParse,a))?i:-1!==(i=Nt.call(this._weekdaysParse,a))?i:-1!==(i=Nt.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=d([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[r]||(o="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}},Yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ne.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=Kt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},Yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ne.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=$t),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||ne.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=qt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},Yn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ue("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===v(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),t.lang=w("moment.lang is deprecated. Use moment.locale instead.",ue),t.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ce);var Sn=Math.abs,Dn=$e("ms"),Cn=$e("s"),On=$e("m"),xn=$e("h"),En=$e("d"),jn=$e("w"),Pn=$e("M"),An=$e("y"),Hn=qe("milliseconds"),In=qe("seconds"),Nn=qe("minutes"),Vn=qe("hours"),Fn=qe("days"),Rn=qe("months"),Wn=qe("years"),zn=Math.round,Gn={ss:44,s:45,m:45,h:22,d:26,M:11},Un=Math.abs,Bn=we.prototype;return Bn.isValid=function(){return this._isValid},Bn.abs=function(){var e=this._data;return this._milliseconds=Sn(this._milliseconds),this._days=Sn(this._days),this._months=Sn(this._months),e.milliseconds=Sn(e.milliseconds),e.seconds=Sn(e.seconds),e.minutes=Sn(e.minutes),e.hours=Sn(e.hours),e.months=Sn(e.months),e.years=Sn(e.years),this},Bn.add=function(e,t){return Ue(this,e,t,1)},Bn.subtract=function(e,t){return Ue(this,e,t,-1)},Bn.as=function(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=D(e))||"year"===e)return t=this._days+r/864e5,n=this._months+Je(t),"month"===e?n:n/12;switch(t=this._days+Math.round(Ke(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}},Bn.asMilliseconds=Dn,Bn.asSeconds=Cn,Bn.asMinutes=On,Bn.asHours=xn,Bn.asDays=En,Bn.asWeeks=jn,Bn.asMonths=Pn,Bn.asYears=An,Bn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*v(this._months/12):NaN},Bn._bubble=function(){var e,t,n,r,i,o=this._milliseconds,a=this._days,s=this._months,u=this._data;return o>=0&&a>=0&&s>=0||o<=0&&a<=0&&s<=0||(o+=864e5*Be(Ke(s)+a),a=0,s=0),u.milliseconds=o%1e3,e=g(o/1e3),u.seconds=e%60,t=g(e/60),u.minutes=t%60,n=g(t/60),u.hours=n%24,a+=g(n/24),i=g(Je(a)),s+=i,a-=Be(Ke(i)),r=g(s/12),s%=12,u.days=a,u.months=s,u.years=r,this},Bn.clone=function(){return Oe(this)},Bn.get=function(e){return e=D(e),this.isValid()?this[e+"s"]():NaN},Bn.milliseconds=Hn,Bn.seconds=In,Bn.minutes=Nn,Bn.hours=Vn,Bn.days=Fn,Bn.weeks=function(){return g(this.days()/7)},Bn.months=Rn,Bn.years=Wn,Bn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=function(e,t,n){var r=Oe(e).abs(),i=zn(r.as("s")),o=zn(r.as("m")),a=zn(r.as("h")),s=zn(r.as("d")),u=zn(r.as("M")),l=zn(r.as("y")),c=i<=Gn.ss&&["s",i]||i<Gn.s&&["ss",i]||o<=1&&["m"]||o<Gn.m&&["mm",o]||a<=1&&["h"]||a<Gn.h&&["hh",a]||s<=1&&["d"]||s<Gn.d&&["dd",s]||u<=1&&["M"]||u<Gn.M&&["MM",u]||l<=1&&["y"]||["yy",l];return c[2]=t,c[3]=+e>0,c[4]=n,function(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}.apply(null,c)}(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)},Bn.toISOString=Qe,Bn.toString=Qe,Bn.toJSON=Qe,Bn.locale=He,Bn.localeData=Ie,Bn.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Qe),Bn.lang=vn,E("X",0,0,"unix"),E("x",0,0,"valueOf"),H("x",Lt),H("X",/[+-]?\d+(\.\d{1,3})?/),V("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),V("x",function(e,t,n){n._d=new Date(v(e))}),t.version="2.19.2",function(e){Xe=e}(be),t.fn=Tn,t.min=function(){return Me("isBefore",[].slice.call(arguments,0))},t.max=function(){return Me("isAfter",[].slice.call(arguments,0))},t.now=function(){return Date.now?Date.now():+new Date},t.utc=d,t.unix=function(e){return be(1e3*e)},t.months=function(e,t){return ze(e,t,"months")},t.isDate=s,t.locale=ue,t.invalid=p,t.duration=Oe,t.isMoment=y,t.weekdays=function(e,t,n){return Ge(e,t,n,"weekdays")},t.parseZone=function(){return be.apply(null,arguments).parseZone()},t.localeData=ce,t.isDuration=Le,t.monthsShort=function(e,t){return ze(e,t,"monthsShort")},t.weekdaysMin=function(e,t,n){return Ge(e,t,n,"weekdaysMin")},t.defineLocale=le,t.updateLocale=function(e,t){if(null!=t){var n,r,i=Xt;null!=(r=se(e))&&(i=r._config),(n=new Y(t=T(i,t))).parentLocale=en[e],en[e]=n,ue(e)}else null!=en[e]&&(null!=en[e].parentLocale?en[e]=en[e].parentLocale:null!=en[e]&&delete en[e]);return en[e]},t.locales=function(){return it(en)},t.weekdaysShort=function(e,t,n){return Ge(e,t,n,"weekdaysShort")},t.normalizeUnits=D,t.relativeTimeRounding=function(e){return void 0===e?zn:"function"==typeof e&&(zn=e,!0)},t.relativeTimeThreshold=function(e,t){return void 0!==Gn[e]&&(void 0===t?Gn[e]:(Gn[e]=t,"s"===e&&(Gn.ss=t-1),!0))},t.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},t.prototype=Tn,t})}).call(t,n(287)(e))},,,,,,,,,,,,function(e,t,n){"use strict";(function(e){function r(e,t,n,r){function o(e){if(this instanceof o)return a.call(this,e),this;var t=new o(e),n=function(e){return(e.hasOwnProperty(Vn)?e[Vn]:Object.defineProperty(e,Vn,{value:[]})[Vn]).push(t),e};return r&&r(n),n}var a=i(t);return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o}function i(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(e){var r=e.apply(void 0,t);for(var i in r)this[i]=r[i]}}}function o(e,t,n){function r(){function e(e,t,n){for(var r=e.hasOwnProperty(Fn)?e[Fn]:Object.defineProperty(e,Fn,{value:[]})[Fn];r.length<=n;)r.push(null);return(r[n]=r[n]||[]).push(i),e}for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this instanceof r)return o.apply(this,t),this;var i=new((a=r).bind.apply(a,[void 0].concat(t)));return e.annotation=i,e;var a}var o=i(t);return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r}function a(e,t,n){function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(this instanceof r)return o.apply(this,e),this;var n=new((i=r).bind.apply(i,[void 0].concat(e)));return function(e,t){var r=e.constructor,i=r.hasOwnProperty(Rn)?r[Rn]:Object.defineProperty(r,Rn,{value:{}})[Rn];i[t]=i.hasOwnProperty(t)&&i[t]||[],i[t].unshift(n)};var i}var o=i(t);return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r}function s(){if(!hr){var e=dr.Symbol;if(e&&e.iterator)hr=e.iterator;else for(var t=Object.getOwnPropertyNames(Map.prototype),n=0;n<t.length;++n){var r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(hr=r)}}return hr}function u(e){Zone.current.scheduleMicroTask("scheduleMicrotask",e)}function l(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function c(e){if("string"==typeof e)return e;if(e instanceof Array)return"["+e.map(c).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;var t=e.toString();if(null==t)return""+t;var n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function d(e){return e.__forward_ref__=d,e.toString=function(){return c(this())},e}function h(e){return"function"==typeof e&&e.hasOwnProperty("__forward_ref__")&&e.__forward_ref__===d?e():e}function f(e){var t=function(e){var t=gr,n=e.deps;if(n&&n.length){t=[];for(var r=0;r<n.length;r++){var i=6;if((u=h(n[r]))instanceof Array)for(var o=0,a=u;o<a.length;o++){var s=a[o];s instanceof ir||s==ir?i|=1:s instanceof sr||s==sr?i&=-3:s instanceof ar||s==ar?i&=-5:u=s instanceof rr?s.token:h(s)}t.push({token:u,options:i})}}else if(e.useExisting){var u=h(e.useExisting);t=[{token:u,options:6}]}else if(!(n||Lr in e))throw g("'deps' required",e);return t}(e),n=yr,r=gr,i=!1,o=h(e.provide);if(Lr in e)r=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)i=!0,n=h(e.useClass);else{if("function"!=typeof o)throw g("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);i=!0,n=o}return{deps:t,fn:n,useNew:i,value:r}}function p(e){return g("Cannot mix multi providers and regular providers",e)}function _(e,t){if(t)if((t=h(t))instanceof Array)for(var n=0;n<t.length;n++)_(e,t[n]);else{if("function"==typeof t)throw g("Function/Class not supported",t);if(!t||"object"!=typeof t||!t.provide)throw g("Unexpected provider",t);var r=h(t.provide),i=f(t);if(!0===t.multi){var o=e.get(r);if(o){if(o.fn!==br)throw p(r)}else e.set(r,o={token:t.provide,deps:[],useNew:!1,fn:br,value:gr});r=t,o.deps.push({token:r,options:6})}var a=e.get(r);if(a&&a.fn==br)throw p(r);e.set(r,i)}}function m(e,t,n,r,i){try{return function(e,t,n,r,i){var o;if(t){if((o=t.value)==vr)throw Error(Sr+"Circular dependency");if(o===gr){t.value=vr;var a=void 0,s=t.useNew,u=t.fn,l=t.deps,c=gr;if(l.length){c=[];for(var d=0;d<l.length;d++){var h=l[d],f=h.options,p=2&f?n.get(h.token):void 0;c.push(m(h.token,p,n,p||4&f?r:Tr,1&f?null:mr.THROW_IF_NOT_FOUND))}}t.value=o=s?new((_=u).bind.apply(_,[void 0].concat(c))):u.apply(a,c)}}else o=r.get(e,i);return o;var _}(e,t,n,r,i)}catch(n){n instanceof Error||(n=new Error(n));throw(n[kr]=n[kr]||[]).unshift(e),t&&t.value==vr&&(t.value=gr),n}}function y(e,t){e=e&&"\n"===e.charAt(0)&&e.charAt(1)==Sr?e.substr(2):e;var n=c(t);if(t instanceof Array)n=t.map(c).join(" -> ");else if("object"==typeof t){var r=[];for(var i in t)if(t.hasOwnProperty(i)){var o=t[i];r.push(i+":"+("string"==typeof o?JSON.stringify(o):c(o)))}n="{"+r.join(", ")+"}"}return"StaticInjectorError["+n+"]: "+e.replace(Yr,"\n  ")}function g(e,t){return new Error(y(e,t))}function v(e){return e[Cr]}function b(e){return e[Or]}function M(e){if(e.length>1){/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return" ("+function(e){for(var t=[],n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(function(e){return c(e.token)}).join(" -> ")+")"}return""}function w(e,t,n,r){var i=[t],o=n(i),a=r?function(e,t){var n=e+" caused by: "+(t instanceof Error?t.message:t),r=Error(n);return r[Or]=t,r}(o,r):Error(o);return a.addKey=L,a.keys=i,a.injectors=[e],a.constructResolvingMessage=n,a[Or]=r,a}function L(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function k(e,t){for(var n=[],r=0,i=t.length;r<i;r++){var o=t[r];o&&0!=o.length?n.push(o.map(c).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+c(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+c(e)+"' is decorated with Injectable.")}function T(e,t){return Error("Cannot mix multi providers and regular providers, got: "+e+" "+t)}function Y(e){return"function"==typeof e}function S(e){return e?e.map(function(e){var t=e.type.annotationCls,n=e.args?e.args:[];return new(t.bind.apply(t,[void 0].concat(n)))}):[]}function D(e){var t=Object.getPrototypeOf(e.prototype);return(t?t.constructor:null)||Object}function C(e){var t,n;if(e.useClass){var r=h(e.useClass);t=Nr.factory(r),n=j(r)}else e.useExisting?(t=function(e){return e},n=[Vr.fromKey(jr.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){var n=t.map(function(e){return[e]});return t.map(function(t){return P(e,t,n)})}return j(e)}(e.useFactory,e.deps)):(t=function(){return e.useValue},n=Fr);return new Wr(t,n)}function O(e){return new Rr(jr.get(e.provide),[C(e)],e.multi||!1)}function x(e){var t=function(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=t.get(r.key.id);if(i){if(r.multiProvider!==i.multiProvider)throw T(i,r);if(r.multiProvider)for(var o=0;o<r.resolvedFactories.length;o++)i.resolvedFactories.push(r.resolvedFactories[o]);else t.set(r.key.id,r)}else{var a=void 0;a=r.multiProvider?new Rr(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,a)}}return t}(E(e,[]).map(O),new Map);return Array.from(t.values())}function E(e,t){return e.forEach(function(e){if(e instanceof Ar)t.push({provide:e,useClass:e});else if(e&&"object"==typeof e&&void 0!==e.provide)t.push(e);else{if(!(e instanceof Array))throw function(e){return Error("Invalid provider - only instances of Provider and Type are allowed, got: "+e)}(e);E(e,t)}}),t}function j(e){var t=Nr.parameters(e);if(!t)return[];if(t.some(function(e){return null==e}))throw k(e,t);return t.map(function(n){return P(e,n,t)})}function P(e,t,n){var r=null,i=!1;if(!Array.isArray(t))return t instanceof rr?A(t.token,i,null):A(t,i,null);for(var o=null,a=0;a<t.length;++a){var s=t[a];s instanceof Ar?r=s:s instanceof rr?r=s.token:s instanceof ir?i=!0:s instanceof ar||s instanceof sr?o=s:s instanceof Nn&&(r=s)}if(null!=(r=h(r)))return A(r,i,o);throw k(e,n)}function A(e,t,n){return new Vr(jr.get(e),t,n)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function H(e){return!!e&&"function"==typeof e.then}function I(e){return!!e&&"function"==typeof e.subscribe}function N(){return""+V()+V()+V()}function V(){return String.fromCharCode(97+Math.floor(25*Math.random()))}function F(){throw new Error("Runtime compiler is not loaded")}function R(e){var t=Error("No component factory found for "+c(e)+". Did you add it to @NgModule.entryComponents?");return t[ii]=e,t}function W(e,t){return null}function z(){}function G(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(function(){return e.onStable.emit(null)})}finally{e.isStable=!0}}}function U(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function B(e){e._nesting--,G(e)}function J(e){bi=e}function K(){if(wi)throw new Error("Cannot enable prod mode after platform setup.");Mi=!1}function $(){return wi=!0,Mi}function q(e,t,n){void 0===n&&(n=[]);var r=new Nn("Platform: "+t);return function(t){void 0===t&&(t=[]);var i=Z();return i&&!i.injector.get(Li,!1)||(e?e(n.concat(t).concat({provide:r,useValue:!0})):function(e){if(er&&!er.destroyed&&!er.injector.get(Li,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");er=e.get(Ti);var t=e.get(qr,null);t&&t.forEach(function(e){return e()})}(mr.create(n.concat(t).concat({provide:r,useValue:!0})))),function(e){var t=Z();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(r)}}function Z(){return er&&!er.destroyed?er:null}function Q(e,t){return e=Array.isArray(t)?t.reduce(Q,e):Object(jn.a)({},e,t)}function X(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}function ee(e){return e.reduce(function(e,t){var n=Array.isArray(t)?ee(t):t;return e.concat(n)},[])}function te(e,t,n){if(!e)throw new Error("Cannot find '"+n+"' in '"+t+"'");return e}function ne(e,t,n){e.childNodes.forEach(function(e){e instanceof Fi&&(t(e)&&n.push(e),ne(e,t,n))})}function re(e,t,n){e instanceof Fi&&e.childNodes.forEach(function(e){t(e)&&n.push(e),e instanceof Fi&&re(e,t,n)})}function ie(e){return Ri.get(e)||null}function oe(e){Ri.set(e.nativeNode,e)}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ae(e,t){var n=se(e),r=se(t);if(n&&r)return function(e,t,n){var r=e[s()](),i=t[s()]();for(;;){var o=r.next(),a=i.next();if(o.done&&a.done)return!0;if(o.done||a.done)return!1;if(!n(o.value,a.value))return!1}}(e,t,ae);return!(n||!(e&&("object"==typeof e||"function"==typeof e))||r||!(t&&("object"==typeof t||"function"==typeof t)))||l(e,t)}function se(e){return!!ue(e)&&(Array.isArray(e)||!(e instanceof Map)&&s()in e)}function ue(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function le(e,t,n){var r=e.previousIndex;if(null===r)return r;var i=0;return n&&r<n.length&&(i=n[r]),r+t+i}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ce(){return ro}function de(){return io}function he(e){return e||"en-US"}function fe(e,t){return e.nodes[t]}function pe(e,t){return e.nodes[t]}function _e(e,t){return e.nodes[t]}function me(e,t){return e.nodes[t]}function ye(e,t){return e.nodes[t]}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ge(e,t,n,r){var i="ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '"+t+"'. Current value: '"+n+"'.";return r&&(i+=" It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),function(e,t){var n=new Error(e);return ve(n,t),n}(i,e)}function ve(e,t){e[Cr]=t,e[xr]=t.logError.bind(t)}function be(e){return new Error("ViewDestroyedError: Attempt to use a destroyed view: "+e)}function Me(e){var t=po.get(e);return t||(t=c(e)+"_"+po.size,po.set(e,t)),t}function we(e){return{id:_o,styles:e.styles,encapsulation:e.encapsulation,data:e.data}}function Le(e,t,n,r){var i=e.oldValues;return!(!(2&e.state)&&l(i[t.bindingIndex+n],r))}function ke(e,t,n,r){return!!Le(e,t,n,r)&&(e.oldValues[t.bindingIndex+n]=r,!0)}function Te(e,t,n,r){var i=e.oldValues[t.bindingIndex+n];if(1&e.state||!ae(i,r))throw ge(ho.createDebugContext(e,t.nodeIndex),i,r,0!=(1&e.state))}function Ye(e){for(var t=e;t;)2&t.def.flags&&(t.state|=8),t=t.viewContainerParent||t.parent}function Se(e,t){for(var n=e;n&&n!==t;)n.state|=64,n=n.viewContainerParent||n.parent}function De(e,t,n,r){try{return Ye(33554432&e.def.nodes[t].flags?pe(e,t).componentView:e),ho.handleEvent(e,t,n,r)}catch(t){e.root.errorHandler.handleError(t)}}function Ce(e){if(e.parent){return pe(e.parent,e.parentNodeDef.nodeIndex)}return null}function Oe(e){return e.parent?e.parentNodeDef.parent:null}function xe(e,t){switch(201347067&t.flags){case 1:return pe(e,t.nodeIndex).renderElement;case 2:return fe(e,t.nodeIndex).renderText}}function Ee(e,t){return e?e+":"+t:t}function je(e){return!!e.parent&&!!(32768&e.parentNodeDef.flags)}function Pe(e){return!(!e.parent||32768&e.parentNodeDef.flags)}function Ae(e){return 1<<e%32}function He(e){var t={},n=0,r={};return e&&e.forEach(function(e){var i=e[0],o=e[1];"number"==typeof i?(t[i]=o,n|=Ae(i)):r[i]=o}),{matchedQueries:t,references:r,matchedQueryIds:n}}function Ie(e){return e.map(function(e){var t,n;return Array.isArray(e)?(n=e[0],t=e[1]):(n=0,t=e),{flags:n,token:t,tokenKey:Me(t)}})}function Ne(e,t,n){var r=n.renderParent;return r?0==(1&r.flags)||0==(33554432&r.flags)||r.element.componentRendererType&&r.element.componentRendererType.encapsulation===Zn.Native?pe(e,n.renderParent.nodeIndex).renderElement:void 0:t}function Ve(e){var t=go.get(e);return t||((t=e(function(){return fo})).factory=e,go.set(e,t)),t}function Fe(e,t,n,r,i){3===t&&(n=e.renderer.parentNode(xe(e,e.def.lastRenderRootNode))),Re(e,t,0,e.def.nodes.length-1,n,r,i)}function Re(e,t,n,r,i,o,a){for(var s=n;s<=r;s++){var u=e.def.nodes[s];11&u.flags&&ze(e,u,t,i,o,a),s+=u.childCount}}function We(e,t,n,r,i,o){for(var a=e;a&&!je(a);)a=a.parent;for(var s=a.parent,u=Oe(a),l=u.nodeIndex+1,c=u.nodeIndex+u.childCount,d=l;d<=c;d++){var h=s.def.nodes[d];h.ngContentIndex===t&&ze(s,h,n,r,i,o),d+=h.childCount}if(!s.parent){var f=e.root.projectableNodes[t];if(f)for(d=0;d<f.length;d++)Ge(e,f[d],n,r,i,o)}}function ze(e,t,n,r,i,o){if(8&t.flags)We(e,t.ngContent.index,n,r,i,o);else{var a=xe(e,t);if(3===n&&33554432&t.flags&&48&t.bindingFlags){if(16&t.bindingFlags&&Ge(e,a,n,r,i,o),32&t.bindingFlags){Ge(pe(e,t.nodeIndex).componentView,a,n,r,i,o)}}else Ge(e,a,n,r,i,o);if(16777216&t.flags)for(var s=pe(e,t.nodeIndex).viewContainer._embeddedViews,u=0;u<s.length;u++)Fe(s[u],n,r,i,o);1&t.flags&&!t.element.name&&Re(e,n,t.nodeIndex+1,t.nodeIndex+t.childCount,r,i,o)}}function Ge(e,t,n,r,i,o){var a=e.renderer;switch(n){case 1:a.appendChild(r,t);break;case 2:a.insertBefore(r,t,i);break;case 3:a.removeChild(r,t);break;case 0:o.push(t)}}function Ue(e){if(":"===e[0]){var t=e.match(vo);return[t[1],t[2]]}return["",e]}function Be(e){for(var t=0,n=0;n<e.length;n++)t|=e[n].flags;return t}function Je(e,t,n,r,i,o){e|=1;var a=He(t),s=a.matchedQueries,u=a.references;return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,flags:e,checkIndex:-1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:s,matchedQueryIds:a.matchedQueryIds,references:u,ngContentIndex:n,childCount:r,bindings:[],bindingFlags:0,outputs:[],element:{ns:null,name:null,attrs:null,template:o?Ve(o):null,componentProvider:null,componentView:null,componentRendererType:null,publicProviders:null,allProviders:null,handleEvent:i||fo},provider:null,text:null,query:null,ngContent:null}}function Ke(e,t,n,r,i,o,a,s,u,l,c,d){void 0===a&&(a=[]),l||(l=fo);var h=He(n),f=h.matchedQueries,p=h.references,_=h.matchedQueryIds,m=null,y=null;o&&(m=(P=Ue(o))[0],y=P[1]),s=s||[];for(var g=new Array(s.length),v=0;v<s.length;v++){var b=s[v],M=b[0],w=b[1],L=b[2],k=Ue(w),T=k[0],Y=k[1],S=void 0,D=void 0;switch(15&M){case 4:D=L;break;case 1:case 8:S=L}g[v]={flags:M,ns:T,name:Y,nonMinifiedName:Y,securityContext:S,suffix:D}}u=u||[];for(var C=new Array(u.length),v=0;v<u.length;v++){var O=u[v],x=O[0],E=O[1];C[v]={type:0,target:x,eventName:E,propName:null}}var j=(a=a||[]).map(function(e){var t=e[0],n=e[1],r=Ue(t);return[r[0],r[1],n]});return d=function(e){if(e&&e.id===_o){var t=null!=e.encapsulation&&e.encapsulation!==Zn.None||e.styles.length||Object.keys(e.data).length;e.id=t?"c"+yo++:mo}return e&&e.id===mo&&(e=null),e||null}(d),c&&(t|=33554432),t|=1,{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:f,matchedQueryIds:_,references:p,ngContentIndex:r,childCount:i,bindings:g,bindingFlags:Be(g),outputs:C,element:{ns:m,name:y,attrs:j,template:null,componentProvider:null,componentView:c||null,componentRendererType:d,publicProviders:null,allProviders:null,handleEvent:l||fo},provider:null,text:null,query:null,ngContent:null};var P}function $e(e,t,n){var r,i=n.element,o=e.root.selectorOrNode,a=e.renderer;if(e.parent||!o){r=i.name?a.createElement(i.name,i.ns):a.createComment("");var s=Ne(e,t,n);s&&a.appendChild(s,r)}else r=a.selectRootElement(o);if(i.attrs)for(var u=0;u<i.attrs.length;u++){var l=i.attrs[u],c=l[0],d=l[1],h=l[2];a.setAttribute(r,d,h,c)}return r}function qe(e,t,n,r){for(var i=0;i<n.outputs.length;i++){var o=n.outputs[i],a=function(e,t,n){return function(r){return De(e,t,n,r)}}(e,n.nodeIndex,Ee(o.target,o.eventName)),s=o.target,u=e;"component"===o.target&&(s=null,u=t);var l=u.renderer.listen(s||r,o.eventName,a);e.disposables[n.outputIndex+i]=l}}function Ze(e,t,n,r){if(!ke(e,t,n,r))return!1;var i=t.bindings[n],o=pe(e,t.nodeIndex),a=o.renderElement,s=i.name;switch(15&i.flags){case 1:!function(e,t,n,r,i,o){var a=t.securityContext,s=a?e.root.sanitizer.sanitize(a,o):o;s=null!=s?s.toString():null;var u=e.renderer;null!=o?u.setAttribute(n,i,s,r):u.removeAttribute(n,i,r)}(e,i,a,i.ns,s,r);break;case 2:!function(e,t,n,r){var i=e.renderer;r?i.addClass(t,n):i.removeClass(t,n)}(e,a,s,r);break;case 4:!function(e,t,n,r,i){var o=e.root.sanitizer.sanitize(lo.STYLE,i);if(null!=o){o=o.toString();var a=t.suffix;null!=a&&(o+=a)}else o=null;var s=e.renderer;null!=o?s.setStyle(n,r,o):s.removeStyle(n,r)}(e,i,a,s,r);break;case 8:!function(e,t,n,r,i){var o=t.securityContext,a=o?e.root.sanitizer.sanitize(o,i):i;e.renderer.setProperty(n,r,a)}(33554432&t.flags&&32&i.flags?o.componentView:e,i,a,s,r)}return!0}function Qe(e,t,n,r){n=h(n);return{index:-1,deps:Ie(r),flags:e,token:t,value:n}}function Xe(e){for(var t={},n=0;n<e.length;n++){var r=e[n];r.index=n,t[Me(r.token)]=r}return{factory:null,providersByKey:t,providers:e}}function et(e,t,n){if(void 0===n&&(n=mr.THROW_IF_NOT_FOUND),8&t.flags)return t.token;if(2&t.flags&&(n=null),1&t.flags)return e._parent.get(t.token,n);var r=t.tokenKey;switch(r){case Mo:case wo:return e}var i=e._def.providersByKey[r];if(i){var o=e._providers[i.index];return void 0===o&&(o=e._providers[i.index]=tt(e,i)),o===bo?void 0:o}return e._parent.get(t.token,n)}function tt(e,t){var n;switch(201347067&t.flags){case 512:n=function(e,t,n){var r=n.length;switch(r){case 0:return new t;case 1:return new t(et(e,n[0]));case 2:return new t(et(e,n[0]),et(e,n[1]));case 3:return new t(et(e,n[0]),et(e,n[1]),et(e,n[2]));default:for(var i=new Array(r),o=0;o<r;o++)i[o]=et(e,n[o]);return new(t.bind.apply(t,[void 0].concat(i)))}}(e,t.value,t.deps);break;case 1024:n=function(e,t,n){var r=n.length;switch(r){case 0:return t();case 1:return t(et(e,n[0]));case 2:return t(et(e,n[0]),et(e,n[1]));case 3:return t(et(e,n[0]),et(e,n[1]),et(e,n[2]));default:for(var i=Array(r),o=0;o<r;o++)i[o]=et(e,n[o]);return t.apply(void 0,i)}}(e,t.value,t.deps);break;case 2048:n=et(e,t.deps[0]);break;case 256:n=t.value}return void 0===n?bo:n}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function nt(e,t,n,r){var i=t.viewContainer._embeddedViews;null!==n&&void 0!==n||(n=i.length),r.viewContainerParent=e,at(i,n,r),function(e,t){var n=Ce(t);if(!n||n===e||16&t.state)return;t.state|=16;var r=n.template._projectedViews;r||(r=n.template._projectedViews=[]);r.push(t),function(e,t){if(4&t.flags)return;e.nodeFlags|=4,t.flags|=4;var n=t.parent;for(;n;)n.childFlags|=4,n=n.parent}(t.parent.def,t.parentNodeDef)}(t,r),ho.dirtyParentQueries(r);it(t,n>0?i[n-1]:null,r)}function rt(e,t){var n=e.viewContainer._embeddedViews;if((null==t||t>=n.length)&&(t=n.length-1),t<0)return null;var r=n[t];return r.viewContainerParent=null,st(n,t),ho.dirtyParentQueries(r),ot(r),r}function it(e,t,n){var r=t?xe(t,t.def.lastRenderRootNode):e.renderElement;Fe(n,2,n.renderer.parentNode(r),n.renderer.nextSibling(r),void 0)}function ot(e){Fe(e,3,null,null,void 0)}function at(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function st(e,t){t>=e.length-1?e.pop():e.splice(t,1)}function ut(e,t,n,r,i,o){return new ko(e,t,n,r,i,o)}function lt(e,t,n){return new Yo(e,t,n)}function ct(e){return new So(e)}function dt(e,t){return new Do(e,t)}function ht(e,t){return new Co(e,t)}function ft(e,t){var n=e.def.nodes[t];if(1&n.flags){var r=pe(e,n.nodeIndex);return n.element.template?r.template:r.renderElement}if(2&n.flags)return fe(e,n.nodeIndex).renderText;if(20240&n.flags)return _e(e,n.nodeIndex).instance;throw new Error("Illegal state: read nodeValue for node index "+t)}function pt(e){return new Oo(e.renderer)}function _t(e,t,n,r){return new xo(e,t,n,r)}function mt(e,t,n,r,i,o,a,s){var u=[];if(a)for(var l in a){var c=a[l],d=c[0],h=c[1];u[d]={flags:8,name:l,nonMinifiedName:h,ns:null,securityContext:null,suffix:null}}var f=[];if(s)for(var p in s)f.push({type:1,propName:p,target:null,eventName:s[p]});return t|=16384,gt(e,t,n,r,i,i,o,u,f)}function yt(e,t,n,r,i){return gt(-1,e,t,0,n,r,i)}function gt(e,t,n,r,i,o,a,s,u){var l=He(n),c=l.matchedQueries,d=l.references,f=l.matchedQueryIds;u||(u=[]),s||(s=[]),o=h(o);var p=Ie(a);return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:c,matchedQueryIds:f,references:d,ngContentIndex:-1,childCount:r,bindings:s,bindingFlags:Be(s),outputs:u,element:null,provider:{token:i,value:o,deps:p},text:null,query:null,ngContent:null}}function vt(e,t){return wt(e,t)}function bt(e,t){for(var n=e;n.parent&&!je(n);)n=n.parent;return Lt(n.parent,Oe(n),!0,t.provider.value,t.provider.deps)}function Mt(e,t){var n=(32768&t.flags)>0,r=Lt(e,t.parent,n,t.provider.value,t.provider.deps);if(t.outputs.length)for(var i=0;i<t.outputs.length;i++){var o=t.outputs[i],a=r[o.propName].subscribe(function(e,t,n){return function(r){return De(e,t,n,r)}}(e,t.parent.nodeIndex,o.eventName));e.disposables[t.outputIndex+i]=a.unsubscribe.bind(a)}return r}function wt(e,t){var n=(8192&t.flags)>0,r=t.provider;switch(201347067&t.flags){case 512:return Lt(e,t.parent,n,r.value,r.deps);case 1024:return function(e,t,n,r,i){var o=i.length;switch(o){case 0:return r();case 1:return r(kt(e,t,n,i[0]));case 2:return r(kt(e,t,n,i[0]),kt(e,t,n,i[1]));case 3:return r(kt(e,t,n,i[0]),kt(e,t,n,i[1]),kt(e,t,n,i[2]));default:for(var a=Array(o),s=0;s<o;s++)a[s]=kt(e,t,n,i[s]);return r.apply(void 0,a)}}(e,t.parent,n,r.value,r.deps);case 2048:return kt(e,t.parent,n,r.deps[0]);case 256:return r.value}}function Lt(e,t,n,r,i){var o=i.length;switch(o){case 0:return new r;case 1:return new r(kt(e,t,n,i[0]));case 2:return new r(kt(e,t,n,i[0]),kt(e,t,n,i[1]));case 3:return new r(kt(e,t,n,i[0]),kt(e,t,n,i[1]),kt(e,t,n,i[2]));default:for(var a=new Array(o),s=0;s<o;s++)a[s]=kt(e,t,n,i[s]);return new(r.bind.apply(r,[void 0].concat(a)))}}function kt(e,t,n,r,i){if(void 0===i&&(i=mr.THROW_IF_NOT_FOUND),8&r.flags)return r.token;var o=e;2&r.flags&&(i=null);var a=r.tokenKey;for(a===Io&&(n=!(!t||!t.element.componentView)),t&&1&r.flags&&(n=!1,t=t.parent);e;){if(t)switch(a){case Eo:return pt(s=Tt(e,t,n));case jo:var s=Tt(e,t,n);return s.renderer;case Po:return new xi(pe(e,t.nodeIndex).renderElement);case Ao:return pe(e,t.nodeIndex).viewContainer;case Ho:if(t.element.template)return pe(e,t.nodeIndex).template;break;case Io:return ct(Tt(e,t,n));case No:return ht(e,t);default:var u=(n?t.element.allProviders:t.element.publicProviders)[a];if(u){var l=_e(e,u.nodeIndex);return l||(l={instance:wt(e,u)},e.nodes[u.nodeIndex]=l),l.instance}}n=je(e),t=Oe(e),e=e.parent}var c=o.root.injector.get(r.token,Vo);return c!==Vo||i===Vo?c:o.root.ngModule.injector.get(r.token,i)}function Tt(e,t,n){var r;if(n)r=pe(e,t.nodeIndex).componentView;else for(r=e;r.parent&&!je(r);)r=r.parent;return r}function Yt(e,t,n,r,i,o){if(32768&n.flags){var a=pe(e,n.parent.nodeIndex).componentView;2&a.def.flags&&(a.state|=8)}var s=n.bindings[r].name;if(t.instance[s]=i,524288&n.flags){o=o||{};var u=e.oldValues[n.bindingIndex+r];u instanceof Wi&&(u=u.wrapped);o[n.bindings[r].nonMinifiedName]=new zi(u,i,0!=(2&e.state))}return e.oldValues[n.bindingIndex+r]=i,o}function St(e,t){if(e.def.nodeFlags&t)for(var n=e.def.nodes,r=0;r<n.length;r++){var i=n[r],o=i.parent;for(!o&&i.flags&t&&Dt(e,r,i.flags&t),0==(i.childFlags&t)&&(r+=i.childCount);o&&1&o.flags&&r===o.nodeIndex+o.childCount;)o.directChildFlags&t&&function(e,t,n){for(var r=t.nodeIndex+1;r<=t.nodeIndex+t.childCount;r++){var i=e.def.nodes[r];i.flags&n&&Dt(e,r,i.flags&n),r+=i.childCount}}(e,o,t),o=o.parent}}function Dt(e,t,n){var r=_e(e,t);if(r){var i=r.instance;i&&(ho.setCurrentNode(e,t),1048576&n&&i.ngAfterContentInit(),2097152&n&&i.ngAfterContentChecked(),4194304&n&&i.ngAfterViewInit(),8388608&n&&i.ngAfterViewChecked(),131072&n&&i.ngOnDestroy())}}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ct(e,t,n){var r=[];for(var i in n){var o=n[i];r.push({propName:i,bindingType:o})}return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,ngContentIndex:-1,matchedQueries:{},matchedQueryIds:0,references:{},childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:{id:t,filterId:Ae(t),bindings:r},ngContent:null}}function Ot(){return new Ei}function xt(e){for(var t=e.def.nodeMatchedQueries;e.parent&&Pe(e);){var n=e.parentNodeDef;e=e.parent;for(var r=n.nodeIndex+n.childCount,i=0;i<=r;i++){67108864&(o=e.def.nodes[i]).flags&&536870912&o.flags&&(o.query.filterId&t)===o.query.filterId&&ye(e,i).setDirty(),!(1&o.flags&&i+o.childCount<n.nodeIndex)&&67108864&o.childFlags&&536870912&o.childFlags||(i+=o.childCount)}}if(134217728&e.def.nodeFlags)for(i=0;i<e.def.nodes.length;i++){var o=e.def.nodes[i];134217728&o.flags&&536870912&o.flags&&ye(e,i).setDirty(),i+=o.childCount}}function Et(e,t){var n=ye(e,t.nodeIndex);if(n.dirty){var r,i=void 0;if(67108864&t.flags){var o=t.parent.parent;i=jt(e,o.nodeIndex,o.nodeIndex+o.childCount,t.query,[]),r=_e(e,t.parent.nodeIndex).instance}else 134217728&t.flags&&(i=jt(e,0,e.def.nodes.length-1,t.query,[]),r=e.component);n.reset(i);for(var a=t.query.bindings,s=!1,u=0;u<a.length;u++){var l=a[u],c=void 0;switch(l.bindingType){case 0:c=n.first;break;case 1:c=n,s=!0}r[l.propName]=c}s&&n.notifyOnChanges()}}function jt(e,t,n,r,i){for(var o=t;o<=n;o++){var a=e.def.nodes[o],s=a.matchedQueries[r.id];if(null!=s&&i.push(Pt(e,a,s)),1&a.flags&&a.element.template&&(a.element.template.nodeMatchedQueries&r.filterId)===r.filterId){var u=pe(e,o);if((a.childMatchedQueries&r.filterId)===r.filterId&&(jt(e,o+1,o+a.childCount,r,i),o+=a.childCount),16777216&a.flags)for(var l=u.viewContainer._embeddedViews,c=0;c<l.length;c++){var d=l[c],h=Ce(d);h&&h===u&&jt(d,0,d.def.nodes.length-1,r,i)}var f=u.template._projectedViews;if(f)for(c=0;c<f.length;c++){var p=f[c];jt(p,0,p.def.nodes.length-1,r,i)}}(a.childMatchedQueries&r.filterId)!==r.filterId&&(o+=a.childCount)}return i}function Pt(e,t,n){if(null!=n)switch(n){case 1:return pe(e,t.nodeIndex).renderElement;case 0:return new xi(pe(e,t.nodeIndex).renderElement);case 2:return pe(e,t.nodeIndex).template;case 3:return pe(e,t.nodeIndex).viewContainer;case 4:return _e(e,t.nodeIndex).instance}}function At(e,t,n){var r=Ne(e,t,n);if(r){We(e,n.ngContent.index,1,r,null,void 0)}}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ht(e,t,n){for(var r=new Array(n.length-1),i=1;i<n.length;i++)r[i-1]={flags:8,name:null,ns:null,nonMinifiedName:null,securityContext:null,suffix:n[i]};return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:2,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:t,childCount:0,bindings:r,bindingFlags:8,outputs:[],element:null,provider:null,text:{prefix:n[0]},query:null,ngContent:null}}function It(e,t,n){var r,i=e.renderer;r=i.createText(n.text.prefix);var o=Ne(e,t,n);return o&&i.appendChild(o,r),{renderText:r}}function Nt(e,t){return(null!=e?e.toString():"")+t.suffix}function Vt(e,t,n,r){for(var i=0,o=0,a=0,s=0,u=0,l=null,c=null,d=!1,h=!1,f=null,p=0;p<t.length;p++){var _=t[p];if(_.nodeIndex=p,_.parent=l,_.bindingIndex=i,_.outputIndex=o,_.renderParent=c,a|=_.flags,u|=_.matchedQueryIds,_.element){var m=_.element;m.publicProviders=l?l.element.publicProviders:Object.create(null),m.allProviders=m.publicProviders,d=!1,h=!1,_.element.template&&(u|=_.element.template.nodeMatchedQueries)}if(function(e,t,n){var r=t.element&&t.element.template;if(r){if(!r.lastRenderRootNode)throw new Error("Illegal State: Embedded templates without nodes are not allowed!");if(r.lastRenderRootNode&&16777216&r.lastRenderRootNode.flags)throw new Error("Illegal State: Last root node of a template can't have embedded views, at index "+t.nodeIndex+"!")}if(20224&t.flags){if(0==(1&(e?e.flags:0)))throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index "+t.nodeIndex+"!")}if(t.query){if(67108864&t.flags&&(!e||0==(16384&e.flags)))throw new Error("Illegal State: Content Query nodes need to be children of directives, at index "+t.nodeIndex+"!");if(134217728&t.flags&&e)throw new Error("Illegal State: View Query nodes have to be top level nodes, at index "+t.nodeIndex+"!")}if(t.childCount){var i=e?e.nodeIndex+e.childCount:n-1;if(t.nodeIndex<=i&&t.nodeIndex+t.childCount>i)throw new Error("Illegal State: childCount of node leads outside of parent, at index "+t.nodeIndex+"!")}}(l,_,t.length),i+=_.bindings.length,o+=_.outputs.length,!c&&3&_.flags&&(f=_),20224&_.flags){d||(d=!0,l.element.publicProviders=Object.create(l.element.publicProviders),l.element.allProviders=l.element.publicProviders);var y=0!=(8192&_.flags),g=0!=(32768&_.flags);!y||g?l.element.publicProviders[Me(_.provider.token)]=_:(h||(h=!0,l.element.allProviders=Object.create(l.element.publicProviders)),l.element.allProviders[Me(_.provider.token)]=_),g&&(l.element.componentProvider=_)}if(l?(l.childFlags|=_.flags,l.directChildFlags|=_.flags,l.childMatchedQueries|=_.matchedQueryIds,_.element&&_.element.template&&(l.childMatchedQueries|=_.element.template.nodeMatchedQueries)):s|=_.flags,_.childCount>0)l=_,Ft(_)||(c=_);else for(;l&&p===l.nodeIndex+l.childCount;){var v=l.parent;v&&(v.childFlags|=l.childFlags,v.childMatchedQueries|=l.childMatchedQueries),c=(l=v)&&Ft(l)?l.renderParent:l}}return{factory:null,nodeFlags:a,rootNodeFlags:s,nodeMatchedQueries:u,flags:e,nodes:t,updateDirectives:n||fo,updateRenderer:r||fo,handleEvent:function(e,n,r,i){return t[n].element.handleEvent(e,r,i)},bindingCount:i,outputCount:o,lastRenderRootNode:f}}function Ft(e){return 0!=(1&e.flags)&&null===e.element.name}function Rt(e,t,n,r){var i=Gt(e.root,e.renderer,e,t,n);return Ut(i,e.component,r),Bt(i),i}function Wt(e,t,n){var r=Gt(e,e.renderer,null,null,t);return Ut(r,n,n),Bt(r),r}function zt(e,t,n,r){var i,o=t.element.componentRendererType;return i=o?e.root.rendererFactory.createRenderer(r,o):e.root.renderer,Gt(e.root,i,e,t.element.componentProvider,n)}function Gt(e,t,n,r,i){var o=new Array(i.nodes.length),a=i.outputCount?new Array(i.outputCount):null;return{def:i,parent:n,viewContainerParent:null,parentNodeDef:r,context:null,component:null,nodes:o,state:13,root:e,renderer:t,oldValues:new Array(i.bindingCount),disposables:a}}function Ut(e,t,n){e.component=t,e.context=n}function Bt(e){var t;if(je(e)){var n=e.parentNodeDef;t=pe(e.parent,n.parent.nodeIndex).renderElement}for(var r=e.def,i=e.nodes,o=0;o<r.nodes.length;o++){var a=r.nodes[o];ho.setCurrentNode(e,o);var s=void 0;switch(201347067&a.flags){case 1:var u=$e(e,t,a),l=void 0;if(33554432&a.flags){var c=Ve(a.element.componentView);l=ho.createComponentView(e,a,c,u)}qe(e,l,a,u),s={renderElement:u,componentView:l,viewContainer:null,template:a.element.template?dt(e,a):void 0},16777216&a.flags&&(s.viewContainer=lt(e,a,s));break;case 2:s=It(e,t,a);break;case 512:case 1024:case 2048:case 256:if(!((s=i[o])||4096&a.flags)){s={instance:d=vt(e,a)}}break;case 16:s={instance:d=bt(e,a)};break;case 16384:if(!(s=i[o])){var d=Mt(e,a);s={instance:d}}if(32768&a.flags){Ut(pe(e,a.parent.nodeIndex).componentView,s.instance,s.instance)}break;case 32:case 64:case 128:s={value:void 0};break;case 67108864:case 134217728:s=Ot();break;case 8:At(e,t,a),s=void 0}i[o]=s}en(e,Fo.CreateViewNodes),on(e,201326592,268435456,0)}function Jt(e){qt(e),ho.updateDirectives(e,1),tn(e,Fo.CheckNoChanges),ho.updateRenderer(e,1),en(e,Fo.CheckNoChanges),e.state&=-97}function Kt(e){1&e.state?(e.state&=-2,e.state|=2):e.state&=-3,qt(e),ho.updateDirectives(e,0),tn(e,Fo.CheckAndUpdate),on(e,67108864,536870912,0),St(e,2097152|(2&e.state?1048576:0)),ho.updateRenderer(e,0),en(e,Fo.CheckAndUpdate),on(e,134217728,536870912,0),St(e,8388608|(2&e.state?4194304:0)),2&e.def.flags&&(e.state&=-9),e.state&=-97}function $t(e,t,n,r,i,o,a,s,u,l,c,d,h){return 0===n?function(e,t,n,r,i,o,a,s,u,l,c,d){switch(201347067&t.flags){case 1:return function(e,t,n,r,i,o,a,s,u,l,c,d){var h=t.bindings.length,f=!1;return h>0&&Ze(e,t,0,n)&&(f=!0),h>1&&Ze(e,t,1,r)&&(f=!0),h>2&&Ze(e,t,2,i)&&(f=!0),h>3&&Ze(e,t,3,o)&&(f=!0),h>4&&Ze(e,t,4,a)&&(f=!0),h>5&&Ze(e,t,5,s)&&(f=!0),h>6&&Ze(e,t,6,u)&&(f=!0),h>7&&Ze(e,t,7,l)&&(f=!0),h>8&&Ze(e,t,8,c)&&(f=!0),h>9&&Ze(e,t,9,d)&&(f=!0),f}(e,t,n,r,i,o,a,s,u,l,c,d);case 2:return function(e,t,n,r,i,o,a,s,u,l,c,d){var h=!1,f=t.bindings,p=f.length;if(p>0&&ke(e,t,0,n)&&(h=!0),p>1&&ke(e,t,1,r)&&(h=!0),p>2&&ke(e,t,2,i)&&(h=!0),p>3&&ke(e,t,3,o)&&(h=!0),p>4&&ke(e,t,4,a)&&(h=!0),p>5&&ke(e,t,5,s)&&(h=!0),p>6&&ke(e,t,6,u)&&(h=!0),p>7&&ke(e,t,7,l)&&(h=!0),p>8&&ke(e,t,8,c)&&(h=!0),p>9&&ke(e,t,9,d)&&(h=!0),h){var _=t.text.prefix;p>0&&(_+=Nt(n,f[0])),p>1&&(_+=Nt(r,f[1])),p>2&&(_+=Nt(i,f[2])),p>3&&(_+=Nt(o,f[3])),p>4&&(_+=Nt(a,f[4])),p>5&&(_+=Nt(s,f[5])),p>6&&(_+=Nt(u,f[6])),p>7&&(_+=Nt(l,f[7])),p>8&&(_+=Nt(c,f[8])),p>9&&(_+=Nt(d,f[9]));var m=fe(e,t.nodeIndex).renderText;e.renderer.setValue(m,_)}return h}(e,t,n,r,i,o,a,s,u,l,c,d);case 16384:return function(e,t,n,r,i,o,a,s,u,l,c,d){var h=_e(e,t.nodeIndex),f=h.instance,p=!1,_=void 0,m=t.bindings.length;return m>0&&Le(e,t,0,n)&&(p=!0,_=Yt(e,h,t,0,n,_)),m>1&&Le(e,t,1,r)&&(p=!0,_=Yt(e,h,t,1,r,_)),m>2&&Le(e,t,2,i)&&(p=!0,_=Yt(e,h,t,2,i,_)),m>3&&Le(e,t,3,o)&&(p=!0,_=Yt(e,h,t,3,o,_)),m>4&&Le(e,t,4,a)&&(p=!0,_=Yt(e,h,t,4,a,_)),m>5&&Le(e,t,5,s)&&(p=!0,_=Yt(e,h,t,5,s,_)),m>6&&Le(e,t,6,u)&&(p=!0,_=Yt(e,h,t,6,u,_)),m>7&&Le(e,t,7,l)&&(p=!0,_=Yt(e,h,t,7,l,_)),m>8&&Le(e,t,8,c)&&(p=!0,_=Yt(e,h,t,8,c,_)),m>9&&Le(e,t,9,d)&&(p=!0,_=Yt(e,h,t,9,d,_)),_&&f.ngOnChanges(_),2&e.state&&65536&t.flags&&f.ngOnInit(),262144&t.flags&&f.ngDoCheck(),p}(e,t,n,r,i,o,a,s,u,l,c,d);case 32:case 64:case 128:return function(e,t,n,r,i,o,a,s,u,l,c,d){var h=t.bindings,f=!1,p=h.length;if(p>0&&ke(e,t,0,n)&&(f=!0),p>1&&ke(e,t,1,r)&&(f=!0),p>2&&ke(e,t,2,i)&&(f=!0),p>3&&ke(e,t,3,o)&&(f=!0),p>4&&ke(e,t,4,a)&&(f=!0),p>5&&ke(e,t,5,s)&&(f=!0),p>6&&ke(e,t,6,u)&&(f=!0),p>7&&ke(e,t,7,l)&&(f=!0),p>8&&ke(e,t,8,c)&&(f=!0),p>9&&ke(e,t,9,d)&&(f=!0),f){var _=me(e,t.nodeIndex),m=void 0;switch(201347067&t.flags){case 32:m=new Array(h.length),p>0&&(m[0]=n),p>1&&(m[1]=r),p>2&&(m[2]=i),p>3&&(m[3]=o),p>4&&(m[4]=a),p>5&&(m[5]=s),p>6&&(m[6]=u),p>7&&(m[7]=l),p>8&&(m[8]=c),p>9&&(m[9]=d);break;case 64:m={},p>0&&(m[h[0].name]=n),p>1&&(m[h[1].name]=r),p>2&&(m[h[2].name]=i),p>3&&(m[h[3].name]=o),p>4&&(m[h[4].name]=a),p>5&&(m[h[5].name]=s),p>6&&(m[h[6].name]=u),p>7&&(m[h[7].name]=l),p>8&&(m[h[8].name]=c),p>9&&(m[h[9].name]=d);break;case 128:var y=n;switch(p){case 1:m=y.transform(n);break;case 2:m=y.transform(r);break;case 3:m=y.transform(r,i);break;case 4:m=y.transform(r,i,o);break;case 5:m=y.transform(r,i,o,a);break;case 6:m=y.transform(r,i,o,a,s);break;case 7:m=y.transform(r,i,o,a,s,u);break;case 8:m=y.transform(r,i,o,a,s,u,l);break;case 9:m=y.transform(r,i,o,a,s,u,l,c);break;case 10:m=y.transform(r,i,o,a,s,u,l,c,d)}}_.value=m}return f}(e,t,n,r,i,o,a,s,u,l,c,d);default:throw"unreachable"}}(e,t,r,i,o,a,s,u,l,c,d,h):function(e,t,n){switch(201347067&t.flags){case 1:return function(e,t,n){for(var r=!1,i=0;i<n.length;i++)Ze(e,t,i,n[i])&&(r=!0);return r}(e,t,n);case 2:return function(e,t,n){for(var r=t.bindings,i=!1,o=0;o<n.length;o++)ke(e,t,o,n[o])&&(i=!0);if(i){for(var a="",o=0;o<n.length;o++)a+=Nt(n[o],r[o]);a=t.text.prefix+a;var s=fe(e,t.nodeIndex).renderText;e.renderer.setValue(s,a)}return i}(e,t,n);case 16384:return function(e,t,n){for(var r=_e(e,t.nodeIndex),i=r.instance,o=!1,a=void 0,s=0;s<n.length;s++)Le(e,t,s,n[s])&&(o=!0,a=Yt(e,r,t,s,n[s],a));return a&&i.ngOnChanges(a),2&e.state&&65536&t.flags&&i.ngOnInit(),262144&t.flags&&i.ngDoCheck(),o}(e,t,n);case 32:case 64:case 128:return function(e,t,n){for(var r=t.bindings,i=!1,o=0;o<n.length;o++)ke(e,t,o,n[o])&&(i=!0);if(i){var a=me(e,t.nodeIndex),s=void 0;switch(201347067&t.flags){case 32:s=n;break;case 64:for(s={},o=0;o<n.length;o++)s[r[o].name]=n[o];break;case 128:var u=n[0],l=n.slice(1);s=u.transform.apply(u,l)}a.value=s}return i}(e,t,n);default:throw"unreachable"}}(e,t,r)}function qt(e){var t=e.def;if(4&t.nodeFlags)for(var n=0;n<t.nodes.length;n++){var r=t.nodes[n];if(4&r.flags){var i=pe(e,n).template._projectedViews;if(i)for(var o=0;o<i.length;o++){var a=i[o];a.state|=32,Se(a,e)}}else 0==(4&r.childFlags)&&(n+=r.childCount)}}function Zt(e,t,n,r,i,o,a,s,u,l,c,d,h){return 0===n?function(e,t,n,r,i,o,a,s,u,l,c,d){var h=t.bindings.length;h>0&&Te(e,t,0,n);h>1&&Te(e,t,1,r);h>2&&Te(e,t,2,i);h>3&&Te(e,t,3,o);h>4&&Te(e,t,4,a);h>5&&Te(e,t,5,s);h>6&&Te(e,t,6,u);h>7&&Te(e,t,7,l);h>8&&Te(e,t,8,c);h>9&&Te(e,t,9,d)}(e,t,r,i,o,a,s,u,l,c,d,h):function(e,t,n){for(var r=0;r<n.length;r++)Te(e,t,r,n[r])}(e,t,r),!1}function Qt(e,t){if(ye(e,t.nodeIndex).dirty)throw ge(ho.createDebugContext(e,t.nodeIndex),"Query "+t.query.id+" not dirty","Query "+t.query.id+" dirty",0!=(1&e.state))}function Xt(e){if(!(128&e.state)){if(tn(e,Fo.Destroy),en(e,Fo.Destroy),St(e,131072),e.disposables)for(var t=0;t<e.disposables.length;t++)e.disposables[t]();!function(e){if(16&e.state){var t=Ce(e);if(t){var n=t.template._projectedViews;n&&(st(n,n.indexOf(e)),ho.dirtyParentQueries(e))}}}(e),e.renderer.destroyNode&&function(e){for(var t=e.def.nodes.length,n=0;n<t;n++){var r=e.def.nodes[n];1&r.flags?e.renderer.destroyNode(pe(e,n).renderElement):2&r.flags?e.renderer.destroyNode(fe(e,n).renderText):(67108864&r.flags||134217728&r.flags)&&ye(e,n).destroy()}}(e),je(e)&&e.renderer.destroy(),e.state|=128}}function en(e,t){var n=e.def;if(33554432&n.nodeFlags)for(var r=0;r<n.nodes.length;r++){var i=n.nodes[r];33554432&i.flags?nn(pe(e,r).componentView,t):0==(33554432&i.childFlags)&&(r+=i.childCount)}}function tn(e,t){var n=e.def;if(16777216&n.nodeFlags)for(var r=0;r<n.nodes.length;r++){var i=n.nodes[r];if(16777216&i.flags)for(var o=pe(e,r).viewContainer._embeddedViews,a=0;a<o.length;a++)nn(o[a],t);else 0==(16777216&i.childFlags)&&(r+=i.childCount)}}function nn(e,t){var n=e.state;switch(t){case Fo.CheckNoChanges:0==(128&n)&&(12==(12&n)?Jt(e):64&n&&rn(e,Fo.CheckNoChangesProjectedViews));break;case Fo.CheckNoChangesProjectedViews:0==(128&n)&&(32&n?Jt(e):64&n&&rn(e,t));break;case Fo.CheckAndUpdate:0==(128&n)&&(12==(12&n)?Kt(e):64&n&&rn(e,Fo.CheckAndUpdateProjectedViews));break;case Fo.CheckAndUpdateProjectedViews:0==(128&n)&&(32&n?Kt(e):64&n&&rn(e,t));break;case Fo.Destroy:Xt(e);break;case Fo.CreateViewNodes:Bt(e)}}function rn(e,t){tn(e,t),en(e,t)}function on(e,t,n,r){if(e.def.nodeFlags&t&&e.def.nodeFlags&n)for(var i=e.def.nodes.length,o=0;o<i;o++){var a=e.def.nodes[o];if(a.flags&t&&a.flags&n)switch(ho.setCurrentNode(e,a.nodeIndex),r){case 0:Et(e,a);break;case 1:Qt(e,a)}a.childFlags&t&&a.childFlags&n||(o+=a.childCount)}}function an(){if(!Ro){Ro=!0;var e=$()?{setCurrentNode:Mn,createRootView:un,createEmbeddedView:cn,createComponentView:dn,createNgModuleRef:hn,overrideProvider:fn,clearProviderOverrides:pn,checkAndUpdateView:gn,checkNoChangesView:vn,destroyView:bn,createDebugContext:function(e,t){return new Ko(e,t)},handleEvent:wn,updateDirectives:Ln,updateRenderer:kn}:{setCurrentNode:function(){},createRootView:sn,createEmbeddedView:Rt,createComponentView:zt,createNgModuleRef:_t,overrideProvider:fo,clearProviderOverrides:fo,checkAndUpdateView:Kt,checkNoChangesView:Jt,destroyView:Xt,createDebugContext:function(e,t){return new Ko(e,t)},handleEvent:function(e,t,n,r){return e.def.handleEvent(e,t,n,r)},updateDirectives:function(e,t){return e.def.updateDirectives(0===t?mn:yn,e)},updateRenderer:function(e,t){return e.def.updateRenderer(0===t?mn:yn,e)}};ho.setCurrentNode=e.setCurrentNode,ho.createRootView=e.createRootView,ho.createEmbeddedView=e.createEmbeddedView,ho.createComponentView=e.createComponentView,ho.createNgModuleRef=e.createNgModuleRef,ho.overrideProvider=e.overrideProvider,ho.clearProviderOverrides=e.clearProviderOverrides,ho.checkAndUpdateView=e.checkAndUpdateView,ho.checkNoChangesView=e.checkNoChangesView,ho.destroyView=e.destroyView,ho.resolveDep=kt,ho.createDebugContext=e.createDebugContext,ho.handleEvent=e.handleEvent,ho.updateDirectives=e.updateDirectives,ho.updateRenderer=e.updateRenderer,ho.dirtyParentQueries=xt}}function sn(e,t,n,r,i,o){return Wt(ln(e,i,i.injector.get(Di),t,n),r,o)}function un(e,t,n,r,i,o){var a=i.injector.get(Di),s=ln(e,i,new $o(a),t,n),u=_n(r);return On(zo.create,Wt,null,[s,u,o])}function ln(e,t,n,r,i){var o=t.injector.get(co),a=t.injector.get(Er);return{ngModule:t,injector:e,projectableNodes:r,selectorOrNode:i,sanitizer:o,rendererFactory:n,renderer:n.createRenderer(null,null),errorHandler:a}}function cn(e,t,n,r){var i=_n(n);return On(zo.create,Rt,null,[e,t,i,r])}function dn(e,t,n,r){var i=_n(n);return On(zo.create,zt,null,[e,t,i,r])}function hn(e,t,n,r){return _t(e,t,n,function(e){var t=function(e){var t=!1,n=!1;if(0===Wo.size)return{hasOverrides:t,hasDeprecatedOverrides:n};return e.providers.forEach(function(e){var r=Wo.get(e.token);3840&e.flags&&r&&(t=!0,n=n||r.deprecatedBehavior)}),{hasOverrides:t,hasDeprecatedOverrides:n}}(e),n=t.hasOverrides,r=t.hasDeprecatedOverrides;if(!n)return e;return e=e.factory(function(){return fo}),function(e){for(var t=0;t<e.providers.length;t++){var n=e.providers[t];r&&(n.flags|=4096);var i=Wo.get(n.token);i&&(n.flags=-3841&n.flags|i.flags,n.deps=Ie(i.deps),n.value=i.value)}}(e),e}(r))}function fn(e){Wo.set(e.token,e)}function pn(){Wo.clear()}function _n(e){if(0===Wo.size)return e;var t=function(e){for(var t=[],n=null,r=0;r<e.nodes.length;r++){var i=e.nodes[r];1&i.flags&&(n=i),n&&3840&i.flags&&Wo.has(i.provider.token)&&(t.push(n.nodeIndex),n=null)}return t}(e);if(0===t.length)return e;e=e.factory(function(){return fo});for(var n=0;n<t.length;n++)!function(e,t){for(var n=t+1;n<e.nodes.length;n++){var r=e.nodes[n];if(1&r.flags)return;if(3840&r.flags){var i=r.provider,o=Wo.get(i.token);o&&(r.flags=-3841&r.flags|o.flags,i.deps=Ie(o.deps),i.value=o.value)}}}(e,t[n]);return e}function mn(e,t,n,r,i,o,a,s,u,l,c,d,h){var f=e.def.nodes[t];return $t(e,f,n,r,i,o,a,s,u,l,c,d,h),224&f.flags?me(e,t).value:void 0}function yn(e,t,n,r,i,o,a,s,u,l,c,d,h){var f=e.def.nodes[t];return Zt(e,f,n,r,i,o,a,s,u,l,c,d,h),224&f.flags?me(e,t).value:void 0}function gn(e){return On(zo.detectChanges,Kt,null,[e])}function vn(e){return On(zo.checkNoChanges,Jt,null,[e])}function bn(e){return On(zo.destroy,Xt,null,[e])}function Mn(e,t){Uo=e,Bo=t}function wn(e,t,n,r){return Mn(e,t),On(zo.handleEvent,e.def.handleEvent,null,[e,t,n,r])}function Ln(e,t){if(128&e.state)throw be(zo[Go]);return Mn(e,Sn(e,0)),e.def.updateDirectives(function(e,n,r){for(var i=[],o=3;o<arguments.length;o++)i[o-3]=arguments[o];var a=e.def.nodes[n];return 0===t?Tn(e,a,r,i):Yn(e,a,r,i),16384&a.flags&&Mn(e,Sn(e,n)),224&a.flags?me(e,a.nodeIndex).value:void 0},e)}function kn(e,t){if(128&e.state)throw be(zo[Go]);return Mn(e,Dn(e,0)),e.def.updateRenderer(function(e,n,r){for(var i=[],o=3;o<arguments.length;o++)i[o-3]=arguments[o];var a=e.def.nodes[n];return 0===t?Tn(e,a,r,i):Yn(e,a,r,i),3&a.flags&&Mn(e,Dn(e,n)),224&a.flags?me(e,a.nodeIndex).value:void 0},e)}function Tn(e,t,n,r){if($t.apply(void 0,[e,t,n].concat(r))){var i=1===n?r[0]:r;if(16384&t.flags){for(var o={},a=0;a<t.bindings.length;a++){var s=t.bindings[a],u=i[a];8&s.flags&&(o[function(e){return"ng-reflect-"+(e=e.replace(/[$@]/g,"_").replace(Jo,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"-"+e[1].toLowerCase()}))}(s.nonMinifiedName)]=function(e){try{return null!=e?e.toString().slice(0,30):e}catch(e){return"[ERROR] Exception while trying to serialize the value"}}(u))}var l=t.parent,c=pe(e,l.nodeIndex).renderElement;if(l.element.name)for(var d in o){null!=(u=o[d])?e.renderer.setAttribute(c,d,u):e.renderer.removeAttribute(c,d)}else e.renderer.setValue(c,"bindings="+JSON.stringify(o,null,2))}}}function Yn(e,t,n,r){Zt.apply(void 0,[e,t,n].concat(r))}function Sn(e,t){for(var n=t;n<e.def.nodes.length;n++){var r=e.def.nodes[n];if(16384&r.flags&&r.bindings&&r.bindings.length)return n}return null}function Dn(e,t){for(var n=t;n<e.def.nodes.length;n++){var r=e.def.nodes[n];if(3&r.flags&&r.bindings&&r.bindings.length)return n}return null}function Cn(e,t,n){for(var r in t.references)n[r]=Pt(e,t,t.references[r])}function On(e,t,n,r){var i=Go,o=Uo,a=Bo;try{Go=e;var s=t.apply(n,r);return Uo=o,Bo=a,Go=i,s}catch(e){if(function(e){return!!v(e)}(e)||!Uo)throw e;throw function(e,t){return e instanceof Error||(e=new Error(e.toString())),ve(e,t),e}(e,xn())}}function xn(){return Uo?new Ko(Uo,Bo):null}function En(e,t,n){return new Zo(e,t,n)}n.d(t,"e",function(){return Yi}),n.d(t,"U",function(){return K}),n.d(t,"X",function(){return $}),n.d(t,"T",function(){return q}),n.d(t,"y",function(){return ki}),n.d(t,"a",function(){return Kr}),n.d(t,"D",function(){return qr}),n.d(t,"C",function(){return Zr}),n.d(t,"b",function(){return Br}),n.d(t,"c",function(){return Jr}),n.d(t,"W",function(){return ie}),n.d(t,"O",function(){return gi}),n.d(t,"Z",function(){return J}),n.d(t,"v",function(){return ao}),n.d(t,"d",function(){return uo}),n.d(t,"m",function(){return pi}),n.d(t,"l",function(){return Er}),n.d(t,"I",function(){return co}),n.d(t,"J",function(){return lo}),n.d(t,"f",function(){return Wn}),n.d(t,"j",function(){return Bn}),n.d(t,"s",function(){return Kn}),n.d(t,"B",function(){return $n}),n.d(t,"E",function(){return Jn}),n.d(t,"w",function(){return qn}),n.d(t,"R",function(){return Zn}),n.d(t,"P",function(){return tr}),n.d(t,"V",function(){return d}),n.d(t,"r",function(){return mr}),n.d(t,"q",function(){return Nn}),n.d(t,"o",function(){return rr}),n.d(t,"A",function(){return ir}),n.d(t,"p",function(){return or}),n.d(t,"K",function(){return ar}),n.d(t,"M",function(){return sr}),n.d(t,"n",function(){return ur}),n.d(t,"z",function(){return _i}),n.d(t,"F",function(){return Oi}),n.d(t,"G",function(){return Di}),n.d(t,"H",function(){return Ci}),n.d(t,"h",function(){return ei}),n.d(t,"i",function(){return ai}),n.d(t,"k",function(){return xi}),n.d(t,"x",function(){return li}),n.d(t,"N",function(){return Ai}),n.d(t,"Q",function(){return Hi}),n.d(t,"g",function(){return Ii}),n.d(t,"t",function(){return Xi}),n.d(t,"u",function(){return eo}),n.d(t,"L",function(){return zi}),n.d(t,"S",function(){return Wi}),n.d(t,"Y",function(){return oo}),n.d(t,"_10",function(){return se}),n.d(t,"_1",function(){return Xr}),n.d(t,"_0",function(){return si}),n.d(t,"_9",function(){return dr}),n.d(t,"_15",function(){return l}),n.d(t,"_22",function(){return c}),n.d(t,"_11",function(){return I}),n.d(t,"_12",function(){return H}),n.d(t,"_2",function(){return Je}),n.d(t,"_3",function(){return ut}),n.d(t,"_4",function(){return En}),n.d(t,"_5",function(){return we}),n.d(t,"_6",function(){return mt}),n.d(t,"_7",function(){return Ke}),n.d(t,"_17",function(){return Xe}),n.d(t,"_18",function(){return Qe}),n.d(t,"_19",function(){return ft}),n.d(t,"_20",function(){return yt}),n.d(t,"_21",function(){return Ct}),n.d(t,"_23",function(){return Ht}),n.d(t,"_24",function(){return Vt}),n.d(t,"_13",function(){return ce}),n.d(t,"_14",function(){return de}),n.d(t,"_16",function(){return he}),n.d(t,"_8",function(){return N});var jn=n(47),Pn=n(17),An=(n.n(Pn),n(265)),Hn=(n.n(An),n(276)),In=(n.n(Hn),n(49)),Nn=(n.n(In),function(){function e(e){this._desc=e,this.ngMetadataName="InjectionToken"}return e.prototype.toString=function(){return"InjectionToken "+this._desc},e}()),Vn="__annotations__",Fn="__paramaters__",Rn="__prop__metadata__",Wn=(new Nn("AnalyzeForEntryComponents"),o("Attribute",function(e){return{attributeName:e}})),zn=function(){return function(){}}(),Gn=(a("ContentChildren",function(e,t){return void 0===t&&(t={}),Object(jn.a)({selector:e,first:!1,isViewQuery:!1,descendants:!1},t)},zn),a("ContentChild",function(e,t){return void 0===t&&(t={}),Object(jn.a)({selector:e,first:!0,isViewQuery:!1,descendants:!0},t)},zn),a("ViewChildren",function(e,t){return void 0===t&&(t={}),Object(jn.a)({selector:e,first:!1,isViewQuery:!0,descendants:!0},t)},zn),a("ViewChild",function(e,t){return Object(jn.a)({selector:e,first:!0,isViewQuery:!0,descendants:!0},t)},zn),{OnPush:0,Default:1});Gn[Gn.OnPush]="OnPush",Gn[Gn.Default]="Default";var Un={CheckOnce:0,Checked:1,CheckAlways:2,Detached:3,Errored:4,Destroyed:5};Un[Un.CheckOnce]="CheckOnce",Un[Un.Checked]="Checked",Un[Un.CheckAlways]="CheckAlways",Un[Un.Detached]="Detached",Un[Un.Errored]="Errored",Un[Un.Destroyed]="Destroyed";/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Bn=r("Directive",function(e){return void 0===e&&(e={}),e}),Jn=(r("Component",function(e){return void 0===e&&(e={}),Object(jn.a)({changeDetection:Gn.Default},e)},Bn),r("Pipe",function(e){return Object(jn.a)({pure:!0},e)})),Kn=a("Input",function(e){return{bindingPropertyName:e}}),$n=a("Output",function(e){return{bindingPropertyName:e}}),qn=(a("HostBinding",function(e){return{hostPropertyName:e}}),a("HostListener",function(e,t){return{eventName:e,args:t}}),r("NgModule",function(e){return e})),Zn={Emulated:0,Native:1,None:2};Zn[Zn.Emulated]="Emulated",Zn[Zn.Native]="Native",Zn[Zn.None]="None";var Qn,Xn,er,tr=function(){return function(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}(),nr=new tr("5.0.2"),rr=o("Inject",function(e){return{token:e}}),ir=o("Optional"),or=r("Injectable"),ar=o("Self"),sr=o("SkipSelf"),ur=o("Host"),lr="undefined"!=typeof window&&window,cr="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,dr=lr||void 0!==e&&e||cr,hr=null,fr=new Object,pr=fr,_r=function(){function e(){}return e.prototype.get=function(e,t){if(void 0===t&&(t=fr),t===fr)throw new Error("NullInjectorError: No provider for "+c(e)+"!");return t},e}(),mr=function(){function e(){}return e.create=function(e,t){return new Dr(e,t)},e.THROW_IF_NOT_FOUND=fr,e.NULL=new _r,e}(),yr=function(e){return e},gr=[],vr=yr,br=function(){return Array.prototype.slice.call(arguments)},Mr={},wr=Mr,Lr=function(e){for(var t in e)if(e[t]===Mr)return t;throw Error("!prop")}({provide:String,useValue:wr}),kr="ngTempTokenPath",Tr=mr.NULL,Yr=/\n/gm,Sr="ɵ",Dr=function(){function e(e,t){void 0===t&&(t=Tr),this.parent=t;var n=this._records=new Map;n.set(mr,{token:mr,fn:yr,deps:gr,value:this,useNew:!1}),_(n,e)}return e.prototype.get=function(e,t){var n=this._records.get(e);try{return m(e,n,this._records,this.parent,t)}catch(e){var r=e[kr];throw e.message=y("\n"+e.message,r),e.ngTokenPath=r,e[kr]=null,e}},e.prototype.toString=function(){var e=[];return this._records.forEach(function(t,n){return e.push(c(n))}),"StaticInjector["+e.join(", ")+"]"},e}(),Cr="ngDebugContext",Or="ngOriginalError",xr="ngErrorLogger",Er=function(){function e(){this._console=console}return e.prototype.handleError=function(e){var t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e[xr]||function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e.error.apply(e,t)}}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)},e.prototype._findContext=function(e){return e?v(e)?v(e):this._findContext(b(e)):null},e.prototype._findOriginalError=function(e){for(var t=b(e);t&&b(t);)t=b(t);return t},e}(),jr=function(){function e(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=c(this.token)}return e.get=function(e){return Pr.get(h(e))},Object.defineProperty(e,"numberOfKeys",{get:function(){return Pr.numberOfKeys},enumerable:!0,configurable:!0}),e}(),Pr=new(function(){function e(){this._allKeys=new Map}return e.prototype.get=function(e){if(e instanceof jr)return e;if(this._allKeys.has(e))return this._allKeys.get(e);var t=new jr(e,jr.numberOfKeys);return this._allKeys.set(e,t),t},Object.defineProperty(e.prototype,"numberOfKeys",{get:function(){return this._allKeys.size},enumerable:!0,configurable:!0}),e}()),Ar=Function,Hr=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,Ir=function(){function e(e){this._reflect=e||dr.Reflect}return e.prototype.isReflectionEnabled=function(){return!0},e.prototype.factory=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return new(e.bind.apply(e,[void 0].concat(t)))}},e.prototype._zipTypesAndAnnotations=function(e,t){var n;n=void 0===e?new Array(t.length):new Array(e.length);for(var r=0;r<n.length;r++)void 0===e?n[r]=[]:e[r]!=Object?n[r]=[e[r]]:n[r]=[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n},e.prototype._ownParameters=function(e,t){if(Hr.exec(e.toString()))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;var n=e.ctorParameters;if(n&&n!==t.ctorParameters){var r="function"==typeof n?n():n,i=r.map(function(e){return e&&e.type}),o=r.map(function(e){return e&&S(e.decorators)});return this._zipTypesAndAnnotations(i,o)}var a=e.hasOwnProperty(Fn)&&e[Fn],s=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return s||a?this._zipTypesAndAnnotations(s,a):new Array(e.length).fill(void 0)},e.prototype.parameters=function(e){if(!Y(e))return[];var t=D(e),n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]},e.prototype._ownAnnotations=function(e,t){if(e.annotations&&e.annotations!==t.annotations){var n=e.annotations;return"function"==typeof n&&n.annotations&&(n=n.annotations),n}return e.decorators&&e.decorators!==t.decorators?S(e.decorators):e.hasOwnProperty(Vn)?e[Vn]:null},e.prototype.annotations=function(e){if(!Y(e))return[];var t=D(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)},e.prototype._ownPropMetadata=function(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){var n=e.propMetadata;return"function"==typeof n&&n.propMetadata&&(n=n.propMetadata),n}if(e.propDecorators&&e.propDecorators!==t.propDecorators){var r=e.propDecorators,i={};return Object.keys(r).forEach(function(e){i[e]=S(r[e])}),i}return e.hasOwnProperty(Rn)?e[Rn]:null},e.prototype.propMetadata=function(e){if(!Y(e))return{};var t=D(e),n={};if(t!==Object){var r=this.propMetadata(t);Object.keys(r).forEach(function(e){n[e]=r[e]})}var i=this._ownPropMetadata(e,t);return i&&Object.keys(i).forEach(function(e){var t=[];n.hasOwnProperty(e)&&t.push.apply(t,n[e]),t.push.apply(t,i[e]),n[e]=t}),n},e.prototype.hasLifecycleHook=function(e,t){return e instanceof Ar&&t in e.prototype},e.prototype.getter=function(e){return new Function("o","return o."+e+";")},e.prototype.setter=function(e){return new Function("o","v","return o."+e+" = v;")},e.prototype.method=function(e){var t="if (!o."+e+") throw new Error('\""+e+"\" is undefined');\n        return o."+e+".apply(o, args);";return new Function("o","args",t)},e.prototype.importUri=function(e){return"object"==typeof e&&e.filePath?e.filePath:"./"+c(e)},e.prototype.resourceUri=function(e){return"./"+c(e)},e.prototype.resolveIdentifier=function(e,t,n,r){return r},e.prototype.resolveEnum=function(e,t){return e[t]},e}(),Nr=new(function(){function e(e){this.reflectionCapabilities=e}return e.prototype.updateCapabilities=function(e){this.reflectionCapabilities=e},e.prototype.factory=function(e){return this.reflectionCapabilities.factory(e)},e.prototype.parameters=function(e){return this.reflectionCapabilities.parameters(e)},e.prototype.annotations=function(e){return this.reflectionCapabilities.annotations(e)},e.prototype.propMetadata=function(e){return this.reflectionCapabilities.propMetadata(e)},e.prototype.hasLifecycleHook=function(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)},e.prototype.getter=function(e){return this.reflectionCapabilities.getter(e)},e.prototype.setter=function(e){return this.reflectionCapabilities.setter(e)},e.prototype.method=function(e){return this.reflectionCapabilities.method(e)},e.prototype.importUri=function(e){return this.reflectionCapabilities.importUri(e)},e.prototype.resourceUri=function(e){return this.reflectionCapabilities.resourceUri(e)},e.prototype.resolveIdentifier=function(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)},e.prototype.resolveEnum=function(e,t){return this.reflectionCapabilities.resolveEnum(e,t)},e}())(new Ir),Vr=function(){function e(e,t,n){this.key=e,this.optional=t,this.visibility=n}return e.fromKey=function(t){return new e(t,!1,null)},e}(),Fr=[],Rr=function(){function e(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n}return Object.defineProperty(e.prototype,"resolvedFactory",{get:function(){return this.resolvedFactories[0]},enumerable:!0,configurable:!0}),e}(),Wr=function(){return function(e,t){this.factory=e,this.dependencies=t}}(),zr=new Object,Gr=function(){function e(){}return e.resolve=function(e){return x(e)},e.resolveAndCreate=function(t,n){var r=e.resolve(t);return e.fromResolvedProviders(r,n)},e.fromResolvedProviders=function(e,t){return new Ur(e,t)},e}(),Ur=function(){function e(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;var n=e.length;this.keyIds=new Array(n),this.objs=new Array(n);for(var r=0;r<n;r++)this.keyIds[r]=e[r].key.id,this.objs[r]=zr}return e.prototype.get=function(e,t){return void 0===t&&(t=pr),this._getByKey(jr.get(e),null,t)},e.prototype.resolveAndCreateChild=function(e){var t=Gr.resolve(e);return this.createChildFromResolved(t)},e.prototype.createChildFromResolved=function(t){var n=new e(t);return n.parent=this,n},e.prototype.resolveAndInstantiate=function(e){return this.instantiateResolved(Gr.resolve([e])[0])},e.prototype.instantiateResolved=function(e){return this._instantiateProvider(e)},e.prototype.getProviderAtIndex=function(e){if(e<0||e>=this._providers.length)throw function(e){return Error("Index "+e+" is out-of-bounds.")}(e);return this._providers[e]},e.prototype._new=function(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw function(e,t){return w(e,t,function(e){return"Cannot instantiate cyclic dependency!"+M(e)})}(this,e.key);return this._instantiateProvider(e)},e.prototype._getMaxNumberOfObjects=function(){return this.objs.length},e.prototype._instantiateProvider=function(e){if(e.multiProvider){for(var t=new Array(e.resolvedFactories.length),n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])},e.prototype._instantiate=function(e,t){var n,r=this,i=t.factory;try{n=t.dependencies.map(function(e){return r._getByReflectiveDependency(e)})}catch(t){throw t.addKey&&t.addKey(this,e.key),t}var o;try{o=i.apply(void 0,n)}catch(t){throw function(e,t,n,r){return w(e,r,function(e){var n=c(e[0].token);return t.message+": Error during instantiation of "+n+"!"+M(e)+"."},t)}(this,t,t.stack,e.key)}return o},e.prototype._getByReflectiveDependency=function(e){return this._getByKey(e.key,e.visibility,e.optional?null:pr)},e.prototype._getByKey=function(t,n,r){return t===e.INJECTOR_KEY?this:n instanceof ar?this._getByKeySelf(t,r):this._getByKeyDefault(t,r,n)},e.prototype._getObjByKeyId=function(e){for(var t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===zr&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return zr},e.prototype._throwOrNull=function(e,t){if(t!==pr)return t;throw function(e,t){return w(e,t,function(e){return"No provider for "+c(e[0].token)+"!"+M(e)})}(this,e)},e.prototype._getByKeySelf=function(e,t){var n=this._getObjByKeyId(e.id);return n!==zr?n:this._throwOrNull(e,t)},e.prototype._getByKeyDefault=function(t,n,r){var i;for(i=r instanceof sr?this.parent:this;i instanceof e;){var o=i,a=o._getObjByKeyId(t.id);if(a!==zr)return a;i=o.parent}return null!==i?i.get(t.token,n):this._throwOrNull(t,n)},Object.defineProperty(e.prototype,"displayName",{get:function(){return"ReflectiveInjector(providers: ["+function(e,t){for(var n=new Array(e._providers.length),r=0;r<e._providers.length;++r)n[r]=t(e.getProviderAtIndex(r));return n}(this,function(e){return' "'+e.key.displayName+'" '}).join(", ")+"])"},enumerable:!0,configurable:!0}),e.prototype.toString=function(){return this.displayName},e.INJECTOR_KEY=jr.get(mr),e}(),Br=new Nn("Application Initializer"),Jr=function(){function e(e){var t=this;this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise(function(e,n){t.resolve=e,t.reject=n})}return e.prototype.runInitializers=function(){var e=this;if(!this.initialized){var t=[],n=function(){e.done=!0,e.resolve()};if(this.appInits)for(var r=0;r<this.appInits.length;r++){var i=this.appInits[r]();H(i)&&t.push(i)}Promise.all(t).then(function(){n()}).catch(function(t){e.reject(t)}),0===t.length&&n(),this.initialized=!0}},e.decorators=[{type:or}],e.ctorParameters=function(){return[{type:Array,decorators:[{type:rr,args:[Br]},{type:ir}]}]},e}(),Kr=new Nn("AppId"),$r={provide:Kr,useFactory:N,deps:[]},qr=new Nn("Platform Initializer"),Zr=new Nn("Platform ID"),Qr=new Nn("appBootstrapListener"),Xr=(new Nn("Application Packages Root URL"),function(){function e(){}return e.prototype.log=function(e){console.log(e)},e.prototype.warn=function(e){console.warn(e)},e.decorators=[{type:or}],e.ctorParameters=function(){return[]},e}()),ei=(function(){}(),function(){function e(){}return e.prototype.compileModuleSync=function(e){throw F()},e.prototype.compileModuleAsync=function(e){throw F()},e.prototype.compileModuleAndAllComponentsSync=function(e){throw F()},e.prototype.compileModuleAndAllComponentsAsync=function(e){throw F()},e.prototype.clearCache=function(){},e.prototype.clearCacheFor=function(e){},e.decorators=[{type:or}],e.ctorParameters=function(){return[]},e}()),ti=(new Nn("compilerOptions"),function(){return function(){}}()),ni=function(){return function(){}}(),ri=function(){return function(){}}(),ii="ngComponent",oi=function(){function e(){}return e.prototype.resolveComponentFactory=function(e){throw R(e)},e}(),ai=function(){function e(){}return e.NULL=new oi,e}(),si=function(){function e(e,t,n){this._parent=t,this._ngModule=n,this._factories=new Map;for(var r=0;r<e.length;r++){var i=e[r];this._factories.set(i.componentType,i)}}return e.prototype.resolveComponentFactory=function(e){var t=this._factories.get(e);if(!t&&this._parent&&(t=this._parent.resolveComponentFactory(e)),!t)throw R(e);return new ui(t,this._ngModule)},e}(),ui=function(e){function t(t,n){var r=e.call(this)||this;return r.factory=t,r.ngModule=n,r}return Object(jn.b)(t,e),Object.defineProperty(t.prototype,"selector",{get:function(){return this.factory.selector},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentType",{get:function(){return this.factory.componentType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ngContentSelectors",{get:function(){return this.factory.ngContentSelectors},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputs",{get:function(){return this.factory.inputs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outputs",{get:function(){return this.factory.outputs},enumerable:!0,configurable:!0}),t.prototype.create=function(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)},t}(ri),li=function(){return function(){}}(),ci=function(){return function(){}}(),di=function(){var e=dr.wtf;return!(!e||!(Qn=e.trace)||(Xn=Qn.events,0))}(),hi=di?function(e,t){return void 0===t&&(t=null),Xn.createScope(e,t)}:function(e,t){return W},fi=di?function(e,t){return Qn.leaveScope(e,t),t}:function(e,t){return t},pi=function(e){function t(t){void 0===t&&(t=!1);var n=e.call(this)||this;return n.__isAsync=t,n}return Object(jn.b)(t,e),t.prototype.emit=function(t){e.prototype.next.call(this,t)},t.prototype.subscribe=function(t,n,r){var i,o=function(e){return null},a=function(){return null};return t&&"object"==typeof t?(i=this.__isAsync?function(e){setTimeout(function(){return t.next(e)})}:function(e){t.next(e)},t.error&&(o=this.__isAsync?function(e){setTimeout(function(){return t.error(e)})}:function(e){t.error(e)}),t.complete&&(a=this.__isAsync?function(){setTimeout(function(){return t.complete()})}:function(){t.complete()})):(i=this.__isAsync?function(e){setTimeout(function(){return t(e)})}:function(e){t(e)},n&&(o=this.__isAsync?function(e){setTimeout(function(){return n(e)})}:function(e){n(e)}),r&&(a=this.__isAsync?function(){setTimeout(function(){return r()})}:function(){r()})),e.prototype.subscribe.call(this,i,o,a)},t}(In.Subject),_i=function(){function e(e){var t=e.enableLongStackTrace,n=void 0!==t&&t;if(this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new pi(!1),this.onMicrotaskEmpty=new pi(!1),this.onStable=new pi(!1),this.onError=new pi(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();var r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.wtfZoneSpec&&(r._inner=r._inner.fork(Zone.wtfZoneSpec)),n&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),function(e){e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:function(t,n,r,i,o,a){try{return U(e),t.invokeTask(r,i,o,a)}finally{B(e)}},onInvoke:function(t,n,r,i,o,a,s){try{return U(e),t.invoke(r,i,o,a,s)}finally{B(e)}},onHasTask:function(t,n,r,i){t.hasTask(r,i),n===r&&("microTask"==i.change?(e.hasPendingMicrotasks=i.microTask,G(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:function(t,n,r,i){return t.handleError(r,i),e.runOutsideAngular(function(){return e.onError.emit(i)}),!1}})}(r)}return e.isInAngularZone=function(){return!0===Zone.current.get("isAngularZone")},e.assertInAngularZone=function(){if(!e.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")},e.assertNotInAngularZone=function(){if(e.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")},e.prototype.run=function(e,t,n){return this._inner.run(e,t,n)},e.prototype.runTask=function(e,t,n,r){var i=this._inner,o=i.scheduleEventTask("NgZoneEvent: "+r,e,mi,z,z);try{return i.runTask(o,t,n)}finally{i.cancelTask(o)}},e.prototype.runGuarded=function(e,t,n){return this._inner.runGuarded(e,t,n)},e.prototype.runOutsideAngular=function(e){return this._outer.run(e)},e}(),mi={},yi=function(){function e(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new pi,this.onMicrotaskEmpty=new pi,this.onStable=new pi,this.onError=new pi}return e.prototype.run=function(e){return e()},e.prototype.runGuarded=function(e){return e()},e.prototype.runOutsideAngular=function(e){return e()},e.prototype.runTask=function(e){return e()},e}(),gi=function(){function e(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this._watchAngularEvents()}return e.prototype._watchAngularEvents=function(){var e=this;this._ngZone.onUnstable.subscribe({next:function(){e._didWork=!0,e._isZoneStable=!1}}),this._ngZone.runOutsideAngular(function(){e._ngZone.onStable.subscribe({next:function(){_i.assertNotInAngularZone(),u(function(){e._isZoneStable=!0,e._runCallbacksIfReady()})}})})},e.prototype.increasePendingRequestCount=function(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount},e.prototype.decreasePendingRequestCount=function(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount},e.prototype.isStable=function(){return this._isZoneStable&&0==this._pendingCount&&!this._ngZone.hasPendingMacrotasks},e.prototype._runCallbacksIfReady=function(){var e=this;this.isStable()?u(function(){for(;0!==e._callbacks.length;)e._callbacks.pop()(e._didWork);e._didWork=!1}):this._didWork=!0},e.prototype.whenStable=function(e){this._callbacks.push(e),this._runCallbacksIfReady()},e.prototype.getPendingRequestCount=function(){return this._pendingCount},e.prototype.findProviders=function(e,t,n){return[]},e.decorators=[{type:or}],e.ctorParameters=function(){return[{type:_i}]},e}(),vi=function(){function e(){this._applications=new Map,bi.addToWindow(this)}return e.prototype.registerApplication=function(e,t){this._applications.set(e,t)},e.prototype.unregisterApplication=function(e){this._applications.delete(e)},e.prototype.unregisterAllApplications=function(){this._applications.clear()},e.prototype.getTestability=function(e){return this._applications.get(e)||null},e.prototype.getAllTestabilities=function(){return Array.from(this._applications.values())},e.prototype.getAllRootElements=function(){return Array.from(this._applications.keys())},e.prototype.findTestabilityInTree=function(e,t){return void 0===t&&(t=!0),bi.findTestabilityInTree(this,e,t)},e.decorators=[{type:or}],e.ctorParameters=function(){return[]},e}(),bi=new(function(){function e(){}return e.prototype.addToWindow=function(e){},e.prototype.findTestabilityInTree=function(e,t,n){return null},e}()),Mi=!0,wi=!1,Li=new Nn("AllowMultipleToken"),ki=function(){return function(e,t){this.name=e,this.token=t}}(),Ti=function(){function e(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}return e.prototype.bootstrapModuleFactory=function(e,t){var n=this,r=function(e){return"noop"===e?new yi:("zone.js"===e?void 0:e)||new _i({enableLongStackTrace:$()})}(t?t.ngZone:void 0);return r.run(function(){var t=mr.create([{provide:_i,useValue:r}],n.injector),i=e.create(t),o=i.injector.get(Er,null);if(!o)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return i.onDestroy(function(){return X(n._modules,i)}),r.runOutsideAngular(function(){return r.onError.subscribe({next:function(e){o.handleError(e)}})}),function(e,t,n){try{var r=n();return H(r)?r.catch(function(n){throw t.runOutsideAngular(function(){return e.handleError(n)}),n}):r}catch(n){throw t.runOutsideAngular(function(){return e.handleError(n)}),n}}(o,r,function(){var e=i.injector.get(Jr);return e.runInitializers(),e.donePromise.then(function(){return n._moduleDoBootstrap(i),i})})})},e.prototype.bootstrapModule=function(e,t){var n=this;void 0===t&&(t=[]);var r=this.injector.get(ti),i=Q({},t);return r.createCompiler([i]).compileModuleAsync(e).then(function(e){return n.bootstrapModuleFactory(e,i)})},e.prototype._moduleDoBootstrap=function(e){var t=e.injector.get(Yi);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(function(e){return t.bootstrap(e)});else{if(!e.instance.ngDoBootstrap)throw new Error("The module "+c(e.instance.constructor)+' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');e.instance.ngDoBootstrap(t)}this._modules.push(e)},e.prototype.onDestroy=function(e){this._destroyListeners.push(e)},Object.defineProperty(e.prototype,"injector",{get:function(){return this._injector},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(function(e){return e.destroy()}),this._destroyListeners.forEach(function(e){return e()}),this._destroyed=!0},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0}),e.decorators=[{type:or}],e.ctorParameters=function(){return[{type:mr}]},e}(),Yi=function(){function e(e,t,n,r,i,o){var a=this;this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=i,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=$(),this._zone.onMicrotaskEmpty.subscribe({next:function(){a._zone.run(function(){a.tick()})}});var s=new Pn.Observable(function(e){a._stable=a._zone.isStable&&!a._zone.hasPendingMacrotasks&&!a._zone.hasPendingMicrotasks,a._zone.runOutsideAngular(function(){e.next(a._stable),e.complete()})}),l=new Pn.Observable(function(e){var t;a._zone.runOutsideAngular(function(){t=a._zone.onStable.subscribe(function(){_i.assertNotInAngularZone(),u(function(){a._stable||a._zone.hasPendingMacrotasks||a._zone.hasPendingMicrotasks||(a._stable=!0,e.next(!0))})})});var n=a._zone.onUnstable.subscribe(function(){_i.assertInAngularZone(),a._stable&&(a._stable=!1,a._zone.runOutsideAngular(function(){e.next(!1)}))});return function(){t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(An.merge)(s,Hn.share.call(l))}return e.prototype.bootstrap=function(e,t){var n=this;if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");var r;r=e instanceof ri?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(r.componentType);var i=r instanceof ui?null:this._injector.get(li),o=t||r.selector,a=r.create(mr.NULL,[],o,i);a.onDestroy(function(){n._unloadComponent(a)});var s=a.injector.get(gi,null);return s&&a.injector.get(vi).registerApplication(a.location.nativeElement,s),this._loadComponent(a),$()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),a},e.prototype.tick=function(){var t=this;if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");var n=e._tickScope();try{this._runningTick=!0,this._views.forEach(function(e){return e.detectChanges()}),this._enforceNoNewChanges&&this._views.forEach(function(e){return e.checkNoChanges()})}catch(e){this._zone.runOutsideAngular(function(){return t._exceptionHandler.handleError(e)})}finally{this._runningTick=!1,fi(n)}},e.prototype.attachView=function(e){var t=e;this._views.push(t),t.attachToAppRef(this)},e.prototype.detachView=function(e){var t=e;X(this._views,t),t.detachFromAppRef()},e.prototype._loadComponent=function(e){this.attachView(e.hostView),this.tick(),this.components.push(e);this._injector.get(Qr,[]).concat(this._bootstrapListeners).forEach(function(t){return t(e)})},e.prototype._unloadComponent=function(e){this.detachView(e.hostView),X(this.components,e)},e.prototype.ngOnDestroy=function(){this._views.slice().forEach(function(e){return e.destroy()})},Object.defineProperty(e.prototype,"viewCount",{get:function(){return this._views.length},enumerable:!0,configurable:!0}),e._tickScope=hi("ApplicationRef#tick()"),e.decorators=[{type:or}],e.ctorParameters=function(){return[{type:_i},{type:Xr},{type:mr},{type:Er},{type:ai},{type:Jr}]},e}(),Si=(function(){}(),function(){}(),function(){return function(){}}()),Di=(new Nn("Renderer2Interceptor"),function(){}(),function(){return function(){}}()),Ci={Important:1,DashCase:2};Ci[Ci.Important]="Important",Ci[Ci.DashCase]="DashCase";var Oi=function(){return function(){}}(),xi=function(){return function(e){this.nativeElement=e}}(),Ei=(function(){}(),new Map,function(){function e(){this.dirty=!0,this._results=[],this.changes=new pi}return Object.defineProperty(e.prototype,"length",{get:function(){return this._results.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"first",{get:function(){return this._results[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){return this._results[this.length-1]},enumerable:!0,configurable:!0}),e.prototype.map=function(e){return this._results.map(e)},e.prototype.filter=function(e){return this._results.filter(e)},e.prototype.find=function(e){return this._results.find(e)},e.prototype.reduce=function(e,t){return this._results.reduce(e,t)},e.prototype.forEach=function(e){this._results.forEach(e)},e.prototype.some=function(e){return this._results.some(e)},e.prototype.toArray=function(){return this._results.slice()},e.prototype[s()]=function(){return this._results[s()]()},e.prototype.toString=function(){return this._results.toString()},e.prototype.reset=function(e){this._results=ee(e),this.dirty=!1},e.prototype.notifyOnChanges=function(){this.changes.emit(this)},e.prototype.setDirty=function(){this.dirty=!0},e.prototype.destroy=function(){this.changes.complete(),this.changes.unsubscribe()},e}()),ji=function(){return function(){}}(),Pi={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"},Ai=(function(){function e(e,t){this._compiler=e,this._config=t||Pi}e.prototype.load=function(e){return this._compiler instanceof ei?this.loadFactory(e):this.loadAndCompile(e)},e.prototype.loadAndCompile=function(e){var t=this,r=e.split("#"),i=r[0],o=r[1];return void 0===o&&(o="default"),n(92)(i).then(function(e){return e[o]}).then(function(e){return te(e,i,o)}).then(function(e){return t._compiler.compileModuleAsync(e)})},e.prototype.loadFactory=function(e){var t=e.split("#"),r=t[0],i=t[1],o="NgFactory";return void 0===i&&(i="default",o=""),n(92)(this._config.factoryPathPrefix+r+this._config.factoryPathSuffix).then(function(e){return e[i+o]}).then(function(e){return te(e,r,i)})},e.decorators=[{type:or}],e.ctorParameters=function(){return[{type:ei},{type:ji,decorators:[{type:ir}]}]}}(),function(){return function(){}}()),Hi=function(){return function(){}}(),Ii=function(){return function(){}}(),Ni=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(jn.b)(t,e)}(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(jn.b)(t,e),t}(Ii)),function(){return function(e,t){this.name=e,this.callback=t}}()),Vi=function(){function e(e,t,n){this._debugContext=n,this.nativeNode=e,t&&t instanceof Fi?t.addChild(this):this.parent=null,this.listeners=[]}return Object.defineProperty(e.prototype,"injector",{get:function(){return this._debugContext.injector},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentInstance",{get:function(){return this._debugContext.component},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._debugContext.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"references",{get:function(){return this._debugContext.references},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"providerTokens",{get:function(){return this._debugContext.providerTokens},enumerable:!0,configurable:!0}),e}(),Fi=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.properties={},i.attributes={},i.classes={},i.styles={},i.childNodes=[],i.nativeElement=t,i}return Object(jn.b)(t,e),t.prototype.addChild=function(e){e&&(this.childNodes.push(e),e.parent=this)},t.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);-1!==t&&(e.parent=null,this.childNodes.splice(t,1))},t.prototype.insertChildrenAfter=function(e,t){var n=this,r=this.childNodes.indexOf(e);-1!==r&&((i=this.childNodes).splice.apply(i,[r+1,0].concat(t)),t.forEach(function(e){e.parent&&e.parent.removeChild(e),e.parent=n}));var i},t.prototype.insertBefore=function(e,t){var n=this.childNodes.indexOf(e);-1===n?this.addChild(t):(t.parent&&t.parent.removeChild(t),t.parent=this,this.childNodes.splice(n,0,t))},t.prototype.query=function(e){return this.queryAll(e)[0]||null},t.prototype.queryAll=function(e){var t=[];return ne(this,e,t),t},t.prototype.queryAllNodes=function(e){var t=[];return re(this,e,t),t},Object.defineProperty(t.prototype,"children",{get:function(){return this.childNodes.filter(function(e){return e instanceof t})},enumerable:!0,configurable:!0}),t.prototype.triggerEventHandler=function(e,t){this.listeners.forEach(function(n){n.name==e&&n.callback(t)})},t}(Vi),Ri=new Map,Wi=function(){function e(e){this.wrapped=e}return e.wrap=function(t){return new e(t)},e}(),zi=(function(){function e(){this.hasWrappedValue=!1}e.prototype.unwrap=function(e){return e instanceof Wi?(this.hasWrappedValue=!0,e.wrapped):e},e.prototype.reset=function(){this.hasWrappedValue=!1}}(),function(){function e(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}return e.prototype.isFirstChange=function(){return this.firstChange},e}()),Gi=function(){function e(){}return e.prototype.supports=function(e){return se(e)},e.prototype.create=function(e){return new Bi(e)},e}(),Ui=function(e,t){return t},Bi=function(){function e(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Ui}return e.prototype.forEachItem=function(e){var t;for(t=this._itHead;null!==t;t=t._next)e(t)},e.prototype.forEachOperation=function(e){for(var t=this._itHead,n=this._removalsHead,r=0,i=null;t||n;){var o=!n||t&&t.currentIndex<le(n,r,i)?t:n,a=le(o,r,i),s=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(t=t._next,null==o.previousIndex)r++;else{i||(i=[]);var u=a-r,l=s-r;if(u!=l){for(var c=0;c<u;c++){var d=c<i.length?i[c]:i[c]=0,h=d+c;l<=h&&h<u&&(i[c]=d+1)}i[o.previousIndex]=l-u}}a!==s&&e(o,a,s)}},e.prototype.forEachPreviousItem=function(e){var t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)},e.prototype.forEachAddedItem=function(e){var t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)},e.prototype.forEachMovedItem=function(e){var t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)},e.prototype.forEachRemovedItem=function(e){var t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)},e.prototype.forEachIdentityChange=function(e){var t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)},e.prototype.diff=function(e){if(null==e&&(e=[]),!se(e))throw new Error("Error trying to diff '"+c(e)+"'. Only arrays and iterables are allowed");return this.check(e)?this:null},e.prototype.onDestroy=function(){},e.prototype.check=function(e){var t=this;this._reset();var n,r,i,o=this._itHead,a=!1;if(Array.isArray(e)){this.length=e.length;for(var u=0;u<this.length;u++)r=e[u],i=this._trackByFn(u,r),null!==o&&l(o.trackById,i)?(a&&(o=this._verifyReinsertion(o,r,i,u)),l(o.item,r)||this._addIdentityChange(o,r)):(o=this._mismatch(o,r,i,u),a=!0),o=o._next}else n=0,function(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n]);else for(var r=e[s()](),i=void 0;!(i=r.next()).done;)t(i.value)}(e,function(e){i=t._trackByFn(n,e),null!==o&&l(o.trackById,i)?(a&&(o=t._verifyReinsertion(o,e,i,n)),l(o.item,e)||t._addIdentityChange(o,e)):(o=t._mismatch(o,e,i,n),a=!0),o=o._next,n++}),this.length=n;return this._truncate(o),this.collection=e,this.isDirty},Object.defineProperty(e.prototype,"isDirty",{get:function(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead},enumerable:!0,configurable:!0}),e.prototype._reset=function(){if(this.isDirty){var e=void 0,t=void 0;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}},e.prototype._mismatch=function(e,t,n,r){var i;return null===e?i=this._itTail:(i=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(l(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,i,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(l(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,i,r)):e=this._addAfter(new Ji(t,n),i,r),e},e.prototype._verifyReinsertion=function(e,t,n,r){var i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==i?e=this._reinsertAfter(i,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e},e.prototype._truncate=function(e){for(;null!==e;){var t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)},e.prototype._reinsertAfter=function(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);var r=e._prevRemoved,i=e._nextRemoved;return null===r?this._removalsHead=i:r._nextRemoved=i,null===i?this._removalsTail=r:i._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e},e.prototype._moveAfter=function(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e},e.prototype._addAfter=function(e,t,n){return this._insertAfter(e,t,n),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e},e.prototype._insertAfter=function(e,t,n){var r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new $i),this._linkedRecords.put(e),e.currentIndex=n,e},e.prototype._remove=function(e){return this._addToRemovals(this._unlink(e))},e.prototype._unlink=function(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);var t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e},e.prototype._addToMoves=function(e,t){return e.previousIndex===t?e:(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e,e)},e.prototype._addToRemovals=function(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new $i),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e},e.prototype._addIdentityChange=function(e,t){return e.item=t,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e},e}(),Ji=function(){return function(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}(),Ki=function(){function e(){this._head=null,this._tail=null}return e.prototype.add=function(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)},e.prototype.get=function(e,t){var n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&l(n.trackById,e))return n;return null},e.prototype.remove=function(e){var t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head},e}(),$i=function(){function e(){this.map=new Map}return e.prototype.put=function(e){var t=e.trackById,n=this.map.get(t);n||(n=new Ki,this.map.set(t,n)),n.add(e)},e.prototype.get=function(e,t){var n=e,r=this.map.get(n);return r?r.get(e,t):null},e.prototype.remove=function(e){var t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e},Object.defineProperty(e.prototype,"isEmpty",{get:function(){return 0===this.map.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this.map.clear()},e}(),qi=function(){function e(){}return e.prototype.supports=function(e){return e instanceof Map||ue(e)},e.prototype.create=function(){return new Zi},e}(),Zi=function(){function e(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}return Object.defineProperty(e.prototype,"isDirty",{get:function(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead},enumerable:!0,configurable:!0}),e.prototype.forEachItem=function(e){var t;for(t=this._mapHead;null!==t;t=t._next)e(t)},e.prototype.forEachPreviousItem=function(e){var t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)},e.prototype.forEachChangedItem=function(e){var t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)},e.prototype.forEachAddedItem=function(e){var t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)},e.prototype.forEachRemovedItem=function(e){var t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)},e.prototype.diff=function(e){if(e){if(!(e instanceof Map||ue(e)))throw new Error("Error trying to diff '"+c(e)+"'. Only maps and objects are allowed")}else e=new Map;return this.check(e)?this:null},e.prototype.onDestroy=function(){},e.prototype.check=function(e){var t=this;this._reset();var n=this._mapHead;if(this._appendAfter=null,this._forEach(e,function(e,r){if(n&&n.key===r)t._maybeAddToChanges(n,e),t._appendAfter=n,n=n._next;else{var i=t._getOrCreateRecordForKey(r,e);n=t._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(var r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty},e.prototype._insertBeforeOrAppend=function(e,t){if(e){var n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null},e.prototype._getOrCreateRecordForKey=function(e,t){if(this._records.has(e)){var n=this._records.get(e);this._maybeAddToChanges(n,t);var r=n._prev,i=n._next;return r&&(r._next=i),i&&(i._prev=r),n._next=null,n._prev=null,n}var o=new Qi(e);return this._records.set(e,o),o.currentValue=t,this._addToAdditions(o),o},e.prototype._reset=function(){if(this.isDirty){var e=void 0;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}},e.prototype._maybeAddToChanges=function(e,t){l(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))},e.prototype._addToAdditions=function(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)},e.prototype._addToChanges=function(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)},e.prototype._forEach=function(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(function(n){return t(e[n],n)})},e}(),Qi=function(){return function(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}(),Xi=function(){function e(e){this.factories=e}return e.create=function(t,n){if(null!=n){var r=n.factories.slice();return t=t.concat(r),new e(t)}return new e(t)},e.extend=function(t){return{provide:e,useFactory:function(n){if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new sr,new ir]]}},e.prototype.find=function(e){var t=this.factories.find(function(t){return t.supports(e)});if(null!=t)return t;throw new Error("Cannot find a differ supporting object '"+e+"' of type '"+function(e){return e.name||typeof e}(e)+"'")},e}(),eo=function(){function e(e){this.factories=e}return e.create=function(t,n){if(n){var r=n.factories.slice();t=t.concat(r)}return new e(t)},e.extend=function(t){return{provide:e,useFactory:function(n){if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new sr,new ir]]}},e.prototype.find=function(e){var t=this.factories.find(function(t){return t.supports(e)});if(t)return t;throw new Error("Cannot find a differ supporting object '"+e+"'")},e}(),to=[new qi],no=[new Gi],ro=new Xi(no),io=new eo(to),oo=q(null,"core",[{provide:Zr,useValue:"unknown"},{provide:Ti,deps:[mr]},{provide:vi,deps:[]},{provide:Xr,deps:[]}]),ao=new Nn("LocaleId"),so=(new Nn("Translations"),new Nn("TranslationsFormat"),{Error:0,Warning:1,Ignore:2});so[so.Error]="Error",so[so.Warning]="Warning",so[so.Ignore]="Ignore";var uo=function(){function e(e){}return e.decorators=[{type:qn,args:[{providers:[Yi,Jr,ei,$r,{provide:Xi,useFactory:ce},{provide:eo,useFactory:de},{provide:ao,useFactory:he,deps:[[new rr(ao),new ir,new sr]]}]}]}],e.ctorParameters=function(){return[{type:Yi}]},e}(),lo={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};lo[lo.NONE]="NONE",lo[lo.HTML]="HTML",lo[lo.STYLE]="STYLE",lo[lo.SCRIPT]="SCRIPT",lo[lo.URL]="URL",lo[lo.RESOURCE_URL]="RESOURCE_URL";var co=function(){return function(){}}(),ho=(function(){}(),{setCurrentNode:void 0,createRootView:void 0,createEmbeddedView:void 0,createComponentView:void 0,createNgModuleRef:void 0,overrideProvider:void 0,clearProviderOverrides:void 0,checkAndUpdateView:void 0,checkNoChangesView:void 0,destroyView:void 0,resolveDep:void 0,createDebugContext:void 0,handleEvent:void 0,updateDirectives:void 0,updateRenderer:void 0,dirtyParentQueries:void 0}),fo=function(){},po=new Map,_o="$$undefined",mo="$$empty",yo=0,go=new WeakMap,vo=/^:([^:]+):(.+)$/,bo=new Object,Mo=Me(mr),wo=Me(li),Lo=new Object,ko=function(e){function t(t,n,r,i,o,a){var s=e.call(this)||this;return s.selector=t,s.componentType=n,s._inputs=i,s._outputs=o,s.ngContentSelectors=a,s.viewDefFactory=r,s}return Object(jn.b)(t,e),Object.defineProperty(t.prototype,"inputs",{get:function(){var e=[],t=this._inputs;for(var n in t){var r=t[n];e.push({propName:n,templateName:r})}return e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outputs",{get:function(){var e=[];for(var t in this._outputs){var n=this._outputs[t];e.push({propName:t,templateName:n})}return e},enumerable:!0,configurable:!0}),t.prototype.create=function(e,t,n,r){if(!r)throw new Error("ngModule should be provided");var i=Ve(this.viewDefFactory),o=i.nodes[0].element.componentProvider.nodeIndex,a=ho.createRootView(e,t||[],n,i,r,Lo),s=_e(a,o).instance;return n&&a.renderer.setAttribute(pe(a,0).renderElement,"ng-version",nr.full),new To(a,new So(a),s)},t}(ri),To=function(e){function t(t,n,r){var i=e.call(this)||this;return i._view=t,i._viewRef=n,i._component=r,i._elDef=i._view.def.nodes[0],i.hostView=n,i.changeDetectorRef=n,i.instance=r,i}return Object(jn.b)(t,e),Object.defineProperty(t.prototype,"location",{get:function(){return new xi(pe(this._view,this._elDef.nodeIndex).renderElement)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"injector",{get:function(){return new Co(this._view,this._elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentType",{get:function(){return this._component.constructor},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this._viewRef.destroy()},t.prototype.onDestroy=function(e){this._viewRef.onDestroy(e)},t}(ni),Yo=function(){function e(e,t,n){this._view=e,this._elDef=t,this._data=n,this._embeddedViews=[]}return Object.defineProperty(e.prototype,"element",{get:function(){return new xi(this._data.renderElement)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"injector",{get:function(){return new Co(this._view,this._elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parentInjector",{get:function(){for(var e=this._view,t=this._elDef.parent;!t&&e;)t=Oe(e),e=e.parent;return e?new Co(e,t):new Co(this._view,null)},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=this._embeddedViews.length-1;e>=0;e--){var t=rt(this._data,e);ho.destroyView(t)}},e.prototype.get=function(e){var t=this._embeddedViews[e];if(t){var n=new So(t);return n.attachToViewContainerRef(this),n}return null},Object.defineProperty(e.prototype,"length",{get:function(){return this._embeddedViews.length},enumerable:!0,configurable:!0}),e.prototype.createEmbeddedView=function(e,t,n){var r=e.createEmbeddedView(t||{});return this.insert(r,n),r},e.prototype.createComponent=function(e,t,n,r,i){var o=n||this.parentInjector;i||e instanceof ui||(i=o.get(li));var a=e.create(o,r,void 0,i);return this.insert(a.hostView,t),a},e.prototype.insert=function(e,t){if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");var n=e,r=n._view;return nt(this._view,this._data,t,r),n.attachToViewContainerRef(this),e},e.prototype.move=function(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");var n=this._embeddedViews.indexOf(e._view);return function(e,t,n){var r=e.viewContainer._embeddedViews,i=r[t];st(r,t),null==n&&(n=r.length),at(r,n,i),ho.dirtyParentQueries(i),ot(i),it(e,n>0?r[n-1]:null,i)}(this._data,n,t),e},e.prototype.indexOf=function(e){return this._embeddedViews.indexOf(e._view)},e.prototype.remove=function(e){var t=rt(this._data,e);t&&ho.destroyView(t)},e.prototype.detach=function(e){var t=rt(this._data,e);return t?new So(t):null},e}(),So=function(){function e(e){this._view=e,this._viewContainerRef=null,this._appRef=null}return Object.defineProperty(e.prototype,"rootNodes",{get:function(){return function(e){var t=[];return Fe(e,0,void 0,void 0,t),t}(this._view)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._view.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"destroyed",{get:function(){return 0!=(128&this._view.state)},enumerable:!0,configurable:!0}),e.prototype.markForCheck=function(){Ye(this._view)},e.prototype.detach=function(){this._view.state&=-5},e.prototype.detectChanges=function(){var e=this._view.root.rendererFactory;e.begin&&e.begin(),ho.checkAndUpdateView(this._view),e.end&&e.end()},e.prototype.checkNoChanges=function(){ho.checkNoChangesView(this._view)},e.prototype.reattach=function(){this._view.state|=4},e.prototype.onDestroy=function(e){this._view.disposables||(this._view.disposables=[]),this._view.disposables.push(e)},e.prototype.destroy=function(){this._appRef?this._appRef.detachView(this):this._viewContainerRef&&this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),ho.destroyView(this._view)},e.prototype.detachFromAppRef=function(){this._appRef=null,ot(this._view),ho.dirtyParentQueries(this._view)},e.prototype.attachToAppRef=function(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e},e.prototype.attachToViewContainerRef=function(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e},e}(),Do=function(e){function t(t,n){var r=e.call(this)||this;return r._parentView=t,r._def=n,r}return Object(jn.b)(t,e),t.prototype.createEmbeddedView=function(e){return new So(ho.createEmbeddedView(this._parentView,this._def,this._def.element.template,e))},Object.defineProperty(t.prototype,"elementRef",{get:function(){return new xi(pe(this._parentView,this._def.nodeIndex).renderElement)},enumerable:!0,configurable:!0}),t}(Ai),Co=function(){function e(e,t){this.view=e,this.elDef=t}return e.prototype.get=function(e,t){void 0===t&&(t=mr.THROW_IF_NOT_FOUND);var n=!!this.elDef&&0!=(33554432&this.elDef.flags);return ho.resolveDep(this.view,this.elDef,n,{flags:0,token:e,tokenKey:Me(e)},t)},e}(),Oo=function(){function e(e){this.delegate=e}return e.prototype.selectRootElement=function(e){return this.delegate.selectRootElement(e)},e.prototype.createElement=function(e,t){var n=Ue(t),r=n[0],i=n[1],o=this.delegate.createElement(i,r);return e&&this.delegate.appendChild(e,o),o},e.prototype.createViewRoot=function(e){return e},e.prototype.createTemplateAnchor=function(e){var t=this.delegate.createComment("");return e&&this.delegate.appendChild(e,t),t},e.prototype.createText=function(e,t){var n=this.delegate.createText(t);return e&&this.delegate.appendChild(e,n),n},e.prototype.projectNodes=function(e,t){for(var n=0;n<t.length;n++)this.delegate.appendChild(e,t[n])},e.prototype.attachViewAfter=function(e,t){for(var n=this.delegate.parentNode(e),r=this.delegate.nextSibling(e),i=0;i<t.length;i++)this.delegate.insertBefore(n,t[i],r)},e.prototype.detachView=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=this.delegate.parentNode(n);this.delegate.removeChild(r,n)}},e.prototype.destroyView=function(e,t){for(var n=0;n<t.length;n++)this.delegate.destroyNode(t[n])},e.prototype.listen=function(e,t,n){return this.delegate.listen(e,t,n)},e.prototype.listenGlobal=function(e,t,n){return this.delegate.listen(e,t,n)},e.prototype.setElementProperty=function(e,t,n){this.delegate.setProperty(e,t,n)},e.prototype.setElementAttribute=function(e,t,n){var r=Ue(t),i=r[0],o=r[1];null!=n?this.delegate.setAttribute(e,o,n,i):this.delegate.removeAttribute(e,o,i)},e.prototype.setBindingDebugInfo=function(e,t,n){},e.prototype.setElementClass=function(e,t,n){n?this.delegate.addClass(e,t):this.delegate.removeClass(e,t)},e.prototype.setElementStyle=function(e,t,n){null!=n?this.delegate.setStyle(e,t,n):this.delegate.removeStyle(e,t)},e.prototype.invokeElementMethod=function(e,t,n){e[t].apply(e,n)},e.prototype.setText=function(e,t){this.delegate.setValue(e,t)},e.prototype.animate=function(){throw new Error("Renderer.animate is no longer supported!")},e}(),xo=function(){function e(e,t,n,r){this._moduleType=e,this._parent=t,this._bootstrapComponents=n,this._def=r,this._destroyListeners=[],this._destroyed=!1,function(e){for(var t=e._def,n=e._providers=new Array(t.providers.length),r=0;r<t.providers.length;r++){var i=t.providers[r];4096&i.flags||(n[r]=tt(e,i))}}(this)}return e.prototype.get=function(e,t){return void 0===t&&(t=mr.THROW_IF_NOT_FOUND),et(this,{token:e,tokenKey:Me(e),flags:0},t)},Object.defineProperty(e.prototype,"instance",{get:function(){return this.get(this._moduleType)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentFactoryResolver",{get:function(){return this.get(ai)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"injector",{get:function(){return this},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){if(this._destroyed)throw new Error("The ng module "+c(this.instance.constructor)+" has already been destroyed.");this._destroyed=!0,function(e,t){for(var n=e._def,r=0;r<n.providers.length;r++)if(131072&n.providers[r].flags){var i=e._providers[r];i&&i!==bo&&i.ngOnDestroy()}}(this),this._destroyListeners.forEach(function(e){return e()})},e.prototype.onDestroy=function(e){this._destroyListeners.push(e)},e}(),Eo=Me(Si),jo=Me(Oi),Po=Me(xi),Ao=Me(Hi),Ho=Me(Ai),Io=Me(Ii),No=Me(mr),Vo={},Fo={CreateViewNodes:0,CheckNoChanges:1,CheckNoChangesProjectedViews:2,CheckAndUpdate:3,CheckAndUpdateProjectedViews:4,Destroy:5};Fo[Fo.CreateViewNodes]="CreateViewNodes",Fo[Fo.CheckNoChanges]="CheckNoChanges",Fo[Fo.CheckNoChangesProjectedViews]="CheckNoChangesProjectedViews",Fo[Fo.CheckAndUpdate]="CheckAndUpdate",Fo[Fo.CheckAndUpdateProjectedViews]="CheckAndUpdateProjectedViews",Fo[Fo.Destroy]="Destroy";/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Ro=!1,Wo=new Map,zo={create:0,detectChanges:1,checkNoChanges:2,destroy:3,handleEvent:4};zo[zo.create]="create",zo[zo.detectChanges]="detectChanges",zo[zo.checkNoChanges]="checkNoChanges",zo[zo.destroy]="destroy",zo[zo.handleEvent]="handleEvent";var Go,Uo,Bo,Jo=/([A-Z])/g,Ko=function(){function e(e,t){this.view=e,this.nodeIndex=t,null==t&&(this.nodeIndex=t=0),this.nodeDef=e.def.nodes[t];for(var n=this.nodeDef,r=e;n&&0==(1&n.flags);)n=n.parent;if(!n)for(;!n&&r;)n=Oe(r),r=r.parent;this.elDef=n,this.elView=r}return Object.defineProperty(e.prototype,"elOrCompView",{get:function(){return pe(this.elView,this.elDef.nodeIndex).componentView||this.view},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"injector",{get:function(){return ht(this.elView,this.elDef)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"component",{get:function(){return this.elOrCompView.component},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this.elOrCompView.context},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"providerTokens",{get:function(){var e=[];if(this.elDef)for(var t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){var n=this.elView.def.nodes[t];20224&n.flags&&e.push(n.provider.token),t+=n.childCount}return e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"references",{get:function(){var e={};if(this.elDef){Cn(this.elView,this.elDef,e);for(var t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){var n=this.elView.def.nodes[t];20224&n.flags&&Cn(this.elView,n,e),t+=n.childCount}}return e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"componentRenderElement",{get:function(){var e=function(e){for(;e&&!je(e);)e=e.parent;return e.parent?pe(e.parent,Oe(e).nodeIndex):null}(this.elOrCompView);return e?e.renderElement:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderNode",{get:function(){return 2&this.nodeDef.flags?xe(this.view,this.nodeDef):xe(this.elView,this.elDef)},enumerable:!0,configurable:!0}),e.prototype.logError=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,i;2&this.nodeDef.flags?(r=this.view.def,i=this.nodeDef.nodeIndex):(r=this.elView.def,i=this.elDef.nodeIndex);var o=function(e,t){for(var n=-1,r=0;r<=t;r++)3&e.nodes[r].flags&&n++;return n}(r,i),a=-1;r.factory(function(){return++a===o?(n=e.error).bind.apply(n,[e].concat(t)):fo;var n}),a<o&&(e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"),e.error.apply(e,t))},e}(),$o=function(){function e(e){this.delegate=e}return e.prototype.createRenderer=function(e,t){return new qo(this.delegate.createRenderer(e,t))},e.prototype.begin=function(){this.delegate.begin&&this.delegate.begin()},e.prototype.end=function(){this.delegate.end&&this.delegate.end()},e.prototype.whenRenderingDone=function(){return this.delegate.whenRenderingDone?this.delegate.whenRenderingDone():Promise.resolve(null)},e}(),qo=function(){function e(e){this.delegate=e}return Object.defineProperty(e.prototype,"data",{get:function(){return this.delegate.data},enumerable:!0,configurable:!0}),e.prototype.destroyNode=function(e){!function(e){Ri.delete(e.nativeNode)}(ie(e)),this.delegate.destroyNode&&this.delegate.destroyNode(e)},e.prototype.destroy=function(){this.delegate.destroy()},e.prototype.createElement=function(e,t){var n=this.delegate.createElement(e,t),r=xn();if(r){var i=new Fi(n,null,r);i.name=e,oe(i)}return n},e.prototype.createComment=function(e){var t=this.delegate.createComment(e),n=xn();return n&&oe(new Vi(t,null,n)),t},e.prototype.createText=function(e){var t=this.delegate.createText(e),n=xn();return n&&oe(new Vi(t,null,n)),t},e.prototype.appendChild=function(e,t){var n=ie(e),r=ie(t);n&&r&&n instanceof Fi&&n.addChild(r),this.delegate.appendChild(e,t)},e.prototype.insertBefore=function(e,t,n){var r=ie(e),i=ie(t),o=ie(n);r&&i&&r instanceof Fi&&r.insertBefore(o,i),this.delegate.insertBefore(e,t,n)},e.prototype.removeChild=function(e,t){var n=ie(e),r=ie(t);n&&r&&n instanceof Fi&&n.removeChild(r),this.delegate.removeChild(e,t)},e.prototype.selectRootElement=function(e){var t=this.delegate.selectRootElement(e),n=xn();return n&&oe(new Fi(t,null,n)),t},e.prototype.setAttribute=function(e,t,n,r){var i=ie(e);if(i&&i instanceof Fi){var o=r?r+":"+t:t;i.attributes[o]=n}this.delegate.setAttribute(e,t,n,r)},e.prototype.removeAttribute=function(e,t,n){var r=ie(e);if(r&&r instanceof Fi){var i=n?n+":"+t:t;r.attributes[i]=null}this.delegate.removeAttribute(e,t,n)},e.prototype.addClass=function(e,t){var n=ie(e);n&&n instanceof Fi&&(n.classes[t]=!0),this.delegate.addClass(e,t)},e.prototype.removeClass=function(e,t){var n=ie(e);n&&n instanceof Fi&&(n.classes[t]=!1),this.delegate.removeClass(e,t)},e.prototype.setStyle=function(e,t,n,r){var i=ie(e);i&&i instanceof Fi&&(i.styles[t]=n),this.delegate.setStyle(e,t,n,r)},e.prototype.removeStyle=function(e,t,n){var r=ie(e);r&&r instanceof Fi&&(r.styles[t]=null),this.delegate.removeStyle(e,t,n)},e.prototype.setProperty=function(e,t,n){var r=ie(e);r&&r instanceof Fi&&(r.properties[t]=n),this.delegate.setProperty(e,t,n)},e.prototype.listen=function(e,t,n){if("string"!=typeof e){var r=ie(e);r&&r.listeners.push(new Ni(t,n))}return this.delegate.listen(e,t,n)},e.prototype.parentNode=function(e){return this.delegate.parentNode(e)},e.prototype.nextSibling=function(e){return this.delegate.nextSibling(e)},e.prototype.setValue=function(e,t){return this.delegate.setValue(e,t)},e}(),Zo=function(e){function t(t,n,r){var i=e.call(this)||this;return i.moduleType=t,i._bootstrapComponents=n,i._ngModuleDefFactory=r,i}return Object(jn.b)(t,e),t.prototype.create=function(e){an();var t=Ve(this._ngModuleDefFactory);return ho.createNgModuleRef(this.moduleType,e||mr.NULL,this._bootstrapComponents,t)},t}(ci)}).call(t,n(38))},,,,,function(e,t,n){"use strict";var r=n(32),i=n(260),o=n(85),a=n(263),s=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,o=i.toSubscriber(e,t,n);if(r?r.call(o,this.source):o.add(this.source?this._subscribe(o):this._trySubscribe(o)),o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.syncErrorThrown=!0,e.syncErrorValue=t,e.error(t)}},e.prototype.forEach=function(e,t){var n=this;if(t||(r.root.Rx&&r.root.Rx.config&&r.root.Rx.config.Promise?t=r.root.Rx.config.Promise:r.root.Promise&&(t=r.root.Promise)),!t)throw new Error("no Promise impl found");return new t(function(t,r){var i;i=n.subscribe(function(t){if(i)try{e(t)}catch(e){r(e),i.unsubscribe()}else e(t)},r,t)})},e.prototype._subscribe=function(e){return this.source.subscribe(e)},e.prototype[o.observable]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return 0===e.length?this:a.pipeFromArray(e)(this)},e.prototype.toPromise=function(e){var t=this;if(e||(r.root.Rx&&r.root.Rx.config&&r.root.Rx.config.Promise?e=r.root.Rx.config.Promise:r.root.Promise&&(e=r.root.Promise)),!e)throw new Error("no Promise impl found");return new e(function(e,n){var r;t.subscribe(function(e){return r=e},function(e){return n(e)},function(){return e(r)})})},e.create=function(t){return new e(t)},e}();t.Observable=s},,,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(80),o=n(48),a=n(84),s=n(59),u=function(e){function t(n,r,i){switch(e.call(this),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a.empty;break;case 1:if(!n){this.destination=a.empty;break}if("object"==typeof n){n instanceof t?(this.destination=n,this.destination.add(this)):(this.syncErrorThrowable=!0,this.destination=new l(this,n));break}default:this.syncErrorThrowable=!0,this.destination=new l(this,n,r,i)}}return r(t,e),t.prototype[s.rxSubscriber]=function(){return this},t.create=function(e,n,r){var i=new t(e,n,r);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parent,t=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=e,this._parents=t,this},t}(o.Subscription);t.Subscriber=u;var l=function(e){function t(t,n,r,o){e.call(this),this._parentSubscriber=t;var s,u=this;i.isFunction(n)?s=n:n&&(s=n.next,r=n.error,o=n.complete,n!==a.empty&&(u=Object.create(n),i.isFunction(u.unsubscribe)&&this.add(u.unsubscribe.bind(u)),u.unsubscribe=this.unsubscribe.bind(this))),this._context=u,this._next=s,this._error=r,this._complete=o}return r(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber;if(this._error)t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else{if(!t.syncErrorThrowable)throw this.unsubscribe(),e;t.syncErrorValue=e,t.syncErrorThrown=!0,this.unsubscribe()}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){throw this.unsubscribe(),e}},t.prototype.__tryOrSetError=function(e,t,n){try{t.call(this._context,n)}catch(t){return e.syncErrorValue=t,e.syncErrorThrown=!0,!0}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(u)},function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(284),i=(n.n(r),n(49)),o=(n.n(i),n(285)),a=n(94),s=n(286),u=(n(95),n(214),function(){function e(e,t){this.userInteractionHandlerService=e,this.userInteractionValidatorService=t,this.paused=!1,this.events=new i.Subject,this.story=new r.Story(n(289)),this.storyPoints=[],this.userInteractionHandlerService.init(this.story)}return e.prototype.start=function(){this.paused=!1,this.proceed()},e.prototype.pause=function(){this.paused=!0},e.prototype.triggerUserInteraction=function(e){if("string"==typeof e){if(this.currentUserInteraction.validator){var t=this.userInteractionValidatorService.validate(this.currentUserInteraction.validator,e);this.story.variablesState.$("validationError",t||"")}this.currentUserInteraction.handler&&this.userInteractionHandlerService.handle(this.currentUserInteraction.handler,e),this.currentUserInteraction.stateVar&&this.story.variablesState.$(this.currentUserInteraction.stateVar,e),this.story.ChooseChoiceIndex(0)}else this.story.ChooseChoiceIndex(e.index);this.currentUserInteraction=null,this.proceed()},e.prototype.proceed=function(){var e=this;if(!this.paused&&this.story)if(this.story.canContinue){var t=this.buildStoryPointFromMessage(this.story.Continue());setTimeout(function(){e.storyPoints.push(t),e.events.next({type:o.a.STORY_POINT_ADDED,data:t}),e.proceed()},t.options.delay)}else this.story.currentChoices.length>0&&(this.currentUserInteraction=this.buildUserInteractionFromChoices(this.story.currentChoices),this.events.next({type:o.a.USER_INTERACTION_STARTED,data:this.currentUserInteraction}))},e.prototype.buildStoryPointFromMessage=function(e){var t=this.story.currentTags.length>0?this.story.currentTags[0]:"{}";return{displayMessage:e,originalMessage:e,options:this.buildStoryPointOptionsFromTag(t)}},e.prototype.buildStoryPointOptionsFromTag=function(e){var t=JSON.parse(e);return Object.assign({delay:t.sender===s.a.USER?0:2e3,sender:s.a.BOT},t)},e.prototype.buildUserInteractionFromChoices=function(e){var t=this.story.currentTags.length>0?JSON.parse(this.story.currentTags[0]):{};return e=e.map(function(e){return{index:e.index,text:e.text}}),Object.assign({choices:e,type:a.a.DEFAULT},t.userInteraction||{})},e}())},,,,function(e,t,n){"use strict";(function(e){var n="undefined"!=typeof window&&window,r="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,i=n||void 0!==e&&e||r;t.root=i,function(){if(!i)throw new Error("RxJS could not find any global context (window, self, global)")}()}).call(t,n(38))},,,,,,function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,,,,,,function(e,t,n){"use strict";t.b=function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},n.d(t,"a",function(){return i});/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}},function(e,t,n){"use strict";function r(e){return e.reduce(function(e,t){return e.concat(t instanceof l.UnsubscriptionError?t.errors:t)},[])}var i=n(81),o=n(82),a=n(80),s=n(261),u=n(83),l=n(262),c=function(){function e(e){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var e,t=!1;if(!this.closed){var n=this._parent,c=this._parents,d=this._unsubscribe,h=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var f=-1,p=c?c.length:0;n;)n.remove(this),n=++f<p&&c[f]||null;if(a.isFunction(d)){(m=s.tryCatch(d).call(this))===u.errorObject&&(t=!0,e=e||(u.errorObject.e instanceof l.UnsubscriptionError?r(u.errorObject.e.errors):[u.errorObject.e]))}if(i.isArray(h))for(f=-1,p=h.length;++f<p;){var _=h[f];if(o.isObject(_)){var m=s.tryCatch(_.unsubscribe).call(_);if(m===u.errorObject){t=!0,e=e||[];var y=u.errorObject.e;y instanceof l.UnsubscriptionError?e=e.concat(r(y.errors)):e.push(y)}}}if(t)throw new l.UnsubscriptionError(e)}},e.prototype.add=function(t){if(!t||t===e.EMPTY)return e.EMPTY;if(t===this)return this;var n=t;switch(typeof t){case"function":n=new e(t);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.prototype._addParent=function(e){var t=this._parent,n=this._parents;t&&t!==e?n?-1===n.indexOf(e)&&n.push(e):this._parents=[e]:this._parent=e},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();t.Subscription=c},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(17),o=n(27),a=n(48),s=n(280),u=n(281),l=n(59),c=function(e){function t(t){e.call(this,t),this.destination=t}return r(t,e),t}(o.Subscriber);t.SubjectSubscriber=c;var d=function(e){function t(){e.call(this),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}return r(t,e),t.prototype[l.rxSubscriber]=function(){return new c(this)},t.prototype.lift=function(e){var t=new h(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new s.ObjectUnsubscribedError;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].next(e)},t.prototype.error=function(e){if(this.closed)throw new s.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new s.ObjectUnsubscribedError;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new s.ObjectUnsubscribedError;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new s.ObjectUnsubscribedError;return this.hasError?(e.error(this.thrownError),a.Subscription.EMPTY):this.isStopped?(e.complete(),a.Subscription.EMPTY):(this.observers.push(e),new u.SubjectSubscription(this,e))},t.prototype.asObservable=function(){var e=new i.Observable;return e.source=this,e},t.create=function(e,t){return new h(e,t)},t}(i.Observable);t.Subject=d;var h=function(e){function t(t,n){e.call(this),this.destination=t,this.source=n}return r(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):a.Subscription.EMPTY},t}(d);t.AnonymousSubject=h},function(e,t,n){"use strict";function r(e){return e.replace(/\/index.html$/,"")}function i(e,t){return d(e)[10][t]}function o(e,t){return d(e)[11][t]}function a(e,t){return l(d(e)[12],t)}function s(e,t){var n=d(e),r=n[13][t];if(void 0===r){if(t===ee.CurrencyDecimal)return n[13][ee.Decimal];if(t===ee.CurrencyGroup)return n[13][ee.Group]}return r}function u(e){if(!e[18])throw new Error('Missing extra locale data for the locale "'+e[0]+'". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.')}function l(e,t){for(var n=t;n>-1;n--)if(void 0!==e[n])return e[n];throw new Error("Locale data API: locale data undefined")}function c(e){var t=e.split(":");return{hours:+t[0],minutes:+t[1]}}function d(e){var t=e.toLowerCase().replace(/_/g,"-"),n=K[t];if(n)return n;var r=t.split("-")[0];if(n=K[r])return n;if("en"===r)return J;throw new Error('Missing locale data for the locale "'+e+'".')}function h(e,t,n,r){var i="="+e;if(t.indexOf(i)>-1)return i;if(i=n.getPluralCategory(e,r),t.indexOf(i)>-1)return i;if(t.indexOf("other")>-1)return"other";throw new Error('No plural message found for value "'+e+'"')}function f(e,t){t=encodeURIComponent(t);for(var n=0,r=e.split(";");n<r.length;n++){var i=r[n],o=i.indexOf("="),a=-1==o?[i,""]:[i.slice(0,o),i.slice(o+1)],s=a[1];if(a[0].trim()===t)return decodeURIComponent(s)}return null}function p(e,t,n,r){t=_(n,t)||t;for(var i,o=[];t;){if(!(i=we.exec(t))){o.push(t);break}var a=(o=o.concat(i.slice(1))).pop();if(!a)break;t=a}var s=e.getTimezoneOffset();r&&(s=w(r,s),e=function(e,t,n){var r=n?-1:1,i=e.getTimezoneOffset(),o=w(t,i);return function(e,t){return(e=new Date(e.getTime())).setMinutes(e.getMinutes()+t),e}(e,r*(o-i))}(e,r,!0));var u="";return o.forEach(function(t){var r=function(e){if(De[e])return De[e];var t;switch(e){case"G":case"GG":case"GGG":t=v(Te.Eras,Q.Abbreviated);break;case"GGGG":t=v(Te.Eras,Q.Wide);break;case"GGGGG":t=v(Te.Eras,Q.Narrow);break;case"y":t=g(ke.FullYear,1,0,!1,!0);break;case"yy":t=g(ke.FullYear,2,0,!0,!0);break;case"yyy":t=g(ke.FullYear,3,0,!1,!0);break;case"yyyy":t=g(ke.FullYear,4,0,!1,!0);break;case"M":case"L":t=g(ke.Month,1,1);break;case"MM":case"LL":t=g(ke.Month,2,1);break;case"MMM":t=v(Te.Months,Q.Abbreviated);break;case"MMMM":t=v(Te.Months,Q.Wide);break;case"MMMMM":t=v(Te.Months,Q.Narrow);break;case"LLL":t=v(Te.Months,Q.Abbreviated,Z.Standalone);break;case"LLLL":t=v(Te.Months,Q.Wide,Z.Standalone);break;case"LLLLL":t=v(Te.Months,Q.Narrow,Z.Standalone);break;case"w":t=M(1);break;case"ww":t=M(2);break;case"W":t=M(1,!0);break;case"d":t=g(ke.Date,1);break;case"dd":t=g(ke.Date,2);break;case"E":case"EE":case"EEE":t=v(Te.Days,Q.Abbreviated);break;case"EEEE":t=v(Te.Days,Q.Wide);break;case"EEEEE":t=v(Te.Days,Q.Narrow);break;case"EEEEEE":t=v(Te.Days,Q.Short);break;case"a":case"aa":case"aaa":t=v(Te.DayPeriods,Q.Abbreviated);break;case"aaaa":t=v(Te.DayPeriods,Q.Wide);break;case"aaaaa":t=v(Te.DayPeriods,Q.Narrow);break;case"b":case"bb":case"bbb":t=v(Te.DayPeriods,Q.Abbreviated,Z.Standalone,!0);break;case"bbbb":t=v(Te.DayPeriods,Q.Wide,Z.Standalone,!0);break;case"bbbbb":t=v(Te.DayPeriods,Q.Narrow,Z.Standalone,!0);break;case"B":case"BB":case"BBB":t=v(Te.DayPeriods,Q.Abbreviated,Z.Format,!0);break;case"BBBB":t=v(Te.DayPeriods,Q.Wide,Z.Format,!0);break;case"BBBBB":t=v(Te.DayPeriods,Q.Narrow,Z.Format,!0);break;case"h":t=g(ke.Hours,1,-12);break;case"hh":t=g(ke.Hours,2,-12);break;case"H":t=g(ke.Hours,1);break;case"HH":t=g(ke.Hours,2);break;case"m":t=g(ke.Minutes,1);break;case"mm":t=g(ke.Minutes,2);break;case"s":t=g(ke.Seconds,1);break;case"ss":t=g(ke.Seconds,2);break;case"S":t=g(ke.Milliseconds,1);break;case"SS":t=g(ke.Milliseconds,2);break;case"SSS":t=g(ke.Milliseconds,3);break;case"Z":case"ZZ":case"ZZZ":t=b(Le.Short);break;case"ZZZZZ":t=b(Le.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=b(Le.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=b(Le.Long);break;default:return null}return De[e]=t,t}(t);u+=r?r(e,n,s):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function _(e,t){var n=function(e){return d(e)[0]}(e);if(Me[n]=Me[n]||{},Me[n][t])return Me[n][t];var r="";switch(t){case"shortDate":r=i(e,X.Short);break;case"mediumDate":r=i(e,X.Medium);break;case"longDate":r=i(e,X.Long);break;case"fullDate":r=i(e,X.Full);break;case"shortTime":r=o(e,X.Short);break;case"mediumTime":r=o(e,X.Medium);break;case"longTime":r=o(e,X.Long);break;case"fullTime":r=o(e,X.Full);break;case"short":var s=_(e,"shortTime"),u=_(e,"shortDate");r=m(a(e,X.Short),[s,u]);break;case"medium":var l=_(e,"mediumTime"),c=_(e,"mediumDate");r=m(a(e,X.Medium),[l,c]);break;case"long":var h=_(e,"longTime"),f=_(e,"longDate");r=m(a(e,X.Long),[h,f]);break;case"full":var p=_(e,"fullTime"),y=_(e,"fullDate");r=m(a(e,X.Full),[p,y])}return r&&(Me[n][t]=r),r}function m(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(e,n){return null!=t&&n in t?t[n]:e})),e}function y(e,t,n,r,i){void 0===n&&(n="-");var o="";(e<0||i&&e<=0)&&(i?e=1-e:(e=-e,o=n));for(var a=""+e;a.length<t;)a="0"+a;return r&&(a=a.substr(a.length-t)),o+a}function g(e,t,n,r,i){return void 0===n&&(n=0),void 0===r&&(r=!1),void 0===i&&(i=!1),function(o,a){var u=function(e,t,n){switch(e){case ke.FullYear:return t.getFullYear();case ke.Month:return t.getMonth();case ke.Date:return t.getDate();case ke.Hours:return t.getHours();case ke.Minutes:return t.getMinutes();case ke.Seconds:return t.getSeconds();case ke.Milliseconds:var r=1===n?100:2===n?10:1;return Math.round(t.getMilliseconds()/r);case ke.Day:return t.getDay();default:throw new Error('Unknown DateType value "'+e+'".')}}(e,o,t);return(n>0||u>-n)&&(u+=n),e===ke.Hours&&0===u&&-12===n&&(u=12),y(u,t,s(a,ee.MinusSign),r,i)}}function v(e,t,n,r){return void 0===n&&(n=Z.Format),void 0===r&&(r=!1),function(i,o){return function(e,t,n,r,i,o){switch(n){case Te.Months:return function(e,t,n){var r=d(e);return l(l([r[5],r[6]],t),n)}(t,i,r)[e.getMonth()];case Te.Days:return function(e,t,n){var r=d(e);return l(l([r[3],r[4]],t),n)}(t,i,r)[e.getDay()];case Te.DayPeriods:var a=e.getHours(),s=e.getMinutes();if(o){var h,f=function(e){var t=d(e);return u(t),(t[18][2]||[]).map(function(e){return"string"==typeof e?c(e):[c(e[0]),c(e[1])]})}(t),p=function(e,t,n){var r=d(e);return u(r),l(l([r[18][0],r[18][1]],t)||[],n)||[]}(t,i,r);if(f.forEach(function(e,t){if(Array.isArray(e)){var n=e[0],r=n.hours,i=n.minutes,o=e[1],u=o.hours,l=o.minutes;a>=r&&s>=i&&(a<u||a===u&&s<l)&&(h=p[t])}else{var c=e.hours,d=e.minutes;c===a&&d===s&&(h=p[t])}}),h)return h}return function(e,t,n){var r=d(e);return l(l([r[1],r[2]],t),n)}(t,i,r)[a<12?0:1];case Te.Eras:return function(e,t){return l(d(e)[7],t)}(t,r)[e.getFullYear()<=0?0:1]}}(i,o,e,t,n,r)}}function b(e){return function(t,n,r){var i=-1*r,o=s(n,ee.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case Le.Short:return(i>=0?"+":"")+y(a,2,o)+y(Math.abs(i%60),2,o);case Le.ShortGMT:return"GMT"+(i>=0?"+":"")+y(a,1,o);case Le.Long:return"GMT"+(i>=0?"+":"")+y(a,2,o)+":"+y(Math.abs(i%60),2,o);case Le.Extended:return 0===r?"Z":(i>=0?"+":"")+y(a,2,o)+":"+y(Math.abs(i%60),2,o);default:throw new Error('Unknown zone width "'+e+'"')}}}function M(e,t){return void 0===t&&(t=!1),function(n,r){var i;if(t){var o=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,a=n.getDate();i=1+Math.floor((a+o)/7)}else{var u=function(e){var t=new Date(e,Ye,1).getDay();return new Date(e,0,1+(t<=Se?Se:Se+7)-t)}(n.getFullYear()),l=function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(Se-e.getDay()))}(n).getTime()-u.getTime();i=1+Math.round(l/6048e5)}return y(i,e,s(r,ee.MinusSign))}}function w(e,t){e=e.replace(/:/g,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function L(e,t){return Error("InvalidPipeArgument: '"+t+"' for pipe '"+Object(F._22)(e)+"'")}function k(e){var t=new Date(0),n=0,r=0,i=e[8]?t.setUTCFullYear:t.setFullYear,o=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=+(e[9]+e[10]),r=+(e[9]+e[11])),i.call(t,+e[1],+e[2]-1,+e[3]);var a=+(e[4]||"0")-n,s=+(e[5]||"0")-r,u=+(e[6]||"0"),l=Math.round(1e3*parseFloat("0."+(e[7]||0)));return o.call(t,a,s,u,l),t}function T(e){return e instanceof Date&&!isNaN(e.valueOf())}function Y(e){return function(t,n){var r=e(t,n);return 1==r.length?"0"+r:r}}function S(e){return function(t,n){return e(t,n).split(" ")[0]}}function D(e,t,n){return new Intl.DateTimeFormat(t,n).format(e).replace(/[\u200e\u200f]/g,"")}function C(e){var t={hour:"2-digit",hour12:!1,timeZoneName:e};return function(e,n){var r=D(e,n,t);return r?r.substring(3):""}}function O(e,t){return e.hour12=t,e}function x(e,t){var n={};return n[e]=2===t?"2-digit":"numeric",n}function E(e,t){var n={};return n[e]=t<4?t>1?"short":"narrow":"long",n}function j(e){return e.reduce(function(e,t){return Object(R.a)({},e,t)},{})}function P(e){return function(t,n){return D(t,n,e)}}function A(e){return e instanceof Date&&!isNaN(e.valueOf())}function H(e,t,n,r,i){void 0===i&&(i=null);var o,a={str:null},u=function(e,t){return d(e)[14][t]}(t,n);if("string"!=typeof e||isNaN(+e-parseFloat(e))){if("number"!=typeof e)return a.error=e+" is not a number",a;o=e}else o=+e;n===$.Percent&&(o*=100);var l=Math.abs(o)+"",c=function(e,t){void 0===t&&(t="-");var n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=e.split(We),i=r[0],o=r[1],a=-1!==i.indexOf(Fe)?i.split(Fe):[i.substring(0,i.lastIndexOf(Re)+1),i.substring(i.lastIndexOf(Re)+1)],s=a[0],u=a[1]||"";n.posPre=s.substr(0,s.indexOf(Ge));for(var l=0;l<u.length;l++){var c=u.charAt(l);c===Re?n.minFrac=n.maxFrac=l+1:c===Ge?n.maxFrac=l+1:n.posSuf+=c}var d=s.split(ze);if(n.gSize=d[1]?d[1].length:0,n.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){var h=i.length-n.posPre.length-n.posSuf.length,f=o.indexOf(Ge);n.negPre=o.substr(0,f).replace(/'/g,""),n.negSuf=o.substr(f+h).replace(/'/g,"")}else n.negPre=t+n.posPre,n.negSuf=n.posSuf;return n}(u,s(t,ee.MinusSign)),h="",f=!1;if(isFinite(o)){var p=function(e){var t,n,r,i,o,a=0;(n=e.indexOf(Fe))>-1&&(e=e.replace(Fe,""));(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length);for(r=0;e.charAt(r)===Re;r++);if(r===(o=e.length))t=[0],n=1;else{for(o--;e.charAt(o)===Re;)o--;for(n-=r,t=[],i=0;r<=o;r++,i++)t[i]=+e.charAt(r)}n>Ve&&(t=t.splice(0,Ve-1),a=n-1,n=1);return{digits:t,exponent:a,integerLen:n}}(l),_=c.minInt,m=c.minFrac,y=c.maxFrac;if(r){var g=r.match(Ne);if(null===g)return a.error=r+" is not a valid digit info",a;var v=g[1],b=g[3],M=g[5];null!=v&&(_=I(v)),null!=b&&(m=I(b)),null!=M?y=I(M):null!=b&&m>y&&(y=m)}!function(e,t,n){if(t>n)throw new Error("The minimum number of digits after fraction ("+t+") is higher than the maximum ("+n+").");var r=e.digits,i=r.length-e.integerLen,o=Math.min(Math.max(t,i),n),a=o+e.integerLen,s=r[a];if(a>0){r.splice(Math.max(e.integerLen,a));for(var u=a;u<r.length;u++)r[u]=0}else{i=Math.max(0,i),e.integerLen=1,r.length=Math.max(1,a=o+1),r[0]=0;for(var l=1;l<a;l++)r[l]=0}if(s>=5)if(a-1<0){for(var c=0;c>a;c--)r.unshift(0),e.integerLen++;r.unshift(1),e.integerLen++}else r[a-1]++;for(;i<Math.max(0,o);i++)r.push(0);var d=r.reduceRight(function(e,t,n,r){return t+=e,r[n]=t%10,Math.floor(t/10)},0);d&&(r.unshift(d),e.integerLen++)}(p,m,y);var w=p.digits,L=p.integerLen,k=p.exponent,T=[];for(f=w.every(function(e){return!e});L<_;L++)w.unshift(0);for(;L<0;L++)w.unshift(0);L>0?T=w.splice(L,w.length):(T=w,w=[0]);var Y=[];for(w.length>=c.lgSize&&Y.unshift(w.splice(-c.lgSize,w.length).join(""));w.length>c.gSize;)Y.unshift(w.splice(-c.gSize,w.length).join(""));w.length&&Y.unshift(w.join(""));var S=i?ee.CurrencyGroup:ee.Group;if(h=Y.join(s(t,S)),T.length){h+=s(t,i?ee.CurrencyDecimal:ee.Decimal)+T.join("")}k&&(h+=s(t,ee.Exponential)+"+"+k)}else h=s(t,ee.Infinity);return h=o<0&&!f?c.negPre+h+c.negSuf:c.posPre+h+c.posSuf,n===$.Currency&&null!==i?(a.str=h.replace(Ue,i).replace(Ue,""),a):n===$.Percent?(a.str=h.replace(new RegExp(Be,"g"),s(t,ee.PercentSign)),a):(a.str=h,a)}function I(e){var t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function N(e,t,n,r,i,o,a){if(void 0===o&&(o=null),void 0===a&&(a=!1),null==n)return null;if("number"!=typeof(n="string"!=typeof n||isNaN(+n-parseFloat(n))?n:+n))throw L(e,n);var s,u,l;if(r!==$.Currency&&(s=1,u=0,l=3),i){var c=i.match(Ne);if(null===c)throw new Error(i+" is not a valid digit info for number pipes");null!=c[1]&&(s=I(c[1])),null!=c[3]&&(u=I(c[3])),null!=c[5]&&(l=I(c[5]))}return xe.format(n,t,r,{minimumIntegerDigits:s,minimumFractionDigits:u,maximumFractionDigits:l,currency:o,currencyAsSymbol:a})}function V(e){return null==e||""===e||e!=e}n.d(t,"e",function(){return ie}),n.d(t,"f",function(){return re}),n.d(t,"j",function(){return f}),n.d(t,"a",function(){return lt}),n.d(t,"c",function(){return ue}),n.d(t,"d",function(){return ce}),n.d(t,"b",function(){return dt}),n.d(t,"h",function(){return ht}),n.d(t,"g",function(){return W}),n.d(t,"i",function(){return ne});var F=n(12),R=n(47),W=function(){return function(){}}(),z=(new F.q("Location Initialized"),function(){return function(){}}()),G=new F.q("appBaseHref"),U=function(){function e(t){var n=this;this._subject=new F.m,this._platformStrategy=t;var i=this._platformStrategy.getBaseHref();this._baseHref=e.stripTrailingSlash(r(i)),this._platformStrategy.onPopState(function(e){n._subject.emit({url:n.path(!0),pop:!0,type:e.type})})}return e.prototype.path=function(e){return void 0===e&&(e=!1),this.normalize(this._platformStrategy.path(e))},e.prototype.isCurrentPathEqualTo=function(t,n){return void 0===n&&(n=""),this.path()==this.normalize(t+e.normalizeQueryParams(n))},e.prototype.normalize=function(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,r(t)))},e.prototype.prepareExternalUrl=function(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)},e.prototype.go=function(e,t){void 0===t&&(t=""),this._platformStrategy.pushState(null,"",e,t)},e.prototype.replaceState=function(e,t){void 0===t&&(t=""),this._platformStrategy.replaceState(null,"",e,t)},e.prototype.forward=function(){this._platformStrategy.forward()},e.prototype.back=function(){this._platformStrategy.back()},e.prototype.subscribe=function(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})},e.normalizeQueryParams=function(e){return e&&"?"!==e[0]?"?"+e:e},e.joinWithSlash=function(e,t){if(0==e.length)return t;if(0==t.length)return e;var n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t},e.stripTrailingSlash=function(e){var t=e.match(/#|\?|$/),n=t&&t.index||e.length,r=n-("/"===e[n-1]?1:0);return e.slice(0,r)+e.slice(n)},e.decorators=[{type:F.p}],e.ctorParameters=function(){return[{type:z}]},e}(),B=(function(e){function t(t,n){var r=e.call(this)||this;return r._platformLocation=t,r._baseHref="",null!=n&&(r._baseHref=n),r}Object(R.b)(t,e),t.prototype.onPopState=function(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)},t.prototype.getBaseHref=function(){return this._baseHref},t.prototype.path=function(e){void 0===e&&(e=!1);var t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t},t.prototype.prepareExternalUrl=function(e){var t=U.joinWithSlash(this._baseHref,e);return t.length>0?"#"+t:t},t.prototype.pushState=function(e,t,n,r){var i=this.prepareExternalUrl(n+U.normalizeQueryParams(r));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.pushState(e,t,i)},t.prototype.replaceState=function(e,t,n,r){var i=this.prepareExternalUrl(n+U.normalizeQueryParams(r));0==i.length&&(i=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,i)},t.prototype.forward=function(){this._platformLocation.forward()},t.prototype.back=function(){this._platformLocation.back()},t.decorators=[{type:F.p}],t.ctorParameters=function(){return[{type:W},{type:void 0,decorators:[{type:F.A},{type:F.o,args:[G]}]}]}}(z),function(e){function t(t,n){var r=e.call(this)||this;if(r._platformLocation=t,null==n&&(n=r._platformLocation.getBaseHrefFromDOM()),null==n)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");return r._baseHref=n,r}Object(R.b)(t,e),t.prototype.onPopState=function(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)},t.prototype.getBaseHref=function(){return this._baseHref},t.prototype.prepareExternalUrl=function(e){return U.joinWithSlash(this._baseHref,e)},t.prototype.path=function(e){void 0===e&&(e=!1);var t=this._platformLocation.pathname+U.normalizeQueryParams(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?""+t+n:t},t.prototype.pushState=function(e,t,n,r){var i=this.prepareExternalUrl(n+U.normalizeQueryParams(r));this._platformLocation.pushState(e,t,i)},t.prototype.replaceState=function(e,t,n,r){var i=this.prepareExternalUrl(n+U.normalizeQueryParams(r));this._platformLocation.replaceState(e,t,i)},t.prototype.forward=function(){this._platformLocation.forward()},t.prototype.back=function(){this._platformLocation.back()},t.decorators=[{type:F.p}],t.ctorParameters=function(){return[{type:W},{type:void 0,decorators:[{type:F.A},{type:F.o,args:[G]}]}]}}(z),{AOA:[,"Kz"],ARS:[,"$"],AUD:["A$","$"],BAM:[,"KM"],BBD:[,"$"],BDT:[,"৳"],BMD:[,"$"],BND:[,"$"],BOB:[,"Bs"],BRL:["R$"],BSD:[,"$"],BWP:[,"P"],BYN:[,"р."],BZD:[,"$"],CAD:["CA$","$"],CLP:[,"$"],CNY:["CN¥","¥"],COP:[,"$"],CRC:[,"₡"],CUC:[,"$"],CUP:[,"$"],CZK:[,"Kč"],DKK:[,"kr"],DOP:[,"$"],EGP:[,"E£"],ESP:[,"₧"],EUR:["€"],FJD:[,"$"],FKP:[,"£"],GBP:["£"],GEL:[,"₾"],GIP:[,"£"],GNF:[,"FG"],GTQ:[,"Q"],GYD:[,"$"],HKD:["HK$","$"],HNL:[,"L"],HRK:[,"kn"],HUF:[,"Ft"],IDR:[,"Rp"],ILS:["₪"],INR:["₹"],ISK:[,"kr"],JMD:[,"$"],JPY:["¥"],KHR:[,"៛"],KMF:[,"CF"],KPW:[,"₩"],KRW:["₩"],KYD:[,"$"],KZT:[,"₸"],LAK:[,"₭"],LBP:[,"L£"],LKR:[,"Rs"],LRD:[,"$"],LTL:[,"Lt"],LVL:[,"Ls"],MGA:[,"Ar"],MMK:[,"K"],MNT:[,"₮"],MUR:[,"Rs"],MXN:["MX$","$"],MYR:[,"RM"],NAD:[,"$"],NGN:[,"₦"],NIO:[,"C$"],NOK:[,"kr"],NPR:[,"Rs"],NZD:["NZ$","$"],PHP:[,"₱"],PKR:[,"Rs"],PLN:[,"zł"],PYG:[,"₲"],RON:[,"lei"],RUB:[,"₽"],RUR:[,"р."],RWF:[,"RF"],SBD:[,"$"],SEK:[,"kr"],SGD:[,"$"],SHP:[,"£"],SRD:[,"$"],SSP:[,"£"],STD:[,"Db"],SYP:[,"£"],THB:[,"฿"],TOP:[,"T$"],TRY:[,"₺"],TTD:[,"$"],TWD:["NT$","$"],UAH:[,"₴"],USD:["$"],UYU:[,"$"],VEF:[,"Bs"],VND:["₫"],XAF:["FCFA"],XCD:["EC$","$"],XOF:["CFA"],XPF:["CFPF"],ZAR:[,"R"],ZMW:[,"ZK"]}),J=["en",[["a","p"],["AM","PM"]],[["AM","PM"],,],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",,"{1} 'at' {0}"],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"$","US Dollar",function(e){var t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}],K={},$={Decimal:0,Percent:1,Currency:2,Scientific:3};$[$.Decimal]="Decimal",$[$.Percent]="Percent",$[$.Currency]="Currency",$[$.Scientific]="Scientific";var q={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};q[q.Zero]="Zero",q[q.One]="One",q[q.Two]="Two",q[q.Few]="Few",q[q.Many]="Many",q[q.Other]="Other";var Z={Format:0,Standalone:1};Z[Z.Format]="Format",Z[Z.Standalone]="Standalone";var Q={Narrow:0,Abbreviated:1,Wide:2,Short:3};Q[Q.Narrow]="Narrow",Q[Q.Abbreviated]="Abbreviated",Q[Q.Wide]="Wide",Q[Q.Short]="Short";var X={Short:0,Medium:1,Long:2,Full:3};X[X.Short]="Short",X[X.Medium]="Medium",X[X.Long]="Long",X[X.Full]="Full";var ee={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};ee[ee.Decimal]="Decimal",ee[ee.Group]="Group",ee[ee.List]="List",ee[ee.PercentSign]="PercentSign",ee[ee.PlusSign]="PlusSign",ee[ee.MinusSign]="MinusSign",ee[ee.Exponential]="Exponential",ee[ee.SuperscriptingExponent]="SuperscriptingExponent",ee[ee.PerMille]="PerMille",ee[ee.Infinity]="Infinity",ee[ee.NaN]="NaN",ee[ee.TimeSeparator]="TimeSeparator",ee[ee.CurrencyDecimal]="CurrencyDecimal",ee[ee.CurrencyGroup]="CurrencyGroup";var te={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};te[te.Sunday]="Sunday",te[te.Monday]="Monday",te[te.Tuesday]="Tuesday",te[te.Wednesday]="Wednesday",te[te.Thursday]="Thursday",te[te.Friday]="Friday",te[te.Saturday]="Saturday";/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ne=new F.q("UseV4Plurals"),re=function(){return function(){}}(),ie=function(e){function t(t,n){var r=e.call(this)||this;return r.locale=t,r.deprecatedPluralFn=n,r}return Object(R.b)(t,e),t.prototype.getPluralCategory=function(e,t){switch(this.deprecatedPluralFn?this.deprecatedPluralFn(t||this.locale,e):function(e){return d(e)[17]}(t||this.locale)(e)){case q.Zero:return"zero";case q.One:return"one";case q.Two:return"two";case q.Few:return"few";case q.Many:return"many";default:return"other"}},t.decorators=[{type:F.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]},{type:void 0,decorators:[{type:F.A},{type:F.o,args:[ne]}]}]},t}(re),oe=function(){function e(e,t,n,r){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=n,this._renderer=r,this._initialClasses=[]}return Object.defineProperty(e.prototype,"klass",{set:function(e){this._applyInitialClasses(!0),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyInitialClasses(!1),this._applyClasses(this._rawClass,!1)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngClass",{set:function(e){this._cleanupClasses(this._rawClass),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Object(F._10)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())},enumerable:!0,configurable:!0}),e.prototype.ngDoCheck=function(){if(this._iterableDiffer){var e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){var t=this._keyValueDiffer.diff(this._rawClass);t&&this._applyKeyValueChanges(t)}},e.prototype._cleanupClasses=function(e){this._applyClasses(e,!0),this._applyInitialClasses(!1)},e.prototype._applyKeyValueChanges=function(e){var t=this;e.forEachAddedItem(function(e){return t._toggleClass(e.key,e.currentValue)}),e.forEachChangedItem(function(e){return t._toggleClass(e.key,e.currentValue)}),e.forEachRemovedItem(function(e){e.previousValue&&t._toggleClass(e.key,!1)})},e.prototype._applyIterableChanges=function(e){var t=this;e.forEachAddedItem(function(e){if("string"!=typeof e.item)throw new Error("NgClass can only toggle CSS classes expressed as strings, got "+Object(F._22)(e.item));t._toggleClass(e.item,!0)}),e.forEachRemovedItem(function(e){return t._toggleClass(e.item,!1)})},e.prototype._applyInitialClasses=function(e){var t=this;this._initialClasses.forEach(function(n){return t._toggleClass(n,!e)})},e.prototype._applyClasses=function(e,t){var n=this;e&&(Array.isArray(e)||e instanceof Set?e.forEach(function(e){return n._toggleClass(e,!t)}):Object.keys(e).forEach(function(r){null!=e[r]&&n._toggleClass(r,!t)}))},e.prototype._toggleClass=function(e,t){var n=this;(e=e.trim())&&e.split(/\s+/g).forEach(function(e){t?n._renderer.addClass(n._ngEl.nativeElement,e):n._renderer.removeClass(n._ngEl.nativeElement,e)})},e.decorators=[{type:F.j,args:[{selector:"[ngClass]"}]}],e.ctorParameters=function(){return[{type:F.t},{type:F.u},{type:F.k},{type:F.F}]},e.propDecorators={klass:[{type:F.s,args:["class"]}],ngClass:[{type:F.s}]},e}(),ae=function(){function e(e){this._viewContainerRef=e,this._componentRef=null,this._moduleRef=null}return e.prototype.ngOnChanges=function(e){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){var t=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(e.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){var n=t.get(F.x);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(n.injector)}else this._moduleRef=null;var r=(this._moduleRef?this._moduleRef.componentFactoryResolver:t.get(F.i)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(r,this._viewContainerRef.length,t,this.ngComponentOutletContent)}},e.prototype.ngOnDestroy=function(){this._moduleRef&&this._moduleRef.destroy()},e.decorators=[{type:F.j,args:[{selector:"[ngComponentOutlet]"}]}],e.ctorParameters=function(){return[{type:F.Q}]},e.propDecorators={ngComponentOutlet:[{type:F.s}],ngComponentOutletInjector:[{type:F.s}],ngComponentOutletContent:[{type:F.s}],ngComponentOutletNgModuleFactory:[{type:F.s}]},e}(),se=function(){function e(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}return Object.defineProperty(e.prototype,"first",{get:function(){return 0===this.index},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){return this.index===this.count-1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"even",{get:function(){return this.index%2==0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"odd",{get:function(){return!this.even},enumerable:!0,configurable:!0}),e}(),ue=function(){function e(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._differ=null}return Object.defineProperty(e.prototype,"ngForTrackBy",{get:function(){return this._trackByFn},set:function(e){Object(F.X)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn("trackBy must be a function, but received "+JSON.stringify(e)+". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."),this._trackByFn=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngForTemplate",{set:function(e){e&&(this._template=e)},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(e){if("ngForOf"in e){var t=e.ngForOf.currentValue;if(!this._differ&&t)try{this._differ=this._differs.find(t).create(this.ngForTrackBy)}catch(e){throw new Error("Cannot find a differ supporting object '"+t+"' of type '"+function(e){return e.name||typeof e}(t)+"'. NgFor only supports binding to Iterables such as Arrays.")}}},e.prototype.ngDoCheck=function(){if(this._differ){var e=this._differ.diff(this.ngForOf);e&&this._applyChanges(e)}},e.prototype._applyChanges=function(e){var t=this,n=[];e.forEachOperation(function(e,r,i){if(null==e.previousIndex){var o=t._viewContainer.createEmbeddedView(t._template,new se(null,t.ngForOf,-1,-1),i),a=new le(e,o);n.push(a)}else if(null==i)t._viewContainer.remove(r);else{o=t._viewContainer.get(r);t._viewContainer.move(o,i);a=new le(e,o);n.push(a)}});for(r=0;r<n.length;r++)this._perViewChange(n[r].view,n[r].record);for(var r=0,i=this._viewContainer.length;r<i;r++){var o=this._viewContainer.get(r);o.context.index=r,o.context.count=i}e.forEachIdentityChange(function(e){t._viewContainer.get(e.currentIndex).context.$implicit=e.item})},e.prototype._perViewChange=function(e,t){e.context.$implicit=t.item},e.decorators=[{type:F.j,args:[{selector:"[ngFor][ngForOf]"}]}],e.ctorParameters=function(){return[{type:F.Q},{type:F.N},{type:F.t}]},e.propDecorators={ngForOf:[{type:F.s}],ngForTrackBy:[{type:F.s}],ngForTemplate:[{type:F.s}]},e}(),le=function(){return function(e,t){this.record=e,this.view=t}}(),ce=function(){function e(e,t){this._viewContainer=e,this._context=new de,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}return Object.defineProperty(e.prototype,"ngIf",{set:function(e){this._context.$implicit=this._context.ngIf=e,this._updateView()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngIfThen",{set:function(e){this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ngIfElse",{set:function(e){this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()},enumerable:!0,configurable:!0}),e.prototype._updateView=function(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))},e.decorators=[{type:F.j,args:[{selector:"[ngIf]"}]}],e.ctorParameters=function(){return[{type:F.Q},{type:F.N}]},e.propDecorators={ngIf:[{type:F.s}],ngIfThen:[{type:F.s}],ngIfElse:[{type:F.s}]},e}(),de=function(){return function(){this.$implicit=null,this.ngIf=null}}(),he=function(){function e(e,t){this._viewContainerRef=e,this._templateRef=t,this._created=!1}return e.prototype.create=function(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)},e.prototype.destroy=function(){this._created=!1,this._viewContainerRef.clear()},e.prototype.enforceState=function(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()},e}(),fe=function(){function e(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}return Object.defineProperty(e.prototype,"ngSwitch",{set:function(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)},enumerable:!0,configurable:!0}),e.prototype._addCase=function(){return this._caseCount++},e.prototype._addDefault=function(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)},e.prototype._matchCase=function(e){var t=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t},e.prototype._updateDefaultCases=function(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(var t=0;t<this._defaultViews.length;t++){this._defaultViews[t].enforceState(e)}}},e.decorators=[{type:F.j,args:[{selector:"[ngSwitch]"}]}],e.ctorParameters=function(){return[]},e.propDecorators={ngSwitch:[{type:F.s}]},e}(),pe=function(){function e(e,t,n){this.ngSwitch=n,n._addCase(),this._view=new he(e,t)}return e.prototype.ngDoCheck=function(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))},e.decorators=[{type:F.j,args:[{selector:"[ngSwitchCase]"}]}],e.ctorParameters=function(){return[{type:F.Q},{type:F.N},{type:fe,decorators:[{type:F.n}]}]},e.propDecorators={ngSwitchCase:[{type:F.s}]},e}(),_e=function(){function e(e,t,n){n._addDefault(new he(e,t))}return e.decorators=[{type:F.j,args:[{selector:"[ngSwitchDefault]"}]}],e.ctorParameters=function(){return[{type:F.Q},{type:F.N},{type:fe,decorators:[{type:F.n}]}]},e}(),me=function(){function e(e){this._localization=e,this._caseViews={}}return Object.defineProperty(e.prototype,"ngPlural",{set:function(e){this._switchValue=e,this._updateView()},enumerable:!0,configurable:!0}),e.prototype.addCase=function(e,t){this._caseViews[e]=t},e.prototype._updateView=function(){this._clearViews();var e=Object.keys(this._caseViews),t=h(this._switchValue,e,this._localization);this._activateView(this._caseViews[t])},e.prototype._clearViews=function(){this._activeView&&this._activeView.destroy()},e.prototype._activateView=function(e){e&&(this._activeView=e,this._activeView.create())},e.decorators=[{type:F.j,args:[{selector:"[ngPlural]"}]}],e.ctorParameters=function(){return[{type:re}]},e.propDecorators={ngPlural:[{type:F.s}]},e}(),ye=function(){function e(e,t,n,r){this.value=e;var i=!isNaN(Number(e));r.addCase(i?"="+e:e,new he(n,t))}return e.decorators=[{type:F.j,args:[{selector:"[ngPluralCase]"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.f,args:["ngPluralCase"]}]},{type:F.N},{type:F.Q},{type:me,decorators:[{type:F.n}]}]},e}(),ge=function(){function e(e,t,n){this._differs=e,this._ngEl=t,this._renderer=n}return Object.defineProperty(e.prototype,"ngStyle",{set:function(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())},enumerable:!0,configurable:!0}),e.prototype.ngDoCheck=function(){if(this._differ){var e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}},e.prototype._applyChanges=function(e){var t=this;e.forEachRemovedItem(function(e){return t._setStyle(e.key,null)}),e.forEachAddedItem(function(e){return t._setStyle(e.key,e.currentValue)}),e.forEachChangedItem(function(e){return t._setStyle(e.key,e.currentValue)})},e.prototype._setStyle=function(e,t){var n=e.split("."),r=n[0],i=n[1];t=null!=t&&i?""+t+i:t,this._renderer.setStyle(this._ngEl.nativeElement,r,t)},e.decorators=[{type:F.j,args:[{selector:"[ngStyle]"}]}],e.ctorParameters=function(){return[{type:F.u},{type:F.k},{type:F.F}]},e.propDecorators={ngStyle:[{type:F.s}]},e}(),ve=function(){function e(e){this._viewContainerRef=e}return e.prototype.ngOnChanges=function(e){this._shouldRecreateView(e)?(this._viewRef&&this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef)),this.ngTemplateOutlet&&(this._viewRef=this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext))):this._viewRef&&this.ngTemplateOutletContext&&this._updateExistingContext(this.ngTemplateOutletContext)},e.prototype._shouldRecreateView=function(e){var t=e.ngTemplateOutletContext;return!!e.ngTemplateOutlet||t&&this._hasContextShapeChanged(t)},e.prototype._hasContextShapeChanged=function(e){var t=Object.keys(e.previousValue||{}),n=Object.keys(e.currentValue||{});if(t.length===n.length){for(var r=0,i=n;r<i.length;r++){var o=i[r];if(-1===t.indexOf(o))return!0}return!1}return!0},e.prototype._updateExistingContext=function(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];this._viewRef.context[r]=this.ngTemplateOutletContext[r]}},e.decorators=[{type:F.j,args:[{selector:"[ngTemplateOutlet]"}]}],e.ctorParameters=function(){return[{type:F.Q}]},e.propDecorators={ngTemplateOutletContext:[{type:F.s}],ngTemplateOutlet:[{type:F.s}]},e}(),be=[oe,ae,ue,ce,ve,ge,fe,pe,_e,me,ye],Me={},we=/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,Le={Short:0,ShortGMT:1,Long:2,Extended:3};Le[Le.Short]="Short",Le[Le.ShortGMT]="ShortGMT",Le[Le.Long]="Long",Le[Le.Extended]="Extended";var ke={FullYear:0,Month:1,Date:2,Hours:3,Minutes:4,Seconds:5,Milliseconds:6,Day:7};ke[ke.FullYear]="FullYear",ke[ke.Month]="Month",ke[ke.Date]="Date",ke[ke.Hours]="Hours",ke[ke.Minutes]="Minutes",ke[ke.Seconds]="Seconds",ke[ke.Milliseconds]="Milliseconds",ke[ke.Day]="Day";var Te={DayPeriods:0,Days:1,Months:2,Eras:3};Te[Te.DayPeriods]="DayPeriods",Te[Te.Days]="Days",Te[Te.Months]="Months",Te[Te.Eras]="Eras";var Ye=0,Se=4,De={},Ce=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Oe=function(){function e(e){this.locale=e}return e.prototype.transform=function(t,n,r,i){if(void 0===n&&(n="mediumDate"),null==t||""===t||t!=t)return null;"string"==typeof t&&(t=t.trim());var o;if(T(t))o=t;else if(isNaN(t-parseFloat(t)))if("string"==typeof t&&/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)){var a=t.split("-").map(function(e){return+e}),s=a[0],u=a[1],l=a[2];o=new Date(s,u-1,l)}else o=new Date(t);else o=new Date(parseFloat(t));if(!T(o)){var c=void 0;if("string"!=typeof t||!(c=t.match(Ce)))throw L(e,t);o=k(c)}return p(o,n,i||this.locale,r)},e.decorators=[{type:F.E,args:[{name:"date",pure:!0}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),xe=function(){function e(){}return e.format=function(e,t,n,r){void 0===r&&(r={});var i=r.minimumIntegerDigits,o=r.minimumFractionDigits,a=r.maximumFractionDigits,s=r.currency,u=r.currencyAsSymbol,l=void 0!==u&&u,c={minimumIntegerDigits:i,minimumFractionDigits:o,maximumFractionDigits:a,style:$[n].toLowerCase()};return n==$.Currency&&(c.currency="string"==typeof s?s:void 0,c.currencyDisplay=l?"symbol":"code"),new Intl.NumberFormat(t,c).format(e)},e}(),Ee=/((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/,je={yMMMdjms:P(j([x("year",1),E("month",3),x("day",1),x("hour",1),x("minute",1),x("second",1)])),yMdjm:P(j([x("year",1),x("month",1),x("day",1),x("hour",1),x("minute",1)])),yMMMMEEEEd:P(j([x("year",1),E("month",4),E("weekday",4),x("day",1)])),yMMMMd:P(j([x("year",1),E("month",4),x("day",1)])),yMMMd:P(j([x("year",1),E("month",3),x("day",1)])),yMd:P(j([x("year",1),x("month",1),x("day",1)])),jms:P(j([x("hour",1),x("second",1),x("minute",1)])),jm:P(j([x("hour",1),x("minute",1)]))},Pe={yyyy:P(x("year",4)),yy:P(x("year",2)),y:P(x("year",1)),MMMM:P(E("month",4)),MMM:P(E("month",3)),MM:P(x("month",2)),M:P(x("month",1)),LLLL:P(E("month",4)),L:P(E("month",1)),dd:P(x("day",2)),d:P(x("day",1)),HH:Y(S(P(O(x("hour",2),!1)))),H:S(P(O(x("hour",1),!1))),hh:Y(S(P(O(x("hour",2),!0)))),h:S(P(O(x("hour",1),!0))),jj:P(x("hour",2)),j:P(x("hour",1)),mm:Y(P(x("minute",2))),m:P(x("minute",1)),ss:Y(P(x("second",2))),s:P(x("second",1)),sss:P(x("second",3)),EEEE:P(E("weekday",4)),EEE:P(E("weekday",3)),EE:P(E("weekday",2)),E:P(E("weekday",1)),a:function(e){return function(t,n){return e(t,n).split(" ")[1]}}(P(O(x("hour",1),!0))),Z:C("short"),z:C("long"),ww:P({}),w:P({}),G:P(E("era",1)),GG:P(E("era",2)),GGG:P(E("era",3)),GGGG:P(E("era",4))},Ae=new Map,He=function(){function e(){}return e.format=function(e,t,n){return function(e,t,n){var r=je[e];if(r)return r(t,n);var i=e,o=Ae.get(i);if(!o){o=[];var a=void 0;Ee.exec(e);for(var s=e;s;)(a=Ee.exec(s))?s=(o=o.concat(a.slice(1))).pop():(o.push(s),s=null);Ae.set(i,o)}return o.reduce(function(e,r){var i=Pe[r];return e+(i?i(t,n):function(e){return"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}(r))},"")}(n,e,t)},e}(),Ie=function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n){if(void 0===n&&(n="mediumDate"),null==t||""===t||t!=t)return null;var r;if("string"==typeof t&&(t=t.trim()),A(t))r=t;else if(isNaN(t-parseFloat(t)))if("string"==typeof t&&/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)){var i=t.split("-").map(function(e){return parseInt(e,10)}),o=i[0],a=i[1],s=i[2];r=new Date(o,a-1,s)}else r=new Date(t);else r=new Date(parseFloat(t));if(!A(r)){var u=void 0;if("string"!=typeof t||!(u=t.match(Ce)))throw L(e,t);r=k(u)}return He.format(r,this._locale,e._ALIASES[n]||n)},e._ALIASES={medium:"yMMMdjms",short:"yMdjm",fullDate:"yMMMMEEEEd",longDate:"yMMMMd",mediumDate:"yMMMd",shortDate:"yMd",mediumTime:"jms",shortTime:"jm"},e.decorators=[{type:F.E,args:[{name:"date",pure:!0}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),Ne=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ve=22,Fe=".",Re="0",We=";",ze=",",Ge="#",Ue="¤",Be="%",Je=[function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n){return N(e,this._locale,t,$.Decimal,n)},e.decorators=[{type:F.E,args:[{name:"number"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n){return N(e,this._locale,t,$.Percent,n)},e.decorators=[{type:F.E,args:[{name:"percent"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n,r,i){return void 0===n&&(n="USD"),void 0===r&&(r=!1),N(e,this._locale,t,$.Currency,i,n,r)},e.decorators=[{type:F.E,args:[{name:"currency"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),Ie],Ke=function(){function e(){}return e.prototype.createSubscription=function(e,t){return e.subscribe({next:t,error:function(e){throw e}})},e.prototype.dispose=function(e){e.unsubscribe()},e.prototype.onDestroy=function(e){e.unsubscribe()},e}(),$e=new(function(){function e(){}return e.prototype.createSubscription=function(e,t){return e.then(t,function(e){throw e})},e.prototype.dispose=function(e){},e.prototype.onDestroy=function(e){},e}()),qe=new Ke,Ze=function(){function e(e){this._ref=e,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null,this._strategy=null}return e.prototype.ngOnDestroy=function(){this._subscription&&this._dispose()},e.prototype.transform=function(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue===this._latestReturnedValue?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,F.S.wrap(this._latestValue)):(e&&this._subscribe(e),this._latestReturnedValue=this._latestValue,this._latestValue)},e.prototype._subscribe=function(e){var t=this;this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,function(n){return t._updateLatestValue(e,n)})},e.prototype._selectStrategy=function(t){if(Object(F._12)(t))return $e;if(Object(F._11)(t))return qe;throw L(e,t)},e.prototype._dispose=function(){this._strategy.dispose(this._subscription),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null},e.prototype._updateLatestValue=function(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())},e.decorators=[{type:F.E,args:[{name:"async",pure:!1}]}],e.ctorParameters=function(){return[{type:F.g}]},e}(),Qe=function(){function e(){}return e.prototype.transform=function(t){if(!t)return t;if("string"!=typeof t)throw L(e,t);return t.toLowerCase()},e.decorators=[{type:F.E,args:[{name:"lowercase"}]}],e.ctorParameters=function(){return[]},e}(),Xe=function(){function e(){}return e.prototype.transform=function(t){if(!t)return t;if("string"!=typeof t)throw L(e,t);return t.split(/\b/g).map(function(e){return function(e){return e?e[0].toUpperCase()+e.substr(1).toLowerCase():e}(e)}).join("")},e.decorators=[{type:F.E,args:[{name:"titlecase"}]}],e.ctorParameters=function(){return[]},e}(),et=function(){function e(){}return e.prototype.transform=function(t){if(!t)return t;if("string"!=typeof t)throw L(e,t);return t.toUpperCase()},e.decorators=[{type:F.E,args:[{name:"uppercase"}]}],e.ctorParameters=function(){return[]},e}(),tt=/#/g,nt=function(){function e(e){this._localization=e}return e.prototype.transform=function(t,n,r){if(null==t)return"";if("object"!=typeof n||null===n)throw L(e,n);return n[h(t,Object.keys(n),this._localization,r)].replace(tt,t.toString())},e.decorators=[{type:F.E,args:[{name:"i18nPlural",pure:!0}]}],e.ctorParameters=function(){return[{type:re}]},e}(),rt=function(){function e(){}return e.prototype.transform=function(t,n){if(null==t)return"";if("object"!=typeof n||"string"!=typeof t)throw L(e,n);return n.hasOwnProperty(t)?n[t]:n.hasOwnProperty("other")?n.other:""},e.decorators=[{type:F.E,args:[{name:"i18nSelect",pure:!0}]}],e.ctorParameters=function(){return[]},e}(),it=function(){function e(){}return e.prototype.transform=function(e){return JSON.stringify(e,null,2)},e.decorators=[{type:F.E,args:[{name:"json",pure:!1}]}],e.ctorParameters=function(){return[]},e}(),ot=function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n,r){if(V(t))return null;var i=H(t,r=r||this._locale,$.Decimal,n),o=i.str,a=i.error;if(a)throw L(e,a);return o},e.decorators=[{type:F.E,args:[{name:"number"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),at=function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n,r){if(V(t))return null;var i=H(t,r=r||this._locale,$.Percent,n),o=i.str,a=i.error;if(a)throw L(e,a);return o},e.decorators=[{type:F.E,args:[{name:"percent"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),st=function(){function e(e){this._locale=e}return e.prototype.transform=function(t,n,r,i,o){if(void 0===r&&(r="symbol"),V(t))return null;o=o||this._locale,"boolean"==typeof r&&(console&&console.warn&&console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'),r=r?"symbol":"code");var a=n||"USD";"code"!==r&&(a=function(e,t){var n=B[e]||{},r=n[0]||e;return"wide"===t?r:n[1]||r}(a,"symbol"===r?"wide":"narrow"));var s=H(t,o,$.Currency,i,a),u=s.str,l=s.error;if(l)throw L(e,l);return u},e.decorators=[{type:F.E,args:[{name:"currency"}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:F.o,args:[F.v]}]}]},e}(),ut=[Ze,et,Qe,it,function(){function e(){}return e.prototype.transform=function(t,n,r){if(null==t)return t;if(!this.supports(t))throw L(e,t);return t.slice(n,r)},e.prototype.supports=function(e){return"string"==typeof e||Array.isArray(e)},e.decorators=[{type:F.E,args:[{name:"slice",pure:!1}]}],e.ctorParameters=function(){return[]},e}(),ot,at,Xe,st,Oe,nt,rt],lt=function(){function e(){}return e.decorators=[{type:F.w,args:[{declarations:[be,ut],exports:[be,ut],providers:[{provide:re,useClass:ie}]}]}],e.ctorParameters=function(){return[]},e}(),ct=function(e,t){"string"==typeof t&&(t=parseInt(t,10));var n=t,r=n.toString().replace(/^[^.]*\.?/,""),i=Math.floor(Math.abs(n)),o=r.length,a=parseInt(r,10),s=parseInt(n.toString().replace(/^[^.]*\.?|0+$/g,""),10)||0;switch(e.split("-")[0].toLowerCase()){case"af":case"asa":case"az":case"bem":case"bez":case"bg":case"brx":case"ce":case"cgg":case"chr":case"ckb":case"ee":case"el":case"eo":case"es":case"eu":case"fo":case"fur":case"gsw":case"ha":case"haw":case"hu":case"jgo":case"jmc":case"ka":case"kk":case"kkj":case"kl":case"ks":case"ksb":case"ky":case"lb":case"lg":case"mas":case"mgo":case"ml":case"mn":case"nb":case"nd":case"ne":case"nn":case"nnh":case"nyn":case"om":case"or":case"os":case"ps":case"rm":case"rof":case"rwk":case"saq":case"seh":case"sn":case"so":case"sq":case"ta":case"te":case"teo":case"tk":case"tr":case"ug":case"uz":case"vo":case"vun":case"wae":case"xog":return 1===n?q.One:q.Other;case"ak":case"ln":case"mg":case"pa":case"ti":return n===Math.floor(n)&&n>=0&&n<=1?q.One:q.Other;case"am":case"as":case"bn":case"fa":case"gu":case"hi":case"kn":case"mr":case"zu":return 0===i||1===n?q.One:q.Other;case"ar":return 0===n?q.Zero:1===n?q.One:2===n?q.Two:n%100===Math.floor(n%100)&&n%100>=3&&n%100<=10?q.Few:n%100===Math.floor(n%100)&&n%100>=11&&n%100<=99?q.Many:q.Other;case"ast":case"ca":case"de":case"en":case"et":case"fi":case"fy":case"gl":case"it":case"nl":case"sv":case"sw":case"ur":case"yi":return 1===i&&0===o?q.One:q.Other;case"be":return n%10==1&&n%100!=11?q.One:n%10===Math.floor(n%10)&&n%10>=2&&n%10<=4&&!(n%100>=12&&n%100<=14)?q.Few:n%10==0||n%10===Math.floor(n%10)&&n%10>=5&&n%10<=9||n%100===Math.floor(n%100)&&n%100>=11&&n%100<=14?q.Many:q.Other;case"br":return n%10==1&&n%100!=11&&n%100!=71&&n%100!=91?q.One:n%10==2&&n%100!=12&&n%100!=72&&n%100!=92?q.Two:n%10===Math.floor(n%10)&&(n%10>=3&&n%10<=4||n%10==9)&&!(n%100>=10&&n%100<=19||n%100>=70&&n%100<=79||n%100>=90&&n%100<=99)?q.Few:0!==n&&n%1e6==0?q.Many:q.Other;case"bs":case"hr":case"sr":return 0===o&&i%10==1&&i%100!=11||a%10==1&&a%100!=11?q.One:0===o&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14)||a%10===Math.floor(a%10)&&a%10>=2&&a%10<=4&&!(a%100>=12&&a%100<=14)?q.Few:q.Other;case"cs":case"sk":return 1===i&&0===o?q.One:i===Math.floor(i)&&i>=2&&i<=4&&0===o?q.Few:0!==o?q.Many:q.Other;case"cy":return 0===n?q.Zero:1===n?q.One:2===n?q.Two:3===n?q.Few:6===n?q.Many:q.Other;case"da":return 1===n||0!==s&&(0===i||1===i)?q.One:q.Other;case"dsb":case"hsb":return 0===o&&i%100==1||a%100==1?q.One:0===o&&i%100==2||a%100==2?q.Two:0===o&&i%100===Math.floor(i%100)&&i%100>=3&&i%100<=4||a%100===Math.floor(a%100)&&a%100>=3&&a%100<=4?q.Few:q.Other;case"ff":case"fr":case"hy":case"kab":return 0===i||1===i?q.One:q.Other;case"fil":return 0===o&&(1===i||2===i||3===i)||0===o&&i%10!=4&&i%10!=6&&i%10!=9||0!==o&&a%10!=4&&a%10!=6&&a%10!=9?q.One:q.Other;case"ga":return 1===n?q.One:2===n?q.Two:n===Math.floor(n)&&n>=3&&n<=6?q.Few:n===Math.floor(n)&&n>=7&&n<=10?q.Many:q.Other;case"gd":return 1===n||11===n?q.One:2===n||12===n?q.Two:n===Math.floor(n)&&(n>=3&&n<=10||n>=13&&n<=19)?q.Few:q.Other;case"gv":return 0===o&&i%10==1?q.One:0===o&&i%10==2?q.Two:0!==o||i%100!=0&&i%100!=20&&i%100!=40&&i%100!=60&&i%100!=80?0!==o?q.Many:q.Other:q.Few;case"he":return 1===i&&0===o?q.One:2===i&&0===o?q.Two:0!==o||n>=0&&n<=10||n%10!=0?q.Other:q.Many;case"is":return 0===s&&i%10==1&&i%100!=11||0!==s?q.One:q.Other;case"ksh":return 0===n?q.Zero:1===n?q.One:q.Other;case"kw":case"naq":case"se":case"smn":return 1===n?q.One:2===n?q.Two:q.Other;case"lag":return 0===n?q.Zero:0!==i&&1!==i||0===n?q.Other:q.One;case"lt":return n%10!=1||n%100>=11&&n%100<=19?n%10===Math.floor(n%10)&&n%10>=2&&n%10<=9&&!(n%100>=11&&n%100<=19)?q.Few:0!==a?q.Many:q.Other:q.One;case"lv":case"prg":return n%10==0||n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19||2===o&&a%100===Math.floor(a%100)&&a%100>=11&&a%100<=19?q.Zero:n%10==1&&n%100!=11||2===o&&a%10==1&&a%100!=11||2!==o&&a%10==1?q.One:q.Other;case"mk":return 0===o&&i%10==1||a%10==1?q.One:q.Other;case"mt":return 1===n?q.One:0===n||n%100===Math.floor(n%100)&&n%100>=2&&n%100<=10?q.Few:n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19?q.Many:q.Other;case"pl":return 1===i&&0===o?q.One:0===o&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14)?q.Few:0===o&&1!==i&&i%10===Math.floor(i%10)&&i%10>=0&&i%10<=1||0===o&&i%10===Math.floor(i%10)&&i%10>=5&&i%10<=9||0===o&&i%100===Math.floor(i%100)&&i%100>=12&&i%100<=14?q.Many:q.Other;case"pt":return n===Math.floor(n)&&n>=0&&n<=2&&2!==n?q.One:q.Other;case"ro":return 1===i&&0===o?q.One:0!==o||0===n||1!==n&&n%100===Math.floor(n%100)&&n%100>=1&&n%100<=19?q.Few:q.Other;case"ru":case"uk":return 0===o&&i%10==1&&i%100!=11?q.One:0===o&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14)?q.Few:0===o&&i%10==0||0===o&&i%10===Math.floor(i%10)&&i%10>=5&&i%10<=9||0===o&&i%100===Math.floor(i%100)&&i%100>=11&&i%100<=14?q.Many:q.Other;case"shi":return 0===i||1===n?q.One:n===Math.floor(n)&&n>=2&&n<=10?q.Few:q.Other;case"si":return 0===n||1===n||0===i&&1===a?q.One:q.Other;case"sl":return 0===o&&i%100==1?q.One:0===o&&i%100==2?q.Two:0===o&&i%100===Math.floor(i%100)&&i%100>=3&&i%100<=4||0!==o?q.Few:q.Other;case"tzm":return n===Math.floor(n)&&n>=0&&n<=1||n===Math.floor(n)&&n>=11&&n<=99?q.One:q.Other;default:return q.Other}},dt=(function(){function e(){}e.decorators=[{type:F.w,args:[{declarations:[Je],exports:[Je],providers:[{provide:ne,useValue:ct}]}]}],e.ctorParameters=function(){return[]}}(),new F.q("DocumentToken")),ht="browser";new F.P("5.0.2")},,,,,,,,,function(e,t,n){"use strict";var r=n(32).root.Symbol;t.rxSubscriber="function"==typeof r&&"function"==typeof r.for?r.for("rxSubscriber"):"@@rxSubscriber",t.$$rxSubscriber=t.rxSubscriber},function(e,t,n){"use strict";function r(){return k}function i(){return!!window.history.pushState}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function o(e,t){if("undefined"==typeof COMPILED||!COMPILED){(w._9.ng=w._9.ng||{})[e]=t}}function a(e){return Object(w.W)(e)}function s(e){return o(R,a),o(W,Object(L.a)({},F,function(e){return e.reduce(function(e,t){return e[t.name]=t.token,e},{})}(e||[]))),function(){return a}}function u(e,t,n){for(var r=0;r<t.length;r++){var i=t[r];Array.isArray(i)?u(e,i,n):(i=i.replace(q,e),n.push(i))}return n}function l(e){return function(t){!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}function c(e,t){if(e.charCodeAt(0)===te)throw new Error("Found the synthetic "+t+" "+e+'. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')}function d(e){return(e=String(e)).match(ve)||e.match(be)?e:(Object(w.X)()&&r().log("WARNING: sanitizing unsafe URL value "+e+" (see http://g.co/ng/security#xss)"),"unsafe:"+e)}function h(e){for(var t={},n=0,r=e.split(",");n<r.length;n++){t[r[n]]=!0}return t}function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},r=0,i=e;r<i.length;r++){var o=i[r];for(var a in o)o.hasOwnProperty(a)&&(n[a]=!0)}return n}function p(e,t){if(t&&we.contains(e,t))throw new Error("Failed to sanitize html because the element is clobbered: "+we.getOuterHTML(e));return t}function _(e){return e.replace(/&/g,"&amp;").replace(Ae,function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"}).replace(He,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(e){we.attributeMap(e).forEach(function(t,n){"xmlns:ns1"!==n&&0!==n.indexOf("ns1:")||we.removeAttribute(e,n)});for(var t=0,n=we.childNodesAsList(e);t<n.length;t++){var r=n[t];we.isElementNode(r)&&m(r)}}function y(e,t){try{var n=function(){if(Me)return Me;var e=(we=r()).createElement("template");if("content"in e)return e;var t=we.createHtmlDocument();if(null==(Me=we.querySelector(t,"body"))){var n=we.createElement("html",t);Me=we.createElement("body",t),we.appendChild(n,Me),we.appendChild(t,n)}return Me}(),i=t?String(t):"",o=5,a=i;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,i=a,we.setInnerHTML(n,i),e.documentMode&&m(n),a=we.getInnerHTML(n)}while(i!==a);for(var s=new Pe,u=s.sanitizeChildren(we.getTemplateContent(n)||n),l=we.getTemplateContent(n)||n,c=0,d=we.childNodesAsList(l);c<d.length;c++){var h=d[c];we.removeChild(l,h)}return Object(w.X)()&&s.sanitizedSomething&&we.log("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."),u}catch(e){throw Me=null,e}}function g(){return new w.l}function v(e,t){var n=e.getElementById(t+"-state"),r={};if(n&&n.textContent)try{r=JSON.parse(function(e){var t={"&a;":"&","&q;":'"',"&s;":"'","&l;":"<","&g;":">"};return e.replace(/&[^;]+;/g,function(e){return t[e]})}(n.textContent))}catch(e){console.warn("Exception while restoring TransferState for app "+t,e)}return Xe.init(r)}n.d(t,"a",function(){return qe}),n.d(t,"i",function(){return $e}),n.d(t,"g",function(){return A}),n.d(t,"h",function(){return V}),n.d(t,"c",function(){return G}),n.d(t,"d",function(){return U}),n.d(t,"e",function(){return fe}),n.d(t,"f",function(){return pe}),n.d(t,"b",function(){return Ve}),n.d(t,"r",function(){return r}),n.d(t,"k",function(){return X}),n.d(t,"j",function(){return de}),n.d(t,"m",function(){return _e}),n.d(t,"n",function(){return ge}),n.d(t,"l",function(){return K}),n.d(t,"o",function(){return J}),n.d(t,"p",function(){return g}),n.d(t,"s",function(){return s}),n.d(t,"q",function(){return Fe});var b,M=n(50),w=n(12),L=n(47),k=null,T=function(e){function t(){var t=e.call(this)||this;t._animationPrefix=null,t._transitionEnd=null;try{var n=t.createElement("div",document);if(null!=t.getStyle(n,"animationName"))t._animationPrefix="";else for(var r=["Webkit","Moz","O","ms"],i=0;i<r.length;i++)if(null!=t.getStyle(n,r[i]+"AnimationName")){t._animationPrefix="-"+r[i].toLowerCase()+"-";break}var o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};Object.keys(o).forEach(function(e){null!=t.getStyle(n,e)&&(t._transitionEnd=o[e])})}catch(e){t._animationPrefix=null,t._transitionEnd=null}return t}return Object(L.b)(t,e),t.prototype.getDistributedNodes=function(e){return e.getDistributedNodes()},t.prototype.resolveAndSetHref=function(e,t,n){e.href=null==n?t:t+"/../"+n},t.prototype.supportsDOMEvents=function(){return!0},t.prototype.supportsNativeShadowDOM=function(){return"function"==typeof document.body.createShadowRoot},t.prototype.getAnimationPrefix=function(){return this._animationPrefix?this._animationPrefix:""},t.prototype.getTransitionEnd=function(){return this._transitionEnd?this._transitionEnd:""},t.prototype.supportsAnimation=function(){return null!=this._animationPrefix&&null!=this._transitionEnd},t}(function(){function e(){this.resourceLoaderType=null}return Object.defineProperty(e.prototype,"attrToPropMap",{get:function(){return this._attrToPropMap},set:function(e){this._attrToPropMap=e},enumerable:!0,configurable:!0}),e}()),Y={class:"className",innerHtml:"innerHTML",readonly:"readOnly",tabindex:"tabIndex"},S={"\b":"Backspace","\t":"Tab","":"Delete","":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},D={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","":"NumLock"};w._9.Node&&(b=w._9.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))});var C,O,x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.parse=function(e){throw new Error("parse not implemented")},t.makeCurrent=function(){!function(e){k||(k=e)}(new t)},t.prototype.hasProperty=function(e,t){return t in e},t.prototype.setProperty=function(e,t,n){e[t]=n},t.prototype.getProperty=function(e,t){return e[t]},t.prototype.invoke=function(e,t,n){(r=e)[t].apply(r,n);var r},t.prototype.logError=function(e){window.console&&(console.error?console.error(e):console.log(e))},t.prototype.log=function(e){window.console&&window.console.log&&window.console.log(e)},t.prototype.logGroup=function(e){window.console&&window.console.group&&window.console.group(e)},t.prototype.logGroupEnd=function(){window.console&&window.console.groupEnd&&window.console.groupEnd()},Object.defineProperty(t.prototype,"attrToPropMap",{get:function(){return Y},enumerable:!0,configurable:!0}),t.prototype.contains=function(e,t){return b.call(e,t)},t.prototype.querySelector=function(e,t){return e.querySelector(t)},t.prototype.querySelectorAll=function(e,t){return e.querySelectorAll(t)},t.prototype.on=function(e,t,n){e.addEventListener(t,n,!1)},t.prototype.onAndCancel=function(e,t,n){return e.addEventListener(t,n,!1),function(){e.removeEventListener(t,n,!1)}},t.prototype.dispatchEvent=function(e,t){e.dispatchEvent(t)},t.prototype.createMouseEvent=function(e){var t=this.getDefaultDocument().createEvent("MouseEvent");return t.initEvent(e,!0,!0),t},t.prototype.createEvent=function(e){var t=this.getDefaultDocument().createEvent("Event");return t.initEvent(e,!0,!0),t},t.prototype.preventDefault=function(e){e.preventDefault(),e.returnValue=!1},t.prototype.isPrevented=function(e){return e.defaultPrevented||null!=e.returnValue&&!e.returnValue},t.prototype.getInnerHTML=function(e){return e.innerHTML},t.prototype.getTemplateContent=function(e){return"content"in e&&this.isTemplateElement(e)?e.content:null},t.prototype.getOuterHTML=function(e){return e.outerHTML},t.prototype.nodeName=function(e){return e.nodeName},t.prototype.nodeValue=function(e){return e.nodeValue},t.prototype.type=function(e){return e.type},t.prototype.content=function(e){return this.hasProperty(e,"content")?e.content:e},t.prototype.firstChild=function(e){return e.firstChild},t.prototype.nextSibling=function(e){return e.nextSibling},t.prototype.parentElement=function(e){return e.parentNode},t.prototype.childNodes=function(e){return e.childNodes},t.prototype.childNodesAsList=function(e){for(var t=e.childNodes,n=new Array(t.length),r=0;r<t.length;r++)n[r]=t[r];return n},t.prototype.clearNodes=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},t.prototype.appendChild=function(e,t){e.appendChild(t)},t.prototype.removeChild=function(e,t){e.removeChild(t)},t.prototype.replaceChild=function(e,t,n){e.replaceChild(t,n)},t.prototype.remove=function(e){return e.parentNode&&e.parentNode.removeChild(e),e},t.prototype.insertBefore=function(e,t,n){e.insertBefore(n,t)},t.prototype.insertAllBefore=function(e,t,n){n.forEach(function(n){return e.insertBefore(n,t)})},t.prototype.insertAfter=function(e,t,n){e.insertBefore(n,t.nextSibling)},t.prototype.setInnerHTML=function(e,t){e.innerHTML=t},t.prototype.getText=function(e){return e.textContent},t.prototype.setText=function(e,t){e.textContent=t},t.prototype.getValue=function(e){return e.value},t.prototype.setValue=function(e,t){e.value=t},t.prototype.getChecked=function(e){return e.checked},t.prototype.setChecked=function(e,t){e.checked=t},t.prototype.createComment=function(e){return this.getDefaultDocument().createComment(e)},t.prototype.createTemplate=function(e){var t=this.getDefaultDocument().createElement("template");return t.innerHTML=e,t},t.prototype.createElement=function(e,t){return(t=t||this.getDefaultDocument()).createElement(e)},t.prototype.createElementNS=function(e,t,n){return(n=n||this.getDefaultDocument()).createElementNS(e,t)},t.prototype.createTextNode=function(e,t){return(t=t||this.getDefaultDocument()).createTextNode(e)},t.prototype.createScriptTag=function(e,t,n){var r=(n=n||this.getDefaultDocument()).createElement("SCRIPT");return r.setAttribute(e,t),r},t.prototype.createStyleElement=function(e,t){var n=(t=t||this.getDefaultDocument()).createElement("style");return this.appendChild(n,this.createTextNode(e,t)),n},t.prototype.createShadowRoot=function(e){return e.createShadowRoot()},t.prototype.getShadowRoot=function(e){return e.shadowRoot},t.prototype.getHost=function(e){return e.host},t.prototype.clone=function(e){return e.cloneNode(!0)},t.prototype.getElementsByClassName=function(e,t){return e.getElementsByClassName(t)},t.prototype.getElementsByTagName=function(e,t){return e.getElementsByTagName(t)},t.prototype.classList=function(e){return Array.prototype.slice.call(e.classList,0)},t.prototype.addClass=function(e,t){e.classList.add(t)},t.prototype.removeClass=function(e,t){e.classList.remove(t)},t.prototype.hasClass=function(e,t){return e.classList.contains(t)},t.prototype.setStyle=function(e,t,n){e.style[t]=n},t.prototype.removeStyle=function(e,t){e.style[t]=""},t.prototype.getStyle=function(e,t){return e.style[t]},t.prototype.hasStyle=function(e,t,n){var r=this.getStyle(e,t)||"";return n?r==n:r.length>0},t.prototype.tagName=function(e){return e.tagName},t.prototype.attributeMap=function(e){for(var t=new Map,n=e.attributes,r=0;r<n.length;r++){var i=n.item(r);t.set(i.name,i.value)}return t},t.prototype.hasAttribute=function(e,t){return e.hasAttribute(t)},t.prototype.hasAttributeNS=function(e,t,n){return e.hasAttributeNS(t,n)},t.prototype.getAttribute=function(e,t){return e.getAttribute(t)},t.prototype.getAttributeNS=function(e,t,n){return e.getAttributeNS(t,n)},t.prototype.setAttribute=function(e,t,n){e.setAttribute(t,n)},t.prototype.setAttributeNS=function(e,t,n,r){e.setAttributeNS(t,n,r)},t.prototype.removeAttribute=function(e,t){e.removeAttribute(t)},t.prototype.removeAttributeNS=function(e,t,n){e.removeAttributeNS(t,n)},t.prototype.templateAwareRoot=function(e){return this.isTemplateElement(e)?this.content(e):e},t.prototype.createHtmlDocument=function(){return document.implementation.createHTMLDocument("fakeTitle")},t.prototype.getDefaultDocument=function(){return document},t.prototype.getBoundingClientRect=function(e){try{return e.getBoundingClientRect()}catch(e){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}},t.prototype.getTitle=function(e){return e.title},t.prototype.setTitle=function(e,t){e.title=t||""},t.prototype.elementMatches=function(e,t){return!!this.isElementNode(e)&&(e.matches&&e.matches(t)||e.msMatchesSelector&&e.msMatchesSelector(t)||e.webkitMatchesSelector&&e.webkitMatchesSelector(t))},t.prototype.isTemplateElement=function(e){return this.isElementNode(e)&&"TEMPLATE"===e.nodeName},t.prototype.isTextNode=function(e){return e.nodeType===Node.TEXT_NODE},t.prototype.isCommentNode=function(e){return e.nodeType===Node.COMMENT_NODE},t.prototype.isElementNode=function(e){return e.nodeType===Node.ELEMENT_NODE},t.prototype.hasShadowRoot=function(e){return null!=e.shadowRoot&&e instanceof HTMLElement},t.prototype.isShadowRoot=function(e){return e instanceof DocumentFragment},t.prototype.importIntoDoc=function(e){return document.importNode(this.templateAwareRoot(e),!0)},t.prototype.adoptNode=function(e){return document.adoptNode(e)},t.prototype.getHref=function(e){return e.getAttribute("href")},t.prototype.getEventKey=function(e){var t=e.key;if(null==t){if(null==(t=e.keyIdentifier))return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&D.hasOwnProperty(t)&&(t=D[t]))}return S[t]||t},t.prototype.getGlobalEventTarget=function(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null},t.prototype.getHistory=function(){return window.history},t.prototype.getLocation=function(){return window.location},t.prototype.getBaseHref=function(e){var t=E||(E=document.querySelector("base"))?E.getAttribute("href"):null;return null==t?null:function(e){return C||(C=document.createElement("a")),C.setAttribute("href",e),"/"===C.pathname.charAt(0)?C.pathname:"/"+C.pathname}(t)},t.prototype.resetBaseElement=function(){E=null},t.prototype.getUserAgent=function(){return window.navigator.userAgent},t.prototype.setData=function(e,t,n){this.setAttribute(e,"data-"+t,n)},t.prototype.getData=function(e,t){return this.getAttribute(e,"data-"+t)},t.prototype.getComputedStyle=function(e){return getComputedStyle(e)},t.prototype.supportsWebAnimation=function(){return"function"==typeof Element.prototype.animate},t.prototype.performanceNow=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()},t.prototype.supportsCookies=function(){return!0},t.prototype.getCookie=function(e){return Object(M.j)(document.cookie,e)},t.prototype.setCookie=function(e,t){document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)},t}(T),E=null,j=M.b,P=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n._init(),n}return Object(L.b)(t,e),t.prototype._init=function(){this.location=r().getLocation(),this._history=r().getHistory()},t.prototype.getBaseHrefFromDOM=function(){return r().getBaseHref(this._doc)},t.prototype.onPopState=function(e){r().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)},t.prototype.onHashChange=function(e){r().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)},Object.defineProperty(t.prototype,"pathname",{get:function(){return this.location.pathname},set:function(e){this.location.pathname=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"search",{get:function(){return this.location.search},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hash",{get:function(){return this.location.hash},enumerable:!0,configurable:!0}),t.prototype.pushState=function(e,t,n){i()?this._history.pushState(e,t,n):this.location.hash=n},t.prototype.replaceState=function(e,t,n){i()?this._history.replaceState(e,t,n):this.location.hash=n},t.prototype.forward=function(){this._history.forward()},t.prototype.back=function(){this._history.back()},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},t}(M.g),A=function(){function e(e){this._doc=e,this._dom=r()}return e.prototype.addTag=function(e,t){return void 0===t&&(t=!1),e?this._getOrCreateElement(e,t):null},e.prototype.addTags=function(e,t){var n=this;return void 0===t&&(t=!1),e?e.reduce(function(e,r){return r&&e.push(n._getOrCreateElement(r,t)),e},[]):[]},e.prototype.getTag=function(e){return e?this._dom.querySelector(this._doc,"meta["+e+"]")||null:null},e.prototype.getTags=function(e){if(!e)return[];var t=this._dom.querySelectorAll(this._doc,"meta["+e+"]");return t?[].slice.call(t):[]},e.prototype.updateTag=function(e,t){if(!e)return null;t=t||this._parseSelector(e);var n=this.getTag(t);return n?this._setMetaElementAttributes(e,n):this._getOrCreateElement(e,!0)},e.prototype.removeTag=function(e){this.removeTagElement(this.getTag(e))},e.prototype.removeTagElement=function(e){e&&this._dom.remove(e)},e.prototype._getOrCreateElement=function(e,t){if(void 0===t&&(t=!1),!t){var n=this._parseSelector(e),r=this.getTag(n);if(r&&this._containsAttributes(e,r))return r}var i=this._dom.createElement("meta");this._setMetaElementAttributes(e,i);var o=this._dom.getElementsByTagName(this._doc,"head")[0];return this._dom.appendChild(o,i),i},e.prototype._setMetaElementAttributes=function(e,t){var n=this;return Object.keys(e).forEach(function(r){return n._dom.setAttribute(t,r,e[r])}),t},e.prototype._parseSelector=function(e){var t=e.name?"name":"property";return t+'="'+e[t]+'"'},e.prototype._containsAttributes=function(e,t){var n=this;return Object.keys(e).every(function(r){return n._dom.getAttribute(t,r)===e[r]})},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},e}(),H=new w.q("TRANSITION_ID"),I=[{provide:w.b,useFactory:function(e,t,n){return function(){n.get(w.c).donePromise.then(function(){var n=r();Array.prototype.slice.apply(n.querySelectorAll(t,"style[ng-transition]")).filter(function(t){return n.getAttribute(t,"ng-transition")===e}).forEach(function(e){return n.remove(e)})})}},deps:[H,j,w.r],multi:!0}],N=function(){function e(){}return e.init=function(){Object(w.Z)(new e)},e.prototype.addToWindow=function(e){w._9.getAngularTestability=function(t,n){void 0===n&&(n=!0);var r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},w._9.getAllAngularTestabilities=function(){return e.getAllTestabilities()},w._9.getAllAngularRootElements=function(){return e.getAllRootElements()};w._9.frameworkStabilizers||(w._9.frameworkStabilizers=[]),w._9.frameworkStabilizers.push(function(e){var t=w._9.getAllAngularTestabilities(),n=t.length,r=!1,i=function(t){r=r||t,0==--n&&e(r)};t.forEach(function(e){e.whenStable(i)})})},e.prototype.findTestabilityInTree=function(e,t,n){if(null==t)return null;var i=e.getTestability(t);return null!=i?i:n?r().isShadowRoot(t)?this.findTestabilityInTree(e,r().getHost(t),!0):this.findTestabilityInTree(e,r().parentElement(t),!0):null},e}(),V=function(){function e(e){this._doc=e}return e.prototype.getTitle=function(){return r().getTitle(this._doc)},e.prototype.setTitle=function(e){r().setTitle(this._doc,e)},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},e}(),F={ApplicationRef:w.e,NgZone:w.z},R="probe",W="coreTokens",z=[{provide:w.b,useFactory:s,deps:[[w.y,new w.A]],multi:!0}],G=new w.q("EventManagerPlugins"),U=function(){function e(e,t){var n=this;this._zone=t,this._eventNameToPlugin=new Map,e.forEach(function(e){return e.manager=n}),this._plugins=e.slice().reverse()}return e.prototype.addEventListener=function(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)},e.prototype.addGlobalEventListener=function(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)},e.prototype.getZone=function(){return this._zone},e.prototype._findPluginFor=function(e){var t=this._eventNameToPlugin.get(e);if(t)return t;for(var n=this._plugins,r=0;r<n.length;r++){var i=n[r];if(i.supports(e))return this._eventNameToPlugin.set(e,i),i}throw new Error("No event manager plugin found for event "+e)},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[{type:Array,decorators:[{type:w.o,args:[G]}]},{type:w.z}]},e}(),B=function(){function e(e){this._doc=e}return e.prototype.addGlobalEventListener=function(e,t,n){var i=r().getGlobalEventTarget(this._doc,e);if(!i)throw new Error("Unsupported event target "+i+" for event "+t);return this.addEventListener(i,t,n)},e}(),J=function(){function e(){this._stylesSet=new Set}return e.prototype.addStyles=function(e){var t=this,n=new Set;e.forEach(function(e){t._stylesSet.has(e)||(t._stylesSet.add(e),n.add(e))}),this.onStylesAdded(n)},e.prototype.onStylesAdded=function(e){},e.prototype.getAllStyles=function(){return Array.from(this._stylesSet)},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[]},e}(),K=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n._hostNodes=new Set,n._styleNodes=new Set,n._hostNodes.add(t.head),n}return Object(L.b)(t,e),t.prototype._addStylesToHost=function(e,t){var n=this;e.forEach(function(e){var r=n._doc.createElement("style");r.textContent=e,n._styleNodes.add(t.appendChild(r))})},t.prototype.addHost=function(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)},t.prototype.removeHost=function(e){this._hostNodes.delete(e)},t.prototype.onStylesAdded=function(e){var t=this;this._hostNodes.forEach(function(n){return t._addStylesToHost(e,n)})},t.prototype.ngOnDestroy=function(){this._styleNodes.forEach(function(e){return r().remove(e)})},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},t}(J),$={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},q=/%COMP%/g,Z="_nghost-%COMP%",Q="_ngcontent-%COMP%",X=function(){function e(e,t){this.eventManager=e,this.sharedStylesHost=t,this.rendererByCompId=new Map,this.defaultRenderer=new ee(e)}return e.prototype.createRenderer=function(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case w.R.Emulated:var n=this.rendererByCompId.get(t.id);return n||(n=new ne(this.eventManager,this.sharedStylesHost,t),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n;case w.R.Native:return new re(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){var r=u(t.id,t.styles,[]);this.sharedStylesHost.addStyles(r),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}},e.prototype.begin=function(){},e.prototype.end=function(){},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[{type:U},{type:K}]},e}(),ee=function(){function e(e){this.eventManager=e,this.data=Object.create(null)}return e.prototype.destroy=function(){},e.prototype.createElement=function(e,t){return t?document.createElementNS($[t],e):document.createElement(e)},e.prototype.createComment=function(e){return document.createComment(e)},e.prototype.createText=function(e){return document.createTextNode(e)},e.prototype.appendChild=function(e,t){e.appendChild(t)},e.prototype.insertBefore=function(e,t,n){e&&e.insertBefore(t,n)},e.prototype.removeChild=function(e,t){e&&e.removeChild(t)},e.prototype.selectRootElement=function(e){var t="string"==typeof e?document.querySelector(e):e;if(!t)throw new Error('The selector "'+e+'" did not match any elements');return t.textContent="",t},e.prototype.parentNode=function(e){return e.parentNode},e.prototype.nextSibling=function(e){return e.nextSibling},e.prototype.setAttribute=function(e,t,n,r){if(r){t=r+":"+t;var i=$[r];i?e.setAttributeNS(i,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)},e.prototype.removeAttribute=function(e,t,n){if(n){var r=$[n];r?e.removeAttributeNS(r,t):e.removeAttribute(n+":"+t)}else e.removeAttribute(t)},e.prototype.addClass=function(e,t){e.classList.add(t)},e.prototype.removeClass=function(e,t){e.classList.remove(t)},e.prototype.setStyle=function(e,t,n,r){r&w.H.DashCase?e.style.setProperty(t,n,r&w.H.Important?"important":""):e.style[t]=n},e.prototype.removeStyle=function(e,t,n){n&w.H.DashCase?e.style.removeProperty(t):e.style[t]=""},e.prototype.setProperty=function(e,t,n){c(t,"property"),e[t]=n},e.prototype.setValue=function(e,t){e.nodeValue=t},e.prototype.listen=function(e,t,n){return c(t,"listener"),"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,l(n)):this.eventManager.addEventListener(e,t,l(n))},e}(),te="@".charCodeAt(0),ne=function(e){function t(t,n,r){var i=e.call(this,t)||this;i.component=r;var o=u(r.id,r.styles,[]);return n.addStyles(o),i.contentAttr=function(e){return Q.replace(q,e)}(r.id),i.hostAttr=function(e){return Z.replace(q,e)}(r.id),i}return Object(L.b)(t,e),t.prototype.applyToHost=function(t){e.prototype.setAttribute.call(this,t,this.hostAttr,"")},t.prototype.createElement=function(t,n){var r=e.prototype.createElement.call(this,t,n);return e.prototype.setAttribute.call(this,r,this.contentAttr,""),r},t}(ee),re=function(e){function t(t,n,r,i){var o=e.call(this,t)||this;o.sharedStylesHost=n,o.hostEl=r,o.component=i,o.shadowRoot=r.createShadowRoot(),o.sharedStylesHost.addHost(o.shadowRoot);for(var a=u(i.id,i.styles,[]),s=0;s<a.length;s++){var l=document.createElement("style");l.textContent=a[s],o.shadowRoot.appendChild(l)}return o}return Object(L.b)(t,e),t.prototype.nodeOrShadowRoot=function(e){return e===this.hostEl?this.shadowRoot:e},t.prototype.destroy=function(){this.sharedStylesHost.removeHost(this.shadowRoot)},t.prototype.appendChild=function(t,n){return e.prototype.appendChild.call(this,this.nodeOrShadowRoot(t),n)},t.prototype.insertBefore=function(t,n,r){return e.prototype.insertBefore.call(this,this.nodeOrShadowRoot(t),n,r)},t.prototype.removeChild=function(t,n){return e.prototype.removeChild.call(this,this.nodeOrShadowRoot(t),n)},t.prototype.parentNode=function(t){return this.nodeOrShadowRoot(e.prototype.parentNode.call(this,this.nodeOrShadowRoot(t)))},t}(ee),ie="undefined"!=typeof Zone&&Zone.__symbol__||function(e){return"__zone_symbol__"+e},oe=ie("addEventListener"),ae=ie("removeEventListener"),se={},ue="undefined"!=typeof Zone&&Zone[ie("BLACK_LISTED_EVENTS")];ue&&(O={},ue.forEach(function(e){O[e]=e}));var le=function(e){return!!O&&O.hasOwnProperty(e)},ce=function(e){var t=se[e.type];if(t){var n=this[t];if(n){var r=[e];if(1===n.length){return(a=n[0]).zone!==Zone.current?a.zone.run(a.handler,this,r):a.handler.apply(this,r)}for(var i=n.slice(),o=0;o<i.length;o++){var a=i[o];a.zone!==Zone.current?a.zone.run(a.handler,this,r):a.handler.apply(this,r)}}}},de=function(e){function t(t,n){var r=e.call(this,t)||this;return r.ngZone=n,r}return Object(L.b)(t,e),t.prototype.supports=function(e){return!0},t.prototype.addEventListener=function(e,t,n){var r=this,i=n;if(!e[oe]||w.z.isInAngularZone()&&!le(t))e.addEventListener(t,i,!1);else{var o=se[t];o||(o=se[t]=ie("ANGULAR"+t+"FALSE"));var a=e[o],s=a&&a.length>0;a||(a=e[o]=[]);var u=le(t)?Zone.root:Zone.current;if(0===a.length)a.push({zone:u,handler:i});else{for(var l=!1,c=0;c<a.length;c++)if(a[c].handler===i){l=!0;break}l||a.push({zone:u,handler:i})}s||e[oe](t,ce,!1)}return function(){return r.removeEventListener(e,t,i)}},t.prototype.removeEventListener=function(e,t,n){var r=e[ae];if(!r)return e.removeEventListener.apply(e,[t,n,!1]);var i=se[t],o=i&&e[i];if(!o)return e.removeEventListener.apply(e,[t,n,!1]);for(var a=0;a<o.length;a++)if(o[a].handler===n){o.splice(a,1);break}0===o.length&&r.apply(e,[t,ce,!1])},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]},{type:w.z}]},t}(B),he={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0},fe=new w.q("HammerGestureConfig"),pe=function(){function e(){this.events=[],this.overrides={}}return e.prototype.buildHammer=function(e){var t=new Hammer(e);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(var n in this.overrides)t.get(n).set(this.overrides[n]);return t},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[]},e}(),_e=function(e){function t(t,n){var r=e.call(this,t)||this;return r._config=n,r}return Object(L.b)(t,e),t.prototype.supports=function(e){if(!he.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e))return!1;if(!window.Hammer)throw new Error("Hammer.js is not loaded, can not bind "+e+" event");return!0},t.prototype.addEventListener=function(e,t,n){var r=this,i=this.manager.getZone();return t=t.toLowerCase(),i.runOutsideAngular(function(){var o=r._config.buildHammer(e),a=function(e){i.runGuarded(function(){n(e)})};return o.on(t,a),function(){return o.off(t,a)}})},t.prototype.isCustomEvent=function(e){return this._config.events.indexOf(e)>-1},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]},{type:pe,decorators:[{type:w.o,args:[fe]}]}]},t}(B),me=["alt","control","meta","shift"],ye={alt:function(e){return e.altKey},control:function(e){return e.ctrlKey},meta:function(e){return e.metaKey},shift:function(e){return e.shiftKey}},ge=function(e){function t(t){return e.call(this,t)||this}return Object(L.b)(t,e),t.prototype.supports=function(e){return null!=t.parseEventName(e)},t.prototype.addEventListener=function(e,n,i){var o=t.parseEventName(n),a=t.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(function(){return r().onAndCancel(e,o.domEventName,a)})},t.parseEventName=function(e){var n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;var i=t._normalizeKey(n.pop()),o="";if(me.forEach(function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o+=e+".")}),o+=i,0!=n.length||0===i.length)return null;var a={};return a.domEventName=r,a.fullKey=o,a},t.getEventFullKey=function(e){var t="",n=r().getEventKey(e);return" "===(n=n.toLowerCase())?n="space":"."===n&&(n="dot"),me.forEach(function(r){if(r!=n){(0,ye[r])(e)&&(t+=r+".")}}),t+=n},t.eventCallback=function(e,n,r){return function(i){t.getEventFullKey(i)===e&&r.runGuarded(function(){return n(i)})}},t._normalizeKey=function(e){switch(e){case"esc":return"escape";default:return e}},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},t}(B),ve=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,be=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,Me=null,we=null,Le=h("area,br,col,hr,img,wbr"),ke=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Te=h("rp,rt"),Ye=f(Te,ke),Se=f(ke,h("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),De=f(Te,h("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Ce=f(Le,Se,De,Ye),Oe=h("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),xe=h("srcset"),Ee=h("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),je=f(Oe,xe,Ee),Pe=function(){function e(){this.sanitizedSomething=!1,this.buf=[]}return e.prototype.sanitizeChildren=function(e){for(var t=e.firstChild;t;)if(we.isElementNode(t)?this.startElement(t):we.isTextNode(t)?this.chars(we.nodeValue(t)):this.sanitizedSomething=!0,we.firstChild(t))t=we.firstChild(t);else for(;t;){we.isElementNode(t)&&this.endElement(t);var n=p(t,we.nextSibling(t));if(n){t=n;break}t=p(t,we.parentElement(t))}return this.buf.join("")},e.prototype.startElement=function(e){var t=this,n=we.nodeName(e).toLowerCase();Ce.hasOwnProperty(n)?(this.buf.push("<"),this.buf.push(n),we.attributeMap(e).forEach(function(e,n){var r=n.toLowerCase();je.hasOwnProperty(r)?(Oe[r]&&(e=d(e)),xe[r]&&(e=function(e){return(e=String(e)).split(",").map(function(e){return d(e.trim())}).join(", ")}(e)),t.buf.push(" "),t.buf.push(n),t.buf.push('="'),t.buf.push(_(e)),t.buf.push('"')):t.sanitizedSomething=!0}),this.buf.push(">")):this.sanitizedSomething=!0},e.prototype.endElement=function(e){var t=we.nodeName(e).toLowerCase();Ce.hasOwnProperty(t)&&!Le.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))},e.prototype.chars=function(e){this.buf.push(_(e))},e}(),Ae=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,He=/([^\#-~ |!])/g,Ie=new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$","g"),Ne=/^url\(([^)]+)\)$/,Ve=function(){return function(){}}(),Fe=function(e){function t(t){var n=e.call(this)||this;return n._doc=t,n}return Object(L.b)(t,e),t.prototype.sanitize=function(e,t){if(null==t)return null;switch(e){case w.J.NONE:return t;case w.J.HTML:return t instanceof We?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"HTML"),y(this._doc,String(t)));case w.J.STYLE:return t instanceof ze?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"Style"),function(e){if(!(e=String(e).trim()))return"";var t=e.match(Ne);return t&&d(t[1])===t[1]||e.match(Ie)&&function(e){for(var t=!0,n=!0,r=0;r<e.length;r++){var i=e.charAt(r);"'"===i&&n?t=!t:'"'===i&&t&&(n=!n)}return t&&n}(e)?e:(Object(w.X)()&&r().log("WARNING: sanitizing unsafe style value "+e+" (see http://g.co/ng/security#xss)."),"unsafe")}(t));case w.J.SCRIPT:if(t instanceof Ge)return t.changingThisBreaksApplicationSecurity;throw this.checkNotSafeValue(t,"Script"),new Error("unsafe value used in a script context");case w.J.URL:return t instanceof Be||t instanceof Ue?t.changingThisBreaksApplicationSecurity:(this.checkNotSafeValue(t,"URL"),d(String(t)));case w.J.RESOURCE_URL:if(t instanceof Be)return t.changingThisBreaksApplicationSecurity;throw this.checkNotSafeValue(t,"ResourceURL"),new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");default:throw new Error("Unexpected SecurityContext "+e+" (see http://g.co/ng/security#xss)")}},t.prototype.checkNotSafeValue=function(e,t){if(e instanceof Re)throw new Error("Required a safe "+t+", got a "+e.getTypeName()+" (see http://g.co/ng/security#xss)")},t.prototype.bypassSecurityTrustHtml=function(e){return new We(e)},t.prototype.bypassSecurityTrustStyle=function(e){return new ze(e)},t.prototype.bypassSecurityTrustScript=function(e){return new Ge(e)},t.prototype.bypassSecurityTrustUrl=function(e){return new Ue(e)},t.prototype.bypassSecurityTrustResourceUrl=function(e){return new Be(e)},t.decorators=[{type:w.p}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:w.o,args:[j]}]}]},t}(Ve),Re=function(){function e(e){this.changingThisBreaksApplicationSecurity=e}return e.prototype.toString=function(){return"SafeValue must use [property]=binding: "+this.changingThisBreaksApplicationSecurity+" (see http://g.co/ng/security#xss)"},e}(),We=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.getTypeName=function(){return"HTML"},t}(Re),ze=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.getTypeName=function(){return"Style"},t}(Re),Ge=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.getTypeName=function(){return"Script"},t}(Re),Ue=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.getTypeName=function(){return"URL"},t}(Re),Be=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(L.b)(t,e),t.prototype.getTypeName=function(){return"ResourceURL"},t}(Re),Je=[{provide:w.C,useValue:M.h},{provide:w.D,useValue:function(){x.makeCurrent(),N.init()},multi:!0},{provide:M.g,useClass:P,deps:[j]},{provide:j,useFactory:function(){return document},deps:[]}],Ke=[{provide:w.I,useExisting:Ve},{provide:Ve,useClass:Fe,deps:[j]}],$e=Object(w.T)(w.Y,"browser",Je),qe=function(){function e(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}return e.withServerTransition=function(t){return{ngModule:e,providers:[{provide:w.a,useValue:t.appId},{provide:H,useExisting:w.a},I]}},e.decorators=[{type:w.w,args:[{providers:[Ke,{provide:w.l,useFactory:g,deps:[]},{provide:G,useClass:de,multi:!0},{provide:G,useClass:ge,multi:!0},{provide:G,useClass:_e,multi:!0},{provide:fe,useClass:pe},X,{provide:w.G,useExisting:X},{provide:J,useExisting:K},K,w.O,U,z,A,V],exports:[M.a,w.d]}]}],e.ctorParameters=function(){return[{type:e,decorators:[{type:w.A},{type:w.M}]}]},e}(),Ze="undefined"!=typeof window&&window||{},Qe=function(){return function(e,t){this.msPerTick=e,this.numTicks=t}}(),Xe=(function(){function e(e){this.appRef=e.injector.get(w.e)}e.prototype.timeChangeDetection=function(e){var t=e&&e.record,n=null!=Ze.console.profile;t&&n&&Ze.console.profile("Change Detection");for(var i=r().performanceNow(),o=0;o<5||r().performanceNow()-i<500;)this.appRef.tick(),o++;var a=r().performanceNow();t&&n&&Ze.console.profileEnd("Change Detection");var s=(a-i)/o;return Ze.console.log("ran "+o+" change detection cycles"),Ze.console.log(s.toFixed(2)+" ms per check"),new Qe(s,o)}}(),function(){function e(){this.store={},this.onSerializeCallbacks={}}return e.init=function(t){var n=new e;return n.store=t,n},e.prototype.get=function(e,t){return this.store[e]||t},e.prototype.set=function(e,t){this.store[e]=t},e.prototype.remove=function(e){delete this.store[e]},e.prototype.hasKey=function(e){return this.store.hasOwnProperty(e)},e.prototype.onSerialize=function(e,t){this.onSerializeCallbacks[e]=t},e.prototype.toJson=function(){for(var e in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(e){console.warn("Exception in onSerialize callback: ",e)}return JSON.stringify(this.store)},e.decorators=[{type:w.p}],e.ctorParameters=function(){return[]},e}());(function(){function e(){}e.decorators=[{type:w.w,args:[{providers:[{provide:Xe,useFactory:v,deps:[j,w.a]}]}]}],e.ctorParameters=function(){return[]}})(),function(){function e(){}e.all=function(){return function(e){return!0}},e.css=function(e){return function(t){return null!=t.nativeElement&&r().elementMatches(t.nativeElement,e)}},e.directive=function(e){return function(t){return-1!==t.providerTokens.indexOf(e)}}}(),new w.P("5.0.2")},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.isFunction=function(e){return"function"==typeof e}},function(e,t,n){"use strict";t.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length}},function(e,t,n){"use strict";t.isObject=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";t.errorObject={e:{}}},function(e,t,n){"use strict";t.empty={closed:!0,next:function(e){},error:function(e){throw e},complete:function(){}}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}var i=n(32);t.getSymbolObservable=r,t.observable=r(i.root),t.$$observable=t.observable},function(e,t,n){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];var n=Number.POSITIVE_INFINITY,r=null,u=e[e.length-1];return s.isScheduler(u)?(r=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(n=e.pop())):"number"==typeof u&&(n=e.pop()),null===r&&1===e.length&&e[0]instanceof i.Observable?e[0]:a.mergeAll(n)(new o.ArrayObservable(e,r))}var i=n(17),o=n(267),a=n(269),s=n(88);t.merge=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];return function(t){return t.lift.call(r.apply(void 0,[t].concat(e)))}},t.mergeStatic=r},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=function(e){function t(t){e.call(this),this.scheduler=t}return r(t,e),t.create=function(e){return new t(e)},t.dispatch=function(e){e.subscriber.complete()},t.prototype._subscribe=function(e){var n=this.scheduler;if(n)return n.schedule(t.dispatch,0,{subscriber:e});e.complete()},t}(n(17).Observable);t.EmptyObservable=i},function(e,t,n){"use strict";t.isScheduler=function(e){return e&&"function"==typeof e.schedule}},function(e,t,n){"use strict";var r=n(32),i=n(271),o=n(272),a=n(82),s=n(17),u=n(273),l=n(274),c=n(85);t.subscribeToResult=function(e,t,n,d){var h=new l.InnerSubscriber(e,n,d);if(h.closed)return null;if(t instanceof s.Observable)return t._isScalar?(h.next(t.value),h.complete(),null):(h.syncErrorThrowable=!0,t.subscribe(h));if(i.isArrayLike(t)){for(var f=0,p=t.length;f<p&&!h.closed;f++)h.next(t[f]);h.closed||h.complete()}else{if(o.isPromise(t))return t.then(function(e){h.closed||(h.next(e),h.complete())},function(e){return h.error(e)}).then(null,function(e){r.root.setTimeout(function(){throw e})}),h;if(t&&"function"==typeof t[u.iterator])for(var _=t[u.iterator]();;){var m=_.next();if(m.done){h.complete();break}if(h.next(m.value),h.closed)break}else if(t&&"function"==typeof t[c.observable]){var y=t[c.observable]();if("function"==typeof y.subscribe)return y.subscribe(new l.InnerSubscriber(e,n,d));h.error(new TypeError("Provided object does not correctly implement Symbol.observable"))}else{var g="You provided "+(a.isObject(t)?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";h.error(new TypeError(g))}}return null}},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.notifyNext=function(e,t,n,r,i){this.destination.next(t)},t.prototype.notifyError=function(e,t){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.complete()},t}(n(27).Subscriber);t.OuterSubscriber=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(27);t.refCount=function(){return function(e){return e.lift(new o(e))}};var o=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new a(e,n),i=t.subscribe(r);return r.closed||(r.connection=n.connect()),i},e}(),a=function(e){function t(t,n){e.call(this,t),this.connectable=n}return r(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},t}(i.Subscriber)},function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=92},function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(28);var r=function(){return function(e){this.storyService=e,this.storyService.start()}}()},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r;!function(e){e.DEFAULT="default",e.TEXT="text"}(r||(r={}))},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),i=(n.n(r),function(){function e(){}return e.prototype.init=function(e){this.story=e},e.prototype.handle=function(e,t){"function"==typeof this[e]&&this[e](t)},e.prototype.birthdayToAge=function(e){this.story.variablesState.$("age",String(r().diff(r(e,"MM/DD/YYYY"),"years")))},e}())},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},i={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},o=function(e){return function(t,n,o,a){var s=r(t),u=i[e][r(t)];return 2===s&&(u=u[n?0:1]),u.replace(/%d/i,t)}},a=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"];return e.defineLocale("ar",{months:a,monthsShort:a,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:o("s"),m:o("m"),mm:o("m"),h:o("h"),hh:o("h"),d:o("d"),dd:o("d"),M:o("M"),MM:o("M"),y:o("y"),yy:o("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(e){return function(t,i,o,a){var s=n(t),u=r[e][n(t)];return 2===s&&(u=u[i?0:1]),u.replace(/%d/i,t)}},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];return e.defineLocale("ar-ly",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};return e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};return e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var n=e%10;return e+(t[n]||t[e%100-n]||t[e>=100?100:null])},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){return"m"===n?t?"хвіліна":"хвіліну":"h"===n?t?"гадзіна":"гадзіну":e+" "+function(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}({mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"}[n],+e)}return e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:t,mm:t,h:t,hh:t,d:"дзень",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};return e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e},meridiem:function(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};return e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){return e+" "+function(e,t){if(2===t)return function(e){var t={m:"v",b:"v",d:"z"};if(void 0===t[e.charAt(0)])return e;return t[e.charAt(0)]+e.substring(1)}(e);return e}({mm:"munutenn",MM:"miz",dd:"devezh"}[n],e)}function n(e){return e>9?n(e%10):e}return e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function(e){switch(n(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){return e+(1===e?"añ":"vet")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,n,r,i){var o=e+" ";switch(r){case"s":return n||i?"pár sekund":"pár sekundami";case"m":return n?"minuta":i?"minutu":"minutou";case"mm":return n||i?o+(t(e)?"minuty":"minut"):o+"minutami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?o+(t(e)?"hodiny":"hodin"):o+"hodinami";case"d":return n||i?"den":"dnem";case"dd":return n||i?o+(t(e)?"dny":"dní"):o+"dny";case"M":return n||i?"měsíc":"měsícem";case"MM":return n||i?o+(t(e)?"měsíce":"měsíců"):o+"měsíci";case"y":return n||i?"rok":"rokem";case"yy":return n||i?o+(t(e)?"roky":"let"):o+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),i="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");return e.defineLocale("cs",{months:r,monthsShort:i,monthsParse:function(e,t){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(r,i),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(i),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){return e+(/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран")},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t="";return e>20?t=40===e||50===e||60===e||80===e||100===e?"fed":"ain":e>0&&(t=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][e]),e+t},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}return e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}return e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}return e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH.mm",LLLL:"dddd, D. MMMM YYYY HH.mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];return e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,n){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return e?"string"==typeof t&&/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n=this._calendarEl[e],r=t&&t.hours();return function(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}(n)&&(n=n.apply(t)),n.replace("{}",r%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],i=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY H:mm",LLLL:"dddd, MMMM [de] D [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?i[n][2]?i[n][2]:i[n][1]:r?i[n][0]:i[n][1]}return e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};return e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,i,o){var a="";switch(i){case"s":return o?"muutaman sekunnin":"muutama sekunti";case"m":return o?"minuutin":"minuutti";case"mm":a=o?"minuutin":"minuuttia";break;case"h":return o?"tunnin":"tunti";case"hh":a=o?"tunnin":"tuntia";break;case"d":return o?"päivän":"päivä";case"dd":a=o?"päivän":"päivää";break;case"M":return o?"kuukauden":"kuukausi";case"MM":a=o?"kuukauden":"kuukautta";break;case"y":return o?"vuoden":"vuosi";case"yy":a=o?"vuoden":"vuotta"}return a=function(e,t){return e<10?t?r[e]:n[e]:e}(e,o)+" "+a}var n="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),r=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",n[7],n[8],n[9]];return e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],monthsShort:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],monthsParseExact:!0,weekdays:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={s:["thodde secondanim","thodde second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" hor"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return t?i[n][0]:i[n][1]}return e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,t){switch(t){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,t){return 12===e&&(e=0),"rati"===t?e<4?e:e+12:"sokalli"===t?e:"donparam"===t?e>12?e:e+12:"sanje"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};return e.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(e){return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(e,t){return 12===e&&(e=0),"રાત"===t?e<4?e:e+12:"સવાર"===t?e:"બપોર"===t?e>=10?e:e+12:"સાંજ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"રાત":e<10?"સવાર":e<17?"બપોર":e<20?"સાંજ":"રાત"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}return e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i=e;switch(n){case"s":return r||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(r||t?" perc":" perce");case"mm":return i+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" óra":" órája");case"hh":return i+(r||t?" óra":" órája");case"d":return"egy"+(r||t?" nap":" napja");case"dd":return i+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hónap":" hónapja");case"MM":return i+(r||t?" hónap":" hónapja");case"y":return"egy"+(r||t?" év":" éve");case"yy":return i+(r||t?" év":" éve")}return""}function n(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");return e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return n.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return n.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e){return e%100==11||e%10!=1}function n(e,n,r,i){var o=e+" ";switch(r){case"s":return n||i?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?o+(n||i?"mínútur":"mínútum"):n?o+"mínúta":o+"mínútu";case"hh":return t(e)?o+(n||i?"klukkustundir":"klukkustundum"):o+"klukkustund";case"d":return n?"dagur":i?"dag":"degi";case"dd":return t(e)?n?o+"dagar":o+(i?"daga":"dögum"):n?o+"dagur":o+(i?"dag":"degi");case"M":return n?"mánuður":i?"mánuð":"mánuði";case"MM":return t(e)?n?o+"mánuðir":o+(i?"mánuði":"mánuðum"):n?o+"mánuður":o+(i?"mánuð":"mánuði");case"y":return n||i?"ár":"ári";case"yy":return t(e)?o+(n||i?"ár":"árum"):o+(n||i?"ár":"ári")}}return e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 HH:mm dddd",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日 HH:mm dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის უკან"):/წელი/.test(e)?e.replace(/წელი$/,"წლის უკან"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};return e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){return e+(t[e]||t[e%10]||t[e>=100?100:null])},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};return e.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(e){return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ರಾತ್ರಿ"===t?e<4?e:e+12:"ಬೆಳಿಗ್ಗೆ"===t?e:"ಮಧ್ಯಾಹ್ನ"===t?e>=10?e:e+12:"ಸಂಜೆ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ರಾತ್ರಿ":e<10?"ಬೆಳಿಗ್ಗೆ":e<17?"ಮಧ್ಯಾಹ್ನ":e<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(e){return e+"ನೇ"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e}},meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};return e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){return e+(t[e]||t[e%10]||t[e>=100?100:null])},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?i[n][0]:i[n][1]}function n(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10;return n(0===t?e/10:t)}if(e<1e4){for(;e>=10;)e/=10;return n(e)}return e/=1e3,n(e)}return e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return n(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return n(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,i){return t?r(n)[0]:i?r(n)[1]:r(n)[2]}function n(e){return e%10==0||e>10&&e<20}function r(e){return o[e].split("_")}function i(e,i,o,a){var s=e+" ";return 1===e?s+t(0,i,o[0],a):i?s+(n(e)?r(o)[1]:r(o)[0]):a?s+r(o)[1]:s+(n(e)?r(o)[1]:r(o)[2])}var o={m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};return e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"},m:t,mm:i,h:t,hh:i,d:t,dd:i,M:t,MM:i,y:t,yy:i},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){return n?t%10==1&&t%100!=11?e[2]:e[3]:t%10==1&&t%100!=11?e[0]:e[1]}function n(e,n,r){return e+" "+t(i[r],e,n)}function r(e,n,r){return t(i[r],e,n)}var i={m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};return e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function(e,t){return t?"dažas sekundes":"dažām sekundēm"},m:r,mm:n,h:r,hh:n,d:r,dd:n,M:r,MM:n,y:r,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}};return e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i="";if(t)switch(n){case"s":i="काही सेकंद";break;case"m":i="एक मिनिट";break;case"mm":i="%d मिनिटे";break;case"h":i="एक तास";break;case"hh":i="%d तास";break;case"d":i="एक दिवस";break;case"dd":i="%d दिवस";break;case"M":i="एक महिना";break;case"MM":i="%d महिने";break;case"y":i="एक वर्ष";break;case"yy":i="%d वर्षे"}else switch(n){case"s":i="काही सेकंदां";break;case"m":i="एका मिनिटा";break;case"mm":i="%d मिनिटां";break;case"h":i="एका तासा";break;case"hh":i="%d तासां";break;case"d":i="एका दिवसा";break;case"dd":i="%d दिवसां";break;case"M":i="एका महिन्या";break;case"MM":i="%d महिन्यां";break;case"y":i="एका वर्षा";break;case"yy":i="%d वर्षां"}return i.replace(/%d/i,e)}var n={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},r={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return n[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};return e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};return e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],i=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;return e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:i,monthsShortRegex:i,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};return e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,n,r){var i=e+" ";switch(r){case"m":return n?"minuta":"minutę";case"mm":return i+(t(e)?"minuty":"minut");case"h":return n?"godzina":"godzinę";case"hh":return i+(t(e)?"godziny":"godzin");case"MM":return i+(t(e)?"miesiące":"miesięcy");case"yy":return i+(t(e)?"lata":"lat")}}var r="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,t){return e?""===t?"("+i[e.month()]+"|"+r[e.month()]+")":/D MMMM/.test(t)?i[e.month()]:r[e.month()]:r},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){var r=" ";return(e%100>=20||e>=100&&e%100==0)&&(r=" de "),e+r+{mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"}[n]}return e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){return"m"===n?t?"минута":"минуту":e+" "+function(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[n],+e)}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];return e.defineLocale("sd",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e){return e>1&&e<5}function n(e,n,r,i){var o=e+" ";switch(r){case"s":return n||i?"pár sekúnd":"pár sekundami";case"m":return n?"minúta":i?"minútu":"minútou";case"mm":return n||i?o+(t(e)?"minúty":"minút"):o+"minútami";case"h":return n?"hodina":i?"hodinu":"hodinou";case"hh":return n||i?o+(t(e)?"hodiny":"hodín"):o+"hodinami";case"d":return n||i?"deň":"dňom";case"dd":return n||i?o+(t(e)?"dni":"dní"):o+"dňami";case"M":return n||i?"mesiac":"mesiacom";case"MM":return n||i?o+(t(e)?"mesiace":"mesiacov"):o+"mesiacmi";case"y":return n||i?"rok":"rokom";case"yy":return n||i?o+(t(e)?"roky":"rokov"):o+"rokmi"}}var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),i="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");return e.defineLocale("sk",{months:r,monthsShort:i,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return i+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return i+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";case"dd":return i+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return i+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";case"y":return t||r?"eno leto":"enim letom";case"yy":return i+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti"}}return e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}};return e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var i=t.words[r];return 1===r.length?n?i[0]:i[1]:e+" "+t.correctGrammaticalCase(e,i)}};return e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"e":1===t?"a":2===t?"a":"e")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};return e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",m:"minutu ida",mm:"minutus %d",h:"horas ida",hh:"horas %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,r,i){var o=function(e){var t=Math.floor(e%1e3/100),r=Math.floor(e%100/10),i=e%10,o="";t>0&&(o+=n[t]+"vatlh");r>0&&(o+=(""!==o?" ":"")+n[r]+"maH");i>0&&(o+=(""!==o?" ":"")+n[i]);return""===o?"pagh":o}(e);switch(r){case"mm":return o+" tup";case"hh":return o+" rep";case"dd":return o+" jaj";case"MM":return o+" jar";case"yy":return o+" DIS"}}var n="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");return e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq"},past:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret"},s:"puS lup",m:"wa’ tup",mm:t,h:"wa’ rep",hh:t,d:"wa’ jaj",dd:t,M:"wa’ jar",MM:t,y:"wa’ DIS",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};return e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},dayOfMonthOrdinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var n=e%10;return e+(t[n]||t[e%100-n]||t[e>=100?100:null])},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n,r){var i={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return r?i[n][0]:t?i[n][0]:i[n][1]}return e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";function t(e,t,n){return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+function(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}({mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n],+e)}function n(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}return e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};return e?n[/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative"][e.day()]:n.nominative},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:n("[Сьогодні "),nextDay:n("[Завтра "),lastDay:n("[Вчора "),nextWeek:n("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return n("[Минулої] dddd [").call(this);case 1:case 2:case 4:return n("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";var t=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];return e.defineLocale("ur",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},function(e,t,n){!function(e,t){t(n(0))}(0,function(e){"use strict";return e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日 HH:mm",LLLL:"YYYY年MMMD日dddd HH:mm",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日 HH:mm",llll:"YYYY年MMMD日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(0),i=(n.n(r),function(){function e(){}return e.prototype.validate=function(e,t){var n="validate"+e.charAt(0).toUpperCase()+e.slice(1);return"function"==typeof this[n]?this[n](t):null},e.prototype.validateDate=function(e){return e=String(e),r(e,"MM/DD/YYYY").isValid()?null:"date"},e}())},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(216),i=(n.n(r),n(12),function(){function e(){}return e.prototype.ngOnInit=function(){r({targets:this.bubble,opacity:[0,1],scaleX:[0,1],duration:800,elasticity:400})},Object.defineProperty(e.prototype,"bubble",{get:function(){return this.bubbleElementRef.nativeElement},enumerable:!0,configurable:!0}),e}())},function(e,t,n){(function(n){var r,i,o,a={scope:{}};a.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},a.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:void 0!==n&&null!=n?n:e},a.global=a.getGlobal(this),a.SYMBOL_PREFIX="jscomp_symbol_",a.initSymbol=function(){a.initSymbol=function(){},a.global.Symbol||(a.global.Symbol=a.Symbol)},a.symbolCounter_=0,a.Symbol=function(e){return a.SYMBOL_PREFIX+(e||"")+a.symbolCounter_++},a.initSymbolIterator=function(){a.initSymbol();var e=a.global.Symbol.iterator;e||(e=a.global.Symbol.iterator=a.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&a.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return a.arrayIterator(this)}}),a.initSymbolIterator=function(){}},a.arrayIterator=function(e){var t=0;return a.iteratorPrototype(function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}})},a.iteratorPrototype=function(e){return a.initSymbolIterator(),e={next:e},e[a.global.Symbol.iterator]=function(){return this},e},a.array=a.array||{},a.iteratorFromArray=function(e,t){a.initSymbolIterator(),e instanceof String&&(e+="");var n=0,r={next:function(){if(n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},a.polyfill=function(e,t,n,r){if(t){for(n=a.global,e=e.split("."),r=0;r<e.length-1;r++){var i=e[r];i in n||(n[i]={}),n=n[i]}(t=t(r=n[e=e[e.length-1]]))!=r&&null!=t&&a.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},a.polyfill("Array.prototype.keys",function(e){return e||function(){return a.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var s=this;!function(n,a){i=[],void 0!==(o="function"==typeof(r=a)?r.apply(t,i):r)&&(e.exports=o)}(0,function(){function e(e){if(!x.col(e))try{return document.querySelectorAll(e)}catch(e){}}function t(e,t){for(var n=e.length,r=2<=arguments.length?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var a=e[o];t.call(r,a,o,e)&&i.push(a)}return i}function n(e){return e.reduce(function(e,t){return e.concat(x.arr(t)?n(t):t)},[])}function r(t){return x.arr(t)?t:(x.str(t)&&(t=e(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function i(e,t){return e.some(function(e){return e===t})}function o(e){var t,n={};for(t in e)n[t]=e[t];return n}function a(e,t){var n,r=o(e);for(n in e)r[n]=t.hasOwnProperty(n)?t[n]:e[n];return r}function u(e,t){var n,r=o(e);for(n in t)r[n]=x.und(e[n])?t[n]:e[n];return r}function l(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+(e=parseInt(t[1],16))+","+parseInt(t[2],16)+","+(t=parseInt(t[3],16))+",1)"}function c(e){if(e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))return e[2]}function d(e,t){return x.fnc(e)?e(t.target,t.id,t.total):e}function h(e,t){if(t in e.style)return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function f(e,t){return x.dom(e)&&i(O,t)?"transform":x.dom(e)&&(e.getAttribute(t)||x.svg(e)&&e[t])?"attribute":x.dom(e)&&"transform"!==t&&h(e,t)?"css":null!=e[t]?"object":void 0}function p(e,n){switch(f(e,n)){case"transform":return function(e,n){var r=function(e){return-1<e.indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(e=e.style.transform))return r;for(var i=[],o=[],a=[],s=/(\w+)\((.+?)\)/g;i=s.exec(e);)o.push(i[1]),a.push(i[2]);return(e=t(a,function(e,t){return o[t]===n})).length?e[0]:r}(e,n);case"css":return h(e,n);case"attribute":return e.getAttribute(n)}return e[n]||0}function _(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=c(e)||0;switch(t=parseFloat(t),e=parseFloat(e.replace(n[0],"")),n[0][0]){case"+":return t+e+r;case"-":return t-e+r;case"*":return t*e+r}}function m(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function y(e){e=e.points;for(var t,n=0,r=0;r<e.numberOfItems;r++){var i=e.getItem(r);0<r&&(n+=m(t,i)),t=i}return n}function g(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*e.getAttribute("r");case"rect":return 2*e.getAttribute("width")+2*e.getAttribute("height");case"line":return m({x:e.getAttribute("x1"),y:e.getAttribute("y1")},{x:e.getAttribute("x2"),y:e.getAttribute("y2")});case"polyline":return y(e);case"polygon":var t=e.points;return y(e)+m(t.getItem(t.numberOfItems-1),t.getItem(0))}}function v(e,t){function n(n){return n=void 0===n?0:n,e.el.getPointAtLength(1<=t+n?t+n:0)}var r=n(),i=n(-1),o=n(1);switch(e.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(o.y-i.y,o.x-i.x)/Math.PI}}function b(e,t){var n,r=/-?\d*\.?\d+/g;if(n=x.pth(e)?e.totalLength:e,x.col(n))if(x.rgb(n)){var i=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=i?"rgba("+i[1]+",1)":n}else n=x.hex(n)?l(n):x.hsl(n)?function(e){function t(e,t,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?e+6*(t-e)*n:.5>n?t:n<2/3?e+(t-e)*(2/3-n)*6:e}i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),e=parseInt(i[1])/360;var n=parseInt(i[2])/100,r=parseInt(i[3])/100,i=i[4]||1;if(0==n)r=n=e=r;else{var o=.5>r?r*(1+n):r+n-r*n,a=2*r-o,r=t(a,o,e+1/3),n=t(a,o,e);e=t(a,o,e-1/3)}return"rgba("+255*r+","+255*n+","+255*e+","+i+")"}(n):void 0;else i=(i=c(n))?n.substr(0,n.length-i.length):n,n=t&&!/\s/g.test(n)?i+t:i;return n+="",{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:x.str(e)||t?n.split(r):[]}}function M(e){return e=e?n(x.arr(e)?e.map(r):r(e)):[],t(e,function(e,t,n){return n.indexOf(e)===t})}function w(e,t){var n=o(t);if(x.arr(e)){var i=e.length;2!==i||x.obj(e[0])?x.fnc(t.duration)||(n.duration=t.duration/i):e={value:e}}return r(e).map(function(e,n){return n=n?0:t.delay,e=x.obj(e)&&!x.pth(e)?e:{value:e},x.und(e.delay)&&(e.delay=n),e}).map(function(e){return u(e,n)})}function L(e,t){var n;return e.tweens.map(function(r){var i=(r=function(e,t){var n,r={};for(n in e){var i=d(e[n],t);x.arr(i)&&1===(i=i.map(function(e){return d(e,t)})).length&&(i=i[0]),r[n]=i}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,t)).value,o=p(t.target,e.name),a=n?n.to.original:o,a=x.arr(i)?i[0]:a,s=_(x.arr(i)?i[1]:i,a),o=c(s)||c(a)||c(o);return r.from=b(a,o),r.to=b(s,o),r.start=n?n.end:e.offset,r.end=r.start+r.delay+r.duration,r.easing=function(e){return x.arr(e)?E.apply(this,e):j[e]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=x.pth(i),r.isColor=x.col(r.from.original),r.isColor&&(r.round=1),n=r})}function k(e,t,n,r){var i="delay"===e;return t.length?(i?Math.min:Math.max).apply(Math,t.map(function(t){return t[e]})):i?r.delay:n.offset+r.delay+r.duration}function T(e){var r,i=a(D,e),o=a(C,e),s=function(e){var t=M(e);return t.map(function(e,n){return{target:e,id:n,total:t.length}})}(e.targets),l=[],c=u(i,o);for(r in e)c.hasOwnProperty(r)||"targets"===r||l.push({name:r,offset:c.offset,tweens:w(e[r],o)});return e=function(e,r){return t(n(e.map(function(e){return r.map(function(t){var n=f(e.target,t.name);if(n){var r=L(t,e);t={type:n,property:t.name,animatable:e,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else t=void 0;return t})})),function(e){return!x.und(e)})}(s,l),u(i,{children:[],animatables:s,animations:e,duration:k("duration",e,i,o),delay:k("delay",e,i,o)})}function Y(e){function n(){return window.Promise&&new Promise(function(e){return d=e})}function r(e){return p.reversed?p.duration-e:e}function i(e){for(var n=0,r={},i=p.animations,o=i.length;n<o;){var a=i[n],s=a.animatable,u=(l=a.tweens)[f=l.length-1];f&&(u=t(l,function(t){return e<t.end})[0]||u);for(var l=Math.min(Math.max(e-u.start-u.delay,0),u.duration)/u.duration,c=isNaN(l)?1:u.easing(l,u.elasticity),l=u.to.strings,d=u.round,f=[],_=void 0,_=u.to.numbers.length,m=0;m<_;m++){var y=void 0,y=u.to.numbers[m],g=u.from.numbers[m],y=u.isPath?v(u.value,c*y):g+c*(y-g);d&&(u.isColor&&2<m||(y=Math.round(y*d)/d)),f.push(y)}if(u=l.length)for(_=l[0],c=0;c<u;c++)d=l[c+1],m=f[c],isNaN(m)||(_=d?_+(m+d):_+(m+" "));else _=f[0];P[a.type](s.target,a.property,_,r,s.id),a.currentValue=_,n++}if(n=Object.keys(r).length)for(i=0;i<n;i++)S||(S=h(document.body,"transform")?"transform":"-webkit-transform"),p.animatables[i].target.style[S]=r[i].join(" ");p.currentTime=e,p.progress=e/p.duration*100}function o(e){p[e]&&p[e](p)}function a(){p.remaining&&!0!==p.remaining&&p.remaining--}function s(e){var t=p.duration,s=p.offset,h=s+p.delay,_=p.currentTime,m=p.reversed,y=r(e);if(p.children.length){var g=p.children,v=g.length;if(y>=p.currentTime)for(var b=0;b<v;b++)g[b].seek(y);else for(;v--;)g[v].seek(y)}(y>=h||!t)&&(p.began||(p.began=!0,o("begin")),o("run")),y>s&&y<t?i(y):(y<=s&&0!==_&&(i(0),m&&a()),(y>=t&&_!==t||!t)&&(i(t),m||a())),o("update"),e>=t&&(p.remaining?(l=u,"alternate"===p.direction&&(p.reversed=!p.reversed)):(p.pause(),p.completed||(p.completed=!0,o("complete"),"Promise"in window&&(d(),f=n()))),c=0)}e=void 0===e?{}:e;var u,l,c=0,d=null,f=n(),p=T(e);return p.reset=function(){var e=p.direction,t=p.loop;for(p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.completed=!1,p.reversed="reverse"===e,p.remaining="alternate"===e&&1===t?2:t,i(0),e=p.children.length;e--;)p.children[e].reset()},p.tick=function(e){u=e,l||(l=u),s((c+u-l)*Y.speed)},p.seek=function(e){s(r(e))},p.pause=function(){var e=A.indexOf(p);-1<e&&A.splice(e,1),p.paused=!0},p.play=function(){p.paused&&(p.paused=!1,l=0,c=r(p.currentTime),A.push(p),H||I())},p.reverse=function(){p.reversed=!p.reversed,l=0,c=r(p.currentTime)},p.restart=function(){p.pause(),p.reset(),p.play()},p.finished=f,p.reset(),p.autoplay&&p.play(),p}var S,D={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},C={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},O="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),x={arr:function(e){return Array.isArray(e)},obj:function(e){return-1<Object.prototype.toString.call(e).indexOf("Object")},pth:function(e){return x.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||x.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return x.hex(e)||x.rgb(e)||x.hsl(e)}},E=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}return function(t,n,r,i){if(0<=t&&1>=t&&0<=r&&1>=r){var o=new Float32Array(11);if(t!==n||r!==i)for(var a=0;11>a;++a)o[a]=e(.1*a,t,r);return function(a){if(t===n&&r===i)return a;if(0===a)return 0;if(1===a)return 1;for(var s=0,u=1;10!==u&&o[u]<=a;++u)s+=.1;var u=s+(a-o[--u])/(o[u+1]-o[u])*.1,l=3*(1-3*r+3*t)*u*u+2*(3*r-6*t)*u+3*t;if(.001<=l){for(s=0;4>s&&0!=(l=3*(1-3*r+3*t)*u*u+2*(3*r-6*t)*u+3*t);++s)var c=e(u,t,r)-a,u=u-c/l;a=u}else if(0===l)a=u;else{var u=s,s=s+.1,d=0;do{c=u+(s-u)/2,0<(l=e(c,t,r)-a)?s=c:u=c}while(1e-7<Math.abs(l)&&10>++d);a=c}return e(a,n,i)}}}}(),j=function(){function e(e,t){return 0===e||1===e?e:-Math.pow(2,10*(e-1))*Math.sin(2*(e-1-t/(2*Math.PI)*Math.asin(1))*Math.PI/t)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],e],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,n){return 1-e(1-t,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,n){return.5>t?e(2*t,n)/2:1-e(-2*t+2,n)/2}]},i={linear:E(.25,.25,.75,.75)},o={};for(t in r)o.type=t,r[o.type].forEach(function(e){return function(t,r){i["ease"+e.type+n[r]]=x.fnc(t)?t:E.apply(s,t)}}(o)),o={type:o.type};return i}(),P={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){r[i]||(r[i]=[]),r[i].push(t+"("+n+")")}},A=[],H=0,I=function(){function e(){H=requestAnimationFrame(t)}function t(t){var n=A.length;if(n){for(var r=0;r<n;)A[r]&&A[r].tick(t),r++;e()}else cancelAnimationFrame(H),H=0}return e}();return Y.version="2.2.0",Y.speed=1,Y.running=A,Y.remove=function(e){e=M(e);for(var t=A.length;t--;)for(var n=A[t],r=n.animations,o=r.length;o--;)i(e,r[o].animatable.target)&&(r.splice(o,1),r.length||n.pause())},Y.getValue=p,Y.path=function(t,n){var r=x.str(t)?e(t)[0]:t,i=n||100;return function(e){return{el:r,property:e,totalLength:g(r)*(i/100)}}},Y.setDashoffset=function(e){var t=g(e);return e.setAttribute("stroke-dasharray",t),t},Y.bezier=E,Y.easings=j,Y.timeline=function(e){var t=Y(e);return t.pause(),t.duration=0,t.add=function(n){return t.children.forEach(function(e){e.began=!0,e.completed=!0}),r(n).forEach(function(n){var r=u(n,a(C,e||{}));r.targets=r.targets||e.targets,n=t.duration;var i=r.offset;r.autoplay=!1,r.direction=t.direction,r.offset=x.und(i)?n:_(i,n),t.began=!0,t.completed=!0,t.seek(r.offset),(r=Y(r)).began=!0,r.completed=!0,r.duration>n&&(t.duration=r.duration),t.children.push(r)}),t.seek(0),t.reset(),t.autoplay&&t.restart(),t},t},Y.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},Y})}).call(t,n(38))},function(e,t,n){"use strict";/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function r(e){return null==e||0===e.length}function i(e){return null!=e}function o(e){var t=Object(C._12)(e)?Object(x.fromPromise)(e):e;if(!Object(C._11)(t))throw new Error("Expected validator to return Promise or Observable.");return t}function a(e){var t=e.reduce(function(e,t){return null!=t?Object(D.a)({},e,t):e},{});return 0===Object.keys(t).length?null:t}function s(e){return e.validate?function(t){return e.validate(t)}:e}function u(e){return e.validate?function(t){return e.validate(t)}:e}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function l(){throw new Error("unimplemented")}function c(e,t){return null==e?""+t:(t&&"object"==typeof t&&(t="Object"),(e+": "+t).slice(0,50))}function d(e,t){return null==e?""+t:("string"==typeof t&&(t="'"+t+"'"),t&&"object"==typeof t&&(t="Object"),(e+": "+t).slice(0,50))}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function h(e, t) {
    return t.path.concat([e])
}

function f(e, t) {
    e || y(t, "Cannot find control with"), t.valueAccessor || y(t, "No value accessor for form control with"), e.validator = V.compose([e.validator, t.validator]), e.asyncValidator = V.composeAsync([e.asyncValidator, t.asyncValidator]), t.valueAccessor.writeValue(e.value),
        function(e, t) {
            t.valueAccessor.registerOnChange(function(n) {
                e._pendingValue = n, e._pendingDirty = !0, "change" === e.updateOn && p(e, t)
            })
        }(e, t),
        function(e, t) {
            e.registerOnChange(function(e, n) {
                t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e)
            })
        }(e, t),
        function(e, t) {
            t.valueAccessor.registerOnTouched(function() {
                e._pendingTouched = !0, "blur" === e.updateOn && p(e, t), "submit" !== e.updateOn && e.markAsTouched()
            })
        }(e, t), t.valueAccessor.setDisabledState && e.registerOnDisabledChange(function(e) {
            t.valueAccessor.setDisabledState(e)
        }), t._rawValidators.forEach(function(t) {
            t.registerOnValidatorChange && t.registerOnValidatorChange(function() {
                return e.updateValueAndValidity()
            })
        }), t._rawAsyncValidators.forEach(function(t) {
            t.registerOnValidatorChange && t.registerOnValidatorChange(function() {
                return e.updateValueAndValidity()
            })
        })
}

function p(e, t) {
    t.viewToModelUpdate(e._pendingValue), e._pendingDirty && e.markAsDirty(), e.setValue(e._pendingValue, {
        emitModelToViewChange: !1
    })
}

function _(e, t) {
    null == e && y(t, "Cannot find control with"), e.validator = V.compose([e.validator, t.validator]), e.asyncValidator = V.composeAsync([e.asyncValidator, t.asyncValidator])
}

function m(e) {
    return y(e, "There is no FormControl instance attached to form control element with")
}

function y(e, t) {
    var n;
    throw n = e.path.length > 1 ? "path: '" + e.path.join(" -> ") + "'" : e.path[0] ? "name: '" + e.path + "'" : "unspecified name attribute", new Error(t + " " + n)
}

function g(e) {
    return null != e ? V.compose(e.map(s)) : null
}

function v(e) {
    return null != e ? V.composeAsync(e.map(u)) : null
}

function b(e, t) {
    if (!e.hasOwnProperty("model")) return !1;
    var n = e.model;
    return !!n.isFirstChange() || !Object(C._15)(t, n.currentValue)
}

function M(e, t) {
    e._syncPendingControls(), t.forEach(function(e) {
        var t = e.control;
        "submit" === t.updateOn && e.viewToModelUpdate(t._pendingValue)
    })
}

function w(e, t) {
    if (!t) return null;
    var n = void 0,
        r = void 0,
        i = void 0;
    return t.forEach(function(t) {
        t.constructor === U ? n = t : ! function(e) {
            return ae.some(function(t) {
                return e.constructor === t
            })
        }(t) ? (i && y(e, "More than one custom value accessor matches form control with"), i = t) : (r && y(e, "More than one built-in value accessor matches form control with"), r = t)
    }), i || (r || (n || (y(e, "No valid value accessor for form control with"), null)))
}

function L(e, t) {
    var n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function k(e) {
    var t = Y(e) ? e.validators : e;
    return Array.isArray(t) ? g(t) : t || null
}

function T(e, t) {
    var n = Y(t) ? t.asyncValidators : e;
    return Array.isArray(n) ? v(n) : n || null
}

function Y(e) {
    return null != e && !Array.isArray(e) && "object" == typeof e
}

function S(e) {
    return !(e instanceof Ee || e instanceof Oe || e instanceof Pe)
}
n.d(t, "d", function() {
    return F
}), n.d(t, "a", function() {
    return G
}), n.d(t, "b", function() {
    return U
}), n.d(t, "e", function() {
    return K
}), n.d(t, "f", function() {
    return ce
}), n.d(t, "g", function() {
    return Te
}), n.d(t, "c", function() {
    return et
}), n.d(t, "h", function() {
    return Xe
}), n.d(t, "i", function() {
    return q
});
var D = n(47),
    C = n(12),
    O = n(295),
    x = (n.n(O), n(297)),
    E = (n.n(x), n(299)),
    j = (n.n(E), n(60)),
    P = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this.control ? this.control.value : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "valid", {
            get: function() {
                return this.control ? this.control.valid : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "invalid", {
            get: function() {
                return this.control ? this.control.invalid : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "pending", {
            get: function() {
                return this.control ? this.control.pending : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "disabled", {
            get: function() {
                return this.control ? this.control.disabled : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "enabled", {
            get: function() {
                return this.control ? this.control.enabled : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "errors", {
            get: function() {
                return this.control ? this.control.errors : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "pristine", {
            get: function() {
                return this.control ? this.control.pristine : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dirty", {
            get: function() {
                return this.control ? this.control.dirty : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "touched", {
            get: function() {
                return this.control ? this.control.touched : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "status", {
            get: function() {
                return this.control ? this.control.status : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "untouched", {
            get: function() {
                return this.control ? this.control.untouched : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "statusChanges", {
            get: function() {
                return this.control ? this.control.statusChanges : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "valueChanges", {
            get: function() {
                return this.control ? this.control.valueChanges : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "path", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.reset = function(e) {
            void 0 === e && (e = void 0), this.control && this.control.reset(e)
        }, e.prototype.hasError = function(e, t) {
            return !!this.control && this.control.hasError(e, t)
        }, e.prototype.getError = function(e, t) {
            return this.control ? this.control.getError(e, t) : null
        }, e
    }(),
    A = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(D.b)(t, e), Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(P),
    H = new C.q("NgValidators"),
    I = new C.q("NgAsyncValidators"),
    N = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
    V = function() {
        function e() {}
        return e.min = function(e) {
            return function(t) {
                if (r(t.value) || r(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n < e ? {
                    min: {
                        min: e,
                        actual: t.value
                    }
                } : null
            }
        }, e.max = function(e) {
            return function(t) {
                if (r(t.value) || r(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n > e ? {
                    max: {
                        max: e,
                        actual: t.value
                    }
                } : null
            }
        }, e.required = function(e) {
            return r(e.value) ? {
                required: !0
            } : null
        }, e.requiredTrue = function(e) {
            return !0 === e.value ? null : {
                required: !0
            }
        }, e.email = function(e) {
            return N.test(e.value) ? null : {
                email: !0
            }
        }, e.minLength = function(e) {
            return function(t) {
                if (r(t.value)) return null;
                var n = t.value ? t.value.length : 0;
                return n < e ? {
                    minlength: {
                        requiredLength: e,
                        actualLength: n
                    }
                } : null
            }
        }, e.maxLength = function(e) {
            return function(t) {
                var n = t.value ? t.value.length : 0;
                return n > e ? {
                    maxlength: {
                        requiredLength: e,
                        actualLength: n
                    }
                } : null
            }
        }, e.pattern = function(t) {
            if (!t) return e.nullValidator;
            var n, i;
            return "string" == typeof t ? (i = "^" + t + "$", n = new RegExp(i)) : (i = t.toString(), n = t),
                function(e) {
                    if (r(e.value)) return null;
                    var t = e.value;
                    return n.test(t) ? null : {
                        pattern: {
                            requiredPattern: i,
                            actualValue: t
                        }
                    }
                }
        }, e.nullValidator = function(e) {
            return null
        }, e.compose = function(e) {
            if (!e) return null;
            var t = e.filter(i);
            return 0 == t.length ? null : function(e) {
                return a(function(e, t) {
                    return t.map(function(t) {
                        return t(e)
                    })
                }(e, t))
            }
        }, e.composeAsync = function(e) {
            if (!e) return null;
            var t = e.filter(i);
            return 0 == t.length ? null : function(e) {
                var n = function(e, t) {
                    return t.map(function(t) {
                        return t(e)
                    })
                }(e, t).map(o);
                return E.map.call(Object(O.forkJoin)(n), a)
            }
        }, e
    }(),
    F = new C.q("NgValueAccessor"),
    R = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return W
        }),
        multi: !0
    },
    W = function() {
        function e(e, t) {
            this._renderer = e, this._elementRef = t, this.onChange = function(e) {}, this.onTouched = function() {}
        }
        return e.prototype.writeValue = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "checked", e)
        }, e.prototype.registerOnChange = function(e) {
            this.onChange = e
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
                host: {
                    "(change)": "onChange($event.target.checked)",
                    "(blur)": "onTouched()"
                },
                providers: [R]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }]
        }, e
    }(),
    z = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return U
        }),
        multi: !0
    },
    G = new C.q("CompositionEventMode"),
    U = function() {
        function e(e, t, n) {
            this._renderer = e, this._elementRef = t, this._compositionMode = n, this.onChange = function(e) {}, this.onTouched = function() {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function() {
                var e = Object(j.r)() ? Object(j.r)().getUserAgent() : "";
                return /android (\d+)/.test(e.toLowerCase())
            }())
        }
        return e.prototype.writeValue = function(e) {
            var t = null == e ? "" : e;
            this._renderer.setProperty(this._elementRef.nativeElement, "value", t)
        }, e.prototype.registerOnChange = function(e) {
            this.onChange = e
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.prototype._handleInput = function(e) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(e)
        }, e.prototype._compositionStart = function() {
            this._composing = !0
        }, e.prototype._compositionEnd = function(e) {
            this._composing = !1, this._compositionMode && this.onChange(e)
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
                host: {
                    "(input)": "_handleInput($event.target.value)",
                    "(blur)": "onTouched()",
                    "(compositionstart)": "_compositionStart()",
                    "(compositionend)": "_compositionEnd($event.target.value)"
                },
                providers: [z]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }, {
                type: void 0,
                decorators: [{
                    type: C.A
                }, {
                    type: C.o,
                    args: [G]
                }]
            }]
        }, e
    }(),
    B = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return J
        }),
        multi: !0
    },
    J = function() {
        function e(e, t) {
            this._renderer = e, this._elementRef = t, this.onChange = function(e) {}, this.onTouched = function() {}
        }
        return e.prototype.writeValue = function(e) {
            var t = null == e ? "" : e;
            this._renderer.setProperty(this._elementRef.nativeElement, "value", t)
        }, e.prototype.registerOnChange = function(e) {
            this.onChange = function(t) {
                e("" == t ? null : parseFloat(t))
            }
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(input)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [B]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }]
        }, e
    }(),
    K = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._parent = null, t.name = null, t.valueAccessor = null, t._rawValidators = [], t._rawAsyncValidators = [], t
        }
        return Object(D.b)(t, e), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return l()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return l()
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(P),
    $ = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return Z
        }),
        multi: !0
    },
    q = function() {
        function e() {
            this._accessors = []
        }
        return e.prototype.add = function(e, t) {
            this._accessors.push([e, t])
        }, e.prototype.remove = function(e) {
            for (var t = this._accessors.length - 1; t >= 0; --t)
                if (this._accessors[t][1] === e) return void this._accessors.splice(t, 1)
        }, e.prototype.select = function(e) {
            var t = this;
            this._accessors.forEach(function(n) {
                t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value)
            })
        }, e.prototype._isSameGroup = function(e, t) {
            return !!e[0].control && (e[0]._parent === t._control._parent && e[1].name === t.name)
        }, e.decorators = [{
            type: C.p
        }], e.ctorParameters = function() {
            return []
        }, e
    }(),
    Z = function() {
        function e(e, t, n, r) {
            this._renderer = e, this._elementRef = t, this._registry = n, this._injector = r, this.onChange = function() {}, this.onTouched = function() {}
        }
        return e.prototype.ngOnInit = function() {
            this._control = this._injector.get(K), this._checkName(), this._registry.add(this._control, this)
        }, e.prototype.ngOnDestroy = function() {
            this._registry.remove(this)
        }, e.prototype.writeValue = function(e) {
            this._state = e === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
        }, e.prototype.registerOnChange = function(e) {
            var t = this;
            this._fn = e, this.onChange = function() {
                e(t.value), t._registry.select(t)
            }
        }, e.prototype.fireUncheck = function(e) {
            this.writeValue(e)
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.prototype._checkName = function() {
            this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
        }, e.prototype._throwNameError = function() {
            throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
                host: {
                    "(change)": "onChange()",
                    "(blur)": "onTouched()"
                },
                providers: [$]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }, {
                type: q
            }, {
                type: C.r
            }]
        }, e.propDecorators = {
            name: [{
                type: C.s
            }],
            formControlName: [{
                type: C.s
            }],
            value: [{
                type: C.s
            }]
        }, e
    }(),
    Q = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return X
        }),
        multi: !0
    },
    X = function() {
        function e(e, t) {
            this._renderer = e, this._elementRef = t, this.onChange = function(e) {}, this.onTouched = function() {}
        }
        return e.prototype.writeValue = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(e))
        }, e.prototype.registerOnChange = function(e) {
            this.onChange = function(t) {
                e("" == t ? null : parseFloat(t))
            }
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(input)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [Q]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }]
        }, e
    }(),
    ee = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return te
        }),
        multi: !0
    },
    te = function() {
        function e(e, t) {
            this._renderer = e, this._elementRef = t, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(e) {}, this.onTouched = function() {}, this._compareWith = C._15
        }
        return Object.defineProperty(e.prototype, "compareWith", {
            set: function(e) {
                if ("function" != typeof e) throw new Error("compareWith must be a function, but received " + JSON.stringify(e));
                this._compareWith = e
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.writeValue = function(e) {
            this.value = e;
            var t = this._getOptionId(e);
            null == t && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
            var n = c(t, e);
            this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
        }, e.prototype.registerOnChange = function(e) {
            var t = this;
            this.onChange = function(n) {
                t.value = t._getOptionValue(n), e(t.value)
            }
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.prototype._registerOption = function() {
            return (this._idCounter++).toString()
        }, e.prototype._getOptionId = function(e) {
            for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                var r = n[t];
                if (this._compareWith(this._optionMap.get(r), e)) return r
            }
            return null
        }, e.prototype._getOptionValue = function(e) {
            var t = function(e) {
                return e.split(":")[0]
            }(e);
            return this._optionMap.has(t) ? this._optionMap.get(t) : e
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
                host: {
                    "(change)": "onChange($event.target.value)",
                    "(blur)": "onTouched()"
                },
                providers: [ee]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }]
        }, e.propDecorators = {
            compareWith: [{
                type: C.s
            }]
        }, e
    }(),
    ne = function() {
        function e(e, t, n) {
            this._element = e, this._renderer = t, this._select = n, this._select && (this.id = this._select._registerOption())
        }
        return Object.defineProperty(e.prototype, "ngValue", {
            set: function(e) {
                null != this._select && (this._select._optionMap.set(this.id, e), this._setElementValue(c(this.id, e)), this._select.writeValue(this._select.value))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
            set: function(e) {
                this._setElementValue(e), this._select && this._select.writeValue(this._select.value)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._setElementValue = function(e) {
            this._renderer.setProperty(this._element.nativeElement, "value", e)
        }, e.prototype.ngOnDestroy = function() {
            this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "option"
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.k
            }, {
                type: C.F
            }, {
                type: te,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }]
            }]
        }, e.propDecorators = {
            ngValue: [{
                type: C.s,
                args: ["ngValue"]
            }],
            value: [{
                type: C.s,
                args: ["value"]
            }]
        }, e
    }(),
    re = {
        provide: F,
        useExisting: Object(C.V)(function() {
            return ie
        }),
        multi: !0
    },
    ie = function() {
        function e(e, t) {
            this._renderer = e, this._elementRef = t, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(e) {}, this.onTouched = function() {}, this._compareWith = C._15
        }
        return Object.defineProperty(e.prototype, "compareWith", {
            set: function(e) {
                if ("function" != typeof e) throw new Error("compareWith must be a function, but received " + JSON.stringify(e));
                this._compareWith = e
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.writeValue = function(e) {
            var t = this;
            this.value = e;
            var n;
            if (Array.isArray(e)) {
                var r = e.map(function(e) {
                    return t._getOptionId(e)
                });
                n = function(e, t) {
                    e._setSelected(r.indexOf(t.toString()) > -1)
                }
            } else n = function(e, t) {
                e._setSelected(!1)
            };
            this._optionMap.forEach(n)
        }, e.prototype.registerOnChange = function(e) {
            var t = this;
            this.onChange = function(n) {
                var r = [];
                if (n.hasOwnProperty("selectedOptions"))
                    for (var i = n.selectedOptions, o = 0; o < i.length; o++) {
                        var a = i.item(o),
                            s = t._getOptionValue(a.value);
                        r.push(s)
                    } else
                        for (var i = n.options, o = 0; o < i.length; o++) {
                            if ((a = i.item(o)).selected) {
                                s = t._getOptionValue(a.value);
                                r.push(s)
                            }
                        }
                t.value = r, e(r)
            }
        }, e.prototype.registerOnTouched = function(e) {
            this.onTouched = e
        }, e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(this._elementRef.nativeElement, "disabled", e)
        }, e.prototype._registerOption = function(e) {
            var t = (this._idCounter++).toString();
            return this._optionMap.set(t, e), t
        }, e.prototype._getOptionId = function(e) {
            for (var t = 0, n = Array.from(this._optionMap.keys()); t < n.length; t++) {
                var r = n[t];
                if (this._compareWith(this._optionMap.get(r)._value, e)) return r
            }
            return null
        }, e.prototype._getOptionValue = function(e) {
            var t = function(e) {
                return e.split(":")[0]
            }(e);
            return this._optionMap.has(t) ? this._optionMap.get(t)._value : e
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
                host: {
                    "(change)": "onChange($event.target)",
                    "(blur)": "onTouched()"
                },
                providers: [re]
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.F
            }, {
                type: C.k
            }]
        }, e.propDecorators = {
            compareWith: [{
                type: C.s
            }]
        }, e
    }(),
    oe = function() {
        function e(e, t, n) {
            this._element = e, this._renderer = t, this._select = n, this._select && (this.id = this._select._registerOption(this))
        }
        return Object.defineProperty(e.prototype, "ngValue", {
            set: function(e) {
                null != this._select && (this._value = e, this._setElementValue(d(this.id, e)), this._select.writeValue(this._select.value))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "value", {
            set: function(e) {
                this._select ? (this._value = e, this._setElementValue(d(this.id, e)), this._select.writeValue(this._select.value)) : this._setElementValue(e)
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._setElementValue = function(e) {
            this._renderer.setProperty(this._element.nativeElement, "value", e)
        }, e.prototype._setSelected = function(e) {
            this._renderer.setProperty(this._element.nativeElement, "selected", e)
        }, e.prototype.ngOnDestroy = function() {
            this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "option"
            }]
        }], e.ctorParameters = function() {
            return [{
                type: C.k
            }, {
                type: C.F
            }, {
                type: ie,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }]
            }]
        }, e.propDecorators = {
            ngValue: [{
                type: C.s,
                args: ["ngValue"]
            }],
            value: [{
                type: C.s,
                args: ["value"]
            }]
        }, e
    }(),
    ae = [W, X, J, te, ie, Z],
    se = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(D.b)(t, e), t.prototype.ngOnInit = function() {
            this._checkParentType(), this.formDirective.addFormGroup(this)
        }, t.prototype.ngOnDestroy = function() {
            this.formDirective && this.formDirective.removeFormGroup(this)
        }, Object.defineProperty(t.prototype, "control", {
            get: function() {
                return this.formDirective.getFormGroup(this)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
            get: function() {
                return h(this.name, this._parent)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return g(this._validators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return v(this._asyncValidators)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._checkParentType = function() {}, t
    }(A),
    ue = function() {
        function e(e) {
            this._cd = e
        }
        return Object.defineProperty(e.prototype, "ngClassUntouched", {
            get: function() {
                return !!this._cd.control && this._cd.control.untouched
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassTouched", {
            get: function() {
                return !!this._cd.control && this._cd.control.touched
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassPristine", {
            get: function() {
                return !!this._cd.control && this._cd.control.pristine
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassDirty", {
            get: function() {
                return !!this._cd.control && this._cd.control.dirty
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassValid", {
            get: function() {
                return !!this._cd.control && this._cd.control.valid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassInvalid", {
            get: function() {
                return !!this._cd.control && this._cd.control.invalid
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ngClassPending", {
            get: function() {
                return !!this._cd.control && this._cd.control.pending
            },
            enumerable: !0,
            configurable: !0
        }), e
    }(),
    le = {
        "[class.ng-untouched]": "ngClassUntouched",
        "[class.ng-touched]": "ngClassTouched",
        "[class.ng-pristine]": "ngClassPristine",
        "[class.ng-dirty]": "ngClassDirty",
        "[class.ng-valid]": "ngClassValid",
        "[class.ng-invalid]": "ngClassInvalid",
        "[class.ng-pending]": "ngClassPending"
    },
    ce = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return Object(D.b)(t, e), t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formControlName],[ngModel],[formControl]",
                host: le
            }]
        }], t.ctorParameters = function() {
            return [{
                type: K,
                decorators: [{
                    type: C.K
                }]
            }]
        }, t
    }(ue),
    de = function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        return Object(D.b)(t, e), t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
                host: le
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.K
                }]
            }]
        }, t
    }(ue),
    he = function() {
        function e(e, t) {
            this.validator = e, this.asyncValidator = t, this._onCollectionChange = function() {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
        }
        return Object.defineProperty(e.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "valid", {
            get: function() {
                return "VALID" === this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "invalid", {
            get: function() {
                return "INVALID" === this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "pending", {
            get: function() {
                return "PENDING" == this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "disabled", {
            get: function() {
                return "DISABLED" === this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "enabled", {
            get: function() {
                return "DISABLED" !== this.status
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "dirty", {
            get: function() {
                return !this.pristine
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "untouched", {
            get: function() {
                return !this.touched
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "updateOn", {
            get: function() {
                return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setValidators = function(e) {
            this.validator = k(e)
        }, e.prototype.setAsyncValidators = function(e) {
            this.asyncValidator = T(e)
        }, e.prototype.clearValidators = function() {
            this.validator = null
        }, e.prototype.clearAsyncValidators = function() {
            this.asyncValidator = null
        }, e.prototype.markAsTouched = function(e) {
            void 0 === e && (e = {}), this.touched = !0, this._parent && !e.onlySelf && this._parent.markAsTouched(e)
        }, e.prototype.markAsUntouched = function(e) {
            void 0 === e && (e = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild(function(e) {
                e.markAsUntouched({
                    onlySelf: !0
                })
            }), this._parent && !e.onlySelf && this._parent._updateTouched(e)
        }, e.prototype.markAsDirty = function(e) {
            void 0 === e && (e = {}), this.pristine = !1, this._parent && !e.onlySelf && this._parent.markAsDirty(e)
        }, e.prototype.markAsPristine = function(e) {
            void 0 === e && (e = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function(e) {
                e.markAsPristine({
                    onlySelf: !0
                })
            }), this._parent && !e.onlySelf && this._parent._updatePristine(e)
        }, e.prototype.markAsPending = function(e) {
            void 0 === e && (e = {}), this.status = "PENDING", this._parent && !e.onlySelf && this._parent.markAsPending(e)
        }, e.prototype.disable = function(e) {
            void 0 === e && (e = {}), this.status = "DISABLED", this.errors = null, this._forEachChild(function(e) {
                e.disable({
                    onlySelf: !0
                })
            }), this._updateValue(), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(!!e.onlySelf), this._onDisabledChange.forEach(function(e) {
                return e(!0)
            })
        }, e.prototype.enable = function(e) {
            void 0 === e && (e = {}), this.status = "VALID", this._forEachChild(function(e) {
                e.enable({
                    onlySelf: !0
                })
            }), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
            }), this._updateAncestors(!!e.onlySelf), this._onDisabledChange.forEach(function(e) {
                return e(!1)
            })
        }, e.prototype._updateAncestors = function(e) {
            this._parent && !e && (this._parent.updateValueAndValidity(), this._parent._updatePristine(), this._parent._updateTouched())
        }, e.prototype.setParent = function(e) {
            this._parent = e
        }, e.prototype.updateValueAndValidity = function(e) {
            void 0 === e && (e = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(e.emitEvent)), !1 !== e.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !e.onlySelf && this._parent.updateValueAndValidity(e)
        }, e.prototype._updateTreeValidity = function(e) {
            void 0 === e && (e = {
                emitEvent: !0
            }), this._forEachChild(function(t) {
                return t._updateTreeValidity(e)
            }), this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: e.emitEvent
            })
        }, e.prototype._setInitialStatus = function() {
            this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
        }, e.prototype._runValidator = function() {
            return this.validator ? this.validator(this) : null
        }, e.prototype._runAsyncValidator = function(e) {
            var t = this;
            if (this.asyncValidator) {
                this.status = "PENDING";
                var n = o(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe(function(n) {
                    return t.setErrors(n, {
                        emitEvent: e
                    })
                })
            }
        }, e.prototype._cancelExistingSubscription = function() {
            this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
        }, e.prototype.setErrors = function(e, t) {
            void 0 === t && (t = {}), this.errors = e, this._updateControlsErrors(!1 !== t.emitEvent)
        }, e.prototype.get = function(e) {
            return function(e, t, n) {
                return null == t ? null : (t instanceof Array || (t = t.split(n)), t instanceof Array && 0 === t.length ? null : t.reduce(function(e, t) {
                    return e instanceof pe ? e.controls[t] || null : e instanceof _e ? e.at(t) || null : null
                }, e))
            }(this, e, ".")
        }, e.prototype.getError = function(e, t) {
            var n = t ? this.get(t) : this;
            return n && n.errors ? n.errors[e] : null
        }, e.prototype.hasError = function(e, t) {
            return !!this.getError(e, t)
        }, Object.defineProperty(e.prototype, "root", {
            get: function() {
                for (var e = this; e._parent;) e = e._parent;
                return e
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._updateControlsErrors = function(e) {
            this.status = this._calculateStatus(), e && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(e)
        }, e.prototype._initObservables = function() {
            this.valueChanges = new C.m, this.statusChanges = new C.m
        }, e.prototype._calculateStatus = function() {
            return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
        }, e.prototype._anyControlsHaveStatus = function(e) {
            return this._anyControls(function(t) {
                return t.status === e
            })
        }, e.prototype._anyControlsDirty = function() {
            return this._anyControls(function(e) {
                return e.dirty
            })
        }, e.prototype._anyControlsTouched = function() {
            return this._anyControls(function(e) {
                return e.touched
            })
        }, e.prototype._updatePristine = function(e) {
            void 0 === e && (e = {}), this.pristine = !this._anyControlsDirty(), this._parent && !e.onlySelf && this._parent._updatePristine(e)
        }, e.prototype._updateTouched = function(e) {
            void 0 === e && (e = {}), this.touched = this._anyControlsTouched(), this._parent && !e.onlySelf && this._parent._updateTouched(e)
        }, e.prototype._isBoxedValue = function(e) {
            return "object" == typeof e && null !== e && 2 === Object.keys(e).length && "value" in e && "disabled" in e
        }, e.prototype._registerOnCollectionChange = function(e) {
            this._onCollectionChange = e
        }, e.prototype._setUpdateStrategy = function(e) {
            Y(e) && null != e.updateOn && (this._updateOn = e.updateOn)
        }, e
    }(),
    fe = function(e) {
        function t(t, n, r) {
            void 0 === t && (t = null);
            var i = e.call(this, k(n), T(r, n)) || this;
            return i._onChange = [], i._applyFormState(t), i._setUpdateStrategy(n), i.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !1
            }), i._initObservables(), i
        }
        return Object(D.b)(t, e), t.prototype.setValue = function(e, t) {
            var n = this;
            void 0 === t && (t = {}), this.value = this._pendingValue = e, this._onChange.length && !1 !== t.emitModelToViewChange && this._onChange.forEach(function(e) {
                return e(n.value, !1 !== t.emitViewToModelChange)
            }), this.updateValueAndValidity(t)
        }, t.prototype.patchValue = function(e, t) {
            void 0 === t && (t = {}), this.setValue(e, t)
        }, t.prototype.reset = function(e, t) {
            void 0 === e && (e = null), void 0 === t && (t = {}), this._applyFormState(e), this.markAsPristine(t), this.markAsUntouched(t), this.setValue(this.value, t)
        }, t.prototype._updateValue = function() {}, t.prototype._anyControls = function(e) {
            return !1
        }, t.prototype._allControlsDisabled = function() {
            return this.disabled
        }, t.prototype.registerOnChange = function(e) {
            this._onChange.push(e)
        }, t.prototype._clearChangeFns = function() {
            this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function() {}
        }, t.prototype.registerOnDisabledChange = function(e) {
            this._onDisabledChange.push(e)
        }, t.prototype._forEachChild = function(e) {}, t.prototype._syncPendingControls = function() {
            return "submit" === this.updateOn && (this.setValue(this._pendingValue, {
                onlySelf: !0,
                emitModelToViewChange: !1
            }), this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !0)
        }, t.prototype._applyFormState = function(e) {
            this._isBoxedValue(e) ? (this.value = this._pendingValue = e.value, e.disabled ? this.disable({
                onlySelf: !0,
                emitEvent: !1
            }) : this.enable({
                onlySelf: !0,
                emitEvent: !1
            })) : this.value = this._pendingValue = e
        }, t
    }(he),
    pe = function(e) {
        function t(t, n, r) {
            var i = e.call(this, k(n), T(r, n)) || this;
            return i.controls = t, i._initObservables(), i._setUpdateStrategy(n), i._setUpControls(), i.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !1
            }), i
        }
        return Object(D.b)(t, e), t.prototype.registerControl = function(e, t) {
            return this.controls[e] ? this.controls[e] : (this.controls[e] = t, t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange), t)
        }, t.prototype.addControl = function(e, t) {
            this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.removeControl = function(e) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(function() {}), delete this.controls[e], this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.setControl = function(e, t) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(function() {}), delete this.controls[e], t && this.registerControl(e, t), this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.contains = function(e) {
            return this.controls.hasOwnProperty(e) && this.controls[e].enabled
        }, t.prototype.setValue = function(e, t) {
            var n = this;
            void 0 === t && (t = {}), this._checkAllValuesPresent(e), Object.keys(e).forEach(function(r) {
                n._throwIfControlMissing(r), n.controls[r].setValue(e[r], {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t)
        }, t.prototype.patchValue = function(e, t) {
            var n = this;
            void 0 === t && (t = {}), Object.keys(e).forEach(function(r) {
                n.controls[r] && n.controls[r].patchValue(e[r], {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t)
        }, t.prototype.reset = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), this._forEachChild(function(n, r) {
                n.reset(e[r], {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t), this._updatePristine(t), this._updateTouched(t)
        }, t.prototype.getRawValue = function() {
            return this._reduceChildren({}, function(e, t, n) {
                return e[n] = t instanceof fe ? t.value : t.getRawValue(), e
            })
        }, t.prototype._syncPendingControls = function() {
            var e = this._reduceChildren(!1, function(e, t) {
                return !!t._syncPendingControls() || e
            });
            return e && this.updateValueAndValidity({
                onlySelf: !0
            }), e
        }, t.prototype._throwIfControlMissing = function(e) {
            if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            if (!this.controls[e]) throw new Error("Cannot find form control with name: " + e + ".")
        }, t.prototype._forEachChild = function(e) {
            var t = this;
            Object.keys(this.controls).forEach(function(n) {
                return e(t.controls[n], n)
            })
        }, t.prototype._setUpControls = function() {
            var e = this;
            this._forEachChild(function(t) {
                t.setParent(e), t._registerOnCollectionChange(e._onCollectionChange)
            })
        }, t.prototype._updateValue = function() {
            this.value = this._reduceValue()
        }, t.prototype._anyControls = function(e) {
            var t = this,
                n = !1;
            return this._forEachChild(function(r, i) {
                n = n || t.contains(i) && e(r)
            }), n
        }, t.prototype._reduceValue = function() {
            var e = this;
            return this._reduceChildren({}, function(t, n, r) {
                return (n.enabled || e.disabled) && (t[r] = n.value), t
            })
        }, t.prototype._reduceChildren = function(e, t) {
            var n = e;
            return this._forEachChild(function(e, r) {
                n = t(n, e, r)
            }), n
        }, t.prototype._allControlsDisabled = function() {
            for (var e = 0, t = Object.keys(this.controls); e < t.length; e++) {
                var n = t[e];
                if (this.controls[n].enabled) return !1
            }
            return Object.keys(this.controls).length > 0 || this.disabled
        }, t.prototype._checkAllValuesPresent = function(e) {
            this._forEachChild(function(t, n) {
                if (void 0 === e[n]) throw new Error("Must supply a value for form control with name: '" + n + "'.")
            })
        }, t
    }(he),
    _e = function(e) {
        function t(t, n, r) {
            var i = e.call(this, k(n), T(r, n)) || this;
            return i.controls = t, i._initObservables(), i._setUpdateStrategy(n), i._setUpControls(), i.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !1
            }), i
        }
        return Object(D.b)(t, e), t.prototype.at = function(e) {
            return this.controls[e]
        }, t.prototype.push = function(e) {
            this.controls.push(e), this._registerControl(e), this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.insert = function(e, t) {
            this.controls.splice(e, 0, t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.removeAt = function(e) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(function() {}), this.controls.splice(e, 1), this.updateValueAndValidity(), this._onCollectionChange()
        }, t.prototype.setControl = function(e, t) {
            this.controls[e] && this.controls[e]._registerOnCollectionChange(function() {}), this.controls.splice(e, 1), t && (this.controls.splice(e, 0, t), this._registerControl(t)), this.updateValueAndValidity(), this._onCollectionChange()
        }, Object.defineProperty(t.prototype, "length", {
            get: function() {
                return this.controls.length
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setValue = function(e, t) {
            var n = this;
            void 0 === t && (t = {}), this._checkAllValuesPresent(e), e.forEach(function(e, r) {
                n._throwIfControlMissing(r), n.at(r).setValue(e, {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t)
        }, t.prototype.patchValue = function(e, t) {
            var n = this;
            void 0 === t && (t = {}), e.forEach(function(e, r) {
                n.at(r) && n.at(r).patchValue(e, {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t)
        }, t.prototype.reset = function(e, t) {
            void 0 === e && (e = []), void 0 === t && (t = {}), this._forEachChild(function(n, r) {
                n.reset(e[r], {
                    onlySelf: !0,
                    emitEvent: t.emitEvent
                })
            }), this.updateValueAndValidity(t), this._updatePristine(t), this._updateTouched(t)
        }, t.prototype.getRawValue = function() {
            return this.controls.map(function(e) {
                return e instanceof fe ? e.value : e.getRawValue()
            })
        }, t.prototype._syncPendingControls = function() {
            var e = this.controls.reduce(function(e, t) {
                return !!t._syncPendingControls() || e
            }, !1);
            return e && this.updateValueAndValidity({
                onlySelf: !0
            }), e
        }, t.prototype._throwIfControlMissing = function(e) {
            if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            if (!this.at(e)) throw new Error("Cannot find form control at index " + e)
        }, t.prototype._forEachChild = function(e) {
            this.controls.forEach(function(t, n) {
                e(t, n)
            })
        }, t.prototype._updateValue = function() {
            var e = this;
            this.value = this.controls.filter(function(t) {
                return t.enabled || e.disabled
            }).map(function(e) {
                return e.value
            })
        }, t.prototype._anyControls = function(e) {
            return this.controls.some(function(t) {
                return t.enabled && e(t)
            })
        }, t.prototype._setUpControls = function() {
            var e = this;
            this._forEachChild(function(t) {
                return e._registerControl(t)
            })
        }, t.prototype._checkAllValuesPresent = function(e) {
            this._forEachChild(function(t, n) {
                if (void 0 === e[n]) throw new Error("Must supply a value for form control at index: " + n + ".")
            })
        }, t.prototype._allControlsDisabled = function() {
            for (var e = 0, t = this.controls; e < t.length; e++) {
                if (t[e].enabled) return !1
            }
            return this.controls.length > 0 || this.disabled
        }, t.prototype._registerControl = function(e) {
            e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange)
        }, t
    }(he),
    me = {
        provide: A,
        useExisting: Object(C.V)(function() {
            return ge
        })
    },
    ye = Promise.resolve(null),
    ge = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.submitted = !1, r._directives = [], r.ngSubmit = new C.m, r.form = new pe({}, g(t), v(n)), r
        }
        return Object(D.b)(t, e), t.prototype.ngAfterViewInit = function() {
            this._setUpdateStrategy()
        }, Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "control", {
            get: function() {
                return this.form
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
            get: function() {
                return []
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "controls", {
            get: function() {
                return this.form.controls
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addControl = function(e) {
            var t = this;
            ye.then(function() {
                var n = t._findContainer(e.path);
                e.control = n.registerControl(e.name, e.control), f(e.control, e), e.control.updateValueAndValidity({
                    emitEvent: !1
                }), t._directives.push(e)
            })
        }, t.prototype.getControl = function(e) {
            return this.form.get(e.path)
        }, t.prototype.removeControl = function(e) {
            var t = this;
            ye.then(function() {
                var n = t._findContainer(e.path);
                n && n.removeControl(e.name), L(t._directives, e)
            })
        }, t.prototype.addFormGroup = function(e) {
            var t = this;
            ye.then(function() {
                var n = t._findContainer(e.path),
                    r = new pe({});
                _(r, e), n.registerControl(e.name, r), r.updateValueAndValidity({
                    emitEvent: !1
                })
            })
        }, t.prototype.removeFormGroup = function(e) {
            var t = this;
            ye.then(function() {
                var n = t._findContainer(e.path);
                n && n.removeControl(e.name)
            })
        }, t.prototype.getFormGroup = function(e) {
            return this.form.get(e.path)
        }, t.prototype.updateModel = function(e, t) {
            var n = this;
            ye.then(function() {
                n.form.get(e.path).setValue(t)
            })
        }, t.prototype.setValue = function(e) {
            this.control.setValue(e)
        }, t.prototype.onSubmit = function(e) {
            return this.submitted = !0, M(this.form, this._directives), this.ngSubmit.emit(e), !1
        }, t.prototype.onReset = function() {
            this.resetForm()
        }, t.prototype.resetForm = function(e) {
            void 0 === e && (e = void 0), this.form.reset(e), this.submitted = !1
        }, t.prototype._setUpdateStrategy = function() {
            this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn)
        }, t.prototype._findContainer = function(e) {
            return e.pop(), e.length ? this.form.get(e) : this.form
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]",
                providers: [me],
                host: {
                    "(submit)": "onSubmit($event)",
                    "(reset)": "onReset()"
                },
                outputs: ["ngSubmit"],
                exportAs: "ngForm"
            }]
        }], t.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }]
        }, t.propDecorators = {
            options: [{
                type: C.s,
                args: ["ngFormOptions"]
            }]
        }, t
    }(A),
    ve = {
        formControlName: '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName: '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName: '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup: '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup: '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
    },
    be = function() {
        function e() {}
        return e.modelParentException = function() {
            throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      ' + ve.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + ve.ngModelWithFormGroup)
        }, e.formGroupNameException = function() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + ve.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + ve.ngModelGroup)
        }, e.missingNameException = function() {
            throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')
        }, e.modelGroupParentException = function() {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + ve.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + ve.ngModelGroup)
        }, e
    }(),
    Me = {
        provide: A,
        useExisting: Object(C.V)(function() {
            return we
        })
    },
    we = function(e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i._parent = t, i._validators = n, i._asyncValidators = r, i
        }
        return Object(D.b)(t, e), t.prototype._checkParentType = function() {
            this._parent instanceof t || this._parent instanceof ge || be.modelGroupParentException()
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[ngModelGroup]",
                providers: [Me],
                exportAs: "ngModelGroup"
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.n
                }, {
                    type: C.M
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }]
        }, t.propDecorators = {
            name: [{
                type: C.s,
                args: ["ngModelGroup"]
            }]
        }, t
    }(se),
    Le = {
        provide: K,
        useExisting: Object(C.V)(function() {
            return Te
        })
    },
    ke = Promise.resolve(null),
    Te = function(e) {
        function t(t, n, r, i) {
            var o = e.call(this) || this;
            return o.control = new fe, o._registered = !1, o.update = new C.m, o._parent = t, o._rawValidators = n || [], o._rawAsyncValidators = r || [], o.valueAccessor = w(o, i), o
        }
        return Object(D.b)(t, e), t.prototype.ngOnChanges = function(e) {
            this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in e && this._updateDisabled(e), b(e, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
        }, t.prototype.ngOnDestroy = function() {
            this.formDirective && this.formDirective.removeControl(this)
        }, Object.defineProperty(t.prototype, "path", {
            get: function() {
                return this._parent ? h(this.name, this._parent) : [this.name]
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return g(this._rawValidators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return v(this._rawAsyncValidators)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.viewToModelUpdate = function(e) {
            this.viewModel = e, this.update.emit(e)
        }, t.prototype._setUpControl = function() {
            this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0
        }, t.prototype._setUpdateStrategy = function() {
            this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
        }, t.prototype._isStandalone = function() {
            return !this._parent || !(!this.options || !this.options.standalone)
        }, t.prototype._setUpStandalone = function() {
            f(this.control, this), this.control.updateValueAndValidity({
                emitEvent: !1
            })
        }, t.prototype._checkForErrors = function() {
            this._isStandalone() || this._checkParentType(), this._checkName()
        }, t.prototype._checkParentType = function() {
            !(this._parent instanceof we) && this._parent instanceof se ? be.formGroupNameException() : this._parent instanceof we || this._parent instanceof ge || be.modelParentException()
        }, t.prototype._checkName = function() {
            this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || be.missingNameException()
        }, t.prototype._updateValue = function(e) {
            var t = this;
            ke.then(function() {
                t.control.setValue(e, {
                    emitViewToModelChange: !1
                })
            })
        }, t.prototype._updateDisabled = function(e) {
            var t = this,
                n = e.isDisabled.currentValue,
                r = "" === n || n && "false" !== n;
            ke.then(function() {
                r && !t.control.disabled ? t.control.disable() : !r && t.control.disabled && t.control.enable()
            })
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[ngModel]:not([formControlName]):not([formControl])",
                providers: [Le],
                exportAs: "ngModel"
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [F]
                }]
            }]
        }, t.propDecorators = {
            name: [{
                type: C.s
            }],
            isDisabled: [{
                type: C.s,
                args: ["disabled"]
            }],
            model: [{
                type: C.s,
                args: ["ngModel"]
            }],
            options: [{
                type: C.s,
                args: ["ngModelOptions"]
            }],
            update: [{
                type: C.B,
                args: ["ngModelChange"]
            }]
        }, t
    }(K),
    Ye = function() {
        function e() {}
        return e.controlParentException = function() {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + ve.formControlName)
        }, e.ngModelGroupException = function() {
            throw new Error('formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ' + ve.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + ve.ngModelGroup)
        }, e.missingFormException = function() {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + ve.formControlName)
        }, e.groupParentException = function() {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + ve.formGroupName)
        }, e.arrayParentException = function() {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + ve.formArrayName)
        }, e.disabledAttrWarning = function() {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
        }, e
    }(),
    Se = {
        provide: K,
        useExisting: Object(C.V)(function() {
            return De
        })
    },
    De = function(e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i.update = new C.m, i._rawValidators = t || [], i._rawAsyncValidators = n || [], i.valueAccessor = w(i, r), i
        }
        return Object(D.b)(t, e), Object.defineProperty(t.prototype, "isDisabled", {
            set: function(e) {
                Ye.disabledAttrWarning()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.ngOnChanges = function(e) {
            this._isControlChanged(e) && (f(this.form, this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this.form.updateValueAndValidity({
                emitEvent: !1
            })), b(e, this.viewModel) && (this.form.setValue(this.model), this.viewModel = this.model)
        }, Object.defineProperty(t.prototype, "path", {
            get: function() {
                return []
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return g(this._rawValidators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return v(this._rawAsyncValidators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "control", {
            get: function() {
                return this.form
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.viewToModelUpdate = function(e) {
            this.viewModel = e, this.update.emit(e)
        }, t.prototype._isControlChanged = function(e) {
            return e.hasOwnProperty("form")
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formControl]",
                providers: [Se],
                exportAs: "ngForm"
            }]
        }], t.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [F]
                }]
            }]
        }, t.propDecorators = {
            form: [{
                type: C.s,
                args: ["formControl"]
            }],
            model: [{
                type: C.s,
                args: ["ngModel"]
            }],
            update: [{
                type: C.B,
                args: ["ngModelChange"]
            }],
            isDisabled: [{
                type: C.s,
                args: ["disabled"]
            }]
        }, t
    }(K),
    Ce = {
        provide: A,
        useExisting: Object(C.V)(function() {
            return Oe
        })
    },
    Oe = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r._validators = t, r._asyncValidators = n, r.submitted = !1, r.directives = [], r.form = null, r.ngSubmit = new C.m, r
        }
        return Object(D.b)(t, e), t.prototype.ngOnChanges = function(e) {
            this._checkFormPresent(), e.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
        }, Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "control", {
            get: function() {
                return this.form
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
            get: function() {
                return []
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addControl = function(e) {
            var t = this.form.get(e.path);
            return f(t, e), t.updateValueAndValidity({
                emitEvent: !1
            }), this.directives.push(e), t
        }, t.prototype.getControl = function(e) {
            return this.form.get(e.path)
        }, t.prototype.removeControl = function(e) {
            L(this.directives, e)
        }, t.prototype.addFormGroup = function(e) {
            var t = this.form.get(e.path);
            _(t, e), t.updateValueAndValidity({
                emitEvent: !1
            })
        }, t.prototype.removeFormGroup = function(e) {}, t.prototype.getFormGroup = function(e) {
            return this.form.get(e.path)
        }, t.prototype.addFormArray = function(e) {
            var t = this.form.get(e.path);
            _(t, e), t.updateValueAndValidity({
                emitEvent: !1
            })
        }, t.prototype.removeFormArray = function(e) {}, t.prototype.getFormArray = function(e) {
            return this.form.get(e.path)
        }, t.prototype.updateModel = function(e, t) {
            this.form.get(e.path).setValue(t)
        }, t.prototype.onSubmit = function(e) {
            return this.submitted = !0, M(this.form, this.directives), this.ngSubmit.emit(e), !1
        }, t.prototype.onReset = function() {
            this.resetForm()
        }, t.prototype.resetForm = function(e) {
            void 0 === e && (e = void 0), this.form.reset(e), this.submitted = !1
        }, t.prototype._updateDomValue = function() {
            var e = this;
            this.directives.forEach(function(t) {
                var n = e.form.get(t.path);
                t.control !== n && (! function(e, t) {
                    t.valueAccessor.registerOnChange(function() {
                        return m(t)
                    }), t.valueAccessor.registerOnTouched(function() {
                        return m(t)
                    }), t._rawValidators.forEach(function(e) {
                        e.registerOnValidatorChange && e.registerOnValidatorChange(null)
                    }), t._rawAsyncValidators.forEach(function(e) {
                        e.registerOnValidatorChange && e.registerOnValidatorChange(null)
                    }), e && e._clearChangeFns()
                }(t.control, t), n && f(n, t), t.control = n)
            }), this.form._updateTreeValidity({
                emitEvent: !1
            })
        }, t.prototype._updateRegistrations = function() {
            var e = this;
            this.form._registerOnCollectionChange(function() {
                return e._updateDomValue()
            }), this._oldForm && this._oldForm._registerOnCollectionChange(function() {}), this._oldForm = this.form
        }, t.prototype._updateValidators = function() {
            var e = g(this._validators);
            this.form.validator = V.compose([this.form.validator, e]);
            var t = v(this._asyncValidators);
            this.form.asyncValidator = V.composeAsync([this.form.asyncValidator, t])
        }, t.prototype._checkFormPresent = function() {
            this.form || Ye.missingFormException()
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formGroup]",
                providers: [Ce],
                host: {
                    "(submit)": "onSubmit($event)",
                    "(reset)": "onReset()"
                },
                exportAs: "ngForm"
            }]
        }], t.ctorParameters = function() {
            return [{
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }]
        }, t.propDecorators = {
            form: [{
                type: C.s,
                args: ["formGroup"]
            }],
            ngSubmit: [{
                type: C.B
            }]
        }, t
    }(A),
    xe = {
        provide: A,
        useExisting: Object(C.V)(function() {
            return Ee
        })
    },
    Ee = function(e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i._parent = t, i._validators = n, i._asyncValidators = r, i
        }
        return Object(D.b)(t, e), t.prototype._checkParentType = function() {
            S(this._parent) && Ye.groupParentException()
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formGroupName]",
                providers: [xe]
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }, {
                    type: C.M
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }]
        }, t.propDecorators = {
            name: [{
                type: C.s,
                args: ["formGroupName"]
            }]
        }, t
    }(se),
    je = {
        provide: A,
        useExisting: Object(C.V)(function() {
            return Pe
        })
    },
    Pe = function(e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i._parent = t, i._validators = n, i._asyncValidators = r, i
        }
        return Object(D.b)(t, e), t.prototype.ngOnInit = function() {
            this._checkParentType(), this.formDirective.addFormArray(this)
        }, t.prototype.ngOnDestroy = function() {
            this.formDirective && this.formDirective.removeFormArray(this)
        }, Object.defineProperty(t.prototype, "control", {
            get: function() {
                return this.formDirective.getFormArray(this)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "path", {
            get: function() {
                return h(this.name, this._parent)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return g(this._validators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return v(this._asyncValidators)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._checkParentType = function() {
            S(this._parent) && Ye.arrayParentException()
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formArrayName]",
                providers: [je]
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }, {
                    type: C.M
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }]
        }, t.propDecorators = {
            name: [{
                type: C.s,
                args: ["formArrayName"]
            }]
        }, t
    }(A),
    Ae = {
        provide: K,
        useExisting: Object(C.V)(function() {
            return He
        })
    },
    He = function(e) {
        function t(t, n, r, i) {
            var o = e.call(this) || this;
            return o._added = !1, o.update = new C.m, o._parent = t, o._rawValidators = n || [], o._rawAsyncValidators = r || [], o.valueAccessor = w(o, i), o
        }
        return Object(D.b)(t, e), Object.defineProperty(t.prototype, "isDisabled", {
            set: function(e) {
                Ye.disabledAttrWarning()
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.ngOnChanges = function(e) {
            this._added || this._setUpControl(), b(e, this.viewModel) && (this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
        }, t.prototype.ngOnDestroy = function() {
            this.formDirective && this.formDirective.removeControl(this)
        }, t.prototype.viewToModelUpdate = function(e) {
            this.viewModel = e, this.update.emit(e)
        }, Object.defineProperty(t.prototype, "path", {
            get: function() {
                return h(this.name, this._parent)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "formDirective", {
            get: function() {
                return this._parent ? this._parent.formDirective : null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "validator", {
            get: function() {
                return g(this._rawValidators)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "asyncValidator", {
            get: function() {
                return v(this._rawAsyncValidators)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype._checkParentType = function() {
            !(this._parent instanceof Ee) && this._parent instanceof se ? Ye.ngModelGroupException() : this._parent instanceof Ee || this._parent instanceof Oe || this._parent instanceof Pe || Ye.controlParentException()
        }, t.prototype._setUpControl = function() {
            this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "[formControlName]",
                providers: [Ae]
            }]
        }], t.ctorParameters = function() {
            return [{
                type: A,
                decorators: [{
                    type: C.A
                }, {
                    type: C.n
                }, {
                    type: C.M
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [H]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [I]
                }]
            }, {
                type: Array,
                decorators: [{
                    type: C.A
                }, {
                    type: C.K
                }, {
                    type: C.o,
                    args: [F]
                }]
            }]
        }, t.propDecorators = {
            name: [{
                type: C.s,
                args: ["formControlName"]
            }],
            model: [{
                type: C.s,
                args: ["ngModel"]
            }],
            update: [{
                type: C.B,
                args: ["ngModelChange"]
            }],
            isDisabled: [{
                type: C.s,
                args: ["disabled"]
            }]
        }, t
    }(K),
    Ie = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return Ve
        }),
        multi: !0
    },
    Ne = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return Fe
        }),
        multi: !0
    },
    Ve = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "required", {
            get: function() {
                return this._required
            },
            set: function(e) {
                this._required = null != e && !1 !== e && "" + e != "false", this._onChange && this._onChange()
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.validate = function(e) {
            return this.required ? V.required(e) : null
        }, e.prototype.registerOnValidatorChange = function(e) {
            this._onChange = e
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
                providers: [Ie],
                host: {
                    "[attr.required]": 'required ? "" : null'
                }
            }]
        }], e.ctorParameters = function() {
            return []
        }, e.propDecorators = {
            required: [{
                type: C.s
            }]
        }, e
    }(),
    Fe = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Object(D.b)(t, e), t.prototype.validate = function(e) {
            return this.required ? V.requiredTrue(e) : null
        }, t.decorators = [{
            type: C.j,
            args: [{
                selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
                providers: [Ne],
                host: {
                    "[attr.required]": 'required ? "" : null'
                }
            }]
        }], t.ctorParameters = function() {
            return []
        }, t
    }(Ve),
    Re = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return We
        }),
        multi: !0
    },
    We = function() {
        function e() {}
        return Object.defineProperty(e.prototype, "email", {
            set: function(e) {
                this._enabled = "" === e || !0 === e || "true" === e, this._onChange && this._onChange()
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.validate = function(e) {
            return this._enabled ? V.email(e) : null
        }, e.prototype.registerOnValidatorChange = function(e) {
            this._onChange = e
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "[email][formControlName],[email][formControl],[email][ngModel]",
                providers: [Re]
            }]
        }], e.ctorParameters = function() {
            return []
        }, e.propDecorators = {
            email: [{
                type: C.s
            }]
        }, e
    }(),
    ze = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return Ge
        }),
        multi: !0
    },
    Ge = function() {
        function e() {}
        return e.prototype.ngOnChanges = function(e) {
            "minlength" in e && (this._createValidator(), this._onChange && this._onChange())
        }, e.prototype.validate = function(e) {
            return null == this.minlength ? null : this._validator(e)
        }, e.prototype.registerOnValidatorChange = function(e) {
            this._onChange = e
        }, e.prototype._createValidator = function() {
            this._validator = V.minLength(parseInt(this.minlength, 10))
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
                providers: [ze],
                host: {
                    "[attr.minlength]": "minlength ? minlength : null"
                }
            }]
        }], e.ctorParameters = function() {
            return []
        }, e.propDecorators = {
            minlength: [{
                type: C.s
            }]
        }, e
    }(),
    Ue = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return Be
        }),
        multi: !0
    },
    Be = function() {
        function e() {}
        return e.prototype.ngOnChanges = function(e) {
            "maxlength" in e && (this._createValidator(), this._onChange && this._onChange())
        }, e.prototype.validate = function(e) {
            return null != this.maxlength ? this._validator(e) : null
        }, e.prototype.registerOnValidatorChange = function(e) {
            this._onChange = e
        }, e.prototype._createValidator = function() {
            this._validator = V.maxLength(parseInt(this.maxlength, 10))
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
                providers: [Ue],
                host: {
                    "[attr.maxlength]": "maxlength ? maxlength : null"
                }
            }]
        }], e.ctorParameters = function() {
            return []
        }, e.propDecorators = {
            maxlength: [{
                type: C.s
            }]
        }, e
    }(),
    Je = {
        provide: H,
        useExisting: Object(C.V)(function() {
            return Ke
        }),
        multi: !0
    },
    Ke = function() {
        function e() {}
        return e.prototype.ngOnChanges = function(e) {
            "pattern" in e && (this._createValidator(), this._onChange && this._onChange())
        }, e.prototype.validate = function(e) {
            return this._validator(e)
        }, e.prototype.registerOnValidatorChange = function(e) {
            this._onChange = e
        }, e.prototype._createValidator = function() {
            this._validator = V.pattern(this.pattern)
        }, e.decorators = [{
            type: C.j,
            args: [{
                selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
                providers: [Je],
                host: {
                    "[attr.pattern]": "pattern ? pattern : null"
                }
            }]
        }], e.ctorParameters = function() {
            return []
        }, e.propDecorators = {
            pattern: [{
                type: C.s
            }]
        }, e
    }(),
    $e = function() {
        function e() {}
        return e.prototype.group = function(e, t) {
            void 0 === t && (t = null);
            var n = this._reduceControls(e),
                r = null != t ? t.validator : null,
                i = null != t ? t.asyncValidator : null;
            return new pe(n, r, i)
        }, e.prototype.control = function(e, t, n) {
            return new fe(e, t, n)
        }, e.prototype.array = function(e, t, n) {
            var r = this,
                i = e.map(function(e) {
                    return r._createControl(e)
                });
            return new _e(i, t, n)
        }, e.prototype._reduceControls = function(e) {
            var t = this,
                n = {};
            return Object.keys(e).forEach(function(r) {
                n[r] = t._createControl(e[r])
            }), n
        }, e.prototype._createControl = function(e) {
            if (e instanceof fe || e instanceof pe || e instanceof _e) return e;
            if (Array.isArray(e)) {
                var t = e[0],
                    n = e.length > 1 ? e[1] : null,
                    r = e.length > 2 ? e[2] : null;
                return this.control(t, n, r)
            }
            return this.control(e)
        }, e.decorators = [{
            type: C.p
        }], e.ctorParameters = function() {
            return []
        }, e
    }(),
    qe = (new C.P("5.0.2"), [function() {
        function e() {}
        return e.decorators = [{
            type: C.j,
            args: [{
                selector: "form:not([ngNoForm]):not([ngNativeValidate])",
                host: {
                    novalidate: ""
                }
            }]
        }], e.ctorParameters = function() {
            return []
        }, e
    }(), ne, oe, U, J, X, W, te, ie, Z, ce, de, Ve, Ge, Be, Ke, Fe, We]),
    Ze = [Te, we, ge],
    Qe = [De, Oe, He, Ee, Pe],
    Xe = function() {
        function e() {}
        return e.decorators = [{
            type: C.w,
            args: [{
                declarations: qe,
                exports: qe
            }]
        }], e.ctorParameters = function() {
            return []
        }, e
    }(),
    et = function() {
        function e() {}
        return e.decorators = [{
            type: C.w,
            args: [{
                declarations: Ze,
                providers: [q],
                exports: [Xe, Ze]
            }]
        }], e.ctorParameters = function() {
            return []
        }, e
    }();
! function() {
    function e() {}
    e.decorators = [{
        type: C.w,
        args: [{
            declarations: [Qe],
            providers: [$e, q],
            exports: [Xe, Qe]
        }]
    }], e.ctorParameters = function() {
        return []
    }
}()
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var r = n(216),
        i = (n.n(r), n(12)),
        o = (n(28), n(94)),
        a = function() {
            function e(e) {
                this.storyService = e
            }
            return e.prototype.ngOnInit = function() {
                this.animateIn()
            }, e.prototype.ngOnChanges = function(e) {
                var t = this;
                e.userInteraction instanceof i.L && (this.inputValue = "", e.userInteraction.currentValue && e.userInteraction.currentValue.type === o.a.TEXT && (this.animateIn(), setTimeout(function() {
                    t.inputElementRef.nativeElement.focus()
                })))
            }, e.prototype.trigger = function(e) {
                this.storyService.triggerUserInteraction(e)
            }, e.prototype.animateIn = function() {
                r({
                    targets: this.bar,
                    opacity: [0, 1],
                    duration: 500,
                    easing: "linear"
                })
            }, Object.defineProperty(e.prototype, "bar", {
                get: function() {
                    return this.barElementRef.nativeElement
                },
                enumerable: !0,
                configurable: !0
            }), e
        }()
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    n(28);
    var r = function() {
        function e(e) {
            this.storyService = e
        }
        return e.prototype.ngOnInit = function() {}, Object.defineProperty(e.prototype, "currentUserInteraction", {
            get: function() {
                return this.storyService.currentUserInteraction
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "storyPoints", {
            get: function() {
                return this.storyService.storyPoints
            },
            enumerable: !0,
            configurable: !0
        }), e
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(e, t, n) {
    e.exports = n(258)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(259),
        i = (n.n(r), n(12)),
        o = n(282),
        a = n(60);
    Object(i.U)(), a.i().bootstrapModuleFactory(o.a)
},
function(e, t) {},
function(e, t, n) {
    "use strict";
    var r = n(27),
        i = n(59),
        o = n(84);
    t.toSubscriber = function(e, t, n) {
        if (e) {
            if (e instanceof r.Subscriber) return e;
            if (e[i.rxSubscriber]) return e[i.rxSubscriber]()
        }
        return e || t || n ? new r.Subscriber(e, t, n) : new r.Subscriber(o.empty)
    }
},
function(e, t, n) {
    "use strict";

    function r() {
        try {
            return i.apply(this, arguments)
        } catch (e) {
            return o.errorObject.e = e, o.errorObject
        }
    }
    var i, o = n(83);
    t.tryCatch = function(e) {
        return i = e, r
    }
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = function(e) {
            function t(t) {
                e.call(this), this.errors = t;
                var n = Error.call(this, t ? t.length + " errors occurred during unsubscription:\n  " + t.map(function(e, t) {
                    return t + 1 + ") " + e.toString()
                }).join("\n  ") : "");
                this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message
            }
            return r(t, e), t
        }(Error);
    t.UnsubscriptionError = i
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return e ? 1 === e.length ? e[0] : function(t) {
            return e.reduce(function(e, t) {
                return t(e)
            }, t)
        } : i.noop
    }
    var i = n(264);
    t.pipe = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
        return r(e)
    }, t.pipeFromArray = r
},
function(e, t, n) {
    "use strict";
    t.noop = function() {}
},
function(e, t, n) {
    "use strict";
    var r = n(266);
    t.merge = r.mergeStatic
},
function(e, t, n) {
    "use strict";
    var r = n(86),
        i = n(86);
    t.mergeStatic = i.mergeStatic, t.merge = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t - 0] = arguments[t];
        return r.merge.apply(void 0, e)(this)
    }
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(17),
        o = n(268),
        a = n(87),
        s = n(88),
        u = function(e) {
            function t(t, n) {
                e.call(this), this.array = t, this.scheduler = n, n || 1 !== t.length || (this._isScalar = !0, this.value = t[0])
            }
            return r(t, e), t.create = function(e, n) {
                return new t(e, n)
            }, t.of = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                var r = e[e.length - 1];
                s.isScheduler(r) ? e.pop() : r = null;
                var i = e.length;
                return i > 1 ? new t(e, r) : 1 === i ? new o.ScalarObservable(e[0], r) : new a.EmptyObservable(r)
            }, t.dispatch = function(e) {
                var t = e.array,
                    n = e.index,
                    r = e.count,
                    i = e.subscriber;
                n >= r ? i.complete() : (i.next(t[n]), i.closed || (e.index = n + 1, this.schedule(e)))
            }, t.prototype._subscribe = function(e) {
                var n = this.array,
                    r = n.length,
                    i = this.scheduler;
                if (i) return i.schedule(t.dispatch, 0, {
                    array: n,
                    index: 0,
                    count: r,
                    subscriber: e
                });
                for (var o = 0; o < r && !e.closed; o++) e.next(n[o]);
                e.complete()
            }, t
        }(i.Observable);
    t.ArrayObservable = u
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = function(e) {
            function t(t, n) {
                e.call(this), this.value = t, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1)
            }
            return r(t, e), t.create = function(e, n) {
                return new t(e, n)
            }, t.dispatch = function(e) {
                var t = e.done,
                    n = e.value,
                    r = e.subscriber;
                t ? r.complete() : (r.next(n), r.closed || (e.done = !0, this.schedule(e)))
            }, t.prototype._subscribe = function(e) {
                var n = this.value,
                    r = this.scheduler;
                if (r) return r.schedule(t.dispatch, 0, {
                    done: !1,
                    value: n,
                    subscriber: e
                });
                e.next(n), e.closed || e.complete()
            }, t
        }(n(17).Observable);
    t.ScalarObservable = i
},
function(e, t, n) {
    "use strict";
    var r = n(270),
        i = n(275);
    t.mergeAll = function(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), r.mergeMap(i.identity, null, e)
    }
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(89),
        o = n(90);
    t.mergeMap = function(e, t, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY),
            function(r) {
                return "number" == typeof t && (n = t, t = null), r.lift(new a(e, t, n))
            }
    };
    var a = function() {
        function e(e, t, n) {
            void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = e, this.resultSelector = t, this.concurrent = n
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new s(e, this.project, this.resultSelector, this.concurrent))
        }, e
    }();
    t.MergeMapOperator = a;
    var s = function(e) {
        function t(t, n, r, i) {
            void 0 === i && (i = Number.POSITIVE_INFINITY), e.call(this, t), this.project = n, this.resultSelector = r, this.concurrent = i, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
        }
        return r(t, e), t.prototype._next = function(e) {
            this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
        }, t.prototype._tryNext = function(e) {
            var t, n = this.index++;
            try {
                t = this.project(e, n)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.active++, this._innerSub(t, e, n)
        }, t.prototype._innerSub = function(e, t, n) {
            this.add(i.subscribeToResult(this, e, t, n))
        }, t.prototype._complete = function() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
        }, t.prototype.notifyNext = function(e, t, n, r, i) {
            this.resultSelector ? this._notifyResultSelector(e, t, n, r) : this.destination.next(t)
        }, t.prototype._notifyResultSelector = function(e, t, n, r) {
            var i;
            try {
                i = this.resultSelector(e, t, n, r)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(i)
        }, t.prototype.notifyComplete = function(e) {
            var t = this.buffer;
            this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }, t
    }(o.OuterSubscriber);
    t.MergeMapSubscriber = s
},
function(e, t, n) {
    "use strict";
    t.isArrayLike = function(e) {
        return e && "number" == typeof e.length
    }
},
function(e, t, n) {
    "use strict";
    t.isPromise = function(e) {
        return e && "function" != typeof e.subscribe && "function" == typeof e.then
    }
},
function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.Symbol;
        if ("function" == typeof t) return t.iterator || (t.iterator = t("iterator polyfill")), t.iterator;
        var n = e.Set;
        if (n && "function" == typeof(new n)["@@iterator"]) return "@@iterator";
        var r = e.Map;
        if (r)
            for (var i = Object.getOwnPropertyNames(r.prototype), o = 0; o < i.length; ++o) {
                var a = i[o];
                if ("entries" !== a && "size" !== a && r.prototype[a] === r.prototype.entries) return a
            }
        return "@@iterator"
    }
    var i = n(32);
    t.symbolIteratorPonyfill = r, t.iterator = r(i.root), t.$$iterator = t.iterator
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = function(e) {
            function t(t, n, r) {
                e.call(this), this.parent = t, this.outerValue = n, this.outerIndex = r, this.index = 0
            }
            return r(t, e), t.prototype._next = function(e) {
                this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
            }, t.prototype._error = function(e) {
                this.parent.notifyError(e, this), this.unsubscribe()
            }, t.prototype._complete = function() {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, t
        }(n(27).Subscriber);
    t.InnerSubscriber = i
},
function(e, t, n) {
    "use strict";
    t.identity = function(e) {
        return e
    }
},
function(e, t, n) {
    "use strict";
    var r = n(277);
    t.share = function() {
        return r.share()(this)
    }
},
function(e, t, n) {
    "use strict";

    function r() {
        return new a.Subject
    }
    var i = n(278),
        o = n(91),
        a = n(49);
    t.share = function() {
        return function(e) {
            return o.refCount()(i.multicast(r)(e))
        }
    }
},
function(e, t, n) {
    "use strict";
    var r = n(279);
    t.multicast = function(e, t) {
        return function(n) {
            var o;
            if (o = "function" == typeof e ? e : function() {
                    return e
                }, "function" == typeof t) return n.lift(new i(o, t));
            var a = Object.create(n, r.connectableObservableDescriptor);
            return a.source = n, a.subjectFactory = o, a
        }
    };
    var i = function() {
        function e(e, t) {
            this.subjectFactory = e, this.selector = t
        }
        return e.prototype.call = function(e, t) {
            var n = this.selector,
                r = this.subjectFactory(),
                i = n(r).subscribe(e);
            return i.add(t.subscribe(r)), i
        }, e
    }();
    t.MulticastOperator = i
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(49),
        o = n(17),
        a = n(27),
        s = n(48),
        u = n(91),
        l = function(e) {
            function t(t, n) {
                e.call(this), this.source = t, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1
            }
            return r(t, e), t.prototype._subscribe = function(e) {
                return this.getSubject().subscribe(e)
            }, t.prototype.getSubject = function() {
                var e = this._subject;
                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, t.prototype.connect = function() {
                var e = this._connection;
                return e || (this._isComplete = !1, (e = this._connection = new s.Subscription).add(this.source.subscribe(new d(this.getSubject(), this))), e.closed ? (this._connection = null, e = s.Subscription.EMPTY) : this._connection = e), e
            }, t.prototype.refCount = function() {
                return u.refCount()(this)
            }, t
        }(o.Observable);
    t.ConnectableObservable = l;
    var c = l.prototype;
    t.connectableObservableDescriptor = {
        operator: {
            value: null
        },
        _refCount: {
            value: 0,
            writable: !0
        },
        _subject: {
            value: null,
            writable: !0
        },
        _connection: {
            value: null,
            writable: !0
        },
        _subscribe: {
            value: c._subscribe
        },
        _isComplete: {
            value: c._isComplete,
            writable: !0
        },
        getSubject: {
            value: c.getSubject
        },
        connect: {
            value: c.connect
        },
        refCount: {
            value: c.refCount
        }
    };
    var d = function(e) {
            function t(t, n) {
                e.call(this, t), this.connectable = n
            }
            return r(t, e), t.prototype._error = function(t) {
                this._unsubscribe(), e.prototype._error.call(this, t)
            }, t.prototype._complete = function() {
                this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(i.SubjectSubscriber),
        h = (function() {
            function e(e) {
                this.connectable = e
            }
            e.prototype.call = function(e, t) {
                var n = this.connectable;
                n._refCount++;
                var r = new h(e, n),
                    i = t.subscribe(r);
                return r.closed || (r.connection = n.connect()), i
            }
        }(), function(e) {
            function t(t, n) {
                e.call(this, t), this.connectable = n
            }
            return r(t, e), t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null;
                    else if (e._refCount = t - 1, t > 1) this.connection = null;
                    else {
                        var n = this.connection,
                            r = e._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, t
        }(a.Subscriber))
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = function(e) {
            function t() {
                var t = e.call(this, "object unsubscribed");
                this.name = t.name = "ObjectUnsubscribedError", this.stack = t.stack, this.message = t.message
            }
            return r(t, e), t
        }(Error);
    t.ObjectUnsubscribedError = i
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = function(e) {
            function t(t, n) {
                e.call(this), this.subject = t, this.subscriber = n, this.closed = !1
            }
            return r(t, e), t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                        t = e.observers;
                    if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                        var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
                    }
                }
            }, t
        }(n(48).Subscription);
    t.SubjectSubscription = i
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return m
    });
    var r = n(12),
        i = n(283),
        o = n(93),
        a = n(290),
        s = n(50),
        u = n(60),
        l = n(217),
        c = n(95),
        d = n(214),
        h = n(28),
        f = n(301),
        p = n(302),
        _ = n(303),
        m = r._4(i.a, [o.a], function(e) {
            return r._17([r._18(512, r.i, r._0, [
                [8, [a.a]],
                [3, r.i], r.x
            ]), r._18(5120, r.v, r._16, [
                [3, r.v]
            ]), r._18(4608, s.f, s.e, [r.v, [2, s.i]]), r._18(4608, r.h, r.h, []), r._18(5120, r.a, r._8, []), r._18(5120, r.t, r._13, []), r._18(5120, r.u, r._14, []), r._18(4608, u.b, u.q, [s.b]), r._18(6144, r.I, null, [u.b]), r._18(4608, u.e, u.f, []), r._18(5120, u.c, function(e, t, n, r, i) {
                return [new u.j(e, t), new u.n(n), new u.m(r, i)]
            }, [s.b, r.z, s.b, s.b, u.e]), r._18(4608, u.d, u.d, [u.c, r.z]), r._18(135680, u.l, u.l, [s.b]), r._18(4608, u.k, u.k, [u.d, u.l]), r._18(6144, r.G, null, [u.k]), r._18(6144, u.o, null, [u.l]), r._18(4608, r.O, r.O, [r.z]), r._18(4608, u.g, u.g, [s.b]), r._18(4608, u.h, u.h, [s.b]), r._18(4608, l.i, l.i, []), r._18(4608, c.a, c.a, []), r._18(4608, d.a, d.a, []), r._18(4608, h.a, h.a, [c.a, d.a]), r._18(512, s.a, s.a, []), r._18(1024, r.l, u.p, []), r._18(1024, r.b, function(e) {
                return [u.s(e)]
            }, [
                [2, r.y]
            ]), r._18(512, r.c, r.c, [
                [2, r.b]
            ]), r._18(131584, r.e, r.e, [r.z, r._1, r.r, r.l, r.i, r.c]), r._18(512, r.d, r.d, [r.e]), r._18(512, u.a, u.a, [
                [3, u.a]
            ]), r._18(512, f.a, f.a, []), r._18(512, l.h, l.h, []), r._18(512, l.c, l.c, []), r._18(512, p.a, p.a, []), r._18(512, _.a, _.a, []), r._18(512, i.a, i.a, [])])
        })
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function() {}
    }()
},
function(e, t, n) {
    ! function(e, n) {
        n(t)
    }(0, function(e) {
        "use strict";
        class t {
            constructor() {
                this._isRelative, this._components = [], "string" == typeof arguments[0] ? this.componentsString = arguments[0] : arguments[0] instanceof n && arguments[1] instanceof t ? (this._components.push(arguments[0]), this._components = this._components.concat(arguments[1])) : arguments[0] instanceof Array && (this._components = this._components.concat(arguments[0]), this._isRelative = !!arguments[1])
            }
            get isRelative() {
                return this._isRelative
            }
            get components() {
                return this._components
            }
            get head() {
                return this.components.length > 0 ? this.components[0] : null
            }
            get tail() {
                if (this.components.length >= 2) {
                    var e = this.components.slice(1, this.components.length);
                    return new t(e)
                }
                return t.self
            }
            get length() {
                return this.components.length
            }
            get lastComponent() {
                return this.components.length > 0 ? this.components[this.components.length - 1] : null
            }
            get containsNamedComponent() {
                for (var e = 0, t = this.components.length; e < t; e++)
                    if (!this.components[e].isIndex) return !0;
                return !1
            }
            static get self() {
                var e = new t;
                return e._isRelative = !0, e
            }
            PathByAppendingPath(e) {
                for (var n = new t, r = 0, i = 0; i < e.components.length && e.components[i].isParent; ++i) r++;
                for (i = 0; i < this.components.length - r; ++i) n.components.push(this.components[i]);
                for (i = r; i < e.components.length; ++i) n.components.push(e.components[i]);
                return n
            }
            get componentsString() {
                var e = this.components.join(".");
                return this.isRelative ? "." + e : e
            }
            set componentsString(e) {
                this.components.length = 0;
                var t = e;
                if (null != t && "" != t) {
                    "." == t[0] && (this._isRelative = !0, t = t.substring(1));
                    t.split(".").forEach(e => {
                        /^(\-|\+)?([0-9]+|Infinity)$/.test(e) ? this.components.push(new n(parseInt(e))) : this.components.push(new n(e))
                    })
                }
            }
            toString() {
                return this.componentsString
            }
            Equals(e) {
                if (null == e) return !1;
                if (e.components.length != this.components.length) return !1;
                if (e.isRelative != this.isRelative) return !1;
                for (var t = 0, n = e.components.length; t < n; t++)
                    if (!e.components[t].Equals(this.components[t])) return !1;
                return !0
            }
        }
        class n {
            constructor(e) {
                "string" == typeof e ? (this._index = -1, this._name = e) : (this._index = parseInt(e), this._name = null)
            }
            get index() {
                return this._index
            }
            get name() {
                return this._name
            }
            get isIndex() {
                return this.index >= 0
            }
            get isParent() {
                return this.name == t.parentId
            }
            static ToParent() {
                return new n(t.parentId)
            }
            toString() {
                return this.isIndex ? this.index.toString() : this.name
            }
            Equals(e) {
                return null != e && e.isIndex == this.isIndex && (this.isIndex ? this.index == e.index : this.name == e.name)
            }
        }
        t.parentId = "^", t.Component = n;
        class r {
            constructor() {
                this.parent = null, this._path = null
            }
            get path() {
                if (null == this._path)
                    if (null == this.parent) this._path = new t;
                    else {
                        for (var e = [], n = this, r = n.parent; r instanceof g;) {
                            var i = n;
                            i.name && i.hasValidName ? e.unshift(new t.Component(i.name)) : e.unshift(new t.Component(r.content.indexOf(n))), n = r, r = r.parent
                        }
                        this._path = new t(e)
                    } return this._path
            }
            get rootContentContainer() {
                for (var e = this; e.parent;) e = e.parent;
                return e
            }
            ResolvePath(e) {
                if (e.isRelative) {
                    var t = this;
                    return t instanceof g == !1 && (null == this.parent && console.warn("Can't resolve relative path because we don't have a parent"), "Container" !== (t = this.parent).constructor.name && console.warn("Expected parent to be a container"), e = e.tail), t.ContentAtPath(e)
                }
                return this.rootContentContainer.ContentAtPath(e)
            }
            ConvertPathToRelative(e) {
                for (var n = this.path, r = Math.min(e.components.length, n.components.length), i = -1, o = 0; o < r; ++o) {
                    var a = n.components[o],
                        s = e.components[o];
                    if (!a.Equals(s)) break;
                    i = o
                }
                if (-1 == i) return e;
                for (var u = n.components.length - 1 - i, l = [], c = 0; c < u; ++c) l.push(t.Component.ToParent());
                for (var d = i + 1; d < e.components.length; ++d) l.push(e.components[d]);
                return new t(l, !0)
            }
            CompactPathString(e) {
                var t = null,
                    n = null;
                if (e.isRelative) n = e.componentsString, t = this.path.PathByAppendingPath(e).componentsString;
                else {
                    n = this.ConvertPathToRelative(e).componentsString, t = e.componentsString
                }
                return n.Length < t.Length ? n : t
            }
            Copy() {
                throw "Not Implemented"
            }
            SetChild(e, t, n) {
                e[t] && (e[t] = null), e[t] = n, e[t] && (e[t].parent = this)
            }
        }
        class o {
            constructor(e) {
                e = void 0 !== e ? e.toString() : "", this._string = e
            }
            get Length() {
                return this._string.length
            }
            Append(e) {
                this._string += e
            }
            AppendLine(e) {
                void 0 !== e && this.Append(e), this._string += "\n"
            }
            AppendFormat(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return e.replace(/{(\d+)}/g, function(e, n) {
                    return void 0 !== t[n] ? t[n] : e
                })
            }
            toString() {
                return this._string
            }
        }
        class a {
            constructor(e, t) {
                if (void 0 !== t) this.originName = e, this.itemName = t;
                else {
                    var n = e.toString().split(".");
                    this.originName = n[0], this.itemName = n[1]
                }
            }
            static Null() {
                return new a(null, null)
            }
            isNull() {
                return null == this.originName && null == this.itemName
            }
            get fullName() {
                return (null !== this.originName ? this.originName : "?") + "." + this.itemName
            }
            toString() {
                return this.fullname
            }
            Equals(e) {
                if (e instanceof a) {
                    var t = e;
                    return t.itemName == this.itemName && t.originName == this.originName
                }
                return !1
            }
            toString() {
                var e = "0",
                    t = this.itemName ? this.itemName.toString() : "null";
                return null != this.originName && (e = this.originName.toString()), e + t
            }
        }
        class s {
            constructor(e, t) {
                if (this._keys = {}, this._values = {}, this.origins = null, this._originNames = null, e)
                    if (e instanceof s) {
                        var n = e;
                        n.forEach(e => {
                            this.Add(e.Key, e.Value)
                        }), this._originNames = n._originNames
                    } else if ("string" == typeof e) {
                    this.SetInitialOriginName(e);
                    var r = null;
                    if (!(r = t.listDefinitions.TryGetDefinition(e, r))) throw new Error("InkList origin could not be found in story when constructing new list: " + singleOriginListName);
                    this.origins = [r]
                } else if (e.hasOwnProperty("Key") && e.hasOwnProperty("Value")) {
                    var i = e;
                    this.Add(i.Key, i.Value)
                }
            }
            forEach(e) {
                for (var t in this._values) e({
                    Key: this._keys[t],
                    Value: this._values[t]
                })
            }
            AddItem(e) {
                if (e instanceof a) {
                    if (null == (r = e).originName) return void this.AddItem(r.itemName);
                    throw this.origins.forEach(e => {
                        if (e.name == r.originName) {
                            var t;
                            if (void 0 !== (t = e.TryGetValueForItem(r, t))) return void this.Add(r, t);
                            throw "Could not add the item " + r + " to this list because it doesn't exist in the original list definition in ink."
                        }
                    }), "Failed to add item to list because the item was from a new list definition that wasn't previously known to this list. Only items from previously known lists can be used, so that the int value can be found."
                }
                var t = e,
                    n = null;
                if (this.origins.forEach(e => {
                        if (e.ContainsItemWithName(t)) {
                            if (null != n) throw "Could not add the item " + t + " to this list because it could come from either " + e.name + " or " + n.name;
                            n = e
                        }
                    }), null == n) throw "Could not add the item " + t + " to this list because it isn't known to any list definitions previously associated with this list.";
                var r = new a(n.name, t),
                    i = n.ValueForItem(r);
                this.Add(r, i)
            }
            ContainsItemNamed(e) {
                var t = !1;
                return this.forEach(n => {
                    n.Key.itemName == e && (t = !0)
                }), t
            }
            ContainsKey(e) {
                return e in this._values
            }
            Add(e, t) {
                this._keys[e] = e, this._values[e] = t
            }
            Remove(e) {
                delete this._values[e], delete this._keys[e]
            }
            get Count() {
                return Object.keys(this._values).length
            }
            get originOfMaxItem() {
                if (null == this.origins) return null;
                var e = this.maxItem.Key.originName,
                    t = null;
                return this.origins.every(function(n) {
                    return n.name != e || (t = n, !1)
                }), t
            }
            get originNames() {
                return this.Count > 0 && (null == this._originNames && this.Count > 0 ? this._originNames = [] : this._originNames.length = 0, this.forEach(e => {
                    this._originNames.push(e.Key.originName)
                })), this._originNames
            }
            SetInitialOriginName(e) {
                this._originNames = [e]
            }
            SetInitialOriginNames(e) {
                this._originNames = null == e ? null : e.slice()
            }
            get maxItem() {
                var e = {
                    Key: null,
                    Value: null
                };
                return this.forEach(function(t) {
                    (null === e.Key || t.Value > e.Value) && (e = t)
                }), e
            }
            get minItem() {
                var e = {
                    Key: null,
                    Value: null
                };
                return this.forEach(function(t) {
                    (null === e.Key || t.Value < e.Value) && (e = t)
                }), e
            }
            get inverse() {
                var e = new s;
                return null != this.origins && this.origins.forEach(t => {
                    t.items.forEach(t => {
                        this.ContainsKey(t.Key) || e.Add(t.Key, t.Value)
                    })
                }), e
            }
            get all() {
                var e = new s;
                return null != this.origins && this.origins.forEach(function(t) {
                    t.items.forEach(function(t) {
                        e.Add(t.Key, t.Value)
                    })
                }), e
            }
            Union(e) {
                var t = new s(this);
                return e.forEach(function(e) {
                    t.Add(e.Key, e.Value)
                }), t
            }
            Intersect(e) {
                var t = new s;
                return this.forEach(function(n) {
                    e.ContainsKey(n.Key) && t.Add(n.Key, n.Value)
                }), t
            }
            Without(e) {
                var t = new s(this);
                return e.forEach(function(e) {
                    t.Remove(e.Key)
                }), t
            }
            Contains(e) {
                var t = !0;
                return e.forEach(e => {
                    this.ContainsKey(e.Key) || (t = !1)
                }), t
            }
            GreaterThan(e) {
                return 0 != this.Count && (0 == e.Count || this.minItem.Value > e.maxItem.Value)
            }
            GreaterThanOrEquals(e) {
                return 0 != this.Count && (0 == e.Count || this.minItem.Value >= e.minItem.Value && this.maxItem.Value >= e.maxItem.Value)
            }
            LessThan(e) {
                return 0 != e.Count && (0 == this.Count || this.maxItem.Value < e.minItem.Value)
            }
            LessThanOrEquals(e) {
                return 0 != e.Count && (0 == this.Count || this.maxItem.Value <= e.maxItem.Value && this.minItem.Value <= e.minItem.Value)
            }
            MaxAsList() {
                return this.Count > 0 ? new s(this.maxItem) : new s
            }
            MinAsList() {
                return this.Count > 0 ? new s(this.minItem) : new s
            }
            Equals(e) {
                var t = e;
                if (t instanceof s == !1) return !1;
                if (t.Count != this.Count) return !1;
                var n = !0;
                return this.forEach(function(e) {
                    t.ContainsKey(e.Key) || (n = !1)
                }), n
            }
            toString() {
                var e = [];
                this.forEach(function(t) {
                    e.push(t)
                }), e = e.sort((e, t) => e.Value === t.Value ? 0 : e.Value > t.Value ? 1 : -1);
                for (var t = new o, n = 0; n < e.length; n++) {
                    n > 0 && t.Append(", ");
                    var r = e[n].Key;
                    t.Append(r.itemName)
                }
                return t.toString()
            }
            valueOf() {
                return NaN
            }
        }
        var u = {
            Int: 0,
            Float: 1,
            List: 2,
            String: 3,
            DivertTarget: 4,
            VariablePointer: 5
        };
        class l extends r {
            constructor(e) {
                super(), this._valueType, this._isTruthy, this._valueObject
            }
            get valueType() {
                return this._valueType
            }
            get isTruthy() {
                return this._isTruthy
            }
            get valueObject() {
                return this._valueObject
            }
            Cast(e) {
                throw "Trying to casting an AbstractValue"
            }
            static Create(e) {
                if ("boolean" == typeof e) {
                    e = !!e ? 1 : 0
                }
                return Number.isInteger(Number(e)) ? new d(e) : isNaN(e) ? "string" == typeof e ? new f(e) : e instanceof t ? new p(e) : e instanceof s ? new m(e) : null : new h(e)
            }
            Copy(e) {
                return l.Create(e)
            }
        }
        class c extends l {
            constructor(e) {
                super(), this.value = e
            }
            get value() {
                return this._value
            }
            set value(e) {
                this._value = e
            }
            get valueObject() {
                return this.value
            }
            toString() {
                return this.value.toString()
            }
        }
        class d extends c {
            constructor(e) {
                super(e || 0), this._valueType = u.Int
            }
            get isTruthy() {
                return 0 != this.value
            }
            get valueType() {
                return u.Int
            }
            Cast(e) {
                if (e == this.valueType) return this;
                if (e == u.Float) return new h(parseFloat(this.value));
                if (e == u.String) return new f("" + this.value);
                throw "Unexpected type cast of Value to new ValueType"
            }
        }
        class h extends c {
            constructor(e) {
                super(e || 0), this._valueType = u.Float
            }
            get isTruthy() {
                return 0 != this._value
            }
            get valueType() {
                return u.Float
            }
            Cast(e) {
                if (e == this.valueType) return this;
                if (e == u.Int) return new d(parseInt(this.value));
                if (e == u.String) return new f("" + this.value);
                throw "Unexpected type cast of Value to new ValueType"
            }
        }
        class f extends c {
            constructor(e) {
                super(e || ""), this._valueType = u.String, this._isNewline = "\n" == this.value, this._isInlineWhitespace = !0, this.value.split().every(e => " " == e || "\t" == e || (this._isInlineWhitespace = !1, !1))
            }
            get valueType() {
                return u.String
            }
            get isTruthy() {
                return this.value.length > 0
            }
            get isNewline() {
                return this._isNewline
            }
            get isInlineWhitespace() {
                return this._isInlineWhitespace
            }
            get isNonWhitespace() {
                return !this.isNewline && !this.isInlineWhitespace
            }
            Cast(e) {
                if (e == this.valueType) return this;
                if (e == u.Int) {
                    var t;
                    return (t = parseInt(value)) ? new d(t) : null
                }
                if (e == u.Float) {
                    var n;
                    return (n = n(value)) ? new h(n) : null
                }
                throw "Unexpected type cast of Value to new ValueType"
            }
        }
        class p extends c {
            constructor(e) {
                super(e), this._valueType = u.DivertTarget
            }
            get targetPath() {
                return this.value
            }
            set targetPath(e) {
                this.value = e
            }
            get isTruthy() {
                throw "Shouldn't be checking the truthiness of a divert target"
            }
            Cast(e) {
                if (e == this.valueType) return this;
                throw "Unexpected type cast of Value to new ValueType"
            }
            toString() {
                return "DivertTargetValue(" + this.targetPath + ")"
            }
        }
        class _ extends c {
            constructor(e, t) {
                super(e), this._valueType = u.VariablePointer, this.contextIndex = void 0 !== t ? t : -1
            }
            get variableName() {
                return this.value
            }
            set variableName(e) {
                this.value = e
            }
            get isTruthy() {
                throw "Shouldn't be checking the truthiness of a variable pointer"
            }
            Cast(e) {
                if (e == this.valueType) return this;
                throw "Unexpected type cast of Value to new ValueType"
            }
            toString() {
                return "VariablePointerValue(" + this.variableName + ")"
            }
            Copy() {
                return new _(this.variableName, this.contextIndex)
            }
        }
        class m extends c {
            get valueType() {
                return u.List
            }
            get isTruthy() {
                var e = !1;
                return this.value.forEach(function(t) {
                    0 != t.Value && (e = !0)
                }), e
            }
            Cast(e) {
                if (e == u.Int) {
                    t = this.value.maxItem;
                    return new d(t.Key.isNull ? 0 : t.Value)
                }
                if (e == u.Float) {
                    t = this.value.maxItem;
                    return new h(t.Key.isNull ? 0 : parseFloat(t.Value))
                }
                if (e == u.String) {
                    var t = value.maxItem;
                    return new f(t.Key.isNull ? "" : t.Key.toString())
                }
                if (e == this.valueType) return this;
                throw "Unexpected type cast of Value to new ValueType"
            }
            constructor(e, t) {
                super(null), this._valueType = u.List, this.value = e instanceof s ? new s(e) : void 0 !== e && void 0 !== t ? new s({
                    Key: e,
                    Value: t
                }) : new s
            }
            static RetainListOriginsForAssignment(e, t) {
                var n = e,
                    r = t;
                n instanceof m && r instanceof m && 0 == r.value.Count && r.value.SetInitialOriginNames(n.value.originNames)
            }
        }
        class y extends Error {
            constructor(e) {
                super(e), this.message = e, this.name = "StoryException"
            }
        }
        class g extends r {
            constructor() {
                super(), this.name = "", this._content = [], this.namedContent = {}, this.visitsShouldBeCounted = !1, this.turnIndexShouldBeCounted = !1, this.countingAtStartOnly = !1, this.CountFlags = {
                    Visits: 1,
                    Turns: 2,
                    CountStartOnly: 4
                }, this._pathToFirstLeafContent = null
            }
            get hasValidName() {
                return null != this.name && this.name.length > 0
            }
            get content() {
                return this._content
            }
            set content(e) {
                this.AddContent(e)
            }
            get namedOnlyContent() {
                var e = {};
                for (var t in this.namedContent) e[t] = this.namedContent[t];
                return this.content.forEach(t => {
                    var n = t;
                    n.name && n.hasValidName && delete e[n.name]
                }), 0 == Object.keys(e).length && (e = null), e
            }
            set namedOnlyContent(e) {
                var t = this.namedOnlyContent;
                if (null != t)
                    for (var n in t) delete this.namedContent[n];
                if (null != e)
                    for (var n in e) {
                        var r = e[n];
                        r.name && void 0 !== r.hasValidName && this.AddToNamedContentOnly(r)
                    }
            }
            get countFlags() {
                var e = 0;
                return this.visitsShouldBeCounted && (e |= this.CountFlags.Visits), this.turnIndexShouldBeCounted && (e |= this.CountFlags.Turns), this.countingAtStartOnly && (e |= this.CountFlags.CountStartOnly), e == this.CountFlags.CountStartOnly && (e = 0), e
            }
            set countFlags(e) {
                var t = e;
                (t & this.CountFlags.Visits) > 0 && (this.visitsShouldBeCounted = !0), (t & this.CountFlags.Turns) > 0 && (this.turnIndexShouldBeCounted = !0), (t & this.CountFlags.CountStartOnly) > 0 && (this.countingAtStartOnly = !0)
            }
            get pathToFirstLeafContent() {
                return null == this._pathToFirstLeafContent && (this._pathToFirstLeafContent = this.path.PathByAppendingPath(this.internalPathToFirstLeafContent)), this._pathToFirstLeafContent
            }
            get internalPathToFirstLeafContent() {
                for (var e = new Path, t = this; t instanceof g;) t.content.length > 0 && (e.components.push(new Path.Component(0)), t = t.content[0]);
                return e
            }
            AddContent(e) {
                if (e instanceof Array) e.forEach(e => {
                    this.AddContent(e)
                });
                else {
                    if (this._content.push(e), e.parent) throw "content is already in " + e.parent;
                    e.parent = this, this.TryAddNamedContent(e)
                }
            }
            TryAddNamedContent(e) {
                e.hasValidName && e.name && this.AddToNamedContentOnly(e)
            }
            AddToNamedContentOnly(e) {
                e instanceof r == !1 && console.warn("Can only add Runtime.Objects to a Runtime.Container"), e.parent = this, this.namedContent[e.name] = e
            }
            ContentAtPath(e, t) {
                t = void 0 !== t ? t : e.components.length;
                for (var n = this, r = this, i = 0; i < t; ++i) {
                    var o = e.components[i];
                    if (!(n instanceof g)) throw "Path continued, but previous object wasn't a container: " + r;
                    n = r = n.ContentWithPathComponent(o)
                }
                return r
            }
            InsertContent(e, t) {
                if (this.content[i] = e, e.parent) throw "content is already in " + e.parent;
                e.parent = this, this.TryAddNamedContent(e)
            }
            AddContentsOfContainer(e) {
                this.content = this.content.concat(e.content), e.content.forEach(e => {
                    e.parent = this, this.TryAddNamedContent(e)
                })
            }
            ContentWithPathComponent(e) {
                if (e.isIndex) return e.index >= 0 && e.index < this.content.length ? this.content[e.index] : null;
                if (e.isParent) return this.parent;
                var t = null;
                if (t = this.namedContent[e.name]) return t;
                throw new y("Content '" + e.name + "' not found at path: '" + this.path + "'")
            }
            BuildStringOfHierarchy(e, t, n) {
                function r() {
                    for (var n = 0; n < 4 * t; ++n) e.Append(" ")
                }
                if (0 == arguments.length) {
                    e = new o;
                    return this.BuildStringOfHierarchy(e, 0, null), e.toString()
                }
                r(), e.Append("["), this.hasValidName && e.AppendFormat(" ({0})", this.name), this == n && e.Append("  <---"), e.AppendLine(), t++;
                for (var i = 0; i < this.content.length; ++i) {
                    var a = this.content[i];
                    if (a instanceof g) {
                        (l = a).BuildStringOfHierarchy(e, t, n)
                    } else r(), a instanceof f ? (e.Append('"'), e.Append(a.toString().replace("\n", "\\n")), e.Append('"')) : e.Append(a.toString());
                    i != this.content.length - 1 && e.Append(","), a instanceof g || a != n || e.Append("  <---"), e.AppendLine()
                }
                var s = {};
                for (var u in this.namedContent) this.content.indexOf(this.namedContent[u]) >= 0 || (s[u] = this.namedContent[u]);
                if (Object.keys(s).length > 0) {
                    r(), e.AppendLine("-- named: --");
                    for (var u in s) {
                        s[u] instanceof g || console.warn("Can only print out named Containers");
                        var l = s[u];
                        l.BuildStringOfHierarchy(e, t, n), e.Append("\n")
                    }
                }
                t--, r(), e.Append("]")
            }
        }
        class v extends r {
            constructor(e) {
                super(), this.glueType = e
            }
            get isLeft() {
                return this.glueType == b.Left
            }
            get isBi() {
                return this.glueType == b.Bidirectional
            }
            get isRight() {
                return this.glueType == b.Right
            }
            toString() {
                switch (this.glueType) {
                    case b.Bidirectional:
                        return "BidirGlue";
                    case b.Left:
                        return "LeftGlue";
                    case b.Right:
                        return "RightGlue"
                }
                return "UnexpectedGlueType"
            }
        }
        let b = {
            Bidirectional: 0,
            Left: 1,
            Right: 2
        };
        class M extends r {
            constructor(e) {
                super(), this._commandType = void 0 !== e ? e : w.NotSet
            }
            get commandType() {
                return this._commandType
            }
            copy() {
                return new M(this.commandType)
            }
            toString() {
                return this.commandType.toString()
            }
            static EvalStart() {
                return new M(w.EvalStart)
            }
            static EvalOutput() {
                return new M(w.EvalOutput)
            }
            static EvalEnd() {
                return new M(w.EvalEnd)
            }
            static Duplicate() {
                return new M(w.Duplicate)
            }
            static PopEvaluatedValue() {
                return new M(w.PopEvaluatedValue)
            }
            static PopFunction() {
                return new M(w.PopFunction)
            }
            static PopTunnel() {
                return new M(w.PopTunnel)
            }
            static BeginString() {
                return new M(w.BeginString)
            }
            static EndString() {
                return new M(w.EndString)
            }
            static NoOp() {
                return new M(w.NoOp)
            }
            static ChoiceCount() {
                return new M(w.ChoiceCount)
            }
            static TurnsSince() {
                return new M(w.TurnsSince)
            }
            static ReadCount() {
                return new M(w.ReadCount)
            }
            static Random() {
                return new M(w.Random)
            }
            static SeedRandom() {
                return new M(w.SeedRandom)
            }
            static VisitIndex() {
                return new M(w.VisitIndex)
            }
            static SequenceShuffleIndex() {
                return new M(w.SequenceShuffleIndex)
            }
            static StartThread() {
                return new M(w.StartThread)
            }
            static Done() {
                return new M(w.Done)
            }
            static End() {
                return new M(w.End)
            }
            static ListFromInt() {
                return new M(w.ListFromInt)
            }
            static ListRange() {
                return new M(w.ListRange)
            }
        }
        var w = {
            NotSet: -1,
            EvalStart: 0,
            EvalOutput: 1,
            EvalEnd: 2,
            Duplicate: 3,
            PopEvaluatedValue: 4,
            PopFunction: 5,
            PopTunnel: 6,
            BeginString: 7,
            EndString: 8,
            NoOp: 9,
            ChoiceCount: 10,
            TurnsSince: 11,
            Random: 12,
            SeedRandom: 13,
            VisitIndex: 14,
            SequenceShuffleIndex: 15,
            StartThread: 16,
            Done: 17,
            End: 18,
            ListFromInt: 19,
            ListRange: 20,
            ReadCount: 21
        };
        w.TOTAL_VALUES = Object.keys(w).length - 1, M.CommandType = w;
        let L = {
            Tunnel: 0,
            Function: 1
        };
        class k extends r {
            constructor(e) {
                super(), this._targetPath, this._targetContent, this.variableDivertName, this.pushesToStack, this.stackPushType, this.isExternal, this.isConditional, this.externalArgs, this.pushesToStack = !1, e && (this.pushesToStack = !0, this.stackPushType = e)
            }
            get targetPath() {
                if (null != this._targetPath && this._targetPath.isRelative) {
                    var e = this.targetContent;
                    e && (this._targetPath = e.path)
                }
                return this._targetPath
            }
            set targetPath(e) {
                this._targetPath = e, this._targetContent = null
            }
            get targetContent() {
                return null == this._targetContent && (this._targetContent = this.ResolvePath(this._targetPath)), this._targetContent
            }
            get targetPathString() {
                return null == this.targetPath ? null : this.CompactPathString(this.targetPath)
            }
            set targetPathString(e) {
                this.targetPath = null == e ? null : new t(e)
            }
            get hasVariableTarget() {
                return null != this.variableDivertName
            }
            Equals(e) {
                var t = e;
                return t instanceof k && this.hasVariableTarget == t.hasVariableTarget && (this.hasVariableTarget ? this.variableDivertName == t.variableDivertName : this.targetPath.Equals(t.targetPath))
            }
            toString() {
                if (this.hasVariableTarget) return "Divert(variable: " + this.variableDivertName + ")";
                if (null == this.targetPath) return "Divert(null)";
                var e = new o,
                    t = this.targetPath.toString();
                return e.Append("Divert"), this.pushesToStack && (this.stackPushType == L.Function ? e.Append(" function") : e.Append(" tunnel")), e.Append(" ("), e.Append(t), e.Append(")"), e.toString()
            }
        }
        class T extends r {
            constructor(e) {
                super(), this._pathOnChoice, this.hasCondition, this.hasStartContent, this.hasChoiceOnlyContent, this.onceOnly, this.isInvisibleDefault, this.onceOnly = !!e
            }
            get pathOnChoice() {
                if (null != this._pathOnChoice && this._pathOnChoice.isRelative) {
                    var e = this.choiceTarget;
                    e && (this._pathOnChoice = e.path)
                }
                return this._pathOnChoice
            }
            get choiceTarget() {
                return this.ResolvePath(this._pathOnChoice)
            }
            get pathStringOnChoice() {
                return this.CompactPathString(this.pathOnChoice)
            }
            set pathStringOnChoice(e) {
                this.pathOnChoice = new t(e)
            }
            get flags() {
                var e = 0;
                return this.hasCondition && (e |= 1), this.hasStartContent && (e |= 2), this.hasChoiceOnlyContent && (e |= 4), this.isInvisibleDefault && (e |= 8), this.onceOnly && (e |= 16), e
            }
            set flags(e) {
                this.hasCondition = (1 & e) > 0, this.hasStartContent = (2 & e) > 0, this.hasChoiceOnlyContent = (4 & e) > 0, this.isInvisibleDefault = (8 & e) > 0, this.onceOnly = (16 & e) > 0
            }
            set pathOnChoice(e) {
                this._pathOnChoice = e
            }
            toString() {
                var e = this.pathOnChoice.toString();
                return "Choice: -> " + e
            }
        }
        class Y extends r {
            constructor(e) {
                super(), this.name = e, this.pathForCount
            }
            get containerForCount() {
                return this.ResolvePath(this.pathForCount)
            }
            get pathStringForCount() {
                return null == this.pathForCount ? null : this.CompactPathString(this.pathForCount)
            }
            set pathStringForCount(e) {
                this.pathForCount = null == e ? null : new t(e)
            }
            toString() {
                if (null != this.name) return "var(" + this.name + ")";
                return "read_count(" + this.pathStringForCount + ")"
            }
        }
        class S extends r {
            constructor(e, t) {
                super(), this._variableName = e || null, this._isNewDeclaration = !!t, this.isGlobal
            }
            get variableName() {
                return this._variableName
            }
            get isNewDeclaration() {
                return this._isNewDeclaration
            }
            toString() {
                return "VarAssign to " + this.variableName
            }
        }
        class D extends r {}
        class C extends r {
            constructor(e) {
                super(), this.name = e, this._numberOfParameters, this._prototype, this._isPrototype, this._operationFuncs = null, C.GenerateNativeFunctionsIfNecessary()
            }
            get name() {
                return this._name
            }
            set name(e) {
                this._name = e, this._isPrototype || (this._prototype = C._nativeFunctions[this._name])
            }
            get numberOfParameters() {
                return this._prototype ? this._prototype.numberOfParameters : this._numberOfParameters
            }
            set numberOfParameters(e) {
                this._numberOfParameters = e
            }
            static internalConstructor(e, t) {
                var n = new C(e);
                return n._isPrototype = !0, n.numberOfParameters = t, n
            }
            static CallWithName(e) {
                return new C(e)
            }
            static CallExistsWithName(e) {
                return this.GenerateNativeFunctionsIfNecessary(), this._nativeFunctions[e]
            }
            Call(e) {
                if (this._prototype) return this._prototype.Call(e);
                if (this.numberOfParameters != e.length) throw "Unexpected number of parameters";
                var t = !1;
                if (e.forEach(e => {
                        if (e instanceof D) throw new y("Attempting to perform operation on a void value. Did you forget to 'return' a value from a function you called here?");
                        e instanceof m && (t = !0)
                    }), 2 == e.length && t) return this.CallBinaryListOperation(e);
                var n = this.CoerceValuesToSingleType(e),
                    r = n[0].valueType;
                return r == u.Int ? this.CallType(n) : r == u.Float ? this.CallType(n) : r == u.String ? this.CallType(n) : r == u.DivertTarget ? this.CallType(n) : r == u.List ? this.CallType(n) : null
            }
            CallType(e) {
                var t = e[0],
                    n = t.valueType,
                    r = t,
                    i = e.length;
                if (2 == i || 1 == i) {
                    var o = this._operationFuncs[n];
                    if (!o) throw new y("Cannot perform operation '" + this.name + "' on " + n);
                    if (2 == i) {
                        var a = e[1],
                            s = (u = o)(r.value, a.value);
                        return c.Create(s)
                    }
                    var u = o,
                        s = u(r.value);
                    return c.Create(s)
                }
                throw "Unexpected number of parameters to NativeFunctionCall: " + e.length
            }
            CallBinaryListOperation(e) {
                if (("+" == this.name || "-" == this.name) && e[0] instanceof m && e[1] instanceof d) return this.CallListIncrementOperation(e);
                var t = e[0],
                    n = e[1];
                if (!("&&" != this.name && "||" != this.name || t.valueType == u.List && n.valueType == u.List)) {
                    var r = (0, this._operationFuncs[u.Int])(t.isTruthy ? 1 : 0, n.isTruthy ? 1 : 0);
                    return new d(r)
                }
                if (t.valueType == u.List && n.valueType == u.List) return this.CallType([t, n]);
                throw new y("Can not call use '" + this.name + "' operation on " + t.valueType + " and " + n.valueType)
            }
            CallListIncrementOperation(e) {
                var t = e[0],
                    n = e[1],
                    r = new s;
                return t.value.forEach(e => {
                    var i = e.Key,
                        o = e.Value,
                        a = (0, this._operationFuncs[u.Int])(o, n.value),
                        s = null;
                    if (t.value.origins.forEach(function(e) {
                            if (e.name == i.originName) return s = e, !1
                        }), null != s) {
                        var l = s.TryGetItemWithValue(a);
                        l.exists && r.Add(l.item, a)
                    }
                }), new m(r)
            }
            CoerceValuesToSingleType(e) {
                var t = u.Int,
                    n = null;
                e.forEach(e => {
                    var r = e;
                    r.valueType > t && (t = r.valueType), r.valueType == u.List && (n = r)
                });
                var r = [];
                return t == u.List ? e.forEach(function(e) {
                    if (e.valueType == u.List) r.push(e);
                    else {
                        if (e.valueType != u.Int) throw new y("Cannot mix Lists and " + e.valueType + " values in this operation");
                        var t = parseInt(e.valueObject),
                            i = n.value.originOfMaxItem,
                            o = i.TryGetItemWithValue(t);
                        if (!o.exists) throw new y("Could not find List item with the value " + t + " in " + i.name);
                        var a = new m(o.item, t);
                        r.push(a)
                    }
                }) : e.forEach(function(e) {
                    var n = e.Cast(t);
                    r.push(n)
                }), r
            }
            static GenerateNativeFunctionsIfNecessary() {
                if (null == this._nativeFunctions) {
                    this._nativeFunctions = {}, this.AddIntBinaryOp(this.Add, (e, t) => e + t), this.AddIntBinaryOp(this.Subtract, (e, t) => e - t), this.AddIntBinaryOp(this.Multiply, (e, t) => e * t), this.AddIntBinaryOp(this.Divide, (e, t) => parseInt(e / t)), this.AddIntBinaryOp(this.Mod, (e, t) => e % t), this.AddIntUnaryOp(this.Negate, e => -e), this.AddIntBinaryOp(this.Equal, (e, t) => e == t ? 1 : 0), this.AddIntBinaryOp(this.Greater, (e, t) => e > t ? 1 : 0), this.AddIntBinaryOp(this.Less, (e, t) => e < t ? 1 : 0), this.AddIntBinaryOp(this.GreaterThanOrEquals, (e, t) => e >= t ? 1 : 0), this.AddIntBinaryOp(this.LessThanOrEquals, (e, t) => e <= t ? 1 : 0), this.AddIntBinaryOp(this.NotEquals, (e, t) => e != t ? 1 : 0), this.AddIntUnaryOp(this.Not, e => 0 == e ? 1 : 0), this.AddIntBinaryOp(this.And, (e, t) => 0 != e && 0 != t ? 1 : 0), this.AddIntBinaryOp(this.Or, (e, t) => 0 != e || 0 != t ? 1 : 0), this.AddIntBinaryOp(this.Max, (e, t) => Math.max(e, t)), this.AddIntBinaryOp(this.Min, (e, t) => Math.min(e, t)), this.AddFloatBinaryOp(this.Add, (e, t) => e + t), this.AddFloatBinaryOp(this.Subtract, (e, t) => e - t), this.AddFloatBinaryOp(this.Multiply, (e, t) => e * t), this.AddFloatBinaryOp(this.Divide, (e, t) => e / t), this.AddFloatBinaryOp(this.Mod, (e, t) => e % t), this.AddFloatUnaryOp(this.Negate, e => -e), this.AddFloatBinaryOp(this.Equal, (e, t) => e == t ? 1 : 0), this.AddFloatBinaryOp(this.Greater, (e, t) => e > t ? 1 : 0), this.AddFloatBinaryOp(this.Less, (e, t) => e < t ? 1 : 0), this.AddFloatBinaryOp(this.GreaterThanOrEquals, (e, t) => e >= t ? 1 : 0), this.AddFloatBinaryOp(this.LessThanOrEquals, (e, t) => e <= t ? 1 : 0), this.AddFloatBinaryOp(this.NotEquals, (e, t) => e != t ? 1 : 0), this.AddFloatUnaryOp(this.Not, e => 0 == e ? 1 : 0), this.AddFloatBinaryOp(this.And, (e, t) => 0 != e && 0 != t ? 1 : 0), this.AddFloatBinaryOp(this.Or, (e, t) => 0 != e || 0 != t ? 1 : 0), this.AddFloatBinaryOp(this.Max, (e, t) => Math.max(e, t)), this.AddFloatBinaryOp(this.Min, (e, t) => Math.min(e, t)), this.AddStringBinaryOp(this.Add, (e, t) => e + t), this.AddStringBinaryOp(this.Equal, (e, t) => e === t ? 1 : 0), this.AddStringBinaryOp(this.NotEquals, (e, t) => e !== t ? 1 : 0), this.AddListBinaryOp(this.Add, (e, t) => e.Union(t)), this.AddListBinaryOp(this.Subtract, (e, t) => e.Without(t)), this.AddListBinaryOp(this.Has, (e, t) => e.Contains(t) ? 1 : 0), this.AddListBinaryOp(this.Hasnt, (e, t) => e.Contains(t) ? 0 : 1), this.AddListBinaryOp(this.Intersect, (e, t) => e.Intersect(t)), this.AddListBinaryOp(this.Equal, (e, t) => e.Equals(t) ? 1 : 0), this.AddListBinaryOp(this.Greater, (e, t) => e.GreaterThan(t) ? 1 : 0), this.AddListBinaryOp(this.Less, (e, t) => e.LessThan(t) ? 1 : 0), this.AddListBinaryOp(this.GreaterThanOrEquals, (e, t) => e.GreaterThanOrEquals(t) ? 1 : 0), this.AddListBinaryOp(this.LessThanOrEquals, (e, t) => e.LessThanOrEquals(t) ? 1 : 0), this.AddListBinaryOp(this.NotEquals, (e, t) => e.Equals(t) ? 0 : 1), this.AddListBinaryOp(this.And, (e, t) => e.Count > 0 && t.Count > 0 ? 1 : 0), this.AddListBinaryOp(this.Or, (e, t) => e.Count > 0 || t.Count > 0 ? 1 : 0), this.AddListUnaryOp(this.Not, e => 0 == e.Count ? 1 : 0), this.AddListUnaryOp(this.Invert, e => e.inverse), this.AddListUnaryOp(this.All, e => e.all), this.AddListUnaryOp(this.ListMin, e => e.MinAsList()), this.AddListUnaryOp(this.ListMax, e => e.MaxAsList()), this.AddListUnaryOp(this.Count, e => e.Count), this.AddListUnaryOp(this.ValueOfList, e => e.maxItem.Value);
                    this.AddOpToNativeFunc(this.Equal, 2, u.DivertTarget, (e, t) => e.Equals(t) ? 1 : 0)
                }
            }
            AddOpFuncForType(e, t) {
                null == this._operationFuncs && (this._operationFuncs = {}), this._operationFuncs[e] = t
            }
            static AddOpToNativeFunc(e, t, n, r) {
                var i = this._nativeFunctions[e];
                i || (i = C.internalConstructor(e, t), this._nativeFunctions[e] = i), i.AddOpFuncForType(n, r)
            }
            static AddIntBinaryOp(e, t) {
                this.AddOpToNativeFunc(e, 2, u.Int, t)
            }
            static AddIntUnaryOp(e, t) {
                this.AddOpToNativeFunc(e, 1, u.Int, t)
            }
            static AddFloatBinaryOp(e, t) {
                this.AddOpToNativeFunc(e, 2, u.Float, t)
            }
            static AddFloatUnaryOp(e, t) {
                this.AddOpToNativeFunc(e, 1, u.Float, t)
            }
            static AddStringBinaryOp(e, t) {
                this.AddOpToNativeFunc(e, 2, u.String, t)
            }
            static AddListBinaryOp(e, t) {
                this.AddOpToNativeFunc(e, 2, u.List, t)
            }
            static AddListUnaryOp(e, t) {
                this.AddOpToNativeFunc(e, 1, u.List, t)
            }
            toString() {
                return "Native '" + this.name + "'"
            }
        }
        C.Add = "+", C.Subtract = "-", C.Divide = "/", C.Multiply = "*", C.Mod = "%", C.Negate = "_", C.Equal = "==", C.Greater = ">", C.Less = "<", C.GreaterThanOrEquals = ">=", C.LessThanOrEquals = "<=", C.NotEquals = "!=", C.Not = "!", C.And = "&&", C.Or = "||", C.Min = "MIN", C.Max = "MAX", C.Has = "?", C.Hasnt = "!?", C.Intersect = "^", C.ListMin = "LIST_MIN", C.ListMax = "LIST_MAX", C.All = "LIST_ALL", C.Count = "LIST_COUNT", C.ValueOfList = "LIST_VALUE", C.Invert = "LIST_INVERT", C._nativeFunctions = null;
        class O extends r {
            constructor(e) {
                super(), this._text = e.toString() || ""
            }
            get text() {
                return this._text
            }
            toString() {
                return "# " + this._text
            }
        }
        class x {
            constructor(e) {
                this.text, this.index, this.choicePoint, this.threadAtGeneration, this._originalThreadIndex, this._originalChoicePath, e && (this.choicePoint = e)
            }
            get pathStringOnChoice() {
                return this.choicePoint.pathStringOnChoice
            }
            get sourcePath() {
                return this.choicePoint.path.componentsString
            }
        }
        class E {
            constructor(e, t) {
                this._name = e || "", this._items = null, this._rawListItemsKeys = null, this._itemNameToValues = t || {}
            }
            get name() {
                return this._name
            }
            get items() {
                if (null == this._items) {
                    this._items = {}, this._rawListItemsKeys = {};
                    for (var e in this._itemNameToValues) {
                        var t = new a(this.name, e);
                        this._rawListItemsKeys[t] = t, this._items[t] = this._itemNameToValues[e]
                    }
                }
                return this._items.forEach = this.forEachItems.bind(this), this._items
            }
            forEachItems(e) {
                for (var t in this._rawListItemsKeys) e({
                    Key: this._rawListItemsKeys[t],
                    Value: this._items[t]
                })
            }
            ValueForItem(e) {
                var t = this._itemNameToValues[e.itemName];
                return void 0 !== t ? t : 0
            }
            ContainsItem(e) {
                return e.originName == this.name && e.itemName in this._itemNameToValues
            }
            ContainsItemWithName(e) {
                return void 0 !== this._itemNameToValues[e]
            }
            TryGetItemWithValue(e, t) {
                for (var n in this._itemNameToValues)
                    if (this._itemNameToValues[n] == e) return t = new a(this.name, n), {
                        item: t,
                        exists: !0
                    };
                return t = a.Null, {
                    item: t,
                    exists: !1
                }
            }
            TryGetValueForItem(e, t) {
                return intVal = this._itemNameToValues[e.itemName], intVal
            }
            ListRange(e, t) {
                var n = new s;
                for (var r in this._itemNameToValues)
                    if (this._itemNameToValues[r] >= e && this._itemNameToValues[r] <= t) {
                        var i = new a(this.name, r);
                        n.Add(i, this._itemNameToValues[r])
                    } return new m(n)
            }
        }
        class j {
            constructor(e) {
                this._lists = {}, e.forEach(e => {
                    this._lists[e.name] = e
                })
            }
            get lists() {
                var e = [];
                for (var t in this._lists) e.push(this._lists[t]);
                return e
            }
            TryGetDefinition(e, t) {
                return e in this._lists ? this._lists[e] : t
            }
            FindSingleItemListWithName(e) {
                var t = a.Null,
                    n = null,
                    r = e.split(".");
                if (2 == r.length) t = new a(r[0], r[1]), n = this.TryGetDefinition(t.originName, n);
                else
                    for (var i in this._lists) {
                        var o = this._lists[i];
                        if (t = new a(i, e), o.ContainsItem(t)) {
                            n = o;
                            break
                        }
                    }
                if (null != n) {
                    var s = n.ValueForItem(t);
                    return new m(t, s)
                }
                return null
            }
        }
        class P {
            static ListToJArray(e) {
                var t = [];
                return e.forEach(e => {
                    t.push(this.RuntimeObjectToJToken(e))
                }), t
            }
            static JArrayToRuntimeObjList(e, t) {
                var n = e.length;
                t && n--;
                for (var r = [], i = 0; i < n; i++) {
                    var o = e[i],
                        a = this.JTokenToRuntimeObject(o);
                    r.push(a)
                }
                return r
            }
            static JObjectToDictionaryRuntimeObjs(e) {
                var t = {};
                for (var n in e) t[n] = this.JTokenToRuntimeObject(e[n]);
                return t
            }
            static DictionaryRuntimeObjsToJObject(e) {
                var t = {};
                for (var n in e) {
                    var i = e[n];
                    i instanceof r && (t[n] = this.RuntimeObjectToJToken(i))
                }
                return t
            }
            static JObjectToIntDictionary(e) {
                var t = {};
                for (var n in e) t[n] = parseInt(e[n]);
                return t
            }
            static IntDictionaryToJObject(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }
            static JTokenToRuntimeObject(e) {
                if (!isNaN(e) && "\n" !== e) return c.Create(e);
                if ("string" == typeof e) {
                    var n = e.toString(),
                        r = n[0];
                    if ("^" == r) return new f(n.substring(1));
                    if ("\n" == r && 1 == n.length) return new f("\n");
                    if ("<>" == n) return new v(b.Bidirectional);
                    if ("G<" == n) return new v(b.Left);
                    if ("G>" == n) return new v(b.Right);
                    for (var i = 0; i < A.length; ++i) {
                        if (n == A[i]) return new M(i)
                    }
                    if ("L^" == n && (n = "^"), C.CallExistsWithName(n)) return C.CallWithName(n);
                    if ("->->" == n) return M.PopTunnel();
                    if ("~ret" == n) return M.PopFunction();
                    if ("void" == n) return new D
                }
                if ("object" == typeof e && e instanceof Array == !1) {
                    var o, u = e;
                    if (u["^->"]) return o = u["^->"], new p(new t(o.toString()));
                    if (u["^var"]) {
                        o = u["^var"];
                        var l = new _(o.toString());
                        return u.ci && (o = u.ci, l.contextIndex = parseInt(o)), l
                    }
                    var d = !1,
                        h = !1,
                        y = L.Function,
                        g = !1;
                    if ((o = u["->"]) ? d = !0 : (o = u["f()"]) ? (d = !0, h = !0, y = L.Function) : (o = u["->t->"]) ? (d = !0, h = !0, y = L.Tunnel) : (o = u["x()"]) && (d = !0, g = !0, h = !1, y = L.Function), d) {
                        var w = new k;
                        w.pushesToStack = h, w.stackPushType = y, w.isExternal = g;
                        var x = o.toString();
                        return (o = u.var) ? w.variableDivertName = x : w.targetPathString = x, w.isConditional = !!u.c, g && (o = u.exArgs) && (w.externalArgs = parseInt(o)), w
                    }
                    if (o = u["*"]) {
                        var E = new T;
                        return E.pathStringOnChoice = o.toString(), (o = u.flg) && (E.flags = parseInt(o)), E
                    }
                    if (o = u["VAR?"]) return new Y(o.toString());
                    if (o = u["CNT?"]) {
                        var j = new Y;
                        return j.pathStringForCount = o.toString(), j
                    }
                    var P = !1,
                        H = !1;
                    if ((o = u["VAR="]) ? (P = !0, H = !0) : (o = u["temp="]) && (P = !0, H = !1), P) {
                        var I = o.toString(),
                            N = !u.re,
                            V = new S(I, N);
                        return V.isGlobal = H, V
                    }
                    if (void 0 !== u["#"]) return o = u["#"], new O(o.toString());
                    if (o = u.list) {
                        var F = o,
                            R = new s;
                        if (o = u.origins) {
                            var W = o;
                            R.SetInitialOriginNames(W)
                        }
                        for (var z in F) {
                            var G = F[z],
                                U = new a(z),
                                B = parseInt(G);
                            R.Add(U, B)
                        }
                        return new m(R)
                    }
                    if (null != u.originalChoicePath) return this.JObjectToChoice(u)
                }
                if (e instanceof Array) return this.JArrayToContainer(e);
                if (null == e) return null;
                throw "Failed to convert token to runtime object: " + JSON.stringify(e)
            }
            static RuntimeObjectToJToken(e) {
                var t = e;
                if (t instanceof g) return this.ContainerToJArray(t);
                var n = e;
                if (n instanceof k) {
                    var r = "->";
                    n.isExternal ? r = "x()" : n.pushesToStack && (n.stackPushType == L.Function ? r = "f()" : n.stackPushType == L.Tunnel && (r = "->t->"));
                    var i;
                    i = n.hasVariableTarget ? n.variableDivertName : n.targetPathString;
                    return (w = {})[r] = i, n.hasVariableTarget && (w.var = !0), n.isConditional && (w.c = !0), n.externalArgs > 0 && (w.exArgs = n.externalArgs), w
                }
                var o = e;
                if (o instanceof T) {
                    return (w = {})["*"] = o.pathStringOnChoice, w.flg = o.flags, w
                }
                if (e instanceof d) return e.value;
                if (e instanceof h) return e.value;
                var a = e;
                if (a instanceof f) return a.isNewline ? "\n" : "^" + a.value;
                var s = e;
                if (s instanceof m) return this.InkListToJObject(s);
                if (e instanceof p) return {
                    "^->": e.value.componentsString
                };
                var u = e;
                if (u instanceof _) return {
                    "^var": u.value,
                    ci: u.contextIndex
                };
                var l = e;
                if (l instanceof v) return l.isBi ? "<>" : l.isLeft ? "G<" : "G>";
                var c = e;
                if (c instanceof M) return A[parseInt(c.commandType)];
                if (e instanceof C) {
                    var y = e.name;
                    return "^" == y && (y = "L^"), y
                }
                var b = e;
                if (b instanceof Y) {
                    var w = {},
                        E = b.pathStringForCount;
                    return null != E ? w["CNT?"] = E : w["VAR?"] = b.name, w
                }
                var j = e;
                if (j instanceof S) {
                    return (w = {})[j.isGlobal ? "VAR=" : "temp="] = j.variableName, j.isNewDeclaration || (w.re = !0), w
                }
                if (e instanceof D) return "void";
                if (e instanceof O) {
                    return (w = {})["#"] = e.text, w
                }
                var P = e;
                if (P instanceof x) return this.ChoiceToJObject(P);
                throw "Failed to convert runtime object to Json token: " + e
            }
            static ContainerToJArray(e) {
                var t = this.ListToJArray(e.content),
                    n = e.namedOnlyContent,
                    r = e.countFlags;
                if (null != n && n.length > 0 || r > 0 || null != e.name) {
                    var i;
                    if (null != n) {
                        i = this.DictionaryRuntimeObjsToJObject(n);
                        for (var o in i) {
                            var a = i[o];
                            if (null != a) {
                                var s = a[a.length - 1];
                                null != s && (delete s["#n"], 0 == Object.keys(s).length && (a[a.length - 1] = null))
                            }
                        }
                    } else i = {};
                    r > 0 && (i["#f"] = r), null != e.name && (i["#n"] = e.name), t.push(i)
                } else t.push(null);
                return t
            }
            static JArrayToContainer(e) {
                var t = new g;
                t.content = this.JArrayToRuntimeObjList(e, !0);
                var n = e[e.length - 1];
                if (null != n) {
                    var r = {};
                    for (var i in n)
                        if ("#f" == i) t.countFlags = parseInt(n[i]);
                        else if ("#n" == i) t.name = n[i].toString();
                    else {
                        var o = this.JTokenToRuntimeObject(n[i]);
                        o instanceof g && (o.name = i), r[i] = o
                    }
                    t.namedOnlyContent = r
                }
                return t
            }
            static JObjectToChoice(e) {
                var t = new x;
                return t.text = e.text.toString(), t.index = parseInt(e.index), t.originalChoicePath = e.originalChoicePath.toString(), t.originalThreadIndex = parseInt(e.originalThreadIndex), t
            }
            static ChoiceToJObject(e) {
                var t = {};
                return t.text = e.text, t.index = e.index, t.originalChoicePath = e.originalChoicePath, t.originalThreadIndex = e.originalThreadIndex, t
            }
            static InkListToJObject(e) {
                var t = e.value,
                    n = {},
                    r = {};
                return t.forEach(function(e) {
                    var t = e.Key,
                        n = e.Value;
                    r[t.toString()] = n
                }), n.list = r, 0 == t.Count && null != t.originNames && t.originNames.length > 0 && (n.origins = t.originNames), n
            }
            static ListDefinitionsToJToken(e) {
                var t = {};
                return e.lists.forEach(function(e) {
                    var n = {};
                    e.items.forEach(function(e) {
                        var t = e.Key,
                            r = e.Value;
                        n[t.itemName] = r
                    }), t[e.name] = n
                }), t
            }
            static JTokenToListDefinitions(e) {
                var t = e,
                    n = [];
                for (var r in t) {
                    var i = r.toString(),
                        o = t[r],
                        a = {};
                    for (var s in o) {
                        var u = o[s];
                        a[s] = parseInt(u)
                    }
                    var l = new E(i, a);
                    n.push(l)
                }
                return new j(n)
            }
        }
        var A = [];
        A[M.CommandType.EvalStart] = "ev", A[M.CommandType.EvalOutput] = "out", A[M.CommandType.EvalEnd] = "/ev", A[M.CommandType.Duplicate] = "du", A[M.CommandType.PopEvaluatedValue] = "pop", A[M.CommandType.PopFunction] = "~ret", A[M.CommandType.PopTunnel] = "->->", A[M.CommandType.BeginString] = "str", A[M.CommandType.EndString] = "/str", A[M.CommandType.NoOp] = "nop", A[M.CommandType.ChoiceCount] = "choiceCnt", A[M.CommandType.TurnsSince] = "turns", A[M.CommandType.ReadCount] = "readc", A[M.CommandType.Random] = "rnd", A[M.CommandType.SeedRandom] = "srnd", A[M.CommandType.VisitIndex] = "visit", A[M.CommandType.SequenceShuffleIndex] = "seq", A[M.CommandType.StartThread] = "thread", A[M.CommandType.Done] = "done", A[M.CommandType.End] = "end", A[M.CommandType.ListFromInt] = "listInt", A[M.CommandType.ListRange] = "range";
        for (var H = 0; H < M.CommandType.TOTAL_VALUES; ++H)
            if (null == A[H]) throw "Control command not accounted for in serialisation";
        class I {
            constructor(e, t, n, r) {
                this.currentContainer = t, this.currentContentIndex = n, this.inExpressionEvaluation = r || !1, this.temporaryVariables = {}, this.type = e
            }
            get currentObject() {
                return this.currentContainer && this.currentContentIndex < this.currentContainer.content.length ? this.currentContainer.content[this.currentContentIndex] : null
            }
            set currentObject(e) {
                var t = e;
                if (null == t) return this.currentContainer = null, void(this.currentContentIndex = 0);
                this.currentContainer = t.parent, this.currentContainer instanceof g && (this.currentContentIndex = this.currentContainer.content.indexOf(t)), this.currentContainer instanceof g != !1 && -1 != this.currentContentIndex || (this.currentContainer = t, this.currentContentIndex = 0)
            }
            Copy() {
                var e = new I(this.type, this.currentContainer, this.currentContentIndex, this.inExpressionEvaluation);
                return Object.assign(e.temporaryVariables, this.temporaryVariables), e
            }
        }
        class N {
            constructor(e, n) {
                if (this.callstack = [], this.threadIndex = 0, this.previousContentObject = null, e && n) {
                    var r = e;
                    this.threadIndex = parseInt(r.threadIndex);
                    r.callstack.forEach(e => {
                        var r = e,
                            i = parseInt(r.type),
                            o = null,
                            a = 0,
                            s = null,
                            u = r.cPath;
                        void 0 !== u && (s = u.toString(), o = n.ContentAtPath(new t(s)), a = parseInt(r.idx));
                        var l = !!r.exp,
                            c = new I(i, o, a, l),
                            d = r.temp;
                        c.temporaryVariables = P.JObjectToDictionaryRuntimeObjs(d), this.callstack.push(c)
                    });
                    var i = r.previousContentObject;
                    if (void 0 !== i) {
                        var o = new t(i.toString());
                        this.previousContentObject = n.ContentAtPath(o)
                    }
                }
            }
            get jsonToken() {
                var e = {},
                    t = [];
                return this.callstack.forEach(e => {
                    var n = {};
                    e.currentContainer && (n.cPath = e.currentContainer.path.componentsString, n.idx = e.currentContentIndex), n.exp = e.inExpressionEvaluation, n.type = parseInt(e.type), n.temp = P.DictionaryRuntimeObjsToJObject(e.temporaryVariables), t.push(n)
                }), e.callstack = t, e.threadIndex = this.threadIndex, null != this.previousContentObject && (e.previousContentObject = this.previousContentObject.path.toString()), e
            }
            Copy() {
                var e = new N;
                return e.threadIndex = this.threadIndex, this.callstack.forEach(t => {
                    e.callstack.push(t.Copy())
                }), e.previousContentObject = this.previousContentObject, e
            }
        }
        class V {
            constructor(e) {
                this._threads = [], this._threadCounter = 0, this._threads.push(new N), e instanceof V ? (this._threads = [], e._threads.forEach(e => {
                    this._threads.push(e.Copy())
                })) : this._threads[0].callstack.push(new I(L.Tunnel, e, 0))
            }
            get currentThread() {
                return this._threads[this._threads.length - 1]
            }
            set currentThread(e) {
                1 != this._threads.length && console.warn("Shouldn't be directly setting the current thread when we have a stack of them"), this._threads.length = 0, this._threads.push(e)
            }
            get callStack() {
                return this.currentThread.callstack
            }
            get elements() {
                return this.callStack
            }
            get depth() {
                return this.elements.length
            }
            get currentElement() {
                return this.callStack[this.callStack.length - 1]
            }
            get currentElementIndex() {
                return this.callStack.length - 1
            }
            get canPop() {
                return this.callStack.length > 1
            }
            get canPopThread() {
                return this._threads.length > 1
            }
            CanPop(e) {
                return !!this.canPop && (null == e || this.currentElement.type == e)
            }
            Pop(e) {
                if (!this.CanPop(e)) throw "Mismatched push/pop in Callstack";
                this.callStack.pop()
            }
            Push(e) {
                this.callStack.push(new I(e, this.currentElement.currentContainer, this.currentElement.currentContentIndex, !1))
            }
            PushThread() {
                var e = this.currentThread.Copy();
                this._threadCounter++, e.threadIndex = this._threadCounter, this._threads.push(e)
            }
            PopThread() {
                if (!this.canPopThread) throw "Can't pop thread";
                this._threads.splice(this._threads.indexOf(this.currentThread), 1)
            }
            SetJsonToken(e, t) {
                this._threads.length = 0;
                var n = e;
                n.threads.forEach(e => {
                    var n = new N(e, t);
                    this._threads.push(n)
                }), this._threadCounter = parseInt(n.threadCounter)
            }
            GetJsonToken() {
                var e = {},
                    t = [];
                return this._threads.forEach(e => {
                    t.push(e.jsonToken)
                }), e.threads = t, e.threadCounter = this._threadCounter, e
            }
            GetTemporaryVariableWithName(e, t) {
                -1 == (t = void 0 === t ? -1 : t) && (t = this.currentElementIndex + 1);
                var n = null;
                return (n = this.callStack[t - 1].temporaryVariables[e]) ? n : null
            }
            SetTemporaryVariable(e, t, n, r) {
                -1 == (r = void 0 === r ? -1 : r) && (r = this.currentElementIndex + 1);
                var i = this.callStack[r - 1];
                if (!n && !i.temporaryVariables[e]) throw new y("Could not find temporary variable to set: " + e);
                var o;
                (o = i.temporaryVariables[e]) && m.RetainListOriginsForAssignment(o, t), i.temporaryVariables[e] = t
            }
            ContextForVariableNamed(e) {
                return this.currentElement.temporaryVariables[e] ? this.currentElementIndex + 1 : 0
            }
            ThreadWithIndex(e) {
                return this._threads.filter(t => {
                    if (t.threadIndex == e) return t
                })[0]
            }
        }
        class F {
            constructor(e, t) {
                this._globalVariables = {}, this._callStack = e, this._listDefsOrigin = t, this._batchObservingVariableChanges = null, this._changedVariables = null, this.variableChangedEvent = null, this.variableChangedEventCallbacks = [];
                try {
                    return new Proxy(this, {
                        get: function(e, t) {
                            return t in e ? e[t] : e.$(t)
                        },
                        set: function(e, t, n) {
                            return t in e ? e[t] = n : e.$(t, n), !0
                        }
                    })
                } catch (e) {}
            }
            get callStack() {
                return this._callStack
            }
            set callStack(e) {
                this._callStack = e
            }
            get batchObservingVariableChanges() {
                return this._batchObservingVariableChanges
            }
            set batchObservingVariableChanges(e) {
                e = !!e, this._batchObservingVariableChanges = e, e ? this._changedVariables = [] : (null != this._changedVariables && this._changedVariables.forEach(e => {
                    var t = this._globalVariables[e];
                    this.variableChangedEvent(e, t)
                }), this._changedVariables = null)
            }
            get jsonToken() {
                return P.DictionaryRuntimeObjsToJObject(this._globalVariables)
            }
            set jsonToken(e) {
                this._globalVariables = P.JObjectToDictionaryRuntimeObjs(e)
            }
            ObserveVariableChange(e) {
                null == this.variableChangedEvent && (this.variableChangedEvent = ((e, t) => {
                    this.variableChangedEventCallbacks.forEach(n => {
                        n(e, t)
                    })
                })), this.variableChangedEventCallbacks.push(e)
            }
            CopyFrom(e) {
                this._globalVariables = Object.assign({}, e._globalVariables), this.variableChangedEvent = e.variableChangedEvent, e.batchObservingVariableChanges != this.batchObservingVariableChanges && (e.batchObservingVariableChanges ? (this._batchObservingVariableChanges = !0, this._changedVariables = e._changedVariables) : (this._batchObservingVariableChanges = !1, this._changedVariables = null))
            }
            GetVariableWithName(e, t) {
                void 0 === t && (t = -1);
                var n = this.GetRawVariableWithName(e, t),
                    r = n;
                return r instanceof _ && (n = this.ValueAtVariablePointer(r)), n
            }
            GetRawVariableWithName(e, t) {
                var n = null;
                if (0 == t || -1 == t) {
                    if (n = this._globalVariables[e]) return n;
                    var r = this._listDefsOrigin.FindSingleItemListWithName(e);
                    if (r) return r
                }
                if (null == (n = this._callStack.GetTemporaryVariableWithName(e, t))) throw "RUNTIME ERROR: Variable '" + e + "' could not be found in context '" + t + "'. This shouldn't be possible so is a bug in the ink engine. Please try to construct a minimal story that reproduces the problem and report to inkle, thank you!";
                return n
            }
            ValueAtVariablePointer(e) {
                return this.GetVariableWithName(e.variableName, e.contextIndex)
            }
            Assign(e, t) {
                var n = e.variableName,
                    r = -1,
                    i = !1;
                if (i = e.isNewDeclaration ? e.isGlobal : !!this._globalVariables[n], e.isNewDeclaration) {
                    var o = t;
                    if (o instanceof _) {
                        t = this.ResolveVariablePointer(o)
                    }
                } else {
                    var a = null;
                    do {
                        (a = this.GetRawVariableWithName(n, r)) instanceof _ && (n = a.variableName, i = 0 == (r = a.contextIndex))
                    } while (a instanceof _)
                }
                i ? this.SetGlobal(n, t) : this._callStack.SetTemporaryVariable(n, t, e.isNewDeclaration, r)
            }
            RetainListOriginsForAssignment(e, t) {
                var n = e,
                    r = t;
                n instanceof m && r instanceof m && 0 == r.value.Count && r.value.SetInitialOriginNames(n.value.originNames)
            }
            SetGlobal(e, t) {
                var n = null;
                n = this._globalVariables[e], m.RetainListOriginsForAssignment(n, t), this._globalVariables[e] = t, null != this.variableChangedEvent && t !== n && (this.batchObservingVariableChanges ? this._changedVariables.push(e) : this.variableChangedEvent(e, t))
            }
            ResolveVariablePointer(e) {
                var t = e.contextIndex; - 1 == t && (t = this.GetContextIndexOfVariableNamed(e.variableName));
                var n = this.GetRawVariableWithName(e.variableName, t);
                return n instanceof _ ? n : new _(e.variableName, t)
            }
            GetContextIndexOfVariableNamed(e) {
                return this._globalVariables[e] ? 0 : this._callStack.currentElementIndex
            }
            $(e, t) {
                if (void 0 === t) {
                    var n = this._globalVariables[e];
                    return void 0 !== n ? n.valueObject : null
                }
                if (void 0 === this._globalVariables[e]) throw new y("Variable '" + e + "' doesn't exist, so can't be set.");
                var r = c.Create(t);
                if (null == r) throw new y(null == t ? "Cannot pass null to VariableState" : "Invalid value passed to VariableState: " + t.toString());
                this.SetGlobal(e, r)
            }
        }
        class R {
            constructor(e) {
                this._seed = e % 2147483647, this._seed <= 0 && (this._seed += 2147483646)
            }
            next() {
                return this._seed = 16807 * this._seed % 2147483647
            }
            nextFloat() {
                return (this.next() - 1) / 2147483646
            }
        }
        class W {
            constructor(e) {
                this.story = e, this._outputStream = [], this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0, this.OutputStreamDirty(), this._evaluationStack = [], this.callStack = new V(e.rootContentContainer), this._variablesState = new F(this.callStack, e.listDefinitions), this._visitCounts = {}, this._turnIndices = {}, this._currentTurnIndex = -1, this.divertedTargetObject = null;
                var t = (new Date).getTime();
                this.storySeed = new R(t).next() % 100, this.previousRandom = 0, this._currentChoices = [], this._currentText = null, this._currentTags = null, this._currentErrors = null, this.didSafeExit = !1, this._isExternalFunctionEvaluation = !1, this._originalCallstack = null, this._originalEvaluationStackHeight = 0, this.GoToStart()
            }
            get currentChoices() {
                return this.canContinue ? [] : this._currentChoices
            }
            get generatedChoices() {
                return this._currentChoices
            }
            get currentErrors() {
                return this._currentErrors
            }
            get visitCounts() {
                return this._visitCounts
            }
            get turnIndices() {
                return this._turnIndices
            }
            get currentTurnIndex() {
                return this._currentTurnIndex
            }
            get variablesState() {
                return this._variablesState
            }
            get currentContentObject() {
                return this.callStack.currentElement.currentObject
            }
            set currentContentObject(e) {
                this.callStack.currentElement.currentObject = e
            }
            get canContinue() {
                return null != this.currentContentObject && !this.hasError
            }
            get hasError() {
                return null != this.currentErrors && this.currentErrors.length > 0
            }
            get inExpressionEvaluation() {
                return this.callStack.currentElement.inExpressionEvaluation
            }
            set inExpressionEvaluation(e) {
                this.callStack.currentElement.inExpressionEvaluation = e
            }
            get evaluationStack() {
                return this._evaluationStack
            }
            get outputStreamEndsInNewline() {
                if (this._outputStream.length > 0)
                    for (var e = this._outputStream.length - 1; e >= 0; e--) {
                        if (this._outputStream[e] instanceof M) break;
                        var t = this._outputStream[e];
                        if (t instanceof f) {
                            if (t.isNewline) return !0;
                            if (t.isNonWhitespace) break
                        }
                    }
                return !1
            }
            get outputStreamContainsContent() {
                for (var e = 0; e < this._outputStream.length; e++)
                    if (this._outputStream[e] instanceof f) return !0;
                return !1
            }
            get currentGlueIndex() {
                for (var e = this._outputStream.length - 1; e >= 0; e--) {
                    var t = this._outputStream[e];
                    if (t instanceof v) return e;
                    if (t instanceof M) break
                }
                return -1
            }
            get currentRightGlue() {
                for (var e = this._outputStream.length - 1; e >= 0; e--) {
                    var t = this._outputStream[e],
                        n = t;
                    if (n instanceof v && n.isRight) return n;
                    if (t instanceof M) break
                }
                return null
            }
            get inStringEvaluation() {
                for (var e = this._outputStream.length - 1; e >= 0; e--) {
                    var t = this._outputStream[e];
                    if (t instanceof M && t.commandType == M.CommandType.BeginString) return !0
                }
                return !1
            }
            get currentText() {
                if (this._outputStreamTextDirty) {
                    var e = new o;
                    this._outputStream.forEach(t => {
                        var n = t;
                        n instanceof f && e.Append(n.value)
                    }), this._currentText = e.toString(), this._outputStreamTextDirty = !1
                }
                return this._currentText
            }
            get currentTags() {
                return this._outputStreamTagsDirty && (this._currentTags = [], this._outputStream.forEach(e => {
                    var t = e;
                    t instanceof O && this._currentTags.push(t.text)
                }), this._outputStreamTagsDirty = !1), this._currentTags
            }
            get outputStream() {
                return this._outputStream
            }
            get currentPath() {
                return null == this.currentContentObject ? null : this.currentContentObject.path
            }
            set currentPath(e) {
                this.currentContentObject = null != e ? this.story.ContentAtPath(e) : null
            }
            get currentContainer() {
                return this.callStack.currentElement.currentContainer
            }
            get previousContentObject() {
                return this.callStack.currentThread.previousContentObject
            }
            set previousContentObject(e) {
                this.callStack.currentThread.previousContentObject = e
            }
            get callstackDepth() {
                return this.callStack.depth
            }
            get jsonToken() {
                var e = {},
                    t = null;
                return this._currentChoices.forEach(e => {
                    e.originalChoicePath = e.choicePoint.path.componentsString, e.originalThreadIndex = e.threadAtGeneration.threadIndex, null == this.callStack.ThreadWithIndex(e.originalThreadIndex) && (null == t && (t = {}), t[e.originalThreadIndex.toString()] = e.threadAtGeneration.jsonToken)
                }), null != this.choiceThreads && (e.choiceThreads = this.choiceThreads), e.callstackThreads = this.callStack.GetJsonToken(), e.variablesState = this.variablesState.jsonToken, e.evalStack = P.ListToJArray(this.evaluationStack), e.outputStream = P.ListToJArray(this._outputStream), e.currentChoices = P.ListToJArray(this._currentChoices), null != this.divertedTargetObject && (e.currentDivertTarget = this.divertedTargetObject.path.componentsString), e.visitCounts = P.IntDictionaryToJObject(this.visitCounts), e.turnIndices = P.IntDictionaryToJObject(this.turnIndices), e.turnIdx = this.currentTurnIndex, e.storySeed = this.storySeed, e.inkSaveVersion = W.kInkSaveStateVersion, e.inkFormatVersion = this.story.inkVersionCurrent, e
            }
            set jsonToken(e) {
                var n = e,
                    r = n.inkSaveVersion;
                if (null == r) throw new y("ink save format incorrect, can't load.");
                if (parseInt(r) < W.kMinCompatibleLoadVersion) throw new y("Ink save format isn't compatible with the current version (saw '" + r + "', but minimum is " + W.kMinCompatibleLoadVersion + "), so can't load.");
                this.callStack.SetJsonToken(n.callstackThreads, this.story), this.variablesState.jsonToken = n.variablesState, this._evaluationStack = P.JArrayToRuntimeObjList(n.evalStack), this._outputStream = P.JArrayToRuntimeObjList(n.outputStream), this.OutputStreamDirty(), this._currentChoices = P.JArrayToRuntimeObjList(n.currentChoices);
                var i = n.currentDivertTarget;
                if (null != i) {
                    var o = new t(i.toString());
                    this.divertedTargetObject = this.story.ContentAtPath(o)
                }
                this._visitCounts = P.JObjectToIntDictionary(n.visitCounts), this._turnIndices = P.JObjectToIntDictionary(n.turnIndices), this._currentTurnIndex = parseInt(n.turnIdx), this.storySeed = parseInt(n.storySeed);
                var a = n.choiceThreads;
                this._currentChoices.forEach(e => {
                    e.choicePoint = this.story.ContentAtPath(new t(e.originalChoicePath));
                    var n = this.callStack.ThreadWithIndex(e.originalThreadIndex);
                    if (null != n) e.threadAtGeneration = n;
                    else {
                        var r = a[e.originalThreadIndex.toString()];
                        e.threadAtGeneration = new V.Thread(r, this.story)
                    }
                })
            }
            MatchRightGlueForLeftGlue(e) {
                if (!e.isLeft) return null;
                for (var t = this._outputStream.length - 1; t >= 0; t--) {
                    var n = this._outputStream[t],
                        r = n;
                    if (r instanceof v && r.isRight && r.parent == e.parent) return r;
                    if (n instanceof M) break
                }
                return null
            }
            GoToStart() {
                this.callStack.currentElement.currentContainer = this.story.mainContentContainer, this.callStack.currentElement.currentContentIndex = 0
            }
            ResetErrors() {
                this._currentErrors = null
            }
            ResetOutput() {
                this._outputStream.length = 0, this.OutputStreamDirty()
            }
            PushEvaluationStack(e) {
                if (e instanceof m) {
                    var t = e.value,
                        n = t.originNames;
                    if (null != n) {
                        var r = [];
                        n.forEach(e => {
                            var t = null;
                            t = this.story.listDefinitions.TryGetDefinition(e, t), r.indexOf(t) < 0 && r.push(t)
                        }), t.origins = r
                    }
                }
                this.evaluationStack.push(e)
            }
            PopEvaluationStack(e) {
                if (e) {
                    if (e > this.evaluationStack.length) throw "trying to pop too many objects";
                    return this.evaluationStack.splice(this.evaluationStack.length - e, e)
                }
                return this.evaluationStack.pop()
            }
            PeekEvaluationStack() {
                return this.evaluationStack[this.evaluationStack.length - 1]
            }
            PushToOutputStream(e) {
                var t = e;
                if (t instanceof f) {
                    var n = this.TrySplittingHeadTailWhitespace(t);
                    if (null != n) return void n.forEach(e => {
                        this.PushToOutputStreamIndividual(e)
                    })
                }
                this.PushToOutputStreamIndividual(e), this.OutputStreamDirty()
            }
            TrySplittingHeadTailWhitespace(e) {
                for (var t = e.value, n = -1, r = -1, i = 0; i < t.length; ++i) {
                    if ("\n" != (s = t[i])) {
                        if (" " == s || "\t" == s) continue;
                        break
                    } - 1 == n && (n = i), r = i
                }
                for (var o = -1, a = -1, i = 0; i < t.length; ++i) {
                    var s = t[i];
                    if ("\n" != s) {
                        if (" " == s || "\t" == s) continue;
                        break
                    } - 1 == o && (o = i), a = i
                }
                if (-1 == n && -1 == o) return null;
                var u = [],
                    l = 0,
                    c = t.length;
                if (-1 != n) {
                    if (n > 0) {
                        var d = t.substring(0, n);
                        u.push(d)
                    }
                    u.push(new f("\n")), l = r + 1
                }
                if (-1 != o && (c = a), c > l) {
                    var h = t.substring(l, c - l);
                    u.push(new f(h))
                }
                if (-1 != o && a > r && (u.push(new f("\n")), o < t.length - 1)) {
                    var p = t.Length - o - 1,
                        _ = new f(t.substring(o + 1, p));
                    u.push(_)
                }
                return u
            }
            PushToOutputStreamIndividual(e) {
                var t = e,
                    n = e,
                    r = !0;
                if (t instanceof v) {
                    var i = this.currentRightGlue,
                        o = (!t.isLeft || !i || (t.parent, i.parent), null);
                    t.isLeft && (o = this.MatchRightGlueForLeftGlue(t)), (t.isLeft || t.isBi) && this.TrimNewlinesFromOutputStream(o), r = t.isBi || t.isRight
                } else n instanceof f && (-1 != this.currentGlueIndex ? n.isNewline ? (this.TrimFromExistingGlue(), r = !1) : n.isNonWhitespace && this.RemoveExistingGlue() : n.isNewline && (!this.outputStreamEndsInNewline && this.outputStreamContainsContent || (r = !1)));
                r && (this._outputStream.push(e), this.OutputStreamDirty())
            }
            TrimNewlinesFromOutputStream(e) {
                for (var t = -1, n = -1, r = !1, i = this._outputStream.length - 1; i >= 0;) {
                    var o = this._outputStream[i],
                        a = o,
                        s = o;
                    if (o instanceof M || a instanceof f && a.isNonWhitespace) {
                        if (r = !0, null == e) break
                    } else {
                        if (e && s instanceof v && s == e) {
                            n = i;
                            break
                        }
                        a instanceof f && a.isNewline && !r && (t = i)
                    }
                    i--
                }
                if (t >= 0)
                    for (i = t; i < this._outputStream.length;) {
                        this._outputStream[i] instanceof f ? this._outputStream.splice(i, 1) : i++
                    }
                if (e && n > -1)
                    for (i = n; i < this._outputStream.length;) this._outputStream[i] instanceof v && this._outputStream[i].isRight ? this.outputStream.splice(i, 1) : i++;
                this.OutputStreamDirty()
            }
            TrimFromExistingGlue() {
                for (var e = this.currentGlueIndex; e < this._outputStream.length;) {
                    var t = this._outputStream[e];
                    t instanceof f && !t.isNonWhitespace ? this._outputStream.splice(e, 1) : e++
                }
                this.OutputStreamDirty()
            }
            RemoveExistingGlue() {
                for (var e = this._outputStream.length - 1; e >= 0; e--) {
                    var t = this._outputStream[e];
                    if (t instanceof v) this._outputStream.splice(e, 1);
                    else if (t instanceof M) break
                }
                this.OutputStreamDirty()
            }
            ForceEnd() {
                for (; this.callStack.canPopThread;) this.callStack.PopThread();
                for (; this.callStack.canPop;) this.callStack.Pop();
                this._currentChoices.length = 0, this.currentContentObject = null, this.previousContentObject = null, this.didSafeExit = !0
            }
            SetChosenPath(e) {
                this._currentChoices.length = 0, this.currentPath = e, this._currentTurnIndex++
            }
            StartExternalFunctionEvaluation(e, t) {
                this._originalCallstack = this.callStack, this._originalEvaluationStackHeight = this.evaluationStack.length, this.callStack = new V(e), this.callStack.currentElement.type = L.Function, this._variablesState.callStack = this.callStack, this._isExternalFunctionEvaluation = !0, this.PassArgumentsToEvaluationStack(t)
            }
            PassArgumentsToEvaluationStack(e) {
                if (null != e)
                    for (var t = 0; t < e.length; t++) {
                        if ("number" != typeof e[t] && "string" != typeof e[t]) throw "ink arguments when calling EvaluateFunction / ChoosePathStringWithParameters  must be int, float or string";
                        this.PushEvaluationStack(c.Create(e[t]))
                    }
            }
            TryExitExternalFunctionEvaluation() {
                return !(!this._isExternalFunctionEvaluation || 1 != this.callStack.elements.length || this.callStack.currentElement.type != L.Function) && (this.currentContentObject = null, this.didSafeExit = !0, !0)
            }
            CompleteExternalFunctionEvaluation() {
                for (var e = null; this.evaluationStack.length > this._originalEvaluationStackHeight;) {
                    var t = this.PopEvaluationStack();
                    null == e && (e = t)
                }
                if (this.callStack = this._originalCallstack, this._originalCallstack = null, this._originalEvaluationStackHeight = 0, this._variablesState.callStack = this.callStack, e) {
                    if (e instanceof D) return null;
                    var n = e;
                    return n.valueType == u.DivertTarget ? n.valueObject.toString() : n.valueObject
                }
                return null
            }
            AddError(e) {
                null == this._currentErrors && (this._currentErrors = []), this._currentErrors.push(e)
            }
            OutputStreamDirty() {
                this._outputStreamTextDirty = !0, this._outputStreamTagsDirty = !0
            }
            VisitCountAtPathString(e) {
                var t;
                return (t = this.visitCounts[e]) ? t : 0
            }
            Copy() {
                var e = new W(this.story);
                e.outputStream.push.apply(e.outputStream, this._outputStream), this.OutputStreamDirty(), e._currentChoices.push.apply(e._currentChoices, this._currentChoices), this.hasError && (e.currentErrors = [], e.currentErrors.push.apply(e.currentErrors, this.currentErrors)), e.callStack = new V(this.callStack), this._originalCallstack && (e._originalCallstack = new V(this._originalCallstack)), e._variablesState = new F(e.callStack, this.story.listDefinitions), e.variablesState.CopyFrom(this.variablesState), e.evaluationStack.push.apply(e.evaluationStack, this.evaluationStack), e._originalEvaluationStackHeight = this._originalEvaluationStackHeight, null != this.divertedTargetObject && (e.divertedTargetObject = this.divertedTargetObject), e.previousContentObject = this.previousContentObject, e._isExternalFunctionEvaluation = this._isExternalFunctionEvaluation, e._visitCounts = {};
                for (var t in this._visitCounts) e._visitCounts[t] = this._visitCounts[t];
                e._turnIndices = {};
                for (var t in this._turnIndices) e._turnIndices[t] = this._turnIndices[t];
                return e._currentTurnIndex = this.currentTurnIndex, e.storySeed = this.storySeed, e.previousRandom = this.previousRandom, e.didSafeExit = this.didSafeExit, e
            }
            toJson(e) {
                return JSON.stringify(this.jsonToken, null, e ? 2 : 0)
            }
            LoadJson(e) {
                this.jsonToken = JSON.parse(e)
            }
        }
        W.kInkSaveStateVersion = 7, W.kMinCompatibleLoadVersion = 6, Number.isInteger || (Number.isInteger = function(e) {
            return "number" == typeof e && isFinite(e) && e > -9007199254740992 && e < 9007199254740992 && Math.floor(e) === e
        });
        class z extends r {
            constructor(e, t) {
                if (super(), t = t || null, this.inkVersionCurrent = 17, this.inkVersionMinimumCompatible = 16, this._variableObservers = null, this._externals = {}, this._prevContainerSet = null, this._listDefinitions = null, e instanceof g) this._mainContentContainer = e, null != t && (this._listDefinitions = new j(t));
                else {
                    var n = "string" == typeof e ? JSON.parse(e) : e,
                        r = n.inkVersion;
                    if (null == r) throw "ink version number not found. Are you sure it's a valid .ink.json file?";
                    var i = parseInt(r);
                    if (i > this.inkVersionCurrent) throw "Version of ink used to build story was newer than the current verison of the engine";
                    if (i < this.inkVersionMinimumCompatible) throw "Version of ink used to build story is too old to be loaded by this verison of the engine";
                    i != this.inkVersionCurrent && console.warn("WARNING: Version of ink used to build story doesn't match current version of engine. Non-critical, but recommend synchronising.");
                    var o = n.root;
                    if (null == o) throw "Root node for ink not found. Are you sure it's a valid .ink.json file?";
                    var a;
                    (a = n.listDefs) && (this._listDefinitions = P.JTokenToListDefinitions(a)), this._mainContentContainer = P.JTokenToRuntimeObject(o), this._hasValidatedExternals = null, this.allowExternalFunctionFallbacks = !1, this.ResetState()
                }
            }
            get currentChoices() {
                var e = [];
                return this._state.currentChoices.forEach(t => {
                    t.choicePoint.isInvisibleDefault || (t.index = e.length, e.push(t))
                }), e
            }
            get currentText() {
                return this.state.currentText
            }
            get currentTags() {
                return this.state.currentTags
            }
            get currentErrors() {
                return this.state.currentErrors
            }
            get hasError() {
                return this.state.hasError
            }
            get variablesState() {
                return this.state.variablesState
            }
            get listDefinitions() {
                return this._listDefinitions
            }
            get state() {
                return this._state
            }
            get mainContentContainer() {
                return this._temporaryEvaluationContainer ? this._temporaryEvaluationContainer : this._mainContentContainer
            }
            get canContinue() {
                return this.state.canContinue
            }
            get globalTags() {
                return this.TagsAtStartOfFlowContainerWithPathString("")
            }
            ToJsonString() {
                var e = P.RuntimeObjectToJToken(this._mainContentContainer),
                    t = {};
                return t.inkVersion = this.inkVersionCurrent, t.root = e, null != this._listDefinitions && (t.listDefs = P.ListDefinitionsToJToken(this._listDefinitions)), JSON.stringify(t)
            }
            ResetState() {
                this._state = new W(this), this._state.variablesState.ObserveVariableChange(this.VariableStateDidChangeEvent.bind(this)), this.ResetGlobals()
            }
            ResetErrors() {
                this._state.ResetErrors()
            }
            ResetCallstack() {
                this._state.ForceEnd()
            }
            ResetGlobals() {
                if (this._mainContentContainer.namedContent["global decl"]) {
                    var e = this.state.currentPath;
                    this.ChoosePathString("global decl"), this.ContinueInternal(), this.state.currentPath = e
                }
            }
            Continue() {
                return this._hasValidatedExternals || this.ValidateExternalBindings(), this.ContinueInternal()
            }
            ContinueInternal() {
                if (!this.canContinue) throw new y("Can't continue - should check canContinue before calling Continue");
                this._state.ResetOutput(), this._state.didSafeExit = !1, this._state.variablesState.batchObservingVariableChanges = !0;
                try {
                    var e = null;
                    do {
                        if (this.Step(), this.canContinue || this.TryFollowDefaultInvisibleChoice(), !this.state.inStringEvaluation) {
                            if (null != e) {
                                var t = this.currentText,
                                    n = e.currentText.length,
                                    r = e.currentTags.length;
                                if (t !== e.currentText || r != this.currentTags.length) {
                                    if (t.length >= n && "\n" == t[n - 1]) {
                                        this.RestoreStateSnapshot(e);
                                        break
                                    }
                                    e = null
                                }
                            }
                            this.state.outputStreamEndsInNewline && (this.canContinue ? null == e && (e = this.StateSnapshot()) : e = null)
                        }
                    } while (this.canContinue);
                    null != e && this.RestoreStateSnapshot(e), this.canContinue || (this.state.callStack.canPopThread && this.Error("Thread available to pop, threads should always be flat by the end of evaluation?"), 0 != this.state.generatedChoices.length || this.state.didSafeExit || null != this._temporaryEvaluationContainer || (this.state.callStack.CanPop(L.Tunnel) ? this.Error("unexpectedly reached end of content. Do you need a '->->' to return from a tunnel?") : this.state.callStack.CanPop(L.Function) ? this.Error("unexpectedly reached end of content. Do you need a '~ return'?") : this.state.callStack.canPop ? this.Error("unexpectedly reached end of content for unknown reason. Please debug compiler!") : this.Error("ran out of content. Do you need a '-> DONE' or '-> END'?")))
                } catch (e) {
                    throw e
                } finally {
                    this.state.didSafeExit = !1, this._state.variablesState.batchObservingVariableChanges = !1
                }
                return this.currentText
            }
            ContinueMaximally() {
                for (var e = new o; this.canContinue;) e.Append(this.Continue());
                return e.toString()
            }
            ContentAtPath(e) {
                return this.mainContentContainer.ContentAtPath(e)
            }
            StateSnapshot() {
                return this.state.Copy()
            }
            RestoreStateSnapshot(e) {
                this._state = e
            }
            Step() {
                var e = !0,
                    t = this.state.currentContentObject;
                if (null != t) {
                    for (var n = t; n instanceof g && (this.VisitContainer(n, !0), 0 != n.content.length);) t = n.content[0], this.state.callStack.currentElement.currentContentIndex = 0, this.state.callStack.currentElement.currentContainer = n, n = t;
                    n = this.state.callStack.currentElement.currentContainer;
                    var r = this.PerformLogicAndFlowControl(t);
                    if (null != this.state.currentContentObject) {
                        r && (e = !1);
                        var i = t;
                        if (i instanceof T) {
                            var o = this.ProcessChoice(i);
                            o && this.state.generatedChoices.push(o), t = null, e = !1
                        }
                        if (t instanceof g && (e = !1), e) {
                            var a = t;
                            if (a instanceof _ && -1 == a.contextIndex) {
                                var s = this.state.callStack.ContextForVariableNamed(a.variableName);
                                t = new _(a.variableName, s)
                            }
                            this.state.inExpressionEvaluation ? this.state.PushEvaluationStack(t) : this.state.PushToOutputStream(t)
                        }
                        this.NextContent();
                        t instanceof M && t.commandType == M.CommandType.StartThread && this.state.callStack.PushThread()
                    }
                }
            }
            VisitContainer(e, t) {
                e.countingAtStartOnly && !t || (e.visitsShouldBeCounted && this.IncrementVisitCountForContainer(e), e.turnIndexShouldBeCounted && this.RecordTurnIndexVisitToContainer(e))
            }
            VisitChangedContainersDueToDivert() {
                var e = this.state.previousContentObject,
                    t = this.state.currentContentObject;
                if (t) {
                    if (this._prevContainerSet = [], e)
                        for (var n = e instanceof g ? e : e.parent; n instanceof g;) this._prevContainerSet.push(n), n = n.parent;
                    for (var r = t, i = r.parent; i instanceof g && this._prevContainerSet.indexOf(i) < 0;) {
                        var o = i.content.length > 0 && r == i.content[0];
                        this.VisitContainer(i, o), r = i, i = i.parent
                    }
                }
            }
            ProcessChoice(e) {
                var t = !0;
                if (e.hasCondition) {
                    var n = this.state.PopEvaluationStack();
                    this.IsTruthy(n) || (t = !1)
                }
                var r = "",
                    i = "";
                if (e.hasChoiceOnlyContent) {
                    i = this.state.PopEvaluationStack().value
                }
                if (e.hasStartContent) {
                    r = this.state.PopEvaluationStack().value
                }
                if (e.onceOnly) {
                    this.VisitCountForContainer(e.choiceTarget) > 0 && (t = !1)
                }
                var o = new x(e);
                return o.threadAtGeneration = this.state.callStack.currentThread.Copy(), t ? (o.text = r + i, o) : null
            }
            IsTruthy(e) {
                if (e instanceof c) {
                    var t = e;
                    if (t instanceof p) {
                        var n = t;
                        return this.Error("Shouldn't use a divert target (to " + n.targetPath + ") as a conditional value. Did you intend a function call 'likeThis()' or a read count check 'likeThis'? (no arrows)"), !1
                    }
                    return t.isTruthy
                }
                return !1
            }
            PerformLogicAndFlowControl(e) {
                if (null == e) return !1;
                if (e instanceof k) {
                    var t = e;
                    if (t.isConditional) {
                        var n = this.state.PopEvaluationStack();
                        if (!this.IsTruthy(n)) return !0
                    }
                    if (t.hasVariableTarget) {
                        var r = t.variableDivertName,
                            i = this.state.variablesState.GetVariableWithName(r);
                        if (!(i instanceof p)) {
                            var a = "Tried to divert to a target from a variable, but the variable (" + r + ") didn't contain a divert target, it ";
                            i instanceof d && 0 == i.value ? a += "was empty/null (the value 0)." : a += "contained '" + i + "'.", this.Error(a)
                        }
                        P = i;
                        this.state.divertedTargetObject = this.ContentAtPath(P.targetPath)
                    } else {
                        if (t.isExternal) return this.CallExternalFunction(t.targetPathString, t.externalArgs), !0;
                        this.state.divertedTargetObject = t.targetContent
                    }
                    return t.pushesToStack && this.state.callStack.Push(t.stackPushType), null != this.state.divertedTargetObject || t.isExternal || (t && null != t.debugMetadata.sourceName ? this.Error("Divert target doesn't exist: " + t.debugMetadata.sourceName) : this.Error("Divert resolution failed: " + t)), !0
                }
                if (e instanceof M) {
                    var s = e;
                    switch (s.commandType) {
                        case M.CommandType.EvalStart:
                            this.state.inExpressionEvaluation && console.warn("Already in expression evaluation?"), this.state.inExpressionEvaluation = !0;
                            break;
                        case M.CommandType.EvalEnd:
                            this.state.inExpressionEvaluation || console.warn("Not in expression evaluation mode"), this.state.inExpressionEvaluation = !1;
                            break;
                        case M.CommandType.EvalOutput:
                            if (this.state.evaluationStack.length > 0) {
                                var u = this.state.PopEvaluationStack();
                                if (null != u && !(u instanceof D)) {
                                    var l = new f(u.toString());
                                    this.state.PushToOutputStream(l)
                                }
                            }
                            break;
                        case M.CommandType.NoOp:
                            break;
                        case M.CommandType.Duplicate:
                            this.state.PushEvaluationStack(this.state.PeekEvaluationStack());
                            break;
                        case M.CommandType.PopEvaluatedValue:
                            this.state.PopEvaluationStack();
                            break;
                        case M.CommandType.PopFunction:
                        case M.CommandType.PopTunnel:
                            var c = s.commandType == M.CommandType.PopFunction ? L.Function : L.Tunnel,
                                h = null;
                            if (c == L.Tunnel) {
                                var _ = this.state.PopEvaluationStack();
                                if ((h = _) instanceof p == !1) {
                                    if (_ instanceof D == !1) throw "Expected void if ->-> doesn't override target";
                                    h = null
                                }
                            }
                            if (this.state.TryExitExternalFunctionEvaluation()) break;
                            if (this.state.callStack.currentElement.type == c && this.state.callStack.canPop) this.state.callStack.Pop(), h && (this.state.divertedTargetObject = this.ContentAtPath(h.targetPath));
                            else {
                                var g = {};
                                g[L.Function] = "function return statement (~ return)", g[L.Tunnel] = "tunnel onwards statement (->->)";
                                var v = g[this.state.callStack.currentElement.type];
                                this.state.callStack.canPop || (v = "end of flow (-> END or choice)");
                                var b = "Found " + g[c] + ", when expected " + v;
                                this.Error(b)
                            }
                            break;
                        case M.CommandType.BeginString:
                            this.state.PushToOutputStream(s), this.state.inExpressionEvaluation || console.warn("Expected to be in an expression when evaluating a string"), this.state.inExpressionEvaluation = !1;
                            break;
                        case M.CommandType.EndString:
                            for (var w = [], T = 0, O = this.state.outputStream.length - 1; O >= 0; --O) {
                                var x = this.state.outputStream[O];
                                T++;
                                if (x instanceof M && x.commandType == M.CommandType.BeginString) break;
                                x instanceof f && w.push(x)
                            }
                            this.state.outputStream.splice(this.state.outputStream.length - T, T), w = w.reverse();
                            var E = new o;
                            w.forEach(e => {
                                E.Append(e.toString())
                            }), this.state.inExpressionEvaluation = !0, this.state.PushEvaluationStack(new f(E.toString()));
                            break;
                        case M.CommandType.ChoiceCount:
                            var j = this.state.generatedChoices.length;
                            this.state.PushEvaluationStack(new d(j));
                            break;
                        case M.CommandType.TurnsSince:
                        case M.CommandType.ReadCount:
                            var P;
                            if (!((P = this.state.PopEvaluationStack()) instanceof p)) {
                                var A = "";
                                P instanceof d && (A = ". Did you accidentally pass a read count ('knot_name') instead of a target ('-> knot_name')?"), this.Error("TURNS_SINCE / READ_COUNT expected a divert target (knot, stitch, label name), but saw " + P + A);
                                break
                            }
                            var H, I = P,
                                N = this.ContentAtPath(I.targetPath);
                            H = s.commandType == M.CommandType.TurnsSince ? this.TurnsSinceForContainer(N) : this.VisitCountForContainer(N), this.state.PushEvaluationStack(new d(H));
                            break;
                        case M.CommandType.Random:
                            var V = this.state.PopEvaluationStack(),
                                F = this.state.PopEvaluationStack();
                            null != F && F instanceof d != !1 || this.Error("Invalid value for minimum parameter of RANDOM(min, max)"), null != V && F instanceof d != !1 || this.Error("Invalid value for maximum parameter of RANDOM(min, max)");
                            var W = V.value - F.value + 1;
                            W <= 0 && this.Error("RANDOM was called with minimum as " + F.value + " and maximum as " + V.value + ". The maximum must be larger");
                            var z = this.state.storySeed + this.state.previousRandom,
                                G = new R(z).next(),
                                U = G % W + F.value;
                            this.state.PushEvaluationStack(new d(U)), this.state.previousRandom = G;
                            break;
                        case M.CommandType.SeedRandom:
                            var B = this.state.PopEvaluationStack();
                            null != B && B instanceof d != !1 || this.Error("Invalid value passed to SEED_RANDOM"), this.state.storySeed = B.value, this.state.previousRandom = 0, this.state.PushEvaluationStack(new D);
                            break;
                        case M.CommandType.VisitIndex:
                            de = this.VisitCountForContainer(this.state.currentContainer) - 1;
                            this.state.PushEvaluationStack(new d(de));
                            break;
                        case M.CommandType.SequenceShuffleIndex:
                            var J = this.NextSequenceShuffleIndex();
                            this.state.PushEvaluationStack(new d(J));
                            break;
                        case M.CommandType.StartThread:
                            break;
                        case M.CommandType.Done:
                            this.state.callStack.canPopThread ? this.state.callStack.PopThread() : (this.state.didSafeExit = !0, this.state.currentContentObject = null);
                            break;
                        case M.CommandType.End:
                            this.state.ForceEnd();
                            break;
                        case M.CommandType.ListFromInt:
                            var K, $ = parseInt(this.state.PopEvaluationStack()),
                                q = this.state.PopEvaluationStack().toString(),
                                Z = null;
                            if (!(K = this.listDefinitions.TryGetDefinition(q, K))) throw new y("Failed to find LIST called " + q.value);
                            var Q = K.TryGetItemWithValue($.value);
                            Q.exists && (Z = new m(Q.item, $.value)), null == Z && (Z = new m), this.state.PushEvaluationStack(Z);
                            break;
                        case M.CommandType.ListRange:
                            var X = this.state.PopEvaluationStack(),
                                ee = this.state.PopEvaluationStack(),
                                te = this.state.PopEvaluationStack();
                            if (te instanceof m == !1 || null == te || null == ee || null == X) throw new y("Expected list, minimum and maximum for LIST_RANGE");
                            var ne = function(e) {
                                    var t = e;
                                    if (t instanceof m) return parseInt(t.value.maxItem.Value);
                                    return e instanceof d ? e.value : -1
                                },
                                re = ne(ee),
                                ie = ne(X);
                            if (-1 == re) throw new y("Invalid min range bound passed to LIST_VALUE(): " + ee);
                            if (-1 == ie) throw new y("Invalid max range bound passed to LIST_VALUE(): " + X);
                            var oe = new m,
                                ae = te.value.origins;
                            null != ae && ae.forEach(function(e) {
                                e.ListRange(re, ie).value.forEach(function(e) {
                                    oe.value.Add(e.Key, e.Value)
                                })
                            }), this.state.PushEvaluationStack(oe);
                            break;
                        default:
                            this.Error("unhandled ControlCommand: " + s)
                    }
                    return !0
                }
                if (e instanceof S) {
                    var se = e,
                        ue = this.state.PopEvaluationStack();
                    return this.state.variablesState.Assign(se, ue), !0
                }
                if (e instanceof Y) {
                    var le = e,
                        ce = null;
                    if (null != le.pathForCount) {
                        var N = le.containerForCount,
                            de = this.VisitCountForContainer(N);
                        ce = new d(de)
                    } else null == (ce = this.state.variablesState.GetVariableWithName(le.name)) && (this.Error("Uninitialised variable: " + le.name), ce = new d(0));
                    return this.state.PushEvaluationStack(ce), !0
                }
                if (e instanceof C) {
                    var he = e,
                        fe = this.state.PopEvaluationStack(he.numberOfParameters),
                        oe = he.Call(fe);
                    return this.state.PushEvaluationStack(oe), !0
                }
                return !1
            }
            ChoosePathString(e, n) {
                n = n || [], this.state.PassArgumentsToEvaluationStack(n), this.ChoosePath(new t(e))
            }
            ChoosePath(e) {
                this.state.SetChosenPath(e), this.VisitChangedContainersDueToDivert()
            }
            ChooseChoiceIndex(e) {
                e = e;
                var t = this.currentChoices;
                (e < 0 || e > t.length) && console.warn("choice out of range");
                var n = t[e];
                this.state.callStack.currentThread = n.threadAtGeneration, this.ChoosePath(n.choicePoint.choiceTarget.path)
            }
            HasFunction(e) {
                try {
                    return this.ContentAtPath(new t(e)) instanceof g
                } catch (e) {
                    return !1
                }
            }
            EvaluateFunction(e, n, r) {
                if (r = !!r, null == e) throw "Function is null";
                if ("" == e || "" == e.trim()) throw "Function is empty or white space.";
                var i = null;
                try {
                    i = this.ContentAtPath(new t(e))
                } catch (t) {
                    throw t.message.indexOf("not found") >= 0 ? "Function doesn't exist: '" + e + "'" : t
                }
                this.state.StartExternalFunctionEvaluation(i, n);
                for (var a = new o; this.canContinue;) a.Append(this.Continue());
                var s = a.toString(),
                    u = this.state.CompleteExternalFunctionEvaluation();
                return r ? {
                    returned: u,
                    output: s
                } : u
            }
            EvaluateExpression(e) {
                var t = this.state.callStack.elements.length;
                this.state.callStack.Push(L.Tunnel), this._temporaryEvaluationContainer = e, this.state.GoToStart();
                var n = this.state.evaluationStack.length;
                this.Continue(), this._temporaryEvaluationContainer = null, this.state.callStack.elements.length > t && this.state.callStack.Pop();
                return this.state.evaluationStack.length > n ? this.state.PopEvaluationStack() : null
            }
            CallExternalFunction(e, n) {
                var r = this._externals[e],
                    i = null;
                if (!(void 0 !== r)) {
                    if (this.allowExternalFunctionFallbacks) return (i = this.ContentAtPath(new t(e))) instanceof g || console.warn("Trying to call EXTERNAL function '" + e + "' which has not been bound, and fallback ink function could not be found."), this.state.callStack.Push(L.Function), void(this.state.divertedTargetObject = i);
                    console.warn("Trying to call EXTERNAL function '" + e + "' which has not been bound (and ink fallbacks disabled).")
                }
                for (var o = [], a = 0; a < n; ++a) {
                    var s = this.state.PopEvaluationStack().valueObject;
                    o.push(s)
                }
                o.reverse();
                var u = r(o),
                    l = null;
                null != u ? null == (l = c.Create(u)) && console.warn("Could not create ink value from returned object of type " + typeof u) : l = new D, this.state.PushEvaluationStack(l)
            }
            TryCoerce(e) {
                return e
            }
            BindExternalFunctionGeneral(e, t) {
                this._externals[e] && console.warn("Function '" + e + "' has already been bound."), this._externals[e] = t
            }
            BindExternalFunction(e, t) {
                t || console.warn("Can't bind a null function"), this.BindExternalFunctionGeneral(e, e => {
                    e.length < t.length && console.warn("External function expected " + t.length + " arguments");
                    for (var n = [], r = 0, i = e.length; r < i; r++) n[r] = this.TryCoerce(e[r]);
                    return t.apply(null, n)
                })
            }
            UnbindExternalFunction(e) {
                void 0 === this._externals[e] && console.warn("Function '" + e + "' has not been bound."), delete this._externals[e]
            }
            ValidateExternalBindings(e, t) {
                if (e)
                    if (e instanceof g) {
                        var n = e;
                        n.content.forEach(e => {
                            this.ValidateExternalBindings(e, t)
                        });
                        for (var r in n.namedContent) this.ValidateExternalBindings(n.namedContent[r], t)
                    } else {
                        var i = e;
                        if (i instanceof k && i.isExternal) {
                            var o = i.targetPathString;
                            if (!this._externals[o])
                                if (this.allowExternalFunctionFallbacks) {
                                    !!this.mainContentContainer.namedContent[o] || t.push(o)
                                } else t.push(o)
                        }
                    }
                else {
                    t = [];
                    if (this.ValidateExternalBindings(this._mainContentContainer, t), this._hasValidatedExternals = !0, 0 == t.length) this._hasValidatedExternals = !0;
                    else {
                        var a = "Error: Missing function binding for external";
                        a += t.length > 1 ? "s" : "", a += ": '", a += t.join("', '"), a += "' ", a += this.allowExternalFunctionFallbacks ? ", and no fallback ink function found." : " (ink fallbacks disabled)", this.Error(a)
                    }
                }
            }
            ObserveVariable(e, t) {
                null == this._variableObservers && (this._variableObservers = {}), this._variableObservers[e] ? this._variableObservers[e].push(t) : this._variableObservers[e] = [t]
            }
            ObserveVariables(e, t) {
                for (var n = 0, r = e.length; n < r; n++) this.ObserveVariable(e[n], t[n])
            }
            RemoveVariableObserver(e, t) {
                if (null != this._variableObservers)
                    if (void 0 !== t) this._variableObservers[t] && this._variableObservers[t].splice(this._variableObservers[t].indexOf(e), 1);
                    else
                        for (var n in this._variableObservers) this._variableObservers[n].splice(this._variableObservers[n].indexOf(e), 1)
            }
            VariableStateDidChangeEvent(e, t) {
                if (null != this._variableObservers) {
                    var n = this._variableObservers[e];
                    if (void 0 !== n) {
                        if (!(t instanceof c)) throw "Tried to get the value of a variable that isn't a standard type";
                        var r = t;
                        n.forEach(function(t) {
                            t(e, r.valueObject)
                        })
                    }
                }
            }
            TagsForContentAtPath(e) {
                return this.TagsAtStartOfFlowContainerWithPathString(e)
            }
            TagsAtStartOfFlowContainerWithPathString(e) {
                for (var n = new t(e), r = this.ContentAtPath(n);;) {
                    var i = r.content[0];
                    if (!(i instanceof g)) break;
                    r = i
                }
                var o = null;
                return r.content.every(e => {
                    var t = e;
                    return t instanceof O && (null == o && (o = []), o.push(t.text), !0)
                }), o
            }
            BuildStringOfHierarchy() {
                var e = new o;
                return this.mainContentContainer.BuildStringOfHierarchy(e, 0, this.state.currentContentObject), e.toString()
            }
            BuildStringOfContainer(e) {
                var t = new o;
                return e.BuildStringOfHierarchy(t, 0, this.state.currentContentObject), t.toString()
            }
            NextContent() {
                if (this.state.previousContentObject = this.state.currentContentObject, null == this.state.divertedTargetObject || (this.state.currentContentObject = this.state.divertedTargetObject, this.state.divertedTargetObject = null, this.VisitChangedContainersDueToDivert(), null == this.state.currentContentObject)) {
                    if (!this.IncrementContentPointer()) {
                        var e = !1;
                        this.state.callStack.CanPop(L.Function) ? (this.state.callStack.Pop(L.Function), this.state.inExpressionEvaluation && this.state.PushEvaluationStack(new D), e = !0) : this.state.callStack.canPopThread ? (this.state.callStack.PopThread(), e = !0) : this.state.TryExitExternalFunctionEvaluation(), e && null != this.state.currentContentObject && this.NextContent()
                    }
                }
            }
            IncrementContentPointer() {
                var e = !0,
                    t = this.state.callStack.currentElement;
                for (t.currentContentIndex++; t.currentContentIndex >= t.currentContainer.content.length;) {
                    e = !1;
                    var n = t.currentContainer.parent;
                    if (n instanceof g == !1) break;
                    var r = n.content.indexOf(t.currentContainer);
                    if (-1 == r) break;
                    t.currentContainer = n, t.currentContentIndex = r + 1, e = !0
                }
                return e || (t.currentContainer = null), e
            }
            TryFollowDefaultInvisibleChoice() {
                var e = this._state.currentChoices,
                    t = e.filter(e => e.choicePoint.isInvisibleDefault);
                if (0 == t.length || e.length > t.length) return !1;
                var n = t[0];
                return this.ChoosePath(n.choicePoint.choiceTarget.path), !0
            }
            VisitCountForContainer(e) {
                if (!e.visitsShouldBeCounted) return console.warn("Read count for target (" + e.name + " - on " + e.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c)."), 0;
                var t = 0,
                    n = e.path.toString();
                return t = this.state.visitCounts[n] || t
            }
            IncrementVisitCountForContainer(e) {
                var t = 0,
                    n = e.path.toString();
                this.state.visitCounts[n] && (t = this.state.visitCounts[n]), t++, this.state.visitCounts[n] = t
            }
            RecordTurnIndexVisitToContainer(e) {
                var t = e.path.toString();
                this.state.turnIndices[t] = this.state.currentTurnIndex
            }
            TurnsSinceForContainer(e) {
                e.turnIndexShouldBeCounted || this.Error("TURNS_SINCE() for target (" + e.name + " - on " + e.debugMetadata + ") unknown. The story may need to be compiled with countAllVisits flag (-c).");
                var t = e.path.toString(),
                    n = this.state.turnIndices[t];
                return void 0 !== n ? this.state.currentTurnIndex - n : -1
            }
            NextSequenceShuffleIndex() {
                var e = this.state.PopEvaluationStack();
                if (!(e instanceof d)) return this.Error("expected number of elements in sequence for shuffle index"), 0;
                for (var t = this.state.currentContainer, n = e.value, r = this.state.PopEvaluationStack().value, i = r / n, o = r % n, a = t.path.toString(), s = 0, u = 0, l = a.length; u < l; u++) s += a.charCodeAt[u] || 0;
                for (var c = s + i + this.state.storySeed, h = new R(parseInt(c)), f = [], u = 0; u < n; ++u) f.push(u);
                for (u = 0; u <= o; ++u) {
                    var p = h.next() % f.length,
                        _ = f[p];
                    if (f.splice(p, 1), u == o) return _
                }
                throw "Should never reach here"
            }
            Error(e, t) {
                throw new y(e)
            }
            AddError(e, t) {
                e = "RUNTIME ERROR: " + e, this.state.AddError(e), this.state.ForceEnd()
            }
        }
        e.Story = z, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r;
    ! function(e) {
        e[e.STORY_POINT_ADDED = 0] = "STORY_POINT_ADDED", e[e.USER_INTERACTION_STARTED = 1] = "USER_INTERACTION_STARTED", e[e.USER_INTERACTION_FINISHED = 2] = "USER_INTERACTION_FINISHED"
    }(r || (r = {}))
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r;
    ! function(e) {
        e[e.BOT = 0] = "BOT", e[e.USER = 1] = "USER"
    }(r || (r = {}))
},
function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
},
function(e, t, n) {
    function r(e) {
        return n(i(e))
    }

    function i(e) {
        var t = o[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    var o = {
        "./af": 96,
        "./af.js": 96,
        "./ar": 97,
        "./ar-dz": 98,
        "./ar-dz.js": 98,
        "./ar-kw": 99,
        "./ar-kw.js": 99,
        "./ar-ly": 100,
        "./ar-ly.js": 100,
        "./ar-ma": 101,
        "./ar-ma.js": 101,
        "./ar-sa": 102,
        "./ar-sa.js": 102,
        "./ar-tn": 103,
        "./ar-tn.js": 103,
        "./ar.js": 97,
        "./az": 104,
        "./az.js": 104,
        "./be": 105,
        "./be.js": 105,
        "./bg": 106,
        "./bg.js": 106,
        "./bm": 107,
        "./bm.js": 107,
        "./bn": 108,
        "./bn.js": 108,
        "./bo": 109,
        "./bo.js": 109,
        "./br": 110,
        "./br.js": 110,
        "./bs": 111,
        "./bs.js": 111,
        "./ca": 112,
        "./ca.js": 112,
        "./cs": 113,
        "./cs.js": 113,
        "./cv": 114,
        "./cv.js": 114,
        "./cy": 115,
        "./cy.js": 115,
        "./da": 116,
        "./da.js": 116,
        "./de": 117,
        "./de-at": 118,
        "./de-at.js": 118,
        "./de-ch": 119,
        "./de-ch.js": 119,
        "./de.js": 117,
        "./dv": 120,
        "./dv.js": 120,
        "./el": 121,
        "./el.js": 121,
        "./en-au": 122,
        "./en-au.js": 122,
        "./en-ca": 123,
        "./en-ca.js": 123,
        "./en-gb": 124,
        "./en-gb.js": 124,
        "./en-ie": 125,
        "./en-ie.js": 125,
        "./en-nz": 126,
        "./en-nz.js": 126,
        "./eo": 127,
        "./eo.js": 127,
        "./es": 128,
        "./es-do": 129,
        "./es-do.js": 129,
        "./es-us": 130,
        "./es-us.js": 130,
        "./es.js": 128,
        "./et": 131,
        "./et.js": 131,
        "./eu": 132,
        "./eu.js": 132,
        "./fa": 133,
        "./fa.js": 133,
        "./fi": 134,
        "./fi.js": 134,
        "./fo": 135,
        "./fo.js": 135,
        "./fr": 136,
        "./fr-ca": 137,
        "./fr-ca.js": 137,
        "./fr-ch": 138,
        "./fr-ch.js": 138,
        "./fr.js": 136,
        "./fy": 139,
        "./fy.js": 139,
        "./gd": 140,
        "./gd.js": 140,
        "./gl": 141,
        "./gl.js": 141,
        "./gom-latn": 142,
        "./gom-latn.js": 142,
        "./gu": 143,
        "./gu.js": 143,
        "./he": 144,
        "./he.js": 144,
        "./hi": 145,
        "./hi.js": 145,
        "./hr": 146,
        "./hr.js": 146,
        "./hu": 147,
        "./hu.js": 147,
        "./hy-am": 148,
        "./hy-am.js": 148,
        "./id": 149,
        "./id.js": 149,
        "./is": 150,
        "./is.js": 150,
        "./it": 151,
        "./it.js": 151,
        "./ja": 152,
        "./ja.js": 152,
        "./jv": 153,
        "./jv.js": 153,
        "./ka": 154,
        "./ka.js": 154,
        "./kk": 155,
        "./kk.js": 155,
        "./km": 156,
        "./km.js": 156,
        "./kn": 157,
        "./kn.js": 157,
        "./ko": 158,
        "./ko.js": 158,
        "./ky": 159,
        "./ky.js": 159,
        "./lb": 160,
        "./lb.js": 160,
        "./lo": 161,
        "./lo.js": 161,
        "./lt": 162,
        "./lt.js": 162,
        "./lv": 163,
        "./lv.js": 163,
        "./me": 164,
        "./me.js": 164,
        "./mi": 165,
        "./mi.js": 165,
        "./mk": 166,
        "./mk.js": 166,
        "./ml": 167,
        "./ml.js": 167,
        "./mr": 168,
        "./mr.js": 168,
        "./ms": 169,
        "./ms-my": 170,
        "./ms-my.js": 170,
        "./ms.js": 169,
        "./my": 171,
        "./my.js": 171,
        "./nb": 172,
        "./nb.js": 172,
        "./ne": 173,
        "./ne.js": 173,
        "./nl": 174,
        "./nl-be": 175,
        "./nl-be.js": 175,
        "./nl.js": 174,
        "./nn": 176,
        "./nn.js": 176,
        "./pa-in": 177,
        "./pa-in.js": 177,
        "./pl": 178,
        "./pl.js": 178,
        "./pt": 179,
        "./pt-br": 180,
        "./pt-br.js": 180,
        "./pt.js": 179,
        "./ro": 181,
        "./ro.js": 181,
        "./ru": 182,
        "./ru.js": 182,
        "./sd": 183,
        "./sd.js": 183,
        "./se": 184,
        "./se.js": 184,
        "./si": 185,
        "./si.js": 185,
        "./sk": 186,
        "./sk.js": 186,
        "./sl": 187,
        "./sl.js": 187,
        "./sq": 188,
        "./sq.js": 188,
        "./sr": 189,
        "./sr-cyrl": 190,
        "./sr-cyrl.js": 190,
        "./sr.js": 189,
        "./ss": 191,
        "./ss.js": 191,
        "./sv": 192,
        "./sv.js": 192,
        "./sw": 193,
        "./sw.js": 193,
        "./ta": 194,
        "./ta.js": 194,
        "./te": 195,
        "./te.js": 195,
        "./tet": 196,
        "./tet.js": 196,
        "./th": 197,
        "./th.js": 197,
        "./tl-ph": 198,
        "./tl-ph.js": 198,
        "./tlh": 199,
        "./tlh.js": 199,
        "./tr": 200,
        "./tr.js": 200,
        "./tzl": 201,
        "./tzl.js": 201,
        "./tzm": 202,
        "./tzm-latn": 203,
        "./tzm-latn.js": 203,
        "./tzm.js": 202,
        "./uk": 204,
        "./uk.js": 204,
        "./ur": 205,
        "./ur.js": 205,
        "./uz": 206,
        "./uz-latn": 207,
        "./uz-latn.js": 207,
        "./uz.js": 206,
        "./vi": 208,
        "./vi.js": 208,
        "./x-pseudo": 209,
        "./x-pseudo.js": 209,
        "./yo": 210,
        "./yo.js": 210,
        "./zh-cn": 211,
        "./zh-cn.js": 211,
        "./zh-hk": 212,
        "./zh-hk.js": 212,
        "./zh-tw": 213,
        "./zh-tw.js": 213
    };
    r.keys = function() {
        return Object.keys(o)
    }, r.resolve = i, e.exports = r, r.id = 288
},
function(e, t) {
    e.exports = {
        inkVersion: 17,
        root: [{
            "->": "start"
        }, "done", {
            start: [
                [
                    ["^<strong>Привет!</strong> Я помогу разобраться, почему вам отказали в кредите и что делать, чтобы повысить вероятность положительного решения банка?", "\n", 
                    	["ev", {
                                "^->": "start.0.g-0.2.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Плохая кредитная история", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "start.0.g-0.2.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_ch"
                                    }, "\n", null
                                ]
                            }
                        ],                        
                        ["ev", {
                                "^->": "start.0.g-0.3.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Высокая кредитная нагрузка", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "start.0.g-0.3.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_mood"
                                    }, "\n", null
                                ]
                            }
                        ],
                        ["ev", {
                                "^->": "start.0.g-0.4.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Я не знаю причину отказа", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "start.0.g-0.4.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_mood"
                                    }, "\n", null
                                ]
                            }
                        ], {
                            "#n": "g-0"
                        }
                    ], null
                ], {
                    "#f": 3
                }
            ],
            bad_ch2: [
                [
                    ["^К сожалению, если вы допустили просрочку по кредитам и большинство банков будут автоматически отказывать. Есть несколько вариантов исправления кредитной истории:", {
                        "#": '{ "userInteraction": { "placeholder": "MM/DD/YYYY", "stateVar": "birthday", "type": "text", "handler": "birthdayToAge", "validator": "date" } }'
                    }, "\n", 
                    ["ev", {
                            "^->": "bad_ch.0.g-0.3.$r1"
                        }, {
                            "temp=": "$r"
                        }, "str", {
                            "->": ".^.s"
                        },
                        [{
                            "#n": "$r1"
                        }], "/str", "/ev", {
                            "*": ".^.c",
                            flg: 2
                        }, {
                            s: ["^ ", ["G>", "ev", {
                                "VAR?": "birthday"
                            }, "out", "/ev", "G<", null], {
                                "->": "$r",
                                var: !0
                            }, null],
                            c: ["ev", {
                                    "^->": "bad_ch.0.g-0.3.c.$r2"
                                }, "/ev", {
                                    "temp=": "$r"
                                }, {
                                    "->": ".^.^.s"
                                },
                                [{
                                    "#n": "$r2"
                                }], {
                                    "#": '{ "sender": 1 }'
                                }, "\n", "\n", {
                                    "->": ".^.^.^.^.g-1"
                                },
                                null
                            ]
                        }
                    ], {
                        "#n": "g-0"
                    }], {
                        "g-1": [
                            ["G>", ["ev", {
                                    "VAR?": "validationError"
                                }, 0, "==", "/ev", {
                                    "->": ".^.b",
                                    c: !0
                                }, {
                                    b: [{
                                        "->": "user_age"
                                    }, {
                                        "->": ".^.^.^.3"
                                    }, null]
                                }],
                                [{
                                    "->": ".^.b"
                                }, {
                                    b: [{
                                        "->": "date_validation_error"
                                    }, {
                                        "->": ".^.^.^.3"
                                    }, null]
                                }], "nop", "G<", null
                            ], "\n", "done", null
                        ]
                    }
                ], {
                    "#f": 3
                }
            ],
            bad_ch: [
                [
                    ["^<strong>Привет!</strong> Я помогу разобраться, почему вам отказали в кредите и что делать, чтобы повысить вероятность положительного решения банка?", "\n", 
                    	["ev", {
                                "^->": "bad_ch.0.g-0.2.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Плохая кредитная история", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "bad_ch.0.g-0.2.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_ch"
                                    }, "\n", null
                                ]
                            }
                        ],                        
                        ["ev", {
                                "^->": "bad_ch.0.g-0.3.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Высокая кредитная нагрузка", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "bad_ch.0.g-0.3.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_mood"
                                    }, "\n", null
                                ]
                            }
                        ],
                        ["ev", {
                                "^->": "bad_ch.0.g-0.4.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Я не знаю причину отказа", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "bad_ch.0.g-0.4.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "bad_mood"
                                    }, "\n", null
                                ]
                            }
                        ], {
                            "#n": "g-0"
                        }
                    ], null
                ], {
                    "#f": 3
                }
            ],
            user_age: [
                [
                    ["^So you are <strong>", ["G>", "ev", {
                        "VAR?": "age"
                    }, "out", "/ev", "G<", null], "^ years</strong> old.", "\n", [
                        ["G>", ["ev", {
                                "VAR?": "age"
                            }, 18, ">=", "/ev", {
                                "->": ".^.b",
                                c: !0
                            }, {
                                b: [{
                                    "->": "aviation_recipe"
                                }, {
                                    "->": ".^.^.^.3"
                                }, null]
                            }],
                            [{
                                "->": ".^.b"
                            }, {
                                b: [{
                                    "->": "capri_sun"
                                }, {
                                    "->": ".^.^.^.3"
                                }, null]
                            }], "nop", "G<", null
                        ], "\n", "done", {
                            "#n": "g-1"
                        }
                    ], {
                        "#n": "g-0"
                    }], null
                ], {
                    "#f": 3
                }
            ],
            date_validation_error: [
                [
                    ["^Please input the date as specified (MM/DD/YYYY).", "\n", {
                        "->": "good_mood"
                    }, {
                        "#n": "g-0"
                    }], null
                ], {
                    "#f": 3
                }
            ],
            bad_mood: [
                [
                    ["^Какой банк вам отказал?", "\n", "end", {
                        "#n": "g-0"
                    }], null
                ], {
                    "#f": 3
                }
            ],
            aviation_recipe: [
                [
                    ["^Old enough for a great cocktail. 🍸 Here's the recipe for an <strong>Aviation</strong>:", "\n", ["^5 cl gin<br> 1.5 cl lemon juice<br> 1 cl maraschino liqueur<br> 0.7 cl crème de violette", "\n", ["^Shake, stir, strain and enjoy.", "\n", {
                        "->": "start_over"
                    }, {
                        "#n": "g-2"
                    }], {
                        "#n": "g-1"
                    }], {
                        "#n": "g-0"
                    }], null
                ], {
                    "#f": 3
                }
            ],
            capri_sun: [
                [
                    ["^That's pretty young. Want some Capri Sun?", "\n", ['^<img src="/assets/images/capri-sun.png">', "\n", {
                        "->": "start_over"
                    }, {
                        "#n": "g-1"
                    }], {
                        "#n": "g-0"
                    }], null
                ], {
                    "#f": 3
                }
            ],
            start_over: [
                [
                    ["^Want to start over?", "\n", ["ev", {
                                "^->": "start_over.0.g-0.2.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^Sure.", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "start_over.0.g-0.2.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", {
                                        "->": "start"
                                    }, "\n", null
                                ]
                            }
                        ],
                        ["ev", {
                                "^->": "start_over.0.g-0.3.$r1"
                            }, {
                                "temp=": "$r"
                            }, "str", {
                                "->": ".^.s"
                            },
                            [{
                                "#n": "$r1"
                            }], "/str", "/ev", {
                                "*": ".^.c",
                                flg: 2
                            }, {
                                s: ["^No, thank you.", {
                                    "->": "$r",
                                    var: !0
                                }, null],
                                c: ["ev", {
                                        "^->": "start_over.0.g-0.3.c.$r2"
                                    }, "/ev", {
                                        "temp=": "$r"
                                    }, {
                                        "->": ".^.^.s"
                                    },
                                    [{
                                        "#n": "$r2"
                                    }], {
                                        "#": '{ "sender": 1 }'
                                    }, "\n", "\n", "end", null
                                ]
                            }
                        ], {
                            "#n": "g-0"
                        }
                    ], null
                ], {
                    "#f": 3
                }
            ],
            "global decl": ["ev", 0, {
                "VAR=": "age"
            }, "str", "^06/16/1989", "/str", {
                "VAR=": "birthday"
            }, 0, {
                "VAR=": "validationError"
            }, "/ev", "end", null],
            "#f": 3
        }],
        listDefs: {}
    }
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return i._24(0, [(e()(), i._7(0, 0, null, null, 4, "main", [
            ["class", "container"]
        ], null, null, null, null, null)), (e()(), i._23(-1, null, ["\n  "])), (e()(), i._7(2, 0, null, null, 1, "bot-message-panel", [], null, null, null, o.b, o.a)), i._6(3, 114688, null, 0, a.a, [s.a], null, null), (e()(), i._23(-1, null, ["\n"]))], function(e, t) {
            e(t, 3, 0)
        }, null)
    }
    n.d(t, "a", function() {
        return c
    });
    var i = n(12),
        o = n(291),
        a = n(219),
        s = n(28),
        u = n(93),
        l = i._5({
            encapsulation: 2,
            styles: [],
            data: {}
        }),
        c = i._3("bot-app", u.a, function(e) {
            return i._24(0, [(e()(), i._7(0, 0, null, null, 1, "bot-app", [], null, null, null, r, l)), i._6(1, 49152, null, 0, u.a, [s.a], null, null)], null, null)
        }, {}, {}, [])
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return o._24(0, [(e()(), o._7(0, 0, null, null, 1, "bot-message", [], null, null, null, a.b, a.a)), o._6(1, 114688, null, 0, s.a, [], {
            storyPoint: [0, "storyPoint"]
        }, null)], function(e, t) {
            e(t, 1, 0, t.context.$implicit)
        }, null)
    }

    function i(e) {
        return o._24(0, [(e()(), o._7(0, 0, null, null, 19, "section", [
            ["class", "message-panel"]
        ], null, null, null, null, null)), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._7(2, 0, null, null, 3, "aside", [
            ["class", "message-panel__avatar"]
        ], null, null, null, null, null)), (e()(), o._23(-1, null, ["\n    "])), (e()(), o._7(4, 0, null, null, 0, "img", [
            ["alt", ""],
            ["src", "assets/images/declined.png"]
        ], null, null, null, null, null)), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._7(7, 0, null, null, 5, "div", [
            ["botChatScroll", ""],
            ["class", "message-panel__messages"]
        ], null, null, null, null, null)), o._6(8, 81920, null, 0, u.a, [o.k], null, null), (e()(), o._23(-1, null, ["\n    "])), (e()(), o._2(16777216, null, null, 1, null, r)), o._6(11, 802816, null, 0, l.c, [o.Q, o.N, o.t], {
            ngForOf: [0, "ngForOf"]
        }, null), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._7(14, 0, null, null, 4, "div", [
            ["class", "message-panel__action-bar"]
        ], null, null, null, null, null)), (e()(), o._23(-1, null, ["\n    "])), (e()(), o._7(16, 0, null, null, 1, "bot-action-bar", [], null, null, null, c.b, c.a)), o._6(17, 638976, null, 0, d.a, [h.a], {
            userInteraction: [0, "userInteraction"]
        }, null), (e()(), o._23(-1, null, ["\n  "])), (e()(), o._23(-1, null, ["\n"]))], function(e, t) {
            var n = t.component;
            e(t, 8, 0);
            e(t, 11, 0, n.storyPoints);
            e(t, 17, 0, n.currentUserInteraction)
        }, null)
    }
    n.d(t, "a", function() {
        return p
    }), t.b = i;
    var o = n(12),
        a = n(292),
        s = n(215),
        u = n(293),
        l = n(50),
        c = n(294),
        d = n(218),
        h = n(28),
        f = n(219),
        p = o._5({
            encapsulation: 2,
            styles: [],
            data: {}
        });
    o._3("bot-message-panel", f.a, function(e) {
        return o._24(0, [(e()(), o._7(0, 0, null, null, 1, "bot-message-panel", [], null, null, null, i, p)), o._6(1, 114688, null, 0, f.a, [h.a], null, null)], function(e, t) {
            e(t, 1, 0)
        }, null)
    }, {}, {}, [])
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return i._24(0, [i._21(402653184, 1, {
            bubbleElementRef: 0
        }), (e()(), i._7(1, 0, null, null, 3, "div", [
            ["class", "message"]
        ], [
            [2, "message--user", null]
        ], null, null, null, null)), (e()(), i._23(-1, null, ["\n  "])), (e()(), i._7(3, 0, [
            [1, 0],
            ["bubble", 1]
        ], null, 0, "div", [
            ["class", "message__inner"]
        ], [
            [8, "innerHTML", 1]
        ], null, null, null, null)), (e()(), i._23(-1, null, ["\n"]))], null, function(e, t) {
            var n = t.component;
            e(t, 1, 0, 1 === (null == n.storyPoint ? null : null == n.storyPoint.options ? null : n.storyPoint.options.sender));
            e(t, 3, 0, null == n.storyPoint ? null : n.storyPoint.displayMessage)
        })
    }
    n.d(t, "a", function() {
        return a
    }), t.b = r;
    var i = n(12),
        o = n(215),
        a = i._5({
            encapsulation: 2,
            styles: [],
            data: {}
        });
    i._3("bot-message", o.a, function(e) {
        return i._24(0, [(e()(), i._7(0, 0, null, null, 1, "bot-message", [], null, null, null, r, a)), i._6(1, 114688, null, 0, o.a, [], null, null)], function(e, t) {
            e(t, 1, 0)
        }, null)
    }, {
        storyPoint: "storyPoint"
    }, {}, [])
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    n(12);
    var r = function() {
        function e(e) {
            this.elementRef = e
        }
        return e.prototype.ngOnInit = function() {
            var e = this;
            this.scrollToBottom(), new MutationObserver(function() {
                e.scrollToBottom()
            }).observe(this.elementRef.nativeElement, {
                childList: !0,
                subtree: !0
            })
        }, e.prototype.scrollToBottom = function() {
            this.elementRef.nativeElement.scroll({
                top: this.elementRef.nativeElement.scrollHeight,
                left: 0,
                behavior: "smooth"
            })
        }, e
    }()
},
function(e, t, n) {
    "use strict";

    function r(e) {
        return s._24(0, [(e()(), s._7(0, 0, null, null, 4, "div", [
            ["class", "action-bar__item"]
        ], null, null, null, null, null)), (e()(), s._23(-1, null, ["\n      "])), (e()(), s._7(2, 0, null, null, 1, "button", [
            ["class", "action-bar__button"]
        ], null, [
            [null, "click"]
        ], function(e, t, n) {
            var r = !0,
                i = e.component;
            if ("click" === t) {
                r = !1 !== i.trigger(e.context.$implicit) && r
            }
            return r
        }, null, null)), (e()(), s._23(3, null, ["", ""])), (e()(), s._23(-1, null, ["\n    "]))], null, function(e, t) {
            e(t, 3, 0, t.context.$implicit.text)
        })
    }

    function i(e) {
        return s._24(0, [(e()(), s._23(-1, null, ["\n    "])), (e()(), s._2(16777216, null, null, 1, null, r)), s._6(2, 802816, null, 0, u.c, [s.Q, s.N, s.t], {
            ngForOf: [0, "ngForOf"]
        }, null), (e()(), s._23(-1, null, ["\n  "]))], function(e, t) {
            e(t, 2, 0, t.component.userInteraction.choices)
        }, null)
    }

    function o(e) {
        return s._24(0, [(e()(), s._23(-1, null, ["\n    "])), (e()(), s._7(1, 0, null, null, 8, "div", [
            ["class", "action-bar__item"]
        ], null, null, null, null, null)), (e()(), s._23(-1, null, ["\n      "])), (e()(), s._7(3, 0, [
            [2, 0],
            ["input", 1]
        ], null, 5, "input", [
            ["class", "action-bar__input"],
            ["type", "text"]
        ], [
            [8, "placeholder", 0],
            [2, "ng-untouched", null],
            [2, "ng-touched", null],
            [2, "ng-pristine", null],
            [2, "ng-dirty", null],
            [2, "ng-valid", null],
            [2, "ng-invalid", null],
            [2, "ng-pending", null]
        ], [
            [null, "ngModelChange"],
            [null, "keyup.enter"],
            [null, "input"],
            [null, "blur"],
            [null, "compositionstart"],
            [null, "compositionend"]
        ], function(e, t, n) {
            var r = !0,
                i = e.component;
            if ("input" === t) {
                r = !1 !== s._19(e, 4)._handleInput(n.target.value) && r
            }
            if ("blur" === t) {
                r = !1 !== s._19(e, 4).onTouched() && r
            }
            if ("compositionstart" === t) {
                r = !1 !== s._19(e, 4)._compositionStart() && r
            }
            if ("compositionend" === t) {
                r = !1 !== s._19(e, 4)._compositionEnd(n.target.value) && r
            }
            if ("ngModelChange" === t) {
                r = !1 !== (i.inputValue = n) && r
            }
            if ("keyup.enter" === t) {
                r = !1 !== i.trigger(i.inputValue) && r
            }
            return r
        }, null, null)), s._6(4, 16384, null, 0, l.b, [s.F, s.k, [2, l.a]], null, null), s._20(1024, null, l.d, function(e) {
            return [e]
        }, [l.b]), s._6(6, 671744, null, 0, l.g, [
            [8, null],
            [8, null],
            [8, null],
            [2, l.d]
        ], {
            model: [0, "model"]
        }, {
            update: "ngModelChange"
        }), s._20(2048, null, l.e, null, [l.g]), s._6(8, 16384, null, 0, l.f, [l.e], null, null), (e()(), s._23(-1, null, ["\n    "])), (e()(), s._23(-1, null, ["\n  "]))], function(e, t) {
            e(t, 6, 0, t.component.inputValue)
        }, function(e, t) {
            var n = t.component;
            e(t, 3, 0, null == n.userInteraction ? null : n.userInteraction.placeholder, s._19(t, 8).ngClassUntouched, s._19(t, 8).ngClassTouched, s._19(t, 8).ngClassPristine, s._19(t, 8).ngClassDirty, s._19(t, 8).ngClassValid, s._19(t, 8).ngClassInvalid, s._19(t, 8).ngClassPending)
        })
    }

    function a(e) {
        return s._24(0, [s._21(402653184, 1, {
            barElementRef: 0
        }), s._21(671088640, 2, {
            inputElementRef: 0
        }), (e()(), s._7(2, 0, [
            [1, 0],
            ["bar", 1]
        ], null, 7, "div", [
            ["class", "action-bar"]
        ], null, null, null, null, null)), (e()(), s._23(-1, null, ["\n  "])), (e()(), s._2(16777216, null, null, 1, null, i)), s._6(5, 16384, null, 0, u.d, [s.Q, s.N], {
            ngIf: [0, "ngIf"]
        }, null), (e()(), s._23(-1, null, ["\n\n  "])), (e()(), s._2(16777216, null, null, 1, null, o)), s._6(8, 16384, null, 0, u.d, [s.Q, s.N], {
            ngIf: [0, "ngIf"]
        }, null), (e()(), s._23(-1, null, ["\n"]))], function(e, t) {
            var n = t.component;
            e(t, 5, 0, "default" === (null == n.userInteraction ? null : n.userInteraction.type));
            e(t, 8, 0, "text" === (null == n.userInteraction ? null : n.userInteraction.type))
        }, null)
    }
    n.d(t, "a", function() {
        return h
    }), t.b = a;
    var s = n(12),
        u = n(50),
        l = n(217),
        c = n(218),
        d = n(28),
        h = s._5({
            encapsulation: 2,
            styles: [],
            data: {}
        });
    s._3("bot-action-bar", c.a, function(e) {
        return s._24(0, [(e()(), s._7(0, 0, null, null, 1, "bot-action-bar", [], null, null, null, a, h)), s._6(1, 638976, null, 0, c.a, [d.a], null, null)], function(e, t) {
            e(t, 1, 0)
        }, null)
    }, {
        userInteraction: "userInteraction"
    }, {}, [])
},
function(e, t, n) {
    "use strict";
    var r = n(296);
    t.forkJoin = r.ForkJoinObservable.create
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(17),
        o = n(87),
        a = n(81),
        s = n(89),
        u = n(90),
        l = function(e) {
            function t(t, n) {
                e.call(this), this.sources = t, this.resultSelector = n
            }
            return r(t, e), t.create = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n - 0] = arguments[n];
                if (null === e || 0 === arguments.length) return new o.EmptyObservable;
                var r = null;
                return "function" == typeof e[e.length - 1] && (r = e.pop()), 1 === e.length && a.isArray(e[0]) && (e = e[0]), 0 === e.length ? new o.EmptyObservable : new t(e, r)
            }, t.prototype._subscribe = function(e) {
                return new c(e, this.sources, this.resultSelector)
            }, t
        }(i.Observable);
    t.ForkJoinObservable = l;
    var c = function(e) {
        function t(t, n, r) {
            e.call(this, t), this.sources = n, this.resultSelector = r, this.completed = 0, this.haveValues = 0;
            var i = n.length;
            this.total = i, this.values = new Array(i);
            for (var o = 0; o < i; o++) {
                var a = n[o],
                    u = s.subscribeToResult(this, a, null, o);
                u && (u.outerIndex = o, this.add(u))
            }
        }
        return r(t, e), t.prototype.notifyNext = function(e, t, n, r, i) {
            this.values[n] = t, i._hasValue || (i._hasValue = !0, this.haveValues++)
        }, t.prototype.notifyComplete = function(e) {
            var t = this.destination,
                n = this.haveValues,
                r = this.resultSelector,
                i = this.values,
                o = i.length;
            if (e._hasValue) {
                if (this.completed++, this.completed === o) {
                    if (n === o) {
                        var a = r ? r.apply(this, i) : i;
                        t.next(a)
                    }
                    t.complete()
                }
            } else t.complete()
        }, t
    }(u.OuterSubscriber)
},
function(e, t, n) {
    "use strict";
    var r = n(298);
    t.fromPromise = r.PromiseObservable.create
},
function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.value,
            n = e.subscriber;
        n.closed || (n.next(t), n.complete())
    }

    function i(e) {
        var t = e.err,
            n = e.subscriber;
        n.closed || n.error(t)
    }
    var o = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        a = n(32),
        s = function(e) {
            function t(t, n) {
                e.call(this), this.promise = t, this.scheduler = n
            }
            return o(t, e), t.create = function(e, n) {
                return new t(e, n)
            }, t.prototype._subscribe = function(e) {
                var t = this,
                    n = this.promise,
                    o = this.scheduler;
                if (null == o) this._isScalar ? e.closed || (e.next(this.value), e.complete()) : n.then(function(n) {
                    t.value = n, t._isScalar = !0, e.closed || (e.next(n), e.complete())
                }, function(t) {
                    e.closed || e.error(t)
                }).then(null, function(e) {
                    a.root.setTimeout(function() {
                        throw e
                    })
                });
                else if (this._isScalar) {
                    if (!e.closed) return o.schedule(r, 0, {
                        value: this.value,
                        subscriber: e
                    })
                } else n.then(function(n) {
                    t.value = n, t._isScalar = !0, e.closed || e.add(o.schedule(r, 0, {
                        value: n,
                        subscriber: e
                    }))
                }, function(t) {
                    e.closed || e.add(o.schedule(i, 0, {
                        err: t,
                        subscriber: e
                    }))
                }).then(null, function(e) {
                    a.root.setTimeout(function() {
                        throw e
                    })
                })
            }, t
        }(n(17).Observable);
    t.PromiseObservable = s
},
function(e, t, n) {
    "use strict";
    var r = n(300);
    t.map = function(e, t) {
        return r.map(e, t)(this)
    }
},
function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        },
        i = n(27);
    t.map = function(e, t) {
        return function(n) {
            if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new o(e, t))
        }
    };
    var o = function() {
        function e(e, t) {
            this.project = e, this.thisArg = t
        }
        return e.prototype.call = function(e, t) {
            return t.subscribe(new a(e, this.project, this.thisArg))
        }, e
    }();
    t.MapOperator = o;
    var a = function(e) {
        function t(t, n, r) {
            e.call(this, t), this.project = n, this.count = 0, this.thisArg = r || this
        }
        return r(t, e), t.prototype._next = function(e) {
            var t;
            try {
                t = this.project.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(i.Subscriber)
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function() {}
    }()
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function() {}
    }()
},
function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var r = function() {
        return function() {}
    }()
}]);