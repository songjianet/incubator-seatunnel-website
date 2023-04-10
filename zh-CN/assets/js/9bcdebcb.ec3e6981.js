"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[24462],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="SelectDB Cloud",u={unversionedId:"connector-v2/sink/SelectDB-Cloud",id:"version-2.3.1/connector-v2/sink/SelectDB-Cloud",title:"SelectDB Cloud",description:"SelectDB Cloud sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/SelectDB-Cloud.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SelectDB-Cloud",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/SelectDB-Cloud",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/SelectDB-Cloud.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/S3File"},next:{title:"Sentry",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Sentry"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"load-url string",id:"load-url-string",level:3},{value:"jdbc-url string",id:"jdbc-url-string",level:3},{value:"cluster-name string",id:"cluster-name-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"table.identifier string",id:"tableidentifier-string",level:3},{value:"sink.enable-delete string",id:"sinkenable-delete-string",level:3},{value:"selectdb.config map",id:"selectdbconfig-map",level:3},{value:"sink.buffer-size string",id:"sinkbuffer-size-string",level:3},{value:"sink.buffer-count string",id:"sinkbuffer-count-string",level:3},{value:"sink.max-retries string",id:"sinkmax-retries-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"selectdb-cloud"},"SelectDB Cloud"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SelectDB Cloud sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Used to send data to SelectDB Cloud. Both support streaming and batch mode.\nThe internal implementation of SelectDB Cloud sink connector upload after batch caching and commit the CopyInto sql to load data into the table."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Version Supported"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"supported  ",(0,l.kt)("inlineCode",{parentName:"li"},"SelectDB Cloud version is >= 2.2.x"))))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"cdc"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load-url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jdbc-url"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectdb.config"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10 ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024 (1MB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("h3",{id:"load-url-string"},"load-url ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse http address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"warehouse_ip:http_port")),(0,l.kt)("h3",{id:"jdbc-url-string"},"jdbc-url ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse jdbc address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"warehouse_ip:mysql_port")),(0,l.kt)("h3",{id:"cluster-name-string"},"cluster-name ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," cluster name"),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user password"),(0,l.kt)("h3",{id:"tableidentifier-string"},"table.identifier ","[string]"),(0,l.kt)("p",null,"The name of ",(0,l.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," table, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"database.table")),(0,l.kt)("h3",{id:"sinkenable-delete-string"},"sink.enable-delete ","[string]"),(0,l.kt)("p",null,"Whether to enable deletion. This option requires SelectDB Cloud table to enable batch delete function, and only supports Unique model."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";')),(0,l.kt)("h3",{id:"selectdbconfig-map"},"selectdb.config ","[map]"),(0,l.kt)("p",null,"Write property configuration"),(0,l.kt)("p",null,"CSV Write\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'selectdb.config {\n    file.type="csv"\n    file.column_separator=","\n    file.line_delimiter="\\n"\n}\n')),(0,l.kt)("p",null,"JSON Write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'selectdb.config {\n    file.type="json"\n}\n')),(0,l.kt)("h3",{id:"sinkbuffer-size-string"},"sink.buffer-size ","[string]"),(0,l.kt)("p",null,"The maximum capacity of the cache, in bytes, that is flushed to the object storage. The default is 10MB. it is not recommended to modify it."),(0,l.kt)("h3",{id:"sinkbuffer-count-string"},"sink.buffer-count ","[string]"),(0,l.kt)("p",null,"Maximum number of entries flushed to the object store. The default value is 10000. it is not recommended to modify."),(0,l.kt)("h3",{id:"sinkmax-retries-string"},"sink.max-retries ","[string]"),(0,l.kt)("p",null,"The maximum number of retries in the Commit phase, the default is 3."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Use JSON format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type="json"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Use CSV format to import data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type="csv"\n        file.column_separator="," \n        file.line_delimiter="\\n" \n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Feature]"," Support SelectDB Cloud Sink Connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3958"},"3958")),(0,l.kt)("li",{parentName:"ul"},"[Improve]"," Refactor some SelectDB Cloud Sink code as well as support copy into batch and async flush and cdc ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/4312"},"4312"))))}m.isMDXComponent=!0}}]);