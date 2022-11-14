"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6417],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="Kafka",s={unversionedId:"connector-v2/source/kafka",id:"connector-v2/source/kafka",title:"Kafka",description:"Kafka source connector",source:"@site/docs/connector-v2/source/kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/kafka",permalink:"/zh-CN/docs/connector-v2/source/kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Common Options",permalink:"/zh-CN/docs/connector-v2/source/common-options"},next:{title:"Apache Pulsar",permalink:"/zh-CN/docs/connector-v2/source/pulsar"}},c={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"topic string",id:"topic-string",level:3},{value:"bootstrap.servers string",id:"bootstrapservers-string",level:3},{value:"pattern boolean",id:"pattern-boolean",level:3},{value:"consumer.group string",id:"consumergroup-string",level:3},{value:"commit_on_checkpoint boolean",id:"commit_on_checkpoint-boolean",level:3},{value:"kafka.* string",id:"kafka-string",level:3},{value:"common-options config",id:"common-options-config",level:3},{value:"schema",id:"schema",level:3},{value:"format",id:"format",level:2},{value:"field_delimiter",id:"field_delimiter",level:2},{value:"start_mode",id:"start_mode",level:2},{value:"start_mode.timestamp",id:"start_modetimestamp",level:2},{value:"start_mode.offsets",id:"start_modeoffsets",level:2},{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Regex Topic",id:"regex-topic",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next Version",id:"next-version",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kafka"},"Kafka"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Kafka source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Source connector for Apache Kafka."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.group"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.*"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"group_offsets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode.offsets"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_mode.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"topic-string"},"topic ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka topic")," name. If there are multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"topics"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},'"tpc1,tpc2"'),"."),(0,l.kt)("h3",{id:"bootstrapservers-string"},"bootstrap.servers ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka")," cluster address, separated by ",(0,l.kt)("inlineCode",{parentName:"p"},'","'),"."),(0,l.kt)("h3",{id:"pattern-boolean"},"pattern ","[boolean]"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"pattern")," is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),",the regular expression for a pattern of topic names to read from. All topics in clients with names that match the specified regular expression will be subscribed by the consumer."),(0,l.kt)("h3",{id:"consumergroup-string"},"consumer.group ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka consumer group id"),", used to distinguish different consumer groups."),(0,l.kt)("h3",{id:"commit_on_checkpoint-boolean"},"commit_on_checkpoint ","[boolean]"),(0,l.kt)("p",null,"If true the consumer's offset will be periodically committed in the background."),(0,l.kt)("h3",{id:"kafka-string"},"kafka.* ","[string]"),(0,l.kt)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,l.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),"."),(0,l.kt)("p",null,"The way to specify parameters is to add the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"kafka.")," to the original parameter name. For example, the way to specify ",(0,l.kt)("inlineCode",{parentName:"p"},"auto.offset.reset")," is: ",(0,l.kt)("inlineCode",{parentName:"p"},"kafka.auto.offset.reset = latest")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,l.kt)("h3",{id:"common-options-config"},"common-options ","[config]"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h3",{id:"schema"},"schema"),(0,l.kt)("p",null,"The structure of the data, including field names and field types."),(0,l.kt)("h2",{id:"format"},"format"),(0,l.kt)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ", ".\nIf you customize the delimiter, add the "field_delimiter" option.'),(0,l.kt)("h2",{id:"field_delimiter"},"field_delimiter"),(0,l.kt)("p",null,"Customize the field delimiter for data format."),(0,l.kt)("h2",{id:"start_mode"},"start_mode"),(0,l.kt)("p",null,"The initial consumption pattern of consumers,there are several types:\n","[earliest]",",","[group_offsets]",",","[latest]",",","[specific_offsets]",",","[timestamp]"),(0,l.kt)("h2",{id:"start_modetimestamp"},"start_mode.timestamp"),(0,l.kt)("p",null,"The time required for consumption mode to be timestamp."),(0,l.kt)("h2",{id:"start_modeoffsets"},"start_mode.offsets"),(0,l.kt)("p",null,"The offset required for consumption mode to be specific_offsets."),(0,l.kt)("p",null,"for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},"   start_mode.offsets = {\n            info-0 = 70\n            info-1 = 10\n            info-2 = 10\n         }\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Kafka {\n    result_table_name = "kafka_name"\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#\u201c\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.servers = "localhost:9092"\n    kafka.max.poll.records = 500\n    kafka.client.id = client_1\n  }\n  \n}\n')),(0,l.kt)("h3",{id:"regex-topic"},"Regex Topic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Kafka Source Connector")),(0,l.kt)("h3",{id:"next-version"},"Next Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Support setting read starting offset or time at startup config (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3157"},"3157"),")")))}d.isMDXComponent=!0}}]);