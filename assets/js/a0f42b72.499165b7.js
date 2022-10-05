"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8890],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8185:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},c="Datahub",s={unversionedId:"connector-v2/sink/Datahub",id:"connector-v2/sink/Datahub",title:"Datahub",description:"Datahub sink connector",source:"@site/docs/connector-v2/sink/Datahub.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Datahub",permalink:"/docs/connector-v2/sink/Datahub",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Datahub.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Console",permalink:"/docs/connector-v2/sink/Console"},next:{title:"Elasticsearch",permalink:"/docs/connector-v2/sink/Elasticsearch"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"accessId string",id:"accessid-string",level:3},{value:"accessKeystring",id:"accesskeystring",level:3},{value:"project string",id:"project-string",level:3},{value:"topic string",id:"topic-string",level:3},{value:"timeout int",id:"timeout-int",level:3},{value:"retryTimes int",id:"retrytimes-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub"},"Datahub"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Datahub sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A sink plugin which use send message to datahub"),(0,i.kt)("h2",{id:"key-features"},"Key features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessId"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accessKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"project"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"retryTimes"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"url-string"},"url ","[string]"),(0,i.kt)("p",null,"your datahub endpoint start with http \uff08string\uff09"),(0,i.kt)("h3",{id:"accessid-string"},"accessId ","[string]"),(0,i.kt)("p",null,"your datahub accessId which cloud be access from Alibaba Cloud  (string)"),(0,i.kt)("h3",{id:"accesskeystring"},"accessKey","[string]"),(0,i.kt)("p",null,"your datahub accessKey which cloud be access from Alibaba Cloud  (string)"),(0,i.kt)("h3",{id:"project-string"},"project ","[string]"),(0,i.kt)("p",null,"your datahub project which is created in Alibaba Cloud  (string)"),(0,i.kt)("h3",{id:"topic-string"},"topic ","[string]"),(0,i.kt)("p",null,"your datahub topic  (string)"),(0,i.kt)("h3",{id:"timeout-int"},"timeout ","[int]"),(0,i.kt)("p",null,"the max connection timeout (int)"),(0,i.kt)("h3",{id:"retrytimes-int"},"retryTimes ","[int]"),(0,i.kt)("p",null,"the max retry times when your client put record failed  (int)"),(0,i.kt)("h3",{id:"common-options"},"common options"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n DataHub {\n  endpoint="yourendpoint"\n  accessId="xxx"\n  accessKey="xxx"\n  project="projectname"\n  topic="topicname"\n  timeout=3000\n  retryTimes=3\n }\n}\n')))}m.isMDXComponent=!0}}]);