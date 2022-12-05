"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2977],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),i=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},k=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=i(a),m=r,c=N["".concat(p,".").concat(m)]||N[m]||u[m]||l;return a?n.createElement(c,o(o({ref:e},k),{},{components:a})):n.createElement(c,o({ref:e},k))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7371:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return i},assets:function(){return k},toc:function(){return u},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],d={},p="Connector Release Status",i={unversionedId:"Connector-v2-release-state",id:"Connector-v2-release-state",title:"Connector Release Status",description:"SeaTunnel uses a grading system for connectors to help you understand what to expect from a connector:",source:"@site/docs/Connector-v2-release-state.md",sourceDirName:".",slug:"/Connector-v2-release-state",permalink:"/zh-CN/docs/Connector-v2-release-state",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/Connector-v2-release-state.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Intro to schema feature",permalink:"/zh-CN/docs/concept/schema-feature"},next:{title:"Source",permalink:"/zh-CN/docs/category/source-v2"}},k={},u=[{value:"Connector V2 Health",id:"connector-v2-health",level:2}],N={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"connector-release-status"},"Connector Release Status"),(0,l.kt)("p",null,"SeaTunnel uses a grading system for connectors to help you understand what to expect from a connector:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("th",{parentName:"tr",align:null},"Beta"),(0,l.kt)("th",{parentName:"tr",align:null},"General Availability (GA)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Expectations"),(0,l.kt)("td",{parentName:"tr",align:null},"An alpha connector signifies a connector under development and helps SeaTunnel gather early feedback and issues reported by early adopters. We strongly discourage using alpha releases for production use cases"),(0,l.kt)("td",{parentName:"tr",align:null},"A beta connector is considered stable and reliable with no backwards incompatible changes but has not been validated by a broader group of users. We expect to find and fix a few issues and bugs in the release before it\u2019s ready for GA."),(0,l.kt)("td",{parentName:"tr",align:null},"A generally available connector has been deemed ready for use in a production environment and is officially supported by SeaTunnel. Its documentation is considered sufficient to support widespread adoption.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Production Readiness"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"connector-v2-health"},"Connector V2 Health"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Connector Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Support Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Assert"},"Asset")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Clickhouse"},"ClickHouse")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Clickhouse"},"ClickHouse")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/ClickhouseFile"},"ClickHouseFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Console"},"Console")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Datahub"},"DataHub")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/DingTalk"},"DingTalk")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Elasticsearch"},"Elasticsearch")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Email"},"Email")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Enterprise-WeChat"},"Enterprise WeChat")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Feishu"},"FeiShu")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/FakeSource"},"Fake")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/FtpFile"},"FtpFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Greenplum"},"Greenplum")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Greenplum"},"Greenplum")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/HdfsFile"},"HdfsFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/HdfsFile"},"HdfsFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Hive"},"Hive")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Hive"},"Hive")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Http"},"Http")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Http"},"Http")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Hudi"},"Hudi")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Iceberg"},"Iceberg")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/IoTDB"},"IoTDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/IoTDB"},"IoTDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Jdbc"},"Jdbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Jdbc"},"Jdbc")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Kudu"},"Kudu")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Kudu"},"Kudu")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Lemlist"},"Lemlist")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/LocalFile"},"LocalFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/LocalFile"},"LocalFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/MongoDB"},"MongoDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/MongoDB"},"MongoDB")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/MyHours"},"MyHours")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Neo4j"},"Neo4j")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/OssFile"},"OssFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/OssFile"},"OssFile")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Phoenix"},"Phoenix")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Phoenix"},"Phoenix")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/pulsar"},"Pulsar")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Redis"},"Redis")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Beta"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Redis"},"Redis")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Sentry"},"Sentry")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Socket"},"Socket")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Socket"},"Socket")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/kafka"},"Kafka")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Kafka"},"Kafka")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/S3File"},"S3File")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/S3File"},"S3File")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/Cassandra"},"Cassandra")),(0,l.kt)("td",{parentName:"tr",align:null},"Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/Cassandra"},"Cassandra")),(0,l.kt)("td",{parentName:"tr",align:null},"Sink"),(0,l.kt)("td",{parentName:"tr",align:null},"Alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.0-beta")))))}m.isMDXComponent=!0}}]);