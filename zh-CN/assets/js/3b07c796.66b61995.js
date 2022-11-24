"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1264],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={},s="Redis",p={unversionedId:"connector-v2/source/Redis",id:"connector-v2/source/Redis",title:"Redis",description:"Redis source connector",source:"@site/docs/connector-v2/source/Redis.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Redis",permalink:"/zh-CN/docs/connector-v2/source/Redis",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rabbitmq",permalink:"/zh-CN/docs/connector-v2/source/Rabbitmq"},next:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/source/S3File"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"hash_key_parse_mode string",id:"hash_key_parse_mode-string",level:3},{value:"keys string",id:"keys-string",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"user string",id:"user-string",level:3},{value:"auth string",id:"auth-string",level:3},{value:"mode string",id:"mode-string",level:3},{value:"nodes list",id:"nodes-list",level:3},{value:"format string",id:"format-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"next version",id:"next-version",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"redis"},"Redis"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Redis source connector")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to read data from Redis."),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keys"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"single")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash_key_parse_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"all")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"yes when mode=cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"yes when format=json"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"host-string"},"host ","[string]"),(0,r.kt)("p",null,"redis host"),(0,r.kt)("h3",{id:"port-int"},"port ","[int]"),(0,r.kt)("p",null,"redis port"),(0,r.kt)("h3",{id:"hash_key_parse_mode-string"},"hash_key_parse_mode ","[string]"),(0,r.kt)("p",null,"hash key parse mode, support ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," ",(0,r.kt)("inlineCode",{parentName:"p"},"kv"),", used to tell connector how to parse hash key."),(0,r.kt)("p",null,"when setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),", connector will treat the value of hash key as a row and use the schema config to parse it, when setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"kv"),", connector will treat each kv in hash key as a row and use the schema config to parse it:"),(0,r.kt)("p",null,"for example, if the value of hash key is the following shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'{ \n  "001": {\n    "name": "tyrantlucifer",\n    "age": 26\n  },\n  "002": {\n    "name": "Zongwen",\n    "age": 26\n  }\n}\n\n')),(0,r.kt)("p",null,"if hash_key_parse_mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," and schema config as the following shown, it will generate the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n  fields {\n    001 {\n      name = string\n      age = int\n    }\n    002 {\n      name = string\n      age = int\n    }\n  }\n}\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"001"),(0,r.kt)("th",{parentName:"tr",align:null},"002"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Row(name=tyrantlucifer, age=26)"),(0,r.kt)("td",{parentName:"tr",align:null},"Row(name=Zongwen, age=26)")))),(0,r.kt)("p",null,"if hash_key_parse_mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"kv")," and schema config as the following shown, it will generate the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n  fields {\n    hash_key = string\n    name = string\n    age = int\n  }\n}\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"hash_key"),(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"age"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"001"),(0,r.kt)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.kt)("td",{parentName:"tr",align:null},"26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"002"),(0,r.kt)("td",{parentName:"tr",align:null},"Zongwen"),(0,r.kt)("td",{parentName:"tr",align:null},"26")))),(0,r.kt)("p",null,"each kv that in hash key it will be treated as a row and send it to upstream."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips: connector will use the first field information of schema config as the field name of each k that in each kv")),(0,r.kt)("h3",{id:"keys-string"},"keys ","[string]"),(0,r.kt)("p",null,"keys pattern"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips:Redis source connector support fuzzy key matching, user needs to ensure that the matched keys are the same type")),(0,r.kt)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,r.kt)("p",null,"redis data types, support ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("inlineCode",{parentName:"p"},"zset")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"key",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The value of each key will be sent downstream as a single row of data.\nFor example, the value of key is ",(0,r.kt)("inlineCode",{parentName:"p"},"SeaTunnel test message"),", the data received downstream is ",(0,r.kt)("inlineCode",{parentName:"p"},"SeaTunnel test message")," and only one message will be received.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hash"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The hash key-value pairs will be formatted as json to be sent downstream as a single row of data.\nFor example, the value of hash is ",(0,r.kt)("inlineCode",{parentName:"p"},"name:tyrantlucifer age:26"),", the data received downstream is ",(0,r.kt)("inlineCode",{parentName:"p"},'{"name":"tyrantlucifer", "age":"26"}')," and only one message will be received."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"list"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Each element in the list will be sent downstream as a single row of data.\nFor example, the value of list is ",(0,r.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"set"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Each element in the set will be sent downstream as a single row of data\nFor example, the value of set is ",(0,r.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"zset"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Each element in the sorted set will be sent downstream as a single row of data\nFor example, the value of sorted set is ",(0,r.kt)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.kt)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received.")))),(0,r.kt)("h3",{id:"user-string"},"user ","[string]"),(0,r.kt)("p",null,"redis authentication user, you need it when you connect to an encrypted cluster"),(0,r.kt)("h3",{id:"auth-string"},"auth ","[string]"),(0,r.kt)("p",null,"redis authentication password, you need it when you connect to an encrypted cluster"),(0,r.kt)("h3",{id:"mode-string"},"mode ","[string]"),(0,r.kt)("p",null,"redis mode, ",(0,r.kt)("inlineCode",{parentName:"p"},"single")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster"),", default is ",(0,r.kt)("inlineCode",{parentName:"p"},"single")),(0,r.kt)("h3",{id:"nodes-list"},"nodes ","[list]"),(0,r.kt)("p",null,"redis nodes information, used in cluster mode, must like as the following format: "),(0,r.kt)("p",null,"[host1:port1, host2:port2]"),(0,r.kt)("h3",{id:"format-string"},"format ","[string]"),(0,r.kt)("p",null,"the format of upstream data, now only support ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),", default ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,r.kt)("p",null,"when you assign format is ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,r.kt)("p",null,"upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.kt)("p",null,"you should assign schema as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"data"),(0,r.kt)("th",{parentName:"tr",align:null},"success"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"get success"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"when you assign format is ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,r.kt)("p",null,"upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.kt)("p",null,"connector will generate data as the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,r.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.kt)("h4",{id:"fields-config"},"fields ","[config]"),(0,r.kt)("p",null,"the schema fields of redis data"),(0,r.kt)("h3",{id:"common-options"},"common options"),(0,r.kt)("p",null,"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'  Redis {\n    host = localhost\n    port = 6379\n    keys = "key_test*"\n    data_type = key\n    format = text\n  }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'  Redis {\n    host = localhost\n    port = 6379\n    keys = "key_test*"\n    data_type = key\n    format = json\n    schema {\n      fields {\n        name = string\n        age = int\n      }\n    }\n  }\n')),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Redis Source Connector")),(0,r.kt)("h3",{id:"next-version"},"next version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Improve]"," Support redis cluster mode connection and user authentication ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3188"},"3188"))))}c.isMDXComponent=!0}}]);