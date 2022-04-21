"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8410],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,m=c["".concat(u,".").concat(k)]||c[k]||d[k]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2642:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={},u="Introduction",s={unversionedId:"introduction",id:"version-1.x/introduction",title:"Introduction",description:"---",source:"@site/versioned_docs/version-1.x/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/1.x/introduction",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/introduction.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",next:{title:"Quick start",permalink:"/docs/1.x/quick-start"}},p={},d=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Event",id:"event",level:3},{value:"Field Name",id:"field-name",level:4},{value:"Metadata",id:"metadata",level:4},{value:"Field Reference",id:"field-reference",level:4},{value:"Input",id:"input",level:2},{value:"Kafka",id:"kafka",level:3},{value:"Filters",id:"filters",level:2},{value:"JSON",id:"json",level:3},{value:"Split",id:"split",level:3},{value:"Synopsis",id:"synopsis",level:4},{value:"Details",id:"details",level:4},{value:"SQL",id:"sql",level:2},{value:"Query",id:"query",level:3},{value:"Synopsis",id:"synopsis-1",level:4},{value:"Details",id:"details-1",level:4},{value:"Output",id:"output",level:2},{value:"Kafka",id:"kafka-1",level:3},{value:"Serializer",id:"serializer",level:2},{value:"Raw",id:"raw",level:3},{value:"Synopsis",id:"synopsis-2",level:4},{value:"Details",id:"details-2",level:4},{value:"JSON",id:"json-1",level:3},{value:"Tar.gz",id:"targz",level:3},{value:"Contact Us",id:"contact-us",level:2}],c={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("h4",{id:"field-name"},"Field Name"),(0,r.kt)("p",null,"A valid field name should not contains ",(0,r.kt)("inlineCode",{parentName:"p"},"."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," and any other characters that not allowed in ANSI standard SQL 2003 syntax."),(0,r.kt)("p",null,"Reserved field names includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__root__")," means top level of the event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__metadata__")," means metadata field for internal use.")),(0,r.kt)("h4",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"Metadata can be set as usual fields, all the fields in metadata are invisible for output, it's just for internal use."),(0,r.kt)("h4",{id:"field-reference"},"Field Reference"),(0,r.kt)("p",null,"Single level: ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\nMultiple level: ",(0,r.kt)("inlineCode",{parentName:"p"},"a.b.c"),"\nTop leve (Root) Reference: ",(0,r.kt)("inlineCode",{parentName:"p"},"__root__")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[TODO]"," Notes: this design should be compatible with Spark SQL.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("h3",{id:"kafka"},"Kafka"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("h3",{id:"split"},"Split"),(0,r.kt)("h4",{id:"synopsis"},"Synopsis"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Input type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'" "')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source_field"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag_on_failure"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"_tag"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_field"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"',"_","_","root","_","_",'"')))),(0,r.kt)("h4",{id:"details"},"Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"delimiter")),(0,r.kt)("p",null,"regular expression is supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"keys")),(0,r.kt)("p",null,"if number of parts splited by ",(0,r.kt)("inlineCode",{parentName:"p"},"delimiter")," is larger than number of keys in ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),", the extra parts in the right side will be ignored. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source_field")),(0,r.kt)("p",null,"if ",(0,r.kt)("inlineCode",{parentName:"p"},"source_field")," does not exists, nothing will be done."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"target_field")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("p",null,"SQL can be used to filter and aggregate events, the underlying techniques is Spark SQL."),(0,r.kt)("p",null,"For example, the following sql filters events that response_time between ","[300, 1200]"," milliseconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select * from mytable where response_time >= 300 and response_time <= 1200\n")),(0,r.kt)("p",null,"And this sql count sales for each city:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select city, count(sales) from mytable group by city\n")),(0,r.kt)("p",null,"Also, You can combine these two sqls into one sql for both filtering and aggregation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select city, count(*) from mytable where response_time >= 300 and response_time <= 1200 group by city\n")),(0,r.kt)("p",null,"Pipeline multiple sqls:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sql {\n    query {\n        table_name = "mytable1"\n        sql = "select * from mytable1 where "\n    }\n    \n    query {\n        table_name = ""\n    }\n}\n')),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("h4",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Input type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"mytable"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sql"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TODO : maybe we can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," settings for explicitly defining table schema. By now, schema is auto generated.")),(0,r.kt)("h4",{id:"details-1"},"Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"table_name")),(0,r.kt)("p",null,'Registers a temporary table using the given name, the default value is "mytable". You can use it in ',(0,r.kt)("inlineCode",{parentName:"p"},"sql"),", such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select * from mytable where http_status >= 500\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sql")),(0,r.kt)("p",null,"Executes a SQL query using the given sql string."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("h3",{id:"kafka-1"},"Kafka"),(0,r.kt)("h2",{id:"serializer"},"Serializer"),(0,r.kt)("h3",{id:"raw"},"Raw"),(0,r.kt)("p",null,"The default serializer is ",(0,r.kt)("inlineCode",{parentName:"p"},"raw"),". If no serializers configured in input/output, ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," will be used."),(0,r.kt)("h4",{id:"synopsis-2"},"Synopsis"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Input type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"charset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"utf-8"')))),(0,r.kt)("h4",{id:"details-2"},"Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"charset")),(0,r.kt)("p",null,"Serialize or deserialize using the given charset."),(0,r.kt)("p",null,"Available charsets are:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[TODO]"," list all supported charsets, refer to logstash and these links:")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html"},"https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/technotes/guides/intl/encoding.doc.html"},"http://docs.oracle.com/javase/7/docs/technotes/guides/intl/encoding.doc.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/character-sets/character-sets.xhtml"},"http://www.iana.org/assignments/character-sets/character-sets.xhtml")),(0,r.kt)("h3",{id:"json-1"},"JSON"),(0,r.kt)("h3",{id:"targz"},"Tar.gz"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"compressed codec")),(0,r.kt)("h2",{id:"contact-us"},"Contact Us"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail list: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Mail to ",(0,r.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org"),", follow the reply to subscribe the mail list."),(0,r.kt)("li",{parentName:"ul"},"Slack: Send ",(0,r.kt)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," mail to the mail list(",(0,r.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), we will invite you in.")))}k.isMDXComponent=!0}}]);