(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),O=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},j=function(e){var t=O(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),j=O(a),o=r,d=j["".concat(c,".").concat(o)]||j[o]||m[o]||b;return a?n.a.createElement(d,p(p({ref:t},i),{},{components:a})):n.a.createElement(d,p({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},863:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return O}));var r=a(3),n=a(7),b=(a(0),a(1086)),c={id:"loadedreference",title:"Interface: LoadedReference<T, P>",sidebar_label:"LoadedReference"},p={unversionedId:"api/interfaces/loadedreference",id:"api/interfaces/loadedreference",isDocsHomePage:!1,title:"Interface: LoadedReference<T, P>",description:"Type parameters",source:"@site/docs/api/interfaces/loadedreference.md",slug:"/api/interfaces/loadedreference",permalink:"/docs/next/api/interfaces/loadedreference",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/loadedreference.md",version:"current",sidebar_label:"LoadedReference",sidebar:"API",previous:{title:"Interface: LoadedCollection<T, P, O>",permalink:"/docs/next/api/interfaces/loadedcollection"},next:{title:"Interface: ManyToManyOptions<T, O>",permalink:"/docs/next/api/interfaces/manytomanyoptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"$",id:"",children:[]}]},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[]},{value:"getEntity",id:"getentity",children:[]},{value:"getProperty",id:"getproperty",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"load",id:"load",children:[]},{value:"populated",id:"populated",children:[]},{value:"set",id:"set",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"unwrap",id:"unwrap",children:[]},{value:"create",id:"create",children:[]},{value:"isReference",id:"isreference",children:[]},{value:"unwrapReference",id:"unwrapreference",children:[]},{value:"wrapReference",id:"wrapreference",children:[]}]}],i={rightToc:l};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"never")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"LoadedReference")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new LoadedReference"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L6"}),"packages/core/src/entity/Reference.ts:6"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:""},"$"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"$"),": T & P"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/typings.ts#L378"}),"packages/core/src/typings.ts:378"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"get"},"get"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"get"),"(): T & P"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/typings.ts#L379"}),"packages/core/src/typings.ts:379"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T & P"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getentity"},"getEntity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getEntity"),"(): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#getentity"}),"getEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L108"}),"packages/core/src/entity/Reference.ts:108"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getproperty"},"getProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getProperty"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): T","[K]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#getproperty"}),"getProperty"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L116"}),"packages/core/src/entity/Reference.ts:116"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T","[K]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#isinitialized"}),"isInitialized"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L120"}),"packages/core/src/entity/Reference.ts:120"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"load"},"load"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"(): Promise<T",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#load"}),"load"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L67"}),"packages/core/src/entity/Reference.ts:67"))),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the entity."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<T",">"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"load"),"<K",">","(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": K): Promise<T","[K]",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#load"}),"load"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L73"}),"packages/core/src/entity/Reference.ts:73"))),Object(b.b)("p",null,"Ensures the underlying entity is loaded first (without reloading it if it already is loaded).\nReturns the requested property instead of the whole entity."),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"K")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T")))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"K")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise<T","[K]",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#populated"}),"populated"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L124"}),"packages/core/src/entity/Reference.ts:124"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"set"},"set"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"set"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T",">","): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#set"}),"set"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L91"}),"packages/core/src/entity/Reference.ts:91"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#tojson"}),"toJSON"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L128"}),"packages/core/src/entity/Reference.ts:128"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unwrap"},"unwrap"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unwrap"),"(): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#unwrap"}),"unwrap"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L104"}),"packages/core/src/entity/Reference.ts:104"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"create"),"<T, PK",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T, PK",">","): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T, PK",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#create"}),"create"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L30"}),"packages/core/src/entity/Reference.ts:30"))),Object(b.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T ","|"," unknown"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PrimaryProperty<T","\\",">")))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T, PK",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<T, PK",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isreference"},"isReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"isReference"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": any): data is Reference<T",">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#isreference"}),"isReference"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L41"}),"packages/core/src/entity/Reference.ts:41"))),Object(b.b)("p",null,"Checks whether the argument is instance or ",Object(b.b)("inlineCode",{parentName:"p"},"Reference")," wrapper."),Object(b.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," data is Reference<T",">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unwrapreference"},"unwrapReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"unwrapReference"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"ref"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">","): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#unwrapreference"}),"unwrapReference"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L59"}),"packages/core/src/entity/Reference.ts:59"))),Object(b.b)("p",null,"Returns wrapped entity."),Object(b.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ref")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrapreference"},"wrapReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"wrapReference"),"<T",">","(",Object(b.b)("inlineCode",{parentName:"p"},"entity"),": T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">",", ",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">","): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">"," ","|"," T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference"}),"Reference"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/classes/reference#wrapreference"}),"wrapReference"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/b62d9ec/packages/core/src/entity/Reference.ts#L48"}),"packages/core/src/entity/Reference.ts:48"))),Object(b.b)("p",null,"Wraps the entity in a ",Object(b.b)("inlineCode",{parentName:"p"},"Reference")," wrapper if the property is defined as ",Object(b.b)("inlineCode",{parentName:"p"},"wrappedReference"),"."),Object(b.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#anyentity"}),"AnyEntity"),"<T",">")))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"entity")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T ","|"," ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"<T",">")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/reference"}),"Reference"),"<T",">"," ","|"," T"))}O.isMDXComponent=!0}}]);