"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86505:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={},i="Easysearch",c={unversionedId:"connector-v2/source/Easysearch",id:"connector-v2/source/Easysearch",title:"Easysearch",description:"Easysearch source connector",source:"@site/docs/connector-v2/source/Easysearch.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Easysearch",permalink:"/docs/connector-v2/source/Easysearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Easysearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/docs/connector-v2/source/Doris"},next:{title:"Elasticsearch",permalink:"/docs/connector-v2/source/Elasticsearch"}},p={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Key features",id:"key-features",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"index string",id:"index-string",level:3},{value:"source array",id:"source-array",level:3},{value:"query json",id:"query-json",level:3},{value:"scroll_time String",id:"scroll_time-string",level:3},{value:"scroll_size int",id:"scroll_size-int",level:3},{value:"schema",id:"schema",level:3},{value:"tls_verify_certificate boolean",id:"tls_verify_certificate-boolean",level:3},{value:"tls_verify_hostname boolean",id:"tls_verify_hostname-boolean",level:3},{value:"tls_keystore_path string",id:"tls_keystore_path-string",level:3},{value:"tls_keystore_password string",id:"tls_keystore_password-string",level:3},{value:"tls_truststore_path string",id:"tls_truststore_path-string",level:3},{value:"tls_truststore_password string",id:"tls_truststore_password-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"easysearch"},"Easysearch"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Easysearch source connector")),(0,s.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Spark",(0,s.kt)("br",null),"\nFlink",(0,s.kt)("br",null),"\nSeaTunnel Zeta",(0,s.kt)("br",null))),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Used to read data from INFINI Easysearch."),(0,s.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Depenndency ",(0,s.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/com.infinilabs/easysearch-client"},"easysearch-client"))),(0,s.kt)("h2",{id:"key-features"},"Key features"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Engine Supported"),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Supported all versions released by ",(0,s.kt)("a",{parentName:"li",href:"https://www.infini.com/download/?product=easysearch"},"INFINI Easysearch"),".")))),(0,s.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Easysearch Data Type"),(0,s.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"STRING",(0,s.kt)("br",null),"KEYWORD",(0,s.kt)("br",null),"TEXT"),(0,s.kt)("td",{parentName:"tr",align:null},"STRING")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,s.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"BYTE"),(0,s.kt)("td",{parentName:"tr",align:null},"BYTE")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"SHORT"),(0,s.kt)("td",{parentName:"tr",align:null},"SHORT")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,s.kt)("td",{parentName:"tr",align:null},"INT")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"LONG"),(0,s.kt)("td",{parentName:"tr",align:null},"LONG")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"FLOAT",(0,s.kt)("br",null),"HALF_FLOAT"),(0,s.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,s.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Date"),(0,s.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE_TIME_TYPE")))),(0,s.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,s.kt)("p",null,"Easysearch cluster http address, the format is ",(0,s.kt)("inlineCode",{parentName:"p"},"host:port"),", allowing multiple hosts to be specified. Such as ",(0,s.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,s.kt)("h3",{id:"username-string"},"username ","[string]"),(0,s.kt)("p",null,"security username."),(0,s.kt)("h3",{id:"password-string"},"password ","[string]"),(0,s.kt)("p",null,"security password."),(0,s.kt)("h3",{id:"index-string"},"index ","[string]"),(0,s.kt)("p",null,"Easysearch index name, support * fuzzy matching."),(0,s.kt)("h3",{id:"source-array"},"source ","[array]"),(0,s.kt)("p",null,"The fields of index.\nYou can get the document id by specifying the field ",(0,s.kt)("inlineCode",{parentName:"p"},"_id"),".If sink _id to other index,you need specify an alias for _id due to the Easysearch limit.\nIf you don't config source, you must config ",(0,s.kt)("inlineCode",{parentName:"p"},"schema"),"."),(0,s.kt)("h3",{id:"query-json"},"query ","[json]"),(0,s.kt)("p",null,"Easysearch DSL.\nYou can control the range of data read."),(0,s.kt)("h3",{id:"scroll_time-string"},"scroll_time ","[String]"),(0,s.kt)("p",null,"Amount of time Easysearch will keep the search context alive for scroll requests."),(0,s.kt)("h3",{id:"scroll_size-int"},"scroll_size ","[int]"),(0,s.kt)("p",null,"Maximum number of hits to be returned with each Easysearch scroll request."),(0,s.kt)("h3",{id:"schema"},"schema"),(0,s.kt)("p",null,"The structure of the data, including field names and field types.\nIf you don't config schema, you must config ",(0,s.kt)("inlineCode",{parentName:"p"},"source"),"."),(0,s.kt)("h3",{id:"tls_verify_certificate-boolean"},"tls_verify_certificate ","[boolean]"),(0,s.kt)("p",null,"Enable certificates validation for HTTPS endpoints"),(0,s.kt)("h3",{id:"tls_verify_hostname-boolean"},"tls_verify_hostname ","[boolean]"),(0,s.kt)("p",null,"Enable hostname validation for HTTPS endpoints"),(0,s.kt)("h3",{id:"tls_keystore_path-string"},"tls_keystore_path ","[string]"),(0,s.kt)("p",null,"The path to the PEM or JKS key store. This file must be readable by the operating system user running SeaTunnel."),(0,s.kt)("h3",{id:"tls_keystore_password-string"},"tls_keystore_password ","[string]"),(0,s.kt)("p",null,"The key password for the key store specified"),(0,s.kt)("h3",{id:"tls_truststore_path-string"},"tls_truststore_path ","[string]"),(0,s.kt)("p",null,"The path to PEM or JKS trust store. This file must be readable by the operating system user running SeaTunnel."),(0,s.kt)("h3",{id:"tls_truststore_password-string"},"tls_truststore_password ","[string]"),(0,s.kt)("p",null,"The key password for the trust store specified"),(0,s.kt)("h3",{id:"common-options"},"common options"),(0,s.kt)("p",null,"Source plugin common parameters, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"simple"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hocon"},'Easysearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-*"\n    source = ["_id","name","age"]\n    query = {"range":{"firstPacket":{"gte":1700407367588,"lte":1700407367588}}}\n}\n')),(0,s.kt)("p",null,"complex"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hocon"},'Easysearch {\n    hosts = ["Easysearch:9200"]\n    index = "st_index"\n    schema = {\n        fields {\n            c_map = "map<string, tinyint>"\n            c_array = "array<tinyint>"\n            c_string = string\n            c_boolean = boolean\n            c_tinyint = tinyint\n            c_smallint = smallint\n            c_int = int\n            c_bigint = bigint\n            c_float = float\n            c_double = double\n            c_decimal = "decimal(2, 1)"\n            c_bytes = bytes\n            c_date = date\n            c_timestamp = timestamp\n        }\n    }\n    query = {"range":{"firstPacket":{"gte":1700407367588,"lte":1700407367588}}}\n}\n')),(0,s.kt)("p",null,"SSL (Disable certificates validation)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_verify_certificate = false\n    }\n}\n')),(0,s.kt)("p",null,"SSL (Disable hostname validation)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_verify_hostname = false\n    }\n}\n')),(0,s.kt)("p",null,"SSL (Enable certificates validation)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_keystore_path = "${your Easysearch home}/config/certs/http.p12"\n        tls_keystore_password = "${your password}"\n    }\n}\n')),(0,s.kt)("h2",{id:"changelog"},"Changelog"),(0,s.kt)("h3",{id:"next-version"},"next version"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Add Easysearch Source Connector"),(0,s.kt)("li",{parentName:"ul"},"Support https protocol"),(0,s.kt)("li",{parentName:"ul"},"Support DSL")))}m.isMDXComponent=!0}}]);