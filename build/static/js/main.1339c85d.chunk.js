(this.webpackJsonpwikipedia=this.webpackJsonpwikipedia||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(4),a=c.n(s),r=(c(9),c(10),c(2)),o=(c(11),c(0)),j=function(){var e,t=Object(n.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)([]),j=Object(r.a)(a,2),d=j[0],u=j[1],h=Object(n.useState)("hide"),l=Object(r.a)(h,2),p=l[0],b=l[1],O=function(e){var t=e.target.value;try{fetch("https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search="+t).then((function(e){return e.json()})).then((function(e){s(e[3]),u(e[1])}))}catch(c){b("show"),setTimeout((function(){b("hide")}),1e3)}};return Object(o.jsxs)("div",{className:"Wrapper",children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("i",{className:"fas fa-globe-europe"}),Object(o.jsx)("h1",{children:"WikipediA"}),Object(o.jsx)("h5",{children:"A free Encyclopedia"}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{id:"logo",src:"https://logos-world.net/wp-content/uploads/2020/09/Wikipedia-Logo-2003-present.png",alt:""})}),Object(o.jsx)("input",{id:"input",type:"text",onChange:function(t){clearTimeout(e),e=setTimeout((function(){O(t)}),5e3),O(t)}}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:p,children:"Please enter a valid keyword."})]}),Object(o.jsx)("div",{className:"container-two",children:i&&d.map((function(e,t){return Object(o.jsx)("div",{className:"suggestion",children:Object(o.jsx)("a",{id:"sugg",href:i[t],children:e})},i[t])}))})]})};var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{})})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.1339c85d.chunk.js.map