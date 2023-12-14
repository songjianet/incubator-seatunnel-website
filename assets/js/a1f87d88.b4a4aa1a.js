"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31094],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74095:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],s={sidebar_position:7},i=void 0,u={unversionedId:"seatunnel-engine/rest-api",id:"seatunnel-engine/rest-api",title:"rest-api",description:"----------------",source:"@site/docs/seatunnel-engine/rest-api.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/rest-api",permalink:"/docs/seatunnel-engine/rest-api",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/rest-api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"checkpoint-storage",permalink:"/docs/seatunnel-engine/checkpoint-storage"},next:{title:"tcp",permalink:"/docs/seatunnel-engine/tcp"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Returns an overview over all jobs and their current state.",id:"returns-an-overview-over-all-jobs-and-their-current-state",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"Return details of a job.",id:"return-details-of-a-job",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"Return all finished Jobs Info.",id:"return-all-finished-jobs-info",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"Returns system monitoring information.",id:"returns-system-monitoring-information",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4},{value:"Submit Job.",id:"submit-job",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses-4",level:4},{value:"Stop Job.",id:"stop-job",level:3},{value:"Body",id:"body-1",level:4},{value:"Responses",id:"responses-5",level:4},{value:"Encrypt Config.",id:"encrypt-config",level:3},{value:"Body",id:"body-2",level:4},{value:"Responses",id:"responses-6",level:4}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"rest-api"},"REST API"),(0,l.kt)("p",null,"SeaTunnel has a monitoring API that can be used to query status and statistics of running jobs, as well as recent\ncompleted jobs. The monitoring API is a REST-ful API that accepts HTTP requests and responds with JSON data."),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The monitoring API is backed by a web server that runs as part of the node, each node member can provide rest api capability.\nBy default, this server listens at port 5801, which can be configured in hazelcast.yaml like :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n    rest-api:\n      enabled: true\n      endpoint-groups:\n        CLUSTER_WRITE:\n          enabled: true\n        DATA:\n          enabled: true\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - localhost\n    port:\n      auto-increment: true\n      port-count: 100\n      port: 5801\n")),(0,l.kt)("h2",{id:"api-reference"},"API reference"),(0,l.kt)("h3",{id:"returns-an-overview-over-all-jobs-and-their-current-state"},"Returns an overview over all jobs and their current state."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"GET")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/running-jobs"))," ",(0,l.kt)("code",null,"(Returns an overview over all jobs and their current state.)")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("h4",{id:"responses"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "envOptions": {\n    },\n    "createTime": "",\n    "jobDag": {\n      "vertices": [\n      ],\n      "edges": [\n      ]\n    },\n    "pluginJarsUrls": [\n    ],\n    "isStartWithSavePoint": false,\n    "metrics": {\n      "sourceReceivedCount": "",\n      "sinkWriteCount": ""\n    }\n  }\n]\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"return-details-of-a-job"},"Return details of a job."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"GET")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/running-job/:jobId"))," ",(0,l.kt)("code",null,"(Return details of a job.)")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("blockquote",null,(0,l.kt)("table",{parentName:"blockquote"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"data type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobId"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"job id"))))),(0,l.kt)("h4",{id:"responses-1"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "",\n  "jobName": "",\n  "jobStatus": "",\n  "envOptions": {\n  },\n  "createTime": "",\n  "jobDag": {\n    "vertices": [\n    ],\n    "edges": [\n    ]\n  },\n  "pluginJarsUrls": [\n  ],\n  "isStartWithSavePoint": false,\n  "metrics": {\n    "sourceReceivedCount": "",\n    "sinkWriteCount": ""\n  }\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"return-all-finished-jobs-info"},"Return all finished Jobs Info."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"GET")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/finished-jobs-info/:state"))," ",(0,l.kt)("code",null,"(Return all finished Jobs Info.)")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("blockquote",null,(0,l.kt)("table",{parentName:"blockquote"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"data type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"finished job status. ",(0,l.kt)("inlineCode",{parentName:"td"},"FINISHED"),",",(0,l.kt)("inlineCode",{parentName:"td"},"CANCELED"),",",(0,l.kt)("inlineCode",{parentName:"td"},"FAILED"),",",(0,l.kt)("inlineCode",{parentName:"td"},"UNKNOWABLE")))))),(0,l.kt)("h4",{id:"responses-2"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "jobId": "",\n    "jobName": "",\n    "jobStatus": "",\n    "errorMsg": null,\n    "createTime": "",\n    "finishTime": "",\n    "jobDag": "",\n    "metrics": ""\n  }\n]\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"returns-system-monitoring-information"},"Returns system monitoring information."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"GET")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/system-monitoring-information"))," ",(0,l.kt)("code",null,"(Returns system monitoring information.)")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("h4",{id:"responses-3"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processors":"8",\n    "physical.memory.total":"16.0G",\n    "physical.memory.free":"16.3M",\n    "swap.space.total":"0",\n    "swap.space.free":"0",\n    "heap.memory.used":"135.7M",\n    "heap.memory.free":"440.8M",\n    "heap.memory.total":"576.5M",\n    "heap.memory.max":"3.6G",\n    "heap.memory.used/total":"23.54%",\n    "heap.memory.used/max":"3.73%",\n    "minor.gc.count":"6",\n    "minor.gc.time":"110ms",\n    "major.gc.count":"2",\n    "major.gc.time":"73ms",\n    "load.process":"24.78%",\n    "load.system":"60.00%",\n    "load.systemAverage":"2.07",\n    "thread.count":"117",\n    "thread.peakCount":"118",\n    "cluster.timeDiff":"0",\n    "event.q.size":"0",\n    "executor.q.async.size":"0",\n    "executor.q.client.size":"0",\n    "executor.q.client.query.size":"0",\n    "executor.q.client.blocking.size":"0",\n    "executor.q.query.size":"0",\n    "executor.q.scheduled.size":"0",\n    "executor.q.io.size":"0",\n    "executor.q.system.size":"0",\n    "executor.q.operations.size":"0",\n    "executor.q.priorityOperation.size":"0",\n    "operations.completed.count":"10",\n    "executor.q.mapLoad.size":"0",\n    "executor.q.mapLoadAllKeys.size":"0",\n    "executor.q.cluster.size":"0",\n    "executor.q.response.size":"0",\n    "operations.running.count":"0",\n    "operations.pending.invocations.percentage":"0.00%",\n    "operations.pending.invocations.count":"0",\n    "proxy.count":"8",\n    "clientEndpoint.count":"0",\n    "connection.active.count":"2",\n    "client.connection.count":"0",\n    "connection.count":"0"\n  }\n]\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"submit-job"},"Submit Job."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"POST")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/submit-job"))," ",(0,l.kt)("code",null,"(Returns jobId and jobName if job submitted successfully.)")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("blockquote",null,(0,l.kt)("table",{parentName:"blockquote"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"data type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobId"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"job id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobName"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"job name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isStartWithSavePoint"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"if job is started with save point"))))),(0,l.kt)("h4",{id:"body"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "job.mode": "batch"\n    },\n    "source": [\n        {\n            "plugin_name": "FakeSource",\n            "result_table_name": "fake",\n            "row.num": 100,\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int",\n                    "card": "int"\n                }\n            }\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Console",\n            "source_table_name": ["fake"]\n        }\n    ]\n}\n')),(0,l.kt)("h4",{id:"responses-4"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "jobName": "rest_api_test"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"stop-job"},"Stop Job."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"POST")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/stop-job"))," ",(0,l.kt)("code",null,"(Returns jobId if job stoped successfully.)")),(0,l.kt)("h4",{id:"body-1"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jobId": 733584788375666689,\n    "isStopWithSavePoint": false # if job is stopped with save point\n}\n')),(0,l.kt)("h4",{id:"responses-5"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n"jobId": 733584788375666689\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"encrypt-config"},"Encrypt Config."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"POST")," ",(0,l.kt)("code",null,(0,l.kt)("b",null,"/hazelcast/rest/maps/encrypt-config"))," ",(0,l.kt)("code",null,"(Returns the encrypted config if config is encrypted successfully.)")),"For more information about customize encryption, please refer to the documentation [config-encryption-decryption](/docs/connector-v2/Config-Encryption-Decryption).",(0,l.kt)("h4",{id:"body-2"},"Body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "execution.parallelism": 1,\n        "shade.identifier":"base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema" : {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "seatunnel",\n            "password": "seatunnel_password",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [\n    ],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "seatunnel",\n            "password": "seatunnel_password"\n        }\n    ]\n}\n')),(0,l.kt)("h4",{id:"responses-6"},"Responses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "env": {\n        "execution.parallelism": 1,\n        "shade.identifier": "base64"\n    },\n    "source": [\n        {\n            "plugin_name": "MySQL-CDC",\n            "schema": {\n                "fields": {\n                    "name": "string",\n                    "age": "int"\n                }\n            },\n            "result_table_name": "fake",\n            "parallelism": 1,\n            "hostname": "127.0.0.1",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk",\n            "table-name": "inventory_vwyw0n"\n        }\n    ],\n    "transform": [],\n    "sink": [\n        {\n            "plugin_name": "Clickhouse",\n            "host": "localhost:8123",\n            "database": "default",\n            "table": "fake_all",\n            "username": "c2VhdHVubmVs",\n            "password": "c2VhdHVubmVsX3Bhc3N3b3Jk"\n        }\n    ]\n}\n'))))}m.isMDXComponent=!0}}]);