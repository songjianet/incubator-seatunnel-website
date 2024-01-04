"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8022],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},p="MongoDB",s={unversionedId:"connector-v2/sink/MongoDB",id:"connector-v2/sink/MongoDB",title:"MongoDB",description:"MongoDB Sink Connector",source:"@site/docs/connector-v2/sink/MongoDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/MongoDB",permalink:"/docs/connector-v2/sink/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/MongoDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Maxcompute",permalink:"/docs/connector-v2/sink/Maxcompute"},next:{title:"MySQL",permalink:"/docs/connector-v2/sink/Mysql"}},u={},d=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"How to Create a MongoDB Data Synchronization Jobs",id:"how-to-create-a-mongodb-data-synchronization-jobs",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"MongoDB Database Connection URI Examples",id:"mongodb-database-connection-uri-examples",level:3},{value:"Buffer Flush",id:"buffer-flush",level:3},{value:"Why is Not Recommended to Use Transactions for Operation?",id:"why-is-not-recommended-to-use-transactions-for-operation",level:3},{value:"Idempotent Writes",id:"idempotent-writes",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta",id:"220-beta",level:3},{value:"2.3.1-release",id:"231-release",level:3},{value:"Next Version",id:"next-version",level:3}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb"},"MongoDB"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MongoDB Sink Connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tips")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.If you want to use CDC-written features, recommend enable the upsert-enable configuration.")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The MongoDB Connector provides the ability to read and write data from and to MongoDB.\nThis document describes how to set up the MongoDB connector to run data writers against MongoDB."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("p",null,"In order to use the Mongodb connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Dependency"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,l.kt)("td",{parentName:"tr",align:null},"universal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-mongodb"},"Download"))))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("p",null,"The following table lists the field data type mapping from MongoDB BSON type to Seatunnel data type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Seatunnel Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"MongoDB BSON Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectId")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},"Binary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"Int32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"Int64")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"Double")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal128")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp","[Date]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROW"),(0,l.kt)("td",{parentName:"tr",align:null},"Object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},"Array")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tips")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.When using SeaTunnel to write Date and Timestamp types to MongoDB, both will produce a Date data type in MongoDB, but the precision will be different. The data generated by the SeaTunnel Date type has second-level precision, while the data generated by the SeaTunnel Timestamp type has millisecond-level precision.",(0,l.kt)("br",null),"\n2.When using the DECIMAL type in SeaTunnel, be aware that the maximum range cannot exceed 34 digits, which means you should use decimal(34, 18).",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The MongoDB standard connection uri. eg. mongodb://user:password@hosts:27017/database?readPreference=secondary&slaveOk=true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of MongoDB database to read or write.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collection"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of MongoDB collection to read or write.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"MongoDB's BSON and seatunnel data structure mapping.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer-flush.max-rows"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of buffered rows per batch request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buffer-flush.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the maximum interval of buffered rows per batch request, the unit is millisecond.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry.max"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the max number of retry if writing records to database failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the retry time interval if writing records to database failed, the unit is millisecond.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upsert-enable"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to write documents via upsert mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary-key"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The primary keys for upsert/update. Keys are in ",(0,l.kt)("inlineCode",{parentName:"td"},'["id","name",...]')," format for properties.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to use transactions in MongoSink (requires MongoDB 4.2+).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/docs/connector-v2/sink/common-options"},"Source Common Options")," for details")))),(0,l.kt)("h3",{id:"tips"},"Tips"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.The data flushing logic of the MongoDB Sink Connector is jointly controlled by three parameters: ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer-flush.max-rows"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"buffer-flush.interval"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval"),".",(0,l.kt)("br",null),"\nData flushing will be triggered if any of these conditions are met.",(0,l.kt)("br",null),"\n2.Compatible with the historical parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"upsert-key"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"upsert-key")," is set, please do not set ",(0,l.kt)("inlineCode",{parentName:"p"},"primary-key"),".",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"how-to-create-a-mongodb-data-synchronization-jobs"},"How to Create a MongoDB Data Synchronization Jobs"),(0,l.kt)("p",null,"The following example demonstrates how to create a data synchronization job that writes randomly generated data to a MongoDB database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval  = 1000\n}\n\nsource {\n  FakeSource {\n      row.num = 2\n      bigint.min = 0\n      bigint.max = 10000000\n      split.num = 1\n      split.read-interval = 300\n      schema {\n        fields {\n          c_bigint = bigint\n        }\n      }\n    }\n}\n\nsink {\n  MongoDB{\n    uri = mongodb://user:password@127.0.0.1:27017\n    database = "test"\n    collection = "test"\n    schema = {\n      fields {\n        _id = string\n        c_bigint = bigint\n      }\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,l.kt)("h3",{id:"mongodb-database-connection-uri-examples"},"MongoDB Database Connection URI Examples"),(0,l.kt)("p",null,"Unauthenticated single node connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb\n")),(0,l.kt)("p",null,"Replica set connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb?replicaSet=xxx\n")),(0,l.kt)("p",null,"Authenticated replica set connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://admin:password@127.0.0.0:27017/mydb?replicaSet=xxx&authSource=admin\n")),(0,l.kt)("p",null,"Multi-node replica set connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0..1:27017,127.0.0..2:27017,127.0.0.3:27017/mydb?replicaSet=xxx\n")),(0,l.kt)("p",null,"Sharded cluster connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://127.0.0.0:27017/mydb\n")),(0,l.kt)("p",null,"Multiple mongos connections:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://192.168.0.1:27017,192.168.0.2:27017,192.168.0.3:27017/mydb\n")),(0,l.kt)("p",null,"Note: The username and password in the URI must be URL-encoded before being concatenated into the connection string."),(0,l.kt)("h3",{id:"buffer-flush"},"Buffer Flush"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    buffer-flush.max-rows = 2000\n    buffer-flush.interval = 1000\n    schema = {\n      fields {\n        _id = string\n        id = bigint\n        status = string\n      }\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"why-is-not-recommended-to-use-transactions-for-operation"},"Why is Not Recommended to Use Transactions for Operation?"),(0,l.kt)("p",null,"Although MongoDB has fully supported multi-document transactions since version 4.2, it doesn't mean that everyone should use them recklessly.\nTransactions are equivalent to locks, node coordination, additional overhead, and performance impact.\nInstead, the principle for using transactions should be: avoid using them if possible.\nThe necessity for using transactions can be greatly avoided by designing systems rationally."),(0,l.kt)("h3",{id:"idempotent-writes"},"Idempotent Writes"),(0,l.kt)("p",null,"By specifying a clear primary key and using the upsert method, exactly-once write semantics can be achieved."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"primary-key")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"upsert-enable")," is defined in the configuration, the MongoDB sink will use upsert semantics instead of regular INSERT statements. We combine the primary keys declared in upsert-key as the MongoDB reserved primary key and use upsert mode for writing to ensure idempotent writes.\nIn the event of a failure, Seatunnel jobs will recover from the last successful checkpoint and reprocess, which may result in duplicate message processing during recovery. It is highly recommended to use upsert mode, as it helps to avoid violating database primary key constraints and generating duplicate data if records need to be reprocessed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n  MongoDB {\n    uri = "mongodb://user:password@127.0.0.1:27017"\n    database = "test_db"\n    collection = "users"\n    upsert-enable = true\n    primary-key = ["name","status"]\n    schema = {\n      fields {\n        _id = string\n        name = string\n        status = string\n      }\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta"},"2.2.0-beta"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add MongoDB Source Connector")),(0,l.kt)("h3",{id:"231-release"},"2.3.1-release"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]","Refactor mongodb source connector(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/4620"},"4620"),")")),(0,l.kt)("h3",{id:"next-version"},"Next Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]","Mongodb support cdc sink(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/4833"},"4833"),")")))}c.isMDXComponent=!0}}]);