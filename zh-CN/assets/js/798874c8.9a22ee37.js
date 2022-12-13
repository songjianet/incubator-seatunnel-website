"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3581],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7295:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={},s="ClickhouseFile",d={unversionedId:"connector-v2/sink/ClickhouseFile",id:"connector-v2/sink/ClickhouseFile",title:"ClickhouseFile",description:"Clickhouse file sink connector",source:"@site/docs/connector-v2/sink/ClickhouseFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/ClickhouseFile",permalink:"/zh-CN/docs/connector-v2/sink/ClickhouseFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/ClickhouseFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse"},next:{title:"Console",permalink:"/zh-CN/docs/connector-v2/sink/Console"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"clickhouse_local_path string",id:"clickhouse_local_path-string",level:3},{value:"copy_method string",id:"copy_method-string",level:3},{value:"node_free_password boolean",id:"node_free_password-boolean",level:3},{value:"node_pass list",id:"node_pass-list",level:3},{value:"node_pass.node_address string",id:"node_passnode_address-string",level:3},{value:"node_pass.username string",id:"node_passusername-string",level:3},{value:"node_pass.password string",id:"node_passpassword-string",level:3},{value:"compatible_mode boolean",id:"compatible_mode-boolean",level:3},{value:"file_fields_delimiter string",id:"file_fields_delimiter-string",level:3},{value:"file_temp_path string",id:"file_temp_path-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"Next version",id:"next-version",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickhousefile"},"ClickhouseFile"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Clickhouse file sink connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Generate the clickhouse data file with the clickhouse-local program, and then send it to the clickhouse\nserver, also call bulk load. This connector only support clickhouse table which engine is 'Distributed'.And ",(0,r.kt)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Supports Batch and Streaming mode."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Write data to Clickhouse can also be done using JDBC"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse_local_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sharding_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"scp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_free_password"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_pass"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_pass.node_address"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_pass.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"root"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"node_pass.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compatible_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_fields_delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"\\t"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_temp_path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'"/tmp/seatunnel/clickhouse-local/file"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"host-string"},"host ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,r.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,r.kt)("h3",{id:"database-string"},"database ","[string]"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," database"),(0,r.kt)("h3",{id:"table-string"},"table ","[string]"),(0,r.kt)("p",null,"The table name"),(0,r.kt)("h3",{id:"username-string"},"username ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user username"),(0,r.kt)("h3",{id:"password-string"},"password ","[string]"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," user password"),(0,r.kt)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,r.kt)("p",null,"When ClickhouseFile split data, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. "),(0,r.kt)("h3",{id:"clickhouse_local_path-string"},"clickhouse_local_path ","[string]"),(0,r.kt)("p",null,"The address of the clickhouse-local program on the spark node. Since each task needs to be called,\nclickhouse-local should be located in the same path of each spark node."),(0,r.kt)("h3",{id:"copy_method-string"},"copy_method ","[string]"),(0,r.kt)("p",null,"Specifies the method used to transfer files, the default is scp, optional scp and rsync"),(0,r.kt)("h3",{id:"node_free_password-boolean"},"node_free_password ","[boolean]"),(0,r.kt)("p",null,"Because seatunnel need to use scp or rsync for file transfer, seatunnel need clickhouse server-side access.\nIf each spark node and clickhouse server are configured with password-free login,\nyou can configure this option to true, otherwise you need to configure the corresponding node password in the node_pass configuration"),(0,r.kt)("h3",{id:"node_pass-list"},"node_pass ","[list]"),(0,r.kt)("p",null,"Used to save the addresses and corresponding passwords of all clickhouse servers"),(0,r.kt)("h3",{id:"node_passnode_address-string"},"node_pass.node_address ","[string]"),(0,r.kt)("p",null,"The address corresponding to the clickhouse server"),(0,r.kt)("h3",{id:"node_passusername-string"},"node_pass.username ","[string]"),(0,r.kt)("p",null,"The username corresponding to the clickhouse server, default root user."),(0,r.kt)("h3",{id:"node_passpassword-string"},"node_pass.password ","[string]"),(0,r.kt)("p",null,"The password corresponding to the clickhouse server."),(0,r.kt)("h3",{id:"compatible_mode-boolean"},"compatible_mode ","[boolean]"),(0,r.kt)("p",null,"In the lower version of Clickhouse, the ClickhouseLocal program does not support the ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," parameter,\nyou need to use this mode to take other ways to realize the ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," parameter function"),(0,r.kt)("h3",{id:"file_fields_delimiter-string"},"file_fields_delimiter ","[string]"),(0,r.kt)("p",null,"ClickhouseFile uses csv format to temporarily save data. If the data in the row contains the delimiter value\nof csv, it may cause program exceptions.\nAvoid this with this configuration. Value string has to be an exactly one character long"),(0,r.kt)("h3",{id:"file_temp_path-string"},"file_temp_path ","[string]"),(0,r.kt)("p",null,"The directory where ClickhouseFile stores temporary files locally."),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'  ClickhouseFile {\n    host = "192.168.0.1:8123"\n    database = "default"\n    table = "fake_all"\n    username = "default"\n    password = ""\n    clickhouse_local_path = "/Users/seatunnel/Tool/clickhouse local"\n    sharding_key = "age"\n    node_free_password = false\n    node_pass = [{\n      node_address = "192.168.0.1"\n      password = "seatunnel"\n    }]\n  }\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support write data to ClickHouse File and move to ClickHouse data dir")),(0,r.kt)("h3",{id:"next-version"},"Next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[BugFix]"," Fix generated data part name conflict and improve file commit logic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3416"},"3416")),(0,r.kt)("li",{parentName:"ul"},"[Feature]"," Support compatible_mode compatible with lower version Clickhouse  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3416"},"3416"))))}m.isMDXComponent=!0}}]);