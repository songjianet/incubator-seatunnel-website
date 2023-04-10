"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83636],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="KafkaStream",p={unversionedId:"spark/configuration/source-plugins/KafkaStream",id:"version-2.1.0/spark/configuration/source-plugins/KafkaStream",title:"KafkaStream",description:"Source plugin : KafkaStream [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/KafkaStream.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/KafkaStream",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/KafkaStream",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/KafkaStream.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jdbc",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Jdbc"},next:{title:"Kudu",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Kudu"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"consumer.group.id string",id:"consumergroupid-string",level:3},{value:"consumer.bootstrap.servers string",id:"consumerbootstrapservers-string",level:3},{value:"consumer.* string",id:"consumer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafkastream"},"KafkaStream"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source plugin : KafkaStream ","[Spark]")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"To consume data from ",(0,o.kt)("inlineCode",{parentName:"p"},"Kafka")," , the supported ",(0,o.kt)("inlineCode",{parentName:"p"},"Kafka version >= 0.10.0")," ."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"topics"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"consumer.*"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"topics-string"},"topics ","[string]"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kafka topic")," name. If there are multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"topics"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},'"tpc1,tpc2"')),(0,o.kt)("h3",{id:"consumergroupid-string"},"consumer.group.id ","[string]"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kafka consumer group id")," , used to distinguish different consumer groups"),(0,o.kt)("h3",{id:"consumerbootstrapservers-string"},"consumer.bootstrap.servers ","[string]"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kafka")," cluster address, separated by ",(0,o.kt)("inlineCode",{parentName:"p"},",")),(0,o.kt)("h3",{id:"consumer-string"},"consumer.* ","[string]"),(0,o.kt)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#oldconsumerconfigs"},"all consumer parameters specified in the official Kafka document")," ."),(0,o.kt)("p",null,"The way to specify parameters is to add the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer.")," to the original parameter name. For example, the way to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"auto.offset.reset")," is: ",(0,o.kt)("inlineCode",{parentName:"p"},"consumer.auto.offset.reset = latest")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,o.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.kt)("p",null,"Source plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/source-plugin"},"Source Plugin")," for details"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kafkaStream {\n    topics = "seatunnel"\n    consumer.bootstrap.servers = "localhost:9092"\n    consumer.group.id = "seatunnel_group"\n}\n')))}d.isMDXComponent=!0}}]);