(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[23],{1010:function(e,t,n){},1011:function(e,t,n){},1012:function(e,t,n){},1013:function(e,t,n){"use strict";function c(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),i=c(n(6)),a=n(47);n(56),n(111);var o=c(n(41));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function u(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],0<=t.indexOf(n)||(r[n]=e[n]);return r}var j=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).history=a.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(r.Router,{history:this.history,children:this.props.children})},t}(i.Component),f=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))||this).history=a.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return i.createElement(r.Router,{history:this.history,children:this.props.children})},t}(i.Component),b=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?a.createLocation(e,null,null,t):e},h=function(e){return e},O=i.forwardRef;void 0===O&&(O=h);var p=O((function(e,t){var n=e.innerRef,c=e.navigate,r=e.onClick,a=u(e,["innerRef","navigate","onClick"]),o=a.target,l=s({},a,{onClick:function(t){try{r&&r(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),c())}});return l.ref=h!==O&&t||n,i.createElement("a",l)})),m=O((function(e,t){var n=e.component,c=void 0===n?p:n,a=e.replace,l=e.to,j=e.innerRef,f=u(e,["component","replace","to","innerRef"]);return i.createElement(r.__RouterContext.Consumer,null,(function(e){e||o(!1);var n=e.history,r=d(b(l,e.location),e.location),u=r?n.createHref(r):"",p=s({},f,{href:u,navigate:function(){var t=b(l,e.location);(a?n.replace:n.push)(t)}});return h!==O?p.ref=t||j:p.innerRef=j,i.createElement(c,p)}))})),x=function(e){return e},A=i.forwardRef;void 0===A&&(A=x);var g=A((function(e,t){var n=e["aria-current"],c=void 0===n?"page":n,a=e.activeClassName,l=void 0===a?"active":a,j=e.activeStyle,f=e.className,h=e.exact,O=e.isActive,p=e.location,g=e.sensitive,v=e.strict,y=e.style,R=e.to,w=e.innerRef,N=u(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.__RouterContext.Consumer,null,(function(e){e||o(!1);var n=p||e.location,a=d(b(R,n),n),u=a.pathname,k=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),P=k?r.matchPath(n.pathname,{path:k,exact:h,sensitive:g,strict:v}):null,S=!!(O?O(P,n):P),E=S?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(f,l):f,C=S?s({},y,{},j):y,B=s({"aria-current":S&&c||null,className:E,style:C,to:a},N);return x!==A?B.ref=t||w:B.innerRef=w,i.createElement(m,B)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return r.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return r.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return r.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return r.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return r.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return r.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return r.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return r.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return r.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return r.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return r.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return r.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return r.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return r.withRouter}}),t.BrowserRouter=j,t.HashRouter=f,t.Link=m,t.NavLink=g},111:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}},1384:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));var c=n(6),r=n.n(c),i=n(9),a="data:image/png;base64,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",o=n(25),s=n(110),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAABXklEQVQoU2WRP0hVcRTHP9/fvT6ejzJpCIVaIkNzMZpaskGECB2ypxA+aFGxocmh0bm2COmlEIEI+ujPIBi4ODQ4BLqYoETgYHs9VPTe+40raGTf7Zzv+XC+nCMmJ0O5ZbhXIb3yuxTml4bbfnFG5er3C5IHwTsLu9eWNfBmuzPIXwQFw6f6vsaXnv4Fc8BKXgep33BIFt3Rw+ntu3K2LCkGH2K9dXPzRG3wUv3ey9Wmc40XXwg/BhVsJxB61Ff9WiqG83NC94EYOMjMK8V6TpY9k/UEKAIJ1qLrxUfK4z+ofmuNFc0idQOR0R6wDnQJl4DUeCXN0sqHsRs/j6FjcGrralTgnazb4AiU2Q4SKWjVpJXaSPuPfPYUyouh6a0Oo1lwFxCAzHgtQZWPI9c3Txb8A+XNgZmNm8ENC4LL+YntZKg22plHPdV/UO6UpzZvqRD3pkd8fj/etnb2b38ARWSBW029yFUAAAAASUVORK5CYII=",u=n(781),j=(n(913),n(18));function f(e){var t=e.closeMenu,n=e.lang,r=e.locale,i=!!Object(o.useRouteMatch)("/mining"),f=!!Object(o.useRouteMatch)("/futures/lite"),b=!!Object(o.useRouteMatch)("/options/lite"),d=!!Object(o.useRouteMatch)("/deritoken"),h=!!Object(o.useRouteMatch)("/bridge");return Object(c.useEffect)((function(){return document.querySelectorAll(".menu li a").forEach((function(e){return e.addEventListener("click",t)})),function(){}}),[]),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("a",{className:"logo",href:"https://deri.finance/?locale=".concat(r,"#index"),children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsx)("span",{className:"close-menu",click:"close",onClick:t})]}),Object(j.jsx)("div",{className:"ul",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:i?"selected":"",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://app.deri.finance/?locale=".concat(r,"#mining"),children:n.mining})}),Object(j.jsx)("li",{className:f?"selected":"",children:Object(j.jsxs)("a",{rel:"noreferrer",href:"https://app.deri.finance/?locale=".concat(r,"#/futures/lite"),children:[" ",n.trade," "]})}),Object(j.jsxs)("li",{className:b?"selected":"",children:[Object(j.jsx)("span",{className:"beta",children:n.beta}),Object(j.jsxs)("a",{rel:"noreferrer",href:"https://app.deri.finance/?locale=".concat(r,"#/options/lite"),children:[" ",n.options," "]})]}),Object(j.jsx)("li",{className:d?"selected":"",children:Object(j.jsx)(s.b,{to:"/deritoken",children:n["deri-token"]})}),Object(j.jsx)("li",{className:h?"selected":"",children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://bridge.deri.finance/?locale=".concat(r,"#bridge"),children:n.bridge})}),Object(j.jsxs)("li",{className:"ref",children:[n.docs," ",Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsxs)("ul",{className:"ref-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/whitepaper",children:n.whitepaper})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/code-audits",children:n["code-audit"]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://deri.finance/?locale=".concat(r,"#/team"),children:n.team})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/faq",children:n.faq})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://docs.deri.finance/",children:n.guide})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/deri-finance/",children:n.github})})]})]}),Object(j.jsxs)("li",{className:"ref",children:[n.more," ",Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsxs)("ul",{className:"ref-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/trade-to-earn",children:n.signin})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{rel:"noreferrer",className:"info-item",href:"https://info.deri.finance/?locale=".concat(r,"#info"),children:n.stats})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/retired",children:n["retired-pools"]})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{rel:"noreferrer",href:"https://governance.deri.finance/?locale=".concat(r,"#governance"),children:n.governance})})]})]}),Object(j.jsxs)("li",{className:"event",children:[Object(j.jsx)("span",{className:"y-event",children:"Trade to Earn"}),Object(j.jsx)(s.b,{className:"",to:"/trade-to-earn",children:"$1 Million in DERI"})]})]})}),Object(j.jsx)(u.a,{lang:n})]})}n(1010);var b=n(909),d=n(997),h=n(48),O=n(747);var p,m=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,n=Object(c.useState)({}),r=Object(i.a)(n,2),o=r[0],s=r[1],l=Object(O.a)(t.dict,"header"),u=Object(O.a)(t.dict,"footer");return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("img",{className:"menu-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAARklEQVRIS2MMm3XzAgMjoz4DDcF/BobzjHSziIYeQTGacdQickNgGAYd3ZI33SwiN3JJ1TcMEwOpQUCu+mEYdHRL3vSyCAAv2BujNlrcrwAAAABJRU5ErkJggg==",onClick:function(){s({left:0})}}),Object(j.jsx)("div",{className:"menu-left",style:o,children:Object(j.jsx)(f,{closeMenu:function(){return s({left:"-110%"})},lang:Object.assign(l,u),locale:t.locale})}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:a,alt:"",onClick:function(){window.location.href="https://deri.finance/"}})}),Object(j.jsxs)("div",{className:"nav-right",children:[Object(j.jsx)(b.a,{}),Object(j.jsx)(d.a,{})]})]})}))),x=n(2),A=n(3),g=n(7),v=n(8),y=n(113),R=n(911),w=n(912),N=Object(y.a)((function(){return Promise.all([n.e(0),n.e(5),n.e(9),n.e(30)]).then(n.bind(null,1366))})),k=Object(y.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(2),n.e(14),n.e(56)]).then(n.bind(null,1367))})),P=Object(y.a)((function(){return n.e(33).then(n.bind(null,1368))})),S=Object(y.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(21)]).then(n.bind(null,1369))})),E=Object(y.a)((function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,1370))})),C=Object(y.a)((function(){return n.e(32).then(n.bind(null,1371))})),B=Object(y.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(25)]).then(n.bind(null,1372))})),z=Object(y.a)((function(){return Promise.all([n.e(0),n.e(12),n.e(41)]).then(n.bind(null,1373))})),K=Object(y.a)((function(){return Promise.all([n.e(15),n.e(54)]).then(n.bind(null,1374))})),I=Object(y.a)((function(){return n.e(37).then(n.bind(null,1375))})),Q=(Object(y.a)((function(){return Promise.all([n.e(0),n.e(13),n.e(55)]).then(n.bind(null,1376))})),Object(y.a)((function(){return n.e(35).then(n.bind(null,1377))})),Object(y.a)((function(){return n.e(49).then(n.bind(null,1378))}))),M=Object(y.a)((function(){return n.e(45).then(n.bind(null,1379))})),J=Object(y.a)((function(){return n.e(47).then(n.bind(null,1380))})),q=Object(y.a)((function(){return n.e(43).then(n.bind(null,1381))})),D=Object(y.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6),n.e(8)]).then(n.bind(null,1388))})),U=Object(y.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(7)]).then(n.bind(null,1365))})),G=Object(y.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(11),n.e(57)]).then(n.bind(null,1382))})),H=Object(o.withRouter)(p=Object(R.a)(p=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){var e=this.props.dict;return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(o.Switch,{children:[Object(j.jsx)(o.Route,{exact:!0,path:"/index",component:function(){return Object(j.jsx)(k,{lang:e.home})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/team",component:function(){return Object(j.jsx)(P,{lang:e.team})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/deritoken",component:function(){return Object(j.jsx)(E,{lang:e.home})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/logo",component:function(){return Object(j.jsx)(q,{lang:e.home})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/bridge",component:function(){return Object(j.jsx)(K,{lang:e.bridge})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/signin",component:function(){return Object(j.jsx)(C,{lang:e.signin})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/nuls",component:function(){return Object(j.jsx)(I,{lang:e.nuls})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/governance",component:function(){return Object(j.jsx)(Q,{lang:e.governance})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/diphistorytwo",component:function(){return Object(j.jsx)(J,{lang:e["dip-history-two"]})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/diphistory",component:function(){return Object(j.jsx)(M,{lang:e["dip-history"]})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/",render:function(){return Object(j.jsx)(w.a,{})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/futures/lite",component:function(){return Object(j.jsx)(N,{lang:e.lite})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/options/lite",component:function(){return Object(j.jsx)(N,{lang:e.lite})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/mining",component:function(){return Object(j.jsx)(S,{lang:e.mining})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/retired",component:function(){return Object(j.jsx)(B,{lang:e.mining})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/mining/:version/:chainId/:type/:symbol/:baseToken/:address",component:function(){return Object(j.jsx)(z,{lang:e.mining})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/trade-to-earn",component:function(){return Object(j.jsx)(G,{lang:e["trading-mining"]})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/info",component:function(){return Object(j.jsx)(D,{})}}),Object(j.jsx)(o.Route,{exact:!0,path:"/info/:add/:catalog/:bToken/:network",component:function(){return Object(j.jsx)(U,{})}}),Object(j.jsx)(o.Route,{component:function(){return Object(j.jsx)(N,{lang:e.lite})}})]})})}}]),n}(r.a.Component))||p)||p,V=(n(1011),n(910));var L=Object(h.b)("intl")(Object(h.c)((function(e){var t=e.intl,n=Object(O.a)(t.dict,"footer"),c=Object(o.useRouteMatch)("/index"),r=Object(o.useRouteMatch)("/team"),i=!c&&!r;return Object(j.jsx)("div",{className:"wallet-panel",children:i&&Object(j.jsx)(V.a,{lang:n})})})));n(1012);var T=n(1013);function X({locale:e}){const t=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),n=Object(T.useLocation)().pathname.split("/")[1];return Object(c.useEffect)((()=>(document.querySelector("html").setAttribute("style",`font-size : ${t.width/375*100}px`),()=>{})),[t]),Object(j.jsxs)("div",{className:`mobile ${n} ${e}`,children:[Object(j.jsx)(m,{}),Object(j.jsx)(H,{}),Object(j.jsx)(L,{})]})}},781:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(6),n(913);var c=n(18);function r(e){var t=e.lang;return Object(c.jsxs)("div",{className:"m-footer",children:[Object(c.jsxs)("div",{className:"footer-link",children:[Object(c.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"mailto: service@deri.finance",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-envelope"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://deri-protocol.medium.com",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-medium"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://twitter.com/DeriProtocol",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-twitter"})})}),Object(c.jsx)("a",{className:"iocn-a",rel:"noreferrer",href:"https://github.com/deri-finance",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-github"})})}),Object(c.jsx)("a",{rel:"noreferrer",className:"iocn-a",href:"https://t.me/DeriProtocol",children:Object(c.jsx)("div",{className:"circle",children:Object(c.jsx)("div",{className:"fa fa-paper-plane"})})})]}),Object(c.jsxs)("div",{className:"banquan",children:["\xa9 2021 ",t["deri-protocol"]]})]})}},913:function(e,t,n){}}]);
//# sourceMappingURL=23.2712f955.chunk.js.map