"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9901],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,g=d["".concat(o,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],u={},o=void 0,p={unversionedId:"configuration/filter-plugins/Truncate",id:"version-1.x/configuration/filter-plugins/Truncate",title:"Truncate",description:"Filter plugin : Truncate",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Truncate.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Truncate",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Truncate",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Truncate.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Table",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Table"},next:{title:"Uppercase",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Uppercase"}},c={},s=[{value:"Filter plugin : Truncate",id:"filter-plugin--truncate",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"max_length number",id:"max_length-number",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"Example",id:"example",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"filter-plugin--truncate"},"Filter plugin : Truncate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Truncate string."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#max_length-number"},"max_length")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"256")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"truncated")))),(0,i.kt)("h5",{id:"max_length-number"},"max_length ","[number]"),(0,i.kt)("p",null,"Maximum length of the string."),(0,i.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,i.kt)("p",null,"Source field name, default is ",(0,i.kt)("inlineCode",{parentName:"p"},"raw_message"),"."),(0,i.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,i.kt)("p",null,"New field name, default is ",(0,i.kt)("inlineCode",{parentName:"p"},"__root__"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'truncate {\n    source_field = "telephone"\n    max_length = 10\n}\n')))}f.isMDXComponent=!0}}]);