(this["webpackJsonpaetherai-lunch"]=this["webpackJsonpaetherai-lunch"]||[]).push([[0],{61:function(t,e,n){},62:function(t,e,n){},87:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(4),c=n.n(o),r=(n(61),n.p,n(62),n(12)),l=n(5),s=function(t){var e=t.segments,n=t.segColors,i=t.winningSegment,o=t.onFinished,c=t.primaryColor,s=void 0===c?"black":c,h=t.contrastColor,u=void 0===h?"white":h,f=t.buttonText,d=void 0===f?"Spin":f,b=t.isOnlyOnce,g=void 0===b||b,j=t.size,v=void 0===j?290:j,m=t.upDuration,O=void 0===m?100:m,p=t.downDuration,x=void 0===p?500:p,y=t.fontFamily,P=void 0===y?"proxima-nova":y,S="",M=!1,I=Object(a.useState)(!1),T=Object(r.a)(I,2),w=T[0],k=T[1],C=0,E=e.length,L=0,A=0,B=null,F=Math.PI/"".concat(e.length),D=e.length*O,N=e.length*x,W=0,J=0,Q=300,z=300;Object(a.useEffect)((function(){return q(),setTimeout((function(){window.scrollTo(0,1)}),0),function(){document.getElementById("canvas").removeEventListener("click",H)}}),[e]);var q=function(){S="",M=!1,k(!1),C=0,E=e.length,B=null,F=Math.PI/"".concat(e.length),D=e.length*O,N=e.length*x,W=0,J=0,G(),R()},G=function(){var t=document.getElementById("canvas");console.log(navigator),-1!==navigator.userAgent.indexOf("MSIE")&&((t=document.createElement("canvas")).setAttribute("width",1e3),t.setAttribute("height",600),t.setAttribute("id","canvas"),document.getElementById("wheel").appendChild(t)),t.addEventListener("click",H,!1),B=t.getContext("2d")},H=function(){M=!0,0===C&&(W=(new Date).getTime(),F=Math.PI/e.length,J=0,C=setInterval(K,E))},K=function(){J++,R();var t=(new Date).getTime()-W,n=0,a=!1;for(t<D?(n=t/D,A=F*Math.sin(n*Math.PI/2)):(i&&S===i&&J>e.length?(n=t/D,A=F*Math.sin(n*Math.PI/2+Math.PI/2),n=1):(n=t/N,A=F*Math.sin(n*Math.PI/2+Math.PI/2)),n>=1&&(a=!0)),L+=A;L>=2*Math.PI;)L-=2*Math.PI;a&&(k(!0),o(S),clearInterval(C),C=0,A=0)},R=function(){U(),Y(),Z()},X=function(t,a,i){var o=B,c=e[t];o.save(),o.beginPath(),o.moveTo(Q,z),o.arc(Q,z,v,a,i,!1),o.lineTo(Q,z),o.closePath(),o.fillStyle=n[t],o.fill(),o.stroke(),o.save(),o.translate(Q,z),o.rotate((a+i)/2),o.fillStyle=u,o.font="bold 1em "+P,o.fillText(c.substr(0,21),v/2+20,0),o.restore()},Y=function(){var t=B,n=L,a=e.length,i=2*Math.PI;t.lineWidth=1,t.strokeStyle=s,t.textBaseline="middle",t.textAlign="center",t.font="1em "+P;for(var o=1;o<=a;o++){var c=i*(o/a)+L;X(o-1,n,c),n=c}t.beginPath(),t.arc(Q,z,50,0,i,!1),t.closePath(),t.fillStyle=s,t.lineWidth=10,t.strokeStyle=u,t.fill(),t.font="bold 1em "+P,t.fillStyle=u,t.textAlign="center",t.fillText(d,Q,303),t.stroke(),t.beginPath(),t.arc(Q,z,v,0,i,!1),t.closePath(),t.lineWidth=10,t.strokeStyle=s,t.stroke()},Z=function(){var t=B;t.lineWidth=1,t.strokeStyle=u,t.fileStyle=u,t.beginPath(),t.moveTo(320,250),t.lineTo(280,250),t.lineTo(Q,230),t.closePath(),t.fill();var n=L+Math.PI/2,a=e.length-Math.floor(n/(2*Math.PI)*e.length)-1;a<0&&(a+=e.length),t.textAlign="center",t.textBaseline="middle",t.fillStyle=s,t.font="bold 1.5em "+P,S=e[a],M&&t.fillText(S,310,z+v+50)},U=function(){B.clearRect(0,0,1e3,800)};return Object(l.jsx)("div",{id:"wheel",children:Object(l.jsx)("canvas",{id:"canvas",width:"600",height:"600",style:{pointerEvents:w&&g?"none":"auto"}})})},h=n(53),u=n(110),f=n(115),d=n(112),b=n(114);function g(t){var e=t.restaurantListList,n=t.setListName,i=t.currentListName,o=Object(h.a)({palette:{primary:{main:"#49513C"}}}),c=Object(a.useState)(null),s=Object(r.a)(c,2),g=s[0],j=s[1],v=Boolean(g),m=function(t,e){j(null),n(t)};return Object(l.jsxs)(u.a,{theme:o,children:[Object(l.jsxs)(f.a,{id:"basic-button",color:"primary",variant:"contained",onClick:function(t){j(t.currentTarget)},style:{textTransform:"none"},children:[i," set"]}),Object(l.jsx)(d.a,{id:"basic-menu",anchorEl:g,open:v,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"},children:e.map((function(t){return Object(l.jsx)(b.a,{onClick:function(e){return m(t)},children:t})}))})]})}var j=n(52),v=n.n(j);var m=function(){var t=Object(a.useState)(!0),e=Object(r.a)(t,2),n=e[0],i=e[1],o=Object(a.useState)("general"),c=Object(r.a)(o,2),h=c[0],u=c[1],f=Object(a.useState)([]),d=Object(r.a)(f,2),b=d[0],j=d[1],m=Object(a.useState)([]),O=Object(r.a)(m,2),p=O[0],x=O[1],y=Object(a.useState)([]),P=Object(r.a)(y,2),S=P[0],M=P[1],I=Object(a.useState)([]),T=Object(r.a)(I,2),w=T[0],k=T[1],C=["#ff9900","#b36b00","#ffe6bf","#ffcc80","#00b366","#007d48","#bfffe4","#80ffc9","#400099","#2d006b","#dabfff","#b580ff"],E=function(){var t=[];p.length>0&&j(Object.keys(p[0])),p.forEach((function(e){h in e&&""!==e[h]&&t.push(e[h])})),function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}}(t),M(t);var e=Math.ceil(t.length/C.length);k(function(t,e){return Array.from({length:e},(function(){return t})).flat()}(C,e))};return Object(a.useEffect)((function(){v.a.get("https://opensheet.vercel.app/1wqfGJb1KAiTt2mhr2oQkfBbfiQrAJapH8BXQ196YZgo/restaurant").then((function(t){x(t.data)})).catch((function(t){i(!1),console.error(t)}))}),[]),Object(a.useEffect)((function(){M([]),E()}),[p,h]),S.length>0?Object(l.jsxs)("div",{className:"wheelwrapper",children:[Object(l.jsx)(g,{restaurantListList:b,setListName:u,currentListName:h}),Object(l.jsx)(s,{segments:S,segColors:w,onFinished:function(t){return function(t){console.log(t)}(t)},primaryColor:"black",contrastColor:"white",buttonText:"Spin",isOnlyOnce:!1,size:200,upDuration:100,downDuration:500,fontFamily:"Arial"})]}):n?Object(l.jsx)("p",{children:"Loading ..."}):Object(l.jsx)("p",{children:"Error!"})};var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:"aetherAI Lunch Wheel"}),Object(l.jsx)(m,{})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),o(t),c(t)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),p()}},[[87,1,2]]]);
//# sourceMappingURL=main.b3dee2b5.chunk.js.map