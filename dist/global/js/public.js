"use strict";function loading(){setTimeout(function(){Loading.hide()},2e3)}var $$=function(e,t){return t=t||document,t.querySelectorAll(e)},Popup=function(){return{wrapper:null,cur:null,show:function(e){this.wrapper||(this.wrapper=document.createElement("div"),this.wrapper.className="popupWrapper",document.body.appendChild(this.wrapper)),e&&document.getElementById(e)&&(this.cur&&this.hide(),this.cur=document.getElementById(e),this.wrapper.classList.add("is-show"),this.wrapper.appendChild(this.cur))},hide:function(){this.wrapper.classList.remove("is-show"),document.body.appendChild(this.cur),this.cur=null}}}(),Popupp=function(){return{wrapperr:null,show:function(e){this.wrapperr=document.createElement("div"),this.wrapperr.className="popupWrapperr",document.body.appendChild(this.wrapperr),this.cur=document.getElementById(e),this.wrapperr.classList.add("is-show"),this.wrapperr.appendChild(this.cur)},hide:function(){this.wrapperr.remove()}}}(),Loading=function(){function e(){i=document.createElement("div"),i.id="_popup-Loading",i.className="popup-Loading",document.body.appendChild(i),Popupp.show("_popup-Loading")}function t(){Popupp.hide()}var i;return{show:e,hide:t}}(),Toast=function(){var e=document.createElement("div");return e.className="toast",{show:function(t){t&&t.info&&(t.delay=t.delay||1500,e.innerHTML="<span>"+t.info+"</span>",t.ico&&(e.innerHTML='<i style="background-image:url('+t.ico+')"></i>'+e.innerHTML),document.body.appendChild(e),setTimeout(function(){e.classList.add("is-show")},0),setTimeout(function(){e.classList.remove("is-show"),setTimeout(function(){document.body.removeChild(e)},500)},t.delay))}}}();