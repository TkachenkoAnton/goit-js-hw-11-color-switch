(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO");var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={body:document.querySelector("body"),startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')},d=null;a.stopBtn.disabled=!0;a.startBtn.addEventListener("click",(function(){d=setInterval((function(){var t,n,o=(t=0,n=e.length,Math.floor(Math.random()*(n-t+1)+t)),d=e[""+o];a.body.style.backgroundColor=d}),1e3),a.startBtn.disabled=!0,a.stopBtn.disabled=!1})),a.stopBtn.addEventListener("click",(function(){a.stopBtn.disabled=!0,a.startBtn.disabled=!1,clearInterval(d)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.68a44ca98aafcd284a3b.js.map