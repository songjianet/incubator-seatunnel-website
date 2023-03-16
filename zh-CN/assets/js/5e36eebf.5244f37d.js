"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[966],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="SqlServer CDC",p={unversionedId:"connector-v2/source/SqlServer-CDC",id:"connector-v2/source/SqlServer-CDC",title:"SqlServer CDC",description:"SqlServer CDC source connector",source:"@site/docs/connector-v2/source/SqlServer-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SqlServer-CDC",permalink:"/zh-CN/docs/connector-v2/source/SqlServer-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/SqlServer-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/zh-CN/docs/connector-v2/source/Socket"},next:{title:"StarRocks",permalink:"/zh-CN/docs/connector-v2/source/StarRocks"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"hostname String",id:"hostname-string",level:3},{value:"port Integer",id:"port-integer",level:3},{value:"username String",id:"username-string",level:3},{value:"password String",id:"password-string",level:3},{value:"database-name String",id:"database-name-string",level:3},{value:"table-name String",id:"table-name-string",level:3},{value:"startup.mode Enum",id:"startupmode-enum",level:3},{value:"startup.timestamp Long",id:"startuptimestamp-long",level:3},{value:"startup.specific-offset.file String",id:"startupspecific-offsetfile-string",level:3},{value:"startup.specific-offset.pos Long",id:"startupspecific-offsetpos-long",level:3},{value:"stop.mode Enum",id:"stopmode-enum",level:3},{value:"stop.timestamp Long",id:"stoptimestamp-long",level:3},{value:"stop.specific-offset.file String",id:"stopspecific-offsetfile-string",level:3},{value:"stop.specific-offset.pos Long",id:"stopspecific-offsetpos-long",level:3},{value:"incremental.parallelism Integer",id:"incrementalparallelism-integer",level:3},{value:"snapshot.split.size Integer",id:"snapshotsplitsize-integer",level:3},{value:"snapshot.fetch.size Integer",id:"snapshotfetchsize-integer",level:3},{value:"server-time-zone String",id:"server-time-zone-string",level:3},{value:"connect.timeout Duration",id:"connecttimeout-duration",level:3},{value:"connect.max-retries Integer",id:"connectmax-retries-integer",level:3},{value:"connection.pool.size Integer",id:"connectionpoolsize-integer",level:3},{value:"debezium Config",id:"debezium-config",level:3},{value:"format Enum",id:"format-enum",level:3},{value:"example",id:"example",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example-1",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sqlserver-cdc"},"SqlServer CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SqlServer CDC source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The SqlServer CDC connector allows for reading snapshot data and incremental data from SqlServer database. This document\ndescribes how to setup the SqlServer CDC connector to run SQL queries against SqlServer databases."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3306")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"incremental.parallelism"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium.*"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"hostname-string"},"hostname ","[String]"),(0,l.kt)("p",null,"IP address or hostname of the database server."),(0,l.kt)("h3",{id:"port-integer"},"port ","[Integer]"),(0,l.kt)("p",null,"Integer port number of the database server."),(0,l.kt)("h3",{id:"username-string"},"username ","[String]"),(0,l.kt)("p",null,"Name of the database to use when connecting to the database server."),(0,l.kt)("h3",{id:"password-string"},"password ","[String]"),(0,l.kt)("p",null,"Password to use when connecting to the database server."),(0,l.kt)("h3",{id:"database-name-string"},"database-name ","[String]"),(0,l.kt)("p",null,"Database name of the database to monitor."),(0,l.kt)("h3",{id:"table-name-string"},"table-name ","[String]"),(0,l.kt)("p",null,"Table name is a combination of schema name and table name (schemaName.tableName)."),(0,l.kt)("h3",{id:"startupmode-enum"},"startup.mode ","[Enum]"),(0,l.kt)("p",null,'Optional startup mode for SqlServer CDC consumer, valid enumerations are "initial", "earliest", "latest" and "specific".'),(0,l.kt)("h3",{id:"startuptimestamp-long"},"startup.timestamp ","[Long]"),(0,l.kt)("p",null,"Start from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,l.kt)("h3",{id:"startupspecific-offsetfile-string"},"startup.specific-offset.file ","[String]"),(0,l.kt)("p",null,"Start from the specified binlog file name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"startupspecific-offsetpos-long"},"startup.specific-offset.pos ","[Long]"),(0,l.kt)("p",null,"Start from the specified binlog file position."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "startup.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"stopmode-enum"},"stop.mode ","[Enum]"),(0,l.kt)("p",null,'Optional stop mode for SqlServer CDC consumer, valid enumerations are "never".'),(0,l.kt)("h3",{id:"stoptimestamp-long"},"stop.timestamp ","[Long]"),(0,l.kt)("p",null,"Stop from the specified epoch timestamp (in milliseconds)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'timestamp'"),".")),(0,l.kt)("h3",{id:"stopspecific-offsetfile-string"},"stop.specific-offset.file ","[String]"),(0,l.kt)("p",null,"Stop from the specified binlog file name."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"stopspecific-offsetpos-long"},"stop.specific-offset.pos ","[Long]"),(0,l.kt)("p",null,"Stop from the specified binlog file position."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'Note, This option is required when the "stop.mode" option used ',(0,l.kt)("inlineCode",{parentName:"strong"},"'specific'"),".")),(0,l.kt)("h3",{id:"incrementalparallelism-integer"},"incremental.parallelism ","[Integer]"),(0,l.kt)("p",null,"The number of parallel readers in the incremental phase."),(0,l.kt)("h3",{id:"snapshotsplitsize-integer"},"snapshot.split.size ","[Integer]"),(0,l.kt)("p",null,"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot\nof table."),(0,l.kt)("h3",{id:"snapshotfetchsize-integer"},"snapshot.fetch.size ","[Integer]"),(0,l.kt)("p",null,"The maximum fetch size for per poll when read table snapshot."),(0,l.kt)("h3",{id:"server-time-zone-string"},"server-time-zone ","[String]"),(0,l.kt)("p",null,"The session time zone in database server."),(0,l.kt)("h3",{id:"connecttimeout-duration"},"connect.timeout ","[Duration]"),(0,l.kt)("p",null,"The maximum time that the connector should wait after trying to connect to the database server before timing out."),(0,l.kt)("h3",{id:"connectmax-retries-integer"},"connect.max-retries ","[Integer]"),(0,l.kt)("p",null,"The max retry times that the connector should retry to build database server connection."),(0,l.kt)("h3",{id:"connectionpoolsize-integer"},"connection.pool.size ","[Integer]"),(0,l.kt)("p",null,"The connection pool size."),(0,l.kt)("h3",{id:"debezium-config"},"debezium ","[Config]"),(0,l.kt)("p",null,"Pass-through Debezium's properties to Debezium Embedded Engine which is used to capture data changes from SqlServer server."),(0,l.kt)("p",null,"See more about\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://debezium.io/documentation/reference/1.6/connectors/sqlserver.html#sqlserver-connector-properties"},"Debezium's SqlServer Connector properties")),(0,l.kt)("h3",{id:"format-enum"},"format ","[Enum]"),(0,l.kt)("p",null,'Optional output format for SqlServer CDC, valid enumerations are "DEFAULT"\u3001"COMPATIBLE_DEBEZIUM_JSON".'),(0,l.kt)("h4",{id:"example"},"example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'source {\n  SqlServer-CDC {\n    debezium {\n        snapshot.mode = "never"\n        decimal.handling.mode = "double"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Jdbc",metastring:"{","{":!0},'source {\n  SqlServer-CDC {\n    result_table_name = "customers"\n    hostname = "sqlserver-host"\n    port = "1433"\n    username = "sa"\n    password = "Password!"\n    database-name = "column_type_test"\n    table-name = "dbo.full_types"\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add SqlServer CDC Source Connector"),(0,l.kt)("li",{parentName:"ul"},"[Doc]"," Add SqlServer CDC Source Connector document (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3993"},"3993"),")")))}c.isMDXComponent=!0}}]);