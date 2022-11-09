"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},s="Intro To Connector V2 Features",l={unversionedId:"concept/connector-v2-features",id:"concept/connector-v2-features",title:"Intro To Connector V2 Features",description:"Differences Between Connector V2 And Connector v1",source:"@site/docs/concept/connector-v2-features.md",sourceDirName:"concept",slug:"/concept/connector-v2-features",permalink:"/docs/concept/connector-v2-features",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/connector-v2-features.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Intro to config file",permalink:"/docs/concept/config"},next:{title:"Intro to schema feature",permalink:"/docs/concept/schema-feature"}},p={},u=[{value:"Differences Between Connector V2 And Connector v1",id:"differences-between-connector-v2-and-connector-v1",level:2},{value:"Source Connector Features",id:"source-connector-features",level:2},{value:"exactly-once",id:"exactly-once",level:3},{value:"schema projection",id:"schema-projection",level:3},{value:"batch",id:"batch",level:3},{value:"stream",id:"stream",level:3},{value:"parallelism",id:"parallelism",level:3},{value:"support user-defined split",id:"support-user-defined-split",level:3},{value:"Sink Connector Features",id:"sink-connector-features",level:2},{value:"exactly-once",id:"exactly-once-1",level:3},{value:"schema projection",id:"schema-projection-1",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro-to-connector-v2-features"},"Intro To Connector V2 Features"),(0,a.kt)("h2",{id:"differences-between-connector-v2-and-connector-v1"},"Differences Between Connector V2 And Connector v1"),(0,a.kt)("p",null,"Since ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/1608"},"https://github.com/apache/incubator-seatunnel/issues/1608")," We Added Connector V2 Features.\nConnector V2 is a connector defined based on the Seatunnel Connector API interface. Unlike Connector V1, Connector V2 supports the following features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi Engine Support")," SeaTunnel Connector API is an engine independent API. The connectors developed based on this API can run in multiple engines. Currently, Flink and Spark are supported, and we will support other engines in the future."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi Engine Version Support")," Decoupling the connector from the engine through the translation layer solves the problem that most connectors need to modify the code in order to support a new version of the underlying engine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unified Batch And Stream")," Connector V2 can perform batch processing or streaming processing. We do not need to develop connectors for batch and stream separately."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multiplexing JDBC/Log connection.")," Connector V2 supports JDBC resource reuse and sharing database log parsing.")),(0,a.kt)("h2",{id:"source-connector-features"},"Source Connector Features"),(0,a.kt)("p",null,"Source connectors have some common core features, and each source connector supports them to varying degrees."),(0,a.kt)("h3",{id:"exactly-once"},"exactly-once"),(0,a.kt)("p",null,"If each piece of data in the data source will only be sent downstream by the source once, we think this source connector supports exactly once."),(0,a.kt)("p",null,"In SeaTunnel, we can save the read ",(0,a.kt)("strong",{parentName:"p"},"Split")," and its ",(0,a.kt)("strong",{parentName:"p"},"offset"),"(The position of the read data in split at that time,\nsuch as line number, byte size, offset, etc) as ",(0,a.kt)("strong",{parentName:"p"},"StateSnapshot")," when checkpoint. If the task restarted, we will get the last ",(0,a.kt)("strong",{parentName:"p"},"StateSnapshot"),"\nand then locate the ",(0,a.kt)("strong",{parentName:"p"},"Split")," and ",(0,a.kt)("strong",{parentName:"p"},"offset")," read last time and continue to send data downstream."),(0,a.kt)("p",null,"For example ",(0,a.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Kafka"),"."),(0,a.kt)("h3",{id:"schema-projection"},"schema projection"),(0,a.kt)("p",null,"If the source connector supports selective reading of certain columns or redefine columns order or supports the data format read through ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," params, we think it supports schema projection."),(0,a.kt)("p",null,"For example ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBCSource")," can use sql define read columns, ",(0,a.kt)("inlineCode",{parentName:"p"},"KafkaSource")," can use ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," params to define the read schema."),(0,a.kt)("h3",{id:"batch"},"batch"),(0,a.kt)("p",null,"Batch Job Mode, The data read is bounded and the job will stop when all data read complete."),(0,a.kt)("h3",{id:"stream"},"stream"),(0,a.kt)("p",null,"Streaming Job Mode, The data read is unbounded and the job never stop."),(0,a.kt)("h3",{id:"parallelism"},"parallelism"),(0,a.kt)("p",null,"Parallelism Source Connector support config ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelism"),", every parallelism will create a task to read the data.\nIn the ",(0,a.kt)("strong",{parentName:"p"},"Parallelism Source Connector"),", the source will be split into multiple splits, and then the enumerator will allocate the splits to the SourceReader for processing."),(0,a.kt)("h3",{id:"support-user-defined-split"},"support user-defined split"),(0,a.kt)("p",null,"User can config the split rule."),(0,a.kt)("h2",{id:"sink-connector-features"},"Sink Connector Features"),(0,a.kt)("p",null,"Sink connectors have some common core features, and each sink connector supports them to varying degrees."),(0,a.kt)("h3",{id:"exactly-once-1"},"exactly-once"),(0,a.kt)("p",null,"When any piece of data flows into a distributed system, if the system processes any piece of data accurately only once in the whole processing process and the processing results are correct, it is considered that the system meets the exact once consistency."),(0,a.kt)("p",null,"For sink connector, the sink connector supports exactly-once if any piece of data only write into target once. There are generally two ways to achieve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The target database supports key deduplication. For example ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Kudu"),"."),(0,a.kt)("li",{parentName:"ul"},"The target support ",(0,a.kt)("strong",{parentName:"li"},"XA Transaction"),"(This transaction can be used across sessions. Even if the program that created the transaction has ended, the newly started program only needs to know the ID of the last transaction to resubmit or roll back the transaction). Then we can use ",(0,a.kt)("strong",{parentName:"li"},"Two-phase Commit")," to ensure ",(0,a.kt)("strong",{parentName:"li"},"exactly-once"),". For example ",(0,a.kt)("inlineCode",{parentName:"li"},"File"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL"),".")),(0,a.kt)("h3",{id:"schema-projection-1"},"schema projection"),(0,a.kt)("p",null,"If a sink connector supports the fields and their types or redefine columns order written in the configuration, we think it supports schema projection."))}m.isMDXComponent=!0}}]);