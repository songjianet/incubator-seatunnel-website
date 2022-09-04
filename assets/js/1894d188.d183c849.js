"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6757],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},c="Http",p={unversionedId:"connector-v2/sink/Http",id:"connector-v2/sink/Http",title:"Http",description:"Http sink connector",source:"@site/docs/connector-v2/sink/Http.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Http",permalink:"/docs/connector-v2/sink/Http",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Http.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/connector-v2/sink/Hive"},next:{title:"IoTDB",permalink:"/docs/connector-v2/sink/IoTDB"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"headers Map",id:"headers-map",level:3},{value:"Example",id:"example",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http"},"Http"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Http sink connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to launch web hooks using data."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,o.kt)("inlineCode",{parentName:"p"},"age: 12, name: tyrantlucifer"),"]",", the body content is the following: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"age": 12, "name": "tyrantlucifer"}'))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tips: Http sink only support ",(0,o.kt)("inlineCode",{parentName:"strong"},"post json")," webhook and the data from source will be treated as body content in web hook.")),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"url"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"headers"),(0,o.kt)("td",{parentName:"tr",align:null},"Map"),(0,o.kt)("td",{parentName:"tr",align:null},"No"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"url-string"},"url ","[string]"),(0,o.kt)("p",null,"http request url"),(0,o.kt)("h3",{id:"headers-map"},"headers ","[Map]"),(0,o.kt)("p",null,"http headers"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"simple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'Http {\n        url = "http://localhost/test/webhook"\n        headers {\n            token = "9e32e859ef044462a257e1fc76730066"\n        }\n    }\n')))}m.isMDXComponent=!0}}]);