"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[41386],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6361:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="PostgreSql",p={unversionedId:"connector-v2/sink/PostgreSql",id:"connector-v2/sink/PostgreSql",title:"PostgreSql",description:"JDBC PostgreSql Sink Connector",source:"@site/docs/connector-v2/sink/PostgreSql.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/PostgreSql",permalink:"/zh-CN/docs/connector-v2/sink/PostgreSql",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/PostgreSql.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/zh-CN/docs/connector-v2/sink/Phoenix"},next:{title:"Pulsar",permalink:"/zh-CN/docs/connector-v2/sink/Pulsar"}},u={},d=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Options",id:"options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"Exactly-once :",id:"exactly-once-",level:3},{value:"CDC(Change Data Capture) Event",id:"cdcchange-data-capture-event",level:3}],m={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql"},"PostgreSql"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC PostgreSql Sink Connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it.")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"Download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to manipulate the GEOMETRY type in PostgreSQL."),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.postgis/postgis-jdbc"},"Download"))))),(0,l.kt)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,l.kt)("br",null),"\nFor example PostgreSQL datasource: cp postgresql-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/",(0,l.kt)("br",null),"\nIf you want to manipulate the GEOMETRY type in PostgreSQL, add postgresql-xxx.jar and postgis-jdbc-xxx.jar to $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PostgreSQL Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BOOL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","BOOLEAN",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BYTEA",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BYTEA",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","TINYINT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT2",(0,l.kt)("br",null),"SMALLSERIAL",(0,l.kt)("br",null),"INT4",(0,l.kt)("br",null),"SERIAL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_INT2",(0,l.kt)("br",null),"_INT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","INT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT8",(0,l.kt)("br",null),"BIGSERIAL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_INT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","BIGINT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_FLOAT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","FLOAT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_FLOAT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","DOUBLE",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size>0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(Get the designated column's specified column size,Gets the number of digits in the specified column to the right of the decimal point)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size<0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPCHAR",(0,l.kt)("br",null),"CHARACTER",(0,l.kt)("br",null),"VARCHAR",(0,l.kt)("br",null),"TEXT",(0,l.kt)("br",null),"GEOMETRY",(0,l.kt)("br",null),"GEOGRAPHY",(0,l.kt)("br",null),"JSON",(0,l.kt)("br",null),"JSONB"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BPCHAR",(0,l.kt)("br",null),"_CHARACTER",(0,l.kt)("br",null),"_VARCHAR",(0,l.kt)("br",null),"_TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","STRING",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OTHER DATA TYPES"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT SUPPORTED YET")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost:5432/test ",(0,l.kt)("br",null),"  if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,l.kt)("br",null)," if you use PostgreSQL the value is ",(0,l.kt)("inlineCode",{parentName:"td"},"org.postgresql.Driver"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection instance password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,l.kt)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,l.kt)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this ",(0,l.kt)("inlineCode",{parentName:"td"},"database")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,l.kt)("br",null),"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,l.kt)("br",null),"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,l.kt)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"delete"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,l.kt)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,l.kt)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,l.kt)("br",null),", the data will be flushed into the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to",(0,l.kt)("br",null),"set ",(0,l.kt)("inlineCode",{parentName:"td"},"xa_data_source_class_name"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The xa data source class name of the database Driver, for example, PostgreSQL is ",(0,l.kt)("inlineCode",{parentName:"td"},"org.postgresql.xa.PGXADataSource"),", and",(0,l.kt)("br",null),"please refer to appendix for other data sources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,l.kt)("br",null),"exactly-once semantics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_ide"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Identify whether the field needs to be converted when synchronizing from the source to the sink. ",(0,l.kt)("inlineCode",{parentName:"td"},"ORIGINAL")," indicates no conversion is needed;",(0,l.kt)("inlineCode",{parentName:"td"},"UPPERCASE")," indicates conversion to uppercase;",(0,l.kt)("inlineCode",{parentName:"td"},"LOWERCASE")," indicates conversion to lowercase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,l.kt)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details")))),(0,l.kt)("h3",{id:"tips"},"Tips"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your PostgreSQL. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n       # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n        user = root\n        password = 123456\n        query = "insert into test_table(name,age) values(?,?)"\n     }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,l.kt)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    Jdbc {\n        # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = org.postgresql.Driver\n        user = root\n        password = 123456\n        \n        generate_sink_sql = true\n        database = test\n        table = "public.test_table"\n    }\n}\n')),(0,l.kt)("h3",{id:"exactly-once-"},"Exactly-once :"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For accurate write scene we guarantee accurate once")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n       # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n    \n        max_retries = 0\n        user = root\n        password = 123456\n        query = "insert into test_table(name,age) values(?,?)"\n    \n        is_exactly_once = "true"\n    \n        xa_data_source_class_name = "org.postgresql.xa.PGXADataSource"\n    }\n}\n')),(0,l.kt)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change Data Capture) Event"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"CDC change data is also supported by us In this case, you need config database, table and primary_keys.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        # if you would use json or jsonb type insert please add jdbc url stringtype=unspecified option\n        url = "jdbc:postgresql://localhost:5432/test"\n        driver = "org.postgresql.Driver"\n        user = root\n        password = 123456\n        \n        generate_sink_sql = true\n        # You need to configure both database and table\n        database = test\n        table = sink_table\n        primary_keys = ["id","name"]\n        field_ide = UPPERCASE\n    }\n}\n')))}k.isMDXComponent=!0}}]);