"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67837],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19021:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},c="RocketMQ",s={unversionedId:"connector-v2/source/RocketMQ",id:"connector-v2/source/RocketMQ",title:"RocketMQ",description:"RocketMQ source connector",source:"@site/docs/connector-v2/source/RocketMQ.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/RocketMQ",permalink:"/zh-CN/docs/connector-v2/source/RocketMQ",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/RocketMQ.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/connector-v2/source/Redis"},next:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/source/S3File"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"name.srv.addr string",id:"namesrvaddr-string",level:3},{value:"consumer.group string",id:"consumergroup-string",level:3},{value:"acl.enabled boolean",id:"aclenabled-boolean",level:3},{value:"access.key string",id:"accesskey-string",level:3},{value:"secret.key string",id:"secretkey-string",level:3},{value:"batch.size int",id:"batchsize-int",level:3},{value:"commit.on.checkpoint boolean",id:"commitoncheckpoint-boolean",level:3},{value:"partition.discovery.interval.millis long",id:"partitiondiscoveryintervalmillis-long",level:2},{value:"schema",id:"schema",level:3},{value:"format",id:"format",level:2},{value:"field.delimiter",id:"fielddelimiter",level:2},{value:"start.mode",id:"startmode",level:2},{value:"start.mode.timestamp",id:"startmodetimestamp",level:2},{value:"start.mode.offsets",id:"startmodeoffsets",level:2},{value:"common-options config",id:"common-options-config",level:3},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3}],d={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rocketmq"},"RocketMQ"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"RocketMQ source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Source connector for Apache RocketMQ."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topics"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name.srv.addr"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acl.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access.key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret.key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.group"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"commit.on.checkpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field.delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},",")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"CONSUME_FROM_GROUP_OFFSETS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start.mode.offsets"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start.mode.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition.discovery.interval.millis"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"topics-string"},"topics ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RocketMQ topic")," name. If there are multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"topics"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},'"tpc1,tpc2"'),"."),(0,l.kt)("h3",{id:"namesrvaddr-string"},"name.srv.addr ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RocketMQ")," name server cluster address."),(0,l.kt)("h3",{id:"consumergroup-string"},"consumer.group ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RocketMQ consumer group id"),", used to distinguish different consumer groups."),(0,l.kt)("h3",{id:"aclenabled-boolean"},"acl.enabled ","[boolean]"),(0,l.kt)("p",null,"If true, access control is enabled, and access key and secret key need to be configured."),(0,l.kt)("h3",{id:"accesskey-string"},"access.key ","[string]"),(0,l.kt)("p",null,"When ACL_ENABLED is true, access key cannot be empty."),(0,l.kt)("h3",{id:"secretkey-string"},"secret.key ","[string]"),(0,l.kt)("p",null,"When ACL_ENABLED is true, secret key cannot be empty."),(0,l.kt)("h3",{id:"batchsize-int"},"batch.size ","[int]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RocketMQ")," consumer pull batch size"),(0,l.kt)("h3",{id:"commitoncheckpoint-boolean"},"commit.on.checkpoint ","[boolean]"),(0,l.kt)("p",null,"If true the consumer's offset will be periodically committed in the background."),(0,l.kt)("h2",{id:"partitiondiscoveryintervalmillis-long"},"partition.discovery.interval.millis ","[long]"),(0,l.kt)("p",null,"The interval for dynamically discovering topics and partitions."),(0,l.kt)("h3",{id:"schema"},"schema"),(0,l.kt)("p",null,"The structure of the data, including field names and field types."),(0,l.kt)("h2",{id:"format"},"format"),(0,l.kt)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ", ".\nIf you customize the delimiter, add the "field.delimiter" option.'),(0,l.kt)("h2",{id:"fielddelimiter"},"field.delimiter"),(0,l.kt)("p",null,"Customize the field delimiter for data format."),(0,l.kt)("h2",{id:"startmode"},"start.mode"),(0,l.kt)("p",null,"The initial consumption pattern of consumers,there are several types:\n","[CONSUME_FROM_LAST_OFFSET]",",","[CONSUME_FROM_FIRST_OFFSET]",",","[CONSUME_FROM_GROUP_OFFSETS]",",","[CONSUME_FROM_TIMESTAMP]","\n,","[CONSUME_FROM_SPECIFIC_OFFSETS]"),(0,l.kt)("h2",{id:"startmodetimestamp"},"start.mode.timestamp"),(0,l.kt)("p",null,'The time required for consumption mode to be "CONSUME_FROM_TIMESTAMP".'),(0,l.kt)("h2",{id:"startmodeoffsets"},"start.mode.offsets"),(0,l.kt)("p",null,'The offset required for consumption mode to be "CONSUME_FROM_SPECIFIC_OFFSETS".'),(0,l.kt)("p",null,"for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},"start.mode.offsets = {\n         topic1-0 = 70\n         topic1-1 = 10\n         topic1-2 = 10\n      }\n")),(0,l.kt)("h3",{id:"common-options-config"},"common-options ","[config]"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Rocketmq {\n    name.srv.addr = "localhost:9876"\n    topics = "test-topic-002"\n    consumer.group = "consumer-group"\n    parallelism = 2\n    batch.size = 20\n    schema = {\n       fields {\n            age = int\n            name = string\n       }\n     }\n    start.mode = "CONSUME_FROM_SPECIFIC_OFFSETS"\n    start.mode.offsets = {\n                test-topic-002-0 = 20\n             }\n            \n  }\n}\n')))}u.isMDXComponent=!0}}]);