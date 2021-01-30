(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(t),f=r,m=b["".concat(o,".").concat(f)]||b[f]||d[f]||l;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),l=(t(0),t(1253)),o={id:"knex.knex-1.columninfo",title:"Interface: ColumnInfo",sidebar_label:"ColumnInfo",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.columninfo",id:"api/interfaces/knex.knex-1.columninfo",isDocsHomePage:!1,title:"Interface: ColumnInfo",description:"Interface: ColumnInfo",source:"@site/docs/api/interfaces/knex.knex-1.columninfo.md",slug:"/api/interfaces/knex.knex-1.columninfo",permalink:"/docs/next/api/interfaces/knex.knex-1.columninfo",editUrl:null,version:"current",sidebar_label:"ColumnInfo",sidebar:"API",previous:{title:"Interface: ColumnBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.columnbuilder"},next:{title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",permalink:"/docs/next/api/interfaces/knex.knex-1.columnnamequerybuilder"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"defaultValue",id:"defaultvalue",children:[]},{value:"maxLength",id:"maxlength",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"type",id:"type",children:[]}]}],u={toc:i};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"interface-columninfo"},"Interface: ColumnInfo"),Object(l.b)("p",null,Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".ColumnInfo"),Object(l.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ColumnInfo"))),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"defaultValue"),": ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1#value"}),Object(l.b)("em",{parentName:"a"},"Value"))),Object(l.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1843"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"maxlength"},"maxLength"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"maxLength"),": ",Object(l.b)("em",{parentName:"p"},"number")),Object(l.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1845"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nullable"},"nullable"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"nullable"),": ",Object(l.b)("em",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1846"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"type"},"type"),Object(l.b)("p",null,"\u2022 ",Object(l.b)("strong",{parentName:"p"},"type"),": ",Object(l.b)("em",{parentName:"p"},"string")),Object(l.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1844"))}p.isMDXComponent=!0}}]);