(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||n;return a?b.a.createElement(s,l(l({ref:t},i),{},{components:a})):b.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},342:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),b=a(7),n=(a(0),a(1086)),c={id:"ischemagenerator",title:"Interface: ISchemaGenerator",sidebar_label:"ISchemaGenerator"},l={unversionedId:"api/interfaces/ischemagenerator",id:"version-4.2/api/interfaces/ischemagenerator",isDocsHomePage:!1,title:"Interface: ISchemaGenerator",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/ischemagenerator.md",slug:"/api/interfaces/ischemagenerator",permalink:"/docs/4.2/api/interfaces/ischemagenerator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/ischemagenerator.md",version:"4.2",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1608758108,sidebar_label:"ISchemaGenerator",sidebar:"version-4.2/API",previous:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/4.2/api/interfaces/iquerybuilder"},next:{title:"Interface: IWrappedEntity<T, PK, P>",permalink:"/docs/4.2/api/interfaces/iwrappedentity"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"createDatabase",id:"createdatabase",children:[]},{value:"createSchema",id:"createschema",children:[]},{value:"dropDatabase",id:"dropdatabase",children:[]},{value:"dropSchema",id:"dropschema",children:[]},{value:"ensureDatabase",id:"ensuredatabase",children:[]},{value:"execute",id:"execute",children:[]},{value:"generate",id:"generate",children:[]},{value:"getCreateSchemaSQL",id:"getcreateschemasql",children:[]},{value:"getDropSchemaSQL",id:"getdropschemasql",children:[]},{value:"getUpdateSchemaSQL",id:"getupdateschemasql",children:[]},{value:"updateSchema",id:"updateschema",children:[]}]}],i={rightToc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"ISchemaGenerator"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"createdatabase"},"createDatabase"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createDatabase"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L309"}),"packages/core/src/typings.ts:309"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createschema"},"createSchema"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createSchema"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L302"}),"packages/core/src/typings.ts:302"))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"dropdatabase"},"dropDatabase"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"dropDatabase"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L310"}),"packages/core/src/typings.ts:310"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"dropschema"},"dropSchema"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"dropSchema"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropMigrationsTable?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropDb?"),": boolean): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L305"}),"packages/core/src/typings.ts:305"))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropMigrationsTable?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropDb?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"ensuredatabase"},"ensureDatabase"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"ensureDatabase"),"(): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L303"}),"packages/core/src/typings.ts:303"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"execute"},"execute"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"execute"),"(",Object(n.b)("inlineCode",{parentName:"p"},"sql"),": string): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L311"}),"packages/core/src/typings.ts:311"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"sql")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"generate"},"generate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"generate"),"(): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L301"}),"packages/core/src/typings.ts:301"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcreateschemasql"},"getCreateSchemaSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getCreateSchemaSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L304"}),"packages/core/src/typings.ts:304"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getdropschemasql"},"getDropSchemaSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getDropSchemaSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropMigrationsTable?"),": boolean): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L306"}),"packages/core/src/typings.ts:306"))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropMigrationsTable?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getupdateschemasql"},"getUpdateSchemaSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getUpdateSchemaSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"safe?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropDb?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropTables?"),": boolean): Promise","<","string>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L308"}),"packages/core/src/typings.ts:308"))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"safe?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropDb?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropTables?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"updateschema"},"updateSchema"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"updateSchema"),"(",Object(n.b)("inlineCode",{parentName:"p"},"wrap?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"safe?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropDb?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"dropTables?"),": boolean): Promise","<","void>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L307"}),"packages/core/src/typings.ts:307"))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"wrap?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"safe?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropDb?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"dropTables?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}o.isMDXComponent=!0}}]);