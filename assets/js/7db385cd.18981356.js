(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},600:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(1140)),i={id:"edge",title:"Interface: Edge",sidebar_label:"Edge"},c={unversionedId:"api/interfaces/edge",id:"version-4.3/api/interfaces/edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/edge.md",slug:"/api/interfaces/edge",permalink:"/docs/api/interfaces/edge",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/edge.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1611114315,sidebar_label:"Edge",sidebar:"version-4.3/API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/api/interfaces/entityproperty"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Edge"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"from"},"from"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"from"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"to"},"to"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"to"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"weight"},"weight"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"weight"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L19"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:19"))))}b.isMDXComponent=!0}}]);