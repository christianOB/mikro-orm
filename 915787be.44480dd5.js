(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{472:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(1),n=a(6),b=(a(0),a(807)),i={id:"migration",title:"Class: Migration",sidebar_label:"Migration"},c={unversionedId:"api/classes/migration",id:"version-4.2/api/classes/migration",isDocsHomePage:!1,title:"Class: Migration",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/migration.md",slug:"/api/classes/migration",permalink:"/docs/api/classes/migration",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/migration.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604764660,sidebar_label:"Migration",sidebar:"version-4.2/API",previous:{title:"Class: MetadataValidator",permalink:"/docs/api/classes/metadatavalidator"},next:{title:"Class: MigrationCommandFactory",permalink:"/docs/api/classes/migrationcommandfactory"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"ctx",id:"ctx",children:[]},{value:"driver",id:"driver",children:[]},{value:"queries",id:"queries",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addSql",id:"addsql",children:[]},{value:"down",id:"down",children:[]},{value:"execute",id:"execute",children:[]},{value:"getKnex",id:"getknex",children:[]},{value:"getQueries",id:"getqueries",children:[]},{value:"isTransactional",id:"istransactional",children:[]},{value:"reset",id:"reset",children:[]},{value:"setTransactionContext",id:"settransactioncontext",children:[]},{value:"up",id:"up",children:[]}]}],p={rightToc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Migration"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Migration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"driver"),": AbstractSqlDriver, ",Object(b.b)("inlineCode",{parentName:"p"},"config"),": Configuration): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migration"}),"Migration")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L9"}),"packages/migrations/src/Migration.ts:9"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"driver")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AbstractSqlDriver")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Configuration")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migration"}),"Migration")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": Configuration"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L12"}),"packages/migrations/src/Migration.ts:12"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ctx"},"ctx"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"ctx"),": Transaction","<","Transaction>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L9"}),"packages/migrations/src/Migration.ts:9"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": AbstractSqlDriver"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L11"}),"packages/migrations/src/Migration.ts:11"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"queries"},"queries"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"queries"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#query"}),"Query"),"[] = []"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L8"}),"packages/migrations/src/Migration.ts:8"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"addsql"},"addSql"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addSql"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#query"}),"Query"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L24"}),"packages/migrations/src/Migration.ts:24"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#query"}),"Query"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"down"},"down"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"down"),"(): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L333"}),"packages/core/src/typings.ts:333"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"execute"},"execute"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"execute"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#query"}),"Query"),"): Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","any>>[]>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L37"}),"packages/migrations/src/Migration.ts:37"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"sql")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#query"}),"Query"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","any>>[]>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getknex"},"getKnex"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getKnex"),"(): any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L41"}),"packages/migrations/src/Migration.ts:41"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," any"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getqueries"},"getQueries"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getQueries"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#query"}),"Query"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L45"}),"packages/migrations/src/Migration.ts:45"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#query"}),"Query"),"[]"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"istransactional"},"isTransactional"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isTransactional"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L20"}),"packages/migrations/src/Migration.ts:20"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"reset"},"reset"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"reset"),"(): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L28"}),"packages/migrations/src/Migration.ts:28"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"settransactioncontext"},"setTransactionContext"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setTransactionContext"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#transaction"}),"Transaction"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L33"}),"packages/migrations/src/Migration.ts:33"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ctx")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#transaction"}),"Transaction"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"up"},"up"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"up"),"(): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L332"}),"packages/core/src/typings.ts:332"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"up"),"(): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/Migration.ts#L14"}),"packages/migrations/src/Migration.ts:14"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}s.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=s(a),O=r,j=l["".concat(i,".").concat(O)]||l[O]||m[O]||b;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<b;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);