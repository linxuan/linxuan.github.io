$(document).ready(function(){var r={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,o,n,a,c,h,d,i="",C=0;for(t=r._utf8_encode(t);C<t.length;)a=(e=t.charCodeAt(C++))>>2,c=(3&e)<<4|(o=t.charCodeAt(C++))>>4,h=(15&o)<<2|(n=t.charCodeAt(C++))>>6,d=63&n,isNaN(o)?h=d=64:isNaN(n)&&(d=64),i=i+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(h)+this._keyStr.charAt(d);return i},decode:function(t){var e,o,n,a,c,h,d="",i=0;for(t=t.replace(/[^A-Za-z0-9+/=]/g,"");i<t.length;)e=this._keyStr.indexOf(t.charAt(i++))<<2|(a=this._keyStr.indexOf(t.charAt(i++)))>>4,o=(15&a)<<4|(c=this._keyStr.indexOf(t.charAt(i++)))>>2,n=(3&c)<<6|(h=this._keyStr.indexOf(t.charAt(i++))),d+=String.fromCharCode(e),64!=c&&(d+=String.fromCharCode(o)),64!=h&&(d+=String.fromCharCode(n));return d=r._utf8_decode(d)},_utf8_encode:function(r){r=r.replace(/rn/g,"n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)(o=r.charCodeAt(e))<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}};$(".exturl").on("click",function(){var t=$(this).attr("data-url"),e=r.decode(t);return window.open(e,"_blank"),!1})});