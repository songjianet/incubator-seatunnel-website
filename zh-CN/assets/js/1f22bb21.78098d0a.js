"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4250],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=o,d=m["".concat(c,".").concat(k)]||m[k]||p[k]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2500:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return k}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={},c="Console",s={unversionedId:"connector-v2/sink/Console",id:"connector-v2/sink/Console",title:"Console",description:"Console sink connector",source:"@site/docs/connector-v2/sink/Console.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Console",permalink:"/zh-CN/docs/connector-v2/sink/Console",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Console.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"},next:{title:"Datahub",permalink:"/zh-CN/docs/connector-v2/sink/Datahub"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function k(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"console"},"Console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Console sink connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Used to send data to Console. Both support streaming and batch mode."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,a.kt)("inlineCode",{parentName:"p"},"age: 12, name: jared"),"]",", the content send to console is the following: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"name":"jared","age":17}'))),(0,a.kt)("h2",{id:"key-features"},"Key features"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},"Console {\n\n    }\n")),(0,a.kt)("p",null,"test:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring the SeaTunnel config file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n      sql {\n        sql = "select name, age from fake"\n      }\n}\n\nsink {\n    Console {\n\n    }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a SeaTunnel task")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Console print data")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"row=1 : XTblOoJMBr, 1968671376\nrow=2 : NAoJoFrthI, 1603900622\nrow=3 : VHZBzqQAPr, 1713899051\nrow=4 : pfUYOOrPgA, 1412123956\nrow=5 : dCNFobURas, 202987936\nrow=6 : XGWVgFnfWA, 1879270917\nrow=7 : KIGOqnLhqe, 430165110\nrow=8 : goMdjHlRpX, 288221239\nrow=9 : VBtpiNGArV, 1906991577\n")))}k.isMDXComponent=!0}}]);