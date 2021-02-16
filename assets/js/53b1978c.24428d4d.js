(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,s=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.a.createElement(s,b(b({ref:t},l),{},{components:n})):a.a.createElement(s,b({ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(1051)),c={id:"knex.knex-1.migrationsource",title:"Interface: MigrationSource<TMigrationSpec>",sidebar_label:"MigrationSource",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.knex-1.migrationsource",id:"api/interfaces/knex.knex-1.migrationsource",isDocsHomePage:!1,title:"Interface: MigrationSource<TMigrationSpec>",description:"Interface: MigrationSource",source:"@site/docs/api/interfaces/knex.knex-1.migrationsource.md",slug:"/api/interfaces/knex.knex-1.migrationsource",permalink:"/docs/next/api/interfaces/knex.knex-1.migrationsource",editUrl:null,version:"current",sidebar_label:"MigrationSource",sidebar:"API",previous:{title:"Interface: Migration",permalink:"/docs/next/api/interfaces/knex.knex-1.migration"},next:{title:"Interface: Migrator",permalink:"/docs/next/api/interfaces/knex.knex-1.migrator"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"getMigration",id:"getmigration",children:[]},{value:"getMigrationName",id:"getmigrationname",children:[]},{value:"getMigrations",id:"getmigrations",children:[]}]}],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migrationsourcetmigrationspec"},"Interface: MigrationSource<TMigrationSpec",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".MigrationSource"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"TMigrationSpec"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationSource"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"getmigration"},"getMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:null},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.migration"},Object(i.b)("em",{parentName:"a"},"Migration"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2117"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrationname"},"getMigrationName"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrationName"),"(",Object(i.b)("inlineCode",{parentName:"p"},"migration"),": TMigrationSpec): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"migration")),Object(i.b)("td",{parentName:"tr",align:null},"TMigrationSpec")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2116"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getmigrations"},"getMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getMigrations"),"(",Object(i.b)("inlineCode",{parentName:"p"},"loadExtensions"),": readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"loadExtensions")),Object(i.b)("td",{parentName:"tr",align:null},"readonly ",Object(i.b)("em",{parentName:"td"},"string"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<TMigrationSpec[]",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2115"))}p.isMDXComponent=!0}}]);