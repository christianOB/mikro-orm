(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,t,r){"use strict";r.r(t);r(312),r(334),r(335),r(25),r(20),r(21),r(53);var a=r(0),n=r.n(a),l=r(297),o=r(292);t.default=function(e){var t=e.tags,r={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);r[t]=r[t]||[],r[t].push(e)}));var a=Object.entries(r).sort((function(e,t){var r=e[0],a=t[0];return r===a?0:r>a?1:-1})).map((function(e){var r=e[0],a=e[1];return n.a.createElement("div",{key:r},n.a.createElement("h3",null,r),a.map((function(e){return n.a.createElement(o.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Blog Tags",description:"Blog Tags"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},a)))))}},298:function(e,t,r){"use strict";r(52),r(25),r(20),r(21),r(53);var a=r(0),n=r.n(a),l=r(294),o=r.n(l),c=r(292),i=r(293),s=r(295),u=r(127),m=r.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function h(e){var t=e.to,r=e.href,a=e.label,l=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["to","href","label"]),o=Object(s.a)(t);return n.a.createElement(c.a,f({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:r}:{to:o},l),a)}var v=function(e){var t=e.url,r=e.alt;return n.a.createElement("img",{className:"footer__logo",alt:r,src:t})};t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,r=(void 0===t?{}:t).footer,a=r||{},l=a.copyright,c=a.links,u=void 0===c?[]:c,f=a.logo,g=void 0===f?{}:f,d=Object(s.a)(g.src);return r?n.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===r.style})},n.a.createElement("div",{className:"container"},u&&u.length>0&&n.a.createElement("div",{className:"row footer__links"},u.map((function(e,t){return n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?n.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:100,height:30,title:"GitHub Stars"}):e.html?n.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(h,e))}))):null)}))),(g||l)&&n.a.createElement("div",{className:"text--center"},g&&g.src&&n.a.createElement("div",{className:"margin-bottom--sm"},g.href?n.a.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:m.a.footerLogoLink},n.a.createElement(v,{alt:g.alt,url:d})):n.a.createElement(v,{alt:g.alt,url:d})),l,"Icons made by ",n.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",n.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}},312:function(e,t,r){var a=r(26).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||r(9)&&a(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},334:function(e,t,r){var a=r(13),n=r(81)(!0);a(a.S,"Object",{entries:function(e){return n(e)}})},335:function(e,t,r){"use strict";var a=r(13),n=r(28),l=r(37),o=r(14),c=[].sort,i=[1,2,3];a(a.P+a.F*(o((function(){i.sort(void 0)}))||!o((function(){i.sort(null)}))||!r(336)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),n(e))}})},336:function(e,t,r){"use strict";var a=r(14);e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}}}]);