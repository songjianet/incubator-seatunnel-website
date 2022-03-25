"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3004],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),g=u(n),d=i,f=g["".concat(c,".").concat(d)]||g[d]||s[d]||o;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5262:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c="MongoDB",u={unversionedId:"spark/configuration/sink-plugins/MongoDB",id:"spark/configuration/sink-plugins/MongoDB",title:"MongoDB",description:"Sink plugin : MongoDB [Spark]",source:"@site/docs/spark/configuration/sink-plugins/MongoDB.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/MongoDB",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/MongoDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Kudu"},next:{title:"Phoenix",permalink:"/zh-CN/docs/spark/configuration/sink-plugins/Phoenix"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"writeconfig.uri string",id:"writeconfiguri-string",level:3},{value:"writeconfig.database string",id:"writeconfigdatabase-string",level:3},{value:"writeconfig.collection string",id:"writeconfigcollection-string",level:3},{value:"writeconfig.* string",id:"writeconfig-string",level:3},{value:"Examples",id:"examples",level:2}],g={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDB"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sink plugin : MongoDB ","[Spark]")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Write data to ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeconfig.uri"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeconfig.database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeconfig.collection"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeconfig.*"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"writeconfiguri-string"},"writeconfig.uri ","[string]"),(0,o.kt)("p",null,"uri to write to mongoDB"),(0,o.kt)("h3",{id:"writeconfigdatabase-string"},"writeconfig.database ","[string]"),(0,o.kt)("p",null,"database to write to mongoDB"),(0,o.kt)("h3",{id:"writeconfigcollection-string"},"writeconfig.collection ","[string]"),(0,o.kt)("p",null,"collection to write to mongoDB"),(0,o.kt)("h3",{id:"writeconfig-string"},"writeconfig.* ","[string]"),(0,o.kt)("p",null,"More other parameters can be configured here, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Output Configuration section. The way to specify parameters is to add a prefix to the original parameter name ",(0,o.kt)("inlineCode",{parentName:"p"},"writeconfig.")," For example, the way to set ",(0,o.kt)("inlineCode",{parentName:"p"},"localThreshold")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"writeconfig.localThreshold=20")," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    writeconfig.uri = "mongodb://username:password@127.0.0.1:27017/test_db"\n    writeconfig.database = "test_db"\n    writeconfig.collection = "test_collection"\n}\n')))}d.isMDXComponent=!0}}]);