"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8618],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2834:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l="EnvConf",u={unversionedId:"connector-v2/EnvConf",id:"connector-v2/EnvConf",title:"EnvConf",description:"This document describes env configuration information,env unifies the environment variables of all engines.",source:"@site/docs/connector-v2/EnvConf.md",sourceDirName:"connector-v2",slug:"/connector-v2/EnvConf",permalink:"/docs/connector-v2/EnvConf",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/EnvConf.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Error Quick Reference Manual",permalink:"/docs/connector-v2/Error-Quick-Reference-Manual"},next:{title:"Transform",permalink:"/docs/category/transform"}},s={},p=[{value:"job.name",id:"jobname",level:2},{value:"jars",id:"jars",level:2},{value:"job.mode",id:"jobmode",level:2},{value:"checkpoint.interval",id:"checkpointinterval",level:2},{value:"parallelism",id:"parallelism",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"envconf"},"EnvConf"),(0,a.kt)("p",null,"This document describes env configuration information,env unifies the environment variables of all engines."),(0,a.kt)("h2",{id:"jobname"},"job.name"),(0,a.kt)("p",null,"This parameter configures the task name."),(0,a.kt)("h2",{id:"jars"},"jars"),(0,a.kt)("p",null,"Third-party packages can be loaded via ",(0,a.kt)("inlineCode",{parentName:"p"},"jars"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},'jars="file://local/jar1.jar;file://local/jar2.jar"')),(0,a.kt)("h2",{id:"jobmode"},"job.mode"),(0,a.kt)("p",null,"You can configure whether the task is in batch mode or stream mode through ",(0,a.kt)("inlineCode",{parentName:"p"},"job.mode"),", like ",(0,a.kt)("inlineCode",{parentName:"p"},'job.mode = "BATCH"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'job.mode = "STREAMING"')," "),(0,a.kt)("h2",{id:"checkpointinterval"},"checkpoint.interval"),(0,a.kt)("p",null,"Gets the interval in which checkpoints are periodically scheduled."),(0,a.kt)("h2",{id:"parallelism"},"parallelism"),(0,a.kt)("p",null,"This parameter configures the parallelism of source and sink."))}m.isMDXComponent=!0}}]);