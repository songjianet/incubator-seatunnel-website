"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[24842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={slug:"hive-to-clickhouse",title:"How to quickly import data from Hive into ClickHouse",tags:["Hive","ClickHouse"]},s=void 0,u={permalink:"/blog/hive-to-clickhouse",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-hive-to-clickhouse.md",source:"@site/blog/2021-12-30-hive-to-clickhouse.md",title:"How to quickly import data from Hive into ClickHouse",description:"ClickHouse is a distributed columnar DBMS for OLAP. Our department has stored all log data related to data analysis in ClickHouse, an excellent data warehouse, and the current daily data volume has reached 30 billion.",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Hive",permalink:"/blog/tags/hive"},{label:"ClickHouse",permalink:"/blog/tags/click-house"}],readingTime:4.215,truncated:!1,authors:[],frontMatter:{slug:"hive-to-clickhouse",title:"How to quickly import data from Hive into ClickHouse",tags:["Hive","ClickHouse"]},prevItem:{title:"How to quickly import data from HDFS into ClickHouse",permalink:"/blog/hdfs-to-clickhouse"},nextItem:{title:"How to quickly write data to Elasticsearch using Spark",permalink:"/blog/spark-execute-elasticsearch"}},c={authorsImageUrls:[]},p=[{value:"Hive to ClickHouse",id:"hive-to-clickhouse",level:2},{value:"Hive Schema",id:"hive-schema",level:3},{value:"ClickHouse Schema",id:"clickhouse-schema",level:3},{value:"Seatunnel with ClickHouse",id:"seatunnel-with-clickhouse",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Seatunnel Pipeline",id:"seatunnel-pipeline",level:3},{value:"Spark",id:"spark",level:4},{value:"Input",id:"input",level:4},{value:"Filter",id:"filter",level:4},{value:"Output",id:"output",level:4},{value:"Running Seatunnel",id:"running-seatunnel",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ClickHouse is a distributed columnar DBMS for OLAP. Our department has stored all log data related to data analysis in ClickHouse, an excellent data warehouse, and the current daily data volume has reached 30 billion."),(0,r.kt)("p",null,"In the previous article ","[How to quickly import data from HDFS into ClickHouse]"," (2021-12-30-hdfs-to-clickhouse.md), we mentioned the use of Seatunnel ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator -seatunnel")," After a very simple operation on the data in HDFS, the data can be written to ClickHouse. The data in HDFS is generally unstructured data, so what should we do with the structured data stored in Hive?"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(37653).Z,width:"962",height:"518"})),(0,r.kt)("h2",{id:"hive-to-clickhouse"},"Hive to ClickHouse"),(0,r.kt)("p",null,"Assuming that our data has been stored in Hive, we need to read the data in the Hive table and filter out the fields we care about, or convert the fields, and finally write the corresponding fields into the ClickHouse table."),(0,r.kt)("h3",{id:"hive-schema"},"Hive Schema"),(0,r.kt)("p",null,"The structure of the data table we store in Hive is as follows, which stores common Nginx logs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE `nginx_msg_detail`(\n   `hostname` string,\n   `domain` string,\n   `remote_addr` string,\n   `request_time` float,\n   `datetime` string,\n   `url` string,\n   `status` int,\n   `data_size` int,\n   `referer` string,\n   `cookie_info` string,\n   `user_agent` string,\n   `minute` string)\n PARTITIONED BY (\n   `date` string,\n   `hour` string)\n\n")),(0,r.kt)("h3",{id:"clickhouse-schema"},"ClickHouse Schema"),(0,r.kt)("p",null,"Our ClickHouse table creation statement is as follows, our table is partitioned by day"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE cms.cms_msg\n(\n    date Date,\n    datetime DateTime,\n    url String,\n    request_time Float32,\n    status String,\n    hostname String,\n    domain String,\n    remote_addr String,\n    data_size Int32\n) ENGINE = MergeTree PARTITION BY date ORDER BY (date, hostname) SETTINGS index_granularity = 16384\n")),(0,r.kt)("h2",{id:"seatunnel-with-clickhouse"},"Seatunnel with ClickHouse"),(0,r.kt)("p",null,"Next, I will introduce to you how we write data from Hive to ClickHouse through Seatunnel."),(0,r.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," is a very easy-to-use, high-performance, real-time data processing product that can deal with massive data. It is built on Spark. Seatunnel has a very rich set of plug-ins that support reading data from Kafka, HDFS, and Kudu, performing various data processing, and writing the results to ClickHouse, Elasticsearch or Kafka."),(0,r.kt)("p",null,"The environment preparation and installation steps of Seatunnel will not be repeated here. For specific installation steps, please refer to the previous article or visit ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/about"},"Seatunnel Docs")),(0,r.kt)("h3",{id:"seatunnel-pipeline"},"Seatunnel Pipeline"),(0,r.kt)("p",null,"We only need to write a configuration file of Seatunnel Pipeline to complete the data import."),(0,r.kt)("p",null,"The configuration file includes four parts, namely Spark, Input, filter and Output."),(0,r.kt)("h4",{id:"spark"},"Spark"),(0,r.kt)("p",null,"This part is the related configuration of Spark, which mainly configures the resource size required for Spark execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'spark {\n  // This configuration is required\n  spark.sql.catalogImplementation = "hive"\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n')),(0,r.kt)("h4",{id:"input"},"Input"),(0,r.kt)("p",null,"This part defines the data source. The following is a configuration example of reading data in text format from a Hive file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'input {\n    hive {\n        pre_sql = "select * from access.nginx_msg_detail"\n        table_name = "access_log"\n    }\n}\n')),(0,r.kt)("p",null,"See, a very simple configuration can read data from Hive. ",(0,r.kt)("inlineCode",{parentName:"p"},"pre_sql")," is the SQL to read data from Hive, and ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name")," is the name of the table that will register the read data as a temporary table in Spark, which can be any field."),(0,r.kt)("p",null,"It should be noted that it must be ensured that the metastore of hive is in the service state."),(0,r.kt)("p",null,"When running in Cluster, Client, Local mode, the ",(0,r.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," file must be placed in the $HADOOP_CONF directory of the submit task node"),(0,r.kt)("h4",{id:"filter"},"Filter"),(0,r.kt)("p",null,"In the Filter section, here we configure a series of transformations, and here we discard the unnecessary minute and hour fields. Of course, we can also not read these fields through ",(0,r.kt)("inlineCode",{parentName:"p"},"pre_sql")," when reading Hive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'filter {\n    remove {\n        source_field = ["minute", "hour"]\n    }\n}\n')),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("p",null,"Finally, we write the processed structured data to ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'output {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "nginx_log"\n        fields = ["date", "datetime", "hostname", "url", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,r.kt)("h3",{id:"running-seatunnel"},"Running Seatunnel"),(0,r.kt)("p",null,"We combine the above four-part configuration into our configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"config/batch.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vim config/batch.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  // This configuration is required\n  spark.sql.catalogImplementation = "hive"\n}\ninput {\n    hive {\n        pre_sql = "select * from access.nginx_msg_detail"\n        table_name = "access_log"\n    }\n}\nfilter {\n    remove {\n        source_field = ["minute", "hour"]\n    }\n}\noutput {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,r.kt)("p",null,"Execute the command, specify the configuration file, and run Seatunnel to write data to ClickHouse. Here we take the local mode as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we covered how to import data from Hive into ClickHouse using Seatunnel. The data import can be completed quickly through only one configuration file without writing any code, which is very simple."),(0,r.kt)("p",null,"If you want to know more functions and cases of Seatunnel combined with ClickHouse, Elasticsearch, Kafka, Hadoop, you can go directly to the official website ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,r.kt)("p",null,"-- Power by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}h.isMDXComponent=!0},37653:function(e,t,n){t.Z=n.p+"assets/images/hive-logo-c9aedd90b5ea9668c87fe25ad92a8e6c.png"}}]);