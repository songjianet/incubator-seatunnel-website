"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6300],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4862:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},u="Druid",p={unversionedId:"flink/configuration/source-plugins/Druid",id:"version-2.1.0/flink/configuration/source-plugins/Druid",title:"Druid",description:"Source plugin: Druid [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Druid.md",sourceDirName:"flink/configuration/source-plugins",slug:"/flink/configuration/source-plugins/Druid",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Druid",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/source-plugins/Druid.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin"},next:{title:"Fake",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Fake"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"jdbc_url String",id:"jdbc_url-string",level:3},{value:"datasource String",id:"datasource-string",level:3},{value:"start_date String",id:"start_date-string",level:3},{value:"end_date String",id:"end_date-string",level:3},{value:"columns List<String>",id:"columns-liststring",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Example",id:"example",level:2}],s={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"druid"},"Druid"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Source plugin: Druid ","[Flink]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Read data from Apache Druid."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jdbc_url"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datasource"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"start_date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"end_date"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"columns"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"jdbc_url-string"},"jdbc_url ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.kt)("p",null,"The URL of JDBC of Apache Druid."),(0,i.kt)("h3",{id:"datasource-string"},"datasource ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.kt)("p",null,"The DataSource name in Apache Druid."),(0,i.kt)("h3",{id:"start_date-string"},"start_date ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.kt)("p",null,"The start date of DataSource, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"'2016-06-27'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'2016-06-27 00:00:00'"),", etc."),(0,i.kt)("h3",{id:"end_date-string"},"end_date ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,i.kt)("p",null,"The end date of DataSource, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"'2016-06-28'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'2016-06-28 00:00:00'"),", etc."),(0,i.kt)("h3",{id:"columns-liststring"},"columns ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,i.kt)("p",null,"These columns that you want to query of DataSource."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Source Plugin common parameters, refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,i.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,i.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,i.kt)("p",null,"The parallelism of an individual operator, for DruidSource"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'DruidSource {\n  jdbc_url = "jdbc:avatica:remote:url=http://localhost:8082/druid/v2/sql/avatica/"\n  datasource = "wikipedia"\n  start_date = "2016-06-27 00:00:00"\n  end_date = "2016-06-28 00:00:00"\n  columns = ["flags","page"]\n}\n')))}m.isMDXComponent=!0}}]);