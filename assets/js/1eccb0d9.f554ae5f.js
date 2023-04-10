"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[74734],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7625:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return u},toc:function(){return s},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="IoTDB",m={unversionedId:"connector-v2/sink/IoTDB",id:"version-2.3.1/connector-v2/sink/IoTDB",title:"IoTDB",description:"IoTDB sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/IoTDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/IoTDB",permalink:"/docs/2.3.1/connector-v2/sink/IoTDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/IoTDB.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"InfluxDB",permalink:"/docs/2.3.1/connector-v2/sink/InfluxDB"},next:{title:"JDBC",permalink:"/docs/2.3.1/connector-v2/sink/Jdbc"}},u={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"key_device string",id:"key_device-string",level:3},{value:"key_timestamp string",id:"key_timestamp-string",level:3},{value:"key_measurement_fields array",id:"key_measurement_fields-array",level:3},{value:"storage_group string",id:"storage_group-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"default_thrift_buffer_size int",id:"default_thrift_buffer_size-int",level:3},{value:"max_thrift_frame_size int",id:"max_thrift_frame_size-int",level:3},{value:"zone_id string",id:"zone_id-string",level:3},{value:"enable_rpc_compression boolean",id:"enable_rpc_compression-boolean",level:3},{value:"connection_timeout_in_ms int",id:"connection_timeout_in_ms-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Case1",id:"case1",level:3},{value:"Case2",id:"case2",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],d={toc:s};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iotdb"},"IoTDB"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"IoTDB sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to write data to IoTDB."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is a conflict of thrift version between IoTDB and Spark.Therefore, you need to execute ",(0,l.kt)("inlineCode",{parentName:"p"},"rm -f $SPARK_HOME/jars/libthrift*")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/")," to resolve it."))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("p",null,"IoTDB supports the ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")," feature through idempotent writing. If two pieces of data have\nthe same ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),", the new data will overwrite the old one."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_device"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"processing time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_measurement_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"exclude ",(0,l.kt)("inlineCode",{parentName:"td"},"device")," & ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storage_group"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_thrift_buffer_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_thrift_frame_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zone_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_rpc_compression"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_timeout_in_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," cluster address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},'["host:port", ...]')),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," user username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," user password"),(0,l.kt)("h3",{id:"key_device-string"},"key_device ","[string]"),(0,l.kt)("p",null,"Specify field name of the ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," deviceId in SeaTunnelRow"),(0,l.kt)("h3",{id:"key_timestamp-string"},"key_timestamp ","[string]"),(0,l.kt)("p",null,"Specify field-name of the ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," timestamp in SeaTunnelRow. If not specified, use processing-time as timestamp"),(0,l.kt)("h3",{id:"key_measurement_fields-array"},"key_measurement_fields ","[array]"),(0,l.kt)("p",null,"Specify field-name of the ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," measurement list in SeaTunnelRow. If not specified, include all fields but exclude ",(0,l.kt)("inlineCode",{parentName:"p"},"device")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")),(0,l.kt)("h3",{id:"storage_group-string"},"storage_group ","[string]"),(0,l.kt)("p",null,"Specify device storage group(path prefix)"),(0,l.kt)("p",null,'example: deviceId = ${storage_group} + "." +  ${key_device}'),(0,l.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,l.kt)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,l.kt)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,l.kt)("p",null,"The number of retries to flush failed"),(0,l.kt)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,l.kt)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,l.kt)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,l.kt)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")),(0,l.kt)("h3",{id:"default_thrift_buffer_size-int"},"default_thrift_buffer_size ","[int]"),(0,l.kt)("p",null,"Thrift init buffer size in ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,l.kt)("h3",{id:"max_thrift_frame_size-int"},"max_thrift_frame_size ","[int]"),(0,l.kt)("p",null,"Thrift max frame size in ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,l.kt)("h3",{id:"zone_id-string"},"zone_id ","[string]"),(0,l.kt)("p",null,"java.time.ZoneId in ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,l.kt)("h3",{id:"enable_rpc_compression-boolean"},"enable_rpc_compression ","[boolean]"),(0,l.kt)("p",null,"Enable rpc compression in ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,l.kt)("h3",{id:"connection_timeout_in_ms-int"},"connection_timeout_in_ms ","[int]"),(0,l.kt)("p",null,"The maximum time (in ms) to wait when connecting to ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"case1"},"Case1"),(0,l.kt)("p",null,"Common options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = ["localhost:6667"]\n    username = "root"\n    password = "root"\n    batch_size = 1024\n    batch_interval_ms = 1000\n  }\n}\n')),(0,l.kt)("p",null,"When you assign ",(0,l.kt)("inlineCode",{parentName:"p"},"key_device"),"  is ",(0,l.kt)("inlineCode",{parentName:"p"},"device_name"),", for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    ...\n    key_device = "device_name"\n  }\n}\n')),(0,l.kt)("p",null,"Upstream SeaTunnelRow data format is the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"device_name"),(0,l.kt)("th",{parentName:"tr",align:null},"field_1"),(0,l.kt)("th",{parentName:"tr",align:null},"field_2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,l.kt)("td",{parentName:"tr",align:null},"1001"),(0,l.kt)("td",{parentName:"tr",align:null},"1002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,l.kt)("td",{parentName:"tr",align:null},"2001"),(0,l.kt)("td",{parentName:"tr",align:null},"2002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,l.kt)("td",{parentName:"tr",align:null},"3001"),(0,l.kt)("td",{parentName:"tr",align:null},"3002")))),(0,l.kt)("p",null,"Output to ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+-----------+----------+\n|                    Time|                  Device|   field_1|    field_2|\n+------------------------+------------------------+----------+-----------+\n|2022-09-26T17:50:01.201Z|root.test_group.device_a|      1001|       1002|\n|2022-09-26T17:50:01.202Z|root.test_group.device_b|      2001|       2002|\n|2022-09-26T17:50:01.203Z|root.test_group.device_c|      3001|       3002|\n+------------------------+------------------------+----------+-----------+\n")),(0,l.kt)("h3",{id:"case2"},"Case2"),(0,l.kt)("p",null,"When you assign ",(0,l.kt)("inlineCode",{parentName:"p"},"key_device"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"key_timestamp"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"key_measurement_fields"),", for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    ...\n    key_device = "device_name"\n    key_timestamp = "ts"\n    key_measurement_fields = ["temperature", "moisture"]\n  }\n}\n')),(0,l.kt)("p",null,"Upstream SeaTunnelRow data format is the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ts"),(0,l.kt)("th",{parentName:"tr",align:null},"device_name"),(0,l.kt)("th",{parentName:"tr",align:null},"field_1"),(0,l.kt)("th",{parentName:"tr",align:null},"field_2"),(0,l.kt)("th",{parentName:"tr",align:null},"temperature"),(0,l.kt)("th",{parentName:"tr",align:null},"moisture"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,l.kt)("td",{parentName:"tr",align:null},"1001"),(0,l.kt)("td",{parentName:"tr",align:null},"1002"),(0,l.kt)("td",{parentName:"tr",align:null},"36.1"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,l.kt)("td",{parentName:"tr",align:null},"2001"),(0,l.kt)("td",{parentName:"tr",align:null},"2002"),(0,l.kt)("td",{parentName:"tr",align:null},"36.2"),(0,l.kt)("td",{parentName:"tr",align:null},"101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,l.kt)("td",{parentName:"tr",align:null},"3001"),(0,l.kt)("td",{parentName:"tr",align:null},"3002"),(0,l.kt)("td",{parentName:"tr",align:null},"36.3"),(0,l.kt)("td",{parentName:"tr",align:null},"102")))),(0,l.kt)("p",null,"Output to ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT * FROM root.test_group.* align by device;\n+------------------------+------------------------+--------------+-----------+\n|                    Time|                  Device|   temperature|   moisture|\n+------------------------+------------------------+--------------+-----------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100|\n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102|\n+------------------------+------------------------+--------------+-----------+\n")),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add IoTDB Sink Connector")),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Improve IoTDB Sink Connector (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2917"},"2917"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Support align by sql syntax"),(0,l.kt)("li",{parentName:"ul"},"Support sql split ignore case"),(0,l.kt)("li",{parentName:"ul"},"Support restore split offset to at-least-once"),(0,l.kt)("li",{parentName:"ul"},"Support read timestamp from RowRecord"))),(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix IoTDB connector sink NPE (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3080"},"3080"),")")))}k.isMDXComponent=!0}}]);