"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9283],{3905:function(n,t,e){e.d(t,{Zo:function(){return s},kt:function(){return f}});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var u=r.createContext({}),p=function(n){var t=r.useContext(u),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},s=function(n){var t=p(n.components);return r.createElement(u.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),m=p(e),f=o,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return e?r.createElement(d,i(i({ref:t},s),{},{components:e})):r.createElement(d,i({ref:t},s))}));function f(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var p=2;p<a;p++)i[p]=e[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7900:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return f}});var r=e(7462),o=e(3366),a=(e(7294),e(3905)),i=["components"],l={},u="Sql",p={unversionedId:"flink/configuration/transform-plugins/Sql",id:"version-2.1.0/flink/configuration/transform-plugins/Sql",title:"Sql",description:"Transform plugin : SQL [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Sql.md",sourceDirName:"flink/configuration/transform-plugins",slug:"/flink/configuration/transform-plugins/Sql",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/Sql",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/transform-plugins/Sql.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Split",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/Split"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c};function f(n){var t=n.components,e=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql"},"Sql"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Transform plugin : SQL ","[Flink]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Use SQL to process data, use ",(0,a.kt)("inlineCode",{parentName:"p"},"flink sql")," grammar, and support its various ",(0,a.kt)("inlineCode",{parentName:"p"},"udf")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sql"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin"},"Transform Plugin")," for details"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select name, age from fake"\n}\n')))}f.isMDXComponent=!0}}]);