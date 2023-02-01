"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1688],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={},s="SelectDB Cloud",u={unversionedId:"connector-v2/sink/SelectDB-Cloud",id:"connector-v2/sink/SelectDB-Cloud",title:"SelectDB Cloud",description:"SelectDB Cloud sink connector",source:"@site/docs/connector-v2/sink/SelectDB-Cloud.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SelectDB-Cloud",permalink:"/docs/connector-v2/sink/SelectDB-Cloud",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/SelectDB-Cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/docs/connector-v2/sink/S3File"},next:{title:"Sentry",permalink:"/docs/connector-v2/sink/Sentry"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"load-url string",id:"load-url-string",level:3},{value:"jdbc-url string",id:"jdbc-url-string",level:3},{value:"cluster-name string",id:"cluster-name-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"table.identifier string",id:"tableidentifier-string",level:3},{value:"sink.properties string",id:"sinkproperties-string",level:3},{value:"sink.buffer-size string",id:"sinkbuffer-size-string",level:3},{value:"sink.buffer-count string",id:"sinkbuffer-count-string",level:3},{value:"sink.max-retries string",id:"sinkmax-retries-string",level:3},{value:"sink.check-interval string",id:"sinkcheck-interval-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"selectdb-cloud"},"SelectDB Cloud"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"SelectDB Cloud sink connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Used to send data to SelectDB Cloud. Both support streaming and batch mode.\nThe internal implementation of SelectDB Cloud sink connector upload after batch caching and commit the CopyInto sql to load data into the table."),(0,a.kt)("h2",{id:"key-features"},"Key features"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,a.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,a.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"load-url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jdbc-url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster-name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"table.identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selectdb.config"),(0,a.kt)("td",{parentName:"tr",align:null},"map"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1024*1024 (1MB)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.check-interval"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"10000")))),(0,a.kt)("h3",{id:"load-url-string"},"load-url ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse http address, the format is ",(0,a.kt)("inlineCode",{parentName:"p"},"warehouse_ip:http_port")),(0,a.kt)("h3",{id:"jdbc-url-string"},"jdbc-url ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," warehouse jdbc address, the format is ",(0,a.kt)("inlineCode",{parentName:"p"},"warehouse_ip:mysql_port")),(0,a.kt)("h3",{id:"cluster-name-string"},"cluster-name ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," cluster name"),(0,a.kt)("h3",{id:"username-string"},"username ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user username"),(0,a.kt)("h3",{id:"password-string"},"password ","[string]"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," user password"),(0,a.kt)("h3",{id:"tableidentifier-string"},"table.identifier ","[string]"),(0,a.kt)("p",null,"The name of ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectDB Cloud")," table, the format is ",(0,a.kt)("inlineCode",{parentName:"p"},"database.table")),(0,a.kt)("h3",{id:"sinkproperties-string"},"sink.properties ","[string]"),(0,a.kt)("p",null,"Write property configuration\nCSV Write\uff1a\nselectdb.config {\nfile.type='csv'\nfile.column_separator=','\nfile.line_delimiter='\\n'\n}\nJSON Write:\nselectdb.config {\nfile.type=\"json\"\nfile.strip_outer_array=\"false\"\n}"),(0,a.kt)("h3",{id:"sinkbuffer-size-string"},"sink.buffer-size ","[string]"),(0,a.kt)("p",null,"Write data cache buffer size, unit byte. The default is 1 MB, and it is not recommended to modify it."),(0,a.kt)("h3",{id:"sinkbuffer-count-string"},"sink.buffer-count ","[string]"),(0,a.kt)("p",null,"The number of write data cache buffers, the default is 3, it is not recommended to modify."),(0,a.kt)("h3",{id:"sinkmax-retries-string"},"sink.max-retries ","[string]"),(0,a.kt)("p",null,"The maximum number of retries in the Commit phase, the default is 1."),(0,a.kt)("h3",{id:"sinkcheck-interval-string"},"sink.check-interval ","[string]"),(0,a.kt)("p",null,"Periodic interval for writing files, in milliseconds, default 10 seconds."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Use JSON format to import data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type="json"\n        file.strip_outer_array="false"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Use CSV format to import data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sink {\n  SelectDBCloud {\n    load-url="warehouse_ip:http_port"\n    jdbc-url="warehouse_ip:mysql_port"\n    cluster-name="Cluster"\n    table.identifier="test.test"\n    username="admin"\n    password="******"\n    selectdb.config {\n        file.type=\'csv\' \n        file.column_separator=\',\' \n        file.line_delimiter=\'\\n\' \n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"next-version"},"next version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[Feature]"," Support SelectDB Cloud Sink Connector ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3958"},"3958"))))}m.isMDXComponent=!0}}]);