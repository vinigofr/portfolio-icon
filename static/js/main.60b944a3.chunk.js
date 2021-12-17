(this["webpackJsonpportfolio-icon"]=this["webpackJsonpportfolio-icon"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o,a=n(0),c=n.n(a),r=n(6),i=n.n(r),l=(n(21),n(3)),s=(n(22),c.a.createContext()),u=function(e){var t=e.title,n=e.backgColor,o=e.icon,a=e.logoColor;return"https://img.shields.io/badge/".concat(t,"-").concat(n,"?style=for-the-badge&logo=").concat(o,"&logoColor=").concat(a)},b=n(4),d=n(5),j=n(1);var p=function(e){var t=e.readyURL,n=e.title,a=c.a.useState(!1),r=Object(l.a)(a,2),i=r[0],s=r[1],u=d.a.button(o||(o=Object(b.a)(["\n    display: block;\n    color: aliceblue;\n    ","\n    text-align: center;\n    font-size: 16px;\n    width: 220px;\n    background-color: #4CAF50;;\n    border-radius: 5px;\n    margin: 10px auto;\n    text-decoration: none;\n    height: 50px;\n    border-style: none;\n    &:hover {\n      background-color: #3e8e41;\n      cursor: pointer;\n    }\n\n    &:active {\n      transform: scale(0.9);\n    }\n  "])),i?"font-weight: bold;":"");return Object(j.jsx)(u,{onClick:function(){return navigator.clipboard.writeText(t),s(!0),void setTimeout((function(){s(!1)}),3e3)},children:i?"Copiado! \u2705":"Copiar link de ".concat(n)})};var x,m=function(){var e=c.a.useContext(s),t=e.params,n=e.firstTime,o=u(t);return!n&&Object(j.jsx)(p,{readyURL:o,title:t.title})},g=(n(28),function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{className:"mainTitle",children:"Portfolio Icon Maker"})})}),O=n(7),f=n(2),h=(n(29),n(30),n(11)),C=n.n(h),v=n(16),y=d.a.input(x||(x=Object(b.a)(["\n  &:disabled {\n    background-color: #ad8989;\n    opacity: 0.3;\n    cursor: not-allowed;\n    color: #fff;\n  }\n"])));var k,F=function(e){var t=e.inputParams,n=e.emptyColor,o=c.a.useState(!0),a=Object(l.a)(o,2),r=a[0],i=a[1],s=function(){var e=Object(v.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,i(""===n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("label",{className:"inputLabel",htmlFor:"icon",id:"icon-field",children:[Object(j.jsx)("span",{className:"inputTitle",children:"\xcdcone de exibi\xe7\xe3o"}),Object(j.jsx)(y,Object(f.a)(Object(f.a)({className:"input",onChange:function(e){return s(e)},type:"text",name:"icon",id:"icon",placeholder:"Ex: google"},n),{},{value:t.icon,autoComplete:"off"}))]}),Object(j.jsxs)("label",{className:"inputLabel",htmlFor:"logoColor",children:[Object(j.jsx)("span",{className:"inputTitle",children:"Cor do \xedcone"}),Object(j.jsx)(y,{className:"input",type:"text",name:"logoColor",id:"logoColor",placeholder:"Cor em ingl\xeas ou hexadecimal (sem #)",value:t.logoColor,autoComplete:"off",disabled:r})]})]})},N=n(38),T=d.a.button(k||(k=Object(b.a)(["\n  background-color: #4CAF50;\n  border: none;\n  color: rgb(255, 255, 255);\n  padding: 15px 0;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-transition-duration: 0.4s; /* Safari */\n  transition-duration: 0.4s;\n  border-radius: 5px;\n  border: 1px solid #4CAF50;\n  width: 220px;\n  // margin: 4px auto;\n\n  &:hover {\n      background-color: rgb(255, 255, 255);\n      color: #4CAF50;\n  }\n"]))),w=function(){var e=c.a.useContext(s),t=e.setParams,n=e.setFirstTime,o=c.a.useState({title:"",backgColor:"",icon:"",logoColor:""}),a=Object(l.a)(o,2),r=a[0],i=a[1],u=c.a.useState(!1),b=Object(l.a)(u,2),d=b[0],p=b[1],x=c.a.useState(!1),m=Object(l.a)(x,2),g=m[0],h=m[1],C=r.icon;c.a.useEffect((function(){""===C&&i(Object(f.a)(Object(f.a)({},r),{},{logoColor:""}))}),[C]);var v={boxShadow:"0 0 1px 1px red"},y={transition:"opacity ".concat(200,"ms ease-in-out"),opacity:0},k={entering:{opacity:.5},entered:{opacity:1},exiting:{opacity:.5},exited:{display:"none"}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onChange:function(e){return function(e){var t=e.target,n=t.name,o=t.value;i(Object(f.a)(Object(f.a)({},r),{},Object(O.a)({},n,o)))}(e)},className:"formInput",children:[Object(j.jsxs)("label",{className:"inputLabel",htmlFor:"title",children:[Object(j.jsx)("span",{className:"inputTitle",children:"T\xedtulo"}),Object(j.jsx)("input",Object(f.a)(Object(f.a)({},d&&!r.title?{style:v}:null),{},{className:"input",type:"text",name:"title",id:"title",placeholder:"Ex: google",readOnly:!1,value:r.title}))]}),Object(j.jsxs)("label",{className:"inputLabel",htmlFor:"backgColor",children:[Object(j.jsx)("span",{className:"inputTitle",children:"Cor de fundo"}),Object(j.jsx)("input",Object(f.a)(Object(f.a)({},d&&!r.backgColor?{style:v}:null),{},{className:"input",type:"text",name:"backgColor",id:"backgColor",readOnly:!1,placeholder:"Cor em ingl\xeas ou hexadecimal (sem #)",value:r.backgColor}))]}),Object(j.jsx)(N.a,{in:g,timeout:200,children:function(e){return Object(j.jsx)("div",{style:Object(f.a)(Object(f.a)({},y),k[e]),children:Object(j.jsx)(F,{state:e,style:{backgroundColor:"black"},inputParams:r,setInputParams:i,emptyColor:d&&!r.icon?{style:v}:null})})}}),Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",padding:"10px 0"},children:[Object(j.jsxs)(T,{type:"button",onClick:function(){return h(!g),void(g||i(Object(f.a)(Object(f.a)({},r),{},{icon:"",logoColor:""})))},children:["".concat(g?"Desabilitar op\xe7\xe3o de":"Habilitar op\xe7\xe3o de")," \xedcones"]}),Object(j.jsx)("button",{type:"button",onClick:function(){!r.title||!r.backgColor||!r.icon&&g?(p(!0),setTimeout((function(){p(!1)}),3e3)):(t(r),n(!1),i({title:"",backgColor:"",icon:"",logoColor:""}))},className:"createIconButton",children:"Criar \xedcone"})]})]})})},S=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(w,{}),Object(j.jsx)(m,{})]})},P=function(){var e=c.a.useState({}),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useState(!0),r=Object(l.a)(a,2),i={params:n,setParams:o,firstTime:r[0],setFirstTime:r[1]};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(s.Provider,{value:i,children:Object(j.jsx)(S,{})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)}))};i.a.render(Object(j.jsx)(P,{}),document.getElementById("root")),L()}},[[35,1,2]]]);
//# sourceMappingURL=main.60b944a3.chunk.js.map