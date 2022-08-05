"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7373],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||u;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<u;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7632:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),u=(n(7294),n(3905)),l=["components"],i={},o="Kudu",p={unversionedId:"connector-v2/sink/Kudu",id:"connector-v2/sink/Kudu",title:"Kudu",description:"Description",source:"@site/docs/connector-v2/sink/Kudu.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kudu",permalink:"/docs/connector-v2/sink/Kudu",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JDBC",permalink:"/docs/connector-v2/sink/Jdbc"},next:{title:"LocalFile",permalink:"/docs/connector-v2/sink/LocalFile"}},d={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"kudu_master string",id:"kudu_master-string",level:3},{value:"kudu_table string",id:"kudu_table-string",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"Example",id:"example",level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"kudu"},"Kudu"),(0,u.kt)("h2",{id:"description"},"Description"),(0,u.kt)("p",null,"Write data to Kudu."),(0,u.kt)("p",null," The tested kudu version is 1.11.1."),(0,u.kt)("h2",{id:"options"},"Options"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"name"),(0,u.kt)("th",{parentName:"tr",align:null},"type"),(0,u.kt)("th",{parentName:"tr",align:null},"required"),(0,u.kt)("th",{parentName:"tr",align:null},"default value"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"kudu_master"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"yes"),(0,u.kt)("td",{parentName:"tr",align:null},"-")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"kudu_table"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"yes"),(0,u.kt)("td",{parentName:"tr",align:null},"-")),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"save_mode"),(0,u.kt)("td",{parentName:"tr",align:null},"string"),(0,u.kt)("td",{parentName:"tr",align:null},"yes"),(0,u.kt)("td",{parentName:"tr",align:null},"-")))),(0,u.kt)("h3",{id:"kudu_master-string"},"kudu_master ","[string]"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"kudu_master"),"  The address of kudu master,such as '192.168.88.110:7051'."),(0,u.kt)("h3",{id:"kudu_table-string"},"kudu_table ","[string]"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"kudu_table")," The name of kudu table.."),(0,u.kt)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,u.kt)("p",null,"Storage mode, we need support ",(0,u.kt)("inlineCode",{parentName:"p"},"overwrite")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"append"),". ",(0,u.kt)("inlineCode",{parentName:"p"},"append")," is now supported."),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'\n kuduSink {\n      kudu_master = "192.168.88.110:7051"\n      kudu_table = "studentlyhresultflink"\n      save_mode="append"\n   }\n\n')))}m.isMDXComponent=!0}}]);