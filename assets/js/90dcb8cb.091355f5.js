"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="HdfsFile",u={unversionedId:"connector-v2/source/HdfsFile",id:"connector-v2/source/HdfsFile",title:"HdfsFile",description:"Hdfs file source connector",source:"@site/docs/connector-v2/source/HdfsFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/HdfsFile",permalink:"/docs/connector-v2/source/HdfsFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/HdfsFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/docs/connector-v2/source/Email"},next:{title:"Http",permalink:"/docs/connector-v2/source/Http"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"type string",id:"type-string",level:3},{value:"fs.defaultFS string",id:"fsdefaultfs-string",level:3},{value:"Example",id:"example",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hdfsfile"},"HdfsFile"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Hdfs file source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read data from hdfs file system."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fs.defaultFS"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The source file path."),(0,l.kt)("h3",{id:"type-string"},"type ","[string]"),(0,l.kt)("p",null,"File type, supported as the following file types:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text")," ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,l.kt)("inlineCode",{parentName:"p"},"json")),(0,l.kt)("h3",{id:"fsdefaultfs-string"},"fs.defaultFS ","[string]"),(0,l.kt)("p",null,"Hdfs cluster address."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hcon"},'\nHdfsFile {\n  path = "/apps/hive/demo/student"\n  type = "parquet"\n  fs.defaultFS = "hdfs://namenode001"\n}\n\n')))}f.isMDXComponent=!0}}]);