"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8834],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=l,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:e},s),{},{components:n})):r.createElement(g,o({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2369:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},u="IoTDB",p={unversionedId:"connector-v2/source/IoTDB",id:"connector-v2/source/IoTDB",title:"IoTDB",description:"IoTDB source connector",source:"@site/docs/connector-v2/source/IoTDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/IoTDB",permalink:"/docs/connector-v2/source/IoTDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/IoTDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/docs/connector-v2/source/Hudi"},next:{title:"JDBC",permalink:"/docs/connector-v2/source/Jdbc"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"single node, you need to set host and port to connect to the remote data source.",id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source",level:3},{value:"multi node, you need to set node_urls to connect to the remote data source.",id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source",level:3},{value:"other parameters",id:"other-parameters",level:3},{value:"fields string",id:"fields-string",level:3},{value:"option parameters",id:"option-parameters",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"num_partitions int",id:"num_partitions-int",level:3},{value:"thrift_default_buffer_size int",id:"thrift_default_buffer_size-int",level:3},{value:"enable_cache_leader boolean",id:"enable_cache_leader-boolean",level:3},{value:"version string",id:"version-string",level:3},{value:"split partitions",id:"split-partitions",level:3},{value:"num_partitions int",id:"num_partitions-int-1",level:4},{value:"upper_bound long",id:"upper_bound-long-1",level:3},{value:"lower_bound long",id:"lower_bound-long-1",level:3}],c={toc:d};function m(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iotdb"},"IoTDB"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IoTDB source connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Read external data source data through IoTDB. Currently supports Batch mode."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"port"),(0,a.kt)("td",{parentName:"tr",align:null},"Int"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sql"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fields"),(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fetch_size"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lower_bound"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"upper_bound"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"num_partitions"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"thrift_default_buffer_size"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable_cache_leader"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source"},"single node, you need to set host and port to connect to the remote data source."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"host")," ","[string]"," the host of the IoTDB when you select host of the IoTDB"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"port")," ","[int]"," the port of the IoTDB when you select"),(0,a.kt)("h3",{id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source"},"multi node, you need to set node_urls to connect to the remote data source."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"node_urls")," ","[string]"," the node_urls of the IoTDB when you select"),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-127.0.0.1:8080,127.0.0.2:8080"},"")),(0,a.kt)("h3",{id:"other-parameters"},"other parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sql")," ","[string]","\nexecute sql statement e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select name,age from test\n")),(0,a.kt)("h3",{id:"fields-string"},"fields ","[string]"),(0,a.kt)("p",null,"the fields of the IoTDB when you select"),(0,a.kt)("p",null,"the field type is SeaTunnel field type ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.table.type.SqlType")),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fields{\n    name=STRING\n    age=INT\n    }\n")),(0,a.kt)("h3",{id:"option-parameters"},"option parameters"),(0,a.kt)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,a.kt)("p",null,"the fetch_size of the IoTDB when you select"),(0,a.kt)("h3",{id:"username-string"},"username ","[string]"),(0,a.kt)("p",null,"the username of the IoTDB when you select"),(0,a.kt)("h3",{id:"password-string"},"password ","[string]"),(0,a.kt)("p",null,"the password of the IoTDB when you select"),(0,a.kt)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,a.kt)("p",null,"the lower_bound of the IoTDB when you select"),(0,a.kt)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,a.kt)("p",null,"the upper_bound of the IoTDB when you select"),(0,a.kt)("h3",{id:"num_partitions-int"},"num_partitions ","[int]"),(0,a.kt)("p",null,"the num_partitions of the IoTDB when you select"),(0,a.kt)("h3",{id:"thrift_default_buffer_size-int"},"thrift_default_buffer_size ","[int]"),(0,a.kt)("p",null,"the thrift_default_buffer_size of the IoTDB when you select"),(0,a.kt)("h3",{id:"enable_cache_leader-boolean"},"enable_cache_leader ","[boolean]"),(0,a.kt)("p",null,"enable_cache_leader of the IoTDB when you select"),(0,a.kt)("h3",{id:"version-string"},"version ","[string]"),(0,a.kt)("p",null,"Version represents the SQL semantic version used by the client, which is used to be compatible with the SQL semantics of\n0.12 when upgrading 0.13. The possible values are: V_0_12, V_0_13."),(0,a.kt)("h3",{id:"split-partitions"},"split partitions"),(0,a.kt)("p",null,"we can split the partitions of the IoTDB and we used time column split"),(0,a.kt)("h4",{id:"num_partitions-int-1"},"num_partitions ","[int]"),(0,a.kt)("p",null,"split num"),(0,a.kt)("h3",{id:"upper_bound-long-1"},"upper_bound ","[long]"),(0,a.kt)("p",null,"upper bound of the time column"),(0,a.kt)("h3",{id:"lower_bound-long-1"},"lower_bound ","[long]"),(0,a.kt)("p",null,"lower bound of the time column"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'     split the time range into numPartitions parts\n     if numPartitions is 1, use the whole time range\n     if numPartitions < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, numPartitions = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test  where (time >= 1 and time < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test  where (time >= 6 and time < 11) and (  age > 0 and age < 10 )\n\n')))}m.isMDXComponent=!0}}]);