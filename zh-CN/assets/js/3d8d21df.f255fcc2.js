"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6535],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1171:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={},l="About Seatunnel",u={unversionedId:"about",id:"about",title:"About Seatunnel",description:"Slack",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/zh-CN/docs/about",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/about.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Deployment",permalink:"/zh-CN/docs/start-v2/locally/deployment"}},c={},d=[{value:"Why do we need SeaTunnel",id:"why-do-we-need-seatunnel",level:2},{value:"Features of SeaTunnel",id:"features-of-seatunnel",level:2},{value:"SeaTunnel work flowchart",id:"seatunnel-work-flowchart",level:2},{value:"Connector",id:"connector",level:2},{value:"Who Use SeaTunnel",id:"who-use-seatunnel",level:2},{value:"Landscapes",id:"landscapes",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],p={toc:d};function h(e){var n=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-seatunnel"},"About Seatunnel"),(0,r.kt)("img",{src:"https://seatunnel.apache.org/image/logo.png",alt:"seatunnel logo",width:"200px",height:"200px",align:"right"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apacheseatunnel/shared_invite/zt-123jmewxe-RjB_DW3M3gV~xL91pZ0oVQ"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-%23seatunnel-4f8eba?logo=slack",alt:"Slack"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/ASFSeaTunnel"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/ASFSeaTunnel.svg?label=Follow&logo=twitter",alt:"Twitter Follow"}))),(0,r.kt)("p",null,"SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time\nsynchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has\nbeen used in the production of nearly 100 companies."),(0,r.kt)("h2",{id:"why-do-we-need-seatunnel"},"Why do we need SeaTunnel"),(0,r.kt)("p",null,"SeaTunnel focuses on data integration and data synchronization, and is mainly designed to solve common problems in the field of data integration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Various data sources: There are hundreds of commonly-used data sources of which versions are incompatible. With the emergence of new technologies, more data sources are appearing. It is difficult for users to find a tool that can fully and quickly support these data sources."),(0,r.kt)("li",{parentName:"ul"},"Complex synchronization scenarios: Data synchronization needs to support various synchronization scenarios such as offline-full synchronization, offline- incremental synchronization, CDC, real-time synchronization, and full database synchronization."),(0,r.kt)("li",{parentName:"ul"},"High demand in resource: Existing data integration and data synchronization tools often require vast computing resources or JDBC connection resources to complete real-time synchronization of massive small tables. This has increased the burden on enterprises to a certain extent."),(0,r.kt)("li",{parentName:"ul"},"Lack of quality and monitoring: Data integration and synchronization processes often experience loss or duplication of data. The synchronization process lacks monitoring, and it is impossible to intuitively understand the real-situation of the data during the task process."),(0,r.kt)("li",{parentName:"ul"},"Complex technology stack: The technology components used by enterprises are different, and users need to develop corresponding synchronization programs for different components to complete data integration."),(0,r.kt)("li",{parentName:"ul"},"Difficulty in management and maintenance: Limited to different underlying technology components (Flink/Spark) , offline synchronization and real-time synchronization often have be developed and managed separately, which increases thedifficulty of the management and maintainance.")),(0,r.kt)("h2",{id:"features-of-seatunnel"},"Features of SeaTunnel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rich and extensible Connector: SeaTunnel provides a Connector API that does not depend on a specific execution engine. Connectors (Source, Transform, Sink) developed based on this API can run On many different engines, such as SeaTunnel Engine, Flink, Spark that are currently supported."),(0,r.kt)("li",{parentName:"ul"},"Connector plug-in: The plug-in design allows users to easily develop their own Connector and integrate it into the SeaTunnel project. Currently, SeaTunnel has supported more than 100 Connectors, and the number is surging. There is the list of the ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/Connector-v2-release-state"},"currently-supported connectors")),(0,r.kt)("li",{parentName:"ul"},"Batch-stream integration: Connectors developed based on SeaTunnel Connector API are perfectly compatible with offline synchronization, real-time synchronization, full- synchronization, incremental synchronization and other scenarios. It greatly reduces the difficulty of managing data integration tasks."),(0,r.kt)("li",{parentName:"ul"},"Support distributed snapshot algorithm to ensure data consistency."),(0,r.kt)("li",{parentName:"ul"},"Multi-engine support: SeaTunnel uses SeaTunnel Engine for data synchronization by default. At the same time, SeaTunnel also supports the use of Flink or Spark as the execution engine of the Connector to adapt to the existing technical components of the enterprise. SeaTunnel supports multiple versions of Spark and Flink."),(0,r.kt)("li",{parentName:"ul"},"JDBC multiplexing, database log multi-table parsing: SeaTunnel supports multi-table or whole database synchronization, which solves the problem of over- JDBC connections; supports multi-table or whole database log reading and parsing, which solves the need for CDC multi-table synchronization scenarios Problems with repeated reading and parsing of logs."),(0,r.kt)("li",{parentName:"ul"},"High throughput and low latency: SeaTunnel supports parallel reading and writing, providing stable and reliable data synchronization capabilities with high throughput and low latency."),(0,r.kt)("li",{parentName:"ul"},"Perfect real-time monitoring: SeaTunnel supports detailed monitoring information of each step in the data synchronization process, allowing users to easily understand the number of data, data size, QPS and other information read and written by the synchronization task."),(0,r.kt)("li",{parentName:"ul"},"Two job development methods are supported: coding and canvas design: The SeaTunnel web project ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel-web"},"https://github.com/apache/incubator-seatunnel-web")," provides visual management of jobs, scheduling, running and monitoring capabilities.")),(0,r.kt)("h2",{id:"seatunnel-work-flowchart"},"SeaTunnel work flowchart"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"SeaTunnel work flowchart",src:t(5451).Z,width:"946",height:"593"})),(0,r.kt)("p",null,"The runtime process of SeaTunnel is shown in the figure above."),(0,r.kt)("p",null,"The user configures the job information and selects the execution engine to submit the job."),(0,r.kt)("p",null,"The Source Connector is responsible for parallel read the data and sending the data to the downstream Transform or directly to the Sink, and the Sink writes the data to the destination. It is worth noting that both Source and Transform and Sink can be easily developed and extended by yourself."),(0,r.kt)("p",null,"SeaTunnel is an EL(T) data integration platform. Therefore, in SeaTunnel, Transform can only be used to perform some simple transformations on data, such as converting the data of a column to uppercase or lowercase, changing the column name, or splitting a column into multiple columns."),(0,r.kt)("p",null,"The default engine use by SeaTunnel is ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/seatunnel-engine/about"},"SeaTunnel Engine"),". If you choose to use the Flink or Spark engine, SeaTunnel will package the Connector into a Flink or Spark program and submit it to Flink or Spark to run."),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source Connectors")," SeaTunnel support read data from various relational databases, graph databases, NoSQL databases, document databases, and memory databases. Various distributed file systems such as HDFS. A variety of cloud storage, such as S3 and OSS. At the same time, we also support data reading of many common SaaS services. You can access the detailed list ",(0,r.kt)("a",{parentName:"p",href:"connector-v2/source"},"here"),". If you want, You can develop your own source connector and easily integrate it into seatunnel.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transform Connector")," If the schema is different between source and sink, You can use Transform Connector to change the schema read from source and make it same as the sink schema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sink Connector")," SeaTunnel support write data to various relational databases, graph databases, NoSQL databases, document databases, and memory databases. Various distributed file systems such as HDFS. A variety of cloud storage, such as S3 and OSS. At the same time, we also support write data to many common SaaS services. You can access the detailed list ",(0,r.kt)("a",{parentName:"p",href:"connector-v2/sink"},"here"),". If you want, You can develop your own sink connector and easily integrate it into seatunnel."))),(0,r.kt)("h2",{id:"who-use-seatunnel"},"Who Use SeaTunnel"),(0,r.kt)("p",null,"SeaTunnel have lots of users which you can find more information in ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/user"},"users")),(0,r.kt)("h2",{id:"landscapes"},"Landscapes"),(0,r.kt)("p",{align:"center"},(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://landscape.cncf.io//image_en/left-logo.svg",width:"150",alt:""}),"\xa0\xa0",(0,r.kt)("img",{src:"https://landscape.cncf.io//image_en/right-logo.svg",width:"200",alt:""}),(0,r.kt)("br",null),(0,r.kt)("br",null),"SeaTunnel enriches the ",(0,r.kt)("a",{href:"https://landscape.cncf.io/card-mode?category=streaming-messaging&license=apache-license-2-0&grouping=category&selected=sea-tunnal"},"CNCF CLOUD NATIVE Landscape.")),(0,r.kt)("h2",{id:"whats-more"},"What's More"),(0,r.kt)("p",null,"You can see ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/start-v2"},"Quick Start")," for the next step."))}h.isMDXComponent=!0},5451:function(e,n,t){n.Z=t.p+"assets/images/architecture_diagram-c02a9d297450d0f9522324b2f196fa06.png"}}]);