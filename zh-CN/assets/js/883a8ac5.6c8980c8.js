"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[88799],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=m(n),g=a,c=d["".concat(o,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(c,l(l({ref:e},p),{},{components:n})):r.createElement(c,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,l[1]=u;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8422:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return m},assets:function(){return p},toc:function(){return s},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],u={},o=void 0,m={unversionedId:"configuration/input-plugins/RedisStream",id:"version-1.x/configuration/input-plugins/RedisStream",title:"RedisStream",description:"Input plugin : RedisStream [Streaming]",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/RedisStream.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/RedisStream",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/RedisStream",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/RedisStream.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/MySQL"},next:{title:"S3",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/S3"}},p={},s=[{value:"Input plugin : RedisStream Streaming",id:"input-plugin--redisstream-streaming",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"host string",id:"host-string",level:5},{value:"prefKey string",id:"prefkey-string",level:5},{value:"queue string",id:"queue-string",level:5},{value:"password string",id:"password-string",level:5},{value:"maxTotal number",id:"maxtotal-number",level:5},{value:"maxIdle number",id:"maxidle-number",level:5},{value:"maxWaitMillis number",id:"maxwaitmillis-number",level:5},{value:"connectionTimeout number",id:"connectiontimeout-number",level:5},{value:"soTimeout number",id:"sotimeout-number",level:5},{value:"maxAttempts number",id:"maxattempts-number",level:5},{value:"Example",id:"example",level:3}],d={toc:s};function g(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"input-plugin--redisstream-streaming"},"Input plugin : RedisStream ","[Streaming]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.1.0")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Redis."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#host-string"},"host")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#prefKey-string"},"prefKey")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#queue-string"},"queue")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password-string"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#maxTotal-number"},"maxTotal")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"200")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#maxIdle-number"},"maxIdle")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"200")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#maxWaitMillis-number"},"maxWaitMillis")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"2000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#connectionTimeout-number"},"connectionTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#soTimeout-number"},"soTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#maxAttempts-number"},"maxAttempts")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"5")))),(0,i.kt)("h5",{id:"host-string"},"host ","[string]"),(0,i.kt)("p",null,"redis cluster server host"),(0,i.kt)("h5",{id:"prefkey-string"},"prefKey ","[string]"),(0,i.kt)("p",null,"redis key prefix , Splicing mode: prefKey + ':' + key"),(0,i.kt)("h5",{id:"queue-string"},"queue ","[string]"),(0,i.kt)("p",null,"redis queue name , Data stored to queue"),(0,i.kt)("h5",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"redis password"),(0,i.kt)("h5",{id:"maxtotal-number"},"maxTotal ","[number]"),(0,i.kt)("p",null,"redis maxTotal config"),(0,i.kt)("h5",{id:"maxidle-number"},"maxIdle ","[number]"),(0,i.kt)("p",null,"redis maxIdle config"),(0,i.kt)("h5",{id:"maxwaitmillis-number"},"maxWaitMillis ","[number]"),(0,i.kt)("p",null,"redis maxWaitMillis config"),(0,i.kt)("h5",{id:"connectiontimeout-number"},"connectionTimeout ","[number]"),(0,i.kt)("p",null,"redis connectionTimeout config"),(0,i.kt)("h5",{id:"sotimeout-number"},"soTimeout ","[number]"),(0,i.kt)("p",null,"redis soTimeout config"),(0,i.kt)("h5",{id:"maxattempts-number"},"maxAttempts ","[number]"),(0,i.kt)("p",null,"redis maxAttempts config"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'RedisStream {\n    host = "127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002"\n    prefKey = "api"\n    queue = "test"\n    password = "root"\n}\n')))}g.isMDXComponent=!0}}]);