(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),l=p(r),O=n,d=l["".concat(o,".").concat(O)]||l[O]||m[O]||a;return r?c.a.createElement(d,i(i({ref:t},s),{},{components:r})):c.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},527:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),a=(r(0),r(1086)),o={id:"connectionexception",title:"Class: ConnectionException",sidebar_label:"ConnectionException"},i={unversionedId:"api/classes/connectionexception",id:"version-4.3/api/classes/connectionexception",isDocsHomePage:!1,title:"Class: ConnectionException",description:"Base class for all connection related errors detected in the driver.",source:"@site/versioned_docs/version-4.3/api/classes/connectionexception.md",slug:"/api/classes/connectionexception",permalink:"/docs/api/classes/connectionexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/connectionexception.md",version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608758108,sidebar_label:"ConnectionException",sidebar:"version-4.3/API",previous:{title:"Class: Connection",permalink:"/docs/api/classes/connection"},next:{title:"Class: ConstraintViolationException",permalink:"/docs/api/classes/constraintviolationexception"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],s={rightToc:b};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Base class for all connection related errors detected in the driver."),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/driverexception"}),"DriverException")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("strong",{parentName:"p"},"ConnectionException")))),Object(a.b)("h2",{id:"constructors"},"Constructors"),Object(a.b)("h3",{id:"constructor"},"constructor"),Object(a.b)("p",null,"+"," ",Object(a.b)("strong",{parentName:"p"},"new ConnectionException"),"(",Object(a.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/driverexception#error"}),"Error"),"): ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/connectionexception"}),"ConnectionException")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#constructor"}),"constructor"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"previous")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/classes/driverexception#error"}),"Error"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/connectionexception"}),"ConnectionException")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"code"},"code"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"code"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#code"}),"code"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"errmsg"},"errmsg"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#errmsg"}),"errmsg"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"errno"},"errno"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"errno"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#errno"}),"errno"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"message"},"message"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"message"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#message"}),"message"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:974")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"name"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#name"}),"name"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:973")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sqlstate"},"sqlState"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"stack"},"stack"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"stack"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Inherited from ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception"}),"DriverException"),".",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/classes/driverexception#stack"}),"stack"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in docs/node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);